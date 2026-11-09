# Документація проєкту

Актуалізовано 2026-11-09. Початок роботи — [README](../README.md). `AGENTS.md` і `CLAUDE.md` містять робочі правила та хронологію виконаних проходів; актуальний стан зазначений на початку цих файлів.

## Актуальні довідники

- [Зворотний зв’язок → Telegram](feedback-telegram.md): форма, новий API, secrets, локальний запуск і тести.

- [Продовження на іншому комп’ютері — 8 листопада](handoff-2026-11-08.md): останні зміни, запуск, перевірки й обмеження.

- [Дизайн-система та сторінка телефону](design-system.md): дві редакції, кольори, рух, галерея, відео, таблиці та перевірки.
- [Покриття контенту](content-coverage.md): переклади, наявність відео, прогалини.
- [SEO](seo.md): origin, індексація, OG, sitemap і перевірки.
- [Реалізація приватності](privacy-implementation.md): поточні ключі браузера й поведінка згоди; не юридична сертифікація.
- [Дозвіл Mobile Phone Museum](mobile-phone-museum-permission.md): умови використання й атрибуції.
- [Конструкції телефонів](form-factors.md): принципи класифікації.
- [Файли в Git](git-tracking.md): правила відстеження.

- [Аудіоприклади брендів](audio-implementation.md): джерела, відтворення й межі атрибуції.

## Дані й відтворювані аудити

- `npm run audit:locales` → [locale-audit.json](locale-audit.json).
- `npm run audit:seo` → перевірка поточного `dist/`, після збірки.
- `node scripts/audit-phone-data.mjs` → [інвентаризація Nokia/Siemens](nokia-siemens-inventory.md), це частина каталогу, а не всі моделі.
- [content-coverage.md](content-coverage.md) — редакційний огляд, оновлюється разом із контентом.
- [asset-audit.json](asset-audit.json) і [phone-image-inventory.json](phone-image-inventory.json) — знімки відповідних запусків; дата звіту важлива.

## Історичні проходи та джерела

Датовані звіти описують стан на момент проходу. Старі лічильники й пропуски в них не є актуальними показниками каталогу.

- [Походження записів журналу оновлень](updates-history-sources.md). Публічний журнал — `/updates/` у трьох локалях.
- [П’ять моделей 9 листопада: фото](retro-five-2026-11-09-images.json), [відео](retro-five-2026-11-09-videos.json).
- [Нова десятка 8 листопада](retro-ten-2026-11-08.md), [фото](retro-ten-2026-11-08-images.json), [відео](retro-ten-2026-11-08-videos.json).
- [Добірка 2005–2008](retro-ten-2005-2008.md): джерела характеристик, ліцензії фото й відео для десяти моделей.
- [Siemens A65 → SXG75](siemens-four-refresh.md).
- [N95 8GB](nokia-n95-8gb-sources.md), [Nokia X7/N79/N81](nokia-x7-n79-n81-images-2026-11-05.md).
- [Дизайн брендів](all-brands-design-2026-11-05.md), [аудит якості](quality-audit.md).
- [Експорт моделей 31 жовтня](exports/mobile-history-models-2026-10-31.docx) — архівний документ, знімок 115 моделей, не поточний каталог.

- [Siemens M55: дані, фото й відео](siemens-m55-sources.md). Бренди мають усі 33 локальні записи; audit:locales перевіряє і їх.
