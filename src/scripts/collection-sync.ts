import { ACCOUNT_COPY, CABINET_COPY, COLLECTION_COPY } from '../lib/ownership-copy';
import { PERIODS_KEY, readPeriods, validPeriod, type OwnershipPeriod } from '../lib/ownership-periods';
import { FAVORITES_CHANGED_EVENT, readFavorites, writeFavorites } from './favorites';

type Value = true | OwnershipPeriod;
type Entry = [string, Value];
type Snapshot = Map<string, Value>;
type Change = { slug: string; value: Value | null };
type Baseline = { owner: string; entries: Entry[] };

const API = '/api/collection';
const BASELINE_KEY = 'mobile-history:collection-sync';
const signInLinks = document.querySelectorAll<HTMLAnchorElement>('[data-collection-sign-in]');
const signOut = document.querySelector<HTMLButtonElement>('[data-collection-sign-out]');
const status = document.querySelector<HTMLElement>('[data-collection-sync-status]');
const mode = document.querySelector<HTMLElement>('[data-collection-account-mode]');
const name = document.querySelector<HTMLElement>('[data-collection-account-name]');
const indicators = document.querySelectorAll<HTMLElement>('[data-account-indicator]');
const note = document.querySelector<HTMLElement>('[data-collection-account-note]');
const locale = document.documentElement.lang;
const language = locale === 'uk' || locale === 'ru' ? locale : 'en';
const copy = COLLECTION_COPY[language];
const cabinet = CABINET_COPY[language];
const account = ACCOUNT_COPY[language];
let available = false;
let owner: string | null = null;
let givenName = '';
let running = false;
let signingOut = false;
let applyRemote = false;
let timer: ReturnType<typeof setTimeout> | undefined;
let accountCheck: AbortController | undefined;

function getBaseline(): Baseline | null {
  try {
    const value = JSON.parse(localStorage.getItem(BASELINE_KEY) ?? 'null');
    return value && typeof value.owner === 'string' && Array.isArray(value.entries) ? value : null;
  } catch {
    return null;
  }
}

function snapshot(): Snapshot {
  const periods = readPeriods();
  return new Map([...readFavorites()]
    .filter(slug => /^[a-z0-9-]{1,100}$/.test(slug))
    .map(slug => [slug, periods[slug] ?? true]));
}

function diff(previous: Snapshot, current: Snapshot): Change[] {
  return [...new Set([...previous.keys(), ...current.keys()])].flatMap(slug => {
    const before = previous.get(slug);
    const after = current.get(slug);
    const unchanged = before === after || (before && after && before !== true && after !== true &&
      before.start === after.start && before.end === after.end && before.current === after.current);
    return unchanged ? [] : [{ slug, value: after ?? null }];
  });
}

function renderAccount(message = '') {
  for (const link of signInLinks) link.hidden = !available || !!owner;
  if (signOut) signOut.hidden = !owner;
  if (status) status.textContent = message;
  const label = owner ? account.signedIn : account.signedOut;
  if (mode) mode.textContent = label;
  if (name) {
    name.textContent = owner ? givenName : '';
    name.hidden = !owner || !givenName;
  }
  for (const indicator of indicators) {
    indicator.hidden = !available;
    indicator.dataset.state = owner ? 'in' : 'out';
    indicator.title = label;
    indicator.firstElementChild!.textContent = label;
  }
  if (note) note.textContent = owner ? cabinet.connectedNote : available ? cabinet.availableNote : cabinet.localNote;
}

function schedule(delay = 400) {
  if (!owner || signingOut) return;
  clearTimeout(timer);
  timer = setTimeout(() => { void sync(); }, delay);
}

async function exchange(currentOwner: string) {
  if (signingOut || owner !== currentOwner) return;
  const baseline = getBaseline();
  const sameOwner = baseline?.owner === currentOwner;
  const before = snapshot();
  // Import existing anonymous records once. A different account starts from its server copy.
  const changes = !baseline || sameOwner ? diff(new Map(sameOwner ? baseline.entries : []), before) : [];
  const sent = changes.slice(0, 300);
  const response = await fetch(API + '/sync', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ owner: currentOwner, changes: sent, seed: !baseline }),
  });
  if (response.status === 401) {
    owner = null;
    renderAccount();
    return;
  }
  if (!response.ok) throw new Error('Sync failed');
  const result = await response.json() as { owner: string; entries: Entry[] };
  if (result.owner !== owner || signingOut) return;
  const remote = new Map(result.entries);
  const combined = new Map(remote);
  const localChanges = !baseline || sameOwner ? diff(before, snapshot()) : [];
  for (const { slug, value } of [...changes.slice(sent.length), ...localChanges]) {
    if (value === null) combined.delete(slug);
    else combined.set(slug, value);
  }
  const periods = Object.fromEntries([...combined].filter(([, value]) => validPeriod(value)));
  if (!writeFavorites(new Set(combined.keys()))) throw new Error('Local storage unavailable');
  localStorage.setItem(PERIODS_KEY, JSON.stringify({ version: 1, periods }));
  localStorage.setItem(BASELINE_KEY, JSON.stringify({ owner: currentOwner, entries: [...remote] }));
  applyRemote = true;
  document.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT));
  applyRemote = false;
  renderAccount(copy.sync);
  if (diff(remote, combined).length) {
    renderAccount(account.syncing);
    schedule();
  }
}

async function sync() {
  if (!owner || signingOut || running) return;
  running = true;
  const currentOwner = owner;
  try {
    if (navigator.locks) {
      await navigator.locks.request(BASELINE_KEY, () => exchange(currentOwner));
    } else {
      await exchange(currentOwner);
    }
  } catch {
    renderAccount(copy.offline);
    schedule(30000);
  } finally {
    running = false;
  }
}

async function loadAccount() {
  if (signingOut || accountCheck) return;
  const check = new AbortController();
  accountCheck = check;
  try {
    const response = await fetch(API + '/status', { cache: 'no-store', signal: check.signal });
    // Astro’s static preview has no Worker endpoint.
    if (response.status === 404) { renderAccount(); return; }
    if (!response.ok) throw new Error('Account check failed');
    const info = await response.json() as { available: boolean; owner?: string | null; givenName?: string | null };
    if (check.signal.aborted) return;
    available = info.available === true;
    const previousOwner = owner;
    const previousName = givenName;
    owner = info.owner ?? null;
    givenName = owner && typeof info.givenName === 'string' ? info.givenName : '';
    const url = new URL(location.href);
    const failed = url.searchParams.get('collection') === 'signin-error';
    if (failed) {
      url.searchParams.delete('collection');
      history.replaceState(history.state, '', url);
    }
    if (failed || owner !== previousOwner || givenName !== previousName || !owner) {
      renderAccount(failed ? copy.authError : owner ? account.syncing : '');
    }
    schedule(0);
  } catch {
    if (!check.signal.aborted) renderAccount(account.checkError);
  } finally {
    accountCheck = undefined;
  }
}

signOut?.addEventListener('click', async () => {
  signingOut = true;
  accountCheck?.abort();
  signOut.disabled = true;
  clearTimeout(timer);
  try {
    const response = await fetch(API + '/logout', { method: 'POST' });
    if (!response.ok) throw new Error('Sign-out failed');
    owner = null;
    renderAccount();
  } catch {
    renderAccount(account.signOutError);
  } finally {
    signingOut = false;
    signOut.disabled = false;
    schedule();
  }
});

if (signInLinks.length || indicators.length || getBaseline()) {
  if (mode) mode.textContent = account.checking;
  void loadAccount();
  document.addEventListener(FAVORITES_CHANGED_EVENT, () => { if (!applyRemote) schedule(); });
  window.addEventListener('online', () => { void loadAccount(); });
  window.addEventListener('pageshow', event => { if (event.persisted) void loadAccount(); });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') void loadAccount();
  });
  if (mode) window.setInterval(() => {
    if (document.visibilityState === 'visible' && owner) schedule(0);
  }, 60000);
}
