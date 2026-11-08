const STORAGE_KEY = 'mobile-history:catalog-view';
type CatalogView = 'cards' | 'list';

export function initCatalogView(onChange: () => void) {
  const controls = document.querySelector<HTMLElement>('[data-view-controls]');
  if (!controls) return;
  const buttons = Array.from(controls.querySelectorAll<HTMLButtonElement>('[data-catalog-view]'));
  const setView = (view: CatalogView, persist = false) => {
    document.documentElement.dataset.catalogView = view;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.catalogView === view)));
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, view); } catch { /* The current view still works without storage. */ }
    }
    requestAnimationFrame(onChange);
  };
  const readView = (): CatalogView => {
    try { return localStorage.getItem(STORAGE_KEY) === 'list' ? 'list' : 'cards'; }
    catch { return document.documentElement.dataset.catalogView === 'list' ? 'list' : 'cards'; }
  };
  setView(readView());
  controls.hidden = false;
  buttons.forEach(button => button.addEventListener('click', () => setView(button.dataset.catalogView === 'list' ? 'list' : 'cards', true)));
  window.addEventListener('storage', event => { if (event.key === STORAGE_KEY || event.key === null) setView(readView()); });
  window.addEventListener('pageshow', event => { if (event.persisted) setView(readView()); });
}
