import { getCollection, type CollectionEntry } from 'astro:content';
import { fallbackChainFor, type Locale } from './locales';

type PhoneEntry = CollectionEntry<'phones'>;

// Entry ids look like "uk/nokia-3310" (locale/slug, from the glob loader's folder structure).
function splitId(id: string): { locale: string; slug: string } {
  const [locale, ...rest] = id.split('/');
  return { locale, slug: rest.join('/') };
}

async function allPhones(): Promise<PhoneEntry[]> {
  return getCollection('phones');
}

// One entry per unique phone, in the locale it should render in for the given target locale —
// following the uk → ru → en fallback chain. Used for catalog/listing pages.
export async function getPhonesForLocale(locale: Locale): Promise<PhoneEntry[]> {
  const entries = await allPhones();
  const bySlug = new Map<string, PhoneEntry>();

  for (const candidate of fallbackChainFor(locale).slice().reverse()) {
    for (const entry of entries) {
      const { locale: entryLocale, slug } = splitId(entry.id);
      if (entryLocale === candidate) bySlug.set(slug, entry);
    }
  }

  return [...bySlug.values()];
}

// All slugs that have at least a uk (base) file — the universe of valid phone pages.
export async function getAllSlugs(): Promise<string[]> {
  const entries = await allPhones();
  const slugs = new Set<string>();
  for (const entry of entries) {
    const { locale, slug } = splitId(entry.id);
    if (locale === 'uk') slugs.add(slug);
  }
  return [...slugs];
}

// Single phone, following the fallback chain for `locale`. Returns null if even the uk file
// (which every phone must have) is missing — meaning the slug doesn't exist at all.
export async function getPhone(locale: Locale, slug: string): Promise<PhoneEntry | null> {
  const entries = await allPhones();
  for (const candidate of fallbackChainFor(locale)) {
    const match = entries.find((entry) => entry.id === `${candidate}/${slug}`);
    if (match) return match;
  }
  return null;
}
