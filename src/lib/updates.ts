export const UPDATES_COPY = {
 uk: { title:'Оновлення', intro:'Що змінилося в архіві: нові телефони, фотографії та можливості сайту.', additions:'Нові в архіві', changes:'Зміни на сайті', edition:'Журнал оновлень', note:'Дата тут означає додавання до архіву, а не рік випуску телефону.', aboutLink:'Що нового в проєкті', release:'Випуск' },
 ru: { title:'Обновления', intro:'Что изменилось в архиве: новые телефоны, фотографии и возможности сайта.', additions:'Новое в архиве', changes:'Изменения на сайте', edition:'Журнал обновлений', note:'Дата здесь означает добавление в архив, а не год выпуска телефона.', aboutLink:'Что нового в проекте', release:'Выпуск' },
 en: { title:'Updates', intro:'What changed in the archive: new phones, photographs and site features.', additions:'New in the archive', changes:'Site changes', edition:'Update journal', note:'Dates here mark additions to the archive, not the phones’ release years.', aboutLink:'What’s new in the project', release:'Released' },
} as const;
// Curated public changelog. Add completed changes only; no speculative release dates.
export const UPDATES = [{
 date:'2026-11-08',
 phones:['nokia-5510','nokia-3650','nokia-7600','nokia-n93','nokia-e90','sony-ericsson-p800','sony-ericsson-p910i','sony-ericsson-w900i','sony-ericsson-w880i','sony-ericsson-c905'],
 changes:{
  uk:["Усі десять нових Nokia та Sony Ericsson доповнено відео й описами трьома мовами; доступні позначки на картках і відбір моделей із відео.",'Два стилі оформлення: журнальний і сучасний, кожен зі світлою та темною темою.','Особиста хронологія в «Моїх телефонах»: роки користування, позначка «досі» та редагування періоду в попапі.','Узгоджені фільтри, галереї й порівняння; компактні налаштування та плавні переходи.','Окремі зображення для поширення посилань і виправлена базова адреса прев’ю.'],
  ru:["Все десять новых Nokia и Sony Ericsson дополнены видео и описаниями на трёх языках; доступны отметки на карточках и отбор моделей с видео.",'Два стиля оформления: журнальный и современный, каждый со светлой и тёмной темой.','Личная хронология в «Моих телефонах»: годы использования, отметка «до сих пор» и редактирование периода в попапе.','Единые фильтры, галереи и сравнение; компактные настройки и плавные переходы.','Отдельные изображения для публикации ссылок и исправленный базовый адрес превью.'],
  en:["All ten new Nokia and Sony Ericsson models now have videos with descriptions in three languages, card badges and video filtering.",'Two visual styles: magazine and modern, each with light and dark themes.','A personal timeline in My phones: usage years, a still-using status and period editing in a popup.','Consistent filters, galleries and comparisons, compact settings and subtle transitions.','Dedicated link-sharing images and a corrected base address for previews.'],
 }
}] as const;

export const HOME_RECENT_COPY = {
 uk: { title:'Нещодавно в архіві', intro:'Нові поповнення — знайомі форми й нові приводи згадати.', link:'Усі оновлення', added:'Додано' },
 ru: { title:'Недавно в архиве', intro:'Новые пополнения — знакомые формы и новые поводы вспомнить.', link:'Все обновления', added:'Добавлено' },
 en: { title:'Recently in the archive', intro:'New additions, familiar shapes and more memories to revisit.', link:'All updates', added:'Added' },
} as const;
