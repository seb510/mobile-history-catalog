export interface CabinetPhone {
  slug: string;
  brand: string;
  model: string;
  year: number;
  path: string;
  image?: string;
  formFactor?: string;
  milestone?: string;
  highlight?: string;
  price?: string;
  recent: boolean;
  video?: { id: string; author: string };
}

export function createCabinetCard(template: HTMLTemplateElement, phone: CabinetPhone, owned: boolean) {
  const frame = template.content.firstElementChild!.cloneNode(true) as HTMLElement;
  const card = frame.querySelector<HTMLElement>('[data-phone-card]')!;
  const name = phone.model.startsWith(phone.brand + ' ') ? phone.model : phone.brand + ' ' + phone.model;
  Object.assign(card.dataset, { slug: phone.slug, brand: phone.brand, year: String(phone.year), form: phone.formFactor ?? '', search: name.toLowerCase() });
  const link = card.querySelector<HTMLAnchorElement>('[data-phone-card-link]')!;
  link.href = phone.path;
  link.ariaLabel = name;
  link.textContent = phone.model;
  const meta = card.querySelector('.editorial-kicker')!;
  meta.firstElementChild!.textContent = phone.brand;
  meta.lastElementChild!.textContent = String(phone.year);
  const image = card.querySelector<HTMLImageElement>('img')!;
  if (phone.image) {
    image.src = phone.image;
    image.alt = name;
  } else {
    image.remove();
    card.querySelector('[data-image-fallback-placeholder]')!.classList.remove('hidden');
  }
  if (!phone.recent) card.querySelector('[data-new-badge]')!.remove();
  const note = card.querySelector('.line-clamp-2')!;
  if (phone.milestone) note.textContent = phone.milestone;
  else note.parentElement!.remove();
  if (phone.price) {
    if (phone.milestone) note.parentElement!.classList.add('phone-card-price-note');
    frame.querySelector('[data-info-bubble]')!.textContent = phone.price;
  } else {
    frame.querySelector('.phone-card-price')!.remove();
    note.parentElement?.classList.remove('phone-card-price-note');
  }
  const toggle = card.querySelector<HTMLButtonElement>('[data-favorite-toggle]')!;
  toggle.dataset.slug = phone.slug;
  toggle.setAttribute('aria-pressed', String(owned));
  toggle.title = toggle.ariaLabel = (owned ? toggle.dataset.labelRemove : toggle.dataset.labelAdd)!;
  const video = card.querySelector<HTMLButtonElement>('[data-card-video]')!;
  if (phone.video) {
    card.dataset.video = 'true';
    Object.assign(video.dataset, { cardVideo: phone.video.id, videoModel: name, videoAuthor: phone.video.author });
    video.title = video.ariaLabel = template.dataset.videoLabel + ' · YouTube · ' + name;
  } else {
    delete card.dataset.video;
    video.remove();
  }
  return frame;
}
