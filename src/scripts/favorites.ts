const STORAGE_KEY = 'mobile-history:favorites';
export const FAVORITES_CHANGED_EVENT = 'favorites-changed';

export function readFavorites(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed.filter((value) => typeof value === 'string') : []);
  } catch {
    return new Set();
  }
}

function writeFavorites(favorites: Set<string>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]));
  } catch {
    // Private mode or storage disabled — favorites just won't persist across page loads.
  }
}

// Toggles one slug and persists it. Shared by the delegated click handler below (for
// Astro-rendered toggle buttons) and called directly from CompareIsland.tsx, the one React
// island, which manages its own button state instead of the data-attribute DOM sync.
export function toggleFavorite(slug: string): Set<string> {
  const favorites = readFavorites();
  if (favorites.has(slug)) favorites.delete(slug);
  else favorites.add(slug);
  writeFavorites(favorites);
  document.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT, { detail: { slugs: [...favorites] } }));
  return favorites;
}

function syncButton(button: HTMLButtonElement, active: boolean): void {
  button.setAttribute('aria-pressed', String(active));
  const label = active ? button.dataset.labelRemove! : button.dataset.labelAdd!;
  button.setAttribute('aria-label', label);
  const text = button.querySelector<HTMLElement>('[data-favorite-label]');
  if (text) text.textContent = label;
}

// Syncs every Astro-rendered toggle button and counter badge on the page — including ones
// inside CompareIsland's React tree that opted in via data-favorite-toggle — regardless of
// whether the change came from a click here or from toggleFavorite() called elsewhere.
function syncAll(): void {
  const favorites = readFavorites();
  document.querySelectorAll<HTMLButtonElement>('[data-favorite-toggle]').forEach((button) => {
    syncButton(button, favorites.has(button.dataset.slug!));
  });
  document.querySelectorAll<HTMLElement>('[data-favorite-count]').forEach((el) => {
    el.textContent = String(favorites.size);
    el.hidden = favorites.size === 0;
  });
}

// This module is also imported by CompareIsland.tsx, which Astro renders to static HTML on the
// server for its `client:load` island — guard the DOM wiring so importing it doesn't crash SSR,
// where `document` doesn't exist.
if (typeof document !== 'undefined') {
  document.addEventListener('click', (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>('[data-favorite-toggle]');
    if (!button) return;
    toggleFavorite(button.dataset.slug!);
  });

  document.addEventListener(FAVORITES_CHANGED_EVENT, syncAll);
  syncAll();
  window.addEventListener('pageshow', (event) => { if (event.persisted) syncAll(); });
}
