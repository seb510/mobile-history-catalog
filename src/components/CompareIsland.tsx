import { useEffect, useMemo, useState } from 'react';
import type { CollectionEntry } from 'astro:content';
import { localePath, type Locale } from '../lib/locales';
import { COMPARE_QUICK, type t } from '../lib/ui-strings';
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
      <circle cx="42" cy="42" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="33" cy="100" r="1.6" fill="currentColor" opacity="0.25" />
      <circle cx="166" cy="104" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="158" cy="38" r="1.6" fill="currentColor" opacity="0.25" />
      <path d="M75 28v94" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <circle cx="75" cy="43" r="6" fill="currentColor" opacity="0.75" />
      <circle cx="75" cy="75" r="6" fill="currentColor" opacity="0.75" />
      <circle cx="75" cy="107" r="6" fill="currentColor" opacity="0.75" />
      <path d="M90 43h45M90 75h34M90 107h54" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
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
  const [ready, setReady] = useState(false);
  const bySlug = useMemo(() => new Map(phones.map((p) => [p.slug, p])), [phones]);
  const suggestedMatchups = [
    { a: 'nokia-3210', b: 'nokia-3310', story: strings.compare.suggestions.gsmEra },
    { a: 'apple-iphone', b: 'htc-dream', story: strings.compare.suggestions.touchSmartphones },
    { a: 'samsung-galaxy-s', b: 'samsung-galaxy-z-fold3', story: strings.compare.suggestions.foldingScreens },
  ].flatMap(({ a, b, story }) => {
    const first = bySlug.get(a);
    const second = bySlug.get(b);
    return first && second ? [{ first, second, story }] : [];
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const a = params.get('a');
    const b = params.get('b');
    setSelected({
      a: a && bySlug.has(a) ? a : null,
      b: b && b !== a && bySlug.has(b) ? b : null,
    });
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!ready) return;
    const params = new URLSearchParams();
    if (selected.a) params.set('a', selected.a);
    if (selected.b) params.set('b', selected.b);
    const qs = params.toString();
    const url = `${window.location.pathname}${qs ? `?${qs}` : ''}`;
    window.history.replaceState(null, '', url);
  }, [selected.a, selected.b, ready]);

  const select = (slot: Slot, slug: string) => {
    setSelected((prev) => ({ ...prev, [slot]: slug }));
    setQuery((prev) => ({ ...prev, [slot]: '' }));
  };
  const clear = (slot: Slot) => setSelected((prev) => ({ ...prev, [slot]: null }));
  const swap = () => setSelected((prev) => ({ a: prev.b, b: prev.a }));
  const quickPhones = (other: string | null) => {
    const curated = ['nokia-3310', 'nokia-n8', 'siemens-s65', 'motorola-razr-v3', 'apple-iphone', 'google-pixel-9'];
    const opposite = other ? bySlug.get(other) : undefined;
    const sameBrand = opposite ? phones.filter((p) => p.data.brand === opposite.data.brand && p.slug !== other)
      .sort((a, b) => Math.abs(a.data.year - opposite.data.year) - Math.abs(b.data.year - opposite.data.year))
      .slice(0, 2).map((p) => p.slug) : [];
    return [...new Set([...sameBrand, ...curated])].filter((slug) => slug !== other && bySlug.has(slug))
      .slice(0, 4).map((slug) => bySlug.get(slug)!);
  };

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
          quickPhones={quickPhones(selected.b)}
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
          quickPhones={quickPhones(selected.a)}
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
            className="mb-4 text-sm text-neutral-500 underline transition-colors motion-ui hover-desktop:text-neutral-300"
          >
            {strings.compare.swap}
          </button>
          <div className="overflow-hidden rounded-sm border border-neutral-700 bg-neutral-950/20 text-sm lg:text-base" role="table">
            <div role="row" className="grid grid-cols-[6.5rem_minmax(0,1fr)_minmax(0,1fr)] border-b-2 border-orange-500 bg-neutral-900 sm:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)]">
              <div role="columnheader" className="flex items-end px-2 py-3 text-[0.6rem] leading-snug font-bold tracking-wide text-neutral-400 uppercase sm:px-3 lg:text-xs">
                {strings.compare.tableHead.characteristic}
              </div>
              <div role="columnheader" className="min-w-0 border-l border-neutral-700 px-2 py-3 sm:px-3">
                <span className="block truncate text-[0.6rem] font-semibold tracking-wide text-neutral-400 uppercase lg:text-xs">{phoneA.data.brand} · {phoneA.data.year}</span>
                <span className="mt-1 block leading-tight font-bold text-neutral-100 lg:text-lg">{phoneA.data.model}</span>
              </div>
              <div role="columnheader" className="min-w-0 border-l border-neutral-700 px-2 py-3 sm:px-3">
                <span className="block truncate text-[0.6rem] font-semibold tracking-wide text-neutral-400 uppercase lg:text-xs">{phoneB.data.brand} · {phoneB.data.year}</span>
                <span className="mt-1 block leading-tight font-bold text-neutral-100 lg:text-lg">{phoneB.data.model}</span>
              </div>
            </div>
            {groups.map((group, gi) => (
              <div key={gi} role="rowgroup" className={gi > 0 ? 'border-t-2 border-neutral-700' : ''}>
                {group.rows.map((row, i) => (
                  <div
                    key={row.label}
                    role="row"
                    className={`grid grid-cols-[6.5rem_minmax(0,1fr)_minmax(0,1fr)] border-b border-neutral-700 last:border-b-0 sm:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)] ${i % 2 === 1 ? 'bg-neutral-900/50' : ''}`}
                  >
                    <div role="rowheader" className="border-r border-neutral-700 bg-neutral-900/70 px-2 py-3 text-left align-top text-[0.65rem] leading-snug font-bold tracking-wide text-neutral-400 uppercase sm:px-3 lg:text-xs">
                      {row.label}
                    </div>
                    <div role="cell" className="min-w-0 border-r border-neutral-700 px-2 py-3 leading-relaxed text-neutral-100 sm:px-3">
                      {row.a ?? <span className="text-neutral-500">{strings.compare.dash}</span>}
                    </div>
                    <div role="cell" className="min-w-0 px-2 py-3 leading-relaxed text-neutral-100 sm:px-3">
                      {row.b ?? <span className="text-neutral-500">{strings.compare.dash}</span>}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <p className="text-center text-neutral-500">{strings.compare.empty}</p>
          {!phoneA && !phoneB && suggestedMatchups.length > 0 && (
            <section className="mx-auto mt-8 max-w-3xl">
              <h2 className="mb-3 text-sm font-semibold tracking-wide text-neutral-400">{strings.compare.suggestedTitle}</h2>
              <ul className="grid gap-3 sm:grid-cols-3">
                {suggestedMatchups.map(({ first, second, story }) => (
                  <li key={`${first.slug}-${second.slug}`}>
                    <a
                      href={`?a=${encodeURIComponent(first.slug)}&b=${encodeURIComponent(second.slug)}`}
                      onClick={(event) => {
                        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                        event.preventDefault();
                        setSelected({ a: first.slug, b: second.slug });
                        setQuery({ a: '', b: '' });
                      }}
                      className="block h-full rounded-sm border border-neutral-800 bg-neutral-900/40 p-4 transition-colors motion-ui hover-desktop:border-orange-500"
                    >
                      <span className="block text-xs text-neutral-500">{first.data.brand} · {first.data.year}</span>
                      <span className="block font-semibold text-neutral-200">{first.data.model}</span>
                      <span className="my-1 block text-xs font-semibold tracking-wider text-orange-500">VS</span>
                      <span className="block text-xs text-neutral-500">{second.data.brand} · {second.data.year}</span>
                      <span className="block font-semibold text-neutral-200">{second.data.model}</span>
                      <span className="mt-3 block border-l-2 border-orange-500/60 pl-2 text-sm text-neutral-400">{story}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
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
  quickPhones: ComparePhoneLite[];
  placeholder: string;
  locale: Locale;
  strings: Strings;
}

function PhoneSlot({ slot, phone, query, onQueryChange, onSelect, onClear, candidates, quickPhones, placeholder, locale, strings }: PhoneSlotProps) {
  if (phone) {
    const { data, slug } = phone;
    return (
      <div className="rounded-sm border border-neutral-800 bg-neutral-900 p-4">
        <div className="flex items-start justify-between gap-2">
          <a href={localePath(locale, `/phones/${slug}/`)} className="flex min-w-0 gap-3">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-neutral-950 p-1.5">
              {data.image ? (
                <>
                  <img data-image-fallback src={data.image} alt={`${data.brand} ${data.model}`} className="h-full w-full object-contain" />
                  <div data-image-fallback-placeholder className="absolute inset-0 hidden flex items-center justify-center bg-neutral-950 p-1.5">
                    <PlaceholderIcon className="h-full w-full text-neutral-700" />
                  </div>
                </>
              ) : (
                <PlaceholderIcon className="h-full w-full text-neutral-700" />
              )}
            </div>
            <div className="min-w-0">
              <p className="text-xs text-neutral-500">
                {data.brand} · {data.year}
              </p>
              <p className="truncate font-semibold leading-tight">{data.model}</p>
              {data.priceUsdAtLaunch != null && data.priceSourceUrl && <p className="mt-1 text-xs font-bold text-orange-500">${data.priceUsdAtLaunch} USD{data.priceContext && <span className="block font-normal">{data.priceContext}</span>}</p>}
            </div>
          </a>
          <button
            type="button"
            onClick={onClear}
            className="shrink-0 text-xs text-neutral-500 underline transition-colors motion-ui hover-desktop:text-neutral-300"
          >
            {strings.compare.change}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-sm border border-neutral-800 bg-neutral-900 p-4">
      <input
        id={`phone-search-${slot}`}
        type="search"
        aria-label={placeholder}
        aria-controls={query.trim() ? `phone-results-${slot}` : undefined}
        autoComplete="off"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onQueryChange('');
          if (event.key === 'Enter' && query.trim() && candidates[0]) {
            event.preventDefault();
            onSelect(candidates[0].slug);
          }
          if (event.key === 'ArrowDown' && query.trim() && candidates.length > 0) {
            event.preventDefault();
            document.querySelector<HTMLButtonElement>(`#phone-results-${slot} button`)?.focus();
          }
        }}
        placeholder={placeholder}
        className="w-full rounded-sm border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none"
      />
      {!query.trim() && quickPhones.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold tracking-wide text-neutral-400">{COMPARE_QUICK[locale].phones}</p>
          <div className="flex flex-wrap gap-2">
            {quickPhones.map((candidate) => (
              <button key={candidate.slug} type="button" onClick={() => onSelect(candidate.slug)}
                className="min-h-10 rounded-sm border border-neutral-700 px-3 py-2 text-left text-xs text-neutral-200 transition-colors motion-ui hover-desktop:border-orange-500 hover-desktop:text-orange-500">
                {candidate.data.brand} {candidate.data.model}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-xs text-neutral-500">{COMPARE_QUICK[locale].brands}</span>
            {['Nokia', 'Siemens', 'Samsung', 'Apple', 'Google'].map((brand) => (
              <button key={brand} type="button" onClick={() => {
                onQueryChange(brand);
                document.getElementById(`phone-search-${slot}`)?.focus();
              }} className="min-h-9 text-xs text-orange-500 underline underline-offset-4 hover-desktop:text-orange-400">{brand}</button>
            ))}
          </div>
        </div>
      )}
      {query.trim() && (
        <ul id={`phone-results-${slot}`} className="mt-3 max-h-72 overflow-y-auto rounded-sm border border-neutral-800 bg-neutral-900">
          {candidates.length === 0 ? (
            <li className="px-3 py-2 text-sm text-neutral-500">{strings.compare.noResults}</li>
          ) : (
            candidates.map((p) => (
              <li key={p.slug}>
                <button
                  type="button"
                  onClick={() => onSelect(p.slug)}
                  className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition-colors motion-ui hover-desktop:bg-neutral-800"
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
