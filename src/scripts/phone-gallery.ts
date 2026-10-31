document.querySelectorAll<HTMLElement>('[data-phone-gallery]').forEach((gallery) => {
    const slides = Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-slide]'));
    const lightboxSlides = Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-lightbox-slide]'));
    const thumbs = Array.from(gallery.querySelectorAll<HTMLButtonElement>('[data-gallery-thumb]'));
    const credits = Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-credit]'));
    const captions = Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-caption]'));
    const lightboxCaptions = Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-lightbox-caption]'));
    const lightboxCredits = Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-lightbox-credit]'));
    const dialog = gallery.querySelector<HTMLDialogElement>('[data-gallery-dialog]');
    const openButton = gallery.querySelector<HTMLButtonElement>('[data-gallery-open]');
    const closeButton = gallery.querySelector<HTMLButtonElement>('[data-gallery-close]');
    const previousButton = gallery.querySelector<HTMLButtonElement>('[data-gallery-previous]');
    const nextButton = gallery.querySelector<HTMLButtonElement>('[data-gallery-next]');
    const counter = gallery.querySelector<HTMLElement>('[data-gallery-counter]');
    const page = gallery.querySelector<HTMLElement>('[data-gallery-page]');
    const surface = gallery.querySelector<HTMLElement>('[data-gallery-surface]');
    const zoomButton = gallery.querySelector<HTMLButtonElement>('[data-gallery-zoom]');
    let activeIndex = 0;
    let zoomed = false;
    let panX = 0;
    let panY = 0;
    const activeImage = () => lightboxSlides[activeIndex]?.querySelector<HTMLImageElement>('img');
    const paintPan = () => {
      const image = activeImage();
      if (!image || !surface) return;
      const maxX = Math.max(0, (image.clientWidth * 2 - surface.clientWidth) / 2);
      const maxY = Math.max(0, (image.clientHeight * 2 - surface.clientHeight) / 2);
      panX = Math.max(-maxX, Math.min(maxX, panX));
      panY = Math.max(-maxY, Math.min(maxY, panY));
      image.style.transform = zoomed ? `translate(${panX}px, ${panY}px) scale(2)` : '';
    };
    const setZoom = (value: boolean) => {
      zoomed = value;
      panX = panY = 0;
      lightboxSlides.forEach(slide => { const image = slide.querySelector('img'); if (image) image.style.transform = ''; });
      surface?.classList.toggle('gallery-zoomed', value);
      if (zoomButton) {
        zoomButton.setAttribute('aria-pressed', String(value));
        zoomButton.textContent = (value ? zoomButton.dataset.zoomOut : zoomButton.dataset.zoomIn) || '';
      }
      paintPan();
    };

    const activate = (index: number, moveFocus = false) => {
      setZoom(false);
      activeIndex = index;
      slides.forEach((slide, slideIndex) => slide.classList.toggle('hidden', slideIndex !== index));
      lightboxSlides.forEach((slide, slideIndex) => slide.classList.toggle('hidden', slideIndex !== index));
      credits.forEach((credit) => credit.classList.toggle('hidden', Number(credit.dataset.galleryCredit) !== index));
      captions.forEach((caption) => caption.classList.toggle('hidden', Number(caption.dataset.galleryCaption) !== index));
      lightboxCaptions.forEach((caption) => caption.classList.toggle('hidden', Number(caption.dataset.galleryLightboxCaption) !== index));
      lightboxCredits.forEach((credit) =>
        credit.classList.toggle('hidden', Number(credit.dataset.galleryLightboxCreditIndex) !== index),
      );
      if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
      if (page) page.textContent = `${index + 1} / ${slides.length}`;
      thumbs.forEach((thumb, thumbIndex) => {
        const selected = thumbIndex === index;
        thumb.setAttribute('aria-pressed', String(selected));
        thumb.classList.toggle('border-orange-500', selected);
        thumb.classList.toggle('border-neutral-700', !selected);
        if (moveFocus && selected) thumb.focus();
        if (selected && gallery.getBoundingClientRect().top < window.innerHeight && gallery.getBoundingClientRect().bottom > 0) {
          const strip = thumb.parentElement;
          if (strip && (thumb.offsetLeft < strip.scrollLeft || thumb.offsetLeft + thumb.offsetWidth > strip.scrollLeft + strip.clientWidth)) strip.scrollLeft = thumb.offsetLeft - strip.offsetLeft;
        }
      });
    };

    openButton?.addEventListener('click', () => {
      if (performance.now() < suppressOpenUntil) return;
      dialog?.showModal();
      closeButton?.focus();
    });
    closeButton?.addEventListener('click', () => dialog?.close());
    previousButton?.addEventListener('click', () => activate((activeIndex - 1 + slides.length) % slides.length));
    nextButton?.addEventListener('click', () => activate((activeIndex + 1) % slides.length));
    dialog?.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog?.addEventListener('keydown', (event) => {
      if (zoomed && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        panX += event.key === 'ArrowLeft' ? 60 : event.key === 'ArrowRight' ? -60 : 0;
        panY += event.key === 'ArrowUp' ? 60 : event.key === 'ArrowDown' ? -60 : 0;
        paintPan(); return;
      }
      if (event.key === '+' || event.key === '=' || event.key === '-') { event.preventDefault(); setZoom(event.key !== '-'); return; }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        activate((activeIndex - 1 + slides.length) % slides.length);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        activate((activeIndex + 1) % slides.length);
      }
    });
    dialog?.addEventListener('close', () => { setZoom(false); openButton?.focus(); });
    zoomButton?.addEventListener('click', () => setZoom(!zoomed));
    surface?.addEventListener('dblclick', (event) => {
      if ((event.target as Element).tagName === 'IMG') setZoom(!zoomed);
    });
    let suppressOpenUntil = 0;
    // Native pointer events keep vertical page scrolling available until zoom is active.
    [openButton, surface].forEach(target => {
      if (!target) return;
      let gesture: { id: number; x: number; y: number; lastX: number; lastY: number; at: number } | null = null;
      target.addEventListener('pointerdown', event => {
        if (!event.isPrimary || event.button !== 0) { gesture = null; return; }
        if ((event.target as Element).closest('button') && target !== openButton) return;
        if (event.pointerType === 'mouse' && !zoomed) return;
        gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, lastX: event.clientX, lastY: event.clientY, at: performance.now() };
        target.setPointerCapture(event.pointerId);
      });
      target.addEventListener('pointermove', event => {
        if (!gesture || gesture.id !== event.pointerId || !zoomed) return;
        panX += event.clientX - gesture.lastX;
        panY += event.clientY - gesture.lastY;
        gesture.lastX = event.clientX; gesture.lastY = event.clientY;
        paintPan();
      });
      target.addEventListener('pointerup', event => {
        if (!gesture || gesture.id !== event.pointerId) return;
        const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
        const elapsed = performance.now() - gesture.at;
        gesture = null;
        if (!zoomed && slides.length > 1 && Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5 && elapsed < 1000) {
          suppressOpenUntil = performance.now() + 400;
          activate((activeIndex + (dx < 0 ? 1 : -1) + slides.length) % slides.length);
        }
      });
      target.addEventListener('pointercancel', () => { gesture = null; });
      target.addEventListener('lostpointercapture', () => { gesture = null; });
    });
    window.addEventListener('resize', () => { if (zoomed) setZoom(false); });

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => activate(index));
      thumb.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'Home' || event.key === 'End') {
          event.preventDefault();
          const nextIndex =
            event.key === 'Home'
              ? 0
              : event.key === 'End'
                ? thumbs.length - 1
                : (index + (event.key === 'ArrowRight' ? 1 : -1) + thumbs.length) % thumbs.length;
          activate(nextIndex, true);
        }
      });
    });
  });
