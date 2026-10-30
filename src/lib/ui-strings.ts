import type { Locale } from './locales';

// Site-chrome strings (nav, footer, filters, spec labels) — separate from phone content, which
// lives in the per-locale markdown files. These are translated manually since there are few of
// them; no i18n library needed for a dictionary this size.
export const UI = {
  uk: {
    siteName: 'Мобільна Історія',
    tagline: 'Від початку масового GSM до сьогодні — історії телефонів, що змінили наш зв’язок.',
    breadcrumbs: { label: 'Навігаційний ланцюжок', home: 'Головна' },
    nav: { catalog: 'Каталог', compare: 'Порівняти', brands: 'Бренди', about: 'Про проєкт' },
    menu: { open: 'Відкрити меню', close: 'Закрити меню' },
    themeToggle: 'Перемкнути тему',
    footer: {
      navigation: 'Розділи',
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
      shownCount: 'у добірці',
    },
    specs: {
      year: 'Рік', priceUsdAtLaunch: 'Ціна на старті', display: 'Екран', resolution: 'Роздільна здатність',
      chipset: 'Чипсет', ram: 'RAM', storage: 'Пам’ять', storageExpandable: 'Карта пам’яті',
      camera: 'Камера', cameraFront: 'Фронтальна камера', battery: 'Акумулятор', batteryType: 'Тип акумулятора', batteryRemovable: 'Знімний акумулятор', charging: 'Заряджання', network: 'Зв’язок',
      connectivity: 'Підключення', os: 'ОС', dimensions: 'Габарити', weight: 'Вага', colors: 'Кольори', simType: 'SIM',
      unitsSoldMillions: 'Продано, млн шт.',
    },
    compare: {
      tableHead: { characteristic: 'Характеристика' },
      subtitle: 'Обери два телефони з каталогу, щоб порівняти їхні характеристики пліч-о-пліч.',
      pickA: 'Оберіть перший телефон…',
      pickB: 'Оберіть другий телефон…',
      change: 'Змінити',
      swap: 'Поміняти місцями',
      reset: 'Скинути',
      noResults: 'Нічого не знайдено',
      empty: 'Оберіть два телефони вище, щоб побачити порівняння.',
      suggestedTitle: 'Почни з цих історій',
      suggestions: {
        gsmEra: 'Від старту масового GSM до легенди кнопкових телефонів.',
        touchSmartphones: 'Два ранні погляди на нову еру сенсорних смартфонів.',
        foldingScreens: 'Як флагманська лінійка Samsung прийшла до складного екрана.',
      },
      dash: '—',
    },
    brands: {
      indexTitle: 'Бренди',
      indexSubtitle: 'Виробники, представлені в каталозі — коротка історія й усі їхні телефони.',
      phoneCount: { one: 'модель', few: 'моделі', many: 'моделей' },
      founded: 'Засновано',
      country: 'Країна',
      allPhones: 'Телефони бренду в каталозі',
    },
    hero: {
      eyebrow: '1998 — сьогодні',
      cta: 'Перейти до каталогу',
      ctaAbout: 'Про проєкт',
      statsPhones: 'телефонів у каталозі',
      statsBrands: 'брендів',
      statsYears: 'років історії',
      popularTitle: 'Найпопулярніші за продажами',
      popularSubtitle: 'Моделі з публічно відомими оцінками продажів',
      soldSuffix: 'млн шт.',
      guideTitle: 'Як мандрувати таймлайном',
      guideCatalog: 'Шукай за роком, брендом або назвою моделі.',
      guideCompare: 'Обери два телефони й порівняй різні епохи.',
    },
    catalog: { intro: 'Кожен рік — окрема сторінка історії. Знайди модель за назвою, брендом або роком.' },
    langSwitcher: 'Мова',
    gallery: {
      label: 'Галерея фотографій',
      showImage: 'Показати зображення {index} з {count}',
      open: 'Відкрити фото на весь екран',
      close: 'Закрити повноекранний перегляд',
      previous: 'Попереднє фото',
      next: 'Наступне фото',
    },
    units: { yes: 'Так', no: 'Ні', mm: 'мм', standardSim: 'Стандартна SIM (Mini-SIM)', mAh: 'мА·год', gb: 'ГБ', mb: 'МБ', g: 'г' },
    notFound: { title: 'Сторінку не знайдено', body: 'Такого телефону в каталозі немає.', link: 'Повернутись на таймлайн' },
    about: {
      title: 'Про проєкт',
      intro: 'Історія мобільного зв’язку — через телефони, які змінили індустрію, звичні речі та наше уявлення про те, яким може бути пристрій у кишені.',
      sections: [
        { title: 'Відлік від GSM-буму', paragraphs: ['Таймлайн починається з 1998–1999 років — часу, коли мобільний зв’язок став масовим, — і простягається до сьогодні. Це погляд на кілька десятиліть змін через знакові пристрої.'] },
        { title: 'Курований вибір', paragraphs: ['Тут не кожна модель і не повний перелік характеристик ринку. До каталогу потрапляють телефони, що вплинули на технології, дизайн, доступність зв’язку або спосіб користування мобільними пристроями.'] },
        { title: 'Факти та зображення', paragraphs: ['Історичні твердження й характеристики звіряються з надійними джерелами; посилання на джерела зображень наведені біля самих фото. Для зображень ми віддаємо перевагу матеріалам із вільною ліцензією та вказуємо авторство й умови використання.'] },
        { title: 'Порівняння крізь епохи', paragraphs: ['На сторінці «Порівняти» обери два телефони, щоб побачити спільні характеристики поруч. Невідомі або непідтверджені значення позначені тире, а вибір зберігається в адресі сторінки — ним можна поділитися або повернутися пізніше.'] },
        { title: 'Як користуватися таймлайном', paragraphs: ['У каталозі можна шукати за назвою, відфільтрувати моделі за брендом і роком та відкривати окремі історії телефонів. Сторінки брендів збирають моделі виробника в одному місці.'] },
        { title: 'Журнал і цифровий архів', paragraphs: ['Тон і формат натхненні українським журналом MobiLux (2004–2016): короткі історії, виразні моделі й увага до контексту. Проєкт створюється вручну українською, російською та англійською мовами й генерується як швидкий статичний сайт.'] },
      ],
    },
  },
  ru: {
    siteName: 'Мобильная История',
    tagline: 'От начала массового GSM до сегодня — истории телефонов, изменивших нашу связь.',
    breadcrumbs: { label: 'Навигационная цепочка', home: 'Главная' },
    nav: { catalog: 'Каталог', compare: 'Сравнить', brands: 'Бренды', about: 'О проекте' },
    menu: { open: 'Открыть меню', close: 'Закрыть меню' },
    themeToggle: 'Переключить тему',
    footer: {
      navigation: 'Разделы',
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
      shownCount: 'в подборке',
    },
    specs: {
      year: 'Год', priceUsdAtLaunch: 'Цена на старте', display: 'Экран', resolution: 'Разрешение',
      chipset: 'Чипсет', ram: 'RAM', storage: 'Память', storageExpandable: 'Карта памяти',
      camera: 'Камера', cameraFront: 'Фронтальная камера', battery: 'Аккумулятор', batteryType: 'Тип аккумулятора', batteryRemovable: 'Съёмный аккумулятор', charging: 'Зарядка', network: 'Связь',
      connectivity: 'Подключение', os: 'ОС', dimensions: 'Габариты', weight: 'Вес', colors: 'Цвета', simType: 'SIM',
      unitsSoldMillions: 'Продано, млн шт.',
    },
    compare: {
      tableHead: { characteristic: 'Характеристика' },
      subtitle: 'Выбери два телефона из каталога, чтобы сравнить их характеристики бок о бок.',
      pickA: 'Выберите первый телефон…',
      pickB: 'Выберите второй телефон…',
      change: 'Изменить',
      swap: 'Поменять местами',
      reset: 'Сбросить',
      noResults: 'Ничего не найдено',
      empty: 'Выберите два телефона выше, чтобы увидеть сравнение.',
      suggestedTitle: 'Начните с этих историй',
      suggestions: {
        gsmEra: 'От начала массового GSM до легенды кнопочных телефонов.',
        touchSmartphones: 'Два ранних взгляда на новую эру сенсорных смартфонов.',
        foldingScreens: 'Как флагманская линейка Samsung пришла к складному экрану.',
      },
      dash: '—',
    },
    brands: {
      indexTitle: 'Бренды',
      indexSubtitle: 'Производители, представленные в каталоге — краткая история и все их телефоны.',
      phoneCount: { one: 'модель', few: 'модели', many: 'моделей' },
      founded: 'Основан',
      country: 'Страна',
      allPhones: 'Телефоны бренда в каталоге',
    },
    hero: {
      eyebrow: '1998 — сегодня',
      cta: 'Перейти в каталог',
      ctaAbout: 'О проекте',
      statsPhones: 'телефонов в каталоге',
      statsBrands: 'брендов',
      statsYears: 'лет истории',
      popularTitle: 'Самые популярные по продажам',
      popularSubtitle: 'Модели с публично известными оценками продаж',
      soldSuffix: 'млн шт.',
      guideTitle: 'Как путешествовать по таймлайну',
      guideCatalog: 'Ищи по году, бренду или названию модели.',
      guideCompare: 'Выбери два телефона и сравни разные эпохи.',
    },
    catalog: { intro: 'Каждый год — отдельная страница истории. Найди модель по названию, бренду или году.' },
    langSwitcher: 'Язык',
    gallery: {
      label: 'Галерея фотографий',
      showImage: 'Показать изображение {index} из {count}',
      open: 'Открыть фото на весь экран',
      close: 'Закрыть полноэкранный просмотр',
      previous: 'Предыдущее фото',
      next: 'Следующее фото',
    },
    units: { yes: 'Да', no: 'Нет', mm: 'мм', standardSim: 'Стандартная SIM (Mini-SIM)', mAh: 'мА·ч', gb: 'ГБ', mb: 'МБ', g: 'г' },
    notFound: { title: 'Страница не найдена', body: 'Такого телефона в каталоге нет.', link: 'Вернуться на таймлайн' },
    about: {
      title: 'О проекте',
      intro: 'История мобильной связи — через телефоны, которые изменили индустрию, повседневные привычки и наше представление об устройстве в кармане.',
      sections: [
        { title: 'Отсчёт с GSM-бума', paragraphs: ['Таймлайн начинается в 1998–1999 годах — когда мобильная связь стала массовой, — и продолжается до сегодня. Это взгляд на несколько десятилетий перемен через знаковые устройства.'] },
        { title: 'Курированный выбор', paragraphs: ['Здесь нет каждой модели и полного перечня характеристик рынка. В каталог попадают телефоны, повлиявшие на технологии, дизайн, доступность связи или то, как мы пользуемся мобильными устройствами.'] },
        { title: 'Факты и изображения', paragraphs: ['Исторические сведения и характеристики сверяются с надёжными источниками; ссылки на источники изображений находятся рядом с фотографиями. Мы отдаём предпочтение материалам со свободной лицензией и указываем авторство и условия использования.'] },
        { title: 'Сравнение эпох', paragraphs: ['На странице «Сравнить» выбери два телефона, чтобы увидеть общие характеристики рядом. Неизвестные или неподтверждённые значения обозначены тире, а выбор сохраняется в адресе страницы — ссылкой можно поделиться или вернуться позже.'] },
        { title: 'Как пользоваться таймлайном', paragraphs: ['В каталоге можно искать по названию, фильтровать модели по бренду и году, а затем открывать отдельные истории телефонов. Страницы брендов собирают модели производителя в одном месте.'] },
        { title: 'Журнал и цифровой архив', paragraphs: ['Тон и формат вдохновлены украинским журналом MobiLux (2004–2016): короткие истории, выразительные модели и внимание к контексту. Проект вручную ведётся на украинском, русском и английском и генерируется как быстрый статический сайт.'] },
      ],
    },
  },
  en: {
    siteName: 'Mobile History',
    tagline: 'From mass-market GSM to today: stories of phones that changed how we connect.',
    breadcrumbs: { label: 'Breadcrumb', home: 'Home' },
    nav: { catalog: 'Catalog', compare: 'Compare', brands: 'Brands', about: 'About' },
    menu: { open: 'Open menu', close: 'Close menu' },
    themeToggle: 'Toggle color theme',
    footer: {
      navigation: 'Explore',
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
      shownCount: 'in this selection',
    },
    specs: {
      year: 'Year', priceUsdAtLaunch: 'Launch price', display: 'Display', resolution: 'Resolution',
      chipset: 'Chipset', ram: 'RAM', storage: 'Storage', storageExpandable: 'Expandable storage',
      camera: 'Camera', cameraFront: 'Front camera', battery: 'Battery', batteryType: 'Battery type', batteryRemovable: 'Removable battery', charging: 'Charging', network: 'Network',
      connectivity: 'Connectivity', os: 'OS', dimensions: 'Dimensions', weight: 'Weight', colors: 'Colors', simType: 'SIM',
      unitsSoldMillions: 'Units sold, millions',
    },
    compare: {
      tableHead: { characteristic: 'Specification' },
      subtitle: 'Pick two phones from the catalog to compare their specs side by side.',
      pickA: 'Pick the first phone…',
      pickB: 'Pick the second phone…',
      change: 'Change',
      swap: 'Swap',
      reset: 'Reset',
      noResults: 'No matches',
      empty: 'Pick two phones above to see the comparison.',
      suggestedTitle: 'Start with these stories',
      suggestions: {
        gsmEra: 'From mass-market GSM to a button-phone legend.',
        touchSmartphones: 'Two early visions for the touchscreen smartphone era.',
        foldingScreens: 'How Samsung’s flagship line led to a folding screen.',
      },
      dash: '—',
    },
    brands: {
      indexTitle: 'Brands',
      indexSubtitle: 'Manufacturers featured in the catalog — a short history and all their phones.',
      phoneCount: { one: 'model', many: 'models' },
      founded: 'Founded',
      country: 'Country',
      allPhones: 'Phones from this brand in the catalog',
    },
    hero: {
      eyebrow: '1998 — today',
      cta: 'Browse the catalog',
      ctaAbout: 'About the project',
      statsPhones: 'phones in the catalog',
      statsBrands: 'brands',
      statsYears: 'years of history',
      popularTitle: 'Most popular by sales',
      popularSubtitle: 'Models with publicly reported sales estimates',
      soldSuffix: 'million units',
      guideTitle: 'Explore the timeline',
      guideCatalog: 'Search by model, brand, or year.',
      guideCompare: 'Pick two phones to compare different eras.',
    },
    catalog: { intro: 'Each year marks a different chapter. Find a phone by model, brand, or year.' },
    langSwitcher: 'Language',
    gallery: {
      label: 'Photo gallery',
      showImage: 'Show image {index} of {count}',
      open: 'View photo full screen',
      close: 'Close full-screen view',
      previous: 'Previous photo',
      next: 'Next photo',
    },
    units: { yes: 'Yes', no: 'No', mm: 'mm', standardSim: 'Standard SIM (Mini-SIM)', mAh: 'mAh', gb: 'GB', mb: 'MB', g: 'g' },
    notFound: { title: 'Page not found', body: 'There is no such phone in the catalog.', link: 'Back to the timeline' },
    about: {
      title: 'About the project',
      intro: 'The history of mobile communication, told through the phones that changed the industry, everyday habits, and our idea of what a device in your pocket could be.',
      sections: [
        { title: 'Starting with the GSM boom', paragraphs: ['The timeline begins in 1998–1999, when mobile communication went mainstream, and continues to the present. It traces several decades of change through milestone devices.'] },
        { title: 'A curated selection', paragraphs: ['This is not every model or a complete record of the market. The catalog focuses on phones that influenced technology, design, access to communication, or the way people use mobile devices.'] },
        { title: 'Facts and images', paragraphs: ['Historical claims and specifications are checked against reliable sources; image-source links appear alongside the photos. We prefer freely licensed material and credit its creators and license terms.'] },
        { title: 'Comparing eras', paragraphs: ['Choose two phones on the Compare page to see their specifications side by side. Unknown or unverified values are marked with a dash, and your selection stays in the page URL so you can share it or return later.'] },
        { title: 'Using the timeline', paragraphs: ['Search the catalog by model, filter by brand and year, then open a phone’s story for its context and specifications. Brand pages bring each manufacturer’s featured phones together.'] },
        { title: 'A magazine and a digital archive', paragraphs: ['The tone and format take inspiration from Ukrainian magazine MobiLux (2004–2016): concise stories, distinctive devices, and historical context. The project is curated in Ukrainian, Russian, and English, then generated as a fast static site.'] },
      ],
    },
  },
} as const satisfies Record<Locale, unknown>;

export function t(locale: Locale) {
  return UI[locale];
}

export const HOME_EDITORIAL = {
  "uk": {
    "title": "Телефони, що змінили наше життя",
    "cover": "Герой епохи",
    "eras": "Знайди свою епоху",
    "labels": [
      "Масовий GSM",
      "Камера й музика",
      "Ера смартфонів",
      "Нові форми"
    ],
    "compare": "26 років між дзвінками",
    "text": "Від кнопок і монохромного екрана до OLED та 5G. Порівняй два покоління й побач масштаб змін.",
    "cta": "Порівняти покоління",
    "principles": "Історія має значення",
    "pairNotes": [
      "Кнопки · GSM",
      "Сенсорний екран · 5G"
    ],
    "principleItems": [
      {
        "title": "Знакові моделі",
        "text": "Телефони, які змінили технології, дизайн і щоденні звички."
      },
      {
        "title": "Факти з контекстом",
        "text": "Що вмів пристрій — і чому це було важливо у його час."
      },
      {
        "title": "Журнальний погляд",
        "text": "Курована історія з увагою до деталей та відкритими джерелами."
      }
    ]
  },
  "ru": {
    "title": "Телефоны, которые изменили нашу жизнь",
    "cover": "Герой эпохи",
    "eras": "Найди свою эпоху",
    "labels": [
      "Массовый GSM",
      "Камера и музыка",
      "Эра смартфонов",
      "Новые формы"
    ],
    "compare": "26 лет между звонками",
    "text": "От кнопок и монохромного экрана до OLED и 5G. Сравни два поколения и увидишь масштаб перемен.",
    "cta": "Сравнить поколения",
    "principles": "История имеет значение",
    "pairNotes": [
      "Кнопки · GSM",
      "Сенсорный экран · 5G"
    ],
    "principleItems": [
      {
        "title": "Знаковые модели",
        "text": "Телефоны, изменившие технологии, дизайн и повседневные привычки."
      },
      {
        "title": "Факты с контекстом",
        "text": "Что умело устройство — и почему это было важно в своё время."
      },
      {
        "title": "Журнальный взгляд",
        "text": "Курированная история с вниманием к деталям и открытыми источниками."
      }
    ]
  },
  "en": {
    "title": "Phones that changed our lives",
    "cover": "An icon of its era",
    "eras": "Find your era",
    "labels": [
      "Mass-market GSM",
      "Camera and music",
      "The smartphone era",
      "New forms"
    ],
    "compare": "26 years between calls",
    "text": "From buttons and a monochrome screen to OLED and 5G. Compare two generations to see how much changed.",
    "cta": "Compare generations",
    "principles": "The history matters",
    "pairNotes": [
      "Buttons · GSM",
      "Touchscreen · 5G"
    ],
    "principleItems": [
      {
        "title": "Landmark phones",
        "text": "Devices that changed technology, design, and everyday habits."
      },
      {
        "title": "Facts in context",
        "text": "What a phone could do — and why it mattered in its time."
      },
      {
        "title": "An editorial eye",
        "text": "A curated history with attention to detail and sources you can explore."
      }
    ]
  }
} as const;
export const RELATED_PHONES = {
  uk: { title: 'Інші телефони', compare: 'Порівняти характеристики' },
  ru: { title: 'Другие телефоны', compare: 'Сравнить характеристики' },
  en: { title: 'More phones from', compare: 'Compare specifications' },
} as const;
export const COMPARE_QUICK = {
  uk: { phones: 'Швидкий вибір', brands: 'Знайти за брендом:' },
  ru: { phones: 'Быстрый выбор', brands: 'Найти по бренду:' },
  en: { phones: 'Quick picks', brands: 'Browse by brand:' },
} as const;
// Shared editorial labels for the catalog, detail pages and comparison tools.
export const DESIGN_EDITORIAL = {
  uk: {
    filters: 'Фільтри', modelSearch: 'Пошук', optionSearch: 'Знайти у списку…', selectEmpty: 'Нічого не знайдено', active: 'Ваш вибір', years: 'Перейти до року', allYears: 'Усі роки',
    story: 'Історія моделі', specs: 'Технічний портрет', earlier: 'Раніше', contemporary: 'Того самого року', later: 'Пізніше',
    overview: 'Коротко про відмінності', differences: 'Лише відмінності', differenceNote: 'Виділено різні значення. Більше не завжди означає краще.', copyLink: 'Скопіювати посилання', copied: 'Посилання скопійовано', manualCopy: 'Скопіюйте посилання з поля', unknown: 'Дані невідомі', dataNote: '«Дані невідомі» — характеристику не підтверджено. «Немає» — функція відсутня за наявними даними.',
    eras: ['Початок масового GSM', 'Камера стає звичною', 'Музика в кишені', 'Сенсорний перелом', 'Великі екрани, нові звички', 'Екран змінює форму'],
    eraNotes: ['Дзвінки, SMS і впізнавані корпуси.', 'Кольорові екрани, перші кадри та MMS.', 'Плеєри й камерофони знаходять власний характер.', 'Смартфон стає поверхнею для дотику.', 'Застосунки, стилуси й щоденне життя онлайн.', 'Складані конструкції відкривають нові сценарії.'],
  },
  ru: {
    filters: 'Фильтры', modelSearch: 'Поиск', optionSearch: 'Найти в списке…', selectEmpty: 'Ничего не найдено', active: 'Ваш выбор', years: 'Перейти к году', allYears: 'Все годы',
    story: 'История модели', specs: 'Технический портрет', earlier: 'Раньше', contemporary: 'В том же году', later: 'Позже',
    overview: 'Коротко об отличиях', differences: 'Только отличия', differenceNote: 'Выделены разные значения. Больше не всегда означает лучше.', copyLink: 'Скопировать ссылку', copied: 'Ссылка скопирована', manualCopy: 'Скопируйте ссылку из поля', unknown: 'Данные неизвестны', dataNote: '«Данные неизвестны» — характеристика не подтверждена. «Нет» — функция отсутствует по имеющимся данным.',
    eras: ['Начало массового GSM', 'Камера становится привычной', 'Музыка в кармане', 'Сенсорный перелом', 'Большие экраны, новые привычки', 'Экран меняет форму'],
    eraNotes: ['Звонки, SMS и узнаваемые корпуса.', 'Цветные экраны, первые кадры и MMS.', 'Плееры и камерофоны обретают свой характер.', 'Смартфон становится поверхностью для касания.', 'Приложения, стилусы и повседневная жизнь онлайн.', 'Складные конструкции открывают новые сценарии.'],
  },
  en: {
    filters: 'Filters', modelSearch: 'Search', optionSearch: 'Search options…', selectEmpty: 'No options found', active: 'Your selection', years: 'Jump to a year', allYears: 'All years',
    story: 'The story', specs: 'Technical portrait', earlier: 'Earlier', contemporary: 'The same year', later: 'Later',
    overview: 'Differences at a glance', differences: 'Differences only', differenceNote: 'Different values are highlighted. Bigger does not always mean better.', copyLink: 'Copy link', copied: 'Link copied', manualCopy: 'Copy the link from this field', unknown: 'Unknown', dataNote: '“Unknown” means the specification has not been confirmed. “None” means the feature is absent according to the available data.',
    eras: ['The mass GSM era', 'The camera becomes familiar', 'Music in your pocket', 'The touch turning point', 'Bigger screens, new habits', 'The screen changes shape'],
    eraNotes: ['Calls, SMS and distinctive shapes.', 'Colour screens, first photos and MMS.', 'Music phones and camera phones find their identity.', 'The smartphone becomes a surface for touch.', 'Apps, pens and everyday life online.', 'Folding designs open up new ways to use a phone.'],
  },
} as const;
