import type { Locale } from './locales';

export const BRAND_OFFICIAL_SITES: Record<string, {
  url: string;
  name: Record<Locale, string>;
  kind: 'brand' | 'licensee' | 'successor';
  note: Record<Locale, string>;
}> = {
  Alcatel: {
    url: 'https://www.tcl.com/global/en/mobile',
    name: { uk: 'TCL · мобільні телефони', ru: 'TCL · мобильные телефоны', en: 'TCL · mobile phones' },
    kind: 'successor',
    note: {
      uk: 'TCL перебрала мобільний бізнес Alcatel; посилання на її офіційний ресурс не підтверджує прав на архівні записи.',
      ru: 'TCL приняла мобильный бизнес Alcatel; ссылка на её официальный ресурс не подтверждает права на архивные записи.',
      en: 'TCL took over Alcatel’s mobile business; this official-site link does not establish rights to archived recordings.',
    },
  },
  Apple: {
    url: 'https://www.apple.com/iphone/',
    name: { uk: 'Apple · iPhone', ru: 'Apple · iPhone', en: 'Apple · iPhone' },
    kind: 'brand',
    note: { uk: 'Офіційна сторінка Apple.', ru: 'Официальная страница Apple.', en: 'Apple’s official page.' },
  },
  Google: {
    url: 'https://store.google.com/category/phones',
    name: { uk: 'Google · телефони', ru: 'Google · телефоны', en: 'Google · phones' },
    kind: 'brand',
    note: { uk: 'Офіційна сторінка телефонів Google.', ru: 'Официальная страница телефонов Google.', en: 'Google’s official phone page.' },
  },
  HTC: {
    url: 'https://www.htc.com/',
    name: { uk: 'HTC', ru: 'HTC', en: 'HTC' },
    kind: 'brand',
    note: { uk: 'Офіційний сайт HTC.', ru: 'Официальный сайт HTC.', en: 'HTC’s official website.' },
  },
  Huawei: {
    url: 'https://consumer.huawei.com/en/phones/',
    name: { uk: 'HUAWEI · телефони', ru: 'HUAWEI · телефоны', en: 'HUAWEI · phones' },
    kind: 'brand',
    note: { uk: 'Офіційна сторінка телефонів HUAWEI.', ru: 'Официальная страница телефонов HUAWEI.', en: 'HUAWEI’s official phone page.' },
  },
  LG: {
    url: 'https://www.lg.com/global/',
    name: { uk: 'LG Electronics · мобільні телефони', ru: 'LG Electronics · мобильные телефоны', en: 'LG Electronics · mobile phones' },
    kind: 'brand',
    note: {
      uk: 'Офіційний ресурс LG Electronics; мобільний бізнес смартфонів завершено 2021 року.',
      ru: 'Официальный ресурс LG Electronics; бизнес смартфонов завершён в 2021 году.',
      en: 'LG Electronics’ official site; its smartphone business ended in 2021.',
    },
  },
  Motorola: {
    url: 'https://www.motorola.com/',
    name: { uk: 'Motorola', ru: 'Motorola', en: 'Motorola' },
    kind: 'brand',
    note: { uk: 'Офіційний сайт Motorola.', ru: 'Официальный сайт Motorola.', en: 'Motorola’s official website.' },
  },
  Nokia: {
    url: 'https://www.nokia.com/',
    name: { uk: 'Nokia', ru: 'Nokia', en: 'Nokia' },
    kind: 'brand',
    note: {
      uk: 'Офіційний корпоративний сайт Nokia. Сучасні телефони під брендом Nokia випускає HMD за ліцензією.',
      ru: 'Официальный корпоративный сайт Nokia. Современные телефоны под брендом Nokia выпускает HMD по лицензии.',
      en: 'Nokia’s official corporate website. Current Nokia-branded phones are made by HMD under licence.',
    },
  },
  Samsung: {
    url: 'https://www.samsung.com/us/smartphones/',
    name: { uk: 'Samsung · смартфони', ru: 'Samsung · смартфоны', en: 'Samsung · smartphones' },
    kind: 'brand',
    note: { uk: 'Офіційна сторінка Samsung.', ru: 'Официальная страница Samsung.', en: 'Samsung’s official page.' },
  },
  Sony: {
    url: 'https://www.sony.co.uk/smartphones',
    name: { uk: 'Sony · Xperia', ru: 'Sony · Xperia', en: 'Sony · Xperia' },
    kind: 'brand',
    note: { uk: 'Офіційна сторінка смартфонів Sony Xperia.', ru: 'Официальная страница смартфонов Sony Xperia.', en: 'Sony’s official Xperia smartphone page.' },
  },
  Siemens: {
    url: 'https://www.benq.com/en-us/index.html',
    name: { uk: 'BenQ · правонаступник мобільного підрозділу', ru: 'BenQ · правопреемник мобильного подразделения', en: 'BenQ · successor to the mobile division' },
    kind: 'successor',
    note: {
      uk: 'BenQ придбала мобільний підрозділ Siemens у 2005 році; це посилання не підтверджує права на старі записи.',
      ru: 'BenQ приобрела мобильное подразделение Siemens в 2005 году; эта ссылка не подтверждает права на старые записи.',
      en: 'BenQ acquired Siemens’ mobile division in 2005; this link does not establish rights to old recordings.',
    },
  },
  'Sony Ericsson': {
    url: 'https://www.sony.com/',
    name: { uk: 'Sony · Xperia', ru: 'Sony · Xperia', en: 'Sony · Xperia' },
    kind: 'successor',
    note: {
      uk: 'Sony викупила частку Ericsson у спільному підприємстві 2012 року; сторінка стосується сучасних смартфонів Sony.',
      ru: 'Sony выкупила долю Ericsson в совместном предприятии в 2012 году; страница относится к современным смартфонам Sony.',
      en: 'Sony acquired Ericsson’s stake in the joint venture in 2012; this page is for current Sony smartphones.',
    },
  },
};

// Editorial descriptions of the archive's selection, not claims about every phone a brand made.
export const BRAND_NOTES: Record<Locale, Record<string, string>> = {
  uk: {
    Alcatel: 'Найдоступніший сегмент One Touch — ціна понад усе.',
    Apple: 'Від першого iPhone до звичних жестів сенсорної епохи.',
    Google: 'Камерна планка, колір і впізнаваний силует Pixel.',
    HTC: 'Висувна клавіатура на початку історії Android.',
    Huawei: 'Складаний екран як наступний експеримент із формою.',
    LG: 'Практичні розкладачки масового бюджетного сегмента.',
    Motorola: 'Метал RAZR, округлий PEBL і музичний ROKR.',
    Nokia: 'Від знайомих клавіш до сміливих механізмів Nseries.',
    Samsung: 'Компактні розкладачки, тонкі слайдери й нові форми екрана.',
    Sony: 'Скляний корпус і прямі лінії флагманів Xperia.',
    Siemens: 'Від простих моноблоків до поворотної QWERTY.',
    'Sony Ericsson': 'Камерний хват, помаранчевий Walkman і музика в кишені.',
  },
  ru: {
    Alcatel: 'Самый доступный сегмент One Touch — цена превыше всего.',
    Apple: 'От первого iPhone до привычных жестов сенсорной эпохи.',
    Google: 'Планка камер, цвет и узнаваемый силуэт Pixel.',
    HTC: 'Выдвижная клавиатура в начале истории Android.',
    Huawei: 'Складной экран как следующий эксперимент с формой.',
    LG: 'Практичные раскладушки массового бюджетного сегмента.',
    Motorola: 'Металл RAZR, округлый PEBL и музыкальный ROKR.',
    Nokia: 'От знакомых клавиш до смелых механизмов Nseries.',
    Samsung: 'Компактные раскладушки, тонкие слайдеры и новые формы экрана.',
    Sony: 'Стеклянный корпус и прямые линии флагманов Xperia.',
    Siemens: 'От простых моноблоков до поворотной QWERTY.',
    'Sony Ericsson': 'Камерный хват, оранжевый Walkman и музыка в кармане.',
  },
  en: {
    Alcatel: 'The most affordable tier of One Touch — price above all.',
    Apple: 'From the first iPhone to the familiar gestures of the touch era.',
    Google: 'Camera bars, colour and the recognisable Pixel silhouette.',
    HTC: 'A sliding keyboard at the beginning of Android.',
    Huawei: 'A folding display as the next experiment in form.',
    LG: 'Practical clamshells for the mass budget segment.',
    Motorola: 'RAZR metal, the rounded PEBL and the musical ROKR.',
    Nokia: 'From familiar keypads to bold Nseries mechanisms.',
    Samsung: 'Compact clamshells, slim sliders and new display forms.',
    Sony: 'Glass bodies and straight lines in Xperia flagships.',
    Siemens: 'From simple candybars to a rotating QWERTY keyboard.',
    'Sony Ericsson': 'Camera grips, orange Walkman keys and music in your pocket.',
  },
};

export const SIEMENS_TIMELINE = [
  'siemens-sl45i',
  'siemens-s55',
  'siemens-sl55',
  'siemens-xelibri-2',
  'siemens-xelibri-8',
  'siemens-sk65',
  'siemens-sxg75',
] as const;

export const BRAND_ROUTES: Record<string, readonly string[]> = {
  Apple: ['apple-iphone', 'apple-iphone-12', 'apple-iphone-18-pro'],
  Google: ['google-pixel', 'google-pixel-6', 'google-pixel-9', 'google-pixel-11-pro'],
  HTC: ['htc-dream', 'htc-u24-pro'],
  Huawei: ['huawei-mate-xt', 'huawei-mate-xt-2'],
  Motorola: ['motorola-v66', 'motorola-razr-v3', 'motorola-krzr-k1', 'motorola-pebl-u6', 'motorola-razr-ultra-2026'],
  Nokia: ['nokia-3310', 'nokia-7610', 'nokia-7710', 'nokia-5300-xpressmusic', 'nokia-5310-xpressmusic', 'nokia-6300', 'nokia-6500-slide', 'nokia-7900-prism', 'nokia-8600-luna', 'nokia-n95', 'nokia-9-pureview'],
  Samsung: ['samsung-sgh-e700', 'samsung-sgh-d500', 'samsung-sgh-d900', 'samsung-sgh-u900', 'samsung-galaxy-fold', 'samsung-galaxy-z-fold8-ultra'],
  Siemens: SIEMENS_TIMELINE,
  'Sony Ericsson': ['sony-ericsson-t68i', 'sony-ericsson-w610i', 'sony-ericsson-k550i', 'sony-ericsson-w800i', 'sony-ericsson-k800i', 'sony-ericsson-xperia-x1', 'sony-ericsson-xperia-arc-s'],
  Sony: ['sony-xperia-z'],
};

export const BRAND_PAGE = {
  uk: { about: 'Про виробника', officialSite: 'Офіційний сайт', officialLicensee: 'Офіційний сайт ліцензіата', officialSuccessor: 'Офіційний сайт правонаступника', selection: 'У нашому архіві', range: 'Охоплення добірки', forms: 'Форми корпуса', first: 'Перший рік у добірці', last: 'Останній рік у добірці', all: 'Усі моделі', timeline: 'Характер у різні роки', timelineIntro: 'Кілька епізодів із представлених моделей — не повна історія виробника.', compare: 'Два погляди одного бренду', compareIntro: 'Різні форми та можливості. Подивись, як змінювався досвід користування.', compareAction: 'Порівняти моделі', collection: 'Моделі в архіві', collectionIntro: 'Усі представлені телефони бренду, впорядковані за роком анонсу.' },
  ru: { about: 'О производителе', officialSite: 'Официальный сайт', officialLicensee: 'Официальный сайт лицензиата', officialSuccessor: 'Официальный сайт правопреемника', selection: 'В нашем архиве', range: 'Охват подборки', forms: 'Формы корпуса', first: 'Первый год в подборке', last: 'Последний год в подборке', all: 'Все модели', timeline: 'Характер в разные годы', timelineIntro: 'Несколько эпизодов из представленных моделей, а не полная история производителя.', compare: 'Два взгляда одного бренда', compareIntro: 'Разные формы и возможности. Посмотри, как менялся опыт использования.', compareAction: 'Сравнить модели', collection: 'Модели в архиве', collectionIntro: 'Все представленные телефоны бренда, по году анонса.' },
  en: { about: 'About the manufacturer', officialSite: 'Official website', officialLicensee: 'Official licensee website', officialSuccessor: 'Official successor website', selection: 'In our archive', range: 'Selection coverage', forms: 'Body designs', first: 'Earliest year in the selection', last: 'Latest year in the selection', all: 'All models', timeline: 'Character through the years', timelineIntro: 'A few episodes from the phones in our selection, rather than a complete company history.', compare: 'Two approaches, one brand', compareIntro: 'Different shapes and capabilities. Explore how the experience of using a phone changed.', compareAction: 'Compare the models', collection: 'Models in the archive', collectionIntro: 'Every phone from this brand in the archive, ordered by announcement year.' },
} as const;

export const BRAND_EDITION = {
  uk: {
    archiveYears: 'Роки в архіві', open: 'Дослідити бренд',
    title: 'Різні імена. Власний почерк.',
    intro: 'Впізнавали за корпусом, клавішами й одним рухом руки. Обери бренд і простеж його характер через телефони нашої добірки.',
    siemens: {
      timeline: 'Як змінювався досвід', timelineIntro: 'Сім епізодів із нашого архіву, а не повна історія виробника.',
      events: ['MP3-плеєр і знімна MMC', 'Камера як окремий аксесуар', 'Клавіатура ховається під екраном', 'Телефон як модний аксесуар', 'Підвіска з радіо й голосовим керуванням', 'Листування змінює форму корпуса', 'UMTS, GPS і великий QVGA-екран'],
      compare: 'Від дзвінків до навігації', compareText: 'A65 і SXG75: один бренд, сусідні роки й зовсім різний набір щоденних можливостей.', compareAction: 'Порівняти A65 та SXG75',
      collection: 'Добірка архіву', collectionText: 'Усі представлені Siemens — за роком анонсу. Це курована добірка, а не повний перелік моделей компанії.',
    },
  },
  ru: {
    archiveYears: 'Годы в архиве', open: 'Исследовать бренд',
    title: 'Разные имена. Собственный почерк.',
    intro: 'Узнавали по корпусу, клавишам и одному движению руки. Выбери бренд и проследи его характер через телефоны нашей подборки.',
    siemens: {
      timeline: 'Как менялся опыт', timelineIntro: 'Семь эпизодов из нашего архива, а не полная история производителя.',
      events: ['MP3-плеер и съёмная MMC', 'Камера как отдельный аксессуар', 'Клавиатура скрыта под экраном', 'Телефон как модный аксессуар', 'Подвеска с радио и голосовым управлением', 'Переписка меняет форму корпуса', 'UMTS, GPS и большой QVGA-экран'],
      compare: 'От звонков до навигации', compareText: 'A65 и SXG75: один бренд, соседние годы и совсем разные повседневные возможности.', compareAction: 'Сравнить A65 и SXG75',
      collection: 'Подборка архива', collectionText: 'Все представленные Siemens — по году анонса. Это курируемая подборка, а не полный перечень моделей компании.',
    },
  },
  en: {
    archiveYears: 'Years in the archive', open: 'Explore the brand',
    title: 'Different names. Distinct signatures.',
    intro: 'Recognised by a silhouette, a keypad or a single gesture. Choose a brand and trace its character through the phones in our selection.',
    siemens: {
      timeline: 'How the experience changed', timelineIntro: 'Seven episodes from our archive, rather than a complete company history.',
      events: ['An MP3 player and removable MMC', 'A camera sold as an accessory', 'A keypad hidden beneath the screen', 'A phone as a fashion accessory', 'A pendant with radio and voice control', 'Messaging changes the shape', 'UMTS, GPS and a large QVGA screen'],
      compare: 'From calls to navigation', compareText: 'A65 and SXG75: one brand, neighbouring years and very different everyday possibilities.', compareAction: 'Compare A65 and SXG75',
      collection: 'The archive selection', collectionText: 'Every Siemens in the archive, ordered by announcement year. A curated selection, rather than a complete company catalogue.',
    },
  },
} as const;
