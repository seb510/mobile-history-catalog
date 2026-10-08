**Мобільна Історія** — таймлайн етапних мобільних телефонів починаючи з 1998–1999 (старт масового
GSM-буму) до сьогодні, з функцією порівняння між епохами (ще не реалізована — наступний крок).
Не повний каталог (не конкурує з GSMArena) — курований список моделей, що реально щось змінили.
Натхнення тоном/форматом каталогу — український журнал MobiLux (2004–2016). Сестринський проєкт
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
  означає: оновити схему тут **і** групи рядків у `src/components/PhoneDetail.astro`.
- `src/lib/locales.ts` + `src/lib/phones.ts` — локаль-типи й fallback-ланцюжок (uk → ru → en для
  ru-сторінок, en → uk → ru для en-сторінок; uk завжди має файл, тому для uk fallback не потрібен).
  `getPhone(locale, slug)` і `getPhonesForLocale(locale)` — єдина точка доступу до контенту з
  урахуванням fallback; не читай колекцію напряму в сторінках.
- `src/lib/ui-strings.ts` — словник текстів інтерфейсу (нав, футер, фільтри, підписи специфікацій,
  сторінка "Про проєкт") окремо від контенту телефонів, який живе в markdown. `src/lib/seo.ts` —
  будує canonical/hreflang/og:locale для `<head>`.
- `src/layouts/Layout.astro` — єдиний layout: повний SEO `<head>` (title/description/canonical/
  hreflang на всі 3 локалі/OG/Twitter) + `Header` + `Footer`. Приймає `path` (без префікса локалі,
  однаковий для всіх 3 мов) — з нього будуються canonical і перемикач мов.
- `src/pages/index.astro` (+ ru/en) — hero-головна (`src/components/Hero.astro`): заголовок,
  статистика каталогу, блок "найпопулярніші за продажами" (`unitsSoldMillions` у фронтматері —
  заповнений лише для моделей із публічно відомими цифрами).
- `src/pages/catalog/index.astro` (+ ru/en) — повний каталог з фільтрами (`src/components/
  Catalog.astro`): бренд/рік/пошук, клієнтський vanilla JS (без React) фільтрує картки за
  `data-*`-атрибутами й ховає порожні річні групи.
- `src/pages/phones/[slug].astro` (+ ru/en) — `getStaticPaths` зі `getAllSlugs()` (слаги з uk-файлів
  — вони завжди є), рендер через `src/components/PhoneDetail.astro`.
- Картинка-заглушка (`src/components/PlaceholderArt.astro`) і лого (`src/components/LogoMark.astro`)
  — оригінальна SVG-графіка (силует телефону + бари/сигнал), не прив'язана до жодного реального
  бренду — навмисно, щоб уникнути питань авторського права. OG-зображення й favicon PNG —
  `scripts/generate-images.mjs` (`npm run gen:images`), ганяти вручну після зміни лого/OG-шаблону,
  результат комітиться як звичайний статичний asset.
- Ховер-ефекти — лише на пристроях з мишкою: кастомний Tailwind-варіант `hover-desktop:`
  (визначений у `src/styles/global.css` через `@custom-variant`, `@media (hover: hover) and
  (pointer: fine)`) замість стандартного `hover:` для декоративних станів (не для `focus:`).
- `@astrojs/react` підключений в `astro.config.mjs`, але жоден `.astro`-файл поки не імпортує
  React-компонент — інтеграція стоїть напоготові для майбутньої функції порівняння між епохами.
- `CLAUDE.md` у корені — дублікат цього файлу (той самий контент, інший формат для агентів, що
  його читають). Синхронізуй зміни в обох, якщо редагуєш один.

## Дані

Один телефон = до 3 Markdown-файлів, по одному на локаль: `src/data/phones/<uk|ru|en>/<slug>.md`.
`uk/<slug>.md` обов'язковий і курирується першим (найповніший); `ru`/`en` — опційні переклади
(milestone-тег + тіло). Специфікації (frontmatter) дублюються в кожному файлі, а не виносяться в
спільний — каталог малий і курований вручну, тож дублювання дешевше за крос-референсну систему.
Slug = ім'я файлу без розширення, однакове в усіх трьох локалях (не перекладається).

Зображення: `image` (шлях/URL) + обов'язковий `imageCredit`, коли потрібна атрибуція (Wikimedia
Commons тощо) — ще не підібрано реальних фото для посівних записів; без `image` рендериться
`PlaceholderArt`.

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
