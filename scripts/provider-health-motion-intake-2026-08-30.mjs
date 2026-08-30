import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const web = path.join(root, 'web');
const template = await readFile(path.join(web, 'animation-ai-progress.html'), 'utf8');
const fontFaces = template.match(/@font-face\{[^}]+\}/g) ?? [];
if (fontFaces.length !== 4) throw new Error(`Expected four embedded font subsets, got ${fontFaces.length}`);

const demo = {
  id: 'provider-health-route',
  title: 'Provider Health Route',
  label: 'Проверка маршрута модели',
  file: 'animation-provider-health-route.html',
  description: 'Короткая проверка показывает основной provider, исчерпание квоты и безопасный fallback. Это локальная демонстрация состояний — сетевых запросов и переключения реальных моделей нет.',
  tags: ['provider router', 'health-check', 'fallback', 'квота'],
  states: ['idle', 'checking', 'fallback', 'ready', 'error'],
  readiness: 'Готово к адаптации',
  project: 'Eclipse AI Hub · Jarvis',
  category: 'feedback',
};

const html = `<!doctype html>
<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Проверка маршрута модели</title><link rel="icon" href="data:,">
<style>
:root{color-scheme:dark;--accent:#6ba3ff;--bg:#070a0f;--panel:#0b1119;--panel-2:#0e1621;--line:#263447;--text:#f3f6fa;--muted:#93a0b2;--ok:#65c9a4;--warn:#e7b75e;--bad:#e98b8b;--speed:1}
*{box-sizing:border-box}html,body{min-height:100%}body{min-height:100dvh;margin:0;padding:clamp(14px,4vw,40px);display:grid;place-items:center;background:#070a0f;color:var(--text)}button{font:inherit}.router{width:min(960px,100%);overflow:clip;border:1px solid var(--line);border-radius:18px;background:var(--panel)}
.router__head{display:flex;gap:18px;align-items:start;padding:24px;border-bottom:1px solid var(--line)}.eyebrow{display:block;margin-bottom:8px;color:var(--accent);font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.router h1{margin:0;font-size:clamp(24px,4vw,38px);line-height:1.05;letter-spacing:-.035em}.router p{margin:8px 0 0;color:var(--muted);font-size:13px;line-height:1.55}.contract{margin-left:auto;flex:0 0 auto;padding:7px 9px;border:1px solid var(--line);border-radius:8px;color:#c9d4e2;font:700 10px/1.2 ui-monospace,monospace}
.route-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(260px,.85fr)}.providers{padding:22px;border-right:1px solid var(--line)}.provider-list{display:grid;gap:9px}.provider{display:grid;grid-template-columns:12px minmax(0,1fr) auto;gap:12px;align-items:center;min-height:72px;padding:13px 14px;border:1px solid var(--line);border-radius:12px;background:var(--panel-2);transition:opacity 150ms ease,transform 280ms cubic-bezier(.2,.8,.2,1),border-color 150ms ease}.provider__dot{width:10px;height:10px;border:2px solid #5e6a79;border-radius:50%;background:transparent}.provider strong,.provider small{display:block}.provider strong{font-size:13px}.provider small{margin-top:4px;color:var(--muted);font-size:10px}.provider output{color:#aebacc;font:700 10px/1.2 ui-monospace,monospace}.provider[data-status=checking]{transform:translateX(5px);border-color:var(--accent)}.provider[data-status=checking] .provider__dot{border-color:var(--accent);background:var(--accent)}.provider[data-status=ready]{border-color:color-mix(in srgb,var(--ok) 70%,var(--line))}.provider[data-status=ready] .provider__dot{border-color:var(--ok);background:var(--ok)}.provider[data-status=degraded]{opacity:.68;border-color:color-mix(in srgb,var(--warn) 70%,var(--line))}.provider[data-status=degraded] .provider__dot{border-color:var(--warn)}.provider[data-status=offline]{opacity:.55;border-color:color-mix(in srgb,var(--bad) 65%,var(--line))}.provider[data-status=offline] .provider__dot{border-color:var(--bad)}
.route-panel{display:flex;min-width:0;flex-direction:column;padding:24px;background:#090e15}.route-label{color:#91a0b2;font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.route-result{min-height:146px;margin-top:15px;padding:18px;border:1px solid var(--line);border-radius:12px;background:#070b11}.route-result strong{display:block;font-size:18px}.route-result p{min-height:42px}.meter{height:4px;margin-top:19px;overflow:hidden;background:#202b39}.meter i{display:block;width:100%;height:100%;background:var(--accent);transform:scaleX(var(--progress,0));transform-origin:left;transition:transform 420ms cubic-bezier(.2,.8,.2,1)}.facts{display:grid;gap:8px;margin:18px 0 0;padding:0;list-style:none}.facts li{display:flex;justify-content:space-between;gap:16px;padding-top:8px;border-top:1px solid var(--line);color:var(--muted);font-size:10px}.facts b{color:#dce4ee}.actions{display:flex;gap:9px;margin-top:auto;padding-top:22px}.actions button{min-height:44px;border:1px solid var(--line);border-radius:10px;padding:0 15px;background:#111a26;color:#e7edf5;font-weight:750;cursor:pointer}.actions .primary{border-color:var(--accent);background:var(--accent);color:#07101d}.actions button:disabled{cursor:not-allowed;opacity:.55}.actions button:focus-visible{outline:3px solid #fff;outline-offset:3px}.status{min-height:22px;margin:13px 0 0!important;color:#cbd6e4!important;font-size:11px!important}
@media(max-width:720px){body{padding:0}.router{width:100%;max-width:100vw;min-height:100dvh;border-inline:0;border-radius:0}.router__head{padding:20px}.contract{display:none}.route-grid{grid-template-columns:minmax(0,1fr)}.route-grid>*,.provider-list,.provider,.route-panel,.facts,.actions{min-width:0;max-width:100%}.providers{padding:16px;border-right:0;border-bottom:1px solid var(--line)}.route-panel{padding:20px}.route-panel>*{min-width:0}.provider{grid-template-columns:12px minmax(0,1fr);min-height:66px}.provider>*{min-width:0}.provider output{grid-column:2;text-align:left}.facts li{display:grid;grid-template-columns:minmax(0,1fr) auto}.facts li>*{min-width:0}.actions{position:sticky;bottom:0;flex-direction:column;padding-bottom:12px;background:#090e15}.actions button{width:100%;min-width:0}}
@media(prefers-reduced-motion:reduce){.provider{transform:none!important;transition:opacity 150ms ease,border-color 150ms ease}.meter i{transition-duration:150ms}}
</style>
<style id="crisp-motion-contract">${fontFaces.join('\n')}
html{font-synthesis:none;text-rendering:optimizeLegibility}body,button,input,select,textarea,body *{font-family:Manrope,"Segoe UI",sans-serif!important}.contract,.provider output{font-family:"JetBrains Mono",ui-monospace,monospace!important}
</style></head>
<body><section class="router" id="router" aria-labelledby="route-title"><header class="router__head"><div><span class="eyebrow">Eclipse AI Gateway · локальное демо</span><h1 id="route-title">Проверка маршрута модели</h1><p>Показывает health, квоту и fallback до отправки задачи.</p></div><span class="contract">router.health.v1</span></header><div class="route-grid"><section class="providers" aria-label="Кандидаты маршрута"><div class="provider-list">
<article class="provider" data-provider="primary" data-status="idle"><span class="provider__dot" aria-hidden="true"></span><div><strong>Основной provider</strong><small>OmniRoute · approved</small></div><output>82% квоты</output></article>
<article class="provider" data-provider="fallback" data-status="idle"><span class="provider__dot" aria-hidden="true"></span><div><strong>Резервный provider</strong><small>GLM API · canary</small></div><output>canary 10%</output></article>
<article class="provider" data-provider="local" data-status="idle"><span class="provider__dot" aria-hidden="true"></span><div><strong>Локальный runtime</strong><small>Ollama · private-only</small></div><output>готов</output></article>
</div></section><section class="route-panel"><span class="route-label">Выбранный маршрут</span><div class="route-result"><strong id="result-title">Проверка не запускалась</strong><p id="result-copy">Нажмите кнопку: демо проверит три заранее заданных состояния без сети.</p><div class="meter" aria-hidden="true"><i></i></div></div><ul class="facts"><li><span>Секреты</span><b>только сервер</b></li><li><span>Retry</span><b>не более 2</b></li><li><span>Результат</span><b>с receipt</b></li></ul><div class="actions"><button class="primary" id="run" type="button">Проверить маршрут</button><button id="failure" type="button">Показать сбой</button></div><p class="status" id="route-status" role="status" aria-live="polite">Готово к локальной демонстрации.</p></section></div></section>
<script>
const params=new URLSearchParams(location.search),router=document.querySelector('#router'),rows=Object.fromEntries([...document.querySelectorAll('[data-provider]')].map(row=>[row.dataset.provider,row]));
const reduce=params.get('reduce')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches;const rawFrame=params.get('t'),frozen=rawFrame===null?null:Number(rawFrame);let timers=[];
const title=document.querySelector('#result-title'),copy=document.querySelector('#result-copy'),status=document.querySelector('#route-status'),run=document.querySelector('#run'),failure=document.querySelector('#failure');
function clearRun(){timers.forEach(clearTimeout);timers=[];run.disabled=false;failure.disabled=false;router.removeAttribute('aria-busy')}
function paint(stage,scenario='fallback'){Object.values(rows).forEach(row=>row.dataset.status='idle');router.style.setProperty('--progress',String([0,.28,.58,.82,1][stage]??0));
 if(stage===0){title.textContent='Проверка не запускалась';copy.textContent='Нажмите кнопку: демо проверит три заранее заданных состояния без сети.';status.textContent='Готово к локальной демонстрации.'}
 if(stage===1){rows.primary.dataset.status='checking';title.textContent='Проверяем основной маршрут';copy.textContent='Health-check не отправляет пользовательский prompt.';status.textContent='Основной provider: проверка доступности.'}
 if(stage===2){rows.primary.dataset.status=scenario==='error'?'offline':'degraded';rows.fallback.dataset.status='checking';title.textContent=scenario==='error'?'Основной provider недоступен':'Квота основного маршрута ограничена';copy.textContent='Переходим только к заранее разрешённому резерву.';status.textContent='Fallback: проверка canary-маршрута.'}
 if(stage===3){rows.primary.dataset.status=scenario==='error'?'offline':'degraded';if(scenario==='error'){rows.fallback.dataset.status='offline';rows.local.dataset.status='checking';title.textContent='Облачные маршруты недоступны';copy.textContent='Для private-compatible задачи проверяем локальный runtime.';status.textContent='Ollama: локальная проверка.'}else{rows.fallback.dataset.status='ready';title.textContent='Резервный маршрут готов';copy.textContent='GLM canary выбран в пределах отдельной квоты.';status.textContent='Маршрут выбран. Реальный запрос не отправлен.'}}
 if(stage>=4){if(scenario==='error'){rows.primary.dataset.status='offline';rows.fallback.dataset.status='offline';rows.local.dataset.status='ready';title.textContent='Выбран локальный runtime';copy.textContent='Внешняя передача данных не требуется.'}else{rows.primary.dataset.status='degraded';rows.fallback.dataset.status='ready';title.textContent='Выбран резервный provider';copy.textContent='Причина переключения и квота попадут в receipt.'}status.textContent='Демонстрация завершена. Сетевых вызовов не было.'}}
function start(scenario){clearRun();router.setAttribute('aria-busy','true');run.disabled=true;failure.disabled=true;paint(1,scenario);const delay=reduce?160:760;[2,3,4].forEach((stage,index)=>timers.push(setTimeout(()=>{paint(stage,scenario);if(stage===4)clearRun()},delay*(index+1))))}
run.addEventListener('click',()=>start('fallback'));failure.addEventListener('click',()=>start('error'));
const accent=params.get('accent');if(accent&&/^#[0-9a-f]{6}$/i.test(accent))document.documentElement.style.setProperty('--accent',accent);const scenario=params.get('state')==='error'?'error':'fallback';
if(Number.isFinite(frozen))paint(Math.max(0,Math.min(4,Math.round(frozen))),scenario);else if(params.get('state')&&params.get('state')!=='idle')start(scenario);else paint(0,scenario);window.__ready=true;
</script></body></html>`;

await writeFile(path.join(web, demo.file), html, 'utf8');

const manifestFile = path.join(web, 'animation-lab-manifest.json');
const manifest = JSON.parse(await readFile(manifestFile, 'utf8'));
if (!manifest.demos.some((item) => item.id === demo.id)) manifest.demos.push(demo);
await writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

const catalogFile = path.join(web, 'animation-demos.js');
const catalogSource = await readFile(catalogFile, 'utf8');
const catalog = JSON.parse(catalogSource.replace(/^window\.ECLIPSE_ANIMATION_DEMOS=/, '').replace(/;\s*$/, ''));
if (!catalog.some((item) => item.id === demo.id)) catalog.push(demo);
await writeFile(catalogFile, `window.ECLIPSE_ANIMATION_DEMOS=${JSON.stringify(catalog, null, 2)};\n`, 'utf8');

const pageFile = path.join(web, 'animations.html');
const page = (await readFile(pageFile, 'utf8'))
  .replace('id="lab-count">29</b>', 'id="lab-count">30</b>')
  .replace('id="demo-count">29</span>', 'id="demo-count">30</span>');
await writeFile(pageFile, page, 'utf8');

console.log(`Added ${demo.id} as first-party clean-room motion pattern.`);
