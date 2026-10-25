'use strict';
let demoMatch=null,shake=0;
function line(x1,y1,x2,y2,c,w=1){ctx.strokeStyle=c;ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}
function glowCircle(x,y,r,c){let g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,c);g.addColorStop(1,'#00000000');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);}
function trophy(x,y,s=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle='#ffdc89';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-13,-15);ctx.lineTo(-10,2);ctx.quadraticCurveTo(0,18,10,2);ctx.lineTo(13,-15);ctx.closePath();ctx.fillStyle='#efbd62';ctx.fill();ctx.stroke();line(0,12,0,23,'#ffdc89',4);line(-10,24,10,24,'#ffdc89',4);ctx.beginPath();ctx.moveTo(-13,-10);ctx.bezierCurveTo(-28,-16,-26,8,-11,7);ctx.moveTo(13,-10);ctx.bezierCurveTo(28,-16,26,8,11,7);ctx.stroke();ctx.restore();}
function draw(dt){let m=match||(demoMatch??=new Match(42,1,$('duration').value)),clock=m.time;
 ctx.fillStyle='#080f1c';ctx.fillRect(0,0,540,960);
 const colors=['#60e6ff','#ffc15c'];
 teams.forEach((t,i)=>{let x=i?406:134;ctx.beginPath();ctx.arc(x,47,35,0,Math.PI*2);ctx.strokeStyle=colors[i];ctx.lineWidth=2;ctx.stroke();logo(t,x,47,29);text(t.name.length>21?t.abbr:t.name,x,92,18,'#f6f8ff');text(String(m.lanes[i].damage).padStart(2,'0'),x,123,30,colors[i],'center',800);text('HASAR PUANI',x,138,10,'#b5c7dc');});
 text('VS',270,52,13,'#8293aa');let remain=Math.max(0,Math.ceil(m.limit-clock));box(230,95,80,35,11,'#19273a','#364761');text(m.sudden?'UZATMA':String(Math.floor(remain/60)).padStart(2,'0')+':'+String(remain%60).padStart(2,'0'),270,118,m.sudden?11:18,m.sudden?'#ffca78':'#edf7ff');
 if(m.sudden)text('İLK İSABET',270,137,10,'#ffc15c');
 ctx.save();
 m.lanes.forEach((b,i)=>{let ox=12+i*266,c=colors[i];ctx.save();ctx.translate(ox,0);
 box(0,146,250,778,8,'#112237',c);line(8,750,242,750,'#263e57');
 // Goal: posts, net, lock plate, then a green opening once every block is gone.
 const open=b.broken===m.total;box(37,149,176,43,3,open?'#90f5a820':'#050c16','#a7bfd677');for(let x=43;x<211;x+=11)line(x,152,x,190,'#e7f2ff16');for(let y=157;y<191;y+=9)line(39,y,211,y,'#e7f2ff16');line(37,193,37,150,'#deefff',3);line(213,193,213,150,'#deefff',3);line(37,150,213,150,'#deefff',3);text(open?'GOL İÇİN AÇIK':'ZIRHLI KALE',125,177,9,open?'#adffc5':'#d0dbea');
 const opponent=teams[1-i],enemyColor=colors[1-i];
 text(opponent.abbr+' SAVUNMASI',125,206,12,enemyColor);
 for(const k of b.bricks){if(!k.alive)continue;
 box(k.x,k.y,k.w,k.h,3,k.flash?'#496079':i?'#173c50':'#46351e',enemyColor);
 logo(opponent,k.x+16,k.y+17.5,13.5);
 box(k.x+32,k.y+6,15,22,3,'#080f1c');text(k.hp,k.x+39.5,k.y+23,15,'#ffffff','center',800);
 const healthW=(k.w-6)*k.hp/k.maxHp;box(k.x+3,k.y+k.h-3,k.w-6,2,0,'#080f1c');box(k.x+3,k.y+k.h-3,healthW,2,0,enemyColor);
 }
 let p=m.bumper(b);line(34,p.y,216,p.y,c+'13',2);ctx.beginPath();ctx.arc(p.x,p.y,p.r+5,0,7);ctx.strokeStyle=c+'45';ctx.lineWidth=1;ctx.stroke();ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fillStyle='#142a3a';ctx.fill();ctx.strokeStyle=c;ctx.lineWidth=2;ctx.stroke();text('✦',p.x,p.y+6,20,c);

 if(state==='running'){b.trail.push({x:b.x,y:b.y});if(b.trail.length>8)b.trail.shift();}for(let j=1;j<b.trail.length;j++){let a=b.trail[j-1],p=b.trail[j];line(a.x,a.y,p.x,p.y,c+Math.floor(j/b.trail.length*95).toString(16).padStart(2,'0'),j*.45);}
 ctx.beginPath();ctx.ellipse(b.x+4,b.y+8,17,9,0,0,7);ctx.fillStyle='#00000055';ctx.fill();ctx.save();ctx.translate(b.x,b.y);logo(teams[i],0,0,15);ctx.restore();ctx.beginPath();ctx.arc(b.x,b.y,17.5,0,7);ctx.strokeStyle=c+'99';ctx.lineWidth=1;ctx.stroke();
 box(10,916,230,4,2,'#243246');if(b.damage)box(10,916,230*b.damage/m.maxDamage,4,2,c);text(b.broken+' / '+m.total+' BLOK',125,949,13,c);ctx.restore();});ctx.restore();
 if(state!=='paused')particles=particles.filter(p=>{p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=180*dt;return p.life>0;});for(const p of particles){ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.color;ctx.fillRect(p.x,p.y,3,5);}ctx.globalAlpha=1;
 text('Futbol Tayfa',270,949,17,'#e2ecf8','center',700);
 if(['ready','countdown','paused','finished'].includes(state)){box(65,434,410,209,12,'#081321f2','#48617e');if(state==='finished'){let t=teams[m.winner];glowCircle(270,520,220,'#d4ac5033');box(48,389,444,360,22,'#102034f2','#d4b66d88');trophy(270,439,.8);text('K A Z A N A N',270,487,11,'#edcc8c');logo(t,270,545,40);text(t.name,270,614,t.name.length>21?21:29,'#fff','center',800);text(m.reason==='points'?'SÜRE BİTTİ · HASAR ÜSTÜNLÜĞÜ':m.reason==='golden'?'ALTIN VURUŞ':'KALE FETHEDİLDİ',270,643,10,'#efc980');text(m.lanes[0].damage+' — '+m.lanes[1].damage+'  /  '+Math.floor(m.time)+' sn',270,677,16,'#bdcede');text('YENİ MAÇ İÇİN DOKUN',270,723,9,'#7b93af');}else if(state==='countdown'){glowCircle(270,540,100,'#68e8d52a');text(Math.ceil(countdown),270,577,105,'#cbffe5','center',900);text('ŞANSIN BOL OLSUN',270,616,11,'#a7c3d9');}else{trophy(270,489,1);text(state==='paused'?'MOLA':'ARENA HAZIR',270,559,31,'#f5f9ff','center',900);text(state==='paused'?'DEVAM ETMEK İÇİN DOKUN':'BAŞLAMAK İÇİN DOKUN',270,593,11,'#a7f4ce');}}
}
