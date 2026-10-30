import type { Locale } from './locales';

export const PHONE_EDITORIAL_LABELS = {
  uk: { highlights: 'Чим запам’ятався', next: 'Продовжити історію', compare: 'Порівняти ці моделі' },
  ru: { highlights: 'Чем запомнился', next: 'Продолжить историю', compare: 'Сравнить эти модели' },
  en: { highlights: 'What made it memorable', next: 'Continue the story', compare: 'Compare these models' },
};

type Editorial = { points: [string, string, string]; next: string; note: string };
// Editorial observations distilled from the sources linked in each phone's history.
// These are curated reading routes, not an automatic similarity ranking.
export const PHONE_EDITORIAL: Record<string, Record<Locale, Editorial>> = {
  'motorola-razr-v3': {
    uk: { points: ['Металева розкладачка завтовшки 13,9 мм: тонкий профіль визначає весь силует.', 'Пласка металева клавіатура із синім підсвічуванням — головна деталь усередині.', 'Зовнішній дисплей дозволяє поглянути на телефон, не розкриваючи корпус.'], next: 'siemens-sl55', note: 'Інша відповідь на ідею телефона-аксесуара: компактний слайдер SL55 поруч із тонкою розкладачкою V3.' },
    ru: { points: ['Металлическая раскладушка толщиной 13,9 мм: тонкий профиль определяет силуэт.', 'Плоская металлическая клавиатура с синей подсветкой — главная деталь внутри.', 'Внешний дисплей позволяет взглянуть на телефон, не раскрывая корпус.'], next: 'siemens-sl55', note: 'Другой взгляд на телефон-аксессуар: компактный слайдер SL55 рядом с тонкой раскладушкой V3.' },
    en: { points: ['A metal clamshell just 13.9 mm thick: the slim profile defines its silhouette.', 'A flat metal keypad with blue illumination gives the interior its identity.', 'The outer display offers a glance at the phone without opening it.'], next: 'siemens-sl55', note: 'Another take on the phone as an accessory: the compact SL55 slider beside the slim V3 clamshell.' },
  },
  'nokia-5700': {
    uk: { points: ['Поворот нижнього блока фізично перемикає сценарії: музику, камеру, відеодзвінок і смартфон.', 'Музичні клавіші, стереодинаміки й окремий аудіочип ставлять музику в центр задуму.', 'Камера повертається разом із блоком; навушники 3,5 мм під’єднуються через адаптер AD-44.'], next: 'sony-ericsson-w800i', note: 'Два способи зробити телефон музичним: поворотний механізм Nokia та моноблок Walkman з окремою музичною ідентичністю.' },
    ru: { points: ['Поворот нижнего блока физически переключает музыку, камеру, видеозвонок и смартфон.', 'Музыкальные клавиши, стереодинамики и отдельный аудиочип ставят музыку в центр замысла.', 'Камера поворачивается вместе с блоком; наушники 3,5 мм подключаются через адаптер AD-44.'], next: 'sony-ericsson-w800i', note: 'Два способа сделать телефон музыкальным: поворотный механизм Nokia и моноблок Walkman с собственной музыкальной идентичностью.' },
    en: { points: ['Twisting the lower section physically switches between music, camera, video calling and smartphone modes.', 'Music keys, stereo speakers and a dedicated audio chip put listening at the heart of the design.', 'The camera turns with the lower section; 3.5 mm headphones connect through the AD-44 adapter.'], next: 'sony-ericsson-w800i', note: 'Two approaches to a music phone: Nokia’s twisting mechanism and a Walkman candybar with its own musical identity.' },
  },
  'siemens-sl55': {
    uk: { points: ['Висувний корпус ховає цифрові клавіші й змінює пропорції телефона одним рухом.', 'Лише 81,6 мм завдовжки у закритому стані та 79 г — компактність як частина дизайну.', 'Ruby та Titan задають настрій кольором; Titan — назва відтінку, а не матеріалу корпуса.'], next: 'motorola-razr-v3', note: 'Від компактності до тонкості: порівняй, як SL55 і RAZR V3 по-різному перетворюють механіку корпуса на характер.' },
    ru: { points: ['Выдвижной корпус прячет цифровые клавиши и меняет пропорции телефона одним движением.', 'Всего 81,6 мм в закрытом состоянии и 79 г — компактность как часть дизайна.', 'Ruby и Titan задают настроение цветом; Titan — название оттенка, а не материала корпуса.'], next: 'motorola-razr-v3', note: 'От компактности к тонкости: сравни, как SL55 и RAZR V3 превращают механику корпуса в характер.' },
    en: { points: ['The sliding body hides the number keys and changes the phone’s proportions with one movement.', 'Just 81.6 mm long when closed and weighing 79 g: compactness is part of its design.', 'Ruby and Titan set the mood through colour; Titan names a finish, not a titanium body.'], next: 'motorola-razr-v3', note: 'From compactness to slimness: compare how the SL55 and RAZR V3 turn different opening mechanisms into character.' },
  },
};
