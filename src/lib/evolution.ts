import type { CollectionEntry } from 'astro:content';
import type { Locale } from './locales';

export const EVOLUTION_HOME = '/#evolution';

// Preferred models for the years beyond the individually written scenes below.
export const evolutionHighlights = [
  'motorola-startac-70', 'nokia-8810', 'ericsson-t28s', 'siemens-s10', 'nokia-5110', 'nokia-3310', 'siemens-sl45i', 'siemens-s55', 'nokia-n93',
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
    slug: 'motorola-startac-70', copy: {
      uk: ['Розмова з розкритою кришкою', 'У кишені StarTAC лежав складеним. Для розмови його розкривали й підносили динамік у кришці до вуха.'],
      ru: ['Разговор с открытой крышкой', 'В кармане StarTAC лежал сложенным. Для разговора его раскрывали и подносили динамик в крышке к уху.'],
      en: ['Flip it open to talk', 'The StarTAC folded shut in your pocket. To talk, you opened it and held the earpiece in the lid to your ear.'],
    },
  },
  {
    slug: 'nokia-5110', copy: {
      uk: ['Змінні панелі Xpress-on', 'Набрид колір корпуса? Передню панель можна було зняти й поставити іншу.'],
      ru: ['Сменные панели Xpress-on', 'Надоел цвет корпуса? Переднюю панель можно было снять и поставить другую.'],
      en: ['A colour you could change', 'When you fancied a different colour, you could unclip the front cover and snap another one into place.'],
    },
  },
  {
    slug: 'nokia-3210', copy: {
      uk: ['SMS однією рукою', 'З T9 для кожної літери вистачало одного натискання. Телефон пропонував слово, а ти вибирав потрібне.'],
      ru: ['SMS одной рукой', 'С T9 для каждой буквы хватало одного нажатия. Телефон предлагал слово, а ты выбирал нужное.'],
      en: ['One-handed texting', 'With T9, you pressed each letter key once. The phone suggested a word and you picked the one you meant.'],
    },
  },
  {
    slug: 'nokia-3310', copy: {
      uk: ['Змійка на клавіатурі', 'У черзі можна було відкрити Snake II і клавішами скеровувати змійку до їжі. З кожним шматочком вона довшала.'],
      ru: ['Змейка на клавиатуре', 'В очереди можно было открыть Snake II и клавишами направлять змейку к еде. С каждым кусочком она становилась длиннее.'],
      en: ['A game while you waited', 'You could open Snake II while waiting in line. You steered with the keypad, and every bite made the snake longer.'],
    },
  },
  {
    slug: 'siemens-sl45i', copy: {
      uk: ['Музика зі змінної карти', 'На карту MMC записували MP3, вставляли її в телефон і слухали власну добірку в навушниках.'],
      ru: ['Музыка со сменной карты', 'На карту MMC записывали MP3, вставляли её в телефон и слушали свою подборку в наушниках.'],
      en: ['Your own songs on a card', 'You copied MP3s onto an MMC card, slipped it into the phone and listened to your own mix on headphones.'],
    },
  },
  {
    slug: 'siemens-s55', copy: {
      uk: ['Камера, яку приєднували', 'Щоб зробити фото, до нижнього роз’єму S55 під’єднували модуль QuickPic. Після зйомки його можна було зняти.'],
      ru: ['Съёмная камера', 'Чтобы сделать фото, к нижнему разъёму S55 подключали модуль QuickPic. После съёмки его можно было снять.'],
      en: ['A camera you plugged in', 'To take a photo, you plugged the QuickPic camera into the bottom of the S55. When you finished, you could take it off.'],
    },
  },
  {
    slug: 'sony-ericsson-t610', copy: {
      uk: ['Контакт через Bluetooth', 'Номер з адресної книги можна було надіслати на телефон друга поруч. Контакт з’являвся в нього без ручного набору цифр.'],
      ru: ['Контакт по Bluetooth', 'Номер из адресной книги можно было отправить на телефон друга рядом. Контакт появлялся у него без ручного ввода цифр.'],
      en: ['A contact over Bluetooth', 'You could send a number from your address book to a friend’s phone nearby, saving them the trouble of typing it in.'],
    },
  },
  {
    slug: 'motorola-razr-v3', copy: {
      uk: ['Пласкі металеві клавіші', 'Під кришкою RAZR пальці намацували тонкі рельєфні лінії, що розділяли цифри на металевій клавіатурі.'],
      ru: ['Плоские металлические клавиши', 'Под крышкой RAZR пальцы нащупывали тонкие рельефные линии между цифрами на металлической клавиатуре.'],
      en: ['A flat metal keypad', 'Flip the RAZR open and you could feel the thin ridges that separated the numbers on its metal keypad.'],
    },
  },
  {
    slug: 'sony-ericsson-w800i', copy: {
      uk: ['Одна клавіша для музики', 'Помаранчева клавіша Walkman відкривала плеєр. Улюблений трек із карти пам’яті можна було знайти просто дорогою.'],
      ru: ['Одна клавиша для музыки', 'Оранжевая клавиша Walkman открывала плеер. Любимый трек с карты памяти можно было найти прямо по дороге.'],
      en: ['One key for music', 'The orange Walkman key opened the player, putting the songs on your memory card within reach on the way home.'],
    },
  },
  {
    slug: 'nokia-n93', copy: {
      uk: ['У руці як відеокамера', 'Для зйомки екран повертали вбік і тримали корпус однією рукою. На екрані було видно кадр, поки об’єктив дивився вперед.'],
      ru: ['В руке как видеокамера', 'Для съёмки экран поворачивали вбок и держали корпус одной рукой. На экране был виден кадр, пока объектив смотрел вперёд.'],
      en: ['A camcorder grip', 'You swivelled the screen sideways and held the body in one hand. You could frame the shot while the lens pointed ahead.'],
    },
  },
  {
    slug: 'nokia-n95', copy: {
      uk: ['Слайдер у двох напрямках', 'Зсунь екран угору — відкриються цифри для дзвінка. Зсунь униз — з’являться клавіші плеєра, як на фото.'],
      ru: ['Слайдер в двух направлениях', 'Сдвинь экран вверх — откроются цифры для звонка. Сдвинь вниз — появятся клавиши плеера, как на фото.'],
      en: ['A slider that went both ways', 'Slide the screen up to dial a number. Slide it down and the playback keys appear, as in the photo.'],
    },
  },
  {
    slug: 'htc-dream', copy: {
      uk: ['Клавіатура під екраном', 'Екран зсувався вбік, відкриваючи ряди клавіш. Лист можна було набирати двома великими пальцями й бачити весь текст над ними.'],
      ru: ['Клавиатура под экраном', 'Экран сдвигался в сторону, открывая ряды клавиш. Письмо можно было набирать двумя большими пальцами и видеть весь текст над ними.'],
      en: ['A keyboard under the screen', 'Slide the screen aside and rows of keys appear. You could type an email with both thumbs and still see the whole message above them.'],
    },
  },
  {
    slug: 'nokia-n86', copy: {
      uk: ['Шторка об’єктива', 'Щоб підготувати камеру до зйомки, достатньо було відсунути шторку на спинці. Після кадру об’єктив знову ховався під нею.'],
      ru: ['Шторка объектива', 'Чтобы подготовить камеру к съёмке, достаточно было сдвинуть шторку на спинке. После кадра объектив снова прятался под ней.'],
      en: ['Slide the lens cover', 'Sliding the cover on the back exposed the lens for a shot. You could slide it shut again before pocketing the phone.'],
    },
  },
  {
    slug: 'samsung-galaxy-s', copy: {
      uk: ['Відеодзвінок з передньої камери', 'Під час відеодзвінка можна було тримати Galaxy S екраном до себе: камера над дисплеєм показувала твоє обличчя співрозмовнику.'],
      ru: ['Видеозвонок с передней камеры', 'Во время видеозвонка Galaxy S можно было держать экраном к себе: камера над дисплеем показывала собеседнику твоё лицо.'],
      en: ['Face-to-face calls', 'You held the Galaxy S with the screen facing you. The camera above the display let the person on the other end see your face.'],
    },
  },
  {
    slug: 'nokia-700', copy: {
      uk: ['Музика одним дотиком', 'Піднеси Nokia 700 до сумісної колонки з NFC — дотик запускає сполучення через Bluetooth.'],
      ru: ['Музыка одним касанием', 'Поднеси Nokia 700 к совместимой колонке с NFC — касание запускает сопряжение по Bluetooth.'],
      en: ['Tap to pair a speaker', 'Touch the Nokia 700 to a compatible NFC speaker to start Bluetooth pairing.'],
    },
  },
  {
    slug: 'samsung-galaxy-s3', copy: {
      uk: ['Екран чекає, поки дочитаєш', 'З увімкненим Smart Stay передня камера перевіряла, чи ти дивишся на екран. Сторінка залишалася підсвіченою під час читання.'],
      ru: ['Экран ждёт, пока дочитаешь', 'С включённым Smart Stay передняя камера проверяла, смотришь ли ты на экран. Страница оставалась подсвеченной, пока ты читал.'],
      en: ['A screen that stayed awake', 'With Smart Stay on, the front camera checked whether you were looking at the screen. The page stayed lit as you read.'],
    },
  },
  {
    slug: 'sony-xperia-z', copy: {
      uk: ['Кнопка під пальцем', 'На гладкій бічній грані виступала кругла клавіша живлення. Її можна було знайти на дотик і ввімкнути екран.'],
      ru: ['Кнопка под пальцем', 'На гладкой боковой грани выступала круглая клавиша питания. Её можно было найти на ощупь и включить экран.'],
      en: ['A button you could feel', 'The round power button stood proud of the flat edge. You could find it by touch to wake the screen.'],
    },
  },
  {
    slug: 'nokia-lumia-630', copy: {
      uk: ['Сповіщення одним рухом', 'Проведи від верхнього краю вниз — відкриється Центр дій Windows Phone 8.1. Тут можна було переглянути пропущені сповіщення.'],
      ru: ['Уведомления одним движением', 'Проведи от верхнего края вниз — откроется Центр действий Windows Phone 8.1. Здесь можно было посмотреть пропущенные уведомления.'],
      en: ['Pull down your notifications', 'A swipe down from the top opened Action Center in Windows Phone 8.1, where you could catch up on missed notifications.'],
    },
  },
  {
    slug: 'microsoft-lumia-950', copy: {
      uk: ['Окрема кнопка для знімка', 'Бічна клавіша камери мала два положення. Натисни до половини, щоб сфокусуватися, а потім дотисни для знімка.'],
      ru: ['Отдельная кнопка для снимка', 'У боковой клавиши камеры было два положения. Нажми наполовину, чтобы сфокусироваться, затем дожми для снимка.'],
      en: ['A two-stage shutter button', 'Press the camera key halfway to focus. Press it the rest of the way to take the shot.'],
    },
  },
  {
    slug: 'google-pixel', copy: {
      uk: ['Розблокування зі спинки', 'Круглий сканер відбитка розмістили під камерою. Коли брав Pixel у руку, можна було розблокувати його вказівним пальцем.'],
      ru: ['Разблокировка с задней панели', 'Круглый сканер отпечатка разместили под камерой. Когда брал Pixel в руку, можно было разблокировать его указательным пальцем.'],
      en: ['Unlock from the back', 'The round fingerprint reader sat below the camera. As you picked up the Pixel, your index finger could reach it to unlock the phone.'],
    },
  },
  {
    slug: 'apple-iphone-x', copy: {
      uk: ['Додому одним жестом', 'На передній панелі зникла кнопка «Додому». Щоб повернутися з програми на головний екран, проведи вгору від нижнього краю.'],
      ru: ['Домой одним жестом', 'С передней панели исчезла кнопка «Домой». Чтобы вернуться из приложения на главный экран, проведи вверх от нижнего края.'],
      en: ['Swipe to go home', 'The Home button disappeared from the front of the iPhone. To leave an app, you swiped up from the bottom edge.'],
    },
  },
  {
    slug: 'huawei-p-smart-plus', copy: {
      uk: ['Селфі з м’яким тлом', 'Під час селфі друга фронтальна камера допомагала відділити обличчя від фону. У портретному режимі тло розмивалося.'],
      ru: ['Селфи с мягким фоном', 'Во время селфи вторая фронтальная камера помогала отделить лицо от фона. В портретном режиме фон размывался.'],
      en: ['A softer background for selfies', 'The second front camera helped judge the distance to your face. Portrait mode used that depth information to blur the background.'],
    },
  },
  {
    slug: 'nokia-9-pureview', copy: {
      uk: ['П’ять камер для одного фото', 'Натискаєш кнопку спуску один раз, а знімають усі п’ять камер на спинці. Телефон складає їхні кадри в одну фотографію.'],
      ru: ['Пять камер для одного фото', 'Нажимаешь кнопку спуска один раз, а снимают все пять камер на задней панели. Телефон объединяет кадры в одну фотографию.'],
      en: ['Five cameras for one photo', 'One press of the shutter fired all five cameras on the back. The phone combined their images into a single photograph.'],
    },
  },
  {
    slug: 'apple-iphone-12', copy: {
      uk: ['Зарядка на магнітах', 'Підносиш зарядний диск MagSafe до спинки iPhone. Магніти притягують його й вирівнюють котушки для бездротової зарядки.'],
      ru: ['Зарядка на магнитах', 'Подносишь зарядный диск MagSafe к задней панели iPhone. Магниты притягивают его и совмещают катушки для беспроводной зарядки.'],
      en: ['A charger that snaps into place', 'Bring the MagSafe puck to the back of the iPhone. Magnets pull it into place and line up the coils for wireless charging.'],
    },
  },
  {
    slug: 'samsung-galaxy-z-fold3', copy: {
      uk: ['Карта й чат поруч', 'Розкрий Fold3 як книжку. На внутрішньому екрані можна тримати карту й чат поруч, щоб звірити адресу під час переписки.'],
      ru: ['Карта и чат рядом', 'Раскрой Fold3 как книгу. На внутреннем экране можно держать карту и чат рядом и сверять адрес во время переписки.'],
      en: ['A map beside your chat', 'Open the Fold3 like a book. On the inner screen you could keep a map beside your messages and check an address while chatting.'],
    },
  },
  {
    slug: 'apple-iphone-se-2022', copy: {
      uk: ['Вхід одним дотиком', 'Під екраном SE залишилася кругла кнопка «Додому». Прикладаєш до неї зареєстрований палець, і Touch ID розблоковує телефон.'],
      ru: ['Вход одним касанием', 'Под экраном SE осталась круглая кнопка «Домой». Прикладываешь к ней зарегистрированный палец, и Touch ID разблокирует телефон.'],
      en: ['Unlock with the Home button', 'The SE kept the round Home button below the screen. Rest an enrolled finger on it and Touch ID unlocks the phone.'],
    },
  },
  {
    slug: 'google-pixel-8', copy: {
      uk: ['Якщо хтось кліпнув', 'Зроби кілька групових фото поспіль. У Google Фото функція Best Take дає вибрати для кожної людини вираз обличчя із сусіднього кадру.'],
      ru: ['Если кто-то моргнул', 'Сделай несколько групповых фото подряд. В Google Фото функция Best Take позволяет выбрать для каждого человека выражение лица из соседнего кадра.'],
      en: ['When someone blinks', 'Take a few group shots in quick succession. In Google Photos, Best Take lets you pick each person’s expression from another shot in the series.'],
    },
  },
  {
    slug: 'huawei-mate-xt', copy: {
      uk: ['Три ширини екрана', 'Для короткого повідомлення вистачало складеного Mate XT. Розгорни одну секцію для ширшої сторінки, а потім другу — для документа на весь екран.'],
      ru: ['Три ширины экрана', 'Для короткого сообщения хватало сложенного Mate XT. Разверни одну секцию для более широкой страницы, затем вторую — для документа во весь экран.'],
      en: ['Choose how wide to open it', 'Keep the Mate XT folded for a quick message. Unfold one section for a wider page, then the other to read a document at full width.'],
    },
  },
  {
    slug: 'apple-iphone-17', copy: {
      uk: ['Групове селфі однією рукою', 'Тримай iPhone вертикально. Фронтальна камера Center Stage дозволяє зробити горизонтальне селфі, щоб у кадр помістилися друзі.'],
      ru: ['Групповое селфи одной рукой', 'Держи iPhone вертикально. Фронтальная камера Center Stage позволяет сделать горизонтальное селфи, чтобы в кадр поместились друзья.'],
      en: ['A wide selfie without turning the phone', 'Hold the iPhone upright. The Center Stage front camera can take a landscape selfie so your friends fit in the frame.'],
    },
  },
  {
    slug: 'samsung-galaxy-z-fold8-ultra', copy: {
      uk: ['Від знімка до великого екрана', 'Знімай зі складеним Fold8 Ultra, дивлячись на зовнішній екран. Щоб роздивитися деталі фото, розкрий телефон як книжку.'],
      ru: ['От снимка к большому экрану', 'Снимай сложенным Fold8 Ultra, глядя на внешний экран. Чтобы рассмотреть детали фотографии, раскрой телефон как книгу.'],
      en: ['Open up to inspect the shot', 'Frame a shot on the cover screen with the Fold8 Ultra folded. Open it like a book to inspect the details on the larger display.'],
    },
  },
];
