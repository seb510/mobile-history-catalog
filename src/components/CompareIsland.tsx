import { useEffect, useMemo, useState } from 'react';
import type { CollectionEntry } from 'astro:content';
import { localePath, type Locale } from '../lib/locales';
import { COMPARE_QUICK, COMPARE_DESIGN, DESIGN_EDITORIAL, type t } from '../lib/ui-strings';
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
    <svg viewBox="0 0 200 150" className={className} aria-hidden="true"><path d="M43 52h18M43 60h10M139 90h18M147 98h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".25" /><g transform="translate(52 27) scale(1.5)"><rect x="18" y="7" width="28" height="50" rx="7" fill="none" stroke="currentColor" strokeWidth="2.5" /><rect x="24" y="14" width="16" height="14" rx="2" fill="currentColor" opacity=".2" /><path d="M29 32h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="25" cy="37" r="1.8" fill="currentColor" /><circle cx="32" cy="37" r="1.8" fill="currentColor" /><circle cx="39" cy="37" r="1.8" fill="currentColor" /><circle cx="25" cy="44" r="1.8" fill="currentColor" /><circle cx="32" cy="44" r="1.8" fill="currentColor" /><circle cx="39" cy="44" r="1.8" fill="currentColor" /><circle cx="25" cy="51" r="1.8" fill="currentColor" /><circle cx="32" cy="51" r="1.8" fill="currentColor" /><circle cx="39" cy="51" r="1.8" fill="currentColor" /></g></svg>
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
  const [differencesOnly, setDifferencesOnly] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'manual'>('idle');
  const [shareUrl, setShareUrl] = useState('');
  const editorial = DESIGN_EDITORIAL[locale];
  const design = COMPARE_DESIGN[locale];
  const bySlug = useMemo(() => new Map(phones.map((p) => [p.slug, p])), [phones]);
  const suggestedMatchups = [
    { a: 'nokia-3210', b: 'nokia-3310', story: strings.compare.suggestions.gsmEra },
    { a: 'sony-ericsson-w800i', b: 'motorola-rokr-e1', story: strings.compare.suggestions.musicPhones },
    { a: 'motorola-razr-v3', b: 'nokia-n95', story: strings.compare.suggestions.mechanics },
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
    setCopyState('idle');
  }, [selected.a, selected.b, ready]);

  const select = (slot: Slot, slug: string) => {
    setSelected((prev) => ({ ...prev, [slot]: slug }));
    setQuery((prev) => ({ ...prev, [slot]: '' }));
    requestAnimationFrame(() => document.getElementById(`phone-selected-${slot}`)?.focus());
  };
  const clear = (slot: Slot) => setSelected((prev) => ({ ...prev, [slot]: null }));
  const swap = () => setSelected((prev) => ({ a: prev.b, b: prev.a }));
  const resetComparison = () => {
    setSelected({ a: null, b: null });
    setQuery({ a: '', b: '' });
    setDifferencesOnly(false);
    requestAnimationFrame(() => document.getElementById('phone-search-a')?.focus());
  };
  const copyLink = async () => {
    const url = window.location.href;
    setShareUrl(url);
    try {
      await navigator.clipboard.writeText(url);
      setCopyState('copied');
    } catch {
      setCopyState('manual');
    }
  };
  const quickPhones = (other: string | null) => {
    const curated = ['nokia-3310', 'motorola-razr-v3', 'sony-ericsson-w800i', 'siemens-sl55', 'nokia-7610', 'nokia-n95'];
    const opposite = other ? bySlug.get(other) : undefined;
    const sameBrand = opposite ? phones.filter((p) => p.data.year <= 2007 && p.data.brand === opposite.data.brand && p.slug !== other)
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

  const highlights = groups.flatMap((group) => group.rows).filter((row) =>
    [strings.specs.display, strings.specs.camera, strings.specs.weight].some((label) => label === row.label) && row.a && row.b);
  const visibleGroups = groups.map((group) => ({ ...group, rows: group.rows.filter((row) => !differencesOnly || row.a !== row.b) })).filter((group) => group.rows.length);
  const rowCount = visibleGroups.reduce((count, group) => count + group.rows.length, 0);

  return (
    <div>
      <div className={`compare-slots grid items-stretch gap-3 sm:grid-cols-2 sm:gap-4 ${phoneA && phoneB ? 'grid-cols-2' : 'grid-cols-1'}`}>
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
          {highlights.length > 0 && <details className="compare-summary mb-5 border-y border-neutral-800">
            <summary className="min-h-11 cursor-pointer py-3 text-sm font-semibold text-neutral-300">{editorial.overview}</summary>
            <div className="compare-overview">
              <div className="compare-overview-row text-xs font-semibold text-neutral-500"><span aria-hidden="true"></span><span>{phoneA.data.model}</span><span>{phoneB.data.model}</span></div>
              {highlights.map((row) => <div key={row.label} className="compare-overview-row">
                <p className="text-xs font-semibold text-neutral-500">{row.label}</p>
                <p className="min-w-0 text-sm text-neutral-200">{row.a}</p>
                <p className="min-w-0 text-sm text-neutral-200">{row.b}</p>
              </div>)}
            </div>
          </details>}
          <div className="compare-actions mb-4 flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={swap}
            className="control-button compare-action-icon"
            title={strings.compare.swap}
            aria-label={strings.compare.swap}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
              <path d="M4 7h15l-3-3M20 17H5l3 3" />
            </svg>
            <span>{strings.compare.swap}</span>
          </button>
          <button type="button" className="control-button compare-action-icon" title={editorial.differences} aria-label={editorial.differences} aria-pressed={differencesOnly} onClick={() => setDifferencesOnly(!differencesOnly)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
              <path d="M4 5h16l-6.5 7.2V19l-3 1v-7.8L4 5Z" />
            </svg>
            <span>{editorial.differences}</span>
          </button>
          <button type="button" className="control-button compare-action-icon" title={editorial.copyLink} aria-label={editorial.copyLink} onClick={copyLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
              <rect x="8" y="8" width="12" height="12" rx="1.5" />
              <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8" />
            </svg>
            <span>{editorial.copyLink}</span>
          </button>
          <button type="button" className="control-button compare-action-icon" title={strings.compare.reset} aria-label={strings.compare.reset} onClick={resetComparison}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
              <path d="M4 7v5h5M5.2 12a7 7 0 1 0 2-5" />
            </svg>
            <span>{strings.compare.reset}</span>
          </button>
          </div>
          <p role="status" className="text-sm text-orange-500">{copyState === 'copied' ? editorial.copied : copyState === 'manual' ? editorial.manualCopy : ''}</p>
          {copyState === 'manual' && <input readOnly aria-label={editorial.copyLink} value={shareUrl} onFocus={(event) => event.target.select()} className="mb-4 w-full rounded-sm border border-neutral-700 bg-neutral-900 p-3 text-base" />}
          <p className="mb-3 text-xs text-neutral-500">{editorial.differenceNote}</p>
          <p className="mb-4 text-xs leading-relaxed text-neutral-500">{editorial.dataNote}</p>
          <p className="mb-3 text-xs tabular-nums text-neutral-500" role="status">{design.rows.replace('{count}', String(rowCount))}</p>
          {rowCount === 0 && <p className="mb-4 border border-neutral-700 p-4 text-sm text-neutral-300">{design.identical}</p>}
          <div className="compare-table rounded-sm border border-neutral-700 bg-neutral-950/20 text-sm lg:text-base" role="table" aria-label={`${phoneA.data.brand} ${phoneA.data.model} / ${phoneB.data.brand} ${phoneB.data.model}`}>
            <div role="row" className="compare-table-head grid grid-cols-[6.5rem_minmax(0,1fr)_minmax(0,1fr)] border-b-2 border-orange-500 bg-neutral-900 sm:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)]">
              <div role="columnheader" className="flex items-end px-2 py-3 text-[0.6rem] leading-snug font-bold tracking-wide text-neutral-400 uppercase sm:px-3 lg:text-xs">
                {strings.compare.tableHead.characteristic}
              </div>
              <div role="columnheader" className="min-w-0 border-l border-neutral-700 px-2 py-3 sm:px-3">
                <span className="block text-[0.6rem] font-semibold tracking-wide text-neutral-400 uppercase lg:text-xs">A · {phoneA.data.brand} · {phoneA.data.year}</span>
                <span className="mt-1 block leading-tight font-bold text-neutral-100 lg:text-lg">{phoneA.data.model}</span>
              </div>
              <div role="columnheader" className="min-w-0 border-l border-neutral-700 px-2 py-3 sm:px-3">
                <span className="block text-[0.6rem] font-semibold tracking-wide text-neutral-400 uppercase lg:text-xs">B · {phoneB.data.brand} · {phoneB.data.year}</span>
                <span className="mt-1 block leading-tight font-bold text-neutral-100 lg:text-lg">{phoneB.data.model}</span>
              </div>
            </div>
            {visibleGroups.map((group, gi) => (
              <div key={gi} role="rowgroup" className={gi > 0 ? 'border-t-2 border-neutral-700' : ''}>
                {group.rows.map((row, i) => (
                  <div
                    key={row.label}
                    role="row"
                    className={`compare-spec-row grid grid-cols-[6.5rem_minmax(0,1fr)_minmax(0,1fr)] border-b border-neutral-700 last:border-b-0 sm:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)] ${i % 2 === 1 ? 'bg-neutral-900/50' : ''} ${row.a != null && row.b != null && row.a !== row.b ? 'compare-different' : ''}`}
                  >
                    <div role="rowheader" className="border-r border-neutral-700 bg-neutral-900/70 px-2 py-3 text-left align-top text-[0.65rem] leading-snug font-bold tracking-wide text-neutral-400 uppercase sm:px-3 lg:text-xs">
                      {row.label}
                    </div>
                    <div role="cell" className="min-w-0 border-r border-neutral-700 px-2 py-3 leading-relaxed text-neutral-100 sm:px-3">
                      {row.a ?? <span className="text-xs text-neutral-500">{editorial.unknown}</span>}
                    </div>
                    <div role="cell" className="min-w-0 px-2 py-3 leading-relaxed text-neutral-100 sm:px-3">
                      {row.b ?? <span className="text-xs text-neutral-500">{editorial.unknown}</span>}
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
      <div className="compare-selected rounded-sm border border-neutral-700 border-t-2 border-t-orange-500 bg-neutral-900 p-3 sm:p-5">
        <p className="editorial-kicker mb-3 text-orange-500">{slot === 'a' ? COMPARE_DESIGN[locale].first : COMPARE_DESIGN[locale].second}</p>
        <div className="flex items-start justify-between gap-2">
          <a id={`phone-selected-${slot}`} href={localePath(locale, `/phones/${slug}/`)} className="flex min-w-0 gap-2 sm:gap-3">
            <div className="compare-slot-image relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-neutral-800 bg-neutral-950 p-1.5">
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
              <p className="mt-1 break-words text-lg font-extrabold leading-tight sm:text-2xl">{data.model}</p>
              {data.formFactor && <p className="mt-2 text-xs text-neutral-400">{strings.formFactors[data.formFactor]}</p>}
            </div>
          </a>
          <button
            type="button"
            onClick={() => { onClear(); requestAnimationFrame(() => document.getElementById(`phone-search-${slot}`)?.focus()); }}
            className="compare-change shrink-0 text-xs text-orange-500 underline underline-offset-4 transition-colors motion-ui hover-desktop:text-orange-400"
          >
            {strings.compare.change}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-w-0 rounded-sm border border-neutral-800 bg-neutral-900 p-3 sm:p-4">
      <label htmlFor={`phone-search-${slot}`} className="filter-label">{placeholder}</label>
      <div className="catalog-search-field">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
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
        className="w-full text-base text-neutral-100 placeholder:text-neutral-500"
      />
      </div>
      {!query.trim() && quickPhones.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold tracking-wide text-neutral-400">{COMPARE_QUICK[locale].phones}</p>
          <div className="compare-quick flex flex-wrap gap-2">
            {quickPhones.map((candidate) => (
              <button key={candidate.slug} type="button" onClick={() => onSelect(candidate.slug)}
                className="min-h-10 rounded-sm border border-neutral-700 px-3 py-2 text-left text-xs text-neutral-200 transition-colors motion-ui hover-desktop:border-orange-500 hover-desktop:text-orange-500">
                {candidate.data.brand} {candidate.data.model}
              </button>
            ))}
          </div>
          <details className="mt-3">
            <summary className="min-h-11 cursor-pointer text-xs leading-11 text-neutral-500">{COMPARE_QUICK[locale].brands}</summary>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
            {['Nokia', 'Siemens', 'Motorola', 'Sony Ericsson', 'Samsung'].map((brand) => (
              <button key={brand} type="button" onClick={() => {
                onQueryChange(brand);
                document.getElementById(`phone-search-${slot}`)?.focus();
              }} className="min-h-9 text-xs text-orange-500 underline underline-offset-4 hover-desktop:text-orange-400">{brand}</button>
            ))}
            </div>
          </details>
        </div>
      )}
      {query.trim() && (
        <ul id={`phone-results-${slot}`} className="mt-3 max-h-72 overflow-y-auto rounded-sm border border-neutral-800 bg-neutral-900" onKeyDown={(event) => {
          const items = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('button'));
          const index = items.indexOf(document.activeElement as HTMLButtonElement);
          if (event.key === 'Escape') { event.preventDefault(); onQueryChange(''); document.getElementById(`phone-search-${slot}`)?.focus(); }
          if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
            event.preventDefault();
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
            items[next]?.focus();
          }
        }}>
          {candidates.length === 0 ? (
            <li className="px-3 py-2 text-sm text-neutral-500">{strings.compare.noResults}</li>
          ) : (
            candidates.map((p) => (
              <li key={p.slug}>
                <button
                  type="button"
                  onClick={() => onSelect(p.slug)}
                  className="flex min-h-11 w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition-colors motion-ui hover-desktop:bg-neutral-800"
                >
                  <span className="min-w-0 break-words">
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
