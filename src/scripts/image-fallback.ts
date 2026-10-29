function revealImageFallback(image: HTMLImageElement): void {
  if (image.dataset.fallbackHandled === 'true') return;
  image.dataset.fallbackHandled = 'true';
  image.classList.add('hidden');

  const parent = image.parentElement;
  parent?.querySelector<HTMLElement>('[data-image-fallback-placeholder]')?.classList.remove('hidden');
  parent?.querySelector<HTMLElement>('[data-image-fallback-text]')?.classList.remove('hidden');
}

document.addEventListener(
  'error',
  (event) => {
    const target = event.target;
    if (target instanceof HTMLImageElement && target.hasAttribute('data-image-fallback')) {
      revealImageFallback(target);
    }
  },
  true,
);

// A cached failed image may finish before this module runs, so handle that case too.
document.querySelectorAll<HTMLImageElement>('img[data-image-fallback]').forEach((image) => {
  if (image.complete && image.naturalWidth === 0) revealImageFallback(image);
});
