document.addEventListener('DOMContentLoaded', () => {
  const mode=document.querySelector('.mode-switch'); mode.addEventListener('click',()=>{document.documentElement.classList.toggle('light');mode.classList.toggle('active')});
  document.querySelectorAll('.box').forEach((card)=>{card.addEventListener('pointermove',(event)=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const rect=card.getBoundingClientRect(),rx=((event.clientY-rect.top)/rect.height-.5)*-18,ry=((event.clientX-rect.left)/rect.width-.5)*18;card.style.transform=`perspective(850px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.035)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
});
