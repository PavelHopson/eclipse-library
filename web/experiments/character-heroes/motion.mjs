export const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
export function targetFrame(scene,x){
 const p=clamp(x,0,1);
 return p<.5?scene.idle+(scene.left-scene.idle)*(1-p*2):scene.idle+(scene.right-scene.idle)*(p*2-1);
}
export function frameIndex(scene,value){return scene.loop?((Math.round(value)%scene.frames)+scene.frames)%scene.frames:clamp(Math.round(value),0,scene.frames-1);}
export function ease(current,target,dt){const next=current+(target-current)*(1-Math.exp(-clamp(dt,0,50)/75));return Math.abs(next-target)<.025?target:next;}
export function spriteRect(scene,value,width){const f=frameIndex(scene,value);return[(f%12)*width,Math.floor(f/12)*width*9/16,width,width*9/16];}
