// Run: node scripts/library-visual-qa.cjs
// Setup: npm install --prefix .artifacts/visual-qa/tools --no-save playwright@1.52.0
// Browser: .artifacts/visual-qa/tools/node_modules/.bin/playwright install chromium
const { chromium } = require('../.artifacts/visual-qa/tools/node_modules/playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../web');
const out = path.resolve(__dirname, '../.artifacts/visual-qa/latest');
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  let name;
  try { name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400); return res.end(); }
  const file = path.resolve(root, '.' + (name === '/' ? '/index.html' : name));
  const relative = path.relative(root, file);
  if (relative.startsWith('..') || path.isAbsolute(relative)) { res.writeHead(403); return res.end(); }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
});
(async () => {
  let browser;
  const report = { scope: 'Static UI only; editor API, authenticated editing and uploads are not tested.', cases: [] };
  fs.mkdirSync(out, { recursive: true });
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    browser = await chromium.launch({ headless: true });
    for (const name of ['index', 'images', 'animations', 'registry', 'candidate-review', 'source-motion', 'animations-lab-archive', 'login', 'editor']) {
      for (const width of [320, 390, 768, 1024, 1440]) {
        const page = await browser.newPage({ viewport: { width, height: width < 500 ? 820 : 1000 } });
        const result = { name, width, errors: [], backendUnavailable: [], consoleErrors: [] };
        page.on('pageerror', e => result.errors.push(e.message));
        page.on('console', m => { if (m.type() === 'error') result.consoleErrors.push(m.text()); });
        page.on('response', r => {
          if (r.status() >= 400) {
            const url = new URL(r.url());
            (url.pathname.startsWith('/editor-api/') ? result.backendUnavailable : result.errors).push(r.status() + ' ' + url.pathname);
          }
        });
        await page.goto(`http://127.0.0.1:${server.address().port}/${name}.html`, { waitUntil: 'load' });
        await page.evaluate(() => document.fonts.ready);
        if (name === 'index') await page.locator('.card').first().waitFor();
        await page.waitForTimeout(350);
        result.metrics = await page.evaluate(() => {
          const nodes = [...document.querySelectorAll('.topbar-inner > *')].filter(el => el.getBoundingClientRect().width && getComputedStyle(el).display !== 'none');
          const overlappingHeader = nodes.some((a, i) => nodes.slice(i + 1).some(b => {
            const x = a.getBoundingClientRect(), y = b.getBoundingClientRect();
            return Math.min(x.right, y.right) - Math.max(x.left, y.left) > 1 && Math.min(x.bottom, y.bottom) - Math.max(x.top, y.top) > 1;
          }));
          return { overflow: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) > innerWidth + 1, overlappingHeader, bodyHeight: document.body.scrollHeight };
        });
        await page.screenshot({ path: path.join(out, `${name}-${width}.png`) });
        await page.emulateMedia({ reducedMotion: 'reduce' });
        result.reducedMotion = await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
        if (name === 'index' && width === 1440) {
          const literal = '<img src=x onerror="window.qaInjected=true">';
          await page.locator('#search').fill(literal);
          await page.waitForFunction(text => document.querySelector('[data-context-value="query"]')?.textContent.includes(text), literal);
          const chip = page.locator('[data-context-value="query"]');
          if (await chip.locator('img').count() || await page.evaluate(() => window.qaInjected === true)) result.errors.push('Search chip interpreted HTML');
          await chip.click();
          if (await page.locator('#search').inputValue()) result.errors.push('Search chip did not clear query');
          result.searchChipChecked = true;
        }
        report.cases.push(result);
        console.log(name, width, JSON.stringify(result.metrics), 'API unavailable:', result.backendUnavailable.length);
        await page.close();
      }
    }
    report.failures = report.cases.filter(r => r.errors.length || r.metrics.overflow || r.metrics.overlappingHeader).length;
    report.backendLimitedCases = report.cases.filter(r => r.backendUnavailable.length).length;
    console.log(JSON.stringify({ cases: report.cases.length, failures: report.failures, backendLimitedCases: report.backendLimitedCases, out }));
    process.exitCode = report.failures ? 1 : 0;
  } catch (error) { report.fatal = String(error); process.exitCode = 1; console.error(error); }
  finally { fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2)); if (browser) await browser.close(); server.close(); }
})();


