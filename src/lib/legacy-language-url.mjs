export function legacyLanguageTarget(url) {
  if (url.pathname !== '/ru' && !url.pathname.startsWith('/ru/')) return null;
  const target = new URL(url);
  target.pathname = '/' + url.pathname.slice(3).replace(/^\/+/, '');
  return target;
}
