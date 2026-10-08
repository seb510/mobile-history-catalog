# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

- `src/content.config.ts` — визначає колекцію `phones` (glob-завантажувач `src/data/phones/*.md`)
  і Zod-схему для frontmatter. Єдине джерело правди про те, які поля в телефона є обов'язковими
  (`brand`, `model`, `year`) проти опціональних (ціна, екран, чипсет, RAM/ROM, батарея, ОС, вага,
  зображення). Додавання нового поля специфікацій означає: оновити схему тут **і**
  `src/pages/phones/[slug].astro`, де будується масив `specs` для таблиці на сторінці телефону.
- `src/pages/index.astro` — таймлайн: тягне всю колекцію `phones`, групує `Map.groupBy` по `year`,
  рендерить картки-посилання на сторінки телефонів.
- `src/pages/phones/[slug].astro` — динамічний роут, один на телефон. `getStaticPaths` мапить
  кожен запис колекції на `{ slug: phone.id }`; `phone.id` — це ім'я файлу без розширення, тому
  slug сторінки = ім'я markdown-файлу. Тіло markdown-файлу рендериться через `render(phone)` →
  `<Content />`; specs-таблиця будується вручну з полів, які присутні (кожен рядок — умовний
  `data.field != null && [...]`, відфільтрований наприкінці).
- `src/layouts/Layout.astro` — єдиний layout, шапка сайту + `<slot />`. Нових layout'ів поки
  немає — усі сторінки (головна й сторінки телефонів) використовують цей самий.
- Стилізація — Tailwind v4 через Vite-плагін (`@tailwindcss/vite`, підключений в
  `astro.config.mjs`), класи прямо в `.astro`-файлах, без окремого конфіг-файлу Tailwind. Темна
  тема за дефолтом (`bg-neutral-950`), акцентний колір — orange-500.
- `@astrojs/react` підключений в `astro.config.mjs`, але жоден `.astro`-файл поки не імпортує
  React-компонент — інтеграція стоїть напоготові для майбутньої функції порівняння між епохами.
- `AGENTS.md` у корені — дублікат цього файлу (той самий контент, інший формат для агентів, що
  його читають). Синхронізуй зміни в обох, якщо редагуєш один.

## Дані

Один телефон = один Markdown-файл у `src/data/phones/*.md`. Frontmatter — структуровані факти
(перевіряються Zod-схемою в `src/content.config.ts`, помилка в полі ламає білд, а не рантайм);
тіло файлу — історичний контекст у довільній формі. Slug сторінки = ім'я файлу без розширення.

Зображення: `image` (шлях/URL) + обов'язковий `imageCredit`, коли потрібна атрибуція (Wikimedia
Commons тощо) — ще не підібрано реальних фото для посівних записів, тільки текст/специфікації.

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
