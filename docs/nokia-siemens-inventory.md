# Інвентаризація Nokia та Siemens

Згенеровано командою `node scripts/audit-phone-data.mjs`. Моделей: 27.
Це список полів для ручної перевірки, а не оцінка достовірності заповнених характеристик.
Відсутні поля не заповнювати здогадками: підтверджену відсутність функції позначати текстом,
невідомі RAM/чипсет залишати порожніми. Числова пам’ять означає доступний користувачу обсяг.

| Модель | Поля без значення | Окремі переклади | Фото | Стартова ціна USD |
| :--- | :--- | :--- | :--- | :--- |
| Nokia 1100 | chipset, ramMb, storage, storageExpandable, camera.rear, camera.front, battery.type, connectivity | fallback uk | є | не задана |
| Nokia 3210 | display.resolution, chipset, ramMb, storage, storageExpandable, camera.rear, camera.front, battery.type, connectivity | fallback uk | є | не задана |
| Nokia 3310 (2017) | chipset, battery.type | ru, en | є | не задана |
| Nokia 3310 | ramMb | ru, en | є | не задана |
| Nokia 5700 XpressMusic | chipset, ramMb, storage | ru, en | є | не задана |
| Nokia 5800 XpressMusic | battery.type | fallback uk | є | прихована: без джерела |
| Nokia 6230 | chipset, ramMb, storage, storageExpandable, camera.front, battery.type | fallback uk | є | не задана |
| Nokia 6600 | ramMb, camera.front | fallback uk | є | прихована: без джерела |
| Nokia 7610 | camera.front, battery.type | fallback uk | є | прихована: без джерела |
| Nokia E71 | — | fallback uk | є | не задана |
| Nokia Lumia 520 | camera.front, battery.type | fallback uk | є | прихована: без джерела |
| Nokia N-Gage | ramMb, camera.rear, camera.front, battery.type | fallback uk | є | прихована: без джерела |
| Nokia N70 | storage, battery.type | fallback uk | є | не задана |
| Nokia N8 | — | ru, en | є | не задана |
| Nokia N95 | battery.type | fallback uk | є | прихована: без джерела |
| Nokia X7-00 | chipset, ramMb | ru, en | є | не задана |
| Siemens C55 | chipset, ramMb, storage, storageExpandable, camera.rear, camera.front, battery.type, connectivity | fallback uk | є | не задана |
| Siemens C65 | chipset, ramMb, storageExpandable, camera.front, battery.type | fallback uk | є | не задана |
| Siemens CX65 | chipset, ramMb, storageExpandable, camera.front, battery.type | fallback uk | є | не задана |
| Siemens M50 | chipset, ramMb, storageExpandable, camera.rear, camera.front, battery.type, connectivity | fallback uk | є | не задана |
| Siemens M65 | chipset, ramMb, storage, storageExpandable, camera.front, battery.type | fallback uk | є | не задана |
| Siemens ME45 | chipset, ramMb, storage, storageExpandable, camera.rear, camera.front | fallback uk | є | не задана |
| Siemens S55 | chipset, ramMb, storage, storageExpandable, camera.front, battery.type | fallback uk | є | не задана |
| Siemens S65 | chipset, ramMb, camera.front, battery.type | fallback uk | є | не задана |
| Siemens SK65 | chipset, ramMb, storageExpandable, camera.rear, camera.front, battery.type | fallback uk | заглушка | не задана |
| Siemens SL55 | chipset, ramMb, storageExpandable, camera.rear, camera.front | fallback uk | є | не задана |
| Siemens SXG75 | chipset, ramMb, storage, battery.type, os | ru, en | є | не задана |
