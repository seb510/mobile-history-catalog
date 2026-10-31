type Locale = 'uk' | 'ru' | 'en';

interface SearchPhone {
  slug: string;
  brand: string;
  model: string;
  year: number;
  milestone: string;
}

type SearchIndex = Record<Locale, SearchPhone[]>;

const INDEX_CACHE_KEY = 'mobile-history:phone-search-index:v1';
const MIN_QUERY_LENGTH = 3;
const DEBOUNCE_MS = 250;
let indexPromise: Promise<SearchIndex> | undefined;

function isSearchIndex(value: unknown): value is SearchIndex {
  if (!value || typeof value !== 'object') return false;
  return (['uk', 'ru', 'en'] as const).every((locale) => {
    const records = (value as Record<string, unknown>)[locale];
    return Array.isArray(records) && records.every((record) =>
      record && typeof record.slug === 'string' &&
      typeof record.brand === 'string' &&
      typeof record.model === 'string' &&
      typeof record.year === 'number' &&
      typeof record.milestone === 'string',
    );
  });
}

function readCachedIndex(): SearchIndex | null {
  try {
    const cached = sessionStorage.getItem(INDEX_CACHE_KEY);
    if (!cached) return null;
    const parsed: unknown = JSON.parse(cached);
    if (isSearchIndex(parsed)) return parsed;
    sessionStorage.removeItem(INDEX_CACHE_KEY);
  } catch {
    return null;
  }
  return null;
}

async function loadSearchIndex(url: string): Promise<SearchIndex> {
  if (!indexPromise) {
    indexPromise = (async () => {
      const cached = readCachedIndex();
      if (cached) return cached;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Phone search index request failed: ${response.status}`);
      const data: unknown = await response.json();
      if (!isSearchIndex(data)) throw new Error('Phone search index has an invalid shape');
      try {
        sessionStorage.setItem(INDEX_CACHE_KEY, JSON.stringify(data));
      } catch {
        // The in-memory promise still prevents repeated requests in this page.
      }
      return data;
    })();
  }
  return indexPromise;
}

function normalize(value: string, locale: Locale): string {
  return value
    .toLocaleLowerCase(locale)
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .trim();
}

function findPhones(records: SearchPhone[], query: string, locale: Locale): SearchPhone[] {
  const tokens = normalize(query, locale).split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];

  return records
    .map((phone) => {
      const brand = normalize(phone.brand, locale);
      const model = normalize(phone.model, locale);
      const searchText = normalize(`${phone.brand} ${phone.model} ${phone.year} ${phone.milestone}`, locale);
      return { phone, brand, model, searchText };
    })
    .filter(({ searchText }) => tokens.every((token) => searchText.includes(token)))
    .sort((a, b) => {
      const score = (item: typeof a) => tokens.reduce(
        (total, token) => total + (item.model.startsWith(token) ? 3 : item.brand.startsWith(token) ? 2 : 0),
        0,
      );
      return score(b) - score(a) || b.phone.year - a.phone.year || a.phone.model.localeCompare(b.phone.model, locale);
    })
    .map(({ phone }) => phone);
}

function countMessage(input: HTMLInputElement, count: number, locale: Locale): string {
  const category = new Intl.PluralRules(locale).select(count);
  const noun = count === 1
    ? input.dataset.resultOne
    : category === 'few'
      ? input.dataset.resultFew
      : input.dataset.resultMany;
  return `${count} ${noun} ${input.dataset.found}`;
}

function phoneHref(prefix: string, slug: string): string {
  return `${prefix}/phones/${encodeURIComponent(slug)}/`;
}

function createResultLink(phone: SearchPhone, prefix: string, className: string): HTMLAnchorElement {
  const link = document.createElement('a');
  link.className = className;
  link.href = phoneHref(prefix, phone.slug);

  const meta = document.createElement('span');
  meta.className = 'phone-search-result-meta';
  meta.textContent = `${phone.brand} · ${phone.year}`;

  const title = document.createElement('strong');
  title.className = 'phone-search-result-title';
  title.textContent = phone.model;

  link.append(meta, title);
  if (phone.milestone) {
    const milestone = document.createElement('span');
    milestone.className = 'phone-search-result-description';
    milestone.textContent = phone.milestone;
    link.append(milestone);
  }
  return link;
}

function initializeGlobalSearch(root: HTMLElement): void {
  const toggle = root.querySelector<HTMLButtonElement>('[data-search-toggle]');
  const panel = root.querySelector<HTMLElement>('[data-search-panel]');
  const form = root.querySelector<HTMLFormElement>('[data-global-search-form]');
  const input = root.querySelector<HTMLInputElement>('[data-search-input]');
  const status = root.querySelector<HTMLElement>('[data-search-status]');
  const suggestionsRegion = root.querySelector<HTMLElement>('[data-suggestions-region]');
  const suggestions = root.querySelector<HTMLUListElement>('[data-search-suggestions]');
  const locale = root.dataset.locale as Locale | undefined;
  if (!toggle || !panel || !form || !input || !status || !suggestionsRegion || !suggestions || !locale) return;

  const setOpen = (open: boolean) => {
    const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (open && !wasOpen) {
      const menuToggle = document.getElementById('menu-toggle');
      if (menuToggle?.getAttribute('aria-expanded') === 'true') menuToggle.click();
    }
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.classList.toggle('is-open', open);
    if (open && !wasOpen) input.focus();
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('pointerdown', (event) => {
    if (event.target instanceof Node && !root.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      event.preventDefault();
      setOpen(false);
      toggle.focus();
    }
  });

  let debounce: number | undefined;
  let revision = 0;
  input.addEventListener('input', () => {
    const currentRevision = ++revision;
    window.clearTimeout(debounce);
    suggestions.replaceChildren();
    suggestionsRegion.hidden = true;
    const query = input.value.trim();
    if (Array.from(query).length < MIN_QUERY_LENGTH) {
      status.textContent = input.dataset.hint ?? '';
      return;
    }

    setOpen(true);
    status.textContent = input.dataset.loading ?? '';
    debounce = window.setTimeout(async () => {
      try {
        const index = await loadSearchIndex(root.dataset.indexUrl!);
        if (currentRevision !== revision) return;
        const matches = findPhones(index[locale], query, locale);
        status.textContent = matches.length
          ? countMessage(input, matches.length, locale)
          : input.dataset.noResults ?? '';
        if (!matches.length) return;
        suggestionsRegion.hidden = false;
        matches.slice(0, 5).forEach((phone) => {
          const item = document.createElement('li');
          item.append(createResultLink(phone, root.dataset.phonePathPrefix ?? '', 'phone-search-suggestion'));
          suggestions.append(item);
        });
      } catch {
        if (currentRevision !== revision) return;
        status.textContent = input.dataset.error ?? '';
      }
    }, DEBOUNCE_MS);
  });
}

function initializeResultsPage(root: HTMLElement): void {
  const form = root.querySelector<HTMLFormElement>('[data-search-page-form]');
  const input = root.querySelector<HTMLInputElement>('[data-search-page-input]');
  const status = root.querySelector<HTMLElement>('[data-search-page-status]');
  const list = root.querySelector<HTMLOListElement>('[data-search-page-list]');
  const empty = root.querySelector<HTMLElement>('[data-search-page-empty]');
  const locale = root.dataset.locale as Locale | undefined;
  if (!form || !input || !status || !list || !empty || !locale) return;

  let debounce: number | undefined;
  let revision = 0;
  const render = (query: string) => {
    const currentRevision = ++revision;
    window.clearTimeout(debounce);
    list.replaceChildren();
    empty.hidden = true;
    if (Array.from(query.trim()).length < MIN_QUERY_LENGTH) {
      status.textContent = input.dataset.minChars ?? '';
      return;
    }
    status.textContent = input.dataset.loading ?? '';
    debounce = window.setTimeout(async () => {
      try {
        const index = await loadSearchIndex(root.dataset.indexUrl!);
        if (currentRevision !== revision) return;
        const matches = findPhones(index[locale], query, locale);
        status.textContent = countMessage(input, matches.length, locale);
        empty.hidden = matches.length > 0;
        matches.forEach((phone) => {
          const item = document.createElement('li');
          item.append(createResultLink(phone, root.dataset.phonePathPrefix ?? '', 'phone-search-result'));
          list.append(item);
        });
      } catch {
        if (currentRevision !== revision) return;
        status.textContent = input.dataset.error ?? '';
      }
    }, DEBOUNCE_MS);
  };

  input.addEventListener('input', () => render(input.value));
  const initialQuery = new URLSearchParams(window.location.search).get('q') ?? '';
  input.value = initialQuery;
  if (initialQuery) render(initialQuery);
}

document.querySelectorAll<HTMLElement>('[data-global-search]').forEach(initializeGlobalSearch);
document.querySelectorAll<HTMLElement>('[data-phone-search-results]').forEach(initializeResultsPage);
