(() => {
"use strict";
const lessons = window.IA_ACS_COURSE || [];
const $ = id => document.getElementById(id);
const list = $("lecture-list");
const key = "onia:ia-acs:read-v1";
let read = new Set();
try { read = new Set(JSON.parse(localStorage.getItem(key) || "[]")); } catch (_) {}
let current = 1;
const escapeHtml = x => String(x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId = id => lessons.find(l => l.id === id);
const persist = () => { try { localStorage.setItem(key, JSON.stringify([...read])); } catch (_) {} $("viewed-count").textContent = read.size; };
function renderList(query="") {
 const q=query.toLocaleLowerCase('ro').trim();
 const matches=lessons.filter(l => [l.title,l.category,l.description,...l.tags].join(' ').toLocaleLowerCase('ro').includes(q));
 list.replaceChildren();
 if(!matches.length){list.innerHTML='<p class="ia-empty">Nu există prelegeri pentru această căutare.</p>';return;}
 let prev='';
 for(const l of matches){
   if(l.category!==prev){const h=document.createElement('div');h.className='ia-category';h.textContent=l.category;list.appendChild(h);prev=l.category;}
   const row=document.createElement('div');row.className='ia-entry'+(current===l.id?' selected':'');
   const sel=document.createElement('button');sel.className='ia-choice';sel.type='button';sel.setAttribute('aria-label','Afișează '+l.title);
   sel.setAttribute('aria-current',current===l.id?'true':'false');
   sel.innerHTML='<span class="ia-number">'+String(l.id).padStart(2,'0')+'</span><img src="'+escapeHtml(l.thumbnail)+'" alt="" loading="lazy" width="68" height="45"><span><span class="ia-name">'+escapeHtml(l.title)+'</span><span class="ia-pages">'+l.pages+' pagini</span></span>';
   sel.addEventListener('click',()=>show(l.id,true));
   const chk=document.createElement('input');chk.type='checkbox';chk.className='ia-complete';chk.checked=read.has(l.id);
   chk.setAttribute('aria-label','Marchează ca parcurs: '+l.title);
   chk.addEventListener('change',()=>{if(chk.checked)read.add(l.id);else read.delete(l.id);persist();});
   row.append(sel,chk);list.appendChild(row);
 }
}
function show(id, updateHash=false){
 const l=byId(id);if(!l)return;
 current=l.id;
 $('current-index').textContent=l.id===18?'MATERIAL COMPLEMENTAR':'CURS '+String(l.id).padStart(2,'0');
 $('current-title').textContent=l.title;
 $('current-meta').textContent=l.category+' · '+l.pages+' pagini';
 $('current-description').textContent=l.description;
 $('current-authors').textContent='Material: '+l.authors;
 $('current-tags').replaceChildren(...l.tags.map(t=>{const el=document.createElement('span');el.textContent=t;return el;}));
 const viewer=$('pdf-viewer');viewer.title='Prezentare PDF: '+l.title;
 viewer.src=l.file+'#view=FitH&toolbar=1&navpanes=0';
 $('pdf-open').href=l.file;
 $('pdf-download').href=l.file;
 $('pdf-download').setAttribute('download',l.original);
 $('next-lecture').textContent=l.id===lessons.length?'Înapoi la primul curs ↺':'Cursul următor →';
 renderList($('course-search').value);
 if(updateHash) { history.replaceState(null,'','#curs-'+id);if(window.innerWidth<1020){$('pdf-container').scrollIntoView({block:'start',behavior:'smooth'});} }
}
$('course-search').addEventListener('input',e=>renderList(e.target.value));
$('next-lecture').addEventListener('click',()=>show((current%lessons.length)+1,true));
window.addEventListener('hashchange',()=>{const m=location.hash.match(/^#curs-(\d+)$/);if(m)show(+m[1]);});
const hash=location.hash.match(/^#curs-(\d+)$/);
show(hash?Number(hash[1]):1);
persist();
})();
