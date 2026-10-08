import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per phone (src/data/phones/*.md) — frontmatter holds the specs/structured
// facts, the Markdown body holds the written history/context (why it mattered). Validated at
// build time: a typo'd field fails the build instead of silently breaking a page later.
const phones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/phones' }),
  schema: z.object({
    brand: z.string(),
    model: z.string(),
    year: z.number().int().min(1998).max(new Date().getFullYear() + 1),
    // A short tag for why this model is on a "milestone" timeline, not a full spec sheet —
    // e.g. "перший масовий GSM-телефон", "перший Android". Optional: not every entry needs one.
    milestone: z.string().optional(),
    priceUsdAtLaunch: z.number().optional(),
    display: z
      .object({
        sizeInches: z.number().optional(),
        type: z.string().optional(),
      })
      .optional(),
    chipset: z.string().optional(),
    ramMb: z.number().optional(),
    storageMb: z.number().optional(),
    batteryMah: z.number().optional(),
    os: z.string().optional(),
    weightGrams: z.number().optional(),
    image: z.string().optional(),
    // Wikimedia Commons (or another free-licensed source) requires attribution — kept alongside
    // the image rather than hardcoded in a template, since the license/author differs per photo.
    imageCredit: z.string().optional(),
  }),
});

export const collections = { phones };
