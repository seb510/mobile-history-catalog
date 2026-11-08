// Animate once on entry; content stays visible without JavaScript.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const selector = 'main > section, main [data-year-group], main .phone-story, .site-footer';
  const candidates = [...document.querySelectorAll<HTMLElement>(selector)].filter(element => !element.parentElement?.closest(selector));
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (reducedMotion.matches) continue;
      const motion = getComputedStyle(document.documentElement);
      entry.target.animate([{ opacity: .15, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], {
        duration: parseFloat(motion.getPropertyValue('--motion-enter')) || 440,
        easing: motion.getPropertyValue('--motion-easing').trim() || 'ease-out',
      });
    }
  }, { threshold: 0, rootMargin: '0px 0px -16px 0px' });
  candidates.forEach(element => {
    if (element.getBoundingClientRect().top > innerHeight && !element.hidden) observer.observe(element);
  });
  reducedMotion.addEventListener('change', () => {
    if (!reducedMotion.matches) return;
    observer.disconnect();
    candidates.forEach(element => element.getAnimations().forEach(animation => animation.cancel()));
  });
}
