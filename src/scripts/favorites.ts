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

function syncButton(button: HTMLButtonElement, active: boolean): void {
  button.setAttribute('aria-pressed', String(active));
  const label = active ? button.dataset.labelRemove! : button.dataset.labelAdd!;
  button.setAttribute('aria-label', label);
  const text = button.querySelector<HTMLElement>('[data-favorite-label]');
  if (text) text.textContent = label;
}

function sync(): void {
  const favorites = readFavorites();
  document.querySelectorAll<HTMLButtonElement>('[data-favorite-toggle]').forEach((button) => {
    syncButton(button, favorites.has(button.dataset.slug!));
  });
  document.querySelectorAll<HTMLElement>('[data-favorite-count]').forEach((el) => {
    el.textContent = String(favorites.size);
    el.hidden = favorites.size === 0;
  });
}

document.addEventListener('click', (event) => {
  const button = (event.target as Element).closest<HTMLButtonElement>('[data-favorite-toggle]');
  if (!button) return;
  const slug = button.dataset.slug!;
  const favorites = readFavorites();
  if (favorites.has(slug)) favorites.delete(slug);
  else favorites.add(slug);
  writeFavorites(favorites);
  sync();
  document.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT, { detail: { slugs: [...favorites] } }));
});

sync();
window.addEventListener('pageshow', (event) => { if (event.persisted) sync(); });
