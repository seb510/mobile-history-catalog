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
        src: 'https://archive.org/download/splitting-two-classic-nokia-startups-by-david-mounder/Splitting%20Two%20Classic%20Nokia%20Startups%20by%20David%20Mounder/Splitting%20Nokia%20Startup%202006%20by%20David%20Mounder/Nokia%202006%20-%20Startup%20Original.mp3',
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
        src: 'https://archive.org/download/ui_start_up_mono/ui_start_up_mono.mp3',
      },
    ],
  },
  Samsung: {
    credit: 'Samsung · Internet Archive',
    sourceUrl: 'https://archive.org/details/Samsung_Samsung-Galaxy-S-Startup-Sound',
    rightsNote: {
      uk: 'Власник проєкту повідомив про дозвіл Samsung на некомерційне використання в історичному архіві. Це запускний звук Galaxy S; джерело й зазначене авторство наведені поруч, запис не є суспільним надбанням.',
      ru: 'Владелец проекта сообщил о разрешении Samsung на некоммерческое использование в историческом архиве. Это звук запуска Galaxy S; источник и указанное авторство приведены рядом, запись не является общественным достоянием.',
      en: 'The project owner reports Samsung’s permission for non-commercial use in this historical archive. This is the Galaxy S startup sound; the source and credited author are linked here, and it is not public domain.',
    },
    tracks: [
      {
        title: {
          uk: 'Samsung Galaxy S · запуск (2010)',
          ru: 'Samsung Galaxy S · запуск (2010)',
          en: 'Samsung Galaxy S · startup (2010)',
        },
        src: 'https://archive.org/download/Samsung_Samsung-Galaxy-S-Startup-Sound/Samsung-Galaxy-S-Startup-sound/MP3/Samsung%20Galaxy%20S%20Startup%20sound.mp3',
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
        src: 'https://archive.org/download/lg-prada-3.0-startup-shutdown-sounds/PowerOn.mp3',
      },
    ],
  },
};
