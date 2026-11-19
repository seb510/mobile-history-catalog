import { readdir, readFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import YAML from 'yaml';

const images = new Map();
for (const locale of ['uk', 'ru', 'en']) {
  const dir = 'src/data/phones/' + locale;
  for (const file of await readdir(dir)) {
    if (!file.endsWith('.md')) continue;
    const source = await readFile(dir + '/' + file, 'utf8');
    const data = YAML.parse(source.split('---')[1]);
    for (const url of [data.image, data.evolutionImage?.image, ...(data.gallery ?? []).map(frame => frame.image)]) {
      if (!url || !/^https?:\/\//.test(url)) continue;
      if (!images.has(url)) images.set(url, new Set());
      images.get(url).add(file.slice(0, -3));
    }
  }
}

const paused = new Map();
let ok = 0, broken = 0, unverified = 0;
for (const [url, models] of images) {
  const host = new URL(url).hostname;
  let issue = paused.get(host);
  let missing = false;
  if (!issue) {
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'MobileHistoryArchive/1.0 (phone photo availability audit)', Range: 'bytes=0-511' },
        signal: AbortSignal.timeout(10000),
      });
      const type = response.headers.get('content-type') ?? '';
      await response.body?.cancel();
      if (!response.ok || !type.startsWith('image/')) {
        issue = 'HTTP ' + response.status + ' ' + type;
        missing = [404, 410].includes(response.status) || (response.ok && !type.startsWith('image/'));
        if (response.status === 429) paused.set(host, 'host rate-limited this run');
      }
    } catch (error) {
      issue = error.cause?.code || error.name;
      if (['ENOTFOUND', 'EAI_AGAIN'].includes(issue)) paused.set(host, issue);
    }
    await delay(200);
  }
  if (!issue) { ok++; continue; }
  if (missing) broken++; else unverified++;
  console.log(missing ? 'BROKEN' : 'UNVERIFIED', [...models].join(', '), issue, url);
}
console.log(`Checked ${images.size} distinct images: ${ok} OK, ${broken} broken, ${unverified} unverified.`);
if (broken || unverified) process.exitCode = 1;
