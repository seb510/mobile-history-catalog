import type { Locale } from './locales';

// Site-chrome strings (nav, footer, filters, spec labels) — separate from phone content, which
// lives in the per-locale markdown files. These are translated manually since there are few of
// them; no i18n library needed for a dictionary this size.
export const UI = {
  uk: {
    siteName: 'Мобільна Історія',
    tagline: 'Таймлайн етапних телефонів з 1998 року',
    nav: { catalog: 'Каталог', about: 'Про проєкт' },
    footer: {
      about:
        'Курований таймлайн мобільних телефонів, що реально змінили індустрію — не повний каталог моделей.',
      inspiredBy: 'Натхненно форматом журналу MobiLux (2004–2016)',
      sisterProject: 'Сестринський проєкт',
      rights: 'Контент ліцензується вільно, де це можливо — атрибуція зображень вказана на сторінках телефонів.',
    },
    filters: {
      brand: 'Бренд',
      year: 'Рік',
      all: 'Усі',
      search: 'Пошук за моделлю…',
      resultsOne: 'телефон',
      resultsFew: 'телефони',
      resultsMany: 'телефонів',
      empty: 'Нічого не знайдено за цими фільтрами.',
      reset: 'Скинути фільтри',
    },
    specs: {
      year: 'Рік', priceUsdAtLaunch: 'Ціна на старті', display: 'Екран', resolution: 'Роздільна здатність',
      chipset: 'Чипсет', ram: 'RAM', storage: 'Пам’ять', storageExpandable: 'Карта пам’яті',
      camera: 'Камера', cameraFront: 'Фронтальна камера', battery: 'Акумулятор', network: 'Зв’язок',
      connectivity: 'Підключення', os: 'ОС', dimensions: 'Габарити', weight: 'Вага', colors: 'Кольори', simType: 'SIM',
      unitsSoldMillions: 'Продано, млн шт.',
    },
    hero: {
      eyebrow: '1998 — сьогодні',
      cta: 'Перейти до каталогу',
      ctaAbout: 'Про проєкт',
      statsPhones: 'телефонів у каталозі',
      statsBrands: 'брендів',
      statsYears: 'років історії',
      popularTitle: 'Найпопулярніші за продажами',
      popularSubtitle: 'Моделі з офіційно підтвердженими рекордними тиражами',
      soldSuffix: 'млн шт.',
    },
    backToTimeline: '← Таймлайн',
    langSwitcher: 'Мова',
    units: { mAh: 'мА·год', gb: 'ГБ', mb: 'МБ', g: 'г' },
    notFound: { title: 'Сторінку не знайдено', body: 'Такого телефону в каталозі немає.', link: 'Повернутись на таймлайн' },
    about: {
      title: 'Про проєкт',
      paragraphs: [
        'Мобільна Історія — таймлайн етапних мобільних телефонів, починаючи з 1998–1999 року (старт масового GSM-буму) і до сьогодні.',
        'Це не повний каталог моделей — ми не конкуруємо з GSMArena. Це курований список телефонів, що реально щось змінили в індустрії чи в тому, як ми користуємося технікою.',
        'Тон і формат натхненні українським журналом MobiLux (2004–2016).',
        'Сестринський проєкт до Watchly — той самий автор і та сама філософія (легальні джерела даних), але інша архітектура: тут усе генерується статично, бо дані курируються вручну й не змінюються між білдами.',
      ],
    },
  },
  ru: {
    siteName: 'Мобильная История',
    tagline: 'Таймлайн знаковых телефонов с 1998 года',
    nav: { catalog: 'Каталог', about: 'О проекте' },
    footer: {
      about:
        'Курированный таймлайн мобильных телефонов, которые реально изменили индустрию — не полный каталог моделей.',
      inspiredBy: 'Вдохновлено форматом журнала MobiLux (2004–2016)',
      sisterProject: 'Сестринский проект',
      rights: 'Контент лицензируется свободно, где это возможно — атрибуция изображений указана на страницах телефонов.',
    },
    filters: {
      brand: 'Бренд',
      year: 'Год',
      all: 'Все',
      search: 'Поиск по модели…',
      resultsOne: 'телефон',
      resultsFew: 'телефона',
      resultsMany: 'телефонов',
      empty: 'Ничего не найдено по этим фильтрам.',
      reset: 'Сбросить фильтры',
    },
    specs: {
      year: 'Год', priceUsdAtLaunch: 'Цена на старте', display: 'Экран', resolution: 'Разрешение',
      chipset: 'Чипсет', ram: 'RAM', storage: 'Память', storageExpandable: 'Карта памяти',
      camera: 'Камера', cameraFront: 'Фронтальная камера', battery: 'Аккумулятор', network: 'Связь',
      connectivity: 'Подключение', os: 'ОС', dimensions: 'Габариты', weight: 'Вес', colors: 'Цвета', simType: 'SIM',
      unitsSoldMillions: 'Продано, млн шт.',
    },
    hero: {
      eyebrow: '1998 — сегодня',
      cta: 'Перейти в каталог',
      ctaAbout: 'О проекте',
      statsPhones: 'телефонов в каталоге',
      statsBrands: 'брендов',
      statsYears: 'лет истории',
      popularTitle: 'Самые популярные по продажам',
      popularSubtitle: 'Модели с официально подтверждёнными рекордными тиражами',
      soldSuffix: 'млн шт.',
    },
    backToTimeline: '← Таймлайн',
    langSwitcher: 'Язык',
    units: { mAh: 'мА·ч', gb: 'ГБ', mb: 'МБ', g: 'г' },
    notFound: { title: 'Страница не найдена', body: 'Такого телефона в каталоге нет.', link: 'Вернуться на таймлайн' },
    about: {
      title: 'О проекте',
      paragraphs: [
        'Мобильная История — таймлайн знаковых мобильных телефонов, начиная с 1998–1999 года (старт массового GSM-бума) и до сегодня.',
        'Это не полный каталог моделей — мы не конкурируем с GSMArena. Это курированный список телефонов, которые реально что-то изменили в индустрии или в том, как мы пользуемся техникой.',
        'Тон и формат вдохновлены украинским журналом MobiLux (2004–2016).',
        'Сестринский проект к Watchly — тот же автор и та же философия (легальные источники данных), но другая архитектура: здесь всё генерируется статически, поскольку данные курируются вручную и не меняются между билдами.',
      ],
    },
  },
  en: {
    siteName: 'Mobile History',
    tagline: 'A timeline of milestone phones since 1998',
    nav: { catalog: 'Catalog', about: 'About' },
    footer: {
      about: 'A curated timeline of mobile phones that actually changed the industry — not a full model catalog.',
      inspiredBy: 'Inspired by the format of MobiLux magazine (2004–2016)',
      sisterProject: 'Sister project',
      rights: 'Content is freely licensed where possible — image attribution is listed on each phone page.',
    },
    filters: {
      brand: 'Brand',
      year: 'Year',
      all: 'All',
      search: 'Search by model…',
      resultsOne: 'phone',
      resultsFew: 'phones',
      resultsMany: 'phones',
      empty: 'No phones match these filters.',
      reset: 'Reset filters',
    },
    specs: {
      year: 'Year', priceUsdAtLaunch: 'Launch price', display: 'Display', resolution: 'Resolution',
      chipset: 'Chipset', ram: 'RAM', storage: 'Storage', storageExpandable: 'Expandable storage',
      camera: 'Camera', cameraFront: 'Front camera', battery: 'Battery', network: 'Network',
      connectivity: 'Connectivity', os: 'OS', dimensions: 'Dimensions', weight: 'Weight', colors: 'Colors', simType: 'SIM',
      unitsSoldMillions: 'Units sold, millions',
    },
    hero: {
      eyebrow: '1998 — today',
      cta: 'Browse the catalog',
      ctaAbout: 'About the project',
      statsPhones: 'phones in the catalog',
      statsBrands: 'brands',
      statsYears: 'years of history',
      popularTitle: 'Most popular by sales',
      popularSubtitle: 'Models with officially confirmed record-breaking sales figures',
      soldSuffix: 'million units',
    },
    backToTimeline: '← Timeline',
    langSwitcher: 'Language',
    units: { mAh: 'mAh', gb: 'GB', mb: 'MB', g: 'g' },
    notFound: { title: 'Page not found', body: 'There is no such phone in the catalog.', link: 'Back to the timeline' },
    about: {
      title: 'About the project',
      paragraphs: [
        'Mobile History is a timeline of milestone mobile phones, starting from 1998–1999 (the beginning of the mass GSM boom) up to today.',
        "It's not a full model catalog — we're not competing with GSMArena. It's a curated list of phones that actually changed the industry, or how we use technology.",
        'The tone and format are inspired by the Ukrainian magazine MobiLux (2004–2016).',
        "A sister project to Watchly — same author, same philosophy (legally sourced data), but a different architecture: everything here is statically generated, since the data is hand-curated and doesn't change between builds.",
      ],
    },
  },
} as const satisfies Record<Locale, unknown>;

export function t(locale: Locale) {
  return UI[locale];
}
