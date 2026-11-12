import type { Locale } from './locales';

type Localized = Record<Locale, string>;
const text = (uk: string, ru: string, en: string): Localized => ({ uk, ru, en });

export const VERSION_COPY = {
  title: text('Версії та покоління', 'Версии и поколения', 'Versions and generations'),
  intro: text('Моделі згруповано за версією, зазначеною в каталозі.', 'Модели сгруппированы по версии, указанной в каталоге.', 'Models are grouped by the version recorded in the archive.'),
  timelineIntro: text('Хронологія охоплює й версії, для яких в архіві ще немає телефонів.', 'Хронология охватывает и версии, для которых в архиве пока нет телефонов.', 'The timeline also covers releases without phones in the archive.'),
  unspecified: text('Точну версію не зазначено', 'Точная версия не указана', 'Exact version unspecified'),
  noModels: text('Моделей цієї версії в архіві ще немає.', 'Моделей этой версии в архиве пока нет.', 'The archive does not yet have models for this version.'),
};

interface Version {
  id: string;
  title: string;
  match: RegExp;
  note?: Localized;
}

const symbian: Version[] = [
  { id:'epoc-er5', title:'EPOC Release 5', match:/\b(?:EPOC.*(?:Release 5|ER5u?)|ER5u?)\b/i },
  { id:'6-0', title:'Symbian 6.0 · Crystal', match:/\b6\.0\b/i },
  { id:'6-1', title:'Symbian 6.1 · Series 60', match:/\b6\.1\b/, note:text('Ранні смартфони з меню піктограм і програмами .sis. Приклад — Nokia N-Gage.', 'Ранние смартфоны с меню значков и программами .sis. Пример — Nokia N-Gage.', 'Early smartphones with icon menus and .sis apps. Nokia N-Gage is an example.') },
  { id:'7-0', title:'Symbian 7.0 / 7.0s', match:/\b7\.0s?\b/i, note:text('Одна система мала різні інтерфейси: S60 на Nokia 6600, UIQ зі стилусом на P800 і Series 90 на Nokia 7710.', 'У одной системы были разные интерфейсы: S60 на Nokia 6600, UIQ со стилусом на P800 и Series 90 на Nokia 7710.', 'One operating system supported several interfaces: S60 on Nokia 6600, stylus-based UIQ on the P800 and Series 90 on Nokia 7710.') },
  { id:'8-0a', title:'Symbian 8.0a · S60 2nd Edition FP2', match:/\b8\.0a?\b/i },
  { id:'8-1a', title:'Symbian 8.1a · S60 2nd Edition FP3', match:/\b8\.1a?\b/i, note:text('Feature Pack 3 підтримував екрани різної роздільної здатності. Це видно на Nokia N70 та N90.', 'Feature Pack 3 поддерживал экраны разного разрешения. Это видно на Nokia N70 и N90.', 'Feature Pack 3 supported different display resolutions, as seen on the Nokia N70 and N90.') },
  { id:'9-1', title:'Symbian 9.1 · S60 3rd Edition', match:/\b9\.1\b/, note:text('Перехід на S60 3rd Edition і нову модель дозволів. Старі нативні програми S60 2nd Edition зазвичай потребували оновлення або портування.', 'Переход на S60 3rd Edition и новую модель разрешений. Старые нативные приложения S60 2nd Edition обычно требовали обновления или портирования.', 'The transition to S60 3rd Edition introduced a new permissions model. Older native S60 2nd Edition apps generally needed updates or ports.') },
  { id:'9-2', title:'Symbian 9.2 · S60 3rd Edition FP1', match:/\b9\.2\b/, note:text('Feature Pack 1 продовжив кнопковий S60 3rd Edition. Ця версія об’єднує Nokia N95, N82, 5700 і бізнесовий E71.', 'Feature Pack 1 продолжил кнопочный S60 3rd Edition. Эту версию использовали Nokia N95, N82, 5700 и деловой E71.', 'Feature Pack 1 continued keypad-based S60 3rd Edition. It ran on the Nokia N95, N82, 5700 and the business-focused E71.') },
  { id:'9-3', title:'Symbian 9.3 · S60 3rd Edition FP2', match:/\b9\.3\b/, note:text('Feature Pack 2 оновив вигляд і поведінку інтерфейсу, зберігши керування фізичними клавішами. Приклади — N79, N86 і N96.', 'Feature Pack 2 обновил внешний вид и поведение интерфейса, сохранив управление физическими клавишами. Примеры — N79, N86 и N96.', 'Feature Pack 2 refined the interface while retaining physical-key navigation. Examples include the N79, N86 and N96.') },
  { id:'9-4', title:'Symbian 9.4 · S60 5th Edition', match:/\b9\.4\b/, note:text('Гілка S60, адаптована до сенсорного екрана. Nokia 5800 XpressMusic показує великі елементи керування й екранний набір тексту.', 'Ветка S60, адаптированная к сенсорному экрану. Nokia 5800 XpressMusic показывает крупные элементы управления и экранный ввод текста.', 'A branch of S60 adapted for touch. The Nokia 5800 XpressMusic shows larger controls and on-screen text entry.') },
  { id:'9-5', title:'Symbian 9.5', match:/\b9\.5\b/i },
  { id:'symbian-2', title:'Symbian^2', match:/^symbian\^2\b/i },
  { id:'symbian-3', title:'Symbian^3', match:/^symbian\^3\b/i, note:text('У Nokia N8 з’явилися кілька головних екранів із віджетами та підтримка мультитачу.', 'У Nokia N8 появились несколько домашних экранов с виджетами и поддержка мультитача.', 'The Nokia N8 brought multiple widget-based home screens and multi-touch support.') },
  { id:'anna', title:'Symbian Anna', match:/^symbian anna\b/i, note:text('Оновила піктограми, браузер і введення тексту. Nokia X7 і 500 представляють це покоління в архіві.', 'Обновила значки, браузер и ввод текста. Nokia X7 и 500 представляют это поколение в архиве.', 'Refreshed icons, the browser and text input. Nokia X7 and 500 represent this generation in the archive.') },
  { id:'belle', title:'Symbian Belle', match:/^(?:symbian|nokia) belle\b(?!\s+(?:feature pack|fp))/i, note:text('Додала гнучкіші віджети й панель сповіщень, яку відкриває жест згори. В архіві є Nokia 700 та анонсована Nokia 600.', 'Добавила более гибкие виджеты и панель уведомлений, открываемую жестом сверху. В архиве есть Nokia 700 и анонсированная Nokia 600.', 'Added more flexible widgets and a pull-down notification panel. The archive includes Nokia 700 and the announced Nokia 600.') },
  { id:'belle-fp1', title:'Nokia Belle Feature Pack 1', match:/^(?:nokia|symbian) belle\s+(?:feature pack\s*|fp\s*)1\b/i },
  { id:'belle-fp2', title:'Nokia Belle Feature Pack 2', match:/^(?:nokia|symbian) belle\s+(?:feature pack\s*|fp\s*)2\b/i },
];

const windowsPhone: Version[] = [
  { id: 'windows-phone-7', title: 'Windows Phone 7 / 7.5 / 7.8', match: /^windows phone 7\b/i },
  { id: 'windows-phone-8', title: 'Windows Phone 8', match: /^windows phone 8(?!\.)\b/i },
  { id: 'windows-phone-8-1', title: 'Windows Phone 8.1', match: /^windows phone 8\.1\b/i },
  { id: 'windows-10-mobile', title: 'Windows 10 Mobile', match: /^windows 10 mobile\b/i },
];

const androidReleases = [
  '1.0', '1.1', '1.5 Cupcake', '1.6 Donut', '2.0 Eclair', '2.1 Eclair', '2.2 Froyo',
  '2.3 Gingerbread', '2.3.4 Gingerbread', '3.0 Honeycomb', '3.1 Honeycomb', '3.2 Honeycomb',
  '4.0 Ice Cream Sandwich', '4.1 Jelly Bean', '4.2 Jelly Bean', '4.2.2 Jelly Bean', '4.3 Jelly Bean',
  '4.4 KitKat', '5.0 Lollipop', '5.1 Lollipop', '6.0 Marshmallow', '7.0 Nougat', '7.1 Nougat',
  '8.0 Oreo', '8.1 Oreo', '9 Pie', '10', '11', '12', '12L', '13', '14', '15', '16', '17',
].map(release => ({
  id: 'android-' + release.split(' ')[0].toLowerCase().replaceAll('.', '-'),
  title: 'Android ' + release,
}));

const series40 = [
  { id: '1st-edition', title: 'Series 40 1st Edition' },
  { id: '2nd-edition', title: 'Series 40 2nd Edition' },
  { id: '3rd-edition', title: 'Series 40 3rd Edition' },
  { id: '3rd-edition-fp1', title: 'Series 40 3rd Edition FP1' },
  { id: '3rd-edition-fp2', title: 'Series 40 3rd Edition FP2' },
  { id: '5th-edition', title: 'Series 40 5th Edition' },
  { id: '5th-edition-fp1', title: 'Series 40 5th Edition FP1' },
  { id: '6th-edition', title: 'Series 40 6th Edition' },
  { id: 'series-40-asha-touch', title: 'Series 40 · Asha Full Touch' },
];

export function versionFor(platform: string, os: string): Omit<Version, 'match'> | undefined {
  if (platform === 'symbian') return symbian.find(version => version.match.test(os));
  if (platform === 'windows-phone') return windowsPhone.find(version => version.match.test(os));
  if (platform === 'series-40' && /\b(?:Asha (?:Full )?Touch|Developer Platform 2\.0)\b/i.test(os)) {
    return series40.find(version => version.id === 'series-40-asha-touch');
  }
  if (platform === 'android' && /^Android\s+12L\b/i.test(os)) {
    return { id: 'android-12l', title: 'Android 12L' };
  }
  const series = platform === 'series-40' && os.match(/\bseries 40 (\d+(?:st|nd|rd|th) Edition)(?:,? (?:Feature Pack |FP)(\d+))?/i);
  if (series) {
    const [, edition, pack] = series;
    return { id: edition.toLowerCase().replace(' ', '-') + (pack ? '-fp' + pack : ''), title: 'Series 40 ' + edition + (pack ? ' FP' + pack : '') };
  }
  const version = os.match(/^(Android|iOS|iPhone OS|Windows Mobile|Windows Phone|HarmonyOS)\s+(\d+(?:\.\d+)*)/i);
  if (version) {
    const [, family, number] = version;
    return { id: family.toLowerCase().replaceAll(' ', '-') + '-' + number.replaceAll('.', '-'), title: family + ' ' + number };
  }
}

export function curatedVersions(platform: string): readonly Omit<Version, 'match'>[] {
  if (platform === 'symbian') return symbian;
  if (platform === 'windows-phone') return windowsPhone;
  if (platform === 'android') return androidReleases;
  if (platform === 'series-40') return series40;
  return [];
}
