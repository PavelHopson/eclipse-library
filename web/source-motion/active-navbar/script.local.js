(() => {
  const nav = document.querySelector('nav');
  const indicator = document.createElement('div'); indicator.className = 'active-element'; nav.append(indicator);
  const buttons = [...nav.querySelectorAll('li button')];
  const xFor = (button) => { const rect=button.getBoundingClientRect(), host=nav.getBoundingClientRect(); return rect.left-host.left+(rect.width-36)/2; };
  let current = buttons.find((button) => button.closest('li').classList.contains('active')) || buttons[0];
  let x = xFor(current); indicator.style.transform=`translate3d(${x}px,0,0)`;
  buttons.forEach((button) => button.addEventListener('click', () => {
    if (button === current) return;
    const next=xFor(button), distance=next-x, stretch=Math.max(1,Math.abs(distance)/36+1), right=distance>0;
    buttons.forEach((entry) => entry.closest('li').classList.toggle('active', entry===button));
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) indicator.style.transform=`translate3d(${next}px,0,0)`;
    else indicator.animate([{transform:`translate3d(${x}px,0,0) scaleX(1)`,opacity:1},{transform:`translate3d(${right?x:next}px,0,0) scaleX(${stretch})`,opacity:.95,offset:.48},{transform:`translate3d(${next}px,0,0) scaleX(1)`,opacity:1}],{duration:620,easing:'cubic-bezier(.2,.75,.25,1)'}).onfinish=()=>indicator.style.transform=`translate3d(${next}px,0,0)`;
    indicator.style.transformOrigin=right?'left center':'right center'; current=button; x=next;
  }));
  addEventListener('resize',()=>{x=xFor(current); indicator.style.transform=`translate3d(${x}px,0,0)`;});
})();
