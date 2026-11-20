/* ONIA · Atelier didactic de regresie liniară.
   Date deterministe, fără biblioteci externe și fără dependențe de rețea.
   Inițializabil după inserarea unui fragment HTML prin innerHTML. */
(function () {
    'use strict';
    const esc = s => String(s).replace(/[&<>"']/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c]));
    const fmt = (x, d = 3) => Number.isFinite(x) ? Number(x).toFixed(d).replace(/\.?0+$/, '').replace(/^-0$/, '0') : '—';
    const val = (node, role) => node.querySelector('[data-role="' + role + '"]');
    const num = (node, role) => Number(val(node, role).value);
    const set = (node, role, s) => {
        const e = val(node, role);
        if (e) e.textContent = String(s);
    };
    const svgLine = (x1, y1, x2, y2, color = '#d7e1ef', thick = 1, extra = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${thick}" ${extra}/>`;
    const svgText = (x, y, s, attr = '') => `<text x="${x}" y="${y}" ${attr}>${esc(s)}</text>`;

    function xyFrame(W, H, pad, range) {
        const [xmin, xmax, ymin, ymax] = range;
        return {
            x: x => pad.l + (x - xmin) / (xmax - xmin) * (W - pad.l - pad.r),
            y: y => H - pad.b - (y - ymin) / (ymax - ymin) * (H - pad.t - pad.b)
        };
    }

    function plotFrame(W, H, frame, xTicks, yTicks, opts = {}) {
        let s = '';
        for (const x of xTicks) {
            const px = frame.x(x);
            s += svgLine(px, 24, px, H - 35, '#e6edf5') + svgText(px, H - 15, fmt(x, 1), 'text-anchor="middle"');
        }
        for (const y of yTicks) {
            const py = frame.y(y);
            s += svgLine(48, py, W - 20, py, '#e6edf5') + svgText(41, py + 4, fmt(y, 1), 'text-anchor="end"');
        }
        s += svgText(49, H - 3, opts.xlabel || 'x', 'text-anchor="start"') + svgText(15, 18, opts.ylabel || 'y');
        return s;
    }

    function polyPath(fn, fx, fy, x0, x1, N = 160) {
        const a = [];
        for (let i = 0; i <= N; i++) {
            const x = x0 + (x1 - x0) * i / N, y = fn(x);
            if (!Number.isFinite(y)) continue;
            a.push((a.length ? 'L' : 'M') + fmt(fx(x), 2) + ' ' + fmt(fy(y), 2));
        }
        return a.join(' ');
    }

    function pressed(node, selected, roles) {
        for (const r of roles) {
            const b = val(node, r);
            if (b) b.setAttribute('aria-pressed', String(selected === r));
        }
    }

    function lineWidget(node) {
        const data = [[1, 2], [2, 3], [3, 5]];
        const render = () => {
            const w = num(node, 'w'), b = num(node, 'b'), xv = num(node, 'x');
            set(node, 'wval', fmt(w, 2));
            set(node, 'bval', fmt(b, 2));
            set(node, 'xval', fmt(xv, 1));
            const p = w * xv + b, errors = data.map(([x, y]) => w * x + b - y);
            set(node, 'prediction', fmt(p, 2));
            set(node, 'mae', fmt(errors.reduce((s, e) => s + Math.abs(e), 0) / 3, 3));
            set(node, 'mse', fmt(errors.reduce((s, e) => s + e * e, 0) / 3, 3));
            set(node, 'formula', `ŷ = (${fmt(w, 2)}) · (${fmt(xv, 1)}) + (${fmt(b, 2)}) = ${fmt(p, 2)}`);
            val(node, 'rows').innerHTML = data.map(([x, y], i) => `<tr><td>${x}</td><td>${y}</td><td>${fmt(w * x + b, 2)}</td><td>${fmt(errors[i], 2)}</td></tr>`).join('');
            const yValues = [-1, 8, ...data.map(r => r[1]), b, w * 5 + b, p], ymin = Math.min(-2, ...yValues) - 1,
                ymax = Math.max(7, ...yValues) + 1;
            const W = 620, H = 350, f = xyFrame(W, H, {l: 48, r: 22, t: 24, b: 43}, [0, 5, ymin, ymax]);
            let s = '<defs><clipPath id="lr-line-clip"><rect x="48" y="24" width="550" height="283"/></clipPath></defs>';
            s += plotFrame(W, H, f, [0, 1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 10].filter(y => y >= ymin && y <= ymax), {
                xlabel: 'ore',
                ylabel: 'scor'
            });
            s += '<g clip-path="url(#lr-line-clip)">';
            s += svgLine(f.x(0), f.y(b), f.x(5), f.y(5 * w + b), '#119582', 3.5);
            for (const [x, y] of data) {
                const yp = w * x + b;
                s += svgLine(f.x(x), f.y(y), f.x(x), f.y(yp), '#db6467', 2.6, 'stroke-dasharray="5 5"');
                s += `<circle cx="${fmt(f.x(x), 1)}" cy="${fmt(f.y(y), 1)}" r="7" fill="#2668ba" stroke="white" stroke-width="2.5"/>` + svgText(f.x(x) + 10, f.y(y) - 9, `(${x}, ${y})`);
            }
            s += svgLine(f.x(xv), f.y(ymin), f.x(xv), f.y(ymax), '#cc9226', 1.5, 'stroke-dasharray="3 5"');
            s += `<circle cx="${f.x(xv)}" cy="${f.y(p)}" r="7" fill="#d49a29" stroke="#fff" stroke-width="2"/>`;
            s += '</g>';
            val(node, 'plot').innerHTML = s;
        };
        for (const key of ['w', 'b', 'x']) val(node, key).addEventListener('input', render);
        val(node, 'optimal').addEventListener('click', () => {
            val(node, 'w').value = '1.5';
            val(node, 'b').value = (1 / 3).toFixed(3);
            render();
        });
        val(node, 'reset').addEventListener('click', () => {
            val(node, 'w').value = '1';
            val(node, 'b').value = '1';
            val(node, 'x').value = '4';
            render();
        });
        render();
    }

    function metricsWidget(node) {
        const truth = [2, 4, 6, 8], base = [3, 2, 7, 8];
        let variant = 'normal';
        const render = () => {
            pressed(node, variant, ['normal', 'outlier']);
            const predicted = variant === 'outlier' ? [3, 2, 7, 14] : base;
            const errors = predicted.map((p, i) => p - truth[i]), sabs = errors.reduce((s, e) => s + Math.abs(e), 0),
                ssq = errors.reduce((s, e) => s + e * e, 0), mean = truth.reduce((s, x) => s + x, 0) / truth.length;
            const sst = truth.reduce((s, y) => s + (y - mean) ** 2, 0);
            val(node, 'rows').innerHTML = truth.map((y, i) => `<tr${variant === 'outlier' && i === 3 ? ' class="lr-selected"' : ''}><td>${i + 1}</td><td>${y}</td><td>${predicted[i]}</td><td>${fmt(errors[i])}</td><td>${fmt(Math.abs(errors[i]))}</td><td>${fmt(errors[i] ** 2)}</td></tr>`).join('');
            set(node, 'sumabs', fmt(sabs));
            set(node, 'sumsq', fmt(ssq));
            set(node, 'mae', fmt(sabs / 4));
            set(node, 'mse', fmt(ssq / 4));
            set(node, 'rmse', fmt(Math.sqrt(ssq / 4), 3));
            set(node, 'r2', `ȳ = ${fmt(mean)}; SST = Σ(y − ȳ)² = ${fmt(sst)}; SSE = ${fmt(ssq)}; R² = 1 − ${fmt(ssq)} / ${fmt(sst)} = ${fmt(1 - ssq / sst, 3)}`);
            val(node, 'meaning').innerHTML = variant === 'normal' ? '<strong>Interpretare:</strong> erorile sunt mici. MAE = 1 exprimă eroarea medie în unitățile scorului; MSE = 1,5 penalizează mai mult eroarea de 2; R² = 0,7 înseamnă că SSE este cu 70% mai mic decât cel al predicției constante prin medie.' : '<strong>Observă impactul outlierului:</strong> o singură eroare de +6 face MSE să urce la 10,5, dar MAE crește la 2,5. R² devine negativ: modelul este mai slab, în sensul SSE, decât prezicerea permanentă a mediei. Nu interpreta R² drept procent de predicții corecte.';
        };
        for (const k of ['normal', 'outlier']) val(node, k).onclick = () => {
            variant = k;
            render();
        };
        render();
    }

    function matrixWidget(node) {
        const M = [[1, 2, 4], [1, 3, 1]], th = [5, 3, 2];
        let row = 0;
        const render = () => {
            pressed(node, `row${row}`, ['row0', 'row1']);
            const W = 600, H = 235;
            let s = svgText(24, 26, 'X (2 × 3)') + svgText(279, 26, 'θ (3,)') + svgText(468, 26, 'ŷ (2,)');
            for (let i = 0; i < 2; i++) {
                s += `<rect x="18" y="${63 + i * 60}" width="227" height="51" rx="8" fill="${row === i ? '#dcecff' : '#f2f6fb'}" stroke="${row === i ? '#1e69b6' : '#d9e2ed'}" stroke-width="${row === i ? 2 : 1}"/>`;
                for (let j = 0; j < 3; j++) {
                    s += svgText(62 + j * 72, 94 + i * 60, M[i][j], 'text-anchor="middle" style="font-size:19px;fill:#163e75;font-weight:750"');
                }
            }
            s += svgText(254, 118, '×', 'text-anchor="middle" style="font-size:29px;fill:#305f91"');
            for (let j = 0; j < 3; j++) {
                s += `<rect x="282" y="${44 + j * 57}" width="60" height="46" rx="7" fill="#e8f6ee" stroke="#b8dccc"/>` + svgText(311, 74 + j * 57, th[j], 'text-anchor="middle" style="font-size:20px;fill:#18614c;font-weight:800"');
            }
            s += svgText(387, 114, '=', 'text-anchor="middle" style="font-size:28px;fill:#305f91"');
            for (let i = 0; i < 2; i++) s += `<rect x="450" y="${65 + i * 62}" width="93" height="50" rx="8" fill="${row === i ? '#d9f5e9' : '#f2f6fb'}" stroke="${row === i ? '#149375' : '#d9e2ed'}"/>` + svgText(498, 96 + i * 62, fmt(M[i].reduce((a, v, j) => a + v * th[j], 0), 0), 'text-anchor="middle" style="font-size:20px;font-weight:800;fill:#1b5b72"');
            val(node, 'plot').innerHTML = s;
            const r = M[row];
            set(node, 'calc', `${r[0]} × ${th[0]} + ${r[1]} × ${th[1]} + ${r[2]} × ${th[2]} = ${r.map((v, i) => v * th[i]).join(' + ')} = ${r.reduce((a, v, i) => a + v * th[i], 0)}`);
        };
        for (let i = 0; i < 2; i++) val(node, 'row' + i).addEventListener('click', () => {
            row = i;
            render();
        });
        render();
    }

    function olsWidget(node) {
        let step = 0;
        const x = [1, 2, 3], y = [2, 3, 5], xm = 2, ym = 10 / 3;
        const render = () => {
            const prompts = [['Datele cunoscute', 'Punctele: (1, 2), (2, 3), (3, 5). Vrem o dreaptă care minimizează suma reziduurilor pătratice.'], ['Mediile', `x̄ = (1 + 2 + 3) / 3 = ${fmt(xm)}; ȳ = (2 + 3 + 5) / 3 = 10/3 ≈ ${fmt(ym)}`], ['Numărător și numitor', 'Sxy = (−1)(−4/3) + 0 + (1)(5/3) = 3; Sxx = (−1)² + 0² + 1² = 2'], ['Coeficienții', 'w = Sxy / Sxx = 3/2 = 1,5; b = ȳ − wx̄ = 10/3 − 3 = 1/3']];
            const [title, body] = prompts[step];
            set(node, 'stepcalc', `Pasul ${step + 1}/4 · ${title}: ${body}`);
            set(node, 'why', step === 3 ? 'Rezultă ŷ = 1,5x + 1/3. Folosește apoi widgetul din secțiunea 2 pentru a compara vizual această dreaptă cu una aleasă manual.' : 'Apasă „Pasul următor” pentru a continua demonstrația.');
            val(node, 'next').disabled = step === 3;
            val(node, 'next').textContent = step === 3 ? 'Demonstrație completă' : 'Pasul următor';
            const f = xyFrame(550, 290, {l: 46, r: 23, t: 24, b: 37}, [0, 4, 0, 7]);
            let s = plotFrame(550, 290, f, [0, 1, 2, 3, 4], [0, 2, 4, 6]);
            if (step === 3) s += svgLine(f.x(0), f.y(1 / 3), f.x(4), f.y(1.5 * 4 + 1 / 3), '#129786', 3.5);
            x.forEach((v, i) => {
                s += `<circle cx="${f.x(v)}" cy="${f.y(y[i])}" r="6.5" fill="#2468bb" stroke="white" stroke-width="2"/>` + svgText(f.x(v) + 9, f.y(y[i]) - 8, `(${v},${y[i]})`);
            });
            if (step >= 1) s += `<circle cx="${f.x(xm)}" cy="${f.y(ym)}" r="6" fill="#d5a32d" stroke="white" stroke-width="2"/>` + svgText(f.x(xm) + 9, f.y(ym) - 8, '(x̄, ȳ)');
            val(node, 'plot').innerHTML = s;
            val(node, 'rows').innerHTML = x.map((v, i) => `<tr><td>${v}</td><td>${y[i]}</td><td>${step >= 1 ? fmt(v - xm, 3) : '?'}</td><td>${step >= 1 ? fmt(y[i] - ym, 3) : '?'}</td><td>${step >= 2 ? fmt((v - xm) * (y[i] - ym), 3) : '?'}</td><td>${step >= 2 ? fmt((v - xm) ** 2, 3) : '?'}</td></tr>`).join('') + (step >= 2 ? `<tr class="lr-sumrow"><td colspan="4">Total</td><td>3</td><td>2</td></tr>` : '');
        };
        val(node, 'next').onclick = () => {
            step = Math.min(3, step + 1);
            render();
        };
        val(node, 'reset').onclick = () => {
            step = 0;
            render();
        };
        render();
    }

    function gradientWidget(node) {
        const xs = [1, 2, 3], ys = [2, 3, 5];
        let w = 0, b = 0, epoch = 0, history = [];
        const mse = () => xs.reduce((s, x, i) => s + (w * x + b - ys[i]) ** 2, 0) / 3;
        const reset = () => {
            w = 0;
            b = 0;
            epoch = 0;
            history = [mse()];
            render();
        };
        const grad = () => {
            let gw = 0, gb = 0;
            xs.forEach((x, i) => {
                const e = w * x + b - ys[i];
                gw += 2 * e * x / 3;
                gb += 2 * e / 3;
            });
            return [gw, gb];
        };
        const step = () => {
            if (epoch >= 200 || Math.abs(w) > 1e10 || Math.abs(b) > 1e10) return;
            const [gw, gb] = grad(), eta = num(node, 'eta');
            w -= eta * gw;
            b -= eta * gb;
            epoch++;
            history.push(mse());
        };
        const render = () => {
            const eta = num(node, 'eta'), [gw, gb] = grad(), cost = mse();
            set(node, 'etaval', fmt(eta, 3));
            set(node, 'w', fmt(w, 3));
            set(node, 'b', fmt(b, 3));
            set(node, 'epoch', epoch);
            set(node, 'gradcalc', `∂MSE/∂w = ${fmt(gw, 4)};  ∂MSE/∂b = ${fmt(gb, 4)}.  MSE = ${fmt(cost, 4)}.  La pasul următor: w ← w − η·∂MSE/∂w, b ← b − η·∂MSE/∂b.`);
            val(node, 'hint').innerHTML = cost > 1e5 ? '<strong>Instabilitate:</strong> eroarea explodează. η este prea mare pentru scala datelor. Redu rata și apasă „Reia”.' : eta > .19 ? '<strong>Rată mare:</strong> pașii pot depăși minimul și pot oscila. Compară cu η = 0,05.' : epoch === 0 ? '<strong>Început:</strong> toate predicțiile sunt 0, MSE = 12,667. Primul gradient este (−46/3, −20/3).' : `<strong>După ${epoch} actualizări:</strong> dreapta s-a schimbat pe baza gradientului. Urmărește simultan traiectoria dreptei și istoricul erorii.`;
            const W = 600, H = 330, f = xyFrame(W, H, {l: 46, r: 20, t: 23, b: 40}, [0, 4, -1, 9]);
            let s = '<defs><clipPath id="lr-gd-clip"><rect x="46" y="23" width="534" height="267"/></clipPath></defs>' + plotFrame(W, H, f, [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], {ylabel: 'y'});
            s += '<g clip-path="url(#lr-gd-clip)">' + svgLine(f.x(0), f.y(b), f.x(4), f.y(4 * w + b), '#129786', 3.5);
            xs.forEach((x, i) => {
                s += svgLine(f.x(x), f.y(ys[i]), f.x(x), f.y(w * x + b), '#de626a', 2, 'stroke-dasharray="4 5"');
                s += `<circle cx="${f.x(x)}" cy="${f.y(ys[i])}" r="7" fill="#276bc0" stroke="white" stroke-width="2"/>`;
            });
            s += '</g>';
            val(node, 'plot').innerHTML = s;
            // Compressed linear view for ordinary values, logarithmic for strongly diverging losses.
            const maxValue = Math.max(1, ...history.filter(Number.isFinite)), log = maxValue > 100;
            const arr = history.map(v => log ? Math.log10(1 + v) : v), mx = Math.max(1, ...arr),
                cf = xyFrame(600, 170, {
                    l: 47,
                    r: 20,
                    t: 17,
                    b: 31
                }, [0, Math.max(history.length - 1, 1), 0, mx * 1.07]);
            let h = svgLine(46, 139, 578, 139, '#b4c5d7') + svgText(12, 18, log ? 'log₁₀(1 + MSE)' : 'MSE') + svgText(567, 161, 'iterații', 'text-anchor="end"');
            h += `<path d="${arr.map((v, i) => (i ? 'L' : 'M') + fmt(cf.x(i), 2) + ' ' + fmt(cf.y(v), 2)).join(' ')}" fill="none" stroke="#286ab7" stroke-width="3"/>`;
            const i = arr.length - 1;
            h += `<circle cx="${cf.x(i)}" cy="${cf.y(arr[i])}" r="4" fill="#d6992b"/>`;
            set(node, 'history', h);
            val(node, 'history').innerHTML = h;
        };
        val(node, 'step').onclick = () => {
            step();
            render();
        };
        val(node, 'steps10').onclick = () => {
            for (let i = 0; i < 10; i++) step();
            render();
        };
        val(node, 'reset').onclick = reset;
        val(node, 'eta').oninput = () => {
            reset();
        };
        reset();
    }

    function batchWidget(node) {
        const x = [1, 2, 3, 4, 5, 6], y = [2, 3, 5, 6, 7, 9];
        let mode = 'batch', cycle = 0;
        const render = () => {
            pressed(node, mode, ['batch', 'mini', 'sgd']);
            let indexes = mode === 'batch' ? [0, 1, 2, 3, 4, 5] : mode === 'mini' ? [2 * cycle % 6, (2 * cycle + 1) % 6] : [cycle % 6];
            val(node, 'samples').innerHTML = x.map((v, i) => `<div class="lr-sample ${indexes.includes(i) ? 'active' : ''}">${v}<small>obs. ${i + 1}</small></div>`).join('');
            let gw = 0, gb = 0;
            for (const i of indexes) {
                const e = .8 * x[i] + .5 - y[i];
                gw += 2 * e * x[i] / indexes.length;
                gb += 2 * e / indexes.length;
            }
            set(node, 'calc', `Pentru w = 0,8 și b = 0,5: gradientul mediu pe ${indexes.length} exemple este (∂MSE/∂w, ∂MSE/∂b) = (${fmt(gw, 3)}, ${fmt(gb, 3)}).`);
            set(node, 'meaning', mode === 'batch' ? 'Batch folosește toate observațiile la o actualizare. Gradientul este stabil pentru datele curente, dar calculul costă mai mult pe seturi mari.' : mode === 'mini' ? 'Mini-batch folosește un grup mic. Este un compromis între costul calculului, posibilitatea vectorizării și variația gradientului.' : 'SGD folosește un singur exemplu. Pasul este ieftin, dar direcția poate varia mult de la o observație la alta.');
        };
        for (const k of ['batch', 'mini', 'sgd']) val(node, k).onclick = () => {
            mode = k;
            cycle = 0;
            render();
        };
        val(node, 'next').onclick = () => {
            cycle++;
            render();
        };
        render();
    }

    function linearSolve(mat, vec) {
        const n = vec.length, A = mat.map((r, i) => [...r, vec[i]]);
        for (let j = 0; j < n; j++) {
            let p = j;
            for (let i = j + 1; i < n; i++) if (Math.abs(A[i][j]) > Math.abs(A[p][j])) p = i;
            [A[j], A[p]] = [A[p], A[j]];
            if (Math.abs(A[j][j]) < 1e-13) A[j][j] = 1e-13;
            const div = A[j][j];
            for (let k = j; k <= n; k++) A[j][k] /= div;
            for (let i = 0; i < n; i++) if (i !== j) {
                const a = A[i][j];
                for (let k = j; k <= n; k++) A[i][k] -= a * A[j][k];
            }
        }
        return A.map(row => row[n]);
    }

    function polynomialWidget(node) {
        const xt = Array.from({length: 13}, (_, i) => -1 + 2 * i / 12),
            noise = [.03, -.10, .07, .14, -.11, .06, .16, -.13, .1, -.07, .12, -.12, .02];
        const xv = Array.from({length: 12}, (_, i) => -.95 + 1.9 * i / 11),
            nov = [.10, -.07, .09, -.08, .07, .03, -.07, .13, -.06, .03, -.09, .05];
        const truth = x => 1.4 + .4 * x + 1.5 * x * x;
        const yt = xt.map((x, i) => truth(x) + noise[i]), yv = xv.map((x, i) => truth(x) + nov[i]);
        const fit = (deg, lam) => {
            const V = xt.map(x => Array.from({length: deg + 1}, (_, i) => x ** i));
            const A = Array.from({length: deg + 1}, (_, i) => Array.from({length: deg + 1}, (_, j) => V.reduce((s, r) => s + r[i] * r[j], 0) + (i === j ? (i === 0 ? 1e-8 : lam + 1e-8) : 0)));
            const B = Array.from({length: deg + 1}, (_, i) => V.reduce((s, r, j) => s + r[i] * yt[j], 0));
            return linearSolve(A, B);
        };
        const pred = (c, x) => c.reduce((s, a, i) => s + a * x ** i, 0);
        const render = () => {
            const deg = num(node, 'degree'), lam = num(node, 'lambda'), c = fit(deg, lam);
            const train = yt.reduce((s, y, i) => s + (pred(c, xt[i]) - y) ** 2, 0) / yt.length,
                valM = yv.reduce((s, y, i) => s + (pred(c, xv[i]) - y) ** 2, 0) / yv.length;
            set(node, 'degreeval', deg);
            set(node, 'lambdaval', fmt(lam, 3));
            set(node, 'train', fmt(train, 4));
            set(node, 'val', fmt(valM, 4));
            set(node, 'count', deg + 1);
            val(node, 'hint').innerHTML = deg === 1 ? '<strong>Underfitting:</strong> o singură dreaptă nu poate urmări relația curbată din date. MSE de train și validare rămân comparativ mari.' : deg >= 8 && lam < .03 ? '<strong>Risc de overfitting:</strong> gradul mare permite oscilații pentru a urmări zgomotul. Compară MSE de train cu cel de validare și încearcă λ mai mare.' : lam > .18 ? '<strong>Regularizare puternică:</strong> coeficienții polinomiali sunt reduși. Dacă penalizarea este prea mare, și modelul de grad mare poate deveni prea rigid.' : '<strong>Generalizare:</strong> nu este suficient un MSE mic pe train. Compară și MSE de validare, apoi verifică un test separat la final.';
            const f = xyFrame(600, 315, {l: 48, r: 20, t: 20, b: 40}, [-1.12, 1.12, .3, 3.8]);
            let s = '<defs><clipPath id="lr-poly-clip"><rect x="48" y="20" width="532" height="255"/></clipPath></defs>' + plotFrame(600, 315, f, [-1, -.5, 0, .5, 1], [.5, 1, 1.5, 2, 2.5, 3, 3.5]);
            s += '<g clip-path="url(#lr-poly-clip)"><path d="' + polyPath(x => pred(c, x), f.x, f.y, -1.1, 1.1) + '" stroke="#139783" fill="none" stroke-width="3"/>';
            xt.forEach((x, i) => {
                s += `<circle cx="${f.x(x)}" cy="${f.y(yt[i])}" r="5.8" fill="#276bb9" stroke="white" stroke-width="1.8"/>`;
            });
            xv.forEach((x, i) => {
                const xx = f.x(x), yy = f.y(yv[i]);
                s += svgLine(xx - 5, yy - 5, xx + 5, yy + 5, '#d69a2f', 2.1) + svgLine(xx + 5, yy - 5, xx - 5, yy + 5, '#d69a2f', 2.1);
            });
            s += '</g>';
            val(node, 'plot').innerHTML = s;
        };
        for (const k of ['degree', 'lambda']) val(node, k).addEventListener('input', render);
        val(node, 'simple').onclick = () => {
            val(node, 'degree').value = '1';
            val(node, 'lambda').value = '0';
            render();
        };
        val(node, 'complex').onclick = () => {
            val(node, 'degree').value = '10';
            val(node, 'lambda').value = '0';
            render();
        };
        val(node, 'reset').onclick = () => {
            val(node, 'degree').value = '2';
            val(node, 'lambda').value = '0.01';
            render();
        };
        render();
    }

    function regularWidget(node) {
        const render = () => {
            const lam = num(node, 'lambda'), ols = 3, ridge = 30 / (10 + lam), lasso = Math.max(0, (30 - lam / 2) / 10);
            set(node, 'lambda-val', lam);
            for (const [k, v] of [['ols', ols], ['ridge', ridge], ['lasso', lasso]]) {
                set(node, k, fmt(v, 3));
                val(node, 'bar-' + k).style.width = (100 * v / 3) + '%';
            }
            set(node, 'calc', `Ridge: w = 30 / (10 + ${lam}) = ${fmt(ridge, 3)}; Lasso: w = max(0, (30 − ${lam}/2) / 10) = ${fmt(lasso, 3)}.`);
        };
        val(node, 'lambda').addEventListener('input', render);
        render();
    }

    function diagnosticWidget(node) {
        const patterns = {
            good: {
                values: [.18, -.2, .04, .15, -.16, .08, -.06, .12, -.21, .13, -.11, .04, .15, -.09, .04, -.15],
                ex: 'Nu apare un tipar clar în reziduuri. Acesta este un indiciu favorabil, dar nu dovedește singur că modelul sau presupunerile sunt corecte.'
            },
            curve: {
                values: [.7, .55, .25, .1, -.2, -.34, -.37, -.25, -.29, -.31, -.15, .03, .17, .35, .58, .85],
                ex: 'Reziduurile formează un U: modelul subestimează în unele regiuni și supraestimează în altele. Merită verificată o relație neliniară sau o transformare de caracteristici.'
            },
            fan: {
                values: [.03, -.04, .1, -.09, .14, -.22, .28, -.4, .36, -.43, .5, -.62, .65, -.73, .77, -.88],
                ex: 'Dispersia reziduurilor crește pe măsură ce predictorul crește. Vorbim despre heteroscedasticitate: varianța erorilor nu pare constantă.'
            },
            outlier: {
                values: [.03, -.08, .05, .01, .12, -.04, .02, .09, -.07, .03, 1.7, -.08, .07, -.02, .11, -.06],
                ex: 'Un punct are un reziduu mult mai mare decât restul. Investighează contextul și integritatea observației înainte să o elimini. Nu orice outlier are automat influență mare asupra coeficienților.'
            }
        };
        const render = () => {
            const key = val(node, 'scenario').value, data = patterns[key],
                f = xyFrame(590, 265, {l: 48, r: 20, t: 24, b: 39}, [0, 17, -2, 2]);
            let s = plotFrame(590, 265, f, [0, 4, 8, 12, 16], [-2, -1, 0, 1, 2], {
                xlabel: 'ordine / x',
                ylabel: 'reziduu'
            });
            s += svgLine(48, f.y(0), 570, f.y(0), '#d69c36', 2, 'stroke-dasharray="5 5"');
            data.values.forEach((y, i) => s += `<circle cx="${f.x(i + 1)}" cy="${f.y(y)}" r="6" fill="${Math.abs(y) > 1 ? '#d16054' : '#266dbc'}" stroke="white" stroke-width="1.5"/>`);
            val(node, 'plot').innerHTML = s;
            set(node, 'hint', data.ex);
        };
        val(node, 'scenario').onchange = render;
        render();
    }

    function quizWidget(node) {
        const questions = [
            {
                q: 'Ce reprezintă ŷ = 2x + 1 pentru x = 3?',
                o: ['Valoarea reală este obligatoriu 7', 'Predicția modelului este 7', 'Eroarea pătratică este 7', 'Numărul de observații este 7'],
                a: 1,
                e: 'Înlocuim x cu 3: 2·3 + 1 = 7. Este o predicție; valoarea reală poate fi alta.'
            },
            {
                q: 'Ce se întâmplă dacă mărim interceptul b cu 2?',
                o: ['Dreapta se rotește', 'Toate predicțiile cresc cu 2', 'Toate valorile x cresc cu 2', 'Panta se dublează'],
                a: 1,
                e: 'Interceptul deplasează dreapta vertical: ŷnou = wx + (b+2) = ŷvechi + 2.'
            },
            {
                q: 'Pentru erorile [1, −2, 1], cât este MSE?',
                o: ['0', '4/3', '2', '4'],
                a: 2,
                e: 'Pătratele sunt [1, 4, 1]; media este (1+4+1)/3 = 2.'
            },
            {
                q: 'La un model cu pantă w = 1,5, cum se interpretează coeficientul?',
                o: ['Orice creștere x determină cauzal creșterea y', 'La creșterea x cu 1, predicția crește cu 1,5', 'Modelul are 1,5 observații', 'MSE este 1,5'],
                a: 1,
                e: 'Panta este schimbarea predicției la +1 unitate în x. Este asociere predictivă, nu dovadă de cauzalitate.'
            },
            {
                q: 'De ce folosim direcția opusă gradientului?',
                o: ['Gradientul indică scăderea maximă', 'Gradientul indică creșterea locală maximă', 'Pentru că MSE poate fi negativ', 'Pentru a mări interceptul'],
                a: 1,
                e: 'Gradientul indică direcția de creștere locală; −gradient este direcția de coborâre.'
            },
            {
                q: 'Ce se poate întâmpla dacă rata de învățare η este prea mare?',
                o: ['Convergența este garantată', 'Nu se mai calculează derivate', 'Optimizarea poate oscila sau diverge', 'Obținem întotdeauna OLS într-un singur pas'],
                a: 2,
                e: 'Pașii mari pot trece peste minim; pentru un η suficient de mare, eroarea poate crește.'
            },
            {
                q: 'Ce set de date este potrivit pentru a alege gradul polinomului?',
                o: ['Testul final', 'Setul de validare', 'Orice set, inclusiv datele viitoare', 'Exclusiv setul de train, fără comparații'],
                a: 1,
                e: 'Gradul este hiperparametru. Îl alegem pe validare/cross-validation; testul se păstrează pentru evaluarea finală.'
            },
            {
                q: 'Ce afirmație despre Ridge și Lasso este corectă?',
                o: ['Lasso poate anula coeficienți; Ridge de obicei îi reduce', 'Ambele penalizează obligatoriu interceptul', 'Ridge mărește toți coeficienții', 'Lasso folosește numai termenul L2'],
                a: 0,
                e: 'L1 permite soluții exact zero; L2 produce de regulă reducere continuă. Interceptul este de obicei exclus din penalizare.'
            }
        ];
        let answers = Array(questions.length).fill(-1);
        const render = () => {
            val(node, 'questions').innerHTML = questions.map((it, i) => `<article class="lr-quiz-item"><h3>${i + 1}. ${esc(it.q)}</h3><div class="lr-quiz-options">${it.o.map((o, j) => `<button class="lr-quiz-option ${answers[i] === j ? (j === it.a ? 'correct' : 'incorrect') : ''}" type="button" data-quiz="${i}" data-choice="${j}" ${answers[i] === j ? 'aria-pressed="true"' : ''}>${String.fromCharCode(65 + j)}. ${esc(o)}</button>`).join('')}</div><div class="lr-quiz-feedback" aria-live="polite">${answers[i] < 0 ? 'Alege o variantă pentru a vedea explicația.' : `<strong>${answers[i] === it.a ? 'Corect!' : 'Mai încearcă.'}</strong> ${esc(it.e)}`}</div></article>`).join('');
            const correct = answers.reduce((s, a, i) => s + (a === questions[i].a), 0),
                answered = answers.filter(x => x >= 0).length;
            set(node, 'score', `${correct} / ${questions.length} corecte · ${answered} răspunse`);
        };
        node.addEventListener('click', e => {
            const button = e.target.closest('[data-quiz][data-choice]');
            if (!button || !node.contains(button)) return;
            answers[Number(button.dataset.quiz)] = Number(button.dataset.choice);
            render();
        });
        val(node, 'reset').onclick = () => {
            answers.fill(-1);
            render();
        };
        render();
    }

    const implementations = {
        line: lineWidget,
        metrics: metricsWidget,
        matrix: matrixWidget,
        ols: olsWidget,
        gradient: gradientWidget,
        batches: batchWidget,
        poly: polynomialWidget,
        regularization: regularWidget,
        diagnostic: diagnosticWidget,
        quiz: quizWidget
    };
    window.ONIA_LR_INIT = function (root) {
        root = root || document.querySelector('.onia-linear-lesson');
        if (!root || root.dataset.lrInitialized === '1') return;
        root.dataset.lrInitialized = '1';
        for (const widget of root.querySelectorAll('[data-lr-widget]')) {
            const name = widget.dataset.lrWidget;
            try {
                implementations[name]?.(widget);
            } catch (e) {
                console.error('ONIA · widget regresie liniară:', name, e);
            }
        }
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => window.ONIA_LR_INIT()); else window.ONIA_LR_INIT();
})();
