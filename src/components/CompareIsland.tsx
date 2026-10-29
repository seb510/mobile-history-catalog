import { useEffect, useMemo, useState } from 'react';
import type { CollectionEntry } from 'astro:content';
import { localePath, type Locale } from '../lib/locales';
import type { t } from '../lib/ui-strings';
import { buildCompareGroups } from '../lib/specs';

type PhoneData = CollectionEntry<'phones'>['data'];
type Strings = ReturnType<typeof t>;

export interface ComparePhoneLite {
  slug: string;
  data: PhoneData;
}

interface Props {
  phones: ComparePhoneLite[];
  locale: Locale;
  strings: Strings;
}

type Slot = 'a' | 'b';

function PlaceholderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" className={className} role="img" aria-hidden="true">
      <circle cx="100" cy="75" r="42" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" />
      <circle cx="100" cy="75" r="28" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
      <path
        d="M56 75h16l8-19 11 36 9-26 7 9h18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
      <circle cx="56" cy="75" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="126" cy="75" r="2.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function matches(phone: ComparePhoneLite, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return `${phone.data.brand} ${phone.data.model} ${phone.data.year}`.toLowerCase().includes(q);
}

export default function CompareIsland({ phones, locale, strings }: Props) {
  const [selected, setSelected] = useState<Record<Slot, string | null>>({ a: null, b: null });
  const [query, setQuery] = useState<Record<Slot, string>>({ a: '', b: '' });
  const bySlug = useMemo(() => new Map(phones.map((p) => [p.slug, p])), [phones]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const a = params.get('a');
    const b = params.get('b');
    setSelected({
      a: a && bySlug.has(a) ? a : null,
      b: b && bySlug.has(b) ? b : null,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selected.a) params.set('a', selected.a);
    if (selected.b) params.set('b', selected.b);
    const qs = params.toString();
    const url = `${window.location.pathname}${qs ? `?${qs}` : ''}`;
    window.history.replaceState(null, '', url);
  }, [selected.a, selected.b]);

  const select = (slot: Slot, slug: string) => {
    setSelected((prev) => ({ ...prev, [slot]: slug }));
    setQuery((prev) => ({ ...prev, [slot]: '' }));
  };
  const clear = (slot: Slot) => setSelected((prev) => ({ ...prev, [slot]: null }));
  const swap = () => setSelected((prev) => ({ a: prev.b, b: prev.a }));

  const phoneA = selected.a ? bySlug.get(selected.a) : undefined;
  const phoneB = selected.b ? bySlug.get(selected.b) : undefined;

  const groups = useMemo(() => {
    if (!phoneA || !phoneB) return [];
    return buildCompareGroups(phoneA.data, phoneB.data, strings);
  }, [phoneA, phoneB, strings]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <PhoneSlot
          slot="a"
          phone={phoneA}
          query={query.a}
          onQueryChange={(v) => setQuery((prev) => ({ ...prev, a: v }))}
          onSelect={(slug) => select('a', slug)}
          onClear={() => clear('a')}
          candidates={phones.filter((p) => p.slug !== selected.b && matches(p, query.a)).slice(0, 8)}
          placeholder={strings.compare.pickA}
          locale={locale}
          strings={strings}
        />
        <PhoneSlot
          slot="b"
          phone={phoneB}
          query={query.b}
          onQueryChange={(v) => setQuery((prev) => ({ ...prev, b: v }))}
          onSelect={(slug) => select('b', slug)}
          onClear={() => clear('b')}
          candidates={phones.filter((p) => p.slug !== selected.a && matches(p, query.b)).slice(0, 8)}
          placeholder={strings.compare.pickB}
          locale={locale}
          strings={strings}
        />
      </div>

      {phoneA && phoneB ? (
        <div className="mt-6">
          <button
            type="button"
            onClick={swap}
            className="mb-4 text-sm text-neutral-500 underline transition-colors duration-200 hover-desktop:text-neutral-300"
          >
            {strings.compare.swap}
          </button>
          <div className="flex flex-col gap-3" role="table">
            {groups.map((group, gi) => (
              <div key={gi} className="divide-y divide-neutral-800 overflow-hidden rounded-lg border border-neutral-800 text-sm">
                {group.rows.map((row, i) => (
                  <div
                    key={row.label}
                    role="row"
                    className={`grid grid-cols-[6rem_1fr_1fr] sm:grid-cols-[10rem_1fr_1fr] ${i % 2 === 1 ? 'bg-neutral-900/40' : ''}`}
                  >
                    <div role="rowheader" className="py-2.5 pl-3 text-left align-top text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                      {row.label}
                    </div>
                    <div role="cell" className="py-2.5 pr-3 text-neutral-200">
                      {row.a ?? <span className="text-neutral-600">{strings.compare.dash}</span>}
                    </div>
                    <div role="cell" className="py-2.5 pr-3 text-neutral-200">
                      {row.b ?? <span className="text-neutral-600">{strings.compare.dash}</span>}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-8 text-center text-neutral-500">{strings.compare.empty}</p>
      )}
    </div>
  );
}

interface PhoneSlotProps {
  slot: Slot;
  phone?: ComparePhoneLite;
  query: string;
  onQueryChange: (v: string) => void;
  onSelect: (slug: string) => void;
  onClear: () => void;
  candidates: ComparePhoneLite[];
  placeholder: string;
  locale: Locale;
  strings: Strings;
}

function PhoneSlot({ phone, query, onQueryChange, onSelect, onClear, candidates, placeholder, locale, strings }: PhoneSlotProps) {
  if (phone) {
    const { data, slug } = phone;
    return (
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
        <div className="flex items-start justify-between gap-2">
          <a href={localePath(locale, `/phones/${slug}/`)} className="flex min-w-0 gap-3">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-neutral-950 p-1.5">
              {data.image ? (
                <img src={data.image} alt={`${data.brand} ${data.model}`} className="h-full w-full object-contain" />
              ) : (
                <PlaceholderIcon className="h-full w-full text-neutral-700" />
              )}
            </div>
            <div className="min-w-0">
              <p className="text-xs text-neutral-500">
                {data.brand} · {data.year}
              </p>
              <p className="truncate font-semibold leading-tight">{data.model}</p>
              {data.priceUsdAtLaunch != null && <p className="mt-1 text-xs font-bold text-orange-500">${data.priceUsdAtLaunch}</p>}
            </div>
          </a>
          <button
            type="button"
            onClick={onClear}
            className="shrink-0 text-xs text-neutral-500 underline transition-colors duration-200 hover-desktop:text-neutral-300"
          >
            {strings.compare.change}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg border border-neutral-800 bg-neutral-900 p-4">
      <input
        type="search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none"
      />
      {query.trim() && (
        <ul className="absolute top-full right-0 left-0 z-10 mt-1 max-h-72 overflow-y-auto rounded-md border border-neutral-800 bg-neutral-900 shadow-lg">
          {candidates.length === 0 ? (
            <li className="px-3 py-2 text-sm text-neutral-500">{strings.compare.noResults}</li>
          ) : (
            candidates.map((p) => (
              <li key={p.slug}>
                <button
                  type="button"
                  onClick={() => onSelect(p.slug)}
                  className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition-colors duration-200 hover-desktop:bg-neutral-800"
                >
                  <span className="truncate">
                    {p.data.brand} {p.data.model}
                  </span>
                  <span className="shrink-0 text-xs text-neutral-500">{p.data.year}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
