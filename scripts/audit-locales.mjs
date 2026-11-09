import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

// Structural and language heuristics, not a factual or literary review.
const root = fileURLToPath(new URL('../', import.meta.url));
const base = path.join(root, 'src/data/phones');
const locales = ['uk', 'ru', 'en'];
const issues = [];
const add = (code, file, field, detail) => issues.push({ code, file, field, detail });
const flatten = (value, prefix = '', result = {}) => {
  for (const [key, item] of Object.entries(value)) {
    const name = prefix ? `${prefix}.${key}` : key;
    if (item && typeof item === 'object') flatten(item, name, result);
    else result[name] = item;
  }
  return result;
};
const cyrillic = /[А-Яа-яІіЇїЄєҐґ]/u;
const ukrainianOnly = /[ІіЇїЄєҐґ]/u;
const files = fs.readdirSync(path.join(base, 'uk')).filter(file => file.endsWith('.md')).sort();
let records = 0;
for (const file of files) {
  const documents = {};
  for (const locale of locales) {
    const relative = `${locale}/${file}`;
    const filename = path.join(base, relative);
    if (!fs.existsSync(filename)) { add('missing-locale', relative, '', 'No own translation'); continue; }
    const raw = fs.readFileSync(filename, 'utf8');
    const header = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/u);
    if (!header) { add('frontmatter', relative, '', 'Missing YAML header'); continue; }
    const data = parse(header[1]);
    const body = raw.slice(header[0].length);
    documents[locale] = flatten(data);
    records++;
    for (const [field, value] of Object.entries(documents[locale])) {
      if (typeof value !== 'string') continue;
      // Names of photographers, licences and source URLs need not be translated.
      if (!/Credit|SourceUrl|(?:^|\.)image$/u.test(field)) {
        if (locale === 'en' && cyrillic.test(value)) add('english-cyrillic', relative, field, value);
        if (locale === 'ru' && ukrainianOnly.test(value)) add('russian-ukrainian', relative, field, value);
      }
      if (/Credit/u.test(field) && locale === 'en' && /Фото:|через Wikimedia|суспільне надбання|особистий архів/u.test(value)) add('credit-label', relative, field, value);
      if (/Credit/u.test(field) && locale === 'uk' && /Photo:/u.test(value)) add('credit-label', relative, field, value);
      // Only flag descriptive English phrases; model/colour names alone are valid alt text.
      if (locale !== 'en' && /\.alt$/u.test(field) && !cyrillic.test(value) && /\b(view|front of|rear of|beside|on display)\b/iu.test(value)) add('untranslated-alt', relative, field, value);
    }
    if (locale === 'en') {
      const prose = body.replace(/\]\([^)]+\)/gu, ']');
      if (cyrillic.test(prose)) add('english-body-cyrillic', relative, 'body', 'Review Cyrillic prose or proper names');
    }
    for (const match of body.matchAll(/\]\((\/[^)]+)\)/gu)) {
      const url = new URL(match[1], 'https://audit.invalid');
      const expected = locale === 'uk' ? !/^\/(?:ru|en)\//u.test(url.pathname) : url.pathname.startsWith(`/${locale}/`);
      if (!expected) add('link-locale', relative, 'body', match[1]);
      if (url.pathname.replace(/^\/(?:ru|en)/u, '') === '/compare/') {
        for (const slot of ['a', 'b']) {
          const slug = url.searchParams.get(slot);
          if (slug && !files.includes(`${slug}.md`)) add('compare-slug', relative, slot, slug);
        }
      }
    }
  }
  const canonical = documents.uk;
  if (!canonical) continue;
  for (const locale of ['ru', 'en']) {
    const translated = documents[locale];
    if (!translated) continue;
    for (const field of new Set([...Object.keys(canonical), ...Object.keys(translated)])) {
      if (!(field in canonical) || !(field in translated)) add('field-presence', `${locale}/${file}`, field, 'Field differs from uk');
      else if ((typeof canonical[field] === 'number' || typeof canonical[field] === 'boolean') && canonical[field] !== translated[field]) add('numeric-value', `${locale}/${file}`, field, { uk: canonical[field], value: translated[field] });
      else if (/(?:^image$|\.image$|SourceUrl$)/u.test(field) && canonical[field] !== translated[field]) add('asset-source', `${locale}/${file}`, field, 'Image or source differs from uk');
    }
  }
}
const brandBase = path.join(root, 'src/data/brands');
const brandFiles = fs.readdirSync(path.join(brandBase, 'uk')).filter(file=>file.endsWith('.md'));
let brandRecords = 0;
for (const file of brandFiles) {
  const canonicalRaw = fs.readFileSync(path.join(brandBase,'uk',file),'utf8');
  const canonical = parse(canonicalRaw.match(/^---\r?\n([\s\S]*?)\r?\n---/u)[1]);
  for (const locale of locales) {
    const relative = `brands/${locale}/${file}`;
    const filename = path.join(brandBase,locale,file);
    if (!fs.existsSync(filename)) { add('missing-brand-locale',relative,'','No own brand translation'); continue; }
    const raw = fs.readFileSync(filename,'utf8');
    const header = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/u);
    if (!header) { add('frontmatter',relative,'','Missing YAML header'); continue; }
    brandRecords++;
    const data = parse(header[1]);
    for (const field of ['name','founded','logo','logoSourceUrl']) {
      if (data[field]!==canonical[field]) add('brand-identity',relative,field,'Canonical identity or asset differs');
    }
    const prose = raw.slice(header[0].length).replace(/\]\([^)]+\)/gu,']');
    if (locale==='en' && cyrillic.test(prose)) add('english-body-cyrillic',relative,'body','Review untranslated brand prose');
    if (locale==='ru' && ukrainianOnly.test(prose)) add('russian-ukrainian',relative,'body','Review untranslated brand prose');
    for (const field of ['country','logoCredit']) {
      if (locale==='en' && cyrillic.test(data[field]||'')) add('english-cyrillic',relative,field,data[field]);
      if (locale==='ru' && ukrainianOnly.test(data[field]||'')) add('russian-ukrainian',relative,field,data[field]);
    }
  }
}
const report = { models: files.length, records, brands: brandFiles.length, brandRecords, checks: ['own locales', 'own brand locales and identity', 'field presence', 'numeric/boolean consistency', 'image/source consistency', 'language heuristics', 'internal Markdown link locale', 'comparison slugs'], limitation: 'Passing does not certify translation quality or factual accuracy. Proper names and brand colour names may remain untranslated.', issues };
fs.writeFileSync(path.join(root, 'docs/locale-audit.json'), JSON.stringify(report, null, 2) + '\n');
console.log(`Locale audit: ${files.length} models / ${records} phone records; ${brandFiles.length} brands / ${brandRecords} brand records; ${issues.length} issues. Report: docs/locale-audit.json`);
if (issues.length) process.exitCode = 1;
