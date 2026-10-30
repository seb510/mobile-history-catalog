import type { Locale } from './locales';

export const searchCopy = {
  uk: {
    '/': ['Ретро-телефони з характером: дизайн та історії', 'Кнопкові Nokia, Siemens, Motorola й Sony Ericsson: розкладачки, слайдери, незвичні клавіатури та музичні телефони. Фото, історії дизайну й характеристики.'],
    '/catalog/': ['Каталог ретро-телефонів і знакових моделей', 'Досліджуйте телефони з характером: незвичний дизайн, кнопки, розкладачки й слайдери. Фото та характеристики з пошуком за брендом, роком і моделлю.'],
    '/brands/': ['Бренди мобільних телефонів: історія та моделі', 'Історії Nokia, Siemens, Motorola, Samsung, Apple та інших виробників. Знакові телефони кожного бренду, фотографії й характеристики.'],
    '/compare/': ['Порівняння телефонів різних поколінь', 'Порівняйте два телефони за екраном, пам’яттю, камерою, акумулятором і зв’язком. Від кнопкових Nokia та Siemens до сучасних смартфонів.'],
    '/about/': ['Про проєкт і джерела даних', 'Як створюється Мобільна Історія: критерії відбору знакових телефонів, перевірка характеристик, джерела даних і ліцензії фотографій.'],
    specs: 'характеристики', brand: 'історія бренду та знакові телефони',
  },
  ru: {
    '/': ['Ретро-телефоны с характером: дизайн и истории', 'Кнопочные Nokia, Siemens, Motorola и Sony Ericsson: раскладушки, слайдеры, необычные клавиатуры и музыкальные телефоны. Фото, история дизайна и характеристики.'],
    '/catalog/': ['Каталог ретро-телефонов и знаковых моделей', 'Исследуйте телефоны с характером: необычный дизайн, кнопки, раскладушки и слайдеры. Фото и характеристики с поиском по бренду, году и модели.'],
    '/brands/': ['Бренды мобильных телефонов: история и модели', 'Истории Nokia, Siemens, Motorola, Samsung, Apple и других производителей. Знаковые телефоны каждого бренда, фотографии и характеристики.'],
    '/compare/': ['Сравнение телефонов разных поколений', 'Сравните два телефона по экрану, памяти, камерам, аккумулятору и связи. От кнопочных Nokia и Siemens до современных смартфонов.'],
    '/about/': ['О проекте и источниках данных', 'Как создаётся Мобильная История: отбор знаковых телефонов, проверка характеристик, источники данных и лицензии фотографий.'],
    specs: 'характеристики', brand: 'история бренда и знаковые телефоны',
  },
  en: {
    '/': ['Retro phones with character: design and stories', 'Explore Nokia, Siemens, Motorola and Sony Ericsson classics: clamshells, sliders, unusual keypads and music phones. Photos, design stories and specifications.'],
    '/catalog/': ['Retro phones and landmark models catalogue', 'Discover phones with character: distinctive design, physical buttons, clamshells and sliders. Browse photos and specifications by brand, year or model.'],
    '/brands/': ['Mobile phone brands: history and iconic models', 'Explore Nokia, Siemens, Motorola, Samsung, Apple and other phone makers through their histories, landmark models, photos and specifications.'],
    '/compare/': ['Compare mobile phones across generations', 'Compare two phones side by side: displays, memory, cameras, batteries and connectivity. From classic Nokia and Siemens handsets to modern smartphones.'],
    '/about/': ['About the project and our sources', 'How Mobile History is curated: landmark phone selection, specification checks, data sources and photo licensing.'],
    specs: 'specifications', brand: 'brand history and landmark phones',
  },
} as const satisfies Record<Locale, unknown>;
