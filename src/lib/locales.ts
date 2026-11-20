export const LOCALES = ['uk', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export type Localized<T> = Record<Locale, T> & { ru?: T };
export const DEFAULT_LOCALE: Locale = 'uk';

// English pages fall back to the Ukrainian source.
const FALLBACK_CHAIN: Record<Locale, Locale[]> = {
  uk: ['uk'],
  en: ['en', 'uk'],
};

export function fallbackChainFor(locale: Locale): Locale[] {
  return FALLBACK_CHAIN[locale];
}

// Base path prefix for a locale's routes — uk is unprefixed (prefixDefaultLocale: false).
export function localePath(locale: Locale, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${prefix}${path}` || '/';
}
