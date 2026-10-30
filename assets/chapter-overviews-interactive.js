/* Două mini-laboratoare pentru paginile generale ale capitolelor ONIA. Fără backend. */
(() => {
  'use strict';
  const examples = [
    {p:0.96,y:1}, {p:0.88,y:1}, {p:0.77,y:0}, {p:0.71,y:1}, {p:0.62,y:0},
    {p:0.54,y:1}, {p:0.43,y:0}, {p:0.34,y:0}, {p:0.21,y:0}, {p:0.12,y:1}
  ];
  const fmt = value => value.toLocaleString('ro-RO',{minimumFractionDigits:2, maximumFractionDigits:2});
  function updateThreshold() {
    const slider = document.getElementById('ov-threshold');
    const metrics = document.getElementById('ov-supervised-results');
    const cases = document.getElementById('ov-supervised-cases');
    if (!slider || !metrics || !cases) return;
    const threshold = Number(slider.value);
    document.getElementById('ov-threshold-value').textContent = fmt(threshold);
    let tp=0,fp=0,tn=0,fn=0;
    for (const sample of examples) {
      const prediction = sample.p >= threshold ? 1 : 0;
      if (prediction && sample.y) tp++;
      else if (prediction && !sample.y) fp++;
      else if (!prediction && !sample.y) tn++;
      else fn++;
    }
    const accuracy=(tp+tn)/examples.length;
    const precision=(tp+fp) ? tp/(tp+fp) : 0;
    const recall=(tp+fn) ? tp/(tp+fn) : 0;
    const f1=(precision+recall) ? 2*precision*recall/(precision+recall) : 0;
    const vals=[['Accuracy',accuracy],['Precision',precision],['Recall',recall],['F1',f1]];
    metrics.innerHTML=vals.map(([name,value])=>`<div class="chov-demo-metric"><strong>${fmt(value)}</strong><span>${name}</span></div>`).join('');
    cases.innerHTML = examples.map((item,i)=>{
      const prediction=item.p>=threshold ? 1 : 0;
      return `<div class="chov-case ${prediction===item.y?'correct':'wrong'}"><strong>E${i+1}: ${fmt(item.p)}</strong><span>Real: ${item.y} · Prezis: ${prediction}</span></div>`;
    }).join('');
    const note = document.createElement('div');
    note.className='chov-stat-note';
    note.textContent=`TP = ${tp} · FP = ${fp} · FN = ${fn} · TN = ${tn} · Verde: predicție corectă; roșu: predicție greșită.`;
    const existing=document.querySelector('#ov-supervised-demo .chov-stat-note');
    if(existing)existing.remove();
    cases.after(note);
  }
  const points=[
    [1.25,1.7],[1.65,2.0],[2.2,1.1],[2.65,2.4],[1.8,3.0],
    [7.1,2.1],[7.9,1.7],[8.3,2.7],[6.7,2.8],[7.7,3.3],
    [4.0,6.5],[4.5,7.4],[5.1,6.9],[3.6,7.8]
  ];
  const COLORS=['#2872dc','#e36b65','#219f96'];
  let state=null;
  const initialCenters=k=>k===3 ? [[1.6,2.0],[7.7,2.5],[4.7,7.1]] : [[1.6,2.0],[7.7,2.5]];
  function resetKMeans(){
    const root=document.getElementById('ov-unsupervised-demo');
    if(!root) return;
    const k=Number(document.getElementById('ov-kmeans-k').value);
    state={k,centers:initialCenters(k),assignment:Array(points.length).fill(-1),step:0,iteration:0,phase:'Inițializare'};
    drawKMeans();
  }
  const distSquared=(a,b) => (a[0]-b[0])**2+(a[1]-b[1])**2;
  function assignKMeans(){
    if(!state)return;
    state.assignment=points.map(p=>state.centers.map(c=>distSquared(p,c)).reduce((b,d,i,arr)=>d < arr[b] ? i : b,0));
    state.step++;
    state.phase='Atribuire: fiecare punct este alocat centrului cel mai apropiat';
    drawKMeans();
  }
  function updateKMeans(){
    if(!state)return;
    if(state.assignment.every(a=>a<0)){state.phase='Mai întâi apasă „1. Atribuie punctele”.';drawKMeans();return;}
    const updated=state.centers.map((old,j)=>{
      const group=points.filter((_,i)=>state.assignment[i]===j);
      if(!group.length) return old;
      return [group.reduce((s,x)=>s+x[0],0)/group.length,group.reduce((s,x)=>s+x[1],0)/group.length];
    });
    state.centers=updated;
    state.iteration++;
    state.phase='Actualizare: fiecare centru devine media coordonatelor punctelor din cluster';
    drawKMeans();
  }
  function drawKMeans(){
    const svg=document.getElementById('ov-kmeans-svg');
    const status=document.getElementById('ov-kmeans-status');
    if(!svg||!status||!state)return;
    const sx=x=>44+x*56, sy=y=>294-y*31;
    const grid=[];
    for(let t=0;t<=9;t+=2){
      grid.push(`<line x1="${sx(t)}" y1="16" x2="${sx(t)}" y2="294" stroke="#b9c6d6" stroke-opacity=".28"/>`);
      grid.push(`<line x1="44" y1="${sy(t)}" x2="548" y2="${sy(t)}" stroke="#b9c6d6" stroke-opacity=".28"/>`);
      grid.push(`<text x="${sx(t)}" y="310" text-anchor="middle" fill="#74829a" font-size="10">${t}</text>`);
    }
    const routes=state.assignment.map((a,i)=>a<0?'':`<line x1="${sx(points[i][0])}" y1="${sy(points[i][1])}" x2="${sx(state.centers[a][0])}" y2="${sy(state.centers[a][1])}" stroke="${COLORS[a]}" stroke-dasharray="4 5" stroke-opacity=".36"/>`).join('');
    const nodes=points.map(([x,y],i)=>{
      const a=state.assignment[i];
      const fill=a>=0 ? COLORS[a] : '#7b879a';
      return `<circle cx="${sx(x)}" cy="${sy(y)}" r="8" fill="${fill}" stroke="white" stroke-width="1.8"><title>P${i+1}: (${x}; ${y})${a<0?'':', cluster '+(a+1)}</title></circle><text x="${sx(x)+10}" y="${sy(y)-9}" font-size="11" font-weight="700" fill="${fill}">P${i+1}</text>`;
    }).join('');
    const centers=state.centers.map(([x,y],j)=>`<g><circle cx="${sx(x)}" cy="${sy(y)}" r="15" fill="white" stroke="${COLORS[j]}" stroke-width="3"/><path d="M${sx(x)-8} ${sy(y)}h16M${sx(x)} ${sy(y)-8}v16" stroke="${COLORS[j]}" stroke-width="3" stroke-linecap="round"/><text x="${sx(x)+15}" y="${sy(y)+18}" font-size="12" font-weight="800" fill="${COLORS[j]}">C${j+1}</text></g>`).join('');
    svg.innerHTML=`<rect x="0" y="0" width="600" height="320" fill="transparent"/>${grid.join('')}${routes}${nodes}${centers}`;
    const inertia=state.assignment.every(a=>a>=0) ? points.reduce((sum,p,i)=>sum+distSquared(p,state.centers[state.assignment[i]]),0) : null;
    const groups=state.centers.map((c,j)=>{
      const members=points.map((_,i)=>state.assignment[i]===j?`P${i+1}`:null).filter(Boolean);
      return `<li><strong style="color:${COLORS[j]}">Cluster ${j+1}</strong>: ${members.length?members.join(', '):'nu are încă atribuiri'}<br/>Centru: (${fmt(c[0])}; ${fmt(c[1])})</li>`;
    }).join('');
    status.innerHTML=`<p><strong>${state.phase}</strong></p><p>Pași: ${state.step} · Mutări de centre: ${state.iteration}</p><ul>${groups}</ul><p><strong>WCSS:</strong> ${inertia===null?'se calculează după atribuiri':fmt(inertia)}</p><p>Centrele sunt marcate cu <strong>+</strong>; liniile punctate indică apartenența.</p>`;
  }
  document.addEventListener('input',e=>{
    if(e.target?.id==='ov-threshold')updateThreshold();
  });
  document.addEventListener('change',e=>{
    if(e.target?.id==='ov-kmeans-k')resetKMeans();
  });
  document.addEventListener('click',e=>{
    const target=e.target;
    if(target?.id==='ov-kmeans-assign')assignKMeans();
    if(target?.id==='ov-kmeans-update')updateKMeans();
    if(target?.id==='ov-kmeans-reset')resetKMeans();
  });
  window.ONIA_CHAPTER_OVERVIEW_INIT=()=>{
    if(document.getElementById('ov-supervised-demo'))updateThreshold();
    if(document.getElementById('ov-unsupervised-demo'))resetKMeans();
  };
})();
