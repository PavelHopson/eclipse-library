import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const web = path.join(root, 'web');
const template = await readFile(path.join(web, 'animation-ai-progress.html'), 'utf8');
const fontFaces = template.match(/@font-face\{[^}]+\}/g) ?? [];
if (fontFaces.length !== 4) throw new Error(`Expected four embedded font subsets, got ${fontFaces.length}`);

const demos = [
  {
    id: 'text-cascade',
    title: 'Text Cascade',
    label: 'Каскадное раскрытие текста',
    file: 'animation-text-cascade.html',
    description: 'Фраза раскрывается по словам, чтобы показать иерархию сообщения. Текст остаётся настоящим DOM-контентом, а движение использует только transform и opacity.',
    tags: ['текст', 'раскрытие', 'transform'],
    states: ['live', 'idle', 'active', 'complete'],
    readiness: 'Готово к адаптации',
    project: 'Eclipse Forge Landing, Eclipse Chat',
    category: 'feedback',
  },
  {
    id: 'directional-action',
    title: 'Directional Action',
    label: 'Заливка приходит со стороны курсора',
    file: 'animation-directional-action.html',
    description: 'Кнопка отвечает на направление входа курсора и сохраняет равнозначный focus-сценарий. Эффект сообщает границы действия, не меняя размер и положение контента.',
    tags: ['кнопка', 'направление', 'focus-visible'],
    states: ['live', 'idle', 'active', 'complete'],
    readiness: 'Готово к внедрению',
    project: 'Eclipse Forge, Growth OS',
    category: 'navigation',
  },
  {
    id: 'magnetic-dock',
    title: 'Magnetic Dock',
    label: 'Навигация следует за указателем',
    file: 'animation-magnetic-dock.html',
    description: 'Компактная dock-навигация усиливает ближайшую цель без React rerender и layout shift. Клавиатура получает тот же акцент, а reduced motion оставляет статическое выделение.',
    tags: ['навигация', 'pointer', 'клавиатура'],
    states: ['live', 'idle', 'active', 'complete'],
    readiness: 'Готово к адаптации',
    project: 'Eclipse Chat, Eclipse AI Hub',
    category: 'navigation',
  },
];

const commonCss = `
:root{color-scheme:dark;--accent:#6ba3ff;--bg:#070a0f;--panel:#0b1119;--panel-2:#101925;--line:#2a394d;--text:#f3f6fa;--muted:#9aa8ba;--speed:1}
*{box-sizing:border-box}html,body{min-height:100%}body{min-height:100dvh;margin:0;padding:clamp(16px,4vw,44px);display:grid;place-items:center;background:var(--bg);color:var(--text)}button{font:inherit}.demo{width:min(980px,100%);min-height:min(680px,calc(100dvh - 32px));display:grid;align-content:center;gap:28px;overflow:clip;border:1px solid var(--line);border-radius:18px;background:var(--panel)}
.demo__head{max-width:690px;padding:0 clamp(22px,5vw,58px)}.demo__head span{display:block;margin-bottom:10px;color:var(--accent);font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.demo h1{margin:0;font-size:clamp(30px,5vw,58px);line-height:1.02;letter-spacing:-.04em}.demo__head p{max-width:58ch;margin:14px 0 0;color:var(--muted);font-size:14px;line-height:1.6}.demo__stage{min-width:0;padding:clamp(22px,5vw,58px);border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--panel-2)}.demo__footer{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:0 clamp(22px,5vw,58px)}.demo__footer button{min-height:44px;padding:0 18px;border:1px solid var(--accent);border-radius:10px;background:var(--accent);color:#07101d;font-weight:800;cursor:pointer;transition:transform calc(160ms / var(--speed)) cubic-bezier(.2,.8,.2,1),opacity 150ms ease}.demo__footer button:hover{transform:translateY(-2px)}.demo__footer button:active{transform:translateY(0)}.demo__footer button:focus-visible,.demo__stage button:focus-visible{outline:3px solid #fff;outline-offset:3px}.status{min-height:22px;margin:0;color:var(--muted);font-size:12px;line-height:1.5}
@media(max-width:620px){body{padding:0}.demo{width:100%;min-height:100dvh;border-inline:0;border-radius:0}.demo__head,.demo__stage,.demo__footer{padding-inline:18px}.demo__footer{align-items:stretch;flex-direction:column}.demo__footer button{width:100%}}
@media(prefers-reduced-motion:reduce){.demo__footer button{transition:opacity 150ms ease;transform:none!important}}
`;

const crispCss = `<style id="crisp-motion-contract">${fontFaces.join('\n')}
html{font-synthesis:none;text-rendering:optimizeLegibility}body,button,input,select,textarea,body *{font-family:Manrope,"Segoe UI",sans-serif!important}.mono{font-family:"JetBrains Mono",ui-monospace,monospace!important}
</style>`;

function shell({ title, heading, copy, stage, css, script }) {
  return `<!doctype html>
<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><link rel="icon" href="data:,">
<style>${commonCss}${css}</style>${crispCss}</head>
<body><main class="demo" data-state="idle" aria-labelledby="demo-title"><header class="demo__head"><span>Clean-room motion</span><h1 id="demo-title">${heading}</h1><p>${copy}</p></header>${stage}<footer class="demo__footer"><p class="status" role="status" aria-live="polite">Готово к локальной демонстрации.</p><button type="button" data-replay>Повторить</button></footer></main>
<script>${script}</script></body></html>`;
}

const textCascade = shell({
  title: 'Каскадное раскрытие текста',
  heading: 'Смысл появляется в нужном порядке',
  copy: 'Короткая последовательность помогает прочитать главное, затем подтверждает контекст.',
  stage: `<section class="demo__stage text-stage" aria-label="Демонстрационная фраза"><p class="cascade"><span style="--i:0">Соберите</span> <span style="--i:1">идею.</span> <span style="--i:2">Проверьте</span> <span style="--i:3">ритм.</span> <span style="--i:4">Покажите</span> <span class="is-accent" style="--i:5">результат.</span></p></section>`,
  css: `.text-stage{display:grid;place-items:center;min-height:250px}.cascade{max-width:800px;margin:0;font-size:clamp(34px,6vw,76px);font-weight:780;line-height:1.02;letter-spacing:-.045em}.cascade span{display:inline-block;opacity:.18;transform:translateY(24px);transition:transform calc(620ms / var(--speed)) cubic-bezier(.16,1,.3,1),opacity calc(420ms / var(--speed)) ease;transition-delay:calc(var(--i) * 75ms / var(--speed))}.cascade .is-accent{color:var(--accent)}.demo[data-state=active] .cascade span,.demo[data-state=complete] .cascade span{opacity:1;transform:translateY(0)}@media(prefers-reduced-motion:reduce){.cascade span{transform:none;transition:opacity 150ms ease;transition-delay:0ms}}`,
  script: `const params=new URLSearchParams(location.search);const reduce=params.get('reduce')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches;const speed=Math.max(.5,Math.min(2,Number(params.get('speed'))||1));const demo=document.querySelector('.demo'),status=document.querySelector('.status'),replay=document.querySelector('[data-replay]');document.documentElement.style.setProperty('--speed',String(speed));const accent=params.get('accent');if(accent&&/^#[0-9a-f]{6}$/i.test(accent))document.documentElement.style.setProperty('--accent',accent);let timer=0;function paint(state){demo.dataset.state=state;status.textContent=state==='active'?'Фраза раскрывается по словам.':state==='complete'?'Фраза показана полностью.':'Готово к локальной демонстрации.'}function play(){clearTimeout(timer);paint('idle');requestAnimationFrame(()=>requestAnimationFrame(()=>paint('active')));timer=setTimeout(()=>paint('complete'),reduce?160:1100/speed)}replay.addEventListener('click',play);const raw=params.get('t'),state=params.get('state')||'live';if(raw!==null)paint(Number(raw)>=1?'complete':Number(raw)>.1?'active':'idle');else if(state==='live'||state==='active')play();else paint(state);window.__ready=true;`,
});

const directionalAction = shell({
  title: 'Направленная заливка действия',
  heading: 'Действие отвечает на направление',
  copy: 'Заливка входит с ближайшей стороны курсора. Фокус клавиатуры получает тот же ясный отклик.',
  stage: `<section class="demo__stage action-stage"><button class="direction-action" type="button" data-side="left"><span class="direction-fill" aria-hidden="true"></span><span class="direction-label">Открыть проект</span></button><p>Наведите с любой стороны или перейдите к кнопке клавишей Tab.</p></section>`,
  css: `.action-stage{min-height:250px;display:grid;place-items:center;align-content:center;gap:18px}.action-stage p{margin:0;color:var(--muted);font-size:12px;text-align:center}.direction-action{position:relative;isolation:isolate;min-width:min(360px,100%);min-height:76px;overflow:clip;border:1px solid var(--accent);border-radius:12px;background:transparent;color:var(--text);cursor:pointer}.direction-label{position:relative;z-index:1;font-size:18px;font-weight:800}.direction-fill{position:absolute;inset:0;z-index:0;background:var(--accent);transform:translateX(-101%);transition:transform calc(460ms / var(--speed)) cubic-bezier(.16,1,.3,1),opacity 150ms ease}.direction-action[data-side=right] .direction-fill{transform:translateX(101%)}.direction-action[data-side=top] .direction-fill{transform:translateY(-101%)}.direction-action[data-side=bottom] .direction-fill{transform:translateY(101%)}.direction-action.is-active .direction-fill{transform:translate(0,0)}.direction-action.is-active{color:#07101d}@media(prefers-reduced-motion:reduce){.direction-fill{transform:none!important;opacity:0;transition:opacity 150ms ease}.direction-action.is-active .direction-fill{opacity:1}}`,
  script: `const params=new URLSearchParams(location.search);const reduce=params.get('reduce')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches;const speed=Math.max(.5,Math.min(2,Number(params.get('speed'))||1));const demo=document.querySelector('.demo'),button=document.querySelector('.direction-action'),status=document.querySelector('.status');document.documentElement.style.setProperty('--speed',String(speed));const accent=params.get('accent');if(accent&&/^#[0-9a-f]{6}$/i.test(accent))document.documentElement.style.setProperty('--accent',accent);function nearestSide(event){const r=button.getBoundingClientRect(),x=event.clientX-r.left,y=event.clientY-r.top;const sides=[['left',x],['right',r.width-x],['top',y],['bottom',r.height-y]];sides.sort((a,b)=>a[1]-b[1]);return sides[0][0]}function active(on,side='left'){button.dataset.side=side;button.classList.toggle('is-active',on);demo.dataset.state=on?'active':'idle';status.textContent=on?'Действие выделено.':'Готово к локальной демонстрации.'}button.addEventListener('pointerenter',event=>active(true,nearestSide(event)));button.addEventListener('pointerleave',event=>active(false,nearestSide(event)));button.addEventListener('focus',()=>active(true,'left'));button.addEventListener('blur',()=>active(false,button.dataset.side));button.addEventListener('click',()=>{active(true,button.dataset.side);demo.dataset.state='complete';status.textContent='Демонстрационное действие подтверждено. Внешняя операция не выполнялась.'});document.querySelector('[data-replay]').addEventListener('click',()=>active(true,'left'));const raw=params.get('t'),state=params.get('state')||'live';if(raw!==null||state==='active'||state==='complete')active(true,'left');else active(false,'left');if(reduce)status.textContent='Уменьшенное движение: используется статическая заливка.';window.__ready=true;`,
});

const magneticDock = shell({
  title: 'Магнитная dock-навигация',
  heading: 'Ближайшая цель становится очевидной',
  copy: 'Указатель усиливает только соседние пункты. Клавиатура сохраняет предсказуемый порядок и заметный фокус.',
  stage: `<section class="demo__stage dock-stage"><nav class="magnetic-dock" aria-label="Разделы пространства"><button type="button" data-label="Обзор" aria-current="page"><b>О</b><span>Обзор</span></button><button type="button" data-label="Проекты"><b>П</b><span>Проекты</span></button><button type="button" data-label="Медиа"><b>М</b><span>Медиа</span></button><button type="button" data-label="Команда"><b>К</b><span>Команда</span></button><button type="button" data-label="Доступ"><b>Д</b><span>Доступ</span></button></nav></section>`,
  css: `.dock-stage{min-height:280px;display:grid;place-items:center}.magnetic-dock{display:flex;align-items:end;gap:10px;padding:14px;border:1px solid var(--line);border-radius:16px;background:#090e15}.magnetic-dock button{min-width:72px;min-height:74px;display:grid;place-items:center;gap:4px;border:1px solid transparent;border-radius:11px;background:transparent;color:var(--muted);cursor:pointer;transform:translateY(0) scale(1);transform-origin:center bottom;transition:transform 160ms cubic-bezier(.2,.8,.2,1),opacity 150ms ease,border-color 150ms ease,color 150ms ease}.magnetic-dock b{display:grid;place-items:center;width:38px;height:38px;border:1px solid var(--line);border-radius:9px;color:var(--text);font-size:14px}.magnetic-dock span{font-size:10px}.magnetic-dock button[aria-current=page]{border-color:var(--accent);color:var(--text)}@media(max-width:620px){.magnetic-dock{width:100%;justify-content:space-between;gap:3px;padding:10px}.magnetic-dock button{min-width:0;min-height:66px;flex:1}.magnetic-dock span{font-size:9px}}@media(prefers-reduced-motion:reduce){.magnetic-dock button{transform:none!important;transition:opacity 150ms ease,border-color 150ms ease,color 150ms ease}}`,
  script: `const params=new URLSearchParams(location.search);const reduce=params.get('reduce')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches;const dock=document.querySelector('.magnetic-dock'),items=[...dock.querySelectorAll('button')],demo=document.querySelector('.demo'),status=document.querySelector('.status');const accent=params.get('accent');if(accent&&/^#[0-9a-f]{6}$/i.test(accent))document.documentElement.style.setProperty('--accent',accent);let frame=0,pointerX=0;function reset(){items.forEach(item=>item.style.transform='translateY(0) scale(1)')}function render(){frame=0;if(reduce){reset();return}items.forEach(item=>{const r=item.getBoundingClientRect(),distance=Math.abs(pointerX-(r.left+r.width/2)),strength=Math.max(0,1-distance/150),scale=1+strength*.22,lift=-strength*13;item.style.transform='translateY('+lift.toFixed(2)+'px) scale('+scale.toFixed(3)+')'})}dock.addEventListener('pointermove',event=>{pointerX=event.clientX;if(!frame)frame=requestAnimationFrame(render)});dock.addEventListener('pointerleave',()=>{if(frame)cancelAnimationFrame(frame);frame=0;reset();demo.dataset.state='idle';status.textContent='Готово к локальной демонстрации.'});items.forEach(item=>{item.addEventListener('focus',()=>{reset();if(!reduce)item.style.transform='translateY(-10px) scale(1.16)';demo.dataset.state='active';status.textContent=item.dataset.label+' выбрано с клавиатуры.'});item.addEventListener('blur',reset);item.addEventListener('click',()=>{items.forEach(node=>node.removeAttribute('aria-current'));item.setAttribute('aria-current','page');demo.dataset.state='complete';status.textContent=item.dataset.label+' стало активным разделом.'})});document.querySelector('[data-replay]').addEventListener('click',()=>{items[1].focus()});const state=params.get('state')||'live',raw=params.get('t');if(raw!==null||state==='active'||state==='complete')items[1].focus();if(reduce)status.textContent='Уменьшенное движение: используется статическое выделение.';window.__ready=true;`,
});

await writeFile(path.join(web, demos[0].file), textCascade, 'utf8');
await writeFile(path.join(web, demos[1].file), directionalAction, 'utf8');
await writeFile(path.join(web, demos[2].file), magneticDock, 'utf8');

const manifestFile = path.join(web, 'animation-lab-manifest.json');
const manifest = JSON.parse(await readFile(manifestFile, 'utf8'));
manifest.version = 8;
manifest.verifiedAt = '2026-09-01';
manifest.license = 'Original Eclipse Forge clean-room motion demos. React Bits was used only to select interaction categories; no component source, package, asset or runtime dependency is redistributed.';
for (const demo of demos) {
  const index = manifest.demos.findIndex((item) => item.id === demo.id);
  if (index >= 0) manifest.demos[index] = demo;
  else manifest.demos.push(demo);
}
await writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

const catalogFile = path.join(web, 'animation-demos.js');
const catalogSource = await readFile(catalogFile, 'utf8');
const catalog = JSON.parse(catalogSource.replace(/^window\.ECLIPSE_ANIMATION_DEMOS=/, '').replace(/;\s*$/, ''));
for (const demo of demos) {
  const index = catalog.findIndex((item) => item.id === demo.id);
  if (index >= 0) catalog[index] = demo;
  else catalog.push(demo);
}
await writeFile(catalogFile, `window.ECLIPSE_ANIMATION_DEMOS=${JSON.stringify(catalog, null, 2)};\n`, 'utf8');

const pageFile = path.join(web, 'animations.html');
const page = (await readFile(pageFile, 'utf8'))
  .replaceAll('?v=7', '?v=8')
  .replace('id="lab-count">30</b>', `id="lab-count">${catalog.length}</b>`)
  .replace('id="demo-count">30</span>', `id="demo-count">${catalog.length}</span>`);
await writeFile(pageFile, page, 'utf8');

const appFile = path.join(web, 'animation-lab.js');
const app = (await readFile(appFile, 'utf8')).replace('q.set("v","7")', 'q.set("v","8")');
await writeFile(appFile, app, 'utf8');

console.log(`Added ${demos.length} clean-room motion patterns. Animation Lab now contains ${catalog.length} scenes.`);
