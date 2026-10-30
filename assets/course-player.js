(function(){
'use strict';
window.initCoursePage = function(courseId){
  const courses = window.ONIA_COURSES || [];
  const course = courses.find(c => c.id === courseId);
  if(!course) return;
  const $ = id => document.getElementById(id);
  const list = $('video-list'), panel = $('course-stage'), heading = $('lecture-title');
  const count = $('lecture-count'), out = $('video-yt'), search = $('video-search');
  const by = $('lecture-by'), status = $('lecture-status'), playlist = $('playlist-count');
  const key = 'onia_course_viewed_' + course.id;
  const safeId = id => /^[A-Za-z0-9_-]{11}$/.test(id||'') ? id : null;
  const playlistUrl = 'https://www.youtube.com/playlist?list=' + encodeURIComponent(course.playlist);
  let selected = 1, viewed = [];
  try{const v=JSON.parse(localStorage.getItem(key)||'[]'); viewed=Array.isArray(v)?v:[]}catch(_e){}
  function idAt(n){return safeId(course.ids[String(n)])}
  function titleAt(n){
    const known = course.titles[String(n)];
    return known && known.trim() ? known : 'Videoclipul ' + n;
  }
  function directUrl(id){return 'https://www.youtube.com/watch?v=' + encodeURIComponent(id)}
  function searchUrl(n){
    const q = [course.title, titleAt(n), course.subtitle].filter(Boolean).join(' ');
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
  }
  function setStage(id,n){
    panel.replaceChildren();
    const stage=document.createElement('div');stage.className='lecture-stage';
    if(id){
      const image = document.createElement('img');
      image.src='https://i.ytimg.com/vi/'+id+'/hqdefault.jpg';
      image.alt='Imaginea videoclipului '+n;
      image.loading='eager';
      stage.append(image);
      const overlay=document.createElement('a');
      overlay.href=directUrl(id);overlay.target='_blank';overlay.rel='noopener noreferrer';
      overlay.className='stage-cta';overlay.textContent='▶ Urmărește prelegerea pe YouTube';stage.append(overlay);
      // Embed only when the provider explicitly confirms embedding permission.
      if(course.embeddable && course.embeddable[String(n)]===true && location.protocol==='https:'){
        const frame=document.createElement('iframe');
        frame.src='https://www.youtube.com/embed/'+id+'?rel=0';
        frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        frame.referrerPolicy='strict-origin-when-cross-origin';frame.allowFullscreen=true;
        frame.loading='lazy';frame.title=titleAt(n);
        stage.replaceChildren(frame);
      }
    }else{
      const noid = document.createElement('div');
      noid.className='stage-unavailable';
      const h=document.createElement('strong');h.textContent=titleAt(n);
      const p=document.createElement('p');p.textContent='Caută videoclipul după titlu sau consultă playlistul oficial.';
      const a=document.createElement('a');a.href=searchUrl(n);a.target='_blank';a.rel='noopener noreferrer';
      a.className='button';a.textContent='Caută videoclipul pe YouTube ↗';
      noid.append(h,p,a);stage.append(noid);
    }
    panel.append(stage);
  }
  function go(n){
    n=Math.max(1,Math.min(course.n, Number(n)||1));selected=n;
    const id=idAt(n);heading.textContent=titleAt(n);count.textContent='VIDEO '+n+' / '+course.n+' · POZIȚIE ÎN PLAYLIST';
    out.href=id?directUrl(id):searchUrl(n);
    out.textContent=id?'▶ Deschide videoclipul pe YouTube ↗':'Caută videoclipul după titlu ↗';
    out.setAttribute('aria-label',id?'Deschide pe YouTube: '+titleAt(n):'Caută pe YouTube: '+titleAt(n));
    status.textContent=id ? 'Selectat din playlist · '+titleAt(n) : 'Titlul și poziția în playlist sunt afișate mai jos';
    if(by)by.textContent=course.by;
    setStage(id,n);
    try{history.replaceState(null,'',location.pathname+location.search+'#'+n)}catch(_e){}
    renderList();
  }
  function renderList(){
    const term=(search.value||'').toLocaleLowerCase('ro');list.replaceChildren();
    for(let n=1;n<=course.n;n++){
      const label=titleAt(n), id=idAt(n);
      if(term && !(n+' '+label).toLocaleLowerCase('ro').includes(term))continue;
      const row=document.createElement('div');row.className='lecture'+(selected===n?' active':'');
      const btn=document.createElement('button');btn.className='lecture-select';btn.type='button';
      btn.setAttribute('aria-current',selected===n?'true':'false');
      const number=document.createElement('span');number.className='num';number.textContent=n;
      const details=document.createElement('span');details.className='label';
      const strong=document.createElement('strong');strong.textContent=label;details.append(strong);
      if(!id){const small=document.createElement('small');small.textContent='Căutare după titlu';details.append(small)}
      btn.append(number,details);btn.onclick=()=>go(n);
      const ck=document.createElement('input');ck.type='checkbox';ck.className='check';
      ck.title='Marchează videoclipul ca parcurs';
      ck.setAttribute('aria-label','Marchează videoclipul '+n+' ca parcurs');
      ck.checked=viewed.includes(n);
      ck.onchange=()=>{
        const seen=new Set(viewed);if(ck.checked)seen.add(n);else seen.delete(n);
        viewed=Array.from(seen);
        try{localStorage.setItem(key,JSON.stringify(viewed))}catch(_e){}
      };
      row.append(btn,ck);list.append(row);
    }
  }
  if(playlist){playlist.href=playlistUrl}
  search.addEventListener('input',renderList);
  window.addEventListener('hashchange',()=>{
    const n=Number(location.hash.slice(1));if(n>=1&&n<=course.n&&n!==selected)go(n);
  });
  go(Number(location.hash.slice(1))||1);
};
})();
