"use strict";
function primaryAction(){if(state==='ready'||state==='finished')start();else pause();syncControls();}
function syncControls(){const playing=state==='running'||state==='countdown';document.body.classList.toggle('playing',playing);$('touchPlay').textContent=state==='paused'?'Devam':state==='finished'?'Tekrar oyna':playing?'Duraklat':'Başlat';canvas.setAttribute('aria-label',playing?'Maçı duraklatmak için dokun':'Maçı başlatmak veya devam etmek için dokun');}
canvas.addEventListener('click',primaryAction);canvas.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();primaryAction();}});
$('touchPlay').onclick=primaryAction;$('touchNew').onclick=()=>{reset();start();};
$('quality').onchange=()=>{const scale=Number($('quality').value);canvas.width=540*scale;canvas.height=960*scale;ctx.setTransform(scale,0,0,scale,0,0);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';};
$('full').onclick=async()=>{document.body.classList.add('record');syncControls();try{if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();}catch{}};
setInterval(syncControls,150);syncControls();
