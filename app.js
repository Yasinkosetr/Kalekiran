'use strict';
const $=id=>document.getElementById(id),canvas=$('game'),ctx=canvas.getContext('2d');ctx.setTransform(3,0,0,3,0,0);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality="high";
let match=null,state='ready',countdown=0,last=0,acc=0,particles=[],finishAge=0,images=new Map(),audio=null,teams=[TEAMS[0],TEAMS[1]],seed=0;
const rand=()=>crypto.getRandomValues(new Uint32Array(1))[0];
function cache(t){if(images.has(t.id))return;const im=new Image();im.onload=()=>images.set(t.id,im);im.onerror=()=>images.set(t.id,null);im.src=t.logo;images.set(t.id,null);}
function fill(){
 const list=TEAMS.filter(t=>$('pool').value==='all'||t.group===$('pool').value);
 ['left','right'].forEach((id,i)=>{const prev=$(id).value;$(id).replaceChildren(...list.map(t=>{const o=document.createElement('option');o.value=t.id;o.textContent=t.name;return o;}));$(id).value=list.some(t=>t.id===prev)?prev:(list[i]||list[0])?.id||'';});
 if(list.length){select();}else reset();
 lock(false);if(!list.length)$('notice').textContent='Bu ligde henüz takım yok. Başka bir lig seç.';
}
function select(){const picked=[$('left').value,$('right').value].map(id=>TEAMS.find(t=>t.id===id));if(picked.every(Boolean)){teams=picked;teams.forEach(cache);}reset();}
function lock(on){const enough=$('left').options.length>=2;['pool','left','right','swap','random','pace','duration'].forEach(id=>$(id).disabled=on);$('start').disabled=on||!enough;$('random').disabled=on||!enough;$('swap').disabled=on||!enough;}
function reset(){stopMusic();state='ready';match=null;particles=[];finishAge=0;demoMatch=null;lock(false);$('notice').textContent='';$('resumeMatch').hidden=true;}
function start(){if(!$('left').value||!$('right').value||teams[0].key===teams[1].key){$('notice').textContent='İki farklı takım seç.';navigate('setup');return;}
 stopMusic();try{audio??=new(window.AudioContext||window.webkitAudioContext)();audio.resume().catch(()=>{});teams.forEach(prepareMusic);}catch{}
 seed=rand();match=new Match(seed,Number($('pace').value),$('duration').value);countdown=3;state='countdown';acc=0;particles=[];finishAge=0;lock(true);navigate('match');}
let previousState='running';function pause(){if(state==='paused'){audio?.resume().catch(()=>{});state=previousState;}else if(state==='running'||state==='countdown'){previousState=state;state='paused';stopMusic();}syncControls();}
const musicBuffers=new Map();let musicSource=null;
function stopMusic(){if(musicSource){try{musicSource.stop();}catch{}musicSource=null;}}
async function prepareMusic(t){if(!audio||!t.music||musicBuffers.has(t.music))return;musicBuffers.set(t.music,null);try{const response=await fetch(t.music);if(!response.ok)return;const buffer=await audio.decodeAudioData(await response.arrayBuffer());musicBuffers.set(t.music,buffer);}catch{}}
function playWin(t){stopMusic();if(!$('sound').checked)return;const buffer=musicBuffers.get(t.music);if(!buffer||!audio){beep(880,.5);return;}const source=audio.createBufferSource(),gain=audio.createGain();source.buffer=buffer;gain.gain.value=.65;source.connect(gain).connect(audio.destination);musicSource=source;source.onended=()=>{if(musicSource===source)musicSource=null;};source.start();}
function navigate(view,writeHash=true){const game=view==='match'&&!!match;if(!game){if(state==='running'||state==='countdown')pause();stopMusic();document.body.classList.remove('record');lock(false);}document.body.dataset.view=game?'match':'setup';$('setupPage').hidden=game;$('matchPage').hidden=!game;$('resumeMatch').hidden=!match;
 if(writeHash&&location.hash!==(game?'#mac':'#secim'))location.hash=game?'mac':'secim';window.scrollTo(0,0);syncControls();}
window.addEventListener('hashchange',()=>navigate(location.hash==='#mac'?'match':'setup',false));
function beep(f,d=.06){if(!$('sound').checked||!audio)return;let o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.055,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+d);o.connect(g).connect(audio.destination);o.start();o.stop(audio.currentTime+d);}
function burst(x,y,c,n=14){for(let i=0;i<n;i++)particles.push({x,y,vx:(Math.random()-.5)*200,vy:(Math.random()-.7)*220,life:1,color:c});}
function record(){document.body.classList.toggle('record');}
$('pool').onchange=fill;$('left').onchange=select;$('right').onchange=select;$('start').onclick=start;$('record').onclick=record;$('exitRecord').onclick=record;
$('back').onclick=()=>navigate('setup');$('resumeMatch').onclick=()=>navigate('match');
$('swap').onclick=()=>{const a=$('left').value;$('left').value=$('right').value;$('right').value=a;select();};
$('random').onclick=()=>{const opts=[...$('left').options].map(o=>o.value);if(opts.length<2)return;const a=rand()%opts.length;const team=TEAMS.find(t=>t.id===opts[a]);const rest=opts.filter(id=>TEAMS.find(t=>t.id===id).key!==team.key);if(!rest.length)return;$('left').value=opts[a];$('right').value=rest[rand()%rest.length];select();};
$('sound').onchange=()=>{if(!$('sound').checked)stopMusic();};
document.addEventListener('keydown',e=>{if(['INPUT','SELECT','TEXTAREA','BUTTON'].includes(e.target.tagName))return;if(e.code==='Space'){e.preventDefault();state==='ready'||state==='finished'?start():pause();}if(document.body.dataset.view!=='match')return;if(e.key.toLowerCase()==='f')record();if(e.key.toLowerCase()==='r'){reset();start();}if(e.key==='Escape'){if(document.body.classList.contains('record'))document.body.classList.remove('record');else navigate('setup');}});
function text(s,x,y,size=14,color='#fff',align='center',weight=600){ctx.font=weight+' '+size+'px Segoe UI,Arial';ctx.fillStyle=color;ctx.textAlign=align;ctx.fillText(s,x,y);}
function box(x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke();}}
function logo(t,x,y,r){ctx.save();ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle='#f8fbff';ctx.shadowColor=t.color;ctx.shadowBlur=0;ctx.fill();ctx.shadowBlur=0;ctx.clip();const im=images.get(t.id);if(im){let scale=(r*1.6)/Math.max(im.width,im.height);ctx.drawImage(im,x-im.width*scale/2,y-im.height*scale/2,im.width*scale,im.height*scale);}else{text(t.abbr,x,y+5,r*.65,'#102033');}ctx.restore();}
function frame(now){let dt=Math.min((now-last)/1000||0,.05);last=now;if(state==='countdown'){let n=Math.ceil(countdown);countdown-=dt;if(Math.ceil(countdown)!==n)beep(480+n*100,.1);if(countdown<=0)state='running';}
 if(state==='running'){acc+=dt;while(acc>=1/120&&state==='running'){match.step(1/120);acc-=1/120;for(const e of match.events){if(e.type==='hit'){burst(12+e.side*266+e.x,e.y,e.side?'#ffbd70':'#63e5e7',e.destroyed?18:5);beep(e.destroyed?760:360,.045);if(e.destroyed)shake=0;}if(e.type==='boost'){burst(12+e.side*266+e.x,e.y,'#ffffff',8);}if(e.type==='overtime'){beep(220,.3);}if(e.type==='win'){state='finished';finishAge=0;lock(false);$('notice').textContent=teams[match.winner].name+' kazandı · '+Math.floor(match.time)+' saniye';$('start').textContent='YENİ MAÇ ↗';for(let k=0;k<8;k++)burst(80+k*55,380,'#adf5c0',12);playWin(teams[match.winner]);syncControls();}}}}
 if(state==='finished')finishAge+=dt;draw(dt);requestAnimationFrame(frame);}
$('duration').onchange=reset;$('pace').onchange=reset;$('snapshot').onclick=async()=>{try{const blob=await new Promise(r=>canvas.toBlob(r,'image/png'));const file=new File([blob],'kale-kiran.png',{type:'image/png'});if(navigator.canShare?.({files:[file]})&&matchMedia('(pointer:coarse)').matches){await navigator.share({files:[file],title:'Kale Kıran'});}else{const a=document.createElement('a');const url=URL.createObjectURL(blob);a.download=file.name;a.href=url;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);}}catch(e){if(e.name!=='AbortError')$('notice').textContent='Görüntü kaydedilemedi. Telefonun ekran görüntüsü özelliğini kullanabilirsin.';}};document.addEventListener('visibilitychange',()=>{if(document.hidden&&(state==='running'||state==='countdown'))pause();});
Object.entries(LIGLER).forEach(([key,l])=>{const o=document.createElement('option');o.value=key;o.textContent=l.isim;$('pool').append(o);});
fill();if(TEAMS.some(t=>t.id==='superlig:gs')){$('left').value='superlig:gs';$('right').value='superlig:fb';select();}history.replaceState(null,'','#secim');requestAnimationFrame(frame);
