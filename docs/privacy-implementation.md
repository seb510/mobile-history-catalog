# Privacy implementation

Owner/contact supplied by project owner: Sebistiian Mykola, sebistian@ukr.net.

Current source audit: no analytics, advertising, account forms or application HTTP cookies. Browser keys: theme (opt-in), mobile-history:favorites (user-requested), mobile-history:privacy (decision, version and timestamp; 180 days). Remote photographs disclose network metadata to credited hosts; consent to theme storage does not gate those delivery requests. Comparison choices are in shared URLs.

Reject and accept have equal styling, no preselection, scroll consent or cookie wall. Footer reopens settings. No automatic popup on policy pages. No persistent theme access until valid affirmative choice. Reject removes the saved theme without removing explicitly requested Favorites. Storage failures are tolerated.

Before publication confirm hosting provider, actual request logs and retention, processing locations and transfer safeguards, and the controller contact/address information required for the final circumstances. This is an implementation for the current static site, not a certification of legal compliance.

Sources reviewed 31 October 2026:
- https://www.edpb.europa.eu/sme/find-practical-info/faq_en
- https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf
- https://europa.eu/youreurope/business/growing/digitalising/online-privacy/index_en.htm
- https://www.dataprotection.ie/sites/default/files/uploads/2020-04/Guidance%20note%20on%20cookies%20and%20other%20tracking%20technologies.pdf

Validation: Astro check (0 errors/warnings), production build (306 pages), SEO audit (170 canonical URLs). Decision validation covered absent/accept/reject/expired/future/version/type/blocked storage. Browser verified reject survives reload, accept persists a theme, withdrawal returns to the system theme after reload, footer reopening, English storage inventory and no automatic policy-page banner. Mobile dark theme at 390px: clientWidth/scrollWidth 375/375; both actions visible.
