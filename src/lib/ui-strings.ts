import type { Locale } from './locales';

// Site-chrome strings (nav, footer, filters, spec labels) — separate from phone content, which
// lives in the per-locale markdown files. These are translated manually since there are few of
// them; no i18n library needed for a dictionary this size.
export const UI = {
  uk: {
    siteName: 'Мобільна Історія',
    brandLine: 'Телефони з характером',
    newBadge: 'Нове',
    tagline: 'Ретро-телефони з характером: незвичні форми, справжні кнопки й історії речей, які хотілося тримати в руках.',
    breadcrumbs: { label: 'Навігаційний ланцюжок', home: 'Головна' },
    nav: { catalog: 'Каталог', compare: 'Порівняти', brands: 'Бренди', favorites: 'Мої телефони', about: 'Про проєкт' },
    menu: { open: 'Відкрити меню', close: 'Закрити меню' },
    search: {
      open: 'Відкрити пошук телефонів',
      close: 'Закрити пошук телефонів',
      allResults: 'Усі результати пошуку',
      label: 'Пошук телефонів',
      placeholder: 'Назва моделі, бренд або рік…',
      submit: 'Шукати',
      hint: 'Введи щонайменше 3 символи для швидких результатів.',
      minChars: 'Почни вводити щонайменше 3 символи.',
      loading: 'Завантажуємо каталог для пошуку…',
      error: 'Не вдалося завантажити каталог пошуку. Онови сторінку, щоб спробувати ще раз.',
      resultOne: 'модель',
      resultFew: 'моделі',
      resultMany: 'моделей',
      found: 'знайдено',
      noResults: 'Нічого не знайдено.',
      quickResults: 'Швидкі результати',
      pageTitle: 'Результати пошуку',
      subtitle: 'Шукай телефони за назвою, брендом, роком або коротким описом.',
    },
    themeToggle: 'Перемкнути тему',
    footer: {
      navigation: 'Розділи',
      about:
        'Курований архів ретро-телефонів із характером — дизайн, механіка й спогади кнопкової епохи.',
      inspiredBy: 'Натхненно форматом журналу MobiLux (2004–2016)',
      sisterProject: 'Сестринський проєкт',
      rights: 'Авторство, джерела й умови використання медіа вказуємо поруч із матеріалами.',
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
    formFactors: {"candybar":"Моноблок","clamshell":"Розкладачка","slider":"Слайдер","swivel":"Поворотний корпус","foldable":"Складаний екран","fold-out-keyboard":"Розкладна клавіатура"},
    specs: {
      formFactor: "Конструкція",
      year: 'Рік', priceUsdAtLaunch: 'Ціна на старті', display: 'Екран', resolution: 'Роздільна здатність',
      chipset: 'Чипсет', ram: 'RAM', storage: 'Пам’ять', storageExpandable: 'Карта пам’яті',
      camera: 'Камера', cameraFront: 'Фронтальна камера', battery: 'Акумулятор', batteryType: 'Тип акумулятора', batteryRemovable: 'Знімний акумулятор', charging: 'Заряджання', network: 'Зв’язок',
      connectivity: 'Підключення', os: 'ОС', dimensions: 'Габарити', weight: 'Вага', colors: 'Кольори', simType: 'SIM',
      unitsSoldMillions: 'Продано, млн шт.',
    },
    compare: {
      tableHead: { characteristic: 'Характеристика' },
      subtitle: 'Форма, звички та можливості — досліди два телефони поруч.',
      pickA: 'Оберіть перший телефон…',
      pickB: 'Оберіть другий телефон…',
      change: 'Змінити',
      swap: 'Поміняти місцями',
      reset: 'Скинути',
      noResults: 'Нічого не знайдено',
      empty: 'Оберіть два телефони вище, щоб побачити порівняння.',
      suggestedTitle: 'Почни з цих історій',
      suggestions: {
        gsmEra: 'Два обличчя класичної Nokia: форма, кнопки та щоденні звички.',
        musicPhones: 'Walkman та iTunes: два підходи до музики в кишені.',
        mechanics: 'Розкладачка й подвійний слайдер: характер через механіку.',
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
    favorites: {
      intro: 'Телефони, якими ти користувався. Додай роки користування та склади власну хронологію.',
      add: 'Я мав цей телефон',
      remove: 'Був у мене · прибрати',
      emptyTitle: 'Твоя історія ще порожня',
      emptyBody: 'Скористайся кнопкою «Додати телефон» або познач свою модель у каталозі.',
      sortLabel: 'Порядок',
      sortNewest: 'Випуск: спочатку нові',
      sortOldest: 'Випуск: спочатку старі',
      comparePair: 'Порівняти ці дві моделі',
    },
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
      "title": "Про проєкт",
      "intro": "Мобільна Історія — телефони з характером. Архів кнопкової епохи, коли розкладачку впізнавали за силуетом, музичний телефон — за окремою кнопкою, а власний апарат обирали ще й за відчуттям у руці.",
      "sections": [
        {
          "title": "Що є в архіві",
          "paragraphs": [
            "Історії моделей, галереї й технічні портрети показують, як корпус, клавіатура та механіка впливали на користування. Для окремих телефонів є відео, а на деяких сторінках брендів можна почути звук запуску конкретної моделі."
          ]
        },
        {
          "title": "Як ми обираємо телефони",
          "paragraphs": [
            "Добір ручний: виразний дизайн, особлива механіка чи сценарій користування мають значення поряд з історичним контекстом. Рекорд продажів або технічна першість самі по собі не визначають місце в архіві. У центрі — ретро; сучасні сенсорні та складані моделі продовжують історію."
          ]
        },
        {
          "title": "Журнальний погляд",
          "paragraphs": [
            "Нас надихає український журнал MobiLux (2004–2016): виразна обкладинка, помітна типографіка, коротка історія й технічний портрет. Найстаріші телефони в каталозі датовані 1999 роком, часом масового поширення GSM.",
            "У шапці можна перемкнутися між журнальним і сучасним оформленням. Світла й темна теми доступні в обох."
          ]
        },
        {
          "title": "Три маршрути архівом",
          "paragraphs": [
            "«Механіка характеру», «Музика в кишені» та «Дизайн без правил» об’єднують телефони різних брендів. У каталозі можна поєднати тему з пошуком, фільтрами за брендом, роком і конструкцією та показати лише моделі з відео. Перелік років допомагає швидко перейти до потрібного випуску."
          ]
        },
        {
          "title": "Операційні системи",
          "paragraphs": [
            "Рубрика «ОС» пояснює, як змінювалися мобільні платформи. Відкрий хронологію версій, переглянь ілюстрації інтерфейсу й телефони з архіву. Якщо версію визначено й описано в рубриці, посилання в характеристиках веде до відповідного розділу."
          ],
          "path": "/operating-systems/"
        },
        {
          "title": "Порівнюй характери",
          "paragraphs": [
            "Постав поруч дві моделі, щоб дослідити габарити, вагу, екран і можливості у контексті їхнього часу. «Дані невідомі» означає пропуск або непідтверджене значення; «Немає» — явно зазначену відсутність функції. Кнопка копіювання зберігає посилання на вибрану пару."
          ]
        },
        {
          "title": "Власна хронологія",
          "paragraphs": [
            "У «Кабінеті» знайди телефон за назвою й додай його до своєї колекції. Роки користування можна вказати одразу або додати й змінити пізніше. Без входу дані зберігаються в цьому браузері. Вхід через Google синхронізує колекцію та періоди між пристроями."
          ],
          "path": "/favorites/"
        },
        {
          "title": "Ностальгія з джерелами",
          "paragraphs": [
            "Історії та характеристики звіряємо з анонсами, інструкціями й іншими джерелами. Кредити до фото вказують автора або джерело. Використовуємо матеріали з вільними ліцензіями та фото. Архів доступний українською, російською й англійською."
          ]
        },
        {
          "title": "Допоможи доповнити архів",
          "paragraphs": [
            "Через форму зворотного зв’язку можна запропонувати телефон, уточнити дані, повідомити про помилку або поділитися ідеєю. Завершені зміни записуємо в журнал оновлень."
          ]
        }
      ]
    },
  },
  ru: {
    siteName: 'Мобильная История',
    brandLine: 'Телефоны с характером',
    newBadge: 'Новое',
    tagline: 'Ретро-телефоны с характером: необычные формы, настоящие кнопки и истории вещей, которые хотелось держать в руках.',
    breadcrumbs: { label: 'Навигационная цепочка', home: 'Главная' },
    nav: { catalog: 'Каталог', compare: 'Сравнить', brands: 'Бренды', favorites: 'Мои телефоны', about: 'О проекте' },
    menu: { open: 'Открыть меню', close: 'Закрыть меню' },
    search: {
      open: 'Открыть поиск телефонов',
      close: 'Закрыть поиск телефонов',
      allResults: 'Все результаты поиска',
      label: 'Поиск телефонов',
      placeholder: 'Название модели, бренд или год…',
      submit: 'Искать',
      hint: 'Введи не менее 3 символов для быстрых результатов.',
      minChars: 'Начни вводить не менее 3 символов.',
      loading: 'Загружаем каталог для поиска…',
      error: 'Не удалось загрузить каталог поиска. Обнови страницу, чтобы попробовать снова.',
      resultOne: 'модель',
      resultFew: 'модели',
      resultMany: 'моделей',
      found: 'найдено',
      noResults: 'Ничего не найдено.',
      quickResults: 'Быстрые результаты',
      pageTitle: 'Результаты поиска',
      subtitle: 'Ищи телефоны по названию, бренду, году или краткому описанию.',
    },
    themeToggle: 'Переключить тему',
    footer: {
      navigation: 'Разделы',
      about:
        'Курированный архив ретро-телефонов с характером — дизайн, механика и воспоминания кнопочной эпохи.',
      inspiredBy: 'Вдохновлено форматом журнала MobiLux (2004–2016)',
      sisterProject: 'Сестринский проект',
      rights: 'Авторство, источники и условия использования медиа указываем рядом с материалами.',
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
    formFactors: {"candybar":"Моноблок","clamshell":"Раскладушка","slider":"Слайдер","swivel":"Поворотный корпус","foldable":"Складной экран","fold-out-keyboard":"Раскладная клавиатура"},
    specs: {
      formFactor: "Конструкция",
      year: 'Год', priceUsdAtLaunch: 'Цена на старте', display: 'Экран', resolution: 'Разрешение',
      chipset: 'Чипсет', ram: 'RAM', storage: 'Память', storageExpandable: 'Карта памяти',
      camera: 'Камера', cameraFront: 'Фронтальная камера', battery: 'Аккумулятор', batteryType: 'Тип аккумулятора', batteryRemovable: 'Съёмный аккумулятор', charging: 'Зарядка', network: 'Связь',
      connectivity: 'Подключение', os: 'ОС', dimensions: 'Габариты', weight: 'Вес', colors: 'Цвета', simType: 'SIM',
      unitsSoldMillions: 'Продано, млн шт.',
    },
    compare: {
      tableHead: { characteristic: 'Характеристика' },
      subtitle: 'Форма, привычки и возможности — исследуй два телефона рядом.',
      pickA: 'Выберите первый телефон…',
      pickB: 'Выберите второй телефон…',
      change: 'Изменить',
      swap: 'Поменять местами',
      reset: 'Сбросить',
      noResults: 'Ничего не найдено',
      empty: 'Выберите два телефона выше, чтобы увидеть сравнение.',
      suggestedTitle: 'Начните с этих историй',
      suggestions: {
        gsmEra: 'Два лица классической Nokia: форма, кнопки и повседневные привычки.',
        musicPhones: 'Walkman и iTunes: два подхода к музыке в кармане.',
        mechanics: 'Раскладушка и двойной слайдер: характер через механику.',
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
    favorites: {
      intro: 'Телефоны, которыми ты пользовался. Добавь годы использования и составь свою хронологию.',
      add: 'У меня был этот телефон',
      remove: 'Был у меня · убрать',
      emptyTitle: 'Твоя история пока пуста',
      emptyBody: 'Воспользуйся кнопкой «Добавить телефон» или отметь свою модель в каталоге.',
      sortLabel: 'Порядок',
      sortNewest: 'Выпуск: сначала новые',
      sortOldest: 'Выпуск: сначала старые',
      comparePair: 'Сравнить эти две модели',
    },
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
      "title": "О проекте",
      "intro": "Мобильная История — телефоны с характером. Архив кнопочной эпохи, когда раскладушку узнавали по силуэту, музыкальный телефон — по отдельной кнопке, а свой аппарат выбирали ещё и по ощущению в руке.",
      "sections": [
        {
          "title": "Что есть в архиве",
          "paragraphs": [
            "Истории моделей, галереи и технические портреты показывают, как корпус, клавиатура и механика влияли на использование. Для отдельных телефонов есть видео, а на некоторых страницах брендов можно услышать звук запуска конкретной модели."
          ]
        },
        {
          "title": "Как мы выбираем телефоны",
          "paragraphs": [
            "Отбор ручной: выразительный дизайн, особая механика или сценарий использования важны вместе с историческим контекстом. Рекорд продаж или техническое первенство сами по себе не определяют место в архиве. В центре — ретро; современные сенсорные и складные модели продолжают историю."
          ]
        },
        {
          "title": "Журнальный взгляд",
          "paragraphs": [
            "Нас вдохновляет украинский журнал MobiLux (2004–2016): выразительная обложка, заметная типографика, короткая история и технический портрет. Самые ранние телефоны в каталоге датированы 1999 годом, временем массового распространения GSM.",
            "В шапке можно переключаться между журнальным и современным оформлением. Светлая и тёмная темы доступны в обоих."
          ]
        },
        {
          "title": "Три маршрута по архиву",
          "paragraphs": [
            "«Механика характера», «Музыка в кармане» и «Дизайн без правил» объединяют телефоны разных брендов. В каталоге можно сочетать тему с поиском и фильтрами по бренду, году и конструкции, а также показывать только модели с видео. Список годов помогает быстро перейти к нужному выпуску."
          ]
        },
        {
          "title": "Операционные системы",
          "paragraphs": [
            "Раздел «ОС» объясняет, как менялись мобильные платформы. Открой хронологию версий, посмотри иллюстрации интерфейса и телефоны из архива. Если версия определена и описана в разделе, ссылка в характеристиках ведёт к соответствующему подразделу."
          ],
          "path": "/operating-systems/"
        },
        {
          "title": "Сравнивай характеры",
          "paragraphs": [
            "Поставь рядом две модели, чтобы изучить размеры, вес, экран и возможности в контексте их времени. «Данные неизвестны» означает пропуск или неподтверждённое значение; «Нет» — явно указанное отсутствие функции. Кнопка копирования сохраняет ссылку на выбранную пару."
          ]
        },
        {
          "title": "Своя хронология",
          "paragraphs": [
            "В «Кабинете» найди телефон по названию и добавь его в коллекцию. Годы использования можно указать сразу или добавить и изменить позже. Без входа данные хранятся в этом браузере. Вход через Google синхронизирует коллекцию и периоды между устройствами."
          ],
          "path": "/favorites/"
        },
        {
          "title": "Ностальгия с источниками",
          "paragraphs": [
            "Истории и характеристики сверяем с анонсами, инструкциями и другими источниками. Подписи к фото указывают автора или источник. Используем материалы со свободными лицензиями и фото, на которые получено разрешение. Архив доступен на украинском, русском и английском."
          ]
        },
        {
          "title": "Помоги пополнить архив",
          "paragraphs": [
            "Через форму обратной связи можно предложить телефон, уточнить данные, сообщить об ошибке или поделиться идеей. Завершённые изменения записываем в журнал обновлений."
          ]
        }
      ]
    },
  },
  en: {
    siteName: 'Mobile History',
    brandLine: 'Phones with character',
    newBadge: 'New',
    tagline: 'Retro phones with character: distinctive shapes, real buttons and the stories of objects you wanted to hold.',
    breadcrumbs: { label: 'Breadcrumb', home: 'Home' },
    nav: { catalog: 'Catalog', compare: 'Compare', brands: 'Brands', favorites: 'My phones', about: 'About' },
    menu: { open: 'Open menu', close: 'Close menu' },
    search: {
      open: 'Open phone search',
      close: 'Close phone search',
      allResults: 'All search results',
      label: 'Search phones',
      placeholder: 'Model, brand, or year…',
      submit: 'Search',
      hint: 'Type at least 3 characters for quick results.',
      minChars: 'Start with at least 3 characters.',
      loading: 'Loading the search catalog…',
      error: 'Could not load the search catalog. Reload the page to try again.',
      resultOne: 'model',
      resultFew: 'models',
      resultMany: 'models',
      found: 'found',
      noResults: 'No phones found.',
      quickResults: 'Quick results',
      pageTitle: 'Search results',
      subtitle: 'Search phones by name, brand, year, or short description.',
    },
    themeToggle: 'Toggle color theme',
    footer: {
      navigation: 'Explore',
      about: 'A curated archive of retro phones with character: design, mechanics and memories from the button-phone era.',
      inspiredBy: 'Inspired by the format of MobiLux magazine (2004–2016)',
      sisterProject: 'Sister project',
      rights: 'Media credits, sources and terms of use appear alongside the materials.',
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
    formFactors: {"candybar":"Candybar","clamshell":"Clamshell","slider":"Slider","swivel":"Swivel body","foldable":"Foldable screen","fold-out-keyboard":"Fold-out keyboard"},
    specs: {
      formFactor: "Form factor",
      year: 'Year', priceUsdAtLaunch: 'Launch price', display: 'Display', resolution: 'Resolution',
      chipset: 'Chipset', ram: 'RAM', storage: 'Storage', storageExpandable: 'Expandable storage',
      camera: 'Camera', cameraFront: 'Front camera', battery: 'Battery', batteryType: 'Battery type', batteryRemovable: 'Removable battery', charging: 'Charging', network: 'Network',
      connectivity: 'Connectivity', os: 'OS', dimensions: 'Dimensions', weight: 'Weight', colors: 'Colors', simType: 'SIM',
      unitsSoldMillions: 'Units sold, millions',
    },
    compare: {
      tableHead: { characteristic: 'Specification' },
      subtitle: 'Shape, habits and capabilities: explore two phones side by side.',
      pickA: 'Pick the first phone…',
      pickB: 'Pick the second phone…',
      change: 'Change',
      swap: 'Swap',
      reset: 'Reset',
      noResults: 'No matches',
      empty: 'Pick two phones above to see the comparison.',
      suggestedTitle: 'Start with these stories',
      suggestions: {
        gsmEra: 'Two faces of classic Nokia: shapes, buttons and everyday habits.',
        musicPhones: 'Walkman and iTunes: two approaches to music in your pocket.',
        mechanics: 'A clamshell and a dual slider: character through mechanics.',
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
    favorites: {
      intro: 'Phones you used to own. Add the years you used each phone to build your own timeline.',
      add: 'I had this phone',
      remove: 'I had it · remove',
      emptyTitle: 'Your story is empty',
      emptyBody: 'Use “Add a phone” or mark a model you’ve owned in the catalogue.',
      sortLabel: 'Order',
      sortNewest: 'Release: newest first',
      sortOldest: 'Release: oldest first',
      comparePair: 'Compare these two phones',
    },
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
      "title": "About",
      "intro": "Mobile History — phones with character. An archive of the button-phone era, when a clamshell was recognised by its silhouette, a music phone by its dedicated key, and a handset was chosen for how it felt in your hand.",
      "sections": [
        {
          "title": "What’s in the archive",
          "paragraphs": [
            "Model histories, galleries and technical portraits show how bodies, keypads and mechanisms shaped everyday use. Selected phones have videos, and some brand pages let you hear the startup sound of a specific model."
          ]
        },
        {
          "title": "How we choose phones",
          "paragraphs": [
            "Selection is manual: distinctive design, mechanics or ways of using a phone matter alongside historical context. Sales records and technical firsts alone do not determine a place in the archive. Retro phones are at its heart; modern touchscreen and folding models continue the story."
          ]
        },
        {
          "title": "A magazine perspective",
          "paragraphs": [
            "We take inspiration from Ukrainian magazine MobiLux (2004–2016): a striking cover, expressive typography, a concise story and a technical portrait. The earliest phones in the catalog date to 1999, when GSM was reaching a mass audience.",
            "Use the header controls to switch between magazine and modern layouts. Both offer light and dark themes."
          ]
        },
        {
          "title": "Three routes through the archive",
          "paragraphs": [
            "Mechanical character, Music in your pocket and Design without rules bring together phones from different brands. Combine a theme with search and filters for brand, year and form factor, or show only phones with video. The year index takes you directly to a release year."
          ]
        },
        {
          "title": "Operating systems",
          "paragraphs": [
            "Explore how mobile platforms evolved through release timelines, interface illustrations and phones from the archive. When the phone’s version is known and documented, its specifications link to the relevant section."
          ],
          "path": "/operating-systems/"
        },
        {
          "title": "Compare their character",
          "paragraphs": [
            "Place two models side by side to explore size, weight, displays and capabilities in the context of their time. “Unknown” marks a missing or unconfirmed value; “None” indicates an explicitly absent feature. The copy button saves a link to your selected pair."
          ]
        },
        {
          "title": "Your phone timeline",
          "paragraphs": [
            "Open Account, search for a phone and add it to your collection. Record the years you used it now or add and edit them later. While signed out, the collection stays in this browser. Sign in with Google to sync your phones and dates across devices."
          ],
          "path": "/favorites/"
        },
        {
          "title": "Nostalgia with sources",
          "paragraphs": [
            "We check histories and specifications against announcements, manuals and other sources. Image credits identify the photographer or source. We use freely licensed materials and photos shared with permission. The archive is available in Ukrainian, Russian and English."
          ]
        },
        {
          "title": "Help build the archive",
          "paragraphs": [
            "Use the feedback form to suggest a phone, correct a detail, report a bug or share an idea. Completed changes appear in the update journal."
          ]
        }
      ]
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
    "text": "Nokia 3250 із поворотним музичним блоком і камерофон Sony Ericsson K750i: два погляди на мультимедійний телефон 2005 року.",
    "cta": "Порівняти характери",
    "principles": "Зберігаємо характер епохи",
    "pairNotes": [
      "Твіст-механізм · музичні клавіші · microSD",
      "Автофокус · кришка об’єктива · камерофон"
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
    "text": "Nokia 3250 с поворотным музыкальным блоком и камерофон Sony Ericsson K750i: два взгляда на мультимедийный телефон 2005 года.",
    "cta": "Сравнить характеры",
    "principles": "Сохраняем характер эпохи",
    "pairNotes": [
      "Твист-механизм · музыкальные клавиши · microSD",
      "Автофокус · крышка объектива · камерофон"
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
    "text": "The Nokia 3250 with its rotating music module and the Sony Ericsson K750i camera phone: two takes on the multimedia handset in 2005.",
    "cta": "Compare their character",
    "principles": "Preserving the character of an era",
    "pairNotes": [
      "Twist mechanism · music keys · microSD",
      "Autofocus · lens cover · camera phone"
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
export const RETRO_DISCOVERY = {
  uk: { collections: 'Дослідити тему', related: 'Споріднені характери', note: 'Продовжуй знайомство з телефонами через спільні ідеї дизайну й досвід користування.' },
  ru: { collections: 'Исследовать тему', related: 'Родственные характеры', note: 'Продолжай знакомство с телефонами через общие идеи дизайна и опыт использования.' },
  en: { collections: 'Explore the theme', related: 'More phones with character', note: 'Keep exploring phones through shared design ideas and ways of using them.' },
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
    eras: ['Кнопкова класика', 'Кожен має своє обличчя', 'Музика в кишені', 'На межі епох', 'Нові звички й повернення легенд', 'Продовження історії'],
    eraNotes: ['SMS, змінні панелі й форми, які впізнавали здалеку.', 'Розкладачки, слайдери, джойстики й перші фотографії.', 'Окремі музичні кнопки, плеєри й власні добірки треків.', 'Подвійні слайдери та QWERTY співіснують із першими сенсорними моделями.', 'Сенсорні платформи змінюють взаємодію, а знайомі імена повертаються.', 'Сучасні моделі як наступна глава історії форми, не заміна ретро.'],
  },
  ru: {
    filters: 'Фильтры', modelSearch: 'Поиск', optionSearch: 'Найти в списке…', selectEmpty: 'Ничего не найдено', active: 'Ваш выбор', years: 'Перейти к году', allYears: 'Все годы',
    story: 'История модели', specs: 'Технический портрет', earlier: 'Раньше', contemporary: 'В том же году', later: 'Позже',
    overview: 'Коротко об отличиях', differences: 'Только отличия', differenceNote: 'Выделены разные значения. Больше не всегда означает лучше.', copyLink: 'Скопировать ссылку', copied: 'Ссылка скопирована', manualCopy: 'Скопируйте ссылку из поля', unknown: 'Данные неизвестны', dataNote: '«Данные неизвестны» — характеристика не подтверждена. «Нет» — функция отсутствует по имеющимся данным.',
    eras: ['Кнопочная классика', 'У каждого своё лицо', 'Музыка в кармане', 'На границе эпох', 'Новые привычки и возвращение легенд', 'Продолжение истории'],
    eraNotes: ['SMS, сменные панели и узнаваемые издалека формы.', 'Раскладушки, слайдеры, джойстики и первые фотографии.', 'Отдельные музыкальные кнопки, плееры и свои подборки треков.', 'Двойные слайдеры и QWERTY соседствуют с первыми сенсорными моделями.', 'Сенсорные платформы меняют взаимодействие, знакомые имена возвращаются.', 'Современные модели как следующая глава истории формы, не замена ретро.'],
  },
  en: {
    filters: 'Filters', modelSearch: 'Search', optionSearch: 'Search options…', selectEmpty: 'No options found', active: 'Your selection', years: 'Jump to a year', allYears: 'All years',
    story: 'The story', specs: 'Technical portrait', earlier: 'Earlier', contemporary: 'The same year', later: 'Later',
    overview: 'Differences at a glance', differences: 'Differences only', differenceNote: 'Different values are highlighted. Bigger does not always mean better.', copyLink: 'Copy link', copied: 'Link copied', manualCopy: 'Copy the link from this field', unknown: 'Unknown', dataNote: '“Unknown” means the specification has not been confirmed. “None” means the feature is absent according to the available data.',
    eras: ['Button-phone classics', 'A face of their own', 'Music in your pocket', 'Between two eras', 'New habits and returning legends', 'The next chapter'],
    eraNotes: ['SMS, interchangeable covers and shapes you recognised from afar.', 'Clamshells, sliders, joysticks and first photographs.', 'Dedicated music keys, players and collections of your own.', 'Dual sliders and QWERTY coexist with early touchscreen models.', 'Touch platforms change interaction while familiar names return.', 'Modern models continue the story of form alongside the retro archive.'],
  },
} as const;
export const CHROME_COPY = {
  uk: { archive: 'Про архів', note: 'Добираємо моделі за характером дизайну та досвідом користування.', approach: 'Добір моделей і джерела' },
  ru: { archive: 'Об архиве', note: 'Выбираем модели по характеру дизайна и опыту использования.', approach: 'Отбор моделей и источники' },
  en: { archive: 'About the archive', note: 'Models selected for distinctive design and the experience of using them.', approach: 'Selection and sources' },
} as const;
export const COMPARE_DESIGN = {
  uk: { first: 'Телефон A', second: 'Телефон B', rows: 'Характеристик: {count}', identical: 'У заповнених характеристиках відмінностей немає.' },
  ru: { first: 'Телефон A', second: 'Телефон B', rows: 'Характеристик: {count}', identical: 'В заполненных характеристиках различий нет.' },
  en: { first: 'Phone A', second: 'Phone B', rows: 'Specifications: {count}', identical: 'There are no differences in the recorded specifications.' },
} as const;
export const FINAL_DESIGN_COPY = {
  uk: { sales: 'Історія в цифрах', salesNote: 'Публічно задокументований тираж однієї з моделей архіву. Це не рейтинг усіх телефонів.', loading: 'Відкриваємо твою історію…', noScript: 'Увімкни JavaScript, щоб побачити збережені в цьому браузері телефони.' },
  ru: { sales: 'История в цифрах', salesNote: 'Публично задокументированный тираж одной из моделей архива. Это не рейтинг всех телефонов.', loading: 'Открываем твою историю…', noScript: 'Включи JavaScript, чтобы увидеть сохранённые в этом браузере телефоны.' },
  en: { sales: 'History in numbers', salesNote: 'Publicly documented sales for one model in the archive. This is not a ranking of all phones.', loading: 'Opening your phone history…', noScript: 'Enable JavaScript to see the phones saved in this browser.' },
} as const;
export const CATALOG_POSITION = {
  uk: { label: 'Поточний рік каталогу', filters: 'До фільтрів', years: 'Перейти до року', jump: 'Моделі за роками' },
  ru: { label: 'Текущий год каталога', filters: 'К фильтрам', years: 'Перейти к году', jump: 'Модели по годам' },
  en: { label: 'Current catalog year', filters: 'Back to filters', years: 'Jump to year', jump: 'Models by year' },
} as const;
export const SPEC_VARIANT_NOTE = {
  uk: 'Спільні характеристики наведено один раз. У рядках із відмінностями окремо позначено версію {model}.',
  ru: 'Общие характеристики приведены один раз. В строках с отличиями отдельно отмечена версия {model}.',
  en: 'Shared specifications appear once. Where values differ, the {model} version is labelled separately.',
};
export const MUSEUM_PHOTO_LABEL = {
  uk: 'Фото: Mobile Phone Museum',
  ru: 'Фото: Mobile Phone Museum',
  en: 'Photo: Mobile Phone Museum',
};


export const HOME_SIEMENS_JOURNEY = {
  uk: { title: 'Чотири кроки Siemens', intro: 'Від простих дзвінків до фото, музики й навігації — простеж зміни в корпусах і щоденних можливостях чотирьох моделей.', steps: ['Дзвінки й мелодії', 'Камера та джойстик', 'Фото й музика', 'Відеодзвінки та GPS'], compare: 'Порівняти початок і фінал', brand: 'Історія Siemens' },
  ru: { title: 'Четыре шага Siemens', intro: 'От простых звонков до фото, музыки и навигации — проследи изменения в корпусах и повседневных возможностях четырёх моделей.', steps: ['Звонки и мелодии', 'Камера и джойстик', 'Фото и музыка', 'Видеозвонки и GPS'], compare: 'Сравнить начало и финал', brand: 'История Siemens' },
  en: { title: 'Four steps through Siemens', intro: 'From simple calls to photography, music and navigation: trace the changing shapes and everyday possibilities of four handsets.', steps: ['Calls and ringtones', 'Camera and joystick', 'Photos and music', 'Video calls and GPS'], compare: 'Compare the first and last', brand: 'The Siemens story' },
} as const;


export const GALLERY_INTERACTION = {
  uk: { zoomIn: 'Збільшити 2×', zoomOut: 'Умістити фото', swipe: 'Гортай фото свайпом ліворуч або праворуч.' },
  ru: { zoomIn: 'Увеличить 2×', zoomOut: 'Уместить фото', swipe: 'Листай фото свайпом влево или вправо.' },
  en: { zoomIn: 'Zoom in 2×', zoomOut: 'Fit photo', swipe: 'Swipe left or right to browse photos.' },
} as const;


export const HOME_COVER_REFRESH = {
  "uk": {
    "intro": "Пам’ятаєш клацання кришки, джойстик під пальцем і перший трек у навушниках? Збираємо телефони, які впізнавали за силуетом — і любили за відчуття.",
    "open": "Розкритий",
    "closed": "Закритий",
    "feature": "Форма, яку пам’ятають",
    "story": "Роздивитися RAZR V3",
    "details": [
      "Металевий корпус",
      "Пласкі клавіші",
      "Жест розкриття"
    ],
    "themes": [
      "Поворотний блок Nokia 5700 і подвійний слайдер N95: механізм змінює те, як ти слухаєш музику, фотографуєш і набираєш номер.",
      "Біло-помаранчевий Walkman і сріблястий ROKR з iTunes. Два способи взяти улюблені треки із собою ще до стримінгу.",
      "Асиметричні клавіші Nokia 7610 та округлий PEBL. Тут корпус — головна причина зупинитися й роздивитися телефон."
    ]
  },
  "ru": {
    "intro": "Помнишь щелчок крышки, джойстик под пальцем и первый трек в наушниках? Собираем телефоны, которые узнавали по силуэту и любили за ощущения.",
    "open": "Открытый",
    "closed": "Закрытый",
    "feature": "Форма, которую помнят",
    "story": "Рассмотреть RAZR V3",
    "details": [
      "Металлический корпус",
      "Плоские клавиши",
      "Жест раскрытия"
    ],
    "themes": [
      "Поворотный блок Nokia 5700 и двойной слайдер N95: механизм меняет то, как ты слушаешь музыку, фотографируешь и набираешь номер.",
      "Бело-оранжевый Walkman и серебристый ROKR с iTunes. Два способа взять любимые треки с собой ещё до стриминга.",
      "Асимметричные клавиши Nokia 7610 и округлый PEBL. Здесь корпус — главная причина остановиться и рассмотреть телефон."
    ]
  },
  "en": {
    "intro": "Remember the click of a flip, a joystick under your thumb and that first track through your headphones? An archive of phones recognised by their silhouette and remembered for how they felt.",
    "open": "Open",
    "closed": "Closed",
    "feature": "A shape worth remembering",
    "story": "Explore the RAZR V3",
    "details": [
      "Metal body",
      "Flat keys",
      "The flip-open gesture"
    ],
    "themes": [
      "The rotating keypad of Nokia 5700 and the dual slider of N95: mechanics change how you listen, take photos and dial a number.",
      "An orange-and-white Walkman and a silver ROKR with iTunes. Two ways to carry your favourite tracks before streaming.",
      "The asymmetric keys of Nokia 7610 and the rounded PEBL. Here, the body itself is a reason to stop and take a closer look."
    ]
  }
} as const;

export const OWNED_PHONE_COPY = {
 uk:{legacyTitle:'Раніше збережені моделі',legacyIntro:'Це твоє попереднє «Обране». Познач «Я мав цей телефон» лише для моделей, якими ти користувався. Решту можна прибрати з цього списку.',dismiss:'Прибрати зі старого списку',year:'Рік виходу'},
 ru:{legacyTitle:'Ранее сохранённые модели',legacyIntro:'Это прежнее «Избранное». Отметь «У меня был этот телефон» только для моделей, которыми ты пользовался. Остальные можно убрать из этого списка.',dismiss:'Убрать из старого списка',year:'Год выхода'},
 en:{legacyTitle:'Previously saved models',legacyIntro:'These are your former Favorites. Choose “I had this phone” only for models you actually used. You can dismiss the others from this list.',dismiss:'Dismiss from the old list',year:'Release year'},
};

export const PROJECT_PRESENTATION = {
 uk: { kicker: 'Про архів', intro: 'Телефон був особистою річчю ще до того, як став суцільним екраном. Збираємо форми, механізми й щоденні звички, за якими впізнається ціла епоха.', note: 'Курована добірка, а не повний перелік моделей. У центрі — дизайн і досвід користування.', languages: 'Мови архіву', collection: 'У добірці', brands: 'Бренди' },
 ru: { kicker: 'Об архиве', intro: 'Телефон был личной вещью задолго до того, как стал сплошным экраном. Собираем формы, механизмы и повседневные привычки, по которым узнаётся целая эпоха.', note: 'Кураторская подборка, а не полный перечень моделей. В центре — дизайн и опыт использования.', languages: 'Языки архива', collection: 'В подборке', brands: 'Бренды' },
 en: { kicker: 'About the archive', intro: 'A phone was a personal object long before it became all screen. We collect the shapes, mechanisms and everyday habits that make an era recognisable.', note: 'A curated selection, rather than a complete model directory. Design and the experience of using a phone come first.', languages: 'Archive languages', collection: 'In the collection', brands: 'Brands' },
} as const;

export const COMPARE_EXPERIENCE = {
 uk: { kicker:'Два телефони. Два підходи.', steps:['Обери знайомий телефон','Додай інший характер','Досліди відмінності'], character:'Його характер', missing:'Додай ще один телефон — і порівняй їхню форму та можливості поруч.', note:'Підсвічено відмінності, а не переможця. «—» означає, що значення не підтверджене в архіві; це не завжди відсутність функції.', specs:'Техніка за характером', intro:'Спочатку форма, клавіатура й задум. Потім — екран, камера та інші характеристики. Тут немає балів або загального переможця.' },
 ru: { kicker:'Два телефона. Два подхода.', steps:['Выбери знакомый телефон','Добавь другой характер','Исследуй различия'], character:'Его характер', missing:'Добавь ещё один телефон — и сравни их форму и возможности рядом.', note:'Подсвечены различия, а не победитель. «—» означает, что значение не подтверждено в архиве; это не всегда отсутствие функции.', specs:'Техника за характером', intro:'Сначала форма, клавиатура и замысел. Затем — экран, камера и другие характеристики. Здесь нет баллов или общего победителя.' },
 en: { kicker:'Two phones. Two approaches.', steps:['Pick a familiar phone','Add a different character','Explore the differences'], character:'Its character', missing:'Add one more phone to explore their shapes and capabilities side by side.', note:'Highlights show differences, not a winner. “—” means a value is unconfirmed in the archive, not necessarily that a feature is absent.', specs:'The technology behind the character', intro:'Start with shape, keys and intent. Then explore the screen, camera and other specifications. There are no scores or overall winners here.' },
} as const;

export const PHONE_READING = {
 uk:{photos:'Фото',media:'Роздивись ближче',specNote:'Лише підтверджені дані. Спільні характеристики споріднених версій наведено один раз.', photoHint:'Обери ракурс або відкрий фото на весь екран.'},
 ru:{photos:'Фото',media:'Рассмотри поближе',specNote:'Только подтверждённые данные. Общие характеристики родственных версий приведены один раз.', photoHint:'Выбери ракурс или открой фото на весь экран.'},
 en:{photos:'Photos',media:'Look closer',specNote:'Confirmed data only. Shared specifications for related versions appear once.',photoHint:'Choose a view or open the photo fullscreen.'},
} as const;
