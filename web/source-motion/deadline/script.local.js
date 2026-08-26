(() => {
  const animationTime=20, days=7, day=document.querySelector('.deadline-days .day'), arm=document.querySelector('#designer-arm-grop'), fill=document.querySelector('#progress-time-fill'), death=document.querySelector('#death-group'), holder=document.querySelector('.deadline-days');
  [fill,death].forEach((element)=>element && (element.style.animationDuration=`${animationTime}s`));
  if(holder && !holder.querySelector('.mask-red')) holder.innerHTML=`<div class="mask-red"><div class="inner">${holder.innerHTML}</div></div><div class="mask-white"><div class="inner">${holder.innerHTML}</div></div>`;
  function cycle(){ let actual=days; const labels=document.querySelectorAll('.deadline-days .day'); [0,4000,8000,12000,15000].forEach((delay,index)=>setTimeout(()=>arm && (arm.style.animationDuration=['1.5s','1s','.7s','.3s','.2s'][index]),delay)); const timer=setInterval(()=>{actual--;labels.forEach((label)=>label.textContent=String(actual||days));if(actual<=0)clearInterval(timer)},animationTime*1000/days); }
  cycle(); if(!matchMedia('(prefers-reduced-motion: reduce)').matches) setInterval(cycle,animationTime*1000);
})();
