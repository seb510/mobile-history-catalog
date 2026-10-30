import type { Locale } from './locales';

// Site-chrome strings (nav, footer, filters, spec labels) — separate from phone content, which
// lives in the per-locale markdown files. These are translated manually since there are few of
// them; no i18n library needed for a dictionary this size.
export const UI = {
  uk: {
    siteName: 'Мобільна Історія',
    tagline: 'Ретро-телефони з характером: незвичні форми, справжні кнопки й історії речей, які хотілося тримати в руках.',
    breadcrumbs: { label: 'Навігаційний ланцюжок', home: 'Головна' },
    nav: { catalog: 'Каталог', compare: 'Порівняти', brands: 'Бренди', about: 'Про проєкт' },
    menu: { open: 'Відкрити меню', close: 'Закрити меню' },
    themeToggle: 'Перемкнути тему',
    footer: {
      navigation: 'Розділи',
      about:
        'Курований архів ретро-телефонів із характером — дизайн, механіка й спогади кнопкової епохи.',
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
    catalog: { intro: 'Розкладачки, слайдери, музичні телефони й незвичні клавіатури. Знайди свій характер за моделлю, брендом або роком.' },
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
      intro: 'Мобільна Історія — архів телефонів із власним обличчям. У центрі — кнопкова епоха, сміливий дизайн і повсякденні жести, які залишилися в пам’яті.',
      sections: [
        { title: 'Відлік від GSM-буму', paragraphs: ['Таймлайн починається з 1998–1999 років — часу, коли мобільний зв’язок став масовим, — і простягається до сьогодні. Це погляд на кілька десятиліть змін через знакові пристрої.'] },
        { title: 'Курований вибір', paragraphs: ['Головний критерій — характер: виразний корпус, механізм, клавіатура, матеріали або особливий спосіб користування. Технічна першість і продажі додають контекст, але самі по собі не визначають добір. Сенсорні моделі залишаються продовженням історії, а не її центром.'] },
        { title: 'Факти та зображення', paragraphs: ['Історичні твердження й характеристики звіряються з надійними джерелами; посилання на джерела зображень наведені біля самих фото. Для зображень ми віддаємо перевагу матеріалам із вільною ліцензією та вказуємо авторство й умови використання.'] },
        { title: 'Порівняння крізь епохи', paragraphs: ['На сторінці «Порівняти» обери два телефони, щоб побачити спільні характеристики поруч. Невідомі або непідтверджені значення позначені як «Дані невідомі», а вибір зберігається в адресі сторінки — ним можна поділитися або повернутися пізніше.'] },
        { title: 'Як користуватися таймлайном', paragraphs: ['У каталозі можна шукати за назвою, відфільтрувати моделі за брендом і роком та відкривати окремі історії телефонів. Сторінки брендів збирають моделі виробника в одному місці.'] },
        { title: 'Журнал і цифровий архів', paragraphs: ['Тон і формат натхненні українським журналом MobiLux (2004–2016): короткі історії, виразні моделі й увага до контексту. Проєкт створюється вручну українською, російською та англійською мовами й генерується як швидкий статичний сайт.'] },
      ],
    },
  },
  ru: {
    siteName: 'Мобильная История',
    tagline: 'Ретро-телефоны с характером: необычные формы, настоящие кнопки и истории вещей, которые хотелось держать в руках.',
    breadcrumbs: { label: 'Навигационная цепочка', home: 'Главная' },
    nav: { catalog: 'Каталог', compare: 'Сравнить', brands: 'Бренды', about: 'О проекте' },
    menu: { open: 'Открыть меню', close: 'Закрыть меню' },
    themeToggle: 'Переключить тему',
    footer: {
      navigation: 'Разделы',
      about:
        'Курированный архив ретро-телефонов с характером — дизайн, механика и воспоминания кнопочной эпохи.',
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
    catalog: { intro: 'Раскладушки, слайдеры, музыкальные телефоны и необычные клавиатуры. Найди свой характер по модели, бренду или году.' },
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
      intro: 'Мобильная История — архив телефонов со своим лицом. В центре — кнопочная эпоха, смелый дизайн и повседневные жесты, которые остались в памяти.',
      sections: [
        { title: 'Отсчёт с GSM-бума', paragraphs: ['Таймлайн начинается в 1998–1999 годах — когда мобильная связь стала массовой, — и продолжается до сегодня. Это взгляд на несколько десятилетий перемен через знаковые устройства.'] },
        { title: 'Курированный выбор', paragraphs: ['Главный критерий — характер: выразительный корпус, механизм, клавиатура, материалы или особый способ использования. Техническое первенство и продажи добавляют контекст, но сами по себе не определяют отбор. Сенсорные модели продолжают историю, а не становятся её центром.'] },
        { title: 'Факты и изображения', paragraphs: ['Исторические сведения и характеристики сверяются с надёжными источниками; ссылки на источники изображений находятся рядом с фотографиями. Мы отдаём предпочтение материалам со свободной лицензией и указываем авторство и условия использования.'] },
        { title: 'Сравнение эпох', paragraphs: ['На странице «Сравнить» выбери два телефона, чтобы увидеть общие характеристики рядом. Неизвестные или неподтверждённые значения обозначены как «Данные неизвестны», а выбор сохраняется в адресе страницы — ссылкой можно поделиться или вернуться позже.'] },
        { title: 'Как пользоваться таймлайном', paragraphs: ['В каталоге можно искать по названию, фильтровать модели по бренду и году, а затем открывать отдельные истории телефонов. Страницы брендов собирают модели производителя в одном месте.'] },
        { title: 'Журнал и цифровой архив', paragraphs: ['Тон и формат вдохновлены украинским журналом MobiLux (2004–2016): короткие истории, выразительные модели и внимание к контексту. Проект вручную ведётся на украинском, русском и английском и генерируется как быстрый статический сайт.'] },
      ],
    },
  },
  en: {
    siteName: 'Mobile History',
    tagline: 'Retro phones with character: distinctive shapes, real buttons and the stories of objects you wanted to hold.',
    breadcrumbs: { label: 'Breadcrumb', home: 'Home' },
    nav: { catalog: 'Catalog', compare: 'Compare', brands: 'Brands', about: 'About' },
    menu: { open: 'Open menu', close: 'Close menu' },
    themeToggle: 'Toggle color theme',
    footer: {
      navigation: 'Explore',
      about: 'A curated archive of retro phones with character: design, mechanics and memories from the button-phone era.',
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
    catalog: { intro: 'Clamshells, sliders, music phones and unexpected keypads. Find your favourite by model, brand or year.' },
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
      intro: 'Mobile History is an archive of phones with a character of their own. At its heart are the button-phone era, bold design and everyday gestures that stayed with us.',
      sections: [
        { title: 'Starting with the GSM boom', paragraphs: ['The timeline begins in 1998–1999, when mobile communication went mainstream, and continues to the present. It traces several decades of change through milestone devices.'] },
        { title: 'A curated selection', paragraphs: ['The main criterion is character: a distinctive body, mechanism, keypad, materials or way of using a phone. Technical firsts and sales add context, but do not determine selection alone. Touchscreen models continue the story rather than take centre stage.'] },
        { title: 'Facts and images', paragraphs: ['Historical claims and specifications are checked against reliable sources; image-source links appear alongside the photos. We prefer freely licensed material and credit its creators and license terms.'] },
        { title: 'Comparing eras', paragraphs: ['Choose two phones on the Compare page to see their specifications side by side. Unknown or unverified values are marked as “Unknown”, and your selection stays in the page URL so you can share it or return later.'] },
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
    "title": "Коли телефони мали власне обличчя",
    "cover": "Ікона кнопкової епохи",
    "eras": "Не лише роки. Характери.",
    "labels": [
      "Кнопкова класика",
      "Механіка й музика",
      "Перехідна епоха",
      "Історія триває"
    ],
    "compare": "Два характери однієї епохи",
    "text": "Тонка розкладачка RAZR V3 і подвійний слайдер Nokia N95. Дві відповіді на питання, яким може бути телефон у кишені.",
    "cta": "Порівняти характери",
    "principles": "Зберігаємо характер епохи",
    "pairNotes": [
      "Метал · пласка клавіатура · розкладачка",
      "Подвійний слайдер · камера · музика"
    ],
    "principleItems": [
      {
        "title": "Форма має значення",
        "text": "Клавіатури, шарніри, матеріали й кольори, за якими телефон упізнавали здалеку."
      },
      {
        "title": "Речі та спогади",
        "text": "Відкрити кришку, перемкнути трек, набрати SMS. Історія через повсякденні жести."
      },
      {
        "title": "Ностальгія з фактами",
        "text": "Любов до ретро — з перевіреними джерелами, фотографіями й технічним контекстом."
      }
    ],
    "themes": [
      {
        "title": "Механіка характеру",
        "text": "Повернути, розкрити, висунути: конструкція була частиною взаємодії."
      },
      {
        "title": "Музика в кишені",
        "text": "Окремі кнопки, улюблений плеєр і власна добірка композицій."
      },
      {
        "title": "Дизайн без правил",
        "text": "Асиметрія, несподівані форми й телефони, які важко сплутати."
      }
    ],
    "modernTitle": "Історія триває",
    "modernText": "Сенсорні й складані моделі теж є в архіві — як продовження історії форми та взаємодії.",
    "modernLink": "Після кнопкової епохи"
  },
  "ru": {
    "title": "Когда у телефонов было своё лицо",
    "cover": "Икона кнопочной эпохи",
    "eras": "Не только годы. Характеры.",
    "labels": [
      "Кнопочная классика",
      "Механика и музыка",
      "Переходная эпоха",
      "История продолжается"
    ],
    "compare": "Два характера одной эпохи",
    "text": "Тонкая раскладушка RAZR V3 и двойной слайдер Nokia N95. Два ответа на вопрос, каким может быть телефон в кармане.",
    "cta": "Сравнить характеры",
    "principles": "Сохраняем характер эпохи",
    "pairNotes": [
      "Металл · плоская клавиатура · раскладушка",
      "Двойной слайдер · камера · музыка"
    ],
    "principleItems": [
      {
        "title": "Форма имеет значение",
        "text": "Клавиатуры, шарниры, материалы и цвета, по которым телефон узнавали издалека."
      },
      {
        "title": "Вещи и воспоминания",
        "text": "Открыть крышку, переключить трек, набрать SMS. История через повседневные жесты."
      },
      {
        "title": "Ностальгия с фактами",
        "text": "Любовь к ретро — с проверенными источниками, фотографиями и техническим контекстом."
      }
    ],
    "themes": [
      {
        "title": "Механика характера",
        "text": "Повернуть, раскрыть, сдвинуть: конструкция была частью взаимодействия."
      },
      {
        "title": "Музыка в кармане",
        "text": "Отдельные кнопки, любимый плеер и собственная подборка композиций."
      },
      {
        "title": "Дизайн без правил",
        "text": "Асимметрия, неожиданные формы и телефоны, которые сложно перепутать."
      }
    ],
    "modernTitle": "История продолжается",
    "modernText": "Сенсорные и складные модели тоже есть в архиве — как продолжение истории формы и взаимодействия.",
    "modernLink": "После кнопочной эпохи"
  },
  "en": {
    "title": "When phones had a character of their own",
    "cover": "An icon of the button-phone era",
    "eras": "Beyond years. Into character.",
    "labels": [
      "Button-phone classics",
      "Mechanics and music",
      "A time of transition",
      "The story continues"
    ],
    "compare": "Two characters from one era",
    "text": "The slim RAZR V3 clamshell and the Nokia N95 dual slider. Two different answers to what a phone in your pocket could be.",
    "cta": "Compare their character",
    "principles": "Preserving the character of an era",
    "pairNotes": [
      "Metal · flat keypad · clamshell",
      "Dual slider · camera · music"
    ],
    "principleItems": [
      {
        "title": "Form matters",
        "text": "Keypads, hinges, materials and colours that made a phone recognisable from afar."
      },
      {
        "title": "Objects and memories",
        "text": "Flip it open, skip a track, type an SMS. History through everyday gestures."
      },
      {
        "title": "Nostalgia with evidence",
        "text": "A love of retro phones, grounded in sources, photographs and technical context."
      }
    ],
    "themes": [
      {
        "title": "Mechanical character",
        "text": "Twist, flip, slide: the construction was part of the interaction."
      },
      {
        "title": "Music in your pocket",
        "text": "Dedicated buttons, a favourite player and a collection of your own."
      },
      {
        "title": "Design without rules",
        "text": "Asymmetry, unexpected shapes and phones you could never mistake for another."
      }
    ],
    "modernTitle": "The story continues",
    "modernText": "Touchscreen and folding models remain in the archive as the next chapter in form and interaction.",
    "modernLink": "Beyond the button-phone era"
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
