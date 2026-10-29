import type { CollectionEntry } from 'astro:content';
import type { t } from './ui-strings';

type PhoneData = CollectionEntry<'phones'>['data'];
type Strings = ReturnType<typeof t>;

// One canonical, ordered list of spec fields — shared by the single-phone spec table
// (PhoneDetail) and the two-phone comparison table (Compare), so both stay in sync and rows line
// up correctly when comparing. `group` controls visual grouping into separate cards; fields with
// no value for a given phone are simply omitted from that phone's table and treated as "—" in a
// comparison.
interface FieldDef {
  group: number;
  label: (s: Strings['specs']) => string;
  value: (data: PhoneData, u: Strings['units']) => string | null;
}

const FIELDS: FieldDef[] = [
  { group: 0, label: (s) => s.year, value: (d) => String(d.year) },
  { group: 0, label: (s) => s.priceUsdAtLaunch, value: (d) => (d.priceUsdAtLaunch != null && d.priceSourceUrl ? `${d.priceUsdAtLaunch} USD${d.priceContext ? ` · ${d.priceContext}` : ''}` : null) },
  { group: 0, label: (s) => s.unitsSoldMillions, value: (d) => (d.unitsSoldMillions != null ? String(d.unitsSoldMillions) : null) },
  {
    group: 1,
    label: (s) => s.display,
    value: (d) => [d.display?.sizeInches != null ? `${d.display.sizeInches}"` : null, d.display?.type].filter(Boolean).join(' · ') || null,
  },
  { group: 1, label: (s) => s.resolution, value: (d) => d.display?.resolution ?? null },
  { group: 2, label: (s) => s.chipset, value: (d) => d.chipset ?? null },
  {
    group: 2,
    label: (s) => s.ram,
    value: (d, u) => (d.ramMb != null ? (d.ramMb >= 1024 ? `${d.ramMb / 1024} ${u.gb}` : `${d.ramMb} ${u.mb}`) : null),
  },
  {
    group: 2,
    label: (s) => s.storage,
    value: (d, u) => (d.storageMb != null ? (d.storageMb >= 1024 ? `${d.storageMb / 1024} ${u.gb}` : `${d.storageMb} ${u.mb}`) : null),
  },
  { group: 2, label: (s) => s.storageExpandable, value: (d) => d.storageExpandable ?? null },
  { group: 3, label: (s) => s.camera, value: (d) => d.camera?.rear ?? null },
  { group: 3, label: (s) => s.cameraFront, value: (d) => d.camera?.front ?? null },
  { group: 4, label: (s) => s.battery, value: (d, u) => (d.battery?.mah != null ? `${d.battery.mah} ${u.mAh}` : null) },
  { group: 4, label: (s) => s.network, value: (d) => d.network ?? null },
  { group: 4, label: (s) => s.connectivity, value: (d) => (d.connectivity && d.connectivity.length > 0 ? d.connectivity.join(', ') : null) },
  { group: 4, label: (s) => s.simType, value: (d, u) => d.simType?.replace(/\bMini-SIM\b/g, u.standardSim) ?? null },
  { group: 5, label: (s) => s.os, value: (d) => d.os ?? null },
  { group: 5, label: (s) => s.dimensions, value: (d, u) => d.dimensionsMm ? `${d.dimensionsMm.replace(/\s*(?:мм|mm)\s*$/i, '')} ${u.mm}` : null },
  { group: 5, label: (s) => s.weight, value: (d, u) => (d.weightGrams != null ? `${d.weightGrams} ${u.g}` : null) },
];

export type SpecRow = [label: string, value: string];
export type SpecGroup = { rows: SpecRow[] };

export function buildSpecGroups(data: PhoneData, strings: Strings): SpecGroup[] {
  const groups: SpecGroup[] = [];
  let lastGroup = -1;
  let current: SpecGroup | undefined;
  for (const field of FIELDS) {
    const value = field.value(data, strings.units);
    if (value == null) continue;
    if (field.group !== lastGroup || !current) {
      current = { rows: [] };
      groups.push(current);
      lastGroup = field.group;
    }
    current.rows.push([field.label(strings.specs), value]);
  }
  return groups;
}

export interface CompareRow {
  label: string;
  a: string | null;
  b: string | null;
}
export type CompareGroup = { rows: CompareRow[] };

export function buildCompareGroups(dataA: PhoneData, dataB: PhoneData, strings: Strings): CompareGroup[] {
  const groups: CompareGroup[] = [];
  let lastGroup = -1;
  let current: CompareGroup | undefined;
  for (const field of FIELDS) {
    const a = field.value(dataA, strings.units);
    const b = field.value(dataB, strings.units);
    if (a == null && b == null) continue;
    if (field.group !== lastGroup || !current) {
      current = { rows: [] };
      groups.push(current);
      lastGroup = field.group;
    }
    current.rows.push({ label: field.label(strings.specs), a, b });
  }
  return groups;
}
