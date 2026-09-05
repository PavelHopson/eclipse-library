const {chromium}=require(process.env.ANURA_PLAYWRIGHT_PATH || 'playwright');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const origin=process.env.ANURA_QA_ORIGIN || 'http://127.0.0.1:4186';
assert.ok(['http://127.0.0.1:4186','https://library.eclipse-forge.ru'].includes(origin),'Unapproved QA origin');
const scene=origin+'/experiments/anura/index.html';
const run=process.env.ANURA_QA_RUN || 'qa-edge';assert.match(run,/^[a-z0-9-]+$/);
const out=path.resolve(__dirname,'../.artifacts/anura',run);fs.mkdirSync(out,{recursive:true});
const results=[],errors=[];async function check(name,fn){try{await fn();results.push({name,passed:true});}catch(e){results.push({name,passed:false,error:e.message});}}
(async()=>{
const b=await chromium.launch({headless:true,executablePath:process.env.ANURA_BROWSER_PATH});
const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2});
await c.route('**/*',r=>new URL(r.request().url()).origin===origin?r.continue():r.abort());
const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));
const ready=()=>p.waitForFunction(()=>window.ANURA?.snapshot().ready);
try{
 await p.goto(origin+'/animations.html#anura-experiment');await p.waitForTimeout(800);
 await check('entry is visible and not covered at anchor',async()=>{
  const info=await p.locator('.anura-launch').evaluate(el=>{const r=el.getBoundingClientRect();return{rect:r.toJSON(),inside:r.top>=0&&r.bottom<=innerHeight,hit:el.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)),scroll:scrollY};});
  assert.ok(info.inside&&info.hit,JSON.stringify(info));
 });
 await p.screenshot({path:path.join(out,'library-viewport.png')});
 await p.locator('.anura-launch').click();await ready();await p.waitForTimeout(600);
 await check('DPR bounded, pause survives resize without blank canvas',async()=>{
  await p.locator('#pause').click();await p.setViewportSize({width:400,height:850});await p.waitForTimeout(100);
  const q=await p.evaluate(()=>({width:document.querySelector('canvas').width,state:ANURA.snapshot()}));assert.ok(q.width<=600);assert.ok(q.state.paused);assert.ok(q.state.frame>=0);await p.locator('#pause').click();
 });
 await check('same document browser back retains navigation',async()=>{
  await p.getByRole('link',{name:'Как это сделано'}).click();await p.goBack();await ready();assert.ok(await p.locator('#catch').isEnabled());
 });
 await check('hidden tab stops rendering and cancels short episode',async()=>{
  await p.locator('#catch').click();await p.evaluate(()=>{Object.defineProperty(document,'hidden',{value:true,configurable:true});document.dispatchEvent(new Event('visibilitychange'));});
  const before=(await p.evaluate(()=>ANURA.snapshot())).draws;await p.waitForTimeout(300);assert.equal((await p.evaluate(()=>ANURA.snapshot())).draws,before);
  await p.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});await p.waitForTimeout(900);
 });
 await check('DOCX response has correct MIME and ZIP signature',async()=>{const r=await c.request.get(origin+'/experiments/anura/assets/ANURA-Guide.docx');assert.ok(r.ok());assert.match(r.headers()['content-type'],/officedocument.wordprocessingml.document/);assert.equal((await r.body()).subarray(0,2).toString(),'PK');});
 await p.goto(origin+'/experiments/anura/guide.html');await p.screenshot({path:path.join(out,'guide-viewport.png')});
 await check('full guide remains contained on 320px',async()=>{await p.setViewportSize({width:320,height:740});await p.locator('summary').click();assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),320);assert.equal(await p.locator('.sequence-strip img').evaluate(el=>el.getBoundingClientRect().right<=innerWidth),true);});
 const e=await b.newContext();await e.route('**/*',r=>new URL(r.request().url()).origin===origin?r.continue():r.abort());
 await e.route('**/frames/010.webp',r=>r.fulfill({status:200,contentType:'image/webp',body:'<html>'+ 'not image'.repeat(30)+'</html>'}));const ep=await e.newPage();await ep.goto(scene);
 await check('HTML fallback masquerading as WebP is rejected',async()=>{await ep.locator('#retry').waitFor({state:'visible'});assert.ok(await ep.locator('#catch').isDisabled());});await e.close();
 await check('no script exceptions',async()=>assert.deepEqual(errors,[]));
}finally{await b.close();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({results,errors},null,2));console.log(JSON.stringify({passed:results.filter(x=>x.passed).length,failed:results.filter(x=>!x.passed)},null,2));if(results.some(x=>!x.passed))process.exitCode=1;}
})();
