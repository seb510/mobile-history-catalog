/** A small scroll landmark for the visible (filtered) year groups. No card work on scroll. */
export function initCatalogPosition() {
  const indicator = document.querySelector<HTMLElement>('[data-catalog-position]');
  const list = document.querySelector<HTMLElement>('[data-catalog-list]');
  const header = document.getElementById('site-header');
  if (!indicator || !list) return;
  const year = indicator.querySelector<HTMLElement>('[data-current-year]')!;
  const count = indicator.querySelector<HTMLElement>('[data-current-year-count]')!;
  const allGroups = Array.from(list.querySelectorAll<HTMLElement>('[data-year-group]'));
  let groups = allGroups;
  let headerHeight = 59;
  let pending = false;
  const plural = new Intl.PluralRules(indicator.dataset.locale);

  const update = () => {
    pending = false;
    const offset = document.documentElement.dataset.headerHidden === 'true' ? 0 : headerHeight;
    const firstHeading = groups[0]?.querySelector<HTMLElement>('[data-year-heading]');
    // Do not repeat the year until its original heading has passed the header.
    const visible = !list.hidden && firstHeading && firstHeading.getBoundingClientRect().bottom <= offset
      && list.getBoundingClientRect().bottom > offset + 45
      && window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 2;
    indicator.hidden = !visible;
    if (!visible) return;
    // Track the upper reading area, not a few remaining pixels of the preceding year.
    // Keep this line stable when the header slides in/out to avoid changing years on reversal.
    const readingLine = Math.max(headerHeight + 52, Math.min(260, window.innerHeight / 3));
    let current = groups[0];
    for (const group of groups) {
      if (group.getBoundingClientRect().top > readingLine) break;
      current = group;
    }
    const currentYear = current.dataset.yearGroup!;
    const amount = Number(current.querySelector('[data-year-count]')?.textContent ?? 0);
    const category = plural.select(amount);
    const noun = category === 'one' ? indicator.dataset.countOne : category === 'few' ? indicator.dataset.countFew : indicator.dataset.countMany;
    const currentCount = `${amount} ${noun}`;
    if (year.textContent !== currentYear) year.textContent = currentYear;
    if (count.textContent !== currentCount) count.textContent = currentCount;
  };
  const queue = () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(update);
  };
  const measureHeader = () => {
    headerHeight = header?.getBoundingClientRect().height ?? 0;
    indicator.style.setProperty('--catalog-header-height', `${headerHeight}px`);
    queue();
  };
  if (header) new ResizeObserver(measureHeader).observe(header);
  new MutationObserver(queue).observe(document.documentElement, { attributes: true, attributeFilter: ['data-header-hidden'] });
  new ResizeObserver(queue).observe(list);
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue, { passive: true });
  window.addEventListener('pageshow', queue);
  indicator.querySelector('a')?.addEventListener('click', () => {
    requestAnimationFrame(() => document.getElementById('catalog-search')?.focus({ preventScroll: true }));
  });
  measureHeader();
  return {
    refresh() {
      groups = allGroups.filter((group) => !group.hidden);
      queue();
    },
  };
}
