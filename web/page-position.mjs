// Session-scoped position: restore only after asynchronous page content is ready.
export function pagePosition(key, readState, applyState) {
 let saved=null,ready=false,timer;
 try{saved=JSON.parse(sessionStorage.getItem(key));if(saved&&Number.isFinite(saved.y))applyState(saved.state||{});else saved=null;}catch{}
 function save(){if(!ready)return;try{sessionStorage.setItem(key,JSON.stringify({y:window.scrollY,state:readState()}));}catch{}}
 function schedule(){clearTimeout(timer);timer=setTimeout(save,100);}
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('pagehide',save);
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')save();});
 return {save,async restore(){if(ready)return;await document.fonts.ready;await new Promise(requestAnimationFrame);await new Promise(requestAnimationFrame);if(saved)window.scrollTo({top:saved.y,left:0,behavior:'instant'});ready=true;},clear(){ready=false;clearTimeout(timer);try{sessionStorage.removeItem(key);}catch{}}};
}
