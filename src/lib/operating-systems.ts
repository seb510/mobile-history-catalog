import type { Locale } from './locales';

type Localized = Record<Locale, string>;
const copy = (uk: string, ru: string, en: string): Localized => ({ uk, ru, en });

export const OS_PATH = '/operating-systems/';
export const OS_COPY = {
  title: copy('Операційні системи', 'Операционные системы', 'Operating systems'),
  short: copy('ОС', 'ОС', 'OS'),
  intro: copy('Від меню кнопкових телефонів до смартфонів. Як працювали мобільні платформи й на яких моделях їх можна побачити.', 'От меню кнопочных телефонов до смартфонов. Как работали мобильные платформы и на каких моделях их можно увидеть.', 'From keypad menus to smartphones. Explore how mobile platforms worked and the phones that ran them.'),
  models: copy('Телефони в архіві', 'Телефоны в архиве', 'Phones in the archive'),
  sources: copy('Джерела', 'Источники', 'Sources'),
  interface: copy('Інтерфейс', 'Интерфейс', 'Interface'),
  unknown: copy('У частині записів операційну систему ще не зазначено.', 'В части записей операционная система пока не указана.', 'Some records do not yet specify an operating system.'),
};

interface Platform {
  id: string;
  name: Localized;
  summary: Localized;
  interface: Localized;
  source?: { name: string; url: string };
  match: RegExp;
}

export const PLATFORMS: Platform[] = [
  {
    id: 'symbian', name: copy('Symbian', 'Symbian', 'Symbian'),
    summary: copy('У 2000-х Symbian став основою смартфонів Nokia та низки моделей Sony Ericsson. Платформа підтримувала багатозадачність і встановлення застосунків. Nokia згодом випустила Symbian^3, Anna й Belle.', 'В 2000-х Symbian стал основой смартфонов Nokia и ряда моделей Sony Ericsson. Платформа поддерживала многозадачность и установку приложений. Позже Nokia выпустила Symbian^3, Anna и Belle.', 'In the 2000s, Symbian powered Nokia smartphones and a number of Sony Ericsson models. It supported multitasking and installable applications. Nokia later released Symbian^3, Anna and Belle.'),
    interface: copy('S60 часто керували джойстиком і програмними клавішами. UIQ використовував стилус на моделях на кшталт P800. У Belle з’явилися настроювані головні екрани з віджетами.', 'S60 часто управлялся джойстиком и программными клавишами. UIQ использовал стилус на моделях вроде P800. В Belle появились настраиваемые домашние экраны с виджетами.', 'S60 often used a joystick and soft keys. UIQ used a stylus on devices such as the P800. Belle offered customisable home screens with widgets.'),
    source: {name:'Nokia · Symbian Belle',url:'https://www.globenewswire.com/news-release/2011/08/24/1857808/0/en/Nokia-launches-three-no-compromise-mass-market-smartphones-powered-by-Symbian-Belle.html'},
    match: /^(?:symbian|(?:series\s*60|s60)\b)/i,
  },
  {
    id:'series-40', name:copy('Series 40','Series 40','Series 40'),
    summary:copy('Series 40 була платформою Nokia для масових кнопкових телефонів. Залежно від моделі вона підтримувала Java ME, музику, камеру й мобільний інтернет.', 'Series 40 была платформой Nokia для массовых кнопочных телефонов. В зависимости от модели она поддерживала Java ME, музыку, камеру и мобильный интернет.', 'Series 40 was Nokia’s platform for mainstream feature phones. Depending on the model, it supported Java ME, music, cameras and mobile internet.'),
    interface:copy('Плитки або список у меню, цифрова клавіатура й підказки над двома програмними клавішами давали швидкий доступ до дзвінків, повідомлень і медіа.', 'Значки или список в меню, цифровая клавиатура и подсказки над двумя программными клавишами давали быстрый доступ к звонкам, сообщениям и медиа.', 'Icon grids or list menus, a numeric keypad and two contextual soft keys gave quick access to calls, messages and media.'),
    source:{name:'Nokia · Series 40 3rd Edition',url:'https://www.globenewswire.com/news-release/2005/06/13/1847958/0/en/Forum-Nokia-Introduces-Series-40-Platform-3rd-edition-for-Mobile-Application-Developers.html'},
    match:/\bseries\s*40\b/i,
  },
  {
    id:'series-30-plus', name:copy('Series 30+','Series 30+','Series 30+'),
    summary:copy('Series 30+ використовували в простих телефонах під маркою Nokia, зокрема у перевиданні 3310 2017 року. Основні сценарії — дзвінки, SMS і базові інструменти.', 'Series 30+ использовалась в простых телефонах Nokia, в том числе в переиздании 3310 2017 года. Основные сценарии — звонки, SMS и базовые инструменты.', 'Series 30+ powered basic Nokia-branded handsets, including the 2017 Nokia 3310. Its main uses were calls, SMS and simple utilities.'),
    interface:copy('Головний екран показує годинник і команди програмних клавіш. Меню відкривається центральною клавішею й керується навігаційним блоком.', 'Главный экран показывает часы и команды программных клавиш. Меню открывается центральной клавишей и управляется навигационным блоком.', 'The standby screen shows the clock and soft-key commands. The centre key opens the menu, and the directional pad moves between entries.'),
    source:{name:'HMD · Nokia 3310 user guide',url:'https://www.hmd.com/en_int/support/nokia-3310-user-guide'},
    match:/\bseries\s*30\s*\+/i,
  },
  {
    id:'android', name:copy('Android','Android','Android'),
    summary:copy('Android вийшов на телефонах у 2008 році. Відкритий проєкт AOSP дає виробникам основу, яку вони адаптують для своїх пристроїв. Набір сервісів і термін оновлень залежать від виробника та моделі.', 'Android появился на телефонах в 2008 году. Открытый проект AOSP даёт производителям основу для адаптации под свои устройства. Набор сервисов и срок обновлений зависят от производителя и модели.', 'Android appeared on phones in 2008. The open-source AOSP project provides a base manufacturers can adapt for their devices. Services and update support vary by manufacturer and model.'),
    interface:copy(
      'На знімках нижче видно, як змінювалися головний екран, віджети й навігація Android: від вкладки меню в ранніх версіях до екранних кнопок і жестів. Вигляд залежить і від пристрою: наприклад, на Xperia neo V видно віджети Sony Ericsson, а в емуляторі — інтерфейс Android SDK.',
      'На снимках ниже видно, как менялись домашний экран, виджеты и навигация Android: от вкладки меню в ранних версиях до экранных кнопок и жестов. Вид зависит и от устройства: например, на Xperia neo V видны виджеты Sony Ericsson, а в эмуляторе — интерфейс Android SDK.',
      'The images below show how Android’s home screen, widgets and navigation evolved, from the early app drawer tab to on-screen buttons and gestures. The interface also varies by device: the Xperia neo V shows Sony Ericsson widgets, while the emulator shows the Android SDK interface.',
    ),
    source:{name:'Android Developers · Ice Cream Sandwich',url:'https://developer.android.com/about/versions/android-4.0-highlights'},
    match:/^android\b/i,
  },
  {
    id:'ios', name:copy('iPhone OS / iOS','iPhone OS / iOS','iPhone OS / iOS'),
    summary:copy('Apple представила перший iPhone у 2007 році. App Store з’явився у 2008 році, а назву iOS запровадили у 2010-му. Система розвивалася разом із пристроями Apple.', 'Apple представила первый iPhone в 2007 году. App Store появился в 2008 году, а название iOS ввели в 2010-м. Система развивалась вместе с устройствами Apple.', 'Apple introduced the first iPhone in 2007. The App Store followed in 2008, and the name iOS arrived in 2010. The system evolved alongside Apple’s devices.'),
    interface:copy('Перший iPhone зробив основою керування мультитач, сітку застосунків і фізичну кнопку Home. У пізніших моделях навігацію додому перебрали жести.', 'Первый iPhone сделал основой управления мультитач, сетку приложений и физическую кнопку Home. В более поздних моделях переход на домашний экран выполняется жестом.', 'The first iPhone centred on multi-touch, a grid of apps and a physical Home button. Later models moved home navigation to gestures.'),
    source:{name:'Apple · The App Store turns 10',url:'https://www.apple.com/newsroom/2018/07/app-store-turns-10/'},
    match:/^(?:ios|iphone os)\b/i,
  },
  {
    id:'windows-mobile', name:copy('Windows Mobile','Windows Mobile','Windows Mobile'),
    summary:copy('Windows Mobile виросла з кишенькових комп’ютерів Microsoft. У 2000-х її використовували комунікатори з поштою, календарем і офісними застосунками. Xperia X1 працював на Windows Mobile 6.1 Professional.', 'Windows Mobile выросла из карманных компьютеров Microsoft. В 2000-х её использовали коммуникаторы с почтой, календарём и офисными приложениями. Xperia X1 работал на Windows Mobile 6.1 Professional.', 'Windows Mobile grew out of Microsoft’s pocket computers. In the 2000s it powered communicators with mail, calendars and office applications. The Xperia X1 used Windows Mobile 6.1 Professional.'),
    interface:copy('Екран Today збирав відомості про день. Стилус допомагав натискати дрібні елементи, а Sony Ericsson додала власний вибір панелей Xperia.', 'Экран Today собирал сведения о дне. Стилус помогал нажимать мелкие элементы, а Sony Ericsson добавила собственный выбор панелей Xperia.', 'The Today screen gathered information for the day. A stylus helped with small controls, and Sony Ericsson added its own Xperia panels.'),
    source:{name:'Microsoft · Windows Mobile and Sony Ericsson',url:'https://news.microsoft.com/source/2008/02/10/microsoft-expands-consumer-reach-of-windows-mobile-phones-with-sony-ericsson/'},
    match:/^windows mobile\b/i,
  },
  {
    id:'windows-phone', name:copy('Windows Phone','Windows Phone','Windows Phone'),
    summary:copy('Microsoft представила Windows Phone у 2010 році. Nokia використала платформу в лінійці Lumia. Windows Phone 8, представлена у 2012 році, працювала на Lumia 520 і 620.', 'Microsoft представила Windows Phone в 2010 году. Nokia использовала платформу в линейке Lumia. Windows Phone 8, представленная в 2012 году, работала на Lumia 520 и 620.', 'Microsoft introduced Windows Phone in 2010. Nokia adopted it for the Lumia line. Windows Phone 8 arrived in 2012 and powered the Lumia 520 and 620.'),
    interface:copy('На стартовому екрані живі плитки показували повідомлення й оновлення застосунків. Плитки можна було закріплювати та змінювати їхній розмір.', 'На стартовом экране живые плитки показывали сообщения и обновления приложений. Плитки можно было закреплять и менять их размер.', 'Live Tiles showed messages and app updates on the Start screen. Users could pin tiles and change their size.'),
    source:{name:'Microsoft · Windows Phone 8',url:'https://news.microsoft.com/source/2012/10/29/microsoft-unveils-windows-phone-8/'},
    match:/^windows (?:phone\b|10 mobile\b)/i,
  },
  {
    id:'harmonyos', name:copy('HarmonyOS','HarmonyOS','HarmonyOS'),
    summary:copy('HarmonyOS — платформа Huawei для телефонів та інших пристроїв. У нашому архіві її представляють складані Mate XT. Можливості й сумісність застосунків залежать від покоління системи.', 'HarmonyOS — платформа Huawei для телефонов и других устройств. В нашем архиве её представляют складные Mate XT. Возможности и совместимость приложений зависят от поколения системы.', 'HarmonyOS is Huawei’s platform for phones and other devices. In this archive it appears on the foldable Mate XT family. Features and app compatibility depend on the system generation.'),
    interface:copy('На складаних моделях великий екран дає місце для багатовіконного режиму. Інтерфейс підлаштовується під доступну площу дисплея.', 'На складных моделях большой экран даёт место для многооконного режима. Интерфейс подстраивается под доступную площадь дисплея.', 'On foldables, the large screen makes room for multi-window use. The interface adapts to the available display area.'),
    source:{name:'Huawei · Multi-window',url:'https://consumer.huawei.com/cn/support/content/zh-cn16014998/'},
    match:/^harmonyos\b/i,
  },
  {
    id:'motomagx', name:copy('Motorola MOTOMAGX','Motorola MOTOMAGX','Motorola MOTOMAGX'),
    summary:copy('MOTOMAGX поєднувала Linux і Java в частині телефонів Motorola кінця 2000-х. У каталозі її представляє RAZR2 V8.', 'MOTOMAGX сочетала Linux и Java в части телефонов Motorola конца 2000-х. В каталоге её представляет RAZR2 V8.', 'MOTOMAGX combined Linux and Java on some late-2000s Motorola phones. The RAZR2 V8 represents it in the archive.'),
    interface:copy('У V8 головне меню керується кнопками. Зовнішній екран розкладачки дає доступ до музичного плеєра, поки телефон закритий.', 'В V8 главное меню управляется кнопками. Внешний экран раскладушки даёт доступ к музыкальному плееру, пока телефон закрыт.', 'The V8 uses keys for its main menu. Its outer screen gives access to the music player while the clamshell is closed.'),
    source:{name:'Motorola · RAZR2 V8 user guide',url:'https://en-us.support.motorola.com/euf/assets/downloads/Manuals/V8_UG_TMO.pdf'},
    match:/\bmotomagx\b/i,
  },
  {
    id:'proprietary', name:copy('Власні платформи','Собственные платформы','Proprietary platforms'),
    summary:copy('Ця рубрика збирає різні платформи кнопкових телефонів Siemens, Samsung, Motorola та інших виробників. Можливості й доступні застосунки залежали від моделі.', 'Эта рубрика объединяет разные платформы кнопочных телефонов Siemens, Samsung, Motorola и других производителей. Возможности и доступные приложения зависели от модели.', 'This group brings together different feature-phone platforms from Siemens, Samsung, Motorola and other manufacturers. Features and available applications varied by model.'),
    interface:copy('Виробники створювали власні меню, піктограми та поєднання клавіш. У Siemens CX65, наприклад, навігація спирається на джойстик і дві програмні клавіші.', 'Производители создавали собственные меню, значки и сочетания клавиш. В Siemens CX65, например, навигация опирается на джойстик и две программные клавиши.', 'Manufacturers designed their own menus, icons and key shortcuts. The Siemens CX65, for instance, relies on a joystick and two soft keys.'),
    match:/^(?:власн|пропрієтарн|платформа siemens)/i,
  },
];

export function platformFor(os: string | undefined) {
  return os ? PLATFORMS.find(platform => platform.match.test(os.trim())) : undefined;
}
