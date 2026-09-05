// Deterministic before/after interaction benchmark. Isolated, loopback-only browser.
const {chromium}=require(process.env.ANURA_PLAYWRIGHT_PATH || 'playwright');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),run=process.env.ANURA_PERF_RUN || 'before';assert.match(run,/^[a-z0-9-]+$/);
const out=path.join(root,'.artifacts/anura/performance',run);fs.mkdirSync(out,{recursive:true});
const origin='http://127.0.0.1:4186';const results=[];
(async()=>{
const browser=await chromium.launch({headless:true,executablePath:process.env.ANURA_BROWSER_PATH});
try{
for(const throttle of [1,4]){
 const context=await browser.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1});
 await context.route('**/*',r=>{
  const url=new URL(r.request().url());if(url.origin!==origin)return r.abort();
  if(process.env.ANURA_PERF_SOURCE==='before' && url.pathname.startsWith('/experiments/anura/')){
   const name=url.pathname.slice('/experiments/anura/'.length);
   assert.match(name,/^[a-zA-Z0-9/._-]+$/);assert.ok(!name.split('/').includes('..'));
   const file=path.join(root,'.artifacts/anura/performance/before-source/anura',name);
   const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.webp':'image/webp','.json':'application/json'};
   return r.fulfill({status:200,body:fs.readFileSync(file),contentType:types[path.extname(file)]||'application/octet-stream'});
  }
  return r.continue();
 });
 const page=await context.newPage(),cdp=await context.newCDPSession(page);
 await cdp.send('Emulation.setCPUThrottlingRate',{rate:throttle});
 await cdp.send('Performance.enable');
 await page.addInitScript(()=>{
  const draws=[],decodes=[];const draw=CanvasRenderingContext2D.prototype.drawImage;
  CanvasRenderingContext2D.prototype.drawImage=function(...args){const s=performance.now();const v=draw.apply(this,args);if(this.canvas.id==='frog')draws.push({at:s,cost:performance.now()-s});return v;};
  const decode=window.createImageBitmap?.bind(window);
  if(decode)window.createImageBitmap=async(...args)=>{const s=performance.now();const image=await decode(...args);decodes.push(performance.now()-s);return image;};
  window.perfProbe={draws,decodes};
 });
 const start=Date.now();await page.goto(origin+'/experiments/anura/index.html');await page.waitForFunction(()=>window.ANURA?.snapshot().ready,{},{timeout:30000});
 const loadMs=Date.now()-start;await page.waitForTimeout(900);
 const metricsBefore=await cdp.send('Performance.getMetrics');
 const motion=await page.evaluate(async()=>{
  const wait=ms=>new Promise(r=>setTimeout(r,ms));
  const send=(x,y)=>document.getElementById('experience').dispatchEvent(new PointerEvent('pointermove',{clientX:x,clientY:y,pointerType:'mouse',bubbles:true}));
  const begin=performance.now(),count=perfProbe.draws.length,samplesAtRefresh=[];let lastVisible=ANURA.snapshot().frame;
  await new Promise(resolve=>{
   const step=t=>{const elapsed=t-begin,s=ANURA.snapshot();if(s.frame!==lastVisible){samplesAtRefresh.push(t);lastVisible=s.frame;}send(720+Math.sin(elapsed/430)*610,450+Math.sin(elapsed/710)*270);if(elapsed<3000)requestAnimationFrame(step);else resolve();};requestAnimationFrame(step);
  });
  const finish=performance.now(),frames=perfProbe.draws.slice(count),gaps=frames.slice(1).map((x,i)=>x.at-frames[i].at);
  const samples=[];
  for(const [x,y] of [[10,450],[1430,450],[720,160],[720,850],[720,450]]){
   const before=ANURA.snapshot().draws,t=performance.now();send(x,y);
   let first=null,settled=null;
   while(performance.now()-t<2200){const s=ANURA.snapshot();if(first===null&&s.draws>before)first=performance.now()-t;if(s.frame===s.target){settled=performance.now()-t;break;}await wait(5);}
   samples.push({x,y,firstPaintMs:first,settledMs:settled,state:ANURA.snapshot()});await wait(100);
  }
  await wait(150);const idle=ANURA.snapshot().draws;await wait(400);
  const sorted=gaps.sort((a,b)=>a-b),costs=frames.map(x=>x.cost).sort((a,b)=>a-b);
  const decode=perfProbe.decodes.slice().sort((a,b)=>a-b);
  return {movementMs:finish-begin,drawCalls:frames.length,visibleFrames:samplesAtRefresh.length,visibleFps:samplesAtRefresh.length/(finish-begin)*1000,gapP95:sorted[Math.floor(sorted.length*.95)]||0,maxGap:Math.max(0,...gaps),drawP95:costs[Math.floor(costs.length*.95)]||0,decodes:decode.length,decodeP95:decode[Math.floor(decode.length*.95)]||0,steps:samples,idleRedraws:ANURA.snapshot().draws-idle,final:ANURA.snapshot()};
 });
 const metricsAfter=await cdp.send('Performance.getMetrics');
 const metric=(data,name)=>data.metrics.find(x=>x.name===name)?.value||0;
 const record={throttle,loadMs,...motion,taskDurationMs:(metric(metricsAfter,'TaskDuration')-metric(metricsBefore,'TaskDuration'))*1000,layoutCount:metric(metricsAfter,'LayoutCount')-metric(metricsBefore,'LayoutCount')};
 results.push(record);await page.screenshot({path:path.join(out,'scene-'+throttle+'x.png')});await context.close();
}
}finally{await browser.close();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({browser:browser.version(),results},null,2));console.log(JSON.stringify(results.map(({throttle,loadMs,visibleFrames,visibleFps,gapP95,maxGap,decodeP95,idleRedraws,taskDurationMs,layoutCount,steps})=>({throttle,loadMs,visibleFrames,visibleFps,gapP95,maxGap,decodeP95,idleRedraws,taskDurationMs,layoutCount,settleMs:steps.map(s=>s.settledMs)})),null,2));}
})();
