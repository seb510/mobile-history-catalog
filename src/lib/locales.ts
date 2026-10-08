export const LOCALES = ['uk', 'ru', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'uk';

// uk is curated first and has the most complete write-ups, so it's the fallback of last resort
// for every locale; ru is filled in next most often, en last. When a page is requested in a
// locale that doesn't have its own file yet, walk this chain and render the first match.
const FALLBACK_CHAIN: Record<Locale, Locale[]> = {
  uk: ['uk'],
  ru: ['ru', 'uk', 'en'],
  en: ['en', 'uk', 'ru'],
};

export function fallbackChainFor(locale: Locale): Locale[] {
  return FALLBACK_CHAIN[locale];
}

// Base path prefix for a locale's routes — uk is unprefixed (prefixDefaultLocale: false).
export function localePath(locale: Locale, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${prefix}${path}` || '/';
}
