// Run only against the approved preview or production in a fresh, isolated browser profile.
const { chromium } = require(process.env.GWEN_PLAYWRIGHT_PATH || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const runName = process.env.GWEN_QA_RUN || 'qa-initial';
assert.match(runName, /^[a-z0-9-]+$/);
const origin = process.env.GWEN_QA_ORIGIN || 'http://127.0.0.1:4186';
assert.ok(['http://127.0.0.1:4186', 'https://library.eclipse-forge.ru'].includes(origin));
const output = path.join(root, '.artifacts/gwen', runName);
fs.mkdirSync(output, { recursive: true });
const directory = origin + '/experiments/gwen-reveal/';
const base = directory + 'index.html';
const result = { browser: '', checks: [], screenshots: [], diagnostics: [], errors: [], blockedRemote: [] };
async function check(name, fn) { try { await fn(); result.checks.push({name, passed:true}); } catch(e) {result.checks.push({name, passed:false, error:e.message});} }
async function capture(page,name,fullPage=false) { const file=path.join(output,name+'.png'); await page.screenshot({path:file,fullPage}); result.screenshots.push(file); }
async function pixel(page, id, x, y) { return page.evaluate(({id,x,y})=>{const c=document.getElementById(id), r=c.getBoundingClientRect();return [...c.getContext('2d').getImageData(Math.floor((x-r.left)*c.width/r.width),Math.floor((y-r.top)*c.height/r.height),1,1).data];},{id,x,y}); }

(async()=>{
  const browser = await chromium.launch({headless:true, executablePath:process.env.GWEN_BROWSER_PATH || undefined});
  result.browser=browser.version();
  async function isolatedContext(options) {
    const context = await browser.newContext(options);
    await context.route('**/*',route=>{
    const u=new URL(route.request().url());
    if(u.origin===origin) return route.continue();
    result.blockedRemote.push(u.origin);return route.abort();
    });
    return context;
  }
  const context=await isolatedContext({viewport:{width:1440,height:900},deviceScaleFactor:1,reducedMotion:'no-preference'});
  const page=await context.newPage();
  page.on('pageerror',e=>result.errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')result.errors.push(m.text());});
  try {
    await page.goto(base); await page.waitForFunction(()=>window.gwenDiagnostics?.().ready);
    await page.mouse.move(5,5); await page.locator('#repair').click();
    await page.waitForTimeout(1000); await capture(page,'desktop-1440');
    await check('assets, fonts, no scroll on desktop',async()=>{
      const info=await page.evaluate(()=>({w:innerWidth,h:innerHeight,sw:document.documentElement.scrollWidth,sh:document.documentElement.scrollHeight,fonts:document.fonts.status,failed:[...document.images].filter(i=>!i.complete||!i.naturalWidth).length}));
      assert.equal(info.w,info.sw);assert.equal(info.h,info.sh);assert.equal(info.fonts,'loaded');assert.equal(info.failed,0);
    });
    const rect=await page.locator('#hero').boundingBox();
    const face={x:rect.x+rect.width*.5,y:rect.y+rect.height*.4};
    const masked=await pixel(page,'hero',face.x,face.y);
    await page.mouse.move(face.x,face.y,{steps:12});await page.waitForTimeout(800);
    await capture(page,'pointer-reveal');
    const revealed=await pixel(page,'hero',face.x,face.y);
    await check('pointer reveals underlying portrait',async()=>assert.ok(masked.some((v,i)=>i<3&&Math.abs(v-revealed[i])>12),JSON.stringify({masked,revealed})));
    await check('milk overlay does not paint over heroine',async()=>assert.ok((await pixel(page,'slime',face.x,face.y))[3]<10));
    await check('integrity decreases during reveal',async()=>assert.ok((await page.evaluate(()=>gwenDiagnostics())).integrity<100));
    await page.mouse.move(170,210,{steps:10});await page.waitForTimeout(300);
    await capture(page,'wall-goo');
    await check('milk appears on wall',async()=>assert.ok((await pixel(page,'slime',170,210))[3]>100));
    await page.mouse.down();await page.mouse.move(1190,245,{steps:8});await page.mouse.move(360,280,{steps:8});await page.mouse.up();
    await capture(page,'fast-drag');
    await page.locator('#repair').click();
    await check('repair resets integrity and clears visible trail',async()=>{
      assert.equal((await page.evaluate(()=>gwenDiagnostics())).integrity,100);
      assert.ok((await pixel(page,'slime',170,210))[3]<5);
    });
    await page.locator('#reveal').focus();await page.keyboard.press('Enter');
    await check('keyboard reveal',async()=>assert.equal((await page.evaluate(()=>gwenDiagnostics())).faceOpen,true));
    await capture(page,'full-face');
    await page.locator('#repair').click();
    await page.getByRole('button',{name:'Галерея',exact:true}).focus();await page.keyboard.press('Enter');
    await check('dialog opens with original images',async()=>{assert.equal(await page.locator('#details').evaluate(d=>d.open),true);assert.equal(await page.locator('#details img').count(),2);});
    await capture(page,'gallery');
    await page.keyboard.press('Escape');
    await check('Escape closes dialog and restores focus',async()=>{assert.equal(await page.locator('#details').evaluate(d=>d.open),false);assert.equal(await page.evaluate(()=>document.activeElement.textContent),'Галерея');});
    await page.locator('#motion').click();
    const f1=await page.evaluate(()=>gwenDiagnostics().frames);await page.waitForTimeout(600);const f2=await page.evaluate(()=>gwenDiagnostics().frames);
    await check('manual pause stops rendering',async()=>assert.ok(f2-f1<=1));
    await context.close();

    const contexts=[];
    for(const viewport of [{width:1920,height:1080},{width:1366,height:768},{width:390,height:844}]){
      const c=await isolatedContext({viewport,deviceScaleFactor:1});contexts.push(c);
      const p=await c.newPage();p.on('pageerror',e=>result.errors.push(e.message));
      await p.goto(base);await p.waitForFunction(()=>window.gwenDiagnostics?.().ready);await p.mouse.move(1,1);await p.locator('#repair').click();await p.waitForTimeout(950);
      await capture(p,`layout-${viewport.width}`);
      await check(`visible controls at ${viewport.width}x${viewport.height}`,async()=>{
        const boxes=await p.locator('#repair,#reveal,#motion,.brand,#demo').evaluateAll(nodes=>nodes.map(n=>{const r=n.getBoundingClientRect();return {id:n.id||n.className,x:r.x,y:r.y,right:r.right,bottom:r.bottom};}));
        for(const b of boxes) assert.ok(b.x>=0&&b.y>=0&&b.right<=viewport.width+1&&b.bottom<=viewport.height+1,JSON.stringify(b));
        assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),viewport.width);
        assert.equal(await p.locator('.hero-wrap').evaluate(n=>getComputedStyle(n).opacity),'1','The opaque heroine must occlude the graffiti.');
      });
      if(viewport.width===1920){
        const h=await p.locator('#hero').boundingBox();
        const start=performance.now();let i=0;
        while(performance.now()-start<3200){await p.mouse.move(h.x+h.width*(.5+.12*Math.sin(i*.2)),h.y+h.height*(.35+.08*Math.cos(i*.2)));await p.waitForTimeout(16);i++;}
        result.diagnostics.push(await p.evaluate(()=>gwenDiagnostics()));
      }
      if(viewport.width===390){await p.locator('#reveal').click();await check('mobile button reveal',async()=>assert.equal((await p.evaluate(()=>gwenDiagnostics())).faceOpen,true));await capture(p,'mobile-face');}
      await c.close();
    }
    const reduced=await isolatedContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
    const rp=await reduced.newPage();await rp.goto(base);await rp.waitForFunction(()=>gwenDiagnostics().ready);await rp.waitForTimeout(300);
    await capture(rp,'reduced-motion');
    const rf=await rp.evaluate(()=>gwenDiagnostics().frames);await rp.waitForTimeout(500);
    await check('system reduced motion: no autopilot or CSS animations',async()=>{
      assert.ok((await rp.evaluate(()=>gwenDiagnostics().frames))-rf<=1);
      assert.equal(await rp.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0);
      assert.equal(await rp.locator('#demo').isDisabled(),true);
    });
    await rp.locator('#reveal').click();await check('reduced motion still reveals portrait',async()=>assert.equal((await rp.evaluate(()=>gwenDiagnostics())).faceOpen,true));
    await rp.emulateMedia({reducedMotion:'no-preference'});await rp.waitForTimeout(50);await check('live reduced-motion change',async()=>assert.equal((await rp.evaluate(()=>gwenDiagnostics())).reduced,false));
    await reduced.close();
    const failure=await isolatedContext({viewport:{width:1440,height:900}});const fp=await failure.newPage();
    await fp.route('**/face.webp',route=>route.abort());await fp.goto(base);await fp.waitForFunction(()=>document.getElementById('load-status').textContent.includes('Не удалось'));
    await capture(fp,'asset-error');await check('asset error retains fallback and disables reveal',async()=>{
      assert.equal(await fp.locator('#reveal').isDisabled(),true);
      assert.equal(await fp.locator('#fallback').evaluate(i=>i.complete&&i.naturalWidth>0),true);
      assert.notEqual(await fp.evaluate(()=>getComputedStyle(document.body).cursor),'none');
    });await failure.close();
    const guideContext=await isolatedContext({viewport:{width:1440,height:1000}});const gp=await guideContext.newPage();
    await gp.goto(directory+'guide.html');await gp.evaluate(()=>document.fonts.ready);await capture(gp,'guide-cover');
    await gp.getByText('Открыть полный текст промпта',{exact:true}).click();
    await check('full original brief is readable',async()=>assert.ok((await gp.locator('.full-brief pre').textContent()).includes('КАЧЕСТВО / ПРИЁМКА')));
    await gp.setViewportSize({width:390,height:844});await gp.evaluate(()=>scrollTo(0,0));await capture(gp,'guide-mobile');
    await check('guide mobile does not overflow',async()=>assert.equal(await gp.evaluate(()=>document.documentElement.scrollWidth),390));
    await gp.setViewportSize({width:1440,height:1000});await gp.goto(origin+'/index.html#guide/gwen-stacy-canvas-reveal');
    await gp.waitForSelector('#guideBody h1',{timeout:10000}).catch(()=>{});await capture(gp,'library-guide');
    await check('library guide route loads',async()=>assert.ok((await gp.locator('body').innerText()).includes('Модуль 1. От идеи к проверяемому результату')));
    await guideContext.close();
    for (const viewport of [{width:1440,height:900},{width:1024,height:768},{width:390,height:844},{width:320,height:700}]) {
      const c=await isolatedContext({viewport,reducedMotion:'reduce'});const p=await c.newPage();
      const visibleAction=async locator=>{
        assert.equal(await locator.isVisible(),true);
        const b=await locator.boundingBox();assert.ok(b&&b.height>=44&&b.x>=0&&b.x+b.width<=viewport.width&&b.y>=0&&b.y+b.height<=viewport.height);
        assert.equal(await locator.evaluate(el=>{const r=el.getBoundingClientRect();return el.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2));}),true);
      };
      await p.goto(origin+'/animations.html');await p.evaluate(()=>document.fonts.ready);
      await check(`Gwen entry is visible and clickable at ${viewport.width}`,async()=>{
        await visibleAction(p.locator('.gwen-launch'));
        assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),viewport.width);
      });
      await capture(p,`navigation-library-${viewport.width}`);
      await p.locator('.gwen-launch').focus();
      await check(`entry keyboard focus at ${viewport.width}`,async()=>assert.equal(await p.locator('.gwen-launch').evaluate(el=>el.matches(':focus-visible')&&getComputedStyle(el).outlineStyle!=='none'),true));
      await p.keyboard.press('Enter');await p.waitForURL(base);await p.waitForFunction(()=>gwenDiagnostics().ready);
      await check(`return button is visible and separate from header at ${viewport.width}`,async()=>{
        await visibleAction(p.locator('.library-back'));
        const back=await p.locator('.library-back').boundingBox();const header=await p.locator('.topbar').boundingBox();
        assert.ok(back.y>=header.y+header.height);
      });
      await capture(p,`navigation-scene-${viewport.width}`);
      await p.locator('.library-back').focus();
      await check(`return keyboard focus at ${viewport.width}`,async()=>assert.equal(await p.locator('.library-back').evaluate(el=>el.matches(':focus-visible')&&getComputedStyle(el).clipPath==='none'),true));
      await p.keyboard.press('Enter');await p.waitForURL(origin+'/animations.html#gwen-experiment');
      await check(`round trip returns to Gwen entry at ${viewport.width}`,async()=>await visibleAction(p.locator('.gwen-launch')));
      await c.close();
    }
    const nojs=await isolatedContext({viewport:{width:390,height:844},javaScriptEnabled:false});const np=await nojs.newPage();
    await np.goto(base);
    await check('direct visit can return without JavaScript or browser history',async()=>{
      assert.equal(await np.locator('.library-back').isVisible(),true);
      await np.locator('.library-back').click();await np.waitForURL(origin+'/animations.html#gwen-experiment');
      assert.equal(await np.locator('.gwen-launch').isVisible(),true);
    });await nojs.close();
  } finally {
    fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(result,null,2));
    await browser.close();
    console.log(JSON.stringify(result,null,2));
    if(result.checks.some(c=>!c.passed)||result.errors.length) process.exitCode=1;
  }
})().catch(e=>{console.error(e);process.exitCode=1;});
