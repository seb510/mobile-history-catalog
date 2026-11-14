// Animate once on entry; content stays visible without JavaScript.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const selector = 'main > section, main [data-year-group], main .phone-story, .site-footer';
  const candidates = [...document.querySelectorAll<HTMLElement>(selector)].filter(element => !element.parentElement?.closest(selector));
  const running = new Map<Element, Animation>();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (reducedMotion.matches) continue;
      const motion = getComputedStyle(document.documentElement);
      const distance = document.documentElement.dataset.design === 'modern' ? 8 : 4;
      const animation = entry.target.animate([{ opacity: .72, translate: `0 ${distance}px` }, { opacity: 1, translate: 'none' }], {
        duration: parseFloat(motion.getPropertyValue('--motion-enter')) || 440,
        easing: motion.getPropertyValue('--motion-easing').trim() || 'ease-out',
      });
      running.set(entry.target, animation);
      animation.finished.then(() => running.delete(entry.target)).catch(() => running.delete(entry.target));
    }
  }, { threshold: 0, rootMargin: '0px 0px -16px 0px' });
  candidates.forEach(element => {
    if (element.getBoundingClientRect().top > innerHeight && !element.hidden) observer.observe(element);
  });
  document.addEventListener('focusin', event => {
    if (!(event.target instanceof Element)) return;
    for (const [element, animation] of running) {
      if (element.contains(event.target)) animation.cancel();
    }
  });
  reducedMotion.addEventListener('change', () => {
    if (!reducedMotion.matches) return;
    observer.disconnect();
    candidates.forEach(element => element.getAnimations().forEach(animation => animation.cancel()));
  });
}
