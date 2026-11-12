# Privacy implementation

Owner/contact supplied by project owner: Sebistiian Mykola, sebistian@ukr.net.

Historical source audit (2026-10-31): no analytics, advertising, account forms or application HTTP cookies. Browser keys: theme (opt-in), mobile-history:favorites (user-requested), mobile-history:privacy (decision, version and timestamp; 180 days). Remote photographs disclose network metadata to credited hosts; consent to theme storage does not gate those delivery requests. Comparison choices are in shared URLs.

Reject and accept have equal styling, no preselection, scroll consent or cookie wall. Footer reopens settings. No automatic popup on policy pages. No persistent theme access until valid affirmative choice. Reject removes the saved theme without removing explicitly requested Favorites. Storage failures are tolerated.

Before publication confirm hosting provider, actual request logs and retention, processing locations and transfer safeguards, and the controller contact/address information required for the final circumstances. This is an implementation for the current static site, not a certification of legal compliance.

Sources reviewed 31 October 2026:
- https://www.edpb.europa.eu/sme/find-practical-info/faq_en
- https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf
- https://europa.eu/youreurope/business/growing/digitalising/online-privacy/index_en.htm
- https://www.dataprotection.ie/sites/default/files/uploads/2020-04/Guidance%20note%20on%20cookies%20and%20other%20tracking%20technologies.pdf

Historical validation (2026-10-31): Astro check (0 errors/warnings), production build (306 pages), SEO audit (170 canonical URLs). Decision validation covered absent/accept/reject/expired/future/version/type/blocked storage. Browser verified reject survives reload, accept persists a theme, withdrawal returns to the system theme after reload, footer reopening, English storage inventory and no automatic policy-page banner. Mobile dark theme at 390px: clientWidth/scrollWidth 375/375; both actions visible.

## Browser storage inventory — 2026-11-12

- `mobile-history:privacy`: versioned decision with timestamp, valid for 180 days (`src/lib/privacy.ts`).
- `theme` and `mobile-history:design`: optional appearance preferences, persisted only after affirmative consent. Rejecting removes both saved keys.
- `mobile-history:owned-phones`: user-requested My phones collection. `mobile-history:favorites` is retained only as a legacy migration source.
- `mobile-history:ownership-periods`: user-requested usage years, stored locally by slug with version 1. The collection and years sync to D1 after Google sign-in.
- `mobile-history:collection-sync`: local sync baseline containing the account’s hashed identifier and the last synced records.
- `__Host-collection-login` and `__Host-collection-session`: HTTP-only cookies for the Google sign-in flow and the account session. The session record may include the Google given name for display in the account. [Collection sync implementation](collection-sync.md)
- YouTube-nocookie iframe is created only after the user presses the video cover and is removed by Disable player. This viewing permission is separate from appearance-storage consent; the cover uses the phone photo rather than an automatic external YouTube thumbnail.
- Remote phone images may still contact their credited hosts on delivery. A local image does not make embedded video local.

This section documents code behaviour, not a new legal review. The legal references above were reviewed on the stated historical date; hosting logs, retention and production configuration require separate verification.

Brand power-on audio (2026-11-08): all 11 examples now use local MP3 files, native controls and `preload="none"`, with no autoplay. Source links remain external. This introduces no new browser-storage keys or advertising integration.
## Звернення через Telegram — 2026-11-09

Глобальна форма Feedback передає текст/тип/бренд/модель/джерело/pathname/необов’язковий email через Worker до Telegram після прямого натискання. Чернетки не пишуться у сховище; передача не пов’язана зі згодою на оформлення. IP використовується як хешований rate-limit ключ; не включається до Telegram-повідомлення. У застосунку немає журналювання звернень, але хостинг/Telegram мають власні правила. Видалення повідомлень власником ручне; автоматичного retention немає. Privacy copy uk/ru/en оновлено. Докладно: [feedback-telegram.md](feedback-telegram.md).

Форму скорочено: для телефона лише бренд/модель і необов’язковий коментар; для інших звернень — обов’язковий опис. Email/source fields прибрано. Дані передаються лише plain text, виконання коду відсутнє; HTML/скриптова розмітка відхиляється на клієнті й сервері.
