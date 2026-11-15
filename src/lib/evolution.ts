import type { CollectionEntry } from 'astro:content';
import type { Locale } from './locales';

export const EVOLUTION_HOME = '/#evolution';

// Preferred models for the years beyond the individually written scenes below.
export const evolutionHighlights = [
  'siemens-s10', 'nokia-5110', 'nokia-3310', 'siemens-sl45i', 'siemens-s55', 'lg-kg800',
  'htc-dream', 'samsung-galaxy-s', 'samsung-galaxy-s3',
  'sony-xperia-z', 'nokia-lumia-630', 'microsoft-lumia-950', 'google-pixel',
  'huawei-p-smart-plus', 'nokia-9-pureview', 'apple-iphone-12', 'samsung-galaxy-z-fold3', 'apple-iphone-se-2022',
  'huawei-mate-xt', 'apple-iphone-17', 'samsung-galaxy-z-fold8-ultra',
];

export interface EvolutionFrame {
  slug: string;
  phone: CollectionEntry<'phones'>['data'];
  label?: string;
  description?: string;
}

export const evolutionCopy = {
  uk: {
    title: 'Еволюція телефонів', intro: 'Гортай від року до року й дивись, як змінювалися телефони та наші звички.',
    previous: 'Попередня модель', next: 'Наступна модель', timeline: 'Роки випуску', details: 'Сторінка телефона',
    brandTitle: 'Еволюція бренду', brandIntro: 'Гортай моделі з архіву від найстарішої до найновішої.', modelPicker: 'Перейти до моделі',
    about: 'Від SMS до складаних смартфонів: на головній можна переглянути по одній моделі з кожного року, представленого в архіві. На сторінці кожного бренду є своя повноекранна хронологія.',
  },
  ru: {
    title: 'Эволюция телефонов', intro: 'Листай год за годом, чтобы увидеть, как менялись телефоны и наши привычки.',
    previous: 'Предыдущая модель', next: 'Следующая модель', timeline: 'Годы выпуска', details: 'Страница телефона',
    brandTitle: 'Эволюция бренда', brandIntro: 'Листай модели из архива от самых ранних до самых новых.', modelPicker: 'Перейти к модели',
    about: 'От SMS до складных смартфонов: на главной можно посмотреть по одной модели за каждый год, представленный в архиве. На странице каждого бренда есть своя полноэкранная хронология.',
  },
  en: {
    title: 'The evolution of phones', intro: 'Scroll year by year to see how phones and the ways we used them changed.',
    previous: 'Previous model', next: 'Next model', timeline: 'Release years', details: 'Phone details',
    brandTitle: 'Brand evolution', brandIntro: 'Scroll through the archive models from earliest to latest.', modelPicker: 'Jump to a model',
    about: 'From SMS to foldable smartphones, explore one model for each year represented in the archive. Each brand page has its own full-screen timeline.',
  },
} satisfies Record<Locale, Record<string, string>>;

// Each stop describes the experience of this model in its release year.
export const evolutionStops: { slug: string; copy: Record<Locale, [string, string]> }[] = [
  {
    slug: 'nokia-3210', copy: {
      uk: ['SMS на ходу', 'З T9 слово набиралося одним натисканням на літеру. У SMS можна було додавати готові картинки.'],
      ru: ['SMS на ходу', 'С T9 слово набиралось одним нажатием на букву. В SMS можно было добавлять готовые картинки.'],
      en: ['Texting on the go', 'With T9, typing took one keypress per letter. You could also send preset pictures in text messages.'],
    },
  },
  {
    slug: 'sony-ericsson-t610', copy: {
      uk: ['Обмін через Bluetooth', 'Контакти, мелодії й події календаря можна було передавати між сумісними пристроями без кабелю.'],
      ru: ['Обмен через Bluetooth', 'Контакты, мелодии и события календаря можно было передавать между совместимыми устройствами без кабеля.'],
      en: ['Sharing over Bluetooth', 'Contacts, ringtones and calendar events could move between compatible devices without a cable.'],
    },
  },
  {
    slug: 'motorola-razr-v3', copy: {
      uk: ['Тонка розкладачка', 'Зовнішній екран показував, хто телефонує. Усередині відкривалася пласка металева клавіатура.'],
      ru: ['Тонкая раскладушка', 'Внешний экран показывал, кто звонит. Внутри открывалась плоская металлическая клавиатура.'],
      en: ['A slimmer flip phone', 'The outer screen showed who was calling. Flipping it open revealed a flat metal keypad.'],
    },
  },
  {
    slug: 'sony-ericsson-w800i', copy: {
      uk: ['Walkman у кишені', 'Треки MP3 та AAC переносили з комп’ютера на карту пам’яті. Окрема клавіша відкривала плеєр.'],
      ru: ['Walkman в кармане', 'Треки MP3 и AAC переносили с компьютера на карту памяти. Отдельная клавиша открывала плеер.'],
      en: ['A pocket Walkman', 'You copied MP3 and AAC tracks from a computer to the memory card. A dedicated key opened the player.'],
    },
  },
  {
    slug: 'nokia-n95', copy: {
      uk: ['Symbian, карти й камера', 'Symbian 9.2 підтримувала встановлення застосунків. З GPS і камерою на 5 Мп телефон став у пригоді в подорожах.'],
      ru: ['Symbian, карты и камера', 'Symbian 9.2 поддерживала установку приложений. GPS и камера на 5 Мп пригодились в поездках.'],
      en: ['Symbian, maps and a camera', 'Symbian 9.2 let you install apps. GPS and a five-megapixel camera made the phone useful on trips.'],
    },
  },
  {
    slug: 'nokia-n86', copy: {
      uk: ['Телефон із характером фотоапарата', 'Двосторонній слайдер відкривав цифрову або мультимедійну клавіатуру. Окрема шторка захищала об’єктив 8-мегапіксельної камери.'],
      ru: ['Телефон с характером фотоаппарата', 'Двусторонний слайдер открывал цифровую или мультимедийную клавиатуру. Отдельная шторка закрывала объектив 8-мегапиксельной камеры.'],
      en: ['A phone built like a camera', 'The two-way slider revealed either a number pad or media keys. A separate cover protected the eight-megapixel camera lens.'],
    },
  },
  {
    slug: 'nokia-700', copy: {
      uk: ['Symbian Belle і NFC', 'У компактному корпусі поєдналися AMOLED-екран і NFC. Дотиком можна було передати фото або під’єднати сумісну колонку.'],
      ru: ['Symbian Belle и NFC', 'В компактном корпусе сочетались AMOLED-экран и NFC. Касанием можно было передать фото или подключить совместимую колонку.'],
      en: ['Symbian Belle and NFC', 'A compact body housed an AMOLED screen and NFC. You could tap to share a photo or connect a compatible speaker.'],
    },
  },
  {
    slug: 'apple-iphone-x', copy: {
      uk: ['Жести й Face ID', 'Жест від нижнього краю відкривав головний екран, а Face ID розблоковував телефон поглядом.'],
      ru: ['Жесты и Face ID', 'Жест от нижнего края открывал главный экран, а Face ID разблокировал телефон взглядом.'],
      en: ['Gestures and Face ID', 'A swipe from the bottom brought you home. Face ID unlocked the phone with a glance.'],
    },
  },
  {
    slug: 'google-pixel-8', copy: {
      uk: ['Сім років оновлень', 'Google пообіцяла сім років оновлень Android і безпеки, подовживши термін підтримки телефона.'],
      ru: ['Семь лет обновлений', 'Google пообещала семь лет обновлений Android и безопасности, продлив срок поддержки телефона.'],
      en: ['Seven years of updates', 'Google promised seven years of Android and security updates, extending how long the phone would stay supported.'],
    },
  },
];
