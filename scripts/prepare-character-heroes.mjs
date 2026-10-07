// All source frames retained. Only local FFmpeg processing; no uploads or downloads.
import {execFileSync} from 'node:child_process';
import {mkdirSync,copyFileSync,readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
import {scenes} from '../web/experiments/character-heroes/scenes.mjs';
const root=fileURLToPath(new URL('../web/experiments/character-heroes/',import.meta.url));
const sourceArg=process.argv.indexOf('--source-dir');
const sourceDir=sourceArg>=0?process.argv[sourceArg+1]:null;
for(const scene of scenes){
 const dir=join(root,'assets',scene.id),src=join(root,'sources',scene.id);
 mkdirSync(dir,{recursive:true});mkdirSync(src,{recursive:true});
 if(sourceDir)for(const [from,to] of [[scene.video,'original.mp4'],[scene.reference,'reference.png']]){
  const target=join(src,to),input=join(sourceDir,from);
  if(existsSync(target)&&!readFileSync(target).equals(readFileSync(input)))throw new Error(`Refusing to replace different original: ${target}`);
  if(!existsSync(target))copyFileSync(input,target);
 }
 const video=join(src,'original.mp4');
 const p=JSON.parse(execFileSync('ffprobe',['-v','error','-select_streams','v:0','-show_entries','stream=width,height,r_frame_rate,nb_frames,duration','-of','json',video],{encoding:'utf8'})).streams[0];
 if(p.width!==1280||p.height!==720||p.r_frame_rate!=='24/1'||+p.nb_frames!==scene.frames)throw new Error(`Unexpected media: ${scene.id}`);
 const ff=(filter,out,extra=[])=>execFileSync('ffmpeg',['-hide_banner','-loglevel','error','-nostdin','-protocol_whitelist','file,pipe','-i',video,'-vf',filter,'-frames:v','1',...extra,'-y',out]);
 if(!process.argv.includes('--manifest-only')){
  const rows=Math.ceil(scene.frames/12);
  ff(`scale=480:270,tile=12x${rows}`,join(dir,'atlas.webp'),['-quality','86']);
  ff(`scale=320:180,tile=12x${rows}`,join(dir,'atlas-mobile.webp'),['-quality','83']);
  ff(`scale=320:180,tile=${scene.frames}x1`,join(src,'horizontal-sprite.png'));
  ff(`select=eq(n\\,${scene.idle})`,join(dir,'poster.webp'),['-quality','90']);
 }
 const names=['original.mp4','reference.png','horizontal-sprite.png'].map(f=>`sources/${scene.id}/${f}`).concat(['atlas.webp','atlas-mobile.webp','poster.webp'].map(f=>`assets/${scene.id}/${f}`));
 const files=names.map(file=>{const data=readFileSync(join(root,file));return{file,bytes:data.length,sha256:createHash('sha256').update(data).digest('hex')};});
 writeFileSync(join(dir,'manifest.json'),JSON.stringify({schemaVersion:1,frames:scene.frames,fps:24,duration:+p.duration,sourceWidth:p.width,sourceHeight:p.height,columns:12,rows:Math.ceil(scene.frames/12),idleFrame:scene.idle,trackingAnchors:[scene.left,scene.idle,scene.right],cyclicIndex:scene.loop,seamless:false,rights:'User-provided materials for this Library example. No general redistribution license declared.',files},null,2)+'\n');
 console.log(JSON.stringify({id:scene.id,frames:scene.frames,files:files.map(({file,bytes})=>({file,bytes}))}));
}
