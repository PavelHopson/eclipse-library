const {chromium}=require(process.env.GWEN_PLAYWRIGHT_PATH||'playwright');
const fs=require('node:fs');const path=require('node:path');const assert=require('node:assert/strict');
const origin=process.env.GWEN_QA_ORIGIN||'http://127.0.0.1:4186';
assert.ok(['http://127.0.0.1:4186','https://library.eclipse-forge.ru'].includes(origin));
const runName=process.env.GWEN_QA_RUN||'qa-final';assert.match(runName,/^[a-z0-9-]+$/);
const output=path.resolve(__dirname,'../.artifacts/gwen',runName);fs.mkdirSync(output,{recursive:true});
const base=origin+'/experiments/gwen-reveal/index.html';
const results={checks:[],diagnostics:[]};
async function check(name,fn){try{await fn();results.checks.push({name,passed:true});}catch(e){results.checks.push({name,passed:false,error:e.message});}}
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.GWEN_BROWSER_PATH||undefined});
 const context=await browser.newContext({viewport:{width:1920,height:1080},deviceScaleFactor:2});
 await context.route('**/*',r=>new URL(r.request().url()).origin===origin?r.continue():r.abort());
 try{
  const p=await context.newPage();await p.goto(base);await p.waitForFunction(()=>gwenDiagnostics().ready);await p.mouse.move(5,5);await p.locator('#repair').click();
  await check('DPR 2 render width is capped at 1600',async()=>assert.equal((await p.evaluate(()=>gwenDiagnostics())).canvas[0],1600));
  const h=await p.locator('#hero').boundingBox();
  const start=performance.now();let i=0;
  while(performance.now()-start<2500){await p.mouse.move(h.x+h.width*(.5+.08*Math.sin(i*.2)),h.y+h.height*(.33+.06*Math.cos(i*.2)));await p.waitForTimeout(16);i++;}
  results.diagnostics.push(await p.evaluate(()=>gwenDiagnostics()));
  await p.locator('#repair').click();await p.locator('#demo').click();await p.waitForTimeout(600);
  await check('replay demo actually reveals the mask',async()=>assert.ok((await p.evaluate(()=>gwenDiagnostics())).integrity<100));
  await p.waitForTimeout(3700);await check('demo finishes after four seconds',async()=>assert.equal(await p.locator('#demo span').first().textContent(),'Смотреть эффект'));
  await p.locator('#repair').click();await p.mouse.move(1,1);await p.waitForTimeout(7800);
  const f=await p.evaluate(()=>gwenDiagnostics().frames);await p.waitForTimeout(350);
  await check('idle scene stops canvas work',async()=>assert.equal(await p.evaluate(()=>gwenDiagnostics().frames),f));
  await p.mouse.move(180,210);await p.waitForTimeout(50);
  await p.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'));});
  const hidden=await p.evaluate(()=>gwenDiagnostics().frames);await p.waitForTimeout(300);
  await check('visibilitychange handler stops work (simulated hidden state)',async()=>assert.equal(await p.evaluate(()=>gwenDiagnostics().frames),hidden));
  await p.close();
  const fallback=await context.newPage();
  await fallback.addInitScript(()=>{
   const d=Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,'filter');
   Object.defineProperty(CanvasRenderingContext2D.prototype,'filter',{...d,set(value){d.set.call(this,String(value).startsWith('url(')?'none':value);}});
  });
  await fallback.goto(base);await fallback.waitForFunction(()=>gwenDiagnostics().ready);
  await check('unsupported SVG filter selects honest blur fallback',async()=>assert.equal((await fallback.evaluate(()=>gwenDiagnostics())).filterMode,'blur-fallback'));
  await fallback.locator('#motion').click();await fallback.mouse.move(960,390);await fallback.waitForTimeout(100);
  await fallback.screenshot({path:path.join(output,'filter-fallback.png'),scale:'css'});
  await fallback.locator('#reveal').click();await check('fallback retains manual reveal',async()=>assert.equal((await fallback.evaluate(()=>gwenDiagnostics())).faceOpen,true));await fallback.close();
  const loading=await context.newPage();let release;
  const gate=new Promise(resolve=>release=resolve);
  await loading.route('**/face.webp',async route=>{await gate;await route.continue();});
  await loading.goto(base,{waitUntil:'domcontentloaded'});await loading.waitForTimeout(250);
  await check('loading shows status and keeps action disabled',async()=>{assert.equal(await loading.locator('#load-status').isVisible(),true);assert.equal(await loading.locator('#reveal').isDisabled(),true);});
  await loading.screenshot({path:path.join(output,'loading.png'),scale:'css'});release();await loading.waitForFunction(()=>gwenDiagnostics().ready);
  await check('loading recovers when the asset arrives',async()=>assert.equal(await loading.locator('#reveal').isDisabled(),false));await loading.close();
 }finally{await browser.close();fs.writeFileSync(path.join(output,'edge-cases.json'),JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));if(results.checks.some(c=>!c.passed))process.exitCode=1;}
})().catch(e=>{console.error(e);process.exitCode=1;});
