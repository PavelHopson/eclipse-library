const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto');
const origin = process.env.KOBOYO_ORIGIN || 'http://127.0.0.1:4217', route = '/mascots/koboyo/index.html';
if (!['http://127.0.0.1:4217', 'https://library.eclipse-forge.ru'].includes(origin)) throw Error('Unapproved QA origin');
const out = path.resolve(process.env.KOBOYO_QA_OUT || path.join(__dirname, '../reports/koboyo-gallery'));
const root = path.resolve(__dirname, '../web/mascots/koboyo');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json')));
fs.mkdirSync(out, { recursive: true });
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1050 }, acceptDownloads: true, permissions: ['clipboard-read', 'clipboard-write'] });
  const errors = [], requests = [], blocked = [], checks = [], downloads = [];
  await context.route('**/*', r => {
    const url = new URL(r.request().url());
    if (url.origin === origin || url.protocol === 'data:') return r.continue();
    blocked.push(url.href); return r.abort();
  });
  const p = await context.newPage();
  p.on('pageerror', e => errors.push(e.message));
  p.on('request', r => requests.push(r.url()));
  const ready = async () => { await p.waitForFunction(() => document.querySelector('#previewStage')?.dataset.frame === 'directions:4'); };
  const frame = async (kind, i) => { await p.locator(`[data-frame-kind="${kind}"][data-frame-index="${i}"]`).click(); await p.waitForFunction(v => document.querySelector('#previewStage').dataset.frame === v, `${kind}:${i}`); };
  try {
    await p.goto(origin + route); await ready();
    await p.waitForTimeout(350);
    const initialAssets = [...new Set(requests.filter(u => u.endsWith('.webp')))];
    assert.ok(initialAssets.length < 20); assert.ok(initialAssets.every(u => !u.includes('-reactions')));
    const initialBytes = initialAssets.reduce((n, u) => n + fs.statSync(path.join(root, 'assets', path.basename(u))).size, 0);
    checks.push('initial lazy load under 20 sheets; no reactions requested');
    await p.screenshot({ path: path.join(out, 'desktop.png') });
    const samples = new Set();
    for (const kind of ['directions', 'reactions']) for (let i = 0; i < 9; i++) {
      await frame(kind, i);
      samples.add(await p.locator('#mascotCanvas').evaluate(c => c.toDataURL()));
    }
    assert.ok(samples.size >= 9); checks.push('all 9 directions and 9 emotions render real pixels');
    await p.locator('#mascotSearch').fill('qzx-no-results');
    assert.ok(await p.locator('#emptyState').isVisible());
    await p.locator('#resetFilters').click();
    for (const category of ['animals', 'people', 'robots', 'styles']) {
      await p.locator(`[data-category="${category}"]`).click();
      const ids = await p.locator('[data-character]').evaluateAll(bs => bs.map(b => b.dataset.character));
      assert.ok(ids.length > 0); assert.ok(ids.every(id => manifest.items.find(i => i.id === id).category === category));
    }
    await p.locator('[data-category="all"]').click();
    while (await p.locator('#loadMore').isVisible()) await p.locator('#loadMore').click();
    assert.equal(await p.locator('[data-character]').count(), 58);
    checks.push('search/empty/reset, 4 categories, all 58 selectable after pagination');
    const final = manifest.items.at(-1);
    await p.locator(`[data-character="${final.id}"]`).focus(); await p.keyboard.press('Enter'); await ready();
    assert.equal(await p.locator('#selectedName').innerText(), final.name);
    await p.locator('#pet').focus(); await p.keyboard.press('Space');
    await p.waitForFunction(() => document.querySelector('#previewStage').dataset.frame.startsWith('reactions:'));
    checks.push('keyboard selection Enter / emotion Space');
    await p.locator('.kg-code summary').click();
    await p.locator('#copyCode').click();
    await p.waitForFunction(() => document.querySelector('#copyStatus').textContent.includes('скопирован'));
    assert.match(await p.locator('#copyStatus').innerText(), /скопирован/);
    assert.equal((await p.evaluate(() => navigator.clipboard.readText())).replace(/\r\n/g, '\n'), await p.locator('#reactCode').innerText());
    checks.push('clipboard contains actual selected React directions/reactions');
    for (const [selector, file] of [['#downloadDirections', final.directions], ['#downloadReactions', final.reactions], ['#downloadAll', manifest.archivePath]]) {
      const event = p.waitForEvent('download'); await p.locator(selector).click(); const d = await event;
      const target = path.join(out, d.suggestedFilename()); await d.saveAs(target);
      const actual = fs.readFileSync(target), source = fs.readFileSync(path.join(root, file));
      assert.equal(sha(actual), sha(source)); downloads.push({ file, bytes: actual.length, sha256: sha(actual) });
    }
    checks.push('two original WebP and full ZIP downloaded, hashes match');
    await p.locator('#staticMode').check(); await frame('directions', 4);
    const stage = await p.locator('#previewStage').boundingBox();
    await p.mouse.move(stage.x + 10, stage.y + 10);
    assert.equal(await p.locator('#previewStage').getAttribute('data-frame'), 'directions:4');
    await p.locator('#pet').click(); assert.equal(await p.locator('#pet').evaluate(el => el.getAnimations().length), 0);
    await p.locator('#staticMode').uncheck();
    await p.emulateMedia({ reducedMotion: 'reduce' });
    await p.waitForTimeout(100); await frame('directions', 4);
    await p.mouse.move(stage.x + 10, stage.y + 10);
    assert.equal(await p.locator('#previewStage').getAttribute('data-frame'), 'directions:4');
    checks.push('manual static and OS reduced motion stop pointer tracking and animation');
    await p.screenshot({ path: path.join(out, 'reduced-motion.png') });
    for (const width of [390, 320]) {
      await p.setViewportSize({ width, height: 844 }); await p.goto(origin + route); await ready();
      assert.ok(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      await p.screenshot({ path: path.join(out, `mobile-${width}.png`) });
    }
    checks.push('390/320 layout no horizontal overflow');
    const touch = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
    const phone = await touch.newPage(); await phone.goto(origin + route);
    await phone.locator('[data-character]').first().tap();
    await phone.waitForFunction(() => !document.querySelector('#pet').disabled);
    await phone.locator('#pet').tap();
    await phone.waitForFunction(() => document.querySelector('#previewStage').dataset.frame.startsWith('reactions:'));
    await touch.close(); checks.push('touch choice and reaction');
    const fail = await context.newPage();
    await fail.route('**/manifest.json', r => r.fulfill({ status: 503, body: 'unavailable' }));
    await fail.goto(origin + route); await fail.waitForSelector('#loadError:not([hidden])');
    await fail.unroute('**/manifest.json'); await fail.locator('#retryManifest').click();
    await fail.waitForFunction(() => !document.querySelector('#pet').disabled);
    await fail.close(); checks.push('manifest failure and real retry');
    const broken = await context.newPage();
    await broken.route('**/*-reactions.webp', r => r.abort());
    await broken.goto(origin + route); await broken.waitForFunction(() => !document.querySelector('#pet').disabled);
    await broken.locator('[data-frame-kind="reactions"]').first().click();
    await broken.waitForSelector('#retrySheet:not([hidden])');
    await broken.unroute('**/*-reactions.webp'); await broken.locator('#retrySheet').click();
    await broken.waitForFunction(() => !document.querySelector('#pet').disabled);
    await broken.close(); checks.push('sheet failure then real retry');
    await p.setViewportSize({ width: 1440, height: 1050 });
    await p.goto(origin + '/#guide/koboyo-page-mascot');
    await p.waitForSelector('#guideBody a[href="/mascots/koboyo/index.html"]');
    for (const name of ['index.html', 'downloads/koboyo-page-mascot.zip', 'README.md', 'LICENSE.txt']) {
      assert.ok(await p.locator(`#guideBody a[href="/mascots/koboyo/${name}"]`).count() > 0);
    }
    const guideDownload = p.waitForEvent('download');
    await p.locator('#guideBody a[href="/mascots/koboyo/downloads/koboyo-page-mascot.zip"]').click();
    const guideZip = await guideDownload;
    await guideZip.saveAs(path.join(out, 'guide-download.zip'));
    assert.equal(sha(fs.readFileSync(path.join(out, 'guide-download.zip'))), sha(fs.readFileSync(path.join(root, manifest.archivePath))));
    await p.locator('#guideBody a[href="/mascots/koboyo/index.html"]').click(); await ready();
    assert.ok(new URL(p.url()).pathname.endsWith('/mascots/koboyo/index.html'));
    checks.push('real guide hrefs, ZIP download from guide, click → rendered gallery');
    await p.locator('.kg-code summary').click();
    await p.evaluate(() => { navigator.clipboard.writeText = async () => { throw new Error('Test permission denial'); }; });
    await p.locator('#copyCode').click();
    await p.waitForSelector('#manualCopy:not([hidden])');
    assert.equal(await p.locator('#codeText').inputValue(), await p.locator('#reactCode').innerText());
    checks.push('clipboard denial exposes usable manual copy, no false success');
    assert.deepEqual(errors, []); assert.deepEqual(blocked, []);
    const report = { browser: browser.version(), checks, initialAssets: initialAssets.length, initialBytes, downloads, errors, blocked, renderedUniqueFrames: samples.size, production: false };
    fs.writeFileSync(path.join(out, 'qa.json'), JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
