import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per phone *per locale* (src/data/phones/<locale>/<slug>.md). `uk/<slug>.md`
// is required — it's the base language every entry is curated in first; `ru/<slug>.md` and
// `en/<slug>.md` are optional translations. Frontmatter holds the specs/structured facts
// (identical across locales — duplicated per file rather than cross-referenced, since the
// catalog is small and hand-curated); the Markdown body holds the localized written history.
// Validated at build time: a typo'd field fails the build instead of silently breaking a page.
const phones = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/data/phones' }),
  schema: z.object({
    brand: z.string(),
    model: z.string(),
    year: z.number().int().min(1998).max(new Date().getFullYear() + 1),
    // A short tag for why this model is on a "milestone" timeline, not a full spec sheet —
    // e.g. "перший масовий GSM-телефон", "перший Android". Optional: not every entry needs one.
    // This is the one spec-adjacent field that's actually worth writing per-locale (it's prose).
    milestone: z.string().optional(),
    priceUsdAtLaunch: z.number().optional(),
    // Approximate global units sold, in millions — only documented for a handful of genuine
    // best-sellers (3310, RAZR V3, the original iPhone...). Powers the "most popular by sales"
    // section on the homepage; phones without a disclosed figure simply don't appear there.
    unitsSoldMillions: z.number().optional(),
    display: z
      .object({
        sizeInches: z.number().optional(),
        resolution: z.string().optional(),
        type: z.string().optional(),
      })
      .optional(),
    chipset: z.string().optional(),
    ramMb: z.number().optional(),
    storageMb: z.number().optional(),
    storageExpandable: z.string().optional(),
    camera: z
      .object({
        rear: z.string().optional(),
        front: z.string().optional(),
      })
      .optional(),
    battery: z
      .object({
        mah: z.number().optional(),
        removable: z.boolean().optional(),
      })
      .optional(),
    network: z.string().optional(),
    connectivity: z.array(z.string()).optional(),
    os: z.string().optional(),
    dimensionsMm: z.string().optional(),
    weightGrams: z.number().optional(),
    colors: z.array(z.string()).optional(),
    simType: z.string().optional(),
    image: z.string().optional(),
    // Wikimedia Commons (or another free-licensed source) requires attribution — kept alongside
    // the image rather than hardcoded in a template, since the license/author differs per photo.
    imageCredit: z.string().optional(),
  }),
});

export const collections = { phones };
