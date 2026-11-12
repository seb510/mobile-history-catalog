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
  history: copy('Як розвивалася платформа', 'Как развивалась платформа', 'How the platform evolved'),
  usage: copy('Щоденне користування', 'Повседневное использование', 'Everyday use'),
  unknown: copy('У частині записів операційну систему ще не зазначено.', 'В части записей операционная система пока не указана.', 'Some records do not yet specify an operating system.'),
};

interface Platform {
  id: string;
  name: Localized;
  summary: Localized;
  history: Localized;
  usage: Localized;
  sources: readonly { name: string; url: string }[];
  match: RegExp;
}

export const PLATFORMS: Platform[] = [
  {
    id: 'symbian', name: copy('Symbian', 'Symbian', 'Symbian'),
    summary: copy('У 2000-х Symbian став основою смартфонів Nokia та низки моделей Sony Ericsson. Платформа підтримувала багатозадачність і встановлення застосунків. Nokia згодом випустила Symbian^3, Anna й Belle.', 'В 2000-х Symbian стал основой смартфонов Nokia и ряда моделей Sony Ericsson. Платформа поддерживала многозадачность и установку приложений. Позже Nokia выпустила Symbian^3, Anna и Belle.', 'In the 2000s, Symbian powered Nokia smartphones and a number of Sony Ericsson models. It supported multitasking and installable applications. Nokia later released Symbian^3, Anna and Belle.'),
    history: copy(
      "Symbian виросла з EPOC, системи кишенькових органайзерів Psion. У Nokia 9210 вона отримала широкий екран і клавіатуру, у кнопкових Nokia — меню S60, а в Sony Ericsson P800 — інтерфейс UIQ зі стилусом. Від оболонки залежало, як виглядали програми й чим ними керували.",
      "Symbian выросла из EPOC, системы карманных органайзеров Psion. В Nokia 9210 она получила широкий экран и клавиатуру, в кнопочных Nokia — меню S60, а в Sony Ericsson P800 — интерфейс UIQ со стилусом. Оболочка определяла вид приложений и управление ими.",
      "Symbian grew out of EPOC, the system behind Psion’s pocket organisers. The Nokia 9210 paired it with a wide display and keyboard, keypad Nokias used S60, and Sony Ericsson’s P800 used stylus-driven UIQ. The interface determined how apps looked and how people controlled them.",
    ),
    usage: copy(
      "Застосунки можна було встановлювати з файлів SIS, а багатозадачність дозволяла залишити програму відкритою й повернутися до неї. Сумісність залежала від версії ОС та інтерфейсу. У пізніх Nokia N8 і 700 домашні екрани з віджетами стали основою сенсорного керування.",
      "Приложения можно было устанавливать из файлов SIS, а многозадачность позволяла оставить программу открытой и вернуться к ней. Совместимость зависела от версии ОС и интерфейса. В поздних Nokia N8 и 700 домашние экраны с виджетами стали основой сенсорного управления.",
      "Apps could be installed from SIS files, and multitasking let users leave an app open and return to it. Compatibility depended on the OS version and interface. On later devices such as the Nokia N8 and 700, widget-based home screens became central to touch navigation.",
    ),
    sources: [
      { name: "Nokia · Symbian Belle", url: "https://www.globenewswire.com/news-release/2011/08/24/1857808/0/en/Nokia-launches-three-no-compromise-mass-market-smartphones-powered-by-Symbian-Belle.html" },
      { name: "Nokia · Symbian history", url: "https://blogs.windows.com/devices/2010/06/21/symbian-10-things-you-should-know/" },
    ],
    match: /^(?:symbian|(?:epoc(?:32)?|nokia belle|series\s*60|s60)\b)/i,
  },
  {
    id:'series-40', name:copy('Series 40','Series 40','Series 40'),
    summary:copy('Series 40 була платформою Nokia для масових кнопкових телефонів. Залежно від моделі вона підтримувала Java ME, музику, камеру й мобільний інтернет.', 'Series 40 была платформой Nokia для массовых кнопочных телефонов. В зависимости от модели она поддерживала Java ME, музыку, камеру и мобильный интернет.', 'Series 40 was Nokia’s platform for mainstream feature phones. Depending on the model, it supported Java ME, music, cameras and mobile internet.'),
    history: copy(
      "Series 40 розвивалася разом із масовими Nokia. У 6800 система працювала з розкладною клавіатурою для повідомлень, у 6230i отримала чіткіший квадратний екран, а пізніше на 5310 XpressMusic працювала разом з окремими клавішами плеєра. У 2012 році Nokia адаптувала її до повністю сенсорного керування на Asha 305, 306 і 311.",
      "Series 40 развивалась вместе с массовыми Nokia. В 6800 система работала с раскладной клавиатурой для сообщений, в 6230i получила более чёткий квадратный экран, а позже на 5310 XpressMusic сочеталась с отдельными клавишами плеера. В 2012 году Nokia адаптировала её к полностью сенсорному управлению на Asha 305, 306 и 311.",
      "Series 40 evolved with Nokia’s mainstream phones. The 6800 paired it with a fold-out messaging keyboard, the 6230i offered a sharper square display, and the 5310 XpressMusic added dedicated player keys. In 2012 Nokia adapted the platform for full-touch controls on the Asha 305, 306 and 311.",
    ),
    usage: copy(
      "Ігри й утиліти часто встановлювали у форматі Java ME. Навіть дві моделі з Series 40 могли відрізнятися за розміром екрана, підтримкою Java API та доступною пам’яттю, тому одна гра могла працювати на одній Nokia й не запускатися на іншій.",
      "Игры и утилиты часто устанавливались в формате Java ME. Даже две модели с Series 40 могли отличаться размером экрана, поддержкой Java API и доступной памятью, поэтому одна игра могла работать на одной Nokia и не запускаться на другой.",
      "Games and utilities were often installed as Java ME apps. Two Series 40 phones could differ in display size, Java APIs and available memory, so a game that ran on one Nokia might fail to launch on another.",
    ),
    sources: [
      { name: "Nokia · Series 40 3rd Edition", url: "https://www.globenewswire.com/news-release/2005/06/13/1847958/0/en/Forum-Nokia-Introduces-Series-40-Platform-3rd-edition-for-Mobile-Application-Developers.html" },
      { name: "Nokia · Asha Full Touch", url: "https://blogs.windows.com/devices/2012/06/06/have-a-touch-nokias-new-asha-phones/" },
    ],
    match:/\bseries\s*40\b/i,
  },
  {
    id:'series-30-plus', name:copy('Series 30+','Series 30+','Series 30+'),
    summary:copy('Series 30+ використовували в простих телефонах під маркою Nokia, зокрема у перевиданні 3310 2017 року. Основні сценарії — дзвінки, SMS і базові інструменти.', 'Series 30+ использовалась в простых телефонах Nokia, в том числе в переиздании 3310 2017 года. Основные сценарии — звонки, SMS и базовые инструменты.', 'Series 30+ powered basic Nokia-branded handsets, including the 2017 Nokia 3310. Its main uses were calls, SMS and simple utilities.'),
    history: copy(
      "У Nokia 3310 2017 року Series 30+ поєднала звичну цифрову клавіатуру з кольоровим меню. Це окреме покоління телефона: у ньому з’явилися камера, FM-радіо й відтворення музики з карти пам’яті.",
      "В Nokia 3310 2017 года Series 30+ сочетала привычную цифровую клавиатуру с цветным меню. Это отдельное поколение телефона: в нём появились камера, FM-радио и воспроизведение музыки с карты памяти.",
      "On the 2017 Nokia 3310, Series 30+ paired a familiar numeric keypad with a colour menu. That generation added a camera, FM radio and music playback from a memory card.",
    ),
    usage: copy(
      "Контакти, повідомлення, будильник і плеєр відкриваються з головного меню. Для прослуховування FM на цій моделі потрібна дротова гарнітура, яка слугує антеною.",
      "Контакты, сообщения, будильник и плеер открываются из главного меню. Для FM на этой модели нужна проводная гарнитура, которая служит антенной.",
      "Contacts, messages, the alarm and the player are available from the main menu. On this model, a wired headset acts as the FM radio antenna.",
    ),
    sources: [
      { name: "HMD · Nokia 3310 user guide", url: "https://www.hmd.com/en_int/support/nokia-3310-user-guide/NU" },
    ],
    match:/\bseries\s*30\s*\+/i,
  },
  {
    id:'android', name:copy('Android','Android','Android'),
    summary:copy('Android вийшов на телефонах у 2008 році. Відкритий проєкт AOSP дає виробникам основу, яку вони адаптують для своїх пристроїв. Набір сервісів і термін оновлень залежать від виробника та моделі.', 'Android появился на телефонах в 2008 году. Открытый проект AOSP даёт производителям основу для адаптации под свои устройства. Набор сервисов и срок обновлений зависят от производителя и модели.', 'Android appeared on phones in 2008. The open-source AOSP project provides a base manufacturers can adapt for their devices. Services and update support vary by manufacturer and model.'),
    history: copy(
      "Ранні Android-телефони поєднували сенсорний екран із клавіатурою або трекболом. Згодом Android пристосувався до планшетів і складаних екранів, а фізичні кнопки навігації поступилися екранним кнопкам і жестам.",
      "Ранние Android-телефоны сочетали сенсорный экран с клавиатурой или трекболом. Затем Android адаптировался к планшетам и складным экранам, а физические кнопки навигации уступили место экранным кнопкам и жестам.",
      "Early Android phones paired touchscreens with keyboards or trackballs. Android later adapted to tablets and foldables, while physical navigation keys gave way to on-screen buttons and gestures.",
    ),
    usage: copy(
      "AOSP надає базу системи. Виробник може змінювати оформлення, додавати власні програми й по-своєму розкладати перемикачі та налаштування. Тому однаковий номер Android не гарантує однакового меню чи набору сервісів на Pixel і Galaxy.",
      "AOSP предоставляет основу системы. Производитель может менять оформление, добавлять приложения и по-своему располагать переключатели и настройки. Поэтому одинаковый номер Android не гарантирует одинаковое меню или набор сервисов на Pixel и Galaxy.",
      "AOSP provides the system base. Manufacturers can change the design, add apps and arrange toggles and settings differently. The same Android version can therefore offer different menus and services on a Pixel and a Galaxy.",
    ),
    sources: [
      { name: "Android Developers · Ice Cream Sandwich", url: "https://developer.android.com/about/versions/android-4.0-highlights" },
      { name: "Android Open Source Project · AOSP overview", url: "https://source.android.com/docs/setup/about" },
    ],
    match:/^android\b/i,
  },
  {
    id:'ios', name:copy('iPhone OS / iOS','iPhone OS / iOS','iPhone OS / iOS'),
    summary:copy('Apple представила перший iPhone у 2007 році. App Store з’явився у 2008 році, а назву iOS запровадили у 2010-му. Система розвивалася разом із пристроями Apple.', 'Apple представила первый iPhone в 2007 году. App Store появился в 2008 году, а название iOS ввели в 2010-м. Система развивалась вместе с устройствами Apple.', 'Apple introduced the first iPhone in 2007. The App Store followed in 2008, and the name iOS arrived in 2010. The system evolved alongside Apple’s devices.'),
    history: copy(
      "Перший iPhone поєднав телефон, iPod і Safari. Через рік App Store відкрив шлях програмам сторонніх розробників. Пізніші покоління додали віджети на головному екрані та Бібліотеку програм, яка автоматично групує встановлені застосунки.",
      "Первый iPhone объединил телефон, iPod и Safari. Через год App Store открыл путь приложениям сторонних разработчиков. Поздние поколения добавили виджеты на домашнем экране и Библиотеку приложений, которая автоматически группирует установленные программы.",
      "The first iPhone combined a phone, an iPod and Safari. A year later the App Store opened the platform to third-party apps. Later releases added home screen widgets and the App Library, which groups installed apps automatically.",
    ),
    usage: copy(
      "На першому iPhone до сітки застосунків повертала кнопка Home. На моделях на кшталт iPhone 12 для цього використовують жест від нижнього краю. Спосіб керування та набір можливостей залежать і від покоління телефона.",
      "На первом iPhone к сетке приложений возвращала кнопка Home. На моделях вроде iPhone 12 для этого используют жест от нижнего края. Способ управления и набор возможностей зависят и от поколения телефона.",
      "On the original iPhone, the Home button returned users to the app grid. On models such as the iPhone 12, a swipe from the bottom edge does the same job. Navigation and available features also depend on the hardware generation.",
    ),
    sources: [
      { name: "Apple · The App Store turns 10", url: "https://www.apple.com/newsroom/2018/07/app-store-turns-10/" },
      { name: "Apple · iOS 14", url: "https://www.apple.com/newsroom/2020/06/apple-reimagines-the-iphone-experience-with-ios-14/" },
    ],
    match:/^(?:ios|iphone os)\b/i,
  },
  {
    id:'windows-mobile', name:copy('Windows Mobile','Windows Mobile','Windows Mobile'),
    summary:copy('Windows Mobile виросла з кишенькових комп’ютерів Microsoft. У 2000-х її використовували комунікатори з поштою, календарем і офісними застосунками. Xperia X1 працював на Windows Mobile 6.1 Professional.', 'Windows Mobile выросла из карманных компьютеров Microsoft. В 2000-х её использовали коммуникаторы с почтой, календарём и офисными приложениями. Xperia X1 работал на Windows Mobile 6.1 Professional.', 'Windows Mobile grew out of Microsoft’s pocket computers. In the 2000s it powered communicators with mail, calendars and office applications. The Xperia X1 used Windows Mobile 6.1 Professional.'),
    history: copy(
      "Windows Mobile перенесла можливості кишенькових ПК у комунікатори. На Xperia X1 Sony Ericsson поєднала її з висувною клавіатурою, широким екраном і власними панелями для швидкого доступу до різних сценаріїв.",
      "Windows Mobile перенесла возможности карманных ПК в коммуникаторы. На Xperia X1 Sony Ericsson совместила её с выдвижной клавиатурой, широким экраном и собственными панелями для быстрого доступа к разным сценариям.",
      "Windows Mobile brought pocket PC features to communicators. On the Xperia X1, Sony Ericsson paired it with a sliding keyboard, a wide display and its own panels for different tasks.",
    ),
    usage: copy(
      "Для робочих сценаріїв важливими були пошта, календар і документи Office Mobile. Стилус допомагав керувати дрібними елементами, а висувна клавіатура давала змогу набирати листи без екранних клавіш.",
      "Для рабочих задач были важны почта, календарь и документы Office Mobile. Стилус помогал управлять мелкими элементами, а выдвижная клавиатура позволяла набирать письма без экранных клавиш.",
      "Mail, calendars and Office Mobile documents were central to work use. A stylus helped with small controls, while a sliding keyboard made it possible to write emails without an on-screen keyboard.",
    ),
    sources: [
      { name: "Microsoft · Windows Mobile and Sony Ericsson", url: "https://news.microsoft.com/source/2008/02/10/microsoft-expands-consumer-reach-of-windows-mobile-phones-with-sony-ericsson/" },
    ],
    match:/^windows mobile\b/i,
  },
  {
    id:'windows-phone', name:copy('Windows Phone','Windows Phone','Windows Phone'),
    summary:copy('Microsoft представила Windows Phone у 2010 році. Nokia використала платформу в лінійці Lumia. Windows Phone 8, представлена у 2012 році, працювала на Lumia 520 і 620.', 'Microsoft представила Windows Phone в 2010 году. Nokia использовала платформу в линейке Lumia. Windows Phone 8, представленная в 2012 году, работала на Lumia 520 и 620.', 'Microsoft introduced Windows Phone in 2010. Nokia adopted it for the Lumia line. Windows Phone 8 arrived in 2012 and powered the Lumia 520 and 620.'),
    history: copy(
      "Windows Phone 7 зробила живі плитки основою стартового екрана. Windows Phone 8 розширила їхні можливості, а 8.1 додала центр сповіщень. У Windows 10 Mobile на сумісних моделях Continuum дозволяв працювати з підтримуваними застосунками на зовнішньому дисплеї.",
      "Windows Phone 7 сделала живые плитки основой стартового экрана. Windows Phone 8 расширила их возможности, а 8.1 добавила центр уведомлений. В Windows 10 Mobile на совместимых моделях Continuum позволял работать с поддерживаемыми приложениями на внешнем дисплее.",
      "Windows Phone 7 built its Start screen around Live Tiles. Windows Phone 8 expanded what tiles could do, and 8.1 added a notification centre. On compatible Windows 10 Mobile phones, Continuum let supported apps run on an external display.",
    ),
    usage: copy(
      "На старті можна було закріпити контакти й застосунки, а плитки показували оновлення без відкриття програми. Повний список застосунків відкривався горизонтальним жестом.",
      "На стартовом экране можно было закреплять контакты и приложения, а плитки показывали обновления без запуска программы. Полный список приложений открывался горизонтальным жестом.",
      "Users could pin contacts and apps to Start, and tiles surfaced updates without opening the app. A horizontal swipe revealed the full app list.",
    ),
    sources: [
      { name: "Microsoft · Windows Phone 8", url: "https://news.microsoft.com/source/2012/10/29/microsoft-unveils-windows-phone-8/" },
      { name: "Microsoft · Lumia 950 and Continuum", url: "https://blogs.windows.com/devices/2015/10/06/a-new-era-of-windows-10-devices-from-microsoft/" },
    ],
    match:/^windows (?:phone\b|10 mobile\b)/i,
  },
  {
    id:'harmonyos', name:copy('HarmonyOS','HarmonyOS','HarmonyOS'),
    summary:copy('HarmonyOS — платформа Huawei для телефонів та інших пристроїв. У нашому архіві її представляють складані Mate XT. Можливості й сумісність застосунків залежать від покоління системи.', 'HarmonyOS — платформа Huawei для телефонов и других устройств. В нашем архиве её представляют складные Mate XT. Возможности и совместимость приложений зависят от поколения системы.', 'HarmonyOS is Huawei’s platform for phones and other devices. In this archive it appears on the foldable Mate XT family. Features and app compatibility depend on the system generation.'),
    history: copy(
      "Huawei представила HarmonyOS у 2019 році як платформу для різних типів пристроїв. У 2024 році компанія представила HarmonyOS NEXT, гілку з власною моделлю розробки застосунків. В архіві назва й номер системи наведені окремо для кожної моделі Mate XT.",
      "Huawei представила HarmonyOS в 2019 году как платформу для разных типов устройств. В 2024 году компания представила HarmonyOS NEXT, ветку с собственной моделью разработки приложений. В архиве название и номер системы указаны отдельно для каждой модели Mate XT.",
      "Huawei introduced HarmonyOS in 2019 as a platform for different types of devices. In 2024 it introduced HarmonyOS NEXT, a branch with its own app development model. The archive records the software name and version separately for each Mate XT model.",
    ),
    usage: copy(
      "На розкладеному Mate XT більша площа дає змогу працювати з двома застосунками поруч. Режими поділу екрана й плаваючих вікон залежать від версії системи та підтримки конкретних застосунків.",
      "В разложенном Mate XT большая площадь позволяет работать с двумя приложениями рядом. Разделение экрана и плавающие окна зависят от версии системы и поддержки конкретных приложений.",
      "An unfolded Mate XT has room for two apps side by side. Split-screen and floating windows depend on the system version and on what individual apps support.",
    ),
    sources: [
      { name: "Huawei · Multi-window", url: "https://consumer.huawei.com/cn/support/content/zh-cn16014998/" },
      { name: "Huawei · HarmonyOS NEXT", url: "https://www.huawei.com/cn/news/2024/10/harmonyos5/" },
    ],
    match:/^harmonyos\b/i,
  },
  {
    id:'motomagx', name:copy('Motorola MOTOMAGX','Motorola MOTOMAGX','Motorola MOTOMAGX'),
    summary:copy('MOTOMAGX поєднувала Linux і Java в частині телефонів Motorola кінця 2000-х. У каталозі її представляє RAZR2 V8.', 'MOTOMAGX сочетала Linux и Java в части телефонов Motorola конца 2000-х. В каталоге её представляет RAZR2 V8.', 'MOTOMAGX combined Linux and Java on some late-2000s Motorola phones. The RAZR2 V8 represents it in the archive.'),
    history: copy(
      "RAZR2 V8 показує, як Motorola використала Linux у телефоні з традиційною цифровою клавіатурою. Оболонка зберегла звичні для розкладачки меню й команди програмних клавіш, а для ігор та утиліт використовувалася Java.",
      "RAZR2 V8 показывает, как Motorola использовала Linux в телефоне с традиционной цифровой клавиатурой. Оболочка сохранила привычные меню и команды программных клавиш, а для игр и утилит использовалась Java.",
      "The RAZR2 V8 shows how Motorola used Linux in a phone with a conventional numeric keypad. Its interface retained familiar clamshell menus and soft keys, while games and utilities used Java.",
    ),
    usage: copy(
      "Коли телефон був закритий, на зовнішньому дисплеї можна було бачити стан відтворення й керувати музикою. Усередині залишалися повне меню, повідомлення й налаштування.",
      "Когда телефон был закрыт, внешний дисплей показывал состояние воспроизведения и позволял управлять музыкой. Внутри оставались полное меню, сообщения и настройки.",
      "With the phone closed, the outer display showed playback status and offered music controls. Opening the phone exposed the full menu, messages and settings.",
    ),
    sources: [
      { name: "Motorola · RAZR2 V8 user guide", url: "https://en-us.support.motorola.com/euf/assets/downloads/Manuals/V8_UG_TMO.pdf" },
    ],
    match:/\bmotomagx\b/i,
  },
  {
    id:'proprietary', name:copy('Власні платформи','Собственные платформы','Proprietary platforms'),
    summary:copy('Ця рубрика збирає різні платформи кнопкових телефонів Siemens, Samsung, Motorola та інших виробників. Можливості й доступні застосунки залежали від моделі.', 'Эта рубрика объединяет разные платформы кнопочных телефонов Siemens, Samsung, Motorola и других производителей. Возможности и доступные приложения зависели от модели.', 'This group brings together different feature-phone platforms from Siemens, Samsung, Motorola and other manufacturers. Features and available applications varied by model.'),
    history: copy(
      "У кнопкову епоху виробники будували меню навколо можливостей конкретного телефона. На Siemens CX65 дві програмні клавіші змінювали дію залежно від екрана, а джойстик дозволяв переміщатися по піктограмах.",
      "В эпоху кнопочных телефонов производители строили меню вокруг возможностей конкретной модели. На Siemens CX65 две программные клавиши меняли действие в зависимости от экрана, а джойстик позволял перемещаться по значкам.",
      "In the keypad era, manufacturers built menus around the features of individual phones. On the Siemens CX65, two soft keys changed their actions with the screen and the joystick moved between icons.",
    ),
    usage: copy(
      "Java-ігри, профілі звуку, теми чи швидкі команди залежали від апарата. Навіть подібне меню у двох виробників нічого не гарантувало щодо сумісності програм, кабелів або форматів синхронізації.",
      "Java-игры, звуковые профили, темы и быстрые команды зависели от аппарата. Даже похожие меню у двух производителей не гарантировали совместимость программ, кабелей или форматов синхронизации.",
      "Java games, sound profiles, themes and shortcuts depended on the handset. Similar menus from two manufacturers did not guarantee compatibility between apps, cables or sync formats.",
    ),
    sources: [
      { name: "Siemens · CX65 user guide", url: "https://altehandys.de/downloads/man-si-cx65.pdf" },
    ],
    match:/^(?:власн|пропрієтарн|платформа siemens)/i,
  },
];

export function platformFor(os: string | undefined) {
  return os ? PLATFORMS.find(platform => platform.match.test(os.trim())) : undefined;
}
