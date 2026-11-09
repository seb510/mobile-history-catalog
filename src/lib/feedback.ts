import type { Locale } from './locales';

export const FEEDBACK_COPY = {
  uk: {
    open:'Допомогти архіву', title:'Зробімо архів кращим', intro:'Запропонуй телефон, розкажи про помилку або поділися ідеєю.', close:'Закрити форму',
    types:['Додати телефон','Виправити дані','Повідомити про баг','Запропонувати покращення'], type:'Тип звернення', brand:'Бренд', model:'Модель',
    searchBrand:'Знайди або введи бренд', searchModel:'Знайди або введи модель', suggestions:"Підказки без наявних моделей. Можна ввести власну.",
    message:"Опис звернення", placeholder:"Опиши помилку, виправлення або ідею (щонайменше 10 символів).", privacy:"Звернення й адреса сторінки надходять власнику через Telegram.",
    policy:'Політика приватності', send:'Надіслати пропозицію', sending:'Надсилаємо…', success:'Дякуємо! Пропозицію передано власнику архіву.', error:'Не вдалося надіслати. Текст збережено у відкритій формі — спробуй ще раз.', unavailable:'Надсилання ще не підключене. Можна написати на sebistian@ukr.net.', rate:'Забагато звернень. Спробуй трохи пізніше.', exists:'Цей телефон уже є в архіві. Перевір назву або обери «Виправити дані».', page:'Поточна сторінка додається автоматично без параметрів URL.',
    comment:"Коментар (необов’язково)",
    phonePlaceholder:"Чим цікавий цей телефон?",
    textOnly:"Лише звичайний текст — без HTML, скриптів та обробників подій.",
    messageRequired:"Опиши звернення щонайменше 10 символами.",
    commentLimit:"Коментар до телефона — до 600 символів.",
  },
  ru: {
    open:'Помочь архиву', title:'Сделаем архив лучше', intro:'Предложи телефон, сообщи об ошибке или поделись идеей.', close:'Закрыть форму',
    types:['Добавить телефон','Исправить данные','Сообщить о баге','Предложить улучшение'], type:'Тип обращения', brand:'Бренд', model:'Модель',
    searchBrand:'Найди или введи бренд', searchModel:'Найди или введи модель', suggestions:"Подсказки без имеющихся моделей. Можно ввести свою.",
    message:"Описание обращения", placeholder:"Опиши ошибку, исправление или идею (минимум 10 символов).", privacy:"Обращение и адрес страницы поступают владельцу через Telegram.",
    policy:'Политика приватности', send:'Отправить предложение', sending:'Отправляем…', success:'Спасибо! Предложение передано владельцу архива.', error:'Не удалось отправить. Текст остался в открытой форме — попробуй ещё раз.', unavailable:'Отправка ещё не подключена. Можно написать на sebistian@ukr.net.', rate:'Слишком много обращений. Попробуй позже.', exists:'Этот телефон уже есть в архиве. Проверь название или выбери «Исправить данные».', page:'Текущая страница добавляется автоматически без параметров URL.',
    comment:"Комментарий (необязательно)",
    phonePlaceholder:"Чем интересен этот телефон?",
    textOnly:"Только обычный текст — без HTML, скриптов и обработчиков событий.",
    messageRequired:"Опиши обращение минимум 10 символами.",
    commentLimit:"Комментарий к телефону — до 600 символов.",
  },
  en: {
    open:'Help the archive', title:'Help make the archive better', intro:'Suggest a phone, report an error or share an idea.', close:'Close form',
    types:['Suggest a phone','Correct information','Report a bug','Suggest an improvement'], type:'Request type', brand:'Brand', model:'Model',
    searchBrand:'Find or enter a brand', searchModel:'Find or enter a model', suggestions:"Suggestions exclude existing models. You can enter another.",
    message:"Request description", placeholder:"Describe the bug, correction or idea (at least 10 characters).", privacy:"Your request and this page’s address reach the owner through Telegram.",
    policy:'Privacy policy', send:'Send suggestion', sending:'Sending…', success:'Thank you! Your suggestion was delivered to the archive owner.', error:'Could not send. Your text remains in the open form — please try again.', unavailable:'Sending is not connected yet. You can email sebistian@ukr.net.', rate:'Too many requests. Please try again later.', exists:'This phone is already in the archive. Check the name or choose “Correct information”.', page:'The current page is included automatically, without URL parameters.',
    comment:"Comment (optional)",
    phonePlaceholder:"What makes this phone interesting?",
    textOnly:"Plain text only — no HTML, scripts or event handlers.",
    messageRequired:"Describe your request in at least 10 characters.",
    commentLimit:"Phone comments are limited to 600 characters.",
  },
} satisfies Record<Locale, object>;

// A discovery aid, not a manufacturer-wide database. No specifications or release claims.
export const SUGGESTED_MODELS: Record<string, string[]> = {
  Nokia:['3510i','3650','3660','5100','5140i','6100','6230i','6600','6630','6700 classic','7200','7500 Prism','7600','N70','N72','N80','N85','N86 8MP','E51','E65','E71','E90 Communicator'],
  'Sony Ericsson':['T610','T630','K500i','K700i','K810i','W550i','W610i','W660i','W880i','W910i','Z600','Z610i','S500i','P900','P910i'],
  Siemens:['S55','SL55','M55','MC60','C65','S65','M75','SL75'],
  Motorola:['V70','V80','V600','A1200','E398','SLVR L7'],
  Samsung:['SGH-E700','SGH-D600','SGH-D900','SGH-X820','SGH-P300'],
  LG:['KG800 Chocolate','KE970 Shine','KF600','KC910 Renoir'],
  HTC:['Touch Diamond','Touch Pro','HD2'], Alcatel:['One Touch 511','One Touch 735'],
  Apple:[], Google:[], Huawei:[],
};

export const phoneIdentity = (brand: string, model: string) =>
  `${brand} ${model}`.normalize('NFKC').toLocaleLowerCase('en').replace(/[^\p{L}\p{N}]/gu, '');
