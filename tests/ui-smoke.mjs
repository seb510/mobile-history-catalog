import assert from 'node:assert/strict';
import { preview } from 'astro';
import { chromium } from 'playwright-core';

const server = process.env.UI_BASE_URL ? null : await preview({ server: { host: '127.0.0.1', port: 0 } });
const origin = process.env.UI_BASE_URL ?? `http://127.0.0.1:${server.port}`;
let browser;
try {
  browser = await chromium.launch({ channel: process.env.UI_BROWSER ?? (process.platform === 'win32' ? 'msedge' : 'chrome') });
  for (const design of ['magazine', 'modern']) {
    for (const width of [320, 1280]) {
      const context = await browser.newContext({ baseURL: origin, viewport: { width, height: 800 }, reducedMotion: 'reduce' });
      await context.addInitScript(edition => {
        if (window !== window.top || !/^https?:$/.test(location.protocol)) return;
        localStorage.setItem('mobile-history:privacy', JSON.stringify({ version: 1, theme: true, at: Date.now() }));
        localStorage.setItem('mobile-history:design', edition);
      }, design);
      await context.route('**/*', route => new URL(route.request().url()).origin === new URL(origin).origin ? route.continue() : route.abort());
      const page = await context.newPage();
      page.setDefaultTimeout(9000);
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto('/catalog/');
      assert.equal(await page.locator('html').getAttribute('data-design') ?? 'magazine', design);
      const filters = page.locator('[data-filter-toggle]');
      if (await filters.isVisible() && await filters.getAttribute('aria-expanded') === 'false') await filters.click();
      const brand = page.locator('[data-select-name="brand"]');
      await brand.locator('[data-select-trigger]').click();
      await brand.locator('[role=option][data-value=Nokia]').click();
      const card = page.locator('[data-phone-card][data-slug=nokia-n95] [data-phone-card-link]');
      await card.click();
      await page.waitForURL('**/phones/nokia-n95/');
      await page.goBack();
      await page.waitForFunction(() => document.activeElement?.closest('[data-phone-card]')?.dataset.slug === 'nokia-n95');
      assert.equal(new URL(page.url()).searchParams.get('brand'), 'Nokia');

      await page.goto('/favorites/');
      await page.locator('[data-favorites-empty]').waitFor();
      assert.equal(await page.locator('[data-phone-card]').count(), 0);
      await page.locator('[data-collection-add]').click();
      await page.locator('[data-collection-search]').fill('нокіа н95');
      await page.locator('[data-collection-choice][data-slug=nokia-n95]').click();
      const period = page.locator('[data-period-dialog]');
      await period.locator('[name=start]').fill('2008');
      await period.locator('[type=submit]').click();
      await page.locator('[data-period-open]').click();
      await period.locator('[name=start]').fill('2009');
      await period.locator('[type=submit]').click();
      await page.reload();
      await page.locator('[data-period-open]').waitFor();
      assert.match(await page.locator('[data-period-label]').innerText(), /2009/);
      assert.equal(await page.locator('[data-phone-card]').count(), 1);
      assert.equal(await page.locator('[data-favorite-toggle]').getAttribute('aria-pressed'), 'true');
      assert.equal(await page.locator('[data-card-video]').isVisible(), true);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);

      await page.locator('[data-card-video]').click();
      await page.locator('#card-video-dialog[open]').waitFor();
      await page.keyboard.press('Escape');
      await page.locator('[data-favorite-toggle]').click();
      await page.locator('[data-favorites-empty]').waitFor();
      await page.evaluate(() => localStorage.setItem('mobile-history:favorites', JSON.stringify(['nokia-n95'])));
      await page.reload();
      await page.locator('[data-legacy-item] [data-favorite-toggle]').click();
      await page.locator('[data-favorite-item]:visible [data-period-open]').waitFor();
      assert.equal(await page.locator('[data-legacy-section]').isVisible(), false);

      await page.goto('/');
      const trigger = page.locator('button[aria-controls=phone-evolution]');
      await trigger.click();
      const frame = page.locator('[data-evolution-frame][data-active]');
      const first = await frame.locator('.scene-links a[href*="/phones/"]').getAttribute('href');
      assert.equal(await frame.locator('a[href*="/compare/"]').count(), 0);
      await page.locator('[data-evolution-next]').click();
      const pair = frame.locator('a[href*="/compare/"]');
      await pair.waitFor();
      const params = new URL(await pair.getAttribute('href'), origin).searchParams;
      assert.equal(params.get('a'), first.split('/').at(-2));
      assert.equal(params.get('b'), (await frame.locator('.scene-links a[href*="/phones/"]').getAttribute('href')).split('/').at(-2));
      if (width === 320) {
        await page.locator('#phone-evolution [data-view="classic"]').click();
        await page.setViewportSize({ width, height: 568 });
        for (let year = 1997; year <= 2026; year++) {
          await page.locator('[data-evolution-years]').getByRole('button', { name: String(year), exact: true }).click();
          const active = page.locator(`[data-evolution-frame][data-active][data-announcement^="${year}"]`);
          await active.waitFor();
          const description = await active.locator('.description').boundingBox();
          const links = await active.locator('.scene-links').boundingBox();
          const art = await active.locator('.artwork, [data-privacy]').boundingBox();
          const controls = await page.locator('[data-evolution-controls]').boundingBox();
          assert.ok(art.height > 0 && art.y + art.height <= description.y, String(year));
          assert.ok(description.y + description.height <= links.y + 1 && links.y + links.height <= controls.y + 1, String(year));
          assert.ok(controls.y + controls.height <= 569 && links.x + links.width <= 321, String(year));
        }
      }
      await page.keyboard.press('Escape');
      await page.locator('#phone-evolution').waitFor({ state: 'hidden' });
      assert.equal(await trigger.evaluate(el => el === document.activeElement), true);
      for (const brand of ['nokia', 'siemens']) {
        await page.goto('/brands/' + brand + '/');
        const open = page.locator('button[aria-controls="brand-evolution"]');
        await open.click();
        const scene = page.locator('#brand-evolution');
        const frames = await scene.locator('[data-evolution-frame]').evaluateAll(items => items.map(el => ({
          year: el.dataset.evolutionYear,
          model: el.querySelector('h3').textContent,
          description: el.querySelector('.description')?.textContent,
          photo: el.querySelector('.artwork img')?.getAttribute('data-evolution-src') || el.querySelector('.artwork img')?.getAttribute('src'),
        })));
        const i = frames.findIndex((f, n) => f.year === frames[n + 1]?.year && f.year !== frames[n - 1]?.year && f.photo && frames[n + 1].photo);
        assert.ok(i >= 0, brand);
        const j = frames.findIndex((f, n) => n > i && f.year !== frames[i].year);
        assert.ok(j > i, brand);
        for (const n of [i, i + 1, j]) {
          const expected = frames[n];
          if (n === i + 1) await scene.locator('[data-evolution-next]').click();
          else await scene.locator('[data-evolution-years]').getByRole('button', { name: expected.year, exact: true }).click();
          const active = scene.locator('[data-evolution-frame][data-active]');
          await active.locator('h3').filter({ hasText: expected.model }).waitFor();
          assert.equal(await active.locator('.year').textContent(), expected.year);
          assert.ok(expected.description && expected.photo);
          assert.equal(await active.locator('.description').textContent(), expected.description);
          assert.equal(await active.locator('.artwork img').first().getAttribute('src'), expected.photo);
        }
        await page.keyboard.press('Escape');
        await scene.waitFor({ state: 'hidden' });
        assert.equal(await open.evaluate(el => el === document.activeElement), true);
      }
      for (const [platform, id] of [['android', 'android-7-0'], ['ios', 'ios-7']]) {
        await page.goto('/operating-systems/' + platform + '/');
        const jump = page.locator('[data-version-jump]');
        assert.equal(await jump.isVisible(), width === 320);
        if (width === 320) await jump.locator('summary').click();
        await page.locator('nav:visible a[href="#version-' + id + '"]').click();
        assert.equal(new URL(page.url()).hash, '#version-' + id);
      }
      assert.deepEqual(errors, []);
      console.log(`PASS ${design} ${width}px`);
      await context.close();
    }
  }
} finally {
  await browser?.close();
  await server?.stop();
}
