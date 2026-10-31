import { LOCALES, type Locale } from './locales';
import { getPhone, getAllSlugs } from './phones';
import { getBrand, getAllBrandSlugs } from './brands';
import { alternateLinks, canonicalUrl } from './seo';

export const searchEnabled = import.meta.env.SEO_INDEXABLE === 'true';

// Resolve the actual editorial language: translated chrome alone is not a translation.
export async function searchIdentity(site: URL, locale: Locale, path: string) {
  const match = path.match(/^\/(phones|brands)\/([^/]+)\/$/);
  if (!match) return { canonicalLocale: locale, alternates: alternateLinks({ site, path }) };
  const [, kind, slug] = match;
  const entries = await Promise.all(LOCALES.map((language) => kind === 'phones' ? getPhone(language, slug) : getBrand(language, slug)));
  const actual = entries[LOCALES.indexOf(locale)]?.id.split('/')[0] as Locale | undefined;
  const translated = LOCALES.filter((language, index) => entries[index]?.id.startsWith(`${language}/`));
  return {
    canonicalLocale: actual ?? locale,
    alternates: [
      ...translated.map((language) => ({ locale: language as string, href: canonicalUrl(site, language, path) })),
      { locale: 'x-default', href: canonicalUrl(site, 'uk', path) },
    ],
  };
}

export async function indexablePaths(site: URL) {
  const paths = ['/', '/catalog/', '/brands/', '/compare/', '/about/', '/privacy/', '/cookies/',
    ...(await getAllSlugs()).map((slug) => `/phones/${slug}/`),
    ...(await getAllBrandSlugs()).map((slug) => `/brands/${slug}/`)];
  const urls: string[] = [];
  for (const path of paths) for (const locale of LOCALES) {
    const identity = await searchIdentity(site, locale, path);
    if (identity.canonicalLocale === locale) urls.push(canonicalUrl(site, locale, path));
  }
  return urls;
}

export function xmlEscape(value: string) {
  return value.replace(/[<>&"']/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]!);
}
