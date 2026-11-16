export function initEvolution(timeline: HTMLElement, dialog: HTMLDialogElement) {
  const frames = [...timeline.querySelectorAll<HTMLElement>('[data-evolution-frame]')];
  const stories = [...timeline.querySelectorAll<HTMLElement>('.story')];
  const steps = [...timeline.querySelectorAll<HTMLButtonElement>('[data-evolution-step]')];
  const controls = timeline.querySelector<HTMLElement>('[data-evolution-controls]');
  const previous = timeline.querySelector<HTMLButtonElement>('[data-evolution-prev]');
  const next = timeline.querySelector<HTMLButtonElement>('[data-evolution-next]');
  const status = timeline.querySelector<HTMLElement>('[data-evolution-status]');
  const picker = timeline.querySelector<HTMLSelectElement>('[data-filter="evolution-model"]');
  const pickerRoot = picker?.closest('[data-select]');
  const rail = timeline.querySelector<HTMLElement>('[data-evolution-rail]');
  const years = timeline.querySelector<HTMLElement>('[data-evolution-years]');
  if (frames.length === 0 || !controls || !previous || !next || !status) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const touch = window.matchMedia('(pointer: coarse)');
  const shortViewport = window.matchMedia('(max-height: 22rem), (max-width: 39.99rem) and (max-height: 28rem)');
  const last = frames.length - 1;
  let active = -1;
  let stepDistance = 1;
  let request = 0;
  let transition: { started: number; next?: number } | undefined;
  let lastWheelAt = -Infinity;
  let wheelHandled = false;
  let touchStart: { id: number; x: number; y: number } | undefined;

  const clamp = (value: number) => Math.max(0, Math.min(1, value));
  const ease = (value: number) => value * value * (3 - 2 * value);
  const fadeOut = 145;
  const fadeIn = 205;

  function requestedIndex() {
    return Math.max(0, Math.min(last, Math.round(dialog.scrollTop / stepDistance)));
  }

  function updateRail() {
    if (!rail || !years) return;
    rail.toggleAttribute('data-more-start', years.scrollLeft > 1);
    rail.toggleAttribute('data-more-end', years.scrollLeft + years.clientWidth < years.scrollWidth - 1);
  }

  function revealYear(button?: HTMLButtonElement) {
    if (!years || !button) return;
    const viewport = years.getBoundingClientRect();
    const item = button.getBoundingClientRect();
    const start = years.scrollLeft > 1 ? viewport.left + 20 : viewport.left;
    const end = years.scrollLeft + years.clientWidth < years.scrollWidth - 1 ? viewport.right - 20 : viewport.right;
    if (item.left >= start && item.right <= end) return;
    years.scrollBy({ left: (item.left + item.right - viewport.left - viewport.right) / 2, behavior: reduced.matches ? 'instant' : 'smooth' });
  }

  function loadPhoto(frame?: HTMLElement, lazy = false) {
    const image = frame?.querySelector<HTMLImageElement>('[data-evolution-src]');
    const src = image?.dataset.evolutionSrc;
    if (!image || !src) return;
    delete image.dataset.evolutionSrc;
    image.loading = lazy ? 'lazy' : 'eager';
    image.addEventListener('load', () => {
      image.classList.remove('hidden');
      frame?.querySelector('[data-image-fallback-placeholder]')?.classList.add('hidden');
    }, { once: true });
    image.setAttribute('data-image-fallback', '');
    image.src = src;
  }

  function render(now: number) {
    request = 0;
    if (shortViewport.matches || !dialog.open) return;

    const requested = requestedIndex();
    let current = requested;
    let opacity = 1;
    if (reduced.matches) transition = undefined;
    else if (!transition && active >= 0 && active !== requested) {
      transition = { started: now };
      loadPhoto(frames[requested]);
    }

    if (transition) {
      const elapsed = now - transition.started;
      if (elapsed < fadeOut) {
        current = active;
        opacity = 1 - ease(clamp(elapsed / fadeOut));
      } else {
        // Follow the latest scroll position until the new photo begins to appear.
        transition.next ??= requested;
        current = transition.next;
        opacity = ease(clamp((elapsed - fadeOut) / fadeIn));
        if (elapsed >= fadeOut + fadeIn) transition = undefined;
      }
      if (transition || current !== requested) schedule();
    }

    frames[current].style.setProperty('--frame-opacity', String(opacity));
    frames[current].style.setProperty('--frame-caption', String(.68 + .32 * opacity));

    if (active === current) return;
    loadPhoto(frames[current]);
    loadPhoto(frames[current + 1]);
    loadPhoto(frames[current - 1]);
    frames.forEach((frame, index) => {
      frame.inert = index !== current;
      frame.toggleAttribute('data-active', index === current);
    });
    steps.forEach((button, index) => {
      if (index === current) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
    revealYear(steps[current]);
    previous!.setAttribute('aria-disabled', String(current === 0));
    next!.setAttribute('aria-disabled', String(current === last));
    if (picker && picker.value !== String(current)) {
      picker.value = String(current);
      picker.dispatchEvent(new Event('select-sync'));
    }
    if (active >= 0) status!.textContent = frames[current].dataset.announcement ?? '';
    active = current;
  }

  function schedule() {
    if (!request) request = window.requestAnimationFrame(render);
  }

  function measure() {
    if (!dialog.open) return;
    stepDistance = touch.matches ? 120 : 100;
    timeline.style.setProperty('--walk', `${stepDistance * last}px`);
    timeline.toggleAttribute('data-scroll', !shortViewport.matches);
    controls!.hidden = shortViewport.matches || last === 0;
    updateRail();
    //  Measure the tallest caption at this width so each title shares the same starting point.
    timeline.style.removeProperty('--story-height');
    if (shortViewport.matches) {
      transition = undefined;
      for (const frame of frames) {
        frame.inert = false;
        loadPhoto(frame, true);
      }
      active = -1;
    } else {
      const storyHeight = Math.ceil(Math.max(...stories.map((story) => story.getBoundingClientRect().height)));
      timeline.style.setProperty('--story-height', `${storyHeight}px`);
    }
    schedule();
  }

  function goTo(index: number) {
    if (index < 0 || index > last) return;
    loadPhoto(frames[index]);
    dialog.scrollTo({ top: index * stepDistance, behavior: 'instant' });
    schedule();
  }

  function moveOne(direction: number) {
    if (transition || active !== requestedIndex()) return;
    goTo(active + direction);
  }

  dialog.addEventListener('wheel', (event) => {
    if (controls.hidden || event.ctrlKey || event.shiftKey) return;
    if (pickerRoot?.querySelector('[data-select-trigger][aria-expanded="true"]')) {
      if (!(event.target instanceof Element && event.target.closest('.filter-select-list'))) event.preventDefault();
      return;
    }
    const vertical = Math.abs(event.deltaY) > Math.abs(event.deltaX);
    if (!vertical && years?.contains(event.target as Node)) return;
    event.preventDefault();
    if (!vertical) return;

    // A trackpad gesture emits a burst of wheel events, including the momentum tail.
    const now = performance.now();
    if (now - lastWheelAt > 130) wheelHandled = false;
    lastWheelAt = now;
    if (wheelHandled || Math.abs(event.deltaY) < 1) return;
    wheelHandled = true;
    moveOne(Math.sign(event.deltaY));
  }, { passive: false });

  dialog.addEventListener('touchstart', (event) => {
    const point = event.touches[0];
    touchStart = !controls.hidden && !pickerRoot?.contains(event.target as Node) && event.touches.length === 1
      ? { id: point.identifier, x: point.clientX, y: point.clientY }
      : undefined;
  }, { passive: true });
  dialog.addEventListener('touchcancel', () => { touchStart = undefined; }, { passive: true });
  dialog.addEventListener('touchend', (event) => {
    if (!touchStart) return;
    const start = touchStart;
    touchStart = undefined;
    if (controls.hidden) return;
    const end = [...event.changedTouches].find((point) => point.identifier === start.id);
    if (!end) return;
    const distance = start.y - end.clientY;
    if (Math.abs(distance) >= 40 && Math.abs(distance) > Math.abs(start.x - end.clientX)) {
      moveOne(Math.sign(distance));
    }
  }, { passive: true });

  steps.forEach((button, index) => button.addEventListener('click', () => goTo(index)));
  years?.addEventListener('scroll', updateRail, { passive: true });
  years?.addEventListener('focusin', (event) => {
    if (event.target instanceof HTMLButtonElement) revealYear(event.target);
  });
  picker?.addEventListener('change', () => goTo(Number(picker.value)));
  previous.addEventListener('click', () => goTo(requestedIndex() - 1));
  next.addEventListener('click', () => goTo(requestedIndex() + 1));
  timeline.addEventListener('keydown', (event) => {
    if (pickerRoot?.contains(event.target as Node) || controls.hidden || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const direction = ['ArrowRight', 'ArrowDown', 'PageDown'].includes(event.key) ? 1
      : ['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key) ? -1 : 0;
    if (!direction) return;
    event.preventDefault();
    goTo(requestedIndex() + direction);
  });
  dialog.addEventListener('scroll', schedule, { passive: true });
  dialog.addEventListener('close', () => {
    transition = undefined;
    active = -1;
    lastWheelAt = -Infinity;
    wheelHandled = false;
    touchStart = undefined;
  });
  window.addEventListener('resize', measure);
  document.fonts?.ready.then(measure);
  reduced.addEventListener('change', schedule);
  measure();
  return measure;
}
