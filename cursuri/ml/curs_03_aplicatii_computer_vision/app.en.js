'use strict';
const $ = id => document.getElementById(id);
const fmt = (v, n = 2) => Number(v).toFixed(n).replace('.', ',');
const cap = (x, lo, hi) => Math.max(lo, Math.min(hi, x));

// 01. Imagine sintetică / sarcini de Computer Vision
const sceneInfo = {
    classification: ["CLASSIFICATION", '(B, C)', 'imaginea', "a distribution over classes"],
    detection: ["DETECTION", "N × (box, class, score)", "each object", "N varies after post-processing"],
    semantic: ["SEMANTIC SEGMENTATION", '(B, C, H, W)', "each pixel", "one class per pixel"],
    instance: ["INSTANCE SEGMENTATION", "N × (box, class, mask)", "each instance", "N individual masks"]
};

function setScene(mode) {
    $('cv-scene').dataset.mode = mode;
    const [label, shape, unit, description] = sceneInfo[mode];
    $('scene-mode-label').textContent = label;
    $('scene-shape').textContent = shape;
    $('scene-unit').textContent = unit;
    $('scene-description').textContent = description;
    document.querySelectorAll('.scene-btn').forEach(b => b.classList.toggle('active', b.dataset.scene === mode));
}

document.querySelectorAll('.scene-btn').forEach(b => b.addEventListener('click', () => setScene(b.dataset.scene)));
setScene('classification');

// 02. Softmax stabil numeric
const logitInputs = ['logit-a', 'logit-b', 'logit-c', 'temperature'];

function updateSoftmax() {
    const z = logitInputs.slice(0, 3).map(id => Number($(id).value));
    const t = Number($('temperature').value);
    logitInputs.forEach(id => $(id + '-val').textContent = fmt($(id).value, 1));
    const max = Math.max(...z.map(v => v / t));
    const exp = z.map(v => Math.exp(v / t - max));
    const sum = exp.reduce((a, b) => a + b, 0);
    const p = exp.map(v => v / sum), names = ["car", "person", "building"];
    $('softmax-bars').innerHTML = p.map((v, i) => `<div class="bar-row"><span>${names[i]}</span><div class="bar-track"><div class="bar-fill" style="width:${v * 100}%"></div></div><strong>${fmt(v * 100, 1)}%</strong></div>`).join('');
    $('softmax-class').textContent = names[p.indexOf(Math.max(...p))];
    $('softmax-entropy').textContent = fmt(-p.reduce((a, v) => a + (v ? v * Math.log(v) : 0), 0), 3);
    $('softmax-sum').textContent = fmt(p.reduce((a, b) => a + b, 0), 3);
}

logitInputs.forEach(id => $(id).addEventListener('input', updateSoftmax));
updateSoftmax();

// 03. Cross-correlation (kernel 3x3, stride=1, padding=0)
const inputMatrix = Array.from({length: 7}, (_, r) => Array.from({length: 7}, (_, c) => (c >= 2 && c <= 4 && r >= 1 && r <= 5) ? 8 : 2));
const kernels = {
    edge: [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]],
    blur: [[1 / 9, 1 / 9, 1 / 9], [1 / 9, 1 / 9, 1 / 9], [1 / 9, 1 / 9, 1 / 9]],
    sharp: [[0, -1, 0], [-1, 5, -1], [0, -1, 0]],
    identity: [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
};
let activeConv = [1, 1];

function updateConv() {
    const kernel = kernels[$('kernel-select').value], inGrid = $('conv-input'), outGrid = $('conv-output'),
        kerGrid = $('conv-kernel');
    inGrid.replaceChildren();
    outGrid.replaceChildren();
    kerGrid.replaceChildren();
    for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = inputMatrix[r][c];
        if (r >= activeConv[0] && r < activeConv[0] + 3 && c >= activeConv[1] && c < activeConv[1] + 3) cell.classList.add('receptive');
        inGrid.appendChild(cell);
    }
    kernel.flat().forEach(v => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = (v === 1 / 9 ? '⅑' : Number.isInteger(v) ? String(v) : fmt(v, 2));
        kerGrid.appendChild(cell)
    });
    let selected = 0;
    for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
        let out = 0;
        for (let kr = 0; kr < 3; kr++) for (let kc = 0; kc < 3; kc++) out += inputMatrix[r + kr][c + kc] * kernel[kr][kc];
        const cell = document.createElement('div');
        cell.className = 'cell' + (r === activeConv[0] && c === activeConv[1] ? ' selected' : '');
        cell.textContent = Math.abs(out) < 1e-9 ? '0' : fmt(out, 1);
        cell.title = `Output [${r}, ${c}] = ${out.toFixed(3)}`;
        cell.addEventListener('click', () => {
            activeConv = [r, c];
            updateConv()
        });
        outGrid.appendChild(cell);
        if (r === activeConv[0] && c === activeConv[1]) selected = out;
    }
    $('conv-value').textContent = fmt(selected, 2);
    $('conv-operation').textContent = `${fmt(inputMatrix[activeConv[0]][activeConv[1]], 0)} × ${kernel[0][0] === 1 / 9 ? '1/9' : kernel[0][0]} + ... = ${fmt(selected, 2)}`;
}

$('kernel-select').addEventListener('change', updateConv);
updateConv();
$('patch-size').addEventListener('change', () => {
    let p = Number($('patch-size').value);
    $('patch-label').textContent = p;
    $('patch-count').textContent = `${(224 / p) ** 2} patches + CLS token`
});

// 04. NMS greedy, pe aceeași clasă
const proposals = [{id: 'A', x: 93, y: 130, w: 298, h: 158, s: .96}, {
    id: 'B',
    x: 112,
    y: 139,
    w: 279,
    h: 148,
    s: .87
}, {id: 'C', x: 67, y: 122, w: 291, h: 165, s: .63}, {id: 'D', x: 403, y: 189, w: 110, h: 98, s: .59}, {
    id: 'E',
    x: 405,
    y: 178,
    w: 112,
    h: 105,
    s: .46
}];

function iouRects(a, b) {
    const w = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)),
        h = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
    const inter = w * h;
    return inter / (a.w * a.h + b.w * b.h - inter) || 0
}

function drawNMS() {
    const scoreTh = Number($('nms-score').value), iouTh = Number($('nms-iou').value);
    $('nms-score-val').textContent = fmt(scoreTh);
    $('nms-iou-val').textContent = fmt(iouTh);
    const candidates = proposals.filter(p => p.s >= scoreTh).sort((a, b) => b.s - a.s), kept = [], suppressed = [];
    candidates.forEach(p => {
        if (kept.some(k => iouRects(p, k) > iouTh)) suppressed.push(p); else kept.push(p)
    });
    const ns = 'http://www.w3.org/2000/svg', layer = $('nms-boxes');
    layer.replaceChildren();
    const all = [...proposals].sort((a, b) => a.s - b.s);
    for (const p of all) {
        const color = kept.includes(p) ? '#1d6fd2' : suppressed.includes(p) ? '#dc8b52' : '#aab6c6';
        const r = document.createElementNS(ns, 'rect');
        Object.entries({
            x: p.x,
            y: p.y,
            width: p.w,
            height: p.h,
            rx: 4,
            fill: 'none',
            stroke: color,
            'stroke-width': kept.includes(p) ? 3.2 : 1.9,
            'stroke-dasharray': kept.includes(p) ? '' : '7 5'
        }).forEach(([k, v]) => r.setAttribute(k, v));
        layer.appendChild(r);
        const tx = document.createElementNS(ns, 'text');
        tx.setAttribute('x', p.x + 5);
        tx.setAttribute('y', p.y + 14);
        tx.setAttribute('font-size', 11);
        tx.setAttribute('font-weight', 'bold');
        tx.setAttribute('fill', color);
        tx.setAttribute('paint-order', 'stroke');
        tx.setAttribute('stroke', '#f7fbff');
        tx.setAttribute('stroke-width', '3');
        tx.textContent = `${p.id} · ${p.s.toFixed(2)}`;
        layer.appendChild(tx);
    }
    $('nms-count').textContent = String(kept.length);
    $('nms-explanation').textContent = `${suppressed.length} removed by IoU; ${proposals.length - candidates.length} sub prag`;
}

['nms-score', 'nms-iou'].forEach(id => $(id).addEventListener('input', drawNMS));
drawNMS();

// 05. Segmentare semantică - 16x12, clase 0-3
const segColors = ['#dae8fa', '#8f73df', '#2c8eca', '#2bb99a'], rows = 12, cols = 16;
const gt = Array.from({length: rows * cols}, (_, i) => {
    const r = Math.floor(i / cols), c = i % cols;
    if (r >= 9) return 1;
    if (c >= 3 && c <= 8 && r >= 3 && r <= 8) return 2;
    if (c >= 12 && c <= 13 && r >= 5 && r <= 9) return 3;
    return 0;
});
const errors = [7, 23, 37, 51, 57, 67, 73, 79, 93, 101, 113, 125, 141, 151, 164, 183];

function initialSegPred() {
    let p = [...gt];
    errors.forEach((i, j) => p[i] = (p[i] + (j % 3) + 1) % 4);
    return p
}

let pred = initialSegPred(), modified = new Set();

function renderSeg() {
    const gtGrid = $('gt-grid'), pGrid = $('pred-grid');
    gtGrid.replaceChildren();
    pGrid.replaceChildren();
    pGrid.classList.add('editable');
    for (let i = 0; i < gt.length; i++) {
        const c0 = document.createElement('div');
        c0.className = 'cell';
        c0.style.background = segColors[gt[i]];
        c0.title = `GT: ${gt[i]}`;
        gtGrid.appendChild(c0);
        const cp = document.createElement('button');
        cp.type = 'button';
        cp.className = 'cell';
        cp.setAttribute('aria-label', `Pixel ${Math.floor(i / cols) + 1},${i % cols + 1}; class ${pred[i]}`);
        cp.style.background = segColors[pred[i]];
        cp.addEventListener('click', () => {
            pred[i] = Number($('paint-class').value);
            modified.add(i);
            renderSeg()
        });
        pGrid.appendChild(cp);
    }
    const present = [], total = gt.length, correct = gt.filter((x, i) => x === pred[i]).length;
    for (let c = 0; c < 4; c++) {
        let inter = 0, union = 0;
        for (let i = 0; i < total; i++) {
            const a = gt[i] === c, b = pred[i] === c;
            if (a && b) inter++;
            if (a || b) union++
        }
        if (union > 0) present.push(inter / union)
    }
    $('seg-miou').textContent = fmt(100 * present.reduce((a, b) => a + b, 0) / present.length, 1) + '%';
    $('seg-acc').textContent = fmt(100 * correct / total, 1) + '%';
    $('seg-changes').textContent = String(modified.size);
}

$('seg-reset').addEventListener('click', () => {
    pred = initialSegPred();
    modified = new Set();
    renderSeg()
});
renderSeg();

// 06. Mask queries; simulare ilustrativă, cu scoruri statice
const queries = [{label: "car #1", s: .97}, {label: "car #2", s: .94}, {
    label: "person #1",
    s: .92
}, {label: "person #2", s: .84}, {label: 'no-object', s: .22}, {label: 'no-object', s: .08}, {
    label: "car ? (FP)",
    s: .58
}, {label: 'no-object', s: .17}];

function updateQueries() {
    const q = Number($('query-count').value), threshold = Number($('query-score').value);
    $('query-count-val').textContent = q;
    $('query-score-val').textContent = fmt(threshold);
    const out = queries.slice(0, q), accepted = out.filter(v => v.label !== 'no-object' && v.s >= threshold);
    $('query-tiles').innerHTML = out.map((v, i) => {
        const kept = v.label !== 'no-object' && v.s >= threshold;
        return `<div class="query-tile ${kept ? 'kept' : v.label === 'no-object' ? 'no-object' : 'rejected'}"><strong>Q${i + 1}</strong><small>${v.label}</small><span>${fmt(v.s)} · ${kept ? "retained" : v.label === 'no-object' ? "background" : 'respins'}</span></div>`
    }).join('');
    $('query-result').textContent = String(accepted.length);
    $('query-shape').textContent = `${accepted.length} final masks / ${q} queries`;
}

['query-count', 'query-score'].forEach(id => $(id).addEventListener('input', updateQueries));
updateQueries();


// 04b. Arhitecturi moderne pentru detecție
const detectorArchitectures = {
    yolo: {
        title: "YOLO — dense detector designed for speed",
        problem: "The image is processed in a single stream, and predictions are generated directly at multiple spatial scales.",
        output: 'head-uri dense multi-scale',
        post: "NMS almost always required",
        strength: "low latency and fast inference",
        tradeoff: "accuracy on small objects / sensitive tuning",
        notes: "The YOLO family is preferred when real-time inference is critical. Exact designs differ across versions, but the core idea remains: efficient dense predictions with simple post-processing.",
        steps: [['Backbone + neck', "Feature maps are extracted at multiple resolutions."], ["Detection head", "Boxes, scores and classes are emitted for each location/scale."], ["Filtering + NMS", "Redundant detections are consolidated."]],
        bullets: [["Typical use", "video, smart cameras, robotics, edge devices"], ['Output conceptual', "boxes + scores + classes at multiple scales"], ["When it excels", "when speed matters more than detailed structural analysis"]],
        diagram: ["image", 'backbone + neck', 'head-uri dense', "NMS → predictions"],
        figure: `<svg class="arch-svg" viewBox="0 0 760 320" role="img" aria-label="YOLO diagram"><rect width="760" height="320" rx="18" fill="#f7fbff"/><g font-family="Inter,Arial,sans-serif"><rect x="30" y="96" width="118" height="128" rx="18" fill="#dceefe" stroke="#7aa7d6"/><text x="89" y="86" text-anchor="middle" font-size="18" fill="#173550">Image</text><rect x="200" y="72" width="135" height="176" rx="18" fill="#e5f8f4" stroke="#79c7ba"/><text x="268" y="62" text-anchor="middle" font-size="18" fill="#173550">Backbone</text><rect x="392" y="54" width="128" height="72" rx="16" fill="#fff4df" stroke="#e6b86a"/><rect x="392" y="136" width="128" height="72" rx="16" fill="#fff4df" stroke="#e6b86a"/><rect x="392" y="218" width="128" height="48" rx="16" fill="#fff4df" stroke="#e6b86a"/><text x="456" y="44" text-anchor="middle" font-size="18" fill="#173550">Multiscale heads</text><text x="456" y="97" text-anchor="middle" font-size="16" fill="#173550">large scale</text><text x="456" y="179" text-anchor="middle" font-size="16" fill="#173550">medium scale</text><text x="456" y="247" text-anchor="middle" font-size="16" fill="#173550">fine scale</text><rect x="578" y="108" width="150" height="102" rx="18" fill="#efe9ff" stroke="#9f8bd3"/><text x="653" y="98" text-anchor="middle" font-size="18" fill="#173550">Post-processing</text><text x="653" y="145" text-anchor="middle" font-size="16" fill="#173550">boxes</text><text x="653" y="171" text-anchor="middle" font-size="16" fill="#173550">scores</text><text x="653" y="197" text-anchor="middle" font-size="16" fill="#173550">NMS</text><path d="M149 160h40M336 160h40M521 160h40" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round"/><path d="M180 149l12 11-12 11M367 149l12 11-12 11M552 149l12 11-12 11" fill="none" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg><div class="arch-legend"><span>one-stage: predictions emerge directly from feature maps</span><span>usually requires NMS to remove redundant boxes</span></div>`
    },
    faster: {
        title: "Faster R-CNN — two-stage detector",
        problem: "Candidate regions are proposed first, then each region is refined and classified.",
        output: "ROI features → box + class",
        post: "Class-wise NMS after score filtering",
        strength: "solid accuracy and clear interpretation",
        tradeoff: "slower than one-stage detectors",
        notes: "Faster R-CNN separates region generation from classification. It is a useful teaching reference because it clearly illustrates the detection pipeline.",
        steps: [['RPN', "The Region Proposal Network generates candidates."], ['ROI Align', "Each region is sampled into a fixed representation."], ["Final heads", "Classification, box regression and optionally a mask head."]],
        bullets: [["Typical use", "benchmarks, applications where accuracy is a priority"], ["Advantage", 'foarte natural de extins la instance segmentation'], ["Important connection", 'Mask R-CNN = Faster R-CNN + mask head']],
        diagram: ["image", 'RPN', 'ROI Align', 'class + box'],
        figure: `<img src="assets/figs/fig25.png" alt="Faster R-CNN diagram with RoI pooling, classification and box regression"><div class="arch-legend"><span>two stages: proposals → classification/regression</span><span>clear foundation for Mask R-CNN</span></div>`
    },
    detr: {
        title: 'DETR — set prediction cu transformer',
        problem: "Objects are predicted by a fixed set of queries; the model learns a bipartite correspondence between predictions and ground-truth objects.",
        output: "Q queries → class + box",
        post: "no NMS in the original formulation",
        strength: "elegant end-to-end formulation",
        tradeoff: "slower convergence in the original version",
        notes: "DETR changes the perspective: instead of refining many proposals, it directly produces a set of objects and a no-object class for unused queries.",
        steps: [['Backbone', "A feature map is obtained."], ['Encoder/decoder', "Queries learn to search for objects using attention."], ['Hungarian matching', "Training associates predictions with ground-truth objects."]],
        bullets: [["Typical use", "set-like prediction, conceptually clean design"], ["Teaching point", "clearly illustrates the connection to Transformers"], ["Caution", "less suited, without modifications, to strict latency constraints"]],
        diagram: ["image", 'backbone', 'queries + transformer', "set of objects"],
        figure: `<svg class="arch-svg" viewBox="0 0 760 320" role="img" aria-label="DETR diagram"><rect width="760" height="320" rx="18" fill="#f7fbff"/><g font-family="Inter,Arial,sans-serif"><rect x="28" y="102" width="120" height="116" rx="18" fill="#dceefe" stroke="#7aa7d6"/><text x="88" y="92" text-anchor="middle" font-size="18" fill="#173550">Image</text><rect x="190" y="85" width="120" height="150" rx="18" fill="#e5f8f4" stroke="#79c7ba"/><text x="250" y="75" text-anchor="middle" font-size="18" fill="#173550">Backbone</text><rect x="354" y="56" width="172" height="204" rx="18" fill="#efe9ff" stroke="#9f8bd3"/><text x="440" y="44" text-anchor="middle" font-size="18" fill="#173550">Transformer</text><text x="440" y="120" text-anchor="middle" font-size="17" fill="#173550">encoder</text><text x="440" y="182" text-anchor="middle" font-size="17" fill="#173550">decoder + queries</text><rect x="582" y="80" width="144" height="160" rx="18" fill="#fff4df" stroke="#e6b86a"/><text x="654" y="70" text-anchor="middle" font-size="18" fill="#173550">Set-like predictions</text><text x="654" y="132" text-anchor="middle" font-size="16" fill="#173550">class / no-object</text><text x="654" y="160" text-anchor="middle" font-size="16" fill="#173550">bounding box</text><text x="654" y="188" text-anchor="middle" font-size="16" fill="#173550">no NMS</text><g fill="#5b6d7f"><circle cx="338" cy="110" r="6"/><circle cx="338" cy="140" r="6"/><circle cx="338" cy="170" r="6"/><circle cx="338" cy="200" r="6"/></g><text x="320" y="87" font-size="14" fill="#567287">object queries</text><path d="M149 160h30M311 160h24M527 160h30" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round"/><path d="M173 149l12 11-12 11M329 149l12 11-12 11M557 149l12 11-12 11" fill="none" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg><div class="arch-legend"><span>bipartite matching between queries and ground-truth objects</span><span>a <em>no-object</em> class absorbs unused queries</span></div>`
    },
    deformable: {
        title: "Deformable DETR — sparse attention, better convergence",
        problem: "Retains the query-based paradigm, but reduces attention cost and accelerates learning by sampling relevant points.",
        output: 'queries multi-scale',
        post: "usually no NMS",
        strength: "more efficient and better on small objects",
        tradeoff: "more sophisticated implementation",
        notes: "Deformable DETR addresses one of the major limitations of the original DETR: slow convergence and difficulty with fine details.",
        steps: [['Feature pyramid', "Multiple resolutions are used."], ['Deformable attention', "Each query attends only to relevant points."], ['Set prediction', "The interpretation of objects as a set is preserved."]],
        bullets: [["Major advantage", "improves small-object performance and training speed"], ["Legacy", "preserves the spirit of DETR"], ["Use", "useful when comparing efficiency and conceptual elegance"]],
        diagram: ["image", 'features multi-scale', 'deformable attention', "final predictions"],
        figure: `<svg class="arch-svg" viewBox="0 0 760 320" role="img" aria-label="Deformable DETR diagram"><rect width="760" height="320" rx="18" fill="#f7fbff"/><g font-family="Inter,Arial,sans-serif"><rect x="26" y="101" width="112" height="118" rx="18" fill="#dceefe" stroke="#7aa7d6"/><text x="82" y="91" text-anchor="middle" font-size="18" fill="#173550">Image</text><rect x="176" y="52" width="96" height="60" rx="16" fill="#e5f8f4" stroke="#79c7ba"/><rect x="176" y="130" width="124" height="68" rx="16" fill="#e5f8f4" stroke="#79c7ba"/><rect x="176" y="218" width="146" height="58" rx="16" fill="#e5f8f4" stroke="#79c7ba"/><text x="250" y="38" text-anchor="middle" font-size="18" fill="#173550">Feature pyramid</text><rect x="374" y="74" width="178" height="170" rx="18" fill="#efe9ff" stroke="#9f8bd3"/><text x="463" y="60" text-anchor="middle" font-size="18" fill="#173550">Deformable attention</text><g fill="#7d65c6"><circle cx="428" cy="130" r="5"/><circle cx="454" cy="115" r="5"/><circle cx="474" cy="150" r="5"/><circle cx="500" cy="176" r="5"/><circle cx="520" cy="136" r="5"/></g><path d="M434 122c22-31 70-24 90 9" fill="none" stroke="#7d65c6" stroke-width="3" stroke-dasharray="6 6"/><path d="M474 151c12 28 37 44 57 36" fill="none" stroke="#7d65c6" stroke-width="3" stroke-dasharray="6 6"/><rect x="600" y="92" width="128" height="132" rx="18" fill="#fff4df" stroke="#e6b86a"/><text x="664" y="80" text-anchor="middle" font-size="18" fill="#173550">Predictions</text><text x="664" y="144" text-anchor="middle" font-size="16" fill="#173550">multiscale queries</text><text x="664" y="174" text-anchor="middle" font-size="16" fill="#173550">better on small objects</text><path d="M139 160h20M323 160h32M553 160h30" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round"/><path d="M155 149l12 11-12 11M342 149l12 11-12 11M581 149l12 11-12 11" fill="none" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg><div class="arch-legend"><span>sparse attention, only at relevant points</span><span>faster convergence than original DETR</span></div>`
    }
};

function renderDetectorArchitecture(key) {
    const m = detectorArchitectures[key];
    if (!m) return;
    $('det-arch-title').textContent = m.title;
    $('det-arch-problem').textContent = m.problem;
    $('det-arch-output').textContent = m.output;
    $('det-arch-post').textContent = m.post;
    $('det-arch-strength').textContent = m.strength;
    $('det-arch-tradeoff').textContent = m.tradeoff;
    $('det-arch-notes').textContent = m.notes;
    $('det-arch-steps').innerHTML = m.steps.map(([title, desc], i) => `<div class="step"><strong>${i + 1}. ${title}</strong><span>${desc}</span></div>`).join('');
    $('det-arch-bullets').innerHTML = m.bullets.map(([title, desc]) => `<div class="bullet"><strong>${title}</strong><span>${desc}</span></div>`).join('');
    $('det-arch-diagram').innerHTML = `<div class="arch-figure"><img src="assets/architectures/${key}.en.svg" alt="Professional diagram of the architecture stages of ${m.title}"></div>`;
    document.querySelectorAll('#det-arch-tabs .family-tab').forEach(button => button.classList.toggle('active', button.dataset.det === key));
}

document.querySelectorAll('#det-arch-tabs .family-tab').forEach(b => b.addEventListener('click', () => renderDetectorArchitecture(b.dataset.det)));
renderDetectorArchitecture('yolo');

// 06c. Arhitecturi moderne pentru segmentare
const segArchitectures = {
    unet: {
        title: "U-Net / DeepLab — pixel-wise semantics",
        problem: "The target is a label for each pixel; the emphasis is on spatial context, resolution and region boundaries.",
        output: '(B,C,H,W) → argmax',
        task: "semantic segmentation",
        strength: "very suitable for dense masks",
        cost: "instance separation is not explicitly modeled",
        notes: "U-Net excels in medical imaging and limited-data settings. DeepLab adds multiscale context and dilation, making it very strong for natural scenes.",
        steps: [['Encoder', 'extrage caracteristici cu receptive field mare'], ['Decoder / upsampling', "reconstructs spatial detail"], ['Pixel classifier', "produces class scores per pixel"]],
        bullets: [["Examples", 'U-Net, U-Net++, DeepLabV3/V3+'], ["Metrics", 'mIoU, Dice, pixel accuracy'], ["Required data", "pixel-wise masks"]],
        diagram: ["image", 'encoder', 'decoder', "semantic map"],
        figure: `<img src="assets/figs/fig29.png" alt="Encoder-decoder architecture for semantic segmentation"><div class="arch-thumbs"><img src="assets/figs/fig30.png" alt="Pooling and unpooling"><img src="assets/figs/fig31.png" alt="Illustrated transposed convolution"><img src="assets/figs/fig32.png" alt="Illustrated transposed convolution"></div>`
    },
    maskrcnn: {
        title: "Mask R-CNN — regions + instance masks",
        problem: "Each object is detected and segmented separately; the output is a variable-size set of instances.",
        output: "N boxes + N masks + N classes",
        task: 'instance segmentation',
        strength: "clearly explains individual objects",
        cost: "heavier pipeline and required post-processing",
        notes: "Mask R-CNN is a classical instance segmentation architecture and provides a useful bridge between detection and segmentation.",
        steps: [['RPN + ROI Align', "relevant regions are selected"], ['Box/class heads', "localization and class are refined"], ['Mask head', "a mask is produced for each ROI"]],
        bullets: [["Examples", 'Mask R-CNN, Cascade Mask R-CNN'], ["Metrics", 'Mask AP, box AP'], ["Required data", "individual masks + classes"]],
        diagram: ["image", 'ROI proposals', "box/class heads", "per-instance masks"],
        figure: `<img src="assets/figs/fig25.png" alt="Mask R-CNN / Faster R-CNN diagram with classification and regression"><div class="arch-legend"><span>extends Faster R-CNN with a mask head</span><span>output: boxes, classes and instance masks</span></div>`
    },
    mask2former: {
        title: "Mask2Former — universal segmentation with masked attention",
        problem: "Uses a set of queries and masked attention to unify semantic, instance and panoptic segmentation.",
        output: "Q masks + associated classes",
        task: "semantic / instance / panoptic",
        strength: "one model for several tasks",
        cost: "more complex conceptually and computationally",
        notes: "Mask2Former is especially suitable for a modern course because it shows how a single framework can cover different tasks.",
        steps: [['Backbone + pixel decoder', "dense representations are generated"], ['Queries + masked attention', "each query specializes"], ['Task-specific decoding', "the output is interpreted according to the selected task"]],
        bullets: [["Key idea", "unifies three major tasks"], ["Metrics", 'mIoU, AP, PQ'], ["Strength", "excellent versatility"]],
        diagram: ["image", 'pixel decoder', 'queries', "masks + classes"],
        figure: `<svg class="arch-svg" viewBox="0 0 760 320" role="img" aria-label="Mask2Former diagram"><rect width="760" height="320" rx="18" fill="#f7fbff"/><g font-family="Inter,Arial,sans-serif"><rect x="24" y="98" width="118" height="124" rx="18" fill="#dceefe" stroke="#7aa7d6"/><text x="83" y="88" text-anchor="middle" font-size="18" fill="#173550">Image</text><rect x="184" y="80" width="138" height="160" rx="18" fill="#e5f8f4" stroke="#79c7ba"/><text x="253" y="68" text-anchor="middle" font-size="18" fill="#173550">Backbone + pixel decoder</text><rect x="370" y="72" width="166" height="176" rx="18" fill="#efe9ff" stroke="#9f8bd3"/><text x="453" y="58" text-anchor="middle" font-size="18" fill="#173550">Masked attention + queries</text><rect x="592" y="88" width="132" height="144" rx="18" fill="#fff4df" stroke="#e6b86a"/><text x="658" y="74" text-anchor="middle" font-size="18" fill="#173550">Masks + classes</text><text x="658" y="138" text-anchor="middle" font-size="16" fill="#173550">semantic</text><text x="658" y="166" text-anchor="middle" font-size="16" fill="#173550">instances</text><text x="658" y="194" text-anchor="middle" font-size="16" fill="#173550">panoptic</text><g fill="#7d65c6"><rect x="402" y="108" width="24" height="24" rx="6"/><rect x="434" y="146" width="24" height="24" rx="6"/><rect x="466" y="118" width="24" height="24" rx="6"/><rect x="498" y="166" width="24" height="24" rx="6"/></g><path d="M143 160h24M323 160h26M537 160h30" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round"/><path d="M161 149l12 11-12 11M343 149l12 11-12 11M564 149l12 11-12 11" fill="none" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg><div class="arch-legend"><span>one framework for semantic, instance and panoptic segmentation</span><span>queries + masked attention produce masks directly</span></div>`
    },
    oneformer: {
        title: "OneFormer — one architecture, multiple tasks",
        problem: "Explicitly introduces the desired task as an input and can solve semantic, instance or panoptic segmentation within one framework.",
        output: 'depinde de task token',
        task: "conditioned universal segmentation",
        strength: 'control explicit al sarcinii',
        cost: "requires a more sophisticated understanding of conditioning",
        notes: "OneFormer is useful for discussing unification at the task-interface level, not only at the representation level.",
        steps: [['Task token', "the model learns whether we want semantic, instance or panoptic segmentation"], ['Shared encoder/decoder', "representations are reused"], ['Task-aware prediction', "the output is adapted to the requested task"]],
        bullets: [["Advantage", "one foundation for multiple tasks"], ["Modern concept", "conditioned universal model"], ["Teaching value", "excellent for explaining “task as conditioning”"]],
        diagram: ["image + task", 'encoder/decoder comun', "conditioned queries", 'output specific'],
        figure: `<svg class="arch-svg" viewBox="0 0 760 320" role="img" aria-label="OneFormer diagram"><rect width="760" height="320" rx="18" fill="#f7fbff"/><g font-family="Inter,Arial,sans-serif"><rect x="28" y="102" width="112" height="116" rx="18" fill="#dceefe" stroke="#7aa7d6"/><text x="84" y="92" text-anchor="middle" font-size="18" fill="#173550">Image</text><rect x="26" y="36" width="118" height="42" rx="16" fill="#efe9ff" stroke="#9f8bd3"/><text x="85" y="62" text-anchor="middle" font-size="16" fill="#173550">task token</text><rect x="194" y="76" width="162" height="168" rx="18" fill="#e5f8f4" stroke="#79c7ba"/><text x="275" y="62" text-anchor="middle" font-size="18" fill="#173550">shared encoder / decoder</text><rect x="414" y="88" width="146" height="144" rx="18" fill="#fff4df" stroke="#e6b86a"/><text x="487" y="74" text-anchor="middle" font-size="18" fill="#173550">task-aware head</text><rect x="616" y="68" width="110" height="56" rx="16" fill="#f0fbf7" stroke="#7ec7b6"/><rect x="616" y="132" width="110" height="56" rx="16" fill="#f0fbf7" stroke="#7ec7b6"/><rect x="616" y="196" width="110" height="56" rx="16" fill="#f0fbf7" stroke="#7ec7b6"/><text x="671" y="102" text-anchor="middle" font-size="15" fill="#173550">semantic</text><text x="671" y="166" text-anchor="middle" font-size="15" fill="#173550">instances</text><text x="671" y="230" text-anchor="middle" font-size="15" fill="#173550">panoptic</text><path d="M145 160h30M358 160h40M562 160h36" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round"/><path d="M169 149l12 11-12 11M388 149l12 11-12 11M590 149l12 11-12 11" fill="none" stroke="#4e7aa0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg><div class="arch-legend"><span>the task token explicitly specifies the desired output</span><span>the same internal representation can serve multiple tasks</span></div>`
    }
};

function renderSegArchitecture(key) {
    const m = segArchitectures[key];
    if (!m) return;
    $('seg-arch-title').textContent = m.title;
    $('seg-arch-problem').textContent = m.problem;
    $('seg-arch-output').textContent = m.output;
    $('seg-arch-task').textContent = m.task;
    $('seg-arch-strength').textContent = m.strength;
    $('seg-arch-cost').textContent = m.cost;
    $('seg-arch-notes').textContent = m.notes;
    $('seg-arch-steps').innerHTML = m.steps.map(([title, desc], i) => `<div class="step"><strong>${i + 1}. ${title}</strong><span>${desc}</span></div>`).join('');
    $('seg-arch-bullets').innerHTML = m.bullets.map(([title, desc]) => `<div class="bullet"><strong>${title}</strong><span>${desc}</span></div>`).join('');
    $('seg-arch-diagram').innerHTML = `<div class="arch-figure"><img src="assets/architectures/${key === 'maskrcnn' ? 'maskrcnn' : key === 'mask2former' ? 'mask2former' : key === 'oneformer' ? 'oneformer' : 'unet'}.en.svg" alt="Professional diagram of the architecture stages of ${m.title}"></div>`;
    document.querySelectorAll('#seg-arch-tabs .family-tab').forEach(button => button.classList.toggle('active', button.dataset.sarch === key));
}

document.querySelectorAll('#seg-arch-tabs .family-tab').forEach(b => b.addEventListener('click', () => renderSegArchitecture(b.dataset.sarch)));
renderSegArchitecture('unet');


// Photorealistic step-by-step object detection pipeline
const detDemoStages = [
    {
        title: "RGB image",
        desc: "The detector receives the RGB image. It extracts relevant features before knowing the object locations.",
        tensor: 'INPUT  (B, 3, H, W)',
        output: 'image.shape = (3, H, W)',
        stamp: '01 · INPUT RGB'
    },
    {
        title: "Backbone and feature maps",
        desc: "The CNN extracts textures, contours, objects and semantic information at several resolutions. The overlay suggests activation regions.",
        tensor: 'FEATURES  P3, P4, P5',
        output: 'features = {"P3": (B,C,H/8,W/8), ...}',
        stamp: '02 · FEATURE PYRAMID'
    },
    {
        title: "Box proposals",
        desc: "The head generates multiple hypotheses for each object. At this point detections overlap and include many redundant candidates.",
        tensor: 'CANDIDATES  M × (x1,y1,x2,y2)',
        output: 'boxes: (M,4)  ·  scores: (M,)',
        stamp: '03 · MULTIPLE CANDIDATES'
    },
    {
        title: 'Score threshold + NMS',
        desc: "High-scoring hypotheses are retained; redundant boxes are removed using IoU. The example visually represents an NMS-like procedure.",
        tensor: 'SCORE THRESHOLD / NMS',
        output: 'keep = nms(boxes, scores, iou_threshold)',
        stamp: '04 · NON-MAXIMUM SUPPRESSION'
    },
    {
        title: "Final detections",
        desc: "For each retained object we obtain a box, class index and score. The number of detections N varies.",
        tensor: 'OUTPUT  (N,4), (N,), (N,)',
        output: 'boxes: (3,4)\nlabels: (3,)\nscores: (3,)',
        stamp: '05 · FINAL PREDICTIONS'
    }
];
let detDemoIndex = 0, detDemoTimer = null;

function setDetDemoStep(i) {
    detDemoIndex = Math.max(0, Math.min(detDemoStages.length - 1, i));
    const s = detDemoStages[detDemoIndex];
    $('cvDetPicture').dataset.stage = String(detDemoIndex);
    $('cvDetTitle').textContent = s.title;
    $('cvDetDesc').textContent = s.desc;
    $('cvDetTensor').textContent = s.tensor;
    $('cvDetOutput').querySelector('code').textContent = s.output;
    $('cvDetImageStamp').textContent = s.stamp;
    document.querySelectorAll('#cvDetSteps button').forEach(b => b.classList.toggle('active', Number(b.dataset.detstep) === detDemoIndex));
}

document.querySelectorAll('#cvDetSteps button').forEach(b => b.addEventListener('click', () => {
    setDetDemoStep(Number(b.dataset.detstep));
}));
$('cvDetPrev').addEventListener('click', () => setDetDemoStep(detDemoIndex - 1));
$('cvDetNext').addEventListener('click', () => setDetDemoStep(detDemoIndex + 1));
$('cvDetPlay').addEventListener('click', () => {
    if (detDemoTimer) {
        clearInterval(detDemoTimer);
        detDemoTimer = null;
        $('cvDetPlay').textContent = "▶ Animate";
        return;
    }
    setDetDemoStep(0);
    $('cvDetPlay').textContent = "Ⅱ Pause";
    detDemoTimer = setInterval(() => {
        if (detDemoIndex >= 4) {
            clearInterval(detDemoTimer);
            detDemoTimer = null;
            $('cvDetPlay').textContent = "▶ Animate";
            return;
        }
        setDetDemoStep(detDemoIndex + 1);
    }, 1200);
});
setDetDemoStep(0);

// 07. IoU și Dice geometric, același ground truth și aceeași dimensiune a box-urilor
function drawIoU() {
    const dx = Number($('box-dx').value), dy = Number($('box-dy').value), A = {x: 75, y: 55, w: 205, h: 142},
        B = {x: 75 + dx, y: 55 + dy, w: 205, h: 142};
    const x = Math.max(A.x, B.x), y = Math.max(A.y, B.y), w = Math.max(0, Math.min(A.x + A.w, B.x + B.w) - x),
        h = Math.max(0, Math.min(A.y + A.h, B.y + B.h) - y), inter = w * h, union = A.w * A.h + B.w * B.h - inter;
    const iou = inter / union, dice = 2 * inter / (A.w * A.h + B.w * B.h);
    for (const [id, k, v] of [['pred-box', 'x', B.x], ['pred-box', 'y', B.y], ['intersection-box', 'x', x], ['intersection-box', 'y', y], ['intersection-box', 'width', w], ['intersection-box', 'height', h]]) $(id).setAttribute(k, v);
    $('iou-value').textContent = fmt(iou, 3);
    $('dice-value').textContent = fmt(dice, 3);
    $('intersection-value').textContent = inter.toLocaleString('ro-RO');
    $('box-dx-val').textContent = `${dx} px`;
    $('box-dy-val').textContent = `${dy} px`;
}

['box-dx', 'box-dy'].forEach(id => $(id).addEventListener('input', drawIoU));
drawIoU();

// 08. Augmentări vizuale; operații asupra adnotărilor discutate în text
function augUpdate() {
    const flip = $('aug-flip').checked, bright = $('aug-bright').checked, crop = $('aug-crop').checked;
    let t = '';
    if (flip) t += 'translate(300 0) scale(-1 1) ';
    if (crop) t += 'translate(-30 -22) scale(1.2)';
    $('aug-world').setAttribute('transform', t || 'translate(0 0)');
    $('aug-brightness').setAttribute('opacity', bright ? '.22' : '0');
    const note = [];
    if (flip) note.push("Flip: also updates box and mask coordinates.");
    if (bright) note.push("Brightness: geometric labels do not change.");
    if (crop) note.push("Crop: clips boxes/masks and removes instances entirely outside the frame.");
    $('aug-explanation').textContent = note.join(' ') || "No transformations: the image and annotations remain unchanged.";
}

['aug-flip', 'aug-bright', 'aug-crop'].forEach(id => $(id).addEventListener('change', augUpdate));
$('aug-reset').addEventListener('click', () => {
    ['aug-flip', 'aug-bright', 'aug-crop'].forEach(id => $(id).checked = false);
    augUpdate()
});
augUpdate();


// 02b. Formulări pentru clasificare
// Reprezentări MathML native pentru fiecare componentă a capului de clasificare.
// Indicii sunt construiți din noduri matematice, nu afișați ca text brut.
function headMath(base, sub = null) {
    const stem = `<mi>${base}</mi>`;
    const body = sub === null ? stem : `<msub>${stem}${sub}</msub>`;
    return `<math xmlns="http://www.w3.org/1998/Math/MathML">${body}</math>`;
}

function headIndex(index) {
    return typeof index === 'number' ? `<mn>${index}</mn>` : `<mi>${index}</mi>`;
}

function headLogit(index, state = null) {
    const sub = state === null ? headIndex(index) : `<mrow>${headIndex(index)}<mo>,</mo><mn>${state}</mn></mrow>`;
    return headMath('z', sub);
}

function headActivation(index) {
    const sub = headIndex(index);
    return `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>σ</mi><mo>(</mo><msub><mi>z</mi>${sub}</msub><mo>)</mo></math>`;
}

function headModelDiagram(kind) {
    const feature = [headMath('h', headIndex(1)), headMath('h', headIndex(2)), `<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math>`, headMath('h', headIndex('d'))];
    let outputs, caption = '';
    if (kind === 'single') {
        outputs = [headLogit(1), headLogit(2), `<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math>`, headLogit('C')];
        caption = "C logits, one correct class";
    } else if (kind === 'multilabel') {
        outputs = [headActivation(1), headActivation(2), `<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math>`, headActivation('C')];
        caption = "C independently computed probabilities";
    } else if (kind === 'ovr') {
        outputs = [headActivation(1), headActivation(2), `<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math>`, headActivation('C')];
        caption = "C binary decisions: class vs. rest";
    } else {
        const pair = k => `<div class="pair"><div class="out">${headLogit(k, 0)}</div><div class="out">${headLogit(k, 1)}</div></div>`;
        outputs = [pair(1), pair(2), `<div class="pair"><div class="out"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math></div><div class="out"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>⋮</mo></math></div></div>`, pair('C')];
        caption = "For each class: absent (0) / present (1)";
    }
    const tower = (parts, variant) => `<div class="tower ${variant}">${parts.map(part => `<div class="${variant === 'head-input' ? 'cell' : 'out head-output-item'}">${part}</div>`).join('')}</div>`;
    return `<div class="head-diagram-title"><span>Reprezentare</span><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>z</mi><mo>=</mo><mi>W</mi><mi>h</mi><mo>+</mo><mi>b</mi></math></div>`
        + `<div class="mini-head-grid head-math-visual">${tower(feature, 'head-input')}<div class="arrow" aria-hidden="true">→</div>${tower(outputs, 'head-output')}</div>`
        + `<div class="head-diagram-caption">${caption}</div>`;
}

const classificationModes = {
    single: {
        title: "Single-label / multiclass",
        problem: "Each image has exactly one correct class. Examples: the digit in an image, dominant species, exclusive lesion type.",
        activation: 'softmax',
        loss: 'CrossEntropyLoss',
        output: 'logits (B, C)',
        target: "integer indices (B,)",
        formula: '<span class="eq-num">(2a)</span><math display="block"><msub><mi>p</mi><mi>k</mi></msub><mo>=</mo><mfrac><msup><mi>e</mi><msub><mi>z</mi><mi>k</mi></msub></msup><mrow><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>C</mi></munderover><msup><mi>e</mi><msub><mi>z</mi><mi>j</mi></msub></msup></mrow></mfrac><mspace width="1.8em"></mspace><mi>ℒ</mi><mo>=</mo><mo>−</mo><mi>log</mi><msub><mi>p</mi><mi>y</mi></msub></math>',
        notes: "Classes are mutually exclusive. The final decision is obtained by argmax, and probabilities sum to 1. This is the standard formulation for classical multiclass classification.",
        bullets: [["When is it suitable?", "When one label must be selected from C possible classes."], ["Advantage", "The output head is compact and probabilities are directly comparable."], ["Limitation", "It cannot simultaneously express “person” and “bicycle” for the same image if both are valid labels."]],
        diagram: headModelDiagram('single')
    },
    multilabel: {
        title: 'Multi-label',
        problem: "An image may have several simultaneously true labels. Examples: “intersection” + “car” + “person” + “rain”.",
        activation: "per-class sigmoid",
        loss: 'BCEWithLogitsLoss',
        output: 'logits (B, C)',
        target: "multi-hot vectors (B, C)",
        formula: '<span class="eq-num">(2b)</span><math display="block"><msub><mover><mi>y</mi><mo>^</mo></mover><mi>k</mi></msub><mo>=</mo><mi>σ</mi><mo>(</mo><msub><mi>z</mi><mi>k</mi></msub><mo>)</mo><mspace width="1.8em"></mspace><mi>ℒ</mi><mo>=</mo><mo>−</mo><munder><mo>∑</mo><mi>k</mi></munder><mrow><mo>[</mo><msub><mi>y</mi><mi>k</mi></msub><mi>log</mi><msub><mover><mi>y</mi><mo>^</mo></mover><mi>k</mi></msub><mo>+</mo><mo>(</mo><mn>1</mn><mo>−</mo><msub><mi>y</mi><mi>k</mi></msub><mo>)</mo><mi>log</mi><mo>(</mo><mn>1</mn><mo>−</mo><msub><mover><mi>y</mi><mo>^</mo></mover><mi>k</mi></msub><mo>)</mo><mo>]</mo></mrow></math>',
        notes: "Each class is decided independently by a threshold, for example 0.5. Probabilities no longer have to sum to 1; the model can activate several labels at once.",
        bullets: [["When is it suitable?", "When labels are not mutually exclusive."], ["Advantage", "Expressive for complex scenes and rich ontologies."], ["Caution", "Thresholds may differ across classes and should be calibrated on validation data."]],
        diagram: headModelDiagram('multilabel')
    },
    ovr: {
        title: "K one-vs-rest classifiers",
        problem: "For each class, train a binary classifier “class k” vs. “all others.” It can be implemented in one network with C outputs or C separate models.",
        activation: "sigmoid / binary score per class",
        loss: "BCE or a sum of binary losses",
        output: "C independent scores",
        target: "0/1 for each class",
        formula: '<span class="eq-num">(2c)</span><math display="block"><mrow><mo>for</mo><mspace width="0.5em"></mspace><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mo>…</mo><mo>,</mo><mi>C</mi><mo>:</mo></mrow><mspace width="1em"></mspace><msub><mover><mi>y</mi><mo>^</mo></mover><mi>k</mi></msub><mo>=</mo><mi>σ</mi><mo>(</mo><msub><mi>z</mi><mi>k</mi></msub><mo>)</mo><mo>,</mo><mspace width="1em"></mspace><msub><mi>ℒ</mi><mi>k</mi></msub><mo>=</mo><mtext>BCE</mtext><mo>(</mo><msub><mover><mi>y</mi><mo>^</mo></mover><mi>k</mi></msub><mo>,</mo><msub><mi>y</mi><mi>k</mi></msub><mo>)</mo></math>',
        notes: "Conceptually, this is a clear form of multi-label classification when explicitly discussing K classifiers. Separate models may increase memory and training costs.",
        bullets: [["Advantage", "Clear interpretation: each head decides only for its own class."], ["When is it useful?", "Sparse label sets, modular extension with new classes, per-class ablations."], ["Limitation", "Scores across classes may be harder to compare if models are trained separately."]],
        diagram: headModelDiagram('ovr')
    },
    twologits: {
        title: "Two logits per class",
        problem: "For each class, produce two scores: “absent” and “present.” Each class thus has its own internal competition between two states.",
        activation: "softmax over each pair",
        loss: "sum of per-class CrossEntropy",
        output: "(B, C, 2) or (B, 2C)",
        target: "0/1 per class",
        formula: "<span class=\"eq-num\">(2d)</span><math display=\"block\"><mrow><mo>for each class</mo><mspace width=\"0.5em\"></mspace><mi>k</mi><mo>:</mo></mrow><mspace width=\"1em\"></mspace><msub><mi>p</mi><mi>k</mi></msub><mo>=</mo><mtext>softmax</mtext><mo>(</mo><msub><mi>z</mi><mi>k</mi></msub><mo>)</mo><mo>,</mo><mspace width=\"1em\"></mspace><mi>ℒ</mi><mo>=</mo><munder><mo>∑</mo><mi>k</mi></munder><mtext>CE</mtext><mo>(</mo><msub><mi>p</mi><mi>k</mi></msub><mo>,</mo><msub><mi>y</mi><mi>k</mi></msub><mo>)</mo></math>",
        notes: "This is more redundant than per-class sigmoid, but can be useful when explicitly enforcing a present-vs-absent competition for each label.",
        bullets: [["Advantage", "The model produces a local binary competition for each class."], ["When is it useful?", "Special formulations, custom losses, integration with heads already designed for CE."], ['Cost', "Uses twice as many scores as the single-logit-per-class variant."]],
        diagram: headModelDiagram('twologits')
    }
};

function renderClassificationMode(key) {
    const m = classificationModes[key];
    if (!m) return;
    $('cls-title').textContent = m.title;
    $('cls-problem').textContent = m.problem;
    $('cls-formula').innerHTML = m.formula;
    $('cls-activation').textContent = m.activation;
    $('cls-loss').textContent = m.loss;
    $('cls-output').textContent = m.output;
    $('cls-target').textContent = m.target;
    $('cls-notes').textContent = m.notes;
    $('cls-diagram').innerHTML = m.diagram;
    $('cls-bullets').innerHTML = m.bullets.map(([t, d]) => `<div class="bullet"><strong>${t}</strong><span>${d}</span></div>`).join('');
    document.querySelectorAll('#cls-tabs .family-tab').forEach(b => b.classList.toggle('active', b.dataset.cls === key));
}

document.querySelectorAll('#cls-tabs .family-tab').forEach(b => b.addEventListener('click', () => renderClassificationMode(b.dataset.cls)));
renderClassificationMode('single');

// 06b. Semantică vs. instanțe vs. panoptică
const segmentModes = {
    semantic: {
        caption: "In semantic segmentation, each pixel receives a class, but two nearby cars may have exactly the same label and are not separated.",
        output: 'logits (B,C,H,W) → argmax',
        loss: 'CrossEntropy / Dice',
        metric: 'mIoU, Dice',
        arch: 'DeepLabV3, U-Net, SegFormer',
        notes: "Very suitable for continuous surfaces or stuff: road, sky, vegetation, organs and pathological regions.",
        bullets: [["What does it answer?", "“Which class does each pixel belong to?”"], ["What does it not separate?", "Individual objects of the same class."], ["Typical output", "A single label map (B,H,W)."]],
        show: 'semantic'
    },
    instance: {
        caption: "In instance segmentation, each object receives its own mask. Two cars are distinct entities even if they belong to the same class.",
        output: "N masks + N boxes + N labels",
        loss: 'box + cls + mask loss',
        metric: 'Mask AP, AP50',
        arch: 'Mask R-CNN, YOLACT, CondInst',
        notes: "Preferred when we need per-object measurement, counting or tracking. The number of instances N varies between images.",
        bullets: [["What does it answer?", "“Which pixels belong to each individual object?”"], ["Advantage", "Separates individual instances."], ["Limitation", "Stuff regions must be handled separately or completed with a semantic head."]],
        show: 'instance'
    },
    panoptic: {
        caption: "Panoptic segmentation combines both perspectives: all pixels receive a class, and thing objects also receive instance identities.",
        output: "panoptic map (class + instance ID)",
        loss: "semantic + instance combinations",
        metric: 'PQ, SQ, RQ',
        arch: 'Panoptic FPN, Mask2Former, OneFormer',
        notes: "Panoptic segmentation produces a complete scene description: road and sky as stuff, each car and person as a thing with its own identity.",
        bullets: [["What does it answer?", "“What is each pixel and, if it is an individual object, which instance does it belong to?”"], ["Advantage", "Unifies the scene in a coherent representation."], ["Standard metric", "Panoptic Quality (PQ), together with SQ and RQ."]],
        show: 'panoptic'
    }
};
const cvSegColors = {
    road: '#7761cb',
    buildings: '#6aa7dd',
    sidewalk: '#d39fb6',
    vegetation: '#4ab980',
    car_blue: '#34d8e6',
    car_yellow: '#ffb24e',
    person: '#f07790'
};
const cvSegAssets = {
    semantic: 'assets/urban/preview_semantic.webp',
    instance: 'assets/urban/preview_instance.webp',
    panoptic: 'assets/urban/preview_panoptic.webp'
};
const cvSegTitles = {semantic: "SEMANTIC MAP", instance: "INSTANCE MASKS", panoptic: "PANOPTIC MAP"};
const cvSegOutputDims = {semantic: "H × W (classes)", instance: 'N × H × W', panoptic: "H × W (class + ID)"};
let cvSegMode = 'semantic', cvSegStep = 3, cvSegTimer = null;

function renderCvSegStep(step) {
    cvSegStep = Math.max(0, Math.min(3, step));
    const opacity = Number($('cvSegOpacity').value) / 100;
    const factor = [0, .32, .82, 1][cvSegStep];
    $('cvSegOverlay').style.opacity = (opacity * factor).toFixed(2);
    $('cvSegDemo').dataset.step = String(cvSegStep);
    $('cvSegDemo').dataset.segMode = cvSegMode;
    $('cvSegLabelLayer').style.opacity = String($('cvSegLabels').checked && cvSegStep === 3 ? 1 : 0);
    const captions = ["Step 1 · input image", "Step 2 · illustrative dense scores", "Step 3 · mask decoding", "Step 4 · final masks and classes"];
    $('cvSegFrameCaption').textContent = captions[cvSegStep];
    document.querySelectorAll('#cvSegSteps button').forEach(b => b.classList.toggle('active', Number(b.dataset.step) === cvSegStep));
    $('cvSegOutputTitle').textContent = cvSegTitles[cvSegMode];
    $('cvSegOutDim').textContent = cvSegOutputDims[cvSegMode];
}

function renderSegmentMode(key) {
    const m = segmentModes[key];
    if (!m) return;
    cvSegMode = key;
    $('seg-caption').textContent = m.caption;
    $('seg-output').textContent = m.output;
    $('seg-loss').textContent = m.loss;
    $('seg-metric').textContent = m.metric;
    $('seg-arch').textContent = m.arch;
    $('seg-notes').textContent = m.notes;
    $('seg-bullets').innerHTML = m.bullets.map(([title, desc]) => `<div class="bullet"><strong>${title}</strong><span>${desc}</span></div>`).join('');
    $('cvSegOverlay').src = cvSegAssets[key];
    document.querySelectorAll('#seg-tabs .family-tab').forEach(b => {
        b.classList.toggle('active', b.dataset.seg === key);
        b.setAttribute('aria-selected', String(b.dataset.seg === key));
    });
    const labels = {
        semantic: ["car", "car", "person", "road", "buildings", "vegetation"],
        instance: ['car #1', 'car #2', 'person #3', '', '', ''],
        panoptic: ['car #1', 'car #2', 'person #3', "road · stuff", "buildings · stuff", "vegetation · stuff"]
    }[key];
    const names = ['car1', 'car2', 'person', 'road', 'building', 'tree'];
    names.forEach((n, i) => {
        const el = document.querySelector(`[data-label="${n}"]`);
        if (el) {
            el.textContent = labels[i];
            el.style.display = labels[i] ? 'inline-flex' : 'none';
        }
    });
    const legend = key === 'instance' ? [['car_blue', "car #1"], ['car_yellow', "car #2"], ['person', "person #3"]] :
        key === 'semantic' ? [['car_yellow', 'automobile'], ['person', "person"], ['road', "road"], ['buildings', "buildings"], ['vegetation', "vegetation"]] :
            [['car_blue', "car #1"], ['car_yellow', "car #2"], ['person', "person #3"], ['road', "road"], ['buildings', "buildings"], ['vegetation', "vegetation"]];
    $('cvSegLegend').innerHTML = legend.map(([id, title]) => `<span class="cv-seg-key"><i style="background:${cvSegColors[id]}"></i>${title}</span>`).join('');
    renderCvSegStep(cvSegStep);
}

document.querySelectorAll('#seg-tabs .family-tab').forEach(b => b.addEventListener('click', () => renderSegmentMode(b.dataset.seg)));
renderSegmentMode('semantic');

document.querySelectorAll('#cvSegSteps button').forEach(b => b.addEventListener('click', () => {
    if (cvSegTimer) {
        clearInterval(cvSegTimer);
        cvSegTimer = null;
        $('cvSegPlay').textContent = "▶ Animate";
    }
    renderCvSegStep(Number(b.dataset.step));
}));
$('cvSegOpacity').addEventListener('input', () => {
    $('cvSegOpacityText').textContent = $('cvSegOpacity').value + '%';
    renderCvSegStep(cvSegStep);
});
$('cvSegLabels').addEventListener('change', () => renderCvSegStep(cvSegStep));
$('cvSegPrev').addEventListener('click', () => renderCvSegStep(cvSegStep - 1));
$('cvSegNext').addEventListener('click', () => renderCvSegStep(cvSegStep + 1));
$('cvSegPlay').addEventListener('click', () => {
    if (cvSegTimer) {
        clearInterval(cvSegTimer);
        cvSegTimer = null;
        $('cvSegPlay').textContent = "▶ Animate";
        return;
    }
    renderCvSegStep(0);
    $('cvSegPlay').textContent = "Ⅱ Pause";
    cvSegTimer = setInterval(() => {
        if (cvSegStep >= 3) {
            clearInterval(cvSegTimer);
            cvSegTimer = null;
            $('cvSegPlay').textContent = "▶ Animate";
            return;
        }
        renderCvSegStep(cvSegStep + 1);
    }, 1100);
});


// 09. Exemple reale PyTorch sunt incluse în bundle, introduse la generare.
const snippets = {
    classification: `"""Clasificare ImageNet cu ResNet18 preantrenat.
Installation: pip install torch torchvision pillow
Usage: python 01_clasificare.py fotografie.jpg
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
    probs = logits.softmax(dim=1)     # softmax only at inference
    values, indices = probs[0].topk(5)

categories = weights.meta["categories"]
for probability, index in zip(values, indices):
    print(f"{categories[index.item()]:30s} {probability.item():.3f}")
`,
    multilabel: `"""Multi-label classification with sigmoid and BCEWithLogitsLoss.
Installation: pip install torch torchvision pillow
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
    detector: `"""Faster R-CNN: list of boxes, classes and scores.
Installation: pip install torch torchvision pillow
Usage: python 02_detectie.py fotografie.jpg
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
    out = model([x])[0]               # list of images -> dict / image

# Box-uri in coordonatele imaginii: (x1, y1, x2, y2)
keep = out["scores"] >= 0.60
categories = weights.meta["categories"]
for box, label, score in zip(
    out["boxes"][keep], out["labels"][keep], out["scores"][keep]
):
    print(categories[label.item()], [round(v, 1) for v in box.tolist()],
          round(score.item(), 3))
`,
    segmentation: `"""DeepLabV3: semantic prediction for each pixel.
Installation: pip install torch torchvision pillow
Usage: python 03_segmentare_semantica.py fotografie.jpg
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
    instance: `"""Mask R-CNN: boxes, classes, scores and per-instance masks.
Installation: pip install torch torchvision pillow
Usage: python 04_instance_segmentation.py fotografie.jpg
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

print(f"Retained instances: {len(boxes)}")
print("boxes:", tuple(boxes.shape), "masks:", tuple(masks.shape))
for label, score in zip(labels, scores):
    print(weights.meta["categories"][label.item()], round(score.item(), 3))
`,
    loss: `"""Soft Dice Loss for binary segmentation; logits and target (B,1,H,W)."""
import torch
from torch import nn

class SoftDiceLoss(nn.Module):
    def __init__(self, eps=1e-6):
        super().__init__()
        self.eps = eps

    def forward(self, logits, target):
        if logits.shape != target.shape:
            raise ValueError("logits and target must have the same shape")
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
    training: `"""Fine-tuning only the ResNet18 classifier.
Date: dataset/train/{clasa1,clasa2,...}/*.jpg.
Installation: pip install torch torchvision pillow
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
    param.requires_grad = False        # frozen backbone
model.fc = nn.Linear(model.fc.in_features, len(dataset.classes))

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)
optimizer = torch.optim.AdamW(model.fc.parameters(), lr=1e-3)
criterion = nn.CrossEntropyLoss()

model.eval()                        # keep BatchNorm statistics frozen
model.fc.train()                    # train only the new classifier
for images, labels in loader:         # un singur epoch demonstrativ
    images, labels = images.to(device), labels.to(device)
    optimizer.zero_grad(set_to_none=True)
    logits = model(images)             # (B, num_classes)
    loss = criterion(logits, labels)   # no manual softmax
    loss.backward()
    optimizer.step()

print("Clase:", dataset.classes)
print("Demonstration training is complete.")
`
};
const snippetMetadata = {
    classification: {
        name: '01_clasificare.py',
        text: "Pretrained ResNet18: uses preprocessing associated with the weights; receives (1,3,H,W), produces logits (1,1000), then top-5 probabilities."
    },
    multilabel: {
        name: '07_multilabel_clasificare.py',
        text: "Multi-label: the model produces C independent scores; each class gets a sigmoid and is trained using BCEWithLogitsLoss on multi-hot targets."
    },
    detector: {
        name: '02_detectie.py',
        text: "Faster R-CNN: inference on a list of images. Each image result contains boxes[N,4], labels[N], scores[N]; N is variable."
    },
    segmentation: {
        name: '03_segmentare_semantica.py',
        text: "DeepLabV3: the model returns per-pixel logits under the key \"out\"; argmax(dim=1) builds the class map. Spatial size depends on preprocessing."
    },
    instance: {
        name: '04_instance_segmentation.py',
        text: "Mask R-CNN: probabilities in out[\"masks\"] of shape (N,1,H,W); object selection and mask thresholding are different operations."
    },
    loss: {
        name: '05_soft_dice_loss.py',
        text: "Binary Soft Dice Loss: computes differentiable overlap after sigmoid, aggregated per image. Mask logits are not binarized when calculating the loss."
    },
    training: {
        name: '06_transfer_learning.py',
        text: "Transfer learning: frozen ResNet18 backbone and classification head retrained on an ImageFolder. Demonstration: one epoch, without validation or tuning."
    }
};
let activeSnippet = 'classification';

function escapeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function highlightPython(source) {
    return source.split('\n').map(line => {
        const match = line.match(/^([^#]*)(#.*)$/);
        let code = match ? match[1] : line, comment = match ? match[2] : '';
        // Tokenizare minimală, bazată pe expresii regex (fără librării externe).
        const pieces = code.split(/((?:f|r)?"(?:\\.|[^"\\])*"|(?:f|r)?'(?:\\.|[^'\\])*')/g);
        return pieces.map((p, i) => {
            if (i % 2 === 1) return `<span class="tok-str">${escapeHTML(p)}</span>`;
            return escapeHTML(p).replace(/\b(from|import|as|with|for|in|if|else|elif|return|class|def|while|and|or|not|is|None|True|False|raise)\b/g, '<span class="tok-key">$1</span>').replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-num">$1</span>')
        }).join('') + (comment ? `<span class="tok-comment">${escapeHTML(comment)}</span>` : '');
    }).join('\n')
}

function showSnippet(k) {
    activeSnippet = k;
    $('code-content').innerHTML = highlightPython(snippets[k]);
    $('code-filename').textContent = snippetMetadata[k].name;
    $('code-description').textContent = snippetMetadata[k].text;
    document.querySelectorAll('.code-tab').forEach(b => {
        const a = b.dataset.code === k;
        b.classList.toggle('active', a);
        b.setAttribute('aria-selected', String(a))
    });
    $('copy-code').textContent = "Copy code";
}

document.querySelectorAll('.code-tab').forEach(b => b.addEventListener('click', () => showSnippet(b.dataset.code)));
showSnippet(activeSnippet);
$('copy-code').addEventListener('click', async () => {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(snippets[activeSnippet])
        } else {
            const t = document.createElement('textarea');
            t.value = snippets[activeSnippet];
            t.style.position = 'fixed';
            t.style.opacity = '0';
            document.body.appendChild(t);
            t.select();
            if (!document.execCommand('copy')) throw Error("Clipboard unavailable");
            t.remove()
        }
        $('copy-code').textContent = "Copied!"
    } catch (e) {
        $('copy-code').textContent = "Select the code manually"
    }
});

// 10. Studii de caz
const cases = {
    traffic: {
        mark: '01',
        title: "Counting cars at an intersection",
        intro: "The requirement is to identify each vehicle separately and estimate its position in the current frame.",
        task: 'Object detection',
        labels: "Bounding boxes + classes",
        metric: 'mAP + recall',
        arch: 'YOLO / DETR',
        prompt: "Year IV extension: to count distinct cars throughout a video, add tracking and temporal association."
    },
    medical: {
        mark: '02',
        title: "Detecting multiple pathologies in a radiograph",
        intro: "The same image can contain several conditions simultaneously, so classes are not mutually exclusive.",
        task: "Multi-label classification",
        labels: "Image-level multi-hot labels",
        metric: "Per-class AUROC, macro-F1, calibration",
        arch: 'ResNet / DenseNet / ViT',
        prompt: "Year IV extension: compare different per-class thresholds and analyze the impact of class imbalance and patient-level splitting."
    },
    industrial: {
        mark: '03',
        title: "Identifying distinct defects on a surface",
        intro: "Each defect must be localized and measured individually, including when several defects belong to the same category.",
        task: 'Instance segmentation',
        labels: "Individual masks + classes",
        metric: "Mask AP, recall, size",
        arch: 'Mask R-CNN / Mask2Former',
        prompt: "Year IV extension: design evaluations for very small defects and compare performance, memory consumption and latency on production hardware."
    },
    retail: {
        mark: '04',
        title: "Inventory of products on shelves",
        intro: "Product localization matters and sometimes so does separating very close instances.",
        task: "Detection or instance segmentation",
        labels: "Boxes or individual masks",
        metric: 'mAP / Mask AP + counting accuracy',
        arch: "YOLO for speed, Mask R-CNN for fine separation",
        prompt: "Year IV extension: discuss occlusion errors, visually similar products and generalization across stores."
    },
    satellite: {
        mark: '05',
        title: "Analysis of aerial and satellite images",
        intro: "For roads, water, vegetation and buildings, complete spatial coverage matters; for vehicles or ships, instances also matter.",
        task: "Semantic or panoptic",
        labels: "Pixel-wise masks, optionally instances for individual objects",
        metric: "mIoU, PQ, F1 on rare objects",
        arch: 'DeepLab / SegFormer / Mask2Former',
        prompt: "Year IV extension: compare input resolution, patch-based inference and seasonal domain shift."
    }
};

function renderCase(key) {
    const c = cases[key];
    if (!c) return;
    document.querySelectorAll('.case-tab').forEach(x => x.classList.toggle('active', x.dataset.case === key));
    for (const k of ['mark', 'title', 'intro', 'task', 'labels', 'metric', 'arch', 'prompt']) $('case-' + k).textContent = c[k];
}

document.querySelectorAll('.case-tab').forEach(b => b.addEventListener('click', () => renderCase(b.dataset.case)));
renderCase('traffic');

const wizardRules = {
    one: {
        task: "Single-label multiclass classification",
        annotation: "one label per image",
        architecture: 'ResNet / EfficientNet / ViT',
        metrics: 'accuracy, macro-F1',
        why: "Choose this formulation when each image has exactly one correct class."
    },
    many: {
        task: "Multi-label classification",
        annotation: "image-level multi-hot vector",
        architecture: 'ResNet / DenseNet / ViT + BCEWithLogitsLoss',
        metrics: "AUROC, macro-F1, calibration",
        why: "Multiple labels may be simultaneously true; do not use exclusive softmax."
    },
    boxes: {
        task: 'Object detection',
        annotation: "bounding boxes + classes",
        architecture: "YOLO if speed matters; DETR / Faster R-CNN for richer analysis",
        metrics: 'mAP, recall',
        why: "You want object-level localization, but not necessarily a fine pixel-wise contour."
    },
    pixels: {
        task: "Semantic segmentation",
        annotation: "pixel-wise masks",
        architecture: 'U-Net / DeepLab / SegFormer',
        metrics: 'mIoU, Dice',
        why: "You want one class per pixel without separate instance identities."
    },
    instances: {
        task: 'Instance segmentation',
        annotation: "individual masks + classes",
        architecture: 'Mask R-CNN / Mask2Former',
        metrics: 'Mask AP, AP50',
        why: "You need to separate objects of the same class."
    },
    scene: {
        task: "Panoptic segmentation",
        annotation: "class + instance maps",
        architecture: 'Panoptic FPN / Mask2Former / OneFormer',
        metrics: 'PQ, SQ, RQ',
        why: "You want both stuff regions and thing objects with their own identity."
    }
};

function updateWizard() {
    const out = $('wiz-output').value, speed = $('wiz-speed').value, labels = $('wiz-labels').value;
    let base = wizardRules[out];
    let arch = base.architecture, notes = [base.why];
    if (speed === 'high' && out === 'boxes') arch = 'YOLO';
    if (speed === 'high' && out === 'instances') arch = "lightweight models or a compromise toward boxes";
    if (speed === 'low' && (out === 'scene' || out === 'instances')) arch = 'Mask2Former / OneFormer';
    if (labels === 'image' && ['boxes', 'pixels', 'instances', 'scene'].includes(out)) notes.push("The desired output requires richer annotations than image-level labels; revise the labeling protocol.");
    if (labels === 'boxes' && ['pixels', 'instances', 'scene'].includes(out)) notes.push("Bounding boxes are not sufficient for high-fidelity pixel-wise segmentation.");
    if (labels === 'masks' && (out === 'one' || out === 'many')) notes.push("Your annotations are richer than the minimum needed; you can derive simpler tasks from them.");
    $('wiz-task').textContent = base.task;
    $('wiz-annotation').textContent = base.annotation;
    $('wiz-architecture').textContent = arch;
    $('wiz-metrics').textContent = base.metrics;
    $('wiz-explanation').textContent = notes.join(' ');
}

['wiz-output', 'wiz-speed', 'wiz-labels'].forEach(id => $(id).addEventListener('change', updateWizard));
updateWizard();


// 11. Autoevaluare: răspuns unic, feedback explicativ
const quiz = [
    {
        q: "What does nn.CrossEntropyLoss receive for multiclass classification?",
        a: ["Probabilities manually normalized using softmax", "Logits of shape (B,C) and integer labels of shape (B,)", "A tensor (B,C,H,W) in every situation", "Only the class with the highest probability"],
        c: 1,
        e: "CrossEntropyLoss applies log-softmax internally. Manual softmax before the loss is unnecessary and can be incorrect."
    },
    {
        q: "What does N represent in the inference output of a Torchvision detector?",
        a: ["The maximum number of trained classes", "The number of positive pixels", "The number of detections returned after filtering", "The number of convolutional layers"],
        c: 2,
        e: "N is the number of retained detections and may vary between images; it does not represent the number of classes."
    },
    {
        q: "What is the fundamental difference between semantic and instance segmentation?",
        a: ["The first does not use CNNs", "The second separates instances of the same class", "The second produces one image label", "The first cannot evaluate IoU"],
        c: 1,
        e: "Semantic segmentation labels pixel classes; instance segmentation distinguishes individual objects."
    },
    {
        q: "In a query-based model with Q=100, how many objects must be present in the image?",
        a: ['100', "At least 50", "Exactly the number of classes", "No predetermined number; many queries may indicate no-object"],
        c: 3,
        e: "Q indicates the number of prediction slots. It does not require the image to contain Q objects."
    },
    {
        q: "When IoU = 0.5 for two nonempty regions, what is Dice?",
        a: ['0,5', '1/3', '2/3', '0,75'],
        c: 2,
        e: 'Dice = 2·IoU/(1+IoU) = 2/3.'
    },
    {
        q: "Which transformation requires updating the bounding boxes?",
        a: ["Changing brightness", "Normalizing RGB channels", "Horizontal flip", "Changing the softmax temperature"],
        c: 2,
        e: "Geometric transformations change coordinates; intensity adjustment does not change annotation geometry."
    },
    {
        q: "What shape is typical of semantic segmentation logits for B images?",
        a: ['(B,C,H,W)', '(B,4)', '(B,C)', "(H,W,1) for the whole batch"],
        c: 0,
        e: "C scores per pixel; argmax over the class dimension produces (B,H,W)."
    },
    {
        q: "What is a serious risk when evaluating medical images from patients?",
        a: ["Too many validation epochs", "Sharing images of the same patient between training and test sets", "Using Dice", "A small batch at inference"],
        c: 1,
        e: "Information leakage between splits yields an optimistic performance estimate."
    },
    {
        q: "Greedy NMS, in its usual form, removes a detection if...",
        a: ["Its score is higher than all others", "The intersection is zero", "IoU with an already retained detection of the same class exceeds the threshold", "The image contains more than two objects"],
        c: 2,
        e: "NMS retains a high-scoring hypothesis and suppresses excessive overlaps, usually within the same class."
    },
    {
        q: "What correctly describes COCO mAP for object detection?",
        a: ["Global classification accuracy", "AP aggregated across classes and IoU thresholds 0.50:0.05:0.95", "IoU computed just once at threshold 0.5", 'Media scorurilor softmax ale box-urilor'],
        c: 1,
        e: "Standard COCO mAP evaluation aggregates AP across several IoU thresholds from 0.50 to 0.95 and across categories."
    },
    {
        q: "In multi-label classification, which combination is most suitable?",
        a: ['softmax + CrossEntropyLoss', "per-class sigmoid + BCEWithLogitsLoss", "argmax before loss", "Dice Loss on the class vector"],
        c: 1,
        e: "In multi-label classification, classes are treated independently; each output gets a sigmoid, and BCEWithLogitsLoss is a natural training objective."
    },
    {
        q: "Which statement best captures the difference between YOLO and DETR?",
        a: ["Both require identical post-processing and identical matching during training", "YOLO produces dense predictions and usually uses NMS, whereas DETR formulates the problem as set prediction", "DETR is necessarily faster than YOLO", "YOLO cannot detect small objects in any context"],
        c: 1,
        e: "YOLO is typically a dense detector with NMS; DETR treats objects as a set and uses bipartite matching."
    },
    {
        q: "Which metric is most characteristic of panoptic segmentation?",
        a: ['Top-1 accuracy', 'Panoptic Quality (PQ)', 'BLEU', 'MSE'],
        c: 1,
        e: "PQ combines recognition and segmentation quality and is the standard metric for panoptic segmentation."
    },
    {
        q: "If you have only image-level labels but want the contour of each defect, what is the correct conclusion?",
        a: ["You can directly train a fully supervised instance segmentation model without further annotations", "The formulation must change or richer annotations must be collected, because image labels do not specify pixel locations", "Increasing batch size is sufficient", "You only need to change the optimizer"],
        c: 1,
        e: "The desired output must be supported by compatible annotations; otherwise the problem is underdetermined in a fully supervised setting."
    }
];

let quizI = 0, quizScore = 0, quizAnswered = false;

function drawQuiz() {
    const q = quiz[quizI];
    $('quiz-number').textContent = String(quizI + 1);
    $('quiz-question').textContent = q.q;
    const quizCounter = document.querySelector('#autoevaluare .quiz-top span');
    if (quizCounter) {
        quizCounter.innerHTML = `QUESTION <strong>${quizI + 1}</strong> OF ${quiz.length}`
    }
    ;$('quiz-score').textContent = `${quizScore} / ${quizI + (quizAnswered ? 1 : 0)}`;
    $('quiz-answers').innerHTML = '';
    q.a.forEach((a, i) => {
        let b = document.createElement('button');
        b.type = 'button';
        b.className = 'answer-btn';
        b.innerHTML = `<b>${String.fromCharCode(65 + i)}.</b><span>${a}</span>`;
        b.addEventListener('click', () => answerQuiz(i));
        $('quiz-answers').appendChild(b)
    });
    $('quiz-feedback').className = 'quiz-feedback';
    $('quiz-feedback').textContent = '';
    $('quiz-next').disabled = true;
    $('quiz-next').textContent = quizI === quiz.length - 1 ? "View result →" : "Next question →";
    $('quiz-progress-fill').style.width = `${100 * quizI / quiz.length}%`;
}

function answerQuiz(i) {
    if (quizAnswered) return;
    quizAnswered = true;
    const q = quiz[quizI], good = i === q.c;
    if (good) quizScore++;
    [...$('quiz-answers').children].forEach((b, j) => {
        b.disabled = true;
        if (j === q.c) b.classList.add('correct'); else if (j === i) b.classList.add('wrong')
    });
    $('quiz-feedback').className = 'quiz-feedback ' + (good ? 'good' : 'bad');
    $('quiz-feedback').textContent = (good ? "Correct. " : "Incorrect answer. ") + q.e;
    $('quiz-score').textContent = `${quizScore} / ${quizI + 1}`;
    $('quiz-next').disabled = false;
    $('quiz-progress-fill').style.width = `${100 * (quizI + 1) / quiz.length}%`;
}

$('quiz-next').addEventListener('click', () => {
    if (!quizAnswered) return;
    if (quizI === quiz.length - 1) {
        $('quiz-question').textContent = `Assessment complete: ${quizScore} din ${quiz.length} correct answers.`;
        $('quiz-answers').replaceChildren();
        $('quiz-feedback').className = 'quiz-feedback good';
        $('quiz-feedback').textContent = quizScore >= 8 ? "The main concepts are mastered. Recommendation: also review the code examples." : "Revisit the sections where you made mistakes and repeat the experiment.";
        $('quiz-next').disabled = true;
        $('quiz-progress-fill').style.width = '100%';
        return
    }
    quizI++;
    quizAnswered = false;
    drawQuiz()
});
$('quiz-restart').addEventListener('click', () => {
    quizI = 0;
    quizScore = 0;
    quizAnswered = false;
    drawQuiz()
});
drawQuiz();

// Navigație, temă și progres
$('print-button').addEventListener('click', () => window.print());
$('theme-button')?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    try {
        localStorage.setItem('cv-theme', document.body.classList.contains('dark') ? 'dark' : 'light')
    } catch (e) {
    }
});
document.body.classList.remove('dark');
try {
    localStorage.removeItem('cv-theme')
} catch (e) {
}
const navLinks = [...document.querySelectorAll('.nav-link')],
    observed = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id))
        }
    })
}, {rootMargin: '-15% 0px -75% 0px', threshold: 0});
observed.forEach(el => observer.observe(el));
let scrolled = 0;

function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrolled = max > 0 ? cap(window.scrollY / max * 100, 0, 100) : 100;
    $('course-progress').textContent = Math.round(scrolled) + '%';
    $('progress-fill').style.width = scrolled + '%'
}

window.addEventListener('scroll', updateProgress, {passive: true});
window.addEventListener('resize', updateProgress);
updateProgress();


// 12b. Preview imagini, U-Net și DeepLab / atrous
(function () {
    const lightbox = $('image-lightbox');
    const lightImg = $('image-lightbox-img');
    const lightCaption = $('image-lightbox-caption');

    function resolveCaption(el) {
        return el.closest('[data-lightbox-caption]')?.dataset.lightboxCaption || el.closest('figure')?.querySelector('figcaption')?.innerText || el.getAttribute('alt') || "Image preview";
    }

    function openLightbox(src, caption) {
        lightImg.src = src;
        lightCaption.textContent = caption || "Image preview";
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        lightImg.src = '';
        document.body.style.overflow = '';
    }

    document.addEventListener('click', e => {
        const img = e.target.closest('.figure-card img, .zoomable-figure img, .detector-diagram img');
        if (img) {
            e.preventDefault();
            openLightbox(img.currentSrc || img.src, resolveCaption(img));
            return;
        }
        if (e.target.dataset.closeLightbox || e.target.id === 'image-lightbox-close') closeLightbox();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });

    // U-Net: forward execution order; all clickable blocks occupy non-overlapping SVG boxes.
    const unetData = {
        input: {
            phase: "Input image",
            title: "Input image",
            shape: '(B, 3, 512, 512)',
            op: "RGB normalization",
            gain: "Reference geometry",
            text: "Start with a three-channel tensor and fixed spatial resolution. Pixels represent the visual signal, not already recognized classes.",
            why: "RGB values are normalized before the first convolution. The network will learn filters that transform intensities into useful representations for segmentation.",
            takeaway: "All final masks can be related to the same pixel grid. The example uses a 512 × 512 input, but the architecture can process other compatible dimensions.",
            meta: [["What B means", "Number of images in the mini-batch"], ["What C means", "Number of input channels: 3 for RGB"]]
        },
        enc1: {
            phase: "Fine feature extraction",
            title: "Encoder 1 · edges and textures",
            shape: '(B, 64, 512, 512)',
            op: "Two 3 × 3 convolutions",
            gain: "Precise local details",
            text: "The first two convolutions extract edges, corners and textures. Resolution is not reduced yet, preserving exact edge locations.",
            why: "These features are useful for separating regions with subtle boundaries. Later, the skip connection from this level brings these details back into the decoder.",
            takeaway: "The 64-channel feature map is saved for concatenation and then sent to the first downsampling operation.",
            meta: [["Receptive field", "Still relatively local"], ["Skip connection", "Encoder 1 → Decoder 1, same resolution"]]
        },
        enc2: {
            phase: "First resolution reduction",
            title: "Encoder 2 · medium-scale representations",
            shape: '(B, 128, 256, 256)',
            op: "Pooling ×2 + convolutions",
            gain: "Context over larger regions",
            text: "We halve the resolution. Each position aggregates information from a wider area, and channels increase from 64 to 128.",
            why: "An isolated pixel does not always tell us whether it belongs to a car, road or organ. Wider-scale context helps make more robust semantic decisions.",
            takeaway: "We preserve the 256 × 256 representation for a skip connection to Decoder 2, then descend to the next level.",
            meta: [['Downsampling', "H and W are halved"], ["Skip connection", 'Encoder 2 → Decoder 2']]
        },
        enc3: {
            phase: "Regional context",
            title: "Encoder 3 · structures and object parts",
            shape: '(B, 256, 128, 128)',
            op: "Pooling ×2 + convolutions",
            gain: "Recognizing structures",
            text: "At the third scale, the representation is more compact and can capture complex visual structures, such as anatomical regions or large parts of an object.",
            why: "Increasing the receptive field allows information from multiple regions to be combined without proportionally increasing spatial computational cost.",
            takeaway: "We save 128 × 128 features for Decoder 3; the encoder performs another reduction toward the bottleneck.",
            meta: [["Resolution", "One quarter of input H and W"], ["Skip connection", 'Encoder 3 → Decoder 3']]
        },
        bottleneck: {
            phase: "Context integration",
            title: "Bottleneck · semantic representation",
            shape: '(B, 512, 64, 64)',
            op: "Pooling ×2 + convolutions",
            gain: "Broad context",
            text: "This is the level with the lowest resolution and highest channel count in the diagram. It integrates visual structures and semantic relationships over a wide area.",
            why: "The model can recognize a region type using the whole scene context. Compression provides semantics but reduces localization precision, explaining the need for skip connections.",
            takeaway: "The compact features are upsampled and sent to the first decoder block.",
            meta: [["Scale", "64 × 64 in this example"], ["Role", "What the object or region is, not yet where its exact contour lies"]]
        },
        dec3: {
            phase: "First reconstruction stage",
            title: "Decoder 3 · restoring the first scale",
            shape: '(B, 256, 128, 128)',
            op: "Upsampling + concatenation",
            gain: "Context + regional details",
            text: "We increase resolution to 128 × 128 and concatenate the upsampled map with Encoder 3 features, then apply refinement convolutions.",
            why: "After downsampling, fine geometric information is weaker. Concatenation with a level at the same scale reconstructs the relationship between objects and their image locations.",
            takeaway: "The 256-channel result passes to the next decoder level for another resolution increase.",
            meta: [["U-Net rule", "Concatenation, not simple addition"], ["Spatial dimensions", "Same as Encoder 3"]]
        },
        dec2: {
            phase: "Region refinement",
            title: 'Decoder 2 · combinarea semanticii cu textura',
            shape: '(B, 128, 256, 256)',
            op: "Upsampling + concatenation",
            gain: "More precise region boundaries",
            text: "We upsample the map to 256 × 256 and add Encoder 2 features. The network again combines semantic cues with regional detail.",
            why: "This fusion reduces overly coarse blocks in the mask and helps the model better localize boundaries between regions.",
            takeaway: "The resulting feature map is ready for the final reconstruction level, at the original image resolution.",
            meta: [["Benefit", "Finer segmentation granularity"], ["Spatial dimensions", "Same as Encoder 2"]]
        },
        dec1: {
            phase: "Final spatial details",
            title: 'Decoder 1 · reconstruirea contururilor',
            shape: '(B, 64, 512, 512)',
            op: "Upsampling + concatenation",
            gain: "Fine contours",
            text: "We return to input resolution and use Encoder 1 features. Deep context and precise local edges are now available simultaneously.",
            why: "Segmentation is evaluated pixel by pixel. This block can improve the contours of blood vessels, industrial defects or objects in street images.",
            takeaway: "The 64-channel output enters the prediction head, which calculates scores for each class and pixel.",
            meta: [["Resolution", '512 × 512'], ["Skip connection", 'Encoder 1 → Decoder 1']]
        },
        output: {
            phase: "Dense prediction",
            title: "Output · scores for each pixel",
            shape: '(B, C, 512, 512)',
            op: "1 × 1 convolution",
            gain: "Segmentation map",
            text: "The final layer projects representations into C channels, one for each class. In multiclass segmentation we apply argmax over the class dimension.",
            why: "The model does not produce a single class for the entire image. It makes a separate prediction for each pixel, which is why the output is a dense map.",
            takeaway: "The result is a (B, H, W) map after argmax, or a binary mask after sigmoid and thresholding in formulations with a single positive class.",
            meta: [["Example", "road / sidewalk / car / pedestrian"], ["Metrics", "mIoU and Dice"]]
        },
        skip: {
            phase: "Lateral connections between levels",
            title: "Skip connections · preserving localization",
            shape: '3 perechi de feature maps',
            op: "Copying + concatenation",
            gain: "Spatial precision",
            text: "The three green lines connect encoder and decoder levels with the same spatial size: 512², 256² and 128².",
            why: "The deep encoder understands context but loses geometric information through downsampling. Skip connections restore details at corresponding scales without traversing the entire encoder again.",
            takeaway: "In classical U-Net, features are concatenated along the channel dimension, then processed by convolutions. This is a key difference from simple high-resolution interpolation.",
            meta: [['512 × 512', 'Encoder 1 → Decoder 1'], ['256 × 256', 'Encoder 2 → Decoder 2'], ['128 × 128', 'Encoder 3 → Decoder 3']]
        }
    };
    const unetOrder = ['input', 'enc1', 'enc2', 'enc3', 'bottleneck', 'dec3', 'dec2', 'dec1', 'output', 'skip'];
    let currentUnet = 0, unetInterval = null;
    const pauseUnet = () => {
        if (unetInterval !== null) {
            clearInterval(unetInterval);
            unetInterval = null;
        }
        $('unet-play').textContent = "▶ Play stages";
        $('unet-play').setAttribute('aria-pressed', 'false');
    };

    function setUnetStage(key, fromAnimation = false) {
        const item = unetData[key] || unetData.input;
        if (!fromAnimation) pauseUnet();
        currentUnet = Math.max(0, unetOrder.indexOf(key));
        $('unet-current').textContent = `${currentUnet + 1} / ${unetOrder.length}`;
        $('unet-phase').textContent = item.phase;
        $('unet-stage-title').textContent = item.title;
        $('unet-stage-text').textContent = item.text;
        $('unet-stage-shape').textContent = item.shape;
        $('unet-stage-op').textContent = item.op;
        $('unet-stage-gain').textContent = item.gain;
        $('unet-stage-why').textContent = item.why;
        $('unet-stage-takeaway').textContent = item.takeaway;
        $('unet-stage-meta').innerHTML = item.meta.map(([a, b]) => `<div><strong>${a}</strong><span>${b}</span></div>`).join('');
        document.querySelectorAll('#unet-interactiv [data-stage]').forEach(n => {
            const active = n.dataset.stage === key;
            n.classList.toggle('active', active);
            if (n.tagName.toLowerCase() === 'button') n.setAttribute('aria-pressed', String(active));
        });
        document.querySelectorAll('#unet-interactiv [data-route]').forEach(n => n.classList.toggle('active', n.dataset.route === key));
        $('unet-prev').disabled = currentUnet === 0;
        $('unet-next').disabled = currentUnet === unetOrder.length - 1;
    }

    document.querySelectorAll('#unet-interactiv [data-stage]').forEach(node => {
        node.addEventListener('click', () => setUnetStage(node.dataset.stage));
        if (node.tagName.toLowerCase() !== 'button') node.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setUnetStage(node.dataset.stage);
            }
        });
    });
    $('unet-prev').addEventListener('click', () => setUnetStage(unetOrder[Math.max(0, currentUnet - 1)]));
    $('unet-next').addEventListener('click', () => setUnetStage(unetOrder[Math.min(unetOrder.length - 1, currentUnet + 1)]));
    $('unet-play').addEventListener('click', () => {
        if (unetInterval !== null) {
            pauseUnet();
            return;
        }
        if (currentUnet === unetOrder.length - 1) setUnetStage(unetOrder[0]);
        $('unet-play').textContent = "Ⅱ Stop animation";
        $('unet-play').setAttribute('aria-pressed', 'true');
        unetInterval = setInterval(() => {
            if (currentUnet >= unetOrder.length - 1) {
                pauseUnet();
                return;
            }
            setUnetStage(unetOrder[currentUnet + 1], true);
        }, 2200);
    });
    setUnetStage('input');

    const deeplabPanels = {
        aspp: {
            title: "ASPP · multiscale context",
            text: "Atrous Spatial Pyramid Pooling sends the same representation through branches with different dilation rates. The result mixes local and global context.",
            points: [["Why it is useful", "objects and regions can appear at very different scales"], ["What it produces", "complementary feature maps, concatenated before the final head"]]
        },
        decoder: {
            title: "Decoder · reconstructing resolution",
            text: "DeepLabV3+ adds a lightweight decoder that combines ASPP output with low-level features from early layers. This refines boundaries and reduces contour artifacts.",
            points: [["Difference from U-Net", "the decoder is lighter and not necessarily fully symmetric"], ["Where it helps", "delineating small objects and thin contours"]]
        },
        encoder: {
            title: 'Encoder + atrous convolution',
            text: "Through atrous convolution, the backbone maintains higher representation resolution and captures broader context without increasing the number of weights.",
            points: [["Central idea", "less downsampling, more context per filtering operation"], ["Direct connection", "this is why DeepLab is widely used in semantic segmentation"]]
        }
    };

    function setDeeplabPanel(key) {
        const item = deeplabPanels[key] || deeplabPanels.encoder;
        $('deeplab-inline-title').textContent = item.title;
        $('deeplab-inline-text').textContent = item.text;
        $('deeplab-inline-points').innerHTML = item.points.map(([a, b]) => `<div class="mini"><strong>${a}</strong><span>${b}</span></div>`).join('');
    }

    setDeeplabPanel('encoder');
    document.querySelectorAll('#deeplab-figure .hotspot').forEach(btn => btn.addEventListener('click', e => {
        e.stopPropagation();
        const panel = btn.dataset.previewPanel;
        if (panel) setDeeplabPanel(panel);
        if (btn.dataset.scrollTarget) {
            setDeeplabPanel('encoder');
            document.getElementById(btn.dataset.scrollTarget)?.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }));

    const atrousDescriptions = {
        1: {
            caption: "With r = 1 we obtain standard convolution. All positions in the 3 × 3 neighborhood are sampled without gaps.",
            eff: '3 × 3',
            spacing: "0 pixels between neighbors"
        },
        2: {
            caption: "With r = 2, kernel elements skip one pixel each. The covered area becomes 5 × 5, but we retain 9 weights.",
            eff: '5 × 5',
            spacing: "1 unused pixel between neighbors"
        },
        3: {
            caption: "With r = 3, the effective receptive field becomes 7 × 7. The model sees more context without extra pooling.",
            eff: '7 × 7',
            spacing: "2 unused pixels between neighbors"
        },
        6: {
            caption: "With r = 6, the kernel covers a very large area. This kind of rate is representative of the wide ASPP branches.",
            eff: '13 × 13',
            spacing: "5 unused pixels between neighbors"
        }
    };
    const atrousSteps = {
        1: {
            title: "Step 1 · standard kernel",
            text: "Start with a classical 3 × 3 filter. It reads 9 adjacent positions and produces one activation at the center of the current window.",
            points: [["What stays fixed", "number of parameters: 9 weights per channel"], ["What you observe", "all sampled positions are adjacent, without gaps"]],
            extra: "This is the baseline. Atrous convolution does not change the logical shape of the 3 × 3 mask, only where the same weights are applied in the feature map.",
            link: "In practice, this is the local branch of any network: it captures contours and short textures."
        },
        2: {
            title: "Step 2 · introducing dilation",
            text: "Multiply the index displacement by rate r. Kernel elements spread over a larger area, with gaps between sampled points.",
            points: [["What changes", "the positions read from x(i + r·m, j + r·n)"], ["What does not change", "the weights w(m,n) and their total number"]],
            extra: "As r increases, sample spacing increases. For r = 2, each kernel neighbor is separated by one unused pixel.",
            link: "This explains the terms dilated / atrous: the kernel behaves as if it were sparse, without adding new weights."
        },
        3: {
            title: "Step 3 · effective receptive field",
            text: "The formula Kₑf = K + (K − 1)(r − 1) shows the effective coverage. For a 3 × 3 kernel, r = 6 yields an effective 13 × 13 area.",
            points: [["Benefit", "more context without extra pooling"], ["Risk", "if overdone, sampling may become too sparse and fine detail may be lost"]],
            extra: "In terms of cost, atrous convolution is efficient: the same number of parameters, but much broader context.",
            link: "This is crucial in semantic segmentation because a pixel's class often depends on neighborhoods larger than a few pixels."
        },
        4: {
            title: "Step 4 · ASPP and multiple scales",
            text: "DeepLabV3+ uses several parallel branches: small rates for local detail, large rates for regional context and image pooling for near-global context.",
            points: [["Key idea", "no single scale is sufficient for all objects"], ["Result", "we concatenate complementary feature maps before the decoder"]],
            extra: "Think of the ASPP branches below as four different lenses on the same image. Each highlights a different type of structure.",
            link: "This is why DeepLabV3+ handles both relatively small objects and large stuff regions such as road, sky or vegetation."
        },
        5: {
            title: "Step 5 · fusion in the decoder",
            text: "ASPP output is combined with low-level encoder features. Atrous convolution brings context, and the decoder restores fine boundaries and better spatial alignment.",
            points: [["What comes from ASPP", "multiscale semantic context"], ["What comes from low-level features", "boundaries, localization, textures and contours"]],
            extra: "Without a decoder, the semantic map would remain coarser. Without atrous convolution, context would be weaker. Together, they produce dense, precise segmentations.",
            link: "This clear separation between context and refinement explains why DeepLabV3+ is so often used in real semantic segmentation tasks."
        }
    };
    let currentAtrousRate = 1, currentAtrousStep = 1;

    function fillKernel(step) {
        const kp = $('kernel-preview');
        kp.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const d = document.createElement('div');
            d.textContent = String(i + 1);
            if (step >= 1) d.classList.add('active');
            kp.appendChild(d);
        }
    }

    function fillSequence(step) {
        const items = [
            ["Center", "select the current pixel and extract its relevant neighborhood"],
            ["Sampling", "select feature map positions according to the dilation rate"],
            ["Weighting", "each sample is multiplied by a kernel weight"],
            ["Aggregation", "the weighted sum produces the final output activation"]
        ];
        $('atrous-sequence').innerHTML = items.map((it, idx) => `<div class="seq-item ${idx < step ? 'active' : ''}"><b>${idx + 1}</b><div><strong>${it[0]}</strong><span>${it[1]}</span></div></div>`).join('');
    }

    function setAtrousStep(step) {
        currentAtrousStep = Number(step);
        const item = atrousSteps[currentAtrousStep];
        $('atrous-step-title').textContent = item.title;
        $('atrous-step-text').textContent = item.text;
        $('atrous-step-points').innerHTML = item.points.map(([a, b]) => `<div class="mini"><strong>${a}</strong><span>${b}</span></div>`).join('');
        $('atrous-step-extra').textContent = item.extra;
        $('atrous-step-link').textContent = item.link;
        document.querySelectorAll('#atrous-stepper button').forEach(b => b.classList.toggle('active', Number(b.dataset.step) === currentAtrousStep));
        fillKernel(currentAtrousStep);
        fillSequence(currentAtrousStep);
        renderAtrous(currentAtrousRate, currentAtrousStep);
    }

    function renderAtrous(rate, step) {
        rate = Number(rate);
        step = Number(step || currentAtrousStep);
        currentAtrousRate = rate;
        $('atrous-rate').textContent = String(rate);
        $('atrous-effective').textContent = atrousDescriptions[rate].eff;
        $('atrous-spacing').textContent = atrousDescriptions[rate].spacing;
        $('atrous-caption').textContent = atrousDescriptions[rate].caption;
        document.querySelectorAll('#dilation-controls button').forEach(b => b.classList.toggle('active', Number(b.dataset.rate) === rate));
        const grid = $('atrous-grid');
        grid.innerHTML = '';
        const size = 13, center = 6;
        const sampled = [];
        for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) sampled.push([center + di * rate, center + dj * rate]);
        const sampledSet = new Set(sampled.map(([r, c]) => `${r},${c}`));
        const focusSpan = 1 + (rate - 1) * 2;
        for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) {
            const cell = document.createElement('div');
            cell.className = 'ag-cell';
            const key = `${r},${c}`;
            if (r === center && c === center) cell.classList.add('center');
            if (sampledSet.has(key)) cell.classList.add('sampled');
            if (step === 1) {
                if (Math.abs(r - center) <= 1 && Math.abs(c - center) <= 1) {
                    cell.classList.add('step-focus');
                    if (sampledSet.has(key)) cell.textContent = 'w';
                }
            } else if (step === 2) {
                if (sampledSet.has(key)) {
                    cell.classList.add('step-focus');
                    cell.textContent = 'x';
                }
            } else if (step >= 3) {
                if (Math.abs(r - center) <= focusSpan && Math.abs(c - center) <= focusSpan) {
                    cell.classList.add('step-focus');
                }
                if (sampledSet.has(key)) cell.textContent = 'x';
            }
            grid.appendChild(cell);
        }
        const overlayMap = {
            1: `Standard 3 × 3 kernel applied at the center of the window`,
            2: `Rate r = ${rate} moves the samples farther apart`,
            3: `The effective coverage area is ${atrousDescriptions[rate].eff}`,
            4: `ASPP uses several parallel branches with different rates`,
            5: `ASPP context is then fused with low-level features`
        };
        $('atrous-overlay-note').textContent = overlayMap[step];
        const activeBranch = step < 4 ? 'b1' : (rate === 1 ? 'b1' : rate === 6 ? 'b6' : 'b12');
        document.querySelectorAll('#atrous-aspp-strip > div').forEach(div => div.classList.toggle('active', div.dataset.branch === activeBranch || (step === 4 && div.dataset.branch === 'pool') || (step === 5 && (div.dataset.branch === activeBranch || div.dataset.branch === 'pool'))));
    }

    document.querySelectorAll('#dilation-controls button').forEach(btn => btn.addEventListener('click', () => renderAtrous(btn.dataset.rate, currentAtrousStep)));
    document.querySelectorAll('#atrous-stepper button').forEach(btn => btn.addEventListener('click', () => setAtrousStep(btn.dataset.step)));
    setAtrousStep(1);
})();
