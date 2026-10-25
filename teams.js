'use strict';
// LIGLER şemasını oyun motoruna bağlar. Takım eklemek için ligler.js yeterlidir.
const TEAMS=Object.entries(LIGLER).flatMap(([group,league])=>Object.entries(league.takimlar||{}).map(([key,t])=>({
 id:group+':'+key,key,group,name:t.isim||key,abbr:t.kisaltma||key.slice(0,3).toLocaleUpperCase('tr-TR'),
 color:t.renkAna||'#ffffff',secondary:t.renkIkinci||'#142439',logo:t.logo||'./'+key+'-logo.png',
 music:t.muzik||key+'-gol.mp3',winText:t.kazandiYazisi||((t.isim||key)+' KAZANDI!')
})));
