export function initVideoPlayer(root: HTMLElement) {
  const surface = root.querySelector<HTMLElement>('[data-video-surface]')!;
  const load = root.querySelector<HTMLButtonElement>('[data-video-load]')!;
  const consent = root.querySelector<HTMLElement>('[data-video-consent]')!;
  const remove = root.querySelector<HTMLButtonElement>('[data-video-remove]')!;

  function reset() {
    surface.querySelector('iframe')?.remove();
    load.hidden = false;
    consent.hidden = false;
    remove.hidden = true;
  }

  function play(focus = true) {
    const id = root.dataset.videoId;
    if (!id || !/^[\w-]{11}$/.test(id) || surface.querySelector('iframe')) return;
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1`;
    frame.title = surface.dataset.title ?? '';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    load.hidden = true;
    consent.hidden = true;
    remove.hidden = false;
    surface.append(frame);
    if (focus) frame.focus();
  }

  load.addEventListener('click', () => play());

  remove.addEventListener('click', () => {
    reset();
    load.focus();
  });

  return { play, reset };
}
