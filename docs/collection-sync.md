# Синхронізація «Моїх телефонів»

Сторінки лишаються статичними. Без входу список і роки користування зберігаються в браузері. Після входу Cloudflare Worker синхронізує список через `/api/collection/` і базу D1. Google отримує запит лише після натискання кнопки входу.

На `/favorites/` особистий кабінет показує кількість телефонів, кількість записаних періодів та телефони, якими користувач користується досі. Картка акаунта показує, де зберігається колекція, і стан синхронізації.

## Підключення власником

1. Створи клієнт типу **Web application** у Google Auth Platform. Додай дозволений URI повернення `https://mobile-history-catalog.nikolaysebistiyan.workers.dev/api/collection/callback`. Для окремого домену додай той самий шлях на його origin. У режимі Testing додай Google-акаунти тестувальників.
2. Створи D1 командою `npx wrangler d1 create mobile-history-collection`. Додай до кореневого `wrangler.jsonc` елемент `"d1_databases": [{ "binding": "COLLECTION_DB", "database_name": "mobile-history-collection", "database_id": "ID-з-Cloudflare" }]`.
3. Застосуй схему командою `npx wrangler d1 execute mobile-history-collection --remote --file worker/collection-schema.sql`.
4. Встанови runtime-секрети `GOOGLE_CLIENT_ID` і `GOOGLE_CLIENT_SECRET` у Cloudflare. Після деплою перевір `/api/collection/status`, вхід з двох браузерів і додавання, зміну років та видалення моделі. Кнопка входу з’являється після підключення бази й обох параметрів Google.

Сервер використовує OAuth Authorization Code з PKCE та підтверджує ідентифікатор через Google UserInfo. У D1 лишаються хеш ідентифікатора, хеш сеансу, слаги моделей та періоди. Google-токени використовуються лише під час входу. Сеанс діє до 30 днів.

Під час першого входу браузер додає локальні записи, яких акаунт ще не бачив. Видалення зберігаються як позначки, щоб старі локальні списки не відновлювали їх під час першого входу. Зміни різних моделей об’єднуються. Для однієї моделі діє останній запис, отриманий сервером. Після виходу локальна копія залишається у браузері. Вхід до іншого акаунта завантажує його власний список.

[Google OpenID Connect](https://developers.google.com/identity/openid-connect/openid-connect) · [Cloudflare D1](https://developers.cloudflare.com/d1/)
