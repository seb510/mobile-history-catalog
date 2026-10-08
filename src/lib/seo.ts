import { LOCALES, type Locale } from './locales';

const OG_LOCALE: Record<Locale, string> = { uk: 'uk_UA', ru: 'ru_RU', en: 'en_US' };

interface AlternateLinksOptions {
  site: URL;
  /** The unprefixed path, e.g. "/phones/nokia-3310/" or "/". Same for every locale by design —
   * we don't translate slugs, only content. */
  path: string;
}

// hreflang alternates so search engines know the uk/ru/en pages are the same content in
// different languages, not duplicates — plus an x-default pointing at the base (uk) version.
export function alternateLinks({ site, path }: AlternateLinksOptions) {
  const links = LOCALES.map((locale) => ({
    locale,
    href: new URL(locale === 'uk' ? path : `/${locale}${path}`, site).toString(),
  }));
  return [...links, { locale: 'x-default', href: new URL(path, site).toString() }];
}

export function ogLocaleOf(locale: Locale): string {
  return OG_LOCALE[locale];
}

export function canonicalUrl(site: URL, locale: Locale, path: string): string {
  return new URL(locale === 'uk' ? path : `/${locale}${path}`, site).toString();
}
