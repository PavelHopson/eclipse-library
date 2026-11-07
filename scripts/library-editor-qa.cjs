// Windows local integration QA. Uses an isolated PostgreSQL cluster, real API and Chromium.
// Setup: npm install --prefix .artifacts/visual-qa/tools --no-save playwright@1.52.0 pg@8.13.1
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const { spawn, execFileSync } = require('node:child_process');
const assert = require('node:assert/strict');
const { chromium } = require('../.artifacts/visual-qa/tools/node_modules/playwright');
const repo = path.resolve(__dirname, '..');
const tools = path.join(repo, '.artifacts/visual-qa/tools');
const temp = fs.mkdtempSync(path.join(tools, 'editor-run-'));
const out = path.join(repo, '.artifacts/visual-qa/editor');
const pgBin = process.env.QA_PG_BIN || 'C:/postgres/bin';
const password = crypto.randomBytes(24).toString('hex');
const email = 'qa@example.test';
const report = { scope: 'Isolated real PostgreSQL + editor API + browser; no production writes', checks: [] };
const runPg = (exe, args, env = {}) => execFileSync(path.join(pgBin, exe + '.exe'), args, { windowsHide: true, stdio: exe === 'pg_ctl' ? 'ignore' : 'pipe', env: { ...process.env, ...env } });
const freePort = async () => { const s = http.createServer(); await new Promise(r => s.listen(0, '127.0.0.1', r)); const p = s.address().port; await new Promise(r => s.close(r)); return p; };
const mime = { '.html':'text/html', '.js':'text/javascript', '.mjs':'text/javascript', '.css':'text/css', '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.woff2':'font/woff2' };
let browser, api, server, pgStarted = false;
(async () => {
  fs.mkdirSync(out, { recursive: true });
  try {
    const pgPort = await freePort(), apiPort = await freePort();
    fs.writeFileSync(path.join(temp, 'pw'), password);
    runPg('initdb', ['-D', path.join(temp, 'db'), '-U', 'libraryqa', '--pwfile=' + path.join(temp, 'pw'), '--auth=scram-sha-256', '--encoding=UTF8', '--no-locale']);
    fs.rmSync(path.join(temp, 'pw'));
    runPg('pg_ctl', ['-D', path.join(temp, 'db'), '-l', path.join(temp, 'pg.log'), '-o', `-h 127.0.0.1 -p ${pgPort}`, '-w', 'start']); pgStarted = true;
    runPg('psql', ['-h','127.0.0.1','-p',String(pgPort),'-U','libraryqa','-d','postgres','-v','ON_ERROR_STOP=1','-f',path.join(repo,'editor-api/schema.sql')], { PGPASSWORD: password });
    const runtime = path.join(temp, 'runtime'); fs.cpSync(path.join(repo, 'editor-api'), runtime, { recursive: true });
    const web = path.join(repo, 'web');
    server = http.createServer((req, res) => {
      if (req.url.startsWith('/editor-api/')) {
        const upstream = http.request({ hostname:'127.0.0.1', port:apiPort, path:req.url.slice('/editor-api'.length), method:req.method, headers:req.headers }, response => { res.writeHead(response.statusCode, response.headers); response.pipe(res); });
        upstream.on('error', () => { res.writeHead(502); res.end(); }); req.pipe(upstream); req.on('close', () => { if (!req.complete) upstream.destroy(); }); res.on('close', () => upstream.destroy()); return;
      }
      let file; try { file = path.resolve(web, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname === '/' ? '/index.html' : new URL(req.url, 'http://localhost').pathname)); } catch { res.writeHead(400); return res.end(); }
      const relative = path.relative(web, file); if (relative.startsWith('..') || path.isAbsolute(relative)) { res.writeHead(403); return res.end(); }
      fs.readFile(file, (e, data) => { res.writeHead(e ? 404 : 200, { 'content-type':mime[path.extname(file)] || 'application/octet-stream' }); res.end(e ? 'Not found' : data); });
    });
    await new Promise(r => server.listen(0, '127.0.0.1', r));
    const base = `http://127.0.0.1:${server.address().port}`;
    api = spawn(process.execPath, [path.join(runtime,'server.mjs')], { windowsHide:true, stdio:['ignore','ignore','pipe'], env:{ ...process.env, PORT:String(apiPort), DATABASE_URL:`postgresql://libraryqa:${password}@127.0.0.1:${pgPort}/postgres`, EDITOR_EMAIL:email, EDITOR_PASSWORD:password, IMAGE_DIR:path.join(temp,'images'), ALLOWED_ORIGIN:base } });
    let apiError = ''; api.stderr.on('data', chunk => { apiError += chunk.toString().split(password).join('[redacted]'); });
    let ready = false;
    for (let i=0;i<60;i++) { try { if ((await fetch(`http://127.0.0.1:${apiPort}/healthz`)).ok) { ready=true; break; } } catch {} await new Promise(r => setTimeout(r,100)); }
    assert.ok(ready, 'API startup: ' + apiError.slice(0,1500));
    browser = await chromium.launch({ headless:true });
    const page = await browser.newPage({ viewport:{width:1440,height:1000} });
    const errors=[]; page.on('pageerror', e => errors.push(e.message));
    await page.goto(base + '/login.html');
    await page.locator('[name=email]').fill(email); await page.locator('[name=password]').fill('wrong-password-for-qa');
    await page.locator('#login-form button').click(); await page.getByText('Неверный email или пароль.').waitFor(); report.checks.push('wrong password rejected');
    await page.locator('[name=password]').fill(password); await page.locator('#login-form button').click();
    await page.waitForURL('**/editor.html'); await page.locator('#editor-view').waitFor(); report.checks.push('login through UI');
    await page.locator('#image-file').setInputFiles({name:'large.png',mimeType:'image/png',buffer:Buffer.alloc(6*1024*1024+1)});
    await page.getByText('Изображение должно быть не больше 6 МБ.',{exact:true}).waitFor();
    assert.equal(await page.locator('#image-file').evaluate(el=>el.files.length),0); report.checks.push('oversized upload rejected before save');
    const png = await page.screenshot();
    const dataTransfer = await page.evaluateHandle(bytes => { const d=new DataTransfer(); d.items.add(new File([new Uint8Array(bytes)], 'QA-example.png', {type:'image/png'})); return d; }, [...png]);
    await page.locator('#upload-dropzone').dispatchEvent('drop', {dataTransfer}); await dataTransfer.dispose();
    assert.equal(await page.locator('#image-file').evaluate(el => el.files.length),1); report.checks.push('drag and drop image');
    await page.locator('.upload-preview').waitFor();
    await page.waitForFunction(()=>document.querySelector('.upload-preview').naturalWidth>0);
    await page.setViewportSize({width:390,height:844}); await page.locator('#upload-dropzone').scrollIntoViewIfNeeded();
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
    await page.screenshot({path:path.join(out,'editor-preview-mobile.png')}); await page.setViewportSize({width:1440,height:1000});
    report.checks.push('upload preview and mobile editor');
    const prompt = 'QA full prompt. '.repeat(150);
    await page.locator('#prompt-form [name=prompt]').fill(prompt);
    await page.route('**/api/editor/prompts/*/image',route=>route.request().method()==='POST'?route.abort():route.continue());
    await page.locator('#prompt-form button[type=submit]').click(); await page.locator('#save-error').filter({hasText:'Не удалось'}).waitFor();
    assert.equal(await page.locator('#prompt-form [name=prompt]').inputValue(),prompt);
    await page.unroute('**/api/editor/prompts/*/image');
    await page.locator('#prompt-form button[type=submit]').click();
    await page.waitForFunction(()=>!document.querySelector('#prompt-form button[type=submit]').disabled);
    const saved = await page.evaluate(async () => (await fetch('/editor-api/api/editor/prompts')).json()); assert.equal(saved.examples.length,1); report.checks.push('failed upload retry keeps text and reuses draft');
    await page.getByRole('searchbox',{name:'Поиск примеров'}).fill('missing-example'); assert.equal(await page.locator('.editor-list-row').count(),0); await page.getByRole('searchbox',{name:'Поиск примеров'}).fill(''); await page.getByRole('combobox',{name:'Статус примеров'}).selectOption('published'); assert.equal(await page.locator('.editor-list-row').count(),0); await page.getByRole('combobox',{name:'Статус примеров'}).selectOption('draft'); await page.locator('.editor-list-row').first().click();
    const card = page.locator('.editor-card').first(); await card.waitFor(); report.checks.push('search and status filters');
    await page.waitForFunction(() => {const i=document.querySelector('.editor-card-image'); return i && i.complete && i.naturalWidth>0;});
    await page.reload(); await page.locator('.editor-list-row').first().click(); await card.waitFor(); assert.equal(await card.locator('textarea[aria-label]').inputValue(), prompt.trim()); report.checks.push('image and full prompt survive reload');
    const promptField=card.locator('textarea[aria-label]'); await promptField.fill('Unsaved local edit');
    const cardId=await card.getAttribute('data-id');
    await page.evaluate(async id => { const r=await fetch('/editor-api/api/editor/prompts/'+id,{method:'PATCH',headers:{'content-type':'application/json'},body:JSON.stringify({description:'Updated by another session'})}); if(!r.ok)throw Error('QA update failed'); },cardId);
    await page.locator('.editor-feedback').filter({hasText:'Есть изменения на сервере'}).waitFor();
    assert.equal(await promptField.inputValue(),'Unsaved local edit'); assert.equal(await card.getByRole('button',{name:'Опубликовать',exact:true}).isDisabled(),true);
    await promptField.fill(prompt.trim()); await card.getByRole('button',{name:'Сохранить изменения',exact:true}).click();
    await card.locator('.editor-feedback').filter({hasText:'Пример изменён в другой вкладке'}).waitFor();
    assert.equal(await promptField.inputValue(),prompt.trim()); report.checks.push('stale save rejected without losing text');
    page.once('dialog',d=>d.accept()); await card.getByRole('button',{name:'Отменить правки'}).click();
    await card.locator('.editor-card-metadata summary').click(); await card.getByLabel('Стиль из каталога').selectOption({index:1});
    await card.getByRole('button',{name:'Сохранить изменения',exact:true}).click();
    await page.waitForFunction(()=>!document.querySelector('.editor-card .editor-feedback')?.textContent.includes('Есть несохранённые'));
    await card.getByRole('button',{name:'Предпросмотр',exact:true}).click(); await page.locator('.editor-preview-dialog[open]').waitFor(); await page.getByRole('button',{name:'Закрыть просмотр'}).click();
    await page.setViewportSize({width:390,height:844}); await page.screenshot({path:path.join(out,'editor-detail-mobile.png')}); assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false); await page.setViewportSize({width:1440,height:1000});
    report.checks.push('cancel edits, style selection and preview');
    report.checks.push('realtime preserves unsaved edits');
    await card.getByRole('button',{name:'Опубликовать',exact:true}).click(); await card.getByRole('button',{name:'Снять с публикации'}).waitFor();
    await page.getByRole('button',{name:'Закрыть редактор'}).click(); await page.goto(base + '/images.html#project-examples');
    const image = page.locator('.image-project-example__image').first(); await image.waitFor();
    await image.scrollIntoViewIfNeeded(); await page.waitForFunction(() => { const i=document.querySelector('.image-project-example__image'); return i && i.complete && i.naturalWidth>0; });
    report.checks.push('published image served by real API'); assert.equal(await page.locator('.image-project-example__head a').count(),1); report.checks.push('style link visible publicly');
    const details=page.locator('.image-project-example__prompt-details').first(); assert.equal(await details.getAttribute('open'),null); await details.locator('summary').click(); assert.notEqual(await details.getAttribute('open'),null); report.checks.push('long prompt expands');
    await image.click(); await page.locator('#image-lightbox[open]').waitFor(); assert.equal(page.context().pages().length,1); await page.keyboard.press('Escape'); assert.equal(await page.locator('#image-lightbox').getAttribute('open'),null); report.checks.push('image opens on page and closes with Escape');
    await page.screenshot({path:path.join(out,'published-desktop.png')});
    await page.setViewportSize({width:390,height:844}); await image.scrollIntoViewIfNeeded();
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth>innerWidth+1),false);
    await page.screenshot({path:path.join(out,'published-mobile.png')}); report.checks.push('published mobile layout');
    await page.goto(base+'/editor.html'); await page.locator('#logout').click();
    assert.equal((await page.request.get(base+'/editor-api/api/editor/prompts')).status(),401); report.checks.push('logout revokes access');
    assert.deepEqual(errors,[]); report.passed=true;
  } catch(e) { report.passed=false; report.error=e.message; process.exitCode=1; }
  finally {
    if(browser) await browser.close();
    if(api && api.exitCode===null) { const exited=new Promise(r=>api.once('exit',r)); api.kill(); await exited; }
    if(server) { server.closeAllConnections(); await new Promise(r=>server.close(r)); }
    if(pgStarted && fs.existsSync(path.join(temp,'db/postmaster.pid'))) runPg('pg_ctl',['-D',path.join(temp,'db'),'-m','fast','-w','stop']);
    fs.rmSync(temp,{recursive:true,force:true});
    fs.writeFileSync(path.join(out,'report.json'), JSON.stringify(report,null,2)); console.log(JSON.stringify(report,null,2));
  }
})();
