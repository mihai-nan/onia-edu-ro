'use strict';
const $ = id => document.getElementById(id);
const fmt = (v,n=2) => Number(v).toFixed(n).replace('.',',');
const cap = (x,lo,hi) => Math.max(lo,Math.min(hi,x));

// 01. Imagine sintetică / sarcini de Computer Vision
const sceneInfo={
 classification:['CLASIFICARE','(B, C)','imaginea','o distribuție pe clase'],
 detection:['DETECȚIE','N × (box, clasă, scor)','fiecare obiect','N variabil după postprocesare'],
 semantic:['SEGMENTARE SEMANTICĂ','(B, C, H, W)','fiecare pixel','o clasă per pixel'],
 instance:['SEGMENTARE INSTANȚE','N × (box, clasă, mască)','fiecare instanță','N măști individuale']
};
function setScene(mode){
 $('cv-scene').dataset.mode=mode;
 const [label,shape,unit,description]=sceneInfo[mode];
 $('scene-mode-label').textContent=label;$('scene-shape').textContent=shape;
 $('scene-unit').textContent=unit;$('scene-description').textContent=description;
 document.querySelectorAll('.scene-btn').forEach(b=>b.classList.toggle('active',b.dataset.scene===mode));
}
document.querySelectorAll('.scene-btn').forEach(b=>b.addEventListener('click',()=>setScene(b.dataset.scene)));setScene('classification');

// 02. Softmax stabil numeric
const logitInputs=['logit-a','logit-b','logit-c','temperature'];
function updateSoftmax(){
 const z=logitInputs.slice(0,3).map(id=>Number($(id).value));const t=Number($('temperature').value);
 logitInputs.forEach(id=>$(id+'-val').textContent=fmt($(id).value,1));
 const max=Math.max(...z.map(v=>v/t));const exp=z.map(v=>Math.exp(v/t-max));const sum=exp.reduce((a,b)=>a+b,0);
 const p=exp.map(v=>v/sum),names=['mașină','persoană','clădire'];
 $('softmax-bars').innerHTML=p.map((v,i)=>`<div class="bar-row"><span>${names[i]}</span><div class="bar-track"><div class="bar-fill" style="width:${v*100}%"></div></div><strong>${fmt(v*100,1)}%</strong></div>`).join('');
 $('softmax-class').textContent=names[p.indexOf(Math.max(...p))];
 $('softmax-entropy').textContent=fmt(-p.reduce((a,v)=>a+(v? v*Math.log(v):0),0),3);
 $('softmax-sum').textContent=fmt(p.reduce((a,b)=>a+b,0),3);
}
logitInputs.forEach(id=>$(id).addEventListener('input',updateSoftmax));updateSoftmax();

// 03. Cross-correlation (kernel 3x3, stride=1, padding=0)
const inputMatrix=Array.from({length:7},(_,r)=>Array.from({length:7},(_,c)=>(c>=2&&c<=4&&r>=1&&r<=5)?8:2));
const kernels={edge:[[-1,0,1],[-2,0,2],[-1,0,1]],blur:[[1/9,1/9,1/9],[1/9,1/9,1/9],[1/9,1/9,1/9]],sharp:[[0,-1,0],[-1,5,-1],[0,-1,0]],identity:[[0,0,0],[0,1,0],[0,0,0]]};
let activeConv=[1,1];
function updateConv(){
 const kernel=kernels[$('kernel-select').value],inGrid=$('conv-input'),outGrid=$('conv-output'),kerGrid=$('conv-kernel');
 inGrid.replaceChildren();outGrid.replaceChildren();kerGrid.replaceChildren();
 for(let r=0;r<7;r++)for(let c=0;c<7;c++){
  const cell=document.createElement('div');cell.className='cell';cell.textContent=inputMatrix[r][c];
  if(r>=activeConv[0]&&r<activeConv[0]+3&&c>=activeConv[1]&&c<activeConv[1]+3)cell.classList.add('receptive');
  inGrid.appendChild(cell);
 }
 kernel.flat().forEach(v=>{const cell=document.createElement('div');cell.className='cell';cell.textContent=(v===1/9?'⅑':Number.isInteger(v)?String(v):fmt(v,2));kerGrid.appendChild(cell)});
 let selected=0;
 for(let r=0;r<5;r++)for(let c=0;c<5;c++){
  let out=0;for(let kr=0;kr<3;kr++)for(let kc=0;kc<3;kc++)out+=inputMatrix[r+kr][c+kc]*kernel[kr][kc];
  const cell=document.createElement('div');cell.className='cell'+(r===activeConv[0]&&c===activeConv[1]?' selected':'');
  cell.textContent=Math.abs(out)<1e-9?'0':fmt(out,1);cell.title=`Ieșire [${r}, ${c}] = ${out.toFixed(3)}`;
  cell.addEventListener('click',()=>{activeConv=[r,c];updateConv()});outGrid.appendChild(cell);
  if(r===activeConv[0]&&c===activeConv[1])selected=out;
 }
 $('conv-value').textContent=fmt(selected,2);
 $('conv-operation').textContent=`${fmt(inputMatrix[activeConv[0]][activeConv[1]],0)} × ${kernel[0][0]===1/9?'1/9':kernel[0][0]} + ... = ${fmt(selected,2)}`;
}
$('kernel-select').addEventListener('change',updateConv);updateConv();
$('patch-size').addEventListener('change',()=>{let p=Number($('patch-size').value);$('patch-label').textContent=p;$('patch-count').textContent=`${(224/p)**2} patch-uri + token CLS`});

// 04. NMS greedy, pe aceeași clasă
const proposals=[{id:'A',x:93,y:130,w:298,h:158,s:.96},{id:'B',x:112,y:139,w:279,h:148,s:.87},{id:'C',x:67,y:122,w:291,h:165,s:.63},{id:'D',x:403,y:189,w:110,h:98,s:.59},{id:'E',x:405,y:178,w:112,h:105,s:.46}];
function iouRects(a,b){const w=Math.max(0,Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x)),h=Math.max(0,Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y));const inter=w*h;return inter/(a.w*a.h+b.w*b.h-inter)||0}
function drawNMS(){
 const scoreTh=Number($('nms-score').value),iouTh=Number($('nms-iou').value);
 $('nms-score-val').textContent=fmt(scoreTh);$('nms-iou-val').textContent=fmt(iouTh);
 const candidates=proposals.filter(p=>p.s>=scoreTh).sort((a,b)=>b.s-a.s),kept=[],suppressed=[];
 candidates.forEach(p=>{if(kept.some(k=>iouRects(p,k)>iouTh))suppressed.push(p);else kept.push(p)});
 const ns='http://www.w3.org/2000/svg', layer=$('nms-boxes');layer.replaceChildren();
 const all=[...proposals].sort((a,b)=>a.s-b.s);
 for(const p of all){const color=kept.includes(p)?'#1d6fd2':suppressed.includes(p)?'#dc8b52':'#aab6c6';
  const r=document.createElementNS(ns,'rect');Object.entries({x:p.x,y:p.y,width:p.w,height:p.h,rx:4,fill:'none',stroke:color,'stroke-width':kept.includes(p)?3.2:1.9,'stroke-dasharray':kept.includes(p)?'':'7 5'}).forEach(([k,v])=>r.setAttribute(k,v));layer.appendChild(r);
  const tx=document.createElementNS(ns,'text');tx.setAttribute('x',p.x+5);tx.setAttribute('y',p.y+14);tx.setAttribute('font-size',11);tx.setAttribute('font-weight','bold');tx.setAttribute('fill',color);tx.setAttribute('paint-order','stroke');tx.setAttribute('stroke','#f7fbff');tx.setAttribute('stroke-width','3');tx.textContent=`${p.id} · ${p.s.toFixed(2)}`;layer.appendChild(tx);
 }
 $('nms-count').textContent=String(kept.length);$('nms-explanation').textContent=`${suppressed.length} eliminate prin IoU; ${proposals.length-candidates.length} sub prag`;
}
['nms-score','nms-iou'].forEach(id=>$(id).addEventListener('input',drawNMS));drawNMS();

// 05. Segmentare semantică - 16x12, clase 0-3
const segColors=['#dae8fa','#8f73df','#2c8eca','#2bb99a'],rows=12,cols=16;
const gt=Array.from({length:rows*cols},(_,i)=>{const r=Math.floor(i/cols),c=i%cols;
 if(r>=9)return 1;if(c>=3&&c<=8&&r>=3&&r<=8)return 2;if(c>=12&&c<=13&&r>=5&&r<=9)return 3;return 0;
});
const errors=[7,23,37,51,57,67,73,79,93,101,113,125,141,151,164,183];
function initialSegPred(){let p=[...gt];errors.forEach((i,j)=>p[i]=(p[i]+(j%3)+1)%4);return p}
let pred=initialSegPred(),modified=new Set();
function renderSeg(){
 const gtGrid=$('gt-grid'),pGrid=$('pred-grid');gtGrid.replaceChildren();pGrid.replaceChildren();pGrid.classList.add('editable');
 for(let i=0;i<gt.length;i++){
  const c0=document.createElement('div');c0.className='cell';c0.style.background=segColors[gt[i]];c0.title=`GT: ${gt[i]}`;gtGrid.appendChild(c0);
  const cp=document.createElement('button');cp.type='button';cp.className='cell';cp.setAttribute('aria-label',`Pixel ${Math.floor(i/cols)+1},${i%cols+1}; clasă ${pred[i]}`);cp.style.background=segColors[pred[i]];
  cp.addEventListener('click',()=>{pred[i]=Number($('paint-class').value);modified.add(i);renderSeg()});pGrid.appendChild(cp);
 }
 const present=[],total=gt.length,correct=gt.filter((x,i)=>x===pred[i]).length;
 for(let c=0;c<4;c++){let inter=0,union=0;for(let i=0;i<total;i++){const a=gt[i]===c,b=pred[i]===c;if(a&&b)inter++;if(a||b)union++}if(union>0)present.push(inter/union)}
 $('seg-miou').textContent=fmt(100*present.reduce((a,b)=>a+b,0)/present.length,1)+'%';$('seg-acc').textContent=fmt(100*correct/total,1)+'%';$('seg-changes').textContent=String(modified.size);
}
$('seg-reset').addEventListener('click',()=>{pred=initialSegPred();modified=new Set();renderSeg()});renderSeg();

// 06. Mask queries; simulare ilustrativă, cu scoruri statice
const queries=[{label:'mașină #1',s:.97},{label:'mașină #2',s:.94},{label:'persoană #1',s:.92},{label:'persoană #2',s:.84},{label:'no-object',s:.22},{label:'no-object',s:.08},{label:'mașină ? (FP)',s:.58},{label:'no-object',s:.17}];
function updateQueries(){const q=Number($('query-count').value),threshold=Number($('query-score').value);$('query-count-val').textContent=q;$('query-score-val').textContent=fmt(threshold);
 const out=queries.slice(0,q),accepted=out.filter(v=>v.label!=='no-object'&&v.s>=threshold);
 $('query-tiles').innerHTML=out.map((v,i)=>{const kept=v.label!=='no-object'&&v.s>=threshold;return `<div class="query-tile ${kept?'kept':v.label==='no-object'?'no-object':'rejected'}"><strong>Q${i+1}</strong><small>${v.label}</small><span>${fmt(v.s)} · ${kept?'păstrat':v.label==='no-object'?'fundal':'respins'}</span></div>`}).join('');
 $('query-result').textContent=String(accepted.length);$('query-shape').textContent=`${accepted.length} măști finale / ${q} queries`;
}
['query-count','query-score'].forEach(id=>$(id).addEventListener('input',updateQueries));updateQueries();



// 04b. Arhitecturi moderne pentru detecție
const detectorArchitectures={
 yolo:{title:'YOLO — detector dens, orientat spre viteză',problem:'Imaginea este procesată într-un singur flux, iar predicțiile sunt generate direct pe mai multe scări spațiale.',output:'head-uri dense multi-scale',post:'NMS aproape întotdeauna necesar',strength:'latență mică și inferență rapidă',tradeoff:'precizie pe obiecte mici / reglaje sensibile',notes:'Familia YOLO este preferată când inferența în timp real este critică. Designul exact diferă între versiuni, dar ideea de bază rămâne: predicții dense, eficiente, cu postprocesare simplă.',steps:[['Backbone + neck','Se extrag hărți de caracteristici la mai multe rezoluții.'],['Head de detecție','Pentru fiecare locație/scară se emit box-uri, scoruri și clase.'],['Filtrare + NMS','Detecțiile redundante sunt consolidate.']],bullets:[['Utilizare tipică','video, camere inteligente, robotică, edge devices'],['Output conceptual','box-uri + scoruri + clase la mai multe scări'],['Când strălucește','când viteza este mai importantă decât analiza structurală fină']],diagram:['imagine','backbone + neck','head-uri dense','NMS → predicții'],figure:`<svg class="arch-svg" viewBox="0 0 760 320" role="img" aria-label="Schemă YOLO"><rect width="760" height="320" rx="18" fill="#f7fbff"/><g font-family="Inter,Arial,sans-serif"><rect x="30" y="96" width="118" height="128" rx="18" fill="#dceefe" stroke="#7aa7d6"/><text x="89" y="86" text-anchor="middle" font-size="18" fill="#173550">Imagine</text><rect x="200" y="72" width="135" height="176" rx="18" fill="#e5f8f4" stroke="#79c7ba"/><text x="268" y="62" text-anchor="middle" font-size="18" fill="#173550">Backbone</text><rect x="392" y="54" width="128" height="72" rx="16" fill="#fff4df" stroke="#e6b86a"/><rect x="392" y="136" width="128" height="72" rx="16" fill="#fff4df" stroke="#e6b86a"/><rect x="392" y="218" width="128" height="48" rx="16" fill="#fff4df" stroke="#e6b86a"/><text x="456" y="44" text-anchor="middle" font-size="18" fill="#173550">Head-uri multi-scale</text><text x="456" y="97" text-anchor="middle" font-size="16" fill="#173550">scară mare</text><text x="456" y="179" text-anchor="middle" font-size="16" fill="#173550">scară medie</text><text x="456" y="247" text-anchor="middle" font-size="16" fill="#173550">scară fină</text><rect x="578" y="108" width="150" height="102" rx="18" fill="#efe9ff" stroke="#9f8bd3"/><text x="653" y="98" text-anchor="middle" font-size="18" fill="#173550">Postprocesare</text><text x="653" y="145" text-anchor="middle" font-size="16" fill="#173550">box-uri</text><text x="653" y="171" text-anchor="middle" font-size="16" fill="#173550">scoruri</text><text x="653" y="197" text-anchor="middle" font-size="16" fill="#173550">NMS</text><path d="M149 160h40M336 160h40M521 160h40" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round"/><path d="M180 149l12 11-12 11M367 149l12 11-12 11M552 149l12 11-12 11" fill="none" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg><div class="arch-legend"><span>one-stage: predicțiile apar direct din feature maps</span><span>de obicei necesită NMS pentru eliminarea cutiilor redundante</span></div>`},
 faster:{title:'Faster R-CNN — detector în două etape',problem:'Mai întâi se propun regiuni candidate, apoi fiecare regiune este rafinată și clasificată.',output:'ROI features → box + clasă',post:'NMS pe clase, după scor',strength:'acuratețe solidă și interpretare clară',tradeoff:'mai lent decât detectoarele one-stage',notes:'Faster R-CNN separă generarea regiunilor de clasificarea lor. Este un reper didactic foarte bun, deoarece ilustrează clar pipeline-ul de detecție.',steps:[['RPN','Region Proposal Network generează candidați.'],['ROI Align','Fiecare regiune este eșantionată într-o reprezentare fixă.'],['Heads finale','Clasificare, regresie de box și eventual cap de mască.']],bullets:[['Utilizare tipică','benchmark-uri, aplicații unde acuratețea este prioritară'],['Avantaj','foarte natural de extins la instance segmentation'],['Legătură importantă','Mask R-CNN = Faster R-CNN + mask head']],diagram:['imagine','RPN','ROI Align','class + box'],figure:`<img src="assets/figs/fig25.png" alt="Schema Faster R-CNN cu RoI pooling, clasificare și regresie de box"><div class="arch-legend"><span>două etape: propuneri → clasificare/regresie</span><span>bază clară pentru Mask R-CNN</span></div>`},
 detr:{title:'DETR — set prediction cu transformer',problem:'Obiectele sunt prezise de un set fix de queries; modelul învață o corespondență bipartită între predicții și obiectele reale.',output:'Q queries → clasă + box',post:'fără NMS în formularea originală',strength:'formulare elegantă, end-to-end',tradeoff:'convergență mai lentă în versiunea originală',notes:'DETR schimbă perspectiva: în loc să rafineze multe propuneri, produce direct un set de obiecte și o clasă no-object pentru query-urile neutilizate.',steps:[['Backbone','Se obține o hartă de caracteristici.'],['Encoder/decoder','Queries învață să „caute” obiecte prin atenție.'],['Hungarian matching','Antrenarea asociază predicțiile cu obiectele reale.']],bullets:[['Utilizare tipică','predicție set-like, design conceptual curat'],['Punct didactic','arată foarte bine legătura cu Transformers'],['Atenție','mai puțin potrivit, fără modificări, pentru constrângeri dure de latență']],diagram:['imagine','backbone','queries + transformer','set de obiecte'],figure:`<svg class="arch-svg" viewBox="0 0 760 320" role="img" aria-label="Schemă DETR"><rect width="760" height="320" rx="18" fill="#f7fbff"/><g font-family="Inter,Arial,sans-serif"><rect x="28" y="102" width="120" height="116" rx="18" fill="#dceefe" stroke="#7aa7d6"/><text x="88" y="92" text-anchor="middle" font-size="18" fill="#173550">Imagine</text><rect x="190" y="85" width="120" height="150" rx="18" fill="#e5f8f4" stroke="#79c7ba"/><text x="250" y="75" text-anchor="middle" font-size="18" fill="#173550">Backbone</text><rect x="354" y="56" width="172" height="204" rx="18" fill="#efe9ff" stroke="#9f8bd3"/><text x="440" y="44" text-anchor="middle" font-size="18" fill="#173550">Transformer</text><text x="440" y="120" text-anchor="middle" font-size="17" fill="#173550">encoder</text><text x="440" y="182" text-anchor="middle" font-size="17" fill="#173550">decoder + queries</text><rect x="582" y="80" width="144" height="160" rx="18" fill="#fff4df" stroke="#e6b86a"/><text x="654" y="70" text-anchor="middle" font-size="18" fill="#173550">Predicții set-like</text><text x="654" y="132" text-anchor="middle" font-size="16" fill="#173550">clasă / no-object</text><text x="654" y="160" text-anchor="middle" font-size="16" fill="#173550">bounding box</text><text x="654" y="188" text-anchor="middle" font-size="16" fill="#173550">fără NMS</text><g fill="#5b6d7f"><circle cx="338" cy="110" r="6"/><circle cx="338" cy="140" r="6"/><circle cx="338" cy="170" r="6"/><circle cx="338" cy="200" r="6"/></g><text x="320" y="87" font-size="14" fill="#567287">object queries</text><path d="M149 160h30M311 160h24M527 160h30" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round"/><path d="M173 149l12 11-12 11M329 149l12 11-12 11M557 149l12 11-12 11" fill="none" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg><div class="arch-legend"><span>matching bipartit între queries și obiectele reale</span><span>o clasă <em>no-object</em> absoarbe queries neutilizate</span></div>`},
 deformable:{title:'Deformable DETR — atenție rară, convergență mai bună',problem:'Păstrează paradigma query-based, dar reduce costul atenției și accelerează învățarea prin eșantionare de puncte relevante.',output:'queries multi-scale',post:'de regulă fără NMS',strength:'mai eficient și mai bun pe obiecte mici',tradeoff:'implementare mai sofisticată',notes:'Deformable DETR rezolvă una dintre marile limitări ale DETR inițial: convergența lentă și dificultatea pe detalii fine.',steps:[['Feature pyramid','Se folosesc mai multe rezoluții.'],['Deformable attention','Fiecare query caută doar în puncte relevante.'],['Set prediction','Se păstrează interpretarea de obiecte ca set.']],bullets:[['Avantaj major','îmbunătățește obiectele mici și viteza de antrenare'],['Moștenire','păstrează spiritul DETR'],['Utilizare','bun pentru curs când comparăm eficiență vs. eleganță conceptuală']],diagram:['imagine','features multi-scale','deformable attention','predicții finale'],figure:`<svg class="arch-svg" viewBox="0 0 760 320" role="img" aria-label="Schemă Deformable DETR"><rect width="760" height="320" rx="18" fill="#f7fbff"/><g font-family="Inter,Arial,sans-serif"><rect x="26" y="101" width="112" height="118" rx="18" fill="#dceefe" stroke="#7aa7d6"/><text x="82" y="91" text-anchor="middle" font-size="18" fill="#173550">Imagine</text><rect x="176" y="52" width="96" height="60" rx="16" fill="#e5f8f4" stroke="#79c7ba"/><rect x="176" y="130" width="124" height="68" rx="16" fill="#e5f8f4" stroke="#79c7ba"/><rect x="176" y="218" width="146" height="58" rx="16" fill="#e5f8f4" stroke="#79c7ba"/><text x="250" y="38" text-anchor="middle" font-size="18" fill="#173550">Feature pyramid</text><rect x="374" y="74" width="178" height="170" rx="18" fill="#efe9ff" stroke="#9f8bd3"/><text x="463" y="60" text-anchor="middle" font-size="18" fill="#173550">Deformable attention</text><g fill="#7d65c6"><circle cx="428" cy="130" r="5"/><circle cx="454" cy="115" r="5"/><circle cx="474" cy="150" r="5"/><circle cx="500" cy="176" r="5"/><circle cx="520" cy="136" r="5"/></g><path d="M434 122c22-31 70-24 90 9" fill="none" stroke="#7d65c6" stroke-width="3" stroke-dasharray="6 6"/><path d="M474 151c12 28 37 44 57 36" fill="none" stroke="#7d65c6" stroke-width="3" stroke-dasharray="6 6"/><rect x="600" y="92" width="128" height="132" rx="18" fill="#fff4df" stroke="#e6b86a"/><text x="664" y="80" text-anchor="middle" font-size="18" fill="#173550">Predicții</text><text x="664" y="144" text-anchor="middle" font-size="16" fill="#173550">queries multi-scale</text><text x="664" y="174" text-anchor="middle" font-size="16" fill="#173550">obiecte mici mai bine</text><path d="M139 160h20M323 160h32M553 160h30" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round"/><path d="M155 149l12 11-12 11M342 149l12 11-12 11M581 149l12 11-12 11" fill="none" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg><div class="arch-legend"><span>atenție rară, doar pe puncte relevante</span><span>convergență mai rapidă decât DETR-ul original</span></div>`}
};
function renderDetectorArchitecture(key){
 const m=detectorArchitectures[key]; if(!m)return;
 $('det-arch-title').textContent=m.title;$('det-arch-problem').textContent=m.problem;
 $('det-arch-output').textContent=m.output;$('det-arch-post').textContent=m.post;
 $('det-arch-strength').textContent=m.strength;$('det-arch-tradeoff').textContent=m.tradeoff;
 $('det-arch-notes').textContent=m.notes;
 $('det-arch-steps').innerHTML=m.steps.map(([title,desc],i)=>`<div class="step"><strong>${i+1}. ${title}</strong><span>${desc}</span></div>`).join('');
 $('det-arch-bullets').innerHTML=m.bullets.map(([title,desc])=>`<div class="bullet"><strong>${title}</strong><span>${desc}</span></div>`).join('');
 $('det-arch-diagram').innerHTML=`<div class="arch-figure"><img src="assets/architectures/${key}.svg" alt="Diagramă profesională cu etapele arhitecturii ${m.title}"></div>`;
 document.querySelectorAll('#det-arch-tabs .family-tab').forEach(button=>button.classList.toggle('active',button.dataset.det===key));
}
document.querySelectorAll('#det-arch-tabs .family-tab').forEach(b=>b.addEventListener('click',()=>renderDetectorArchitecture(b.dataset.det)));renderDetectorArchitecture('yolo');

// 06c. Arhitecturi moderne pentru segmentare
const segArchitectures={
 unet:{title:'U-Net / DeepLab — semantică pixel-wise',problem:'Ținta este o etichetă pentru fiecare pixel; accentul cade pe context spațial, rezoluție și delimitarea regiunilor.',output:'(B,C,H,W) → argmax',task:'segmentare semantică',strength:'foarte potrivite pentru măști dense',cost:'separarea instanțelor nu este modelată explicit',notes:'U-Net este excelent pentru imagistică medicală și setări cu puține date. DeepLab adaugă context multi-scală și dilatații, fiind foarte puternic pentru scene naturale.',steps:[['Encoder','extrage caracteristici cu receptive field mare'],['Decoder / upsampling','reconstruiește detaliul spațial'],['Pixel classifier','produce scoruri pe clase per pixel']],bullets:[['Exemple','U-Net, U-Net++, DeepLabV3/V3+'],['Metrici','mIoU, Dice, pixel accuracy'],['Date necesare','măști pixel-wise']],diagram:['imagine','encoder','decoder','hartă semantică'],figure:`<img src="assets/figs/fig29.png" alt="Arhitectură de tip encoder-decoder pentru segmentare semantică"><div class="arch-thumbs"><img src="assets/figs/fig30.png" alt="Pooling și unpooling"><img src="assets/figs/fig31.png" alt="Convoluție transpusă ilustrată"><img src="assets/figs/fig32.png" alt="Transposed convolution ilustrată"></div>`},
 maskrcnn:{title:'Mask R-CNN — regiuni + măști pe instanță',problem:'Fiecare obiect este detectat și segmentat separat; ieșirea este un set variabil de instanțe.',output:'N box-uri + N măști + N clase',task:'instance segmentation',strength:'explică foarte clar obiectele individuale',cost:'pipeline mai greu și postprocesare necesară',notes:'Mask R-CNN este arhitectura clasică pentru instance segmentation și oferă o punte foarte bună între detecție și segmentare.',steps:[['RPN + ROI Align','se selectează regiuni relevante'],['Box/class heads','se rafinează localizarea și clasa'],['Mask head','pentru fiecare ROI se produce o mască']],bullets:[['Exemple','Mask R-CNN, Cascade Mask R-CNN'],['Metrici','Mask AP, box AP'],['Date necesare','măști individuale + clase']],diagram:['imagine','ROI proposals','heads box/clasă','măști per instanță'],figure:`<img src="assets/figs/fig25.png" alt="Schemă Mask R-CNN / Faster R-CNN cu clasificare și regresie"><div class="arch-legend"><span>se extinde din Faster R-CNN printr-un cap de mască</span><span>ieșire: box-uri, clase și măști pe instanță</span></div>`},
 mask2former:{title:'Mask2Former — segmentare universală cu masked attention',problem:'Folosește un set de queries și masked attention pentru a unifica semantică, instanțe și panoptică.',output:'Q măști + clase asociate',task:'semantică / instanțe / panoptică',strength:'același model pentru mai multe sarcini',cost:'mai complex conceptual și computațional',notes:'Mask2Former este foarte potrivit pentru un curs modern deoarece arată cum un singur cadru poate acoperi sarcini diferite.',steps:[['Backbone + pixel decoder','se generează reprezentări dense'],['Queries + masked attention','fiecare query se specializează'],['Task-specific decoding','ieșirea este interpretată în funcție de sarcina aleasă']],bullets:[['Idee cheie','unifică trei sarcini majore'],['Metrici','mIoU, AP, PQ'],['Punct forte','versatilitate excelentă']],diagram:['imagine','pixel decoder','queries','măști + clase'],figure:`<svg class="arch-svg" viewBox="0 0 760 320" role="img" aria-label="Schemă Mask2Former"><rect width="760" height="320" rx="18" fill="#f7fbff"/><g font-family="Inter,Arial,sans-serif"><rect x="24" y="98" width="118" height="124" rx="18" fill="#dceefe" stroke="#7aa7d6"/><text x="83" y="88" text-anchor="middle" font-size="18" fill="#173550">Imagine</text><rect x="184" y="80" width="138" height="160" rx="18" fill="#e5f8f4" stroke="#79c7ba"/><text x="253" y="68" text-anchor="middle" font-size="18" fill="#173550">Backbone + pixel decoder</text><rect x="370" y="72" width="166" height="176" rx="18" fill="#efe9ff" stroke="#9f8bd3"/><text x="453" y="58" text-anchor="middle" font-size="18" fill="#173550">Masked attention + queries</text><rect x="592" y="88" width="132" height="144" rx="18" fill="#fff4df" stroke="#e6b86a"/><text x="658" y="74" text-anchor="middle" font-size="18" fill="#173550">Măști + clase</text><text x="658" y="138" text-anchor="middle" font-size="16" fill="#173550">semantică</text><text x="658" y="166" text-anchor="middle" font-size="16" fill="#173550">instanțe</text><text x="658" y="194" text-anchor="middle" font-size="16" fill="#173550">panoptică</text><g fill="#7d65c6"><rect x="402" y="108" width="24" height="24" rx="6"/><rect x="434" y="146" width="24" height="24" rx="6"/><rect x="466" y="118" width="24" height="24" rx="6"/><rect x="498" y="166" width="24" height="24" rx="6"/></g><path d="M143 160h24M323 160h26M537 160h30" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round"/><path d="M161 149l12 11-12 11M343 149l12 11-12 11M564 149l12 11-12 11" fill="none" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg><div class="arch-legend"><span>un singur cadru pentru semantică, instanțe și panoptică</span><span>queries + masked attention produc măști directe</span></div>`},
 oneformer:{title:'OneFormer — o singură arhitectură, mai multe sarcini',problem:'Introduce explicit sarcina dorită ca intrare și poate rezolva semantică, instanțe sau panoptică în același cadru.',output:'depinde de task token',task:'segmentare universală condiționată',strength:'control explicit al sarcinii',cost:'necesită o înțelegere mai sofisticată a condiționării',notes:'OneFormer este foarte util pentru a discuta despre unificare la nivel de interfață a sarcinii, nu doar la nivel de reprezentare.',steps:[['Task token','modelul află dacă vrem semantică, instanțe sau panoptică'],['Shared encoder/decoder','reprezentările sunt reutilizate'],['Task-aware prediction','ieșirea este adaptată sarcinii solicitate']],bullets:[['Avantaj','o singură bază pentru mai multe task-uri'],['Concept modern','model universal condiționat'],['Didactic','excelent pentru a explica „task as conditioning”']],diagram:['imagine + task','encoder/decoder comun','queries condiționate','output specific'],figure:`<svg class="arch-svg" viewBox="0 0 760 320" role="img" aria-label="Schemă OneFormer"><rect width="760" height="320" rx="18" fill="#f7fbff"/><g font-family="Inter,Arial,sans-serif"><rect x="28" y="102" width="112" height="116" rx="18" fill="#dceefe" stroke="#7aa7d6"/><text x="84" y="92" text-anchor="middle" font-size="18" fill="#173550">Imagine</text><rect x="26" y="36" width="118" height="42" rx="16" fill="#efe9ff" stroke="#9f8bd3"/><text x="85" y="62" text-anchor="middle" font-size="16" fill="#173550">task token</text><rect x="194" y="76" width="162" height="168" rx="18" fill="#e5f8f4" stroke="#79c7ba"/><text x="275" y="62" text-anchor="middle" font-size="18" fill="#173550">shared encoder / decoder</text><rect x="414" y="88" width="146" height="144" rx="18" fill="#fff4df" stroke="#e6b86a"/><text x="487" y="74" text-anchor="middle" font-size="18" fill="#173550">task-aware head</text><rect x="616" y="68" width="110" height="56" rx="16" fill="#f0fbf7" stroke="#7ec7b6"/><rect x="616" y="132" width="110" height="56" rx="16" fill="#f0fbf7" stroke="#7ec7b6"/><rect x="616" y="196" width="110" height="56" rx="16" fill="#f0fbf7" stroke="#7ec7b6"/><text x="671" y="102" text-anchor="middle" font-size="15" fill="#173550">semantică</text><text x="671" y="166" text-anchor="middle" font-size="15" fill="#173550">instanțe</text><text x="671" y="230" text-anchor="middle" font-size="15" fill="#173550">panoptică</text><path d="M145 160h30M358 160h40M562 160h36" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round"/><path d="M169 149l12 11-12 11M388 149l12 11-12 11M590 149l12 11-12 11" fill="none" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg><div class="arch-legend"><span>task token-ul spune explicit ce ieșire vrem</span><span>aceeași reprezentare internă poate deservi mai multe sarcini</span></div>`}
};
function renderSegArchitecture(key){
 const m=segArchitectures[key]; if(!m)return;
 $('seg-arch-title').textContent=m.title;$('seg-arch-problem').textContent=m.problem;
 $('seg-arch-output').textContent=m.output;$('seg-arch-task').textContent=m.task;
 $('seg-arch-strength').textContent=m.strength;$('seg-arch-cost').textContent=m.cost;
 $('seg-arch-notes').textContent=m.notes;
 $('seg-arch-steps').innerHTML=m.steps.map(([title,desc],i)=>`<div class="step"><strong>${i+1}. ${title}</strong><span>${desc}</span></div>`).join('');
 $('seg-arch-bullets').innerHTML=m.bullets.map(([title,desc])=>`<div class="bullet"><strong>${title}</strong><span>${desc}</span></div>`).join('');
 $('seg-arch-diagram').innerHTML=`<div class="arch-figure"><img src="assets/architectures/${key==='maskrcnn'?'maskrcnn':key==='mask2former'?'mask2former':key==='oneformer'?'oneformer':'unet'}.svg" alt="Diagramă profesională cu etapele arhitecturii ${m.title}"></div>`;
 document.querySelectorAll('#seg-arch-tabs .family-tab').forEach(button=>button.classList.toggle('active',button.dataset.sarch===key));
}
document.querySelectorAll('#seg-arch-tabs .family-tab').forEach(b=>b.addEventListener('click',()=>renderSegArchitecture(b.dataset.sarch)));renderSegArchitecture('unet');


// Photorealistic step-by-step object detection pipeline
const detDemoStages=[
 {title:'Imagine RGB',desc:'Detectorul primește imaginea RGB. Extrage caracteristicile relevante fără a cunoaște încă pozițiile obiectelor.',tensor:'INPUT  (B, 3, H, W)',output:'image.shape = (3, H, W)',stamp:'01 · INPUT RGB'},
 {title:'Backbone și feature maps',desc:'CNN-ul extrage texturi, contururi, obiecte și informație semantică la mai multe rezoluții. Suprapunerea sugerează zone de activare.',tensor:'FEATURES  P3, P4, P5',output:'features = {"P3": (B,C,H/8,W/8), ...}',stamp:'02 · FEATURE PYRAMID'},
 {title:'Propuneri de box-uri',desc:'Head-ul generează multiple ipoteze pentru fiecare obiect. În acest moment detecțiile se suprapun și includ multe candidate redundante.',tensor:'CANDIDATES  M × (x1,y1,x2,y2)',output:'boxes: (M,4)  ·  scores: (M,)',stamp:'03 · MULTIPLE CANDIDATES'},
 {title:'Score threshold + NMS',desc:'Sunt păstrate ipotezele cu scor mare; box-urile redundante se elimină folosind IoU. Exemplul reprezintă vizual o procedură de tip NMS.',tensor:'SCORE THRESHOLD / NMS',output:'keep = nms(boxes, scores, iou_threshold)',stamp:'04 · NON-MAXIMUM SUPPRESSION'},
 {title:'Detecții finale',desc:'Pentru fiecare obiect păstrat obținem o cutie, un indice de clasă și un scor. Numărul detecțiilor N este variabil.',tensor:'OUTPUT  (N,4), (N,), (N,)',output:'boxes: (3,4)\nlabels: (3,)\nscores: (3,)',stamp:'05 · FINAL PREDICTIONS'}
];
let detDemoIndex=0,detDemoTimer=null;
function setDetDemoStep(i){
 detDemoIndex=Math.max(0,Math.min(detDemoStages.length-1,i));const s=detDemoStages[detDemoIndex];
 $('cvDetPicture').dataset.stage=String(detDemoIndex);
 $('cvDetTitle').textContent=s.title;$('cvDetDesc').textContent=s.desc;
 $('cvDetTensor').textContent=s.tensor;$('cvDetOutput').querySelector('code').textContent=s.output;
 $('cvDetImageStamp').textContent=s.stamp;
 document.querySelectorAll('#cvDetSteps button').forEach(b=>b.classList.toggle('active',Number(b.dataset.detstep)===detDemoIndex));
}
document.querySelectorAll('#cvDetSteps button').forEach(b=>b.addEventListener('click',()=>{setDetDemoStep(Number(b.dataset.detstep));}));
$('cvDetPrev').addEventListener('click',()=>setDetDemoStep(detDemoIndex-1));
$('cvDetNext').addEventListener('click',()=>setDetDemoStep(detDemoIndex+1));
$('cvDetPlay').addEventListener('click',()=>{if(detDemoTimer){clearInterval(detDemoTimer);detDemoTimer=null;$('cvDetPlay').textContent='▶ Animare';return;}setDetDemoStep(0);$('cvDetPlay').textContent='Ⅱ Pauză';detDemoTimer=setInterval(()=>{if(detDemoIndex>=4){clearInterval(detDemoTimer);detDemoTimer=null;$('cvDetPlay').textContent='▶ Animare';return;}setDetDemoStep(detDemoIndex+1);},1200);});
setDetDemoStep(0);

// 07. IoU și Dice geometric, același ground truth și aceeași dimensiune a box-urilor
function drawIoU(){const dx=Number($('box-dx').value),dy=Number($('box-dy').value),A={x:75,y:55,w:205,h:142},B={x:75+dx,y:55+dy,w:205,h:142};
 const x=Math.max(A.x,B.x),y=Math.max(A.y,B.y),w=Math.max(0,Math.min(A.x+A.w,B.x+B.w)-x),h=Math.max(0,Math.min(A.y+A.h,B.y+B.h)-y),inter=w*h,union=A.w*A.h+B.w*B.h-inter;
 const iou=inter/union,dice=2*inter/(A.w*A.h+B.w*B.h);
 for(const [id,k,v] of [['pred-box','x',B.x],['pred-box','y',B.y],['intersection-box','x',x],['intersection-box','y',y],['intersection-box','width',w],['intersection-box','height',h]])$(id).setAttribute(k,v);
 $('iou-value').textContent=fmt(iou,3);$('dice-value').textContent=fmt(dice,3);$('intersection-value').textContent=inter.toLocaleString('ro-RO');$('box-dx-val').textContent=`${dx} px`;$('box-dy-val').textContent=`${dy} px`;
}
['box-dx','box-dy'].forEach(id=>$(id).addEventListener('input',drawIoU));drawIoU();

// 08. Augmentări vizuale; operații asupra adnotărilor discutate în text
function augUpdate(){const flip=$('aug-flip').checked,bright=$('aug-bright').checked,crop=$('aug-crop').checked;
 let t='';if(flip)t+='translate(300 0) scale(-1 1) ';if(crop)t+='translate(-30 -22) scale(1.2)';
 $('aug-world').setAttribute('transform',t||'translate(0 0)');$('aug-brightness').setAttribute('opacity',bright?'.22':'0');
 const note=[];if(flip)note.push('Flip: actualizează și coordonatele box-urilor și măștile.');if(bright)note.push('Luminozitate: etichetele geometrice nu se modifică.');if(crop)note.push('Crop: decupează box-urile/măștile și elimină instanțele complet în afara cadrului.');
 $('aug-explanation').textContent=note.join(' ')||'Fără transformări: imaginea și anotările rămân neschimbate.';
}
['aug-flip','aug-bright','aug-crop'].forEach(id=>$(id).addEventListener('change',augUpdate));$('aug-reset').addEventListener('click',()=>{['aug-flip','aug-bright','aug-crop'].forEach(id=>$(id).checked=false);augUpdate()});augUpdate();



// 02b. Formulări pentru clasificare
// Reprezentări MathML native pentru fiecare componentă a capului de clasificare.
// Indicii sunt construiți din noduri matematice, nu afișați ca text brut.
function headMath(base, sub=null){
  const stem=`<mi>${base}</mi>`;
  const body=sub===null?stem:`<msub>${stem}${sub}</msub>`;
  return `<math xmlns="http://www.w3.org/1998/Math/MathML">${body}</math>`;
}
function headIndex(index){
  return typeof index==='number'?`<mn>${index}</mn>`:`<mi>${index}</mi>`;
}
function headLogit(index, state=null){
  const sub=state===null?headIndex(index):`<mrow>${headIndex(index)}<mo>,</mo><mn>${state}</mn></mrow>`;
  return headMath('z',sub);
}
function headActivation(index){
  const sub=headIndex(index);
  return `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>σ</mi><mo>(</mo><msub><mi>z</mi>${sub}</msub><mo>)</mo></math>`;
}
function headModelDiagram(kind){
  const feature=[headMath('h',headIndex(1)),headMath('h',headIndex(2)),`<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math>`,headMath('h',headIndex('d'))];
  let outputs, caption='';
  if(kind==='single'){
    outputs=[headLogit(1),headLogit(2),`<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math>`,headLogit('C')];
    caption='C logits, o singură clasă corectă';
  }else if(kind==='multilabel'){
    outputs=[headActivation(1),headActivation(2),`<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math>`,headActivation('C')];
    caption='C probabilități calculate independent';
  }else if(kind==='ovr'){
    outputs=[headActivation(1),headActivation(2),`<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math>`,headActivation('C')];
    caption='C decizii binare: clasă vs. rest';
  }else{
    const pair=k=>`<div class="pair"><div class="out">${headLogit(k,0)}</div><div class="out">${headLogit(k,1)}</div></div>`;
    outputs=[pair(1),pair(2),`<div class="pair"><div class="out"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math></div><div class="out"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math></div></div>`,pair('C')];
    caption='Pentru fiecare clasă: absent (0) / prezent (1)';
  }
  const tower=(parts,variant)=>`<div class="tower ${variant}">${parts.map(part=>`<div class="${variant==='head-input'?'cell':'out head-output-item'}">${part}</div>`).join('')}</div>`;
  return `<div class="head-diagram-title"><span>Reprezentare</span><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>z</mi><mo>=</mo><mi>W</mi><mi>h</mi><mo>+</mo><mi>b</mi></math></div>`
     + `<div class="mini-head-grid head-math-visual">${tower(feature,'head-input')}<div class="arrow" aria-hidden="true">→</div>${tower(outputs,'head-output')}</div>`
     + `<div class="head-diagram-caption">${caption}</div>`;
}

const classificationModes={
  single:{title:'Single-label / multiclasă',problem:'Fiecare imagine are exact o singură clasă corectă. Exemple: cifra dintr-o imagine, specia dominantă, tipul de leziune exclusivă.',activation:'softmax',loss:'CrossEntropyLoss',output:'logits (B, C)',target:'indici întregi (B,)',formula:'<span class="eq-num">(2a)</span><math display="block"><msub><mi>p</mi><mi>k</mi></msub><mo>=</mo><mfrac><msup><mi>e</mi><msub><mi>z</mi><mi>k</mi></msub></msup><mrow><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>C</mi></munderover><msup><mi>e</mi><msub><mi>z</mi><mi>j</mi></msub></msup></mrow></mfrac><mspace width="1.8em"></mspace><mi>ℒ</mi><mo>=</mo><mo>−</mo><mi>log</mi><msub><mi>p</mi><mi>y</mi></msub></math>',notes:'Clasele sunt mutual exclusive. Decizia finală se obține prin argmax, iar probabilitățile însumează 1. Este formularea standard pentru clasificarea multiclasă clasică.',bullets:[['Când e potrivită','Când o singură etichetă trebuie aleasă din C clase posibile.'],['Avantaj','Capul de ieșire este compact, iar probabilitățile sunt direct comparabile.'],['Limită','Nu poate exprima simultan „persoană” și „bicicletă” pentru aceeași imagine dacă ambele sunt etichete valide.']],diagram:headModelDiagram('single')},
  multilabel:{title:'Multi-label',problem:'O imagine poate avea mai multe etichete simultan adevărate. Exemple: „intersecție” + „mașină” + „persoană” + „ploaie”.',activation:'sigmoid pe fiecare clasă',loss:'BCEWithLogitsLoss',output:'logits (B, C)',target:'vectori multi-hot (B, C)',formula:'<span class="eq-num">(2b)</span><math display="block"><msub><mover><mi>y</mi><mo>^</mo></mover><mi>k</mi></msub><mo>=</mo><mi>σ</mi><mo>(</mo><msub><mi>z</mi><mi>k</mi></msub><mo>)</mo><mspace width="1.8em"></mspace><mi>ℒ</mi><mo>=</mo><mo>−</mo><munder><mo>∑</mo><mi>k</mi></munder><mrow><mo>[</mo><msub><mi>y</mi><mi>k</mi></msub><mi>log</mi><msub><mover><mi>y</mi><mo>^</mo></mover><mi>k</mi></msub><mo>+</mo><mo>(</mo><mn>1</mn><mo>−</mo><msub><mi>y</mi><mi>k</mi></msub><mo>)</mo><mi>log</mi><mo>(</mo><mn>1</mn><mo>−</mo><msub><mover><mi>y</mi><mo>^</mo></mover><mi>k</mi></msub><mo>)</mo><mo>]</mo></mrow></math>',notes:'Fiecare clasă este decisă independent printr-un prag, de exemplu 0,5. Probabilitățile nu mai trebuie să însumeze 1; modelul poate activa mai multe etichete deodată.',bullets:[['Când e potrivită','Când etichetele nu sunt mutual exclusive.'],['Avantaj','Expresiv pentru scene complexe și ontologii bogate.'],['Atenție','Pragurile pot fi diferite pe clase și trebuie calibrate pe date de validare.']],diagram:headModelDiagram('multilabel')},
  ovr:{title:'K clasificatoare one-vs-rest',problem:'Pentru fiecare clasă se antrenează un clasificator binar „clasa k” vs. „toate celelalte”. Poate fi implementat într-o singură rețea cu C ieșiri sau în C modele separate.',activation:'sigmoid / scor binar per clasă',loss:'BCE sau sumă de pierderi binare',output:'C scoruri independente',target:'0/1 pentru fiecare clasă',formula:'<span class="eq-num">(2c)</span><math display="block"><mrow><mo>pentru</mo><mspace width="0.5em"></mspace><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mo>…</mo><mo>,</mo><mi>C</mi><mo>:</mo></mrow><mspace width="1em"></mspace><msub><mover><mi>y</mi><mo>^</mo></mover><mi>k</mi></msub><mo>=</mo><mi>σ</mi><mo>(</mo><msub><mi>z</mi><mi>k</mi></msub><mo>)</mo><mo>,</mo><mspace width="1em"></mspace><msub><mi>ℒ</mi><mi>k</mi></msub><mo>=</mo><mtext>BCE</mtext><mo>(</mo><msub><mover><mi>y</mi><mo>^</mo></mover><mi>k</mi></msub><mo>,</mo><msub><mi>y</mi><mi>k</mi></msub><mo>)</mo></math>',notes:'Conceptual, aceasta este forma cea mai clară de multi-label atunci când vrem să discutăm explicit „K clasificatoare”. Dacă modelele sunt separate, pot exista costuri mai mari de memorie și antrenare.',bullets:[['Avantaj','Interpretare foarte clară: fiecare cap decide doar pentru clasa sa.'],['Când e utilă','Seturi de etichete rare, extindere modulară cu clase noi, ablații pe clasă.'],['Limită','Scorurile dintre clase pot fi mai greu de comparat dacă modelele sunt antrenate separat.']],diagram:headModelDiagram('ovr')},
  twologits:{title:'Două logits per clasă',problem:'Pentru fiecare clasă se produc două scoruri: „absent” și „prezent”. Astfel, fiecare clasă are propria competiție internă pe două stări.',activation:'softmax pe fiecare pereche',loss:'sumă de CrossEntropy pe clase',output:'(B, C, 2) sau (B, 2C)',target:'0/1 per clasă',formula:'<span class="eq-num">(2d)</span><math display="block"><mrow><mo>pentru fiecare clasă</mo><mspace width="0.5em"></mspace><mi>k</mi><mo>:</mo></mrow><mspace width="1em"></mspace><msub><mi>p</mi><mi>k</mi></msub><mo>=</mo><mtext>softmax</mtext><mo>(</mo><msub><mi>z</mi><mi>k</mi></msub><mo>)</mo><mo>,</mo><mspace width="1em"></mspace><mi>ℒ</mi><mo>=</mo><munder><mo>∑</mo><mi>k</mi></munder><mtext>CE</mtext><mo>(</mo><msub><mi>p</mi><mi>k</mi></msub><mo>,</mo><msub><mi>y</mi><mi>k</mi></msub><mo>)</mo></math>',notes:'Este o variantă mai redundantă decât sigmoid-ul pe fiecare clasă, dar poate fi utilă când vrem să forțăm explicit concurența „prezent vs. absent” pentru fiecare etichetă.',bullets:[['Avantaj','Modelul produce o competiție locală binară pentru fiecare clasă.'],['Când e utilă','Formulări speciale, pierderi custom, integrare cu capete deja gândite pentru CE.'],['Cost','Folosește de două ori mai multe scoruri decât varianta cu un singur logit per clasă.']],diagram:headModelDiagram('twologits')}
};
function renderClassificationMode(key){const m=classificationModes[key];if(!m)return;$('cls-title').textContent=m.title;$('cls-problem').textContent=m.problem;$('cls-formula').innerHTML=m.formula;$('cls-activation').textContent=m.activation;$('cls-loss').textContent=m.loss;$('cls-output').textContent=m.output;$('cls-target').textContent=m.target;$('cls-notes').textContent=m.notes;$('cls-diagram').innerHTML=m.diagram;$('cls-bullets').innerHTML=m.bullets.map(([t,d])=>`<div class="bullet"><strong>${t}</strong><span>${d}</span></div>`).join('');document.querySelectorAll('#cls-tabs .family-tab').forEach(b=>b.classList.toggle('active',b.dataset.cls===key));}
document.querySelectorAll('#cls-tabs .family-tab').forEach(b=>b.addEventListener('click',()=>renderClassificationMode(b.dataset.cls)));renderClassificationMode('single');

// 06b. Semantică vs. instanțe vs. panoptică
const segmentModes={
 semantic:{caption:'În segmentarea semantică, fiecare pixel primește o clasă, dar două mașini apropiate pot avea exact aceeași etichetă și nu sunt separate între ele.',output:'logits (B,C,H,W) → argmax',loss:'CrossEntropy / Dice',metric:'mIoU, Dice',arch:'DeepLabV3, U-Net, SegFormer',notes:'Foarte potrivită pentru suprafețe continue sau „stuff”: drum, cer, vegetație, organe, regiuni patologice.',bullets:[['Ce răspunde?','„Ce clasă are fiecare pixel?”'],['Ce nu separă?','Obiectele individuale din aceeași clasă.'],['Output tipic','O singură hartă de etichete (B,H,W).']],show:'semantic'},
 instance:{caption:'În segmentarea pe instanțe, fiecare obiect primește propria mască. Două mașini sunt două entități diferite, chiar dacă au aceeași clasă.',output:'N măști + N box-uri + N etichete',loss:'box + cls + mask loss',metric:'Mask AP, AP50',arch:'Mask R-CNN, YOLACT, CondInst',notes:'Este preferată când vrem măsurare, numărare sau urmărire per obiect. Numărul de instanțe N variază de la o imagine la alta.',bullets:[['Ce răspunde?','„Care pixeli aparțin fiecărui obiect concret?”'],['Avantaj','Separă instanțele individuale.'],['Limită','Zonele de tip stuff trebuie tratate separat sau completate cu un cap semantic.']],show:'instance'},
 panoptic:{caption:'Segmentarea panoptică combină cele două viziuni: toți pixelii primesc o clasă, iar obiectele de tip thing au în plus și identitate de instanță.',output:'hartă panoptică (clasă + id instanță)',loss:'combinații semantice + instanțe',metric:'PQ, SQ, RQ',arch:'Panoptic FPN, Mask2Former, OneFormer',notes:'Panoptica produce o descriere completă a scenei: drum și cer ca stuff, fiecare mașină și fiecare persoană ca thing cu identitate proprie.',bullets:[['Ce răspunde?','„Ce este fiecare pixel și, dacă e un obiect individual, din ce instanță face parte?”'],['Avantaj','Unifică scena într-o reprezentare coerentă.'],['Metrică standard','Panoptic Quality (PQ), împreună cu SQ și RQ.']],show:'panoptic'}
};
const cvSegColors={road:'#7761cb',buildings:'#6aa7dd',sidewalk:'#d39fb6',vegetation:'#4ab980',car_blue:'#34d8e6',car_yellow:'#ffb24e',person:'#f07790'};
const cvSegAssets={semantic:'assets/urban/preview_semantic.webp',instance:'assets/urban/preview_instance.webp',panoptic:'assets/urban/preview_panoptic.webp'};
const cvSegTitles={semantic:'HARTĂ SEMANTICĂ',instance:'MĂȘTI PE INSTANȚE',panoptic:'HARTĂ PANOPTICĂ'};
const cvSegOutputDims={semantic:'H × W (clase)',instance:'N × H × W',panoptic:'H × W (clasă + ID)'};
let cvSegMode='semantic',cvSegStep=3,cvSegTimer=null;
function renderCvSegStep(step){
 cvSegStep=Math.max(0,Math.min(3,step));
 const opacity=Number($('cvSegOpacity').value)/100;
 const factor=[0,.32,.82,1][cvSegStep];
 $('cvSegOverlay').style.opacity=(opacity*factor).toFixed(2);
 $('cvSegDemo').dataset.step=String(cvSegStep);
 $('cvSegDemo').dataset.segMode=cvSegMode;
 $('cvSegLabelLayer').style.opacity=String($('cvSegLabels').checked&&cvSegStep===3?1:0);
 const captions=['Pasul 1 · imaginea de intrare','Pasul 2 · scoruri dense ilustrative','Pasul 3 · decodarea măștilor','Pasul 4 · măștile și clasele finale'];
 $('cvSegFrameCaption').textContent=captions[cvSegStep];
 document.querySelectorAll('#cvSegSteps button').forEach(b=>b.classList.toggle('active',Number(b.dataset.step)===cvSegStep));
 $('cvSegOutputTitle').textContent=cvSegTitles[cvSegMode];
 $('cvSegOutDim').textContent=cvSegOutputDims[cvSegMode];
}
function renderSegmentMode(key){
 const m=segmentModes[key];if(!m)return;
 cvSegMode=key;
 $('seg-caption').textContent=m.caption;
 $('seg-output').textContent=m.output;$('seg-loss').textContent=m.loss;
 $('seg-metric').textContent=m.metric;$('seg-arch').textContent=m.arch;
 $('seg-notes').textContent=m.notes;
 $('seg-bullets').innerHTML=m.bullets.map(([title,desc])=>`<div class="bullet"><strong>${title}</strong><span>${desc}</span></div>`).join('');
 $('cvSegOverlay').src=cvSegAssets[key];
 document.querySelectorAll('#seg-tabs .family-tab').forEach(b=>{b.classList.toggle('active',b.dataset.seg===key);b.setAttribute('aria-selected',String(b.dataset.seg===key));});
 const labels={semantic:['mașină','mașină','persoană','drum','clădiri','vegetație'],instance:['car #1','car #2','person #3','','',''],panoptic:['car #1','car #2','person #3','drum · stuff','clădiri · stuff','vegetație · stuff']}[key];
 const names=['car1','car2','person','road','building','tree'];
 names.forEach((n,i)=>{const el=document.querySelector(`[data-label="${n}"]`);if(el){el.textContent=labels[i];el.style.display=labels[i]?'inline-flex':'none';}});
 const legend=key==='instance'?[['car_blue','mașină #1'],['car_yellow','mașină #2'],['person','persoană #3']]:
   key==='semantic'?[['car_yellow','automobile'],['person','persoană'],['road','drum'],['buildings','clădiri'],['vegetation','vegetație']]:
   [['car_blue','mașină #1'],['car_yellow','mașină #2'],['person','persoană #3'],['road','drum'],['buildings','clădiri'],['vegetation','vegetație']];
 $('cvSegLegend').innerHTML=legend.map(([id,title])=>`<span class="cv-seg-key"><i style="background:${cvSegColors[id]}"></i>${title}</span>`).join('');
 renderCvSegStep(cvSegStep);
}
document.querySelectorAll('#seg-tabs .family-tab').forEach(b=>b.addEventListener('click',()=>renderSegmentMode(b.dataset.seg)));renderSegmentMode('semantic');

document.querySelectorAll('#cvSegSteps button').forEach(b=>b.addEventListener('click',()=>{if(cvSegTimer){clearInterval(cvSegTimer);cvSegTimer=null;$('cvSegPlay').textContent='▶ Animare';}renderCvSegStep(Number(b.dataset.step));}));
$('cvSegOpacity').addEventListener('input',()=>{$('cvSegOpacityText').textContent=$('cvSegOpacity').value+'%';renderCvSegStep(cvSegStep);});
$('cvSegLabels').addEventListener('change',()=>renderCvSegStep(cvSegStep));
$('cvSegPrev').addEventListener('click',()=>renderCvSegStep(cvSegStep-1));
$('cvSegNext').addEventListener('click',()=>renderCvSegStep(cvSegStep+1));
$('cvSegPlay').addEventListener('click',()=>{if(cvSegTimer){clearInterval(cvSegTimer);cvSegTimer=null;$('cvSegPlay').textContent='▶ Animare';return;}renderCvSegStep(0);$('cvSegPlay').textContent='Ⅱ Pauză';cvSegTimer=setInterval(()=>{if(cvSegStep>=3){clearInterval(cvSegTimer);cvSegTimer=null;$('cvSegPlay').textContent='▶ Animare';return;}renderCvSegStep(cvSegStep+1);},1100);});


// 09. Exemple reale PyTorch sunt incluse în bundle, introduse la generare.
const snippets={
classification:`"""Clasificare ImageNet cu ResNet18 preantrenat.
Instalare: pip install torch torchvision pillow
Utilizare: python 01_clasificare.py fotografie.jpg
"""
import sys
from PIL import Image
import torch
from torchvision.models import resnet18, ResNet18_Weights

weights = ResNet18_Weights.DEFAULT
model = resnet18(weights=weights).eval()
preprocess = weights.transforms()

image = Image.open(sys.argv[1]).convert("RGB")
x = preprocess(image).unsqueeze(0)  # (1, 3, H, W)

with torch.inference_mode():
    logits = model(x)                  # (1, 1000)
    probs = logits.softmax(dim=1)     # softmax doar la inferență
    values, indices = probs[0].topk(5)

categories = weights.meta["categories"]
for probability, index in zip(values, indices):
    print(f"{categories[index.item()]:30s} {probability.item():.3f}")
`,
multilabel:`"""Clasificare multi-label cu sigmoid și BCEWithLogitsLoss.
Instalare: pip install torch torchvision pillow
Exemplu didactic pentru etichete independente.
"""
import torch
from torch import nn
from torchvision.models import resnet18, ResNet18_Weights

weights = ResNet18_Weights.DEFAULT
model = resnet18(weights=weights)
model.fc = nn.Linear(model.fc.in_features, 4)   # 4 etichete independente

x = torch.randn(8, 3, 224, 224)
y = torch.randint(0, 2, (8, 4)).float()         # target multi-hot
logits = model(x)                                # (8, 4)
loss = nn.BCEWithLogitsLoss()(logits, y)         # sigmoid este inclus intern
loss.backward()
probs = torch.sigmoid(logits)
pred = probs > 0.5
print("logits:", tuple(logits.shape))
print("probabilitati:", tuple(probs.shape))
print("etichete estimate:", pred[0].tolist())
`,
detector:`"""Faster R-CNN: lista de box-uri, clase și scoruri.
Instalare: pip install torch torchvision pillow
Utilizare: python 02_detectie.py fotografie.jpg
"""
import sys
from PIL import Image
import torch
from torchvision.models.detection import (
    fasterrcnn_resnet50_fpn,
    FasterRCNN_ResNet50_FPN_Weights,
)

weights = FasterRCNN_ResNet50_FPN_Weights.DEFAULT
model = fasterrcnn_resnet50_fpn(weights=weights).eval()
image = Image.open(sys.argv[1]).convert("RGB")
x = weights.transforms()(image)      # tensor (3, H, W)

with torch.inference_mode():
    out = model([x])[0]               # listă de imagini -> dict / imagine

# Box-uri in coordonatele imaginii: (x1, y1, x2, y2)
keep = out["scores"] >= 0.60
categories = weights.meta["categories"]
for box, label, score in zip(
    out["boxes"][keep], out["labels"][keep], out["scores"][keep]
):
    print(categories[label.item()], [round(v, 1) for v in box.tolist()],
          round(score.item(), 3))
`,
segmentation:`"""DeepLabV3: predicție semantică pe fiecare pixel.
Instalare: pip install torch torchvision pillow
Utilizare: python 03_segmentare_semantica.py fotografie.jpg
"""
import sys
from PIL import Image
import torch
from torchvision.models.segmentation import (
    deeplabv3_resnet50,
    DeepLabV3_ResNet50_Weights,
)

weights = DeepLabV3_ResNet50_Weights.DEFAULT
model = deeplabv3_resnet50(weights=weights).eval()
image = Image.open(sys.argv[1]).convert("RGB")
x = weights.transforms()(image).unsqueeze(0)    # (1, 3, H, W)

with torch.inference_mode():
    logits = model(x)["out"]                  # (1, C, H, W)
    labels = logits.argmax(dim=1)[0]          # (H, W)

print("Logits:", tuple(logits.shape))
print("Harta claselor:", tuple(labels.shape))
print("Clase identificate:", labels.unique().tolist())
print("Clasele modelului:", weights.meta["categories"])
`,
instance:`"""Mask R-CNN: box-uri, clase, scoruri și măști per instanță.
Instalare: pip install torch torchvision pillow
Utilizare: python 04_instance_segmentation.py fotografie.jpg
"""
import sys
from PIL import Image
import torch
from torchvision.models.detection import (
    maskrcnn_resnet50_fpn,
    MaskRCNN_ResNet50_FPN_Weights,
)

weights = MaskRCNN_ResNet50_FPN_Weights.DEFAULT
model = maskrcnn_resnet50_fpn(
    weights=weights, box_detections_per_img=100
).eval()
image = Image.open(sys.argv[1]).convert("RGB")
x = weights.transforms()(image)          # (3, H, W)

with torch.inference_mode():
    out = model([x])[0]

keep = out["scores"] >= 0.70
boxes = out["boxes"][keep]              # (N, 4)
labels = out["labels"][keep]            # (N,)
scores = out["scores"][keep]            # (N,)
mask_probs = out["masks"][keep]         # (N, 1, H, W)
masks = mask_probs[:, 0] > 0.5          # (N, H, W), boolean

print(f"Instanțe păstrate: {len(boxes)}")
print("boxes:", tuple(boxes.shape), "masks:", tuple(masks.shape))
for label, score in zip(labels, scores):
    print(weights.meta["categories"][label.item()], round(score.item(), 3))
`,
loss:`"""Soft Dice Loss pentru segmentare binară; logits și target (B,1,H,W)."""
import torch
from torch import nn

class SoftDiceLoss(nn.Module):
    def __init__(self, eps=1e-6):
        super().__init__()
        self.eps = eps

    def forward(self, logits, target):
        if logits.shape != target.shape:
            raise ValueError("logits și target trebuie să aibă aceeași formă")
        probs = torch.sigmoid(logits)
        target = target.to(dtype=probs.dtype)
        axes = (1, 2, 3)               # agregare per imagine
        intersection = (probs * target).sum(dim=axes)
        denominator = probs.sum(dim=axes) + target.sum(dim=axes)
        dice = (2 * intersection + self.eps) / (denominator + self.eps)
        return (1 - dice).mean()

loss_fn = SoftDiceLoss()
logits = torch.randn(2, 1, 128, 128, requires_grad=True)
target = torch.randint(0, 2, logits.shape).float()
loss = loss_fn(logits, target)
loss.backward()
print("Loss:", loss.item(), "Gradient:", logits.grad is not None)
`,
training:`"""Fine-tuning doar pentru clasificatorul ResNet18.
Date: dataset/train/{clasa1,clasa2,...}/*.jpg.
Instalare: pip install torch torchvision pillow
"""
import torch
from torch import nn
from torch.utils.data import DataLoader
from torchvision import datasets, transforms
from torchvision.models import resnet18, ResNet18_Weights

weights = ResNet18_Weights.DEFAULT
train_tf = transforms.Compose([
    transforms.RandomResizedCrop(224),
    transforms.RandomHorizontalFlip(),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225]),
])
dataset = datasets.ImageFolder("dataset/train", transform=train_tf)
loader = DataLoader(dataset, batch_size=16, shuffle=True, num_workers=0)

model = resnet18(weights=weights)
for param in model.parameters():
    param.requires_grad = False        # backbone înghețat
model.fc = nn.Linear(model.fc.in_features, len(dataset.classes))

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)
optimizer = torch.optim.AdamW(model.fc.parameters(), lr=1e-3)
criterion = nn.CrossEntropyLoss()

model.eval()                        # păstrează statisticile BatchNorm înghețate
model.fc.train()                    # antrenează numai noul clasificator
for images, labels in loader:         # un singur epoch demonstrativ
    images, labels = images.to(device), labels.to(device)
    optimizer.zero_grad(set_to_none=True)
    logits = model(images)             # (B, num_classes)
    loss = criterion(logits, labels)   # fără softmax manual
    loss.backward()
    optimizer.step()

print("Clase:", dataset.classes)
print("Antrenarea demonstrativă s-a încheiat.")
`};
const snippetMetadata={
 classification:{name:'01_clasificare.py',text:'ResNet18 preantrenat: folosește preprocesarea atașată ponderilor; primește (1,3,H,W), produce logits (1,1000), apoi top-5 probabilități.'},
 multilabel:{name:'07_multilabel_clasificare.py',text:'Multi-label: modelul produce C scoruri independente; fiecare clasă primește un sigmoid și se antrenează cu BCEWithLogitsLoss pe ținte multi-hot.'},
 detector:{name:'02_detectie.py',text:'Faster R-CNN: inferență pe o listă de imagini. Rezultatul fiecărei imagini conține boxes[N,4], labels[N], scores[N]; N este variabil.'},
 segmentation:{name:'03_segmentare_semantica.py',text:'DeepLabV3: modelul returnează logits per pixel în cheia "out"; argmax(dim=1) construiește harta claselor. Dimensiunea spațială depinde de preprocesare.'},
 instance:{name:'04_instance_segmentation.py',text:'Mask R-CNN: probabilități în out["masks"] de formă (N,1,H,W); selectarea obiectelor și pragul de mască sunt două operații diferite.'},
 loss:{name:'05_soft_dice_loss.py',text:'Soft Dice Loss binară: calculează suprapunerea diferențiabilă după sigmoid, agregată per imagine. Valorile mask logits nu se binarizează în timpul calculului pierderii.'},
 training:{name:'06_transfer_learning.py',text:'Transfer learning: backbone ResNet18 înghețat și cap de clasificare reantrenat pe un ImageFolder. Exemplu demonstrativ: un epoch, fără validare și fără tuning.'}
};
let activeSnippet='classification';
function escapeHTML(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function highlightPython(source){return source.split('\n').map(line=>{
  const match=line.match(/^([^#]*)(#.*)$/);let code=match?match[1]:line,comment=match?match[2]:'';
  // Tokenizare minimală, bazată pe expresii regex (fără librării externe).
  const pieces=code.split(/((?:f|r)?"(?:\\.|[^"\\])*"|(?:f|r)?'(?:\\.|[^'\\])*')/g);
  return pieces.map((p,i)=>{if(i%2===1)return `<span class="tok-str">${escapeHTML(p)}</span>`;return escapeHTML(p).replace(/\b(from|import|as|with|for|in|if|else|elif|return|class|def|while|and|or|not|is|None|True|False|raise)\b/g,'<span class="tok-key">$1</span>').replace(/\b(\d+(?:\.\d+)?)\b/g,'<span class="tok-num">$1</span>')}).join('')+(comment?`<span class="tok-comment">${escapeHTML(comment)}</span>`:'');
 }).join('\n')}
function showSnippet(k){activeSnippet=k;$('code-content').innerHTML=highlightPython(snippets[k]);$('code-filename').textContent=snippetMetadata[k].name;$('code-description').textContent=snippetMetadata[k].text;
 document.querySelectorAll('.code-tab').forEach(b=>{const a=b.dataset.code===k;b.classList.toggle('active',a);b.setAttribute('aria-selected',String(a))});$('copy-code').textContent='Copiază codul';}
document.querySelectorAll('.code-tab').forEach(b=>b.addEventListener('click',()=>showSnippet(b.dataset.code)));showSnippet(activeSnippet);
$('copy-code').addEventListener('click',async()=>{try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(snippets[activeSnippet])}else{const t=document.createElement('textarea');t.value=snippets[activeSnippet];t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();if(!document.execCommand('copy'))throw Error('Clipboard indisponibil');t.remove()}$('copy-code').textContent='Copiat!'}catch(e){$('copy-code').textContent='Selectează codul manual'} });

// 10. Studii de caz
const cases={
 traffic:{mark:'01',title:'Numărarea automobilelor dintr-o intersecție',intro:'Cerința cere să identificăm fiecare vehicul separat și să estimăm poziția sa în cadrul curent.',task:'Object detection',labels:'Bounding boxes + clase',metric:'mAP + recall',arch:'YOLO / DETR',prompt:'Extensie de nivel IV: dacă dorim numărul de automobile distincte de-a lungul unui video, trebuie să adăugăm tracking și asociere temporală.'},
 medical:{mark:'02',title:'Detectarea mai multor patologii într-o radiografie',intro:'Aceeași imagine poate conține simultan mai multe condiții, deci clasele nu sunt mutual exclusive.',task:'Clasificare multi-label',labels:'Etichete multi-hot la nivel de imagine',metric:'AUROC per clasă, macro-F1, calibrare',arch:'ResNet / DenseNet / ViT',prompt:'Extensie de nivel IV: compară praguri diferite pe clase și analizează impactul dezechilibrului de clasă și al split-ului la nivel de pacient.'},
 industrial:{mark:'03',title:'Identificarea defectelor distincte pe o suprafață',intro:'Fiecare defect trebuie localizat și măsurat individual, inclusiv când există mai multe defecte de aceeași categorie.',task:'Instance segmentation',labels:'Măști individuale + clase',metric:'Mask AP, recall, dimensiune',arch:'Mask R-CNN / Mask2Former',prompt:'Extensie de nivel IV: proiectează evaluări pe defecte foarte mici și compară performanța, consumul de memorie și latența pe hardware-ul de producție.'},
 retail:{mark:'04',title:'Inventarierea produselor pe raft',intro:'Interesează atât localizarea produselor, cât și uneori separarea instanțelor foarte apropiate.',task:'Detecție sau instance segmentation',labels:'Box-uri sau măști individuale',metric:'mAP / Mask AP + counting accuracy',arch:'YOLO pentru viteză, Mask R-CNN pentru separare fină',prompt:'Extensie de nivel IV: discută erorile de ocluzie, produse similare vizual și generalizarea între magazine.'},
 satellite:{mark:'05',title:'Analiza imaginilor aeriene și satelitare',intro:'Pentru drumuri, apă, vegetație și clădiri interesează acoperirea spațială completă; pentru vehicule sau nave interesează și instanțele.',task:'Semantică sau panoptică',labels:'Măști pixel-wise, eventual instanțe pentru obiectele individuale',metric:'mIoU, PQ, F1 pe obiecte rare',arch:'DeepLab / SegFormer / Mask2Former',prompt:'Extensie de nivel IV: compară rezoluția de intrare, patch-based inference și schimbarea de domeniu sezonieră.'}
};
function renderCase(key){const c=cases[key];if(!c)return;document.querySelectorAll('.case-tab').forEach(x=>x.classList.toggle('active',x.dataset.case===key));for(const k of ['mark','title','intro','task','labels','metric','arch','prompt'])$('case-'+k).textContent=c[k];}
document.querySelectorAll('.case-tab').forEach(b=>b.addEventListener('click',()=>renderCase(b.dataset.case)));renderCase('traffic');

const wizardRules={
 one:{task:'Clasificare multiclasă single-label',annotation:'o etichetă per imagine',architecture:'ResNet / EfficientNet / ViT',metrics:'accuracy, macro-F1',why:'Alegi această formulare când fiecare imagine are exact o singură clasă corectă.'},
 many:{task:'Clasificare multi-label',annotation:'vector multi-hot la nivel de imagine',architecture:'ResNet / DenseNet / ViT + BCEWithLogitsLoss',metrics:'AUROC, macro-F1, calibrare',why:'Mai multe etichete pot fi simultan adevărate; nu folosim softmax exclusiv.'},
 boxes:{task:'Object detection',annotation:'bounding boxes + clase',architecture:'YOLO dacă viteza contează; DETR / Faster R-CNN pentru analiză mai bogată',metrics:'mAP, recall',why:'Vrei localizare la nivel de obiect, dar nu neapărat contur fin pixel-wise.'},
 pixels:{task:'Segmentare semantică',annotation:'măști pixel-wise',architecture:'U-Net / DeepLab / SegFormer',metrics:'mIoU, Dice',why:'Vrei o clasă pentru fiecare pixel, fără identitate separată a instanțelor.'},
 instances:{task:'Instance segmentation',annotation:'măști individuale + clase',architecture:'Mask R-CNN / Mask2Former',metrics:'Mask AP, AP50',why:'Ai nevoie de separarea obiectelor din aceeași clasă.'},
 scene:{task:'Segmentare panoptică',annotation:'hărți de clasă + instanță',architecture:'Panoptic FPN / Mask2Former / OneFormer',metrics:'PQ, SQ, RQ',why:'Vrei simultan regiuni de tip stuff și obiecte things cu identitate proprie.'}
};
function updateWizard(){const out=$('wiz-output').value,speed=$('wiz-speed').value,labels=$('wiz-labels').value;let base=wizardRules[out];let arch=base.architecture, notes=[base.why];if(speed==='high' && out==='boxes') arch='YOLO'; if(speed==='high' && out==='instances') arch='modele ușoare sau compromis spre box-uri'; if(speed==='low' && (out==='scene' || out==='instances')) arch='Mask2Former / OneFormer'; if(labels==='image' && ['boxes','pixels','instances','scene'].includes(out)) notes.push('Ieșirea dorită cere adnotări mai bogate decât etichetele la nivel de imagine; trebuie revizuit protocolul de etichetare.'); if(labels==='boxes' && ['pixels','instances','scene'].includes(out)) notes.push('Bounding box-urile nu sunt suficiente pentru o segmentare pixel-wise de înaltă fidelitate.'); if(labels==='masks' && (out==='one' || out==='many')) notes.push('Ai adnotări mai bogate decât minimul necesar; poți deriva și sarcini mai simple din ele.');$('wiz-task').textContent=base.task;$('wiz-annotation').textContent=base.annotation;$('wiz-architecture').textContent=arch;$('wiz-metrics').textContent=base.metrics;$('wiz-explanation').textContent=notes.join(' ');}['wiz-output','wiz-speed','wiz-labels'].forEach(id=>$(id).addEventListener('change',updateWizard));updateWizard();


// 11. Autoevaluare: răspuns unic, feedback explicativ
const quiz=[
 {q:'Ce primește nn.CrossEntropyLoss pentru o problemă de clasificare multiclasă?',a:['Probabilități normalizate manual prin softmax','Logits de formă (B,C) și etichete întregi de formă (B,)','Un tensor (B,C,H,W) în orice situație','Doar clasa cu probabilitatea maximă'],c:1,e:'CrossEntropyLoss aplică intern log-softmax. Softmax manual înainte de funcția de pierdere nu este necesar și poate fi eronat.'},
 {q:'Ce reprezintă N în ieșirea de inferență a unui detector Torchvision?',a:['Numărul maxim de clase antrenate','Numărul de pixeli pozitivi','Numărul detecțiilor returnate după filtrare','Numărul de straturi convoluționale'],c:2,e:'N este numărul de detecții păstrate și poate diferi între imagini; nu reprezintă numărul claselor.'},
 {q:'Care este diferența fundamentală dintre segmentarea semantică și instance segmentation?',a:['Prima nu folosește CNN','A doua separă instanțele aceleiași clase','A doua produce o singură etichetă pentru imagine','Prima nu poate evalua IoU'],c:1,e:'Segmentarea semantică marchează clasele pixelilor; segmentarea instanțelor distinge obiectele individuale.'},
 {q:'Într-un model query-based cu Q=100, câte obiecte trebuie neapărat să apară în imagine?',a:['100','Cel puțin 50','Exact numărul de clase','Niciun număr prestabilit; multe queries pot indica no-object'],c:3,e:'Q indică numărul pozițiilor de predicție. Nu obligă imaginea să conțină Q obiecte.'},
 {q:'Când IoU = 0,5 pentru două regiuni nevide, ce valoare are Dice?',a:['0,5','1/3','2/3','0,75'],c:2,e:'Dice = 2·IoU/(1+IoU) = 2/3.'},
 {q:'Ce transformare obligă la actualizarea bounding box-urilor?',a:['Schimbarea luminozității','Normalizarea canalelor RGB','Flip orizontal','Modificarea temperaturii softmax'],c:2,e:'Transformările geometrice schimbă coordonatele; ajustarea intensității nu schimbă geometria adnotărilor.'},
 {q:'Ce shape este caracteristic logits-urilor de segmentare semantică pentru B imagini?',a:['(B,C,H,W)','(B,4)','(B,C)','(H,W,1) pentru întregul batch'],c:0,e:'C scoruri pentru fiecare pixel; argmax pe dimensiunea clasei produce (B,H,W).'},
 {q:'Care este un risc serios în evaluarea imaginilor medicale pe pacienți?',a:['Prea multe epoci de validare','Partajarea imaginilor aceluiași pacient între train și test','Folosirea Dice','Un batch mic la inferență'],c:1,e:'Scurgerea de informație între split-uri produce o estimare optimistă a performanței.'},
 {q:'NMS greedy, în forma uzuală, elimină o detecție dacă...',a:['Are un scor mai mare decât toate celelalte','Intersecția este zero','IoU cu o detecție deja păstrată din aceeași clasă depășește pragul','Imaginea are peste două obiecte'],c:2,e:'NMS păstrează o ipoteză cu scor mare și suprimă suprapunerile excesive, de obicei în aceeași clasă.'},
 {q:'Ce descrie corect mAP COCO pentru detecția obiectelor?',a:['Accuracy globală de clasificare','AP agregat pe clase și praguri IoU 0,50:0,05:0,95','IoU calculat o singură dată la prag 0,5','Media scorurilor softmax ale box-urilor'],c:1,e:'Evaluarea standard COCO mAP agregă AP pentru mai multe praguri IoU, între 0,50 și 0,95, și pe categorii.'},
 {q:'În clasificarea multi-label, ce combinație este cea mai potrivită?',a:['softmax + CrossEntropyLoss','sigmoid pe fiecare clasă + BCEWithLogitsLoss','argmax înainte de loss','Dice Loss pe vectorul de clase'],c:1,e:'În multi-label, clasele sunt independente; fiecare ieșire primește un sigmoid, iar antrenarea se face natural cu BCEWithLogitsLoss.'},
 {q:'Care afirmație surprinde cel mai bine diferența dintre YOLO și DETR?',a:['Ambele necesită exact aceeași postprocesare și același matching la antrenare','YOLO produce predicții dense și folosește uzual NMS, în timp ce DETR formulează problema ca set prediction','DETR este obligatoriu mai rapid decât YOLO','YOLO nu poate detecta obiecte mici în niciun context'],c:1,e:'YOLO este tipic un detector dens cu NMS; DETR folosește obiecte ca set și matching bipartit.'},
 {q:'Pentru segmentarea panoptică, ce metrică este cea mai caracteristică?',a:['Top-1 accuracy','Panoptic Quality (PQ)','BLEU','MSE'],c:1,e:'PQ combină recunoașterea și calitatea segmentării și este metrica standard pentru panoptică.'},
 {q:'Dacă ai doar etichete la nivel de imagine, dar dorești conturul fiecărui defect, care este concluzia corectă?',a:['Poți antrena direct un model de instance segmentation complet supravegheat fără alte adnotări','Trebuie schimbată formularea sau colectate adnotări mai bogate, deoarece etichetele pe imagine nu specifică localizarea pixelilor','Este suficient să mărești batch size-ul','Trebuie doar să schimbi optimizerul'],c:1,e:'Ieșirea dorită trebuie susținută de adnotări compatibile; altfel problema este subdeterminată într-un cadru complet supravegheat.'}
];

let quizI=0,quizScore=0,quizAnswered=false;
function drawQuiz(){const q=quiz[quizI];$('quiz-number').textContent=String(quizI+1);$('quiz-question').textContent=q.q;const quizCounter=document.querySelector('#autoevaluare .quiz-top span'); if(quizCounter){quizCounter.innerHTML=`ÎNTREBAREA <strong>${quizI+1}</strong> DIN ${quiz.length}`};$('quiz-score').textContent=`${quizScore} / ${quizI+(quizAnswered?1:0)}`;
 $('quiz-answers').innerHTML='';q.a.forEach((a,i)=>{let b=document.createElement('button');b.type='button';b.className='answer-btn';b.innerHTML=`<b>${String.fromCharCode(65+i)}.</b><span>${a}</span>`;b.addEventListener('click',()=>answerQuiz(i));$('quiz-answers').appendChild(b)});
 $('quiz-feedback').className='quiz-feedback';$('quiz-feedback').textContent='';$('quiz-next').disabled=true;$('quiz-next').textContent=quizI===quiz.length-1?'Vezi rezultatul →':'Următoarea întrebare →';$('quiz-progress-fill').style.width=`${100*quizI/quiz.length}%`;
}
function answerQuiz(i){if(quizAnswered)return;quizAnswered=true;const q=quiz[quizI],good=i===q.c;if(good)quizScore++;
 [...$('quiz-answers').children].forEach((b,j)=>{b.disabled=true;if(j===q.c)b.classList.add('correct');else if(j===i)b.classList.add('wrong')});
 $('quiz-feedback').className='quiz-feedback '+(good?'good':'bad');$('quiz-feedback').textContent=(good?'Corect. ':'Răspunsul nu este corect. ')+q.e;$('quiz-score').textContent=`${quizScore} / ${quizI+1}`;$('quiz-next').disabled=false;$('quiz-progress-fill').style.width=`${100*(quizI+1)/quiz.length}%`;
}
$('quiz-next').addEventListener('click',()=>{if(!quizAnswered)return;if(quizI===quiz.length-1){$('quiz-question').textContent=`Evaluare încheiată: ${quizScore} din ${quiz.length} răspunsuri corecte.`;$('quiz-answers').replaceChildren();$('quiz-feedback').className='quiz-feedback good';$('quiz-feedback').textContent=quizScore>=8?'Conceptele principale sunt stăpânite. Recomandare: verifică și exemplele de cod.':'Reia secțiunile pentru care ai greșit și repetă experimentul.';$('quiz-next').disabled=true;$('quiz-progress-fill').style.width='100%';return}quizI++;quizAnswered=false;drawQuiz()});
$('quiz-restart').addEventListener('click',()=>{quizI=0;quizScore=0;quizAnswered=false;drawQuiz()});drawQuiz();

// Navigație, temă și progres
$('print-button').addEventListener('click',()=>window.print());
$('theme-button')?.addEventListener('click',()=>{document.body.classList.toggle('dark');try{localStorage.setItem('cv-theme',document.body.classList.contains('dark')?'dark':'light')}catch(e){}});
document.body.classList.remove('dark');try{localStorage.removeItem('cv-theme')}catch(e){}
const navLinks=[...document.querySelectorAll('.nav-link')],observed=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-15% 0px -75% 0px',threshold:0});observed.forEach(el=>observer.observe(el));
let scrolled=0;function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;scrolled=max>0?cap(window.scrollY/max*100,0,100):100;$('course-progress').textContent=Math.round(scrolled)+'%';$('progress-fill').style.width=scrolled+'%'}
window.addEventListener('scroll',updateProgress,{passive:true});window.addEventListener('resize',updateProgress);updateProgress();


// 12b. Preview imagini, U-Net și DeepLab / atrous
(function(){
  const lightbox=$('image-lightbox');
  const lightImg=$('image-lightbox-img');
  const lightCaption=$('image-lightbox-caption');
  function resolveCaption(el){
    return el.closest('[data-lightbox-caption]')?.dataset.lightboxCaption || el.closest('figure')?.querySelector('figcaption')?.innerText || el.getAttribute('alt') || 'Preview imagine';
  }
  function openLightbox(src,caption){
    lightImg.src=src; lightCaption.textContent=caption||'Preview imagine';
    lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
  }
  function closeLightbox(){lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lightImg.src=''; document.body.style.overflow='';}
  document.addEventListener('click',e=>{
    const img=e.target.closest('.figure-card img, .zoomable-figure img, .detector-diagram img');
    if(img){ e.preventDefault(); openLightbox(img.currentSrc||img.src, resolveCaption(img)); return; }
    if(e.target.dataset.closeLightbox || e.target.id==='image-lightbox-close') closeLightbox();
  });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape' && lightbox.classList.contains('open')) closeLightbox(); });

    // U-Net: forward execution order; all clickable blocks occupy non-overlapping SVG boxes.
  const unetData={
    input:{phase:'Imagine de intrare',title:'Imaginea de intrare',shape:'(B, 3, 512, 512)',op:'Normalizare RGB',gain:'Geometrie de referință',text:'Pornim de la un tensor cu trei canale și o rezoluție spațială fixă. Pixelii reprezintă semnalul vizual, nu clase deja recunoscute.',why:'Valorile RGB sunt normalizate înainte de prima convoluție. Rețeaua va învăța filtre care transformă intensitățile în reprezentări utile pentru segmentare.',takeaway:'Toate măștile finale vor putea fi raportate la aceeași grilă de pixeli. Exemplul folosește o intrare de 512 × 512, dar arhitectura poate procesa și alte dimensiuni compatibile.',meta:[['Ce înseamnă B','Numărul de imagini din minibatch'],['Ce înseamnă C','Numărul de canale de la intrare: 3 pentru RGB']]},
    enc1:{phase:'Extracție de trăsături fine',title:'Encoder 1 · contururi și texturi',shape:'(B, 64, 512, 512)',op:'Două convoluții 3 × 3',gain:'Detalii locale precise',text:'Primele două convoluții extrag contururi, colțuri și texturi. Nu reducem încă rezoluția, pentru a păstra pozițiile exacte ale marginilor.',why:'Aceste trăsături sunt utile pentru separarea regiunilor cu frontiere subtile. Mai târziu, skip connection-ul de la acest nivel va readuce aceste detalii în decoder.',takeaway:'Feature map-ul cu 64 de canale este salvat pentru concatenare și apoi trimis către prima operație de downsampling.',meta:[['Câmp receptiv','Încă relativ local'],['Legătură skip','Encoder 1 → Decoder 1, aceeași rezoluție']]},
    enc2:{phase:'Prima reducere de rezoluție',title:'Encoder 2 · reprezentări de scară medie',shape:'(B, 128, 256, 256)',op:'Pooling ×2 + convoluții',gain:'Context pe regiuni mai mari',text:'Reducem rezoluția la jumătate. Fiecare poziție agregă informație dintr-o zonă mai largă, iar numărul de canale crește de la 64 la 128.',why:'Un pixel izolat nu spune întotdeauna dacă aparține unei mașini, unui drum sau unui organ. Contextul de la o scară mai mare ajută la decizii semantice mai robuste.',takeaway:'Păstrăm reprezentarea de 256 × 256 pentru un skip connection către Decoder 2, apoi coborâm la nivelul următor.',meta:[['Downsampling','H, W se înjumătățesc'],['Legătură skip','Encoder 2 → Decoder 2']]},
    enc3:{phase:'Context regional',title:'Encoder 3 · structuri și părți de obiect',shape:'(B, 256, 128, 128)',op:'Pooling ×2 + convoluții',gain:'Recunoașterea structurilor',text:'La a treia scară, reprezentarea este mai compactă și poate surprinde structuri vizuale complexe, cum ar fi regiuni anatomice sau părți mari ale unui obiect.',why:'Creșterea câmpului receptiv permite combinarea informațiilor din mai multe regiuni fără creșterea proporțională a costului de calcul spațial.',takeaway:'Salvăm trăsături de 128 × 128 pentru Decoder 3; encoderul efectuează încă o reducere către bottleneck.',meta:[['Rezoluție','Un sfert din H și W de la intrare'],['Legătură skip','Encoder 3 → Decoder 3']]},
    bottleneck:{phase:'Integrarea contextului',title:'Bottleneck · reprezentare semantică',shape:'(B, 512, 64, 64)',op:'Pooling ×2 + convoluții',gain:'Context larg',text:'Acesta este nivelul cu rezoluția cea mai mică din schemă și cel mai mare număr de canale. Integrează structuri vizuale și relații semantice pe o zonă extinsă.',why:'Modelul poate recunoaște tipul unei regiuni folosind contextul întregii scene. Compresia oferă semantică, dar reduce precizia de localizare, ceea ce explică nevoia de skip connections.',takeaway:'Trăsăturile compacte sunt mărite spațial și trimise primului bloc decoder.',meta:[['Scară','64 × 64 în acest exemplu'],['Rol','Ce este obiectul sau regiunea, nu încă unde este conturul exact']]},
    dec3:{phase:'Prima etapă de reconstrucție',title:'Decoder 3 · restaurarea primei scări',shape:'(B, 256, 128, 128)',op:'Upsampling + concatenare',gain:'Context + detalii regionale',text:'Mărim rezoluția la 128 × 128 și concatenăm harta upsampled cu trăsăturile din Encoder 3, apoi aplicăm convoluții de rafinare.',why:'După downsampling, informația geometrică fină este mai slabă. Concatenarea cu un nivel de aceeași scară reconstruiește relația dintre obiecte și poziția lor în imagine.',takeaway:'Rezultatul cu 256 de canale trece la următorul nivel decoder, pentru o nouă creștere a rezoluției.',meta:[['Regulă U-Net','Concatenare, nu simplă adunare'],['Dimensiuni spațiale','Aceleași ca la Encoder 3']]},
    dec2:{phase:'Rafinarea regiunilor',title:'Decoder 2 · combinarea semanticii cu textura',shape:'(B, 128, 256, 256)',op:'Upsampling + concatenare',gain:'Limite regionale mai precise',text:'Mărim harta la 256 × 256 și adăugăm trăsăturile din Encoder 2. Rețeaua combină din nou indicii semantice cu detaliile regionale.',why:'Această fuziune reduce blocurile prea groase din mască și ajută modelul să localizeze mai bine limitele dintre două regiuni.',takeaway:'Feature map-ul rezultat este pregătit pentru ultimul nivel de reconstrucție, la rezoluția imaginii originale.',meta:[['Beneficiu','Granularitate mai mare a segmentării'],['Dimensiuni spațiale','Aceleași ca la Encoder 2']]},
    dec1:{phase:'Detalii spațiale finale',title:'Decoder 1 · reconstruirea contururilor',shape:'(B, 64, 512, 512)',op:'Upsampling + concatenare',gain:'Contururi fine',text:'Revenim la rezoluția de intrare și folosim trăsăturile de la Encoder 1. Acum sunt disponibile simultan contextul profund și marginile locale precise.',why:'Segmentarea este evaluată pixel cu pixel. Acest bloc poate îmbunătăți contururile vaselor de sânge, ale defectelor industriale sau ale obiectelor din imagini stradale.',takeaway:'Ieșirea cu 64 de canale intră în capul de predicție, care calculează scorurile pentru fiecare clasă și pixel.',meta:[['Rezoluție','512 × 512'],['Legătură skip','Encoder 1 → Decoder 1']]},
    output:{phase:'Predicția densă',title:'Output · scoruri pentru fiecare pixel',shape:'(B, C, 512, 512)',op:'Convoluție 1 × 1',gain:'Hartă de segmentare',text:'Ultimul strat proiectează reprezentările în C canale, câte unul pentru fiecare clasă. În segmentarea multiclasă aplicăm argmax peste dimensiunea claselor.',why:'Modelul nu produce o singură clasă pentru întreaga imagine. Produce o predicție separată pentru fiecare pixel, motiv pentru care ieșirea este o hartă densă.',takeaway:'Se obține o hartă (B, H, W) după argmax, sau o mască binară după sigmoid și prag în formulările cu o singură clasă pozitivă.',meta:[['Exemplu','drum / trotuar / mașină / pieton'],['Metrici','mIoU și Dice']]},
    skip:{phase:'Legături laterale între nivele',title:'Skip connections · păstrarea localizării',shape:'3 perechi de feature maps',op:'Copiere + concatenare',gain:'Precizie spațială',text:'Cele trei linii verzi unesc nivelurile de encoder și decoder care au aceeași dimensiune spațială: 512², 256² și 128².',why:'Encoderul profund înțelege contextul, dar pierde informație geometrică prin downsampling. Skip connections readuc detaliile de la scări corespunzătoare, fără să retraversăm întregul encoder.',takeaway:'În U-Net clasic, caracteristicile sunt concatenate pe dimensiunea canalelor, apoi prelucrate de convoluții. Aceasta este una dintre diferențele cheie față de simpla interpolare la rezoluție mare.',meta:[['512 × 512','Encoder 1 → Decoder 1'],['256 × 256','Encoder 2 → Decoder 2'],['128 × 128','Encoder 3 → Decoder 3']]}
  };
  const unetOrder=['input','enc1','enc2','enc3','bottleneck','dec3','dec2','dec1','output','skip'];
  let currentUnet=0,unetInterval=null;
  const pauseUnet=()=>{if(unetInterval!==null){clearInterval(unetInterval);unetInterval=null;}$('unet-play').textContent='▶ Redă etapele';$('unet-play').setAttribute('aria-pressed','false');};
  function setUnetStage(key,fromAnimation=false){
    const item=unetData[key]||unetData.input;
    if(!fromAnimation)pauseUnet();
    currentUnet=Math.max(0,unetOrder.indexOf(key));
    $('unet-current').textContent=`${currentUnet+1} / ${unetOrder.length}`;
    $('unet-phase').textContent=item.phase;
    $('unet-stage-title').textContent=item.title;
    $('unet-stage-text').textContent=item.text;
    $('unet-stage-shape').textContent=item.shape;
    $('unet-stage-op').textContent=item.op;
    $('unet-stage-gain').textContent=item.gain;
    $('unet-stage-why').textContent=item.why;
    $('unet-stage-takeaway').textContent=item.takeaway;
    $('unet-stage-meta').innerHTML=item.meta.map(([a,b])=>`<div><strong>${a}</strong><span>${b}</span></div>`).join('');
    document.querySelectorAll('#unet-interactiv [data-stage]').forEach(n=>{
      const active=n.dataset.stage===key;
      n.classList.toggle('active',active);
      if(n.tagName.toLowerCase()==='button')n.setAttribute('aria-pressed',String(active));
    });
    document.querySelectorAll('#unet-interactiv [data-route]').forEach(n=>n.classList.toggle('active',n.dataset.route===key));
    $('unet-prev').disabled=currentUnet===0;
    $('unet-next').disabled=currentUnet===unetOrder.length-1;
  }
  document.querySelectorAll('#unet-interactiv [data-stage]').forEach(node=>{
    node.addEventListener('click',()=>setUnetStage(node.dataset.stage));
    if(node.tagName.toLowerCase()!=='button')node.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();setUnetStage(node.dataset.stage);}
    });
  });
  $('unet-prev').addEventListener('click',()=>setUnetStage(unetOrder[Math.max(0,currentUnet-1)]));
  $('unet-next').addEventListener('click',()=>setUnetStage(unetOrder[Math.min(unetOrder.length-1,currentUnet+1)]));
  $('unet-play').addEventListener('click',()=>{
    if(unetInterval!==null){pauseUnet();return;}
    if(currentUnet===unetOrder.length-1)setUnetStage(unetOrder[0]);
    $('unet-play').textContent='Ⅱ Oprește animația';$('unet-play').setAttribute('aria-pressed','true');
    unetInterval=setInterval(()=>{
      if(currentUnet>=unetOrder.length-1){pauseUnet();return;}
      setUnetStage(unetOrder[currentUnet+1],true);
    },2200);
  });
  setUnetStage('input');

const deeplabPanels={
    aspp:{title:'ASPP · context multi-scală',text:'Atrous Spatial Pyramid Pooling trimite aceeași reprezentare prin mai multe ramuri cu rate de dilatare diferite. Rezultatul este un amestec de context local și global.',points:[['De ce este util','obiectele și regiunile pot apărea la scări foarte diferite'],['Ce produce','feature maps complementare, concatenate înainte de capul final']]},
    decoder:{title:'Decoder · reconstruirea rezoluției',text:'DeepLabV3+ adaugă un decoder ușor care combină ieșirea ASPP cu low-level features din straturile timpurii. Astfel se rafinează marginile și se reduc artefactele de contur.',points:[['Diferență față de U-Net','decoderul este mai suplu și nu neapărat complet simetric'],['Unde ajută','delimitarea obiectelor mici și contururile subțiri']]},
    encoder:{title:'Encoder + atrous convolution',text:'Prin atrous convolution, backbone-ul menține o rezoluție mai bună a reprezentării și capturează context mai larg fără a crește numărul de greutăți.',points:[['Ideea centrală','mai puțin downsampling, mai mult context per filtrare'],['Legătură directă','acesta este motivul pentru care DeepLab este foarte folosit în segmentare semantică']]}
  };
  function setDeeplabPanel(key){
    const item=deeplabPanels[key]||deeplabPanels.encoder;
    $('deeplab-inline-title').textContent=item.title;
    $('deeplab-inline-text').textContent=item.text;
    $('deeplab-inline-points').innerHTML=item.points.map(([a,b])=>`<div class="mini"><strong>${a}</strong><span>${b}</span></div>`).join('');
  }
  setDeeplabPanel('encoder');
  document.querySelectorAll('#deeplab-figure .hotspot').forEach(btn=>btn.addEventListener('click',e=>{
    e.stopPropagation();
    const panel=btn.dataset.previewPanel;
    if(panel) setDeeplabPanel(panel);
    if(btn.dataset.scrollTarget){ setDeeplabPanel('encoder'); document.getElementById(btn.dataset.scrollTarget)?.scrollIntoView({behavior:'smooth',block:'start'}); }
  }));

  const atrousDescriptions={
    1:{caption:'Cu r = 1 obținem convoluția standard. Toate pozițiile din vecinătatea 3 × 3 sunt eșantionate fără goluri.',eff:'3 × 3',spacing:'0 pixeli între vecini'},
    2:{caption:'Cu r = 2, elementele nucleului sar peste câte un pixel. Zona acoperită devine 5 × 5, dar păstrăm tot 9 greutăți.',eff:'5 × 5',spacing:'1 pixel liber între vecini'},
    3:{caption:'Cu r = 3, câmpul receptiv efectiv devine 7 × 7. Modelul vede mai mult context fără pooling suplimentar.',eff:'7 × 7',spacing:'2 pixeli liberi între vecini'},
    6:{caption:'Cu r = 6, kernelul acoperă o zonă foarte mare. Acest tip de rată este reprezentativ pentru ramurile late din ASPP.',eff:'13 × 13',spacing:'5 pixeli liberi între vecini'}
  };
  const atrousSteps={
    1:{title:'Pasul 1 · nucleul standard',text:'Pornim de la un filtru 3 × 3 clasic. El citește 9 poziții adiacente și produce o singură activare în centrul ferestrei curente.',points:[['Ce rămâne fix','numărul de parametri: 9 greutăți pe canal'],['Ce observi','toate pozițiile eșantionate sunt vecine, fără spații între ele']],extra:'Este baza de comparație. Atrous convolution nu schimbă forma logică a măștii 3 × 3, ci doar locul din feature map unde sunt aplicate aceleași greutăți.',link:'În practică, aceasta este ramura locală din orice rețea: surprinde contururi și texturi scurte.'},
    2:{title:'Pasul 2 · introducerea dilatării',text:'Multiplicăm deplasarea indexului prin rata r. Astfel, elementele kernelului se împrăștie pe o zonă mai mare și apar „goluri” între punctele eșantionate.',points:[['Ce se schimbă','pozițiile citite din x(i + r·m, j + r·n)'],['Ce nu se schimbă','greutățile w(m,n) și numărul lor total']],extra:'Dacă r crește, distanța dintre probe crește. Pentru r = 2, fiecare vecin al nucleului este separat de un pixel nefolosit.',link:'Aceasta explică termenul dilated / atrous: nucleul se comportă ca și cum ar fi „rarificat”, dar fără a adăuga greutăți noi.'},
    3:{title:'Pasul 3 · câmpul receptiv efectiv',text:'Formula Kₑf = K + (K − 1)(r − 1) arată cât de mare devine zona acoperită efectiv. Pentru un 3 × 3, r = 6 conduce la un 13 × 13 efectiv.',points:[['Beneficiu','mai mult context fără pooling suplimentar'],['Risc','dacă exagerezi, poți obține eşantionare prea rară și poți pierde detalii fine']],extra:'Din perspectiva costului, atrous convolution este eficientă: aceeași cantitate de parametri, dar un context mult mai larg.',link:'În segmentare semantică acest lucru este crucial, deoarece clasa unui pixel depinde adesea de vecinătăți mai mari decât câțiva pixeli.'},
    4:{title:'Pasul 4 · ASPP și multi-scala',text:'DeepLabV3+ folosește mai multe ramuri în paralel: rate mici pentru detalii locale, rate mari pentru context regional și image pooling pentru aproape-context global.',points:[['Idee cheie','nicio singură scară nu este suficientă pentru toate obiectele'],['Rezultat','concatenăm feature maps complementare înainte de decoder']],extra:'Privește benzile ASPP de mai jos ca pe patru „lentile” diferite asupra aceleiași imagini. Fiecare scoate în evidență alt tip de structură.',link:'Acesta este motivul pentru care DeepLabV3+ gestionează bine atât obiecte relativ mici, cât și regiuni „stuff” ample, precum drum, cer sau vegetație.'},
    5:{title:'Pasul 5 · fuziunea în decoder',text:'Ieșirea ASPP este combinată cu low-level features din encoder. Atrous convolution aduce contextul, iar decoderul readuce margini fine și aliniere spațială mai bună.',points:[['Ce vine din ASPP','context semantic multi-scală'],['Ce vine din low-level features','margini, localizare, texturi și contururi']],extra:'Fără decoder, harta semantică ar rămâne mai grosieră. Fără atrous, contextul ar fi mai slab. Împreună, ele produc segmentări dense și precise.',link:'Această separare clară între context și rafinare explică de ce DeepLabV3+ este atât de des folosit în probleme reale de segmentare semantică.'}
  };
  let currentAtrousRate=1, currentAtrousStep=1;
  function fillKernel(step){
    const kp=$('kernel-preview'); kp.innerHTML='';
    for(let i=0;i<9;i++){
      const d=document.createElement('div');
      d.textContent=String(i+1);
      if(step>=1) d.classList.add('active');
      kp.appendChild(d);
    }
  }
  function fillSequence(step){
    const items=[
      ['Centru','alegem pixelul curent și extragem vecinătatea sa relevantă'],
      ['Eșantionare','selectăm pozițiile din feature map conform ratei de dilatare'],
      ['Ponderare','fiecare probă este înmulțită cu o greutate a nucleului'],
      ['Agregare','suma ponderată produce activarea finală pentru ieșire']
    ];
    $('atrous-sequence').innerHTML=items.map((it,idx)=>`<div class="seq-item ${idx<step?'active':''}"><b>${idx+1}</b><div><strong>${it[0]}</strong><span>${it[1]}</span></div></div>`).join('');
  }
  function setAtrousStep(step){
    currentAtrousStep=Number(step);
    const item=atrousSteps[currentAtrousStep];
    $('atrous-step-title').textContent=item.title;
    $('atrous-step-text').textContent=item.text;
    $('atrous-step-points').innerHTML=item.points.map(([a,b])=>`<div class="mini"><strong>${a}</strong><span>${b}</span></div>`).join('');
    $('atrous-step-extra').textContent=item.extra;
    $('atrous-step-link').textContent=item.link;
    document.querySelectorAll('#atrous-stepper button').forEach(b=>b.classList.toggle('active',Number(b.dataset.step)===currentAtrousStep));
    fillKernel(currentAtrousStep);
    fillSequence(currentAtrousStep);
    renderAtrous(currentAtrousRate,currentAtrousStep);
  }
  function renderAtrous(rate,step){
    rate=Number(rate); step=Number(step||currentAtrousStep); currentAtrousRate=rate;
    $('atrous-rate').textContent=String(rate);
    $('atrous-effective').textContent=atrousDescriptions[rate].eff;
    $('atrous-spacing').textContent=atrousDescriptions[rate].spacing;
    $('atrous-caption').textContent=atrousDescriptions[rate].caption;
    document.querySelectorAll('#dilation-controls button').forEach(b=>b.classList.toggle('active',Number(b.dataset.rate)===rate));
    const grid=$('atrous-grid'); grid.innerHTML='';
    const size=13, center=6;
    const sampled=[];
    for(let di=-1; di<=1; di++) for(let dj=-1; dj<=1; dj++) sampled.push([center+di*rate,center+dj*rate]);
    const sampledSet=new Set(sampled.map(([r,c])=>`${r},${c}`));
    const focusSpan = 1 + (rate-1)*2;
    for(let r=0;r<size;r++) for(let c=0;c<size;c++){
      const cell=document.createElement('div'); cell.className='ag-cell';
      const key=`${r},${c}`;
      if(r===center && c===center) cell.classList.add('center');
      if(sampledSet.has(key)) cell.classList.add('sampled');
      if(step===1){
        if(Math.abs(r-center)<=1 && Math.abs(c-center)<=1){cell.classList.add('step-focus'); if(sampledSet.has(key)) cell.textContent='w';}
      } else if(step===2){
        if(sampledSet.has(key)){cell.classList.add('step-focus'); cell.textContent='x';}
      } else if(step>=3){
        if(Math.abs(r-center)<=focusSpan && Math.abs(c-center)<=focusSpan){cell.classList.add('step-focus');}
        if(sampledSet.has(key)) cell.textContent='x';
      }
      grid.appendChild(cell);
    }
    const overlayMap={
      1:`Kernel 3 × 3 standard aplicat în centrul ferestrei`,
      2:`Rata r = ${rate} mută probele la distanță mai mare`,
      3:`Zona acoperită efectiv este ${atrousDescriptions[rate].eff}`,
      4:`ASPP folosește mai multe ramuri cu rate diferite în paralel`,
      5:`Contextul din ASPP este fuzionat apoi cu low-level features`
    };
    $('atrous-overlay-note').textContent=overlayMap[step];
    const activeBranch = step<4 ? 'b1' : (rate===1?'b1':rate===6?'b6':'b12');
    document.querySelectorAll('#atrous-aspp-strip > div').forEach(div=>div.classList.toggle('active', div.dataset.branch===activeBranch || (step===4 && div.dataset.branch==='pool') || (step===5 && (div.dataset.branch===activeBranch || div.dataset.branch==='pool'))));
  }
  document.querySelectorAll('#dilation-controls button').forEach(btn=>btn.addEventListener('click',()=>renderAtrous(btn.dataset.rate,currentAtrousStep)));
  document.querySelectorAll('#atrous-stepper button').forEach(btn=>btn.addEventListener('click',()=>setAtrousStep(btn.dataset.step)));
  setAtrousStep(1);
})();
