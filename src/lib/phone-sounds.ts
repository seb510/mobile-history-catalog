import type { Locale } from './locales';

export interface PhoneStartupTrack {
  title: Record<Locale, string>;
  src: string;
}

export interface PhoneStartupSound {
  credit: string;
  sourceUrl: string;
  rightsNote: Record<Locale, string>;
  tracks: PhoneStartupTrack[];
}

export const PHONE_STARTUP_SOUNDS: Partial<Record<string, PhoneStartupSound>> = {
  Nokia: {
    credit: 'David Mounder · Internet Archive',
    sourceUrl: 'https://archive.org/details/splitting-two-classic-nokia-startups-by-david-mounder',
    rightsNote: {
      uk: 'Фанатська добірка David Mounder. Власник проєкту повідомив про дозвіл Nokia на це некомерційне використання; запис датований 2006 роком і не заявлений як універсальний для всіх моделей Nokia чи як суспільне надбання.',
      ru: 'Фанатская подборка David Mounder. Владелец проекта сообщил о разрешении Nokia на это некоммерческое использование; запись датирована 2006 годом и не заявлена как универсальная для всех моделей Nokia или как общественное достояние.',
      en: 'A fan compilation by David Mounder. The project owner reports Nokia’s permission for this non-commercial use; this 2006 recording is not claimed to be universal across Nokia models or in the public domain.',
    },
    tracks: [
      {
        title: {
          uk: 'Nokia · оригінальний запис запуску (2006)',
          ru: 'Nokia · оригинальная запись запуска (2006)',
          en: 'Nokia · original startup recording (2006)',
        },
        src: '/audio/startup/nokia.mp3',
      },
    ],
  },
  Motorola: {
    credit: 'Motorola Sprint RAZR V3m startup sound · Internet Archive',
    sourceUrl: 'https://archive.org/details/ui_start_up_mono',
    rightsNote: {
      uk: 'Власник проєкту повідомив про дозвіл Motorola на некомерційне використання в історичному архіві. Це запускний звук саме RAZR V3m; джерело вказане поруч, запис не є суспільним надбанням.',
      ru: 'Владелец проекта сообщил о разрешении Motorola на некоммерческое использование в историческом архиве. Это звук запуска именно RAZR V3m; источник указан рядом, запись не является общественным достоянием.',
      en: 'The project owner reports Motorola’s permission for non-commercial use in this historical archive. This is specifically the RAZR V3m startup sound; its source is linked here, and it is not public domain.',
    },
    tracks: [
      {
        title: {
          uk: 'Motorola RAZR V3m · запуск (2006)',
          ru: 'Motorola RAZR V3m · запуск (2006)',
          en: 'Motorola RAZR V3m · startup (2006)',
        },
        src: '/audio/startup/motorola.mp3',
      },
    ],
  },
  Samsung: {
    credit: 'Samsung SGH · Internet Archive',
    sourceUrl: 'https://archive.org/details/samsung-sgh-2003-phone-startup',
    rightsNote: {
      uk: 'Власник проєкту повідомив про дозвіл Samsung на некомерційне використання в історичному архіві. Джерело називає цей архівний сигнал «Samsung SGH 2003»; точна модель не уточнена; джерело й зазначене авторство наведені поруч, запис не є суспільним надбанням.',
      ru: 'Владелец проекта сообщил о разрешении Samsung на некоммерческое использование в историческом архиве. Источник называет этот архивный сигнал «Samsung SGH 2003»; точная модель не уточнена; источник и указанное авторство приведены рядом, запись не является общественным достоянием.',
      en: 'The project owner reports Samsung’s permission for non-commercial use in this historical archive. The source identifies this archival sound as “Samsung SGH 2003”; the exact model is unspecified; the source and credited author are linked here, and it is not public domain.',
    },
    tracks: [
      {
        title: {
          uk: 'Samsung SGH · архівний сигнал запуску',
          ru: 'Samsung SGH · архивный сигнал запуска',
          en: 'Samsung SGH · archival startup sound',
        },
        src: '/audio/startup/samsung.mp3',
      },
    ],
  },
  LG: {
    credit: 'LG Electronics · Internet Archive',
    sourceUrl: 'https://archive.org/details/lg-prada-3.0-startup-shutdown-sounds',
    rightsNote: {
      uk: 'Власник проєкту повідомив про дозвіл LG на некомерційне використання в історичному архіві. Це запускний звук Prada 3.0; джерело й зазначене авторство наведені поруч, запис не є суспільним надбанням.',
      ru: 'Владелец проекта сообщил о разрешении LG на некоммерческое использование в историческом архиве. Это звук запуска Prada 3.0; источник и указанное авторство приведены рядом, запись не является общественным достоянием.',
      en: 'The project owner reports LG’s permission for non-commercial use in this historical archive. This is the Prada 3.0 startup sound; the source and credited author are linked here, and it is not public domain.',
    },
    tracks: [
      {
        title: {
          uk: 'LG Prada 3.0 · запуск (2011)',
          ru: 'LG Prada 3.0 · запуск (2011)',
          en: 'LG Prada 3.0 · startup (2011)',
        },
        src: '/audio/startup/lg.mp3',
      },
    ],
  },
"Siemens": {"credit":"Siemens · PhoneTones","sourceUrl":"https://3.onj.me/phonetones/unzipped/Siemens/SXG75/snd/sys/hdn/","rightsNote":{"uk":"Власник проєкту повідомив про дозвіл бренду на звук увімкнення для некомерційного архіву з посиланням на офіційний сайт або правонаступника. Це приклад конкретного пристрою чи епохи, не універсальний звук усіх моделей; запис не є суспільним надбанням.","ru":"Владелец проекта сообщил о разрешении бренда на звук включения для некоммерческого архива со ссылкой на официальный сайт или правопреемника. Это пример конкретного устройства или эпохи, не универсальный звук всех моделей; запись не является общественным достоянием.","en":"The project owner reports brand permission to use the power-on sound in this non-commercial archive with a link to the official website or successor. This is a specific device or era example, not a universal sound for every model; the recording is not public domain."},"tracks":[{"title":{"uk":"Siemens SXG75 · увімкнення","ru":"Siemens SXG75 · включение","en":"Siemens SXG75 · power on"},"src":"/audio/startup/siemens.mp3"}]},
"Sony Ericsson": {"credit":"Sony Ericsson · PhoneTones","sourceUrl":"https://3.onj.me/phonetones/unzipped/Sony%20Ericsson/W800i/system/settings/","rightsNote":{"uk":"Власник проєкту повідомив про дозвіл бренду на звук увімкнення для некомерційного архіву з посиланням на офіційний сайт або правонаступника. Це приклад конкретного пристрою чи епохи, не універсальний звук усіх моделей; запис не є суспільним надбанням.","ru":"Владелец проекта сообщил о разрешении бренда на звук включения для некоммерческого архива со ссылкой на официальный сайт или правопреемника. Это пример конкретного устройства или эпохи, не универсальный звук всех моделей; запись не является общественным достоянием.","en":"The project owner reports brand permission to use the power-on sound in this non-commercial archive with a link to the official website or successor. This is a specific device or era example, not a universal sound for every model; the recording is not public domain."},"tracks":[{"title":{"uk":"Sony Ericsson W800i · увімкнення","ru":"Sony Ericsson W800i · включение","en":"Sony Ericsson W800i · power on"},"src":"/audio/startup/sony-ericsson.mp3"}]},
"HTC": {"credit":"HTC · PhoneTones","sourceUrl":"https://3.onj.me/phonetones/unzipped/HTC/Desire-820s/","rightsNote":{"uk":"Власник проєкту повідомив про дозвіл бренду на звук увімкнення для некомерційного архіву з посиланням на офіційний сайт або правонаступника. Це приклад конкретного пристрою чи епохи, не універсальний звук усіх моделей; запис не є суспільним надбанням.","ru":"Владелец проекта сообщил о разрешении бренда на звук включения для некоммерческого архива со ссылкой на официальный сайт или правопреемника. Это пример конкретного устройства или эпохи, не универсальный звук всех моделей; запись не является общественным достоянием.","en":"The project owner reports brand permission to use the power-on sound in this non-commercial archive with a link to the official website or successor. This is a specific device or era example, not a universal sound for every model; the recording is not public domain."},"tracks":[{"title":{"uk":"HTC Desire 820s · увімкнення","ru":"HTC Desire 820s · включение","en":"HTC Desire 820s · power on"},"src":"/audio/startup/htc.mp3"}]},
"Huawei": {"credit":"Huawei · PhoneTones","sourceUrl":"https://3.onj.me/phonetones/unzipped/Huawei/Ascend-P6/animationsounds/","rightsNote":{"uk":"Власник проєкту повідомив про дозвіл бренду на звук увімкнення для некомерційного архіву з посиланням на офіційний сайт або правонаступника. Це приклад конкретного пристрою чи епохи, не універсальний звук усіх моделей; запис не є суспільним надбанням.","ru":"Владелец проекта сообщил о разрешении бренда на звук включения для некоммерческого архива со ссылкой на официальный сайт или правопреемника. Это пример конкретного устройства или эпохи, не универсальный звук всех моделей; запись не является общественным достоянием.","en":"The project owner reports brand permission to use the power-on sound in this non-commercial archive with a link to the official website or successor. This is a specific device or era example, not a universal sound for every model; the recording is not public domain."},"tracks":[{"title":{"uk":"Huawei Ascend P6 · увімкнення","ru":"Huawei Ascend P6 · включение","en":"Huawei Ascend P6 · power on"},"src":"/audio/startup/huawei.mp3"}]},
"Alcatel": {"credit":"Alcatel · PhoneTones","sourceUrl":"https://3.onj.me/phonetones/unzipped/Alcatel/OT-995/switch_on_off/","rightsNote":{"uk":"Власник проєкту повідомив про дозвіл бренду на звук увімкнення для некомерційного архіву з посиланням на офіційний сайт або правонаступника. Це приклад конкретного пристрою чи епохи, не універсальний звук усіх моделей; запис не є суспільним надбанням.","ru":"Владелец проекта сообщил о разрешении бренда на звук включения для некоммерческого архива со ссылкой на официальный сайт или правопреемника. Это пример конкретного устройства или эпохи, не универсальный звук всех моделей; запись не является общественным достоянием.","en":"The project owner reports brand permission to use the power-on sound in this non-commercial archive with a link to the official website or successor. This is a specific device or era example, not a universal sound for every model; the recording is not public domain."},"tracks":[{"title":{"uk":"Alcatel One Touch 995 · увімкнення","ru":"Alcatel One Touch 995 · включение","en":"Alcatel One Touch 995 · power on"},"src":"/audio/startup/alcatel.mp3"}]},
"Google": {"credit":"Google Design · Conor O’Sullivan","sourceUrl":"https://design.google/library/ux-sound-haptic-material-design","rightsNote":{"uk":"Власник проєкту повідомив про дозвіл бренду на звук увімкнення для некомерційного архіву з посиланням на офіційний сайт або правонаступника. Це приклад конкретного пристрою чи епохи, не універсальний звук усіх моделей; запис не є суспільним надбанням. Super G уперше з’явився на Pixel 2016 року; взято лише його фрагмент, без Gemini.","ru":"Владелец проекта сообщил о разрешении бренда на звук включения для некоммерческого архива со ссылкой на официальный сайт или правопреемника. Это пример конкретного устройства или эпохи, не универсальный звук всех моделей; запись не является общественным достоянием. Super G впервые появился на Pixel 2016 года; использован только его фрагмент, без Gemini.","en":"The project owner reports brand permission to use the power-on sound in this non-commercial archive with a link to the official website or successor. This is a specific device or era example, not a universal sound for every model; the recording is not public domain. Super G first appeared on the 2016 Pixel; only that segment is used, excluding Gemini."},"tracks":[{"title":{"uk":"Google Super G · запуск і перше налаштування","ru":"Google Super G · запуск и первая настройка","en":"Google Super G · startup and first setup"},"src":"/audio/startup/google.mp3"}]},
"Apple": {"credit":"Apple · запис Martin Nobel · Internet Archive","sourceUrl":"https://archive.org/details/twitter-1571038548081639424","rightsNote":{"uk":"Власник проєкту повідомив про дозвіл бренду на звук увімкнення для некомерційного архіву з посиланням на офіційний сайт або правонаступника. Це приклад конкретного пристрою чи епохи, не універсальний звук усіх моделей; запис не є суспільним надбанням. На iPhone 14 це опційна функція доступності; звук не приписується раннім iPhone.","ru":"Владелец проекта сообщил о разрешении бренда на звук включения для некоммерческого архива со ссылкой на официальный сайт или правопреемника. Это пример конкретного устройства или эпохи, не универсальный звук всех моделей; запись не является общественным достоянием. На iPhone 14 это необязательная функция доступности; звук не приписывается ранним iPhone.","en":"The project owner reports brand permission to use the power-on sound in this non-commercial archive with a link to the official website or successor. This is a specific device or era example, not a universal sound for every model; the recording is not public domain. On iPhone 14 this is an optional accessibility feature, not a sound attributed to early iPhones."},"tracks":[{"title":{"uk":"Apple iPhone 14 (2022) · увімкнення","ru":"Apple iPhone 14 (2022) · включение","en":"Apple iPhone 14 (2022) · power on"},"src":"/audio/startup/apple.mp3"}]},
};
