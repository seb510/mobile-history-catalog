export const PERIODS_KEY = 'mobile-history:ownership-periods';
export interface OwnershipPeriod { start: number; end?: number; current: boolean }
export function validPeriod(value: unknown): value is OwnershipPeriod {
 const p = value as OwnershipPeriod | null;
 const year = new Date().getFullYear();
 return !!p && Number.isInteger(p.start) && p.start >= 1980 && p.start <= year && typeof p.current === 'boolean' &&
  (p.end === undefined || (!p.current && Number.isInteger(p.end) && p.end >= p.start && p.end <= year));
}
export function readPeriods(): Record<string, OwnershipPeriod> {
 const result: Record<string, OwnershipPeriod> = Object.create(null);
 try {
  const stored = JSON.parse(localStorage.getItem(PERIODS_KEY) || 'null');
  if (stored?.version !== 1 || !stored.periods || typeof stored.periods !== 'object') return result;
  for (const [slug, period] of Object.entries(stored.periods)) if (/^[a-z0-9-]+$/.test(slug) && validPeriod(period)) result[slug] = period;
 } catch {}
 return result;
}
export function savePeriod(slug: string, period?: OwnershipPeriod): boolean {
 if (!/^[a-z0-9-]+$/.test(slug) || (period && !validPeriod(period))) return false;
 try {
  const periods = readPeriods();
  if (period) periods[slug] = period; else delete periods[slug];
  if (Object.keys(periods).length) localStorage.setItem(PERIODS_KEY, JSON.stringify({ version:1, periods }));
  else localStorage.removeItem(PERIODS_KEY);
  return true;
 } catch { return false; }
}
