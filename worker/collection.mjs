const PREFIX = '/api/collection';
const FLOW_COOKIE = '__Host-collection-login';
const SESSION_COOKIE = '__Host-collection-session';
const SESSION_SECONDS = 30 * 24 * 60 * 60;
const encoder = new TextEncoder();

const now = () => Math.floor(Date.now() / 1000);
const base64url = bytes => btoa(String.fromCharCode(...bytes)).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
const randomToken = () => base64url(crypto.getRandomValues(new Uint8Array(32)));
const digest = async value => base64url(new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value))));
const cookie = (name, value, age) => `${name}=${value}; Path=/; Max-Age=${age}; HttpOnly; Secure; SameSite=Lax`;
const readCookie = (request, name) => request.headers.get('Cookie')?.split(';').map(part => part.trim())
  .find(part => part.startsWith(name + '='))?.slice(name.length + 1);

function json(data, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
}

function redirect(location, cookies = []) {
  const headers = new Headers({ Location: location, 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer' });
  for (const value of cookies) headers.append('Set-Cookie', value);
  return new Response(null, { status: 303, headers });
}

function favoritesPath(lang) {
  return lang === 'ru' || lang === 'en' ? `/${lang}/favorites/` : '/favorites/';
}

async function sessionFor(request, db) {
  const token = readCookie(request, SESSION_COOKIE);
  if (!token || !/^[\w-]{43}$/.test(token)) return null;
  const key = await digest(token);
  const row = await db.prepare('SELECT owner FROM collection_sessions WHERE token = ? AND expires > ?')
    .bind(key, now()).first();
  return row && { owner: row.owner, key };
}

async function beginLogin(url, env) {
  const state = randomToken();
  const verifier = randomToken();
  const lang = ['uk', 'ru', 'en'].includes(url.searchParams.get('lang')) ? url.searchParams.get('lang') : 'uk';
  const query = new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID,
    redirect_uri: url.origin + PREFIX + '/callback',
    response_type: 'code',
    scope: 'openid',
    state,
    code_challenge: await digest(verifier),
    code_challenge_method: 'S256',
  });
  return redirect('https://accounts.google.com/o/oauth2/v2/auth?' + query, [cookie(FLOW_COOKIE, `${state}.${verifier}.${lang}`, 600)]);
}

async function finishLogin(request, url, env, fetcher) {
  const [state, verifier, lang] = (readCookie(request, FLOW_COOKIE) ?? '').split('.');
  const clearFlow = cookie(FLOW_COOKIE, '', 0);
  const destination = favoritesPath(lang);
  const failure = () => redirect(destination + '?collection=signin-error', [clearFlow]);
  const code = url.searchParams.get('code');
  if (!/^[\w-]{43}$/.test(state) || !/^[\w-]{43}$/.test(verifier ?? '') || !code || url.searchParams.get('state') !== state) return failure();
  try {
    const response = await fetcher('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: env.GOOGLE_CLIENT_ID,
        client_secret: env.GOOGLE_CLIENT_SECRET,
        code,
        code_verifier: verifier,
        grant_type: 'authorization_code',
        redirect_uri: url.origin + PREFIX + '/callback',
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return failure();
    const { access_token: accessToken } = await response.json();
    if (typeof accessToken !== 'string' || !accessToken) return failure();
    const profile = await fetcher('https://openidconnect.googleapis.com/v1/userinfo', {
      headers: { Authorization: 'Bearer ' + accessToken },
      signal: AbortSignal.timeout(10000),
    });
    if (!profile.ok) return failure();
    const { sub } = await profile.json();
    if (typeof sub !== 'string' || !/^[\w-]{1,128}$/.test(sub)) return failure();
    const owner = await digest('google:' + sub);
    const token = randomToken();
    const key = await digest(token);
    const old = await sessionFor(request, env.COLLECTION_DB);
    await env.COLLECTION_DB.batch([
      env.COLLECTION_DB.prepare('DELETE FROM collection_sessions WHERE expires <= ? OR token = ?').bind(now(), old?.key ?? ''),
      env.COLLECTION_DB.prepare('INSERT INTO collection_sessions (token, owner, expires) VALUES (?, ?, ?)').bind(key, owner, now() + SESSION_SECONDS),
    ]);
    return redirect(destination, [clearFlow, cookie(SESSION_COOKIE, token, SESSION_SECONDS)]);
  } catch {
    return failure();
  }
}

function validChange(change) {
  if (!change || typeof change !== 'object' || typeof change.slug !== 'string' || !/^[a-z0-9-]{1,100}$/.test(change.slug)) return false;
  if (change.value === null || change.value === true) return true;
  const period = change.value;
  const year = new Date().getFullYear();
  return !!period && typeof period === 'object' && Number.isInteger(period.start) && period.start >= 1980 && period.start <= year &&
    typeof period.current === 'boolean' &&
    (period.end === undefined || (!period.current && Number.isInteger(period.end) && period.end >= period.start && period.end <= year));
}

async function readChanges(request) {
  if (!request.headers.get('Content-Type')?.startsWith('application/json') || !request.body) return null;
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let size = 0;
  let raw = '';
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > 64 * 1024) { await reader.cancel(); return null; }
    raw += decoder.decode(value, { stream: true });
  }
  try {
    const { changes, seed, owner } = JSON.parse(raw + decoder.decode());
    if (typeof owner !== 'string' || typeof seed !== 'boolean' || !Array.isArray(changes) || changes.length > 300 || !changes.every(validChange)) return null;
    return { changes, seed, owner };
  } catch {
    return null;
  }
}

async function syncCollection(db, owner, { changes, seed }) {
  const rows = changes.map(({ slug, value }) => {
    // Project the accepted fields before storing them.
    const data = value && value !== true ? { start: value.start, end: value.end, current: value.current } : value;
    return { slug, value: JSON.stringify(data) };
  });
  const selectChanges = `SELECT ?, json_extract(value, '$.slug'), json_extract(value, '$.value') FROM json_each(?) WHERE true`;
  const sql = seed
    ? 'INSERT OR IGNORE INTO collection_items (owner, slug, value) ' + selectChanges
    : 'INSERT INTO collection_items (owner, slug, value) ' + selectChanges + ' ON CONFLICT (owner, slug) DO UPDATE SET value = excluded.value';
  const statements = rows.length ? [db.prepare(sql).bind(owner, JSON.stringify(rows))] : [];
  statements.push(db.prepare("SELECT slug, value FROM collection_items WHERE owner = ? AND value != 'null'").bind(owner));
  const results = await db.batch(statements);
  return results.at(-1).results.map(({ slug, value }) => [slug, JSON.parse(value)]);
}

export async function handleCollection(request, env, fetcher = fetch) {
  const url = new URL(request.url);
  const path = url.pathname.slice(PREFIX.length);
  const configured = !!(env.COLLECTION_DB && env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET);
  if (!configured) return path === '/status' ? json({ available: false }) : json({ error: 'unavailable' }, 503);
  try {
    if (request.method === 'GET') {
      if (path === '/login') return beginLogin(url, env);
      if (path === '/callback') return finishLogin(request, url, env, fetcher);
      if (path === '/status') return json({ available: true, owner: (await sessionFor(request, env.COLLECTION_DB))?.owner ?? null });
    }
    if (request.method !== 'POST' || !['/sync', '/logout'].includes(path)) return json({ error: 'method' }, 405);
    if (request.headers.get('Origin') !== url.origin) return json({ error: 'origin' }, 403);
    const session = await sessionFor(request, env.COLLECTION_DB);
    if (path === '/logout') {
      if (session) await env.COLLECTION_DB.prepare('DELETE FROM collection_sessions WHERE token = ?').bind(session.key).run();
      const response = json({ ok: true });
      response.headers.set('Set-Cookie', cookie(SESSION_COOKIE, '', 0));
      return response;
    }
    if (!session) return json({ error: 'session' }, 401);
    const input = await readChanges(request);
    if (!input) return json({ error: 'invalid' }, 400);
    if (input.owner !== session.owner) return json({ error: 'session' }, 401);
    return json({ owner: session.owner, entries: await syncCollection(env.COLLECTION_DB, session.owner, input) });
  } catch {
    return json({ error: 'unavailable' }, 503);
  }
}
