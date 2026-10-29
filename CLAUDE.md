# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Мобільна Історія** — таймлайн етапних мобільних телефонів починаючи з 1998–1999 (старт масового
GSM-буму) до сьогодні, з функцією порівняння телефонів (`/compare/`, React-острівець) між епохами.
Не повний каталог (не конкурує з GSMArena) — курований список моделей, що реально щось змінили.
Натхнення редакційною подачею — український журнал MobiLux (2004–2016): виразна «обкладинка» з
моделлю, помітна типографіка, короткий редакційний текст і компактні технічні характеристики.
Адаптуй цю енергію й журнальну ієрархію до сучасної взаємодії. Сестринський проєкт
до [Watchly](../watchly) (той самий автор, та сама загальна філософія: легальні джерела даних,
Cloudflare Workers деплой), але інша архітектура — тут усе статично генерується (Astro SSG), бо
дані курируються вручну й незмінні між білдами, на відміну від живих API в Watchly.

## Commands

```
npm run dev        # dev server at localhost:4321 (see also "Development" below for background mode)
npm run build       # type-checks + builds static site to dist/
npm run preview     # serve the built dist/ locally
npm run astro check # type-check content frontmatter against the Zod schema without a full build
```

No test suite or linter is configured. There is no per-phone "test" — correctness is enforced by
the Zod schema in `src/content.config.ts` at build time; `npm run build` (or `astro check`)
failing on a phone file is the equivalent of a failing test.

## Архітектура

Сайт триязичний (uk/ru/en, uk — дефолт без префікса в URL, `/ru/*` і `/en/*` — префіксовані),
через Astro-вбудований i18n-роутинг (`astro.config.mjs`, `i18n.routing.prefixDefaultLocale: false`).
Оскільки Astro не перекладає content collections автоматично, кожен роут продубльовано вручну
по локалі (`src/pages/phones/[slug].astro`, `src/pages/ru/phones/[slug].astro`,
`src/pages/en/phones/[slug].astro` — і так само для `/`, `/catalog/`, `/about/`); кожен такий файл
тонкий — просто фіксує `locale` і делегує рендер спільному компоненту. Додаючи нову сторінку,
додавай усі 3 локальні варіанти одразу.

- `src/content.config.ts` — колекція `phones`, glob-завантажувач `src/data/phones/*/*.md`
  (локаль — перша директорія: `uk/nokia-3310.md`). Zod-схема в цьому файлі — єдине джерело правди
  про обов'язкові (`brand`, `model`, `year`) проти опціональних специфікацій. Нове поле специфікації
  означає: оновити схему тут **і** канонічний список полів `FIELDS` у `src/lib/specs.ts`.
- `src/lib/specs.ts` — єдиний канонічний (упорядкований, згрупований) список полів специфікацій;
  `buildSpecGroups(data, strings)` будує рядки для однієї сторінки телефону (`PhoneDetail.astro`,
  пропускає відсутні поля), `buildCompareGroups(dataA, dataB, strings)` — для `/compare/` (рядок
  лишається, якщо значення є хоч в одного з двох, інакше — "—"). Обидва споживача завжди лишаються
  синхронізованими, бо беруть рядки з одного джерела. У таблицях групи полів відділені виразними
  межами, назви характеристик мають окрему колонку, а таблиця порівняння показує моделі в заголовку.
- `src/lib/locales.ts` + `src/lib/phones.ts` — локаль-типи й fallback-ланцюжок (uk → ru → en для
  ru-сторінок, en → uk → ru для en-сторінок; uk завжди має файл, тому для uk fallback не потрібен).
  `getPhone(locale, slug)` і `getPhonesForLocale(locale)` — єдина точка доступу до контенту з
  урахуванням fallback; не читай колекцію напряму в сторінках.
- `src/lib/ui-strings.ts` — словник текстів інтерфейсу (нав, футер, фільтри, підписи специфікацій,
  крихти, мобільне меню й перемикач теми, сторінка "Про проєкт") окремо від контенту телефонів,
  який живе в markdown. `src/lib/seo.ts` — будує canonical/hreflang/og:locale для `<head>`.
- Inline-скрипт у `src/layouts/Layout.astro` призначає зовнішнім HTTP(S)-посиланням `target="_blank"`
  і додає `rel="noopener noreferrer"`; внутрішні посилання лишаються в цій вкладці. Для статичних
  зовнішніх посилань у компонентах також виставляй ці атрибути явно в розмітці.
- `src/components/Breadcrumbs.astro` — спільна локалізована навігація для каталогу, брендів,
  порівняння, сторінки про проєкт, сторінок телефонів і брендів та 404; посилання формуються через
  `localePath()`, останній елемент позначається `aria-current="page"`.
- `src/layouts/Layout.astro` — єдиний layout: повний SEO `<head>` (title/description/canonical/
  hreflang на всі 3 локалі/OG/Twitter) + `Header` + `Footer`. Приймає `path` (без префікса локалі,
  однаковий для всіх 3 мов) — з нього будуються canonical і перемикач мов. Header локалізує кнопки
  меню й теми; мобільне меню недоступне Tab-навігації у згорнутому стані, закривається Escape.
  Footer повторює бренд і основні маршрути та показує відомості про ліцензування контенту.
- `src/pages/index.astro` (+ ru/en) — hero-головна (`src/components/Hero.astro`): заголовок,
  статистика каталогу, блок "найпопулярніші за продажами" (`unitsSoldMillions` у фронтматері —
  заповнений лише для моделей із публічно відомими цифрами).
- `src/pages/catalog/index.astro` (+ ru/en) — повний каталог з фільтрами (`src/components/
  Catalog.astro`): бренд/рік/пошук, клієнтський vanilla JS (без React) фільтрує картки за
  `data-*`-атрибутами й ховає порожні річні групи; річні групи зібрані у вертикальну часову
  вісь із точками-роками.
- `src/pages/phones/[slug].astro` (+ ru/en) — `getStaticPaths` зі `getAllSlugs()` (слаги з uk-файлів
  — вони завжди є), рендер через `src/components/PhoneDetail.astro`.
- `src/pages/compare/index.astro` (+ ru/en) — порівняння двох телефонів пліч-о-пліч. Тонка сторінка
  делегує в `src/components/Compare.astro` (Astro, тягне `getPhonesForLocale` і передає слім-список
  `{slug, data}` як серіалізовані props), що рендерить `src/components/CompareIsland.tsx`
  (`client:load`) — єдиний React-компонент у проєкті: пошук-вибір телефону в кожен з двох слотів
  (фільтрація по `brand model year`, виключає вже обраний у другому слоті телефон), стан вибору
  синхронізується в URL (`?a=slug&b=slug`, `history.replaceState`) для share-посилань і
  deep-linking, таблиця будується через `buildCompareGroups` з `src/lib/specs.ts`. У порожньому
  стані без вибраних моделей показує кілька курованих пар; їхні описи локалізовані в
  `src/lib/ui-strings.ts`, а посилання відразу відкривають порівняння через query-параметри.
- `src/pages/brands/index.astro` (+ ru/en) — грід усіх брендів (`src/components/BrandsIndex.astro`).
  `src/pages/brands/[slug].astro` (+ ru/en) — сторінка бренду: коротка історія + вордмарк-лого +
  всі телефони бренду, через `src/components/BrandDetail.astro`. Окрема content-колекція `brands`
  (`src/content.config.ts`, `src/data/brands/<uk|ru|en>/<slug>.md`, той самий паттерн і fallback,
  що й у `phones` — див. `src/lib/brands.ts`). Поле `name` у фронтматері бренду має **точно**
  збігатися зі значенням `brand` на телефонах — по ньому `BrandDetail.astro` фільтрує телефони
  бренду. `slugifyBrandName()` (з `lib/brands.ts`) робить slug прямо з `brand`-рядка телефону
  (напр. "Sony Ericsson" → "sony-ericsson") — цим лінкується `PhoneDetail.astro` на сторінку
  бренду без зайвого запиту колекції; slug файлу бренду мусить збігатися з цим виводом.
- `src/components/BrandMark.astro` — лого бренду на **фіксовано білій** плашці (не залежить від
  теми сайту): реальні вордмарки з Wikimedia Commons часто мають свій колір заливки (інколи
  майже чорний або білий), тому на змінному фоні легко стають нечитабельними — консистентна біла
  підкладка це знімає. Якщо вільного лого не знайдено — фолбек: `name` текстом, **обов'язково**
  `text-black` (не `text-neutral-900`!), бо `neutral-*` у темі інвертується, а ця плашка — ні.
  Лого — тільки з Wikimedia Commons, тільки з чіткою вільною ліцензією (`PD-textlogo`/public
  domain — такі теги зазвичай мають прості текстові вордмарки; НЕ "non-free/fair use only",
  той статус не дозволяє використання поза Wikipedia). Товарний знак лишається товарним знаком
  навіть у суспільному надбанні з погляду авторського права — це нормально для номінативного,
  неторгового використання (ідентифікація бренду в каталозі), якщо для бренду немає перевіреного вільного файлу — лиши `logo` незаповненим.
  Для Apple на запит користувача використовується знак яблука з Commons (`Apple_Logo.svg`,
  PD-textlogo); для Huawei — `Huawei_wordmark.svg` (PD-textlogo).
- Лого (`src/components/LogoMark.astro`, статично продубльований у `public/favicon.svg` і
  `scripts/generate-images.mjs`) і заглушка (`src/components/PlaceholderArt.astro`) використовують
  власну мову вертикальної часової шкали з трьома віхами — абстрактний знак, не схожий на реальний
  бренд чи модель телефону. Зображення телефонів мають `data-image-fallback` і приховану
  `PlaceholderArt`; спільний обробник `src/scripts/image-fallback.ts`, підключений у `Layout.astro`,
  перемикає їх, якщо фото не завантажилось. Якщо не завантажився вордмарк у `BrandMark.astro`,
  показується назва бренду текстом. OG-зображення й favicon PNG генеруються через
  `scripts/generate-images.mjs` (`npm run gen:images`) після зміни лого або OG-шаблону й
  комітяться як статичні assets. Міняючи знак, синхронізуй геометрію у `LogoMark.astro`,
  `favicon.svg`, `ogSvg()` і в розширених заглушках `PlaceholderArt.astro` та `CompareIsland.tsx`.
- Світла/темна тема — перемикач (`src/components/ThemeToggle.astro`) ставить `data-theme="light"|
  "dark"` на `<html>` і зберігає вибір у `localStorage('theme')`; блокувальний inline-скрипт на
  початку `<head>` в `Layout.astro` застосовує збережений вибір до першого рендеру (без цього —
  спалах не тієї теми). Сам перемикач кольорів — **не** класи `dark:` на кожному елементі, а
  інверсія CSS-змінних Tailwind-палітри (`--color-neutral-*`, `--color-orange-*`) у
  `src/styles/global.css` під `[data-theme="light"]` / `@media (prefers-color-scheme: light)`:
  існуючі класи (`bg-neutral-950`, `text-neutral-400` тощо) автоматично відображають правильну
  тему без жодних змін у розмітці компонентів. Додаючи новий колір за межами `neutral`/`orange` —
  додай його інверсію в той самий CSS-блок, а не `dark:`-варіант на елементі.
- Візуальна система — теплий паперовий фон у світлій темі, чорнильні нейтралі в темній і помаранчевий
  редакційний акцент; використовуй журнальну сітку, сильні заголовки, тонкі розділювачі, стримані
  тіні й невеликі заокруглення. Під час дизайн-проходу працюй із наявними записами; нові моделі
  додавай після окремого запиту користувача.
- Основна ширина контенту — `max-w-6xl` для спільного вирівнювання layout, header і footer. Hero
  дає короткий маршрут до каталогу й порівняння; каталог та сторінка брендів мають редакційний
  вступ із підзаголовком. Картки телефонів зберігають спільне співвідношення фото й мінімальну
  висоту текстового блоку, картки брендів завжди показують назву та кількість моделей. Форми
  лічильника локалізуй через `strings.brands.phoneCount` (one/few/many для uk/ru, one/many для en)
  і вибирай за правилами множини відповідної локалі.
- Розділ About має пояснювати не лише історію й критерії добору, а й практично як шукати у
  таймлайні та як поділитися порівнянням; підтримуй ці пояснення синхронними трьома мовами.
- Посилання в тексті Markdown стилізуй через `src/styles/global.css` як помаранчеві посилання з
  підкресленням, щоб вони залишалися читабельними в обох темах навіть усередині `prose-invert`;
  клікабельні кредити фото в `PhoneDetail.astro` використовують той самий помаранчевий стиль.
- Колір `text-neutral-500` підібраний із контрастом для дрібних підписів на фонах карток у темній
  і світлій темах; якщо змінюєш палітру нейтралів у `global.css`, перевір контраст metadata, labels,
  placeholder-текстів і другорядних посилань на обох темах.
- Ховер-ефекти — лише на пристроях з мишкою: кастомний Tailwind-варіант `hover-desktop:`
  (визначений у `src/styles/global.css` через `@custom-variant`, `@media (hover: hover) and
  (pointer: fine)`) замість стандартного `hover:` для декоративних станів (не для `focus:`).
  Анімації та переходи мають поважати `prefers-reduced-motion`.
- Спільна система руху визначена в `src/styles/global.css`: `--motion-ui`, `--motion-image`,
  `--motion-enter` і `--motion-easing`; використовуй утиліти `motion-ui`/`motion-image` замість
  випадкових `duration-*`. Рух має бути коротким і стриманим, а підйом карток — ледь помітним.
- Таблиці характеристик і порівняння компактні на вузьких екранах, але на широких (`lg:`) мають
  збільшений основний текст і читабельні підписи; зберігай цей адаптивний контраст при редагуванні.
- Сторінка «Про проєкт» локалізована трьома мовами через `strings.about.intro` та `sections` у
  `src/lib/ui-strings.ts`; якщо змінюється структура, онови всі три тонкі сторінки About.
- `@astrojs/react` підключений в `astro.config.mjs`; `CompareIsland.tsx` (див. вище) — єдиний
  React-компонент у проєкті, рендериться лише на `/compare/`.
- `AGENTS.md` у корені — дублікат цього файлу (той самий контент, інший формат для агентів, що
  його читають). Синхронізуй зміни в обох, якщо редагуєш один.

## Дані

Один телефон = до 3 Markdown-файлів, по одному на локаль: `src/data/phones/<uk|ru|en>/<slug>.md`.
`uk/<slug>.md` обов'язковий і курирується першим (найповніший); `ru`/`en` — опційні переклади
(milestone-тег + тіло). Специфікації (frontmatter) дублюються в кожному файлі, а не виносяться в
спільний — каталог малий і курований вручну, тож дублювання дешевше за крос-референсну систему.
Slug = ім'я файлу без розширення, однакове в усіх трьох локалях (не перекладається).

Актуальне охоплення каталогу: після 2019 року додано iPhone 12 (2020), Galaxy Z Fold3 (2021),
Huawei Mate XT (2024) і Galaxy S26 Ultra (2026). Нові записи курируй як етапи індустрії, а не
як повне покриття кожного року; для нових брендів додавай сторінку бренду, щоб лінк із телефону
не вів на відсутній маршрут.

Зображення: `image` + `imageCredit` + `imageSourceUrl`. Джерело — вільно ліцензовані фото з
Wikimedia Commons (не press-кіти виробників — ті майже завжди copyrighted): відкрити сторінку
File: на Commons, перевірити ліцензію (CC BY/BY-SA — ОК; "all rights reserved" — ні), узяти пряме
посилання на `upload.wikimedia.org` (не сторінку File:) у форматі
`.../commons/thumb/<a>/<ab>/<Назва.jpg>/960px-<Назва.jpg>` — Wikimedia віддає тільки
"стандартні" ширини thumbnail'ів (960, 1280, 1920 px; повний список — commons "Common thumbnail
sizes"), довільна ширина на кшталт `800px-` поверне 429/400. `imageCredit` — короткий підпис
(автор + ліцензія), `imageSourceUrl` — посилання на саму сторінку File: (не на картинку) для
перевірки; `PhoneDetail.astro` рендерить `imageCredit` як клікабельне посилання, коли
`imageSourceUrl` заданий. Без `image` рендериться `PlaceholderArt`; якщо задане зображення не
завантажиться, обробник у `src/scripts/image-fallback.ts` показує ту саму заглушку в картці,
деталі телефону та слоті порівняння.

Бренди — той самий паттерн у `src/data/brands/<uk|ru|en>/<slug>.md`: `name` (має збігатись із
`brand` на телефонах), опційні `founded`/`country`, опційне лого (`logo`/`logoCredit`/
`logoSourceUrl`, правила сорсингу — див. `BrandMark.astro` вище), тіло — коротка історія бренду.

## Деплой

Ще не налаштовано. План: Cloudflare Workers зі статичними asset'ами, як у Watchly — `npm run build`
видає повністю статичний `dist/`, Worker-код не потрібен (на відміну від Watchly, де є один
виняток для `/show/*`; тут такого винятку не буде, кожна сторінка вже статична HTML).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Головна: редакційна композиція

Головна має куровану обкладинку Nokia 3310, стрічку епох з посиланнями на `#year-YYYY` каталогу, готове порівняння Nokia 3310 / Galaxy S26 Ultra (2000 → 2026), бестселери та принципи проєкту. Тексти трьох мов зберігаються в `HOME_EDITORIAL` у `src/lib/ui-strings.ts`.

## Google Pixel

Бренд Google (`google`) має локалізовані сторінки uk/ru/en. Курована добірка: Pixel (2016), Pixel 6 (2021), Pixel 8 (2023), Pixel 9 (2024, оновлення дизайну серії); усі чотири моделі перекладені трьома мовами, джерела Google наведені в текстах. Фото всіх чотирьох Pixel підключені з Wikimedia Commons із перевіреними ліцензіями CC BY-SA 4.0 / CC0, авторством і посиланнями на File-сторінки в усіх локалях. Лого Google — вордмарк 2015 року з Wikimedia Commons (`Google_2015_logo.svg`, Google LLC, public domain / PD-textlogo); підключений у трьох локалях і показується на білій плашці BrandMark.

Характеристики Pixel звірено з Google Pixel Phone Help (7158570; для Pixel 2016 — 16043605). `storageMb` описує базову конфігурацію; альтернативи та регіональні відмінності пояснюються в тексті. Ємність батареї — типова; ОС указана на старті.

У гріді брендів картки розтягуються на висоту рядка (`li.flex`, посилання `h-full w-full`), а білі плашки BrandMark мають однакові `h-20 w-full`. Розміри логотипа чи текстового фолбека не повинні зміщувати розділювач і підписи.

Siemens SXG75 (2005) додано uk/ru/en із фото DireWolf (CC BY-SA 3.0). Формулювання віхи: фінальний власний UMTS-телефон Siemens перед BenQ-Siemens. Розміри 111 × 53 × 20 мм взято з інструкції виробника; суперечливий обсяг користувацької пам’яті пропущено. Для SK65 вільного фото під час пошуку не підтверджено — лишається заглушка.

Ціна `priceUsdAtLaunch` у PhoneCard показується лише за наявності значення: спокійний підпис «Ціна на старті» та сума USD під описом, без стікера поверх фото. У PhoneDetail ціна залишається в таблиці характеристик. Це історична стартова ціна, не поточна ціна продажу.

PhoneCard розтягується через `flex-1 self-stretch`, без відсоткового `h-full`; батьківські `li` у Hero, Catalog і BrandDetail — `flex min-w-0`, а сітки — `auto-rows-fr items-stretch`. Фото має `shrink-0`; додаткова ціна не повинна змінювати висоту лише однієї картки в рядку.

## Перевірка якості 2026-10-29

- `npm run build` тепер виконує `astro check && astro build`.
- `scripts/vite-node-commonjs.mjs` обходить проблему завантаження Node/CommonJS у Astro 7 / Vite 8 на Windows; браузерний bundle не трансформується. Кеші development/production розділені, щоб збірка не ламала React hydration у dev.
- `priceUsdAtLaunch` публікується лише разом із `priceSourceUrl`; `priceContext` пояснює країну, конфігурацію й контракт. Старі непідтверджені значення збережені, але не показуються. Джерела підтверджено для iPhone 2007 і Pixel 6.
- Канонічні характеристики показують тип екрана навіть без діагоналі, габарити завжди мають локалізовані мм, Mini-SIM пояснюється як стандартна SIM.
- Перевірка доступності зовнішніх фото: `node scripts/audit-assets.mjs`; HTTP 429 означає обмеження Wikimedia, а не відсутність файлу. Скрипт припиняє запити після 429. Результат у `docs/asset-audit.json`.
- Без фото залишаються SK65 та SGH-E700. Для 60 із 65 моделей немає окремих ru/en перекладів: працює передбачений fallback на uk.

Перевірка внутрішніх посилань виявила неіснуючі мовні 404-переходи: додано спільний NotFound і локалізовані ru/en сторінки; перемикач мови на 404 веде на головну вибраної мови.

Під час контрольного порівняння доповнено пропущені ОС, SIM та інтерфейси Pixel 9 за Google Phone Help: Android 14 на старті, Nano-SIM + eSIM, 5G, Wi-Fi 7 (Wi-Fi 6 в Індії), Bluetooth 5.3, NFC, USB-C 3.2, Qi.

Контрольний результат: `npm run build` проходить (240 сторінок, перевірка типів без помилок/попереджень); битих внутрішніх href немає. Порівняння гідрується після production build при запущеному dev, swap змінює URL. Мобільний viewport: clientWidth і scrollWidth по 375 px (390 px разом зі смугою прокручування), горизонтального переповнення немає. Dev залишено у background на localhost:4321.

На головній блок «26 років між дзвінками» порівнює Nokia 3310 і Samsung Galaxy S26 Ultra; CTA відкриває відповідну пару через query-параметри. Заголовок локалізований uk/ru/en.
