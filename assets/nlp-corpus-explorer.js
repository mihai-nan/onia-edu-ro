(()=>{'use strict';
const app=document.getElementById('lab-app');
const samples={
  mixed:'101|sport|Meci de tenis decis în trei seturi\n102|sport|Echipa câștigă finala de fotbal\n103|tehnologie|Python este folosit pentru analiza datelor\n104|tehnologie|Un algoritm clasifică documente\n105|educatie|Elevii rezolvă probleme la matematică\n106|educatie|Manualul prezintă noțiuni de informatică\n107|sport|  MECI de tenis decis în trei seturi  \n108|tehnologie|\n109|sport|Manualul prezintă noțiuni de informatică\n110|educatie|Profesorii explică exerciții la clasă',
  imbalance:'201|legitim|Salut! Ne vedem la orele 10\n202|legitim|Am primit proiectul\n203|legitim|Mulțumesc pentru ajutor\n204|legitim|Mâine avem curs\n205|legitim|Fișierul a fost trimis\n206|legitim|Te rog verifică documentul\n207|legitim|Am terminat exercițiile\n208|legitim|Ne auzim după prânz\n209|legitim|Este în regulă\n210|spam|Câștigă un premiu, intră pe site!',
  short:'301|pozitiv|Îmi place!\n302|negativ|Nu recomand\n303|pozitiv|Foarte bun\n304|negativ|Foarte slab\n305|pozitiv|Excelent produs\n306|negativ|Nu mi-a plăcut'
};
let state={data:samples.mixed,lower:true,spaces:true,excludeEmpty:false,duplicates:false,metric:'words',top:8,selected:0};
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tok=t=>String(t).toLocaleLowerCase('ro-RO').match(/[\p{L}\p{N}]+/gu)||[];
const key=t=>{let x=String(t);if(state.spaces)x=x.trim().replace(/\s+/g,' ');if(state.lower)x=x.toLocaleLowerCase('ro-RO');return x};
const rows=()=>state.data.split(/\r?\n/).filter(Boolean).map((line,index)=>{const parts=line.split('|');const id=parts.shift()||'';const cls=parts.shift()||'';const text=parts.join('|');return {index,id:id.trim(),cls:cls.trim()||'—',text,clean:key(text),blank:!text.trim()}});
const sum=(a)=>a.reduce((x,y)=>x+y,0);
const counts=a=>{const m=new Map;for(const x of a)m.set(x,(m.get(x)||0)+1);return [...m.entries()].sort((a,b)=>b[1]-a[1]||String(a[0]).localeCompare(String(b[0]),'ro'))};
const chart=(pairs,top)=>{const data=pairs.slice(0,top);let max=Math.max(1,...data.map(x=>x[1]));return `<div class="bars">${data.map(([k,v])=>`<div class="baritem"><div class="bar" style="height:${Math.max(8,Math.round(120*v/max))}px"></div><b>${esc(k)}</b><div>${v}</div></div>`).join('')}</div>`};
const table=(headers,data)=>`<div style="overflow-x:auto"><table><thead><tr>${headers.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${data.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
function render(){
 const original=rows(), seen=new Map(), prepared=[];
 for(const r of original){const first=seen.get(r.clean);r.duplicate=!!r.clean&&first!==undefined;r.conflict=r.duplicate&&original[first].cls!==r.cls;if(!r.blank&&!r.duplicate)seen.set(r.clean,r.index);if(state.excludeEmpty&&r.blank)continue;if(state.duplicates&&r.duplicate)continue;prepared.push(r)}
 const blank=original.filter(x=>x.blank).length,dups=original.filter(x=>x.duplicate).length;
 const same=original.filter(x=>x.conflict).length;
 const lengths=prepared.map(r=>state.metric==='words'?tok(r.clean).length:r.clean.length);
 const tf=counts(prepared.flatMap(r=>tok(r.clean)));
 const freq=counts(prepared.map(r=>r.cls));
 const metricCards=[['Total rânduri',original.length],['După filtrare',prepared.length],['Vide',blank],['Duplicate',dups],['Contradicții detectate',same],['Termeni distincți',tf.length],['Lungime medie',prepared.length?(sum(lengths)/prepared.length).toFixed(1):'0']];
 const stats=metricCards.map(([name,val])=>`<div class="metric"><b>${esc(val)}</b><span>${esc(name)}</span></div>`).join('');
 const report=prepared.map((r,i)=>[r.id,r.cls,r.text||'(gol)',lengths[i],r.duplicate?'duplicat':'',r.conflict?'etichete diferite':'']);
 const input=`<h2>1. Modifică datele</h2><p class="muted">Un rând = <code>id|eticheta|text</code>. Încearcă apoi alte date și urmărește schimbările.</p><textarea id="corpusInput" style="min-height:265px;width:100%;font-size:12px;font-family:ui-monospace,monospace">${esc(state.data)}</textarea><div class="control"><label for="sample">Set demonstrativ</label><select id="sample"><option value="mixed">Date cu erori și duplicate</option><option value="imbalance">Clase dezechilibrate</option><option value="short">Texte foarte scurte</option></select></div><div class="control"><label><input id="lower" type="checkbox" ${state.lower?'checked':''}> Compară fără diferența majuscule/minuscule</label></div><div class="control"><label><input id="spaces" type="checkbox" ${state.spaces?'checked':''}> Normalizează spațiile pentru detectarea duplicatelor</label></div><div class="control"><label><input id="excludeEmpty" type="checkbox" ${state.excludeEmpty?'checked':''}> Exclude documentele goale din statistici</label></div><div class="control"><label><input id="duplicates" type="checkbox" ${state.duplicates?'checked':''}> Exclude duplicatele normalizate din statistici</label></div><div class="control"><label for="metric">Măsurarea lungimii</label><select id="metric"><option value="words" ${state.metric==='words'?'selected':''}>În cuvinte</option><option value="chars" ${state.metric==='chars'?'selected':''}>În caractere</option></select></div><div class="control"><label for="top">Termeni afișați: ${state.top}</label><input id="top" type="range" min="3" max="14" value="${state.top}"></div>`;
 const result=`<h2>2. Statistici calculate pe date</h2><div class="metric-row">${stats}</div><h3>Distribuția etichetelor</h3>${chart(freq,12)}<h3>Topul termenilor</h3>${chart(tf,state.top)}`;
 app.innerHTML=`<div class="grid"><section class="card pale">${input}</section><section class="card">${result}</section></div><section class="card" style="margin-top:14px"><h2>3. Urmărirea documentelor și a modificărilor</h2><p class="muted">Tabelul este calculat din datele introduse. O observație etichetată „duplicat” nu este automat o eroare; verifică și coloana privind etichetele contradictorii.</p>${table(['ID','Etichetă','Text','Lungime','Duplicat','Atenție'],report)}<div class="note">Diferența dintre frecvența totală a termenului și frecvența în documente: prima numără toate aparițiile, a doua numără documentele care îl conțin. Înainte de antrenarea TF-IDF, împarte datele în train și validation și învață vocabularul numai din train.</div></section>`;
 for(const id of ['lower','spaces','excludeEmpty','duplicates'])app.querySelector('#'+id).addEventListener('change',e=>{state[id]=e.target.checked;render()});
 for(const id of ['metric','top'])app.querySelector('#'+id).addEventListener('change',e=>{state[id]=id==='top'?Number(e.target.value):e.target.value;render()});
 app.querySelector('#corpusInput').addEventListener('change',e=>{state.data=e.target.value;render()});
 app.querySelector('#sample').addEventListener('change',e=>{state.data=samples[e.target.value];render()});
 }
render();
})();
