type YearContext = { uk: [string, string]; en: [string, string]; slug: string };

export const evolutionYears: Record<number, YearContext | undefined> = {
  1997: {
    uk: ["Кольоровий дисплей","На Siemens S10 кілька кольорів допомагали розрізняти елементи меню на маленькому екрані."],
    en: ["Colour displays","The Siemens S10 used a handful of colours to distinguish menu elements on its small screen."],
    slug: 'siemens-s10',
  },
  1998: {
    uk: ["Антена всередині", "У Nokia 8810 антену сховали під корпус. Гладкий телефон було легше покласти в кишеню."],
    en: ["Internal antennas", "The Nokia 8810 tucked its antenna inside the case, giving the phone a smooth profile that slipped into a pocket."],
    slug: 'nokia-8810',
  },
  1999: {
    uk: ["Мобільні сторінки WAP","WAP адаптував інтернет-сервіси до маленького екрана. На Nokia 7110 сторінки можна було гортати коліщатком NaviRoller."],
    en: ["Mobile WAP pages","WAP adapted online services to small screens. The Nokia 7110 let readers scroll through pages with its NaviRoller."],
    slug: 'nokia-7110',
  },
  2000: {
    uk: ["Швидший мобільний модем","Технологія HSCSD об’єднувала часові інтервали GSM для передавання даних. Nokia 6210 могла підключити ноутбук до мережі як модем."],
    en: ["Faster mobile modems","HSCSD combined GSM time slots to carry more data. The Nokia 6210 could act as a modem for a laptop."],
    slug: 'nokia-6210',
  },
  2001: {
    uk: ["Пакетні дані GPRS","GPRS передавав дані пакетами. На Siemens ME45 можна було відкривати WAP-сторінки без нового модемного дзвінка для кожного сеансу."],
    en: ["GPRS packet data","GPRS sent data in packets. The Siemens ME45 could access WAP pages without dialling a new data call for each session."],
    slug: 'siemens-me45',
  },
  2002: {
    uk: ["Java у телефоні", "Ігри можна було додавати після купівлі телефона. Siemens M50 запускав завантажені Java-застосунки."],
    en: ["Java on phones", "Owners could add games after buying their handset. The Siemens M50 could run downloadable Java applications."],
    slug: 'siemens-m50',
  },
  2003: {
    uk: ["Камера в корпусі", "Вбудована камера перетворювала телефон на кишеньковий фотоапарат. На Nokia 3650 знімок можна було одразу надіслати через MMS."],
    en: ["Built-in cameras", "A built-in camera turned the phone into a pocket camera. Nokia 3650 owners could send the picture straight away by MMS."],
    slug: 'nokia-3650',
  },
  2004: {
    uk: ["Тонкі клавіатури", "Пласка металева клавіатура RAZR V3 допомогла зробити розкладачку тоншою, зберігши повний цифровий блок."],
    en: ["Thin keypads", "The RAZR V3 used a flat metal keypad to fit a full number pad into a slimmer folding phone."],
    slug: 'motorola-razr-v3',
  },
  2005: {
    uk: ["Музика з комп’ютера", "На Motorola ROKR E1 можна було перенести добірку з iTunes і слухати її дорогою без окремого плеєра."],
    en: ["Music syncing", "The Motorola ROKR E1 synced a selection from iTunes so its owner could leave the music player at home."],
    slug: 'motorola-rokr-e1',
  },
  2006: {
    uk: ["Сенсорні клавіші", "На LG Chocolate підсвічені сенсорні клавіші реагували на дотик. Для навігації вже не потрібно було натискати механічну кнопку."],
    en: ["Touch-sensitive keys", "The LG Chocolate lit up touch-sensitive controls. A light touch could navigate menus without depressing a mechanical key."],
    slug: 'lg-kg800',
  },
  2007: {
    uk: ["Мультитач", "На iPhone відстань між двома пальцями визначала масштаб фото чи вебсторінки. Жест став частиною інтерфейсу."],
    en: ["Multi-touch", "On the iPhone, moving two fingers apart enlarged a photo or web page. The gesture became part of the interface."],
    slug: 'apple-iphone',
  },
  2008: {
    uk: ["Android", "HTC Dream приніс Android у продаж. Застосунки з Android Market можна було встановлювати безпосередньо на телефон."],
    en: ["Android", "The HTC Dream brought Android to retail. Owners could install applications directly from Android Market."],
    slug: 'htc-dream',
  },
  2009: {
    uk: ["Віджети на домашньому екрані","Віджети виводили оновлення прямо на домашній екран. На Nokia N97 можна було бачити календар і новини ще до відкриття застосунку."],
    en: ["Home screen widgets","Widgets brought updates onto the home screen. The Nokia N97 could show calendar entries and news before the user opened an app."],
    slug: 'nokia-n97',
  },
  2010: {
    uk: ["Ксеноновий спалах", "У камерофонах на кшталт Nokia N8 короткий імпульс ксенонового спалаху допомагав знімати людей у русі за слабкого освітлення."],
    en: ["Xenon flash", "Camera phones such as the Nokia N8 used a brief xenon flash to help freeze moving subjects in low light."],
    slug: 'nokia-n8',
  },
  2011: {
    uk: ["Зв’язок через NFC", "Телефони з NFC, зокрема Nokia 700, могли встановлювати з’єднання із сумісними аксесуарами простим дотиком."],
    en: ["NFC pairing", "NFC phones such as the Nokia 700 could pair with compatible accessories by touching them together."],
    slug: 'nokia-700',
  },
  2012: {
    uk: ["Надлишкова роздільність", "Nokia 808 PureView об’єднувала інформацію з кількох пікселів сенсора в один піксель готової фотографії."],
    en: ["Pixel oversampling", "The Nokia 808 PureView combined information from several sensor pixels into one pixel in the finished photograph."],
    slug: 'nokia-808-pureview',
  },
  2013: {
    uk: ["HD у доступніших моделях", "Moto G приніс екран 720p у нижчий ціновий сегмент. Дрібний текст і карти стали чіткішими на доступному смартфоні."],
    en: ["Affordable HD displays", "The Moto G brought a 720p display to a lower price bracket, making small text and maps sharper on an affordable phone."],
    slug: 'motorola-moto-g',
  },
  2014: {
    uk: ["Центр сповіщень", "У Windows Phone 8.1 сповіщення й швидкі налаштування зібрали в одній шторці. Її відкривав рух від верхнього краю."],
    en: ["Notification centre", "Windows Phone 8.1 gathered alerts and quick settings in Action Center, a panel reached by swiping down from the top."],
    slug: 'nokia-lumia-630',
  },
  2015: {
    uk: ["Телефон і монітор", "Continuum на Lumia 950 дозволяв під’єднати монітор і клавіатуру. Сумісні застосунки розгортали робочий простір на великий екран."],
    en: ["Desktop displays", "Continuum let a Lumia 950 connect to a monitor and keyboard. Compatible apps expanded their workspace onto the larger screen."],
    slug: 'microsoft-lumia-950',
  },
  2016: {
    uk: ["Голосовий помічник", "На першому Pixel був вбудований Google Assistant. Користувач міг продовжити запитання в межах однієї розмови."],
    en: ["Voice assistants", "The first Pixel shipped with Google Assistant. Users could ask a follow-up question within the same conversation."],
    slug: 'google-pixel',
  },
  2017: {
    uk: ["Об’ємне розпізнавання обличчя", "Face ID на iPhone X використовував інфрачервону карту глибини, щоб розпізнати власника навіть у темряві."],
    en: ["3D face recognition", "Face ID on the iPhone X used infrared depth mapping to recognise the owner even in the dark."],
    slug: 'apple-iphone-x',
  },
  2018: {
    uk: ["Оцінка глибини", "Друга камера могла оцінювати відстань до об’єкта. Huawei P smart+ використовував ці дані для портретів із розмитим тлом."],
    en: ["Depth sensing", "A second camera could estimate subject distance. The Huawei P smart+ used that information to blur the background in portraits."],
    slug: 'huawei-p-smart-plus',
  },
  2019: {
    uk: ["Гнучкий OLED", "У Galaxy Fold гнучкий екран розгортався вздовж шарніра: з кишенькового телефона виходив невеликий планшет."],
    en: ["Foldable OLED", "The Galaxy Fold unfolded an OLED panel along a hinge, turning a pocket-sized handset into a small tablet."],
    slug: 'samsung-galaxy-fold',
  },
  2020: {
    uk: ["Скло, що згинається навпіл", "У Galaxy Z Flip під гнучкою поверхнею дисплея з’явився шар надтонкого скла. Шарнір тримав екран напіввідкритим — телефон можна було поставити на стіл, навести камеру й зняти себе без штатива."],
    en: ["Glass that folds in half", "The Galaxy Z Flip incorporated ultra-thin glass beneath the flexible display surface. Its hinge held the screen partly open, so you could set the phone on a table and frame a hands-free shot."],
    slug: 'samsung-galaxy-z-flip',
  },
  2021: {
    uk: ["Переклад листування на самому телефоні", "На Pixel 6 функція Live Translate розпізнавала іншу мову в чаті й показувала переклад прямо в розмові. Для підтримуваних мов обробка відбувалася на телефоні завдяки чипу Tensor, тож повідомлення залишалося на пристрої."],
    en: ["On-device translation in chats", "On the Pixel 6, Live Translate detected another language in a chat and showed the translation inside the conversation. For supported languages, Tensor handled translation on the phone, keeping the message on the device."],
    slug: 'google-pixel-6',
  },
  2022: {
    uk: ["Сигнал SOS через супутник", "Поза зоною мобільної мережі й Wi-Fi власник iPhone 14 міг відповісти на кілька запитань і спрямувати телефон на супутник, щоб передати рятувальникам координати та коротке повідомлення. У листопаді сервіс запрацював у США й Канаді."],
    en: ["Emergency messages by satellite", "Beyond cellular and Wi-Fi coverage, an iPhone 14 owner could answer a few questions and point the phone at a satellite to send rescuers their location and a short message. The service launched in the US and Canada in November."],
    slug: 'apple-iphone-14',
  },
  2023: {
    uk: ["Довша підтримка ПЗ", "Для Pixel 8 Google оголосив сім років оновлень. Термін підтримки став помітною характеристикою телефона при купівлі."],
    en: ["Longer software support", "Google promised seven years of updates for the Pixel 8, giving buyers a clear support lifetime to weigh alongside the hardware."],
    slug: 'google-pixel-8',
  },
  2024: {
    uk: ["Екран із двома згинами", "Huawei Mate XT отримав два шарніри. Один дисплей можна було розгорнути на одну, дві або три секції."],
    en: ["Double-folding screens", "Two hinges on the Huawei Mate XT let the same display open across one, two or three sections."],
    slug: 'huawei-mate-xt',
  },
  2025: {
    uk: ["Ремонтопридатність на етикетці", "З червня нові моделі смартфонів на ринку ЄС отримують етикетку з класом ремонтопридатності. У Fairphone шостого покоління це легко уявити на практиці — власник може самостійно замінити 12 деталей, серед них акумулятор, дисплей і порт USB-C."],
    en: ["Repairability on the label", "From June, new smartphone models entering the EU market carried a label showing their repairability class. The sixth-generation Fairphone illustrates what repair means in practice. Owners can replace 12 parts themselves, including the battery, display and USB-C port."],
    slug: 'fairphone-gen-6',
  },
  2026: {
    uk: ["Зашифровані повідомлення між Android та iPhone", "У травні почалося бета-впровадження наскрізного шифрування RCS між Google Messages на Android та iPhone з iOS 26.5. У підтримуваних операторів повідомлення в такому чаті могли прочитати лише його учасники. Galaxy S26 Ultra показує сторону Android."],
    en: ["Encrypted messages between Android and iPhone", "In May, end-to-end encryption began rolling out in beta for RCS chats between Google Messages on Android and iPhones running iOS 26.5. With supported carriers, only the participants could read messages in an encrypted chat. The Galaxy S26 Ultra illustrates the Android side."],
    slug: 'samsung-galaxy-s26-ultra',
  },
};
