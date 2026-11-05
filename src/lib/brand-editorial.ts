import type { Locale } from './locales';

// Editorial descriptions of the archive's selection, not claims about every phone a brand made.
export const BRAND_NOTES: Record<Locale, Record<string, string>> = {
  uk: {
    Apple: 'Від першого iPhone до звичних жестів сенсорної епохи.',
    Google: 'Камерна планка, колір і впізнаваний силует Pixel.',
    HTC: 'Висувна клавіатура на початку історії Android.',
    Huawei: 'Складаний екран як наступний експеримент із формою.',
    Motorola: 'Метал RAZR, округлий PEBL і музичний ROKR.',
    Nokia: 'Від знайомих клавіш до сміливих механізмів Nseries.',
    Samsung: 'Компактні розкладачки, тонкі слайдери й нові форми екрана.',
    Siemens: 'Від простих моноблоків до поворотної QWERTY.',
    'Sony Ericsson': 'Камерний хват, помаранчевий Walkman і музика в кишені.',
  },
  ru: {
    Apple: 'От первого iPhone до привычных жестов сенсорной эпохи.',
    Google: 'Планка камер, цвет и узнаваемый силуэт Pixel.',
    HTC: 'Выдвижная клавиатура в начале истории Android.',
    Huawei: 'Складной экран как следующий эксперимент с формой.',
    Motorola: 'Металл RAZR, округлый PEBL и музыкальный ROKR.',
    Nokia: 'От знакомых клавиш до смелых механизмов Nseries.',
    Samsung: 'Компактные раскладушки, тонкие слайдеры и новые формы экрана.',
    Siemens: 'От простых моноблоков до поворотной QWERTY.',
    'Sony Ericsson': 'Камерный хват, оранжевый Walkman и музыка в кармане.',
  },
  en: {
    Apple: 'From the first iPhone to the familiar gestures of the touch era.',
    Google: 'Camera bars, colour and the recognisable Pixel silhouette.',
    HTC: 'A sliding keyboard at the beginning of Android.',
    Huawei: 'A folding display as the next experiment in form.',
    Motorola: 'RAZR metal, the rounded PEBL and the musical ROKR.',
    Nokia: 'From familiar keypads to bold Nseries mechanisms.',
    Samsung: 'Compact clamshells, slim sliders and new display forms.',
    Siemens: 'From simple candybars to a rotating QWERTY keyboard.',
    'Sony Ericsson': 'Camera grips, orange Walkman keys and music in your pocket.',
  },
};

export const SIEMENS_SELECTION = ['siemens-a65', 'siemens-sl55', 'siemens-sxg75'] as const;
export const SIEMENS_TIMELINE = ['siemens-s55', 'siemens-sl55', 'siemens-sk65', 'siemens-sxg75'] as const;

export const BRAND_EDITION = {
  uk: {
    archiveYears: 'Роки в архіві', open: 'Дослідити бренд',
    title: 'Різні імена. Власний почерк.',
    intro: 'Впізнавали за корпусом, клавішами й одним рухом руки. Обери бренд і простеж його характер через телефони нашої добірки.',
    siemens: {
      kicker: 'Досьє бренду · Siemens', title: 'Інженерія повсякденних жестів',
      intro: 'Джойстик під пальцем, зсув екрана, поворот клавіатури. У цій добірці Siemens цікавий тим, як знайомий телефон набував нових можливостей — і нової форми.',
      cover: 'Клавіатура, що змінює силует', coverText: 'SK65 · 2004 · поворотна QWERTY x2type',
      all: 'Усі моделі Siemens', start: 'З чого почати', startIntro: 'Три різні знайомства з брендом — від простих дзвінків до мультимедіа.',
      roles: ['Знайома класика', 'Гра з механікою', 'Мультимедійний фінал'],
      timeline: 'Як змінювався досвід', timelineIntro: 'Чотири епізоди з нашого архіву, а не повна історія виробника.',
      events: ['Камера як окремий аксесуар', 'Клавіатура ховається під екраном', 'Листування змінює форму корпуса', 'UMTS, GPS і великий QVGA-екран'],
      compare: 'Від дзвінків до навігації', compareText: 'A65 і SXG75: один бренд, сусідні роки й зовсім різний набір щоденних можливостей.', compareAction: 'Порівняти A65 та SXG75',
      collection: 'Добірка архіву', collectionText: 'Усі представлені Siemens — за роком анонсу. Це курована добірка, а не повний перелік моделей компанії.',
    },
  },
  ru: {
    archiveYears: 'Годы в архиве', open: 'Исследовать бренд',
    title: 'Разные имена. Собственный почерк.',
    intro: 'Узнавали по корпусу, клавишам и одному движению руки. Выбери бренд и проследи его характер через телефоны нашей подборки.',
    siemens: {
      kicker: 'Досье бренда · Siemens', title: 'Инженерия повседневных жестов',
      intro: 'Джойстик под пальцем, сдвиг экрана, поворот клавиатуры. В этой подборке Siemens интересен тем, как знакомый телефон приобретал новые возможности — и новую форму.',
      cover: 'Клавиатура, меняющая силуэт', coverText: 'SK65 · 2004 · поворотная QWERTY x2type',
      all: 'Все модели Siemens', start: 'С чего начать', startIntro: 'Три знакомства с брендом — от простых звонков до мультимедиа.',
      roles: ['Знакомая классика', 'Игра с механикой', 'Мультимедийный финал'],
      timeline: 'Как менялся опыт', timelineIntro: 'Четыре эпизода из нашего архива, а не полная история производителя.',
      events: ['Камера как отдельный аксессуар', 'Клавиатура скрыта под экраном', 'Переписка меняет форму корпуса', 'UMTS, GPS и большой QVGA-экран'],
      compare: 'От звонков до навигации', compareText: 'A65 и SXG75: один бренд, соседние годы и совсем разные повседневные возможности.', compareAction: 'Сравнить A65 и SXG75',
      collection: 'Подборка архива', collectionText: 'Все представленные Siemens — по году анонса. Это курируемая подборка, а не полный перечень моделей компании.',
    },
  },
  en: {
    archiveYears: 'Years in the archive', open: 'Explore the brand',
    title: 'Different names. Distinct signatures.',
    intro: 'Recognised by a silhouette, a keypad or a single gesture. Choose a brand and trace its character through the phones in our selection.',
    siemens: {
      kicker: 'Brand dossier · Siemens', title: 'Engineering everyday gestures',
      intro: 'A joystick under your thumb, a sliding screen, a rotating keyboard. This Siemens selection follows familiar phones gaining new possibilities — and new shapes.',
      cover: 'A keyboard that changes the silhouette', coverText: 'SK65 · 2004 · rotating x2type QWERTY',
      all: 'All Siemens models', start: 'Where to begin', startIntro: 'Three ways into the brand, from simple calls to multimedia.',
      roles: ['A familiar classic', 'Mechanical play', 'A multimedia finale'],
      timeline: 'How the experience changed', timelineIntro: 'Four episodes from our archive, rather than a complete company history.',
      events: ['A camera sold as an accessory', 'A keypad hidden beneath the screen', 'Messaging changes the shape', 'UMTS, GPS and a large QVGA screen'],
      compare: 'From calls to navigation', compareText: 'A65 and SXG75: one brand, neighbouring years and very different everyday possibilities.', compareAction: 'Compare A65 and SXG75',
      collection: 'The archive selection', collectionText: 'Every Siemens in the archive, ordered by announcement year. A curated selection, rather than a complete company catalogue.',
    },
  },
} as const;
