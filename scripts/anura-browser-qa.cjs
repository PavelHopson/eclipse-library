// Explicit preview/production allowlist, fresh browser context, no user profile or third-party requests.
const {chromium}=require(process.env.ANURA_PLAYWRIGHT_PATH || 'playwright');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const origin=process.env.ANURA_QA_ORIGIN || 'http://127.0.0.1:4186';
assert.ok(['http://127.0.0.1:4186','https://library.eclipse-forge.ru'].includes(origin),'Unapproved QA origin');
const scene=origin+'/experiments/anura/index.html';
const run=process.env.ANURA_QA_RUN || 'qa-v1'; assert.match(run,/^[a-z0-9-]+$/);
const out=path.resolve(__dirname,'../.artifacts/anura',run);fs.mkdirSync(out,{recursive:true});
const result={checks:[],errors:[],remote:[],diagnostics:[],screenshots:[]};
async function check(name,fn){try{await fn();result.checks.push({name,passed:true});}catch(e){result.checks.push({name,passed:false,error:e.message});}}
async function capture(page,name){const file=path.join(out,name+'.png');await page.screenshot({path:file,fullPage:true});result.screenshots.push(file);}
async function settle(page){await page.waitForFunction(()=>window.ANURA?.snapshot().ready,{},{timeout:30000});await page.waitForTimeout(800);}
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.ANURA_BROWSER_PATH});result.browser=browser.version();
 async function context(options={}){
  const c=await browser.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1,...options});
  await c.route('**/*',r=>{if(new URL(r.request().url()).origin===origin)return r.continue();result.remote.push(r.request().url());return r.abort();});
  return c;
 }
 const ctx=await context(),page=await ctx.newPage();page.on('pageerror',e=>result.errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error')result.errors.push(m.text());});
 try{
  await page.goto(scene);await settle(page);await capture(page,'desktop-1440');
  await check('ready, real progress and bounded compressed data',async()=>{
   const s=await page.evaluate(()=>ANURA.snapshot());result.diagnostics.push(s);assert.equal(s.frame,0);assert.equal(s.bytes,4454170);assert.equal(await page.locator('#progress').getAttribute('value'),'240');assert.equal(await page.locator('#catch').isEnabled(),true);
  });
  for(const [x,y,label,min,max] of [[10,450,'left',20,40],[1430,450,'right',130,150],[720,160,'up',75,95],[720,870,'down',170,190],[720,450,'center',0,0]]){
   await check('pointer '+label,async()=>{await page.mouse.move(x,y);await page.waitForTimeout(1600);const s=await page.evaluate(()=>ANURA.snapshot());assert.ok(s.frame>=min&&s.frame<=max,JSON.stringify(s));});
  }
  await check('keyboard catch finishes and announces',async()=>{await page.locator('#catch').focus();await page.keyboard.press('Enter');await page.waitForTimeout(3100);assert.equal((await page.evaluate(()=>ANURA.snapshot())).frame,0);assert.match(await page.locator('#announcement').textContent(),/Взгляд пойман/);await capture(page,'focus-1440');});
  await check('idle does not repaint',async()=>{const n=(await page.evaluate(()=>ANURA.snapshot())).draws;await page.waitForTimeout(800);assert.equal((await page.evaluate(()=>ANURA.snapshot())).draws,n);});
  await check('pause blocks pointer and resumes',async()=>{await page.locator('#pause').click();const n=(await page.evaluate(()=>ANURA.snapshot())).draws;await page.mouse.move(20,400);await page.waitForTimeout(600);assert.equal((await page.evaluate(()=>ANURA.snapshot())).draws,n);await page.locator('#pause').click();assert.equal((await page.evaluate(()=>ANURA.snapshot())).paused,false);});
  await check('rapid movement keeps decoded cache bounded',async()=>{for(let i=0;i<36;i++){await page.mouse.move(i%2?50:1350,(i*89)%650+150);await page.waitForTimeout(20);}await page.waitForTimeout(1800);const s=await page.evaluate(()=>ANURA.snapshot());result.diagnostics.push(s);assert.ok(s.maxCache<=12);assert.ok(s.pending<=2);});
  await check('live reduced motion change',async()=>{await page.emulateMedia({reducedMotion:'reduce'});await page.waitForFunction(()=>ANURA.snapshot().reduced);await page.waitForTimeout(100);await page.mouse.move(10,450);await page.waitForTimeout(800);const s=await page.evaluate(()=>ANURA.snapshot());assert.ok(s.reduced);assert.ok(s.frame>=20&&s.frame<=40,JSON.stringify(s));assert.equal(await page.locator('#cursor').isVisible(),false);await page.locator('#catch').click();await page.waitForTimeout(100);assert.equal((await page.evaluate(()=>ANURA.snapshot())).frame,0);await page.emulateMedia({reducedMotion:'no-preference'});await page.waitForFunction(()=>!ANURA.snapshot().reduced);});
  for(const [width,height] of [[1920,1080],[1366,768],[1024,768],[768,1024],[390,844],[320,740],[667,375]]){
   await page.setViewportSize({width,height});await page.mouse.move(0,0);await page.locator('#catch').click();await page.waitForTimeout(2900);
   await check('layout '+width+'x'+height,async()=>{const x=await page.evaluate(()=>({w:innerWidth,sw:document.documentElement.scrollWidth,head:document.querySelector('h1').getBoundingClientRect().toJSON(),button:document.querySelector('#catch').getBoundingClientRect().toJSON(),desc:document.querySelector('.description').getBoundingClientRect().toJSON()}));assert.equal(x.w,x.sw);assert.ok(x.head.x>=0&&x.head.right<=width);assert.ok(x.desc.right<=x.button.x+1||x.desc.bottom<=x.button.y);assert.ok(x.button.height>=44);});
   await capture(page,'scene-'+width+'x'+height);
  }
  await page.setViewportSize({width:1440,height:900});
  await check('library scene guide return loop',async()=>{await page.goto(origin+'/animations.html#anura-experiment');await page.locator('.anura-launch').click();await settle(page);await page.getByRole('link',{name:'Как это сделано'}).click();assert.match(page.url(),/anura\/guide.html$/);await page.locator('summary').click();assert.match(await page.locator('.full-brief').textContent(),/A photorealistic 3D render/);await capture(page,'guide-1440');await page.getByRole('link',{name:'Открыть ANURA'}).click();await page.getByRole('link',{name:'← В библиотеку',exact:true}).click();assert.ok(page.url().endsWith('animations.html#anura-experiment'));await capture(page,'library-1440');});
  await page.setViewportSize({width:390,height:844});await page.goto(origin+'/animations.html#anura-experiment');await capture(page,'library-390');
  await check('entry mobile button hit target',async()=>{const b=await page.locator('.anura-launch').boundingBox();assert.ok(b.width>130&&b.height>=44);});
  await page.goto(origin+'/experiments/anura/guide.html');await capture(page,'guide-390');
  await check('guide mobile no horizontal overflow',async()=>assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),390));
  const mobile=await context({viewport:{width:390,height:844},hasTouch:true,isMobile:true});const mp=await mobile.newPage();await mp.goto(scene);await settle(mp);
  await check('touch chooses a frame without cursor',async()=>{await mp.touchscreen.tap(45,260);await mp.waitForTimeout(1300);assert.notEqual((await mp.evaluate(()=>ANURA.snapshot())).frame,0);assert.equal(await mp.locator('#cursor').isVisible(),false);assert.equal((await mp.evaluate(()=>ANURA.snapshot())).cacheLimit,8);await capture(mp,'touch-390');});await mobile.close();
  const err=await context();let block=true;await err.route('**/frames/010.webp',r=>block?r.fulfill({status:503,body:'unavailable'}):r.continue());const ep=await err.newPage();await ep.goto(scene);await ep.locator('#retry').waitFor({state:'visible'});
  await check('error preserves poster and permits retry',async()=>{assert.ok(await ep.locator('.poster').isVisible());assert.ok(await ep.locator('#catch').isDisabled());await capture(ep,'error-1440');block=false;await ep.locator('#retry').click();await settle(ep);assert.ok(await ep.locator('#catch').isEnabled());});await err.close();
  const nojs=await context({javaScriptEnabled:false,viewport:{width:390,height:844}});const np=await nojs.newPage();await np.goto(scene);
  await check('no JavaScript poster and navigation',async()=>{assert.ok(await np.locator('.poster').isVisible());await np.getByRole('link',{name:'← В библиотеку',exact:true}).click();assert.ok(np.url().includes('animations.html'));});await nojs.close();
  await check('no page exceptions or remote requests',async()=>{assert.deepEqual(result.errors,[]);assert.deepEqual(result.remote,[]);});
 }catch(e){result.fatal=e.stack;result.state=await page.evaluate(()=>({text:document.body.innerText,diagnostics:window.ANURA?.snapshot()}));await capture(page,'fatal');}finally{await browser.close();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({passed:result.checks.filter(x=>x.passed).length,failed:result.checks.filter(x=>!x.passed),fatal:result.fatal,errors:result.errors,state:result.state,output:out},null,2));if(result.fatal||result.checks.some(x=>!x.passed))process.exitCode=1;}
})();
