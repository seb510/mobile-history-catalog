export const UPDATES_COPY = {
 uk: { title:'Оновлення', intro:'Що змінилося в архіві: нові телефони, фотографії та можливості сайту.', additions:'Нові в архіві', changes:'Зміни на сайті', edition:'Журнал оновлень', note:'Дати позначають завершені зміни в проєкті за історією комітів, а не роки випуску телефонів.', aboutLink:'Що нового в проєкті', release:'Випуск' },
 ru: { title:'Обновления', intro:'Что изменилось в архиве: новые телефоны, фотографии и возможности сайта.', additions:'Новое в архиве', changes:'Изменения на сайте', edition:'Журнал обновлений', note:'Даты обозначают завершённые изменения проекта по истории коммитов, а не годы выпуска телефонов.', aboutLink:'Что нового в проекте', release:'Выпуск' },
 en: { title:'Updates', intro:'What changed in the archive: new phones, photographs and site features.', additions:'New in the archive', changes:'Site changes', edition:'Update journal', note:'Dates mark completed project changes recorded in commit history, not the phones’ release years.', aboutLink:'What’s new in the project', release:'Released' },
} as const;
// Curated public changelog. Add completed changes only; no speculative release dates.
export const UPDATES = [{
  "date": "2026-11-11",
  "phones": [],
  "changes": {
    "uk": ["Додано рубрику «Операційні системи»: історія платформ, ілюстрації інтерфейсів і телефони з архіву.", "Оновлено галереї Nokia 600 і Sony Xperia Z."],
    "ru": ["Добавлена рубрика «Операционные системы»: история платформ, иллюстрации интерфейсов и телефоны из архива.", "Обновлены галереи Nokia 600 и Sony Xperia Z."],
    "en": ["Added an Operating Systems section with platform histories, interface illustrations and phones from the archive.", "Updated the Nokia 600 and Sony Xperia Z galleries."]
  }
}, {
  "date": "2026-11-10",
  "phones": ["nokia-500", "nokia-600", "nokia-700", "sony-xperia-z"],
  "changes": {
    "uk": ["Додано Nokia 500, 600 і 700 та Sony Xperia Z трьома мовами; для кожної моделі підібрано відео.", "Для Nokia 500, Nokia 700 і Xperia Z додано фото з Wikimedia Commons із вільними ліцензіями. Nokia 600 позначено як анонсовану, але скасовану модель; її сторінка використовує заглушку.", "Створено сторінку бренду Sony та додано добірку Xperia Z."] ,
    "ru": ["Добавлены Nokia 500, 600 и 700, а также Sony Xperia Z на трёх языках; для каждой модели подобрано видео.", "Для Nokia 500, Nokia 700 и Xperia Z добавлены фотографии из Wikimedia Commons со свободными лицензиями. Nokia 600 отмечена как анонсированная, но отменённая модель; на её странице используется заглушка.", "Создана страница бренда Sony и добавлена подборка Xperia Z."],
    "en": ["Added Nokia 500, 600 and 700, plus Sony Xperia Z, in all three languages, with a video for each model.", "Added freely licensed Wikimedia Commons photos for Nokia 500, Nokia 700 and Xperia Z. Nokia 600 is identified as announced but cancelled, and uses placeholder artwork.", "Created a Sony brand page and added the Xperia Z selection."]
  }
}, {
  "date": "2026-11-09",
  "phones": ["siemens-m55", "nokia-6230i", "nokia-6280", "sony-ericsson-k810i", "sony-ericsson-w910i", "lg-kg800", "nokia-8600-luna", "nokia-7900-prism", "nokia-7710", "siemens-sl45i", "siemens-xelibri-2", "siemens-xelibri-8", "sony-ericsson-xperia-x1"],
  "changes": {
    "uk": [
      "Додано п’ять моделей 2005–2007 років із фото, відео й перекладами.",
      "До каталогу приєдналися Nokia 8600 Luna, 7900 Prism і 7710, Siemens SL45i та Xelibri 2/8, Sony Ericsson Xperia X1.",
      "Додано компактну форму пропозицій, виправлень і повідомлень про баги.",
      "Пошук бренду й моделі виключає телефони, які вже є в архіві.",
      "Підключено доставку звернень у Telegram. Оновлено пояснення приватності й переклади всіх брендів."
    ],
    "ru": [
      "Добавлены пять моделей 2005–2007 годов с фото, видео и переводами.",
      "В каталог добавлены Nokia 8600 Luna, 7900 Prism и 7710, Siemens SL45i и Xelibri 2/8, Sony Ericsson Xperia X1.",
      "Добавлена компактная форма предложений, исправлений и сообщений об ошибках.",
      "Поиск бренда и модели исключает телефоны, которые уже есть в архиве.",
      "Подключена доставка обращений в Telegram. Обновлены пояснения приватности и переводы всех брендов."
    ],
    "en": [
      "Added five 2005–2007 phones with photos, videos and translations.",
      "Added Nokia 8600 Luna, 7900 Prism and 7710, Siemens SL45i and Xelibri 2/8, and Sony Ericsson Xperia X1.",
      "Added a compact form for suggestions, corrections and bug reports.",
      "Brand and model search excludes phones already in the archive.",
      "Connected Telegram feedback delivery and updated the privacy explanation and translations for all brands."
    ]
  }
},
{
  "date": "2026-11-08",
  "phones": [
    "nokia-5510",
    "nokia-3650",
    "nokia-7600",
    "nokia-n93",
    "nokia-e90",
    "sony-ericsson-p800",
    "sony-ericsson-p910i",
    "sony-ericsson-w900i",
    "sony-ericsson-w880i",
    "sony-ericsson-c905",
    "nokia-6300",
    "nokia-5310-xpressmusic",
    "nokia-5300-xpressmusic",
    "nokia-6500-slide",
    "sony-ericsson-k550i",
    "sony-ericsson-w610i",
    "samsung-sgh-d900",
    "samsung-sgh-u900",
    "motorola-krzr-k1",
    "lg-vx8500"
  ],
  "changes": {
    "uk": [
      "Додано 20 ретро-моделей із фото, відео й перекладами.",
      "Сучасний дизайн: Liquid Glass і бірюзовий акцент. Журнал зберіг мідь.",
      "Оновлено логотип, favicon, хедер, футер і мобільне меню.",
      "Плавніша галерея, іконки керування та зразки кольорів корпусу.",
      "Закріплено назви моделей у порівнянні й покращено таблиці.",
      "Додано звуки ввімкнення для всіх 11 брендів. LG VX8500 виправлено на слайдер.",
      "Додано особисту хронологію, недавні поповнення на головній і прев’ю посилань."
    ],
    "ru": [
      "Добавлено 20 ретромоделей с фото, видео и переводами.",
      "Современный дизайн: Liquid Glass и бирюзовый акцент. Журнал сохранил медь.",
      "Обновлены логотип, favicon, хедер, футер и мобильное меню.",
      "Более плавная галерея, иконки управления и образцы цветов корпуса.",
      "Закреплены названия моделей в сравнении и улучшены таблицы.",
      "Добавлены звуки включения для всех 11 брендов. LG VX8500 исправлен на слайдер.",
      "Добавлены личная хронология, недавние пополнения на главной и превью ссылок."
    ],
    "en": [
      "Added 20 retro models with photos, videos and translations.",
      "Modern design: Liquid Glass and teal accents. The magazine retains copper.",
      "Updated the logo, favicons, header, footer and mobile menu.",
      "Smoother galleries, icon controls and body-colour swatches.",
      "Added sticky model names in comparison and refined specification tables.",
      "Added startup sounds for all 11 brands. Corrected the LG VX8500 to a slider.",
      "Added a personal timeline, recent additions on the homepage and link previews."
    ]
  }
},
{"date":"2026-11-07","phones":[],"changes":{"uk":["Розширено відеотеку: огляди, ретроспективи та демонстрації меню для Nokia, Siemens, Motorola, Sony Ericsson і Samsung. Додано фільтр моделей із відео та позначки на картках.","«Обране» перетворено на «Мої телефони» — особисту добірку моделей, якими користувалися.","Оновлено історії моделей, характеристики та мобільну навігацію сторінок телефонів. Завершено перевірку узгодженості перекладів."],"ru":["Расширена видеотека: обзоры, ретроспективы и демонстрации меню для Nokia, Siemens, Motorola, Sony Ericsson и Samsung. Добавлены фильтр моделей с видео и отметки на карточках.","«Избранное» преобразовано в «Мои телефоны» — личную подборку моделей, которыми пользовались.","Обновлены истории моделей, характеристики и мобильная навигация страниц телефонов. Завершена проверка согласованности переводов."],"en":["Expanded the video library with reviews, retrospectives and menu demonstrations for Nokia, Siemens, Motorola, Sony Ericsson and Samsung. Added video filtering and card badges.","Favourites became My phones: a personal collection of phones you have used.","Updated model histories, specifications and mobile navigation on phone pages, and completed a translation consistency audit."]}},
{"date":"2026-11-05","phones":[],"changes":{"uk":["Поповнено ретро-добірку моделями Nokia 8800, N90 і Sony Ericsson S700i. Додано бренди LG та Alcatel і розширено історії чинних виробників сучасними моделями.","Перероблено сторінки брендів: виразніший вступ про виробника, компактніша композиція та узгоджені ховери карток.","Оновлено фотографії Nokia X7, N79, N81 та інших моделей; N81 8GB представлено як споріднену версію. Для нових поповнень додано позначку «Нове»."],"ru":["Ретроподборка пополнена Nokia 8800, N90 и Sony Ericsson S700i. Добавлены бренды LG и Alcatel, истории действующих производителей продолжены современными моделями.","Переработаны страницы брендов: более выразительное введение о производителе, компактная композиция и единые ховеры карточек.","Обновлены фотографии Nokia X7, N79, N81 и других моделей; N81 8GB представлен как родственная версия. Для новых пополнений добавлена отметка «Новое»."],"en":["Added Nokia 8800, N90 and Sony Ericsson S700i to the retro selection. Introduced LG and Alcatel brand pages and extended active manufacturers’ timelines with modern models.","Redesigned brand pages with clearer manufacturer introductions, more compact layouts and consistent card hover effects.","Refreshed photos for Nokia X7, N79, N81 and other models, and included N81 8GB as a related variant. Added a badge for recent additions."]}},
{"date":"2026-10-31","phones":[],"changes":{"uk":["Додано загальний пошук телефонів із доступом із хедера.","З’явилися політика приватності, пояснення cookies і керування згодою.","Оновлено фото й історії Siemens, Nokia 5700 та N95; додано Nokia 6800, 7280 і 6233. Удосконалено навігацію за роками в каталозі."],"ru":["Добавлен общий поиск телефонов с доступом из хедера.","Появились политика приватности, информация о cookies и управление согласием.","Обновлены фотографии и истории Siemens, Nokia 5700 и N95; добавлены Nokia 6800, 7280 и 6233. Улучшена навигация по годам в каталоге."],"en":["Added site-wide phone search accessible from the header.","Introduced a privacy policy, cookie information and consent controls.","Updated Siemens, Nokia 5700 and N95 photos and histories, and added Nokia 6800, 7280 and 6233. Improved catalog year navigation."]}},
{"date":"2026-10-30","phones":[],"changes":{"uk":["Посилено напрям «Телефони з характером»: тематичні ретро-добірки, редакційні історії та пояснення принципів проєкту.","Перекомпоновано фільтри й ущільнено каталог на десктопі та мобільному. Порівняння отримало швидкий вибір, скидання й копіювання посилання.","Додано особисте збереження телефонів, повноекранну галерею з підписами та нові записи Nokia й Siemens. Оновлено джерела та переклади."],"ru":["Усилено направление «Телефоны с характером»: тематические ретроподборки, редакционные истории и объяснение принципов проекта.","Перекомпонованы фильтры, каталог стал компактнее на десктопе и мобильном. В сравнении появились быстрый выбор, сброс и копирование ссылки.","Добавлены личное сохранение телефонов, полноэкранная галерея с подписями и новые записи Nokia и Siemens. Обновлены источники и переводы."],"en":["Strengthened the Phones with character direction with themed retro selections, editorial histories and clearer project principles.","Reorganised filters and made the desktop and mobile catalog more compact. Comparison gained quick picks, reset and link copying.","Added personal phone saving, a fullscreen gallery with credits and new Nokia and Siemens entries. Updated sources and translations."]}},
{"date":"2026-10-29","phones":[],"changes":{"uk":["Сформовано основу архіву: добірку кнопкових телефонів Nokia, Siemens, Samsung, Sony Ericsson та Motorola з журнальною подачею.","Додано порівняння телефонів, сторінки брендів, навігаційні крихти й заглушки для недоступних фото.","Підготовлено багатомовні SEO-дані, галереї фотографій і швидкий вибір для порівняння. Каталог поповнили Nokia N8, X7 та 5700 XpressMusic."],"ru":["Сформирована основа архива: подборка кнопочных телефонов Nokia, Siemens, Samsung, Sony Ericsson и Motorola с журнальной подачей.","Добавлены сравнение телефонов, страницы брендов, навигационные цепочки и заглушки для недоступных фотографий.","Подготовлены многоязычные SEO-данные, фотогалереи и быстрый выбор для сравнения. Каталог пополнили Nokia N8, X7 и 5700 XpressMusic."],"en":["Established the archive with an editorial selection of keypad phones from Nokia, Siemens, Samsung, Sony Ericsson and Motorola.","Introduced phone comparison, brand pages, breadcrumbs and image fallbacks.","Prepared multilingual SEO metadata, photo galleries and comparison quick picks. Added Nokia N8, X7 and 5700 XpressMusic."]}},
{"date":"2026-10-09","phones":[],"changes":{"uk":["Додано перші фотографії до сторінок Nokia 3210, Nokia 3310, Motorola RAZR V3, першого iPhone, HTC Dream і Samsung Galaxy Fold.","Біля фото з’явилися авторство та відомості про ліцензію — основа подальшої роботи з джерелами зображень."],"ru":["Добавлены первые фотографии на страницы Nokia 3210, Nokia 3310, Motorola RAZR V3, первого iPhone, HTC Dream и Samsung Galaxy Fold.","Рядом с фотографиями появились авторство и сведения о лицензии — основа дальнейшей работы с источниками изображений."],"en":["Added the first photographs to the pages for Nokia 3210, Nokia 3310, Motorola RAZR V3, the original iPhone, HTC Dream and Samsung Galaxy Fold.","Introduced photo credits and licence information, establishing the approach to image sourcing."]}},
{"date":"2026-10-08","phones":[],"changes":{"uk":["Початок «Мобільної Історії»: перші шість моделей — Nokia 3210, Nokia 3310, Motorola RAZR V3, iPhone, HTC Dream і Samsung Galaxy Fold.","Створено головну сторінку, каталог із фільтрами та сторінки телефонів. Інтерфейс підготовлено українською, російською й англійською.","З’явилися власний знак проєкту, світла й темна теми, сторінка «Про проєкт» і базові дані для поширення посилань."],"ru":["Начало «Мобильной Истории»: первые шесть моделей — Nokia 3210, Nokia 3310, Motorola RAZR V3, iPhone, HTC Dream и Samsung Galaxy Fold.","Созданы главная страница, каталог с фильтрами и страницы телефонов. Интерфейс подготовлен на украинском, русском и английском языках.","Появились собственный знак проекта, светлая и тёмная темы, страница «О проекте» и базовые данные для публикации ссылок."],"en":["Mobile History began with six models: Nokia 3210, Nokia 3310, Motorola RAZR V3, iPhone, HTC Dream and Samsung Galaxy Fold.","Created the homepage, a filterable catalog and phone pages, with interface support for Ukrainian, Russian and English.","Introduced the project’s original logo, light and dark themes, an About page and basic link-sharing metadata."]}}
] as const;

export const HOME_RECENT_COPY = {
 uk: { title:'Нещодавно в архіві', intro:'Нові поповнення — знайомі форми й нові приводи згадати.', link:'Усі оновлення', added:'Додано' },
 ru: { title:'Недавно в архиве', intro:'Новые пополнения — знакомые формы и новые поводы вспомнить.', link:'Все обновления', added:'Добавлено' },
 en: { title:'Recently in the archive', intro:'New additions, familiar shapes and more memories to revisit.', link:'All updates', added:'Added' },
} as const;
