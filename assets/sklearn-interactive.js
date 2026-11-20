/* ONIA 1.4 | vizualizări didactice autonome · fără dependențe externe */
(() => {
    'use strict';
    const root = () => document.querySelector('.onia-sklearn-lesson');
    const find = (sel, scope = root()) => scope?.querySelector(sel);
    const fmt = value => Number.isFinite(value) ? (Math.abs(value) < 1e-10 ? '0' : Number(value.toFixed(3)).toLocaleString('ro-RO', {maximumFractionDigits: 3})) : String(value);
    const safe = s => String(s).replace(/[&<>"']/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c]));
    const mark = (x, isTest = false) => `<span class="sk-num${isTest ? ' test' : ''}">${safe(x)}</span>`;
    const marks = (a, test = false) => `<div class="sk-number-row">${a.map(x => mark(x, test)).join('')}</div>`;
    const panel = (title, content) => `<div class="sk-prep-panel"><strong>${title}</strong>${content}</div>`;

    function renderStratify() {
        const demo = find('#sk-stratify-demo');
        if (!demo) return;
        const mode = demo.dataset.mode || 'y';
        const ys = [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1];
        const xs = ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B', 'B'];
        // Exemple de partiționări POSIBILE: toate rândurile sunt disjuncte.
        const tests = mode === 'y' ? [0, 1, 7, 8] : [0, 1, 6, 11];
        const train = ys.map((_, i) => i).filter(i => !tests.includes(i));

        function item(i) {
            return `<div class="sk-sample sk-class${ys[i]}" title="Obs. ${i + 1}: regiunea ${xs[i]}, clasa ${ys[i]}">Clasa ${ys[i]}<small>${xs[i]} · #${i + 1}</small></div>`;
        }

        find('#sk-train-split', demo).innerHTML = train.map(item).join('');
        find('#sk-test-split', demo).innerHTML = tests.map(item).join('');
        const zeros = tests.filter(i => ys[i] === 0).length;
        find('#sk-stratify-result', demo).innerHTML = mode === 'y'
            ? `<strong>stratify=y:</strong> în test avem ${zeros} exemple din clasa 0 și ${4 - zeros} din clasa 1 — aceeași distribuție 50% / 50% ca în total (6 din fiecare clasă). Aici aceasta este proprietatea urmărită.`
            : `<strong>stratify=X[:,0]:</strong> în test avem 2 observații din regiunea A și 2 din B, însă ${zeros} din clasa 0 și ${4 - zeros} din clasa 1. Regiunile sunt echilibrate, <em>nu</em> neapărat țintele!`;
        demo.querySelectorAll('[data-sk-stratify]').forEach(b => {
            b.classList.toggle('is-active', b.dataset.skStratify === mode);
            b.setAttribute('aria-pressed', String(b.dataset.skStratify === mode));
        });
    }

    const preps = {
        standard: {
            label: 'StandardScaler',
            train: [2, 4, 6],
            test: 3,
            desc: 'Standardizarea centrează o coloană față de media din train și o împarte la abaterea standard din train. Ajută modele sensibile la scară (K-NN, SVM, regresie logistică). <strong>Nu</strong> presupune transformarea datelor într-o distribuție gaussiană.',
            learned: 'media μ = 4; abaterea standard σ = √(8/3) ≈ 1,633',
            formula: 'z = (x − μ_train) / σ_train',
            transform: x => (x - 4) / Math.sqrt(8 / 3),
            min: -2,
            max: 4,
            example: 'Pe train: [2, 4, 6] → [−1,225, 0, 1,225]. Pentru x_test = 3, z ≈ −0,612; nu recalculăm media și σ pe test.'
        },
        minmax: {
            label: 'MinMaxScaler',
            train: [10, 20, 30],
            test: 40,
            desc: 'Reprezintă fiecare valoare față de minimul și maximul din train, de obicei în intervalul [0, 1] pentru train. Util când sunt necesare limite comparabile pe datele văzute.',
            learned: 'min_train = 10; max_train = 30',
            formula: 'x_scalat = (x − 10) / (30 − 10)',
            transform: x => (x - 10) / 20,
            min: -1,
            max: 3,
            example: 'Pe train: [10, 20, 30] → [0, 0,5, 1]. Pentru x_test = 40 obținem 1,5: o valoare din test POATE depăși 1.'
        },
        robust: {
            label: 'RobustScaler',
            train: [1, 2, 3, 100],
            test: 50,
            desc: 'Centrarea se face cu mediana, iar împărțirea cu intervalul intercuartilic IQR. Este mai puțin sensibil la valori extreme decât scalarea pe media și deviația standard.',
            learned: 'mediană = 2,5; Q1 = 1,75; Q3 = 27,25; IQR = 25,5',
            formula: 'x_robust = (x − 2,5) / 25,5',
            transform: x => (x - 2.5) / 25.5,
            min: -1,
            max: 5,
            example: 'Train: [1, 2, 3, 100]; pentru test 50 → (50−2,5)/25,5 ≈ 1,863. Un outlier rămâne posibil în date.'
        }
    };

    function prepPlot(values, test) {
        // SVG cu coordonate proporționale, etichete distribuite pe benzi separate.
        const W = 980, H = 344, L = 80, R = 900, axisY = 226;
        const all = [...values, test], lo = Math.min(...all), hi = Math.max(...all);
        const spread = Math.max(hi - lo, .8), padding = Math.max(spread * .18, .35);
        const left = lo - padding, right = hi + padding;
        const x = v => L + (v - left) / (right - left) * (R - L);
        const tr = values.map((v, i) => ({v, i, x: x(v)})).sort((a, b) => a.x - b.x);
        const laneEnd = [-999, -999, -999, -999, -999];
        const trains = [];
        for (const t of tr) {
            let lane = laneEnd.findIndex(prev => t.x - prev > 112);
            if (lane < 0) lane = laneEnd.indexOf(Math.min(...laneEnd));
            laneEnd[lane] = t.x;
            const yy = 24 + lane * 37, xx = Math.max(72, Math.min(908, t.x));
            trains.push(`<line x1="${t.x.toFixed(1)}" y1="${axisY}" x2="${t.x.toFixed(1)}" y2="${yy + 31}" stroke="#88aaca" stroke-width="1.7"/><circle cx="${t.x.toFixed(1)}" cy="${axisY}" r="6.5" fill="#276bb7" stroke="#fff" stroke-width="2"/><text x="${xx.toFixed(1)}" y="${yy}" text-anchor="middle" class="sk-axis-mini">TRAIN ${t.i + 1}</text><rect x="${(xx - 42).toFixed(1)}" y="${yy + 6}" width="84" height="25" rx="7" fill="#286db6"/><text x="${xx.toFixed(1)}" y="${yy + 23}" text-anchor="middle" class="sk-axis-value">${safe(fmt(t.v))}</text>`);
        }
        const xt = x(test), zero = (left <= 0 && right >= 0) ? x(0) : null;
        const originLine = zero === null ? '' : `<line x1="${zero.toFixed(1)}" y1="${axisY - 13}" x2="${zero.toFixed(1)}" y2="${axisY + 13}" stroke="#4e91c4" stroke-width="2"/>`;
        const ticks = [lo, (lo + hi) / 2, hi].filter((v, i, arr) => arr.findIndex(w => Math.abs(v - w) < .0001) === i).map(v => `<line x1="${x(v).toFixed(1)}" y1="${axisY - 5}" x2="${x(v).toFixed(1)}" y2="${axisY + 5}" stroke="#7b9cbd" stroke-width="1.2"/>`).join('');
        return `<div class="sk-prep-plot"><strong>Axa numerică a valorilor transformate</strong><svg class="sk-prep-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Observații train albastre și observație test portocalie pe aceeași axă numerică, cu săgeți către minus infinit și plus infinit">
      <defs><marker id="sk-a-left" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="2" refY="5" orient="auto-start-reverse"><path d="M10 0 L0 5 L10 10" fill="#7a9fc2"/></marker><marker id="sk-a-right" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5"><path d="M0 0 L10 5 L0 10" fill="#7a9fc2"/></marker></defs>
      <rect x="8" y="8" width="964" height="325" rx="13" fill="#f8fbff" stroke="#d8e7f7"/><text x="490" y="207" class="sk-axis-name" text-anchor="middle">Valori pe aceeași scară</text>
      <line x1="${L}" y1="${axisY}" x2="${R}" y2="${axisY}" stroke="#7a9fc2" stroke-width="2.5" marker-start="url(#sk-a-left)" marker-end="url(#sk-a-right)"/>
      ${originLine}${ticks}${trains.join('')}
      <line x1="${xt.toFixed(1)}" y1="${axisY}" x2="${xt.toFixed(1)}" y2="271" stroke="#d28724" stroke-width="2.4" stroke-dasharray="5 4"/>
      <circle cx="${xt.toFixed(1)}" cy="${axisY}" r="7.5" fill="#d28724" stroke="#fff" stroke-width="2"/>
      <rect x="${Math.max(48, Math.min(848, xt - 45)).toFixed(1)}" y="276" width="90" height="27" rx="8" fill="#cc7a1d"/>
      <text x="${Math.max(93, Math.min(893, xt)).toFixed(1)}" y="295" text-anchor="middle" class="sk-axis-value">${safe(fmt(test))}</text>
      <text x="${Math.max(93, Math.min(893, xt)).toFixed(1)}" y="322" text-anchor="middle" class="sk-axis-mini">TEST</text>
      <text x="38" y="${axisY + 24}" text-anchor="middle" class="sk-axis-infty">−∞</text><text x="941" y="${axisY + 24}" text-anchor="middle" class="sk-axis-infty">+∞</text>
    </svg><small class="sk-prep-plot-note">Pozițiile sunt calculate proporțional într-un interval finit de afișare. Săgețile arată continuarea axei reale spre −∞ și +∞. Etichetele train sunt deasupra axei, iar testul dedesubt.</small></div>`;
    }

    function renderPrep() {
        const demo = find('#sk-prep-demo');
        if (!demo) return;
        const key = find('#sk-prep-select', demo)?.value || 'standard';
        const target = find('#sk-prep-content', demo);
        if (!target) return;
        if (preps[key]) {
            const p = preps[key];
            const x = demo.dataset.testValue !== undefined && demo.dataset.testValue !== "" ? Number(demo.dataset.testValue) : p.test;
            const range = `<div class="sk-field" style="margin:14px 0"><label for="sk-prep-value">Modifică valoarea din TEST: <output id="sk-prep-value-out">${x}</output></label><input id="sk-prep-value" type="range" min="${key === 'standard' ? -2 : 0}" max="${key === 'standard' ? 12 : 150}" step="1" value="${x}" style="width:min(360px,100%);accent-color:#2770c3"></div>`;
            const val = p.transform(x);
            target.innerHTML = `<p>${p.desc}</p><div class="sk-prep-visual">${panel('Date TRAIN · fit', marks(p.train) + `<p>La <code>fit</code> se învață: <strong>${p.learned}</strong>.</p>`)}${panel('Rezultat TRAIN · fit_transform', marks(p.train.map(v => fmt(p.transform(v)))) + `<p><code>fit_transform(X_train)</code> învață statisticile și aplică formula valorilor train.</p>`)}</div><div class="sk-prep-formula"><strong>Formula memorată:</strong> ${p.formula}<br><strong>Exemplu:</strong> ${p.example}</div>${range}<div class="sk-prep-visual">${panel('Date TEST · valorile noi', `<div id="sk-prep-test-in">${marks([x], true)}</div><p>Aceste valori <strong>nu</strong> participă la <code>fit</code>.</p>`)}${panel('Rezultat TEST · transform', `<div id="sk-prep-test-out">${marks([fmt(val)], true)}</div><p>Aplicăm <strong>aceeași</strong> formulă învățată din train. Noul rezultat este <strong id="sk-prep-value-label">${fmt(val)}</strong>.</p>`)}</div><div id="sk-prep-plot-dynamic">${prepPlot(p.train.map(p.transform), val, Math.min(-1, ...p.train.map(p.transform), val), Math.max(1, ...p.train.map(p.transform), val))}</div>`;
            return;
        }
        const custom = {
            imputer: {
                title: 'SimpleImputer · valori lipsă',
                intro: 'Valorile absente sunt completate cu o statistică învățată exclusiv din train. Pentru <code>strategy="mean"</code>, media valorilor cunoscute [1, 5] este 3.',
                train: ['1', 'NaN', '5'],
                trans: ['1', '3', '5'],
                test: ['NaN', '9'],
                result: ['3', '9'],
                formula: '<code>fit</code>: media train = (1 + 5) / 2 = 3; <code>transform</code>: fiecare NaN devine 3.',
                when: 'Folosit când un model nu acceptă valori lipsă. Testul își primește completările din train, chiar dacă media valorilor observate din test este diferită.'
            },
            onehot: {
                title: 'OneHotEncoder · categorii nominale',
                intro: 'În train apar „roșu” și „albastru”, astfel se învață două coloane: <code>[albastru, rosu]</code> (ordinea implicită poate fi cea sortată).',
                train: ['roșu', 'albastru', 'roșu'],
                trans: ['[0,1]', '[1,0]', '[0,1]'],
                test: ['albastru', 'verde'],
                result: ['[1,0]', '[0,0]'],
                formula: '<code>handle_unknown="ignore"</code>: „verde” nu primește o nouă coloană pe test; se codifică [0, 0].',
                when: 'Util pentru categorii fără ordine numerică. Într-un pipeline trebuie păstrată aceeași ordine a coloanelor pe toate seturile.'
            },
            ordinal: {
                title: 'OrdinalEncoder · ordine declarată explicit',
                intro: 'Declarăm ordinea „mic” &lt; „mediu” &lt; „mare” în <code>categories=[["mic", "mediu", "mare"]]</code> și encoderul învață codurile asociate.',
                train: ['mic', 'mare', 'mediu'],
                trans: ['0', '2', '1'],
                test: ['mare', 'mic'],
                result: ['2', '0'],
                formula: 'Regulă: mic → 0, mediu → 1, mare → 2; codurile se păstrează pe test.',
                when: 'Folosit când categoriile chiar au o ordine sau când modelul gestionează convenția. Pentru categorii nominale, OneHotEncoder evită impunerea unei distanțe artificiale.'
            },
            normalizer: {
                title: 'Normalizer · normă L2 pe fiecare observație',
                intro: 'Nu învață statistici globale din train. Normalizează independent fiecare rând, împărțind componentele la lungimea sa euclidiană.',
                train: ['[3, 4]', '[0, 5]'],
                trans: ['[0,6; 0,8]', '[0; 1]'],
                test: ['[6, 8]', '[5, 0]'],
                result: ['[0,6; 0,8]', '[1; 0]'],
                formula: '[3,4] are norma √(3² + 4²) = 5 → [3/5,4/5]. [6,8] are norma 10 → [0,6; 0,8].',
                when: 'Util la vectori de text / direcție (similaritate cosinus). Nu trebuie confundat cu StandardScaler, care lucrează per coloană.'
            }
        }[key];
        target.innerHTML = `<p>${custom.intro}</p><div class="sk-prep-visual">${panel('Date TRAIN', marks(custom.train))}${panel('TRAIN după transform', marks(custom.trans))}${panel('Date TEST', marks(custom.test, true))}${panel('TEST după transform', marks(custom.result, true))}</div><div class="sk-prep-formula"><strong>Pasul explicat:</strong> ${custom.formula}</div><p><strong>Când este util?</strong> ${custom.when}</p>`;
    }

    function renderPipeline() {
        const demo = find('#sk-pipeline-demo');
        if (!demo) return;
        const mode = demo.dataset.mode || 'fit', step = Number(demo.dataset.step || 0);
        const texts = mode === 'fit' ?
            [['X_train + y_train', 'Observații cu etichete'], ['fit_transform(X_train)', 'Învață medii / deviații și scalează train'], ['fit(X_train_transformat, y_train)', 'Învață coeficienții clasificatorului'], ['Pipeline antrenată', 'Gata pentru predict pe observații noi']] :
            [['X_test', 'Observații fără a cunoaște etichetele la predicție'], ['transform(X_test)', 'Aplică media și deviațiile deja învățate'], ['predict(X_test_transformat)', 'Folosește coeficienții deja învățați'], ['y_pred', 'Predicțiile claselor, fără antrenare nouă']];
        for (let i = 0; i < 4; i++) {
            const stage = demo.querySelector(`[data-sk-stage="${i}"]`);
            stage?.classList.toggle('is-active', i === step);
            const el = find(`#sk-stage${i}`, demo);
            if (el) el.innerHTML = `<code>${safe(texts[i][0])}</code><span style="display:block">${texts[i][1]}</span>`;
        }
        const status = find('#sk-pipeline-status', demo);
        status.innerHTML = `<strong>${mode === 'fit' ? 'Antrenare (fit)' : 'Predicție (predict)'} · pasul ${step + 1}/4</strong>: ${texts[step][1]}. ${mode === 'predict' ? 'Niciun parametru al transformării sau modelului nu este reînvățat din X_test.' : 'La o nouă împărțire CV se pornește de la o pipeline neantrenată.'}`;
        demo.querySelectorAll('[data-sk-pipe]').forEach(b => {
            b.classList.toggle('is-active', b.dataset.skPipe === mode);
            b.setAttribute('aria-pressed', String(b.dataset.skPipe === mode));
        });
        find('#sk-pipeline-prev', demo).disabled = step === 0;
        find('#sk-pipeline-next', demo).disabled = step === 3;
    }

    const cmData = {
        2: [[2, 1], [1, 2]],
        3: [[17, 2, 1], [1, 15, 4], [0, 3, 17]],
        5: [[25, 1, 2, 0, 0], [2, 22, 3, 1, 0], [1, 2, 19, 4, 1], [0, 1, 2, 21, 3], [0, 0, 2, 2, 23]],
        8: [[19, 1, 0, 0, 0, 0, 1, 0], [1, 17, 2, 0, 0, 0, 0, 1], [0, 1, 15, 2, 1, 0, 0, 0], [0, 0, 2, 18, 1, 0, 1, 0], [0, 1, 0, 2, 15, 3, 0, 0], [0, 0, 1, 0, 2, 18, 1, 1], [1, 0, 0, 0, 0, 2, 17, 1], [0, 0, 1, 0, 0, 1, 2, 19]]
    };

    function cmColor(v, max) {
        const t = max ? v / max : 0;
        const a = [237, 245, 253], b = [25, 82, 155];
        return `rgb(${a.map((x, i) => Math.round(x + (b[i] - x) * Math.pow(t, .85))).join(',')})`;
    }

    function renderConfusion() {
        const demo = find('#sk-confusion-demo');
        if (!demo) return;
        const n = Number(find('#sk-cm-size', demo).value) || 2, m = cmData[n], max = Math.max(...m.flat());
        const selected = (demo.dataset.selected || '0,0').split(',').map(Number);
        const rSel = selected[0] < n ? selected[0] : 0, cSel = selected[1] < n ? selected[1] : 0;
        let html = '<div class="sk-cm-label" aria-hidden="true">REAL ↓ / PREZIS →</div>';
        for (let c = 0; c < n; c++) html += `<div class="sk-cm-label">Pred. ${c}</div>`;
        for (let r = 0; r < n; r++) {
            html += `<div class="sk-cm-label">Real ${r} →</div>`;
            for (let c = 0; c < n; c++) {
                const v = m[r][c], bg = cmColor(v, max), fg = v / max > .55 ? '#fff' : '#153650';
                html += `<button class="sk-cm-cell ${r === rSel && c === cSel ? 'is-selected' : r === rSel || c === cSel ? 'is-related' : ''}" type="button" data-sk-cm-r="${r}" data-sk-cm-c="${c}" aria-pressed="${r === rSel && c === cSel}" aria-label="Clasa reală ${r}, prezisă ${c}, ${v} observații" style="background:${bg};color:${fg}">${v}${n <= 5 ? `<small>${r === c ? 'corecte' : 'erori'}</small>` : ''}</button>`;
            }
        }
        const grid = find('#sk-cm-matrix', demo), detail = find('#sk-cm-detail', demo);
        if (!grid || !detail) return;
        grid.style.gridTemplateColumns = `minmax(70px,.8fr) repeat(${n},minmax(0,1fr))`;
        grid.innerHTML = html;
        const selectedValue = m[rSel][cSel], rowSum = m[rSel].reduce((a, b) => a + b, 0),
            diag = m.reduce((a, row, i) => a + row[i], 0), total = m.flat().reduce((a, b) => a + b, 0);
        const binary = n === 2 ? (rSel === 0 && cSel === 0 ? 'TN' : rSel === 0 && cSel === 1 ? 'FP' : rSel === 1 && cSel === 0 ? 'FN' : 'TP') : null;
        detail.innerHTML = `<strong>Celula (${rSel}, ${cSel})${binary ? ' · ' + binary + ' pentru clasa pozitivă 1' : ''}:</strong> ${selectedValue} observații reale din clasa ${rSel} au fost prezise drept clasa ${cSel}. ${rSel === cSel ? 'Sunt predicții corecte (diagonală).' : 'Sunt confuzii (în afara diagonalei).'} <strong>Rândul ${rSel}</strong> conține ${rowSum} observații reale, iar această celulă reprezintă ${fmt(100 * selectedValue / rowSum)}% dintre ele. Acuratețea totală a exemplului: ${diag}/${total} = ${fmt(100 * diag / total)}%.`;
    }

    function renderCV() {
        const demo = find('#sk-cv-demo');
        if (!demo) return;
        const k = Number(find('#sk-cv-k', demo).value), active = Math.min(Number(demo.dataset.active || 0), k - 1);
        demo.dataset.active = String(active);
        find('#sk-cv-k-out', demo).textContent = String(k);
        const rows = [];
        for (let row = 0; row < k; row++) {
            let cells = '';
            for (let c = 0; c < k; c++) cells += `<span class="sk-cv-bar ${c === row ? 'val' : ''}" title="La iterația ${row + 1}, fold-ul ${c + 1} este ${c === row ? 'validare' : 'antrenare'}">${c === row ? 'VAL' : 'TR'} ${c + 1}</span>`;
            rows.push(`<div class="sk-cv-row ${row === active ? 'is-active' : ''}"><span class="sk-cv-label">Iterația ${row + 1}</span><div class="sk-cv-bars">${cells}</div></div>`);
        }
        const cvGrid = find('#sk-cv-grid', demo), cvStatus = find('#sk-cv-status', demo);
        if (!cvGrid || !cvStatus) return;
        cvGrid.innerHTML = rows.join('');
        cvStatus.innerHTML = `<strong>Iterația ${active + 1}/${k}</strong>. Fold-ul ${active + 1} este folosit pentru <strong>validare</strong>, celelalte ${k - 1} pentru <strong>antrenare</strong>. Se creează un estimator nou, se face <code>fit</code> exclusiv pe antrenarea acestei iterații și se obține scorul de validare. ${k} iterații înseamnă ${k} antrenări independente pentru <em>o</em> configurație.`;
    }

    function renderPCA() {
        const demo = find('#sk-pca-demo');
        if (!demo) return;
        const noise = Number(find('#sk-pca-noise', demo)?.value || 0) / 100;
        const k = Number(find('#sk-pca-components', demo)?.value || 1);
        const output = find('#sk-pca-noise-out', demo);
        if (output) output.textContent = `${Math.round(noise * 100)}%`;
        const xx = [-3.4, -2.9, -2.45, -2.1, -1.3, -.7, -.2, .45, .9, 1.65, 2.4, 3.1],
            eps = [.9, -.55, 1.1, -.65, .5, -.7, 1.05, -1.05, .65, -.8, .45, -.25];
        const pts = xx.map((x, i) => [x, .80 * x + 1.7 * noise * eps[i]]);
        const n = pts.length;
        const mean = [pts.reduce((s, p) => s + p[0], 0) / n, pts.reduce((s, p) => s + p[1], 0) / n];
        const centered = pts.map(p => [p[0] - mean[0], p[1] - mean[1]]);
        const a = centered.reduce((s, p) => s + p[0] ** 2, 0) / (n - 1),
            c = centered.reduce((s, p) => s + p[1] ** 2, 0) / (n - 1),
            b = centered.reduce((s, p) => s + p[0] * p[1], 0) / (n - 1);
        const t = Math.sqrt((a - c) ** 2 + 4 * b * b), eig1 = (a + c + t) / 2, eig2 = (a + c - t) / 2;
        const theta = .5 * Math.atan2(2 * b, a - c), v = [Math.cos(theta), Math.sin(theta)], w = [-v[1], v[0]];
        const explained = eig1 / (eig1 + eig2), expl2 = eig2 / (eig1 + eig2);
        const scores = centered.map(p => [p[0] * v[0] + p[1] * v[1], p[0] * w[0] + p[1] * w[1]]);
        const recon = scores.map(t => [mean[0] + t[0] * v[0] + (k === 2 ? t[1] * w[0] : 0), mean[1] + t[0] * v[1] + (k === 2 ? t[1] * w[1] : 0)]);
        const err = pts.reduce((s, p, i) => s + (p[0] - recon[i][0]) ** 2 + (p[1] - recon[i][1]) ** 2, 0) / n;
        const W = 580, H = 384, xMin = 68, xMax = 538, yMin = 45, yMax = 335, domain = 5.4;
        const X = v => xMin + (v + domain) / (2 * domain) * (xMax - xMin);
        const Y = v => yMax - (v + domain) / (2 * domain) * (yMax - yMin);
        const ns = n => Number(n.toFixed(3)).toLocaleString('ro-RO', {maximumFractionDigits: 3});
        let grid = '', marks = '';
        for (let q = -4; q <= 4; q += 2) {
            grid += `<line x1="${X(q)}" y1="${yMin}" x2="${X(q)}" y2="${yMax}" stroke="#e4eaf4"/><line x1="${xMin}" y1="${Y(q)}" x2="${xMax}" y2="${Y(q)}" stroke="#e4eaf4"/>`;
            grid += `<text x="${X(q)}" y="${yMax + 18}" text-anchor="middle" class="sk-pca-tick">${q}</text><text x="${xMin - 11}" y="${Y(q) + 4}" text-anchor="end" class="sk-pca-tick">${q}</text>`;
        }
        pts.forEach((p, i) => {
            const r = recon[i];
            marks += `<line x1="${X(p[0]).toFixed(1)}" y1="${Y(p[1]).toFixed(1)}" x2="${X(r[0]).toFixed(1)}" y2="${Y(r[1]).toFixed(1)}" stroke="#d29e62" stroke-width="1.5" stroke-dasharray="4 4"/>`;
            marks += `<circle cx="${X(r[0]).toFixed(1)}" cy="${Y(r[1]).toFixed(1)}" r="6" fill="#0c8e87" opacity=".9" stroke="#fff" stroke-width="1.5"/>`;
        });
        pts.forEach(p => marks += `<circle cx="${X(p[0]).toFixed(1)}" cy="${Y(p[1]).toFixed(1)}" r="6.6" fill="#316db8" stroke="#fff" stroke-width="1.3"/>`);
        const cx = X(mean[0]), cy = Y(mean[1]);
        const pcLine = (u, length, color, label, dy) => {
            const x1 = X(mean[0] - u[0] * length), y1 = Y(mean[1] - u[1] * length), x2 = X(mean[0] + u[0] * length),
                y2 = Y(mean[1] + u[1] * length);
            return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3.3"/><circle cx="${cx}" cy="${cy}" r="4" fill="${color}"/><text x="${x2 + 5}" y="${y2 + dy}" class="sk-pca-label" fill="${color}">${label}</text>`;
        };
        const scatter = `<svg class="sk-pca-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="PCA: puncte 2D, axa PC1, axa PC2 și proiecțiile pe componente"><rect x="0" y="0" width="580" height="384" fill="#fff" rx="9"/>${grid}
      <line x1="${xMin}" y1="${Y(0)}" x2="${xMax}" y2="${Y(0)}" stroke="#aab8cf" stroke-width="1.3"/><line x1="${X(0)}" y1="${yMin}" x2="${X(0)}" y2="${yMax}" stroke="#aab8cf" stroke-width="1.3"/>
      ${pcLine(v, 3.8, '#0c8e87', 'PC1', -5)}${pcLine(w, 2.8, '#cc7c1d', 'PC2', 16)}${marks}
      <text x="${xMax}" y="${yMax + 36}" text-anchor="end" class="sk-pca-axis">caracteristica x₁</text><text x="${xMin}" y="25" class="sk-pca-axis">caracteristica x₂</text></svg>`;
        const maxScore = Math.max(3.6, ...scores.map(p => Math.abs(p[0]))) * 1.12;
        const scoreX = v => 65 + (v / maxScore + 1) / 2 * 440;
        let projection = '<line x1="65" y1="165" x2="505" y2="165" stroke="#7e9dbb" stroke-width="2"/><text x="65" y="188" text-anchor="start" class="sk-pca-tick">−PC1</text><text x="505" y="188" text-anchor="end" class="sk-pca-tick">+PC1</text>';
        scores.forEach((p, i) => {
            const x = scoreX(p[0]);
            projection += `<line x1="${x.toFixed(1)}" y1="146" x2="${x.toFixed(1)}" y2="165" stroke="#94afce"/><circle cx="${x.toFixed(1)}" cy="${146 - ((i % 3) * 25)}" r="6.5" fill="#316db8" stroke="#fff"/><text x="${x.toFixed(1)}" y="${126 - ((i % 3) * 25)}" text-anchor="middle" class="sk-pca-tick">${i + 1}</text>`;
        });
        const pct = 100 * explained, pct2 = 100 * expl2;
        const scoresSvg = `<svg class="sk-pca-svg" viewBox="0 0 580 384" role="img" aria-label="Proiecțiile observațiilor pe PC1 și proporția variației explicate"><rect width="580" height="384" rx="9" fill="#fff"/><text x="24" y="38" class="sk-pca-axis">Coordonatele noi ale observațiilor pe prima componentă</text>${projection}
      <text x="26" y="234" class="sk-pca-axis">Variație explicată</text><text x="26" y="266" class="sk-pca-label" fill="#0c8e87">PC1</text><rect x="85" y="246" width="410" height="20" rx="7" fill="#eaf0f8"/><rect x="85" y="246" width="${410 * explained}" height="20" rx="7" fill="#0c8e87"/><text x="505" y="263" class="sk-pca-tick">${ns(pct)}%</text>
      <text x="26" y="309" class="sk-pca-label" fill="#cc7c1d">PC2</text><rect x="85" y="289" width="410" height="20" rx="7" fill="#eaf0f8"/><rect x="85" y="289" width="${410 * expl2}" height="20" rx="7" fill="#cc7c1d"/><text x="505" y="305" class="sk-pca-tick">${ns(pct2)}%</text>
      <text x="26" y="350" class="sk-pca-tick">Păstrăm ${k} component${k === 1 ? 'ă' : 'e'}; variație cumulată ${ns(k === 1 ? pct : 100)}%</text></svg>`;
        find('#sk-pca-scatter', demo).innerHTML = scatter;
        find('#sk-pca-scores', demo).innerHTML = scoresSvg;
        find('#sk-pca-inspector', demo).innerHTML = `<strong>Covarianță învățată din date:</strong> S = [[${ns(a)}, ${ns(b)}], [${ns(b)}, ${ns(c)}]]. <strong>Valori proprii:</strong> λ₁=${ns(eig1)}, λ₂=${ns(eig2)}. <strong>Direcția PC1:</strong> (${ns(v[0])}; ${ns(v[1])}).`;
        find('#sk-pca-status', demo).innerHTML = `<strong>Rezultat PCA:</strong> PC1 explică <strong>${ns(pct)}%</strong> din variația acestui exemplu. Cu <strong>n_components=${k}</strong> păstrăm ${ns(k === 1 ? pct : 100)}% din variație; eroarea medie pătratică de reconstrucție a punctelor = <strong>${ns(err)}</strong>. ${k === 1 ? 'Punctele verzi sunt proiecțiile pe PC1 readuse în planul inițial.' : 'Cu toate componentele păstrate, reconstrucția reproduce punctele originale (în limita rotunjirii).'}`;
    }

    function renderRegMetrics() {
        const demo = find('#sk-reg-metrics-demo');
        if (!demo) return;
        const yReal = [3, 5, 4, 6];
        const slider = find('#sk-reg-slider', demo);
        if (!slider) return;
        const yPred = [2.5, 4.0, Number(slider.value), 5.5];
        const out = find('#sk-reg-slider-out', demo);
        if (out) out.textContent = Number(slider.value).toFixed(1);
        const mae = yReal.reduce((a, v, i) => a + Math.abs(v - yPred[i]), 0) / yReal.length;
        const mse = yReal.reduce((a, v, i) => a + (v - yPred[i]) ** 2, 0) / yReal.length;
        const mean = yReal.reduce((a, b) => a + b, 0) / yReal.length;
        const ssRes = yReal.reduce((a, v, i) => a + (v - yPred[i]) ** 2, 0);
        const ssTot = yReal.reduce((a, v) => a + (v - mean) ** 2, 0);
        const r2 = 1 - ssRes / ssTot;
        const width = 420, height = 210, padL = 44, padB = 28, padT = 16, padR = 18;
        const xStep = (width - padL - padR) / (yReal.length - 1), yMax = 8, yMin = 0;
        const px = i => padL + i * xStep,
            py = v => height - padB - ((v - yMin) / (yMax - yMin)) * (height - padT - padB);
        let pts = '';
        for (let i = 0; i < yReal.length; i++) {
            pts += `<line x1="${px(i)}" y1="${py(yReal[i])}" x2="${px(i)}" y2="${py(yPred[i])}" stroke="#d98928" stroke-dasharray="4 4" stroke-width="2"/>`;
            pts += `<circle cx="${px(i)}" cy="${py(yReal[i])}" r="6" fill="#2f76c1"/><circle cx="${px(i)}" cy="${py(yPred[i])}" r="6" fill="${i === 2 ? '#d97c17' : '#57a86a'}"/>`;
            pts += `<text x="${px(i)}" y="${height - 8}" text-anchor="middle" font-size="11" fill="#3c5878">obs. ${i + 1}</text>`;
        }
        let grid = '';
        for (let v = 0; v <= 8; v += 2) {
            grid += `<line x1="${padL}" x2="${width - padR}" y1="${py(v)}" y2="${py(v)}" stroke="#d9e6f3"/><text x="${padL - 10}" y="${py(v) + 4}" text-anchor="end" font-size="11" fill="#4c6b8c">${v}</text>`;
        }
        find('#sk-reg-points', demo).innerHTML = `<svg class="sk-reg-svg" viewBox="0 0 ${width} ${height}" aria-label="Comparație vizuală între valori reale și prezise"><rect x="0" y="0" width="${width}" height="${height}" fill="transparent"/>${grid}<line x1="${padL}" x2="${width - padR}" y1="${height - padB}" y2="${height - padB}" stroke="#6f8dac"/><line x1="${padL}" x2="${padL}" y1="${padT}" y2="${height - padB}" stroke="#6f8dac"/>${pts}<text x="${width / 2}" y="16" text-anchor="middle" font-size="13" font-weight="700" fill="#163e70">Albastru = y real, verde = predicție, portocaliu = predicția ajustată</text></svg>`;
        find('#sk-reg-metrics-out', demo).innerHTML = `<strong>Valori curente</strong>: MAE = ${fmt(mae)}, MSE = ${fmt(mse)}, RMSE = ${fmt(Math.sqrt(mse))}, R² = ${fmt(r2)}. Observă cum o abatere mai mare afectează MSE mai puternic decât MAE.`;
    }

    const gridVals = [
        {k: 1, metric: 'euclidean', sc: [.88, .90, .86, .89, .88]},
        {k: 3, metric: 'euclidean', sc: [.92, .91, .94, .93, .90]},
        {k: 5, metric: 'euclidean', sc: [.89, .90, .90, .91, .88]},
        {k: 1, metric: 'manhattan', sc: [.86, .89, .88, .88, .88]},
        {k: 3, metric: 'manhattan', sc: [.90, .93, .91, .90, .92]},
        {k: 5, metric: 'manhattan', sc: [.88, .91, .89, .90, .90]}
    ];

    function renderGrid() {
        const demo = find('#sk-grid-demo');
        if (!demo) return;
        const cv = Number(find('#sk-grid-cv', demo).value) || 3;
        const avgs = gridVals.map(c => c.sc.slice(0, cv).reduce((a, b) => a + b, 0) / cv);
        const best = Math.max(...avgs), bestIndex = avgs.indexOf(best);
        let selected = Number(demo.dataset.selected || 0);
        if (selected < 0 || selected >= 6) selected = 0;
        let html = '<div class="sk-grid-cell header">metric \ n</div>';
        for (const k of [1, 3, 5]) html += `<div class="sk-grid-cell header">k = ${k}</div>`;
        for (const metric of ['euclidean', 'manhattan']) {
            html += `<div class="sk-grid-cell header">${metric}</div>`;
            for (const k of [1, 3, 5]) {
                const idx = gridVals.findIndex(c => c.k === k && c.metric === metric), s = avgs[idx],
                    t = (s - .84) / (.95 - .84), a = [231, 243, 254], b = [58, 132, 208];
                const bg = `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(',')})`;
                html += `<button type="button" class="sk-grid-cell${idx === selected ? ' is-selected' : ''}" data-sk-grid-index="${idx}" style="background:${bg}" aria-pressed="${idx === selected}" aria-label="${metric}, k egal ${k}, medie ${fmt(s)}">${fmt(s)}${idx === bestIndex ? ' ★' : ''}</button>`;
            }
        }
        const gridTable = find('#sk-grid-table', demo), gridInspector = find('#sk-grid-inspector', demo),
            gridTotal = find('#sk-grid-total', demo);
        if (!gridTable || !gridInspector || !gridTotal) return;
        gridTable.innerHTML = html;
        const picked = gridVals[selected];
        gridInspector.innerHTML = `<h4>${picked.metric}, n_neighbors=${picked.k}</h4><p><strong>${cv} antrenări independente</strong>, fiecare cu un alt fold de validare:</p><div class="sk-fold-scores">${picked.sc.slice(0, cv).map((s, i) => `<span>F${i + 1}: ${fmt(s)}</span>`).join('')}</div><p><strong>mean_test_score = ${fmt(avgs[selected])}</strong> (media celor ${cv} scoruri de validare)</p><p>${selected === bestIndex ? '★ Aceasta este combinația cea mai bună din demonstrație.' : 'Comparația se face între mediile tuturor combinațiilor.'}</p>`;
        const winner = gridVals[bestIndex];
        gridTotal.innerHTML = `<strong>${3 * 2} combinații × ${cv} fold-uri = ${3 * 2 * cv} antrenări</strong> pentru căutare; cu <code>refit=True</code> se execută încă o antrenare pe întregul set transmis lui <code>search.fit</code>. <strong>best_params_ (ilustrativ)</strong>: <code>{'kneighborsclassifier__n_neighbors': ${winner.k}, 'kneighborsclassifier__metric': '${winner.metric}'}</code>. <strong>best_score_</strong> ≈ ${fmt(best)}. Valorile se schimbă în practică în funcție de setul de date și de split-uri.`;
    }

    function init() {
        document.querySelectorAll('.onia-sklearn-lesson:not([data-sk-initialized])').forEach(lesson => {
            lesson.dataset.skInitialized = '1';
            const demo = find('#sk-prep-demo', lesson);
            if (demo) demo.dataset.testValue = '';
            renderStratify();
            renderPrep();
            renderPipeline();
            renderConfusion();
            renderCV();
            renderGrid();
            renderRegMetrics();
            renderPCA();
        });
    }

    function setExerciseFeedback(key, ok, goodText, badText) {
        const box = document.querySelector(`[data-sk-ex-feedback="${key}"]`);
        if (!box) return;
        box.textContent = ok ? goodText : badText;
        box.style.color = ok ? '#187854' : '#a36012';
    }

    document.addEventListener('click', e => {

        const b = e.target.closest('button');
        if (!b || !b.closest('.onia-sklearn-lesson')) return;
        const strat = b.dataset.skStratify;
        if (strat) {
            find('#sk-stratify-demo').dataset.mode = strat;
            renderStratify();
            return;
        }
        const pipe = b.dataset.skPipe;
        if (pipe) {
            const d = find('#sk-pipeline-demo');
            d.dataset.mode = pipe;
            d.dataset.step = '0';
            renderPipeline();
            return;
        }
        if (b.id === 'sk-pipeline-prev' || b.id === 'sk-pipeline-next') {
            const d = find('#sk-pipeline-demo');
            d.dataset.step = String(Math.min(3, Math.max(0, Number(d.dataset.step || 0) + (b.id === 'sk-pipeline-next' ? 1 : -1))));
            renderPipeline();
            return;
        }
        if (b.id === 'sk-cv-prev' || b.id === 'sk-cv-next') {
            const d = find('#sk-cv-demo'), k = Number(find('#sk-cv-k').value), change = b.id === 'sk-cv-next' ? 1 : -1;
            d.dataset.active = String((Number(d.dataset.active || 0) + change + k) % k);
            renderCV();
            return;
        }
        if (b.dataset.skCmR !== undefined) {
            find('#sk-confusion-demo').dataset.selected = b.dataset.skCmR + ',' + b.dataset.skCmC;
            renderConfusion();
            return;
        }
        if (b.dataset.skGridIndex !== undefined) {
            find('#sk-grid-demo').dataset.selected = b.dataset.skGridIndex;
            renderGrid();
            return;
        }
        if (b.dataset.skEx) {
            const ok = b.dataset.skCorrect === 'true';
            setExerciseFeedback(b.dataset.skEx, ok, 'Corect! Răspunsul este justificat de protocolul explicat în lecție.', 'Nu chiar. Recitește explicația din secțiunea relevantă și încearcă din nou.');
            return;
        }
        if (b.dataset.skCheckMatch) {
            const ok = (document.querySelector('[data-sk-match="m1"]')?.value === 'a' && document.querySelector('[data-sk-match="m2"]')?.value === 'b' && document.querySelector('[data-sk-match="m3"]')?.value === 'c');
            setExerciseFeedback('match1', ok, 'Foarte bine! fit învață, predict produce ieșiri, iar confusion_matrix compară y_true cu y_pred.', 'Mai verifică asocierile: fit învață, predict prezice, iar confusion_matrix compară predicțiile cu valorile reale.');
            return;
        }
        if (b.dataset.skAnswer) {
            const good = b.dataset.skAnswer === 'correct';
            find('#sk-quiz-feedback').textContent = good ? 'Corect! În train am învățat parametrii; pe test aplicăm doar transformarea învățată.' : 'Reverifică fluxul: transformarea se aplică și pe test, dar statistica nu se reînvață acolo.';
            find('#sk-quiz-feedback').style.color = good ? '#187854' : '#a36012';
        }
    });
    document.addEventListener('change', e => {
        if (!e.target.closest('.onia-sklearn-lesson')) return;
        if (e.target.id === 'sk-prep-select') {
            find('#sk-prep-demo').dataset.testValue = '';
            renderPrep();
        }
        if (e.target.id === 'sk-cm-size') {
            find('#sk-confusion-demo').dataset.selected = '0,0';
            renderConfusion();
        }
        if (e.target.id === 'sk-grid-cv') renderGrid();
        if (e.target.id === 'sk-pca-components') renderPCA();
    });
    document.addEventListener('input', e => {
        if (!e.target.closest('.onia-sklearn-lesson')) return;
        if (e.target.id === 'sk-cv-k') {
            find('#sk-cv-demo').dataset.active = '0';
            renderCV();
        }
        if (e.target.id === 'sk-reg-slider') renderRegMetrics();
        if (e.target.id === 'sk-pca-noise') renderPCA();
        if (e.target.id === 'sk-prep-value') {
            const demo = find('#sk-prep-demo'), key = find('#sk-prep-select').value, p = preps[key];
            demo.dataset.testValue = e.target.value;
            const x = Number(e.target.value), value = p.transform(x);
            const output = find('#sk-prep-value-out');
            if (output) output.textContent = String(x);
            const testDisplay = find('#sk-prep-test-in');
            if (testDisplay) testDisplay.innerHTML = marks([x], true);
            const res = find('#sk-prep-test-out');
            if (res) res.innerHTML = marks([fmt(value)], true);
            const label = find('#sk-prep-value-label');
            if (label) label.textContent = fmt(value);
            const plot = find('#sk-prep-plot-dynamic');
            if (plot) plot.innerHTML = prepPlot(p.train.map(p.transform), value, Math.min(-1, ...p.train.map(p.transform), value), Math.max(1, ...p.train.map(p.transform), value));
        }
    });
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true}); else init();
    if (document.body) new MutationObserver(init).observe(document.body, {childList: true, subtree: true});
})();
