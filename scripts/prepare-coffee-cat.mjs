// Local-only reproducible derivatives; source media is never executed or uploaded.
import {execFileSync} from 'node:child_process';
import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=new URL('../web/experiments/coffee-cat/',import.meta.url);
const file=p=>fileURLToPath(new URL(p,root));
const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-select_streams','v:0','-show_entries','stream=width,height,r_frame_rate,nb_frames,duration','-of','json',file('sources/coffee-cat.mp4')],{encoding:'utf8'})).streams[0];
if(probe.width!==1280||probe.height!==720||probe.nb_frames!=='96'||probe.r_frame_rate!=='24/1'||Number(probe.duration)!==4)throw new Error('Unexpected source; inspect before regenerating');
if(!process.argv.includes('--manifest-only')){
 const ff=(filter,out,extra=[])=>execFileSync('ffmpeg',['-hide_banner','-loglevel','error','-nostdin','-protocol_whitelist','file,pipe','-i',file('sources/coffee-cat.mp4'),'-vf',filter,'-frames:v','1',...extra,'-y',file(out)]);
 ff('scale=480:270,tile=12x8','assets/atlas.webp',['-quality','85']);
 ff('scale=320:180,tile=12x8','assets/atlas-mobile.webp',['-quality','82']);
 ff('scale=320:180,tile=96x1','sources/horizontal-sprite.png');
 ff('select=eq(n\\,40)','assets/poster.webp',['-quality','88']);
}
const files=['sources/coffee-cat.mp4','sources/character-reference.jpeg','sources/horizontal-sprite.png','assets/atlas.webp','assets/atlas-mobile.webp','assets/poster.webp'].map(name=>{const b=readFileSync(file(name));return{file:name,bytes:b.length,sha256:createHash('sha256').update(b).digest('hex')};});
writeFileSync(file('assets/manifest.json'),JSON.stringify({schemaVersion:1,frames:96,fps:24,duration:4,sourceWidth:1280,sourceHeight:720,columns:12,rows:8,idleFrame:40,trackingRange:[28,56],sipRange:[64,95],seamless:false,desktopDecodedBytes:5760*2160*4,mobileDecodedBytes:3840*1440*4,rights:'User-supplied for this Library example; no general redistribution license declared.',files},null,2)+'\n');
console.log(JSON.stringify({frames:96,files:files.map(({file,bytes})=>({file,bytes}))}));
