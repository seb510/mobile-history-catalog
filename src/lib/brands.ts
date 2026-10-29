import { getCollection, type CollectionEntry } from 'astro:content';
import { fallbackChainFor, type Locale } from './locales';

type BrandEntry = CollectionEntry<'brands'>;

// Entry ids look like "uk/nokia" (locale/slug), same convention as phones.
function splitId(id: string): { locale: string; slug: string } {
  const [locale, ...rest] = id.split('/');
  return { locale, slug: rest.join('/') };
}

export function slugOfBrand(entry: BrandEntry): string {
  return splitId(entry.id).slug;
}

// Derives a brand's page slug straight from the `brand` string on a phone entry (e.g. "Sony
// Ericsson" → "sony-ericsson"), matching how brand markdown files are named — avoids an extra
// collection fetch just to link a phone card/detail page to its brand page.
export function slugifyBrandName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

async function allBrands(): Promise<BrandEntry[]> {
  return getCollection('brands');
}

// One entry per unique brand, in the locale it should render in for the given target locale —
// following the uk → ru → en fallback chain.
export async function getBrandsForLocale(locale: Locale): Promise<BrandEntry[]> {
  const entries = await allBrands();
  const bySlug = new Map<string, BrandEntry>();

  for (const candidate of fallbackChainFor(locale).slice().reverse()) {
    for (const entry of entries) {
      const { locale: entryLocale, slug } = splitId(entry.id);
      if (entryLocale === candidate) bySlug.set(slug, entry);
    }
  }

  return [...bySlug.values()];
}

// All slugs that have at least a uk (base) file — the universe of valid brand pages.
export async function getAllBrandSlugs(): Promise<string[]> {
  const entries = await allBrands();
  const slugs = new Set<string>();
  for (const entry of entries) {
    const { locale, slug } = splitId(entry.id);
    if (locale === 'uk') slugs.add(slug);
  }
  return [...slugs];
}

// Single brand, following the fallback chain for `locale`.
export async function getBrand(locale: Locale, slug: string): Promise<BrandEntry | null> {
  const entries = await allBrands();
  for (const candidate of fallbackChainFor(locale)) {
    const match = entries.find((entry) => entry.id === `${candidate}/${slug}`);
    if (match) return match;
  }
  return null;
}
