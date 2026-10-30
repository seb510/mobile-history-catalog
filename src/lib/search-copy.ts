import type { Locale } from './locales';

export const searchCopy = {
  uk: {
    '/': ['Історія мобільних телефонів від 1998 року', 'Еволюція мобільних телефонів: легендарні Nokia, Siemens, Motorola та сучасні смартфони. Фото, перевірені характеристики, історії брендів і порівняння поколінь.'],
    '/catalog/': ['Каталог легендарних телефонів і смартфонів', 'Телефони, що змінили мобільну історію з 1998 року: фото, характеристики та ключові інновації. Знайдіть модель за брендом, роком або назвою.'],
    '/brands/': ['Бренди мобільних телефонів: історія та моделі', 'Історії Nokia, Siemens, Motorola, Samsung, Apple та інших виробників. Знакові телефони кожного бренду, фотографії й характеристики.'],
    '/compare/': ['Порівняння телефонів різних поколінь', 'Порівняйте два телефони за екраном, пам’яттю, камерою, акумулятором і зв’язком. Від кнопкових Nokia та Siemens до сучасних смартфонів.'],
    '/about/': ['Про проєкт і джерела даних', 'Як створюється Мобільна Історія: критерії відбору знакових телефонів, перевірка характеристик, джерела даних і ліцензії фотографій.'],
    specs: 'характеристики', brand: 'історія бренду та знакові телефони',
  },
  ru: {
    '/': ['История мобильных телефонов с 1998 года', 'Эволюция мобильных телефонов: легендарные Nokia, Siemens, Motorola и современные смартфоны. Фото, проверенные характеристики, истории брендов и сравнение поколений.'],
    '/catalog/': ['Каталог легендарных телефонов и смартфонов', 'Телефоны, изменившие мобильную историю с 1998 года: фото, характеристики и ключевые инновации. Поиск по бренду, году и названию модели.'],
    '/brands/': ['Бренды мобильных телефонов: история и модели', 'Истории Nokia, Siemens, Motorola, Samsung, Apple и других производителей. Знаковые телефоны каждого бренда, фотографии и характеристики.'],
    '/compare/': ['Сравнение телефонов разных поколений', 'Сравните два телефона по экрану, памяти, камерам, аккумулятору и связи. От кнопочных Nokia и Siemens до современных смартфонов.'],
    '/about/': ['О проекте и источниках данных', 'Как создаётся Мобильная История: отбор знаковых телефонов, проверка характеристик, источники данных и лицензии фотографий.'],
    specs: 'характеристики', brand: 'история бренда и знаковые телефоны',
  },
  en: {
    '/': ['Mobile phone history since 1998', 'Explore the evolution of mobile phones, from iconic Nokia, Siemens and Motorola models to modern smartphones. Photos, sourced specifications, brand histories and comparisons.'],
    '/catalog/': ['Iconic mobile phones and smartphones catalogue', 'Discover phones that changed mobile history since 1998. Browse photos, specifications and key innovations by brand, year or model name.'],
    '/brands/': ['Mobile phone brands: history and iconic models', 'Explore Nokia, Siemens, Motorola, Samsung, Apple and other phone makers through their histories, landmark models, photos and specifications.'],
    '/compare/': ['Compare mobile phones across generations', 'Compare two phones side by side: displays, memory, cameras, batteries and connectivity. From classic Nokia and Siemens handsets to modern smartphones.'],
    '/about/': ['About the project and our sources', 'How Mobile History is curated: landmark phone selection, specification checks, data sources and photo licensing.'],
    specs: 'specifications', brand: 'brand history and landmark phones',
  },
} as const satisfies Record<Locale, unknown>;
