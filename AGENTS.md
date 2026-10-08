**Мобільна Історія** — таймлайн етапних мобільних телефонів починаючи з 1998–1999 (старт масового
GSM-буму) до сьогодні, з функцією порівняння між епохами (ще не реалізована — наступний крок).
Не повний каталог (не конкурує з GSMArena) — курований список моделей, що реально щось змінили.
Натхнення тоном/форматом каталогу — український журнал MobiLux (2004–2016). Сестринський проєкт
до [Watchly](../watchly) (той самий автор, та сама загальна філософія: легальні джерела даних,
Cloudflare Workers деплой), але інша архітектура — тут усе статично генерується (Astro SSG), бо
дані курируються вручну й незмінні між білдами, на відміну від живих API в Watchly.

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
