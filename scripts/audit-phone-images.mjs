import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import sharp from 'sharp';

// Offline inventory: remote URLs are counted, not treated as verified downloads.
const records = [];
for (const file of fs.readdirSync('src/data/phones/uk').filter(file => file.endsWith('.md'))) {
  const data = YAML.parse(fs.readFileSync(`src/data/phones/uk/${file}`, 'utf8').split('---')[1]);
  const images = [data.image && { image: data.image, imageCredit: data.imageCredit, imageSourceUrl: data.imageSourceUrl }, ...(data.gallery ?? [])].filter(Boolean);
  const issues = [];
  for (const image of images) {
    if (!image.imageCredit || !image.imageSourceUrl) issues.push(`Missing attribution: ${image.image}`);
    if (!image.image.startsWith('/')) continue;
    const local = path.resolve('public', `.${image.image}`);
    if (!local.startsWith(`${path.resolve('public')}${path.sep}`) || !fs.existsSync(local)) {
      issues.push(`Missing local file: ${image.image}`);
      continue;
    }
    try {
      const { width, height } = await sharp(local).metadata();
      if (!width || !height) issues.push(`Invalid dimensions: ${image.image}`);
    } catch {
      issues.push(`Unreadable image: ${image.image}`);
    }
  }
  records.push({ slug: file.replace(/\.md$/, ''), primary: !data.image ? 'missing' : data.image.startsWith('/') ? 'local' : 'remote', frames: images.length, remoteFrames: images.filter(item => /^https?:/.test(item.image)).length, issues });
}
const summary = {
  models: records.length,
  localPrimary: records.filter(item => item.primary === 'local').length,
  remotePrimary: records.filter(item => item.primary === 'remote').length,
  missingPrimary: records.filter(item => item.primary === 'missing').map(item => item.slug),
  issues: records.flatMap(item => item.issues.map(issue => `${item.slug}: ${issue}`)),
};
fs.writeFileSync('docs/phone-image-inventory.json', JSON.stringify({ date: new Date().toISOString().slice(0, 10), method: 'Offline Ukrainian canonical inventory; attribution presence and local-file decoding, not remote availability or license verification', summary, records }, null, 2) + '\n');
console.log(JSON.stringify(summary, null, 2));
if (summary.issues.length) process.exitCode = 1;
