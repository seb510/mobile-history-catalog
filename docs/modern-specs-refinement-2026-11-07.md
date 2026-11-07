# Сучасні моделі: уточнення характеристик і фото



## Уточнення сучасних технічних портретів — 2026-11-07

Перевірено стан після користувацьких змін: main на b032d8d, каталог уже 105 моделей / 11 брендів (додані LG/Alcatel), Motorola razr ultra 2026 уже має локальне фото. Ці зміни збережено. Нових моделей у цьому проході немає.

Доповнено 6 моделей uk/ru/en (18 файлів), виключно за первинними сторінками: HTC U24 pro — заряджання 60/15/5 Вт, колір Space Navy, локалізована фронтальна камера; Mate XT 2 — фронтальні камери 8+8 Мп, 66/50 Вт, відсутність картки, габарити складеного телефона, SIM/USB/Wi-Fi/Bluetooth, пояснення 299/304 г; Pixel 11 Pro — точні 152,7×71,9×8,4 мм / 204 г за Pixel Phone Help, Wi-Fi 7 / Bluetooth 6 / UWB / Thread, регіональна SIM (US Dual eSIM, ROW Nano-SIM+eSIM), заряджання з точним контекстом; razr ultra 2026 — 68/30 Вт, фронтальна 50 Мп, storageNote про 256/512 ГБ й текст про RAM Boost без вигаданої універсальної конфігурації; Fold8 Ultra — стартова Android 17 / One UI 9, 45/20 Вт, дві фронтальні камери, складені габарити, мережі/кольори; iPhone 18 Pro — фронтальна 18 Мп, Li-Ion / незнімна, мережі, US eSIM, заряджання. 60 Вт для iPhone — мінімальна потужність рекомендованого AVS-адаптера для тесту часу заряджання, НЕ максимальна потужність телефона. RAM/мА·год iPhone не вигадувати.

Нові характеристики автоматично з’являються і в PhoneDetail, і в CompareIsland через незмінний specs.ts. Зовнішні/внутрішні екрани та стан корпуса пояснені в тексті. YAML нормалізовано без зміни наявних фото, кредитів, dateAdded чи решти редакційного тексту.

Пошук фото: Commons Pixel 11 Pro досі містить схеми, не підміняти кадрами Pro XL або «Taken with». Два кадри iFixit оглянуті; це рентген та колаж рекламних рендерів HTC/T1, тому не використані як вільне авторське фото U24 pro попри загальну CC BY-NC-SA політику iFixit. Для Mate XT 2 дозволений кадр не підтверджено. HTC/Huawei зберігають заглушки, Pixel — підписану схему; фото razr із b032d8d лишається. Повний перелік джерел і решта прогалин — docs/modern-specs-refinement-2026-11-07.md. Без commit/push/deploy.

## Первинні джерела

- [HTC U24 pro](https://www.htc.com/uk/smartphones/htc-u24-pro/)
- [Huawei Mate XT 2 specifications](https://consumer.huawei.com/cn/phones/mate-xt-2-ultimate-design/specs/)
- [Google Pixel Phone Help](https://support.google.com/pixelphone/answer/7158570?hl=en), розділ Pixel 11 Pro (не XL/Fold)
- [Google Store specifications](https://store.google.com/product/pixel_11_pro_specs?hl=en-US)
- [Motorola US product page](https://www.motorola.com/us/en/p/phones/razr/razr-ultra-2026/pmipmjk44m3?pn=PBB30003US)
- [Motorola hardware guide](https://en-us.support.motorola.com/app/answers/detail/a_id/191858/~/about-your-hardware---motorola-razr-ultra-2026)
- [Samsung press release and full specification table](https://www.samsungmobilepress.com/articles/galaxy-z-fold8-ultra-fold8-flip8-perfected-every-way-living)
- [Apple iPhone 18 Pro US specifications](https://www.apple.com/iphone-18-pro/specs/)

## Перевірені джерела зображень

- [Commons Pixel 11 Pro](https://commons.wikimedia.org/wiki/Category:Google_Pixel_11_Pro) — схеми.
- [iFixit U24 pro material](https://www.ifixit.com/News/117461/the-trump-phone-looks-suspiciously-like-a-htc-u24-pro) — оглянуто, не використано.
- [iFixit licensing](https://www.ifixit.com/Info/Licensing) — CC BY-NC-SA 3.0; колаж чужих рендерів не прирівняно до авторського фото пристрою.

## Поля, змінені в uk

- **htc-u24-pro**: camera, charging, colors
- **huawei-mate-xt-2**: camera, charging, storageExpandable, dimensionsMm, weightGrams, connectivity, simType
- **google-pixel-11-pro**: camera, simType, connectivity, charging, dimensionsMm, weightGrams, network
- **motorola-razr-ultra-2026**: camera, charging, storageNote, connectivity
- **samsung-galaxy-z-fold8-ultra**: camera, charging, os, network, connectivity, dimensionsMm, colors
- **apple-iphone-18-pro**: camera, charging, battery, network, simType

## Залишено непідтвердженим

- Нові дозволені фото HTC U24 pro, Mate XT 2, реальна фотографія компактного Pixel 11 Pro.
- RAM/ємність батареї iPhone 18 Pro у мА·год — Apple не наводить тут ці числа.
- Єдина універсальна пара RAM/сховище Motorola та непідтверджена точна роздільність/габарити — не переносили з інших поколінь.

Перевірено: 18 локалізованих зібраних сторінок; числові параметри синхронні uk/ru/en; наявні фото/галереї/кредити/dateAdded побітово за значеннями збігаються з HEAD. Astro check — 0 errors / 0 warnings (4 hints), build — 378 сторінок; SEO audit passed — 239 canonical URLs, indexing disabled. git diff --check чистий.
