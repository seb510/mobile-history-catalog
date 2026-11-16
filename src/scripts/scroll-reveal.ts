// Animate meaningful page sections as they enter the viewport. Content remains
// visible without JavaScript, and the magazine keeps its original quiet motion.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const selector = 'main > section, main [data-year-group], main [data-era-heading], main [data-year-heading], main [data-phone-card], main .brand-index-card, main .phone-story, main .phone-story-section, main .phone-spec-surface, main .home-cover-feature, main .home-topic-nav, main .home-story-section, .site-footer';
  const quietTargets = 'main > section, main [data-year-group], main .phone-story, .site-footer';
  const animatedContent = '[data-era-heading], [data-year-heading], [data-phone-card], .brand-index-card, .phone-story-section, .phone-spec-surface, .home-cover-feature, .home-topic-nav, .home-story-section';
  const candidates = [...document.querySelectorAll<HTMLElement>(selector)].filter(element => {
    if (element.hidden || element.closest('[hidden]')) return false;
    return element.getBoundingClientRect().top > innerHeight;
  });
  const running = new Map<Element, Animation>();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const modern = document.documentElement.dataset.design === 'modern';
      if (modern && entry.intersectionRatio < .12) continue;
      observer.unobserve(entry.target);
      if (reducedMotion.matches) continue;
      const element = entry.target as HTMLElement;
      if (!modern && (!element.matches(quietTargets) || element.parentElement?.closest(quietTargets))) continue;
      // Modern reveals its cards and section markers individually. The magazine
      // keeps the original single, quiet entrance for each larger section.
      if (modern && element.matches('main > section') && element.querySelector(animatedContent)) continue;
      const motion = getComputedStyle(document.documentElement);
      const duration = parseFloat(motion.getPropertyValue('--motion-enter')) || 440;
      let keyframes: Keyframe[];
      let delay = 0;
      if (modern) {
        const isCard = element.matches('[data-phone-card],.brand-index-card,.home-cover-feature');
        const distance = isCard ? 26 : 18;
        const parentIndex = element.parentElement ? Array.from(element.parentElement.children).indexOf(element) : 0;
        delay = isCard ? Math.max(0, parentIndex % 4) * 55 : 0;
        keyframes = [
          { opacity: 0, translate: `0 ${distance}px`, scale: isCard ? '.965' : '.985' },
          { opacity: 1, translate: '0 0', scale: '1' },
        ];
      } else {
        const distance = 4;
        keyframes = [{ opacity: .72, translate: `0 ${distance}px` }, { opacity: 1, translate: '0 0' }];
      }
      const animation = element.animate(keyframes, {
        duration: modern ? Math.max(duration, 620) : duration,
        delay,
        easing: motion.getPropertyValue('--motion-easing').trim() || 'ease-out',
      });
      running.set(element, animation);
      animation.finished.then(() => running.delete(element)).catch(() => running.delete(element));
    }
  }, { threshold: [0,.12], rootMargin: '0px 0px -24px 0px' });

  candidates.forEach(element => observer.observe(element));
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
