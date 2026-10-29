import { readdir, readFile, writeFile, access } from 'node:fs/promises';
import { parse } from 'yaml';

// Inventory only: a missing field is not proof of an incorrect or incomplete record.
// Old phones often have no camera, memory card slot or publicly documented RAM.
const base = new URL('../src/data/phones/', import.meta.url);
const fields = ['display.resolution', 'chipset', 'ramMb', 'storage', 'storageExpandable',
  'camera.rear', 'camera.front', 'battery.mah', 'battery.type', 'connectivity', 'os', 'simType'];
const readField = (data, field) => field === 'storage'
  ? data.storageMb ?? data.storageNote
  : field.split('.').reduce((value, key) => value?.[key], data);
const exists = async (path) => access(path).then(() => true, () => false);
const rows = [];
for (const file of (await readdir(new URL('uk/', base))).sort()) {
  if (!file.endsWith('.md')) continue;
  const source = await readFile(new URL(`uk/${file}`, base), 'utf8');
  const data = parse(source.split(/^---\s*$/m)[1]);
  if (!['Nokia', 'Siemens'].includes(data.brand)) continue;
  const missing = fields.filter((field) => readField(data, field) == null);
  const locales = [];
  for (const locale of ['ru', 'en']) {
    if (await exists(new URL(`${locale}/${file}`, base))) locales.push(locale);
  }
  rows.push(`| ${data.brand} ${data.model} | ${missing.join(', ') || '—'} | ${locales.join(', ') || 'fallback uk'} | ${data.image ? 'є' : 'заглушка'} | ${data.priceSourceUrl ? 'є джерело' : data.priceUsdAtLaunch != null ? 'прихована: без джерела' : 'не задана'} |`);
}
const report = `# Інвентаризація Nokia та Siemens

Згенеровано командою \`node scripts/audit-phone-data.mjs\`. Моделей: ${rows.length}.
Це список полів для ручної перевірки, а не оцінка достовірності заповнених характеристик.
Відсутні поля не заповнювати здогадками: підтверджену відсутність функції позначати текстом,
невідомі RAM/чипсет залишати порожніми. Числова пам’ять означає доступний користувачу обсяг.

| Модель | Поля без значення | Окремі переклади | Фото | Стартова ціна USD |
| :--- | :--- | :--- | :--- | :--- |
${rows.join('\n')}
`;
await writeFile(new URL('../docs/nokia-siemens-inventory.md', import.meta.url), report);
console.log(`Inventory written: ${rows.length} phones`);
