type YearContext = { uk: [string, string]; en: [string, string]; source: string };

export const evolutionYears: Record<number, YearContext | undefined> = {
  1997: {
    uk: ["Три діапазони GSM", "Телефони з підтримкою трьох діапазонів могли працювати в мережах по обидва боки Атлантики."],
    en: ["Tri-band GSM", "Handsets supporting three frequency bands could work on GSM networks on both sides of the Atlantic."],
    source: 'https://www.gsma.com/about-us/who-we-are/our-history/',
  },
  1998: {
    uk: ["Антена всередині", "У Nokia 8810 антену сховали під корпус. Гладкий телефон було легше покласти в кишеню."],
    en: ["Internal antennas", "The Nokia 8810 tucked its antenna inside the case, giving the phone a smooth profile that slipped into a pocket."],
    source: '/phones/nokia-8810/',
  },
  1999: {
    uk: ["WAP", "У Франції та Італії випробовували WAP. Новини й інші короткі сторінки пристосовували до маленьких екранів."],
    en: ["WAP", "WAP trials took place in France and Italy. News and other short pages were adapted for small phone screens."],
    source: 'https://www.gsma.com/about-us/who-we-are/our-history/',
  },
  2000: {
    uk: ["Пакетні дані", "Стартували комерційні мережі GPRS. Дані передавалися пакетами, тож для кожного сеансу вже не потрібно було набирати номер."],
    en: ["Packet data", "Commercial GPRS services launched. Data travelled in packets, removing the need to dial a number for each session."],
    source: 'https://www.gsma.com/about-us/who-we-are/our-history/',
  },
  2001: {
    uk: ["Мережі 3G", "Запрацювала перша комерційна мережа WCDMA. Вища швидкість передавання даних відкривала шлях до відеозв’язку."],
    en: ["3G networks", "The first commercial WCDMA network went live. Faster data made services such as mobile video calling practical."],
    source: 'https://www.gsma.com/about-us/who-we-are/our-history/',
  },
  2002: {
    uk: ["Java у телефоні", "Ігри можна було додавати після купівлі телефона. Siemens M50 запускав завантажені Java-застосунки."],
    en: ["Java on phones", "Owners could add games after buying their handset. The Siemens M50 could run downloadable Java applications."],
    source: '/phones/siemens-m50/',
  },
  2003: {
    uk: ["Камера в корпусі", "Вбудована камера перетворювала телефон на кишеньковий фотоапарат. На Nokia 3650 знімок можна було одразу надіслати через MMS."],
    en: ["Built-in cameras", "A built-in camera turned the phone into a pocket camera. Nokia 3650 owners could send the picture straight away by MMS."],
    source: '/phones/nokia-3650/',
  },
  2004: {
    uk: ["Тонкі клавіатури", "Пласка металева клавіатура RAZR V3 допомогла зробити розкладачку тоншою, зберігши повний цифровий блок."],
    en: ["Thin keypads", "The RAZR V3 used a flat metal keypad to fit a full number pad into a slimmer folding phone."],
    source: '/phones/motorola-razr-v3/',
  },
  2005: {
    uk: ["Музика з комп’ютера", "На Motorola ROKR E1 можна було перенести добірку з iTunes і слухати її дорогою без окремого плеєра."],
    en: ["Music syncing", "The Motorola ROKR E1 synced a selection from iTunes so its owner could leave the music player at home."],
    source: '/phones/motorola-rokr-e1/',
  },
  2006: {
    uk: ["Сенсорні клавіші", "На LG Chocolate підсвічені сенсорні клавіші реагували на дотик. Для навігації вже не потрібно було натискати механічну кнопку."],
    en: ["Touch-sensitive keys", "The LG Chocolate lit up touch-sensitive controls. A light touch could navigate menus without depressing a mechanical key."],
    source: '/phones/lg-kg800/',
  },
  2007: {
    uk: ["Мультитач", "На iPhone відстань між двома пальцями визначала масштаб фото чи вебсторінки. Жест став частиною інтерфейсу."],
    en: ["Multi-touch", "On the iPhone, moving two fingers apart enlarged a photo or web page. The gesture became part of the interface."],
    source: '/phones/apple-iphone/',
  },
  2008: {
    uk: ["Android", "HTC Dream приніс Android у продаж. Застосунки з Android Market можна було встановлювати безпосередньо на телефон."],
    en: ["Android", "The HTC Dream brought Android to retail. Owners could install applications directly from Android Market."],
    source: '/phones/htc-dream/',
  },
  2009: {
    uk: ["Перші мережі LTE", "Почали працювати комерційні мережі LTE. Перші користувачі підключали до них ноутбуки через модеми."],
    en: ["Early LTE networks", "Commercial LTE networks went live. Early users connected laptops through mobile broadband modems."],
    source: 'https://www.gsma.com/about-us/who-we-are/our-history/',
  },
  2010: {
    uk: ["Ксеноновий спалах", "У камерофонах на кшталт Nokia N8 короткий імпульс ксенонового спалаху допомагав знімати людей у русі за слабкого освітлення."],
    en: ["Xenon flash", "Camera phones such as the Nokia N8 used a brief xenon flash to help freeze moving subjects in low light."],
    source: '/phones/nokia-n8/',
  },
  2011: {
    uk: ["Зв’язок через NFC", "Телефони з NFC, зокрема Nokia 700, могли встановлювати з’єднання із сумісними аксесуарами простим дотиком."],
    en: ["NFC pairing", "NFC phones such as the Nokia 700 could pair with compatible accessories by touching them together."],
    source: '/phones/nokia-700/',
  },
  2012: {
    uk: ["Надлишкова роздільність", "Nokia 808 PureView об’єднувала інформацію з кількох пікселів сенсора в один піксель готової фотографії."],
    en: ["Pixel oversampling", "The Nokia 808 PureView combined information from several sensor pixels into one pixel in the finished photograph."],
    source: '/phones/nokia-808-pureview/',
  },
  2013: {
    uk: ["HD у доступніших моделях", "Moto G приніс екран 720p у нижчий ціновий сегмент. Дрібний текст і карти стали чіткішими на доступному смартфоні."],
    en: ["Affordable HD displays", "The Moto G brought a 720p display to a lower price bracket, making small text and maps sharper on an affordable phone."],
    source: '/phones/motorola-moto-g/',
  },
  2014: {
    uk: ["Центр сповіщень", "У Windows Phone 8.1 сповіщення й швидкі налаштування зібрали в одній шторці. Її відкривав рух від верхнього краю."],
    en: ["Notification centre", "Windows Phone 8.1 gathered alerts and quick settings in Action Center, a panel reached by swiping down from the top."],
    source: '/phones/nokia-lumia-630/',
  },
  2015: {
    uk: ["Телефон і монітор", "Continuum на Lumia 950 дозволяв під’єднати монітор і клавіатуру. Сумісні застосунки розгортали робочий простір на великий екран."],
    en: ["Desktop displays", "Continuum let a Lumia 950 connect to a monitor and keyboard. Compatible apps expanded their workspace onto the larger screen."],
    source: '/phones/microsoft-lumia-950/',
  },
  2016: {
    uk: ["Голосовий помічник", "На першому Pixel був вбудований Google Assistant. Користувач міг продовжити запитання в межах однієї розмови."],
    en: ["Voice assistants", "The first Pixel shipped with Google Assistant. Users could ask a follow-up question within the same conversation."],
    source: '/phones/google-pixel/',
  },
  2017: {
    uk: ["Об’ємне розпізнавання обличчя", "Face ID на iPhone X використовував інфрачервону карту глибини, щоб розпізнати власника навіть у темряві."],
    en: ["3D face recognition", "Face ID on the iPhone X used infrared depth mapping to recognise the owner even in the dark."],
    source: '/phones/apple-iphone-x/',
  },
  2018: {
    uk: ["Оцінка глибини", "Друга камера могла оцінювати відстань до об’єкта. Huawei P smart+ використовував ці дані для портретів із розмитим тлом."],
    en: ["Depth sensing", "A second camera could estimate subject distance. The Huawei P smart+ used that information to blur the background in portraits."],
    source: '/phones/huawei-p-smart-plus/',
  },
  2019: {
    uk: ["Гнучкий OLED", "У Galaxy Fold гнучкий екран розгортався вздовж шарніра: з кишенькового телефона виходив невеликий планшет."],
    en: ["Foldable OLED", "The Galaxy Fold unfolded an OLED panel along a hinge, turning a pocket-sized handset into a small tablet."],
    source: '/phones/samsung-galaxy-fold/',
  },
  2020: {
    uk: ["5G в iPhone", "Сімейство iPhone 12 отримало модеми 5G. Там, де оператор уже мав покриття, телефон міг перейти на нову мережу."],
    en: ["5G on iPhone", "The iPhone 12 family gained 5G modems, allowing it to use the new network wherever carriers had rolled out coverage."],
    source: '/phones/apple-iphone-12/',
  },
  2021: {
    uk: ["Адаптивні 120 Гц", "Дисплей iPhone 13 Pro змінював частоту оновлення: підвищував її під час гортання та знижував на нерухомій сторінці."],
    en: ["Adaptive 120 Hz", "The iPhone 13 Pro varied its refresh rate, speeding up for scrolling and slowing down on a static page."],
    source: '/phones/apple-iphone-13-pro/',
  },
  2022: {
    uk: ["5G у компактному корпусі", "iPhone SE отримав модем 5G у знайомому корпусі з кнопкою Home. Перехід на нову мережу вже не вимагав великого екрана."],
    en: ["Compact 5G phones", "The iPhone SE gained a 5G modem in its familiar home-button case, offering newer mobile networks in a compact handset."],
    source: '/phones/apple-iphone-se-2022/',
  },
  2023: {
    uk: ["Довша підтримка ПЗ", "Для Pixel 8 Google оголосив сім років оновлень. Термін підтримки став помітною характеристикою телефона при купівлі."],
    en: ["Longer software support", "Google promised seven years of updates for the Pixel 8, giving buyers a clear support lifetime to weigh alongside the hardware."],
    source: '/phones/google-pixel-8/',
  },
  2024: {
    uk: ["Екран із двома згинами", "Huawei Mate XT отримав два шарніри. Один дисплей можна було розгорнути на одну, дві або три секції."],
    en: ["Double-folding screens", "Two hinges on the Huawei Mate XT let the same display open across one, two or three sections."],
    source: '/phones/huawei-mate-xt/',
  },
  2025: {
    uk: ["120 Гц у базовому iPhone", "ProMotion з’явився в базовому iPhone 17. Плавне гортання з частотою до 120 Гц стало доступним і в цій лінійці."],
    en: ["120 Hz on the standard iPhone", "ProMotion reached the standard iPhone 17, bringing scrolling at up to 120 Hz to that part of the range."],
    source: '/phones/apple-iphone-17/',
  },
  2026: {
    uk: ["Магнітна зарядка Qi2", "iPhone 17e отримав Qi2 до 15 Вт. Магніти суміщають котушки телефона й зарядного пристрою."],
    en: ["Magnetic Qi2 charging", "The iPhone 17e gained Qi2 charging at up to 15 W. Magnets line up the coils in the handset and charger."],
    source: 'https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/',
  },
};
