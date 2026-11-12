// Keep aligned with the actual browser storage and hosting configuration.
export const PRIVACY_COPY = {
  "uk": {
    "privacy": "Політика приватності",
    "cookies": "Cookies і локальне зберігання",
    "settings": "Налаштування приватності",
    "title": "Твій вибір зберігання",
    "intro": "Без реклами й аналітичних трекерів. Дозволиш запам’ятовувати тему та стиль оформлення між відвідуваннями? «Мої телефони» зберігає моделі, які ти додаєш.",
    "accept": "Дозволити збереження оформлення",
    "reject": "Не зберігати оформлення",
    "updated": "Оновлено 12 листопада 2026",
    "sections": [
      [
        "Вхід через Google і синхронізація",
        "Вхід відкриває Google лише за твоєю дією. Для синхронізації сайт зберігає в Cloudflare D1 хеш ідентифікатора Google, слаги телефонів, періоди користування й записи про видалення. Сайт не запитує ім’я чи email. Перший вхід може перенести локальні записи до акаунта. Вихід завершує сеанс, а локальна копія лишається у браузері. Для видалення серверних даних напиши власнику."
      ],
      [
        "Власник і контакт",
        "Власник проєкту та відповідальний за обробку даних — Sebistiian Mykola. Звернення щодо приватності: sebistian@ukr.net."
      ],
      [
        "Що обробляє сайт",
        "Це статичний некомерційний архів без реклами та аналітичних трекерів. Пошук і вибір моделей обробляються у браузері; обрані моделі порівняння записуються в URL і потрапляють у посилання, яким ти ділишся."
      ],
      [
        "Пропозиції та повідомлення про помилки",
        "Форма «Допомогти архіву» надсилає лише після натискання кнопки текст звернення, тип, бренд/модель для пропозиції телефона та адресу поточної сторінки без параметрів власнику через Telegram Bot API. Обробка проходить через Cloudflare Worker. IP-адреса використовується для обмеження частоти запитів у вигляді хешованого ключа; до повідомлення Telegram вона не додається. Форма не записує чернетки у localStorage. Повідомлення залишаються в Telegram до опрацювання та видалення власником; для видалення звернися на sebistian@ukr.net. Cloudflare і Telegram обробляють дані за власними правилами. Не надсилай паролів або чутливих персональних даних."
      ],
      [
        "Налаштування у браузері",
        "За згодою сайт запам’ятовує тему та стиль оформлення. «Мої телефони» зберігає позначені моделі та збережені тобою роки користування після твоєї прямої дії; без входу дані лишаються в браузері. Запис про вибір приватності зберігається 180 днів. Докладний перелік наведено на сторінці cookies."
      ],
      [
        "Зовнішні сервіси, фото й посилання",
        "Поточна погода для Хмельницького завантажується з Open-Meteo; сервіс отримує IP-адресу й технічні дані браузера, але координати міста задані на сайті й геолокація не запитується. Частина фотографій завантажується з Wikimedia та інших джерел, указаних у кредитах: їхні сервери також отримують IP-адресу й технічні дані браузера. Локальні фото не створюють такого запиту до музею чи Commons. Перехід за зовнішнім посиланням відкриває інший сайт із власною політикою. Відео YouTube підключається лише після окремого дозволу в блоці відео через youtube-nocookie.com. До цього плеєр і його прев’ю не завантажуються. Дозвіл не зберігається між відвідуваннями; кнопка «Вимкнути плеєр» видаляє його зі сторінки й припиняє відтворення, але не видаляє дані, вже отримані Google."
      ],
      [
        "Технічні запити та підстави",
        "Для доставки сторінок сервер отримує IP-адресу, URL та технічні заголовки. Надання запитаної сторінки й безпека ґрунтуються на законному інтересі; необов’язкове збереження оформлення — на згоді. «Мої телефони» працює локально, із синхронізацією після входу. Налаштування журналів та строки їх зберігання залежать від остаточного хостингу й мають бути уточнені перед публікацією."
      ],
      [
        "Твої права",
        "Можна відкликати згоду у футері, прибрати моделі з «Моїх телефонів» повторним натисканням позначки або очистити дані сайту у браузері. Для запиту доступу, виправлення, видалення, обмеження, перенесення чи заперечення щодо даних, які обробляє власник, напиши на email вище. Можна звернутися зі скаргою до наглядового органу із захисту даних у своїй країні. Сайт не ухвалює автоматизованих рішень і не продає персональні дані."
      ]
    ],
    "cookieIntro": "Для входу через Google сайт використовує технічні HTTP-cookies. Плеєр YouTube після окремого дозволу може використовувати власні cookies або сховище за правилами Google. Для інших налаштувань сайт використовує localStorage цього браузера.",
    "rows": [
      [
        "__Host-collection-login / __Host-collection-session",
        "Вхід через Google і синхронізація",
        "До 10 хвилин для входу, до 30 днів для сеансу",
        "Лише під час входу або активного сеансу"
      ],
      [
        "mobile-history:collection-sync",
        "Копія останнього стану синхронізації",
        "До заміни або очищення даних браузера",
        "Після входу через Google"
      ],
      [
        "mobile-history:privacy",
        "Твій вибір щодо теми, версія правил і час рішення",
        "180 днів; запис замінюється при зміні рішення",
        "Необхідний для запам’ятовування вибору приватності"
      ],
      [
        "theme",
        "Світла або темна тема",
        "До відкликання згоди чи очищення даних",
        "Лише після згоди"
      ],
      [
        "mobile-history:design",
        "Стиль: журнал або сучасний",
        "До відкликання згоди чи очищення даних",
        "Лише після згоди"
      ],
      [
        "mobile-history:favorites",
        "Старі слаги «Обраного» для окремого підтвердження володіння",
        "До видалення моделей чи очищення даних",
        "Старі збереження; не додаються автоматично до «Моїх телефонів»"
      ],
      [
        "mobile-history:owned-phones",
        "Слаги телефонів, якими ти користувався",
        "До видалення моделей чи очищення даних",
        "Після додавання телефона"
      ],
      [
        "mobile-history:ownership-periods",
        "Приблизні роки початку/завершення користування та позначка «досі» для вибраних телефонів",
        "До видалення періоду, моделі чи очищення даних браузера",
        "Лише після збереження періоду користувачем"
      ]
    ],
    "headers": [
      "Ключ",
      "Призначення",
      "Термін",
      "Умова"
    ],
    "manage": "Відмовитися або відкликати згоду можна без втрати доступу до каталогу. Тема та стиль працюють і без збереження. Відмова видаляє збережене оформлення, але не «Мої телефони». Зміна вибору діє для цього браузера; очищення даних скидає його. Нові аналітичні чи рекламні сервіси потребуватимуть окремого оновлення правил і механізму згоди."
  },
  "ru": {
    "privacy": "Политика конфиденциальности",
    "cookies": "Cookies и локальное хранение",
    "settings": "Настройки приватности",
    "title": "Твой выбор хранения",
    "intro": "Без рекламы и аналитических трекеров. Разрешить запоминать тему и стиль оформления между посещениями? «Мои телефоны» сохраняет модели, которые ты добавляешь.",
    "accept": "Разрешить сохранение оформления",
    "reject": "Не сохранять оформление",
    "updated": "Обновлено 12 ноября 2026",
    "sections": [
      [
        "Вход через Google и синхронизация",
        "Вход открывает Google только по твоему действию. Для синхронизации сайт хранит в Cloudflare D1 хеш идентификатора Google, слаги телефонов, периоды использования и записи об удалении. Сайт не запрашивает имя или email. При первом входе локальные записи могут перейти в аккаунт. Выход завершает сеанс, а локальная копия остаётся в браузере. Для удаления серверных данных напиши владельцу."
      ],
      [
        "Владелец и контакт",
        "Владелец проекта и ответственный за обработку данных — Sebistiian Mykola. Обращения по приватности: sebistian@ukr.net."
      ],
      [
        "Какие данные обрабатываются",
        "Это статический некоммерческий архив без рекламы и аналитических трекеров. Поиск и выбор моделей работают в браузере; модели сравнения записываются в URL и включаются в ссылку, которой ты делишься."
      ],
      [
        "Предложения и сообщения об ошибках",
        "Форма «Помочь архиву» только после нажатия кнопки отправляет владельцу через Telegram Bot API текст, тип обращения, бренд/модель для предложения телефона и адрес текущей страницы без параметров. Обработка проходит через Cloudflare Worker. IP-адрес используется для ограничения частоты запросов в виде хешированного ключа; в сообщение Telegram он не добавляется. Форма не записывает черновики в localStorage. Сообщения остаются в Telegram до обработки и удаления владельцем; для удаления обратись на sebistian@ukr.net. Cloudflare и Telegram обрабатывают данные по собственным правилам. Не отправляй пароли или чувствительные личные данные."
      ],
      [
        "Данные браузера",
        "Тема запоминается с согласия. «Мои телефоны» хранит отмеченные модели и сохранённые тобой годы использования после прямого действия; без входа данные остаются в браузере. Выбор приватности хранится 180 дней. Подробности — на странице cookies."
      ],
      [
        "Внешние сервисы, изображения и ссылки",
        "Текущая погода для Хмельницкого загружается из Open-Meteo; сервис получает IP-адрес и технические данные браузера, но координаты города заданы на сайте, геолокация не запрашивается. Часть фотографий загружается с Wikimedia и других источников, указанных в подписях: их серверы также получают IP-адрес и технические данные браузера. Локальные фото не создают запрос к музею или Commons. Внешняя ссылка открывает сайт с собственной политикой. Видео YouTube подключается только после отдельного разрешения в блоке видео через youtube-nocookie.com. До этого плеер и его превью не загружаются. Разрешение не сохраняется между посещениями; кнопка «Отключить плеер» удаляет его со страницы и прекращает воспроизведение, но не удаляет данные, уже полученные Google."
      ],
      [
        "Технические запросы и основания",
        "Для доставки страниц сервер получает IP-адрес, URL и технические заголовки. Доставка запрошенной страницы и безопасность основаны на законном интересе; необязательное сохранение оформления — на согласии. «Мои телефоны» — прямо запрошенная локальная функция. Настройки журналов и сроки хранения зависят от окончательного хостинга и должны быть уточнены перед публикацией."
      ],
      [
        "Твои права",
        "Согласие можно отозвать в футере, убрать модели из «Моих телефонов» повторным нажатием отметки или очистить данные сайта в браузере. Для доступа, исправления, удаления, ограничения, переноса или возражения в отношении данных, обрабатываемых владельцем, напиши на email выше. Можно подать жалобу в надзорный орган по защите данных своей страны. Сайт не принимает автоматизированных решений и не продаёт персональные данные."
      ]
    ],
    "cookieIntro": "Для входа через Google сайт использует технические HTTP-cookies. Плеер YouTube после отдельного разрешения может использовать собственные cookies или хранилище по правилам Google. Для остальных настроек сайт использует localStorage браузера.",
    "rows": [
      [
        "__Host-collection-login / __Host-collection-session",
        "Вход через Google и синхронизация",
        "До 10 минут для входа, до 30 дней для сеанса",
        "Только при входе или активном сеансе"
      ],
      [
        "mobile-history:collection-sync",
        "Копия последнего состояния синхронизации",
        "До замены или очистки данных браузера",
        "После входа через Google"
      ],
      [
        "mobile-history:privacy",
        "Выбор сохранения темы, версия правил и время решения",
        "180 дней; заменяется при изменении решения",
        "Нужен для запоминания выбора приватности"
      ],
      [
        "theme",
        "Светлая или тёмная тема",
        "До отзыва согласия или очистки данных",
        "Только после согласия"
      ],
      [
        "mobile-history:design",
        "Стиль: журнал или современный",
        "До отзыва согласия или очистки данных",
        "Только после согласия"
      ],
      [
        "mobile-history:favorites",
        "Старые слаги «Избранного» для отдельного подтверждения владения",
        "До удаления моделей или очистки данных",
        "Старые сохранения; не добавляются автоматически в «Мои телефоны»"
      ],
      [
        "mobile-history:owned-phones",
        "Слаги телефонов, которыми ты пользовался",
        "До удаления моделей или очистки данных",
        "После добавления телефона"
      ],
      [
        "mobile-history:ownership-periods",
        "Примерные годы начала/окончания использования и отметка «до сих пор» для выбранных телефонов",
        "До удаления периода, модели или очистки данных браузера",
        "Только после сохранения периода пользователем"
      ]
    ],
    "headers": [
      "Ключ",
      "Назначение",
      "Срок",
      "Условие"
    ],
    "manage": "Отказ или отзыв согласия не ограничивает доступ к каталогу. Тема и стиль работают без сохранения. Отказ удаляет сохранённое оформление, но не «Мои телефоны». Выбор относится к этому браузеру; очистка данных его сбрасывает. Новые аналитические или рекламные сервисы потребуют обновления правил и механизма согласия."
  },
  "en": {
    "privacy": "Privacy policy",
    "cookies": "Cookies and local storage",
    "settings": "Privacy settings",
    "title": "Your storage choice",
    "intro": "No advertising or analytics trackers. May we remember your theme and design style between visits? My phones stores the models you add.",
    "accept": "Allow appearance storage",
    "reject": "Do not store appearance",
    "updated": "Updated 12 November 2026",
    "sections": [
      [
        "Google sign-in and sync",
        "Google opens only when you choose to sign in. For sync, the site stores a hashed Google identifier, phone slugs, ownership periods and deletion records in Cloudflare D1. The site does not request your name or email. Signing in for the first time may import existing local records. Signing out ends the session and leaves a copy in this browser. Contact the owner to request deletion of server data."
      ],
      [
        "Owner and contact",
        "The project owner and data controller is Sebistiian Mykola. Privacy enquiries: sebistian@ukr.net."
      ],
      [
        "What the site processes",
        "This is a static noncommercial archive without advertising or analytics trackers. Search and model selection run in your browser. Comparison models are included in the URL and in any comparison link you share."
      ],
      [
        "Suggestions and bug reports",
        "Only when you press Send does the Help the archive form send the owner your message, request type, brand/model for phone suggestions and current page address without URL parameters through Telegram Bot API. A Cloudflare Worker handles delivery. The IP address is used as a hashed rate-limit key and is not included in the Telegram message. Drafts are not saved in localStorage. Messages remain in Telegram until the owner reviews and deletes them; contact sebistian@ukr.net to request deletion. Cloudflare and Telegram process data under their own policies. Do not send passwords or sensitive personal information."
      ],
      [
        "Browser preferences",
        "Theme and design-style storage require consent. My phones stores selected model slugs and any usage years you explicitly save. These details stay in the browser when signed out. Your privacy choice is stored for 180 days. See the cookies page for the inventory."
      ],
      [
        "External services, images and links",
        "Current weather for Khmelnytskyi is fetched from Open-Meteo; the service receives your IP address and browser technical information, but the city coordinates are fixed by the site and geolocation is not requested. Some photographs load from Wikimedia and other credited sources: their servers also receive your IP address and browser technical information. Locally hosted photos do not request the museum or Commons. External links open sites with their own privacy policies. YouTube videos load through youtube-nocookie.com only after separate permission in the video block. Before that, neither the player nor its thumbnail is requested. Permission is not saved between visits; Disable player removes it and stops playback but does not erase data already received by Google."
      ],
      [
        "Technical requests and legal bases",
        "To deliver pages, the server receives your IP address, URL and technical headers. Delivering requested content and security rely on legitimate interests; optional appearance storage relies on consent. My phones is an explicitly requested local function. Log settings and retention depend on the final hosting configuration and must be confirmed before publication."
      ],
      [
        "Your rights",
        "Withdraw consent in the footer, remove models from My phones by pressing their marks again, or clear site data in your browser. For access, rectification, erasure, restriction, portability or objections concerning data processed by the owner, use the email above. You may complain to your national data protection authority. The site makes no automated decisions and does not sell personal data."
      ]
    ],
    "cookieIntro": "The site uses technical HTTP cookies for Google sign-in. Once separately allowed, the YouTube player may use its own cookies or storage under Google’s policies. Other settings use this browser’s localStorage.",
    "rows": [
      [
        "__Host-collection-login / __Host-collection-session",
        "Google sign-in and sync",
        "Up to 10 minutes for sign-in, up to 30 days for the session",
        "Only during sign-in or an active session"
      ],
      [
        "mobile-history:collection-sync",
        "Copy of the last synced state",
        "Until replaced or browser data is cleared",
        "After Google sign-in"
      ],
      [
        "mobile-history:privacy",
        "Theme-storage choice, policy version and decision time",
        "180 days; replaced when your choice changes",
        "Needed to remember the privacy choice"
      ],
      [
        "theme",
        "Light or dark theme",
        "Until withdrawal or site-data deletion",
        "Only after consent"
      ],
      [
        "mobile-history:design",
        "Magazine or modern design style",
        "Until consent is withdrawn or site data cleared",
        "Only with consent"
      ],
      [
        "mobile-history:favorites",
        "Legacy Favorites slugs awaiting separate ownership confirmation",
        "Until removal or site-data deletion",
        "Legacy saves; not automatically added to My phones"
      ],
      [
        "mobile-history:owned-phones",
        "Slugs of phones you used to own",
        "Until models are removed or browser data is cleared",
        "After adding a phone"
      ],
      [
        "mobile-history:ownership-periods",
        "Approximate start/end years and still-using status for selected phones",
        "Until the period, phone or browser data is removed",
        "Only after the user saves a period"
      ]
    ],
    "headers": [
      "Key",
      "Purpose",
      "Retention",
      "Condition"
    ],
    "manage": "Rejecting or withdrawing consent does not restrict the catalog. Theme switching works without storage. Rejection deletes the saved appearance preferences, not My phones. The choice applies to this browser; clearing site data resets it. Adding analytics or advertising will require updated policies and a separate consent implementation."
  }
} as const;
