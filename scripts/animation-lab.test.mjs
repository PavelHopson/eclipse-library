import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const web=path.join(root,'web');
const manifest=JSON.parse(fs.readFileSync(path.join(web,'animation-lab-manifest.json'),'utf8'));
assert.equal(manifest.version,3,'Animation Lab manifest must use the workbench contract');
assert.equal(manifest.demos.length,7,'All seven product patterns must be present');
assert.equal(new Set(manifest.demos.map(item=>item.id)).size,manifest.demos.length,'Demo ids must be unique');
for(const demo of manifest.demos){
  const source=fs.readFileSync(path.join(web,demo.file),'utf8');
  assert.match(source,/prefers-reduced-motion|reduce/,'Reduced motion path is required: '+demo.file);
  assert.match(source,/perspective/,'Every cinematic demo must establish an explicit depth contract: '+demo.file);
  assert.match(source,/URLSearchParams/,'Query harness is required: '+demo.file);
  assert.match(source,/window\.__ready=true/,'Deterministic browser readiness is required: '+demo.file);
  assert.match(source,/viewport/,'Responsive viewport is required: '+demo.file);
  assert.doesNotMatch(source,/<script\s+src=/i,'Remote scripts are forbidden: '+demo.file);
  assert.doesNotMatch(source,/\beval\s*\(|document\.write/i,'Unsafe execution is forbidden: '+demo.file);
  assert.doesNotMatch(source,/https?:\/\//i,'Standalone demos must not call remote origins: '+demo.file);
  assert.doesNotMatch(source,/(?:const|let|var)\s+\w+\s*=\s*Number\([^\n;]*\.get\(["']t["']\)\)/,'Missing t must not become frozen frame zero: '+demo.file);
}
for(const demo of manifest.demos.filter(item=>item.id!=='vault-dial')){
  const source=fs.readFileSync(path.join(web,demo.file),'utf8');
  assert.match(source,/Eclipse 3D contract/,'Every upgraded demo must document its unique 3D metaphor: '+demo.file);
  assert.match(source,/pointer:fine/,'Desktop parallax must be limited to precise pointing devices: '+demo.file);
}
const vault=fs.readFileSync(path.join(web,'animation-vault-dial.html'),'utf8');
assert.match(vault,/perspective:1200px/,'Vault must establish a real 3D perspective');
assert.match(vault,/rotateY\(-72deg\)/,'Vault door must open through a bounded 3D rotation');
assert.match(vault,/pointerdown|pointermove/,'Vault dial must support direct manipulation');
assert.match(vault,/addEventListener\("wheel"/,'Vault dial must support wheel input');
assert.match(vault,/ArrowRight|ArrowLeft/,'Vault dial must support keyboard rotation');
assert.match(vault,/prefers-reduced-motion:reduce/,'Vault must provide a reduced-motion presentation');
assert.doesNotMatch(vault,/class="chamber"[^>]*aria-hidden/,'Interactive vault chamber must stay in the accessibility tree');
assert.match(vault,/replace\(\/\\D\/g,""\)/,'Vault code input must reject non-numeric characters');
assert.match(vault,/window\.__ready=true/,'Vault must expose deterministic browser readiness');
assert.match(vault,/overflow:clip/,'Vault shell must clip decorative depth layers to the card boundary');
assert.match(vault,/calc\(100dvh - 250px\)/,'Vault chamber must size from available viewport height');
assert.match(vault,/\.controls>\*\{min-width:0\}/,'Vault controls must be shrink-safe inside the card');
const guardian=fs.readFileSync(path.join(web,'animation-reactive-login.html'),'utf8');
assert.match(guardian,/\.card\{position:relative;isolation:isolate;overflow:clip;max-width:100%/,'Guardian form must contain all 3D layers and fields');
assert.doesNotMatch(guardian,/inset:14px -11px -15px 17px/,'Guardian depth plate must not overflow its card');
const upload=fs.readFileSync(path.join(web,'animation-upload-queue.html'),'utf8');
assert.match(upload,/escapeHtml\(f\.name\)/,'User-controlled file names must be output encoded before innerHTML rendering');
assert.match(upload,/\.card\{position:relative;isolation:isolate;width:min\(100%,610px\);max-width:100%;[^}]*overflow:clip/,'Upload Queue must contain its 3D layers inside the visible card');
assert.match(upload,/\.file>\*\{min-width:0\}/,'Upload Queue rows must remain shrink-safe');
const progress=fs.readFileSync(path.join(web,'animation-ai-progress.html'),'utf8');
assert.match(progress,/\.shell\{position:relative;isolation:isolate;width:min\(100%,660px\);max-width:100%;overflow:clip/,'AI Progress must contain its 3D layers inside the visible shell');
assert.match(progress,/\.body>\*\{min-width:0\}/,'AI Progress columns must remain shrink-safe');
const otp=fs.readFileSync(path.join(web,'animation-otp-input.html'),'utf8');
assert.match(otp,/\.card\{position:relative;isolation:isolate;width:min\(100%,470px\);max-width:100%;overflow:clip/,'Dark OTP must contain its 3D layers inside the visible card');
const otpLight=fs.readFileSync(path.join(web,'animation-otp-light.html'),'utf8');
assert.match(otpLight,/\.card\{position:relative;isolation:isolate;width:min\(100%,480px\);max-width:100%;overflow:clip/,'Light OTP must contain its 3D layers inside the visible card');
for(const source of [upload,progress,otp,otpLight]){
  assert.doesNotMatch(source,/inset:\d+px -\d+px -\d+px \d+px/,'Decorative depth plates must not escape the owning card');
  assert.match(source,/min-height:100dvh/,'Each demo must use the dynamic viewport height contract');
}
const page=fs.readFileSync(path.join(web,'animations.html'),'utf8');
const app=fs.readFileSync(path.join(web,'animation-lab.js'),'utf8');
const css=fs.readFileSync(path.join(web,'animation-lab.css'),'utf8');
assert.match(page,/sandbox="allow-scripts"/,'Preview iframe must be sandboxed');
assert.doesNotMatch(page,/allow-same-origin|allow-forms|allow-popups/,'Preview sandbox must stay minimal');
assert.match(page,/Проверьте паттерн до внедрения/);
assert.match(page,/aria-label="Размер экрана"/);
assert.match(page,/id="export-dialog"/);
assert.match(app,/renderActive\(true\)/,'First animation must autoplay');
assert.match(app,/URLSearchParams/,'Workbench must generate deterministic preview URLs');
assert.match(app,/navigator\.clipboard/,'Export must support copy');
assert.match(app,/download/,'Export must support safe local download');
assert.match(css,/\.lab-shell\{grid-template-columns:minmax\(0,1fr\);width:100%\}/,'Mobile grid must not expand to the demo rail min-content width');
assert.match(css,/\.lab-shell>\*\{min-width:0\}/,'Workbench children must be allowed to shrink without horizontal overflow');
for(const demo of manifest.demos){assert.ok(app.includes(demo.file),demo.file+' must be wired into the stage')}
console.log('Animation Lab checks passed for '+manifest.demos.length+' demos.');
