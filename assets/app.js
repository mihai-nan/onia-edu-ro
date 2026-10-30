(() => {
  "use strict";
  const DATA = window.OLYMPIAD_DATA;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const main = $("#main");
  const nav = $("#chapter-nav");
  const shell = $("#app-shell");
  const searchOverlay = $("#search-overlay");
  const searchInput = $("#search-input");
  let expandedChapter = null;
  let searchSelection = 0;
  const ICONS = {
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    moon: '<path d="M20.5 14.3A8.7 8.7 0 0 1 9.7 3.5a8.8 8.8 0 1 0 10.8 10.8Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    "arrow-right": '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    "arrow-left": '<path d="M19 12H5m6 6-6-6 6-6"/>',
    "arrow-up-right": '<path d="M7 17 17 7M7 7h10v10"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    circle: '<circle cx="12" cy="12" r="9"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
    brain: '<path d="M12 18V5a3 3 0 0 0-5.4-1.8A4 4 0 0 0 4 9a4 4 0 0 0 0 6 4 4 0 0 0 3 6h1a4 4 0 0 0 4-3Zm0 0V5a3 3 0 0 1 5.4-1.8A4 4 0 0 1 20 9a4 4 0 0 1 0 6 4 4 0 0 1-3 6h-1a4 4 0 0 1-4-3Z"/>',
    sigma: '<path d="M18 5H6l6 7-6 7h12"/>',
    chart: '<path d="M4 20V4m0 16h16M7 16l4-5 3 2 6-8"/>',
    network: '<circle cx="12" cy="3.5" r="2.2"/><circle cx="5" cy="12" r="2.2"/><circle cx="19" cy="12" r="2.2"/><circle cx="12" cy="20.5" r="2.2"/><path d="M10.5 5 6.5 10m11-0-4-5M6.5 14l4 5m7-5-4 5"/>',
    sparkles: '<path d="m12 2 2 7 7 3-7 2-2 8-2-8-7-2 7-3zM19 2v4M17 4h4"/>',
    play: '<path d="m8 5 12 7-12 7z"/>',
    file: '<path d="M6 2h8l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M14 2v6h5M8 13h8M8 17h8"/>',
    code: '<path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-12-2 16"/>',
    experiment: '<path d="M9 3h6M10 3v7l-5 8a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-8V3M8 15h8"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    "external-link": '<path d="M13 5h6v6M19 5l-9 9M19 14v5H5V5h5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5"/>',
    filter: '<path d="M4 5h16l-6 7v6l-4 2v-8Z"/>',
    lightbulb: '<path d="M9 18h6m-5 4h4m-6-7a7 7 0 1 1 8 0l-1 3H9z"/>',
    trophy: '<path d="M7 3h10v7a5 5 0 0 1-10 0zM7 5H4v3a4 4 0 0 0 4 4m9-7h3v3a4 4 0 0 1-4 4m-4 3v5m-5 0h10"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-9h.01"/>',
    alert: '<path d="m12 3 10 18H2zM12 9v5m0 4h.01"/>',
    pencil: '<path d="m16 4 4 4-12 12-5 1 1-5z"/>'
  };
  function icon(name, size=18) { return `<svg class="svg-icon" aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.book}</svg>`; }
  function decorateIcons(root=document) { $$('[data-icon]', root).forEach(el => el.innerHTML = icon(el.dataset.icon)); }
  function esc(value='') { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function path(ch, sec) { return `#/${encodeURIComponent(ch.id)}${sec ? `/${encodeURIComponent(sec.id)}` : ''}`; }
  function locate() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    const [c, s] = h.split('/').filter(Boolean);
    const chapter = DATA.chapters.find(x => x.id === c);
    const section = chapter?.sections.find(x => x.id === s);
    return { chapter, section, unknown: Boolean(c && (!chapter || (s && !section))) };
  }
  const allSections = () => DATA.chapters.flatMap(ch => ch.sections.map(sec => ({chapter: ch, section: sec})));
  const totalSections = () => allSections().length;
  const sectionKey = (ch, sec) => `${ch.id}/${sec.id}`;
  const sessionFallback = new Map();
  const readState = (key, fallback) => { try { const v = localStorage.getItem(key); if (v !== null) return JSON.parse(v); } catch {} return sessionFallback.has(key) ? sessionFallback.get(key) : fallback; };
  const writeState = (key, data) => { sessionFallback.set(key, data); try { localStorage.setItem(key, JSON.stringify(data)); } catch {} };
  const done = () => readState('aiolympiad-completed', []);
  function isDone(ch, sec) { return done().includes(sectionKey(ch, sec)); }
  function toggleDone(ch, sec) {
    const key = sectionKey(ch, sec); const s = new Set(done());
    if (s.has(key)) s.delete(key); else s.add(key);
    writeState('aiolympiad-completed', [...s]);
    const loc = locate();
    renderNav(loc.chapter, loc.section);
    const finish = $('.lesson-finish');
    if (finish) {
      const completed = s.has(key);
      finish.querySelector('h3').textContent = completed ? 'Secțiune marcată ca parcursă' : 'Ai parcurs această secțiune?';
      finish.querySelector('p').textContent = completed ? 'Poți reveni oricând la materiale și exerciții.' : 'Marcheaz-o ca finalizată pentru a urmări progresul tău.';
      finish.querySelector('.finish-icon').innerHTML = icon(completed ? 'check-circle' : 'trophy', 24);
      const button = finish.querySelector('button');
      button.className = `btn ${completed ? 'btn-success' : 'btn-primary'}`;
      button.innerHTML = `${icon(completed ? 'check' : 'check-circle', 17)} ${completed ? 'Finalizată · Anulează' : 'Marchează ca finalizată'}`;
    }
  }
  function progress(ch=null) {
    const completed = done();
    const sections = ch ? ch.sections : allSections().map(p => p.section);
    const keys = ch ? ch.sections.map(s => sectionKey(ch, s)) : allSections().map(p => sectionKey(p.chapter, p.section));
    return {count: keys.filter(key => completed.includes(key)).length, total: sections.length};
  }
  function progressBar(n, d) { return `<div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="${d}" aria-valuenow="${n}"><span style="width:${d ? 100*n/d : 0}%"></span></div>`; }
  function renderNav(activeChapter, activeSection) {
    $('#chapter-count').textContent = String(DATA.chapters.length).padStart(2,'0');
    nav.innerHTML = DATA.chapters.map(ch => {
      const isExpanded = expandedChapter === ch.id;
      const active = ch.id === activeChapter?.id;
      const p = progress(ch);
      const links = (stage) => ch.sections.filter(sec => sec.stage === stage).map(s =>
         `<a class="nav-lesson ${activeSection?.id === s.id && active ? 'active':''}" href="${path(ch,s)}"><span class="nav-lesson-num">${isDone(ch,s) ? icon('check',12) : esc(s.number)}</span><span>${esc(s.title)}</span></a>`).join('');
      const general = links('general'), national = links('national');
      return `<div class="nav-chapter ${isExpanded ? 'expanded' : ''} ${active ? 'is-active' : ''}">
        <div class="nav-chapter-main"><a href="${path(ch)}" class="nav-chapter-link" title="Vezi capitolul ${esc(ch.title)}"><span class="side-ch-icon c-${esc(ch.color)}">${icon(ch.icon,17)}</span><span class="nav-ch-title">${esc(ch.shortTitle || ch.title)}<small>${ch.sections.length} secțiuni</small></span></a><button class="nav-expand" aria-expanded="${isExpanded}" aria-label="${isExpanded ? 'Restrânge' : 'Extinde'} ${esc(ch.title)}" data-expand="${esc(ch.id)}">${icon('chevron-down',16)}</button></div>
        ${isExpanded ? `<div class="nav-lessons">${general ? `${ch.id === 'nlp' ? '' : '<div class="nav-stage-label">PROGRAMĂ GENERALĂ</div>'}${general}` : ''}${national ? `<div class="nav-stage-label national-label">DOAR ETAPA NAȚIONALĂ</div>${national}`:''}</div>` : ''}
      </div>`;
    }).join('');
    $('[data-home-link]').classList.toggle('active', !activeChapter);
  }
  function breadcrumbs(ch, sec) {
    const parts = [`<a href="#/">Acasă</a>`];
    if (ch) parts.push(`<span class="crumb-divider">/</span><a href="${path(ch)}">${esc(ch.shortTitle || ch.title)}</a>`);
    if (sec) parts.push(`<span class="crumb-divider">/</span><span class="crumb-current">${esc(sec.title)}</span>`);
    $('#breadcrumbs').innerHTML = parts.join('');
  }
  function miniChapterCard(ch) {
    const gen = ch.sections.filter(s => s.stage === 'general').length;
    const nat = ch.sections.length - gen;
    return `<a class="chapter-card chapter-${esc(ch.color)}" href="${path(ch)}"><div class="chapter-card-top"><span class="chapter-icon c-${esc(ch.color)}">${icon(ch.icon,27)}</span><span class="chapter-no">CAPITOLUL ${esc(ch.number)}</span></div><div class="chapter-pill ${gen ? '' : 'stage-pill-national'}">${ch.id==='nlp' ? 'PARCURS NLP' : gen ? 'PROGRAMĂ GENERALĂ' : 'ETAPA NAȚIONALĂ'}</div><h3>${esc(ch.title)}</h3><p>${esc(ch.description)}</p><div class="chapter-card-bottom"><span>${icon('book',15)} ${ch.sections.length} secțiuni</span><span class="card-arrow">${icon('arrow-right',18)}</span></div><div class="card-stage-detail">${gen ? `<span>${gen} ${ch.id==='nlp' ? 'teme NLP' : 'generale'}</span>` : ''}${nat ? `<span class="nat-dot">${nat} pentru etapa națională</span>` : ''}</div></a>`;
  }
  function renderHome() {
    const generalCount = allSections().filter(x => x.section.stage === 'general').length;
    const nationalCount = totalSections() - generalCount;
    return `<div class="home-view">
      <div class="hero onia-hero"><div class="romanian-stripe" aria-hidden="true"><i></i><i></i><i></i></div><div class="hero-content"><div class="hero-eyebrow"><span class="ro-flag" aria-label="România"><i></i><i></i><i></i></span>${esc(DATA.eyebrow)}</div><h1>${esc(DATA.heroTitle)}</h1><div class="hero-subtitle">${esc(DATA.heroSubtitle || 'Resurse educaționale')}</div><p>${esc(DATA.heroDescription)}</p><div class="hero-actions"><a class="btn btn-white" href="${path(DATA.chapters[0])}">${icon('book',17)} Explorează programa ${icon('arrow-right',16)}</a><a href="cursuri.html" class="btn btn-ghost">Cursuri recomandate ${icon('play',17)}</a><a href="#national-program" class="btn btn-ghost" data-scroll-target="national-program">Etapa națională ${icon('arrow-right',16)}</a></div><div class="hero-inline-meta"><span>${icon('layers',15)} ${DATA.chapters.length} capitole</span><span>${icon('book',15)} ${totalSections()} secțiuni</span><span>${icon('sparkles',15)} ${allSections().filter(({section})=>(section.blocks||[]).length>0).length} lecții publicate</span></div></div><div class="hero-art" aria-hidden="true"><svg class="hero-network" viewBox="0 0 520 420" role="img"><defs><linearGradient id="chipBg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#1d4a93"/><stop offset="1" stop-color="#0d244b"/></linearGradient><linearGradient id="tricolorTrace" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#378DFF"/><stop offset=".5" stop-color="#FFD45B"/><stop offset="1" stop-color="#F4646C"/></linearGradient><filter id="chipGlow"><feGaussianBlur stdDeviation="9"/></filter><pattern id="dotMatrix" width="19" height="19" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#80bcff" opacity=".28"/></pattern></defs><circle cx="285" cy="213" r="166" stroke="#9ac6ff" stroke-opacity=".13" fill="none"/><circle cx="285" cy="213" r="126" stroke="#9ac6ff" stroke-opacity=".18" fill="none"/><circle cx="285" cy="213" r="91" stroke="#9ac6ff" stroke-opacity=".14" fill="none"/><path d="M35 290 115 240 173 269 207 207 118 125 48 154 M138 56 190 111 278 86 375 103 445 46 M404 186 474 160 M390 283 463 331 M278 338 225 386" fill="none" stroke="#6ea9f8" stroke-width="1.5" stroke-opacity=".38"/><path d="M50 76h102l54 54M39 360h115l55-57M450 75h-77l-42 47M470 369h-117l-41-42" fill="none" stroke="url(#tricolorTrace)" stroke-opacity=".7" stroke-width="2"/><path d="M32 95h70M32 104h90M32 113h50" stroke="#4F98FC" stroke-width="3" stroke-linecap="round" opacity=".65"/><rect x="171" y="107" width="232" height="217" rx="48" fill="#317fc3" opacity=".23" filter="url(#chipGlow)"/><rect x="191" y="126" width="190" height="188" rx="27" fill="url(#chipBg)" stroke="#B0D5FF" stroke-opacity=".68" stroke-width="2"/><rect x="207" y="142" width="158" height="156" rx="20" stroke="url(#tricolorTrace)" stroke-width="3.5" fill="url(#dotMatrix)"/><g stroke="#96CBFF" stroke-width="2" stroke-opacity=".7"><path d="M213 108v18M253 96v30M293 95v31M335 102v24M379 110v16M213 314v18M253 314v30M293 314v30M335 314v22M379 314v16M174 168h17M161 211h30M162 255h29M174 289h17M381 168h20M381 211h36M381 255h36M381 289h20"/></g><path d="M222 247v-36l31-23 33 23 31-23 33 23v36l-33 23-31-23-33 23z" stroke="white" stroke-opacity=".68" fill="none" stroke-width="1.5"/><g><circle cx="253" cy="188" r="6" fill="#3A9EFF"/><circle cx="317" cy="188" r="6" fill="#FFD258"/><circle cx="350" cy="211" r="6" fill="#FE7377"/><circle cx="253" cy="270" r="6" fill="#3A9EFF"/><circle cx="317" cy="270" r="6" fill="#FE7377"/><circle cx="286" cy="247" r="7" fill="#fff"/></g><text x="285" y="239" font-family="Space Grotesk, Arial, sans-serif" font-weight="700" font-size="50" letter-spacing="-4" fill="white" text-anchor="middle">IA</text><g fill="#A9D7FF"><circle cx="48" cy="154" r="4"/><circle cx="118" cy="125" r="5"/><circle cx="173" cy="269" r="5"/><circle cx="445" cy="46" r="4"/><circle cx="474" cy="160" r="4"/><circle cx="463" cy="331" r="5"/><circle cx="225" cy="386" r="4"/></g><g fill="#FFCF59"><circle cx="278" cy="86" r="5"/><circle cx="115" cy="240" r="5"/></g><g fill="#F96875"><circle cx="375" cy="103" r="5"/><circle cx="390" cy="283" r="4"/></g></svg><div class="art-caption art-caption-one"><span class="flag-pips"><i></i><i></i><i></i></span> IA × ROMÂNIA</div><div class="art-caption art-caption-two">CUNOAȘTERE <span class="caption-divider">/</span> EXPLORARE <span class="caption-divider">/</span> INOVAȚIE</div></div></div>
      <section class="partner-section" aria-label="Parteneriat academic și cercetare"><div class="partner-section-head"><span class="kicker">PARTENERIAT ACADEMIC & CERCETARE</span><h2>Învățare susținută de mediul universitar</h2><p>Materialele sunt realizate în parteneriat cu <strong>Facultatea de Automatică și Calculatoare, Universitatea Națională de Știință și Tehnologie POLITEHNICA București</strong>. Platforma prezintă, de asemenea, <strong>Hubul Român de Inteligență Artificială (HRIA)</strong> și legătura sa cu ecosistemul românesc de cercetare în IA.</p></div><div class="partner-grid">
       <a class="partner-card" href="https://acs.pub.ro/" target="_blank" rel="noopener noreferrer"><img src="assets/logo-acs.png" alt="Sigla Facultății de Automatică și Calculatoare (ACS)" loading="lazy" class="partner-logo acs-logo" /><span class="partner-info"><small>FACULTATE</small><strong>Automatică și Calculatoare</strong><span>POLITEHNICA București</span></span>${icon('arrow-up-right',17)}</a>
       <a class="partner-card" href="https://upb.ro/" target="_blank" rel="noopener noreferrer"><img src="https://essir2026.aimultimedialab.ro/img/logo-UPB.png" alt="Sigla POLITEHNICA București" loading="lazy" class="partner-logo poli-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"/><span class="partner-logo-fallback poli-fallback" aria-hidden="true">PB</span><span class="partner-info"><small>UNIVERSITATE</small><strong>POLITEHNICA București</strong><span>Universitatea Națională de Știință și Tehnologie</span></span>${icon('arrow-up-right',17)}</a>
       <a class="partner-card" href="https://hria.upb.ro/" target="_blank" rel="noopener noreferrer"><img src="https://olimpiada.nitro-ai.org/images/partners/hria.png" alt="Sigla Hubului Român de Inteligență Artificială" loading="lazy" class="partner-logo hria-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"/><span class="partner-logo-fallback hria-fallback" aria-hidden="true">hria</span><span class="partner-info"><small>CERCETARE ÎN IA</small><strong>Hubul Român de IA</strong><span>HRIA · România</span></span>${icon('arrow-up-right',17)}</a>
      </div></section>
      <section class="program-stages" id="national-program" aria-label="Nivelurile programei"><div class="program-stage"><span class="stage-ico">01</span><div><strong>Programă generală</strong><p>Fundamentele pregătirii: Python, învățare supervizată și nesupervizată, Data Science și NLP.</p></div><strong class="stage-number">${generalCount} secțiuni</strong></div><div class="program-stage advanced"><span class="stage-ico">02</span><div><strong>Doar pentru etapa națională</strong><p>Completări PyTorch și clustering, rețele neurale și Computer Vision. Sunt marcate separat în capitole.</p></div><strong class="stage-number">${nationalCount} secțiuni</strong></div></section>
      <div class="section-heading" id="chapter-grid"><div><span class="kicker">STRUCTURA PROGRAMEI</span><h2>Explorează cele 7 capitole</h2><p>Deschide un capitol pentru a vedea secțiunile din programa generală și completările pentru etapa națională.</p></div><span class="section-heading-pill">${totalSections()} secțiuni</span></div>
      <div class="chapters-grid">${DATA.chapters.map(miniChapterCard).join('')}</div>
      <div class="home-lower"><div class="continue-card"><div class="cont-top"><span class="cont-icon">${icon('book',20)}</span><span>ÎNCEPE CU PROGRAMA</span></div><h3>${esc(DATA.chapters[0].title)}</h3><p>Sunt disponibile lecțiile Python, NumPy, Pandas, Matplotlib, Seaborn și scikit-learn.</p><a href="${path(DATA.chapters[0])}">Deschide capitolul ${icon('arrow-right',17)}</a></div><div class="approach-card"><span class="kicker">MATERIALE PE CARE LE VEI GĂSI AICI</span><h3>Teorie. Exerciții. Experimente.</h3><div class="approach-row"><span>${icon('book',19)}</span><p>Explicații clare, exemple Python și materiale pentru aprofundare.</p></div><div class="approach-row"><span>${icon('experiment',19)}</span><p>Aplicații, vizualizări și laboratoare interactive pentru explorarea conceptelor.</p></div><div class="approach-row"><span>${icon('target',19)}</span><p>Exerciții propuse, indicii și soluții explicate pas cu pas.</p></div></div></div>
      <p class="legal-note">${esc(DATA.siteNote || '')}</p>
    </div>`;
  }
  function renderChapter(ch) {
    const grouped = ['general','national'].map(stage => {
      const secs = ch.sections.filter(s => s.stage === stage);
      if (!secs.length) return '';
      const title = ch.id==='nlp' ? 'Lecții NLP' : (stage === 'general' ? 'Programă generală' : 'Doar pentru etapa națională');
      const summary = stage === 'general' ? (ch.id==='nlp' ? 'Parcurs NLP unitar, fără împărțire pe etape.' : 'Teme incluse în programa generală de pregătire.') : 'Teme suplimentare, destinate exclusiv pregătirii pentru etapa națională.';
      return `<section class="chapter-stage-group ${stage === 'national'?'national-group':''}"><div class="stage-group-header"><div><span class="stage-indicator ${stage}">${ch.id==='nlp' ? 'N' : stage==='national' ? 'N' : 'G'}</span><h2>${title}</h2><p>${summary}</p></div><span>${secs.length} ${secs.length===1?'secțiune':'secțiuni'}</span></div>
        <div class="lesson-list">${secs.map(s=>`<a class="lesson-row" href="${path(ch,s)}"><span class="lesson-index ${stage === 'national' ? 'national-index':''}">${esc(s.number)}</span><span class="lesson-row-body"><strong>${esc(s.title)}</strong><small class="lesson-status">${s.title.includes('În lucru') ? icon('clock',13)+' În lucru' : (s.blocks||[]).length|| (s.exercises||[]).length ? icon('check-circle',13)+' Lecție disponibilă' : icon('clock',13)+' Materiale în pregătire'}</small></span><span class="lesson-row-chevron">${icon('arrow-right',19)}</span></a>`).join('')}</div></section>`;
    }).join('');
    return `<div class="content-wrap chapter-view"><a class="text-back" href="#/">${icon('arrow-left',16)} Toate capitolele</a><div class="chapter-hero ch-${esc(ch.color)}"><div class="chapter-hero-number">${esc(ch.number)}</div><div class="chapter-hero-top"><span class="chapter-hero-icon">${icon(ch.icon,32)}</span><span>CAPITOLUL ${esc(ch.number)} <span class="chapter-separator">·</span> PROGRAMA DE PREGĂTIRE</span></div><h1>${esc(ch.title)}</h1><p>${esc(ch.description)}</p><div class="chapter-stage-pills">${ch.sections.some(s=>s.stage==='general') ? `<span>${icon('book',15)} ${ch.sections.filter(s=>s.stage==='general').length} ${ch.id==='nlp'?'teme NLP':'generale'}</span>`:''}${ch.sections.some(s=>s.stage==='national') ? `<span>${icon('target',15)} ${ch.sections.filter(s=>s.stage==='national').length} pentru națională</span>`:''}</div></div>
      ${window.ONIA_CHAPTER_OVERVIEWS?.[ch.id] ? `<a class="chov-jump" href="${path(ch)}" data-scroll-target="capitol-introducere">${icon('book',17)} Citește introducerea capitolului ${icon('arrow-right',16)}</a>` : ''}
      <div class="section-heading chapter-list-heading"><div><span class="kicker">PARCURS DE ÎNVĂȚARE</span><h2>Secțiunile capitolului</h2><p>${ch.id==='nlp' ? 'Alege o lecție, parcurge teoria și deschide laboratorul interactiv.' : 'Alege tema pe care vrei să o studiezi. Materialele vor fi adăugate treptat.'}</p></div></div>${grouped}${window.ONIA_CHAPTER_OVERVIEWS?.[ch.id] || ''}</div>`;
  }
  function sectionSections(s) {
    return [ ...s.blocks.map((b,i) => ({id:`block-${i}`, title:b.title||blockLabel(b.type)})), ...((s.exercises||[]).length ? [{id:'exercises',title:'Exerciții propuse'}] : []) ];
  }
  function blockLabel(type) { return ({lesson:'Suport de curs',prose:'Explicație',html:'Material HTML',pdf:'Document PDF',youtube:'Videoclip',interactive:'Laborator interactiv',note:'De reținut',code:'Exemplu de cod'})[type] || 'Material'; }
  function blockIcon(type) { return ({lesson:'book',prose:'book',html:'code',pdf:'file',youtube:'play',interactive:'experiment',note:'lightbulb',code:'code'})[type] || 'file'; }
  function renderBlock(b, i) {
    const id = `block-${i}`;
    if (b.type === 'note') return `<section class="note-box note-${esc(b.tone || 'info')}" id="${id}"><div class="note-icon">${icon(b.tone==='warning' ? 'alert' : b.tone==='tip' ? 'lightbulb' : 'info',19)}</div><div><strong>${esc(b.title || 'De reținut')}</strong><p>${esc(b.text || '')}</p></div></section>`;
    if (b.type === 'prose') return `<section class="learning-block prose-block" id="${id}"><div class="block-title">${icon('book',19)}<h2>${esc(b.title || 'Explicații')}</h2></div><div class="prose-content">${b.html || ''}</div></section>`;
    const src = esc(b.src||'');
    if (b.type === 'lesson') return `<section class="learning-block lesson-native-block" id="${id}"><div class="native-lesson-actions"><span>${icon('book',17)} ${esc(b.title || 'Suportul de curs')}</span>${b.standalone ? `<a href="${esc(b.standalone)}" target="_blank" rel="noopener noreferrer">${icon('external-link',16)} Deschide lecția separat</a>` : ''}</div><div class="native-lesson" data-native-lesson-src="${src}"><div class="native-lesson-loading">Se încarcă suportul de curs…</div></div></section>`;
    const openLink = b.type === 'youtube' ? `https://www.youtube.com/watch?v=${encodeURIComponent(b.id || '')}` : src;
    let body = '';
    if (b.type === 'youtube') {
      const youtubeId = /^[a-zA-Z0-9_-]{11}$/.test(b.id||'') ? b.id : '';
      body = youtubeId ? `<div class="video-wrap"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/${youtubeId}" title="${esc(b.title || 'Videoclip YouTube')}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : `<p>Completează un ID YouTube valid în fișierul de configurare.</p>`;
    } else if (b.type === 'pdf') {
      body = `<div class="embed-frame pdf-embed"><iframe loading="lazy" src="${src}#toolbar=1&view=FitH" title="${esc(b.title || 'Document PDF')}" style="height:${Math.min(1200,Math.max(280,b.height||650))}px"></iframe></div><p class="embed-fallback">Dacă documentul nu apare în browser, <a href="${src}" target="_blank" rel="noopener noreferrer">deschide fișierul PDF separat</a>.</p>`;
    } else if (b.type === 'html' || b.type === 'interactive') {
      body = `<div class="embed-frame ${b.type==='interactive'?'interactive-embed':'html-embed'}"><iframe loading="lazy" src="${src}" title="${esc(b.title||'Material HTML')}" style="height:${Math.min(1300,Math.max(280,b.height||550))}px" allow="fullscreen" allowfullscreen></iframe></div>`;
    } else if (b.type === 'code') {
      body = `<pre class="code-display"><code>${esc(b.code||'')}</code></pre>`;
    }
    return `<section class="learning-block media-block" id="${id}"><div class="block-head"><div class="block-head-left"><span class="block-badge">${icon(blockIcon(b.type),17)} ${esc(blockLabel(b.type))}</span><h2>${esc(b.title || blockLabel(b.type))}</h2></div>${b.download ? `<a class="open-new" href="${esc(b.download)}" download title="Descarcă notebookul Jupyter (.ipynb)">${icon('file',15)} <span>Descarcă .ipynb</span></a>` : ''}${b.type!=='code' ? `<a class="open-new" href="${openLink}" target="_blank" rel="noopener noreferrer" title="Deschide într-o filă nouă">${icon('external-link',16)} <span>Deschide separat</span></a>` : ''}</div>${body}${b.caption ? `<p class="block-caption">${esc(b.caption)}</p>` : ''}</section>`;
  }
  // Câmpurile text și cod sunt separate: NICIODATĂ nu comprimăm Python pe un rând.
  // statementCode / solutionCode sunt texte Python complete, cu indentarea originală.
  function exerciseCode(code, preHighlighted, label) {
    if (!code) return '';
    const pre = preHighlighted || `<div class="codehilite"><pre><code>${esc(code)}</code></pre></div>`;
    return `<div class="exercise-code-card py-code-card"><div class="exercise-code-head py-code-top"><span>${icon('code',15)} ${esc(label || 'Python 3')}</span><button type="button" class="py-copy" data-copy-code aria-label="Copiază codul Python">Copiază codul</button></div><div class="exercise-code">${pre}</div></div>`;
  }
  function inlineCode(text) {
    return esc(text||'').replace(/`([^`\n]+)`/g, '<code class="exercise-inline-code">$1</code>');
  }
  function renderExercises(exercises) {
    if (!exercises?.length) return '';
    return `<section id="exercises" class="exercise-section"><div class="exercise-intro"><div class="exercise-title-icon">${icon('pencil',23)}</div><div><span class="kicker">PUNE ÎN PRACTICĂ</span><h2>Exerciții propuse</h2><p>Rezolvă pe cont propriu înainte de a deschide indiciile sau soluțiile. Codul se poate copia cu indentarea originală.</p></div></div>
      <div class="exercise-list">${exercises.map((x,i) => `<article class="exercise-card"><div class="exercise-head"><span class="exercise-num">EX ${String(i+1).padStart(2,'0')}</span><span class="difficulty ${x.level==='Ușor'?'easy':x.level==='Mediu'?'medium':'hard'}">${esc(x.level || 'Exercițiu')}</span></div><h3>${esc(x.title)}</h3><p class="exercise-description">${esc(x.description)}</p>
      ${exerciseCode(x.statementCode,x.statementCodeHtml,x.statementLabel||'Cod / date din enunț')}
      ${x.type==='mcq' ? `<div class="quiz-options" role="group" aria-label="Variante de răspuns">${(x.options||[]).map((o,j)=>`<label class="quiz-option"><input type="radio" name="quiz-${i}" value="${j}" /><span class="quiz-circle"></span><span>${esc(o)}</span></label>`).join('')}</div><button type="button" class="btn btn-primary btn-small quiz-check" data-quiz-check="${i}" data-answer="${Number(x.answerIndex)}" data-explanation="${esc(x.explanation||'')}">Verifică răspunsul ${icon('arrow-right',15)}</button><div class="quiz-feedback" role="status" aria-live="polite"></div>` : ''}
      ${(x.hint || x.hintCode || x.solution || x.solutionCode || x.solutionText) ? `<div class="exercise-reveals">${(x.hint || x.hintCode) ? `<details><summary>${icon('lightbulb',15)} Indiciu ${icon('chevron-down',14)}</summary><div class="exercise-reveal-content">${x.hint ? `<p>${inlineCode(x.hint)}</p>` : ''}${x.hintCode ? exerciseCode(x.hintCode,x.hintCodeHtml,'Indiciu · Python 3') : ''}</div></details>`:''}${(x.solution || x.solutionCode || x.solutionText) ? `<details><summary>${icon('check-circle',15)} Soluție / explicație ${icon('chevron-down',14)}</summary><div class="exercise-reveal-content">${x.solutionCode ? exerciseCode(x.solutionCode,x.solutionCodeHtml,'Soluție Python 3') : ''}${x.solutionText ? `<p>${esc(x.solutionText)}</p>` : (x.solution ? `<p>${esc(x.solution)}</p>`:'')}</div></details>`:''}</div>`:''}</article>`).join('')}</div></section>`;
  }
  function renderLesson(ch, sec) {
    const all = allSections(), i=all.findIndex(x=>x.chapter.id===ch.id && x.section.id===sec.id);
    const prev=all[i-1], next=all[i+1], success=isDone(ch,sec);
    const published = (sec.blocks||[]).length > 0 || (sec.exercises||[]).length > 0;
    const stageLabel = ch.id === 'nlp' ? 'PARCURS NLP' : (sec.stage==='national' ? 'DOAR ETAPA NAȚIONALĂ' : 'PROGRAMĂ GENERALĂ');
    const emptyContent = `<div class="pending-materials"><div class="pending-heading"><span class="pending-icon">${icon('book',24)}</span><div><span class="kicker">SPAȚIU PENTRU MATERIALE</span><h2>Materialele sunt în pregătire</h2><p>Această secțiune este rezervată pentru explicații, exemple, notebookuri și resurse multimedia. Nu a fost publicat încă un suport de curs.</p></div></div><div class="pending-formats"><span>${icon('book',17)} Lecții și exemple</span><span>${icon('file',17)} Materiale practice</span><span>${icon('play',17)} Video</span><span>${icon('experiment',17)} Simulator interactiv</span></div></div>`;
    const emptyExercises = `<section class="pending-exercises" id="exercises"><div class="pending-exercises-title">${icon('pencil',19)}<h2>Exerciții propuse</h2><span class="status-soon">În pregătire</span></div><p>Exercițiile, indiciile și soluțiile pentru această secțiune vor fi publicate ulterior.</p></section>`;
    return `<div class="content-wrap lesson-layout"><article class="lesson-article"><a class="text-back" href="${path(ch)}">${icon('arrow-left',16)} ${esc(ch.shortTitle||ch.title)}</a>
      <div class="lesson-heading"><div class="lesson-eyebrow"><span>CAPITOLUL ${esc(ch.number)}</span><span class="eyebrow-dot"></span><span>${esc(ch.shortTitle||ch.title)}</span></div><span class="lesson-stage-tag ${sec.stage==='national'?'national':''}">${icon(sec.stage==='national'?'target':'book',14)} ${stageLabel}</span><h1><span class="lesson-number">${esc(sec.number)}</span> ${esc(sec.title)}</h1>${sec.summary ? `<p class="lesson-lead">${esc(sec.summary)}</p>`:''}<div class="lesson-top-meta"><span>${icon('book',16)} ${(sec.blocks||[]).length} materiale</span><span>${icon('pencil',16)} ${(sec.exercises||[]).length} exerciții</span>${!published ? `<span>${icon('clock',16)} În pregătire</span>`:''}</div></div>
      ${sec.objectives?.length ? `<section class="objectives"><div class="objectives-heading">${icon('target',19)} <strong>La finalul acestei secțiuni vei putea:</strong></div>${sec.objectives.map(o=>`<p>${icon('check',15)} ${esc(o)}</p>`).join('')}</section>` : ''}
      <div class="lesson-content">${(sec.blocks||[]).length ? (sec.blocks||[]).map(renderBlock).join('') : emptyContent}${(sec.exercises||[]).length ? renderExercises(sec.exercises) : emptyExercises}</div>
      ${published ? `<section class="lesson-finish"><div><span class="finish-icon">${icon(success ? 'check-circle':'trophy',24)}</span><div><h3>${success ? 'Secțiune marcată ca parcursă' : 'Ai parcurs această secțiune?'}</h3><p>${success ? 'Poți reveni oricând la materiale și exerciții.' : 'Marcheaz-o ca finalizată pentru a urmări progresul tău.'}</p></div></div><button class="btn ${success?'btn-success':'btn-primary'}" type="button" data-complete="${esc(ch.id)}:${esc(sec.id)}">${icon(success?'check':'check-circle',17)} ${success?'Finalizată · Anulează':'Marchează ca finalizată'}</button></section>` : ''}
      <nav class="lesson-pagination" aria-label="Secțiunea anterioară și următoare">${prev ? `<a href="${path(prev.chapter,prev.section)}"><span>${icon('arrow-left',15)} ANTERIOARA</span><strong>${esc(prev.section.number)} · ${esc(prev.section.title)}</strong></a>` : `<div></div>`}${next ? `<a class="pagination-next" href="${path(next.chapter,next.section)}"><span>URMĂTOAREA ${icon('arrow-right',15)}</span><strong>${esc(next.section.number)} · ${esc(next.section.title)}</strong></a>` : `<div></div>`}</nav>
    </article><aside class="lesson-toc" aria-label="Cuprinsul secțiunii"><div class="toc-inner"><span class="toc-title">ÎN ACEASTĂ SECȚIUNE</span><nav>${(sec.blocks||[]).length ? sectionSections(sec).map((x,idx)=>`<button type="button" class="toc-link ${idx===0?'toc-active':''}" data-scroll-target="${x.id}">${esc(x.title)}</button>`).join('') : `<span class="toc-pending">Materiale în pregătire</span><button type="button" class="toc-link" data-scroll-target="exercises">Exerciții propuse</button>`}</nav><div class="toc-tip">${icon('info',17)}<span>Programa și secțiunile sunt definite; resursele educaționale vor fi adăugate separat.</span></div></div></aside></div>`;
  }
  async function loadNativeLessons() {
    for (const container of $$('.native-lesson[data-native-lesson-src]')) {
      const src = container.dataset.nativeLessonSrc;
      if (!src || !/^content\/[a-zA-Z0-9_./-]+\.html$/.test(src) || src.includes('..')) {
        container.textContent = 'Calea materialului nu este validă.';
        continue;
      }
      try {
        // Fișierul JS de lecții este disponibil chiar și prin file:// (spre deosebire de fetch).
        // Pentru lecții noi neincluse încă în pachet, pe GitHub Pages se folosește fetch.
        let html = window.ONIA_LESSON_CONTENT?.[src];
        if (typeof html !== 'string') {
          if (location.protocol === 'file:') throw new Error('Material neîmpachetat pentru utilizare locală');
          const result = await fetch(src);
          if (!result.ok) throw new Error('HTTP ' + result.status);
          html = await result.text();
        }
        if (!container.isConnected) continue;
        container.innerHTML = html; // fișier HTML administrat în același repository
        // Fragmentele HTML sunt scrise relativ la content/<lectie>.html,
        // dar sunt inserate în index.html. Corectăm imaginile și linkurile
        // astfel încât să funcționeze local (file://) și pe GitHub Pages.
        const lessonBase = new URL(src, document.baseURI);
        container.querySelectorAll('[src^="../"], [href^="../"]').forEach(el => {
          const attr = el.hasAttribute('src') ? 'src' : 'href';
          const relative = el.getAttribute(attr);
          try { el.setAttribute(attr, new URL(relative, lessonBase).href); } catch (_) {}
        });
        // Cuprins combinat pentru mai multe suporturi native (NumPy, Pandas, CSV).
        const lessonHeadings = $$('.lesson-content .native-lesson .py-topic-head h2, .lesson-content .native-lesson .uns-head h2, .lesson-content .native-lesson .nlp-topic h2');
        const toc = $('.lesson-toc nav');
        if (toc && lessonHeadings.length) {
          const lessonLinks = lessonHeadings.map((heading) => {
            const sec = heading.closest('section[id]');
            return `<button type="button" class="toc-link" data-scroll-target="${esc(sec.id)}">${esc(heading.textContent)}</button>`;
          }).join('');
          const extra = $$('.lesson-content > .learning-block.media-block').map(b=>`<button type="button" class="toc-link" data-scroll-target="${esc(b.id)}">${esc(b.querySelector('.block-head h2')?.textContent || 'Material')}</button>`).join('');
          const exercises = $('#exercises') ? `<button type="button" class="toc-link" data-scroll-target="exercises">Exerciții propuse</button>` : '';
          toc.innerHTML = lessonLinks + extra + exercises;
          const tip = $('.lesson-toc .toc-tip span');
          if (tip) tip.textContent='Navighează prin lecții și exerciții folosind cuprinsul.';
        }
      } catch(e) {
        if (container.isConnected) {
          const standalone = src.replace(/\.html$/,'-standalone.html');
          container.innerHTML = `<div class="native-lesson-loading">Acest material nu este disponibil în pachetul local. <a href="${esc(standalone)}" target="_blank" rel="noopener">Încearcă să deschizi lecția separat</a>.</div>`;
          console.error('ONIA: nu s-a putut încărca', src, e);
        }
      }
    }
  }
  function render(scrollTop=true) {
    const {chapter, section, unknown}=locate();
    if (chapter && expandedChapter === null) expandedChapter=chapter.id;
    if (chapter && expandedChapter !== chapter.id) expandedChapter=chapter.id;
    breadcrumbs(chapter,section);
    renderNav(chapter,section);
    if (unknown) main.innerHTML=`<div class="not-found"><h1>Pagina nu a fost găsită</h1><p>Verifică adresa sau revino la lista capitolelor.</p><a class="btn btn-primary" href="#/">Acasă ${icon('arrow-right',16)}</a></div>`;
    else if (chapter && section) {
      main.innerHTML = renderLesson(chapter,section);
      writeState('aiolympiad-last',sectionKey(chapter,section));
    } else if (chapter) main.innerHTML=renderChapter(chapter);
    else main.innerHTML=renderHome();
    document.title = `${section?.title || chapter?.title || 'Acasă'} · ${DATA.siteName}`;
    loadNativeLessons();
    window.ONIA_CHAPTER_OVERVIEW_INIT?.();
    if (scrollTop) window.scrollTo({top:0,behavior:'instant'});
    closeSidebar();
  }
  function closeSidebar() { shell.classList.remove('sidebar-visible'); }
  function closeSearch() { searchOverlay.hidden=true; document.body.classList.remove('no-scroll'); }
  function openSearch() { closeSidebar();searchOverlay.hidden=false;document.body.classList.add('no-scroll');searchInput.value='';searchSelection=0;paintResults();setTimeout(()=>searchInput.focus(),0); }
  function searchItems() {
    const q=searchInput.value.trim().toLocaleLowerCase('ro');
    const items=[];
    for(const ch of DATA.chapters) {
      if(!q || `${ch.title} ${ch.description}`.toLocaleLowerCase('ro').includes(q)) items.push({ch, title:ch.title, subtitle:'Capitol', route:path(ch),icon:ch.icon});
      for(const sec of ch.sections) if(!q || `${sec.number} ${sec.title} ${sec.summary||''} ${ch.title}`.toLocaleLowerCase('ro').includes(q)) items.push({ch,sec,title:`${sec.number} · ${sec.title}`,subtitle:`${ch.id==='nlp'?'Parcurs NLP':sec.stage==='national'?'Etapa națională':'Programă generală'} · ${ch.shortTitle||ch.title}`,route:path(ch,sec),icon:'book'});
    }
    return items.slice(0,18);
  }
  function paintResults() {
    const items=searchItems(); if(searchSelection>=items.length)searchSelection=0;
    $('#search-results').innerHTML=items.length ? items.map((x,i)=>`<a class="search-item ${i===searchSelection?'highlight':''}" href="${x.route}" data-search-result="${i}"><span class="search-result-icon">${icon(x.icon,18)}</span><span><strong>${esc(x.title)}</strong><small>${esc(x.subtitle)}</small></span>${icon('arrow-up-right',16)}</a>`).join('') : `<div class="search-empty">Nu există rezultate. Încearcă alt cuvânt-cheie.</div>`;
  }
  function setTheme(next) { document.documentElement.dataset.theme=next;writeState('aiolympiad-theme',next);$('#theme-toggle').innerHTML=icon(next==='dark'?'sun':'moon',20);$('#theme-toggle').ariaLabel=next==='dark'?'Activează tema luminoasă':'Activează tema întunecată'; }
  function init() {
    $('#brand-name').textContent=DATA.siteName;
    $('#footer-brand').textContent=DATA.siteName;
    decorateIcons();
    setTheme(readState('aiolympiad-theme','light'));
    render();
    window.addEventListener('hashchange',()=>{closeSearch();render();});
    $('#menu-toggle').addEventListener('click',()=>shell.classList.toggle('sidebar-visible'));
    $('#sidebar-scrim').addEventListener('click',closeSidebar);
    $('#search-trigger').addEventListener('click',openSearch);
    $('#search-close').addEventListener('click',closeSearch);
    $('[data-close-search]').addEventListener('click',closeSearch);
    searchInput.addEventListener('input',()=>{searchSelection=0;paintResults();});
    searchInput.addEventListener('keydown',e=>{const n=searchItems().length;if(e.key==='ArrowDown'){e.preventDefault();searchSelection=(searchSelection+1)%Math.max(1,n);paintResults();}else if(e.key==='ArrowUp'){e.preventDefault();searchSelection=(searchSelection-1+Math.max(1,n))%Math.max(1,n);paintResults();}else if(e.key==='Enter'&&n){location.hash=searchItems()[searchSelection].route;closeSearch();} });
    document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch();} if(e.key==='Escape'){closeSearch();closeSidebar();}});
    $('#theme-toggle').addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
    document.addEventListener('click', e=>{
      const copy=e.target.closest('[data-copy-code]');
      if(copy){const pre=copy.closest('.py-code-card')?.querySelector('.codehilite pre');if(pre){const raw=pre.textContent;const done=()=>{copy.textContent='Copiat!';setTimeout(()=>{if(copy.isConnected)copy.textContent='Copiază codul'},1300)};if(navigator.clipboard?.writeText){navigator.clipboard.writeText(raw).then(done).catch(()=>{copy.textContent='Selectează manual codul'});}else{copy.textContent='Selectează manual codul';}}return;}
      const exp=e.target.closest('[data-expand]');
      if(exp){expandedChapter=expandedChapter===exp.dataset.expand?'':exp.dataset.expand; const loc=locate();renderNav(loc.chapter,loc.section);return;}
      const scroll=e.target.closest('[data-scroll-target]');
      if(scroll){e.preventDefault();const el=document.getElementById(scroll.dataset.scrollTarget);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});$$('.toc-link').forEach(x=>x.classList.remove('toc-active'));if(scroll.classList.contains('toc-link'))scroll.classList.add('toc-active');return;}
      const complete=e.target.closest('[data-complete]');
      if(complete){const [cid,sid]=complete.dataset.complete.split(':');const ch=DATA.chapters.find(x=>x.id===cid);const sec=ch?.sections.find(x=>x.id===sid);if(ch&&sec)toggleDone(ch,sec);return;}
      const q=e.target.closest('[data-quiz-check]');
      if(q){const card=q.closest('.exercise-card');const sel=card.querySelector('input[type="radio"]:checked');const feedback=card.querySelector('.quiz-feedback');if(!sel){feedback.className='quiz-feedback is-error';feedback.textContent='Alege o variantă înainte de verificare.';return;}const good=Number(sel.value)===Number(q.dataset.answer);feedback.className=`quiz-feedback ${good?'is-correct':'is-error'}`;feedback.textContent=`${good?'Corect!':'Nu este corect.'} ${q.dataset.explanation}`;return;}
      if(e.target.closest('[data-search-result]'))closeSearch();
    });
  }
  init();
})();
