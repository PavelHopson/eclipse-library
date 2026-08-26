(() => {
  const light=document.querySelector('#light');
  const sides=document.querySelectorAll('.lettersSide');
  const fronts=document.querySelectorAll('.lettersFront');
  const fur=document.querySelectorAll('.hlFur');
  const skin=document.querySelectorAll('.hlSkin');
  let dark=false;
  function paint(){ dark=!dark; if(light) light.style.visibility=dark?'hidden':'visible'; sides.forEach((el)=>{el.style.fill=dark?'#222':'#aaa';el.style.stroke=dark?'#222':'#aaa'}); fronts.forEach((el)=>{el.style.fill=dark?'#333':'#fff';el.style.stroke=dark?'#333':'#fff'}); fur.forEach((el)=>el.style.fill=dark?'#0d485b':'#67c7e5'); skin.forEach((el)=>el.style.fill=dark?'#163e48':'#b7e7ef'); }
  paint(); if(!matchMedia('(prefers-reduced-motion: reduce)').matches) setInterval(paint,5900);
})();
