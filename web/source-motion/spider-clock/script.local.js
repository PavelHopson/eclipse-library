(() => {
  const copyPath=(target,source)=>{const to=document.querySelector(target),from=document.querySelector(source);if(to&&from)to.setAttribute('d',from.getAttribute('d'))};
  copyPath('#face','#face01');copyPath('#hand-sec','#handSec01');copyPath('#hand-min','#handMin01');copyPath('#hand-hr','#handHr01');
  const sec=document.querySelector('#sec'),min=document.querySelector('#min'),hr=document.querySelector('#hr');
  function update(){const now=new Date(),seconds=now.getSeconds()+now.getMilliseconds()/1000,minutes=now.getMinutes()+seconds/60,hours=(now.getHours()%12)+minutes/60; if(sec)sec.style.transform=`rotate(${seconds*6}deg)`;if(min)min.style.transform=`rotate(${minutes*6}deg)`;if(hr)hr.style.transform=`rotate(${hours*30}deg)`;requestAnimationFrame(update)}
  update();
})();
