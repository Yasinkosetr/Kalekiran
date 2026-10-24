(function(root){
'use strict';
const MODES={short:{seconds:60,hp:[2,2,1,1,1]},standard:{seconds:120,hp:[3,3,2,2,2]},long:{seconds:180,hp:[5,5,4,4,3]}};
class Match{
 constructor(seed=1,speed=1,mode='standard'){this.rng=seed>>>0||1;this.speed=speed;this.mode=MODES[mode]?mode:'standard';this.config=MODES[this.mode];this.limit=this.config.seconds;this.time=0;this.winner=null;this.reason='';this.sudden=false;this.events=[];this.round=0;this.total=20;this.maxDamage=this.config.hp.reduce((a,b)=>a+b)*4;this.lanes=[0,1].map(()=>{let a=(this.random()-.5)*1.2;return{x:125,y:720,vx:Math.sin(a)*310,vy:-Math.cos(a)*310,angle:0,spin:0,trail:[],broken:0,damage:0,hits:0,lastHit:0,phase:this.random()*Math.PI*2,bricks:Array.from({length:20},(_,j)=>({x:16+j%4*56,y:374+Math.floor(j/4)*43,w:50,h:29,hp:this.config.hp[Math.floor(j/4)],maxHp:this.config.hp[Math.floor(j/4)],alive:true,flash:0}))};});}
 random(){let t=this.rng+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;}
 bumper(b){return{x:125+Math.sin(this.time*1.3+b.phase)*64,y:642,r:18,vx:Math.cos(this.time*1.3+b.phase)*83.2};}
 reflect(b,nx,ny,surfaceX=0){let rx=b.vx-surfaceX,ry=b.vy,d=rx*nx+ry*ny;if(d>=0)return false;b.vx=rx-2*d*nx+surfaceX;b.vy=ry-2*d*ny;let jitter=(this.random()-.5)*.14,c=Math.cos(jitter),s=Math.sin(jitter),vx=b.vx;b.vx=vx*c-b.vy*s;b.vy=vx*s+b.vy*c;b.spin=(this.random()-.5)*9;this.normalize(b);return true;}
 normalize(b){let target=310*this.speed*(this.time>this.limit*.75?1.15:1),len=Math.hypot(b.vx,b.vy)||1;b.vx=b.vx/len*target;b.vy=b.vy/len*target;if(Math.abs(b.vy)<target*.22){b.vy=(Math.sign(b.vy)||-1)*target*.22;b.vx=(Math.sign(b.vx)||1)*Math.sqrt(target*target-b.vy*b.vy);}}
 win(i,reason){this.winner=i;this.reason=reason;this.events.push({type:'win',side:i});}
 step(dt){this.events=[];if(this.winner!==null||dt<=0)return;let n=Math.ceil(dt*240),h=dt/n;for(let s=0;s<n&&this.winner===null;s++)this.tick(h);}
 tick(dt){this.time+=dt;let goals=[],hits=[];this.lanes.forEach((b,i)=>{this.normalize(b);b.x+=b.vx*dt;b.y+=b.vy*dt;b.angle+=b.spin*dt;const r=15;
 if(b.x<r){b.x=r;this.reflect(b,1,0);}if(b.x>250-r){b.x=250-r;this.reflect(b,-1,0);}if(b.y>810-r){b.y=810-r;this.reflect(b,0,-1);}
 if(b.y<313+r){if(b.broken===this.total&&b.x>=53&&b.x<=197)goals.push(i);else{b.y=313+r;this.reflect(b,0,1);}}
 let bumper=this.bumper(b),dx=b.x-bumper.x,dy=b.y-bumper.y,len=Math.hypot(dx,dy);if(len<r+bumper.r){let nx=dx/(len||1),ny=dy/(len||1);if(!len){nx=0;ny=-1;}b.x=bumper.x+nx*(r+bumper.r+.05);b.y=bumper.y+ny*(r+bumper.r+.05);if(this.reflect(b,nx,ny,bumper.vx))this.events.push({type:'bounce',side:i,x:b.x,y:b.y});}
 for(const k of b.bricks){k.flash=Math.max(0,k.flash-dt);if(!k.alive)continue;let cx=Math.max(k.x,Math.min(k.x+k.w,b.x)),cy=Math.max(k.y,Math.min(k.y+k.h,b.y)),dx=b.x-cx,dy=b.y-cy,d=Math.hypot(dx,dy);if(d>=r)continue;let nx,ny,depth=r-d+.05;if(d>0){nx=dx/d;ny=dy/d;}else{let distances=[b.x-k.x,k.x+k.w-b.x,b.y-k.y,k.y+k.h-b.y],a=distances.indexOf(Math.min(...distances));nx=[-1,1,0,0][a];ny=[0,0,-1,1][a];depth=r+distances[a]+.05;}b.x+=nx*depth;b.y+=ny*depth;
 if(this.reflect(b,nx,ny)){k.hp--;k.flash=.18;b.damage++;b.hits++;b.lastHit=this.time;hits.push(i);if(k.hp===0){k.alive=false;b.broken++;}this.events.push({type:'hit',side:i,x:k.x+k.w/2,y:k.y+k.h/2,destroyed:!k.alive});}break;}
 if(this.time-b.lastHit>7&&b.y>590){let a=(this.random()-.5)*1.5;b.vx=Math.sin(a)*310*this.speed;b.vy=-Math.cos(a)*310*this.speed;b.lastHit=this.time;this.events.push({type:'boost',side:i,x:b.x,y:b.y});}
 });
 if(goals.length===2){this.round++;this.sudden=true;for(const b of this.lanes){let a=(this.random()-.5)*1.4;b.x=125;b.y=720;b.vx=Math.sin(a)*310;b.vy=-Math.cos(a)*310;b.trail=[];}this.events.push({type:'tie'});return;}
 let wins=goals.length?goals:(this.sudden?hits:[]);wins=[...new Set(wins)];if(wins.length===1){this.win(wins[0],goals.length?'goal':'golden');return;}
 if(this.time>=this.limit&&!this.sudden){let [a,b]=this.lanes;if(a.damage!==b.damage){this.win(a.damage>b.damage?0:1,'points');return;}this.sudden=true;this.events.push({type:'overtime'});}
 }
}
if(typeof module!=='undefined')module.exports=Match;else root.Match=Match;
})(typeof window!=='undefined'?window:globalThis);
