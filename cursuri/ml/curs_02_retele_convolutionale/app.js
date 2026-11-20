'use strict';
// Material auxiliar CNN: toate simulările sunt deterministe și rulate local.
const $ = id => document.getElementById(id);
const fmt = (n, digits = 2) => Number(n).toLocaleString('ro-RO', {maximumFractionDigits: digits});
const esc = s => String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
}[c]));
const clone = m => m.map(r => r.slice());
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const num = (id, d = 0) => Number($(id)?.value ?? d);
const sizes = (h, w, k, s, p, d) => [Math.floor((h + 2 * p - d * (k - 1) - 1) / s + 1), Math.floor((w + 2 * p - d * (k - 1) - 1) / s + 1)];
let timers = {};

function setLoop(key, button, callback, delay) {
    if (timers[key]) {
        clearInterval(timers[key]);
        delete timers[key];
        button.textContent = '▶ Redă';
        return
    }
    button.textContent = '❚❚ Pauză';
    timers[key] = setInterval(callback, delay)
}

function stopLoop(key, button) {
    if (timers[key]) {
        clearInterval(timers[key]);
        delete timers[key]
    }
    if (button) button.textContent = '▶ Redă'
}

function matHtml(rows, cols, values, {
    active = [],
    sample = [],
    output = -1,
    clickable = false,
    fmtDigits = 2,
    pad = []
} = {}) {
    const highlight = new Set(active.map(([r, c]) => r * cols + c)),
        picks = new Set(sample.map(([r, c]) => r * cols + c)), pads = new Set(pad.map(([r, c]) => r * cols + c));
    return `<div class="matrix-component" style="--cols:${cols}">` + Array.from({length: rows * cols}, (_, i) => {
        const r = Math.floor(i / cols), c = i % cols, v = values[r][c], tag = clickable ? 'button' : 'span';
        const neg = v < 0, abs = Math.abs(v), alpha = Math.min(.92, .09 + abs * .078);
        let bg = v > 0 ? `rgba(39,120,220,${alpha.toFixed(3)})` : v < 0 ? `rgba(228,131,37,${Math.min(.65, .09 + abs * .04).toFixed(3)})` : '#f3f6fa';
        let css = `background:${bg};${v > 4 ? 'color:white;' : ''}`;
        return `<${tag} ${clickable ? 'type="button"' : ''} data-r="${r}" data-c="${c}" class="mx-cell ${pads.has(i) ? 'pad' : ''} ${highlight.has(i) ? 'win' : ''} ${picks.has(i) ? 'sample' : ''} ${output === i ? 'out-current' : ''}" style="${pads.has(i) ? '' : css}" title="(${r}, ${c}) = ${fmt(v)}">${pads.has(i) ? '0' : fmt(v, fmtDigits)}</${tag}>`
    }).join('') + '</div>';
}

// 1. HERO - aceeași aritmetică cu simulatorul, redată vectorial.
let heroIndex = 0;

function renderHero() {
    const image = Array.from({length: 7}, (_, r) => Array.from({length: 7}, (_, c) => c >= 3 ? 7 : (r === 3 ? 3 : 1)));
    const k = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]], out = [];
    for (let r = 0; r < 5; r++) {
        out[r] = [];
        for (let c = 0; c < 5; c++) {
            let z = 0;
            for (let u = 0; u < 3; u++) for (let v = 0; v < 3; v++) z += image[r + u][c + v] * k[u][v];
            out[r][c] = z
        }
    }
    const hr = Math.floor(heroIndex / 5), hc = heroIndex % 5;
    let html = '';
    for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
        const active = r >= hr && r < hr + 3 && c >= hc && c < hc + 3;
        const v = image[r][c];
        html += `<rect x="${24 + c * 42}" y="${63 + r * 42}" width="39" height="39" rx="5" fill="${active ? '#cde5ff' : v >= 7 ? '#4a8ee0' : '#e5f2ff'}" stroke="${active ? '#dd921e' : '#cddfed'}" stroke-width="${active ? '2.5' : '1'}"/><text x="${43 + c * 42}" y="${87 + r * 42}" text-anchor="middle" fill="${v >= 7 && !active ? 'white' : '#234c7c'}" font-size="13" font-weight="800">${v}</text>`
    }
    $('hero-grid').innerHTML = html;
    let kernel = '';
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
        kernel += `<rect x="${328 + (c % 3) * 21}" y="${116 + r * 30}" width="18" height="26" rx="3" fill="${k[r][c] < 0 ? '#fff0d9' : '#ddebfb'}"/><text x="${337 + c * 21}" y="${134 + r * 30}" font-size="11" text-anchor="middle" fill="#20558d">${k[r][c]}</text>`
    }
    $('hero-kernel').innerHTML = kernel;
    let o = '';
    for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
        const i = r * 5 + c, sel = i === heroIndex, val = out[r][c];
        o += `<rect x="${420 + c * 60}" y="${70 + r * 56}" width="54" height="50" rx="7" fill="${i > heroIndex ? '#edf2fa' : val > 0 ? '#b5d5fd' : val < 0 ? '#f9dbb6' : '#d9e4f2'}" stroke="${sel ? '#d7912c' : '#dce6f0'}" stroke-width="${sel ? 4 : 1}"/><text x="${447 + c * 60}" y="${100 + r * 56}" font-size="16" font-weight="750" text-anchor="middle" fill="#255080">${i <= heroIndex ? val : '·'}</text>`
    }
    $('hero-result').innerHTML = o;
    $('hero-step').textContent = `Poziția (${hr}, ${hc}) · activare ${out[hr][hc]} · pas ${heroIndex + 1}/25`;
    heroIndex = (heroIndex + 1) % 25;
}

// 2. MAIN CONVOLUTION WORKBENCH
const kernels = {
    edge: [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]],
    horiz: [[-1, -2, -1], [0, 0, 0], [1, 2, 1]],
    blur: Array.from({length: 3}, () => [1 / 9, 1 / 9, 1 / 9]),
    sharpen: [[0, -1, 0], [-1, 5, -1], [0, -1, 0]],
    laplace: [[0, 1, 0], [1, -4, 1], [0, 1, 0]],
    identity: [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
};

function presetImage(name) {
    return Array.from({length: 7}, (_, r) => Array.from({length: 7}, (_, c) => ({
        edge: () => c >= 3 ? 8 : 1,
        cross: () => r === 3 || c === 3 ? 9 : 1,
        ramp: () => c + r,
        checker: () => ((r + c) % 2) * 8
    })[name]?.() ?? 0))
}

let conv = {image: presetImage('edge'), kernel: clone(kernels.edge), step: 0, outputs: [], h: 5, w: 5};

function convInit() {
    const initIds = ['conv-stride', 'conv-padding', 'conv-dilation', 'conv-bias', 'conv-mode'];
    initIds.forEach(id => $(id).addEventListener('input', () => {
        stopLoop('conv', $('conv-play'));
        conv.step = 0;
        convRender()
    }));
    $('conv-image').addEventListener('change', e => {
        if (e.target.value !== 'custom') conv.image = presetImage(e.target.value);
        conv.step = 0;
        convRender()
    });
    $('conv-filter').addEventListener('change', e => {
        if (kernels[e.target.value]) conv.kernel = clone(kernels[e.target.value]);
        conv.step = 0;
        convRender()
    });
    $('conv-input-grid').addEventListener('click', e => {
        let cell = e.target.closest('button[data-r]');
        if (!cell) return;
        conv.image[+cell.dataset.r][+cell.dataset.c] = +num('conv-brush');
        $('conv-image').value = 'custom';
        convRender()
    });
    $('conv-kernel-grid').addEventListener('click', e => {
        let el = e.target.closest('button[data-r]');
        if (!el) return;
        const r = +el.dataset.r, c = +el.dataset.c, old = conv.kernel[r][c];
        const answer = prompt('Coeficientul filtrului (număr între -20 și 20):', String(old));
        if (answer === null) return;
        const val = Number(answer.trim().replace(',', '.'));
        if (!Number.isFinite(val) || Math.abs(val) > 20) {
            alert('Introduceți o valoare numerică finită între −20 și 20.');
            return
        }
        conv.kernel[r][c] = val;
        $('conv-filter').value = 'custom';
        convRender()
    });
    $('conv-prev').onclick = () => convMove(-1);
    $('conv-next').onclick = () => convMove(1);
    $('conv-first').onclick = () => convGoto(0);
    $('conv-last').onclick = () => convGoto(conv.outputs.length - 1);
    $('conv-play').onclick = () => setLoop('conv', $('conv-play'), () => {
        if (conv.step >= conv.outputs.length - 1) {
            convGoto(0);
            stopLoop('conv', $('conv-play'))
        } else convMove(1)
    }, num('conv-speed', 650));
    $('conv-speed').oninput = () => {
        $('conv-speed-val').textContent = `${num('conv-speed')} ms`;
        if (timers.conv) {
            stopLoop('conv', $('conv-play'));
            $('conv-play').click()
        }
    };
    $('conv-step-range').oninput = e => convGoto(+e.target.value);
    convRender()
}

function convMove(d) {
    convGoto(clamp(conv.step + d, 0, conv.outputs.length - 1))
}

function convGoto(idx) {
    conv.step = idx;
    convRender(false)
}

function convRender(recompute = true) {
    let s = num('conv-stride'), p = num('conv-padding'), d = num('conv-dilation'), bias = num('conv-bias'),
        trueConv = $('conv-mode').value === 'true';
    let [h, w] = sizes(7, 7, 3, s, p, d);
    ['stride', 'padding', 'dilation', 'bias'].forEach(key => {
        $('conv-' + key + '-val').textContent = num('conv-' + key)
    });
    const eff = 2 * d + 1;
    $('conv-effective').textContent = `${eff} × ${eff}`;
    $('conv-effective-kernel').textContent = `Dilation=${d} → suport efectiv ${eff}×${eff} (9 ponderi)`;
    conv.h = h;
    conv.w = w;
    const grid = Array.from({length: 7 + 2 * p}, (_, r) => Array.from({length: 7 + 2 * p}, (_, c) => r >= p && r < p + 7 && c >= p && c < p + 7 ? conv.image[r - p][c - p] : 0));
    const currentKernel = trueConv ? Array.from({length: 3}, (_, r) => Array.from({length: 3}, (_, c) => conv.kernel[2 - r][2 - c])) : conv.kernel;
    const out = Array.from({length: h}, (_, r) => Array.from({length: w}, (_, c) => {
        let sum = bias;
        for (let u = 0; u < 3; u++) for (let v = 0; v < 3; v++) sum += currentKernel[u][v] * grid[r * s + u * d][c * s + v * d];
        return sum
    }));
    conv.outputs = out.flat();
    conv.step = clamp(conv.step, 0, Math.max(0, h * w - 1));
    const r = Math.floor(conv.step / w), c = conv.step % w;
    const active = Array.from({length: eff}, (_, u) => Array.from({length: eff}, (_, v) => [r * s + u, c * s + v])).flat();
    const sample = Array.from({length: 3}, (_, u) => Array.from({length: 3}, (_, v) => [r * s + u * d, c * s + v * d])).flat();
    const pads = [];
    for (let i = 0; i < grid.length; i++) for (let j = 0; j < grid.length; j++) if (i < p || j < p || i >= p + 7 || j >= p + 7) pads.push([i, j]);
    $('conv-input-grid').innerHTML = matHtml(grid.length, grid.length, grid, {active, sample, pad: pads, fmtDigits: 0});
    $('conv-input-grid').querySelectorAll('.mx-cell:not(.pad)').forEach(el => {
        const rr = +el.dataset.r, cc = +el.dataset.c;
        if (rr >= p && cc >= p && rr < p + 7 && cc < p + 7) {
            const b = document.createElement('button');
            b.className = el.className;
            b.type = 'button';
            b.dataset.r = rr - p;
            b.dataset.c = cc - p;
            b.style.cssText = el.style.cssText;
            b.title = `Editează pixelul (${rr - p}, ${cc - p})`;
            b.innerHTML = el.innerHTML;
            el.replaceWith(b)
        }
    });
    $('conv-kernel-grid').innerHTML = `<div class="matrix-component" style="--cols:3">` + currentKernel.flatMap((row, u) => row.map((v, col) => `<button type="button" class="mx-cell kernel-weight ${v < 0 ? 'negative' : v === 0 ? 'zero' : ''}" data-r="${trueConv ? 2 - u : u}" data-c="${trueConv ? 2 - col : col}" title="Modifică valoarea coeficientului">${fmt(v, 3)}</button>`)).join('') + '</div>';
    $('conv-output-grid').innerHTML = matHtml(h, w, out, {output: conv.step, fmtDigits: 2});
    $('conv-in-shape').textContent = `7 × 7${p ? ` (+ ${p} padding)` : ''}`;
    $('conv-output-shape').textContent = `${h} × ${w}`;
    $('conv-shape-stat').textContent = `${h} × ${w}`;
    $('conv-macs').textContent = fmt(h * w * 9, 0);
    const terms = [];
    for (let u = 0; u < 3; u++) for (let v = 0; v < 3; v++) terms.push(`${fmt(grid[r * s + u * d][c * s + v * d])}×${fmt(currentKernel[u][v], 3)}`);
    $('conv-current-formula').innerHTML = `Y[${r}, ${c}] = ${terms.map(t => `(${t})`).join(' + ')} + b (${fmt(bias)}) <br><strong>= ${fmt(out[r][c], 4)}</strong>`;
    $('conv-current-explain').textContent = `Poziția curentă a ieșirii: (${r}, ${c}); colțul ferestrei în imaginea bordată: (${r * s}, ${c * s}); stride=${s}, padding=${p}, dilation=${d}. ${trueConv ? 'Kernelul este întors pe ambele axe.' : 'Kernelul nu este întors (convenția PyTorch).'}`;
    $('conv-step-range').max = String(h * w - 1);
    $('conv-step-range').value = String(conv.step);
    $('conv-step-label').textContent = `Pas ${conv.step + 1} / ${h * w}`;
}

// 3. FILTER RESPONSE ON SYNTHETIC SCENES
function featureScene(name) {
    const m = Array.from({length: 24}, () => Array(24).fill(0));
    for (let r = 0; r < 24; r++) for (let c = 0; c < 24; c++) {
        if (name === 'geometry') m[r][c] = (r > 3 && r < 15 && c > 3 && c < 13 ? 7 : 0) + (r >= 12 && r <= 20 && c >= 13 && c < 21 ? 4 : 0);
        if (name === 'grid') m[r][c] = (r % 6 === 0 || c % 6 === 0) ? 8 : ((r > 5 && r < 16 && c > 10 && c < 18) ? 4 : 0);
        if (name === 'diagonal') m[r][c] = (Math.abs(r - c) < 2 ? 8 : 0) + (Math.abs(r + c - 24) < 2 ? 4 : 0);
        if (name === 'texture') m[r][c] = Math.round(4 + 3 * Math.sin(c * 1.2) * Math.cos(r * .8));
    }
    return m
}

const featureK = {
    sobelx: kernels.edge,
    sobely: kernels.horiz,
    laplace: kernels.laplace,
    blur: kernels.blur,
    sharpen: kernels.sharpen
};

function featureConv(m, k) {
    const h = m.length, w = m[0].length;
    return m.map((row, r) => row.map((_, c) => {
        let z = 0;
        for (let u = 0; u < 3; u++) for (let v = 0; v < 3; v++) z += k[u][v] * (m[r + u - 1]?.[c + v - 1] ?? 0);
        return z
    }))
}

function canvasMatrix(el, m, mode, div) {
    const cv = $(el), ctx = cv.getContext('2d');
    const side = cv.width / m.length;
    ctx.clearRect(0, 0, cv.width, cv.height);
    const vals = m.flat(), bound = mode === 'input' ? 9 : div ?? Math.max(1, ...vals.map(v => Math.abs(v)));
    for (let r = 0; r < m.length; r++) for (let c = 0; c < m[r].length; c++) {
        let v = m[r][c], rr, gg, bb;
        if (mode === 'input') {
            let t = clamp(v / 9, 0, 1);
            rr = gg = bb = Math.round(251 - t * 186)
        } else {
            let t = clamp(Math.abs(v) / bound, 0, 1);
            if (v >= 0) {
                rr = Math.round(244 - 155 * t);
                gg = Math.round(248 - 103 * t);
                bb = Math.round(252 - 17 * t)
            } else {
                rr = Math.round(252 - 22 * t);
                gg = Math.round(247 - 95 * t);
                bb = Math.round(244 - 160 * t)
            }
        }
        ctx.fillStyle = `rgb(${rr},${gg},${bb})`;
        ctx.fillRect(c * side, r * side, Math.ceil(side), Math.ceil(side))
    }
}

function renderFeatures() {
    const image = featureScene($('feature-scene').value), k = featureK[$('feature-kernel').value],
        out = featureConv(image, k), mode = $('feature-show').value,
        shown = out.map(row => row.map(v => mode === 'relu' ? Math.max(0, v) : mode === 'abs' ? Math.abs(v) : v));
    let flat = out.flat(), amp = $('feature-scale').value === 'fixed' ? 8 : undefined;
    canvasMatrix('feature-input', image, 'input');
    canvasMatrix('feature-output', shown, 'out', amp);
    const min = Math.min(...flat), max = Math.max(...flat), n = flat.filter(v => v > 0).length;
    $('feature-metrics').innerHTML = `<div><span>Minim (brut)</span><strong>${fmt(min)}</strong></div><div><span>Maxim (brut)</span><strong>${fmt(max)}</strong></div><div><span>Răspunsuri pozitive</span><strong>${n} / 576</strong></div><div><span>Răspuns după activare</span><strong>${mode === 'relu' ? 'ReLU' : mode === 'abs' ? 'Modul' : 'Identitate'}</strong></div>`;
    $('feature-kernel-preview').innerHTML = '<div class="mini-kernel">' + k.flat().map(v => `<span>${fmt(v, 2)}</span>`).join('') + '</div>';
    $('feature-range').textContent = `Brut: [${fmt(min)}, ${fmt(max)}] · ${$('feature-scale').value === 'auto' ? 'vizualizare normalizată' : 'scară ±8'}`
}

// 4. SHAPE + PARAMETER COST
function shGet() {
    return {
        h: num('sh-h'),
        w: num('sh-w'),
        cin: num('sh-cin'),
        cout: num('sh-cout'),
        k: num('sh-k'),
        s: num('sh-s'),
        p: num('sh-p'),
        d: num('sh-d'),
        g: num('sh-g'),
        bias: num('sh-bias')
    }
}

function shSet(v) {
    Object.entries(v).forEach(([k, val]) => {
        const el = $('sh-' + k);
        if (el) el.value = val
    });
    shapeRender()
}

function shapeRender() {
    const {h, w, cin, cout, k, s, p, d, g, bias} = shGet(), out = sizes(h, w, k, s, p, d);
    let errors = [];
    for (const [name, value, min, max] of [['H', h, 1, 4096], ['W', w, 1, 4096], ['Cin', cin, 1, 2048], ['Cout', cout, 1, 2048], ['k', k, 1, 31], ['s', s, 1, 16], ['p', p, 0, 64], ['d', d, 1, 16], ['g', g, 1, 2048]]) if (!Number.isInteger(value) || value < min || value > max) errors.push(`${name}: număr întreg între ${min} și ${max}`);
    if (cin % g !== 0 || cout % g !== 0) errors.push('Pentru groups, atât Cin cât și Cout trebuie să fie divizibile cu g.');
    if (out.some(v => v <= 0)) errors.push('Kernelul efectiv nu încape pe intrarea bordată.');
    $('shape-error').textContent = errors.join(' · ');
    $('sh-journey-in').textContent = `1×${cin}×${h}×${w}`;
    $('sh-journey-k').textContent = `k=${k}, s=${s}, p=${p}, d=${d}, g=${g}`;
    if (errors.length) {
        ['sh-out', 'sh-params', 'sh-macs', 'sh-journey-out'].forEach(id => $(id).textContent = '—');
        return
    }
    const params = cout * (cin / g * k * k + bias), macs = out[0] * out[1] * cout * cin / g * k * k;
    $('sh-out').textContent = `1×${cout}×${out[0]}×${out[1]}`;
    $('sh-params').textContent = fmt(params, 0);
    $('sh-macs').textContent = fmt(macs, 0);
    $('sh-journey-out').textContent = `1×${cout}×${out[0]}×${out[1]}`;
}

// 5. MULTICHANNEL CONV EXACT VALUES
const rgb = {
    R: [[1, 2, 3], [2, 4, 5], [1, 2, 1]],
    G: [[0, 1, 2], [1, 3, 4], [0, 2, 3]],
    B: [[3, 2, 1], [2, 1, 0], [1, 0, 2]]
};
const multiK = [{R: [[1, 0], [0, -1]], G: [[0, 1], [-1, 0]], B: [[1, 0], [0, 0]]}, {
    R: [[0, 1], [1, 0]],
    G: [[1, -1], [0, 1]],
    B: [[-1, 0], [1, 1]]
}];

function renderMulti() {
    const ki = num('multi-filter'), pos = num('multi-pos'), r = Math.floor(pos / 2), c = pos % 2, k = multiK[ki];
    let panels = '', sum = 0, terms = [];
    ['R', 'G', 'B'].forEach((ch, i) => {
        const m = rgb[ch];
        let sub = 0;
        for (let u = 0; u < 2; u++) for (let v = 0; v < 2; v++) sub += m[r + u][c + v] * k[ch][u][v];
        sum += sub;
        terms.push(`<strong>${ch}:</strong> ${Array.from({length: 2}, (_, u) => Array.from({length: 2}, (_, v) => `${m[r + u][c + v]}×(${k[ch][u][v]})`).join(' + ')).join(' + ')} = <strong>${sub}</strong>`);
        panels += `<div class="channel-panel"><strong style="color:${['#d86357', '#229179', '#2d73c3'][i]}">Canal ${ch}</strong><div>` + m.flatMap((row, ri) => row.map((v, ci) => `<span class="${ri >= r && ri < r + 2 && ci >= c && ci < c + 2 ? 'active' : ''}">${v}</span>`)).join('') + `</div><p>Contribuție: ${sub}</p></div>`
    });
    $('channel-visual').innerHTML = panels;
    $('multi-sums').innerHTML = terms.join('<br>') + `<br><strong>Y[${ki}, ${r}, ${c}] = ${sum}</strong> (bias = 0)`.replaceAll('<strong><strong>', '<strong>')
}

// 6. POOLING
const poolSamples = {
    spots: [[1, 2, 1, 0, 2, 0], [1, 8, 2, 2, 3, 1], [0, 2, 9, 1, 0, 2], [2, 3, 4, 5, 1, 0], [1, 0, 1, 0, 7, 2], [0, 4, 1, 2, 2, 1]],
    pattern: Array.from({length: 6}, (_, r) => Array.from({length: 6}, (_, c) => r + c)),
    negative: Array.from({length: 6}, (_, r) => Array.from({length: 6}, (_, c) => -(1 + (r * 3 + c) % 8)))
};
let poolStep = 0;

function renderPool() {
    const m = poolSamples[$('pool-data').value], k = num('pool-k'), s = num('pool-s'), h = Math.floor((6 - k) / s + 1),
        w = h, mode = $('pool-mode').value, all = Array.from({length: h}, (_, r) => Array.from({length: w}, (_, c) => {
            let v = [];
            for (let u = 0; u < k; u++) for (let x = 0; x < k; x++) v.push(m[r * s + u][c * s + x]);
            return mode === 'max' ? Math.max(...v) : v.reduce((a, b) => a + b, 0) / v.length
        }));
    poolStep = clamp(poolStep, 0, h * w - 1);
    const r = Math.floor(poolStep / w), c = poolStep % w;
    $('pool-input').innerHTML = matHtml(6, 6, m, {
        active: Array.from({length: k}, (_, u) => Array.from({length: k}, (_, v) => [r * s + u, c * s + v])).flat(),
        fmtDigits: 0
    });
    $('pool-output').innerHTML = matHtml(h, w, all, {output: poolStep});
    $('pool-out-shape').textContent = `${h} × ${w}`;
    const vals = Array.from({length: k}, (_, u) => Array.from({length: k}, (_, v) => m[r * s + u][c * s + v])).flat();
    $('pool-calc').innerHTML = `Pas ${poolStep + 1}/${h * w}: fereastra {${vals.join(', ')}} → ${mode === 'max' ? 'max' : 'mean'} = <strong>${fmt(all[r][c])}</strong>. ${mode === 'max' ? 'Este selectată activarea maximă, inclusiv dacă toate sunt negative.' : 'Se calculează suma împărțită la ' + (k * k) + '.'}`
}

function poolMove(d) {
    const k = num('pool-k'), s = num('pool-s'), h = Math.floor((6 - k) / s + 1);
    poolStep = clamp(poolStep + d, 0, h * h - 1);
    renderPool()
}

// 7. RECEPTIVE FIELD
let rfLayers = [{k: 3, s: 1, d: 1}, {k: 3, s: 2, d: 1}, {k: 3, s: 1, d: 2}];

function rfInit() {
    const el = $('rf-editor');
    el.innerHTML = rfLayers.map((p, i) => `<div><strong>Strat ${i + 1}</strong>${[['k', 'Kernel', [1, 3, 5, 7]], ['s', 'Stride', [1, 2, 3]], ['d', 'Dilation', [1, 2, 3, 4]]].map(([key, txt, values]) => `<label>${txt}<select data-layer="${i}" data-key="${key}">${values.map(v => `<option value="${v}" ${v === p[key] ? 'selected' : ''}>${v}</option>`).join('')}</select></label>`).join('')}</div>`).join('');
    el.addEventListener('change', e => {
        const t = e.target;
        if (t.matches('[data-layer]')) {
            rfLayers[+t.dataset.layer][t.dataset.key] = +t.value;
            renderRF()
        }
    });
    renderRF()
}

function renderRF() {
    let r = 1, j = 1, data = [{name: 'Input', r: 1, j: 1}];
    rfLayers.forEach((p, i) => {
        r += (p.k - 1) * p.d * j;
        j *= p.s;
        data.push({name: `Strat ${i + 1}`, r, j})
    });
    let max = Math.max(7, r);
    $('rf-visual').innerHTML = data.map(v => `<div class="rf-row"><span>${v.name}</span><div class="rf-bar"><div style="width:${Math.max(1, v.r / max * 100)}%"></div></div><strong>${v.r} px · j=${v.j}</strong></div>`).join('');
    $('rf-total').textContent = `${r} × ${r} px`;
    $('rf-jump').textContent = `${j} px`
}

// 8. DEPTHWISE COMPUTE
function renderEfficiency() {
    const ci = num('eff-cin'), co = num('eff-cout'), k = num('eff-k'), h = num('eff-h'), standard = ci * co * k * k,
        sep = ci * k * k + ci * co, macS = standard * h * h, macD = sep * h * h, ratio = macS / macD;
    $('eff-cin-v').textContent = ci;
    $('eff-cout-v').textContent = co;
    const scale = macS;
    $('eff-chart').innerHTML = `<div><span>Standard</span><div class="bar-track"><div class="bar-fill" style="width:100%"></div></div><strong>${fmt(macS / 1e6)} M MACs</strong></div><div><span>DW + PW</span><div class="bar-track"><div class="bar-fill depth" style="width:${macD / scale * 100}%"></div></div><strong>${fmt(macD / 1e6)} M MACs</strong></div>`;
    $('eff-ratio').textContent = `${fmt(ratio)}× mai puține`;
    $('eff-standard').textContent = fmt(standard, 0);
    $('eff-dw').textContent = fmt(sep, 0)
}

// 9. RESIDUAL
function renderResidual() {
    const x = num('res-x'), a = num('res-a');
    $('res-x-v').textContent = fmt(x);
    $('res-a-v').textContent = fmt(a);
    $('res-f').textContent = fmt(a * x);
    $('res-y').textContent = fmt((1 + a) * x);
    $('res-grad').textContent = fmt(1 + a)
}

// 10. TRANSPOSED CONV
let transStep = 0;

function transData() {
    const stride = num('trans-stride'), name = $('trans-kernel').value, mode = $('trans-input').value,
        values = mode === 'diag' ? [[1, 0, 0], [0, 2, 0], [0, 0, 3]] : [[0, 0, 0], [0, 5, 0], [0, 0, 0]],
        kernel = {ones: [[1, 1], [1, 1]], checker: [[1, -1], [-1, 1]], avg: [[.25, .25], [.25, .25]]}[name],
        h = (3 - 1) * stride + 2;
    const output = Array.from({length: h}, () => Array(h).fill(0)),
        positions = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]];
    for (let z = 0; z <= transStep; z++) {
        const [r, c] = positions[z];
        for (let u = 0; u < 2; u++) for (let v = 0; v < 2; v++) output[r * stride + u][c * stride + v] += values[r][c] * kernel[u][v]
    }
    return {stride, values, kernel, output, h, positions}
}

function renderTrans() {
    const d = transData(), [r, c] = d.positions[transStep];
    $('trans-source').innerHTML = matHtml(3, 3, d.values, {active: [[r, c]], fmtDigits: 0});
    $('trans-target').innerHTML = matHtml(d.h, d.h, d.output, {active: [[r * d.stride, c * d.stride], [r * d.stride + 1, c * d.stride], [r * d.stride, c * d.stride + 1], [r * d.stride + 1, c * d.stride + 1]]});
    $('trans-output-shape').textContent = `${d.h} × ${d.h}`;
    $('trans-note').innerHTML = `Pas <strong>${transStep + 1}/9</strong>: intrare X[${r},${c}]=${d.values[r][c]}; contribuția este plasată la începutul (${r * d.stride},${c * d.stride}) și <strong>adunată</strong> la valorile existente. Kernel: [${d.kernel[0].join(', ')}; ${d.kernel[1].join(', ')}].`
}

function transMove(d) {
    transStep = clamp(transStep + d, 0, 8);
    renderTrans()
}

// 11. U-NET
const unetStages = [{
    icon: '▦',
    name: 'Intrare',
    sub: 'B × C × H × W',
    desc: 'Imaginea sau volumul de intrare este păstrat cu geometrie explicită; pentru 2D, formatul uzual PyTorch este NCHW.'
}, {
    icon: '▥',
    name: 'Encoder',
    sub: 'convoluții + downsample',
    desc: 'Encoderul extrage trăsături pe mai multe scări și reduce rezoluția; activările intermediare vor fi reutilizate prin skip connections.'
}, {
    icon: '▤',
    name: 'Bottleneck',
    sub: 'context mai larg',
    desc: 'La nivelul de rezoluție redusă, caracteristicile au un câmp receptiv mai mare și pot integra mai mult context.'
}, {
    icon: '▥',
    name: 'Decoder + skip',
    sub: 'upsampling + concat',
    desc: 'Decoderul recuperează detalii spațiale prin upsampling și concatenarea hărților intermediare din encoder, după alinierea dimensiunilor.'
}, {
    icon: '▦',
    name: 'Mască',
    sub: 'B × C_clase × H × W',
    desc: 'Un strat 1×1 produce logits pe clasă pentru fiecare pixel. Softmax se folosește pentru interpretare multi-clasă; la antrenare CrossEntropyLoss primește direct logits.'
}];

function renderUNet() {
    let i = num('unet-step');
    $('unet-diagram').innerHTML = unetStages.map((s, j) => `<div class="unet-stage ${i === j ? 'active' : ''}"><div class="stage-icon">${s.icon}</div><strong>${s.name}</strong><small>${s.sub}</small></div>${j < unetStages.length - 1 ? '<span class="unet-arrow">→</span>' : ''}`).join('');
    $('unet-explain').textContent = unetStages[i].desc
}

// 12. ARCHITECTURES AND PAPERS
const architectureData = [
    {
        name: 'LeNet-5',
        year: '1998',
        flow: ['Conv + subsampling', 'Conv + subsampling', 'Clasificator'],
        innovation: 'Primele arhitecturi CNN antrenate end-to-end pentru recunoașterea caracterelor; demonstrație clasică de extragere ierarhică a caracteristicilor.',
        when: 'OCR, cifre, demonstrații, rețele ușor de analizat.',
        lim: 'Prea modestă pentru imagini complexe la scară mare.',
        link: 'https://proceedingsoftheieee.ieee.org/gradient-based-learning-applied-to-document-recognition/',
        paper: 'LeCun et al. · Proceedings of the IEEE'
    },
    {
        name: 'AlexNet',
        year: '2012',
        flow: ['Conv mari', 'ReLU / pooling', 'Conv profunde', 'FC'],
        innovation: 'A arătat eficiența învățării caracteristicilor vizuale la scară ImageNet, cu GPU, ReLU și augmentare.',
        when: 'Studii despre istoria CNN, înțelegerea clasificării pe ImageNet.',
        lim: 'Număr mare de parametri și cost mai mare decât backbone-uri eficiente recente.',
        link: 'https://papers.neurips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html',
        paper: 'Krizhevsky et al. · NeurIPS'
    },
    {
        name: 'VGG-16',
        year: '2014/15',
        flow: ['3×3 + 3×3', 'pool', '3×3 + 3×3', 'FC'],
        innovation: 'Blocuri repetate de convoluții mici 3×3; mai multe straturi succesive compun neliniarități și câmp receptiv.',
        when: 'Transfer learning și analiză de feature maps în contexte didactice.',
        lim: 'Model mare, consum ridicat de memorie.',
        link: 'https://arxiv.org/abs/1409.1556',
        paper: 'Simonyan & Zisserman · ICLR 2015'
    },
    {
        name: 'GoogLeNet / Inception',
        year: '2015',
        flow: ['1×1', '3×3 în paralel', '5×5', 'concat'],
        innovation: 'Agregare multi-scală în ramuri paralele, cu 1×1 pentru reducerea canalelor și eficiență.',
        when: 'Obiecte la scări diferite, înțelegerea blocurilor multi-ramură.',
        lim: 'Topologie mai complicată pentru modificări și analiză.',
        link: 'https://openaccess.thecvf.com/content_cvpr_2015/html/Szegedy_Going_Deeper_With_2015_CVPR_paper.html',
        paper: 'Szegedy et al. · CVPR 2015'
    },
    {
        name: 'ResNet',
        year: '2015/16',
        flow: ['Conv', 'F(x)', '+ x', 'ReLU / identity'],
        innovation: 'Conexiuni de tip identitate care facilitează optimizarea rețelelor adânci.',
        when: 'Backbone robust pentru clasificare, detecție și segmentare; transfer learning.',
        lim: 'Poate fi prea greu pentru edge fără optimizări.',
        link: 'https://www.microsoft.com/en-us/research/publication/deep-residual-learning-for-image-recognition/',
        paper: 'He et al. · CVPR 2016'
    },
    {
        name: 'U-Net',
        year: '2015',
        flow: ['Encoder', 'Skip connections', 'Decoder', 'Mask'],
        innovation: 'Recuperarea informației spațiale fine prin conectarea directă a nivelurilor encoder–decoder.',
        when: 'Segmentare biomedicală, defecte industriale, imagini satelitare adnotate.',
        lim: 'Consumul de memorie crește pentru rezoluții/volume mari.',
        link: 'https://arxiv.org/abs/1505.04597',
        paper: 'Ronneberger et al. · MICCAI'
    },
    {
        name: 'MobileNet',
        year: '2017',
        flow: ['Depthwise k×k', 'Pointwise 1×1', 'Blocks'],
        innovation: 'Factorarea convoluției standard în separare spațială și mixare între canale reduce costul teoretic.',
        when: 'Dispozitive mobile, aplicații edge, sisteme cu memorie/energie limitate.',
        lim: 'Calitatea depinde de buget; MACs reduse nu garantează latență redusă.',
        link: 'https://arxiv.org/abs/1704.04861',
        paper: 'Howard et al. · arXiv 2017'
    },
    {
        name: 'DeepLab / atrous',
        year: '2017',
        flow: ['Backbone', 'Atrous conv', 'ASPP', 'Segmentare'],
        innovation: 'Dilated convolutions și agregare multi-scală pentru context la rezoluție mai mare.',
        when: 'Segmentare semantică cu obiecte de dimensiuni variate.',
        lim: 'Parametri, rate de dilatare și rezoluție influențează detaliile.',
        link: 'https://arxiv.org/abs/1706.05587',
        paper: 'Chen et al. · arXiv 2017'
    },
    {
        name: 'ConvNeXt',
        year: '2022',
        flow: ['Depthwise', 'Bloc modernizat', 'Stage-uri', 'Clasificare'],
        innovation: 'Modernizare sistematică a designului ConvNet, cu lecții din arhitecturile Transformer moderne.',
        when: 'Backbones CNN competitive pentru aplicații vizuale diverse.',
        lim: 'Necesită analiză de cost și compatibilitate cu pipeline-ul.',
        link: 'https://openaccess.thecvf.com/content/CVPR2022/html/Liu_A_ConvNet_for_the_2020s_CVPR_2022_paper.html',
        paper: 'Liu et al. · CVPR 2022'
    },
];

function architectureInit() {
    $('architecture-list').innerHTML = architectureData.map(a => `<article class="architecture-card"><div class="ac-top"><strong>${a.name}</strong><span class="ac-year">${a.year}</span></div><div class="ac-body"><div class="ac-flow">${a.flow.map((f, i) => `${i ? '<b>→</b>' : ''}<span>${f}</span>`).join('')}</div><p><strong>Ideea-cheie.</strong> ${a.innovation}</p><p><strong>Utilitate.</strong> ${a.when}</p><p><strong>Limitare.</strong> ${a.lim}</p></div><div class="ac-foot"><a href="${a.link}" rel="noopener noreferrer" target="_blank">Articol original ↗</a><strong>${a.paper}</strong></div></article>`).join('')
}

// 13. CASE STUDIES
const cases = {
    medical: {
        name: 'Segmentarea unei leziuni din imagini medicale',
        eyebrow: 'SEGMENTARE · IMAGISTICĂ MEDICALĂ',
        description: 'Pentru o mască per pixel ai nevoie de un encoder–decoder precum U-Net. În cazul volumelor CT/MRI cu informație 3D, compară un model 3D cu o abordare slice-by-slice 2D. Preprocesarea și split-ul pe pacient sunt decisive.',
        a: 'U-Net / 3D U-Net, Conv2d / Conv3d',
        b: 'C × H × W sau C × D × H × W',
        c: 'Dice / mIoU, sensibilitate, validare pe pacient'
    },
    mobile: {
        name: 'Clasificare vizuală în timp real pe dispozitiv mobil',
        eyebrow: 'EDGE · EFICIENȚĂ',
        description: 'Folosim un backbone compact și comprimăm costul prin depthwise separable convolutions, input dimensionat adecvat și eventual cuantizare. Măsurăm latența reală și consumul pe dispozitiv, nu doar FLOPs.',
        a: 'MobileNet / CNN eficient',
        b: 'RGB 224×224 (în funcție de model)',
        c: 'Accuracy macro-F1 + latență + memorie'
    },
    satellite: {
        name: 'Segmentarea tipurilor de acoperire a terenului',
        eyebrow: 'GEOSPAȚIAL · MULTI-SCALĂ',
        description: 'Fotografiile aeriene sau satelitare au obiecte la scări foarte diferite. Modelele tip U-Net și dilated convolution pot integra contextul fără a pierde rezoluția. Evită leakage geografic la split.',
        a: 'U-Net / backbone cu atrous',
        b: 'Multispectral C×H×W, patch-uri',
        c: 'mIoU, F1 pe clasă, evaluare pe regiuni noi'
    },
    industrial: {
        name: 'Detectarea defectelor pe linia de producție',
        eyebrow: 'INDUSTRIAL · CALITATE',
        description: 'Pentru clasificare binary „defect/nedefect” un CNN cu fine-tuning poate fi suficient. Pentru localizarea fisurilor mici preferă segmentare și păstrează rezoluția, analizând distribuția mărimilor defectelor.',
        a: 'ResNet sau U-Net, după output',
        b: 'Imagini de rezoluție mare / patch-uri',
        c: 'Recall pe defecte rare, FP, latență'
    },
    signal: {
        name: 'Clasificarea tiparelor din ECG sau vibrații',
        eyebrow: 'SEMNALE · CONV1D',
        description: 'Un Conv1d poate extrage tipare locale temporale. Fereastra, rata de eșantionare și câmpul receptiv trebuie raportate la durata fenomenului, iar testarea trebuie separată pe subiect/dispozitiv unde este cazul.',
        a: 'Conv1d + pooling + clasificator',
        b: 'B×C×L, eșantionare temporală',
        c: 'macro-F1/AUROC și generalizare între subiecți'
    }
};

function renderCase(key) {
    const d = cases[key];
    $('case-details').innerHTML = `<div class="case-eyebrow">${d.eyebrow}</div><h3>${d.name}</h3><p>${d.description}</p><div class="case-details-grid"><div><small>MODEL / COMPONENTE</small><strong>${d.a}</strong></div><div><small>TIPUL INTRĂRII</small><strong>${d.b}</strong></div><div><small>EVALUARE</small><strong>${d.c}</strong></div></div>`;
    document.querySelectorAll('[data-case]').forEach(b => b.classList.toggle('active', b.dataset.case === key))
}

// 14. PYTORCH CODE VIEWER
let selectedCode = 0;

function codeInit() {
    const el = $('cnn-code-tabs');
    el.innerHTML = CNN_CODE_EXAMPLES.map((e, i) => `<button type="button" class="${i === 0 ? 'active' : ''}" data-index="${i}">${String(i + 1).padStart(2, '0')} · ${esc(e.title)}</button>`).join('');
    el.addEventListener('click', e => {
        const b = e.target.closest('[data-index]');
        if (!b) return;
        selectedCode = +b.dataset.index;
        renderCode()
    });
    $('cnn-copy').onclick = () => {
        const code = CNN_CODE_EXAMPLES[selectedCode].code;
        const textButton = $('cnn-copy');
        if (navigator.clipboard?.writeText) navigator.clipboard.writeText(code).then(() => {
            textButton.textContent = 'Copiat ✓';
            setTimeout(() => textButton.textContent = 'Copiază codul', 1400)
        }).catch(() => fallbackCopy(code)); else fallbackCopy(code)
    };
    renderCode()
}

function fallbackCopy(code) {
    const el = document.createElement('textarea');
    el.value = code;
    el.style.position = 'fixed';
    el.style.opacity = 0;
    document.body.appendChild(el);
    el.select();
    try {
        document.execCommand('copy');
        $('cnn-copy').textContent = 'Copiat ✓'
    } catch (e) {
        $('cnn-copy').textContent = 'Selectează codul'
    }
    el.remove();
    setTimeout(() => $('cnn-copy').textContent = 'Copiază codul', 1300)
}

function highlightPython(s) {
    return esc(s).split('\n').map(line => {
        const i = line.indexOf('#');
        if (i >= 0) line = line.slice(0, i) + `<span style="color:#79a5a0">${line.slice(i)}</span>`;
        return line
    }).join('\n')
}

function renderCode() {
    const e = CNN_CODE_EXAMPLES[selectedCode];
    $('cnn-code-file').textContent = e.file;
    $('cnn-code').innerHTML = highlightPython(e.code);
    $('cnn-code-info').textContent = e.description;
    document.querySelectorAll('#cnn-code-tabs button').forEach(b => b.classList.toggle('active', +b.dataset.index === selectedCode))
}

// 15. QUIZ
const questions = [
    {
        q: 'Ce operație calculează implicit torch.nn.Conv2d?',
        options: ['Convoluție cu inversarea kernelului 180°', 'Corelație încrucișată, fără inversarea kernelului', 'Transformata Fourier inversă', 'O medie globală'],
        answer: 1,
        why: 'Documentația PyTorch definește operatorul Conv2d prin cross-correlation. Numele „convoluție” este o convenție uzuală în deep learning.'
    },
    {
        q: 'Imaginea 32×32×3 trece prin 6 filtre 5×5, stride=1, padding=0. Shape-ul fără batch?',
        options: ['28×28×6', '28×28×3', '32×32×6', '30×30×6'],
        answer: 0,
        why: 'Dimensiunea spațială este 32−5+1=28; fiecare dintre cele 6 filtre produce o hartă distinctă.'
    },
    {
        q: 'Câți parametri are Conv2d(3, 6, kernel_size=5, bias=True)?',
        options: ['150', '450', '456', '6×5×5 = 150'],
        answer: 2,
        why: '6 filtre × (3 canale × 5×5 ponderi + 1 bias) = 6×76=456.'
    },
    {
        q: 'O intrare 31×31, kernel=3, padding=1, stride=2, dilation=1. H_out este:',
        options: ['14', '15', '16', '31'],
        answer: 2,
        why: '⌊(31+2−2−1)/2⌋+1 = ⌊30/2⌋+1 = 16.'
    },
    {
        q: 'Un kernel 3×3 cu dilation=3 are suport spațial efectiv de:',
        options: ['3×3', '5×5', '7×7', '9×9'],
        answer: 2,
        why: 'k_eff=d(k−1)+1=3×2+1=7. Rămân 9 coeficienți învățabili, nu 49.'
    },
    {
        q: 'Care este forma ponderilor unui Conv2d(3, 8, kernel_size=3, groups=1)?',
        options: ['(3,8,3,3)', '(8,3,3,3)', '(8,8,3,3)', '(1,3,3,3)'],
        answer: 1,
        why: 'Ordinea PyTorch este (C_out, C_in/groups, kH, kW).'
    },
    {
        q: 'Ce afișează MaxPool2d(2,2) pentru fereastra [-1,-3; -4,-2]?',
        options: ['0', '−1', '−2,5', '−4'],
        answer: 1,
        why: 'Max pooling selectează cea mai mare valoare din fereastră, chiar dacă este negativă.'
    },
    {
        q: 'Pentru trei straturi 3×3, toate stride=1 și dilation=1, câmpul receptiv teoretic este:',
        options: ['3×3', '5×5', '7×7', '9×9'],
        answer: 2,
        why: 'r0=1, iar fiecare kernel 3 adaugă 2 pixeli: 1→3→5→7.'
    },
    {
        q: 'Ce tehnică reduce costul convoluțional în MobileNet clasic?',
        options: ['Doar creșterea numărului de canale', 'Depthwise 3×3 urmat de pointwise 1×1', 'Înlocuirea tuturor convoluțiilor cu FC', 'Sigmoid după fiecare pixel'],
        answer: 1,
        why: 'Depthwise prelucrează spatial fiecare canal, iar 1×1 combină canalele: cost ≈ HW(Cin k² + Cin Cout).'
    },
    {
        q: 'Care afirmație despre ConvTranspose2d este corectă?',
        options: ['Inversează exact o convoluție oarecare', 'Recuperează fără pierderi pixelii de intrare', 'Poate realiza o creștere a rezoluției printr-o transformare învățabilă', 'Nu permite suprapunerea contribuțiilor'],
        answer: 2,
        why: 'Convoluția transpusă corespunde operatorului liniar transpus, nu inversei; nu restaurează automat informația pierdută.'
    }
];
let quizIndex = 0, answers = Array(questions.length).fill(null);

function renderQuiz() {
    const q = questions[quizIndex], a = answers[quizIndex];
    $('cnn-quiz-question').textContent = q.q;
    $('cnn-quiz-counter').textContent = `${quizIndex + 1} / ${questions.length}`;
    $('cnn-quiz-answers').innerHTML = q.options.map((opt, i) => `<button type="button" data-answer="${i}" class="${a === i ? 'selected' : ''} ${a !== null && i === q.answer ? 'correct-option' : ''} ${a === i && a !== q.answer ? 'wrong-option' : ''}" aria-pressed="${a === i}"><strong style="margin-right:8px">${'ABCD'[i]}.</strong> ${esc(opt)}</button>`).join('');
    const fb = $('cnn-quiz-feedback');
    fb.className = 'quiz-feedback';
    if (a !== null) {
        fb.classList.add(a === q.answer ? 'correct' : 'incorrect');
        fb.textContent = `${a === q.answer ? 'Corect.' : 'Răspuns incorect.'} ${q.why}`
    } else fb.textContent = '';
    $('cnn-quiz-progress').style.width = `${answers.filter(a => a !== null).length / questions.length * 100}%`;
    $('cnn-quiz-score').textContent = `Răspunsuri corecte: ${answers.filter((a, i) => a === questions[i].answer).length}/${questions.length}`;
    $('cnn-quiz-prev').disabled = quizIndex === 0;
    $('cnn-quiz-next').textContent = quizIndex === questions.length - 1 ? 'Vezi rezultatul ✓' : 'Următoarea →';
}

function quizInit() {
    $('cnn-quiz-answers').addEventListener('click', e => {
        const b = e.target.closest('[data-answer]');
        if (!b) return;
        answers[quizIndex] = +b.dataset.answer;
        renderQuiz()
    });
    $('cnn-quiz-prev').onclick = () => {
        quizIndex = clamp(quizIndex - 1, 0, questions.length - 1);
        renderQuiz()
    };
    $('cnn-quiz-next').onclick = () => {
        if (quizIndex === questions.length - 1) {
            const correct = answers.filter((a, i) => a === questions[i].answer).length;
            alert(`Rezultatul autoevaluării: ${correct} / ${questions.length}. Poți reveni la oricare întrebare și modifica răspunsul.`)
        } else {
            quizIndex++;
            renderQuiz()
        }
    };
    $('cnn-quiz-restart').onclick = () => {
        quizIndex = 0;
        answers = Array(questions.length).fill(null);
        renderQuiz()
    };
    renderQuiz()
}

// 16. REFERENCES (source links verified against primary papers and official documentation)
const references = [
    {
        name: 'Conv2d · documentație oficială',
        label: 'PyTorch · input NCHW, cross-correlation, groups și shape',
        url: 'https://docs.pytorch.org/docs/stable/generated/torch.nn.Conv2d.html',
        about: 'Formule ale dimensiunilor, semantica grupurilor și parametrii layerului.'
    },
    {
        name: 'ConvTranspose2d · documentație',
        label: 'PyTorch · transposed convolution',
        url: 'https://docs.pytorch.org/docs/stable/generated/torch.nn.ConvTranspose2d.html',
        about: 'Shape, output_padding, relația cu convoluția standard.'
    },
    {
        name: 'Gradient-Based Learning Applied to Document Recognition',
        label: 'LeCun, Bottou, Bengio, Haffner · 1998',
        url: 'https://proceedingsoftheieee.ieee.org/gradient-based-learning-applied-to-document-recognition/',
        about: 'LeNet și recunoașterea documentelor, rețele convoluționale timpurii.'
    },
    {
        name: 'ImageNet Classification with Deep CNNs',
        label: 'Krizhevsky, Sutskever, Hinton · NeurIPS 2012',
        url: 'https://papers.neurips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html',
        about: 'AlexNet: clasificare vizuală la scară mare, ReLU și GPU.'
    },
    {
        name: 'Very Deep Convolutional Networks',
        label: 'Simonyan, Zisserman · ICLR 2015',
        url: 'https://arxiv.org/abs/1409.1556',
        about: 'VGG și rolul filtrelor 3×3 repetate.'
    },
    {
        name: 'Going Deeper with Convolutions',
        label: 'Szegedy et al. · CVPR 2015',
        url: 'https://openaccess.thecvf.com/content_cvpr_2015/html/Szegedy_Going_Deeper_With_2015_CVPR_paper.html',
        about: 'Inception: ramuri paralele și multi-scale.'
    },
    {
        name: 'Deep Residual Learning for Image Recognition',
        label: 'He et al. · CVPR 2016',
        url: 'https://www.microsoft.com/en-us/research/publication/deep-residual-learning-for-image-recognition/',
        about: 'ResNet: blocuri reziduale și identitate.'
    },
    {
        name: 'U-Net: Convolutional Networks for Biomedical Image Segmentation',
        label: 'Ronneberger, Fischer, Brox · MICCAI 2015',
        url: 'https://arxiv.org/abs/1505.04597',
        about: 'Encoder–decoder și skip connections pentru segmentare.'
    },
    {
        name: 'MobileNets: Efficient Convolutional Neural Networks',
        label: 'Howard et al. · arXiv 2017',
        url: 'https://arxiv.org/abs/1704.04861',
        about: 'Depthwise separable convolutions pentru dispozitive mobile.'
    },
    {
        name: 'Rethinking Atrous Convolution for Semantic Image Segmentation',
        label: 'Chen et al. · arXiv 2017',
        url: 'https://arxiv.org/abs/1706.05587',
        about: 'Dilated convolutions și agregare multi-scală în segmentarea semantică.'
    },
    {
        name: 'A ConvNet for the 2020s',
        label: 'Liu et al. · CVPR 2022',
        url: 'https://openaccess.thecvf.com/content/CVPR2022/html/Liu_A_ConvNet_for_the_2020s_CVPR_2022_paper.html',
        about: 'ConvNeXt: designul CNN modernizat.'
    },
    {
        name: 'ResNet-18 · weights și transformări',
        label: 'Torchvision · documentație oficială',
        url: 'https://docs.pytorch.org/vision/stable/models/generated/torchvision.models.resnet18.html',
        about: 'Transfer learning cu metadate ale ponderilor preantrenate.'
    }
];

function refsInit() {
    $('ref-list').innerHTML = references.map(r => `<a href="${r.url}" target="_blank" rel="noopener noreferrer"><small>${esc(r.label)}</small><strong>${esc(r.name)}</strong><p>${esc(r.about)}</p></a>`).join('')
}

// 17. NAVIGATION AND UX
function uxInit() {
    const nav = [...document.querySelectorAll('#toc a')],
        links = nav.map(a => ({a, el: $(a.getAttribute('href').slice(1))}));
    const refresh = () => {
        const y = window.scrollY + 180;
        let active = links[0];
        links.forEach(l => {
            if (l.el && l.el.getBoundingClientRect().top + window.scrollY <= y) active = l
        });
        nav.forEach(a => a.classList.toggle('active', a === active.a));
        const scroll = document.documentElement.scrollTop,
            max = document.documentElement.scrollHeight - window.innerHeight,
            pct = max > 0 ? Math.round(scroll / max * 100) : 0;
        $('course-progress').textContent = `${pct}%`;
        $('progress-fill').style.width = `${pct}%`
    };
    window.addEventListener('scroll', refresh, {passive: true});
    refresh();
    const themeButton = $('theme-button');
    if (themeButton) themeButton.onclick = () => document.body.classList.toggle('dark');
    $('print-button').onclick = () => window.print();
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopLoop('conv', $('conv-play'));
            stopLoop('pool', $('pool-play'));
            stopLoop('trans', $('trans-play'))
        }
    });
}

function init() {
    renderHero();
    setInterval(() => {
        if (!document.hidden) renderHero()
    }, 1050);
    convInit();
    ['feature-scene', 'feature-kernel', 'feature-show', 'feature-scale'].forEach(id => $(id).addEventListener('change', renderFeatures));
    renderFeatures();
    document.querySelectorAll('#shape-controls input,#shape-controls select').forEach(el => el.addEventListener('input', shapeRender));
    $('shape-preset-image').onclick = () => shSet({
        h: 32,
        w: 32,
        cin: 3,
        cout: 6,
        k: 5,
        s: 1,
        p: 0,
        d: 1,
        g: 1,
        bias: 1
    });
    $('shape-preset-depthwise').onclick = () => shSet({
        h: 56,
        w: 56,
        cin: 32,
        cout: 32,
        k: 3,
        s: 1,
        p: 1,
        d: 1,
        g: 32,
        bias: 0
    });
    $('shape-preset-down').onclick = () => shSet({
        h: 64,
        w: 64,
        cin: 32,
        cout: 64,
        k: 3,
        s: 2,
        p: 1,
        d: 1,
        g: 1,
        bias: 0
    });
    shapeRender();
    ['multi-filter', 'multi-pos'].forEach(id => $(id).addEventListener('change', renderMulti));
    renderMulti();
    ['pool-mode', 'pool-data', 'pool-k', 'pool-s'].forEach(id => $(id).addEventListener('change', () => {
        stopLoop('pool', $('pool-play'));
        poolStep = 0;
        renderPool()
    }));
    $('pool-next').onclick = () => poolMove(1);
    $('pool-prev').onclick = () => poolMove(-1);
    $('pool-play').onclick = () => setLoop('pool', $('pool-play'), () => {
        const k = num('pool-k'), s = num('pool-s'), n = Math.floor((6 - k) / s + 1) ** 2;
        if (poolStep === n - 1) {
            poolStep = 0;
            stopLoop('pool', $('pool-play'));
            renderPool()
        } else poolMove(1)
    }, 760);
    renderPool();
    rfInit();
    ['eff-cin', 'eff-cout', 'eff-k', 'eff-h'].forEach(id => $(id).addEventListener('input', renderEfficiency));
    renderEfficiency();
    ['res-x', 'res-a'].forEach(id => $(id).addEventListener('input', renderResidual));
    renderResidual();
    ['trans-stride', 'trans-kernel', 'trans-input'].forEach(id => $(id).addEventListener('change', () => {
        stopLoop('trans', $('trans-play'));
        transStep = 0;
        renderTrans()
    }));
    $('trans-prev').onclick = () => transMove(-1);
    $('trans-next').onclick = () => transMove(1);
    $('trans-play').onclick = () => setLoop('trans', $('trans-play'), () => {
        if (transStep >= 8) {
            transStep = 0;
            renderTrans();
            stopLoop('trans', $('trans-play'))
        } else transMove(1)
    }, 780);
    renderTrans();
    $('unet-step').onchange = renderUNet;
    $('unet-prev').onclick = () => {
        $('unet-step').value = clamp(num('unet-step') - 1, 0, 4);
        renderUNet()
    };
    $('unet-next').onclick = () => {
        $('unet-step').value = clamp(num('unet-step') + 1, 0, 4);
        renderUNet()
    };
    renderUNet();
    architectureInit();
    $('case-tabs').addEventListener('click', e => {
        const b = e.target.closest('[data-case]');
        if (b) renderCase(b.dataset.case)
    });
    renderCase('medical');
    codeInit();
    quizInit();
    refsInit();
    uxInit();
}

window.addEventListener('DOMContentLoaded', init);
