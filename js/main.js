document.documentElement.classList.add('js');
const C={navy:'#2D3A4F',red:'#961A1F',mar:'#4A0F1F',blush:'#FDE5DD',beige:'#F2E6D3',cream:'#FBF7F1',white:'#FFFFFF',gold:'#C9A15B',sage:'#8E9B7E',plum:'#5B2A45',peach:'#F3C4A8',teal:'#2F5D62'};
let uid=0;
/* product "photography": paper goods on a lit tabletop */
function scene(bg,inner,vb='0 0 400 400'){const id='s'+(uid++);
 return `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid slice"><defs>
 <radialGradient id="${id}l" cx="35%" cy="25%" r="85%"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity=".12"/></radialGradient>
 <filter id="${id}sh" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="6" dy="12" stdDeviation="10" flood-color="#2a1a14" flood-opacity=".28"/></filter>
 <filter id="${id}n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="${uid}"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .07 0"/></filter>
 </defs><rect width="100%" height="100%" fill="${bg}"/><rect width="100%" height="100%" fill="url(#${id}l)"/>
 <g filter="url(#${id}sh)">${inner(id)}</g><rect width="100%" height="100%" filter="url(#${id}n)" opacity=".9"/></svg>`}
const motif=(c,o=.35)=>`<g fill="none" stroke="${c}" stroke-width="2" opacity="${o}"><path d="M0 0c10 10 10 20 0 30M40 0c-10 10-10 20 0 30"/><circle cx="20" cy="15" r="4"/></g>`;
function pat(id,c,o){return `<pattern id="${id}p" width="40" height="30" patternUnits="userSpaceOnUse">${motif(c,o)}</pattern>`}
const A={
 envelope:(col,ink,acc,rot=-6)=>scene(C.beige,id=>`<defs>${pat(id,ink,.3)}</defs>
  <g transform="rotate(${rot+10} 200 200) translate(20 -18)"><rect x="70" y="120" width="260" height="140" rx="6" fill="${acc}"/></g>
  <g transform="rotate(${rot} 200 200)"><rect x="60" y="130" width="280" height="150" rx="6" fill="${col}"/><rect x="60" y="130" width="280" height="150" rx="6" fill="url(#${id}p)"/>
  <path d="M60 136 200 222 340 136" fill="none" stroke="${ink}" stroke-opacity=".35" stroke-width="2"/>
  <rect x="150" y="235" width="100" height="26" rx="13" fill="${C.cream}"/><text x="200" y="253" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-style="italic" fill="${ink}">Shubh Aashirwad</text>
  <circle cx="200" cy="222" r="15" fill="${C.red}"/><circle cx="200" cy="222" r="9" fill="none" stroke="#7a1015" stroke-width="2"/></g>
  <path d="M40 330c60-20 120 10 160-6s70-30 150 4" fill="none" stroke="#9c7b52" stroke-width="3" opacity=".7"/>`),
 notecard:(col,ink)=>scene(C.cream,id=>`<defs>${pat(id,ink,.25)}</defs>
  <g transform="rotate(8 200 200)"><rect x="120" y="70" width="200" height="270" rx="4" fill="${C.white}"/></g>
  <g transform="rotate(-5 200 200)"><rect x="85" y="80" width="200" height="270" rx="4" fill="${col}"/><rect x="85" y="80" width="200" height="270" rx="4" fill="url(#${id}p)"/>
  <path d="M120 150a65 65 0 0 1 130 0v120h-130z" fill="${C.cream}" opacity=".95"/><text x="185" y="215" text-anchor="middle" font-family="Georgia,serif" font-size="30" font-weight="700" fill="${ink}">A&amp;I</text>
  <text x="185" y="245" text-anchor="middle" font-family="Georgia,serif" font-size="11" letter-spacing="3" fill="${ink}">WITH LOVE</text></g>
  <rect x="300" y="300" width="70" height="8" rx="4" fill="${C.gold}" transform="rotate(-30 335 304)"/>`),
 foldcard:(col,ink)=>scene(C.blush,id=>`<defs>${pat(id,ink,.3)}</defs>
  <path d="M90 110 200 90v240L90 340z" fill="${C.white}"/><path d="M200 90 320 120v220L200 330z" fill="${col}"/><path d="M200 90 320 120v220L200 330z" fill="url(#${id}p)"/>
  <text x="262" y="225" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-style="italic" fill="${C.cream}">Thank</text><text x="262" y="252" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-style="italic" fill="${C.cream}">you</text>
  <path d="M110 180h70M110 200h60M110 220h70" stroke="${ink}" stroke-opacity=".25" stroke-width="3"/>`),
 tags:(col,ink)=>scene(C.beige,id=>[0,1,2].map(i=>`<g transform="translate(${70+i*80} ${80+i*30}) rotate(${-14+i*12} 60 110)"><path d="M20 30 60 0l40 30v170H20z" fill="${i%2?C.cream:col}"/><circle cx="60" cy="32" r="8" fill="${C.beige}"/>
  <text x="60" y="120" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-style="italic" fill="${i%2?ink:C.cream}">For you</text><path d="M60 30C40-30 10 10 0-20" fill="none" stroke="#9c7b52" stroke-width="3"/></g>`).join('')),
 seal:()=>scene(C.cream,id=>`<rect x="60" y="150" width="280" height="170" rx="6" fill="${C.beige}" transform="rotate(-4 200 235)"/>
  <circle cx="200" cy="215" r="58" fill="${C.red}"/><circle cx="200" cy="215" r="58" fill="none" stroke="#6d0f13" stroke-width="6" stroke-dasharray="14 6"/><circle cx="200" cy="215" r="38" fill="none" stroke="#6d0f13" stroke-width="3"/>
  <text x="200" y="229" text-anchor="middle" font-family="Georgia,serif" font-size="40" font-weight="900" fill="#6d0f13">X</text>
  <g transform="rotate(35 300 100)"><rect x="285" y="20" width="26" height="110" rx="6" fill="${C.gold}"/><rect x="280" y="125" width="36" height="22" rx="4" fill="#8a6a35"/></g>`),
 playing:(col)=>scene(C.navy,id=>`<g transform="rotate(-12 200 200)"><rect x="90" y="90" width="150" height="220" rx="12" fill="${C.cream}"/><rect x="104" y="104" width="122" height="192" rx="8" fill="none" stroke="${C.red}" stroke-width="2"/><text x="165" y="215" text-anchor="middle" font-family="Georgia,serif" font-size="70" fill="${C.red}">♥</text></g>
  <g transform="rotate(10 200 200)"><rect x="170" y="80" width="150" height="220" rx="12" fill="${col}"/><rect x="184" y="94" width="122" height="192" rx="8" fill="none" stroke="${C.gold}" stroke-width="2"/><circle cx="245" cy="190" r="34" fill="none" stroke="${C.gold}" stroke-width="2"/><text x="245" y="203" text-anchor="middle" font-family="Georgia,serif" font-size="36" fill="${C.gold}">X</text></g>`),
 hamper:()=>scene(C.blush,id=>`<rect x="70" y="170" width="260" height="150" rx="8" fill="${C.red}"/><rect x="70" y="160" width="260" height="30" rx="6" fill="${C.mar}"/>
  <rect x="100" y="110" width="80" height="80" rx="4" fill="${C.cream}" transform="rotate(-8 140 150)"/><rect x="175" y="96" width="60" height="96" rx="4" fill="${C.navy}"/><rect x="230" y="120" width="70" height="70" rx="35" fill="${C.gold}"/>
  <path d="M200 160v160" stroke="${C.gold}" stroke-width="10"/><text x="200" y="285" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-style="italic" fill="${C.cream}">Shubh Deepavali</text>`),
 tray:(col=C.navy)=>scene(C.beige,id=>`<defs>${pat(id,C.gold,.6)}</defs><ellipse cx="200" cy="215" rx="160" ry="120" fill="${col}"/><ellipse cx="200" cy="215" rx="138" ry="100" fill="${col}" stroke="${C.gold}" stroke-width="3"/><ellipse cx="200" cy="215" rx="138" ry="100" fill="url(#${id}p)"/>
  <rect x="150" y="160" width="46" height="70" rx="8" fill="${C.cream}"/><circle cx="240" cy="230" r="28" fill="${C.red}"/><circle cx="240" cy="230" r="10" fill="${C.gold}"/>`),
 coasters:()=>scene(C.cream,id=>`<defs>${pat(id,C.cream,.5)}</defs>${[[130,170,C.red],[250,150,C.navy],[150,280,C.sage],[270,270,C.mar]].map(([x,y,c])=>`<circle cx="${x}" cy="${y}" r="62" fill="${c}"/><circle cx="${x}" cy="${y}" r="62" fill="url(#${id}p)"/><circle cx="${x}" cy="${y}" r="50" fill="none" stroke="${C.gold}" stroke-width="2"/>`).join('')}`),
 frame:()=>scene(C.blush,id=>`<rect x="100" y="70" width="200" height="260" rx="6" fill="${C.gold}"/><rect x="118" y="88" width="164" height="224" fill="${C.mar}"/><rect x="132" y="102" width="136" height="196" fill="${C.beige}"/>
  <circle cx="200" cy="175" r="30" fill="${C.peach}"/><path d="M150 298c10-60 90-60 100 0z" fill="${C.navy}"/>`),
 tissue:()=>scene(C.beige,id=>`<defs>${pat(id,C.gold,.5)}</defs><path d="M80 170 200 130l120 40v130l-120 40-120-40z" fill="${C.teal}"/><path d="M80 170l120 40 120-40-120-40z" fill="#3a7177"/><path d="M80 170v130l120 40V210z" fill="url(#${id}p)"/><path d="M200 210v130l120-40V170z" fill="#24484c"/>
  <path d="M180 170c0-40 40-50 30-80 20 20 10 60-10 80z" fill="${C.white}"/>`),
 candle:()=>scene(C.navy,id=>`${[120,200,280].map((x,i)=>`<rect x="${x-34}" y="${200-i%2*20}" width="68" height="${110+i%2*20}" rx="8" fill="${[C.blush,C.beige,C.peach][i]}"/><ellipse cx="${x}" cy="${200-i%2*20}" rx="34" ry="8" fill="#fff" opacity=".5"/><rect x="${x-1.5}" y="${178-i%2*20}" width="3" height="18" fill="#333"/><ellipse cx="${x}" cy="${168-i%2*20}" rx="7" ry="14" fill="#FFC86B"/>`).join('')}`),
 kidsEnv:()=>scene(C.peach,id=>`<g transform="rotate(-8 200 200)"><rect x="70" y="120" width="260" height="160" rx="8" fill="#7FB3C9"/><path d="M70 126 200 210 330 126" fill="none" stroke="#fff" stroke-width="3"/>
  <ellipse cx="160" cy="245" rx="44" ry="28" fill="#B9C6D2"/><circle cx="125" cy="232" r="18" fill="#B9C6D2"/><path d="M110 236c-14 10-10 26 0 28" stroke="#B9C6D2" stroke-width="8" fill="none"/><circle cx="122" cy="228" r="3" fill="${C.navy}"/>
  <circle cx="290" cy="160" r="12" fill="#FFD166"/><circle cx="260" cy="250" r="8" fill="${C.red}"/></g>`),
 kidsCards:()=>scene('#CFE3D4',id=>[0,1].map(i=>`<g transform="translate(${70+i*110} ${90+i*20}) rotate(${-10+i*16} 80 110)"><rect width="160" height="210" rx="10" fill="${i?'#FFD166':C.white}"/><circle cx="80" cy="90" r="40" fill="${i?C.red:'#7FB3C9'}"/><text x="80" y="170" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="700" fill="${C.navy}">${i?'Hooray!':'Hello!'}</text></g>`).join('')),
 boxInvite:()=>scene(C.cream,id=>`<defs>${pat(id,C.gold,.6)}</defs><rect x="70" y="140" width="260" height="190" rx="8" fill="${C.mar}"/><rect x="70" y="140" width="260" height="190" rx="8" fill="url(#${id}p)"/>
  <g transform="rotate(-10 200 120)"><rect x="80" y="60" width="240" height="120" rx="8" fill="${C.red}"/><rect x="92" y="72" width="216" height="96" rx="4" fill="none" stroke="${C.gold}" stroke-width="2"/><text x="200" y="128" text-anchor="middle" font-family="Georgia,serif" font-size="26" font-style="italic" fill="${C.gold}">Aarav weds Isha</text></g>`),
 envInvite:()=>scene(C.blush,id=>`<g transform="rotate(6 200 200)"><rect x="110" y="70" width="190" height="250" rx="4" fill="${C.cream}"/><text x="205" y="150" text-anchor="middle" font-family="Georgia,serif" font-size="14" letter-spacing="3" fill="${C.navy}">TOGETHER WITH</text><text x="205" y="195" text-anchor="middle" font-family="Georgia,serif" font-size="30" font-style="italic" fill="${C.red}">Meera &amp; Kabir</text><path d="M150 220h110" stroke="${C.gold}" stroke-width="2"/></g>
  <rect x="70" y="210" width="260" height="140" rx="6" fill="${C.navy}"/><path d="M70 214 200 290 330 214" fill="none" stroke="${C.gold}" stroke-width="2"/>`)
};
A.envHero=()=>A.envelope(C.mar,C.gold,C.navy,-8);
A.invite=()=>scene(C.mar,id=>`<defs>${pat(id,C.gold,.45)}</defs><rect width="400" height="500" fill="url(#${id}p)"/>
 <g transform="rotate(-6 200 250)"><rect x="70" y="80" width="260" height="340" rx="8" fill="${C.cream}"/><rect x="86" y="96" width="228" height="308" rx="4" fill="none" stroke="${C.gold}" stroke-width="2"/>
 <path d="M140 170a60 60 0 0 1 120 0" fill="none" stroke="${C.red}" stroke-width="3"/><text x="200" y="215" text-anchor="middle" font-family="Georgia,serif" font-size="12" letter-spacing="4" fill="${C.navy}">THE WEDDING OF</text>
 <text x="200" y="260" text-anchor="middle" font-family="Georgia,serif" font-size="34" font-style="italic" fill="${C.red}">Aarav</text><text x="200" y="290" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="${C.navy}">&amp;</text>
 <text x="200" y="325" text-anchor="middle" font-family="Georgia,serif" font-size="34" font-style="italic" fill="${C.red}">Isha</text><text x="200" y="370" text-anchor="middle" font-family="Georgia,serif" font-size="11" letter-spacing="3" fill="${C.navy}">12 · 12 · 2026 · UDAIPUR</text></g>
 <circle cx="320" cy="400" r="34" fill="${C.red}"/><text x="320" y="413" text-anchor="middle" font-family="Georgia,serif" font-size="34" font-weight="900" fill="#6d0f13">X</text>`,'0 0 400 500');

A.occWed=()=>A.boxInvite();A.occDiwali=()=>A.candle();A.occBday=()=>A.kidsCards();A.occCorp=()=>A.notecard(C.navy,C.navy);
A.hamperWide=()=>scene(C.blush,id=>`<defs>${pat(id,C.gold,.5)}</defs><rect x="60" y="150" width="280" height="140" rx="8" fill="${C.mar}"/><rect x="60" y="150" width="280" height="140" rx="8" fill="url(#${id}p)"/><rect x="60" y="140" width="280" height="24" rx="6" fill="${C.navy}"/>
 <rect x="90" y="80" width="90" height="90" rx="4" fill="${C.cream}" transform="rotate(-8 135 125)"/><text x="135" y="132" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="900" fill="${C.red}" transform="rotate(-8 135 125)">YOUR</text>
 <rect x="190" y="70" width="60" height="100" rx="4" fill="${C.red}"/><circle cx="290" cy="120" r="36" fill="${C.gold}"/><text x="290" y="128" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="900" fill="${C.mar}">LOGO</text>`,'0 30 400 300');
const cats=[
 {f:'envelopes',name:'Money Envelopes',art:()=>A.envelope(C.red,C.cream,C.beige)},
 {f:'cards',name:'Notecards',art:()=>A.notecard(C.navy,C.navy)},
 {f:'cards',name:'Gift Tags',art:()=>A.tags(C.red,C.navy)},
 {f:'cards',name:'Wax Seals',art:A.seal},
 {f:'festive',name:'Festive Gift Sets',art:A.hamper},
 {f:'home',name:'Home & Living',art:()=>A.tray(C.navy)},
 {f:'kids',name:'Kids',art:A.kidsEnv},
 {f:'wedding',name:'Wedding Invites',art:A.boxInvite}
];
const P=[
 {id:1,f:'envelopes',kind:'Money Envelope',name:'Gulmohar Shagun Envelopes',set:'Set of 20 · 7.25" × 3.5"',price:1800,sw:[C.mar,C.navy],tag:'Bestseller',art:()=>A.envelope(C.mar,C.gold,C.beige)},
 {id:2,f:'envelopes',kind:'Money Envelope',name:'Personalised Name Envelopes',set:'Set of 25 · name printed',price:2200,sw:[C.navy,C.red],tag:'Personalise',alt:1,art:()=>A.envelope(C.navy,C.cream,C.red,4)},
 {id:3,f:'envelopes',kind:'Money Envelope',name:'Mor Bagh Envelopes',set:'Set of 10 · jute tie',price:950,sw:[C.sage,C.peach],art:()=>A.envelope(C.sage,C.cream,C.peach,-3)},
 {id:4,f:'cards',kind:'Notecard',name:'Jharokha Notecards',set:'Set of 10 with envelopes',price:1500,sw:[C.navy,C.red],art:()=>A.notecard(C.navy,C.navy)},
 {id:5,f:'cards',kind:'Fold Card',name:'Thank You Fold Cards',set:'Set of 8 with envelopes',price:1100,sw:[C.red,C.plum],art:()=>A.foldcard(C.red,C.navy)},
 {id:6,f:'cards',kind:'Gift Tag',name:'Kesar Gift Tags',set:'Set of 20 · with cord',price:900,sw:[C.red,C.gold],tag:'New',art:()=>A.tags(C.red,C.navy)},
 {id:7,f:'cards',kind:'Wax Seal',name:'Monogram Wax Seal Kit',set:'Stamp, 2 wax sticks, spoon',price:1650,sw:[C.red,C.gold],art:A.seal},
 {id:8,f:'cards',kind:'Playing Cards',name:'Rani Mahal Playing Cards',set:'2 decks in gift tin',price:1200,sw:[C.plum,C.navy],art:()=>A.playing(C.plum)},
 {id:9,f:'festive',kind:'Festive Gift Set',name:'Deepavali Stationery Hamper',set:'Envelopes, tags, notecards, candle',price:3500,sw:[C.red,C.gold],tag:'Diwali pick',art:A.hamper},
 {id:10,f:'home',kind:'Tray',name:'Lotus Round Tray',set:'12" · wipe-clean finish',price:2400,sw:[C.navy,C.teal],art:()=>A.tray(C.navy)},
 {id:11,f:'home',kind:'Coasters',name:'Chaupal Coaster Set',set:'Set of 4 with holder',price:1200,sw:[C.red,C.sage],art:A.coasters},
 {id:12,f:'home',kind:'Photo Frame',name:'Heritage Photo Frame',set:'5" × 7" · tabletop',price:1800,sw:[C.gold,C.mar],art:A.frame},
 {id:13,f:'home',kind:'Tissue Box',name:'Bagh Tissue Box',set:'Rigid board · reusable',price:1350,sw:[C.teal,C.navy],art:A.tissue},
 {id:14,f:'home',kind:'Candles',name:'Diya Glow Candle Trio',set:'3 soy candles · 20 hr each',price:850,sw:[C.blush,C.peach],art:A.candle},
 {id:15,f:'kids',kind:'Kids Envelope',name:'Little Haathi Envelopes',set:'Set of 10 · for birthdays',price:700,sw:['#7FB3C9',C.peach],tag:'Kids',alt:1,art:A.kidsEnv},
 {id:16,f:'kids',kind:'Kids Flat Card',name:'Hello Doodle Flat Cards',set:'Set of 12 · colour-in back',price:650,sw:['#FFD166','#CFE3D4'],art:A.kidsCards},
 {id:17,f:'wedding',kind:'Wedding Invite',name:'Boxed Wedding Invite',set:'Min. 50 · price per invite',price:450,sw:[C.mar,C.gold],tag:'Custom',art:A.boxInvite},
 {id:18,f:'wedding',kind:'Wedding Invite',name:'Enveloped Wedding Invite',set:'Min. 100 · price per invite',price:180,sw:[C.navy,C.cream],art:A.envInvite}
];
P.forEach(p=>p.svg=p.art());
const fmt=n=>'₹'+n.toLocaleString('en-IN');
const $=s=>document.querySelector(s);

// hero + wedding art
document.querySelectorAll('[data-art]').forEach(el=>el.insertAdjacentHTML('afterbegin',A[el.dataset.art]()));
// announcements
const ann=['Free shipping above <b>₹1,999</b>','Diwali corporate orders now open','Personalised envelopes ship in <b>5 days</b>','Wedding invite design calls <b>free</b>'];
$('#ann').innerHTML=[...ann,...ann].map(a=>`<span>${a}</span>`).join('');
// categories
$('#cats').innerHTML=cats.map(c=>`<button class="cat" data-f="${c.f}"><span class="ring">${c.art()}</span><b>${c.name}</b></button>`).join('');
// filters
const F=[['all','All'],['envelopes','Money Envelopes'],['cards','Cards, Tags & Seals'],['festive','Festive'],['home','Home & Living'],['kids','Kids'],['wedding','Wedding']];
$('#filters').innerHTML=F.map(([k,v],i)=>`<button class="fbtn" data-k="${k}" aria-pressed="${!i}">${v}</button>`).join('');
// product select
$('#fprod').innerHTML=['Money Envelopes','Notecards / Fold Cards','Gift Tags','Wax Seals','Playing Cards','Festive Gift Set','Home & Living','Kids Stationery','Wedding Invites'].map(o=>`<option>${o}</option>`).join('');

let cur='all',q='',sort='feat',all=false;const wished=new Set();
function render(){
 let list=P.filter(p=>(cur==='all'||p.f===cur)&&(!q||(p.name+' '+p.kind).toLowerCase().includes(q)));
 const cap=!all&&cur==='all'&&!q&&sort==='feat';$('#viewAll').parentElement.hidden=!cap;if(cap)list=list.slice(0,innerWidth>1080||innerWidth<=760?8:9);
 if(sort==='lo')list=[...list].sort((a,b)=>a.price-b.price);if(sort==='hi')list=[...list].sort((a,b)=>b.price-a.price);
 $('#grid').innerHTML=list.length?list.map(p=>`<article class="card">
  <div class="thumb">${p.svg}${p.tag?`<span class="tag${p.alt?' alt':''}">${p.tag}</span>`:''}
   <button class="wish" data-id="${p.id}" aria-label="Save ${p.name}" aria-pressed="${wished.has(p.id)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg></button></div>
  <div class="cbody"><span class="kind">${p.kind}</span><h3>${p.name}</h3><span class="set">${p.set}</span>
   <div class="swatches">${p.sw.map(c=>`<i style="background:${c}"></i>`).join('')}</div>
   <div class="cfoot"><span class="price">${fmt(p.price)}</span><button class="add" data-id="${p.id}">Add to cart</button></div></div></article>`).join('')
  :`<p class="empty">Nothing matches “${q}”. Try “envelope”, “tray” or “invite”.</p>`;
}
$('#viewAll').addEventListener('click',()=>{all=true;render()});
function setFilter(k){cur=k;document.querySelectorAll('.fbtn').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));render()}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('.fbtn');if(b)setFilter(b.dataset.k)});
$('#sort').addEventListener('change',e=>{sort=e.target.value;render()});
document.querySelectorAll('[data-f]').forEach(el=>el.addEventListener('click',e=>{
 const k=el.dataset.f;
 setFilter(k);closeMenu();if(el.tagName==='BUTTON'){$('#shop').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
}));
// mobile: top-level buttons with dropdowns expand instead of jump
document.querySelectorAll('nav .ni').forEach(ni=>{const t=ni.querySelector('button.top');if(!t||!ni.querySelector('.drop'))return;
 t.addEventListener('click',e=>{if(innerWidth<=960){e.stopImmediatePropagation();ni.classList.toggle('exp')}},true)});

// search
$('#searchBtn').addEventListener('click',()=>{const o=$('#searchBox').classList.toggle('open');$('#searchBtn').setAttribute('aria-expanded',o);if(o)$('#q').focus()});
$('#q').addEventListener('input',e=>{q=e.target.value.trim().toLowerCase();if(cur!=='all')setFilter('all');else render()});
$('#q').addEventListener('keydown',e=>{if(e.key==='Enter')$('#shop').scrollIntoView()});

// cart
const cart=new Map();let tt;
function say(t){const el=$('#toast');el.textContent=t;el.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>el.classList.remove('show'),2200)}
function drawCart(){
 let n=0,s=0;cart.forEach((qy,id)=>{n+=qy;s+=qy*P.find(p=>p.id==id).price});
 document.querySelectorAll('.count').forEach(c=>{c.textContent=n||'';c.classList.add('bump');setTimeout(()=>c.classList.remove('bump'),250)});
 $('#citems').innerHTML=n?[...cart].map(([id,qy])=>{const p=P.find(x=>x.id==id);return `<div class="ci"><span class="mini">${p.svg}</span><div><b>${p.name}</b><small>${fmt(p.price)}</small></div>
  <div class="qty"><button data-d="-1" data-id="${id}" aria-label="Remove one">−</button><span>${qy}</span><button data-d="1" data-id="${id}" aria-label="Add one">+</button></div></div>`}).join('')
  :'<p class="empty">Your cart is empty. Start with a set of shagun envelopes.</p>';
 $('#sub').textContent=fmt(s);
 const left=Math.max(0,1999-s);$('#ship').innerHTML=(left?`Add ${fmt(left)} more for free shipping`:'You have free shipping')+`<div class="bar"><i style="width:${Math.min(100,s/1999*100)}%"></i></div>`;
}
function openCart(o){$('#cart').classList.toggle('show',o);$('#scrim').classList.toggle('show',o);$('#cart').setAttribute('aria-hidden',!o)}
$('#grid').addEventListener('click',e=>{
 const a=e.target.closest('.add');if(a){const id=+a.dataset.id;cart.set(id,(cart.get(id)||0)+1);drawCart();a.textContent='Added ✓';setTimeout(()=>a.textContent='Add to cart',1300);say(P.find(p=>p.id==id).name+' added');return}
 const w=e.target.closest('.wish');if(w){const id=+w.dataset.id;wished.has(id)?wished.delete(id):wished.add(id);w.setAttribute('aria-pressed',wished.has(id));say(wished.has(id)?'Saved to wishlist':'Removed from wishlist')}
});
$('#citems').addEventListener('click',e=>{const b=e.target.closest('button[data-d]');if(!b)return;const id=+b.dataset.id,v=(cart.get(id)||0)+ +b.dataset.d;v>0?cart.set(id,v):cart.delete(id);drawCart()});
$('#cartBtn').addEventListener('click',()=>openCart(true));$('#cartClose').addEventListener('click',()=>openCart(false));$('#scrim').addEventListener('click',()=>openCart(false));
addEventListener('keydown',e=>{if(e.key==='Escape')openCart(false)});
$('#checkout').addEventListener('click',()=>say(cart.size?'Checkout connects to payments on the live site':'Add a product first'));
drawCart();
$('#bCart').addEventListener('click',()=>openCart(true));
$('#bSearch').addEventListener('click',()=>{scrollTo({top:0,behavior:'smooth'});$('#searchBox').classList.add('open');$('#searchBtn').setAttribute('aria-expanded',true);setTimeout(()=>$('#q').focus(),300)});

// menu
const nav=$('#nav'),mb=$('#menuBtn');
function closeMenu(){nav.classList.remove('open');mb.setAttribute('aria-expanded','false')}
mb.addEventListener('click',()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));

// forms
document.querySelectorAll('[data-prod]').forEach(a=>a.addEventListener('click',()=>{$('#fprod').value=a.dataset.prod}));
$('#orderForm').addEventListener('submit',e=>{e.preventDefault();const nm=$('#fname'),ph=$('#fphone');
 if(!nm.value.trim()){say('Add your name');nm.focus();return}
 if(ph.value.replace(/\D/g,'').length<10){say('Enter a 10-digit WhatsApp number');ph.focus();return}
 say('Thanks '+nm.value.trim().split(' ')[0]+', we will WhatsApp you a proof');e.target.reset()});
$('#news').addEventListener('submit',e=>{e.preventDefault();const v=$('#nemail').value;if(!/^\S+@\S+\.\S+$/.test(v)){say('Enter a valid email');return}say('You are on the list');e.target.reset()});

render();
let rz;addEventListener('resize',()=>{clearTimeout(rz);rz=setTimeout(render,200)});

// first-visit intro
// opening sequence (plays on every page load)
const intro=$('#intro'),calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const GO=calm?0:2.15;
if(calm){intro.remove();document.documentElement.style.setProperty('--go','0s')}
else{
 $('#iname').innerHTML=[...'LABEL X DESIGNS'].map((ch,i)=>ch===' '?'<i>&nbsp;</i>':`<i style="animation-delay:${.6+i*.045}s">${ch}</i>`).join('');
 setTimeout(()=>intro.remove(),2700);
}
// headline builds word by word
(function(){const h=$('.hero h1');let i=0;const wrap=(t,cls)=>`<span class="w"><span${cls?` class="${cls}"`:''} style="animation-delay:${(GO+.15+i++*.08).toFixed(2)}s">${t}</span></span>`;
 h.innerHTML=[...h.childNodes].map(n=>n.nodeType===3?n.textContent.split(/(\s+)/).map(t=>t.trim()?wrap(t):t).join(''):n.textContent.split(' ').map(t=>`<em>${wrap(t)}</em>`).join(' ')).join('');})();
// numbers count up once the hero appears
if(!calm)setTimeout(()=>document.querySelectorAll('[data-count]').forEach(el=>{const end=+el.dataset.count,t0=performance.now();
 (function tick(t){const k=Math.min(1,(t-t0)/1100);el.textContent=Math.round(end*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(tick)})(t0)}),(GO+.85)*1000);

// scroll reveal (below fold only)
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.remove('pre');io.unobserve(en.target)}}),{threshold:.12});
 document.querySelectorAll('.rv').forEach((el,i)=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add('pre');el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)}});
}
