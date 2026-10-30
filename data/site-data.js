/* ONIA · programă și conținut */
window.OLYMPIAD_DATA = {
  "siteName": "ONIA",
  "siteSubtitle": "Resurse educaționale",
  "eyebrow": "ROMÂNIA · OLIMPIADA DE INTELIGENȚĂ ARTIFICIALĂ",
  "heroTitle": "ONIA",
  "heroSubtitle": "Resurse educaționale",
  "heroDescription": "Materiale de pregătire pentru Olimpiada de Inteligență Artificială: explicații, exemple Python, exerciții, notebookuri, grafice și laboratoare interactive, organizate pe capitole și secțiuni. Materialele sunt derivate din suporturi de curs ale mai multor discipline predate la Facultatea de Automatică și Calculatoare, POLITEHNICA București. În pregătirea practică sunt incluse și exemple din laboratoarele facultății.",
  "siteNote": "Platformă independentă de materiale educaționale; nu reprezintă site-ul oficial al olimpiadei.",
  "partners": {
    "faculty": "Facultatea de Automatică și Calculatoare",
    "university": "Universitatea Națională de Știință și Tehnologie POLITEHNICA București",
    "hria": "Hubul Român de Inteligență Artificială (HRIA)"
  },
  "chapters": [
    {
      "id": "fundamente-programare",
      "number": "01",
      "icon": "brain",
      "color": "blue",
      "title": "Fundamente de programare",
      "shortTitle": "Fundamente de programare",
      "description": "Python, biblioteci pentru date și instrumente de programare utilizate în inteligența artificială.",
      "label": "Programă generală + națională",
      "sections": [
        {
          "id": "sectiunea-1-1",
          "number": "1.1",
          "title": "Bazele limbajului Python",
          "stage": "general",
          "summary": "Ghid aplicat pentru sintaxa Python, expresii, intrare/ieșire, subprograme, colecții și fișiere; cu exemple rezolvate, simulări și exerciții.",
          "objectives": [
            "Să utilizezi corect tipurile de date, operatorii și instrucțiunile de control din Python.",
            "Să definești și să apelezi funcții folosind argumente poziționale, nominale și valori implicite.",
            "Să prelucrezi liste, tupluri, dicționare, mulțimi și șiruri de caractere.",
            "Să citești și să scrii date din fișiere text, CSV și JSON."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Bazele limbajului Python",
              "src": "content/python-bazele.html",
              "standalone": "content/python-bazele-standalone.html"
            },
            {
              "type": "html",
              "title": "Notebook de curs — Introducere în Python",
              "src": "content/Intro-Python-2.html",
              "height": 820,
              "download": "notebooks/Intro-Python-2.ipynb",
              "caption": "Notebookul original furnizat pentru lecție, redat integral în HTML (262 de celule). Poți descărca sursa .ipynb pentru a o deschide și executa în JupyterLab."
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Operatori, slicing și afișare",
              "src": "interactive/python-explorer.html",
              "height": 630,
              "caption": "Simulator JavaScript pentru explorarea comportamentelor explicate. Nu execută cod Python arbitrar."
            }
          ],
          "exercises": [
            {
              "title": "Precedența operatorilor",
              "level": "Ușor",
              "type": "mcq",
              "description": "Ce valoare are expresia următoare?",
              "options": [
                "64",
                "512",
                "256",
                "36"
              ],
              "answerIndex": 1,
              "explanation": "Ridicarea la putere este asociativă la dreapta: 2 ** (3 ** 2) = 512.",
              "statementCode": "print(2 ** 3 ** 2)\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"mi\">2</span> <span class=\"o\">**</span> <span class=\"mi\">3</span> <span class=\"o\">**</span> <span class=\"mi\">2</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Restul și câtul pentru negative",
              "level": "Mediu",
              "type": "mcq",
              "description": "Ce se afișează la executarea codului?",
              "options": [
                "-2 -1",
                "-3 2",
                "-2 2",
                "-3 -1"
              ],
              "answerIndex": 1,
              "explanation": "Împărțirea cu // aplică floor(-7/3)=-3, iar restul este -7 - (-3)*3 = 2.",
              "statementCode": "print(-7 // 3, -7 % 3)\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mi\">7</span> <span class=\"o\">//</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"o\">-</span><span class=\"mi\">7</span> <span class=\"o\">%</span> <span class=\"mi\">3</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Afișarea prin sep și end",
              "level": "Ușor",
              "type": "mcq",
              "description": "Ce se afișează la executarea celor două instrucțiuni?",
              "options": [
                "AI RO! ONIA",
                "AI-RO!ONIA",
                "AI-RO!\nONIA",
                "AIROONIA"
              ],
              "answerIndex": 1,
              "explanation": "sep introduce -, iar end introduce ! fără linie nouă.",
              "statementCode": "print(\"AI\", \"RO\", sep=\"-\", end=\"!\")\nprint(\"ONIA\")\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;AI&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;RO&quot;</span><span class=\"p\">,</span> <span class=\"n\">sep</span><span class=\"o\">=</span><span class=\"s2\">&quot;-&quot;</span><span class=\"p\">,</span> <span class=\"n\">end</span><span class=\"o\">=</span><span class=\"s2\">&quot;!&quot;</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;ONIA&quot;</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Listă sau alias?",
              "level": "Mediu",
              "type": "mcq",
              "description": "Ce valoare are lista `a` la sfârșitul programului?",
              "options": [
                "[1,2]",
                "[1,2,3]",
                "[3]",
                "Eroare"
              ],
              "answerIndex": 1,
              "explanation": "b și a indică același obiect listă.",
              "statementCode": "a = [1, 2]\nb = a\nb.append(3)\nprint(a)\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">a</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">]</span>\n<span class=\"n\">b</span> <span class=\"o\">=</span> <span class=\"n\">a</span>\n<span class=\"n\">b</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Mulțimea vidă",
              "level": "Ușor",
              "type": "mcq",
              "description": "Care expresie construiește o mulțime vidă?",
              "options": [
                "{}",
                "[]",
                "set()",
                "()"
              ],
              "answerIndex": 2,
              "explanation": "{} reprezintă un dicționar vid, nu un set."
            },
            {
              "title": "Împărțirea rezultatelor unei clasificări",
              "level": "Mediu",
              "description": "Se citesc două liste cu etichetele reale și predicțiile unui clasificator. Scrie o funcție care întoarce numărul de predicții corecte și procentul acestora, cu două zecimale. Tratează cazul listelor vide.",
              "hint": "Folosește `zip()` pentru a parcurge etichetele în perechi. Poți număra valorile `True` prin `sum()`.",
              "statementCode": "# Etichete reale și predicții (exemplu)\nreale = [1, 0, 1, 1]\nprezise = [1, 1, 1, 1]\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"c1\"># Etichete reale și predicții (exemplu)</span>\n<span class=\"n\">reale</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">prezise</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n</pre></div>\n",
              "statementLabel": "Exemplu de date",
              "solutionText": "Verificăm mai întâi dimensiunile. `zip()` produce perechi de etichete, iar suma valorilor booleene numără predicțiile corecte. Pentru două liste vide am ales convenția 0%. Cu `return` întoarcem un tuplu.",
              "solutionCode": "def evaluare(reale, prezise):\n    if len(reale) != len(prezise):\n        raise ValueError(\"Listele trebuie să aibă aceeași lungime\")\n    corecte = sum(a == b for a, b in zip(reale, prezise))\n    procent = 100 * corecte / len(reale) if reale else 0.0\n    return corecte, round(procent, 2)\n\nprint(evaluare([1, 0, 1, 1], [1, 1, 1, 1]))  # (3, 75.0)\nprint(evaluare([], []))                    # (0, 0.0)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">evaluare</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">,</span> <span class=\"n\">prezise</span><span class=\"p\">):</span>\n    <span class=\"k\">if</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">)</span> <span class=\"o\">!=</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">prezise</span><span class=\"p\">):</span>\n        <span class=\"k\">raise</span> <span class=\"ne\">ValueError</span><span class=\"p\">(</span><span class=\"s2\">&quot;Listele trebuie să aibă aceeași lungime&quot;</span><span class=\"p\">)</span>\n    <span class=\"n\">corecte</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">a</span> <span class=\"o\">==</span> <span class=\"n\">b</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">,</span> <span class=\"n\">prezise</span><span class=\"p\">))</span>\n    <span class=\"n\">procent</span> <span class=\"o\">=</span> <span class=\"mi\">100</span> <span class=\"o\">*</span> <span class=\"n\">corecte</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">reale</span> <span class=\"k\">else</span> <span class=\"mf\">0.0</span>\n    <span class=\"k\">return</span> <span class=\"n\">corecte</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">procent</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">)</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">evaluare</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]))</span>  <span class=\"c1\"># (3, 75.0)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">evaluare</span><span class=\"p\">([],</span> <span class=\"p\">[]))</span>                    <span class=\"c1\"># (0, 0.0)</span>\n</pre></div>\n",
              "hintCode": "corecte = sum(a == b for a, b in zip(reale, prezise))\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">corecte</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">a</span> <span class=\"o\">==</span> <span class=\"n\">b</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">,</span> <span class=\"n\">prezise</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Statistici pe un lot de experimente",
              "level": "Mediu",
              "description": "Se citește un număr n, apoi n scoruri reale. Calculează minimul, maximul, media și câte scoruri depășesc media. Afișează media cu trei zecimale folosind f-string.",
              "hint": "Verifică lista vidă, apoi calculează media. Pentru celelalte statistici există `min()`, `max()` și `sum()`.",
              "statementCode": "4\n7.0\n9.5\n8.0\n10.0\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span>4\n7.0\n9.5\n8.0\n10.0\n</pre></div>\n",
              "statementCodeLanguage": "text",
              "statementLabel": "Date de intrare (câte un scor pe linie)",
              "solutionText": "În acest model, fiecare scor este citit pe o linie separată. Pentru `n = 0`, minimul, maximul și media nu sunt definite; afișăm un mesaj în loc să apelăm `min()` sau să împărțim la zero. Formatul `:.3f` păstrează trei zecimale.",
              "solutionCode": "n = int(input())\nscoruri = [float(input()) for _ in range(n)]\n\nif n == 0:\n    print(\"Nu există scoruri\")\nelse:\n    minim = min(scoruri)\n    maxim = max(scoruri)\n    media = sum(scoruri) / n\n    peste = sum(s > media for s in scoruri)\n    print(f\"Minim: {minim:g}\")\n    print(f\"Maxim: {maxim:g}\")\n    print(f\"Media: {media:.3f}\")\n    print(f\"Peste medie: {peste}\")\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">n</span> <span class=\"o\">=</span> <span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"nb\">input</span><span class=\"p\">())</span>\n<span class=\"n\">scoruri</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"nb\">input</span><span class=\"p\">())</span> <span class=\"k\">for</span> <span class=\"n\">_</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"n\">n</span><span class=\"p\">)]</span>\n\n<span class=\"k\">if</span> <span class=\"n\">n</span> <span class=\"o\">==</span> <span class=\"mi\">0</span><span class=\"p\">:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;Nu există scoruri&quot;</span><span class=\"p\">)</span>\n<span class=\"k\">else</span><span class=\"p\">:</span>\n    <span class=\"n\">minim</span> <span class=\"o\">=</span> <span class=\"nb\">min</span><span class=\"p\">(</span><span class=\"n\">scoruri</span><span class=\"p\">)</span>\n    <span class=\"n\">maxim</span> <span class=\"o\">=</span> <span class=\"nb\">max</span><span class=\"p\">(</span><span class=\"n\">scoruri</span><span class=\"p\">)</span>\n    <span class=\"n\">media</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">scoruri</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"n\">n</span>\n    <span class=\"n\">peste</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">s</span> <span class=\"o\">&gt;</span> <span class=\"n\">media</span> <span class=\"k\">for</span> <span class=\"n\">s</span> <span class=\"ow\">in</span> <span class=\"n\">scoruri</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"sa\">f</span><span class=\"s2\">&quot;Minim: </span><span class=\"si\">{</span><span class=\"n\">minim</span><span class=\"si\">:</span><span class=\"s2\">g</span><span class=\"si\">}</span><span class=\"s2\">&quot;</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"sa\">f</span><span class=\"s2\">&quot;Maxim: </span><span class=\"si\">{</span><span class=\"n\">maxim</span><span class=\"si\">:</span><span class=\"s2\">g</span><span class=\"si\">}</span><span class=\"s2\">&quot;</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"sa\">f</span><span class=\"s2\">&quot;Media: </span><span class=\"si\">{</span><span class=\"n\">media</span><span class=\"si\">:</span><span class=\"s2\">.3f</span><span class=\"si\">}</span><span class=\"s2\">&quot;</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"sa\">f</span><span class=\"s2\">&quot;Peste medie: </span><span class=\"si\">{</span><span class=\"n\">peste</span><span class=\"si\">}</span><span class=\"s2\">&quot;</span><span class=\"p\">)</span>\n</pre></div>\n",
              "hintCode": "if not scoruri:\n    print(\"Nu există scoruri\")\nelse:\n    media = sum(scoruri) / len(scoruri)\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">if</span> <span class=\"ow\">not</span> <span class=\"n\">scoruri</span><span class=\"p\">:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;Nu există scoruri&quot;</span><span class=\"p\">)</span>\n<span class=\"k\">else</span><span class=\"p\">:</span>\n    <span class=\"n\">media</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">scoruri</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">scoruri</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Vocabular unic și frecvențe",
              "level": "Mediu",
              "description": "Primești un text format din cuvinte separate prin spații. Afișează vocabularul distinct în ordine alfabetică și frecvența fiecărui cuvânt, fără a diferenția literele mari de cele mici.",
              "hint": "Normalizează literele cu `lower()` și separă cuvintele folosind `split()`. Folosește un dicționar de frecvențe.",
              "statementCode": "AI python AI date Python\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span>AI python AI date Python\n</pre></div>\n",
              "statementCodeLanguage": "text",
              "statementLabel": "Exemplu de intrare",
              "solutionText": "Transformăm toate literele în minuscule și separăm după spații. Cheile unui dicționar sunt distincte; `sorted(frecvente)` le parcurge în ordine alfabetică. Exemplul presupune că textul nu conține semne de punctuație care trebuie eliminate.",
              "solutionCode": "text = input()\ncuvinte = text.lower().split()\nfrecvente = {}\n\nfor cuvant in cuvinte:\n    frecvente[cuvant] = frecvente.get(cuvant, 0) + 1\n\nfor cuvant in sorted(frecvente):\n    print(cuvant, frecvente[cuvant])\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"nb\">input</span><span class=\"p\">()</span>\n<span class=\"n\">cuvinte</span> <span class=\"o\">=</span> <span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">lower</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()</span>\n<span class=\"n\">frecvente</span> <span class=\"o\">=</span> <span class=\"p\">{}</span>\n\n<span class=\"k\">for</span> <span class=\"n\">cuvant</span> <span class=\"ow\">in</span> <span class=\"n\">cuvinte</span><span class=\"p\">:</span>\n    <span class=\"n\">frecvente</span><span class=\"p\">[</span><span class=\"n\">cuvant</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"n\">frecvente</span><span class=\"o\">.</span><span class=\"n\">get</span><span class=\"p\">(</span><span class=\"n\">cuvant</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">)</span> <span class=\"o\">+</span> <span class=\"mi\">1</span>\n\n<span class=\"k\">for</span> <span class=\"n\">cuvant</span> <span class=\"ow\">in</span> <span class=\"nb\">sorted</span><span class=\"p\">(</span><span class=\"n\">frecvente</span><span class=\"p\">):</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">cuvant</span><span class=\"p\">,</span> <span class=\"n\">frecvente</span><span class=\"p\">[</span><span class=\"n\">cuvant</span><span class=\"p\">])</span>\n</pre></div>\n",
              "hintCode": "cuvinte = text.lower().split()\nfrecvente = {}\nfor cuvant in cuvinte:\n    frecvente[cuvant] = frecvente.get(cuvant, 0) + 1\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">cuvinte</span> <span class=\"o\">=</span> <span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">lower</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()</span>\n<span class=\"n\">frecvente</span> <span class=\"o\">=</span> <span class=\"p\">{}</span>\n<span class=\"k\">for</span> <span class=\"n\">cuvant</span> <span class=\"ow\">in</span> <span class=\"n\">cuvinte</span><span class=\"p\">:</span>\n    <span class=\"n\">frecvente</span><span class=\"p\">[</span><span class=\"n\">cuvant</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"n\">frecvente</span><span class=\"o\">.</span><span class=\"n\">get</span><span class=\"p\">(</span><span class=\"n\">cuvant</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">)</span> <span class=\"o\">+</span> <span class=\"mi\">1</span>\n</pre></div>\n"
            },
            {
              "title": "Extragere și filtrare din CSV",
              "level": "Mediu",
              "description": "Fișierul predictii.csv are antetul id,eticheta,scor. Creează un fișier nou care să conțină numai înregistrările al căror scor este cel puțin 0.8, păstrând antetul.",
              "hint": "Poți folosi `csv.DictReader` la citire și `csv.DictWriter` la scriere; scorurile citite sunt șiruri și trebuie convertite.",
              "statementCode": "id,eticheta,scor\n101,pisica,0.92\n102,caine,0.41\n103,pisica,0.85\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span>id,eticheta,scor\n101,pisica,0.92\n102,caine,0.41\n103,pisica,0.85\n</pre></div>\n",
              "statementCodeLanguage": "text",
              "statementLabel": "predictii.csv",
              "solutionText": "Citirea și scrierea prin `DictReader`/`DictWriter` păstrează coloanele. `writeheader()` scrie antetul o singură dată. Presupunem că toate valorile din coloana `scor` sunt numere valide; cazul intrărilor invalide este abordat la exercițiul 20.",
              "solutionCode": "import csv\n\nwith open(\"predictii.csv\", encoding=\"utf-8\", newline=\"\") as fin, \\\n     open(\"predictii_filtrate.csv\", \"w\", encoding=\"utf-8\", newline=\"\") as fout:\n    cititor = csv.DictReader(fin)\n    scriitor = csv.DictWriter(fout, fieldnames=cititor.fieldnames)\n    scriitor.writeheader()\n\n    for rand in cititor:\n        if float(rand[\"scor\"]) >= 0.8:\n            scriitor.writerow(rand)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">csv</span>\n\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;predictii.csv&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">,</span> <span class=\"n\">newline</span><span class=\"o\">=</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fin</span><span class=\"p\">,</span> \\\n     <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;predictii_filtrate.csv&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;w&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">,</span> <span class=\"n\">newline</span><span class=\"o\">=</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fout</span><span class=\"p\">:</span>\n    <span class=\"n\">cititor</span> <span class=\"o\">=</span> <span class=\"n\">csv</span><span class=\"o\">.</span><span class=\"n\">DictReader</span><span class=\"p\">(</span><span class=\"n\">fin</span><span class=\"p\">)</span>\n    <span class=\"n\">scriitor</span> <span class=\"o\">=</span> <span class=\"n\">csv</span><span class=\"o\">.</span><span class=\"n\">DictWriter</span><span class=\"p\">(</span><span class=\"n\">fout</span><span class=\"p\">,</span> <span class=\"n\">fieldnames</span><span class=\"o\">=</span><span class=\"n\">cititor</span><span class=\"o\">.</span><span class=\"n\">fieldnames</span><span class=\"p\">)</span>\n    <span class=\"n\">scriitor</span><span class=\"o\">.</span><span class=\"n\">writeheader</span><span class=\"p\">()</span>\n\n    <span class=\"k\">for</span> <span class=\"n\">rand</span> <span class=\"ow\">in</span> <span class=\"n\">cititor</span><span class=\"p\">:</span>\n        <span class=\"k\">if</span> <span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"n\">rand</span><span class=\"p\">[</span><span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">])</span> <span class=\"o\">&gt;=</span> <span class=\"mf\">0.8</span><span class=\"p\">:</span>\n            <span class=\"n\">scriitor</span><span class=\"o\">.</span><span class=\"n\">writerow</span><span class=\"p\">(</span><span class=\"n\">rand</span><span class=\"p\">)</span>\n</pre></div>\n",
              "hintCode": "import csv\nwith open(\"date.csv\", encoding=\"utf-8\", newline=\"\") as fin:\n    reader = csv.DictReader(fin)\n    for rand in reader:\n        scor = float(rand[\"scor\"])\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">csv</span>\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;date.csv&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">,</span> <span class=\"n\">newline</span><span class=\"o\">=</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fin</span><span class=\"p\">:</span>\n    <span class=\"n\">reader</span> <span class=\"o\">=</span> <span class=\"n\">csv</span><span class=\"o\">.</span><span class=\"n\">DictReader</span><span class=\"p\">(</span><span class=\"n\">fin</span><span class=\"p\">)</span>\n    <span class=\"k\">for</span> <span class=\"n\">rand</span> <span class=\"ow\">in</span> <span class=\"n\">reader</span><span class=\"p\">:</span>\n        <span class=\"n\">scor</span> <span class=\"o\">=</span> <span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"n\">rand</span><span class=\"p\">[</span><span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "Configurații JSON",
              "level": "Mediu",
              "description": "Un fișier JSON conține un dicționar cu numele modelului, hiperparametrii și lista scorurilor obținute. Citește datele, calculează cel mai bun scor și scrie un nou fișier JSON care include best_score.",
              "hint": "Citește JSON-ul cu `json.load()`. Pentru scriere folosește `json.dump()` și păstrează diacriticele prin `ensure_ascii=False`.",
              "statementCode": "{\n  \"model\": \"KNN\",\n  \"hiperparametri\": {\"k\": 3},\n  \"scoruri\": [0.83, 0.87, 0.85]\n}\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span>{\n  &quot;model&quot;: &quot;KNN&quot;,\n  &quot;hiperparametri&quot;: {&quot;k&quot;: 3},\n  &quot;scoruri&quot;: [0.83, 0.87, 0.85]\n}\n</pre></div>\n",
              "statementCodeLanguage": "text",
              "statementLabel": "config.json",
              "solutionText": "Folosim `json.load()` pentru citire și `json.dump()` pentru scriere. Pentru o listă de scoruri vidă, am ales să scriem `null` (valoarea Python `None`) în câmpul `best_score`, în locul apelului invalid `max([])`.",
              "solutionCode": "import json\n\nwith open(\"config.json\", encoding=\"utf-8\") as fin:\n    date = json.load(fin)\n\nscoruri = date.get(\"scoruri\", [])\ndate[\"best_score\"] = max(scoruri) if scoruri else None\n\nwith open(\"config_actualizat.json\", \"w\", encoding=\"utf-8\") as fout:\n    json.dump(date, fout, ensure_ascii=False, indent=2)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">json</span>\n\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;config.json&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fin</span><span class=\"p\">:</span>\n    <span class=\"n\">date</span> <span class=\"o\">=</span> <span class=\"n\">json</span><span class=\"o\">.</span><span class=\"n\">load</span><span class=\"p\">(</span><span class=\"n\">fin</span><span class=\"p\">)</span>\n\n<span class=\"n\">scoruri</span> <span class=\"o\">=</span> <span class=\"n\">date</span><span class=\"o\">.</span><span class=\"n\">get</span><span class=\"p\">(</span><span class=\"s2\">&quot;scoruri&quot;</span><span class=\"p\">,</span> <span class=\"p\">[])</span>\n<span class=\"n\">date</span><span class=\"p\">[</span><span class=\"s2\">&quot;best_score&quot;</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"nb\">max</span><span class=\"p\">(</span><span class=\"n\">scoruri</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">scoruri</span> <span class=\"k\">else</span> <span class=\"kc\">None</span>\n\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;config_actualizat.json&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;w&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fout</span><span class=\"p\">:</span>\n    <span class=\"n\">json</span><span class=\"o\">.</span><span class=\"n\">dump</span><span class=\"p\">(</span><span class=\"n\">date</span><span class=\"p\">,</span> <span class=\"n\">fout</span><span class=\"p\">,</span> <span class=\"n\">ensure_ascii</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">,</span> <span class=\"n\">indent</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">)</span>\n</pre></div>\n",
              "hintCode": "import json\nwith open(\"config.json\", encoding=\"utf-8\") as fin:\n    date = json.load(fin)\n# la salvare: json.dump(rezultat, fout, ensure_ascii=False, indent=2)\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">json</span>\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;config.json&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fin</span><span class=\"p\">:</span>\n    <span class=\"n\">date</span> <span class=\"o\">=</span> <span class=\"n\">json</span><span class=\"o\">.</span><span class=\"n\">load</span><span class=\"p\">(</span><span class=\"n\">fin</span><span class=\"p\">)</span>\n<span class=\"c1\"># la salvare: json.dump(rezultat, fout, ensure_ascii=False, indent=2)</span>\n</pre></div>\n"
            },
            {
              "title": "Căutare în dicționar",
              "level": "Ușor",
              "type": "mcq",
              "description": "Ce afișează codul în cazul în care cheia `x` nu există?",
              "options": [
                "Eroare KeyError",
                "None",
                "0",
                "Dicționarul vid"
              ],
              "answerIndex": 2,
              "explanation": "get() întoarce valoarea implicită transmisă ca al doilea argument.",
              "statementCode": "d = {\"y\": 4}\nprint(d.get(\"x\", 0))\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">d</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"s2\">&quot;y&quot;</span><span class=\"p\">:</span> <span class=\"mi\">4</span><span class=\"p\">}</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">d</span><span class=\"o\">.</span><span class=\"n\">get</span><span class=\"p\">(</span><span class=\"s2\">&quot;x&quot;</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Efectul funcției sort",
              "level": "Mediu",
              "type": "mcq",
              "description": "Ce valori au `x` și `a` după executarea codului?",
              "options": [
                "[1,2,3] și [3,1,2]",
                "None și [1,2,3]",
                "[1,2,3] și [1,2,3]",
                "None și [3,1,2]"
              ],
              "answerIndex": 1,
              "explanation": "Metoda sort() modifică lista și returnează None.",
              "statementCode": "a = [3, 1, 2]\nx = a.sort()\nprint(x, a)\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">a</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">]</span>\n<span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"n\">a</span><span class=\"o\">.</span><span class=\"n\">sort</span><span class=\"p\">()</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">a</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Indicii negativi",
              "level": "Ușor",
              "type": "mcq",
              "description": "Ce valoare returnează expresia?",
              "options": [
                "[7,9]",
                "[7,9,12]",
                "[4,7]",
                "[9,12]"
              ],
              "answerIndex": 0,
              "explanation": "În Python, stop nu este inclus, iar -3 corespunde poziției 1.",
              "statementCode": "a = [4, 7, 9, 12]\nprint(a[-3:-1])\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">a</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">,</span> <span class=\"mi\">9</span><span class=\"p\">,</span> <span class=\"mi\">12</span><span class=\"p\">]</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">[</span><span class=\"o\">-</span><span class=\"mi\">3</span><span class=\"p\">:</span><span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "Parametri nominali și valori implicite",
              "level": "Mediu",
              "description": "Definește funcția prag(valoare, limita=0.5, inclusiv=True) care verifică apartenența la un prag. Apeleaz-o pozițional, nominal și prin despachetarea unui dicționar de argumente.",
              "hint": "Funcția poate avea un prag implicit și un parametru boolean. La apel, un dicționar se poate despacheta cu `**`.",
              "statementCode": "# Completează definiția funcției și cele trei modalități de apel.\ndef prag(valoare, limita=0.5, inclusiv=True):\n    pass\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"c1\"># Completează definiția funcției și cele trei modalități de apel.</span>\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">prag</span><span class=\"p\">(</span><span class=\"n\">valoare</span><span class=\"p\">,</span> <span class=\"n\">limita</span><span class=\"o\">=</span><span class=\"mf\">0.5</span><span class=\"p\">,</span> <span class=\"n\">inclusiv</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">):</span>\n    <span class=\"k\">pass</span>\n</pre></div>\n",
              "statementLabel": "Schelet de funcție",
              "solutionText": "La apelul pozițional contează ordinea argumentelor; la apelul nominal contează numele parametrului. Operatorul `**` despachetează perechile cheie–valoare din dicționar drept argumente nominale.",
              "solutionCode": "def prag(valoare, limita=0.5, inclusiv=True):\n    if inclusiv:\n        return valoare >= limita\n    return valoare > limita\n\nprint(prag(0.6))  # pozițional; True\nprint(prag(limita=0.7, valoare=0.6))  # nominal; False\nargumente = {\"valoare\": 0.6, \"limita\": 0.5}\nprint(prag(**argumente))  # despachetare; True\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">prag</span><span class=\"p\">(</span><span class=\"n\">valoare</span><span class=\"p\">,</span> <span class=\"n\">limita</span><span class=\"o\">=</span><span class=\"mf\">0.5</span><span class=\"p\">,</span> <span class=\"n\">inclusiv</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">):</span>\n    <span class=\"k\">if</span> <span class=\"n\">inclusiv</span><span class=\"p\">:</span>\n        <span class=\"k\">return</span> <span class=\"n\">valoare</span> <span class=\"o\">&gt;=</span> <span class=\"n\">limita</span>\n    <span class=\"k\">return</span> <span class=\"n\">valoare</span> <span class=\"o\">&gt;</span> <span class=\"n\">limita</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">prag</span><span class=\"p\">(</span><span class=\"mf\">0.6</span><span class=\"p\">))</span>  <span class=\"c1\"># pozițional; True</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">prag</span><span class=\"p\">(</span><span class=\"n\">limita</span><span class=\"o\">=</span><span class=\"mf\">0.7</span><span class=\"p\">,</span> <span class=\"n\">valoare</span><span class=\"o\">=</span><span class=\"mf\">0.6</span><span class=\"p\">))</span>  <span class=\"c1\"># nominal; False</span>\n<span class=\"n\">argumente</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"s2\">&quot;valoare&quot;</span><span class=\"p\">:</span> <span class=\"mf\">0.6</span><span class=\"p\">,</span> <span class=\"s2\">&quot;limita&quot;</span><span class=\"p\">:</span> <span class=\"mf\">0.5</span><span class=\"p\">}</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">prag</span><span class=\"p\">(</span><span class=\"o\">**</span><span class=\"n\">argumente</span><span class=\"p\">))</span>  <span class=\"c1\"># despachetare; True</span>\n</pre></div>\n",
              "hintCode": "date = {\"valoare\": 0.6, \"limita\": 0.5}\n# funcția poate fi apelată folosind:\n# prag(**date)\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">date</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"s2\">&quot;valoare&quot;</span><span class=\"p\">:</span> <span class=\"mf\">0.6</span><span class=\"p\">,</span> <span class=\"s2\">&quot;limita&quot;</span><span class=\"p\">:</span> <span class=\"mf\">0.5</span><span class=\"p\">}</span>\n<span class=\"c1\"># funcția poate fi apelată folosind:</span>\n<span class=\"c1\"># prag(**date)</span>\n</pre></div>\n"
            },
            {
              "title": "Eliminarea duplicatelor cu păstrarea ordinii",
              "level": "Mediu",
              "description": "Se dă o listă de identificatori; construiește lista aparițiilor distincte în ordinea primei apariții.",
              "hint": "Menține un `set` pentru verificarea apartenenței și o listă pentru ordinea primei apariții.",
              "statementCode": "valori = [7, 2, 7, 5, 2, 8]\n# Rezultat așteptat: [7, 2, 5, 8]\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">valori</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">7</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">8</span><span class=\"p\">]</span>\n<span class=\"c1\"># Rezultat așteptat: [7, 2, 5, 8]</span>\n</pre></div>\n",
              "statementLabel": "Exemplu",
              "solutionText": "Mulțimea `vazute` permite verificarea rapidă a apartenenței, iar lista `rezultat` reține ordinea întâlnirii. Codul presupune că identificatorii pot fi elemente ale unei mulțimi (sunt hashable).",
              "solutionCode": "def fara_duplicate(valori):\n    vazute = set()\n    rezultat = []\n    for element in valori:\n        if element not in vazute:\n            vazute.add(element)\n            rezultat.append(element)\n    return rezultat\n\nprint(fara_duplicate([7, 2, 7, 5, 2, 8]))  # [7, 2, 5, 8]\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">fara_duplicate</span><span class=\"p\">(</span><span class=\"n\">valori</span><span class=\"p\">):</span>\n    <span class=\"n\">vazute</span> <span class=\"o\">=</span> <span class=\"nb\">set</span><span class=\"p\">()</span>\n    <span class=\"n\">rezultat</span> <span class=\"o\">=</span> <span class=\"p\">[]</span>\n    <span class=\"k\">for</span> <span class=\"n\">element</span> <span class=\"ow\">in</span> <span class=\"n\">valori</span><span class=\"p\">:</span>\n        <span class=\"k\">if</span> <span class=\"n\">element</span> <span class=\"ow\">not</span> <span class=\"ow\">in</span> <span class=\"n\">vazute</span><span class=\"p\">:</span>\n            <span class=\"n\">vazute</span><span class=\"o\">.</span><span class=\"n\">add</span><span class=\"p\">(</span><span class=\"n\">element</span><span class=\"p\">)</span>\n            <span class=\"n\">rezultat</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">(</span><span class=\"n\">element</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"n\">rezultat</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">fara_duplicate</span><span class=\"p\">([</span><span class=\"mi\">7</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">8</span><span class=\"p\">]))</span>  <span class=\"c1\"># [7, 2, 5, 8]</span>\n</pre></div>\n",
              "hintCode": "vazute = set()\nrezultat = []\nfor x in valori:\n    if x not in vazute:\n        vazute.add(x)\n        rezultat.append(x)\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">vazute</span> <span class=\"o\">=</span> <span class=\"nb\">set</span><span class=\"p\">()</span>\n<span class=\"n\">rezultat</span> <span class=\"o\">=</span> <span class=\"p\">[]</span>\n<span class=\"k\">for</span> <span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">valori</span><span class=\"p\">:</span>\n    <span class=\"k\">if</span> <span class=\"n\">x</span> <span class=\"ow\">not</span> <span class=\"ow\">in</span> <span class=\"n\">vazute</span><span class=\"p\">:</span>\n        <span class=\"n\">vazute</span><span class=\"o\">.</span><span class=\"n\">add</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n        <span class=\"n\">rezultat</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Fișier cu valori separate arbitrar",
              "level": "Mediu",
              "description": "Fișierul date.in conține numere întregi pe un număr necunoscut de linii, separate prin spații sau linii noi. Scrie suma numerelor în suma.out.",
              "hint": "`read().split()` separă după orice secvență de spații, tabulatori sau sfârșituri de linie. Convertește apoi fiecare token în `int`.",
              "statementCode": "4  6\n1\t3\n2\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span>4  6\n1\t3\n2\n</pre></div>\n",
              "statementCodeLanguage": "text",
              "statementLabel": "date.in",
              "solutionText": "Metoda `split()` fără argumente separă după orice combinație de spații, taburi și caractere de linie nouă. `print(..., file=fout)` scrie rezultatul în fișier; suma unei liste vide este 0.",
              "solutionCode": "with open(\"date.in\", encoding=\"utf-8\") as fin:\n    numere = [int(x) for x in fin.read().split()]\n\nwith open(\"suma.out\", \"w\", encoding=\"utf-8\") as fout:\n    print(sum(numere), file=fout)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;date.in&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fin</span><span class=\"p\">:</span>\n    <span class=\"n\">numere</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">fin</span><span class=\"o\">.</span><span class=\"n\">read</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()]</span>\n\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;suma.out&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;w&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fout</span><span class=\"p\">:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">numere</span><span class=\"p\">),</span> <span class=\"n\">file</span><span class=\"o\">=</span><span class=\"n\">fout</span><span class=\"p\">)</span>\n</pre></div>\n",
              "hintCode": "with open(\"date.in\", encoding=\"utf-8\") as fin:\n    numere = [int(x) for x in fin.read().split()]\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;date.in&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fin</span><span class=\"p\">:</span>\n    <span class=\"n\">numere</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">fin</span><span class=\"o\">.</span><span class=\"n\">read</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()]</span>\n</pre></div>\n"
            },
            {
              "title": "Frecvențe ale etichetelor din JSON",
              "level": "Dificil",
              "description": "Se citește un JSON cu o listă de obiecte, fiecare având câmpurile \"id\" și \"eticheta\". Creează un raport JSON cu frecvența fiecărei etichete și numărul de etichete distincte.",
              "hint": "Poți număra etichetele cu `dict.get()`. Pentru serializare utilizează modulul `json`.",
              "statementCode": "[\n  {\"id\": 1, \"eticheta\": \"pisica\"},\n  {\"id\": 2, \"eticheta\": \"caine\"},\n  {\"id\": 3, \"eticheta\": \"pisica\"}\n]\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span>[\n  {&quot;id&quot;: 1, &quot;eticheta&quot;: &quot;pisica&quot;},\n  {&quot;id&quot;: 2, &quot;eticheta&quot;: &quot;caine&quot;},\n  {&quot;id&quot;: 3, &quot;eticheta&quot;: &quot;pisica&quot;}\n]\n</pre></div>\n",
              "statementCodeLanguage": "text",
              "statementLabel": "etichete.json",
              "solutionText": "Folosim dicționarul pentru frecvențe și `len(frecvente)` pentru numărul etichetelor distincte. Presupunem că fișierul conține o listă de obiecte care au câmpul `eticheta`.",
              "solutionCode": "import json\n\nwith open(\"etichete.json\", encoding=\"utf-8\") as fin:\n    date = json.load(fin)\n\nfrecvente = {}\nfor obiect in date:\n    eticheta = obiect[\"eticheta\"]\n    frecvente[eticheta] = frecvente.get(eticheta, 0) + 1\n\nraport = {\n    \"frecvente\": frecvente,\n    \"distincte\": len(frecvente)\n}\nwith open(\"raport.json\", \"w\", encoding=\"utf-8\") as fout:\n    json.dump(raport, fout, ensure_ascii=False, indent=2)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">json</span>\n\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;etichete.json&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fin</span><span class=\"p\">:</span>\n    <span class=\"n\">date</span> <span class=\"o\">=</span> <span class=\"n\">json</span><span class=\"o\">.</span><span class=\"n\">load</span><span class=\"p\">(</span><span class=\"n\">fin</span><span class=\"p\">)</span>\n\n<span class=\"n\">frecvente</span> <span class=\"o\">=</span> <span class=\"p\">{}</span>\n<span class=\"k\">for</span> <span class=\"n\">obiect</span> <span class=\"ow\">in</span> <span class=\"n\">date</span><span class=\"p\">:</span>\n    <span class=\"n\">eticheta</span> <span class=\"o\">=</span> <span class=\"n\">obiect</span><span class=\"p\">[</span><span class=\"s2\">&quot;eticheta&quot;</span><span class=\"p\">]</span>\n    <span class=\"n\">frecvente</span><span class=\"p\">[</span><span class=\"n\">eticheta</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"n\">frecvente</span><span class=\"o\">.</span><span class=\"n\">get</span><span class=\"p\">(</span><span class=\"n\">eticheta</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">)</span> <span class=\"o\">+</span> <span class=\"mi\">1</span>\n\n<span class=\"n\">raport</span> <span class=\"o\">=</span> <span class=\"p\">{</span>\n    <span class=\"s2\">&quot;frecvente&quot;</span><span class=\"p\">:</span> <span class=\"n\">frecvente</span><span class=\"p\">,</span>\n    <span class=\"s2\">&quot;distincte&quot;</span><span class=\"p\">:</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">frecvente</span><span class=\"p\">)</span>\n<span class=\"p\">}</span>\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;raport.json&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;w&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fout</span><span class=\"p\">:</span>\n    <span class=\"n\">json</span><span class=\"o\">.</span><span class=\"n\">dump</span><span class=\"p\">(</span><span class=\"n\">raport</span><span class=\"p\">,</span> <span class=\"n\">fout</span><span class=\"p\">,</span> <span class=\"n\">ensure_ascii</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">,</span> <span class=\"n\">indent</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">)</span>\n</pre></div>\n",
              "hintCode": "frecvente = {}\nfor obiect in date:\n    eticheta = obiect[\"eticheta\"]\n    frecvente[eticheta] = frecvente.get(eticheta, 0) + 1\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">frecvente</span> <span class=\"o\">=</span> <span class=\"p\">{}</span>\n<span class=\"k\">for</span> <span class=\"n\">obiect</span> <span class=\"ow\">in</span> <span class=\"n\">date</span><span class=\"p\">:</span>\n    <span class=\"n\">eticheta</span> <span class=\"o\">=</span> <span class=\"n\">obiect</span><span class=\"p\">[</span><span class=\"s2\">&quot;eticheta&quot;</span><span class=\"p\">]</span>\n    <span class=\"n\">frecvente</span><span class=\"p\">[</span><span class=\"n\">eticheta</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"n\">frecvente</span><span class=\"o\">.</span><span class=\"n\">get</span><span class=\"p\">(</span><span class=\"n\">eticheta</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">)</span> <span class=\"o\">+</span> <span class=\"mi\">1</span>\n</pre></div>\n"
            },
            {
              "title": "Modificarea unei structuri imbricate",
              "level": "Dificil",
              "type": "mcq",
              "description": "Câte dintre cele trei subliste conțin valoarea 7?",
              "options": [
                "0",
                "1",
                "2",
                "3"
              ],
              "answerIndex": 3,
              "explanation": "Toate referințele din lista exterioară indică aceeași sublistă.",
              "statementCode": "a = [[0] * 2] * 3\na[0][1] = 7\nprint(a)\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">a</span> <span class=\"o\">=</span> <span class=\"p\">[[</span><span class=\"mi\">0</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"mi\">2</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"mi\">3</span>\n<span class=\"n\">a</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">][</span><span class=\"mi\">1</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"mi\">7</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Numărul de chei distincte",
              "level": "Ușor",
              "type": "mcq",
              "description": "Ce afișează instrucțiunea?",
              "options": [
                "3",
                "2",
                "1",
                "Eroare"
              ],
              "answerIndex": 1,
              "explanation": "Atribuirea repetată aceleiași chei suprascrie valoarea existentă.",
              "statementCode": "print(len({\"a\": 1, \"b\": 2, \"a\": 3}))\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">({</span><span class=\"s2\">&quot;a&quot;</span><span class=\"p\">:</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"s2\">&quot;b&quot;</span><span class=\"p\">:</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"s2\">&quot;a&quot;</span><span class=\"p\">:</span> <span class=\"mi\">3</span><span class=\"p\">}))</span>\n</pre></div>\n"
            },
            {
              "title": "Robustețea procesării datelor",
              "level": "Dificil",
              "description": "Ai un fișier CSV cu valori numerice și unele intrări lipsă. Scrie o funcție care extrage valorile valide din coloana scor, ignoră câmpurile goale și raportează câte au fost ignorate.",
              "hint": "Verifică datele invalide prin `strip()` și tratează eroarea `ValueError` atunci când convertești un câmp numeric.",
              "statementCode": "id,scor\n1,0.82\n2,\n3,invalid\n4,0.91\n",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span>id,scor\n1,0.82\n2,\n3,invalid\n4,0.91\n</pre></div>\n",
              "statementCodeLanguage": "text",
              "statementLabel": "scoruri.csv",
              "solutionText": "Prin `try`/`except ValueError` ignorăm celulele care nu pot fi convertite la număr. Un câmp lipsă sau gol este numărat o singură dată, iar valorile valide sunt returnate într-o listă.",
              "solutionCode": "import csv\n\ndef citeste_scoruri(cale):\n    valori = []\n    ignorate = 0\n    with open(cale, encoding=\"utf-8\", newline=\"\") as fin:\n        for rand in csv.DictReader(fin):\n            text = (rand.get(\"scor\") or \"\").strip()\n            if not text:\n                ignorate += 1\n                continue\n            try:\n                valori.append(float(text))\n            except ValueError:\n                ignorate += 1\n    return valori, ignorate\n\nscoruri, ignorate = citeste_scoruri(\"scoruri.csv\")\nprint(scoruri)\nprint(f\"Înregistrări ignorate: {ignorate}\")\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">csv</span>\n\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">citeste_scoruri</span><span class=\"p\">(</span><span class=\"n\">cale</span><span class=\"p\">):</span>\n    <span class=\"n\">valori</span> <span class=\"o\">=</span> <span class=\"p\">[]</span>\n    <span class=\"n\">ignorate</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n    <span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"n\">cale</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">,</span> <span class=\"n\">newline</span><span class=\"o\">=</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fin</span><span class=\"p\">:</span>\n        <span class=\"k\">for</span> <span class=\"n\">rand</span> <span class=\"ow\">in</span> <span class=\"n\">csv</span><span class=\"o\">.</span><span class=\"n\">DictReader</span><span class=\"p\">(</span><span class=\"n\">fin</span><span class=\"p\">):</span>\n            <span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"p\">(</span><span class=\"n\">rand</span><span class=\"o\">.</span><span class=\"n\">get</span><span class=\"p\">(</span><span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">)</span> <span class=\"ow\">or</span> <span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">strip</span><span class=\"p\">()</span>\n            <span class=\"k\">if</span> <span class=\"ow\">not</span> <span class=\"n\">text</span><span class=\"p\">:</span>\n                <span class=\"n\">ignorate</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n                <span class=\"k\">continue</span>\n            <span class=\"k\">try</span><span class=\"p\">:</span>\n                <span class=\"n\">valori</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">(</span><span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"p\">))</span>\n            <span class=\"k\">except</span> <span class=\"ne\">ValueError</span><span class=\"p\">:</span>\n                <span class=\"n\">ignorate</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n    <span class=\"k\">return</span> <span class=\"n\">valori</span><span class=\"p\">,</span> <span class=\"n\">ignorate</span>\n\n<span class=\"n\">scoruri</span><span class=\"p\">,</span> <span class=\"n\">ignorate</span> <span class=\"o\">=</span> <span class=\"n\">citeste_scoruri</span><span class=\"p\">(</span><span class=\"s2\">&quot;scoruri.csv&quot;</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">scoruri</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"sa\">f</span><span class=\"s2\">&quot;Înregistrări ignorate: </span><span class=\"si\">{</span><span class=\"n\">ignorate</span><span class=\"si\">}</span><span class=\"s2\">&quot;</span><span class=\"p\">)</span>\n</pre></div>\n",
              "hintCode": "try:\n    scor = float(rand[\"scor\"].strip())\nexcept (TypeError, ValueError):\n    continue\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">try</span><span class=\"p\">:</span>\n    <span class=\"n\">scor</span> <span class=\"o\">=</span> <span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"n\">rand</span><span class=\"p\">[</span><span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">strip</span><span class=\"p\">())</span>\n<span class=\"k\">except</span> <span class=\"p\">(</span><span class=\"ne\">TypeError</span><span class=\"p\">,</span> <span class=\"ne\">ValueError</span><span class=\"p\">):</span>\n    <span class=\"k\">continue</span>\n</pre></div>\n"
            }
          ]
        },
        {
          "id": "sectiunea-1-2",
          "number": "1.2",
          "title": "Bibliotecile NumPy și Pandas",
          "stage": "general",
          "summary": "Materiale complete în română pentru NumPy, Pandas și fișiere CSV: exemple, operații vectorizate, prelucrarea datelor și notebookuri de studiu.",
          "objectives": [
            "Să creezi, să indexezi și să transformi tablouri NumPy multidimensionale.",
            "Să aplici operații vectorizate, agregări pe axe și broadcasting.",
            "Să utilizezi Pandas pentru filtrarea, agregarea și vizualizarea datelor tabelare.",
            "Să citești și să scrii corect date în format CSV folosind Pandas sau modulul csv."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "NumPy — suport de curs (fără autor indicat)",
              "src": "content/numpy-onia.html",
              "standalone": "content/numpy-onia-standalone.html"
            },
            {
              "type": "lesson",
              "title": "Pandas — suport de curs · Dan Novischi",
              "src": "content/pandas-onia.html",
              "standalone": "content/pandas-onia-standalone.html"
            },
            {
              "type": "lesson",
              "title": "CSV — ghid pentru fișiere tabelare",
              "src": "content/csv-onia.html",
              "standalone": "content/csv-onia-standalone.html"
            },
            {
              "type": "html",
              "title": "Notebook original Pandas — Dan Novischi · 117 celule",
              "src": "content/notebook-original-pandas.html",
              "height": 640,
              "download": "notebooks/Pandas-Dan-Novischi.ipynb",
              "caption": "Notebook original Pandas păstrat integral în arhivă; imaginile rezultate din rulările salvate sunt incluse local."
            },
            {
              "type": "prose",
              "title": "Notebookuri și resurse de aprofundare",
              "html": "<p>Pentru consultarea notebookurilor originale, folosește paginile autorilor. Materialele ONIA de mai sus conțin explicațiile și exemplele necesare acestei secțiuni.</p><ul><li><a href=\"https://github.com/mrdbourke/zero-to-mastery-ml\" target=\"_blank\" rel=\"noopener noreferrer\">NumPy — notebook de aprofundare</a> — Daniel Bourke — cursul Zero to Mastery Machine Learning</li></ul>"
            }
          ],
          "exercises": [
            {
              "title": "NumPy · Dimensiunea după slicing",
              "level": "Ușor",
              "type": "mcq",
              "description": "Ce formă are vectorul obținut?",
              "statementCode": "import numpy as np\na = np.arange(12).reshape(3, 4)\nprint(a[1, :].shape)\n",
              "options": [
                "(1, 4)",
                "(4,)",
                "(3, 4)",
                "(3,)"
              ],
              "answerIndex": 1,
              "explanation": "Selectarea prin indice întreg elimină dimensiunea de rând.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"n\">a</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">arange</span><span class=\"p\">(</span><span class=\"mi\">12</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">reshape</span><span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"p\">:]</span><span class=\"o\">.</span><span class=\"n\">shape</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "NumPy · Broadcasting și valori",
              "level": "Mediu",
              "type": "mcq",
              "description": "Ce se afișează după adunare?",
              "statementCode": "import numpy as np\na = np.array([[1, 2], [3, 4]])\nb = np.array([10, 20])\nprint((a + b)[1, 0])\n",
              "options": [
                "13",
                "23",
                "31",
                "Eroare de forme"
              ],
              "answerIndex": 0,
              "explanation": "Vectorul [10,20] se adaugă fiecărui rând, deci a[1,0]+10=13.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"n\">a</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">array</span><span class=\"p\">([[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">]])</span>\n<span class=\"n\">b</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">array</span><span class=\"p\">([</span><span class=\"mi\">10</span><span class=\"p\">,</span> <span class=\"mi\">20</span><span class=\"p\">])</span>\n<span class=\"nb\">print</span><span class=\"p\">((</span><span class=\"n\">a</span> <span class=\"o\">+</span> <span class=\"n\">b</span><span class=\"p\">)[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "NumPy · View sau copie",
              "level": "Mediu",
              "type": "mcq",
              "description": "Care este valoarea afișată?",
              "statementCode": "import numpy as np\na = np.array([1, 2, 3, 4])\nb = a[1:3]\nb[0] = 99\nprint(a[1])\n",
              "options": [
                "2",
                "99",
                "1",
                "Eroare"
              ],
              "answerIndex": 1,
              "explanation": "Slicing-ul de bază creează un view și modifică datele originale.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"n\">a</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">array</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">])</span>\n<span class=\"n\">b</span> <span class=\"o\">=</span> <span class=\"n\">a</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">:</span><span class=\"mi\">3</span><span class=\"p\">]</span>\n<span class=\"n\">b</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"mi\">99</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "NumPy · Standardizare pe coloane",
              "level": "Mediu",
              "description": "Pentru o matrice X cu n observații și m caracteristici, scrie o funcție care întoarce matricea standardizată pe coloane. Evită împărțirea la zero pentru coloanele constante.",
              "hint": "Folosește `mean(axis=0)` și `std(axis=0)`; înlocuiește abaterea standard egală cu zero cu 1.",
              "hintCode": "medie = X.mean(axis=0)\nabatere = X.std(axis=0)\n",
              "solutionText": "Înlocuim deviațiile standard nule cu 1, astfel încât o coloană constantă devine coloană de zerouri.",
              "solutionCode": "import numpy as np\n\ndef standardizeaza(X):\n    X = np.asarray(X, dtype=float)\n    if X.ndim != 2 or X.shape[0] == 0:\n        raise ValueError(\"X trebuie să fie o matrice cu rânduri\")\n    medie = X.mean(axis=0)\n    abatere = X.std(axis=0)\n    abatere[abatere == 0] = 1.0\n    return (X - medie) / abatere\n\nprint(standardizeaza([[2, 5], [4, 5], [6, 5]]))\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">medie</span> <span class=\"o\">=</span> <span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">mean</span><span class=\"p\">(</span><span class=\"n\">axis</span><span class=\"o\">=</span><span class=\"mi\">0</span><span class=\"p\">)</span>\n<span class=\"n\">abatere</span> <span class=\"o\">=</span> <span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">std</span><span class=\"p\">(</span><span class=\"n\">axis</span><span class=\"o\">=</span><span class=\"mi\">0</span><span class=\"p\">)</span>\n</pre></div>\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">standardizeaza</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">):</span>\n    <span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">asarray</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">dtype</span><span class=\"o\">=</span><span class=\"nb\">float</span><span class=\"p\">)</span>\n    <span class=\"k\">if</span> <span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">ndim</span> <span class=\"o\">!=</span> <span class=\"mi\">2</span> <span class=\"ow\">or</span> <span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">shape</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">]</span> <span class=\"o\">==</span> <span class=\"mi\">0</span><span class=\"p\">:</span>\n        <span class=\"k\">raise</span> <span class=\"ne\">ValueError</span><span class=\"p\">(</span><span class=\"s2\">&quot;X trebuie să fie o matrice cu rânduri&quot;</span><span class=\"p\">)</span>\n    <span class=\"n\">medie</span> <span class=\"o\">=</span> <span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">mean</span><span class=\"p\">(</span><span class=\"n\">axis</span><span class=\"o\">=</span><span class=\"mi\">0</span><span class=\"p\">)</span>\n    <span class=\"n\">abatere</span> <span class=\"o\">=</span> <span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">std</span><span class=\"p\">(</span><span class=\"n\">axis</span><span class=\"o\">=</span><span class=\"mi\">0</span><span class=\"p\">)</span>\n    <span class=\"n\">abatere</span><span class=\"p\">[</span><span class=\"n\">abatere</span> <span class=\"o\">==</span> <span class=\"mi\">0</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"mf\">1.0</span>\n    <span class=\"k\">return</span> <span class=\"p\">(</span><span class=\"n\">X</span> <span class=\"o\">-</span> <span class=\"n\">medie</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"n\">abatere</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">standardizeaza</span><span class=\"p\">([[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">]]))</span>\n</pre></div>\n"
            },
            {
              "title": "Pandas · Selectare condițională",
              "level": "Ușor",
              "type": "mcq",
              "description": "Care expresie filtrează corect rândurile cu scor peste 70 și orașul Cluj?",
              "options": [
                "df[(df[\"scor\"] > 70) & (df[\"oras\"] == \"Cluj\")]",
                "df[df[\"scor\"] > 70 and df[\"oras\"] == \"Cluj\"]",
                "df[\"scor\" > 70]",
                "df.loc[\"Cluj\", 70]"
              ],
              "answerIndex": 0,
              "explanation": "Condițiile element-cu-element se leagă prin & și se încadrează în paranteze."
            },
            {
              "title": "Pandas · Grupați și calculați mediile",
              "level": "Mediu",
              "description": "Se dă fișierul datasets/scoruri_clase.csv cu coloanele elev, clasa și scor. Calculează media scorurilor pe fiecare clasă și exportă rezultatul fără index suplimentar.",
              "hint": "Folosește `pd.read_csv()`, `groupby()` și `to_csv(index=False)`.",
              "hintCode": "medii = df.groupby(\"clasa\", as_index=False)[\"scor\"].mean()\n",
              "solutionCode": "import pandas as pd\n\ndf = pd.read_csv(\"datasets/scoruri_clase.csv\")\nmedii = df.groupby(\"clasa\", as_index=False)[\"scor\"].mean()\nmedii.to_csv(\"medii_clase.csv\", index=False)\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">medii</span> <span class=\"o\">=</span> <span class=\"n\">df</span><span class=\"o\">.</span><span class=\"n\">groupby</span><span class=\"p\">(</span><span class=\"s2\">&quot;clasa&quot;</span><span class=\"p\">,</span> <span class=\"n\">as_index</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">)[</span><span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">mean</span><span class=\"p\">()</span>\n</pre></div>\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">read_csv</span><span class=\"p\">(</span><span class=\"s2\">&quot;datasets/scoruri_clase.csv&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">medii</span> <span class=\"o\">=</span> <span class=\"n\">df</span><span class=\"o\">.</span><span class=\"n\">groupby</span><span class=\"p\">(</span><span class=\"s2\">&quot;clasa&quot;</span><span class=\"p\">,</span> <span class=\"n\">as_index</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">)[</span><span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">mean</span><span class=\"p\">()</span>\n<span class=\"n\">medii</span><span class=\"o\">.</span><span class=\"n\">to_csv</span><span class=\"p\">(</span><span class=\"s2\">&quot;medii_clase.csv&quot;</span><span class=\"p\">,</span> <span class=\"n\">index</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "CSV · Câmpuri între ghilimele",
              "level": "Mediu",
              "type": "mcq",
              "description": "Ce număr de câmpuri are al doilea rând de date din fragmentul CSV?",
              "statementCodeLanguage": "text",
              "statementCode": "nume,scor\n\"Popescu, Ana\",91\n",
              "options": [
                "1",
                "2",
                "3",
                "4"
              ],
              "answerIndex": 1,
              "explanation": "Virgula din câmpul între ghilimele nu este separator.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span>nume,scor\n&quot;Popescu, Ana&quot;,91\n</pre></div>\n"
            },
            {
              "title": "CSV · Citirea robustă",
              "level": "Dificil",
              "description": "Primești un fișier cu antetul id,scor. Calculează media scorurilor valide, ignorând câmpurile goale sau neconvertibile, și precizează câte rânduri au fost ignorate.",
              "hint": "Citește cu `csv.DictReader()` și gestionează separat excepțiile conversiei la `float`.",
              "hintCode": "try:\n    x = float(rand[\"scor\"].strip())\nexcept (ValueError, TypeError):\n    ignorate += 1\n",
              "solutionCode": "import csv\n\nsuma = 0.0\nnumar = 0\nignorate = 0\nwith open(\"date.csv\", encoding=\"utf-8\", newline=\"\") as fin:\n    for rand in csv.DictReader(fin):\n        try:\n            scor = float(rand[\"scor\"].strip())\n        except (TypeError, ValueError, AttributeError):\n            ignorate += 1\n            continue\n        suma += scor\n        numar += 1\nprint(f\"Media: {suma / numar:.2f}\" if numar else \"Fără scoruri valide\")\nprint(f\"Rânduri ignorate: {ignorate}\")\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">try</span><span class=\"p\">:</span>\n    <span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"n\">rand</span><span class=\"p\">[</span><span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">strip</span><span class=\"p\">())</span>\n<span class=\"k\">except</span> <span class=\"p\">(</span><span class=\"ne\">ValueError</span><span class=\"p\">,</span> <span class=\"ne\">TypeError</span><span class=\"p\">):</span>\n    <span class=\"n\">ignorate</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n</pre></div>\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">csv</span>\n\n<span class=\"n\">suma</span> <span class=\"o\">=</span> <span class=\"mf\">0.0</span>\n<span class=\"n\">numar</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n<span class=\"n\">ignorate</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;date.csv&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">,</span> <span class=\"n\">newline</span><span class=\"o\">=</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">fin</span><span class=\"p\">:</span>\n    <span class=\"k\">for</span> <span class=\"n\">rand</span> <span class=\"ow\">in</span> <span class=\"n\">csv</span><span class=\"o\">.</span><span class=\"n\">DictReader</span><span class=\"p\">(</span><span class=\"n\">fin</span><span class=\"p\">):</span>\n        <span class=\"k\">try</span><span class=\"p\">:</span>\n            <span class=\"n\">scor</span> <span class=\"o\">=</span> <span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"n\">rand</span><span class=\"p\">[</span><span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">strip</span><span class=\"p\">())</span>\n        <span class=\"k\">except</span> <span class=\"p\">(</span><span class=\"ne\">TypeError</span><span class=\"p\">,</span> <span class=\"ne\">ValueError</span><span class=\"p\">,</span> <span class=\"ne\">AttributeError</span><span class=\"p\">):</span>\n            <span class=\"n\">ignorate</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n            <span class=\"k\">continue</span>\n        <span class=\"n\">suma</span> <span class=\"o\">+=</span> <span class=\"n\">scor</span>\n        <span class=\"n\">numar</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"sa\">f</span><span class=\"s2\">&quot;Media: </span><span class=\"si\">{</span><span class=\"n\">suma</span><span class=\"w\"> </span><span class=\"o\">/</span><span class=\"w\"> </span><span class=\"n\">numar</span><span class=\"si\">:</span><span class=\"s2\">.2f</span><span class=\"si\">}</span><span class=\"s2\">&quot;</span> <span class=\"k\">if</span> <span class=\"n\">numar</span> <span class=\"k\">else</span> <span class=\"s2\">&quot;Fără scoruri valide&quot;</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"sa\">f</span><span class=\"s2\">&quot;Rânduri ignorate: </span><span class=\"si\">{</span><span class=\"n\">ignorate</span><span class=\"si\">}</span><span class=\"s2\">&quot;</span><span class=\"p\">)</span>\n</pre></div>\n"
            }
          ]
        },
        {
          "id": "sectiunea-1-3",
          "number": "1.3",
          "title": "Vizualizarea datelor cu Matplotlib și Seaborn",
          "stage": "general",
          "summary": "Lecție ilustrată despre Matplotlib și Seaborn: reprezentări, personalizarea figurilor, EDA, exemple pentru IA, trei notebookuri selectate și exerciții cu indicii și soluții.",
          "objectives": [
            "Construiești figuri folosind modelul Figure / Axes și reprezinți grafice liniare, scatter, bare și histograme.",
            "Alegi reprezentarea potrivită pentru distribuții, clase, corelații și curbele de învățare.",
            "Folosești Seaborn cu Pandas pentru relații, distribuții, categorii, pairplot și heatmap.",
            "Personalizezi și salvezi grafice lizibile și interpretezi critic ceea ce arată ele."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs ilustrat: Matplotlib și Seaborn",
              "src": "content/matplotlib-seaborn-onia.html",
              "standalone": "content/matplotlib-seaborn-onia-standalone.html"
            },
            {
              "type": "prose",
              "title": "Notebookuri și resurse de aprofundare",
              "html": "<p>Pentru consultarea notebookurilor originale, folosește paginile autorilor. Materialele ONIA de mai sus conțin explicațiile și exemplele necesare acestei secțiuni.</p><ul><li><a href=\"https://github.com/mrdbourke/zero-to-mastery-ml\" target=\"_blank\" rel=\"noopener noreferrer\">Matplotlib — notebook și exerciții</a> — Daniel Bourke — cursul Zero to Mastery Machine Learning</li><li><a href=\"https://github.com/jakevdp/PythonDataScienceHandbook/blob/master/notebooks/04.14-Visualization-With-Seaborn.ipynb\" target=\"_blank\" rel=\"noopener noreferrer\">Seaborn — tutorial de vizualizare</a> — Jake VanderPlas — Python Data Science Handbook</li></ul>"
            }
          ],
          "exercises": [
            {
              "title": "Primul grafic cu fig și ax",
              "level": "Ușor",
              "description": "Reprezintă punctele X=[1,2,3,4,5] și Y=[2,5,3,6,8] într-un grafic liniar. Adaugă titlu, etichete pe axe, marcatori și exportă imaginea ca PNG.",
              "hint": "Utilizează `plt.subplots()`, `ax.plot()`, `ax.set()` și `fig.savefig()`.",
              "solutionText": "Exercițiu adaptat din caietul matplotlib-exercises.ipynb.",
              "solutionCode": "import matplotlib.pyplot as plt\nX = [1, 2, 3, 4, 5]\nY = [2, 5, 3, 6, 8]\nfig, ax = plt.subplots(figsize=(7, 4))\nax.plot(X, Y, marker=\"o\")\nax.set(title=\"Evoluția scorului\", xlabel=\"Pas\", ylabel=\"Scor\")\nfig.savefig(\"grafic.png\", dpi=160, bbox_inches=\"tight\")\nplt.show()",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">]</span>\n<span class=\"n\">Y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"mi\">8</span><span class=\"p\">]</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">ax</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">(</span><span class=\"n\">figsize</span><span class=\"o\">=</span><span class=\"p\">(</span><span class=\"mi\">7</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">))</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">plot</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">Y</span><span class=\"p\">,</span> <span class=\"n\">marker</span><span class=\"o\">=</span><span class=\"s2\">&quot;o&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">set</span><span class=\"p\">(</span><span class=\"n\">title</span><span class=\"o\">=</span><span class=\"s2\">&quot;Evoluția scorului&quot;</span><span class=\"p\">,</span> <span class=\"n\">xlabel</span><span class=\"o\">=</span><span class=\"s2\">&quot;Pas&quot;</span><span class=\"p\">,</span> <span class=\"n\">ylabel</span><span class=\"o\">=</span><span class=\"s2\">&quot;Scor&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">fig</span><span class=\"o\">.</span><span class=\"n\">savefig</span><span class=\"p\">(</span><span class=\"s2\">&quot;grafic.png&quot;</span><span class=\"p\">,</span> <span class=\"n\">dpi</span><span class=\"o\">=</span><span class=\"mi\">160</span><span class=\"p\">,</span> <span class=\"n\">bbox_inches</span><span class=\"o\">=</span><span class=\"s2\">&quot;tight&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Graficul funcției pătrat",
              "level": "Ușor",
              "description": "Generează valorile x de la -5 la 5 cu pasul 1. Reprezintă funcția y=x² cu o linie și marchează originea.",
              "hint": "Pentru `NumPy` folosește `np.arange(-5, 6)`; punctele pot fi marcate cu `marker=\"o\"`.",
              "solutionText": "Adaptare a exercițiului „plot X versus X²” din caietul atașat.",
              "solutionCode": "import numpy as np\nimport matplotlib.pyplot as plt\nx = np.arange(-5, 6)\ny = x ** 2\nfig, ax = plt.subplots()\nax.plot(x, y, marker=\"o\")\nax.scatter([0], [0], color=\"red\", zorder=3)\nax.set(xlabel=\"x\", ylabel=\"x²\", title=\"Funcția pătrat\")\nplt.show()",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">arange</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">)</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">x</span> <span class=\"o\">**</span> <span class=\"mi\">2</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">ax</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">()</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">plot</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">marker</span><span class=\"o\">=</span><span class=\"s2\">&quot;o&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">scatter</span><span class=\"p\">([</span><span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"n\">color</span><span class=\"o\">=</span><span class=\"s2\">&quot;red&quot;</span><span class=\"p\">,</span> <span class=\"n\">zorder</span><span class=\"o\">=</span><span class=\"mi\">3</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">set</span><span class=\"p\">(</span><span class=\"n\">xlabel</span><span class=\"o\">=</span><span class=\"s2\">&quot;x&quot;</span><span class=\"p\">,</span> <span class=\"n\">ylabel</span><span class=\"o\">=</span><span class=\"s2\">&quot;x²&quot;</span><span class=\"p\">,</span> <span class=\"n\">title</span><span class=\"o\">=</span><span class=\"s2\">&quot;Funcția pătrat&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Alegerea numărului de intervale",
              "level": "Ușor",
              "description": "La o histogramă cu date fixe, mărim numărul de intervale de la 5 la 30. Ce afirmație este corectă?",
              "hint": "Parametrul `bins` controlează gruparea observațiilor, nu valorile lor.",
              "type": "mcq",
              "options": [
                "Numărul observațiilor crește.",
                "Aspectul histogramei se poate modifica, dar datele sunt aceleași.",
                "Histograma devine o diagramă cu bare pentru categorii.",
                "Media se modifică automat."
              ],
              "answerIndex": 1,
              "explanation": "Parametrul bins grupează aceleași observații în intervale de lungimi diferite; valorile originale rămân neschimbate."
            },
            {
              "title": "Histogramă reproductibilă",
              "level": "Ușor",
              "description": "Generează 1000 de numere cu distribuție normală folosind un generator cu sămânță fixă. Afișează histograma cu 25 de intervale și linia verticală pentru medie.",
              "hint": "Folosește `np.random.default_rng(42)` și `ax.axvline()`.",
              "solutionCode": "import numpy as np\nimport matplotlib.pyplot as plt\nrng = np.random.default_rng(42)\nx = rng.normal(loc=0, scale=1, size=1000)\nfig, ax = plt.subplots()\nax.hist(x, bins=25, edgecolor=\"white\")\nax.axvline(x.mean(), color=\"red\", linestyle=\"--\",\n           label=\"Media\")\nax.set(title=\"Distribuție normală\", xlabel=\"Valoare\")\nax.legend()\nplt.show()",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">rng</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">random</span><span class=\"o\">.</span><span class=\"n\">default_rng</span><span class=\"p\">(</span><span class=\"mi\">42</span><span class=\"p\">)</span>\n<span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"n\">rng</span><span class=\"o\">.</span><span class=\"n\">normal</span><span class=\"p\">(</span><span class=\"n\">loc</span><span class=\"o\">=</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"n\">scale</span><span class=\"o\">=</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"n\">size</span><span class=\"o\">=</span><span class=\"mi\">1000</span><span class=\"p\">)</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">ax</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">()</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">hist</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">bins</span><span class=\"o\">=</span><span class=\"mi\">25</span><span class=\"p\">,</span> <span class=\"n\">edgecolor</span><span class=\"o\">=</span><span class=\"s2\">&quot;white&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">axvline</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"o\">.</span><span class=\"n\">mean</span><span class=\"p\">(),</span> <span class=\"n\">color</span><span class=\"o\">=</span><span class=\"s2\">&quot;red&quot;</span><span class=\"p\">,</span> <span class=\"n\">linestyle</span><span class=\"o\">=</span><span class=\"s2\">&quot;--&quot;</span><span class=\"p\">,</span>\n           <span class=\"n\">label</span><span class=\"o\">=</span><span class=\"s2\">&quot;Media&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">set</span><span class=\"p\">(</span><span class=\"n\">title</span><span class=\"o\">=</span><span class=\"s2\">&quot;Distribuție normală&quot;</span><span class=\"p\">,</span> <span class=\"n\">xlabel</span><span class=\"o\">=</span><span class=\"s2\">&quot;Valoare&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">legend</span><span class=\"p\">()</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Clase dezechilibrate",
              "level": "Ușor",
              "description": "Avem 80 exemple din clasa A, 15 din B și 5 din C. Construiește un bar chart și calculează ponderea clasei C în total.",
              "hint": "Pentru calculul ponderii folosește `numar_C / sum(frecvente)`.",
              "solutionText": "Ponderea clasei C este 5 / 100 = 5%.",
              "solutionCode": "import matplotlib.pyplot as plt\nclase = [\"A\", \"B\", \"C\"]\nfrecvente = [80, 15, 5]\nfig, ax = plt.subplots()\nax.bar(clase, frecvente)\nax.set(title=\"Distribuția claselor\", ylabel=\"Observații\")\nplt.show()\nprint(f\"Clasa C: {frecvente[2] / sum(frecvente):.0%}\")",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">clase</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;A&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;B&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;C&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">frecvente</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">80</span><span class=\"p\">,</span> <span class=\"mi\">15</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">]</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">ax</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">()</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">bar</span><span class=\"p\">(</span><span class=\"n\">clase</span><span class=\"p\">,</span> <span class=\"n\">frecvente</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">set</span><span class=\"p\">(</span><span class=\"n\">title</span><span class=\"o\">=</span><span class=\"s2\">&quot;Distribuția claselor&quot;</span><span class=\"p\">,</span> <span class=\"n\">ylabel</span><span class=\"o\">=</span><span class=\"s2\">&quot;Observații&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"sa\">f</span><span class=\"s2\">&quot;Clasa C: </span><span class=\"si\">{</span><span class=\"n\">frecvente</span><span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">]</span><span class=\"w\"> </span><span class=\"o\">/</span><span class=\"w\"> </span><span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">frecvente</span><span class=\"p\">)</span><span class=\"si\">:</span><span class=\"s2\">.0%</span><span class=\"si\">}</span><span class=\"s2\">&quot;</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Grafic de dispersie și clasificare",
              "level": "Mediu",
              "description": "Folosește datele de mai jos și reprezintă un scatter plot cu câte o culoare pentru fiecare clasă. Adaugă legenda.",
              "hint": "Separă observațiile folosind o mască booleană NumPy sau apelează `sns.scatterplot` cu `hue=`.",
              "statementCode": "X = [1.0, 1.5, 2.0, 4.0, 4.5, 5.0]\nY = [2.0, 2.6, 2.3, 4.1, 4.8, 4.4]\netichete = [0, 0, 0, 1, 1, 1]",
              "solutionCode": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nX = [1.0, 1.5, 2.0, 4.0, 4.5, 5.0]\nY = [2.0, 2.6, 2.3, 4.1, 4.8, 4.4]\netichete = [0, 0, 0, 1, 1, 1]\ndf = pd.DataFrame({\"X\": X, \"Y\": Y, \"clasă\": etichete})\nfig, ax = plt.subplots()\nsns.scatterplot(data=df, x=\"X\", y=\"Y\", hue=\"clasă\",\n                palette=\"Set2\", s=85, ax=ax)\nax.set_title(\"Date grupate pe clase\")\nplt.show()",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">1.0</span><span class=\"p\">,</span> <span class=\"mf\">1.5</span><span class=\"p\">,</span> <span class=\"mf\">2.0</span><span class=\"p\">,</span> <span class=\"mf\">4.0</span><span class=\"p\">,</span> <span class=\"mf\">4.5</span><span class=\"p\">,</span> <span class=\"mf\">5.0</span><span class=\"p\">]</span>\n<span class=\"n\">Y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">2.0</span><span class=\"p\">,</span> <span class=\"mf\">2.6</span><span class=\"p\">,</span> <span class=\"mf\">2.3</span><span class=\"p\">,</span> <span class=\"mf\">4.1</span><span class=\"p\">,</span> <span class=\"mf\">4.8</span><span class=\"p\">,</span> <span class=\"mf\">4.4</span><span class=\"p\">]</span>\n<span class=\"n\">etichete</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n</pre></div>\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">seaborn</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">sns</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">1.0</span><span class=\"p\">,</span> <span class=\"mf\">1.5</span><span class=\"p\">,</span> <span class=\"mf\">2.0</span><span class=\"p\">,</span> <span class=\"mf\">4.0</span><span class=\"p\">,</span> <span class=\"mf\">4.5</span><span class=\"p\">,</span> <span class=\"mf\">5.0</span><span class=\"p\">]</span>\n<span class=\"n\">Y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">2.0</span><span class=\"p\">,</span> <span class=\"mf\">2.6</span><span class=\"p\">,</span> <span class=\"mf\">2.3</span><span class=\"p\">,</span> <span class=\"mf\">4.1</span><span class=\"p\">,</span> <span class=\"mf\">4.8</span><span class=\"p\">,</span> <span class=\"mf\">4.4</span><span class=\"p\">]</span>\n<span class=\"n\">etichete</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span><span class=\"s2\">&quot;X&quot;</span><span class=\"p\">:</span> <span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"s2\">&quot;Y&quot;</span><span class=\"p\">:</span> <span class=\"n\">Y</span><span class=\"p\">,</span> <span class=\"s2\">&quot;clasă&quot;</span><span class=\"p\">:</span> <span class=\"n\">etichete</span><span class=\"p\">})</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">ax</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">()</span>\n<span class=\"n\">sns</span><span class=\"o\">.</span><span class=\"n\">scatterplot</span><span class=\"p\">(</span><span class=\"n\">data</span><span class=\"o\">=</span><span class=\"n\">df</span><span class=\"p\">,</span> <span class=\"n\">x</span><span class=\"o\">=</span><span class=\"s2\">&quot;X&quot;</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"o\">=</span><span class=\"s2\">&quot;Y&quot;</span><span class=\"p\">,</span> <span class=\"n\">hue</span><span class=\"o\">=</span><span class=\"s2\">&quot;clasă&quot;</span><span class=\"p\">,</span>\n                <span class=\"n\">palette</span><span class=\"o\">=</span><span class=\"s2\">&quot;Set2&quot;</span><span class=\"p\">,</span> <span class=\"n\">s</span><span class=\"o\">=</span><span class=\"mi\">85</span><span class=\"p\">,</span> <span class=\"n\">ax</span><span class=\"o\">=</span><span class=\"n\">ax</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">set_title</span><span class=\"p\">(</span><span class=\"s2\">&quot;Date grupate pe clase&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Countplot sau barplot?",
              "level": "Ușor",
              "description": "Dorești să afișezi numărul elevilor din fiecare oraș pornind de la un DataFrame care conține o coloană `oras`. Ce funcție Seaborn folosești?",
              "hint": "Nu există coloană numerică de agregat, doar etichete de categorie.",
              "type": "mcq",
              "options": [
                "sns.barplot(data=df, x=\"oras\")",
                "sns.countplot(data=df, x=\"oras\")",
                "sns.heatmap(df)",
                "sns.kdeplot(data=df, x=\"oras\")"
              ],
              "answerIndex": 1,
              "explanation": "countplot numără observațiile din fiecare categorie. barplot agregă o variabilă numerică, de regulă media."
            },
            {
              "title": "Patru subplot-uri",
              "level": "Mediu",
              "description": "Construiește un tablou de figuri 2×2: linie, scatter, histogramă și bare, pe date sintetice simple. Fiecare panou să aibă propriul titlu.",
              "hint": "Indexarea este `axs[linie, coloană]` pentru `plt.subplots(2, 2)`.",
              "solutionText": "Adaptare a exercițiului despre figura cu 4 panouri din caietul matplotlib-exercises.ipynb.",
              "solutionCode": "import numpy as np\nimport matplotlib.pyplot as plt\nx = np.arange(1, 6)\nfig, axs = plt.subplots(2, 2, figsize=(9, 7),\n                        constrained_layout=True)\naxs[0, 0].plot(x, x**2)\naxs[0, 0].set_title(\"Linie\")\naxs[0, 1].scatter(x, x**2)\naxs[0, 1].set_title(\"Scatter\")\naxs[1, 0].hist([2, 3, 4, 4, 5, 5, 5], bins=4)\naxs[1, 0].set_title(\"Histogramă\")\naxs[1, 1].bar([\"A\", \"B\", \"C\"], [3, 8, 5])\naxs[1, 1].set_title(\"Bare\")\nplt.show()",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">arange</span><span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">)</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">axs</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">(</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"n\">figsize</span><span class=\"o\">=</span><span class=\"p\">(</span><span class=\"mi\">9</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">),</span>\n                        <span class=\"n\">constrained_layout</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">plot</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">x</span><span class=\"o\">**</span><span class=\"mi\">2</span><span class=\"p\">)</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">set_title</span><span class=\"p\">(</span><span class=\"s2\">&quot;Linie&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">scatter</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">x</span><span class=\"o\">**</span><span class=\"mi\">2</span><span class=\"p\">)</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">set_title</span><span class=\"p\">(</span><span class=\"s2\">&quot;Scatter&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">hist</span><span class=\"p\">([</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">],</span> <span class=\"n\">bins</span><span class=\"o\">=</span><span class=\"mi\">4</span><span class=\"p\">)</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">set_title</span><span class=\"p\">(</span><span class=\"s2\">&quot;Histogramă&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">bar</span><span class=\"p\">([</span><span class=\"s2\">&quot;A&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;B&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;C&quot;</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">8</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">])</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">set_title</span><span class=\"p\">(</span><span class=\"s2\">&quot;Bare&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Curbe de antrenare și validare",
              "level": "Mediu",
              "description": "Codul conține valorile pierderii după 7 epoci. Reprezintă ambele curbe și identifică prima epocă după care pierderea pe validare începe să crească.",
              "hint": "Compară valorile adiacente din `valid`; caută primul indice `i` pentru care `valid[i] > valid[i-1]`.",
              "solutionText": "Prima creștere apare la epoca 5 (după minimul de la epoca 4). Aceasta poate fi un indiciu de overfitting.",
              "statementCode": "train = [0.90, 0.70, 0.55, 0.42, 0.33, 0.28, 0.23]\nvalid = [0.88, 0.74, 0.62, 0.56, 0.58, 0.63, 0.72]",
              "solutionCode": "import matplotlib.pyplot as plt\ntrain = [0.90, 0.70, 0.55, 0.42, 0.33, 0.28, 0.23]\nvalid = [0.88, 0.74, 0.62, 0.56, 0.58, 0.63, 0.72]\nepoci = range(1, len(train) + 1)\nfig, ax = plt.subplots()\nax.plot(epoci, train, marker=\"o\", label=\"Antrenare\")\nax.plot(epoci, valid, marker=\"s\", label=\"Validare\")\nax.set(xlabel=\"Epocă\", ylabel=\"Pierdere\")\nax.legend()\nplt.show()",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">train</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">0.90</span><span class=\"p\">,</span> <span class=\"mf\">0.70</span><span class=\"p\">,</span> <span class=\"mf\">0.55</span><span class=\"p\">,</span> <span class=\"mf\">0.42</span><span class=\"p\">,</span> <span class=\"mf\">0.33</span><span class=\"p\">,</span> <span class=\"mf\">0.28</span><span class=\"p\">,</span> <span class=\"mf\">0.23</span><span class=\"p\">]</span>\n<span class=\"n\">valid</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">0.88</span><span class=\"p\">,</span> <span class=\"mf\">0.74</span><span class=\"p\">,</span> <span class=\"mf\">0.62</span><span class=\"p\">,</span> <span class=\"mf\">0.56</span><span class=\"p\">,</span> <span class=\"mf\">0.58</span><span class=\"p\">,</span> <span class=\"mf\">0.63</span><span class=\"p\">,</span> <span class=\"mf\">0.72</span><span class=\"p\">]</span>\n</pre></div>\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">train</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">0.90</span><span class=\"p\">,</span> <span class=\"mf\">0.70</span><span class=\"p\">,</span> <span class=\"mf\">0.55</span><span class=\"p\">,</span> <span class=\"mf\">0.42</span><span class=\"p\">,</span> <span class=\"mf\">0.33</span><span class=\"p\">,</span> <span class=\"mf\">0.28</span><span class=\"p\">,</span> <span class=\"mf\">0.23</span><span class=\"p\">]</span>\n<span class=\"n\">valid</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">0.88</span><span class=\"p\">,</span> <span class=\"mf\">0.74</span><span class=\"p\">,</span> <span class=\"mf\">0.62</span><span class=\"p\">,</span> <span class=\"mf\">0.56</span><span class=\"p\">,</span> <span class=\"mf\">0.58</span><span class=\"p\">,</span> <span class=\"mf\">0.63</span><span class=\"p\">,</span> <span class=\"mf\">0.72</span><span class=\"p\">]</span>\n<span class=\"n\">epoci</span> <span class=\"o\">=</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">train</span><span class=\"p\">)</span> <span class=\"o\">+</span> <span class=\"mi\">1</span><span class=\"p\">)</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">ax</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">()</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">plot</span><span class=\"p\">(</span><span class=\"n\">epoci</span><span class=\"p\">,</span> <span class=\"n\">train</span><span class=\"p\">,</span> <span class=\"n\">marker</span><span class=\"o\">=</span><span class=\"s2\">&quot;o&quot;</span><span class=\"p\">,</span> <span class=\"n\">label</span><span class=\"o\">=</span><span class=\"s2\">&quot;Antrenare&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">plot</span><span class=\"p\">(</span><span class=\"n\">epoci</span><span class=\"p\">,</span> <span class=\"n\">valid</span><span class=\"p\">,</span> <span class=\"n\">marker</span><span class=\"o\">=</span><span class=\"s2\">&quot;s&quot;</span><span class=\"p\">,</span> <span class=\"n\">label</span><span class=\"o\">=</span><span class=\"s2\">&quot;Validare&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">set</span><span class=\"p\">(</span><span class=\"n\">xlabel</span><span class=\"o\">=</span><span class=\"s2\">&quot;Epocă&quot;</span><span class=\"p\">,</span> <span class=\"n\">ylabel</span><span class=\"o\">=</span><span class=\"s2\">&quot;Pierdere&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">legend</span><span class=\"p\">()</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Densități cu Seaborn",
              "level": "Mediu",
              "description": "Construiește un grafic Seaborn care compară distribuțiile a două grupe de scoruri, folosind culori distincte și histograme cu densitate.",
              "hint": "Tabelul trebuie să aibă coloanele `scor` și `grup`; folosește `sns.histplot(..., hue=\"grup\", stat=\"density\", common_norm=False)`.",
              "solutionCode": "import numpy as np\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nrng = np.random.default_rng(7)\ndf = pd.DataFrame({\n    \"scor\": np.r_[rng.normal(70, 10, 120),\n                 rng.normal(80, 7, 120)],\n    \"grup\": [\"A\"] * 120 + [\"B\"] * 120\n})\nsns.histplot(data=df, x=\"scor\", hue=\"grup\",\n             bins=18, stat=\"density\", common_norm=False,\n             alpha=0.45)\nplt.show()",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">seaborn</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">sns</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">rng</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">random</span><span class=\"o\">.</span><span class=\"n\">default_rng</span><span class=\"p\">(</span><span class=\"mi\">7</span><span class=\"p\">)</span>\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span>\n    <span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">:</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">r_</span><span class=\"p\">[</span><span class=\"n\">rng</span><span class=\"o\">.</span><span class=\"n\">normal</span><span class=\"p\">(</span><span class=\"mi\">70</span><span class=\"p\">,</span> <span class=\"mi\">10</span><span class=\"p\">,</span> <span class=\"mi\">120</span><span class=\"p\">),</span>\n                 <span class=\"n\">rng</span><span class=\"o\">.</span><span class=\"n\">normal</span><span class=\"p\">(</span><span class=\"mi\">80</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">,</span> <span class=\"mi\">120</span><span class=\"p\">)],</span>\n    <span class=\"s2\">&quot;grup&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;A&quot;</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"mi\">120</span> <span class=\"o\">+</span> <span class=\"p\">[</span><span class=\"s2\">&quot;B&quot;</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"mi\">120</span>\n<span class=\"p\">})</span>\n<span class=\"n\">sns</span><span class=\"o\">.</span><span class=\"n\">histplot</span><span class=\"p\">(</span><span class=\"n\">data</span><span class=\"o\">=</span><span class=\"n\">df</span><span class=\"p\">,</span> <span class=\"n\">x</span><span class=\"o\">=</span><span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">,</span> <span class=\"n\">hue</span><span class=\"o\">=</span><span class=\"s2\">&quot;grup&quot;</span><span class=\"p\">,</span>\n             <span class=\"n\">bins</span><span class=\"o\">=</span><span class=\"mi\">18</span><span class=\"p\">,</span> <span class=\"n\">stat</span><span class=\"o\">=</span><span class=\"s2\">&quot;density&quot;</span><span class=\"p\">,</span> <span class=\"n\">common_norm</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">,</span>\n             <span class=\"n\">alpha</span><span class=\"o\">=</span><span class=\"mf\">0.45</span><span class=\"p\">)</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Boxplot: două modele",
              "level": "Mediu",
              "description": "Reprezintă distribuția scorurilor pentru modelele A și B din datele de mai jos. Arată pe grafic mediana și explică de ce media nu este suficientă.",
              "hint": "Grupează listele într-un DataFrame, apoi folosește `sns.boxplot(data=df)`.",
              "solutionText": "Ambele modele pot avea medii apropiate, dar dispersii diferite. O comparație riguroasă ar avea nevoie de mai multe experimente.",
              "statementCode": "scor_A = [0.79, 0.81, 0.84, 0.85, 0.86]\nscor_B = [0.70, 0.83, 0.85, 0.90, 0.94]",
              "solutionCode": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ndf = pd.DataFrame({\n    \"Model A\": [0.79, 0.81, 0.84, 0.85, 0.86],\n    \"Model B\": [0.70, 0.83, 0.85, 0.90, 0.94]\n})\nfig, ax = plt.subplots()\nsns.boxplot(data=df, ax=ax)\nax.set(ylabel=\"Scor\", title=\"Variabilitatea scorurilor\")\nplt.show()",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">scor_A</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">0.79</span><span class=\"p\">,</span> <span class=\"mf\">0.81</span><span class=\"p\">,</span> <span class=\"mf\">0.84</span><span class=\"p\">,</span> <span class=\"mf\">0.85</span><span class=\"p\">,</span> <span class=\"mf\">0.86</span><span class=\"p\">]</span>\n<span class=\"n\">scor_B</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">0.70</span><span class=\"p\">,</span> <span class=\"mf\">0.83</span><span class=\"p\">,</span> <span class=\"mf\">0.85</span><span class=\"p\">,</span> <span class=\"mf\">0.90</span><span class=\"p\">,</span> <span class=\"mf\">0.94</span><span class=\"p\">]</span>\n</pre></div>\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">seaborn</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">sns</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span>\n    <span class=\"s2\">&quot;Model A&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mf\">0.79</span><span class=\"p\">,</span> <span class=\"mf\">0.81</span><span class=\"p\">,</span> <span class=\"mf\">0.84</span><span class=\"p\">,</span> <span class=\"mf\">0.85</span><span class=\"p\">,</span> <span class=\"mf\">0.86</span><span class=\"p\">],</span>\n    <span class=\"s2\">&quot;Model B&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mf\">0.70</span><span class=\"p\">,</span> <span class=\"mf\">0.83</span><span class=\"p\">,</span> <span class=\"mf\">0.85</span><span class=\"p\">,</span> <span class=\"mf\">0.90</span><span class=\"p\">,</span> <span class=\"mf\">0.94</span><span class=\"p\">]</span>\n<span class=\"p\">})</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">ax</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">()</span>\n<span class=\"n\">sns</span><span class=\"o\">.</span><span class=\"n\">boxplot</span><span class=\"p\">(</span><span class=\"n\">data</span><span class=\"o\">=</span><span class=\"n\">df</span><span class=\"p\">,</span> <span class=\"n\">ax</span><span class=\"o\">=</span><span class=\"n\">ax</span><span class=\"p\">)</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">set</span><span class=\"p\">(</span><span class=\"n\">ylabel</span><span class=\"o\">=</span><span class=\"s2\">&quot;Scor&quot;</span><span class=\"p\">,</span> <span class=\"n\">title</span><span class=\"o\">=</span><span class=\"s2\">&quot;Variabilitatea scorurilor&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Corelație și cauzalitate",
              "level": "Ușor",
              "description": "Care dintre următoarele afirmații este justificată de o matrice de corelație Pearson cu valoarea 0,9 între A și B?",
              "hint": "Coeficientul Pearson nu demonstrează cauzalitatea.",
              "type": "mcq",
              "options": [
                "A determină în mod sigur valoarea lui B.",
                "A și B au o asociere liniară pozitivă puternică în eșantion.",
                "A și B sunt independente.",
                "Un model bazat pe A va avea obligatoriu acuratețe 90%."
              ],
              "answerIndex": 1,
              "explanation": "Coeficientul Pearson măsoară asocierea liniară; nu oferă o dovadă cauzală și nici o metrică directă a calității unui clasificator."
            },
            {
              "title": "Heatmap dintr-un DataFrame",
              "level": "Mediu",
              "description": "Creează trei caracteristici numerice, dintre care a doua este corelată cu prima, și reprezintă matricea de corelații. Afișează valorile cu două zecimale.",
              "hint": "Folosește `df.corr()` și `sns.heatmap(..., annot=True, fmt=\".2f\", vmin=-1, vmax=1)`.",
              "solutionCode": "import numpy as np\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nrng = np.random.default_rng(5)\nx = rng.normal(size=100)\ndf = pd.DataFrame({\n    \"X\": x,\n    \"Y\": x + rng.normal(scale=0.3, size=100),\n    \"Z\": rng.normal(size=100)\n})\nfig, ax = plt.subplots()\nsns.heatmap(df.corr(), annot=True, fmt=\".2f\",\n            cmap=\"coolwarm\", center=0, vmin=-1, vmax=1,\n            ax=ax)\nplt.show()",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">seaborn</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">sns</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">rng</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">random</span><span class=\"o\">.</span><span class=\"n\">default_rng</span><span class=\"p\">(</span><span class=\"mi\">5</span><span class=\"p\">)</span>\n<span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"n\">rng</span><span class=\"o\">.</span><span class=\"n\">normal</span><span class=\"p\">(</span><span class=\"n\">size</span><span class=\"o\">=</span><span class=\"mi\">100</span><span class=\"p\">)</span>\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span>\n    <span class=\"s2\">&quot;X&quot;</span><span class=\"p\">:</span> <span class=\"n\">x</span><span class=\"p\">,</span>\n    <span class=\"s2\">&quot;Y&quot;</span><span class=\"p\">:</span> <span class=\"n\">x</span> <span class=\"o\">+</span> <span class=\"n\">rng</span><span class=\"o\">.</span><span class=\"n\">normal</span><span class=\"p\">(</span><span class=\"n\">scale</span><span class=\"o\">=</span><span class=\"mf\">0.3</span><span class=\"p\">,</span> <span class=\"n\">size</span><span class=\"o\">=</span><span class=\"mi\">100</span><span class=\"p\">),</span>\n    <span class=\"s2\">&quot;Z&quot;</span><span class=\"p\">:</span> <span class=\"n\">rng</span><span class=\"o\">.</span><span class=\"n\">normal</span><span class=\"p\">(</span><span class=\"n\">size</span><span class=\"o\">=</span><span class=\"mi\">100</span><span class=\"p\">)</span>\n<span class=\"p\">})</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">ax</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">()</span>\n<span class=\"n\">sns</span><span class=\"o\">.</span><span class=\"n\">heatmap</span><span class=\"p\">(</span><span class=\"n\">df</span><span class=\"o\">.</span><span class=\"n\">corr</span><span class=\"p\">(),</span> <span class=\"n\">annot</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">,</span> <span class=\"n\">fmt</span><span class=\"o\">=</span><span class=\"s2\">&quot;.2f&quot;</span><span class=\"p\">,</span>\n            <span class=\"n\">cmap</span><span class=\"o\">=</span><span class=\"s2\">&quot;coolwarm&quot;</span><span class=\"p\">,</span> <span class=\"n\">center</span><span class=\"o\">=</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"n\">vmin</span><span class=\"o\">=-</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"n\">vmax</span><span class=\"o\">=</span><span class=\"mi\">1</span><span class=\"p\">,</span>\n            <span class=\"n\">ax</span><span class=\"o\">=</span><span class=\"n\">ax</span><span class=\"p\">)</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Heatmap: eroare de interpretare",
              "level": "Mediu",
              "description": "O hartă termică arată o corelație Pearson aproape 0 între x și y. Este corect să concluzionăm că între cele două variabile nu există nicio dependență?",
              "hint": "Gândește-te la relația `y = x**2`.",
              "type": "mcq",
              "options": [
                "Da, corelația 0 exclude orice relație.",
                "Nu, poate exista o dependență neliniară.",
                "Da, dacă sunt cel puțin 100 de observații.",
                "Da, dar numai dacă datele sunt normalizate."
              ],
              "answerIndex": 1,
              "explanation": "Exemplu: y = x² pentru x simetric în jurul lui zero poate avea corelație liniară aproape zero, deși y este determinat de x."
            },
            {
              "title": "Filtrarea înainte de pairplot",
              "level": "Dificil",
              "description": "Ai un DataFrame cu 40 de caracteristici numerice și o coloană `clasa`. Construiște un pairplot doar pentru trei caracteristici alese și colorează observațiile după clasă.",
              "hint": "Pentru a evita 40×40 panouri, utilizează parametrul `vars=[...]`.",
              "solutionCode": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ndf = pd.DataFrame({\n    \"f1\": [1, 2, 3, 5, 6, 7],\n    \"f2\": [2, 3, 2, 7, 8, 6],\n    \"f3\": [3, 2, 4, 6, 9, 8],\n    \"clasa\": [\"A\"] * 3 + [\"B\"] * 3\n})\ng = sns.pairplot(df, vars=[\"f1\", \"f2\", \"f3\"],\n                 hue=\"clasa\", diag_kind=\"hist\")\nplt.show()",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">seaborn</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">sns</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span>\n    <span class=\"s2\">&quot;f1&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">],</span>\n    <span class=\"s2\">&quot;f2&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">,</span> <span class=\"mi\">8</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">],</span>\n    <span class=\"s2\">&quot;f3&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"mi\">9</span><span class=\"p\">,</span> <span class=\"mi\">8</span><span class=\"p\">],</span>\n    <span class=\"s2\">&quot;clasa&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;A&quot;</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"mi\">3</span> <span class=\"o\">+</span> <span class=\"p\">[</span><span class=\"s2\">&quot;B&quot;</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"mi\">3</span>\n<span class=\"p\">})</span>\n<span class=\"n\">g</span> <span class=\"o\">=</span> <span class=\"n\">sns</span><span class=\"o\">.</span><span class=\"n\">pairplot</span><span class=\"p\">(</span><span class=\"n\">df</span><span class=\"p\">,</span> <span class=\"nb\">vars</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"s2\">&quot;f1&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;f2&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;f3&quot;</span><span class=\"p\">],</span>\n                 <span class=\"n\">hue</span><span class=\"o\">=</span><span class=\"s2\">&quot;clasa&quot;</span><span class=\"p\">,</span> <span class=\"n\">diag_kind</span><span class=\"o\">=</span><span class=\"s2\">&quot;hist&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Două loturi de validare: facete",
              "level": "Dificil",
              "description": "Reprezintă evoluția erorii pe două loturi de validare, fiecare într-un panou distinct, cu aceeași scară verticală. Folosește `sns.relplot`.",
              "hint": "Utilizează un tabel „long” cu coloanele `epoca`, `pierdere`, `lot`, apoi `col=\"lot\"`.",
              "solutionCode": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ndf = pd.DataFrame({\n    \"epoca\": [1, 2, 3, 4] * 2,\n    \"pierdere\": [.75, .55, .42, .35, .86, .70, .62, .60],\n    \"lot\": [\"A\"] * 4 + [\"B\"] * 4\n})\nsns.relplot(data=df, x=\"epoca\", y=\"pierdere\",\n            col=\"lot\", kind=\"line\", marker=\"o\",\n            facet_kws={\"sharey\": True})\nplt.show()",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">seaborn</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">sns</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span>\n    <span class=\"s2\">&quot;epoca&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"mi\">2</span><span class=\"p\">,</span>\n    <span class=\"s2\">&quot;pierdere&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mf\">.75</span><span class=\"p\">,</span> <span class=\"mf\">.55</span><span class=\"p\">,</span> <span class=\"mf\">.42</span><span class=\"p\">,</span> <span class=\"mf\">.35</span><span class=\"p\">,</span> <span class=\"mf\">.86</span><span class=\"p\">,</span> <span class=\"mf\">.70</span><span class=\"p\">,</span> <span class=\"mf\">.62</span><span class=\"p\">,</span> <span class=\"mf\">.60</span><span class=\"p\">],</span>\n    <span class=\"s2\">&quot;lot&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;A&quot;</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"mi\">4</span> <span class=\"o\">+</span> <span class=\"p\">[</span><span class=\"s2\">&quot;B&quot;</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"mi\">4</span>\n<span class=\"p\">})</span>\n<span class=\"n\">sns</span><span class=\"o\">.</span><span class=\"n\">relplot</span><span class=\"p\">(</span><span class=\"n\">data</span><span class=\"o\">=</span><span class=\"n\">df</span><span class=\"p\">,</span> <span class=\"n\">x</span><span class=\"o\">=</span><span class=\"s2\">&quot;epoca&quot;</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"o\">=</span><span class=\"s2\">&quot;pierdere&quot;</span><span class=\"p\">,</span>\n            <span class=\"n\">col</span><span class=\"o\">=</span><span class=\"s2\">&quot;lot&quot;</span><span class=\"p\">,</span> <span class=\"n\">kind</span><span class=\"o\">=</span><span class=\"s2\">&quot;line&quot;</span><span class=\"p\">,</span> <span class=\"n\">marker</span><span class=\"o\">=</span><span class=\"s2\">&quot;o&quot;</span><span class=\"p\">,</span>\n            <span class=\"n\">facet_kws</span><span class=\"o\">=</span><span class=\"p\">{</span><span class=\"s2\">&quot;sharey&quot;</span><span class=\"p\">:</span> <span class=\"kc\">True</span><span class=\"p\">})</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Analiză EDA din CSV",
              "level": "Dificil",
              "description": "Pornind de la fișierul `datasets/scoruri.csv` inclus în proiect, citește datele cu Pandas, reprezintă scorurile prin bare orizontale și salvează graficul. Observă că o valoare din coloana nume conține virgulă și este încadrată în ghilimele.",
              "hint": "Folosește `pd.read_csv()`; parserul CSV gestionează corect câmpurile încadrate în ghilimele. Pentru bare orizontale: `ax.barh(df[\"elev\"], df[\"scor\"])`.",
              "solutionCode": "import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv(\"datasets/scoruri.csv\")\nfig, ax = plt.subplots(figsize=(8, 4))\nax.barh(df[\"elev\"], df[\"scor\"])\nax.set(title=\"Scoruri pe elevi\", xlabel=\"Scor\")\nfig.savefig(\"scoruri_elevi.png\", dpi=170,\n            bbox_inches=\"tight\")\nplt.show()",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">read_csv</span><span class=\"p\">(</span><span class=\"s2\">&quot;datasets/scoruri.csv&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">ax</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">(</span><span class=\"n\">figsize</span><span class=\"o\">=</span><span class=\"p\">(</span><span class=\"mi\">8</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">))</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">barh</span><span class=\"p\">(</span><span class=\"n\">df</span><span class=\"p\">[</span><span class=\"s2\">&quot;elev&quot;</span><span class=\"p\">],</span> <span class=\"n\">df</span><span class=\"p\">[</span><span class=\"s2\">&quot;scor&quot;</span><span class=\"p\">])</span>\n<span class=\"n\">ax</span><span class=\"o\">.</span><span class=\"n\">set</span><span class=\"p\">(</span><span class=\"n\">title</span><span class=\"o\">=</span><span class=\"s2\">&quot;Scoruri pe elevi&quot;</span><span class=\"p\">,</span> <span class=\"n\">xlabel</span><span class=\"o\">=</span><span class=\"s2\">&quot;Scor&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">fig</span><span class=\"o\">.</span><span class=\"n\">savefig</span><span class=\"p\">(</span><span class=\"s2\">&quot;scoruri_elevi.png&quot;</span><span class=\"p\">,</span> <span class=\"n\">dpi</span><span class=\"o\">=</span><span class=\"mi\">170</span><span class=\"p\">,</span>\n            <span class=\"n\">bbox_inches</span><span class=\"o\">=</span><span class=\"s2\">&quot;tight&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            },
            {
              "title": "Vizualizare densă: scatter versus hexbin",
              "level": "Dificil",
              "description": "Generează 3000 de puncte aleatoare corelate. Compară un scatter cu alpha mic și o reprezentare hexbin. Explică ce detalii devin mai ușor de observat.",
              "hint": "Pentru hexbin utilizează `ax.hexbin(x, y, gridsize=25, mincnt=1)`.",
              "solutionText": "Hexbin evidențiază mai bine zonele dense, mai ales când punctele se suprapun.",
              "solutionCode": "import numpy as np\nimport matplotlib.pyplot as plt\nrng = np.random.default_rng(21)\nx = rng.normal(size=3000)\ny = 0.65 * x + rng.normal(scale=0.55, size=3000)\nfig, axs = plt.subplots(1, 2, figsize=(9, 4),\n                        constrained_layout=True)\naxs[0].scatter(x, y, alpha=0.15, s=7)\naxs[0].set_title(\"Scatter\")\nh = axs[1].hexbin(x, y, gridsize=25, mincnt=1)\naxs[1].set_title(\"Hexbin\")\nfig.colorbar(h, ax=axs[1])\nplt.show()",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">matplotlib.pyplot</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">plt</span>\n<span class=\"n\">rng</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">random</span><span class=\"o\">.</span><span class=\"n\">default_rng</span><span class=\"p\">(</span><span class=\"mi\">21</span><span class=\"p\">)</span>\n<span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"n\">rng</span><span class=\"o\">.</span><span class=\"n\">normal</span><span class=\"p\">(</span><span class=\"n\">size</span><span class=\"o\">=</span><span class=\"mi\">3000</span><span class=\"p\">)</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"mf\">0.65</span> <span class=\"o\">*</span> <span class=\"n\">x</span> <span class=\"o\">+</span> <span class=\"n\">rng</span><span class=\"o\">.</span><span class=\"n\">normal</span><span class=\"p\">(</span><span class=\"n\">scale</span><span class=\"o\">=</span><span class=\"mf\">0.55</span><span class=\"p\">,</span> <span class=\"n\">size</span><span class=\"o\">=</span><span class=\"mi\">3000</span><span class=\"p\">)</span>\n<span class=\"n\">fig</span><span class=\"p\">,</span> <span class=\"n\">axs</span> <span class=\"o\">=</span> <span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">subplots</span><span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"n\">figsize</span><span class=\"o\">=</span><span class=\"p\">(</span><span class=\"mi\">9</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">),</span>\n                        <span class=\"n\">constrained_layout</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">scatter</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">alpha</span><span class=\"o\">=</span><span class=\"mf\">0.15</span><span class=\"p\">,</span> <span class=\"n\">s</span><span class=\"o\">=</span><span class=\"mi\">7</span><span class=\"p\">)</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">set_title</span><span class=\"p\">(</span><span class=\"s2\">&quot;Scatter&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">h</span> <span class=\"o\">=</span> <span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">hexbin</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">gridsize</span><span class=\"o\">=</span><span class=\"mi\">25</span><span class=\"p\">,</span> <span class=\"n\">mincnt</span><span class=\"o\">=</span><span class=\"mi\">1</span><span class=\"p\">)</span>\n<span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">set_title</span><span class=\"p\">(</span><span class=\"s2\">&quot;Hexbin&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">fig</span><span class=\"o\">.</span><span class=\"n\">colorbar</span><span class=\"p\">(</span><span class=\"n\">h</span><span class=\"p\">,</span> <span class=\"n\">ax</span><span class=\"o\">=</span><span class=\"n\">axs</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">])</span>\n<span class=\"n\">plt</span><span class=\"o\">.</span><span class=\"n\">show</span><span class=\"p\">()</span>\n</pre></div>\n"
            }
          ]
        },
        {
          "id": "sectiunea-1-4",
          "number": "1.4",
          "title": "Introducere în scikit-learn",
          "stage": "general",
          "summary": "Introducere practică în scikit-learn: date X/y, estimatori, antrenare, predicție, preprocesare, pipeline, evaluare și validare încrucișată.",
          "objectives": [
            "Reprezinți corect matricea X și vectorul țintă y.",
            "Antrenezi un estimator folosind fit și obții predicții cu predict.",
            "Construiești fluxuri cu train_test_split, StandardScaler și Pipeline fără scurgere de date.",
            "Interpretezi metrici elementare și experimentezi cu validare încrucișată."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Introducere în scikit-learn",
              "src": "content/scikit-learn-onia.html",
              "standalone": "content/scikit-learn-onia-standalone.html"
            }
          ],
          "exercises": [
            {
              "title": "Dimensiunea matricei de caracteristici",
              "level": "Ușor",
              "type": "mcq",
              "description": "Un set are 80 de observații și 5 caracteristici numerice. Ce valoare trebuie să aibă `X.shape`?",
              "options": [
                "(5, 80)",
                "(80, 5)",
                "(80,)",
                "(5,)"
              ],
              "answerIndex": 1,
              "explanation": "Numărul de rânduri este numărul observațiilor, iar coloanele sunt caracteristicile.",
              "hint": "Matricea X are forma (n_samples, n_features)."
            },
            {
              "title": "Predicția unei singure observații",
              "level": "Ușor",
              "type": "mcq",
              "description": "Un clasificator a fost antrenat cu trei caracteristici. Care apel este corect pentru o observație nouă?",
              "options": [
                "model.predict([1, 2, 3])",
                "model.predict([[1, 2, 3]])",
                "model.fit([[1, 2, 3]])",
                "model.predict(1, 2, 3)"
              ],
              "answerIndex": 1,
              "explanation": "predict așteaptă o matrice bidimensională de observații.",
              "hintCode": "# Forma corectă pentru o singură observație\nX_nou = [[1, 2, 3]]\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span class=\"c1\"># Forma corectă pentru o singură observație</span>\n<span class=\"n\">X_nou</span> <span class=\"o\">=</span> <span class=\"p\">[[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">]]</span>\n</pre></div>"
            },
            {
              "title": "Ce face fit?",
              "level": "Ușor",
              "type": "mcq",
              "description": "Alege afirmația corectă despre `model.fit(X_train, y_train)`.",
              "options": [
                "Folosește datele pentru a estima parametrii modelului.",
                "Calculează întotdeauna acuratețea pe test.",
                "Vizualizează automat datele.",
                "Returnează predicțiile pentru X_train."
              ],
              "answerIndex": 0,
              "explanation": "fit este operația de antrenare.",
              "hint": "Compară responsabilitățile metodelor `fit`, `predict` și `score`."
            },
            {
              "title": "Separare stratificată",
              "level": "Mediu",
              "description": "Încarcă Iris și împarte datele în 80% antrenare și 20% testare, păstrând aproximativ proporțiile claselor. Afișează dimensiunile și distribuția claselor în cele două submulțimi.",
              "hint": "Folosește `stratify=y` și `np.bincount`.",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nimport numpy as np\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(\n    X, y, test_size=0.2, stratify=y, random_state=42\n)\nprint(X_tr.shape, X_te.shape)\nprint(np.bincount(y_tr), np.bincount(y_te))\n",
              "solutionText": "Pentru Iris, clasele au câte 50 de observații. Separarea 80/20 produce 40 de exemple/clasă pentru train și 10 pentru test.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">load_iris</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">load_iris</span><span class=\"p\">(</span><span class=\"n\">return_X_y</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"n\">X_tr</span><span class=\"p\">,</span> <span class=\"n\">X_te</span><span class=\"p\">,</span> <span class=\"n\">y_tr</span><span class=\"p\">,</span> <span class=\"n\">y_te</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span>\n    <span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">test_size</span><span class=\"o\">=</span><span class=\"mf\">0.2</span><span class=\"p\">,</span> <span class=\"n\">stratify</span><span class=\"o\">=</span><span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span>\n<span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">X_tr</span><span class=\"o\">.</span><span class=\"n\">shape</span><span class=\"p\">,</span> <span class=\"n\">X_te</span><span class=\"o\">.</span><span class=\"n\">shape</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">bincount</span><span class=\"p\">(</span><span class=\"n\">y_tr</span><span class=\"p\">),</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">bincount</span><span class=\"p\">(</span><span class=\"n\">y_te</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "Model de bază pentru Iris",
              "level": "Mediu",
              "description": "Antrenează un `DecisionTreeClassifier` cu `max_depth=3`, apoi afișează acuratețea pe datele de test.",
              "hintCode": "model = DecisionTreeClassifier(max_depth=3, random_state=42)\nmodel.fit(X_tr, y_tr)\n",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(\n    X, y, test_size=0.25, stratify=y, random_state=42\n)\nmodel = DecisionTreeClassifier(max_depth=3, random_state=42)\nmodel.fit(X_tr, y_tr)\nprint(accuracy_score(y_te, model.predict(X_te)))\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">DecisionTreeClassifier</span><span class=\"p\">(</span><span class=\"n\">max_depth</span><span class=\"o\">=</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span><span class=\"p\">)</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X_tr</span><span class=\"p\">,</span> <span class=\"n\">y_tr</span><span class=\"p\">)</span>\n</pre></div>",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">load_iris</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.tree</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">DecisionTreeClassifier</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">accuracy_score</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">load_iris</span><span class=\"p\">(</span><span class=\"n\">return_X_y</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"n\">X_tr</span><span class=\"p\">,</span> <span class=\"n\">X_te</span><span class=\"p\">,</span> <span class=\"n\">y_tr</span><span class=\"p\">,</span> <span class=\"n\">y_te</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span>\n    <span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">test_size</span><span class=\"o\">=</span><span class=\"mf\">0.25</span><span class=\"p\">,</span> <span class=\"n\">stratify</span><span class=\"o\">=</span><span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span>\n<span class=\"p\">)</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">DecisionTreeClassifier</span><span class=\"p\">(</span><span class=\"n\">max_depth</span><span class=\"o\">=</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span><span class=\"p\">)</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X_tr</span><span class=\"p\">,</span> <span class=\"n\">y_tr</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">accuracy_score</span><span class=\"p\">(</span><span class=\"n\">y_te</span><span class=\"p\">,</span> <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">X_te</span><span class=\"p\">)))</span>\n</pre></div>"
            },
            {
              "title": "Unde apare data leakage?",
              "level": "Mediu",
              "type": "mcq",
              "description": "Ce problemă apare în următorul program?",
              "statementCode": "scaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\nX_train, X_test, y_train, y_test = train_test_split(\n    X_scaled, y, random_state=42\n)\n",
              "options": [
                "Scalarea este învățată înainte de separare, folosind și date de test.",
                "StandardScaler nu poate transforma NumPy.",
                "train_test_split nu acceptă random_state.",
                "Nu există nicio problemă."
              ],
              "answerIndex": 0,
              "explanation": "Statisticile de scalare au fost învățate pe toate observațiile.",
              "hint": "Identifică datele folosite pentru `fit_transform`.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">scaler</span> <span class=\"o\">=</span> <span class=\"n\">StandardScaler</span><span class=\"p\">()</span>\n<span class=\"n\">X_scaled</span> <span class=\"o\">=</span> <span class=\"n\">scaler</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">)</span>\n<span class=\"n\">X_train</span><span class=\"p\">,</span> <span class=\"n\">X_test</span><span class=\"p\">,</span> <span class=\"n\">y_train</span><span class=\"p\">,</span> <span class=\"n\">y_test</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span>\n    <span class=\"n\">X_scaled</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span>\n<span class=\"p\">)</span>\n</pre></div>"
            },
            {
              "title": "Pipeline complet",
              "level": "Mediu",
              "description": "Construiește un pipeline StandardScaler → LogisticRegression pentru Iris, antrenează-l și calculează acuratețea.",
              "hintCode": "pipeline = make_pipeline(StandardScaler(), LogisticRegression(max_iter=600))\n",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.pipeline import make_pipeline\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(\n    X, y, stratify=y, random_state=42\n)\nmodel = make_pipeline(StandardScaler(), LogisticRegression(max_iter=600))\nmodel.fit(X_tr, y_tr)\nprint(f\"Acuratețe: {model.score(X_te, y_te):.3f}\")\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">pipeline</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">LogisticRegression</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">600</span><span class=\"p\">))</span>\n</pre></div>",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">load_iris</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LogisticRegression</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">load_iris</span><span class=\"p\">(</span><span class=\"n\">return_X_y</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"n\">X_tr</span><span class=\"p\">,</span> <span class=\"n\">X_te</span><span class=\"p\">,</span> <span class=\"n\">y_tr</span><span class=\"p\">,</span> <span class=\"n\">y_te</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span>\n    <span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">stratify</span><span class=\"o\">=</span><span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span>\n<span class=\"p\">)</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">LogisticRegression</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">600</span><span class=\"p\">))</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X_tr</span><span class=\"p\">,</span> <span class=\"n\">y_tr</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"sa\">f</span><span class=\"s2\">&quot;Acuratețe: </span><span class=\"si\">{</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">score</span><span class=\"p\">(</span><span class=\"n\">X_te</span><span class=\"p\">,</span><span class=\"w\"> </span><span class=\"n\">y_te</span><span class=\"p\">)</span><span class=\"si\">:</span><span class=\"s2\">.3f</span><span class=\"si\">}</span><span class=\"s2\">&quot;</span><span class=\"p\">)</span>\n</pre></div>"
            },
            {
              "title": "Matrice de confuzie",
              "level": "Mediu",
              "description": "Pentru etichetele reale și predicțiile următoare, construiește matricea de confuzie și calculează acuratețea.",
              "statementCode": "y_true = [0, 0, 1, 1, 1, 0]\ny_pred = [0, 1, 1, 1, 0, 0]\n",
              "hint": "Folosește `confusion_matrix` și `accuracy_score` din `sklearn.metrics`.",
              "solutionCode": "from sklearn.metrics import confusion_matrix, accuracy_score\n\ny_true = [0, 0, 1, 1, 1, 0]\ny_pred = [0, 1, 1, 1, 0, 0]\nprint(confusion_matrix(y_true, y_pred))\nprint(accuracy_score(y_true, y_pred))\n",
              "solutionText": "Matricea de confuzie este [[2, 1], [1, 2]], iar acuratețea este 4/6.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">confusion_matrix</span><span class=\"p\">,</span> <span class=\"n\">accuracy_score</span>\n\n<span class=\"n\">y_true</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]</span>\n<span class=\"n\">y_pred</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">confusion_matrix</span><span class=\"p\">(</span><span class=\"n\">y_true</span><span class=\"p\">,</span> <span class=\"n\">y_pred</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">accuracy_score</span><span class=\"p\">(</span><span class=\"n\">y_true</span><span class=\"p\">,</span> <span class=\"n\">y_pred</span><span class=\"p\">))</span>\n</pre></div>",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">y_true</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]</span>\n<span class=\"n\">y_pred</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]</span>\n</pre></div>"
            },
            {
              "title": "Validare încrucișată pentru K-NN",
              "level": "Dificil",
              "description": "Compară valorile `n_neighbors` 1, 3, 5, 7 într-o validare încrucișată cu 5 folduri, folosind o scalare inclusă în pipeline. Alege valoarea cu media cea mai mare.",
              "hint": "Poți folosi `GridSearchCV` cu cheia de parametru `kneighborsclassifier__n_neighbors`.",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import GridSearchCV\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\n\nX, y = load_iris(return_X_y=True)\nmodel = make_pipeline(StandardScaler(), KNeighborsClassifier())\nsearch = GridSearchCV(\n    model, {\"kneighborsclassifier__n_neighbors\": [1, 3, 5, 7]}, cv=5\n)\nsearch.fit(X, y)\nprint(search.best_params_)\nprint(search.best_score_)\n",
              "solutionText": "Exemplul ilustrează selecția hiperparametrilor prin validare încrucișată. Pentru raportarea performanței finale pe observații complet noi este nevoie de un test separat.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">load_iris</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">GridSearchCV</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.neighbors</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">KNeighborsClassifier</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">load_iris</span><span class=\"p\">(</span><span class=\"n\">return_X_y</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">KNeighborsClassifier</span><span class=\"p\">())</span>\n<span class=\"n\">search</span> <span class=\"o\">=</span> <span class=\"n\">GridSearchCV</span><span class=\"p\">(</span>\n    <span class=\"n\">model</span><span class=\"p\">,</span> <span class=\"p\">{</span><span class=\"s2\">&quot;kneighborsclassifier__n_neighbors&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">]},</span> <span class=\"n\">cv</span><span class=\"o\">=</span><span class=\"mi\">5</span>\n<span class=\"p\">)</span>\n<span class=\"n\">search</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">search</span><span class=\"o\">.</span><span class=\"n\">best_params_</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">search</span><span class=\"o\">.</span><span class=\"n\">best_score_</span><span class=\"p\">)</span>\n</pre></div>"
            },
            {
              "title": "K-Means fără etichete",
              "level": "Mediu",
              "description": "Generează 150 de observații artificiale în trei grupuri cu `make_blobs` și aplică KMeans. Afișează dimensiunea vectorului etichetelor și coordonatele celor trei centroizi.",
              "hintCode": "X, _ = make_blobs(n_samples=150, centers=3, random_state=9)\n",
              "solutionCode": "from sklearn.datasets import make_blobs\nfrom sklearn.cluster import KMeans\n\nX, _ = make_blobs(n_samples=150, centers=3, random_state=9)\nmodel = KMeans(n_clusters=3, random_state=9, n_init=10)\nlabels = model.fit_predict(X)\nprint(labels.shape)\nprint(model.cluster_centers_)\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">_</span> <span class=\"o\">=</span> <span class=\"n\">make_blobs</span><span class=\"p\">(</span><span class=\"n\">n_samples</span><span class=\"o\">=</span><span class=\"mi\">150</span><span class=\"p\">,</span> <span class=\"n\">centers</span><span class=\"o\">=</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">9</span><span class=\"p\">)</span>\n</pre></div>",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_blobs</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.cluster</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">KMeans</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">_</span> <span class=\"o\">=</span> <span class=\"n\">make_blobs</span><span class=\"p\">(</span><span class=\"n\">n_samples</span><span class=\"o\">=</span><span class=\"mi\">150</span><span class=\"p\">,</span> <span class=\"n\">centers</span><span class=\"o\">=</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">9</span><span class=\"p\">)</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">KMeans</span><span class=\"p\">(</span><span class=\"n\">n_clusters</span><span class=\"o\">=</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">9</span><span class=\"p\">,</span> <span class=\"n\">n_init</span><span class=\"o\">=</span><span class=\"mi\">10</span><span class=\"p\">)</span>\n<span class=\"n\">labels</span> <span class=\"o\">=</span> <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit_predict</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">labels</span><span class=\"o\">.</span><span class=\"n\">shape</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">cluster_centers_</span><span class=\"p\">)</span>\n</pre></div>"
            }
          ]
        },
        {
          "id": "sectiunea-1-5",
          "number": "1.5",
          "title": "Introducere în PyTorch",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-1-6",
          "number": "1.6",
          "title": "Manipularea tensorilor",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        }
      ]
    },
    {
      "id": "data-science",
      "number": "02",
      "icon": "sigma",
      "color": "blue",
      "title": "Fundamente de Data Science",
      "shortTitle": "Fundamente de Data Science",
      "description": "Cum evaluăm corect modelele, prevenim overfittingul, alegem hiperparametri și transformăm datele pentru învățare automată.",
      "label": "Programă generală",
      "sections": [
        {
          "id": "sectiunea-4-1",
          "number": "2.1",
          "title": "Metrici de evaluare",
          "stage": "general",
          "summary": "Un model nu este bun fiindcă a fost antrenat, ci fiindcă face predicții utile pe observații pe care nu le-a văzut. În această lecție învățăm să cuantificăm erorile și să alegem metrica potrivită problemei.",
          "objectives": [
            "Să calculezi manual MAE, MSE, RMSE, R² și metrici de clasificare.",
            "Să alegi metrica potrivită în funcție de tipul problemei.",
            "Să explici de ce scorurile pe validation și pe test au roluri distincte."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Metrici de evaluare",
              "src": "content/ds-metrici.html",
              "standalone": "content/ds-metrici-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Metrici de evaluare",
              "src": "interactive/ds-metrici.html",
              "height": 780,
              "caption": "Modifică parametrii și urmărește actualizarea rezultatelor. Deschide separat pentru spațiu suplimentar."
            },
            {
              "type": "html",
              "title": "Notebook de lucru — Metrici de evaluare",
              "src": "content/ds-metrici-notebook.html",
              "download": "notebooks/ONIA-DataScience-metrici.ipynb",
              "height": 470,
              "caption": "Exemplele Python din lecție, disponibile și ca notebook Jupyter."
            }
          ],
          "exercises": [
            {
              "title": "Erorile se pot anula?",
              "description": "Erorile semnate sunt +3 și −3. Cât este MAE?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "0",
                "3",
                "6",
                "9"
              ],
              "answerIndex": 1,
              "explanation": "MAE = (|3|+|−3|)/2 = 3.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "MSE pentru o singură observație",
              "description": "Valoarea reală este 7, iar predicția 4. Care este MSE?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "3",
                "6",
                "9",
                "16"
              ],
              "answerIndex": 2,
              "explanation": "(7−4)² = 9.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "R² negativ",
              "description": "Ce înseamnă un R² negativ pe un set de test?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Predicții perfecte",
                "Mai slab decât referința constantă bazată pe media acestui set",
                "Accuracy este negativ",
                "Setul este obligatoriu corupt"
              ],
              "answerIndex": 1,
              "explanation": "R² < 0 atunci când suma pătratelor erorilor depășește suma pătratelor față de media valorilor reale.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Clase dezechilibrate",
              "description": "Un model prezice clasa negativă pentru toate cele 95 de negative și ratează toate cele 5 pozitive. Care este recall pentru pozitiv?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "0",
                "0,5",
                "0,95",
                "1"
              ],
              "answerIndex": 0,
              "explanation": "TP=0, FN=5, deci recall=0/(0+5)=0.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Metrica dintr-o competiție",
              "description": "Evaluatorul cere minimizarea RMSE. Ce alegi pentru compararea modelelor?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "MAE fără alte verificări",
                "RMSE pe validation",
                "Accuracy pe train",
                "R² pe testul final după fiecare schimbare"
              ],
              "answerIndex": 1,
              "explanation": "Selectăm după metrica oficială sau un proxy justificat, estimată pe validation.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "model.score()",
              "description": "Pentru un obiect `LinearRegression`, ce returnează de regulă `score(X, y)`?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "RMSE",
                "R²",
                "F1",
                "MAE"
              ],
              "answerIndex": 1,
              "explanation": "Metoda score pentru regresorii scikit-learn standard întoarce R².",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "MAE și RMSE de la zero",
              "description": "Scrie două funcții care calculează MAE și RMSE din liste, fără biblioteci externe.",
              "level": "Mediu",
              "hint": "Suma erorilor absolute și suma pătratelor, fiecare împărțită la n.",
              "solutionCode": "def mae(y, p):\n    return sum(abs(a-b) for a,b in zip(y,p))/len(y)\n\ndef rmse(y,p):\n    return (sum((a-b)**2 for a,b in zip(y,p))/len(y))**0.5\n\nprint(mae([1,2,3],[1,3,5]))\nprint(rmse([1,2,3],[1,3,5]))",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">mae</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">p</span><span class=\"p\">):</span>\n    <span class=\"k\">return</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"nb\">abs</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"o\">-</span><span class=\"n\">b</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">,</span><span class=\"n\">p</span><span class=\"p\">))</span><span class=\"o\">/</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)</span>\n\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">rmse</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">,</span><span class=\"n\">p</span><span class=\"p\">):</span>\n    <span class=\"k\">return</span> <span class=\"p\">(</span><span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">a</span><span class=\"o\">-</span><span class=\"n\">b</span><span class=\"p\">)</span><span class=\"o\">**</span><span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">,</span><span class=\"n\">p</span><span class=\"p\">))</span><span class=\"o\">/</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">))</span><span class=\"o\">**</span><span class=\"mf\">0.5</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">mae</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">],[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">,</span><span class=\"mi\">5</span><span class=\"p\">]))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">rmse</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">],[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">,</span><span class=\"mi\">5</span><span class=\"p\">]))</span>\n</pre></div>"
            },
            {
              "title": "Confuzia la dezechilibru",
              "description": "Construiește o listă cu 98 de negative și 2 pozitive. Prezice mereu 0 și calculează accuracy și recall.",
              "level": "Mediu",
              "hint": "O acuratețe mare poate ascunde recall egal cu zero.",
              "solutionCode": "real = [0]*98+[1]*2\npred = [0]*100\naccuracy = sum(a==b for a,b in zip(real,pred))/len(real)\ntp=sum(a==1 and b==1 for a,b in zip(real,pred))\nfn=sum(a==1 and b==0 for a,b in zip(real,pred))\nprint(accuracy, tp/(tp+fn))",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">real</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">]</span><span class=\"o\">*</span><span class=\"mi\">98</span><span class=\"o\">+</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">]</span><span class=\"o\">*</span><span class=\"mi\">2</span>\n<span class=\"n\">pred</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">]</span><span class=\"o\">*</span><span class=\"mi\">100</span>\n<span class=\"n\">accuracy</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"o\">==</span><span class=\"n\">b</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">pred</span><span class=\"p\">))</span><span class=\"o\">/</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">)</span>\n<span class=\"n\">tp</span><span class=\"o\">=</span><span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"o\">==</span><span class=\"mi\">1</span> <span class=\"ow\">and</span> <span class=\"n\">b</span><span class=\"o\">==</span><span class=\"mi\">1</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">pred</span><span class=\"p\">))</span>\n<span class=\"n\">fn</span><span class=\"o\">=</span><span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"o\">==</span><span class=\"mi\">1</span> <span class=\"ow\">and</span> <span class=\"n\">b</span><span class=\"o\">==</span><span class=\"mi\">0</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">pred</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">accuracy</span><span class=\"p\">,</span> <span class=\"n\">tp</span><span class=\"o\">/</span><span class=\"p\">(</span><span class=\"n\">tp</span><span class=\"o\">+</span><span class=\"n\">fn</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "Scorer scikit-learn",
              "description": "Folosește `mean_absolute_error` și `mean_squared_error` pentru două modele.",
              "level": "Mediu",
              "hint": "Compară valoarea scorului pe același set, nu pe seturi diferite.",
              "solutionCode": "from sklearn.metrics import mean_absolute_error, mean_squared_error\nreal=[1,3,5,7]\nmodel_a=[1,2,5,6]\nmodel_b=[0,4,4,8]\nfor pred in [model_a,model_b]:\n    print(mean_absolute_error(real,pred),mean_squared_error(real,pred))",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">mean_absolute_error</span><span class=\"p\">,</span> <span class=\"n\">mean_squared_error</span>\n<span class=\"n\">real</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">,</span><span class=\"mi\">5</span><span class=\"p\">,</span><span class=\"mi\">7</span><span class=\"p\">]</span>\n<span class=\"n\">model_a</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">5</span><span class=\"p\">,</span><span class=\"mi\">6</span><span class=\"p\">]</span>\n<span class=\"n\">model_b</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">4</span><span class=\"p\">,</span><span class=\"mi\">4</span><span class=\"p\">,</span><span class=\"mi\">8</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">pred</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"n\">model_a</span><span class=\"p\">,</span><span class=\"n\">model_b</span><span class=\"p\">]:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">mean_absolute_error</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">pred</span><span class=\"p\">),</span><span class=\"n\">mean_squared_error</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">pred</span><span class=\"p\">))</span>\n</pre></div>"
            }
          ]
        },
        {
          "id": "sectiunea-4-2",
          "number": "2.2",
          "title": "Underfitting și overfitting",
          "stage": "general",
          "summary": "De ce poate un model să obțină 100% pe datele de antrenare și totuși să greșească atunci când vede exemple noi? Această lecție leagă capacitatea modelului, zgomotul, validarea și scorurile publice/finale din competiții.",
          "objectives": [
            "Să recunoști cazuri de underfitting și overfitting.",
            "Să compari train și validation și să propui măsuri corecte de generalizare.",
            "Să explici de ce scorul public nu garantează scorul final."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Underfitting și overfitting",
              "src": "content/ds-underfitting-overfitting.html",
              "standalone": "content/ds-underfitting-overfitting-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Underfitting și overfitting",
              "src": "interactive/ds-underfitting-overfitting.html",
              "height": 780,
              "caption": "Modifică parametrii și urmărește actualizarea rezultatelor. Deschide separat pentru spațiu suplimentar."
            },
            {
              "type": "html",
              "title": "Notebook de lucru — Underfitting și overfitting",
              "src": "content/ds-underfitting-overfitting-notebook.html",
              "download": "notebooks/ONIA-DataScience-underfitting-overfitting.ipynb",
              "height": 470,
              "caption": "Exemplele Python din lecție, disponibile și ca notebook Jupyter."
            }
          ],
          "exercises": [
            {
              "title": "Semnul underfittingului",
              "description": "Ce înseamnă eroare mare atât pe train cât și pe validation?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Neapărat data leakage",
                "Posibil underfitting",
                "Neapărat model perfect",
                "Nu putem calcula metrici"
              ],
              "answerIndex": 1,
              "explanation": "Modelul nu reușește să explice nici datele cunoscute.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Semnul overfittingului",
              "description": "Eroare train foarte mică și eroare validation mare indică de obicei:",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Generalizare excelentă",
                "Overfitting",
                "Model obligatoriu prea simplu",
                "Testarea corectă pe date finale"
              ],
              "answerIndex": 1,
              "explanation": "Modelul poate fi prea sensibil la particularități ale train.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Scor public vs final",
              "description": "Scorul public crește după 200 de încercări, dar CV intern scade. Ce faci?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Continui doar după scorul public",
                "Verifici procedura de validare și păstrezi un model robust",
                "Te uiți la datele test finale",
                "Mărești gradul polinomului la infinit"
              ],
              "answerIndex": 1,
              "explanation": "Consultațiile repetate pot adapta modelul la subsetul public.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Regularizare excesivă",
              "description": "Ce poate produce o regularizare prea puternică?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Underfitting",
                "Date mai multe",
                "Fără zgomot",
                "Scor perfect garantat"
              ],
              "answerIndex": 0,
              "explanation": "Coeficienții prea penalizați pot limita prea mult modelul.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Seturi aproape identice",
              "description": "Imagini ale aceleiași persoane apar în train și validation. Care este riscul?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Scalare corectă",
                "Data leakage între grupuri",
                "Reduce zgomotul garantat",
                "Nu există risc"
              ],
              "answerIndex": 1,
              "explanation": "Informația specifică persoanei poate apărea în ambele partiții.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Compară două grade de polinom",
              "description": "Antrenează două modele cu `PolynomialFeatures`, grade 1 și 6, și compară MSE pe date distincte.",
              "level": "Mediu",
              "hint": "Folosește Pipeline și separă întâi setul.",
              "solutionCode": "import numpy as np\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.linear_model import Ridge\nfrom sklearn.metrics import mean_squared_error\nxtr=np.linspace(-2,2,13).reshape(-1,1)\nytr=np.sin(xtr[:,0])+0.1*np.cos(5*xtr[:,0])\nxv=np.linspace(-1.9,1.9,41).reshape(-1,1)\nyv=np.sin(xv[:,0])\nfor d in [1,6]:\n    model=make_pipeline(PolynomialFeatures(d), Ridge(alpha=0.001))\n    model.fit(xtr,ytr)\n    print(d, mean_squared_error(ytr,model.predict(xtr)),\n          mean_squared_error(yv,model.predict(xv)))",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">PolynomialFeatures</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Ridge</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">mean_squared_error</span>\n<span class=\"n\">xtr</span><span class=\"o\">=</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">linspace</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">13</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">reshape</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">)</span>\n<span class=\"n\">ytr</span><span class=\"o\">=</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">sin</span><span class=\"p\">(</span><span class=\"n\">xtr</span><span class=\"p\">[:,</span><span class=\"mi\">0</span><span class=\"p\">])</span><span class=\"o\">+</span><span class=\"mf\">0.1</span><span class=\"o\">*</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">cos</span><span class=\"p\">(</span><span class=\"mi\">5</span><span class=\"o\">*</span><span class=\"n\">xtr</span><span class=\"p\">[:,</span><span class=\"mi\">0</span><span class=\"p\">])</span>\n<span class=\"n\">xv</span><span class=\"o\">=</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">linspace</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mf\">1.9</span><span class=\"p\">,</span><span class=\"mf\">1.9</span><span class=\"p\">,</span><span class=\"mi\">41</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">reshape</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">)</span>\n<span class=\"n\">yv</span><span class=\"o\">=</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">sin</span><span class=\"p\">(</span><span class=\"n\">xv</span><span class=\"p\">[:,</span><span class=\"mi\">0</span><span class=\"p\">])</span>\n<span class=\"k\">for</span> <span class=\"n\">d</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">6</span><span class=\"p\">]:</span>\n    <span class=\"n\">model</span><span class=\"o\">=</span><span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">PolynomialFeatures</span><span class=\"p\">(</span><span class=\"n\">d</span><span class=\"p\">),</span> <span class=\"n\">Ridge</span><span class=\"p\">(</span><span class=\"n\">alpha</span><span class=\"o\">=</span><span class=\"mf\">0.001</span><span class=\"p\">))</span>\n    <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">xtr</span><span class=\"p\">,</span><span class=\"n\">ytr</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">d</span><span class=\"p\">,</span> <span class=\"n\">mean_squared_error</span><span class=\"p\">(</span><span class=\"n\">ytr</span><span class=\"p\">,</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">xtr</span><span class=\"p\">)),</span>\n          <span class=\"n\">mean_squared_error</span><span class=\"p\">(</span><span class=\"n\">yv</span><span class=\"p\">,</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">xv</span><span class=\"p\">)))</span>\n</pre></div>"
            },
            {
              "title": "Împărțire după grupuri",
              "description": "Avem observații de la patru elevi, câte trei de la fiecare. Realizează un split astfel încât un elev să nu apară simultan în train și test.",
              "level": "Mediu",
              "hint": "Folosește GroupShuffleSplit.",
              "solutionCode": "from sklearn.model_selection import GroupShuffleSplit\nX=[[i] for i in range(12)]\ny=[i%2 for i in range(12)]\ngrupe=[i//3 for i in range(12)]\ncv=GroupShuffleSplit(n_splits=1,test_size=0.25,random_state=42)\ntrain,test=next(cv.split(X,y,groups=grupe))\nprint({grupe[i] for i in train},{grupe[i] for i in test})",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">GroupShuffleSplit</span>\n<span class=\"n\">X</span><span class=\"o\">=</span><span class=\"p\">[[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"mi\">12</span><span class=\"p\">)]</span>\n<span class=\"n\">y</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"o\">%</span><span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"mi\">12</span><span class=\"p\">)]</span>\n<span class=\"n\">grupe</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"o\">//</span><span class=\"mi\">3</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"mi\">12</span><span class=\"p\">)]</span>\n<span class=\"n\">cv</span><span class=\"o\">=</span><span class=\"n\">GroupShuffleSplit</span><span class=\"p\">(</span><span class=\"n\">n_splits</span><span class=\"o\">=</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"n\">test_size</span><span class=\"o\">=</span><span class=\"mf\">0.25</span><span class=\"p\">,</span><span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span><span class=\"p\">)</span>\n<span class=\"n\">train</span><span class=\"p\">,</span><span class=\"n\">test</span><span class=\"o\">=</span><span class=\"nb\">next</span><span class=\"p\">(</span><span class=\"n\">cv</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span><span class=\"n\">y</span><span class=\"p\">,</span><span class=\"n\">groups</span><span class=\"o\">=</span><span class=\"n\">grupe</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">({</span><span class=\"n\">grupe</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"n\">train</span><span class=\"p\">},{</span><span class=\"n\">grupe</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"n\">test</span><span class=\"p\">})</span>\n</pre></div>"
            },
            {
              "title": "Mini-raport de generalizare",
              "description": "Calculează train MSE și validation MSE pentru două seturi de predicții și explică diferența.",
              "level": "Mediu",
              "hint": "MSE se calculează identic pe fiecare set, dar rolurile lor sunt diferite.",
              "solutionCode": "def mse(y,p):\n    return sum((a-b)**2 for a,b in zip(y,p))/len(y)\nprint('train=',mse([1,2,3],[1,2.01,2.99]))\nprint('validation=',mse([2,3,4],[1,5,2]))",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">mse</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">,</span><span class=\"n\">p</span><span class=\"p\">):</span>\n    <span class=\"k\">return</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">a</span><span class=\"o\">-</span><span class=\"n\">b</span><span class=\"p\">)</span><span class=\"o\">**</span><span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">,</span><span class=\"n\">p</span><span class=\"p\">))</span><span class=\"o\">/</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s1\">&#39;train=&#39;</span><span class=\"p\">,</span><span class=\"n\">mse</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">],[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mf\">2.01</span><span class=\"p\">,</span><span class=\"mf\">2.99</span><span class=\"p\">]))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s1\">&#39;validation=&#39;</span><span class=\"p\">,</span><span class=\"n\">mse</span><span class=\"p\">([</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">,</span><span class=\"mi\">4</span><span class=\"p\">],[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">5</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">]))</span>\n</pre></div>"
            }
          ]
        },
        {
          "id": "sectiunea-4-3",
          "number": "2.3",
          "title": "Optimizarea hiperparametrilor",
          "stage": "general",
          "summary": "Cum alegem numărul de vecini, adâncimea unui arbore sau intensitatea regularizării, fără să învățăm particularitățile setului de test? Vom construi o metodă corectă de experimentare.",
          "objectives": [
            "Să deosebești parametrii învățați de hiperparametri.",
            "Să realizezi Grid Search și cross-validation fără scurgeri de informație.",
            "Să compari configurații fără folosirea repetată a setului final."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Optimizarea hiperparametrilor",
              "src": "content/ds-optimizarea-hiperparametrilor.html",
              "standalone": "content/ds-optimizarea-hiperparametrilor-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Optimizarea hiperparametrilor",
              "src": "interactive/ds-optimizarea-hiperparametrilor.html",
              "height": 780,
              "caption": "Modifică parametrii și urmărește actualizarea rezultatelor. Deschide separat pentru spațiu suplimentar."
            },
            {
              "type": "html",
              "title": "Notebook de lucru — Optimizarea hiperparametrilor",
              "src": "content/ds-optimizarea-hiperparametrilor-notebook.html",
              "download": "notebooks/ONIA-DataScience-optimizarea-hiperparametrilor.ipynb",
              "height": 470,
              "caption": "Exemplele Python din lecție, disponibile și ca notebook Jupyter."
            }
          ],
          "exercises": [
            {
              "title": "Parametrul învățat",
              "description": "În y=wx+b, care este un parametru învățat de regresia liniară?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "w",
                "numărul de folduri",
                "k la K-NN",
                "max_depth"
              ],
              "answerIndex": 0,
              "explanation": "w este estimat de algoritm din date.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Câte configurații?",
              "description": "Dacă avem 3 valori pentru max_depth și 4 pentru min_samples_leaf, câte combinații sunt în Grid Search?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "7",
                "12",
                "16",
                "34"
              ],
              "answerIndex": 1,
              "explanation": "Produsul cardinalităților: 3×4=12.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Ce nu trebuie văzut?",
              "description": "La alegerea hiperparametrilor, ce date trebuie păstrate în afara procesului?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Setul de test final",
                "Setul train",
                "Setul de validare",
                "Variabilele de intrare"
              ],
              "answerIndex": 0,
              "explanation": "Testul final este pentru evaluarea procesului ales, nu pentru alegerea setărilor.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Scoring negativ",
              "description": "CV întoarce -4 și -2 pentru neg_mean_absolute_error. Care este mai bun?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "-4",
                "-2",
                "Sunt egale",
                "Nu se poate compara"
              ],
              "answerIndex": 1,
              "explanation": "-2 corespunde MAE=2, mai mic decât MAE=4.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Pipeline și leakage",
              "description": "De ce punem StandardScaler în Pipeline înainte de GridSearchCV?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Crește sigur accuracy la 100%",
                "Învață scalerul separat în fiecare fold din train",
                "Transformă etichetele",
                "Elimină nevoia de validare"
              ],
              "answerIndex": 1,
              "explanation": "Preprocesarea se învață în interiorul antrenării fiecărui fold.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Grid Search pe arbori",
              "description": "Compară 2, 4 și 8 pentru max_depth și 1, 3 pentru min_samples_leaf.",
              "level": "Mediu",
              "hint": "Construiește un dicționar de parametri.",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.model_selection import GridSearchCV\nX,y=load_iris(return_X_y=True)\ncv=GridSearchCV(DecisionTreeClassifier(random_state=42),\n  {'max_depth':[2,4,8],'min_samples_leaf':[1,3]},cv=5)\ncv.fit(X,y)\nprint(cv.best_params_,round(cv.best_score_,3))",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">load_iris</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.tree</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">DecisionTreeClassifier</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">GridSearchCV</span>\n<span class=\"n\">X</span><span class=\"p\">,</span><span class=\"n\">y</span><span class=\"o\">=</span><span class=\"n\">load_iris</span><span class=\"p\">(</span><span class=\"n\">return_X_y</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"n\">cv</span><span class=\"o\">=</span><span class=\"n\">GridSearchCV</span><span class=\"p\">(</span><span class=\"n\">DecisionTreeClassifier</span><span class=\"p\">(</span><span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span><span class=\"p\">),</span>\n  <span class=\"p\">{</span><span class=\"s1\">&#39;max_depth&#39;</span><span class=\"p\">:[</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">4</span><span class=\"p\">,</span><span class=\"mi\">8</span><span class=\"p\">],</span><span class=\"s1\">&#39;min_samples_leaf&#39;</span><span class=\"p\">:[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">]},</span><span class=\"n\">cv</span><span class=\"o\">=</span><span class=\"mi\">5</span><span class=\"p\">)</span>\n<span class=\"n\">cv</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span><span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">cv</span><span class=\"o\">.</span><span class=\"n\">best_params_</span><span class=\"p\">,</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">cv</span><span class=\"o\">.</span><span class=\"n\">best_score_</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "Compararea valorilor k",
              "description": "Calculează media scorurilor de CV pentru k=1,3,5,7,9.",
              "level": "Mediu",
              "hint": "Folosește StratifiedKFold și un k-NN.",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.neighbors import KNeighborsClassifier\nX,y=load_iris(return_X_y=True)\nfor k in [1,3,5,7,9]:\n    print(k,round(cross_val_score(KNeighborsClassifier(n_neighbors=k),X,y,cv=5).mean(),3))",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">load_iris</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">cross_val_score</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.neighbors</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">KNeighborsClassifier</span>\n<span class=\"n\">X</span><span class=\"p\">,</span><span class=\"n\">y</span><span class=\"o\">=</span><span class=\"n\">load_iris</span><span class=\"p\">(</span><span class=\"n\">return_X_y</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">k</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">,</span><span class=\"mi\">5</span><span class=\"p\">,</span><span class=\"mi\">7</span><span class=\"p\">,</span><span class=\"mi\">9</span><span class=\"p\">]:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">k</span><span class=\"p\">,</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">cross_val_score</span><span class=\"p\">(</span><span class=\"n\">KNeighborsClassifier</span><span class=\"p\">(</span><span class=\"n\">n_neighbors</span><span class=\"o\">=</span><span class=\"n\">k</span><span class=\"p\">),</span><span class=\"n\">X</span><span class=\"p\">,</span><span class=\"n\">y</span><span class=\"p\">,</span><span class=\"n\">cv</span><span class=\"o\">=</span><span class=\"mi\">5</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">mean</span><span class=\"p\">(),</span><span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "Numără combinațiile",
              "description": "Calculează numărul total de configurații generate de trei liste de lungimi 3, 2 și 5.",
              "level": "Mediu",
              "hint": "Folosește produsul numărului de opțiuni.",
              "solutionCode": "opt=[3,2,5]\nprodus=1\nfor k in opt:\n    produs*=k\nprint(produs)",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">opt</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mi\">3</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">5</span><span class=\"p\">]</span>\n<span class=\"n\">produs</span><span class=\"o\">=</span><span class=\"mi\">1</span>\n<span class=\"k\">for</span> <span class=\"n\">k</span> <span class=\"ow\">in</span> <span class=\"n\">opt</span><span class=\"p\">:</span>\n    <span class=\"n\">produs</span><span class=\"o\">*=</span><span class=\"n\">k</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">produs</span><span class=\"p\">)</span>\n</pre></div>"
            }
          ]
        },
        {
          "id": "sectiunea-4-4",
          "number": "2.4",
          "title": "Matricea de confuzie și curbele ROC",
          "stage": "general",
          "summary": "Accuracy nu ne spune ce greșeli face un clasificator. Construim explicit TP, FP, FN și TN, apoi vedem cum schimbă pragul de decizie precizia, recall-ul și forma curbei ROC.",
          "objectives": [
            "Să construiești o matrice de confuzie și să calculezi precizia, recall-ul și F1.",
            "Să explici influența pragului asupra FP/FN.",
            "Să interpretezi curbele ROC și PR și scorurile AUC."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Matricea de confuzie și curbele ROC",
              "src": "content/ds-matricea-de-confuzie-roc.html",
              "standalone": "content/ds-matricea-de-confuzie-roc-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Matricea de confuzie și curbele ROC",
              "src": "interactive/ds-matricea-de-confuzie-roc.html",
              "height": 780,
              "caption": "Modifică parametrii și urmărește actualizarea rezultatelor. Deschide separat pentru spațiu suplimentar."
            },
            {
              "type": "html",
              "title": "Notebook de lucru — Matricea de confuzie și curbele ROC",
              "src": "content/ds-matricea-de-confuzie-roc-notebook.html",
              "download": "notebooks/ONIA-DataScience-matricea-de-confuzie-roc.ipynb",
              "height": 470,
              "caption": "Exemplele Python din lecție, disponibile și ca notebook Jupyter."
            }
          ],
          "exercises": [
            {
              "title": "Ce reprezintă FN?",
              "description": "Un mesaj periculos este etichetat ca inofensiv. Care categorie de eroare este aceasta dacă „periculos” este clasa pozitivă?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "TP",
                "FP",
                "FN",
                "TN"
              ],
              "answerIndex": 2,
              "explanation": "Pozitiv real, dar negativ prezis = false negative.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Precision",
              "description": "TP=8, FP=2. Care este precision?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "0,2",
                "0,4",
                "0,8",
                "1"
              ],
              "answerIndex": 2,
              "explanation": "8/(8+2)=0,8.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Recall",
              "description": "TP=8 și FN=4. Care este recall?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "2/3",
                "1/3",
                "1/2",
                "4/3"
              ],
              "answerIndex": 0,
              "explanation": "8/(8+4)=2/3.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Interpretarea axei ROC",
              "description": "Ce se află pe axa orizontală ROC?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Recall",
                "FPR",
                "Precision",
                "Accuracy"
              ],
              "answerIndex": 1,
              "explanation": "Axa x = False Positive Rate.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Prag mai mare",
              "description": "Dacă nu schimbăm scorurile, mărirea pragului poate:",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Crește numărul predicțiilor pozitive",
                "Păstra sau reduce numărul predicțiilor pozitive",
                "Mări întotdeauna recall",
                "Schimba etichetele reale"
              ],
              "answerIndex": 1,
              "explanation": "Un scor sub noul prag nu poate deveni pozitiv.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Construirea matricei de confuzie",
              "description": "Calculează TP, FP, FN și TN folosind liste și bucle.",
              "level": "Mediu",
              "hint": "Compară fiecare pereche (real, prezis).",
              "solutionCode": "real=[1,0,1,1,0,0]\npred=[1,1,0,1,0,0]\ntp=fp=fn=tn=0\nfor y,p in zip(real,pred):\n    if y==1 and p==1:tp+=1\n    elif y==0 and p==1:fp+=1\n    elif y==1 and p==0:fn+=1\n    else:tn+=1\nprint(tp,fp,fn,tn)",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">real</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">]</span>\n<span class=\"n\">pred</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">]</span>\n<span class=\"n\">tp</span><span class=\"o\">=</span><span class=\"n\">fp</span><span class=\"o\">=</span><span class=\"n\">fn</span><span class=\"o\">=</span><span class=\"n\">tn</span><span class=\"o\">=</span><span class=\"mi\">0</span>\n<span class=\"k\">for</span> <span class=\"n\">y</span><span class=\"p\">,</span><span class=\"n\">p</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">pred</span><span class=\"p\">):</span>\n    <span class=\"k\">if</span> <span class=\"n\">y</span><span class=\"o\">==</span><span class=\"mi\">1</span> <span class=\"ow\">and</span> <span class=\"n\">p</span><span class=\"o\">==</span><span class=\"mi\">1</span><span class=\"p\">:</span><span class=\"n\">tp</span><span class=\"o\">+=</span><span class=\"mi\">1</span>\n    <span class=\"k\">elif</span> <span class=\"n\">y</span><span class=\"o\">==</span><span class=\"mi\">0</span> <span class=\"ow\">and</span> <span class=\"n\">p</span><span class=\"o\">==</span><span class=\"mi\">1</span><span class=\"p\">:</span><span class=\"n\">fp</span><span class=\"o\">+=</span><span class=\"mi\">1</span>\n    <span class=\"k\">elif</span> <span class=\"n\">y</span><span class=\"o\">==</span><span class=\"mi\">1</span> <span class=\"ow\">and</span> <span class=\"n\">p</span><span class=\"o\">==</span><span class=\"mi\">0</span><span class=\"p\">:</span><span class=\"n\">fn</span><span class=\"o\">+=</span><span class=\"mi\">1</span>\n    <span class=\"k\">else</span><span class=\"p\">:</span><span class=\"n\">tn</span><span class=\"o\">+=</span><span class=\"mi\">1</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">tp</span><span class=\"p\">,</span><span class=\"n\">fp</span><span class=\"p\">,</span><span class=\"n\">fn</span><span class=\"p\">,</span><span class=\"n\">tn</span><span class=\"p\">)</span>\n</pre></div>"
            },
            {
              "title": "Curba ROC în scikit-learn",
              "description": "Generează FPR/TPR și ROC-AUC pentru șase exemple.",
              "level": "Mediu",
              "hint": "roc_curve folosește scoruri, nu numai etichete binare.",
              "solutionCode": "from sklearn.metrics import roc_curve,roc_auc_score\nreal=[0,1,0,1,0,1]\np=[.1,.8,.35,.6,.55,.95]\nfpr,tpr,praguri=roc_curve(real,p)\nprint(fpr,tpr,round(roc_auc_score(real,p),3))",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">roc_curve</span><span class=\"p\">,</span><span class=\"n\">roc_auc_score</span>\n<span class=\"n\">real</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">p</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mf\">.1</span><span class=\"p\">,</span><span class=\"mf\">.8</span><span class=\"p\">,</span><span class=\"mf\">.35</span><span class=\"p\">,</span><span class=\"mf\">.6</span><span class=\"p\">,</span><span class=\"mf\">.55</span><span class=\"p\">,</span><span class=\"mf\">.95</span><span class=\"p\">]</span>\n<span class=\"n\">fpr</span><span class=\"p\">,</span><span class=\"n\">tpr</span><span class=\"p\">,</span><span class=\"n\">praguri</span><span class=\"o\">=</span><span class=\"n\">roc_curve</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">p</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">fpr</span><span class=\"p\">,</span><span class=\"n\">tpr</span><span class=\"p\">,</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">roc_auc_score</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">p</span><span class=\"p\">),</span><span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "Selectarea pragului pe validation",
              "description": "Pentru trei praguri calculează F1 și alege cea mai mare valoare.",
              "level": "Mediu",
              "hint": "Folosește f1_score și aceeași listă de validare.",
              "solutionCode": "from sklearn.metrics import f1_score\nreal=[0,1,0,1,1,0]\np=[.1,.4,.54,.63,.82,.2]\nfor prag in [.3,.5,.7]:\n    pred=[int(s>=prag) for s in p]\n    print(prag,round(f1_score(real,pred),3))",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">f1_score</span>\n<span class=\"n\">real</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">]</span>\n<span class=\"n\">p</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mf\">.1</span><span class=\"p\">,</span><span class=\"mf\">.4</span><span class=\"p\">,</span><span class=\"mf\">.54</span><span class=\"p\">,</span><span class=\"mf\">.63</span><span class=\"p\">,</span><span class=\"mf\">.82</span><span class=\"p\">,</span><span class=\"mf\">.2</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">prag</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"mf\">.3</span><span class=\"p\">,</span><span class=\"mf\">.5</span><span class=\"p\">,</span><span class=\"mf\">.7</span><span class=\"p\">]:</span>\n    <span class=\"n\">pred</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">s</span><span class=\"o\">&gt;=</span><span class=\"n\">prag</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">s</span> <span class=\"ow\">in</span> <span class=\"n\">p</span><span class=\"p\">]</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">prag</span><span class=\"p\">,</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">f1_score</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">pred</span><span class=\"p\">),</span><span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>"
            }
          ]
        },
        {
          "id": "sectiunea-4-5",
          "number": "2.5",
          "title": "Feature Engineering",
          "stage": "general",
          "summary": "De multe ori diferența dintre un model slab și unul bun nu este un algoritm mai complicat, ci reprezentarea mai potrivită a datelor. Construim caracteristici utile și explicăm cum evităm introducerea de informații nepermise.",
          "objectives": [
            "Să alegi transformări utile din date brute.",
            "Să construiești interacțiuni și caracteristici polinomiale.",
            "Să folosești one-hot și ColumnTransformer fără leakage."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Feature Engineering",
              "src": "content/ds-feature-engineering.html",
              "standalone": "content/ds-feature-engineering-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Feature Engineering",
              "src": "interactive/ds-feature-engineering.html",
              "height": 780,
              "caption": "Modifică parametrii și urmărește actualizarea rezultatelor. Deschide separat pentru spațiu suplimentar."
            },
            {
              "type": "html",
              "title": "Notebook de lucru — Feature Engineering",
              "src": "content/ds-feature-engineering-notebook.html",
              "download": "notebooks/ONIA-DataScience-feature-engineering.ipynb",
              "height": 470,
              "caption": "Exemplele Python din lecție, disponibile și ca notebook Jupyter."
            }
          ],
          "exercises": [
            {
              "title": "Transformare utilă pentru cadrane",
              "description": "Clasele depind de semnul lui x1*x2. Ce caracteristică nouă este relevantă?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "x1+x2",
                "x1*x2",
                "x1-x2",
                "Un ID arbitrar"
              ],
              "answerIndex": 1,
              "explanation": "Produsul distinge cadranele cu semne egale de cele cu semne diferite.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Categorii nominale",
              "description": "Cum codificăm în mod obișnuit culoarea roșu, verde, albastru pentru un model liniar?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Cu indici 0,1,2 ca și cum distanțele au sens",
                "One-hot encoding",
                "Doar cu media lor",
                "Le eliminăm mereu"
              ],
              "answerIndex": 1,
              "explanation": "One-hot evită introducerea unei ordini artificiale.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Folosirea lui fit",
              "description": "În ce set se învață media pentru StandardScaler?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Train și test împreună",
                "Test final",
                "Train",
                "Doar validation"
              ],
              "answerIndex": 2,
              "explanation": "Statisticile sunt învățate doar pe train.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Grade polinomiale",
              "description": "Ce caracteristici suplimentare poate introduce gradul 2 pentru x1 și x2?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "x1², x1x2, x2²",
                "Doar x1",
                "Etichete reale",
                "Doar x3 fără semnificație"
              ],
              "answerIndex": 0,
              "explanation": "Interacțiuni și pătrate, pe lângă termenii originali.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Selecție fără leakage",
              "description": "Când se aplică SelectKBest care folosește etichetele?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Pe tot setul, înainte de CV",
                "În interiorul foldului train",
                "Pe test final",
                "După aflarea scorului final"
              ],
              "answerIndex": 1,
              "explanation": "Alegerea coloanelor pe întregul set ar folosi informații din validare.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "One-hot din Python pur",
              "description": "Primești două culori și trei categorii posibile. Construiește vectorii one-hot fără sklearn.",
              "level": "Mediu",
              "hint": "Fiecare coloană este 1 dacă valoarea coincide cu acea categorie.",
              "solutionCode": "categorii=['roșu','verde','albastru']\nculori=['verde','roșu']\nfor culoare in culori:\n    cod=[int(culoare==c) for c in categorii]\n    print(culoare,cod)",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">categorii</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"s1\">&#39;roșu&#39;</span><span class=\"p\">,</span><span class=\"s1\">&#39;verde&#39;</span><span class=\"p\">,</span><span class=\"s1\">&#39;albastru&#39;</span><span class=\"p\">]</span>\n<span class=\"n\">culori</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"s1\">&#39;verde&#39;</span><span class=\"p\">,</span><span class=\"s1\">&#39;roșu&#39;</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">culoare</span> <span class=\"ow\">in</span> <span class=\"n\">culori</span><span class=\"p\">:</span>\n    <span class=\"n\">cod</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">culoare</span><span class=\"o\">==</span><span class=\"n\">c</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">c</span> <span class=\"ow\">in</span> <span class=\"n\">categorii</span><span class=\"p\">]</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">culoare</span><span class=\"p\">,</span><span class=\"n\">cod</span><span class=\"p\">)</span>\n</pre></div>"
            },
            {
              "title": "Interacțiune între caracteristici",
              "description": "Construiește o nouă coloană z=x1*x2 și prezice clasa prin z>0.",
              "level": "Mediu",
              "hint": "Poți construi orice caracteristică calculată din cele deja disponibile.",
              "solutionCode": "puncte=[(-2,-1),(-2,1),(1,3),(2,-3)]\nfor x1,x2 in puncte:\n    z=x1*x2\n    print((x1,x2),z,int(z>0))",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">puncte</span><span class=\"o\">=</span><span class=\"p\">[(</span><span class=\"o\">-</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">),(</span><span class=\"o\">-</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">),(</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">),(</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"o\">-</span><span class=\"mi\">3</span><span class=\"p\">)]</span>\n<span class=\"k\">for</span> <span class=\"n\">x1</span><span class=\"p\">,</span><span class=\"n\">x2</span> <span class=\"ow\">in</span> <span class=\"n\">puncte</span><span class=\"p\">:</span>\n    <span class=\"n\">z</span><span class=\"o\">=</span><span class=\"n\">x1</span><span class=\"o\">*</span><span class=\"n\">x2</span>\n    <span class=\"nb\">print</span><span class=\"p\">((</span><span class=\"n\">x1</span><span class=\"p\">,</span><span class=\"n\">x2</span><span class=\"p\">),</span><span class=\"n\">z</span><span class=\"p\">,</span><span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">z</span><span class=\"o\">&gt;</span><span class=\"mi\">0</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "PolynomialFeatures",
              "description": "Afișează toate caracteristicile generate de gradul 2 din două coloane.",
              "level": "Mediu",
              "hint": "include_bias=False exclude coloana de 1.",
              "solutionCode": "from sklearn.preprocessing import PolynomialFeatures\np=PolynomialFeatures(2,include_bias=False)\nX=p.fit_transform([[2,3],[1,4]])\nprint(p.get_feature_names_out(['x1','x2']))\nprint(X)",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">PolynomialFeatures</span>\n<span class=\"n\">p</span><span class=\"o\">=</span><span class=\"n\">PolynomialFeatures</span><span class=\"p\">(</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"n\">include_bias</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">)</span>\n<span class=\"n\">X</span><span class=\"o\">=</span><span class=\"n\">p</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">([[</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">],[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">4</span><span class=\"p\">]])</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"o\">.</span><span class=\"n\">get_feature_names_out</span><span class=\"p\">([</span><span class=\"s1\">&#39;x1&#39;</span><span class=\"p\">,</span><span class=\"s1\">&#39;x2&#39;</span><span class=\"p\">]))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">)</span>\n</pre></div>"
            }
          ]
        },
        {
          "id": "sectiunea-4-6",
          "number": "2.6",
          "title": "Procesarea datelor",
          "stage": "general",
          "summary": "În multe probleme ONIA, curățarea și organizarea datelor ocupă mai mult timp decât antrenarea modelului. Vom urmări un flux complet: inspectare, valori lipsă, duplicări, categorii, scalare, prevenirea scurgerilor de informații și export.",
          "objectives": [
            "Să inspectezi date și să identifici valori lipsă sau extreme.",
            "Să creezi fluxuri de imputare, scalare și codificare pentru date mixte.",
            "Să pregătești o evaluare și o submisie reproductibilă."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Procesarea datelor",
              "src": "content/ds-procesarea-datelor.html",
              "standalone": "content/ds-procesarea-datelor-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Procesarea datelor",
              "src": "interactive/ds-procesarea-datelor.html",
              "height": 780,
              "caption": "Modifică parametrii și urmărește actualizarea rezultatelor. Deschide separat pentru spațiu suplimentar."
            },
            {
              "type": "html",
              "title": "Notebook de lucru — Procesarea datelor",
              "src": "content/ds-procesarea-datelor-notebook.html",
              "download": "notebooks/ONIA-DataScience-procesarea-datelor.ipynb",
              "height": 470,
              "caption": "Exemplele Python din lecție, disponibile și ca notebook Jupyter."
            }
          ],
          "exercises": [
            {
              "title": "Valori lipsă",
              "description": "Ce regulă evită scurgerile de informații la imputare?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Imputăm folosind media calculată pe train+test",
                "Imputer.fit pe train, transform și pe test",
                "Folosim etichetele test",
                "Nu tratăm niciodată lipsurile"
              ],
              "answerIndex": 1,
              "explanation": "Imputerul trebuie învățat pe train.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Outlier",
              "description": "Dacă o observație este foarte îndepărtată de celelalte, înseamnă obligatoriu că este greșită?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Da",
                "Nu; poate fi un caz real relevant",
                "Este automat pozitivă",
                "O ștergem fără verificări"
              ],
              "answerIndex": 1,
              "explanation": "Extremele trebuie investigate în context.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "CSV",
              "description": "Ce argument folosim la read_csv pentru un fișier separat prin ; ?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "sep=';'",
                "sep=','",
                "header=False mereu",
                "index_col=1 mereu"
              ],
              "answerIndex": 0,
              "explanation": "Separatorul este specificat prin sep.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Scalare pentru K-NN",
              "description": "Ce se poate întâmpla fără scalare când coloanele au ordine de mărime foarte diferite?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Distanța poate fi dominată de coloana mare",
                "K-NN ignoră automat unitățile",
                "Devine regresie liniară",
                "Se obține sigur 100% accuracy"
              ],
              "answerIndex": 0,
              "explanation": "Distanțele numerice depind de scările utilizate.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Date categorice noi",
              "description": "Ce face OneHotEncoder(handle_unknown=\"ignore\") pentru o categorie lipsă din train?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "O transformă în aceeași coloană ca prima",
                "Poate produce indicatori zero pe toate coloanele categoriei",
                "O adaugă automat la model deja antrenat",
                "Refuză mereu predicția"
              ],
              "answerIndex": 1,
              "explanation": "O categorie necunoscută nu produce o coloană nouă în timpul transformării.",
              "hint": "Identifică rolul statisticii din definiție și gândește-te la setul evaluat."
            },
            {
              "title": "Completează valori lipsă cu mediana",
              "description": "Imputează trei valori numerice, dintre care una lipsește.",
              "level": "Mediu",
              "hint": "SimpleImputer poate primi np.nan pentru lipsuri.",
              "solutionCode": "import numpy as np\nfrom sklearn.impute import SimpleImputer\nx=np.array([[2.],[np.nan],[10.]])\nimp=SimpleImputer(strategy='median')\nprint(imp.fit_transform(x).ravel())",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.impute</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">SimpleImputer</span>\n<span class=\"n\">x</span><span class=\"o\">=</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">array</span><span class=\"p\">([[</span><span class=\"mf\">2.</span><span class=\"p\">],[</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">nan</span><span class=\"p\">],[</span><span class=\"mf\">10.</span><span class=\"p\">]])</span>\n<span class=\"n\">imp</span><span class=\"o\">=</span><span class=\"n\">SimpleImputer</span><span class=\"p\">(</span><span class=\"n\">strategy</span><span class=\"o\">=</span><span class=\"s1\">&#39;median&#39;</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">imp</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">ravel</span><span class=\"p\">())</span>\n</pre></div>"
            },
            {
              "title": "Separă CSV și calculează media",
              "description": "Dintr-un CSV cu separator ; citește o coloană de scoruri și calculează media.",
              "level": "Mediu",
              "hint": "Folosește io.StringIO pentru un exemplu fără fișier pe disc.",
              "solutionCode": "import io\nimport pandas as pd\ntext='elev;scor\\nAna;8\\nDan;10\\nMara;9\\n'\ndf=pd.read_csv(io.StringIO(text),sep=';')\nprint(df['scor'].mean())",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">io</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"n\">text</span><span class=\"o\">=</span><span class=\"s1\">&#39;elev;scor</span><span class=\"se\">\\n</span><span class=\"s1\">Ana;8</span><span class=\"se\">\\n</span><span class=\"s1\">Dan;10</span><span class=\"se\">\\n</span><span class=\"s1\">Mara;9</span><span class=\"se\">\\n</span><span class=\"s1\">&#39;</span>\n<span class=\"n\">df</span><span class=\"o\">=</span><span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">read_csv</span><span class=\"p\">(</span><span class=\"n\">io</span><span class=\"o\">.</span><span class=\"n\">StringIO</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"p\">),</span><span class=\"n\">sep</span><span class=\"o\">=</span><span class=\"s1\">&#39;;&#39;</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">df</span><span class=\"p\">[</span><span class=\"s1\">&#39;scor&#39;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">mean</span><span class=\"p\">())</span>\n</pre></div>"
            },
            {
              "title": "Verifică predicțiile",
              "description": "Verifică faptul că probabilitățile sunt finite și în intervalul [0,1].",
              "level": "Mediu",
              "hint": "Folosește np.isfinite și comparații element-cu-element.",
              "solutionCode": "import numpy as np\np=np.array([0.2,0.77,0.45])\nassert np.isfinite(p).all()\nassert np.all((p>=0)&(p<=1))\nprint('Date valide')",
              "solutionText": "",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"n\">p</span><span class=\"o\">=</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">array</span><span class=\"p\">([</span><span class=\"mf\">0.2</span><span class=\"p\">,</span><span class=\"mf\">0.77</span><span class=\"p\">,</span><span class=\"mf\">0.45</span><span class=\"p\">])</span>\n<span class=\"k\">assert</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">isfinite</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">all</span><span class=\"p\">()</span>\n<span class=\"k\">assert</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">all</span><span class=\"p\">((</span><span class=\"n\">p</span><span class=\"o\">&gt;=</span><span class=\"mi\">0</span><span class=\"p\">)</span><span class=\"o\">&amp;</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"o\">&lt;=</span><span class=\"mi\">1</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s1\">&#39;Date valide&#39;</span><span class=\"p\">)</span>\n</pre></div>"
            }
          ]
        }
      ]
    },
    {
      "id": "invatare-supervizata",
      "number": "03",
      "icon": "chart",
      "color": "mint",
      "title": "Învățare supervizată",
      "shortTitle": "Învățare supervizată",
      "description": "Modele și algoritmi de regresie și clasificare, de la metode liniare la ansambluri.",
      "label": "Programă generală",
      "sections": [
        {
          "id": "sectiunea-2-1",
          "number": "3.1",
          "title": "Regresia liniară",
          "stage": "general",
          "summary": "De la dreapta y = wx + b la forma matricială, pseudoinversă, gradient descent, regresie polinomială și regularizările L1/L2, cu exemple rezolvate și laborator interactiv.",
          "objectives": [
            "Să explici geometric panta, interceptul și reziduurile unei regresii liniare.",
            "Să treci de la o combinație liniară de caracteristici la scrierea Xθ și să înțelegi soluția OLS și pseudoinversa.",
            "Să calculezi și să aplici pas cu pas gradientele MSE pentru a antrena un model.",
            "Să compari MAE, MSE, RMSE și R² pe date de antrenare și test.",
            "Să utilizezi transformări polinomiale și să recunoști underfitting/overfitting.",
            "Să diferențiezi regularizările Ridge, Lasso și Elastic Net și să le folosești în scikit-learn."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Regresia liniară, de la zero",
              "src": "content/regresie-liniara-onia.html",
              "standalone": "content/regresie-liniara-onia-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Dreapta, gradient descent, polinoame și regularizare",
              "src": "interactive/regresie-liniara-lab.html",
              "height": 740,
              "caption": "Poți deschide laboratorul într-o filă nouă pentru o suprafață de lucru mai mare. Funcționează și local, fără Internet. Simulatorul execută JavaScript, nu cod Python."
            },
            {
              "type": "html",
              "title": "Notebook de lucru — Implementări Python",
              "src": "content/regresie-liniara-notebook.html",
              "height": 700,
              "download": "notebooks/ONIA-Regresia-Liniara.ipynb",
              "caption": "Notebook ONIA cu exemple executabile și explicații de bază. Poate fi deschis în JupyterLab / Colab."
            }
          ],
          "exercises": [
            {
              "title": "Ce valoare prezice dreapta?",
              "level": "Ușor",
              "description": "Pentru modelul ŷ = 2x + 1, ce se obține la x = 3?",
              "type": "mcq",
              "options": [
                "5",
                "6",
                "7",
                "8"
              ],
              "answerIndex": 2,
              "explanation": "Înlocuim x cu 3: 2·3 + 1 = 7."
            },
            {
              "title": "Cât este MSE?",
              "level": "Ușor",
              "description": "Avem valori reale [2, 4, 6] și predicții [3, 2, 7]. Care este MSE?",
              "type": "mcq",
              "options": [
                "1",
                "2",
                "3",
                "6"
              ],
              "answerIndex": 1,
              "explanation": "Reziduurile sunt 1, −2, 1; pătratele lor însumează 6, iar 6/3 = 2."
            },
            {
              "title": "Forma matricei de design",
              "level": "Ușor",
              "description": "Avem 80 de observații și 3 caracteristici. Adăugăm o coloană de 1 pentru intercept. Ce dimensiune are X?",
              "type": "mcq",
              "options": [
                "(80, 3)",
                "(3, 80)",
                "(80, 4)",
                "(4, 3)"
              ],
              "answerIndex": 2,
              "explanation": "Avem un rând pentru fiecare observație și 3 caracteristici plus coloana interceptului."
            },
            {
              "title": "Primul pas de gradient descent",
              "level": "Mediu",
              "description": "Pentru punctele (1,2), (2,3), (3,5), cu w=b=0 și η=0.05, ce coeficienți rezultă după un singur pas MSE?",
              "type": "mcq",
              "options": [
                "w≈0.767, b≈0.333",
                "w≈−0.767, b≈−0.333",
                "w=1.5, b≈0.333",
                "w=0.05, b=0.05"
              ],
              "answerIndex": 0,
              "explanation": "∂J/∂w=−46/3 și ∂J/∂b=−20/3. Aplicăm w←w−η∂J/∂w și b←b−η∂J/∂b."
            },
            {
              "title": "Predicții și eroare medie absolută",
              "level": "Ușor",
              "description": "Se dau x=[0,1,2,3], y=[1,3,6,7], iar dreapta are w=2, b=1. Construiește lista predicțiilor și calculează MAE.",
              "hint": "Construiește predicții cu o list comprehension, apoi adună diferențele absolute.",
              "solutionText": "Predicțiile sunt [1,3,5,7], iar MAE=0.25. Observația cu x=2 este diferită cu o unitate.",
              "solutionCode": "x = [0, 1, 2, 3]\ny = [1, 3, 6, 7]\nw, b = 2, 1\npredictii = [w * val + b for val in x]\nmae = sum(abs(y[i] - predictii[i]) for i in range(len(y))) / len(y)\nprint(predictii)\nprint(mae)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">]</span>\n<span class=\"n\">w</span><span class=\"p\">,</span> <span class=\"n\">b</span> <span class=\"o\">=</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">1</span>\n<span class=\"n\">predictii</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"n\">w</span> <span class=\"o\">*</span> <span class=\"n\">val</span> <span class=\"o\">+</span> <span class=\"n\">b</span> <span class=\"k\">for</span> <span class=\"n\">val</span> <span class=\"ow\">in</span> <span class=\"n\">x</span><span class=\"p\">]</span>\n<span class=\"n\">mae</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"nb\">abs</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"o\">-</span> <span class=\"n\">predictii</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">])</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)))</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">predictii</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">mae</span><span class=\"p\">)</span>\n</code></pre></div>"
            },
            {
              "title": "Calculează OLS fără biblioteci",
              "level": "Mediu",
              "description": "Determină panta și interceptul optim pentru punctele (1,2), (2,3), (3,5) folosind mediile și sumele indicate în lecție.",
              "hint": "Calculează x̄, ȳ, Sxy și Sxx. Apoi w=Sxy/Sxx și b=ȳ−wx̄.",
              "solutionCode": "x = [1, 2, 3]\ny = [2, 3, 5]\nn = len(x)\nmx = sum(x) / n\nmy = sum(y) / n\nsxy = sum((x[i] - mx) * (y[i] - my) for i in range(n))\nsxx = sum((v - mx) ** 2 for v in x)\nw = sxy / sxx\nb = my - w * mx\nprint(round(w, 4), round(b, 4))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">]</span>\n<span class=\"n\">n</span> <span class=\"o\">=</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n<span class=\"n\">mx</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"n\">n</span>\n<span class=\"n\">my</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"n\">n</span>\n<span class=\"n\">sxy</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">x</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"o\">-</span> <span class=\"n\">mx</span><span class=\"p\">)</span> <span class=\"o\">*</span> <span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"o\">-</span> <span class=\"n\">my</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"n\">n</span><span class=\"p\">))</span>\n<span class=\"n\">sxx</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">v</span> <span class=\"o\">-</span> <span class=\"n\">mx</span><span class=\"p\">)</span> <span class=\"o\">**</span> <span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">v</span> <span class=\"ow\">in</span> <span class=\"n\">x</span><span class=\"p\">)</span>\n<span class=\"n\">w</span> <span class=\"o\">=</span> <span class=\"n\">sxy</span> <span class=\"o\">/</span> <span class=\"n\">sxx</span>\n<span class=\"n\">b</span> <span class=\"o\">=</span> <span class=\"n\">my</span> <span class=\"o\">-</span> <span class=\"n\">w</span> <span class=\"o\">*</span> <span class=\"n\">mx</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">w</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">),</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">b</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Verifică gradientul numeric",
              "level": "Mediu",
              "description": "Scrie o funcție care primește x, y, w, b și întoarce ∂MSE/∂w și ∂MSE/∂b. Testează pe punctele (1,2), (2,3), (3,5) cu parametrii zero.",
              "hint": "Adună reziduurile înmulțite cu x pentru derivata după w; pentru b adună numai reziduurile.",
              "solutionCode": "def gradient(x, y, w, b):\n    n = len(x)\n    gw = 0\n    gb = 0\n    for i in range(n):\n        eroare = w * x[i] + b - y[i]\n        gw += eroare * x[i]\n        gb += eroare\n    return 2 * gw / n, 2 * gb / n\n\nprint(gradient([1, 2, 3], [2, 3, 5], 0, 0))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">gradient</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">w</span><span class=\"p\">,</span> <span class=\"n\">b</span><span class=\"p\">):</span>\n    <span class=\"n\">n</span> <span class=\"o\">=</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n    <span class=\"n\">gw</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n    <span class=\"n\">gb</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n    <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"n\">n</span><span class=\"p\">):</span>\n        <span class=\"n\">eroare</span> <span class=\"o\">=</span> <span class=\"n\">w</span> <span class=\"o\">*</span> <span class=\"n\">x</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"o\">+</span> <span class=\"n\">b</span> <span class=\"o\">-</span> <span class=\"n\">y</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span>\n        <span class=\"n\">gw</span> <span class=\"o\">+=</span> <span class=\"n\">eroare</span> <span class=\"o\">*</span> <span class=\"n\">x</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span>\n        <span class=\"n\">gb</span> <span class=\"o\">+=</span> <span class=\"n\">eroare</span>\n    <span class=\"k\">return</span> <span class=\"mi\">2</span> <span class=\"o\">*</span> <span class=\"n\">gw</span> <span class=\"o\">/</span> <span class=\"n\">n</span><span class=\"p\">,</span> <span class=\"mi\">2</span> <span class=\"o\">*</span> <span class=\"n\">gb</span> <span class=\"o\">/</span> <span class=\"n\">n</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">gradient</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">],</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Zece actualizări ale dreptei",
              "level": "Mediu",
              "description": "Antrenează o regresie folosind 10 pași de gradient descent și afișează w, b și MSE după fiecare iterație.",
              "hint": "Nu modifica parametrii până nu ai calculat ambele componente ale gradientului pentru toate punctele.",
              "solutionCode": "x = [1, 2, 3]\ny = [2, 3, 5]\nw = b = 0.0\neta = 0.05\nfor pas in range(10):\n    erori = [w * x[i] + b - y[i] for i in range(len(x))]\n    gw = 2 * sum(erori[i] * x[i] for i in range(len(x))) / len(x)\n    gb = 2 * sum(erori) / len(x)\n    w -= eta * gw\n    b -= eta * gb\n    mse = sum((w * x[i] + b - y[i]) ** 2 for i in range(len(x))) / len(x)\n    print(pas + 1, round(w, 3), round(b, 3), round(mse, 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">]</span>\n<span class=\"n\">w</span> <span class=\"o\">=</span> <span class=\"n\">b</span> <span class=\"o\">=</span> <span class=\"mf\">0.0</span>\n<span class=\"n\">eta</span> <span class=\"o\">=</span> <span class=\"mf\">0.05</span>\n<span class=\"k\">for</span> <span class=\"n\">pas</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"mi\">10</span><span class=\"p\">):</span>\n    <span class=\"n\">erori</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"n\">w</span> <span class=\"o\">*</span> <span class=\"n\">x</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"o\">+</span> <span class=\"n\">b</span> <span class=\"o\">-</span> <span class=\"n\">y</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">))]</span>\n    <span class=\"n\">gw</span> <span class=\"o\">=</span> <span class=\"mi\">2</span> <span class=\"o\">*</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">erori</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"n\">x</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)))</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n    <span class=\"n\">gb</span> <span class=\"o\">=</span> <span class=\"mi\">2</span> <span class=\"o\">*</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">erori</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n    <span class=\"n\">w</span> <span class=\"o\">-=</span> <span class=\"n\">eta</span> <span class=\"o\">*</span> <span class=\"n\">gw</span>\n    <span class=\"n\">b</span> <span class=\"o\">-=</span> <span class=\"n\">eta</span> <span class=\"o\">*</span> <span class=\"n\">gb</span>\n    <span class=\"n\">mse</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">w</span> <span class=\"o\">*</span> <span class=\"n\">x</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"o\">+</span> <span class=\"n\">b</span> <span class=\"o\">-</span> <span class=\"n\">y</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">])</span> <span class=\"o\">**</span> <span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)))</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">pas</span> <span class=\"o\">+</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">w</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">),</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">b</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">),</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">mse</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Pseudoinversă și caracteristici duplicate",
              "level": "Mediu",
              "description": "Construiește o matrice cu coloana de intercept și două coloane identice. Folosește np.linalg.pinv pentru a găsi coeficienții și verifică predicțiile.",
              "hint": "Cu două caracteristici identice nu poți identifica separat coeficienții, dar pseudoinversa oferă o soluție cu normă minimă.",
              "solutionCode": "import numpy as np\nX = np.array([[1, 1, 1], [1, 2, 2], [1, 3, 3]], dtype=float)\ny = np.array([2, 3, 4], dtype=float)\ntheta = np.linalg.pinv(X) @ y\nprint(np.round(theta, 3))\nprint(np.round(X @ theta, 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">array</span><span class=\"p\">([[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">]],</span> <span class=\"n\">dtype</span><span class=\"o\">=</span><span class=\"nb\">float</span><span class=\"p\">)</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">array</span><span class=\"p\">([</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">],</span> <span class=\"n\">dtype</span><span class=\"o\">=</span><span class=\"nb\">float</span><span class=\"p\">)</span>\n<span class=\"n\">theta</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">linalg</span><span class=\"o\">.</span><span class=\"n\">pinv</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">)</span> <span class=\"o\">@</span> <span class=\"n\">y</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">round</span><span class=\"p\">(</span><span class=\"n\">theta</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">round</span><span class=\"p\">(</span><span class=\"n\">X</span> <span class=\"o\">@</span> <span class=\"n\">theta</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Caracteristici polinomiale",
              "level": "Ușor",
              "description": "Scrie o funcție care primește lista [−2, −1, 0, 1, 2] și gradul 3, apoi returnează [x, x², x³] pentru fiecare element.",
              "hint": "Folosește două bucle for și operatorul **.",
              "solutionCode": "def polinom(x, grad):\n    matrice = []\n    for valoare in x:\n        rand = []\n        for putere in range(1, grad + 1):\n            rand.append(valoare ** putere)\n        matrice.append(rand)\n    return matrice\n\nprint(polinom([-2, -1, 0, 1, 2], 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">polinom</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">grad</span><span class=\"p\">):</span>\n    <span class=\"n\">matrice</span> <span class=\"o\">=</span> <span class=\"p\">[]</span>\n    <span class=\"k\">for</span> <span class=\"n\">valoare</span> <span class=\"ow\">in</span> <span class=\"n\">x</span><span class=\"p\">:</span>\n        <span class=\"n\">rand</span> <span class=\"o\">=</span> <span class=\"p\">[]</span>\n        <span class=\"k\">for</span> <span class=\"n\">putere</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"n\">grad</span> <span class=\"o\">+</span> <span class=\"mi\">1</span><span class=\"p\">):</span>\n            <span class=\"n\">rand</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">(</span><span class=\"n\">valoare</span> <span class=\"o\">**</span> <span class=\"n\">putere</span><span class=\"p\">)</span>\n        <span class=\"n\">matrice</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">(</span><span class=\"n\">rand</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"n\">matrice</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">polinom</span><span class=\"p\">([</span><span class=\"o\">-</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">],</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Subînvățare sau supraînvățare?",
              "level": "Mediu",
              "description": "Un polinom are MSE train=0.005 și MSE validare=7.4. Cum interpretezi diferența și ce ai putea încerca?",
              "hint": "Comparația este între eroarea pe date văzute și pe date nevăzute.",
              "solutionText": "Este un indiciu puternic de overfitting: modelul a memorat prea bine datele de antrenare. Încearcă grad mai mic, regularizare mai mare, mai multe date sau o procedură de validare mai stabilă."
            },
            {
              "title": "Ce penalizare poate elimina caracteristici?",
              "level": "Ușor",
              "description": "Ce metodă are tendința de a produce coeficienți exact zero?",
              "type": "mcq",
              "options": [
                "Ridge / L2",
                "Lasso / L1",
                "OLS simplu",
                "Niciuna"
              ],
              "answerIndex": 1,
              "explanation": "Penalizarea L1 are un vârf în zero și poate produce soluții sparse."
            },
            {
              "title": "Ridge de la zero",
              "level": "Mediu",
              "description": "Pentru x=[1,2,3], y=[2,3,5], implementează regresia Ridge în cazul unei singure caracteristici, pentru λ=0 și λ=2. Compară pantele.",
              "hint": "Panta Ridge este Sxy/(Sxx+λ). Interceptul rămâne b=ȳ−wx̄.",
              "solutionCode": "x = [1, 2, 3]\ny = [2, 3, 5]\nmx = sum(x) / len(x)\nmy = sum(y) / len(y)\nsxy = sum((a-mx)*(z-my) for a,z in zip(x,y))\nsxx = sum((a-mx)**2 for a in x)\nfor lam in [0, 2]:\n    w = sxy / (sxx + lam)\n    b = my - w * mx\n    print(lam, round(w, 3), round(b, 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">]</span>\n<span class=\"n\">mx</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n<span class=\"n\">my</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"n\">sxy</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">a</span><span class=\"o\">-</span><span class=\"n\">mx</span><span class=\"p\">)</span><span class=\"o\">*</span><span class=\"p\">(</span><span class=\"n\">z</span><span class=\"o\">-</span><span class=\"n\">my</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">z</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span><span class=\"n\">y</span><span class=\"p\">))</span>\n<span class=\"n\">sxx</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">a</span><span class=\"o\">-</span><span class=\"n\">mx</span><span class=\"p\">)</span><span class=\"o\">**</span><span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">a</span> <span class=\"ow\">in</span> <span class=\"n\">x</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">lam</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">]:</span>\n    <span class=\"n\">w</span> <span class=\"o\">=</span> <span class=\"n\">sxy</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"n\">sxx</span> <span class=\"o\">+</span> <span class=\"n\">lam</span><span class=\"p\">)</span>\n    <span class=\"n\">b</span> <span class=\"o\">=</span> <span class=\"n\">my</span> <span class=\"o\">-</span> <span class=\"n\">w</span> <span class=\"o\">*</span> <span class=\"n\">mx</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">lam</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">w</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">),</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">b</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Soft threshold pentru Lasso",
              "level": "Dificil",
              "description": "Implementează funcția S(z, t) din lecție și verifică rezultatele pentru z=2, −2, 0.4 și t=1. Ce observi?",
              "hint": "Dacă |z|≤t returnezi zero; altfel micșorezi valoarea absolută cu t.",
              "solutionCode": "def prag_moale(z, prag):\n    if z > prag:\n        return z - prag\n    if z < -prag:\n        return z + prag\n    return 0.0\n\nfor z in [2, -2, 0.4]:\n    print(z, prag_moale(z, 1))\n# 2 -> 1, -2 -> -1, 0.4 -> 0\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">prag_moale</span><span class=\"p\">(</span><span class=\"n\">z</span><span class=\"p\">,</span> <span class=\"n\">prag</span><span class=\"p\">):</span>\n    <span class=\"k\">if</span> <span class=\"n\">z</span> <span class=\"o\">&gt;</span> <span class=\"n\">prag</span><span class=\"p\">:</span>\n        <span class=\"k\">return</span> <span class=\"n\">z</span> <span class=\"o\">-</span> <span class=\"n\">prag</span>\n    <span class=\"k\">if</span> <span class=\"n\">z</span> <span class=\"o\">&lt;</span> <span class=\"o\">-</span><span class=\"n\">prag</span><span class=\"p\">:</span>\n        <span class=\"k\">return</span> <span class=\"n\">z</span> <span class=\"o\">+</span> <span class=\"n\">prag</span>\n    <span class=\"k\">return</span> <span class=\"mf\">0.0</span>\n\n<span class=\"k\">for</span> <span class=\"n\">z</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"o\">-</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mf\">0.4</span><span class=\"p\">]:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">z</span><span class=\"p\">,</span> <span class=\"n\">prag_moale</span><span class=\"p\">(</span><span class=\"n\">z</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">))</span>\n<span class=\"c1\"># 2 -&gt; 1, -2 -&gt; -1, 0.4 -&gt; 0</span>\n</code></pre></div>"
            },
            {
              "title": "Pipeline fără data leakage",
              "level": "Dificil",
              "description": "Folosește PolynomialFeatures, StandardScaler și Ridge într-un Pipeline. Împarte datele în train/test înainte de fit și evaluează MSE pe test.",
              "hint": "Nu apela fit_transform pe toate datele înainte de train_test_split. Lasă Pipeline să învețe transformările pe train.",
              "solutionCode": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import PolynomialFeatures, StandardScaler\nfrom sklearn.linear_model import Ridge\nfrom sklearn.metrics import mean_squared_error\n\nX = np.linspace(-1, 1, 30).reshape(-1, 1)\ny = 1 + 2 * X[:, 0]**2\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.3, random_state=42\n)\nmodel = make_pipeline(\n    PolynomialFeatures(degree=2, include_bias=False),\n    StandardScaler(),\n    Ridge(alpha=0.01)\n)\nmodel.fit(X_train, y_train)\npredictii = model.predict(X_test)\nprint(mean_squared_error(y_test, predictii))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">PolynomialFeatures</span><span class=\"p\">,</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Ridge</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">mean_squared_error</span>\n\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">linspace</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">30</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">reshape</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">)</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"mi\">1</span> <span class=\"o\">+</span> <span class=\"mi\">2</span> <span class=\"o\">*</span> <span class=\"n\">X</span><span class=\"p\">[:,</span> <span class=\"mi\">0</span><span class=\"p\">]</span><span class=\"o\">**</span><span class=\"mi\">2</span>\n<span class=\"n\">X_train</span><span class=\"p\">,</span> <span class=\"n\">X_test</span><span class=\"p\">,</span> <span class=\"n\">y_train</span><span class=\"p\">,</span> <span class=\"n\">y_test</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span>\n    <span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">test_size</span><span class=\"o\">=</span><span class=\"mf\">0.3</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span>\n<span class=\"p\">)</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span>\n    <span class=\"n\">PolynomialFeatures</span><span class=\"p\">(</span><span class=\"n\">degree</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"n\">include_bias</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">),</span>\n    <span class=\"n\">StandardScaler</span><span class=\"p\">(),</span>\n    <span class=\"n\">Ridge</span><span class=\"p\">(</span><span class=\"n\">alpha</span><span class=\"o\">=</span><span class=\"mf\">0.01</span><span class=\"p\">)</span>\n<span class=\"p\">)</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X_train</span><span class=\"p\">,</span> <span class=\"n\">y_train</span><span class=\"p\">)</span>\n<span class=\"n\">predictii</span> <span class=\"o\">=</span> <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">X_test</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">mean_squared_error</span><span class=\"p\">(</span><span class=\"n\">y_test</span><span class=\"p\">,</span> <span class=\"n\">predictii</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Investigație interactivă: outlierii",
              "level": "Mediu",
              "description": "Deschide laboratorul. Alege setul de date cu outlier, activează comparația cu dreapta OLS și mută punctul atipic. Descrie efectul asupra pantei și MSE.",
              "hint": "Un reziduu mare contribuie cu pătratul său la MSE; observă cât de sensibilă este dreapta optimă.",
              "solutionText": "Punctul foarte îndepărtat poate trage dreapta spre el și modifica considerabil panta/interceptul. Observă că MSE penalizează puternic acele erori mari."
            }
          ]
        },
        {
          "id": "sectiunea-2-2",
          "number": "3.2",
          "title": "Regresia logistică",
          "stage": "general",
          "summary": "Înțelege clasificarea binară: scor liniar, sigmoid, probabilitate, log-loss, gradient descent, metrici, regularizare, multiclasă și scikit-learn. Include simulator cu antrenare pas cu pas.",
          "objectives": [
            "Să explici diferența dintre clasificare și regresie și limitele folosirii pragului peste o dreaptă de regresie.",
            "Să calculezi sigmoidul, probabilitățile și deciziile pentru diferite praguri.",
            "Să deduci și să aplici gradientul p−y în regresia logistică binară.",
            "Să interpretezi matricea de confuzie, precision, recall, F1 și log-loss.",
            "Să antrenezi modele logistice de la zero și cu scikit-learn, fără scurgere de date.",
            "Să alegi regularizarea, solverul și pragul și să recunoști când regresia logistică este potrivită."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Regresia logistică",
              "src": "content/regresie-logistica-onia.html",
              "standalone": "content/regresie-logistica-onia-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Sigmoid, gradient descent și decizia de clasificare",
              "src": "interactive/regresie-logistica-lab.html",
              "height": 850,
              "caption": "Deschide laboratorul într-o filă nouă pentru a utiliza toate controalele. Funcționează și fără Internet; implementează simularea în JavaScript."
            },
            {
              "type": "html",
              "title": "Notebook ONIA — Clasificare logistică de la zero și scikit-learn",
              "src": "content/regresie-logistica-notebook.html",
              "height": 650,
              "download": "notebooks/ONIA-Regresia-Logistica.ipynb",
              "caption": "Notebook de învățare cu implementări Python executabile, exemple și exerciții."
            }
          ],
          "exercises": [
            {
              "title": "Clasificare sau regresie?",
              "level": "Ușor",
              "description": "Care dintre următoarele probleme este o problemă tipică pentru regresia logistică?",
              "type": "mcq",
              "options": [
                "Prezicerea temperaturii mâine în grade Celsius",
                "Estimarea prețului unei locuințe",
                "Decizia dacă un mesaj este spam sau nu",
                "Estimarea numărului de kilometri parcurși"
              ],
              "answerIndex": 2,
              "explanation": "Problema spam/non-spam are două etichete discrete, deci este clasificare binară."
            },
            {
              "title": "Ce întoarce sigmoidul?",
              "level": "Ușor",
              "description": "Calculăm σ(0). Care este rezultatul?",
              "type": "mcq",
              "options": [
                "0",
                "0,5",
                "1",
                "−1"
              ],
              "answerIndex": 1,
              "explanation": "σ(0)=1/(1+e⁰)=1/2=0,5."
            },
            {
              "title": "De ce nu direct regresie liniară?",
              "level": "Ușor",
              "description": "Care explicație descrie corect diferența de bază?",
              "type": "mcq",
              "options": [
                "Regresia liniară nu poate fi niciodată folosită pentru clasificare",
                "Regresia liniară poate produce valori în afara [0,1] și optimizează altă funcție de pierdere",
                "Sigmoidul întoarce doar valori întregi 0 sau 1",
                "Regresia logistică nu are coeficienți"
              ],
              "answerIndex": 1,
              "explanation": "Clasificatorul linie+prag este posibil, însă nu optimizează log-loss și nu produce automat probabilități valide."
            },
            {
              "title": "Predicția pentru un elev",
              "level": "Ușor",
              "description": "Modelul are w=1, b=−3 și x=4. Calculează scorul, probabilitatea și clasa la prag 0,5.",
              "hint": "Calculează mai întâi z=wx+b, apoi 1/(1+exp(−z)).",
              "solutionText": "z=1, p≈0,731 și clasa este 1.",
              "solutionCode": "import math\nw, b, x = 1, -3, 4\nz = w * x + b\np = 1 / (1 + math.exp(-z))\nprint('z =', z)\nprint('p =', round(p, 3))\nprint('Clasa =', int(p >= 0.5))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">math</span>\n<span class=\"n\">w</span><span class=\"p\">,</span> <span class=\"n\">b</span><span class=\"p\">,</span> <span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"o\">-</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span>\n<span class=\"n\">z</span> <span class=\"o\">=</span> <span class=\"n\">w</span> <span class=\"o\">*</span> <span class=\"n\">x</span> <span class=\"o\">+</span> <span class=\"n\">b</span>\n<span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"mi\">1</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"mi\">1</span> <span class=\"o\">+</span> <span class=\"n\">math</span><span class=\"o\">.</span><span class=\"n\">exp</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"n\">z</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s1\">&#39;z =&#39;</span><span class=\"p\">,</span> <span class=\"n\">z</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s1\">&#39;p =&#39;</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s1\">&#39;Clasa =&#39;</span><span class=\"p\">,</span> <span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">p</span> <span class=\"o\">&gt;=</span> <span class=\"mf\">0.5</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Cum schimbă pragul clasificarea?",
              "level": "Ușor",
              "description": "Avem probabilitatea p=0,68. Ce se întâmplă dacă modificăm pragul de la 0,5 la 0,8?",
              "type": "mcq",
              "options": [
                "Se schimbă probabilitatea p",
                "Se schimbă eticheta din 1 în 0, fără reantrenare",
                "Se schimbă automat coeficientul w",
                "Nu se schimbă nimic"
              ],
              "answerIndex": 1,
              "explanation": "La prag 0,5 avem clasa 1; la prag 0,8 avem clasa 0. Probabilitatea rămâne 0,68."
            },
            {
              "title": "Calculează log-loss",
              "level": "Mediu",
              "description": "Pentru eticheta y=1 și probabilitatea prezisă p=0,2, calculează log-loss. Compară cu p=0,9.",
              "hint": "Dacă y=1, L=−log(p), iar logaritmul este natural.",
              "solutionText": "Prima predicție are pierderea ≈1,609; a doua ≈0,105. Modelul este penalizat mai mult când acordă probabilitate mică etichetei reale.",
              "solutionCode": "import math\nfor p in [0.2, 0.9]:\n    pierdere = -math.log(p)\n    print(p, round(pierdere, 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">math</span>\n<span class=\"k\">for</span> <span class=\"n\">p</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"mf\">0.2</span><span class=\"p\">,</span> <span class=\"mf\">0.9</span><span class=\"p\">]:</span>\n    <span class=\"n\">pierdere</span> <span class=\"o\">=</span> <span class=\"o\">-</span><span class=\"n\">math</span><span class=\"o\">.</span><span class=\"n\">log</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">pierdere</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "De ce log-loss este preferat aici?",
              "level": "Mediu",
              "description": "La y=1, ce se întâmplă cu log-loss când probabilitatea prezisă p tinde spre 0?",
              "type": "mcq",
              "options": [
                "Tinde spre 0",
                "Tinde spre 1",
                "Crește fără limită",
                "Devine negativ"
              ],
              "answerIndex": 2,
              "explanation": "Termenul −log(p) crește nelimitat când p se apropie de 0."
            },
            {
              "title": "Un pas manual de gradient descent",
              "level": "Mediu",
              "description": "Se dau x=[1,2,3,4], y=[0,0,1,1], w=b=0 și η=0,2. Calculează gradientul și parametrii după primul pas.",
              "hint": "La w=b=0, fiecare probabilitate este 0,5. Derivata după w este media produselor (p−y)·x.",
              "solutionText": "Gradientul este (−0,5; 0), iar după pas rezultă w=0,1 și b=0.",
              "solutionCode": "x = [1, 2, 3, 4]\ny = [0, 0, 1, 1]\nw = b = 0.0\neta = 0.2\ngw = sum((0.5 - y[i]) * x[i] for i in range(4)) / 4\ngb = sum(0.5 - yy for yy in y) / 4\nw -= eta * gw\nb -= eta * gb\nprint(gw, gb)\nprint(round(w, 3), round(b, 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">w</span> <span class=\"o\">=</span> <span class=\"n\">b</span> <span class=\"o\">=</span> <span class=\"mf\">0.0</span>\n<span class=\"n\">eta</span> <span class=\"o\">=</span> <span class=\"mf\">0.2</span>\n<span class=\"n\">gw</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"mf\">0.5</span> <span class=\"o\">-</span> <span class=\"n\">y</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">])</span> <span class=\"o\">*</span> <span class=\"n\">x</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"mi\">4</span><span class=\"p\">))</span> <span class=\"o\">/</span> <span class=\"mi\">4</span>\n<span class=\"n\">gb</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"mf\">0.5</span> <span class=\"o\">-</span> <span class=\"n\">yy</span> <span class=\"k\">for</span> <span class=\"n\">yy</span> <span class=\"ow\">in</span> <span class=\"n\">y</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"mi\">4</span>\n<span class=\"n\">w</span> <span class=\"o\">-=</span> <span class=\"n\">eta</span> <span class=\"o\">*</span> <span class=\"n\">gw</span>\n<span class=\"n\">b</span> <span class=\"o\">-=</span> <span class=\"n\">eta</span> <span class=\"o\">*</span> <span class=\"n\">gb</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">gw</span><span class=\"p\">,</span> <span class=\"n\">gb</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">w</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">),</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">b</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Implementarea sigmoidului stabil numeric",
              "level": "Mediu",
              "description": "Scrie o funcție sigmoid care nu provoacă OverflowError nici pentru scoruri foarte negative, cum ar fi −1000.",
              "hintCode": "import math\n# Pentru z >= 0 folosește exp(-z).\n# Pentru z < 0 calculează e = exp(z) și întoarce e/(1+e).\n",
              "solutionCode": "import math\n\ndef sigmoid(z):\n    if z >= 0:\n        return 1 / (1 + math.exp(-z))\n    e = math.exp(z)\n    return e / (1 + e)\n\nprint(sigmoid(-1000))\nprint(sigmoid(1000))\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">math</span>\n<span class=\"c1\"># Pentru z &gt;= 0 folosește exp(-z).</span>\n<span class=\"c1\"># Pentru z &lt; 0 calculează e = exp(z) și întoarce e/(1+e).</span>\n</code></pre></div>",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">math</span>\n\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">sigmoid</span><span class=\"p\">(</span><span class=\"n\">z</span><span class=\"p\">):</span>\n    <span class=\"k\">if</span> <span class=\"n\">z</span> <span class=\"o\">&gt;=</span> <span class=\"mi\">0</span><span class=\"p\">:</span>\n        <span class=\"k\">return</span> <span class=\"mi\">1</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"mi\">1</span> <span class=\"o\">+</span> <span class=\"n\">math</span><span class=\"o\">.</span><span class=\"n\">exp</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"n\">z</span><span class=\"p\">))</span>\n    <span class=\"n\">e</span> <span class=\"o\">=</span> <span class=\"n\">math</span><span class=\"o\">.</span><span class=\"n\">exp</span><span class=\"p\">(</span><span class=\"n\">z</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"n\">e</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"mi\">1</span> <span class=\"o\">+</span> <span class=\"n\">e</span><span class=\"p\">)</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">sigmoid</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mi\">1000</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">sigmoid</span><span class=\"p\">(</span><span class=\"mi\">1000</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Antrenează modelul de la zero",
              "level": "Mediu",
              "description": "Implementează 500 de iterații de gradient descent pentru punctele (1,0), (2,0), (3,1), (4,1) și afișează pierderea la fiecare 100 de iterații.",
              "hint": "Calculează întâi toate erorile (p−y); abia apoi modifică w și b.",
              "solutionCode": "import math\nx = [1, 2, 3, 4]\ny = [0, 0, 1, 1]\nw = b = 0.0\neta = 0.1\nfor epoca in range(500):\n    greseli = []\n    pierdere = 0.0\n    for xi, yi in zip(x, y):\n        z = w * xi + b\n        p = 1 / (1 + math.exp(-z))\n        greseli.append(p - yi)\n        pierdere += math.log1p(math.exp(z)) - yi * z\n    gw = sum(greseli[i] * x[i] for i in range(len(x))) / len(x)\n    gb = sum(greseli) / len(x)\n    w -= eta * gw\n    b -= eta * gb\n    if (epoca + 1) % 100 == 0:\n        print(epoca + 1, round(pierdere / len(x), 4))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">math</span>\n<span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">w</span> <span class=\"o\">=</span> <span class=\"n\">b</span> <span class=\"o\">=</span> <span class=\"mf\">0.0</span>\n<span class=\"n\">eta</span> <span class=\"o\">=</span> <span class=\"mf\">0.1</span>\n<span class=\"k\">for</span> <span class=\"n\">epoca</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"mi\">500</span><span class=\"p\">):</span>\n    <span class=\"n\">greseli</span> <span class=\"o\">=</span> <span class=\"p\">[]</span>\n    <span class=\"n\">pierdere</span> <span class=\"o\">=</span> <span class=\"mf\">0.0</span>\n    <span class=\"k\">for</span> <span class=\"n\">xi</span><span class=\"p\">,</span> <span class=\"n\">yi</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">):</span>\n        <span class=\"n\">z</span> <span class=\"o\">=</span> <span class=\"n\">w</span> <span class=\"o\">*</span> <span class=\"n\">xi</span> <span class=\"o\">+</span> <span class=\"n\">b</span>\n        <span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"mi\">1</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"mi\">1</span> <span class=\"o\">+</span> <span class=\"n\">math</span><span class=\"o\">.</span><span class=\"n\">exp</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"n\">z</span><span class=\"p\">))</span>\n        <span class=\"n\">greseli</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">(</span><span class=\"n\">p</span> <span class=\"o\">-</span> <span class=\"n\">yi</span><span class=\"p\">)</span>\n        <span class=\"n\">pierdere</span> <span class=\"o\">+=</span> <span class=\"n\">math</span><span class=\"o\">.</span><span class=\"n\">log1p</span><span class=\"p\">(</span><span class=\"n\">math</span><span class=\"o\">.</span><span class=\"n\">exp</span><span class=\"p\">(</span><span class=\"n\">z</span><span class=\"p\">))</span> <span class=\"o\">-</span> <span class=\"n\">yi</span> <span class=\"o\">*</span> <span class=\"n\">z</span>\n    <span class=\"n\">gw</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">greseli</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"n\">x</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)))</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n    <span class=\"n\">gb</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">greseli</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n    <span class=\"n\">w</span> <span class=\"o\">-=</span> <span class=\"n\">eta</span> <span class=\"o\">*</span> <span class=\"n\">gw</span>\n    <span class=\"n\">b</span> <span class=\"o\">-=</span> <span class=\"n\">eta</span> <span class=\"o\">*</span> <span class=\"n\">gb</span>\n    <span class=\"k\">if</span> <span class=\"p\">(</span><span class=\"n\">epoca</span> <span class=\"o\">+</span> <span class=\"mi\">1</span><span class=\"p\">)</span> <span class=\"o\">%</span> <span class=\"mi\">100</span> <span class=\"o\">==</span> <span class=\"mi\">0</span><span class=\"p\">:</span>\n        <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">epoca</span> <span class=\"o\">+</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">pierdere</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">),</span> <span class=\"mi\">4</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Matricea de confuzie",
              "level": "Ușor",
              "description": "Pentru etichetele reale [0,0,1,1] și predicțiile [0,1,0,1], care sunt valorile TP, FP, FN, TN?",
              "type": "mcq",
              "options": [
                "1,1,1,1",
                "2,0,0,2",
                "1,0,1,2",
                "0,2,2,0"
              ],
              "answerIndex": 0,
              "explanation": "Un pozitiv corect, un fals pozitiv, un fals negativ, un negativ corect."
            },
            {
              "title": "Precision și recall din date brute",
              "level": "Mediu",
              "description": "Construiește o funcție care calculează precision și recall pe baza listelor cu etichete reale și prezise.",
              "hint": "Numără întâi TP, FP și FN. Tratează separat împărțirea la zero.",
              "solutionCode": "def precision_recall(real, pred):\n    tp = fp = fn = 0\n    for a, b in zip(real, pred):\n        if a == 1 and b == 1:\n            tp += 1\n        elif a == 0 and b == 1:\n            fp += 1\n        elif a == 1 and b == 0:\n            fn += 1\n    precision = tp / (tp + fp) if tp + fp else 0.0\n    recall = tp / (tp + fn) if tp + fn else 0.0\n    return precision, recall\n\nprint(precision_recall([0,0,1,1], [0,1,0,1]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">precision_recall</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span> <span class=\"n\">pred</span><span class=\"p\">):</span>\n    <span class=\"n\">tp</span> <span class=\"o\">=</span> <span class=\"n\">fp</span> <span class=\"o\">=</span> <span class=\"n\">fn</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n    <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span> <span class=\"n\">pred</span><span class=\"p\">):</span>\n        <span class=\"k\">if</span> <span class=\"n\">a</span> <span class=\"o\">==</span> <span class=\"mi\">1</span> <span class=\"ow\">and</span> <span class=\"n\">b</span> <span class=\"o\">==</span> <span class=\"mi\">1</span><span class=\"p\">:</span>\n            <span class=\"n\">tp</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n        <span class=\"k\">elif</span> <span class=\"n\">a</span> <span class=\"o\">==</span> <span class=\"mi\">0</span> <span class=\"ow\">and</span> <span class=\"n\">b</span> <span class=\"o\">==</span> <span class=\"mi\">1</span><span class=\"p\">:</span>\n            <span class=\"n\">fp</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n        <span class=\"k\">elif</span> <span class=\"n\">a</span> <span class=\"o\">==</span> <span class=\"mi\">1</span> <span class=\"ow\">and</span> <span class=\"n\">b</span> <span class=\"o\">==</span> <span class=\"mi\">0</span><span class=\"p\">:</span>\n            <span class=\"n\">fn</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n    <span class=\"n\">precision</span> <span class=\"o\">=</span> <span class=\"n\">tp</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"n\">tp</span> <span class=\"o\">+</span> <span class=\"n\">fp</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">tp</span> <span class=\"o\">+</span> <span class=\"n\">fp</span> <span class=\"k\">else</span> <span class=\"mf\">0.0</span>\n    <span class=\"n\">recall</span> <span class=\"o\">=</span> <span class=\"n\">tp</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"n\">tp</span> <span class=\"o\">+</span> <span class=\"n\">fn</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">tp</span> <span class=\"o\">+</span> <span class=\"n\">fn</span> <span class=\"k\">else</span> <span class=\"mf\">0.0</span>\n    <span class=\"k\">return</span> <span class=\"n\">precision</span><span class=\"p\">,</span> <span class=\"n\">recall</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">precision_recall</span><span class=\"p\">([</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">]))</span>\n</code></pre></div>"
            },
            {
              "title": "Accuracy în clase dezechilibrate",
              "level": "Mediu",
              "description": "Într-un set cu 990 de exemple negative și 10 pozitive, un clasificator prezice mereu clasa 0. Ce metrici vei obține?",
              "type": "mcq",
              "options": [
                "Accuracy=99%, recall pozitiv=0%",
                "Accuracy=100%, recall pozitiv=100%",
                "Accuracy=50%, recall pozitiv=50%",
                "Accuracy=0%, recall pozitiv=99%"
              ],
              "answerIndex": 0,
              "explanation": "990/1000=99%, dar niciun exemplu pozitiv nu este găsit."
            },
            {
              "title": "Formă matricială și vectorizare",
              "level": "Mediu",
              "description": "Construiește o matrice X cu 3 observații și 2 caracteristici; calculează probabilitățile folosind NumPy și operatorul @.",
              "hintCode": "import numpy as np\n# z = X @ w + b\n# p = 1 / (1 + np.exp(-z))\n",
              "solutionCode": "import numpy as np\nX = np.array([[1,2], [2,0], [3,1]], dtype=float)\nw = np.array([0.5, -0.3])\nb = 0.1\nz = X @ w + b\np = 1 / (1 + np.exp(-z))\nprint(np.round(p, 3))\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"c1\"># z = X @ w + b</span>\n<span class=\"c1\"># p = 1 / (1 + np.exp(-z))</span>\n</code></pre></div>",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">array</span><span class=\"p\">([[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">3</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">]],</span> <span class=\"n\">dtype</span><span class=\"o\">=</span><span class=\"nb\">float</span><span class=\"p\">)</span>\n<span class=\"n\">w</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">array</span><span class=\"p\">([</span><span class=\"mf\">0.5</span><span class=\"p\">,</span> <span class=\"o\">-</span><span class=\"mf\">0.3</span><span class=\"p\">])</span>\n<span class=\"n\">b</span> <span class=\"o\">=</span> <span class=\"mf\">0.1</span>\n<span class=\"n\">z</span> <span class=\"o\">=</span> <span class=\"n\">X</span> <span class=\"o\">@</span> <span class=\"n\">w</span> <span class=\"o\">+</span> <span class=\"n\">b</span>\n<span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"mi\">1</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"mi\">1</span> <span class=\"o\">+</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">exp</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"n\">z</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">round</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Pipeline fără data leakage",
              "level": "Dificil",
              "description": "Construiește un Pipeline cu StandardScaler și LogisticRegression, antrenat pe două clase Iris. Afișează F1 pe setul de test.",
              "hint": "Aplică train_test_split înainte de model.fit. Transformările trebuie învățate numai pe antrenare.",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import f1_score\n\nX, y = load_iris(return_X_y=True)\nX, y = X[:100], y[:100]\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.25, stratify=y, random_state=42\n)\nmodel = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000))\nmodel.fit(X_train, y_train)\nprint(f1_score(y_test, model.predict(X_test)))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">load_iris</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LogisticRegression</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">f1_score</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">load_iris</span><span class=\"p\">(</span><span class=\"n\">return_X_y</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">X</span><span class=\"p\">[:</span><span class=\"mi\">100</span><span class=\"p\">],</span> <span class=\"n\">y</span><span class=\"p\">[:</span><span class=\"mi\">100</span><span class=\"p\">]</span>\n<span class=\"n\">X_train</span><span class=\"p\">,</span> <span class=\"n\">X_test</span><span class=\"p\">,</span> <span class=\"n\">y_train</span><span class=\"p\">,</span> <span class=\"n\">y_test</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span>\n    <span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">test_size</span><span class=\"o\">=</span><span class=\"mf\">0.25</span><span class=\"p\">,</span> <span class=\"n\">stratify</span><span class=\"o\">=</span><span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span>\n<span class=\"p\">)</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">LogisticRegression</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">1000</span><span class=\"p\">))</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X_train</span><span class=\"p\">,</span> <span class=\"n\">y_train</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">f1_score</span><span class=\"p\">(</span><span class=\"n\">y_test</span><span class=\"p\">,</span> <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">X_test</span><span class=\"p\">)))</span>\n</code></pre></div>"
            },
            {
              "title": "Semnificația parametrului C",
              "level": "Ușor",
              "description": "Ce se întâmplă în general când micșorezi C de la 10 la 0,01?",
              "type": "mcq",
              "options": [
                "Regularizarea devine mai slabă",
                "Regularizarea devine mai puternică",
                "Modelul învață automat mai multe clase",
                "Pragul de clasificare devine 0,01"
              ],
              "answerIndex": 1,
              "explanation": "C este invers proporțional cu intensitatea regularizării: valori mici implică penalizare puternică."
            },
            {
              "title": "Interpretează coeficienții",
              "level": "Mediu",
              "description": "Într-un model cu o singură caracteristică, w=ln(2). Cu ce factor se multiplică odds atunci când x crește cu o unitate și restul rămâne constant?",
              "type": "mcq",
              "options": [
                "Cu 2",
                "Cu 0,5",
                "Cu 1+ln(2)",
                "Probabilitatea devine neapărat 1"
              ],
              "answerIndex": 0,
              "explanation": "Multiplicatorul odds este exp(w)=exp(ln 2)=2. Probabilitatea nu se dublează neapărat."
            },
            {
              "title": "Clasificare cu frontieră circulară",
              "level": "Dificil",
              "description": "Generează puncte (x₁, x₂) și etichete 1 dacă x₁²+x₂² > 2. Compară LogisticRegression simplu cu un Pipeline ce conține PolynomialFeatures de gradul 2.",
              "hint": "Modelul simplu învață o dreaptă, iar transformarea polinomială poate genera o frontieră circulară.",
              "solutionCode": "import numpy as np\nfrom sklearn.preprocessing import PolynomialFeatures, StandardScaler\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nrng = np.random.default_rng(2)\nX = rng.uniform(-2, 2, size=(400, 2))\ny = (X[:, 0]**2 + X[:, 1]**2 > 2).astype(int)\nXtr, Xte, ytr, yte = train_test_split(X, y, random_state=42, stratify=y)\nmodele = [\n    make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000)),\n    make_pipeline(PolynomialFeatures(2, include_bias=False),\n                  StandardScaler(), LogisticRegression(max_iter=1000))\n]\nfor model in modele:\n    model.fit(Xtr, ytr)\n    print(round(accuracy_score(yte, model.predict(Xte)), 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">PolynomialFeatures</span><span class=\"p\">,</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LogisticRegression</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">accuracy_score</span>\n\n<span class=\"n\">rng</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">random</span><span class=\"o\">.</span><span class=\"n\">default_rng</span><span class=\"p\">(</span><span class=\"mi\">2</span><span class=\"p\">)</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">rng</span><span class=\"o\">.</span><span class=\"n\">uniform</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"n\">size</span><span class=\"o\">=</span><span class=\"p\">(</span><span class=\"mi\">400</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">))</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">[:,</span> <span class=\"mi\">0</span><span class=\"p\">]</span><span class=\"o\">**</span><span class=\"mi\">2</span> <span class=\"o\">+</span> <span class=\"n\">X</span><span class=\"p\">[:,</span> <span class=\"mi\">1</span><span class=\"p\">]</span><span class=\"o\">**</span><span class=\"mi\">2</span> <span class=\"o\">&gt;</span> <span class=\"mi\">2</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">astype</span><span class=\"p\">(</span><span class=\"nb\">int</span><span class=\"p\">)</span>\n<span class=\"n\">Xtr</span><span class=\"p\">,</span> <span class=\"n\">Xte</span><span class=\"p\">,</span> <span class=\"n\">ytr</span><span class=\"p\">,</span> <span class=\"n\">yte</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span><span class=\"p\">,</span> <span class=\"n\">stratify</span><span class=\"o\">=</span><span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"n\">modele</span> <span class=\"o\">=</span> <span class=\"p\">[</span>\n    <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">LogisticRegression</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">1000</span><span class=\"p\">)),</span>\n    <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">PolynomialFeatures</span><span class=\"p\">(</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"n\">include_bias</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">),</span>\n                  <span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">LogisticRegression</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">1000</span><span class=\"p\">))</span>\n<span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">model</span> <span class=\"ow\">in</span> <span class=\"n\">modele</span><span class=\"p\">:</span>\n    <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">Xtr</span><span class=\"p\">,</span> <span class=\"n\">ytr</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">accuracy_score</span><span class=\"p\">(</span><span class=\"n\">yte</span><span class=\"p\">,</span> <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">Xte</span><span class=\"p\">)),</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</code></pre></div>"
            },
            {
              "title": "Alege pragul pe validare",
              "level": "Dificil",
              "description": "Ai probabilități fixe și etichete de validare. Pentru pragurile 0,3, 0,5 și 0,7, calculează F1 și identifică pragul cu scorul maxim. Nu folosi setul de test.",
              "hint": "Pentru fiecare prag creează predicțiile întregi și folosește f1_score.",
              "solutionCode": "from sklearn.metrics import f1_score\np = [0.1, 0.25, 0.4, 0.55, 0.6, 0.85, 0.9]\ny = [0, 0, 1, 0, 1, 1, 1]\nrezultate = []\nfor prag in [0.3, 0.5, 0.7]:\n    pred = [int(v >= prag) for v in p]\n    rezultate.append((f1_score(y, pred), prag))\nprint('Pragul ales pe validare:', max(rezultate)[1])\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><code><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">f1_score</span>\n<span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">0.1</span><span class=\"p\">,</span> <span class=\"mf\">0.25</span><span class=\"p\">,</span> <span class=\"mf\">0.4</span><span class=\"p\">,</span> <span class=\"mf\">0.55</span><span class=\"p\">,</span> <span class=\"mf\">0.6</span><span class=\"p\">,</span> <span class=\"mf\">0.85</span><span class=\"p\">,</span> <span class=\"mf\">0.9</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">rezultate</span> <span class=\"o\">=</span> <span class=\"p\">[]</span>\n<span class=\"k\">for</span> <span class=\"n\">prag</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"mf\">0.3</span><span class=\"p\">,</span> <span class=\"mf\">0.5</span><span class=\"p\">,</span> <span class=\"mf\">0.7</span><span class=\"p\">]:</span>\n    <span class=\"n\">pred</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">v</span> <span class=\"o\">&gt;=</span> <span class=\"n\">prag</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">v</span> <span class=\"ow\">in</span> <span class=\"n\">p</span><span class=\"p\">]</span>\n    <span class=\"n\">rezultate</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">((</span><span class=\"n\">f1_score</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">pred</span><span class=\"p\">),</span> <span class=\"n\">prag</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s1\">&#39;Pragul ales pe validare:&#39;</span><span class=\"p\">,</span> <span class=\"nb\">max</span><span class=\"p\">(</span><span class=\"n\">rezultate</span><span class=\"p\">)[</span><span class=\"mi\">1</span><span class=\"p\">])</span>\n</code></pre></div>"
            },
            {
              "title": "Investigație live: efectul unui prag",
              "level": "Mediu",
              "description": "Deschide laboratorul interactiv, experimentul 04. Micșorează pragul de la 0,7 la 0,3 și urmărește recall, precision, TP și FP. Formulează concluziile.",
              "hint": "Pragul nu schimbă probabilitățile. Schimbă numai regula de trecere de la scor la eticheta 0/1.",
              "solutionText": "Când reducem pragul, mai multe observații sunt declarate pozitive: TP nu poate scădea, dar FP nu poate scădea. Recall nu scade; precision se poate modifica în ambele direcții, în funcție de ordinea observațiilor."
            }
          ]
        },
        {
          "id": "sectiunea-2-3",
          "number": "3.3",
          "title": "Regularizarea L1 și L2",
          "stage": "general",
          "summary": "Underfitting, overfitting, generalizare și clasamentul public/final; regularizare L1, L2, Elastic Net, implementări de la zero și scikit-learn.",
          "objectives": [
            "Recunoști subînvățarea, supraînvățarea și riscurile de data leakage.",
            "Înțelegi penalizările L1 și L2 și rolul hiperparametrului lambda.",
            "Implementezi Ridge, Lasso și Elastic Net din liste Python.",
            "Alegi regularizarea prin validare și interpretezi critic scorul public al unei competiții."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Overfitting, regularizare L1 și L2",
              "src": "content/regularizare-l1-l2-onia.html",
              "standalone": "content/regularizare-l1-l2-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Underfitting, Ridge, Lasso și evaluare",
              "src": "interactive/reg-l1-l2-lab.html",
              "height": 880,
              "caption": "Modifică gradul modelului și intensitatea penalizării. Compară MSE train/validare și urmărește riscul adaptării la scorul public."
            },
            {
              "type": "html",
              "title": "Notebook de lucru — Regularizarea L1 și L2",
              "src": "content/regularizare-l1-l2-notebook.html",
              "height": 720,
              "download": "notebooks/ONIA-Regularizare-L1-L2.ipynb"
            }
          ],
          "exercises": [
            {
              "title": "Subînvățare sau supraînvățare?",
              "level": "Ușor",
              "description": "Un model are accuracy 99% pe antrenare și 67% pe validare. Ce problemă este probabilă?",
              "type": "mcq",
              "options": [
                "Underfitting",
                "Overfitting",
                "Un model perfect",
                "Nu putem măsura nimic"
              ],
              "answerIndex": 1,
              "explanation": "Un decalaj mare sugerează supraînvățare. Confirmarea cere și analiza datelor, a împărțirii și a metricii."
            },
            {
              "title": "Prea multă regularizare",
              "level": "Ușor",
              "description": "Atât train cât și validare au eroare mare; creștem foarte mult λ. Ce efect riscăm?",
              "type": "mcq",
              "options": [
                "Să scadă întotdeauna erorile",
                "Underfitting mai puternic",
                "Coeficienți mai mari",
                "Eliminăm automat zgomotul"
              ],
              "answerIndex": 1,
              "explanation": "λ mare restrânge modelul; poate împiedica inclusiv învățarea semnalului real."
            },
            {
              "title": "Calculează L1 și L2",
              "level": "Ușor",
              "description": "Pentru ponderile w = [3, −4, 0], calculează separat penalizările L1 și L2, fără λ.",
              "hint": "Pentru L1 însumezi valorile absolute; pentru L2 însumezi pătratele.",
              "solutionText": "L1 = 3 + 4 + 0 = 7. L2 = 9 + 16 + 0 = 25."
            },
            {
              "title": "Ce parametrizăm?",
              "level": "Mediu",
              "description": "În convenția noastră, care parametru rămâne în mod normal nepenalizat?",
              "type": "mcq",
              "options": [
                "Coeficientul w1",
                "Toți coeficienții",
                "Interceptul b",
                "Coeficientul cel mai mare"
              ],
              "answerIndex": 2,
              "explanation": "De regulă penalizăm coeficienții w, dar nu interceptul b."
            },
            {
              "title": "Ridge: un singur pas de gradient",
              "level": "Mediu",
              "description": "Dacă w = 2, gradientul erorii datelor este 3, λ = 0,5 și η = 0,1, cât devine w după actualizare?",
              "hint": "Aplică w_nou = w − η(g + λw).",
              "solutionText": "w_nou = 2 − 0,1 × (3 + 0,5 × 2) = 2 − 0,4 = 1,6."
            },
            {
              "title": "Lasso: pragul soft-threshold",
              "level": "Mediu",
              "description": "Calculează soft_threshold(0.08, 0.10) și soft_threshold(−0.30, 0.10).",
              "hint": "Dacă |u| ≤ prag → 0; altfel ne apropiem de zero exact cu valoarea pragului.",
              "solutionText": "Primul rezultat este 0 (0,08 ≤ 0,10); al doilea este −0,20."
            },
            {
              "title": "De ce StandardScaler?",
              "level": "Mediu",
              "description": "Două caracteristici măsoară aceeași distanță în metri și milimetri. Cum poate distorsiona regularizarea efectul lor?",
              "hint": "Coeficienții corespunzători au scări invers proporționale cu unitățile de măsură.",
              "solutionText": "Penalizarea favorizează artificial coeficientul numeric mai mic. Standardizarea adaptată exclusiv pe train face scările comparabile."
            },
            {
              "title": "Completează codul Ridge",
              "level": "Mediu",
              "description": "Scrie o funcție care face un singur pas Ridge pentru vectorul w și gradientele g. Nu modifica interceptul.",
              "hint": "Fiecare coeficient se actualizează independent; calculează g[j] + lam*w[j].",
              "solutionCode": "def pas_ridge(w, g, lam, eta):\n    rezultat = []\n    for j in range(len(w)):\n        rezultat.append(w[j] - eta * (g[j] + lam * w[j]))\n    return rezultat\n\nprint(pas_ridge([2.0, -1.0], [3.0, -2.0], 0.5, 0.1))\n"
            },
            {
              "title": "Selecția caracteristicilor",
              "level": "Mediu",
              "description": "Care metodă produce adesea ponderi exact zero, favorizând selecția caracteristicilor?",
              "type": "mcq",
              "options": [
                "Ridge (L2)",
                "Lasso (L1)",
                "Niciuna",
                "Doar regresia fără penalizare"
              ],
              "answerIndex": 1,
              "explanation": "L1 are colțuri în geometria constrângerii și prox-ul poate pune ponderi exact pe zero."
            },
            {
              "title": "Exercițiu de competiție: scor public",
              "level": "Dificil",
              "description": "Ai trei modele cu scoruri publice 0,91, 0,92 și 0,93. Pe validarea proprie cross-validation au 0,90±0,01, 0,89±0,04 și 0,85±0,05. Alegi automat modelul 3? Justifică.",
              "hint": "Scorul public poate reflecta particularitățile subsetului public; compară stabilitatea pe validarea proprie.",
              "solutionText": "Nu. Diferența de pe public nu dovedește generalizare. Modelul 1 are performanță mai stabilă pe validarea proprie și merită păstrat ca referință. Alegerea finală depinde de metrica oficială și de validare."
            },
            {
              "title": "Ridge versus Lasso",
              "level": "Mediu",
              "description": "Avem 80 de caracteristici puternic corelate, fiecare cu semnal slab. Ce metodă este adesea o alegere inițială mai stabilă?",
              "type": "mcq",
              "options": [
                "Doar Lasso, fără test",
                "Ridge, verificat prin validare",
                "Oricare garantează acuratețe perfectă",
                "Niciuna nu poate fi folosită"
              ],
              "answerIndex": 1,
              "explanation": "Ridge poate distribui efectul între caracteristici corelate; nu reprezintă garanție de superioritate."
            },
            {
              "title": "Scrie o mică funcție de penalizare",
              "level": "Ușor",
              "description": "Implementează din liste L1, L2 și funcția de cost combinată cu MSE.",
              "hint": "Nu penaliza interceptul; calculează separat suma pătratelor erorilor.",
              "solutionCode": "def costuri(y, predictii, w, lam):\n    n = len(y)\n    mse = sum((predictii[i] - y[i]) ** 2 for i in range(n)) / n\n    l1 = sum(abs(v) for v in w)\n    l2 = sum(v * v for v in w)\n    return mse + lam * l1, mse + lam * l2\n\nprint(costuri([1, 2], [1.5, 2.5], [2, -1], 0.1))\n"
            },
            {
              "title": "Selectează alpha cu Pipeline",
              "level": "Dificil",
              "description": "Construiește un GridSearchCV care compară Ridge cu alpha din {0.01, 0.1, 1, 10}. Folosește StandardScaler în pipeline.",
              "hint": "Parametrul modelului se specifică prin numele pasului urmat de __alpha.",
              "solutionCode": "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import Ridge\nfrom sklearn.model_selection import GridSearchCV\nfrom sklearn.datasets import load_diabetes\n\nX, y = load_diabetes(return_X_y=True)\npipe = Pipeline([(\"scalare\", StandardScaler()),\n                 (\"ridge\", Ridge())])\ncautare = GridSearchCV(\n    pipe, {\"ridge__alpha\": [0.01, 0.1, 1, 10]},\n    cv=5, scoring=\"neg_mean_squared_error\"\n)\ncautare.fit(X, y)\nprint(cautare.best_params_)\n"
            },
            {
              "title": "C din LogisticRegression",
              "level": "Mediu",
              "description": "Ce înseamnă reducerea lui C de la 10 la 0.1 în LogisticRegression?",
              "type": "mcq",
              "options": [
                "Regularizare mai slabă",
                "Regularizare mai puternică",
                "Număr dublu de clase",
                "Probabilitățile nu se mai calculează"
              ],
              "answerIndex": 1,
              "explanation": "C este invers legat de forța regularizării."
            },
            {
              "title": "Fără leakage",
              "level": "Mediu",
              "description": "Când folosim StandardScaler în cross-validation, unde trebuie estimată media?",
              "type": "mcq",
              "options": [
                "Pe train + toate foldurile de validare înainte de CV",
                "Numai în foldul de antrenare la fiecare împărțire",
                "Pe setul privat",
                "Pe tot setul de test"
              ],
              "answerIndex": 1,
              "explanation": "Pipeline aplică fit_transform numai pe partea de antrenare a fiecărui fold."
            },
            {
              "title": "Lasso zero versus Ridge aproape zero",
              "level": "Dificil",
              "description": "Ce diferență apare între un coeficient exact zero și unul foarte mic, dar nenul?",
              "hint": "În formula predicției, w=0 elimină complet contribuția caracteristicii respective.",
              "solutionText": "La L1, zero elimină exact variabila din contribuția liniară, pe când L2 produce de obicei coeficienți mici dar nenuli; ei pot continua să influențeze predicția."
            },
            {
              "title": "Când lambda nu salvează modelul",
              "level": "Dificil",
              "description": "Un model de clasificare folosește imagini în care eticheta apare scrisă direct în colț. Ce problemă metodologică apare și de ce L2 nu este o soluție sigură?",
              "hint": "Întreabă-te dacă indiciul vizual există și la evaluarea reală.",
              "solutionText": "Modelul poate învăța indiciul spurios sau poate exista scurgere de informație. Regularizarea limitează coeficienții, dar nu împiedică învățarea unui shortcut; este nevoie de eliminarea indiciului și validare corectă."
            },
            {
              "title": "Implementare completă Elastic Net",
              "level": "Dificil",
              "description": "Extinde un pas de Lasso proximal cu un termen L2. În prima etapă adaugă lam2*w[j] la gradient; în a doua aplică pragul lam1.",
              "hint": "Actualizezi u = w − η(g + λ2 w) și apoi aplici soft-threshold cu ηλ1.",
              "solutionCode": "def soft(v, prag):\n    if v > prag:\n        return v - prag\n    if v < -prag:\n        return v + prag\n    return 0.0\n\ndef pas_elastic(w, g, lam1, lam2, rata):\n    nou = []\n    for j in range(len(w)):\n        u = w[j] - rata * (g[j] + lam2 * w[j])\n        nou.append(soft(u, rata * lam1))\n    return nou\n\nprint(pas_elastic([2.0, 0.1], [0.3, 0.02], 0.4, 0.2, 0.1))\n"
            }
          ]
        },
        {
          "id": "sectiunea-2-4",
          "number": "3.4",
          "title": "Algoritmul K-Nearest Neighbors (K-NN)",
          "stage": "general",
          "summary": "Clasificare și regresie bazate pe vecini: distanțe, voturi, scalare, date categorice, validare și implementări Python/scikit-learn, cu laborator interactiv.",
          "objectives": [
            "Să explici geometric clasificarea și regresia cu cei k vecini cei mai apropiați.",
            "Să calculezi și să compari distanțe euclidiene, Manhattan și Minkowski.",
            "Să implementezi K-NN de la zero pentru clasificare și regresie.",
            "Să codifici caracteristici categorice și să eviți data leakage la scalare.",
            "Să alegi k și ponderile prin validare și să evaluezi performanța pe date necunoscute."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — K-Nearest Neighbors (K-NN)",
              "src": "content/knn-onia.html",
              "standalone": "content/knn-onia-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator live — Clasificare, regresie și distanțe K-NN",
              "src": "interactive/knn-laborator.html",
              "height": 930,
              "caption": "Deschide într-o filă separată pentru a folosi toate instrumentele. Poți deplasa puncte, modifica k și observa fiecare vecin."
            },
            {
              "type": "html",
              "title": "Notebook ONIA — K-NN de la zero și cu scikit-learn",
              "src": "content/knn-notebook.html",
              "height": 650,
              "download": "notebooks/ONIA-KNN-Clasificare-Regresie.ipynb",
              "caption": "Exemplele sunt organizate în notebook și pot fi executate în JupyterLab."
            }
          ],
          "exercises": [
            {
              "title": "Clasificare sau regresie?",
              "level": "Ușor",
              "type": "mcq",
              "description": "Dacă prezicem temperatura de mâine în grade, ce variantă de K-NN este potrivită?",
              "options": [
                "Classifier",
                "Regressor",
                "Ambele folosind aceeași țintă discretă",
                "Niciuna nu poate prezice temperaturi"
              ],
              "answerIndex": 1,
              "explanation": "Temperatura este un număr continuu, deci regresie."
            },
            {
              "title": "Distanța dintre două puncte",
              "level": "Ușor",
              "type": "mcq",
              "description": "Pentru A=(1,2) și B=(4,6), care este distanța euclidiană?",
              "options": [
                "7",
                "5",
                "25",
                "12"
              ],
              "answerIndex": 1,
              "explanation": "Aplicăm Pitagora: √(3²+4²)=5.",
              "hint": "Diferențele pe axe sunt 3 și 4."
            },
            {
              "title": "Ce prezice K-NN cu k=3?",
              "level": "Ușor",
              "type": "mcq",
              "description": "Cele mai apropiate trei etichete sunt A, B, A. Care este predicția prin vot egal?",
              "options": [
                "A",
                "B",
                "Nu se poate stabili",
                "0.66"
              ],
              "answerIndex": 0,
              "explanation": "Clasa A are două voturi din trei."
            },
            {
              "title": "Când k poate însemna underfitting?",
              "level": "Mediu",
              "type": "mcq",
              "description": "Care situație favorizează, în general, un model prea netezit?",
              "options": [
                "k=1",
                "k extrem de mare față de set",
                "date scalate corect",
                "k ales prin validare"
              ],
              "answerIndex": 1,
              "explanation": "Un număr foarte mare de vecini poate elimina variațiile locale."
            },
            {
              "title": "Categorii fără ordine",
              "level": "Mediu",
              "type": "mcq",
              "description": "De ce codificarea roșu=0, verde=1, albastru=2 poate fi înșelătoare?",
              "options": [
                "K-NN ignoră numerele",
                "Inventăm o ordine și distanțe artificiale",
                "Nu se poate folosi one-hot",
                "Culoarea nu este o caracteristică"
              ],
              "answerIndex": 1,
              "explanation": "Codificarea numerică inventează relații inexistente între categorii nominale."
            },
            {
              "title": "Egalitate la vot",
              "level": "Mediu",
              "type": "mcq",
              "description": "La clasificare multiclasă, k impar garantează lipsa egalităților?",
              "options": [
                "Da, întotdeauna",
                "Nu, pot exista voturi egale între clase",
                "Doar dacă folosim Manhattan",
                "Doar cu date normalizate"
              ],
              "answerIndex": 1,
              "explanation": "Ex.: k=3 cu clasele A, B, C — fiecare primește un vot."
            },
            {
              "title": "Pondere inversă",
              "level": "Mediu",
              "type": "mcq",
              "description": "Vecinii sunt (A,d=0.1), (B,d=1), (B,d=1). Ce clasă câștigă cu weights=\"distance\"?",
              "options": [
                "A",
                "B",
                "Egalitate",
                "Nu se poate decide"
              ],
              "answerIndex": 0,
              "explanation": "A are pondere 10, B are pondere totală 2."
            },
            {
              "title": "Media vecinilor",
              "level": "Ușor",
              "type": "mcq",
              "description": "Pentru regresie neponderată cu k=3 și răspunsuri 10,12,20, care este estimarea?",
              "options": [
                "10",
                "12",
                "14",
                "20"
              ],
              "answerIndex": 2,
              "explanation": "Media este (10+12+20)/3=14."
            },
            {
              "title": "Căutarea vecinilor de la zero",
              "level": "Mediu",
              "description": "Implementează o funcție care primește X, un punct nou și k și întoarce indicii celor k puncte cele mai apropiate.",
              "hint": "Construiește lista de perechi (distanță, indice), ordoneaz-o și reține primele k.",
              "solutionText": "Perechile conțin indicele pentru a nu pierde legătura cu datele originale.",
              "solutionCode": "from math import sqrt\n\ndef indici_vecini(X, q, k):\n    distante = []\n    for i in range(len(X)):\n        d = sqrt(sum((a-b)**2 for a,b in zip(X[i],q)))\n        distante.append((d,i))\n    distante.sort()\n    return [i for d,i in distante[:k]]\n\nprint(indici_vecini([[0,0],[1,1],[4,4]], [1,0], 2))\n"
            },
            {
              "title": "Un clasificator binar",
              "level": "Mediu",
              "description": "Implementează o predicție binară K-NN cu vot egal, presupunând că X conține liste de numere și y doar 0 sau 1. La egalitate, alege 0.",
              "hint": "Poți reutiliza funcția care returnează indicii vecinilor.",
              "solutionCode": "from math import dist\n\ndef knn_binar(X,y,q,k):\n    ordonare = sorted(range(len(X)), key=lambda i:dist(X[i],q))\n    voturi1 = sum(y[i] for i in ordonare[:k])\n    return int(2*voturi1 > k)\n\nprint(knn_binar([[0],[1],[3]], [0,0,1], [1.4], 3))\n"
            },
            {
              "title": "Determinarea lui k",
              "level": "Mediu",
              "description": "Un model are accuracy pe validare 0.81 pentru k=1, 0.87 pentru k=3 și 0.84 pentru k=9. Ce valoare alegi și de ce nu după setul final?",
              "hint": "Setul final este destinat unei evaluări independente; alegerea se face pe validare.",
              "solution": "Alegem k=3, pentru că este cel mai bun dintre variantele testate pe validare. Nu optimizăm pe test."
            },
            {
              "title": "Măsurarea distanței Manhattan",
              "level": "Ușor",
              "description": "Scrie funcția pentru distanța Manhattan între doi vectori numerici și verific-o pe vectorii [2,3,1], [4,1,7].",
              "hint": "Suma diferențelor în valoare absolută.",
              "solutionCode": "def manhattan(a,b):\n    return sum(abs(a[i]-b[i]) for i in range(len(a)))\n\nprint(manhattan([2,3,1],[4,1,7]))  # 10\n"
            },
            {
              "title": "K-NN pentru regresie ponderată",
              "level": "Dificil",
              "description": "Scrie o funcție care primește vecinii sub forma (distanță, valoare) și întoarce media ponderată cu 1/d. Tratează corect distanțele 0.",
              "hint": "Dacă există distanțe 0, utilizează doar valorile acelor vecini.",
              "solutionCode": "def knn_reg_ponderat(vecini):\n    zero = [y for d,y in vecini if d == 0]\n    if zero:\n        return sum(zero)/len(zero)\n    num = sum(y/d for d,y in vecini)\n    den = sum(1/d for d,y in vecini)\n    return num/den\n\nprint(round(knn_reg_ponderat([(1,10),(2,12),(4,20)]),3))\n"
            },
            {
              "title": "Ce schimbă standardizarea?",
              "level": "Mediu",
              "description": "Compară distanța euclidiană pe caracteristicile (vârstă, salariu) înainte și după standardizare. De ce se pot schimba vecinii?",
              "hint": "Componentele distanței sunt exprimate în unități incompatibile, dacă nu scalăm.",
              "solution": "Standardizarea transformă fiecare caracteristică folosind media și abaterea standard calculate pe train; contribuțiile relative ale axelor se schimbă."
            },
            {
              "title": "Codificarea unei culori",
              "level": "Ușor",
              "description": "Codifică prin one-hot valorile posibile [\"rosu\", \"verde\", \"albastru\"]. Ce se întâmplă dacă primim \"galben\"?",
              "hint": "Construiește o listă de comparații cu cele trei categorii cunoscute.",
              "solutionCode": "culori = [\"rosu\", \"verde\", \"albastru\"]\ndef one_hot(v):\n    return [int(v == c) for c in culori]\nprint(one_hot(\"albastru\"))  # [0, 0, 1]\nprint(one_hot(\"galben\"))    # [0, 0, 0]\n",
              "solutionText": "[0,0,0] pentru o categorie necunoscută este doar una dintre politicile posibile și trebuie înțeleasă explicit."
            },
            {
              "title": "Pipeline pentru date mixte",
              "level": "Dificil",
              "description": "Construiește un pipeline cu o caracteristică numerică și una categorială: scaler pentru numeric, OneHotEncoder pentru categorie, apoi K-NN.",
              "hint": "Folosește `ColumnTransformer` și `OneHotEncoder(handle_unknown=\"ignore\")`.",
              "solutionCode": "from sklearn.compose import ColumnTransformer\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import OneHotEncoder, StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\nimport pandas as pd\n\nX = pd.DataFrame({\"scor\": [2,4,7,9],\"mediu\":[\"web\",\"sala\",\"web\",\"sala\"]})\ny = [0,0,1,1]\npre = ColumnTransformer([\n    (\"num\", StandardScaler(), [\"scor\"]),\n    (\"cat\", OneHotEncoder(handle_unknown=\"ignore\"), [\"mediu\"])\n])\nmodel = Pipeline([(\"pre\",pre), (\"knn\",KNeighborsClassifier(n_neighbors=1))])\nmodel.fit(X,y)\nprint(model.predict(pd.DataFrame({\"scor\":[8],\"mediu\":[\"web\"]})))\n"
            },
            {
              "title": "Clasificare pe Iris",
              "level": "Mediu",
              "description": "Antrenează un model K-NN pe Iris, cu k=5 și standardizare în pipeline. Calculează accuracy pe un set de test cu stratificare.",
              "hint": "Utilizează `train_test_split(..., stratify=y)` și `accuracy_score`.",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import accuracy_score\nX,y = load_iris(return_X_y=True)\nXt,Xv,yt,yv=train_test_split(X,y,test_size=.25,random_state=1,stratify=y)\nmodel=make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))\nmodel.fit(Xt,yt)\nprint(round(accuracy_score(yv,model.predict(Xv)),3))\n"
            },
            {
              "title": "Regresie pe prețuri",
              "level": "Mediu",
              "description": "Ai suprafețele [35,50,65,85] și prețurile [60,90,120,170]. Estimează prin K-NN regresie cu k=2 prețul pentru suprafața 55.",
              "hint": "Vecinii cei mai apropiați au suprafețele 50 și 65.",
              "solution": "Prețurile vecinilor sunt 90 și 120; media neponderată este 105."
            },
            {
              "title": "Găsește eroarea metodologică",
              "level": "Dificil",
              "description": "Un elev aplică StandardScaler pe întregul X și apoi face train_test_split. Ce risc apare și cum corectezi?",
              "hint": "Preprocesarea a folosit deja statistici din setul de test.",
              "solution": "Este data leakage. Împărțim întâi datele și folosim un pipeline care învață scalarea numai pe train."
            },
            {
              "title": "De ce k impar nu este suficient?",
              "level": "Mediu",
              "description": "Construiește un exemplu de clasificare cu trei clase, k=3, în care toate clasele primesc același număr de voturi.",
              "hint": "Cei trei vecini pot avea etichete A, B, C.",
              "solution": "A, B și C au câte un vot; trebuie o regulă de departajare."
            },
            {
              "title": "Scorul public și scorul final",
              "level": "Dificil",
              "description": "Ai încercat 30 de valori de k și multe prelucrări, alegând întotdeauna scorul public maxim. Explică de ce acesta poate fi un criteriu nesigur și descrie un protocol de validare.",
              "hint": "Folosește validare încrucișată, set holdout și fixează configurația înainte de test.",
              "solution": "Ajustarea repetată la același subset public poate supraînvăța particularitățile lui. Alegem k și transformările pe train/validare locală și păstrăm testul final neatins."
            },
            {
              "title": "Investigație: vecini care se schimbă",
              "level": "Dificil",
              "description": "În laborator, modifică k, activarea scalării și distanța Manhattan / Euclidiană. Identifică două configurații care schimbă predicția aceluiași punct și explică motivul.",
              "hint": "Compară tabelul distanțelor și ordinea vecinilor, nu doar culoarea de pe hartă.",
              "solution": "Modificarea metricii sau a scalării rearanjează vecinii; modificarea k poate schimba majoritatea. Prezintă explicit punctele selectate."
            }
          ]
        },
        {
          "id": "sectiunea-2-5",
          "number": "3.5",
          "title": "Arborii de decizie",
          "stage": "general",
          "summary": "Arbori de clasificare și regresie: construirea întrebărilor prin Gini, entropie și MSE; urmărirea fiecărui exemplu în ramuri și a traseului unei predicții noi; implementări Python și scikit-learn.",
          "objectives": [
            "Să identifici rădăcina, nodurile, ramurile și frunzele unui arbore de decizie.",
            "Să urmărești exact subsetul de observații păstrate de fiecare copil după o împărțire.",
            "Să calculezi manual Gini, entropia și câștigul ponderat al unui prag.",
            "Să implementezi un arbore CART simplificat în Python folosind recursivitate și dicționare.",
            "Să parcurgi arborele pentru exemple noi și să interpretezi probabilitățile dintr-o frunză.",
            "Să explici de ce arborii sunt utili atât pentru clasificare, cât și pentru regresie.",
            "Să limitezi overfittingul prin pre-pruning, post-pruning și validare.",
            "Să utilizezi DecisionTreeClassifier, DecisionTreeRegressor, plot_tree, apply și decision_path."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Arborii de decizie",
              "src": "content/arbori-decizie-onia.html",
              "standalone": "content/arbori-decizie-onia-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator live — Construcția arborelui, exemplele din fiecare nod și traseul predicției",
              "src": "interactive/arbori-decizie-laborator.html",
              "height": 1100,
              "caption": "Deschide separat pentru explorare confortabilă. Adaugă și deplasează puncte, construiește arborele pas cu pas și selectează un nod pentru a vedea exact ce exemple au rămas."
            },
            {
              "type": "html",
              "title": "Notebook ONIA — Arbori de decizie Python / scikit-learn",
              "src": "content/arbori-decizie-notebook.html",
              "download": "notebooks/ONIA-Arbori-de-decizie.ipynb",
              "height": 620,
              "caption": "Exemplele sunt disponibile în notebookul Jupyter pentru execuție și modificare."
            }
          ],
          "exercises": [
            {
              "title": "Care ramură primește pragul?",
              "description": "Un nod testează x₁ ≤ 4,4. Unde merge exemplul cu x₁ = 4,4?",
              "type": "mcq",
              "options": [
                "Stânga (DA)",
                "Dreapta (NU)",
                "În ambele ramuri",
                "În niciuna"
              ],
              "answerIndex": 0,
              "explanation": "Operatorul este ≤, deci egalitatea merge la stânga.",
              "level": "Ușor"
            },
            {
              "title": "Câți copii are un nod CART?",
              "description": "Ce structură produce, în mod standard, o împărțire numerică în CART?",
              "type": "mcq",
              "options": [
                "Un copil",
                "Doi copii",
                "Trei copii",
                "Un număr arbitrar de copii"
              ],
              "answerIndex": 1,
              "explanation": "O condiție Da/Nu produce două ramuri: stânga și dreapta.",
              "level": "Ușor"
            },
            {
              "title": "Gini pentru un nod pur",
              "description": "Un nod conține șase exemple din clasa 1 și niciun exemplu din clasa 0. Care este Gini?",
              "type": "mcq",
              "options": [
                "0",
                "0,5",
                "1",
                "6"
              ],
              "answerIndex": 0,
              "explanation": "p₁=1, p₀=0, deci Gini = 1−1²−0² = 0.",
              "level": "Ușor"
            },
            {
              "title": "Gini pentru un nod mixt",
              "description": "Un nod are trei observații de clasa 0 și una de clasa 1. Cât este Gini?",
              "type": "mcq",
              "options": [
                "0,25",
                "0,375",
                "0,5",
                "0,75"
              ],
              "answerIndex": 1,
              "explanation": "Gini=1−(3/4)²−(1/4)²=6/16=0,375.",
              "level": "Mediu"
            },
            {
              "title": "Ponderea ramurilor în câștig",
              "description": "Un părinte cu 12 observații se împarte în copii de 3 și 9 observații. Ce ponderi folosim la impuritatea de după?",
              "type": "mcq",
              "options": [
                "1/2 și 1/2",
                "3/12 și 9/12",
                "3 și 9",
                "9/3 și 3/9"
              ],
              "answerIndex": 1,
              "explanation": "Copiii contribuie proporțional cu numărul observațiilor pe care le conțin.",
              "level": "Ușor"
            },
            {
              "title": "Ce face nodul-frunză?",
              "description": "La clasificare, o frunză cu etichete [0,0,1,0,1] întoarce implicit ce clasă?",
              "type": "mcq",
              "options": [
                "0",
                "1",
                "Întotdeauna 0,5",
                "Nu poate decide"
              ],
              "answerIndex": 0,
              "explanation": "Majoritatea este clasa 0: 3 voturi din 5.",
              "level": "Ușor"
            },
            {
              "title": "Regresie în frunză",
              "description": "Un arbore de regresie MSE ajunge într-o frunză cu valori [12, 14, 19]. Ce prezice?",
              "type": "mcq",
              "options": [
                "12",
                "14",
                "15",
                "19"
              ],
              "answerIndex": 2,
              "explanation": "Media (12+14+19)/3=15.",
              "level": "Ușor"
            },
            {
              "title": "Ce schimbă adâncimea?",
              "description": "Pe train, un arbore foarte adânc are eroare foarte mică, dar pe validare eroarea crește. Ce fenomen este probabil?",
              "type": "mcq",
              "options": [
                "Underfitting",
                "Overfitting",
                "Normalizare",
                "Cross-validation"
              ],
              "answerIndex": 1,
              "explanation": "Arborele învață variațiile accidentale, care nu se repetă pe exemple noi.",
              "level": "Ușor"
            },
            {
              "title": "Text și categorie",
              "description": "Care este o abordare potrivită pentru caracteristica nominală „culoare” în DecisionTreeClassifier?",
              "type": "mcq",
              "options": [
                "Codificarea arbitrară 0/1/2 ca distanțe",
                "One-hot encoding",
                "Omiterea tuturor observațiilor",
                "StandardScaler direct pe șiruri"
              ],
              "answerIndex": 1,
              "explanation": "OneHotEncoder transformă categoriile în coloane numerice fără a inventa o ordine.",
              "level": "Mediu"
            },
            {
              "title": "Interpretare decision_path",
              "description": "Ce returnează decision_path pentru un exemplu?",
              "type": "mcq",
              "options": [
                "Toate pragurile posibile",
                "Nodurile vizitate la predicție",
                "Doar importanța caracteristicilor",
                "Toate observațiile de test"
              ],
              "answerIndex": 1,
              "explanation": "decision_path identifică nodurile parcurse de exemplu, iar apply întoarce frunza.",
              "level": "Mediu"
            },
            {
              "title": "Gini din două frecvențe",
              "description": "Scrie o funcție care primește numărul de exemple din clasele 0 și 1 și întoarce impuritatea Gini. Tratează nodul gol.",
              "level": "Mediu",
              "hint": "Transformă numărările în proporții p0 și p1; pentru un nod gol întoarce 0.",
              "solutionCode": "def gini_frecvente(n0, n1):\n    n = n0 + n1\n    if n == 0:\n        return 0.0\n    p0 = n0 / n\n    p1 = n1 / n\n    return 1 - p0 * p0 - p1 * p1\n\nprint(gini_frecvente(3, 1))  # 0.375",
              "solutionText": "Nodul pur are Gini 0; amestecul 50/50 are Gini 0,5."
            },
            {
              "title": "Împărțirea exemplelor, fără pierderi",
              "description": "Avem X, lista vectorilor de caracteristici. Implementează funcția care întoarce indicii exemplelor din cele două ramuri pentru o caracteristică j și un prag t.",
              "level": "Mediu",
              "hint": "Testul <= duce în stânga. Folosește enumerate pentru indici.",
              "solutionCode": "def impartire(X, j, prag):\n    stanga, dreapta = [], []\n    for i in range(len(X)):\n        if X[i][j] <= prag:\n            stanga.append(i)\n        else:\n            dreapta.append(i)\n    return stanga, dreapta\n\nX = [[1, 2], [4, 6], [5, 1], [8, 3]]\nprint(impartire(X, 0, 4.5))  # ([0, 1], [2, 3])",
              "solutionText": "Verifică invariantul: len(stanga) + len(dreapta) = len(X)."
            },
            {
              "title": "Etichetele rămase într-un nod",
              "description": "Se dă lista y și indicii unui subset. Determină distribuția claselor în subset.",
              "level": "Mediu",
              "hint": "Folosește un dicționar de frecvențe.",
              "solutionCode": "def numara_clase(y, indici):\n    frecvente = {}\n    for i in indici:\n        clasa = y[i]\n        frecvente[clasa] = frecvente.get(clasa, 0) + 1\n    return frecvente\n\ny = [0, 1, 1, 0, 1]\nprint(numara_clase(y, [0, 2, 4]))  # {0: 1, 1: 2}",
              "solutionText": "Numărăm numai observațiile care au ajuns în nod, nu tot setul."
            },
            {
              "title": "Câștigul Gini al unui prag",
              "description": "Completează formula câștigului folosind un nod părinte și copiii lui, dați ca liste de etichete.",
              "level": "Mediu",
              "hint": "Folosește media ponderată n_st/n, n_dr/n.",
              "solutionCode": "def gini(y):\n    if not y:\n        return 0.0\n    p = sum(y) / len(y)\n    return 2 * p * (1 - p)\n\ndef castig(y_parinte, y_stanga, y_dreapta):\n    n = len(y_parinte)\n    dupa = (len(y_stanga) * gini(y_stanga) +\n            len(y_dreapta) * gini(y_dreapta)) / n\n    return gini(y_parinte) - dupa\n\nprint(round(castig([0, 0, 1, 1], [0, 0], [1, 1]), 3))",
              "solutionText": "Câștigul este 0,5 când separăm perfect două clase egal reprezentate."
            },
            {
              "title": "Căutarea pragurilor candidate",
              "description": "Pentru o listă de valori numerice, construiește toate pragurile candidate aflate la mijlocul valorilor consecutive distincte.",
              "level": "Mediu",
              "hint": "Sortează mulțimea valorilor distincte și parcurge perechile vecine.",
              "solutionCode": "def praguri_candidate(x):\n    valori = sorted(set(x))\n    praguri = []\n    for i in range(len(valori) - 1):\n        praguri.append((valori[i] + valori[i + 1]) / 2)\n    return praguri\n\nprint(praguri_candidate([2, 4, 2, 9]))  # [3.0, 6.5]",
              "solutionText": "Folosim valori distincte pentru a nu genera împărțiri în care una dintre ramuri este goală."
            },
            {
              "title": "Predicție dintr-un arbore cu dicționare",
              "description": "Parcurge arborele următor pentru a prezice clasa unui vector nou.",
              "level": "Mediu",
              "hint": "Fiecare nod intern are j, prag, stanga, dreapta; frunza are clasa.",
              "solutionCode": "arbore = {\n    \"j\": 0, \"prag\": 3.5,\n    \"stanga\": {\"clasa\": 0},\n    \"dreapta\": {\n        \"j\": 1, \"prag\": 4.0,\n        \"stanga\": {\"clasa\": 0},\n        \"dreapta\": {\"clasa\": 1}\n    }\n}\n\ndef prezice(nod, x):\n    while \"clasa\" not in nod:\n        if x[nod[\"j\"]] <= nod[\"prag\"]:\n            nod = nod[\"stanga\"]\n        else:\n            nod = nod[\"dreapta\"]\n    return nod[\"clasa\"]\n\nprint(prezice(arbore, [6, 5]))  # 1",
              "solutionText": "Un exemplu nou nu modifică arborele; îl parcurge doar."
            },
            {
              "title": "Exemple din subarbori — verificare",
              "description": "O funcție recursivă primește un nod în care fiecare frunză are lista exemplelor. Construiește lista indicilor din toate frunzele.",
              "level": "Mediu",
              "hint": "Concatenează recursiv listele copiilor.",
              "solutionCode": "def exemple_din_frunze(nod):\n    if \"exemple\" in nod:\n        return nod[\"exemple\"]\n    return (exemple_din_frunze(nod[\"stanga\"]) +\n            exemple_din_frunze(nod[\"dreapta\"]))\n\narbore = {\"stanga\": {\"exemple\": [0, 2]},\n          \"dreapta\": {\"exemple\": [1, 3, 4]}}\nprint(sorted(exemple_din_frunze(arbore)))  # [0,1,2,3,4]",
              "solutionText": "Dacă am împărțit corect, fiecare indice apare o singură dată în frunzele unui arbore standard."
            },
            {
              "title": "Predicție de regresie în frunză",
              "description": "Scrie o funcție care primește răspunsurile y și indicii observațiilor dintr-o frunză și întoarce media.",
              "level": "Mediu",
              "hint": "Calculează suma doar pe subsetul primit.",
              "solutionCode": "def medie_frunza(y, indici):\n    if not indici:\n        raise ValueError(\"Frunza nu poate fi goală\")\n    return sum(y[i] for i in indici) / len(indici)\n\nprint(medie_frunza([3, 8, 9, 12], [1, 2, 3]))  # 9.666...",
              "solutionText": "Pentru regresie bazată pe squared_error, media minimizează suma pătratelor erorilor."
            },
            {
              "title": "Minimul de exemple într-o frunză",
              "description": "Scrie o funcție care verifică dacă două liste de indici pot fi copii ai unui nod pentru min_samples_leaf.",
              "level": "Ușor",
              "hint": "Fiecare copil trebuie să conțină cel puțin m exemple.",
              "solutionCode": "def split_valid(stanga, dreapta, m):\n    return len(stanga) >= m and len(dreapta) >= m\n\nprint(split_valid([0, 1], [2, 3, 4], 2))  # True\nprint(split_valid([0], [1, 2, 3], 2))     # False",
              "solutionText": "Condiția împiedică frunzele cu prea puține observații."
            },
            {
              "title": "Clasificatorul Iris și traseul unei predicții",
              "description": "Antrenează un arbore cu max_depth=2 pe Iris și afișează clasele prezise, indicele frunzei și nodurile vizitate pentru prima observație.",
              "level": "Mediu",
              "hint": "Folosește apply și decision_path după fit.",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.tree import DecisionTreeClassifier\n\niris = load_iris()\nmodel = DecisionTreeClassifier(max_depth=2, random_state=42)\nmodel.fit(iris.data, iris.target)\nexemplu = iris.data[[0]]\nprint(\"Clasa:\", model.predict(exemplu)[0])\nprint(\"Frunza:\", model.apply(exemplu)[0])\nprint(\"Noduri:\", model.decision_path(exemplu).indices.tolist())",
              "solutionText": "Această problemă corespunde direct traseului vizual din laborator."
            },
            {
              "title": "Compară diferite adâncimi prin validare",
              "description": "Pe Iris, separă antrenarea de testare. Compară arbori cu max_depth 1, 2, 3, 4 folosind validare încrucișată pe train.",
              "level": "Dificil",
              "hint": "Folosește cross_val_score cu stratificarea implicită pentru clasificare.",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.model_selection import cross_val_score\n\nX, y = load_iris(return_X_y=True)\nfor adancime in [1, 2, 3, 4]:\n    model = DecisionTreeClassifier(max_depth=adancime, random_state=42)\n    scoruri = cross_val_score(model, X, y, cv=5, scoring=\"accuracy\")\n    print(adancime, round(scoruri.mean(), 3))",
              "solutionText": "Compară scorurile medii; nu presupune că cea mai mare adâncime câștigă."
            },
            {
              "title": "Pune categorii text într-un arbore",
              "description": "Se dau caracteristici [tip_material, temperatura]. Construiește un Pipeline cu OneHotEncoder și DecisionTreeClassifier; verifică predicția pentru un material nou.",
              "level": "Dificil",
              "hint": "Combină ColumnTransformer, OneHotEncoder(handle_unknown=\"ignore\") și Pipeline.",
              "solutionCode": "from sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import OneHotEncoder\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.tree import DecisionTreeClassifier\n\nX = [[\"lemn\", 25], [\"metal\", 70], [\"plastic\", 45],\n     [\"lemn\", 55], [\"metal\", 20], [\"plastic\", 80]]\ny = [0, 1, 0, 0, 0, 1]\ntransformare = ColumnTransformer([\n    (\"tip\", OneHotEncoder(handle_unknown=\"ignore\"), [0]),\n    (\"temperatura\", \"passthrough\", [1])\n])\nmodel = Pipeline([\n    (\"date\", transformare),\n    (\"arbore\", DecisionTreeClassifier(max_depth=2, random_state=42))\n])\nmodel.fit(X, y)\nprint(model.predict([[\"ceramica\", 60]]))",
              "solutionText": "Categoria necunoscută este gestionată conform handle_unknown=\"ignore\" fără a inventa ordine între categorii."
            },
            {
              "title": "Predicții numerice dintr-un arbore",
              "description": "Antrenează DecisionTreeRegressor cu un singur atribut pentru x=[1,2,3,6,7,9] și y=[2,3,4,8,9,11]. Compară nivelurile 1 și 3.",
              "level": "Mediu",
              "hint": "Folosește același set pentru demonstrație; evaluarea reală trebuie să utilizeze date nevăzute.",
              "solutionCode": "from sklearn.tree import DecisionTreeRegressor\n\nX = [[1], [2], [3], [6], [7], [9]]\ny = [2, 3, 4, 8, 9, 11]\nfor d in [1, 3]:\n    model = DecisionTreeRegressor(max_depth=d, random_state=42)\n    model.fit(X, y)\n    print(\"adâncime\", d, \"predicție\", model.predict([[5.0]])[0])",
              "solutionText": "Arborii mai adânci produc mai multe regiuni constante și pot urmări variații locale."
            },
            {
              "title": "Detectarea condiției de supraînvățare",
              "description": "Scrie un mic test care semnalează când un arbore are eroare train mică și eroare validare mult mai mare. Pragurile sunt ilustrative.",
              "level": "Ușor",
              "hint": "Compară diferența dintre cele două erori cu o toleranță.",
              "solutionCode": "def posibil_overfitting(eroare_train, eroare_valid, toleranta=0.1):\n    return eroare_valid - eroare_train > toleranta\n\nprint(posibil_overfitting(0.02, 0.24))  # True\nprint(posibil_overfitting(0.18, 0.20))  # False",
              "solutionText": "Un asemenea semnal nu este un diagnostic suficient; contează și mărimea setului, variabilitatea și metrica."
            },
            {
              "title": "Arborele și scorul public ONIA",
              "level": "Dificil",
              "description": "Ai obținut accuracy train 100%, public 92%, iar pe validare locală 78%. Un coleg are train 94%, public 89%, validare locală 88%. Cum procedezi pentru scorul final necunoscut?",
              "hint": "Compară stabilitatea rezultatelor, mărimea eșantioanelor și politica de selecție a hiperparametrilor. Nu transforma subsetul public într-un set de antrenare ascuns.",
              "solutionText": "Nu putem garanta câștigătorul pe scorul final. Diferența mare train/validare sugerează să verificăm overfittingul, split-ul și corectitudinea procesului. Selectăm parametrii prin validare locală/cross-validation și folosim publicul doar ca semnal suplimentar."
            },
            {
              "title": "Construire manuală a arborelui pe 8 observații",
              "level": "Dificil",
              "description": "Se dau 8 exemple, cu o singură caracteristică și clase. Calculează toate pragurile candidate, Gini ponderat pentru fiecare, prima împărțire optimă și listele de indici din fiecare copil.",
              "statementCode": "x = [1, 2, 3, 4, 6, 7, 8, 9]\ny = [0, 0, 0, 1, 1, 1, 0, 0]",
              "hint": "Pragurile sunt 1.5, 2.5, 3.5, 5, 6.5, 7.5, 8.5. Pentru fiecare calculezi două seturi de etichete.",
              "solutionText": "Cel mai bun prag Gini este 3,5: stânga sunt indicii [0,1,2] (trei zerouri), dreapta sunt [3,4,5,6,7] (trei unu și două zerouri). Impuritatea după este (3/8)·0 + (5/8)·0,48 = 0,30; impuritatea inițială este 1 − (5/8)² − (3/8)² = 0,46875, deci câștigul este 0,16875.",
              "solutionCode": "x = [1, 2, 3, 4, 6, 7, 8, 9]\ny = [0, 0, 0, 1, 1, 1, 0, 0]\nst = [i for i, v in enumerate(x) if v <= 3.5]\ndr = [i for i, v in enumerate(x) if v > 3.5]\nprint(st, dr)"
            }
          ]
        },
        {
          "id": "sectiunea-2-6",
          "number": "3.6",
          "title": "Modele ansamblu",
          "stage": "general",
          "summary": "Bagging, Random Forest, boosting, voting și stacking pentru clasificare și regresie, explicate pas cu pas, cu formule, grafice, exerciții și simulări interactive.",
          "objectives": [
            "Să explici de ce diversitatea modelelor poate îmbunătăți generalizarea.",
            "Să construiești un eșantion bootstrap și să identifici exemplele out-of-bag.",
            "Să urmărești cum Random Forest combină arborii și probabilitățile.",
            "Să calculezi manual reziduuri și actualizări într-un boosting pentru regresie.",
            "Să folosești bagging, Random Forest, boosting, voting și stacking cu scikit-learn.",
            "Să eviți data leakage și supra-optimizarea după scorul public al competiției."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Modele ansamblu",
              "src": "content/modele-ansamblu-onia.html",
              "standalone": "content/modele-ansamblu-onia-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator live — Voting, Bagging, Random Forest, Boosting și Stacking",
              "src": "interactive/modele-ansamblu-laborator.html",
              "height": 1160,
              "caption": "Deschide laboratorul separat pentru o vizualizare mai mare. Predicțiile și subseturile sunt ."
            },
            {
              "type": "html",
              "title": "Notebook ONIA — Modele ansamblu Python și scikit-learn",
              "src": "content/modele-ansamblu-notebook.html",
              "height": 650,
              "download": "notebooks/ONIA-Modele-Ansamblu.ipynb",
              "caption": "Notebook Jupyter cu exemple reproductibile, destinat executării și modificării în JupyterLab."
            }
          ],
          "exercises": [
            {
              "title": "Bagging și bootstrap",
              "description": "Ce înseamnă extragere cu revenire din N exemple?",
              "options": [
                "Fiecare exemplu apare exact o dată",
                "Un exemplu poate apărea de mai multe ori",
                "Doar exemplele corecte sunt extrase",
                "Exemplele se sortează"
              ],
              "answerIndex": 1,
              "explanation": "La fiecare extragere, exemplul rămâne în mulțimea posibilă.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Un arbore în Random Forest",
              "description": "Când se alege subsetul aleator de caracteristici în Random Forest?",
              "options": [
                "O singură dată pentru întreaga pădure",
                "La fiecare nod care caută o împărțire",
                "Numai după predicție",
                "Numai în faza OOB"
              ],
              "answerIndex": 1,
              "explanation": "Diversitatea este introdusă prin subseturi de caracteristici disponibile la noduri, nu doar un subset unic pentru toată pădurea.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Vot hard și soft",
              "description": "Modelele au probabilitățile clasei 1: [0,49; 0,49; 0,99]. La prag 0,5, cum diferă hard și soft?",
              "options": [
                "Hard=0, soft=1",
                "Hard=1, soft=0",
                "Ambele 0",
                "Ambele 1"
              ],
              "answerIndex": 0,
              "explanation": "Etichetele sunt 0,0,1: hard=0. Media probabilităților este 1,97/3≈0,657: soft=1.",
              "level": "Mediu",
              "type": "mcq"
            },
            {
              "title": "RandomForestClassifier.predict",
              "description": "În implementarea scikit-learn, care regulă este utilizată la combinarea arborilor pentru clasificare?",
              "options": [
                "Media predicțiilor numerice ale frunzelor",
                "Media probabilităților pentru fiecare clasă",
                "Obligatoriu votul strict al etichetelor",
                "Doar primul arbore"
              ],
              "answerIndex": 1,
              "explanation": "Predict selectează clasa cu probabilitatea medie maximă a arborilor.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "OOB: exemplu absent",
              "description": "Avem un bootstrap [1,3,1,4,6,3] extras din {1,2,3,4,5,6}. Ce exemple sunt OOB?",
              "options": [
                "{1,3}",
                "{2,5}",
                "{2,4,5}",
                "{}"
              ],
              "answerIndex": 1,
              "explanation": "OOB sunt exemplele originale care nu au fost alese niciodată.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Un test de corelație a erorilor",
              "description": "Dacă 10 modele identice fac exact aceeași eroare pe toate exemplele, ce obținem prin media lor?",
              "options": [
                "O reducere sigură a erorii de 10 ori",
                "Aceeași eroare, în acest scenariu",
                "O eroare zero",
                "Nu se pot calcula medii"
              ],
              "answerIndex": 1,
              "explanation": "Diversitatea erorilor este esențială; copierea aceleiași predicții nu o îmbunătățește.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Gradientul MSE",
              "description": "Pentru L(y,F)=½(y−F)², care este gradientul negativ în raport cu F?",
              "options": [
                "F−y",
                "y−F",
                "2F",
                "y+F"
              ],
              "answerIndex": 1,
              "explanation": "Derivata este F−y. Gradientul negativ, folosit ca pseudo-reziduu, este y−F.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Pas de boosting manual",
              "description": "Predicția curentă pentru un exemplu este 6, arborele de corecție prezice +4, iar η=0,25. Noua predicție este...",
              "options": [
                "7",
                "10",
                "6,25",
                "1"
              ],
              "answerIndex": 0,
              "explanation": "F_nou = 6 + 0,25×4 = 7.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "HistGradientBoosting",
              "description": "Care parametru controlează numărul maxim de iterații în HistGradientBoostingClassifier?",
              "options": [
                "n_neighbors",
                "max_iter",
                "n_estimators obligatoriu",
                "n_jobs"
              ],
              "answerIndex": 1,
              "explanation": "HistGradientBoosting utilizează max_iter. n_estimators este specific altor estimatori.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Leakage în stacking",
              "description": "Meta-modelul este antrenat pe predicțiile fiecărui model de bază pe datele folosite pentru propriul său antrenament. Care este riscul?",
              "options": [
                "Estimare prea optimistă și leakage",
                "Nu există niciun risc",
                "Datele sunt automat standardizate",
                "Dispar toate exemplele din test"
              ],
              "answerIndex": 0,
              "explanation": "Utilizează predicții out-of-fold pentru antrenarea meta-modelului.",
              "level": "Mediu",
              "type": "mcq"
            },
            {
              "title": "Scor public versus privat",
              "description": "O configurație câștigă la diferență foarte mică pe scor public după 200 de încercări. Ce concluzie este justificată?",
              "options": [
                "Este sigur superioară pe testul final",
                "Poate reflecta adaptarea la subsetul public",
                "Modelul nu poate face overfitting",
                "Datele publice sunt identice cu cele finale"
              ],
              "answerIndex": 1,
              "explanation": "Compară pe validare locală și evită optimizarea excesivă doar după clasament.",
              "level": "Mediu",
              "type": "mcq"
            },
            {
              "title": "Regresie cu ansamblu",
              "description": "Un RandomForestRegressor produce 12, 15, 18 pentru un exemplu nou. Ce valoare returnează media simplă?",
              "options": [
                "15",
                "18",
                "12",
                "45"
              ],
              "answerIndex": 0,
              "explanation": "(12+15+18)/3=15.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Media predicțiilor unui ansamblu",
              "description": "Scrie o funcție care primește o listă de predicții numerice și returnează media. Definește explicit comportamentul pentru lista goală.",
              "level": "Mediu",
              "type": "open",
              "hint": "Suma împărțită la lungime; tratează mai întâi lungimea zero.",
              "solutionText": "O listă goală nu are medie definită. Alegem să semnalăm eroarea.",
              "solutionCode": "def medie(predictii):\n    if len(predictii) == 0:\n        raise ValueError('Lista de predicții este goală')\n    suma = 0\n    for p in predictii:\n        suma += p\n    return suma / len(predictii)\n\nprint(medie([7, 8, 12]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">medie</span><span class=\"p\">(</span><span class=\"n\">predictii</span><span class=\"p\">):</span>\n    <span class=\"k\">if</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">predictii</span><span class=\"p\">)</span> <span class=\"o\">==</span> <span class=\"mi\">0</span><span class=\"p\">:</span>\n        <span class=\"k\">raise</span> <span class=\"ne\">ValueError</span><span class=\"p\">(</span><span class=\"s1\">&#39;Lista de predicții este goală&#39;</span><span class=\"p\">)</span>\n    <span class=\"n\">suma</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n    <span class=\"k\">for</span> <span class=\"n\">p</span> <span class=\"ow\">in</span> <span class=\"n\">predictii</span><span class=\"p\">:</span>\n        <span class=\"n\">suma</span> <span class=\"o\">+=</span> <span class=\"n\">p</span>\n    <span class=\"k\">return</span> <span class=\"n\">suma</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">predictii</span><span class=\"p\">)</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">medie</span><span class=\"p\">([</span><span class=\"mi\">7</span><span class=\"p\">,</span> <span class=\"mi\">8</span><span class=\"p\">,</span> <span class=\"mi\">12</span><span class=\"p\">]))</span>\n</pre></div>\n"
            },
            {
              "title": "Hard voting cu N clasificatori binari",
              "description": "Implementează un vot majoritar pentru lista de etichete 0/1, cu regula că egalitatea produce 0.",
              "level": "Mediu",
              "type": "open",
              "hint": "Numără etichetele egale cu 1. Compară cu N/2.",
              "solutionText": "",
              "solutionCode": "def hard_voting(etichete):\n    if not etichete:\n        raise ValueError('Sunt necesare predicții')\n    nr1 = sum(x == 1 for x in etichete)\n    return int(nr1 > len(etichete) / 2)\n\nprint(hard_voting([1, 0, 1, 0]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">hard_voting</span><span class=\"p\">(</span><span class=\"n\">etichete</span><span class=\"p\">):</span>\n    <span class=\"k\">if</span> <span class=\"ow\">not</span> <span class=\"n\">etichete</span><span class=\"p\">:</span>\n        <span class=\"k\">raise</span> <span class=\"ne\">ValueError</span><span class=\"p\">(</span><span class=\"s1\">&#39;Sunt necesare predicții&#39;</span><span class=\"p\">)</span>\n    <span class=\"n\">nr1</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">x</span> <span class=\"o\">==</span> <span class=\"mi\">1</span> <span class=\"k\">for</span> <span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">etichete</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">nr1</span> <span class=\"o\">&gt;</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">etichete</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"mi\">2</span><span class=\"p\">)</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">hard_voting</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]))</span>\n</pre></div>\n"
            },
            {
              "title": "Soft voting ponderat",
              "description": "Primești probabilități [0.2,0.8,0.7] și ponderi [1,2,1]. Calculează media ponderată și clasa finală la pragul 0,5.",
              "level": "Mediu",
              "type": "open",
              "hint": "Numărătorul este 0.2·1+0.8·2+0.7·1 = 2.5.",
              "solutionText": "P = 2.5/4 = 0.625, deci clasa 1.",
              "solutionCode": "probabilitati = [0.2, 0.8, 0.7]\nponderi = [1, 2, 1]\nprob_medie = sum(p * w for p, w in zip(probabilitati, ponderi)) / sum(ponderi)\nprint(prob_medie, int(prob_medie >= 0.5))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">probabilitati</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">0.2</span><span class=\"p\">,</span> <span class=\"mf\">0.8</span><span class=\"p\">,</span> <span class=\"mf\">0.7</span><span class=\"p\">]</span>\n<span class=\"n\">ponderi</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">prob_medie</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">p</span> <span class=\"o\">*</span> <span class=\"n\">w</span> <span class=\"k\">for</span> <span class=\"n\">p</span><span class=\"p\">,</span> <span class=\"n\">w</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">probabilitati</span><span class=\"p\">,</span> <span class=\"n\">ponderi</span><span class=\"p\">))</span> <span class=\"o\">/</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">ponderi</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">prob_medie</span><span class=\"p\">,</span> <span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">prob_medie</span> <span class=\"o\">&gt;=</span> <span class=\"mf\">0.5</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Construiește un bootstrap cu identificatori",
              "description": "Din lista [1,2,3,4], creează un bootstrap de 4 extrageri, apoi afișează identificatorii OOB.",
              "level": "Mediu",
              "type": "open",
              "hint": "Folosește random.choices și mulțimea inițială minus mulțimea extrasă.",
              "solutionText": "",
              "solutionCode": "import random\n\nrandom.seed(4)\nidentificatori = [1, 2, 3, 4]\nbootstrap = random.choices(identificatori, k=len(identificatori))\noob = sorted(set(identificatori) - set(bootstrap))\nprint(bootstrap)\nprint(oob)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">random</span>\n\n<span class=\"n\">random</span><span class=\"o\">.</span><span class=\"n\">seed</span><span class=\"p\">(</span><span class=\"mi\">4</span><span class=\"p\">)</span>\n<span class=\"n\">identificatori</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">]</span>\n<span class=\"n\">bootstrap</span> <span class=\"o\">=</span> <span class=\"n\">random</span><span class=\"o\">.</span><span class=\"n\">choices</span><span class=\"p\">(</span><span class=\"n\">identificatori</span><span class=\"p\">,</span> <span class=\"n\">k</span><span class=\"o\">=</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">identificatori</span><span class=\"p\">))</span>\n<span class=\"n\">oob</span> <span class=\"o\">=</span> <span class=\"nb\">sorted</span><span class=\"p\">(</span><span class=\"nb\">set</span><span class=\"p\">(</span><span class=\"n\">identificatori</span><span class=\"p\">)</span> <span class=\"o\">-</span> <span class=\"nb\">set</span><span class=\"p\">(</span><span class=\"n\">bootstrap</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">bootstrap</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">oob</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Probabilitatea OOB",
              "description": "Arată prin calcul formula probabilității ca un exemplu fix să nu fie selectat într-un bootstrap de 10 extrageri din 10 exemple.",
              "level": "Mediu",
              "type": "open",
              "hint": "Probabilitatea de a nu fi extras într-un pas este 9/10; în 10 pași, înmulțește.",
              "solutionText": "(9/10)^10 ≈ 0,3487. Pentru n mare, limita tinde la e^(-1)≈0,3679.",
              "solutionCode": "n = 10\np_oob = (1 - 1 / n) ** n\nprint(round(p_oob, 4))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">n</span> <span class=\"o\">=</span> <span class=\"mi\">10</span>\n<span class=\"n\">p_oob</span> <span class=\"o\">=</span> <span class=\"p\">(</span><span class=\"mi\">1</span> <span class=\"o\">-</span> <span class=\"mi\">1</span> <span class=\"o\">/</span> <span class=\"n\">n</span><span class=\"p\">)</span> <span class=\"o\">**</span> <span class=\"n\">n</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">p_oob</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Implementarea unui stump pentru regresie",
              "description": "Din (x, y), alege pragul numeric care minimizează suma pătratelor reziduurilor folosind predicțiile egale cu media pe fiecare parte.",
              "level": "Dificil",
              "type": "open",
              "hint": "Testează mijloacele dintre valori x distincte, apoi calculează mediile și SSE pentru stânga și dreapta.",
              "solutionText": "",
              "solutionCode": "def stump_regresie(x, y):\n    perechi = sorted(zip(x, y))\n    valori = sorted(set(x))\n    best = None\n    for a, b in zip(valori, valori[1:]):\n        prag = (a + b) / 2\n        st = [v for p, v in perechi if p <= prag]\n        dr = [v for p, v in perechi if p > prag]\n        ms = sum(st) / len(st)\n        md = sum(dr) / len(dr)\n        sse = sum((v-ms)**2 for v in st) + sum((v-md)**2 for v in dr)\n        if best is None or sse < best[0]:\n            best = (sse, prag, ms, md)\n    return best\n\nprint(stump_regresie([1, 2, 3, 4], [2, 2, 7, 8]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">stump_regresie</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">):</span>\n    <span class=\"n\">perechi</span> <span class=\"o\">=</span> <span class=\"nb\">sorted</span><span class=\"p\">(</span><span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">))</span>\n    <span class=\"n\">valori</span> <span class=\"o\">=</span> <span class=\"nb\">sorted</span><span class=\"p\">(</span><span class=\"nb\">set</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">))</span>\n    <span class=\"n\">best</span> <span class=\"o\">=</span> <span class=\"kc\">None</span>\n    <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">valori</span><span class=\"p\">,</span> <span class=\"n\">valori</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">:]):</span>\n        <span class=\"n\">prag</span> <span class=\"o\">=</span> <span class=\"p\">(</span><span class=\"n\">a</span> <span class=\"o\">+</span> <span class=\"n\">b</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"mi\">2</span>\n        <span class=\"n\">st</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"n\">v</span> <span class=\"k\">for</span> <span class=\"n\">p</span><span class=\"p\">,</span> <span class=\"n\">v</span> <span class=\"ow\">in</span> <span class=\"n\">perechi</span> <span class=\"k\">if</span> <span class=\"n\">p</span> <span class=\"o\">&lt;=</span> <span class=\"n\">prag</span><span class=\"p\">]</span>\n        <span class=\"n\">dr</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"n\">v</span> <span class=\"k\">for</span> <span class=\"n\">p</span><span class=\"p\">,</span> <span class=\"n\">v</span> <span class=\"ow\">in</span> <span class=\"n\">perechi</span> <span class=\"k\">if</span> <span class=\"n\">p</span> <span class=\"o\">&gt;</span> <span class=\"n\">prag</span><span class=\"p\">]</span>\n        <span class=\"n\">ms</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">st</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">st</span><span class=\"p\">)</span>\n        <span class=\"n\">md</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">dr</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">dr</span><span class=\"p\">)</span>\n        <span class=\"n\">sse</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">v</span><span class=\"o\">-</span><span class=\"n\">ms</span><span class=\"p\">)</span><span class=\"o\">**</span><span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">v</span> <span class=\"ow\">in</span> <span class=\"n\">st</span><span class=\"p\">)</span> <span class=\"o\">+</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">v</span><span class=\"o\">-</span><span class=\"n\">md</span><span class=\"p\">)</span><span class=\"o\">**</span><span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">v</span> <span class=\"ow\">in</span> <span class=\"n\">dr</span><span class=\"p\">)</span>\n        <span class=\"k\">if</span> <span class=\"n\">best</span> <span class=\"ow\">is</span> <span class=\"kc\">None</span> <span class=\"ow\">or</span> <span class=\"n\">sse</span> <span class=\"o\">&lt;</span> <span class=\"n\">best</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">]:</span>\n            <span class=\"n\">best</span> <span class=\"o\">=</span> <span class=\"p\">(</span><span class=\"n\">sse</span><span class=\"p\">,</span> <span class=\"n\">prag</span><span class=\"p\">,</span> <span class=\"n\">ms</span><span class=\"p\">,</span> <span class=\"n\">md</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"n\">best</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">stump_regresie</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">,</span> <span class=\"mi\">8</span><span class=\"p\">]))</span>\n</pre></div>\n"
            },
            {
              "title": "Un pas de Gradient Boosting de la zero",
              "description": "Pentru y=[3,5,10], pornește cu media, apoi consideră corecția h=[−3,−1,4] și η=0,25. Calculează predicțiile și MSE după pas.",
              "level": "Mediu",
              "type": "open",
              "hint": "F0 = 6. Aplică F1[i] = 6 + 0.25*h[i].",
              "solutionText": "",
              "solutionCode": "y = [3, 5, 10]\nF0 = sum(y) / len(y)\nh = [-3, -1, 4]\neta = 0.25\nF1 = [F0 + eta * corectie for corectie in h]\nmse = sum((y[i] - F1[i])**2 for i in range(len(y))) / len(y)\nprint(F1, mse)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">10</span><span class=\"p\">]</span>\n<span class=\"n\">F0</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"n\">h</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"o\">-</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">]</span>\n<span class=\"n\">eta</span> <span class=\"o\">=</span> <span class=\"mf\">0.25</span>\n<span class=\"n\">F1</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"n\">F0</span> <span class=\"o\">+</span> <span class=\"n\">eta</span> <span class=\"o\">*</span> <span class=\"n\">corectie</span> <span class=\"k\">for</span> <span class=\"n\">corectie</span> <span class=\"ow\">in</span> <span class=\"n\">h</span><span class=\"p\">]</span>\n<span class=\"n\">mse</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">y</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"o\">-</span> <span class=\"n\">F1</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">])</span><span class=\"o\">**</span><span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)))</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">F1</span><span class=\"p\">,</span> <span class=\"n\">mse</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Comparație Random Forest vs. un arbore",
              "description": "Pe un set generat prin make_moons, antrenează DecisionTreeClassifier și RandomForestClassifier pe aceeași împărțire și afișează accuracy.",
              "level": "Mediu",
              "type": "open",
              "hint": "Stabilește același random_state pentru comparabilitate și folosește train_test_split stratificat.",
              "solutionText": "",
              "solutionCode": "from sklearn.datasets import make_moons\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier\n\nX, y = make_moons(n_samples=160, noise=.23, random_state=2)\nXt, Xv, yt, yv = train_test_split(X, y, test_size=.30,\n                                  random_state=2, stratify=y)\nmodele = [DecisionTreeClassifier(random_state=2),\n          RandomForestClassifier(n_estimators=60, random_state=2)]\nfor model in modele:\n    model.fit(Xt, yt)\n    print(type(model).__name__, round(model.score(Xv, yv), 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_moons</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.tree</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">DecisionTreeClassifier</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.ensemble</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">RandomForestClassifier</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">make_moons</span><span class=\"p\">(</span><span class=\"n\">n_samples</span><span class=\"o\">=</span><span class=\"mi\">160</span><span class=\"p\">,</span> <span class=\"n\">noise</span><span class=\"o\">=</span><span class=\"mf\">.23</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">)</span>\n<span class=\"n\">Xt</span><span class=\"p\">,</span> <span class=\"n\">Xv</span><span class=\"p\">,</span> <span class=\"n\">yt</span><span class=\"p\">,</span> <span class=\"n\">yv</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">test_size</span><span class=\"o\">=</span><span class=\"mf\">.30</span><span class=\"p\">,</span>\n                                  <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"n\">stratify</span><span class=\"o\">=</span><span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"n\">modele</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"n\">DecisionTreeClassifier</span><span class=\"p\">(</span><span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">),</span>\n          <span class=\"n\">RandomForestClassifier</span><span class=\"p\">(</span><span class=\"n\">n_estimators</span><span class=\"o\">=</span><span class=\"mi\">60</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">)]</span>\n<span class=\"k\">for</span> <span class=\"n\">model</span> <span class=\"ow\">in</span> <span class=\"n\">modele</span><span class=\"p\">:</span>\n    <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">Xt</span><span class=\"p\">,</span> <span class=\"n\">yt</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">type</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"vm\">__name__</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">score</span><span class=\"p\">(</span><span class=\"n\">Xv</span><span class=\"p\">,</span> <span class=\"n\">yv</span><span class=\"p\">),</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Testează o estimare OOB",
              "description": "Antrenează o pădure de arbori cu bootstrap=True și oob_score=True; compară scorul OOB cu scorul pe validare.",
              "level": "Mediu",
              "type": "open",
              "hint": "oob_score_ apare după fit. Nu confunda OOB cu scorul pe test.",
              "solutionText": "",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\n\nX, y = load_iris(return_X_y=True)\nXt, Xv, yt, yv = train_test_split(X, y, test_size=.25,\n                                  random_state=6, stratify=y)\nmodel = RandomForestClassifier(n_estimators=200, bootstrap=True,\n                               oob_score=True, random_state=6)\nmodel.fit(Xt, yt)\nprint(round(model.oob_score_, 3), round(model.score(Xv, yv), 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">load_iris</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.ensemble</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">RandomForestClassifier</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">load_iris</span><span class=\"p\">(</span><span class=\"n\">return_X_y</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"n\">Xt</span><span class=\"p\">,</span> <span class=\"n\">Xv</span><span class=\"p\">,</span> <span class=\"n\">yt</span><span class=\"p\">,</span> <span class=\"n\">yv</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">test_size</span><span class=\"o\">=</span><span class=\"mf\">.25</span><span class=\"p\">,</span>\n                                  <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"n\">stratify</span><span class=\"o\">=</span><span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">RandomForestClassifier</span><span class=\"p\">(</span><span class=\"n\">n_estimators</span><span class=\"o\">=</span><span class=\"mi\">200</span><span class=\"p\">,</span> <span class=\"n\">bootstrap</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">,</span>\n                               <span class=\"n\">oob_score</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">6</span><span class=\"p\">)</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">Xt</span><span class=\"p\">,</span> <span class=\"n\">yt</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">oob_score_</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">),</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">score</span><span class=\"p\">(</span><span class=\"n\">Xv</span><span class=\"p\">,</span> <span class=\"n\">yv</span><span class=\"p\">),</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Tuning fără supraînvățare pe leaderboard",
              "description": "Propune un protocol pentru compararea a trei valori n_estimators și trei valori max_depth, fără să utilizezi repetat scorul public drept metrică de optimizare.",
              "level": "Dificil",
              "type": "open",
              "hint": "StratifiedKFold/GridSearchCV și un holdout final local. Pentru date temporale, nu amesteca timpii.",
              "solutionText": "Se definește o schemă potrivită de validare (stratificată, grupuri sau temporală), se compară cele 9 combinații doar pe foldurile de antrenare, se păstrează configurația aleasă și se evaluează o dată pe holdoutul local. Scorul public este o verificare suplimentară, nu criteriul unic de reglare."
            },
            {
              "title": "Parametrii de boosting",
              "description": "Explică efectele a două modificări: reducerea learning_rate de la 0,2 la 0,02 și dublarea n_estimators.",
              "level": "Mediu",
              "type": "open",
              "hint": "Un pas mai mic duce la corecții mai lente. Mai multe etape cresc capacitatea și costul.",
              "solutionText": "O rată de învățare mai mică atenuează fiecare corecție și poate necesita mai multe etape. Dublarea numărului de etape permite mai multe corecții, dar crește timpul de antrenare și poate favoriza overfittingul. Nu există garanții despre scor fără validare."
            },
            {
              "title": "Stacking corect cu 3 folduri",
              "description": "Descrie cum generezi predicțiile OOF ale unui estimator de bază folosind 3 folduri.",
              "level": "Dificil",
              "type": "open",
              "hint": "Antrenează modelul pe două folduri, prezice pe foldul rămas și scrie predicțiile în pozițiile originale.",
              "solutionText": "Fiecare exemplu primește exact o predicție de la un model care nu l-a văzut la fit. Predicțiile tuturor foldurilor formează noua coloană pentru meta-model.",
              "solutionCode": "import numpy as np\nfrom sklearn.model_selection import KFold\nfrom sklearn.tree import DecisionTreeRegressor\n\nX = np.arange(18).reshape(-1, 1)\ny = np.sin(X.ravel())\noof = np.zeros(len(y))\ncv = KFold(n_splits=3, shuffle=True, random_state=2)\nfor train_idx, valid_idx in cv.split(X):\n    model = DecisionTreeRegressor(max_depth=2, random_state=2)\n    model.fit(X[train_idx], y[train_idx])\n    oof[valid_idx] = model.predict(X[valid_idx])\nprint(len(oof), round(float(np.mean(oof)), 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">numpy</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">np</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">KFold</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.tree</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">DecisionTreeRegressor</span>\n\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">arange</span><span class=\"p\">(</span><span class=\"mi\">18</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">reshape</span><span class=\"p\">(</span><span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">)</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">sin</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">ravel</span><span class=\"p\">())</span>\n<span class=\"n\">oof</span> <span class=\"o\">=</span> <span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">zeros</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"p\">))</span>\n<span class=\"n\">cv</span> <span class=\"o\">=</span> <span class=\"n\">KFold</span><span class=\"p\">(</span><span class=\"n\">n_splits</span><span class=\"o\">=</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"n\">shuffle</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">train_idx</span><span class=\"p\">,</span> <span class=\"n\">valid_idx</span> <span class=\"ow\">in</span> <span class=\"n\">cv</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">):</span>\n    <span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">DecisionTreeRegressor</span><span class=\"p\">(</span><span class=\"n\">max_depth</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">)</span>\n    <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">[</span><span class=\"n\">train_idx</span><span class=\"p\">],</span> <span class=\"n\">y</span><span class=\"p\">[</span><span class=\"n\">train_idx</span><span class=\"p\">])</span>\n    <span class=\"n\">oof</span><span class=\"p\">[</span><span class=\"n\">valid_idx</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">[</span><span class=\"n\">valid_idx</span><span class=\"p\">])</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">oof</span><span class=\"p\">),</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"n\">np</span><span class=\"o\">.</span><span class=\"n\">mean</span><span class=\"p\">(</span><span class=\"n\">oof</span><span class=\"p\">)),</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Exemplu de date categorice",
              "description": "Cum prelucrezi atributul „tip de dispozitiv” cu valorile mobil, PC și tabletă înainte de un RandomForestClassifier?",
              "level": "Mediu",
              "type": "open",
              "hint": "Nu transforma arbitrar mobil=1, PC=2, tabletă=3 dacă valorile nu au ordine.",
              "solutionText": "OneHotEncoder(handle_unknown=\"ignore\") aplicat într-un ColumnTransformer și apoi estimarea RandomForest într-un Pipeline. Preprocesarea trebuie ajustată exclusiv pe seturile de antrenare ale foldurilor."
            },
            {
              "title": "Compararea timpilor de execuție",
              "description": "Scrie un experiment pentru a măsura durata antrenării unui arbore și a 100 de arbori. Spune de ce o singură măsurare poate fi instabilă.",
              "level": "Mediu",
              "type": "open",
              "hint": "Folosește time.perf_counter și repetă de câteva ori, eventual folosind mediana.",
              "solutionText": "Timpul depinde de încărcarea sistemului, dimensiunea datelor, cache și paralelizare; repetă rulările pentru rezultate mai stabile.",
              "solutionCode": "from time import perf_counter\nfrom sklearn.datasets import make_classification\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier\n\nX, y = make_classification(n_samples=250, n_features=8,\n                           n_informative=5, random_state=4)\nfor model in [DecisionTreeClassifier(random_state=4),\n              RandomForestClassifier(n_estimators=100, random_state=4)]:\n    start = perf_counter()\n    model.fit(X, y)\n    print(type(model).__name__, round(perf_counter()-start, 4), 'secunde')\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">time</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">perf_counter</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_classification</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.tree</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">DecisionTreeClassifier</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.ensemble</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">RandomForestClassifier</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">make_classification</span><span class=\"p\">(</span><span class=\"n\">n_samples</span><span class=\"o\">=</span><span class=\"mi\">250</span><span class=\"p\">,</span> <span class=\"n\">n_features</span><span class=\"o\">=</span><span class=\"mi\">8</span><span class=\"p\">,</span>\n                           <span class=\"n\">n_informative</span><span class=\"o\">=</span><span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">4</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">model</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"n\">DecisionTreeClassifier</span><span class=\"p\">(</span><span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">4</span><span class=\"p\">),</span>\n              <span class=\"n\">RandomForestClassifier</span><span class=\"p\">(</span><span class=\"n\">n_estimators</span><span class=\"o\">=</span><span class=\"mi\">100</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">4</span><span class=\"p\">)]:</span>\n    <span class=\"n\">start</span> <span class=\"o\">=</span> <span class=\"n\">perf_counter</span><span class=\"p\">()</span>\n    <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">type</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"vm\">__name__</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">perf_counter</span><span class=\"p\">()</span><span class=\"o\">-</span><span class=\"n\">start</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">),</span> <span class=\"s1\">&#39;secunde&#39;</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Analizează eroarea unui ensemble",
              "description": "Trei modele greșesc fiecare de 20% din timp. Putem afirma că media lor va greși sub 20%?",
              "level": "Dificil",
              "type": "open",
              "hint": "Ai nevoie de informații despre corelația erorilor și despre regula de combinare.",
              "solutionText": "Nu. Dacă toate greșesc pe exact aceleași exemple, votul nu poate corecta greșelile comune. Dacă erorile sunt diferite, combinarea poate ajuta, dar nu este o garanție."
            }
          ]
        },
        {
          "id": "sectiunea-2-7",
          "number": "3.7",
          "title": "Mașini cu vectori suport (SVM)",
          "stage": "general",
          "summary": "De la separarea printr-o dreaptă la marginea maximă, vectori suport și kerneluri; clasificare binară și multiclasă, scalare, SVC/LinearSVC și laborator vizual.",
          "objectives": [
            "Să explici geometric ce sunt frontiera de clasificare, marginea și vectorii suport.",
            "Să interpretezi efectul parametrilor C, gamma și al kernelului și să eviți overfittingul.",
            "Să înțelegi clasificarea multiclasă One-vs-One și One-vs-Rest și diferența SVC/LinearSVC.",
            "Să implementezi o versiune didactică SVM liniar și să folosești Pipeline și SVC în scikit-learn.",
            "Să alegi metrici, preprocesare și validare potrivite unui concurs de inteligență artificială."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs — Mașini cu vectori suport (SVM)",
              "src": "content/svm-onia.html",
              "standalone": "content/svm-onia-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator live — Margine, vectori suport, kerneluri și multiclasă",
              "src": "interactive/svm-laborator.html",
              "height": 1000,
              "caption": "Modifică punctele, parametrii C/gamma și kernelul. Urmărește vectorii suport și voturile One-vs-One. Deschide laboratorul într-o pagină nouă pentru a folosi tot spațiul ecranului."
            },
            {
              "type": "html",
              "title": "Notebook SVM — exemple Python pentru clasificare și regresie",
              "src": "content/svm-notebook.html",
              "height": 700,
              "download": "notebooks/ONIA-SVM.ipynb",
              "caption": "Notebook Jupyter cu exemple, grafice și cod scikit-learn, pregătit pentru execuție locală."
            }
          ],
          "exercises": [
            {
              "title": "Ce separă SVM?",
              "level": "Ușor",
              "type": "mcq",
              "description": "Un SVM liniar de clasificare a învățat scorul f(x)=3x₁−2x₂−4. Ce clasă (+1 sau −1) primește x=(2,1)?",
              "options": [
                "+1",
                "−1",
                "Nu poate decide",
                "Este o probabilitate 0"
              ],
              "answerIndex": 0,
              "explanation": "Scorul este 3·2−2·1−4=0; avem exact frontiera de decizie. Cu regula didactică f≥0 alegem +1.",
              "hint": "Calculează f(x) și observă că punctul este pe frontieră. Valoarea 0 este o situație de egalitate; convenția de clasificare trebuie precizată."
            },
            {
              "title": "Vectorii suport",
              "level": "Ușor",
              "type": "mcq",
              "description": "Care puncte au influență directă asupra frontierei în reprezentarea duală a unui SVM?",
              "options": [
                "Doar punctele cu etichetă 1",
                "Punctele cu coeficienți duali nenuli",
                "Doar punctele cel mai departe de frontieră",
                "Toate punctele au coeficienți egali"
              ],
              "answerIndex": 1,
              "explanation": "Vectorii suport sunt exemplele cu coeficienți duali nenuli; ele contribuie la funcția de decizie.",
              "hint": "Reamintește-ți formula f(x)=Σ αᵢ yᵢ K(xᵢ,x)+b."
            },
            {
              "title": "Semnul scorului",
              "level": "Ușor",
              "type": "mcq",
              "description": "Dacă scorul f(x) este −1,8 într-un SVM cu etichetele −1 și +1, ce putem spune?",
              "options": [
                "Modelul prezice clasa −1",
                "Probabilitatea clasei −1 este 1,8",
                "Modelul prezice clasa +1",
                "Înseamnă MSE negativ"
              ],
              "answerIndex": 0,
              "explanation": "Semnul scorului indică eticheta; scorul nu este probabilitate.",
              "hint": "Probabilitățile se află între 0 și 1; un scor SVM nu are această restricție."
            },
            {
              "title": "Hinge loss I",
              "level": "Ușor",
              "type": "mcq",
              "description": "Pentru y=+1 și f(x)=0,3, cât este hinge loss?",
              "options": [
                "0",
                "0,3",
                "0,7",
                "1,3"
              ],
              "answerIndex": 2,
              "explanation": "max(0,1−(+1)·0,3)=0,7. Predicția este corectă, dar în interiorul marginii.",
              "hint": "Aplică max(0, 1−y·f)."
            },
            {
              "title": "Hinge loss II",
              "level": "Ușor",
              "type": "mcq",
              "description": "Pentru y=−1 și f(x)=+0,5, cât este hinge loss?",
              "options": [
                "0",
                "0,5",
                "1,0",
                "1,5"
              ],
              "answerIndex": 3,
              "explanation": "Marginea semnată este −0,5. Pierderea este max(0,1−(−0,5))=1,5.",
              "hint": "Nu uita să înmulțești scorul cu eticheta reală."
            },
            {
              "title": "C și regularizarea",
              "level": "Mediu",
              "type": "mcq",
              "description": "Ce efect tinde să aibă scăderea parametrului C?",
              "options": [
                "Penalizează mai puternic încălcările marginii",
                "Permite mai ușor încălcări ale marginii",
                "Transformă SVM în K-NN",
                "Elimină automat toate erorile"
              ],
              "answerIndex": 1,
              "explanation": "C mic penalizează mai puțin fiecare încălcare și duce la regularizare mai puternică; în funcție de date, frontiera poate deveni mai simplă.",
              "hint": "Compară rolul lui C cu coeficientul penalizării ξᵢ."
            },
            {
              "title": "Gamma mare",
              "level": "Mediu",
              "type": "mcq",
              "description": "Pentru SVC cu kernel RBF, care este riscul unui gamma extrem de mare?",
              "options": [
                "Frontiera devine obligatoriu liniară",
                "Punctele vecine au mereu aceeași clasă",
                "Modelul poate deveni prea sensibil la exemple izolate",
                "Numărul de clase scade"
              ],
              "answerIndex": 2,
              "explanation": "Gamma mare produce influență foarte locală și poate favoriza overfittingul.",
              "hint": "Analizează raza de influență exp(−gamma·d²)."
            },
            {
              "title": "Alegerea kernelului",
              "level": "Ușor",
              "type": "mcq",
              "description": "Un set de date formează două inele concentrice, separate prin rază. Ce kernel este mai potrivit să testezi inițial?",
              "options": [
                "linear",
                "rbf",
                "Niciunul",
                "Orice kernel liniar produce obligatoriu separare perfectă"
              ],
              "answerIndex": 1,
              "explanation": "RBF poate crea o frontieră neliniară aproximativ circulară, spre deosebire de o dreaptă.",
              "hint": "Desenează inelele și încearcă să le separi cu o dreaptă."
            },
            {
              "title": "OvO pentru șase clase",
              "level": "Ușor",
              "type": "mcq",
              "description": "De câte modele binare are nevoie schema one-vs-one pentru șase clase?",
              "options": [
                "6",
                "12",
                "15",
                "30"
              ],
              "answerIndex": 2,
              "explanation": "6·5/2 = 15 perechi de clase.",
              "hint": "Numără perechile distincte fără ordine."
            },
            {
              "title": "SVC multiclasă",
              "level": "Mediu",
              "type": "mcq",
              "description": "Ce înseamnă în scikit-learn `SVC(decision_function_shape=\"ovr\")`?",
              "options": [
                "Antrenează intern K modele OvR",
                "Returnează scoruri de forma OvR; intern SVC rămâne OvO",
                "Schimbă automat kernelul",
                "Nu poate prezice trei clase"
              ],
              "answerIndex": 1,
              "explanation": "Parametrul controlează forma funcției de decizie; antrenarea internă a SVC folosește OvO.",
              "hint": "Compară antrenarea cu reprezentarea scorurilor."
            },
            {
              "title": "LinearSVC și SVC",
              "level": "Mediu",
              "type": "mcq",
              "description": "Care estimator utilizează implicit OvR pentru mai multe clase?",
              "options": [
                "SVC(kernel=\"rbf\")",
                "SVC(kernel=\"linear\")",
                "LinearSVC",
                "SVR"
              ],
              "answerIndex": 2,
              "explanation": "LinearSVC implementează multiclasă cu One-vs-Rest în mod implicit.",
              "hint": "LinearSVC folosește liblinear, iar SVC libsvm."
            },
            {
              "title": "Scalarea corectă",
              "level": "Mediu",
              "type": "mcq",
              "description": "Când trebuie estimată media pentru StandardScaler într-o validare cross-validation?",
              "options": [
                "Pe toate datele înaintea CV",
                "Pe fiecare fold de antrenare separat",
                "Pe foldul de test",
                "Nu contează"
              ],
              "answerIndex": 1,
              "explanation": "Fiecare scaler trebuie ajustat numai pe porțiunea de antrenare a foldului; folosim Pipeline.",
              "hint": "Caută sursa unei posibile scurgeri de informație."
            },
            {
              "title": "Probabilități",
              "level": "Mediu",
              "type": "mcq",
              "description": "Ce reprezintă de regulă rezultatul `SVC.decision_function()`?",
              "options": [
                "Probabilități calibrate în [0,1]",
                "Scoruri folosite în decizie, nu probabilități directe",
                "Un procent de eroare",
                "Distantele între clase cu suma 1"
              ],
              "answerIndex": 1,
              "explanation": "Scorurile sunt semnate sau reprezentări multiclasă; nu trebuie tratate direct drept probabilități.",
              "hint": "Valorile unui scor SVM pot fi negative sau >1."
            },
            {
              "title": "Set de test și concurs",
              "level": "Mediu",
              "type": "mcq",
              "description": "De ce nu reglăm C și gamma după sute de încercări pe leaderboardul public?",
              "options": [
                "Fiindcă scade numărul de caracteristici",
                "Fiindcă riscăm overfitting pe subsetul public",
                "Fiindcă SVM nu admite validare",
                "Fiindcă scorul public este mereu fals"
              ],
              "answerIndex": 1,
              "explanation": "Selectarea repetată după scorul public poate favoriza fluctuații aleatorii care nu se repetă pe setul final.",
              "hint": "Gândește-te la public leaderboard ca la un set de validare reutilizat."
            },
            {
              "title": "SVR: banda epsilon",
              "level": "Ușor",
              "type": "mcq",
              "description": "Dacă eroarea absolută a unei predicții SVR este 0,3, iar epsilon=0,5, ce ε-insensitive loss avem?",
              "options": [
                "0",
                "0,2",
                "0,3",
                "0,8"
              ],
              "answerIndex": 0,
              "explanation": "max(0, 0,3−0,5)=0.",
              "hint": "Loss = max(0, |y−pred|−epsilon)."
            },
            {
              "title": "Funcția pentru scorul unei frontiere liniare",
              "level": "Ușor",
              "type": "open",
              "description": "Scrie o funcție care primește un vector x, coeficienții w și interceptul b și returnează scorul f(x).",
              "hint": "Folosește produsul scalar calculat prin buclă.",
              "solutionCode": "def scor_svm(x, w, b):\n    scor = b\n    for i in range(len(x)):\n        scor += x[i] * w[i]\n    return scor\n\nprint(scor_svm([2, 3], [1, -2], 4))\n",
              "solutionCodeHtml": "<div class=\"highlight\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">scor_svm</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">w</span><span class=\"p\">,</span> <span class=\"n\">b</span><span class=\"p\">):</span>\n    <span class=\"n\">scor</span> <span class=\"o\">=</span> <span class=\"n\">b</span>\n    <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)):</span>\n        <span class=\"n\">scor</span> <span class=\"o\">+=</span> <span class=\"n\">x</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"o\">*</span> <span class=\"n\">w</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span>\n    <span class=\"k\">return</span> <span class=\"n\">scor</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">scor_svm</span><span class=\"p\">([</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"o\">-</span><span class=\"mi\">2</span><span class=\"p\">],</span> <span class=\"mi\">4</span><span class=\"p\">))</span>\n</pre></div>\n",
              "solutionText": "Rezultatul este 0. Este o situație exact pe frontieră."
            },
            {
              "title": "Calculul hinge loss pentru un set",
              "level": "Mediu",
              "type": "open",
              "description": "Se dau etichete +1/−1 și scorurile unui model. Calculează media valorilor hinge loss.",
              "hint": "Pentru fiecare exemplu: max(0,1−y·scor).",
              "solutionCode": "def medie_hinge(etichete, scoruri):\n    suma = 0.0\n    for y, scor in zip(etichete, scoruri):\n        suma += max(0.0, 1.0 - y * scor)\n    return suma / len(etichete)\n\nprint(round(medie_hinge([1, -1, 1], [1.2, 0.5, 0.8]), 3))\n",
              "solutionCodeHtml": "<div class=\"highlight\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">medie_hinge</span><span class=\"p\">(</span><span class=\"n\">etichete</span><span class=\"p\">,</span> <span class=\"n\">scoruri</span><span class=\"p\">):</span>\n    <span class=\"n\">suma</span> <span class=\"o\">=</span> <span class=\"mf\">0.0</span>\n    <span class=\"k\">for</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">scor</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">etichete</span><span class=\"p\">,</span> <span class=\"n\">scoruri</span><span class=\"p\">):</span>\n        <span class=\"n\">suma</span> <span class=\"o\">+=</span> <span class=\"nb\">max</span><span class=\"p\">(</span><span class=\"mf\">0.0</span><span class=\"p\">,</span> <span class=\"mf\">1.0</span> <span class=\"o\">-</span> <span class=\"n\">y</span> <span class=\"o\">*</span> <span class=\"n\">scor</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"n\">suma</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">etichete</span><span class=\"p\">)</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">medie_hinge</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mf\">1.2</span><span class=\"p\">,</span> <span class=\"mf\">0.5</span><span class=\"p\">,</span> <span class=\"mf\">0.8</span><span class=\"p\">]),</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n",
              "solutionText": "Rezultat: (0+1,5+0,2)/3=0,567 aproximativ."
            },
            {
              "title": "Perechile de clase în OvO",
              "level": "Ușor",
              "type": "open",
              "description": "Scrie o funcție care returnează lista perechilor dintre n clase 0, 1, ..., n−1.",
              "hint": "Pentru fiecare i, parcurge j mai mare decât i.",
              "solutionCode": "def perechi_ovo(n):\n    rezultat = []\n    for i in range(n):\n        for j in range(i + 1, n):\n            rezultat.append((i, j))\n    return rezultat\n\nprint(perechi_ovo(4))\n",
              "solutionCodeHtml": "<div class=\"highlight\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">perechi_ovo</span><span class=\"p\">(</span><span class=\"n\">n</span><span class=\"p\">):</span>\n    <span class=\"n\">rezultat</span> <span class=\"o\">=</span> <span class=\"p\">[]</span>\n    <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"n\">n</span><span class=\"p\">):</span>\n        <span class=\"k\">for</span> <span class=\"n\">j</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"n\">i</span> <span class=\"o\">+</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"n\">n</span><span class=\"p\">):</span>\n            <span class=\"n\">rezultat</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">((</span><span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"n\">j</span><span class=\"p\">))</span>\n    <span class=\"k\">return</span> <span class=\"n\">rezultat</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">perechi_ovo</span><span class=\"p\">(</span><span class=\"mi\">4</span><span class=\"p\">))</span>\n</pre></div>\n",
              "solutionText": "Rezultat: 6 perechi distincte."
            },
            {
              "title": "Clasificare Iris cu SVC multiclasă",
              "level": "Mediu",
              "type": "open",
              "description": "Antrenează SVC cu kernel RBF pe Iris. Compară accuracy pe un set de test cu un LinearSVC. Folosește pipeline și stratificare.",
              "hint": "Folosește `make_pipeline(StandardScaler(), SVC(...))` și `LinearSVC(...)`.",
              "solutionCode": "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC, LinearSVC\nfrom sklearn.metrics import accuracy_score\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(\n    X, y, test_size=0.3, stratify=y, random_state=7\n)\nmodele = [\n    make_pipeline(StandardScaler(), SVC(kernel=\"rbf\", C=2)),\n    make_pipeline(StandardScaler(), LinearSVC(max_iter=10000)),\n]\nfor model in modele:\n    model.fit(X_tr, y_tr)\n    print(round(accuracy_score(y_te, model.predict(X_te)), 3))\n",
              "solutionCodeHtml": "<div class=\"highlight\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">load_iris</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.svm</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">SVC</span><span class=\"p\">,</span> <span class=\"n\">LinearSVC</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">accuracy_score</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">load_iris</span><span class=\"p\">(</span><span class=\"n\">return_X_y</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">)</span>\n<span class=\"n\">X_tr</span><span class=\"p\">,</span> <span class=\"n\">X_te</span><span class=\"p\">,</span> <span class=\"n\">y_tr</span><span class=\"p\">,</span> <span class=\"n\">y_te</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span>\n    <span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">test_size</span><span class=\"o\">=</span><span class=\"mf\">0.3</span><span class=\"p\">,</span> <span class=\"n\">stratify</span><span class=\"o\">=</span><span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">7</span>\n<span class=\"p\">)</span>\n<span class=\"n\">modele</span> <span class=\"o\">=</span> <span class=\"p\">[</span>\n    <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">SVC</span><span class=\"p\">(</span><span class=\"n\">kernel</span><span class=\"o\">=</span><span class=\"s2\">&quot;rbf&quot;</span><span class=\"p\">,</span> <span class=\"n\">C</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">)),</span>\n    <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">LinearSVC</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">10000</span><span class=\"p\">)),</span>\n<span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">model</span> <span class=\"ow\">in</span> <span class=\"n\">modele</span><span class=\"p\">:</span>\n    <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X_tr</span><span class=\"p\">,</span> <span class=\"n\">y_tr</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">accuracy_score</span><span class=\"p\">(</span><span class=\"n\">y_te</span><span class=\"p\">,</span> <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">X_te</span><span class=\"p\">)),</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Scalarea caracteristicilor",
              "level": "Ușor",
              "type": "open",
              "description": "Construiește un Pipeline pentru SVM liniar care scalează datele înaintea antrenării.",
              "hint": "StandardScaler este primul pas, SVC al doilea.",
              "solutionCode": "from sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\n\nX = [[14, 100], [15, 110], [17, 480], [18, 510]]\ny = [0, 0, 1, 1]\nmodel = make_pipeline(StandardScaler(), SVC(kernel=\"linear\", C=1))\nmodel.fit(X, y)\nprint(model.predict([[16, 400]]))\n",
              "solutionCodeHtml": "<div class=\"highlight\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.svm</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">SVC</span>\n\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"p\">[[</span><span class=\"mi\">14</span><span class=\"p\">,</span> <span class=\"mi\">100</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">15</span><span class=\"p\">,</span> <span class=\"mi\">110</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">17</span><span class=\"p\">,</span> <span class=\"mi\">480</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">18</span><span class=\"p\">,</span> <span class=\"mi\">510</span><span class=\"p\">]]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">SVC</span><span class=\"p\">(</span><span class=\"n\">kernel</span><span class=\"o\">=</span><span class=\"s2\">&quot;linear&quot;</span><span class=\"p\">,</span> <span class=\"n\">C</span><span class=\"o\">=</span><span class=\"mi\">1</span><span class=\"p\">))</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">([[</span><span class=\"mi\">16</span><span class=\"p\">,</span> <span class=\"mi\">400</span><span class=\"p\">]]))</span>\n</pre></div>\n"
            },
            {
              "title": "Căutarea parametrilor C și gamma",
              "level": "Dificil",
              "type": "open",
              "description": "Realizează o validare încrucișată pentru alegerea lui C și gamma cu `GridSearchCV`, fără data leakage.",
              "hint": "Setează un Pipeline cu numele pașilor și parametri `svc__C`, `svc__gamma`.",
              "solutionCode": "from sklearn.datasets import make_moons\nfrom sklearn.model_selection import GridSearchCV\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\n\nX, y = make_moons(n_samples=180, noise=.2, random_state=3)\npipe = Pipeline([(\"scaler\", StandardScaler()), (\"svc\", SVC())])\ncv = GridSearchCV(pipe, {\n    \"svc__C\": [.1, 1, 10],\n    \"svc__gamma\": [.05, .5, 5]\n}, cv=3, scoring=\"f1\")\ncv.fit(X, y)\nprint(cv.best_params_)\n",
              "solutionCodeHtml": "<div class=\"highlight\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_moons</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">GridSearchCV</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.svm</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">SVC</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">make_moons</span><span class=\"p\">(</span><span class=\"n\">n_samples</span><span class=\"o\">=</span><span class=\"mi\">180</span><span class=\"p\">,</span> <span class=\"n\">noise</span><span class=\"o\">=</span><span class=\"mf\">.2</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">3</span><span class=\"p\">)</span>\n<span class=\"n\">pipe</span> <span class=\"o\">=</span> <span class=\"n\">Pipeline</span><span class=\"p\">([(</span><span class=\"s2\">&quot;scaler&quot;</span><span class=\"p\">,</span> <span class=\"n\">StandardScaler</span><span class=\"p\">()),</span> <span class=\"p\">(</span><span class=\"s2\">&quot;svc&quot;</span><span class=\"p\">,</span> <span class=\"n\">SVC</span><span class=\"p\">())])</span>\n<span class=\"n\">cv</span> <span class=\"o\">=</span> <span class=\"n\">GridSearchCV</span><span class=\"p\">(</span><span class=\"n\">pipe</span><span class=\"p\">,</span> <span class=\"p\">{</span>\n    <span class=\"s2\">&quot;svc__C&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mf\">.1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">10</span><span class=\"p\">],</span>\n    <span class=\"s2\">&quot;svc__gamma&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mf\">.05</span><span class=\"p\">,</span> <span class=\"mf\">.5</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">]</span>\n<span class=\"p\">},</span> <span class=\"n\">cv</span><span class=\"o\">=</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"n\">scoring</span><span class=\"o\">=</span><span class=\"s2\">&quot;f1&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">cv</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">cv</span><span class=\"o\">.</span><span class=\"n\">best_params_</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Categorii nominale într-un SVM",
              "level": "Dificil",
              "type": "open",
              "description": "O caracteristică `culoare` poate fi roșu, verde sau albastru. Construiește un model cu OneHotEncoder, fără să inventezi ordinea 0<1<2.",
              "hint": "Aplică OneHotEncoder numai coloanei categorice într-un ColumnTransformer.",
              "solutionCode": "import pandas as pd\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import OneHotEncoder, StandardScaler\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.svm import SVC\n\nX = pd.DataFrame({\"temperatura\": [11, 23, 14, 28],\n                  \"culoare\": [\"rosu\", \"albastru\", \"rosu\", \"verde\"]})\ny = [0, 1, 0, 1]\nprep = ColumnTransformer([\n    (\"numeric\", StandardScaler(), [\"temperatura\"]),\n    (\"categorie\", OneHotEncoder(handle_unknown=\"ignore\"), [\"culoare\"])\n])\nmodel = make_pipeline(prep, SVC(kernel=\"linear\"))\nmodel.fit(X, y)\nprint(model.predict(X.iloc[[0]]))\n",
              "solutionCodeHtml": "<div class=\"highlight\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.compose</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">ColumnTransformer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">OneHotEncoder</span><span class=\"p\">,</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.svm</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">SVC</span>\n\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span><span class=\"s2\">&quot;temperatura&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mi\">11</span><span class=\"p\">,</span> <span class=\"mi\">23</span><span class=\"p\">,</span> <span class=\"mi\">14</span><span class=\"p\">,</span> <span class=\"mi\">28</span><span class=\"p\">],</span>\n                  <span class=\"s2\">&quot;culoare&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;rosu&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;albastru&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;rosu&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;verde&quot;</span><span class=\"p\">]})</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">prep</span> <span class=\"o\">=</span> <span class=\"n\">ColumnTransformer</span><span class=\"p\">([</span>\n    <span class=\"p\">(</span><span class=\"s2\">&quot;numeric&quot;</span><span class=\"p\">,</span> <span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"p\">[</span><span class=\"s2\">&quot;temperatura&quot;</span><span class=\"p\">]),</span>\n    <span class=\"p\">(</span><span class=\"s2\">&quot;categorie&quot;</span><span class=\"p\">,</span> <span class=\"n\">OneHotEncoder</span><span class=\"p\">(</span><span class=\"n\">handle_unknown</span><span class=\"o\">=</span><span class=\"s2\">&quot;ignore&quot;</span><span class=\"p\">),</span> <span class=\"p\">[</span><span class=\"s2\">&quot;culoare&quot;</span><span class=\"p\">])</span>\n<span class=\"p\">])</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">prep</span><span class=\"p\">,</span> <span class=\"n\">SVC</span><span class=\"p\">(</span><span class=\"n\">kernel</span><span class=\"o\">=</span><span class=\"s2\">&quot;linear&quot;</span><span class=\"p\">))</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">iloc</span><span class=\"p\">[[</span><span class=\"mi\">0</span><span class=\"p\">]]))</span>\n</pre></div>\n"
            },
            {
              "title": "Predicție cu SVR",
              "level": "Mediu",
              "type": "open",
              "description": "Pe datele numerice date antrenează un SVR și estimează o valoare pentru x=4,5.",
              "hint": "Folosește SVR(kernel=\"rbf\") într-un Pipeline.",
              "solutionCode": "from sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVR\n\nX = [[1], [2], [3], [4], [5], [6]]\ny = [2, 3, 3.5, 4.5, 5, 6]\nmodel = make_pipeline(StandardScaler(), SVR(C=5, epsilon=.1))\nmodel.fit(X, y)\nprint(round(float(model.predict([[4.5]])[0]), 2))\n",
              "solutionCodeHtml": "<div class=\"highlight\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.svm</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">SVR</span>\n\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"p\">[[</span><span class=\"mi\">1</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">3</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">4</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">5</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">6</span><span class=\"p\">]]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mf\">3.5</span><span class=\"p\">,</span> <span class=\"mf\">4.5</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">]</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">SVR</span><span class=\"p\">(</span><span class=\"n\">C</span><span class=\"o\">=</span><span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"n\">epsilon</span><span class=\"o\">=</span><span class=\"mf\">.1</span><span class=\"p\">))</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">([[</span><span class=\"mf\">4.5</span><span class=\"p\">]])[</span><span class=\"mi\">0</span><span class=\"p\">]),</span> <span class=\"mi\">2</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Clase foarte dezechilibrate",
              "level": "Dificil",
              "type": "open",
              "description": "Antrenează SVC pe un set cu multe exemple negative și puține pozitive folosind ponderi echilibrate; evaluează F1.",
              "hint": "Folosește class_weight=\"balanced\" și train_test_split stratificat.",
              "solutionCode": "from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\nfrom sklearn.metrics import f1_score\n\nX, y = make_classification(\n    n_samples=200, n_features=5, n_informative=3,\n    n_redundant=0, weights=[0.9, 0.1], random_state=8\n)\nX_tr, X_te, y_tr, y_te = train_test_split(\n    X, y, stratify=y, random_state=8\n)\nmodel = make_pipeline(\n    StandardScaler(), SVC(kernel=\"rbf\", class_weight=\"balanced\")\n)\nmodel.fit(X_tr, y_tr)\nprint(round(f1_score(y_te, model.predict(X_te)), 3))\n",
              "solutionCodeHtml": "<div class=\"highlight\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.datasets</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_classification</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.svm</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">SVC</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">f1_score</span>\n\n<span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"n\">make_classification</span><span class=\"p\">(</span>\n    <span class=\"n\">n_samples</span><span class=\"o\">=</span><span class=\"mi\">200</span><span class=\"p\">,</span> <span class=\"n\">n_features</span><span class=\"o\">=</span><span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"n\">n_informative</span><span class=\"o\">=</span><span class=\"mi\">3</span><span class=\"p\">,</span>\n    <span class=\"n\">n_redundant</span><span class=\"o\">=</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"n\">weights</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mf\">0.9</span><span class=\"p\">,</span> <span class=\"mf\">0.1</span><span class=\"p\">],</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">8</span>\n<span class=\"p\">)</span>\n<span class=\"n\">X_tr</span><span class=\"p\">,</span> <span class=\"n\">X_te</span><span class=\"p\">,</span> <span class=\"n\">y_tr</span><span class=\"p\">,</span> <span class=\"n\">y_te</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span>\n    <span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">stratify</span><span class=\"o\">=</span><span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">8</span>\n<span class=\"p\">)</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span>\n    <span class=\"n\">StandardScaler</span><span class=\"p\">(),</span> <span class=\"n\">SVC</span><span class=\"p\">(</span><span class=\"n\">kernel</span><span class=\"o\">=</span><span class=\"s2\">&quot;rbf&quot;</span><span class=\"p\">,</span> <span class=\"n\">class_weight</span><span class=\"o\">=</span><span class=\"s2\">&quot;balanced&quot;</span><span class=\"p\">)</span>\n<span class=\"p\">)</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X_tr</span><span class=\"p\">,</span> <span class=\"n\">y_tr</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">f1_score</span><span class=\"p\">(</span><span class=\"n\">y_te</span><span class=\"p\">,</span> <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">X_te</span><span class=\"p\">)),</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Scorul final versus scorul public",
              "level": "Mediu",
              "type": "open",
              "description": "Descrie un protocol de validare prin care alegi între SVC linear, RBF și LinearSVC, fără să folosești clasamentul public pentru reglaje repetate.",
              "hint": "Alege o metrică potrivită, folosește cross-validation stratificată și evaluează o singură dată pe holdout.",
              "solutionCode": "from sklearn.model_selection import StratifiedKFold, cross_val_score\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\n\n# X, y provin exclusiv din datele etichetate de antrenare.\n# Completează după încărcarea propriului set:\n# cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\n# model = make_pipeline(StandardScaler(), SVC(kernel=\"rbf\", C=1))\n# scoruri = cross_val_score(model, X, y, cv=cv, scoring=\"f1_macro\")\n# print(scoruri.mean(), scoruri.std())\n",
              "solutionCodeHtml": "<div class=\"highlight\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">StratifiedKFold</span><span class=\"p\">,</span> <span class=\"n\">cross_val_score</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.preprocessing</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">StandardScaler</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.svm</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">SVC</span>\n\n<span class=\"c1\"># X, y provin exclusiv din datele etichetate de antrenare.</span>\n<span class=\"c1\"># Completează după încărcarea propriului set:</span>\n<span class=\"c1\"># cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)</span>\n<span class=\"c1\"># model = make_pipeline(StandardScaler(), SVC(kernel=&quot;rbf&quot;, C=1))</span>\n<span class=\"c1\"># scoruri = cross_val_score(model, X, y, cv=cv, scoring=&quot;f1_macro&quot;)</span>\n<span class=\"c1\"># print(scoruri.mean(), scoruri.std())</span>\n</pre></div>\n",
              "solutionText": "Aceasta este o schemă de completat pe datele competiției, nu o execuție independentă. Public leaderboard se consultă numai pentru verificări finale, cu încercări puține și documentate."
            }
          ]
        }
      ]
    },
    {
      "id": "invatare-nesupervizata",
      "number": "04",
      "icon": "network",
      "color": "violet",
      "title": "Învățare nesupervizată",
      "shortTitle": "Învățare nesupervizată",
      "description": "Clustering, reducerea dimensionalității și reprezentări vizuale ale datelor.",
      "label": "Programă generală + națională",
      "sections": [
        {
          "id": "sectiunea-3-1",
          "number": "4.1",
          "title": "Algoritmul K-Means",
          "stage": "general",
          "summary": "De la distanța dintre două puncte până la gruparea unui set de date real. Construim algoritmul cu mâna, urmărim două etape repetitive, apoi îl folosim corect în scikit-learn.",
          "objectives": [
            "Să calculezi manual atribuirea punctelor și mutarea centroizilor, pas cu pas.",
            "Să compari K, inițializările și indicatorii inertia/silhouette.",
            "Să explici când K-Means este potrivit și cum folosești parametrii din scikit-learn."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport detaliat — K-Means — gruparea observațiilor",
              "src": "content/kmeans-onia.html",
              "standalone": "content/kmeans-onia-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — K-Means — gruparea observațiilor",
              "src": "interactive/kmeans-laborator.html",
              "height": 910,
              "caption": "Laborator didactic cu controale reale; se poate deschide separat pentru a folosi tot spațiul ecranului."
            },
            {
              "type": "html",
              "title": "Notebook explicat — exerciții și Python pas cu pas",
              "src": "content/kmeans-onia-notebook.html",
              "height": 600,
              "download": "notebooks/ONIA-Invatare-Nesupervizata-kmeans.ipynb",
              "caption": "Fișierul .ipynb poate fi executat în JupyterLab."
            }
          ],
          "exercises": [
            {
              "title": "O iterație completă pe patru puncte",
              "description": "Pornind de la A=(1,1), B=(1,3), C=(5,4), D=(6,4), cu μ₁=(1,1) și μ₂=(6,4), determină atribuirea și noii centroizi.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Calculează distanțele pătrate, apoi media fiecărui grup.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": "A,B în primul grup; C,D în al doilea. μ₁=(1,2), μ₂=(5,5;4).",
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Scrierea funcției de distanță",
              "description": "Implementează distanța euclidiană la pătrat pentru doi vectori de aceeași lungime.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Adună pătratele diferențelor coordonatelor.",
              "hintCode": null,
              "solutionCode": "def d2(a, b):\n    assert len(a) == len(b)\n    s = 0\n    for i in range(len(a)):\n        s += (a[i] - b[i]) ** 2\n    return s\n\nprint(d2([1,2,3], [3,2,1]))  # 8\n",
              "solutionText": null,
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "WCSS calculat manual",
              "description": "Pentru punctele (1,0), (3,0) dintr-un cluster cu centroidul (2,0), cât este WCSS?",
              "level": "Ușor",
              "statementCode": null,
              "hint": "Adună pătratele distanțelor până la centroid.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "1",
                "2",
                "4",
                "0"
              ],
              "answerIndex": 1,
              "explanation": "Fiecare punct are distanța pătrată 1; WCSS=1+1=2."
            },
            {
              "title": "Cel mai apropiat centru",
              "description": "Cu centrele (0,0), (4,0), cărui cluster îi aparține punctul (3,1)?",
              "level": "Ușor",
              "statementCode": null,
              "hint": "Folosește distanțe pătrate, nu rădăcini.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "Primul",
                "Al doilea",
                "Ambele la egalitate",
                "Nu poate fi decis"
              ],
              "answerIndex": 1,
              "explanation": "Distanțele pătrate sunt 10 și 2."
            },
            {
              "title": "Implementarea atribuirii",
              "description": "Scrie o funcție care întoarce indicele celui mai apropiat dintre K centroizi pentru un punct.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Parcurge centrii, compară d2 și păstrează cel mai bun indice.",
              "hintCode": null,
              "solutionCode": "def cel_mai_apropiat(punct, centre):\n    best = 0\n    d_min = sum((a-b)**2 for a,b in zip(punct,centre[0]))\n    for j in range(1,len(centre)):\n        d = sum((a-b)**2 for a,b in zip(punct,centre[j]))\n        if d < d_min:\n            best, d_min = j, d\n    return best\n\nprint(cel_mai_apropiat([3,1], [[0,0],[4,0]]))\n",
              "solutionText": null,
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Problema grupului gol",
              "description": "Ce trebuie să facă o implementare robustă dacă un grup nu primește niciun punct?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Ce înseamnă media când nu există observații?",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "Calculează media unei liste goale",
                "Menține sau reinițializează controlat centrul",
                "Șterge obligatoriu întregul set",
                "Împarte toate coordonatele la zero"
              ],
              "answerIndex": 1,
              "explanation": "Media nu există pentru grupul gol; este necesară o regulă explicită de tratare."
            },
            {
              "title": "Alegerea lui K și cotul",
              "description": "Desenează inertia pentru K=1…7 pentru un set sintetic și explică dacă observi o schimbare de pantă.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Folosește KMeans(...).inertia_ și nu alege automat K maxim.",
              "hintCode": null,
              "solutionCode": "from sklearn.cluster import KMeans\nfrom sklearn.datasets import make_blobs\nX, _ = make_blobs(n_samples=120, centers=3, random_state=7)\nfor k in range(1, 8):\n    model = KMeans(n_clusters=k, n_init=10, random_state=7)\n    model.fit(X)\n    print(k, round(model.inertia_, 2))\n",
              "solutionText": null,
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Categorii și numere",
              "description": "De ce `culoare={roșu:0, verde:1, albastru:2}` poate distorsiona K-Means?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Întreabă-te dacă o ordine numerică între culori are semnificație.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": "Codurile impun distanțe și ordine arbitrare; pentru categorii nominale discutăm codificări precum one-hot sau algoritmi dedicați.",
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "De ce poate scădea inerția la creșterea lui K?",
              "description": "Explică de ce un model cu multe clustere poate avea inertia mică fără să fie mai util.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Ce se întâmplă dacă fiecare punct devine propriul grup?",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": "Cu mai multe centre există posibilitatea de a micșora suma distanțelor pătrate; în cazul extrem K=n se poate obține inertia 0 fără o segmentare semnificativă.",
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Scor fără etichete",
              "description": "Care metrică poate fi calculată exclusiv cu X și etichetele de cluster?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Distinge metricile interne de cele care cer etichete reale.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "Accuracy",
                "Silhouette",
                "Macro-F1",
                "ROC-AUC"
              ],
              "answerIndex": 1,
              "explanation": "Silhouette folosește distanțe dintre observații și etichetele clusterelor, fără clase externe."
            },
            {
              "title": "K-Means pe pixeli RGB",
              "description": "Grupând fiecare pixel [R,G,B] în 4 clustere, reconstruiește o imagine folosind culoarea centroidului fiecărui grup.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Poți folosi model.cluster_centers_[model.labels_].",
              "hintCode": null,
              "solutionCode": "import numpy as np\nfrom sklearn.cluster import KMeans\npixeli = np.array([[240,0,0], [245,10,0],\n                   [0,0,240], [0,0,250], [0,230,0]], dtype=float)\nmodel = KMeans(n_clusters=3, n_init=10, random_state=0)\nlabels = model.fit_predict(pixeli)\nprint(model.cluster_centers_[labels].round().astype(int))\n",
              "solutionText": null,
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "n_init=\"auto\"",
              "description": "Cu init=\"k-means++\", ce înseamnă implicit n_init=\"auto\" în versiuni recente sklearn?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Regula depinde de init, nu numai de n_clusters.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "O inițializare",
                "Două inițializări",
                "Zece inițializări",
                "Câte una pentru fiecare punct"
              ],
              "answerIndex": 0,
              "explanation": "Pentru k-means++, opțiunea auto folosește o inițializare; pentru random folosește zece."
            },
            {
              "title": "Plan de experiment ONIA",
              "description": "Propune un protocol reproductibil pentru compararea valorilor K fără să folosești etichetele testului final.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Fixează preprocesarea, inițializările și metricile interne.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": "Stabilește un set de date neetichetate de lucru, justifică scalarea, fixează random_state, compară inertia/silhouette, inspectează grupurile și notează limitările. Nu folosi etichete ale testului final.",
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            }
          ]
        },
        {
          "id": "sectiunea-3-2",
          "number": "4.2",
          "title": "PCA – Analiza componentelor principale",
          "stage": "general",
          "summary": "Explorăm cum un nor de puncte poate fi privit dintr-o direcție mai informativă: centru, dispersie, direcție de variație maximă, proiecție și reconstrucție, apoi utilizarea corectă în scikit-learn.",
          "objectives": [
            "Să explici geometric și numeric centrul, covarianța, proiecția și variația explicată.",
            "Să implementezi PCA 2D didactic și să folosești transform/inverse_transform.",
            "Să alegi n_components, standardizarea și solverul fără scurgere de informație."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport detaliat — PCA — Analiza componentelor principale",
              "src": "content/pca-onia.html",
              "standalone": "content/pca-onia-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — PCA — Analiza componentelor principale",
              "src": "interactive/pca-laborator.html",
              "height": 910,
              "caption": "Laborator didactic cu controale reale; se poate deschide separat pentru a folosi tot spațiul ecranului."
            },
            {
              "type": "html",
              "title": "Notebook explicat — exerciții și Python pas cu pas",
              "src": "content/pca-onia-notebook.html",
              "height": 600,
              "download": "notebooks/ONIA-Invatare-Nesupervizata-pca.ipynb",
              "caption": "Fișierul .ipynb poate fi executat în JupyterLab."
            }
          ],
          "exercises": [
            {
              "title": "Centrul unui set de observații",
              "description": "Pentru punctele (1,2), (3,4), (5,6) determină vectorul medie.",
              "level": "Ușor",
              "statementCode": null,
              "hint": "Calculează separat media fiecărei coordonate.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "(3,4)",
                "(9,12)",
                "(2,3)",
                "(1,2)"
              ],
              "answerIndex": 0,
              "explanation": "Media pe coloane este ((1+3+5)/3,(2+4+6)/3)=(3,4)."
            },
            {
              "title": "Proiecție pe o axă",
              "description": "Pentru vectorul centrat (3,4) și direcția unitară (1,0), care este coordonata proiectată?",
              "level": "Ușor",
              "statementCode": null,
              "hint": "Aplică produsul scalar cu direcția.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "3",
                "4",
                "5",
                "7"
              ],
              "answerIndex": 0,
              "explanation": "Produsul scalar este 3×1+4×0=3."
            },
            {
              "title": "Centrarea fără NumPy",
              "description": "Scrie o funcție care centrează un set 2D și întoarce și vectorul media.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Fă mai întâi mediile celor două coloane.",
              "hintCode": null,
              "solutionCode": "def centreaza(puncte):\n    n = len(puncte)\n    mx = sum(p[0] for p in puncte)/n\n    my = sum(p[1] for p in puncte)/n\n    Z = [[p[0]-mx, p[1]-my] for p in puncte]\n    return Z, [mx, my]\nprint(centreaza([[1,2],[3,4],[5,6]]))\n",
              "solutionText": null,
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Calculul covarianței",
              "description": "Construiește matricea de covarianță pentru (1,1),(2,2),(3,3), folosind numitorul n−1.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Centrează la (2,2) apoi adună produsele.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": "[[1,1],[1,1]]; varianțele și covarianța sunt fiecare 1.",
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Raportul de variație explicată",
              "description": "Valorile proprii sunt 9, 1 și 0. Ce proporție din varianță explică prima componentă?",
              "level": "Ușor",
              "statementCode": null,
              "hint": "Împarte prima valoare proprie la suma tuturor.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "9%",
                "10%",
                "90%",
                "100%"
              ],
              "answerIndex": 2,
              "explanation": "9/(9+1+0)=0,9=90%."
            },
            {
              "title": "PCA nu scalează automat",
              "description": "Care afirmație este corectă?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Distinge scăderea mediei de împărțirea la deviația standard.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "PCA standardizează implicit fiecare caracteristică",
                "PCA centrează datele, dar nu le standardizează automat",
                "PCA cere obligatoriu etichete de clase",
                "PCA folosește doar variabile categorice"
              ],
              "answerIndex": 1,
              "explanation": "PCA din scikit-learn centrează, dar nu împarte coloanele automat la deviația standard."
            },
            {
              "title": "Reconstrucția dintr-o componentă",
              "description": "Folosește PCA(n_components=1) pentru a reconstrui aproximativ un set 2D și calculează eroarea pătratică.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Transformă apoi apelează inverse_transform.",
              "hintCode": null,
              "solutionCode": "import numpy as np\nfrom sklearn.decomposition import PCA\nX = np.array([[1.,1.], [2.,2.1], [3.,2.9], [4.,4.]])\npca = PCA(n_components=1)\nZ = pca.fit_transform(X)\nX_rec = pca.inverse_transform(Z)\nprint(((X-X_rec)**2).sum())\n",
              "solutionText": null,
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Alegerea numărului de componente",
              "description": "Alege numărul minim de componente pentru o variație explicată de minimum 95%.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Calculează suma cumulată a explained_variance_ratio_.",
              "hintCode": null,
              "solutionCode": "from sklearn.datasets import load_digits\nfrom sklearn.decomposition import PCA\nX, _ = load_digits(return_X_y=True)\npca = PCA(n_components=0.95, svd_solver='full')\npca.fit(X)\nprint(pca.n_components_)\n",
              "solutionText": null,
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Leakage în cross-validation",
              "description": "Unde trebuie ajustat StandardScaler și PCA?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Gândește-te ce înseamnă „fit” pentru un transformator.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "Pe toate datele înainte de CV",
                "În interiorul Pipeline-ului, pe foldul de antrenare",
                "Pe testul final, înainte de antrenare",
                "Nu se ajustează, sunt complet fixe"
              ],
              "answerIndex": 1,
              "explanation": "În fiecare fold, media, deviația și componentele se învață exclusiv din partea de antrenare."
            },
            {
              "title": "Whitening și zgomotul",
              "description": "Explică de ce whitening nu garantează îmbunătățirea unui clasificator.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Ce se întâmplă cu direcțiile care au varianță mică?",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": "Whitening rescalează toate componentele la varianță unitate și poate amplifica zgomotul pe componente slabe, eliminând diferențele de dispersie.",
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Componente și semnul lor",
              "description": "Dacă o componentă PCA este u, ce se întâmplă dacă o înlocuim cu −u?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Compară o axă cu aceeași axă orientată invers.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "Se schimbă proporția varianței explicate",
                "Se inversează semnul coordonatelor, nu informația",
                "Apare obligatoriu o componentă în plus",
                "Variabila devine categorică"
              ],
              "answerIndex": 1,
              "explanation": "Vectorii proprii pot avea ambele orientări; proiecțiile își schimbă semnul, dar varianța și subspațiul rămân aceleași."
            },
            {
              "title": "PCA și clasificare",
              "description": "De ce nu garantăm că PCA păstrează clasa separabilă?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Ce criteriu maximizează PCA, variația sau separarea etichetelor?",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": "PCA nu folosește etichetele și maximizează varianța totală, nu o măsură a separării claselor.",
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            }
          ]
        },
        {
          "id": "sectiunea-3-3",
          "number": "4.3",
          "title": "Vizualizare avansată: t-SNE și UMAP",
          "stage": "general",
          "summary": "Cum transformăm multe caracteristici în două coordonate pentru a explora vecinătăți, fără să confundăm desenul 2D cu distanțele exacte din spațiul original.",
          "objectives": [
            "Să explici de ce avem nevoie de metode neliniare pentru vizualizare.",
            "Să înțelegi vecinătățile și parametrii t-SNE și UMAP.",
            "Să compari critic hărți diferite, cu respectarea limitelor interpretării."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport detaliat — t-SNE și UMAP — vizualizare avansată",
              "src": "content/tsne-umap-onia.html",
              "standalone": "content/tsne-umap-onia-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — t-SNE și UMAP — vizualizare avansată",
              "src": "interactive/tsne-umap-laborator.html",
              "height": 910,
              "caption": "Laborator didactic cu controale reale; se poate deschide separat pentru a folosi tot spațiul ecranului."
            },
            {
              "type": "html",
              "title": "Notebook explicat — exerciții și Python pas cu pas",
              "src": "content/tsne-umap-onia-notebook.html",
              "height": 600,
              "download": "notebooks/ONIA-Invatare-Nesupervizata-tsne.ipynb",
              "caption": "Fișierul .ipynb poate fi executat în JupyterLab."
            }
          ],
          "exercises": [
            {
              "title": "Perplexity și numărul de observații",
              "description": "Ai 20 de observații. Care alegere respectă condiția strictă a parametrului perplexity?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Compară fiecare număr cu totalul de puncte.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "perplexity=30",
                "perplexity=20",
                "perplexity=10",
                "perplexity=25"
              ],
              "answerIndex": 2,
              "explanation": "Perplexity trebuie să fie strict sub numărul de observații (20); 10 este singura valoare validă."
            },
            {
              "title": "Pondere Gaussiană",
              "description": "Cu σ=1 și distanța pătrată d²=2, calculează greutatea nenormalizată exp(−d²/(2σ²)).",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Înlocuiește simbolurile în exponent.",
              "hintCode": null,
              "solutionCode": "from math import exp\nsigma=1.0\nd2=2.0\nprint(round(exp(-d2/(2*sigma*sigma)),6))\n",
              "solutionText": null,
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Culoarea punctelor",
              "description": "Dacă colorezi un scatter t-SNE după clasele reale, acestea au fost utilizate de algoritm?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Gândește-te la argumentele din fit_transform.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "Da, întotdeauna",
                "Nu, dacă folosești fit_transform(X) fără y",
                "Da, numai dacă perplexity este mare",
                "Da, pentru că metoda e clasificator"
              ],
              "answerIndex": 1,
              "explanation": "TSNE.fit_transform(X) folosește X; etichetele pot fi adăugate ulterior doar pentru interpretarea graficului."
            },
            {
              "title": "Diferența dintre t-SNE și PCA",
              "description": "Care afirmație descrie corect diferența principală?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Compară criteriul de optimizare al celor două metode.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "PCA este liniară, t-SNE urmărește vecinătăți neliniare",
                "PCA necesită etichete, t-SNE nu",
                "t-SNE este un clasificator cu probabilități",
                "PCA nu poate proiecta puncte noi"
              ],
              "answerIndex": 0,
              "explanation": "PCA caută combinații liniare ale caracteristicilor; t-SNE optimizează asemănări între perechi."
            },
            {
              "title": "UMAP n_neighbors",
              "description": "Ce efect are de obicei mărirea n_neighbors?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Parametrul reprezintă amploarea contextului local.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "Schimbă numărul de etichete reale",
                "Acordă mai multă importanță vecinătăților ample",
                "Elimină automat valorile lipsă",
                "Transformă UMAP în K-Means"
              ],
              "answerIndex": 1,
              "explanation": "O vecinătate mai mare poate evidenția structura mai amplă, uneori în detrimentul detaliilor locale."
            },
            {
              "title": "UMAP min_dist",
              "description": "Ce parametru influențează compactitatea vizuală a grupurilor?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Caută parametrul care reglează spațiul dintre punctele proiectate.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "min_dist",
                "n_components din datele originale",
                "max_depth",
                "n_clusters"
              ],
              "answerIndex": 0,
              "explanation": "min_dist controlează cât de apropiate sunt plasate punctele în embedding-ul UMAP."
            },
            {
              "title": "Explorarea embeddingurilor pe seed-uri",
              "description": "Compară două porniri t-SNE cu același set X și random_state diferit. Ce aspecte nu trebuie interpretate automat?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Privește distanțele dintre insule și rotația întregului desen.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": "Nu interpreta automat orientarea, suprafața insulelor și distanțele dintre grupuri ca mărimi intrinseci spațiului original.",
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Înțelegerea unui graf k-NN",
              "description": "Construiește lista celor doi vecini ai fiecărui punct pentru un set de cinci puncte.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "NearestNeighbors include uneori punctul însuși în liste când se interoghează aceleași date.",
              "hintCode": null,
              "solutionCode": "from sklearn.neighbors import NearestNeighbors\nX = [[0,0],[1,0],[0,1],[5,5],[6,5]]\nmodel = NearestNeighbors(n_neighbors=3).fit(X)\ndist, ind = model.kneighbors(X)\nfor i in range(len(X)):\n    print(i, ind[i].tolist(), dist[i].round(2).tolist())\n",
              "solutionText": null,
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Trustworthiness",
              "description": "Ce evaluează în principal metrica trustworthiness?",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Compara vecinătățile inițiale cu cele din spațiul redus.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": null,
              "type": "mcq",
              "options": [
                "Fidelitatea vecinilor în proiecție",
                "Acuratețea unui clasificator",
                "Numărul de clustere reale",
                "Precizia probabilităților t-SNE"
              ],
              "answerIndex": 0,
              "explanation": "Trustworthiness penalizează vecinii noi din embedding care nu erau vecini în spațiul original."
            },
            {
              "title": "Când alegem t-SNE sau UMAP?",
              "description": "Descrie un caz în care folosești PCA ca preprocesare înaintea t-SNE și unul în care UMAP.transform poate fi util.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Gândește-te la multe caracteristici și la observații noi ce trebuie proiectate.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": "La sute sau mii de caracteristici dense, PCA poate reduce zgomotul și costul distanțelor înaintea t-SNE; UMAP.transform este util pentru proiectarea observațiilor noi fără reantrenarea completă în condițiile metodei.",
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            },
            {
              "title": "Vizualizare și clasament public ONIA",
              "description": "Explică de ce grupuri bine separate vizual nu garantează un scor mare de clasificare pe testul final.",
              "level": "Mediu",
              "statementCode": null,
              "hint": "Un scatter 2D nu este o evaluare predictivă; gândește-te la date și selecția hiperparametrilor.",
              "hintCode": null,
              "solutionCode": null,
              "solutionText": "Proiecțiile pot crea sau amplifica separarea aparentă, nu folosesc neapărat o țintă de predicție și nu testează generalizarea pe exemple noi.",
              "type": "open",
              "options": null,
              "answerIndex": 0,
              "explanation": ""
            }
          ]
        },
        {
          "id": "sectiunea-3-4",
          "number": "4.4",
          "title": "Algoritmi de clustering avansați",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        }
      ]
    },
    {
      "id": "nlp",
      "number": "05",
      "icon": "book",
      "color": "mint",
      "title": "Prelucrarea limbajului natural (NLP)",
      "shortTitle": "Prelucrarea limbajului natural (NLP)",
      "description": "Parcurs complet de prelucrare a limbajului natural: texte, corpusuri, reprezentare numerică, căutare, clasificare, grupare, evaluare și aplicații.",
      "label": "Lecții clasice / scikit-learn · PyTorch în lucru",
      "sections": [
        {
          "id": "nlp-fundamente",
          "number": "5.1",
          "title": "Fundamente NLP: probleme, date și fluxul de lucru",
          "stage": "general",
          "summary": "De la limbaj natural la o problemă care poate fi rezolvată cu algoritmi.",
          "objectives": [
            "Ce înseamnă NLP",
            "Cum recunoaștem tipul problemei",
            "Date de antrenare și generalizare",
            "Flux complet de proiect"
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Fundamente NLP: probleme, date și fluxul de lucru",
              "src": "content/nlp-fundamente.html",
              "standalone": "content/nlp-fundamente-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Fundamente NLP: probleme, date și fluxul de lucru",
              "src": "interactive/nlp-fundamente.html",
              "height": 720,
              "caption": "Simulator interactiv autonom. Folosește „Deschide separat” pentru experimentare pe întregul ecran."
            }
          ],
          "exercises": [
            {
              "title": "Identifică sarcina",
              "description": "Pentru „estimarea numărului de stele dintr-o recenzie”, ce tip de problemă este?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Clasificare binară",
                "Regresie",
                "Clustering",
                "Regăsire"
              ],
              "answerIndex": 1,
              "hint": "Identifică ce informație intră și ce rezultat trebuie obținut.",
              "explanation": "Ținta este numerică. Dacă notele sunt tratate drept clase ordonate, poate exista și o formulare de clasificare, dar în enunț estimăm un număr."
            },
            {
              "title": "Explică un concept pe un exemplu",
              "description": "Explică în cuvintele tale diferența dintre „Ce înseamnă NLP” și „Cum recunoaștem tipul problemei”. Oferă un exemplu pentru un corpus cu cel puțin trei documente.",
              "level": "Mediu",
              "type": "open",
              "hint": "Separă datele inițiale, transformarea aplicată și rezultatul.",
              "solutionText": "NLP (Natural Language Processing) este domeniul care construiește metode pentru analizarea și prelucrarea limbajului uman. O propoziție este o secvență de simboluri, dar semnificația ei depinde de context. „Banca este închisă” poate vorbi despre o instituție financiară sau despre o bancă din parc. Un model nu primește direct sensul cuvint"
            },
            {
              "title": "Reproduce și modifică exemplul Python",
              "description": "Rulează exemplul „Exemple de tipuri de probleme”. Modifică una dintre valori și explică diferența rezultatului.",
              "level": "Mediu",
              "type": "open",
              "hint": "Pornește de la intrare și urmărește fiecare instrucțiune.",
              "statementCode": "texte = [\"Câștig la tenis\", \"Reducere 50%\", \"Vreme frumoasă\"]\netichete = [\"sport\", \"reclamă\", \"meteo\"]\nfor text, eticheta in zip(texte, etichete):\n    print(f\"{eticheta:8s} | {text}\")\n",
              "solutionText": "Rezultatul depinde de datele modificate. Verifică explicit ce linie a schimbat rezultatul și de ce.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">texte</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;Câștig la tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;Reducere 50%&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;Vreme frumoasă&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">etichete</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;reclamă&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;meteo&quot;</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">text</span><span class=\"p\">,</span> <span class=\"n\">eticheta</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">texte</span><span class=\"p\">,</span> <span class=\"n\">etichete</span><span class=\"p\">):</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"sa\">f</span><span class=\"s2\">&quot;</span><span class=\"si\">{</span><span class=\"n\">eticheta</span><span class=\"si\">:</span><span class=\"s2\">8s</span><span class=\"si\">}</span><span class=\"s2\"> | </span><span class=\"si\">{</span><span class=\"n\">text</span><span class=\"si\">}</span><span class=\"s2\">&quot;</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Clasifică tipul fiecărei sarcini",
              "description": "Primești: a) document + categorie, b) text fără etichetă, c) pereche întrebare-răspuns cu relevanță. Construiește o funcție care returnează descrierea sarcinii după un cod de intrare.",
              "level": "Mediu",
              "type": "open",
              "hint": "Construiește mai întâi varianta cu date mici și verifică manual un caz de test.",
              "solutionCode": "def tip_sarcina(cod):\n    if cod == \"a\":\n        return \"clasificare supervizată\"\n    if cod == \"b\":\n        return \"clustering nesupervizat\"\n    if cod == \"c\":\n        return \"regăsire / ranking\"\n    raise ValueError(\"Cod necunoscut\")\n\nfor c in \"abc\":\n    print(c, tip_sarcina(c))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">tip_sarcina</span><span class=\"p\">(</span><span class=\"n\">cod</span><span class=\"p\">):</span>\n    <span class=\"k\">if</span> <span class=\"n\">cod</span> <span class=\"o\">==</span> <span class=\"s2\">&quot;a&quot;</span><span class=\"p\">:</span>\n        <span class=\"k\">return</span> <span class=\"s2\">&quot;clasificare supervizată&quot;</span>\n    <span class=\"k\">if</span> <span class=\"n\">cod</span> <span class=\"o\">==</span> <span class=\"s2\">&quot;b&quot;</span><span class=\"p\">:</span>\n        <span class=\"k\">return</span> <span class=\"s2\">&quot;clustering nesupervizat&quot;</span>\n    <span class=\"k\">if</span> <span class=\"n\">cod</span> <span class=\"o\">==</span> <span class=\"s2\">&quot;c&quot;</span><span class=\"p\">:</span>\n        <span class=\"k\">return</span> <span class=\"s2\">&quot;regăsire / ranking&quot;</span>\n    <span class=\"k\">raise</span> <span class=\"ne\">ValueError</span><span class=\"p\">(</span><span class=\"s2\">&quot;Cod necunoscut&quot;</span><span class=\"p\">)</span>\n\n<span class=\"k\">for</span> <span class=\"n\">c</span> <span class=\"ow\">in</span> <span class=\"s2\">&quot;abc&quot;</span><span class=\"p\">:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">c</span><span class=\"p\">,</span> <span class=\"n\">tip_sarcina</span><span class=\"p\">(</span><span class=\"n\">c</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Analiză și alegere experimentală",
              "description": "Compară două sarcini NLP care folosesc același corpus, dar urmăresc răspunsuri diferite. Explică de ce nu pot fi evaluate cu aceeași metrică.",
              "level": "Dificil",
              "type": "open",
              "hint": "Formulează ipoteza, menține aceeași validare și compară o singură schimbare la un moment dat.",
              "solutionText": "Propunerea corectă trebuie să precizeze seturile de date, transformările învățate exclusiv din train, metrica potrivită și modul în care comparația evită data leakage și overfittingul față de scorul public."
            }
          ]
        },
        {
          "id": "nlp-corpus",
          "number": "5.2",
          "title": "Încărcarea și explorarea corpusurilor",
          "stage": "general",
          "summary": "Lecție aprofundată despre citirea corpusurilor TXT/CSV/JSONL, Pandas, curățare, explorare vizuală, validare și export pentru concurs.",
          "objectives": [
            "Citirea corectă a fișierelor TXT, CSV, JSON și JSONL",
            "Verificarea schemei, ID-urilor, datelor lipsă și a duplicatelor",
            "Calculul statisticilor textuale și reprezentarea lor grafică",
            "Separarea corectă train/validation și controlul data leakage",
            "Generarea corectă a predicțiilor în format de competiție"
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs extins — Încărcarea și explorarea corpusurilor",
              "src": "content/nlp-corpus.html",
              "standalone": "content/nlp-corpus-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Analiza unui corpus",
              "src": "interactive/nlp-corpus.html",
              "height": 860,
              "caption": "Introduci documente și etichete, modifici regulile și vezi rezultatele calculate local."
            },
            {
              "type": "prose",
              "title": "Notebook și seturi de date pentru exersare",
              "html": "<div class=\"onia-nlp nlp-call\"><h2>Materiale descărcabile</h2><p>Notebook cu exemple complete, plus fișiere demonstrative TXT, CSV și JSONL.</p><a href=\"notebooks/ONIA-NLP-Corpus-Explorare.ipynb\" download>Descarcă notebookul Jupyter (.ipynb)</a> · <a href=\"datasets/nlp-corpus-train.csv\" download>Descarcă corpusul CSV</a></div>"
            }
          ],
          "exercises": [
            {
              "title": "Documente valide și linii goale",
              "type": "mcq",
              "level": "Ușor",
              "description": "Un fișier TXT conține 12 linii, dintre care 3 sunt complet goale. Dacă fiecare linie nevidă reprezintă un document, câte documente valide avem?",
              "options": [
                "12",
                "9",
                "3",
                "15"
              ],
              "answerIndex": 1,
              "hint": "Numărăm doar liniile cu conținut.",
              "explanation": "12 - 3 = 9 documente valide. Liniile goale se numără separat."
            },
            {
              "title": "Când nu folosim split(\",\") pe CSV?",
              "type": "mcq",
              "level": "Ușor",
              "description": "Avem un câmp CSV între ghilimele: \"Salut, Ana!\". Care este motivul pentru care nu este corectă separarea cu split(\",\")?",
              "options": [
                "Este prea lentă",
                "Câmpul poate conține virgule",
                "Nu poate citi UTF-8",
                "Elimină spațiile"
              ],
              "answerIndex": 1,
              "hint": "Câmpurile citate pot conține separatorul ca text.",
              "explanation": "Un parser CSV tratează separatorul din interiorul ghilimelelor ca parte a câmpului."
            },
            {
              "title": "Detectarea unui document gol",
              "type": "open",
              "level": "Ușor",
              "description": "Scrie un program care numără documentele goale, inclusiv cele care conțin numai spații.",
              "hint": "Folosește strip() pentru a verifica existența unui conținut.",
              "solutionCode": "texte = [\" Salut \", \"\", \"   \", \"Python\"]\ngoale = sum(not text.strip() for text in texte)\nprint(goale)  # 2\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">texte</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot; Salut &quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;   &quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;Python&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">goale</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"ow\">not</span> <span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">strip</span><span class=\"p\">()</span> <span class=\"k\">for</span> <span class=\"n\">text</span> <span class=\"ow\">in</span> <span class=\"n\">texte</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">goale</span><span class=\"p\">)</span>  <span class=\"c1\"># 2</span>\n</pre></div>\n"
            },
            {
              "title": "Frecvență totală versus DF",
              "type": "mcq",
              "level": "Mediu",
              "description": "Corpus: „python python cod”, „python date”, „sport”. Care este DF pentru „python”?",
              "options": [
                "1",
                "2",
                "3",
                "4"
              ],
              "answerIndex": 1,
              "hint": "DF numără documente, nu apariții.",
              "explanation": "„python” apare în primele două documente: DF=2, deși TF=3."
            },
            {
              "title": "Numărare manuală a termenilor",
              "type": "open",
              "level": "Mediu",
              "description": "Construiește un vocabular și numără aparițiile fiecărui cuvânt într-un corpus de trei propoziții.",
              "hint": "Folosește Counter și split() pentru un baseline.",
              "solutionCode": "from collections import Counter\ndocs = [\"python date\", \"date python\", \"sport date\"]\nfrecvente = Counter()\nfor text in docs:\n    frecvente.update(text.split())\nprint(dict(frecvente))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">collections</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Counter</span>\n<span class=\"n\">docs</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;python date&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;date python&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport date&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">frecvente</span> <span class=\"o\">=</span> <span class=\"n\">Counter</span><span class=\"p\">()</span>\n<span class=\"k\">for</span> <span class=\"n\">text</span> <span class=\"ow\">in</span> <span class=\"n\">docs</span><span class=\"p\">:</span>\n    <span class=\"n\">frecvente</span><span class=\"o\">.</span><span class=\"n\">update</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">())</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">dict</span><span class=\"p\">(</span><span class=\"n\">frecvente</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "ID-uri cu zerouri inițiale",
              "type": "mcq",
              "level": "Ușor",
              "description": "Fișierul conține ID-ul 00125. Cum îl păstrezi fără pierderi la citirea Pandas?",
              "options": [
                "dtype={\"id\": \"string\"}",
                "dtype={\"id\": \"int\"}",
                "df.id.astype(float)",
                "Înlocuiești cu numărul 125"
              ],
              "answerIndex": 0,
              "hint": "ID-ul nu este o mărime numerică.",
              "explanation": "Tipul string păstrează reprezentarea textuală și zerourile inițiale."
            },
            {
              "title": "Curățare selectivă și etichete contradictorii",
              "type": "open",
              "level": "Dificil",
              "description": "Un corpus conține același text cu etichetele „sport” și „tehnologie”. Identifică textele contradictorii înainte de deduplicare.",
              "hint": "Grupează după textul normalizat și numără etichetele distincte.",
              "solutionCode": "import pandas as pd\ndf = pd.DataFrame({\"text\": [\"Meci tenis\", \"meci  tenis\", \"Cod Python\"], \"y\": [\"sport\", \"tech\", \"tech\"]})\ndf[\"cheie\"] = df.text.str.casefold().str.split().str.join(\" \")\nconflicte = df.groupby(\"cheie\")[\"y\"].nunique()\nprint(conflicte[conflicte > 1])\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span><span class=\"s2\">&quot;text&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;Meci tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;meci  tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;Cod Python&quot;</span><span class=\"p\">],</span> <span class=\"s2\">&quot;y&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tech&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tech&quot;</span><span class=\"p\">]})</span>\n<span class=\"n\">df</span><span class=\"p\">[</span><span class=\"s2\">&quot;cheie&quot;</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"n\">df</span><span class=\"o\">.</span><span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">str</span><span class=\"o\">.</span><span class=\"n\">casefold</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">str</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">str</span><span class=\"o\">.</span><span class=\"n\">join</span><span class=\"p\">(</span><span class=\"s2\">&quot; &quot;</span><span class=\"p\">)</span>\n<span class=\"n\">conflicte</span> <span class=\"o\">=</span> <span class=\"n\">df</span><span class=\"o\">.</span><span class=\"n\">groupby</span><span class=\"p\">(</span><span class=\"s2\">&quot;cheie&quot;</span><span class=\"p\">)[</span><span class=\"s2\">&quot;y&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">nunique</span><span class=\"p\">()</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">conflicte</span><span class=\"p\">[</span><span class=\"n\">conflicte</span> <span class=\"o\">&gt;</span> <span class=\"mi\">1</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "Distribuția claselor și accuracy",
              "type": "mcq",
              "level": "Mediu",
              "description": "Într-un corpus 95% dintre texte au eticheta „legitim”. Un model prezice mereu „legitim”. Ce concluzie este corectă?",
              "options": [
                "Este sigur un model bun",
                "Accuracy 95% nu garantează detectarea spamului",
                "Recall pentru spam este 95%",
                "Modelul are sigur F1=0.95"
              ],
              "answerIndex": 1,
              "hint": "Calculează recall pentru clasa rară.",
              "explanation": "Modelul nu detectează niciun spam, deși accuracy este 95%."
            },
            {
              "title": "Explorare pe clase",
              "type": "open",
              "level": "Mediu",
              "description": "Calculează cu Pandas lungimea medie și mediana în cuvinte pentru fiecare etichetă.",
              "hint": "folosește str.split().str.len() și groupby().agg().",
              "solutionCode": "import pandas as pd\ndf = pd.DataFrame({\"text\": [\"un doi\", \"trei patru cinci\", \"a b c\"], \"y\": [\"A\", \"A\", \"B\"]})\ndf[\"lungime\"] = df.text.str.split().str.len()\nprint(df.groupby(\"y\")[\"lungime\"].agg([\"mean\", \"median\"]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span><span class=\"s2\">&quot;text&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;un doi&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;trei patru cinci&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;a b c&quot;</span><span class=\"p\">],</span> <span class=\"s2\">&quot;y&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;A&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;A&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;B&quot;</span><span class=\"p\">]})</span>\n<span class=\"n\">df</span><span class=\"p\">[</span><span class=\"s2\">&quot;lungime&quot;</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"n\">df</span><span class=\"o\">.</span><span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">str</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">str</span><span class=\"o\">.</span><span class=\"n\">len</span><span class=\"p\">()</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">df</span><span class=\"o\">.</span><span class=\"n\">groupby</span><span class=\"p\">(</span><span class=\"s2\">&quot;y&quot;</span><span class=\"p\">)[</span><span class=\"s2\">&quot;lungime&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">agg</span><span class=\"p\">([</span><span class=\"s2\">&quot;mean&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;median&quot;</span><span class=\"p\">]))</span>\n</pre></div>\n"
            },
            {
              "title": "Păstrează grupurile separate",
              "type": "mcq",
              "level": "Mediu",
              "description": "Mai multe recenzii provin de la același utilizator. Ce împărțire este mai potrivită pentru a evalua generalizarea la utilizatori noi?",
              "options": [
                "Split aleator pe rânduri",
                "GroupShuffleSplit după utilizator",
                "Antrenare și validare pe același set",
                "Fără set de validare"
              ],
              "answerIndex": 1,
              "hint": "Un utilizator nu trebuie să apară simultan în ambele subseturi.",
              "explanation": "Împărțirea pe grupuri evită suprapunerea identităților între train și validare."
            },
            {
              "title": "Identifică data leakage",
              "type": "mcq",
              "level": "Dificil",
              "description": "Un elev execută fit_transform() pentru TfidfVectorizer pe toate textele și abia apoi împarte datele în train/validation. Ce problemă apare?",
              "options": [
                "Nu este nicio problemă",
                "Vocabularul și IDF pot încorpora informații din validare",
                "Se modifică doar viteza",
                "Se elimină automat duplicatele"
              ],
              "answerIndex": 1,
              "hint": "Pe ce date a fost învățat vocabularul?",
              "explanation": "Vectorizarea trebuie învățată pe train, ideal în Pipeline."
            },
            {
              "title": "Predicții păstrând ID-urile",
              "type": "open",
              "level": "Dificil",
              "description": "Construiește un fișier CSV cu coloanele id și eticheta păstrând exact ordinea testului.",
              "hint": "Construiește DataFrame din aceeași serie de ID-uri; verifică dimensiunile.",
              "solutionCode": "import pandas as pd\ntest = pd.DataFrame({\"id\": [\"001\", \"003\"]})\npred = [\"sport\", \"tech\"]\nassert len(pred) == len(test)\nrez = pd.DataFrame({\"id\": test[\"id\"], \"eticheta\": pred})\nassert rez[\"id\"].tolist() == test[\"id\"].tolist()\nprint(rez.to_csv(index=False))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"n\">test</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span><span class=\"s2\">&quot;id&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;001&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;003&quot;</span><span class=\"p\">]})</span>\n<span class=\"n\">pred</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tech&quot;</span><span class=\"p\">]</span>\n<span class=\"k\">assert</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">pred</span><span class=\"p\">)</span> <span class=\"o\">==</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">test</span><span class=\"p\">)</span>\n<span class=\"n\">rez</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span><span class=\"s2\">&quot;id&quot;</span><span class=\"p\">:</span> <span class=\"n\">test</span><span class=\"p\">[</span><span class=\"s2\">&quot;id&quot;</span><span class=\"p\">],</span> <span class=\"s2\">&quot;eticheta&quot;</span><span class=\"p\">:</span> <span class=\"n\">pred</span><span class=\"p\">})</span>\n<span class=\"k\">assert</span> <span class=\"n\">rez</span><span class=\"p\">[</span><span class=\"s2\">&quot;id&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">tolist</span><span class=\"p\">()</span> <span class=\"o\">==</span> <span class=\"n\">test</span><span class=\"p\">[</span><span class=\"s2\">&quot;id&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">tolist</span><span class=\"p\">()</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">rez</span><span class=\"o\">.</span><span class=\"n\">to_csv</span><span class=\"p\">(</span><span class=\"n\">index</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">))</span>\n</pre></div>\n"
            }
          ]
        },
        {
          "id": "nlp-normalizare",
          "number": "5.3",
          "title": "Curățarea și normalizarea textului",
          "stage": "general",
          "summary": "Diacritice, Unicode, URL-uri, numere, emoji și prelucrare fără pierderi inutile.",
          "objectives": [
            "Normalizare înseamnă o decizie, nu un reflex",
            "Regex și marcaje",
            "Transformări înlănțuite și verificabile"
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Curățarea și normalizarea textului",
              "src": "content/nlp-normalizare.html",
              "standalone": "content/nlp-normalizare-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Curățarea și normalizarea textului",
              "src": "interactive/nlp-normalizare.html",
              "height": 720,
              "caption": "Simulator interactiv autonom. Folosește „Deschide separat” pentru experimentare pe întregul ecran."
            }
          ],
          "exercises": [
            {
              "title": "Negația schimbă sensul",
              "description": "Ce operație poate pierde semnificația din „nu este bun”?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Înlocuirea spațiilor multiple",
                "Ștergerea automată a lui „nu”",
                "Normalizarea Unicode NFC",
                "Păstrarea diacriticelor"
              ],
              "answerIndex": 1,
              "hint": "Identifică ce informație intră și ce rezultat trebuie obținut.",
              "explanation": "Eliminarea negației face dificilă diferențierea sensului pozitiv de cel negativ."
            },
            {
              "title": "Explică un concept pe un exemplu",
              "description": "Explică în cuvintele tale diferența dintre „Normalizare înseamnă o decizie, nu un reflex” și „Regex și marcaje”. Oferă un exemplu pentru un corpus cu cel puțin trei documente.",
              "level": "Mediu",
              "type": "open",
              "hint": "Separă datele inițiale, transformarea aplicată și rezultatul.",
              "solutionText": "`lower()` micșorează literele; `casefold()` este mai agresiv, util pentru comparații fără sensibilitate la majuscule. `unicodedata.normalize(\"NFC\", text)` uniformizează unele reprezentări Unicode fără a elimina diacriticele. Eliminarea acestora poate ajuta pentru texte scrise inconsistent, dar poate și pierde distincții și context."
            },
            {
              "title": "Reproduce și modifică exemplul Python",
              "description": "Rulează exemplul „Pipeline minimal de normalizare”. Modifică una dintre valori și explică diferența rezultatului.",
              "level": "Mediu",
              "type": "open",
              "hint": "Pornește de la intrare și urmărește fiecare instrucțiune.",
              "statementCode": "import re\nimport unicodedata\n\ndef normalizeaza(text):\n    text = unicodedata.normalize(\"NFC\", text)\n    text = re.sub(r\"https?://\\S+\", \" URL \", text)\n    text = re.sub(r\"\\s+\", \" \", text).strip()\n    return text.casefold()\n\nprint(normalizeaza(\"  Bună!  https://exemplu.ro  \"))\n",
              "solutionText": "Rezultatul depinde de datele modificate. Verifică explicit ce linie a schimbat rezultatul și de ce.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">re</span>\n<span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">unicodedata</span>\n\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">normalizeaza</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"p\">):</span>\n    <span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"n\">unicodedata</span><span class=\"o\">.</span><span class=\"n\">normalize</span><span class=\"p\">(</span><span class=\"s2\">&quot;NFC&quot;</span><span class=\"p\">,</span> <span class=\"n\">text</span><span class=\"p\">)</span>\n    <span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"n\">re</span><span class=\"o\">.</span><span class=\"n\">sub</span><span class=\"p\">(</span><span class=\"sa\">r</span><span class=\"s2\">&quot;https?://\\S+&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot; URL &quot;</span><span class=\"p\">,</span> <span class=\"n\">text</span><span class=\"p\">)</span>\n    <span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"n\">re</span><span class=\"o\">.</span><span class=\"n\">sub</span><span class=\"p\">(</span><span class=\"sa\">r</span><span class=\"s2\">&quot;\\s+&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot; &quot;</span><span class=\"p\">,</span> <span class=\"n\">text</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">strip</span><span class=\"p\">()</span>\n    <span class=\"k\">return</span> <span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">casefold</span><span class=\"p\">()</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">normalizeaza</span><span class=\"p\">(</span><span class=\"s2\">&quot;  Bună!  https://exemplu.ro  &quot;</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Protejarea tiparelor URL",
              "description": "Construiește o funcție care substituie URL-uri cu marcajul URL și reduce spațiile multiple la unul singur.",
              "level": "Mediu",
              "type": "open",
              "hint": "Construiește mai întâi varianta cu date mici și verifică manual un caz de test.",
              "solutionCode": "import re\ndef curata(text):\n    text = re.sub(r\"https?://\\S+\", \" URL \", text)\n    return \" \".join(text.split())\n\nprint(curata(\"Acces: https://exemplu.ro  azi\"))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">re</span>\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">curata</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"p\">):</span>\n    <span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"n\">re</span><span class=\"o\">.</span><span class=\"n\">sub</span><span class=\"p\">(</span><span class=\"sa\">r</span><span class=\"s2\">&quot;https?://\\S+&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot; URL &quot;</span><span class=\"p\">,</span> <span class=\"n\">text</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"s2\">&quot; &quot;</span><span class=\"o\">.</span><span class=\"n\">join</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">())</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">curata</span><span class=\"p\">(</span><span class=\"s2\">&quot;Acces: https://exemplu.ro  azi&quot;</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Analiză și alegere experimentală",
              "description": "Într-o problemă de analiză a sentimentelor, compară eliminarea punctuației cu păstrarea emoji-urilor și a negațiilor. Cum măsori efectul?",
              "level": "Dificil",
              "type": "open",
              "hint": "Formulează ipoteza, menține aceeași validare și compară o singură schimbare la un moment dat.",
              "solutionText": "Propunerea corectă trebuie să precizeze seturile de date, transformările învățate exclusiv din train, metrica potrivită și modul în care comparația evită data leakage și overfittingul față de scorul public."
            }
          ]
        },
        {
          "id": "nlp-tokenizare",
          "number": "5.4",
          "title": "Segmentarea textului și tokenizarea",
          "stage": "general",
          "summary": "Tokeni, propoziții, expresii regulate, n-grame și particularități lingvistice.",
          "objectives": [
            "De ce `split()` nu este suficient",
            "Cuvinte, caractere, subcuvinte",
            "Tokenizerul inclus în scikit-learn",
            "NLTK, spaCy și Stanza"
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Segmentarea textului și tokenizarea",
              "src": "content/nlp-tokenizare.html",
              "standalone": "content/nlp-tokenizare-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Segmentarea textului și tokenizarea",
              "src": "interactive/nlp-tokenizare.html",
              "height": 720,
              "caption": "Simulator interactiv autonom. Folosește „Deschide separat” pentru experimentare pe întregul ecran."
            }
          ],
          "exercises": [
            {
              "title": "Tokeni foarte scurți",
              "description": "În CountVectorizer implicit, ce se întâmplă cu tokenul „a” de o literă?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Este păstrat mereu",
                "Devine o cifră",
                "Este ignorat de token_pattern implicit",
                "Devine bigramă"
              ],
              "answerIndex": 2,
              "hint": "Identifică ce informație intră și ce rezultat trebuie obținut.",
              "explanation": "Modelul implicit acceptă cuvinte cu cel puțin două caractere."
            },
            {
              "title": "Explică un concept pe un exemplu",
              "description": "Explică în cuvintele tale diferența dintre „De ce `split()` nu este suficient” și „Cuvinte, caractere, subcuvinte”. Oferă un exemplu pentru un corpus cu cel puțin trei documente.",
              "level": "Mediu",
              "type": "open",
              "hint": "Separă datele inițiale, transformarea aplicată și rezultatul.",
              "solutionText": "`split()` separă pe spații, dar `\"mare!\"` și `\"mare\"` devin tokeni diferiți. Uneori vrem punctuația ca token distinct; alteori o ignorăm. `re.findall(r\"\\w+\", text)` poate fi un punct de pornire, dar nu rezolvă complet abrevieri, emoticoane ori despărțirea propozițiilor."
            },
            {
              "title": "Reproduce și modifică exemplul Python",
              "description": "Rulează exemplul „Tokenizare cu regex”. Modifică una dintre valori și explică diferența rezultatului.",
              "level": "Mediu",
              "type": "open",
              "hint": "Pornește de la intrare și urmărește fiecare instrucțiune.",
              "statementCode": "import re\ntext = \"Bună, Ana! Ai 2 mesaje.\"\nprint(text.split())\nprint(re.findall(r\"\\w+|[^\\w\\s]\", text, flags=re.UNICODE))\n",
              "solutionText": "Rezultatul depinde de datele modificate. Verifică explicit ce linie a schimbat rezultatul și de ce.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">re</span>\n<span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"s2\">&quot;Bună, Ana! Ai 2 mesaje.&quot;</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">())</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">re</span><span class=\"o\">.</span><span class=\"n\">findall</span><span class=\"p\">(</span><span class=\"sa\">r</span><span class=\"s2\">&quot;\\w+|[^\\w\\s]&quot;</span><span class=\"p\">,</span> <span class=\"n\">text</span><span class=\"p\">,</span> <span class=\"n\">flags</span><span class=\"o\">=</span><span class=\"n\">re</span><span class=\"o\">.</span><span class=\"n\">UNICODE</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Bigrame fără biblioteci",
              "description": "Scrie o funcție care construiește toate bigramele unui text, păstrând ordinea tokenilor.",
              "level": "Mediu",
              "type": "open",
              "hint": "Construiește mai întâi varianta cu date mici și verifică manual un caz de test.",
              "solutionCode": "def bigrame(text):\n    t = text.casefold().split()\n    return [(t[i], t[i + 1]) for i in range(len(t) - 1)]\n\nprint(bigrame(\"nu este deloc simplu\"))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">bigrame</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"p\">):</span>\n    <span class=\"n\">t</span> <span class=\"o\">=</span> <span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">casefold</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()</span>\n    <span class=\"k\">return</span> <span class=\"p\">[(</span><span class=\"n\">t</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">],</span> <span class=\"n\">t</span><span class=\"p\">[</span><span class=\"n\">i</span> <span class=\"o\">+</span> <span class=\"mi\">1</span><span class=\"p\">])</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">t</span><span class=\"p\">)</span> <span class=\"o\">-</span> <span class=\"mi\">1</span><span class=\"p\">)]</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">bigrame</span><span class=\"p\">(</span><span class=\"s2\">&quot;nu este deloc simplu&quot;</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Analiză și alegere experimentală",
              "description": "Compară reprezentarea cu unigrame, bigrame și n-grame de caractere pentru texte cu greșeli de scriere. Ce compromisuri apar?",
              "level": "Dificil",
              "type": "open",
              "hint": "Formulează ipoteza, menține aceeași validare și compară o singură schimbare la un moment dat.",
              "solutionText": "Propunerea corectă trebuie să precizeze seturile de date, transformările învățate exclusiv din train, metrica potrivită și modul în care comparația evită data leakage și overfittingul față de scorul public."
            }
          ]
        },
        {
          "id": "nlp-morfologie",
          "number": "5.5",
          "title": "Stopwords, stemming și lematizare",
          "stage": "general",
          "summary": "Stopwords, document frequency, stemming Snowball pentru română, lematizare spaCy/Stanza, integrare TF-IDF și evaluare experimentală.",
          "objectives": [
            "Să compari rolul cuvintelor frecvente cu impactul negațiilor asupra clasificării.",
            "Să aplici SnowballStemmer(\"romanian\") și să înțelegi diferența dintre stemming și lematizare.",
            "Să extragi lemele folosind modelele spaCy sau Stanza pentru limba română.",
            "Să integrezi transformările în TfidfVectorizer fără scurgeri de informație.",
            "Să alegi preprocesarea prin experimente reproductibile și analiza erorilor."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Stopwords, stemming și lematizare",
              "src": "content/nlp-morfologie.html",
              "standalone": "content/nlp-morfologie-standalone.html"
            },
            {
              "type": "html",
              "title": "Notebook practic — Stopwords, stemming și lematizare",
              "src": "content/nlp-morfologie-notebook.html",
              "height": 690,
              "download": "notebooks/ONIA-NLP-Stopwords-Stemming-Lematizare.ipynb",
              "caption": "Notebook cu exemple independente, explicații și cod pentru NLTK, spaCy, Stanza și scikit-learn; instalarea modelelor lingvistice se face separat."
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Stopwords, stemming și lematizare",
              "src": "interactive/nlp-morfologie.html",
              "height": 820,
              "caption": "Laborator cu patru moduri: stopwords și negații, comparație lexicală, document frequency și alegerea configurației; afișare pas cu pas, cu limitele simulării declarate."
            }
          ],
          "exercises": [
            {
              "title": "Stopwords și negație",
              "type": "mcq",
              "level": "Ușor",
              "description": "Care dintre aceste operații este cel mai periculoasă la clasificarea sentimentului?",
              "options": [
                "Eliminarea spațiilor repetate",
                "Eliminarea automată a lui „nu”",
                "Conversia în Unicode NFC",
                "Păstrarea bigramelor"
              ],
              "answerIndex": 1,
              "explanation": "Negația poate inversa sentimentul; eliminarea ei poate face texte opuse indistincte.",
              "hint": "Gândește-te la perechea „este bun” și „nu este bun”."
            },
            {
              "title": "Ce măsoară max_df?",
              "type": "mcq",
              "level": "Ușor",
              "description": "La TfidfVectorizer(max_df=0.8), ce reprezintă 0.8?",
              "options": [
                "Cel mult 80% din caracterele unui document",
                "Cel mult 80% din documentele de train pot conține termenul",
                "Maximum 80 de termeni în vocabular",
                "Probabilitatea minimă de clasificare"
              ],
              "answerIndex": 1,
              "explanation": "max_df privește document frequency, nu numărul total al aparițiilor.",
              "hint": "Câte documente distincte conțin termenul?"
            },
            {
              "title": "Stemming versus lematizare",
              "type": "mcq",
              "level": "Ușor",
              "description": "Care afirmație este corectă?",
              "options": [
                "Stemmingul returnează întotdeauna forma de dicționar",
                "Lematizarea nu depinde niciodată de context",
                "Stemmingul poate produce radicali care nu sunt cuvinte valide",
                "SnowballStemmer nu poate funcționa pentru română"
              ],
              "answerIndex": 2,
              "explanation": "NLTK SnowballStemmer acceptă limba română, iar stemmingul nu garantează forme lexicale corecte.",
              "hint": "Stemmingul este de regulă bazat pe reguli de reducere."
            },
            {
              "title": "De ce un model spaCy gol nu este suficient?",
              "type": "mcq",
              "level": "Mediu",
              "description": "De ce spacy.blank(\"ro\") nu este echivalent cu spacy.load(\"ro_core_news_sm\")?",
              "options": [
                "Blank instalează automat Stanza",
                "Blank conține doar componentele de bază, nu un pipeline antrenat complet",
                "Blank calculează perfect toate lemele",
                "Cele două sunt întotdeauna identice"
              ],
              "answerIndex": 1,
              "explanation": "Modelul ro_core_news_sm include componente preantrenate de POS și lematizare.",
              "hint": "Ce componente are pipeline-ul?"
            },
            {
              "title": "Identificarea termenilor periculoși",
              "type": "open",
              "level": "Ușor",
              "description": "Pentru mesajele „Recomand produsul” și „Nu recomand produsul”, argumentează de ce o listă de stopwords care conține „nu” este greșită. Propune o listă mai potrivită.",
              "hint": "Compară textele după filtrare.",
              "solutionText": "Dacă eliminăm „nu”, cele două mesaje au aceleași tokenuri; pentru sentiment trebuie păstrată negația. Putem elimina termeni puțin informativi, dar numai după validare."
            },
            {
              "title": "Stopwords cu protejarea negațiilor",
              "type": "open",
              "level": "Mediu",
              "description": "Scrie o funcție filtreaza(text, stopwords) care elimină termenii din stopwords, dar păstrează nu, nici și fără. Testează funcția pe două propoziții.",
              "hint": "Folosește casefold, o mulțime și o list comprehension.",
              "solutionCode": "def filtreaza(text, stopwords):\n    negatii = {\"nu\", \"nici\", \"fără\"}\n    tokeni = text.casefold().split()\n    return [t for t in tokeni if t not in stopwords or t in negatii]\n\nstop = {\"un\", \"o\", \"este\", \"și\", \"nu\"}\nprint(filtreaza(\"Nu este un produs bun\", stop))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">filtreaza</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"p\">,</span> <span class=\"n\">stopwords</span><span class=\"p\">):</span>\n    <span class=\"n\">negatii</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"s2\">&quot;nu&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;nici&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;fără&quot;</span><span class=\"p\">}</span>\n    <span class=\"n\">tokeni</span> <span class=\"o\">=</span> <span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">casefold</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()</span>\n    <span class=\"k\">return</span> <span class=\"p\">[</span><span class=\"n\">t</span> <span class=\"k\">for</span> <span class=\"n\">t</span> <span class=\"ow\">in</span> <span class=\"n\">tokeni</span> <span class=\"k\">if</span> <span class=\"n\">t</span> <span class=\"ow\">not</span> <span class=\"ow\">in</span> <span class=\"n\">stopwords</span> <span class=\"ow\">or</span> <span class=\"n\">t</span> <span class=\"ow\">in</span> <span class=\"n\">negatii</span><span class=\"p\">]</span>\n\n<span class=\"n\">stop</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"s2\">&quot;un&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;o&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;este&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;și&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;nu&quot;</span><span class=\"p\">}</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">filtreaza</span><span class=\"p\">(</span><span class=\"s2\">&quot;Nu este un produs bun&quot;</span><span class=\"p\">,</span> <span class=\"n\">stop</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "TF și DF pe un corpus",
              "type": "open",
              "level": "Mediu",
              "description": "Pentru trei documente, calculează TF total și DF pentru fiecare termen. Explică de ce valorile diferă.",
              "hint": "Counter pentru TF; câte un set pentru fiecare document la DF.",
              "solutionCode": "from collections import Counter\ncorpus = [\"sport sport tenis\", \"sport fotbal\", \"tenis meci\"]\ntf = Counter()\ndf = Counter()\nfor doc in corpus:\n    cuvinte = doc.split()\n    tf.update(cuvinte)\n    df.update(set(cuvinte))\nfor termen in sorted(tf):\n    print(termen, \"TF=\", tf[termen], \"DF=\", df[termen])\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">collections</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Counter</span>\n<span class=\"n\">corpus</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;sport sport tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport fotbal&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tenis meci&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">tf</span> <span class=\"o\">=</span> <span class=\"n\">Counter</span><span class=\"p\">()</span>\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">Counter</span><span class=\"p\">()</span>\n<span class=\"k\">for</span> <span class=\"n\">doc</span> <span class=\"ow\">in</span> <span class=\"n\">corpus</span><span class=\"p\">:</span>\n    <span class=\"n\">cuvinte</span> <span class=\"o\">=</span> <span class=\"n\">doc</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()</span>\n    <span class=\"n\">tf</span><span class=\"o\">.</span><span class=\"n\">update</span><span class=\"p\">(</span><span class=\"n\">cuvinte</span><span class=\"p\">)</span>\n    <span class=\"n\">df</span><span class=\"o\">.</span><span class=\"n\">update</span><span class=\"p\">(</span><span class=\"nb\">set</span><span class=\"p\">(</span><span class=\"n\">cuvinte</span><span class=\"p\">))</span>\n<span class=\"k\">for</span> <span class=\"n\">termen</span> <span class=\"ow\">in</span> <span class=\"nb\">sorted</span><span class=\"p\">(</span><span class=\"n\">tf</span><span class=\"p\">):</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">termen</span><span class=\"p\">,</span> <span class=\"s2\">&quot;TF=&quot;</span><span class=\"p\">,</span> <span class=\"n\">tf</span><span class=\"p\">[</span><span class=\"n\">termen</span><span class=\"p\">],</span> <span class=\"s2\">&quot;DF=&quot;</span><span class=\"p\">,</span> <span class=\"n\">df</span><span class=\"p\">[</span><span class=\"n\">termen</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "SnowballStemmer în română",
              "type": "open",
              "level": "Mediu",
              "description": "Aplică SnowballStemmer(\"romanian\") pentru cuvintele copilului, copiii, cărților și cărțile. Explică ce rezultat înseamnă stemming și de ce nu este obligatoriu să fie o lemă.",
              "hint": "Importă SnowballStemmer din nltk.stem.snowball.",
              "solutionCode": "from nltk.stem.snowball import SnowballStemmer\ns = SnowballStemmer(\"romanian\")\nfor cuvant in [\"copilului\", \"copiii\", \"cărților\", \"cărțile\"]:\n    print(cuvant, \"->\", s.stem(cuvant))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">nltk.stem.snowball</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">SnowballStemmer</span>\n<span class=\"n\">s</span> <span class=\"o\">=</span> <span class=\"n\">SnowballStemmer</span><span class=\"p\">(</span><span class=\"s2\">&quot;romanian&quot;</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">cuvant</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"s2\">&quot;copilului&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;copiii&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;cărților&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;cărțile&quot;</span><span class=\"p\">]:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">cuvant</span><span class=\"p\">,</span> <span class=\"s2\">&quot;-&gt;&quot;</span><span class=\"p\">,</span> <span class=\"n\">s</span><span class=\"o\">.</span><span class=\"n\">stem</span><span class=\"p\">(</span><span class=\"n\">cuvant</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Lematizarea în română cu spaCy",
              "type": "open",
              "level": "Mediu",
              "description": "Folosind ro_core_news_sm, afișează tokenii împreună cu lema și categoria gramaticală. Ignoră semnele de punctuație.",
              "hint": "token.lemma_, token.pos_ și token.is_punct.",
              "solutionCode": "import spacy\nnlp = spacy.load(\"ro_core_news_sm\")\ndoc = nlp(\"Elevii citeau cărți interesante.\")\nfor tok in doc:\n    if not tok.is_punct:\n        print(tok.text, tok.lemma_, tok.pos_)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">spacy</span>\n<span class=\"n\">nlp</span> <span class=\"o\">=</span> <span class=\"n\">spacy</span><span class=\"o\">.</span><span class=\"n\">load</span><span class=\"p\">(</span><span class=\"s2\">&quot;ro_core_news_sm&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">doc</span> <span class=\"o\">=</span> <span class=\"n\">nlp</span><span class=\"p\">(</span><span class=\"s2\">&quot;Elevii citeau cărți interesante.&quot;</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">tok</span> <span class=\"ow\">in</span> <span class=\"n\">doc</span><span class=\"p\">:</span>\n    <span class=\"k\">if</span> <span class=\"ow\">not</span> <span class=\"n\">tok</span><span class=\"o\">.</span><span class=\"n\">is_punct</span><span class=\"p\">:</span>\n        <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">tok</span><span class=\"o\">.</span><span class=\"n\">text</span><span class=\"p\">,</span> <span class=\"n\">tok</span><span class=\"o\">.</span><span class=\"n\">lemma_</span><span class=\"p\">,</span> <span class=\"n\">tok</span><span class=\"o\">.</span><span class=\"n\">pos_</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Analyzer versus tokenizer personalizat",
              "type": "mcq",
              "level": "Dificil",
              "description": "Ai dat o funcție personalizată în analyzer=functie pentru TfidfVectorizer. Ce se întâmplă cu ngram_range=(1,2)?",
              "options": [
                "Se aplică invariabil și construiește bigrame din lista funcției",
                "Analyzer-ul personalizat furnizează direct caracteristicile; ngram_range nu mai este aplicat implicit",
                "Este transformat automat într-un tokenizer",
                "Se șterg toate stopwords fără excepție"
              ],
              "answerIndex": 1,
              "explanation": "Un callable analyzer înlocuiește întregul flux implicit; pentru a păstra ngram_range, poate fi potrivit un tokenizer personalizat cu analyzer=\"word\".",
              "hint": "Unde se construiesc n-gramele în pipeline?"
            },
            {
              "title": "Compară vocabularul înainte și după stemming",
              "type": "open",
              "level": "Dificil",
              "description": "Calculează numărul termenilor unici înainte și după stemming pe un mini-corpus în română. Afișează perechile cuvânt → stem și discută ce termeni s-au reunit.",
              "hint": "Folosește o mulțime pentru vocabular și SnowballStemmer(\"romanian\").",
              "solutionCode": "from nltk.stem.snowball import SnowballStemmer\ncorpus = [\"elevii citesc cărți\", \"elevului îi plac cărțile\"]\ns = SnowballStemmer(\"romanian\")\ntermeni = {w for doc in corpus for w in doc.casefold().split()}\nstemuri = {s.stem(w) for w in termeni}\nprint(\"Vocabular:\", len(termeni), \"Stemming:\", len(stemuri))\nfor w in sorted(termeni):\n    print(w, \"->\", s.stem(w))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">nltk.stem.snowball</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">SnowballStemmer</span>\n<span class=\"n\">corpus</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;elevii citesc cărți&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;elevului îi plac cărțile&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">s</span> <span class=\"o\">=</span> <span class=\"n\">SnowballStemmer</span><span class=\"p\">(</span><span class=\"s2\">&quot;romanian&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">termeni</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"n\">w</span> <span class=\"k\">for</span> <span class=\"n\">doc</span> <span class=\"ow\">in</span> <span class=\"n\">corpus</span> <span class=\"k\">for</span> <span class=\"n\">w</span> <span class=\"ow\">in</span> <span class=\"n\">doc</span><span class=\"o\">.</span><span class=\"n\">casefold</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()}</span>\n<span class=\"n\">stemuri</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"n\">s</span><span class=\"o\">.</span><span class=\"n\">stem</span><span class=\"p\">(</span><span class=\"n\">w</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">w</span> <span class=\"ow\">in</span> <span class=\"n\">termeni</span><span class=\"p\">}</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;Vocabular:&quot;</span><span class=\"p\">,</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">termeni</span><span class=\"p\">),</span> <span class=\"s2\">&quot;Stemming:&quot;</span><span class=\"p\">,</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">stemuri</span><span class=\"p\">))</span>\n<span class=\"k\">for</span> <span class=\"n\">w</span> <span class=\"ow\">in</span> <span class=\"nb\">sorted</span><span class=\"p\">(</span><span class=\"n\">termeni</span><span class=\"p\">):</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">w</span><span class=\"p\">,</span> <span class=\"s2\">&quot;-&gt;&quot;</span><span class=\"p\">,</span> <span class=\"n\">s</span><span class=\"o\">.</span><span class=\"n\">stem</span><span class=\"p\">(</span><span class=\"n\">w</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Când NU eliminăm stopwords?",
              "type": "open",
              "level": "Mediu",
              "description": "Descrie trei aplicații NLP în care eliminarea stopwords poate scădea performanța. Oferă câte un exemplu concret.",
              "hint": "Gândește-te la sentiment, întrebări scurte și detecția comenzilor.",
              "solutionText": "La sentiment: „nu este bun”; la clasificarea intențiilor: „nu vreau rezervare”; la texte foarte scurte: eliminarea majorității cuvintelor poate lăsa un document aproape gol."
            },
            {
              "title": "Pipeline de clasificare fără data leakage",
              "type": "open",
              "level": "Dificil",
              "description": "Construiește un Pipeline cu TfidfVectorizer(ngram_range=(1,2)) și LogisticRegression. Arată de ce vocabularul trebuie învățat numai din train.",
              "hint": "Apelul pipeline.fit(X_train,y_train) face fit doar pe train; predict pe date noi doar transform.",
              "solutionCode": "from sklearn.pipeline import Pipeline\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\nX_train = [\"tenis sport\", \"fotbal sport\", \"cod python\", \"algoritm python\"]\ny_train = [0, 0, 1, 1]\nmodel = Pipeline([\n    (\"tfidf\", TfidfVectorizer(ngram_range=(1, 2))),\n    (\"clf\", LogisticRegression(max_iter=1000))\n])\nmodel.fit(X_train, y_train)\nprint(model.predict([\"meci de tenis\", \"programare python\"]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LogisticRegression</span>\n<span class=\"n\">X_train</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;tenis sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;fotbal sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;cod python&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;algoritm python&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">y_train</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">Pipeline</span><span class=\"p\">([</span>\n    <span class=\"p\">(</span><span class=\"s2\">&quot;tfidf&quot;</span><span class=\"p\">,</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">(</span><span class=\"n\">ngram_range</span><span class=\"o\">=</span><span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">))),</span>\n    <span class=\"p\">(</span><span class=\"s2\">&quot;clf&quot;</span><span class=\"p\">,</span> <span class=\"n\">LogisticRegression</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">1000</span><span class=\"p\">))</span>\n<span class=\"p\">])</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X_train</span><span class=\"p\">,</span> <span class=\"n\">y_train</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">([</span><span class=\"s2\">&quot;meci de tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;programare python&quot;</span><span class=\"p\">]))</span>\n</pre></div>\n"
            },
            {
              "title": "Proiect: experiment comparativ complet",
              "type": "open",
              "level": "Dificil",
              "description": "Formulează un experiment cu patru variante: fără preprocesare, fără stopwords, cu stemming, cu lematizare. Precizează datele, metricile, cross-validation și analiza de erori.",
              "hint": "Schimbă o singură etapă și păstrează aceeași împărțire; urmărește macro-F1 și textele cu negații.",
              "solutionText": "Se fixează aceleași folduri și același model de clasificare. Fiecare transformare este inclusă într-un pipeline sau este calculată fără acces la etichetele de validare. Se raportează macro-F1, dimensiunea vocabularului, timp de preprocesare și erori cu negații/flexiuni. Scorul public nu înlocuiește validarea proprie."
            }
          ]
        },
        {
          "id": "nlp-lingvistica",
          "number": "5.6",
          "title": "POS tagging și recunoașterea entităților",
          "stage": "general",
          "summary": "POS tagging și NER, UPOS/XPOS, morfologie, entități complete, BIO, evaluare exactă, spaCy/Stanza și aplicații pentru clasificare.",
          "objectives": [
            "Să distingi categorii gramaticale UPOS, XPOS, trăsături morfologice și leme.",
            "Să extragi entități denumite și offseturi folosind un model spaCy pentru limba română.",
            "Să adnotezi și să decodezi o secvență BIO în entități complete.",
            "Să calculezi precision, recall și F1 exact pe entități, nu doar pe tokeni.",
            "Să integrezi caracteristici POS/NER într-un model scikit-learn și să evaluezi dacă ajută."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport de curs complet — POS tagging și recunoașterea entităților",
              "src": "content/nlp-lingvistica.html",
              "standalone": "content/nlp-lingvistica-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator complet — POS, NER, BIO, metrici și caracteristici",
              "src": "interactive/nlp-lingvistica.html",
              "height": 850,
              "caption": "Cinci experimente interactive. Deschide separat pentru a folosi tot spațiul ecranului."
            },
            {
              "type": "html",
              "title": "Notebook Jupyter — POS și NER cu Python",
              "src": "content/nlp-lingvistica-notebook.html",
              "height": 720,
              "download": "notebooks/ONIA-NLP-POS-NER.ipynb",
              "caption": "Exemple de la zero și cu scikit-learn; spaCy/Stanza necesită instalarea unor modele separate pentru rulare."
            }
          ],
          "exercises": [
            {
              "title": "POS versus NER",
              "description": "Ce întoarce o componentă de POS tagging?",
              "options": [
                "O singură categorie pentru document",
                "O categorie gramaticală pentru fiecare token",
                "Numărul de entități reale",
                "Probabilitatea de spam"
              ],
              "answerIndex": 1,
              "explanation": "POS operează la nivel de token; NER identifică secvențe de tokeni.",
              "hint": "Identifică unitatea de analiză: token, span sau document.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "UPOS pentru verb",
              "description": "Ce înseamnă eticheta UPOS VERB?",
              "options": [
                "Substantiv propriu",
                "Verb lexical",
                "Prepoziție",
                "Adverb"
              ],
              "answerIndex": 1,
              "explanation": "AUX este folosit separat pentru multe forme auxiliare.",
              "hint": "Identifică unitatea de analiză: token, span sau document.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Lemă și etichetă",
              "description": "Care proprietate spaCy oferă categoria gramaticală universală?",
              "options": [
                "token.lemma_",
                "token.pos_",
                "token.ent_iob_",
                "token.text.lower()"
              ],
              "answerIndex": 1,
              "explanation": "Nu confunda lema cu categoria.",
              "hint": "Identifică unitatea de analiză: token, span sau document.",
              "level": "Ușor",
              "type": "mcq",
              "hintCode": "# Reține: un span este [start, end)\n# Pentru două tokenuri la indicii 3 și 4, intervalul este (3, 5).\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"c1\"># Reține: un span este [start, end)</span>\n<span class=\"c1\"># Pentru două tokenuri la indicii 3 și 4, intervalul este (3, 5).</span>\n</pre></div>\n"
            },
            {
              "title": "BIO: continuarea",
              "description": "În schema BIO, ce înseamnă I-ORG?",
              "options": [
                "Începutul unei persoane",
                "Continuarea unei organizații",
                "Token exterior",
                "Scor nul"
              ],
              "answerIndex": 1,
              "explanation": "I-TIP semnifică inside.",
              "hint": "Identifică unitatea de analiză: token, span sau document.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Entitate cu mai multe cuvinte",
              "description": "De ce „Universitatea din București” trebuie tratată drept un span?",
              "options": [
                "Pentru că are exact trei tokeni",
                "Fiindcă este posibil ca întreaga secvență să fie o singură entitate",
                "Fiindcă toate cuvintele sunt PROPN",
                "Fiindcă nu există POS"
              ],
              "answerIndex": 1,
              "explanation": "NER lucrează pe intervale, nu pe tokeni izolați.",
              "hint": "Identifică unitatea de analiză: token, span sau document.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Evaluare strictă",
              "description": "Referința conține (3,6,ORG), iar modelul prezice (4,6,ORG). Este TP?",
              "options": [
                "Da, pentru că se suprapun",
                "Da, dacă ultimul cuvânt coincide",
                "Nu, granițele diferă",
                "Da, dacă modelul e sigur"
              ],
              "answerIndex": 2,
              "explanation": "Pentru matching exact trebuie să coincidă start, end și tip.",
              "hint": "Identifică unitatea de analiză: token, span sau document.",
              "level": "Ușor",
              "type": "mcq"
            },
            {
              "title": "Precision și recall",
              "description": "Un sistem produce TP=2, FP=1, FN=2. Ce este precision?",
              "options": [
                "2/3",
                "1/2",
                "2/4",
                "3/4"
              ],
              "answerIndex": 0,
              "explanation": "Precision = TP/(TP+FP).",
              "hint": "Identifică unitatea de analiză: token, span sau document.",
              "level": "Mediu",
              "type": "mcq"
            },
            {
              "title": "spaCy blank",
              "description": "De ce spacy.blank(\"ro\") nu este echivalent cu ro_core_news_sm?",
              "options": [
                "Nu suportă Unicode",
                "Nu are automat componentele antrenate POS/NER",
                "Returnează mereu 0 tokeni",
                "Are mai multe entități"
              ],
              "answerIndex": 1,
              "explanation": "Un model blank este un pipeline de bază; componentele învățate sunt instalate separat.",
              "hint": "Identifică unitatea de analiză: token, span sau document.",
              "level": "Mediu",
              "type": "mcq"
            },
            {
              "title": "Stanza pentru română",
              "description": "Care configurație Stanza este sigură ca exemplu POS+lemă?",
              "options": [
                "processors=\"ner\" fără verificare",
                "processors=\"tokenize,pos,lemma\"",
                "Pipeline(\"ro\", processors=\"translation\")",
                "Stanza nu suportă româna"
              ],
              "answerIndex": 1,
              "explanation": "Disponibilitatea NER se verifică separat.",
              "hint": "Identifică unitatea de analiză: token, span sau document.",
              "level": "Mediu",
              "type": "mcq"
            },
            {
              "title": "Anonimizare",
              "description": "Este NER suficient singur pentru anonimizarea datelor personale?",
              "options": [
                "Da, dacă folosește model mare",
                "Nu, entități personale pot fi omise sau indirect identificabile",
                "Da, când înlocuiește ORG",
                "Da, dacă textul are diacritice"
              ],
              "answerIndex": 1,
              "explanation": "Un model NER poate rata mențiuni sensibile, deci nu garantează anonimizarea.",
              "hint": "Identifică unitatea de analiză: token, span sau document.",
              "level": "Mediu",
              "type": "mcq"
            },
            {
              "title": "Numără UPOS dintr-o propoziție",
              "level": "Ușor",
              "description": "Scrie un program care primește tokeni cu etichete POS și calculează un dicționar cu frecvența fiecărei categorii.",
              "hint": "Poți folosi Counter; nu uita să excluzi PUNCT dacă vrei statistici doar pe cuvinte.",
              "solutionCode": "from collections import Counter\npos = [\"NOUN\", \"ADJ\", \"VERB\", \"ADV\", \"NOUN\", \"PUNCT\"]\nrezultat = Counter(x for x in pos if x != \"PUNCT\")\nprint(rezultat)\n",
              "type": "open",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">collections</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Counter</span>\n<span class=\"n\">pos</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;NOUN&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ADJ&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;VERB&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ADV&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;NOUN&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;PUNCT&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">rezultat</span> <span class=\"o\">=</span> <span class=\"n\">Counter</span><span class=\"p\">(</span><span class=\"n\">x</span> <span class=\"k\">for</span> <span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">pos</span> <span class=\"k\">if</span> <span class=\"n\">x</span> <span class=\"o\">!=</span> <span class=\"s2\">&quot;PUNCT&quot;</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">rezultat</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Obține offseturile entităților",
              "level": "Ușor",
              "description": "Pentru textul și spanurile date în enunț, afișează subșirurile corespunzătoare fără să pierzi diacriticele.",
              "statementCode": "text = \"Ana vizitează București.\"\nstart = text.index(\"București\")\nspanuri = [(0, 3, \"PER\"), (start, start + len(\"București\"), \"LOC\")]\n",
              "hint": "Folosește slicing text[start:end]; verifică manual offseturile.",
              "solutionCode": "text = \"Ana vizitează București.\"\nstart = text.index(\"București\")\nspanuri = [(0, 3, \"PER\"), (start, start + len(\"București\"), \"LOC\")]\nfor st, dr, tip in spanuri:\n    print(text[st:dr], tip)\n",
              "type": "open",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"s2\">&quot;Ana vizitează București.&quot;</span>\n<span class=\"n\">start</span> <span class=\"o\">=</span> <span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">index</span><span class=\"p\">(</span><span class=\"s2\">&quot;București&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">spanuri</span> <span class=\"o\">=</span> <span class=\"p\">[(</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"s2\">&quot;PER&quot;</span><span class=\"p\">),</span> <span class=\"p\">(</span><span class=\"n\">start</span><span class=\"p\">,</span> <span class=\"n\">start</span> <span class=\"o\">+</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"s2\">&quot;București&quot;</span><span class=\"p\">),</span> <span class=\"s2\">&quot;LOC&quot;</span><span class=\"p\">)]</span>\n</pre></div>\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"s2\">&quot;Ana vizitează București.&quot;</span>\n<span class=\"n\">start</span> <span class=\"o\">=</span> <span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">index</span><span class=\"p\">(</span><span class=\"s2\">&quot;București&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">spanuri</span> <span class=\"o\">=</span> <span class=\"p\">[(</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"s2\">&quot;PER&quot;</span><span class=\"p\">),</span> <span class=\"p\">(</span><span class=\"n\">start</span><span class=\"p\">,</span> <span class=\"n\">start</span> <span class=\"o\">+</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"s2\">&quot;București&quot;</span><span class=\"p\">),</span> <span class=\"s2\">&quot;LOC&quot;</span><span class=\"p\">)]</span>\n<span class=\"k\">for</span> <span class=\"n\">st</span><span class=\"p\">,</span> <span class=\"n\">dr</span><span class=\"p\">,</span> <span class=\"n\">tip</span> <span class=\"ow\">in</span> <span class=\"n\">spanuri</span><span class=\"p\">:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"p\">[</span><span class=\"n\">st</span><span class=\"p\">:</span><span class=\"n\">dr</span><span class=\"p\">],</span> <span class=\"n\">tip</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Reconstruiește entități BIO",
              "level": "Mediu",
              "description": "Parcurge etichetele BIO și construiește lista entităților complete. Folosește convenția B-ORG pentru început și I-ORG pentru continuare.",
              "statementCode": "tokeni = [\"Ana\", \"lucrează\", \"la\", \"Universitatea\", \"din\", \"București\"]\netichete = [\"B-PER\", \"O\", \"O\", \"B-ORG\", \"I-ORG\", \"I-ORG\"]\n",
              "hint": "Închide entitatea când apare O sau un nou B; păstrează indicii start și end.",
              "solutionText": "Algoritmul complet este construit și explicat în secțiunea 15; un rezultat corect este [(0,1,PER), (3,6,ORG)].",
              "type": "open",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">tokeni</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;Ana&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;lucrează&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;la&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;Universitatea&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;din&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;București&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">etichete</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;B-PER&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;O&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;O&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;B-ORG&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;I-ORG&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;I-ORG&quot;</span><span class=\"p\">]</span>\n</pre></div>\n"
            },
            {
              "title": "Calcul exact de micro-F1 pentru NER",
              "level": "Mediu",
              "description": "Calculează TP, FP, FN, precision, recall și F1 pentru două liste de spanuri cu etichete. Un span parțial nu este considerat corect.",
              "statementCode": "gold = {(0, 1, \"PER\"), (3, 6, \"ORG\")}\npred = {(0, 1, \"PER\"), (4, 6, \"ORG\")}\n",
              "hint": "Intersecția mulțimilor dă TP. Spanurile prezise în plus dau FP; cele adevărate omise dau FN.",
              "solutionCode": "gold = {(0, 1, \"PER\"), (3, 6, \"ORG\")}\npred = {(0, 1, \"PER\"), (4, 6, \"ORG\")}\ntp = len(gold & pred)\nfp = len(pred - gold)\nfn = len(gold - pred)\np = tp / (tp + fp) if tp + fp else 0.0\nr = tp / (tp + fn) if tp + fn else 0.0\nf1 = 2 * p * r / (p + r) if p + r else 0.0\nprint(tp, fp, fn, p, r, f1)\n",
              "type": "open",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">gold</span> <span class=\"o\">=</span> <span class=\"p\">{(</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"s2\">&quot;PER&quot;</span><span class=\"p\">),</span> <span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ORG&quot;</span><span class=\"p\">)}</span>\n<span class=\"n\">pred</span> <span class=\"o\">=</span> <span class=\"p\">{(</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"s2\">&quot;PER&quot;</span><span class=\"p\">),</span> <span class=\"p\">(</span><span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ORG&quot;</span><span class=\"p\">)}</span>\n</pre></div>\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">gold</span> <span class=\"o\">=</span> <span class=\"p\">{(</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"s2\">&quot;PER&quot;</span><span class=\"p\">),</span> <span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ORG&quot;</span><span class=\"p\">)}</span>\n<span class=\"n\">pred</span> <span class=\"o\">=</span> <span class=\"p\">{(</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"s2\">&quot;PER&quot;</span><span class=\"p\">),</span> <span class=\"p\">(</span><span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ORG&quot;</span><span class=\"p\">)}</span>\n<span class=\"n\">tp</span> <span class=\"o\">=</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">gold</span> <span class=\"o\">&amp;</span> <span class=\"n\">pred</span><span class=\"p\">)</span>\n<span class=\"n\">fp</span> <span class=\"o\">=</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">pred</span> <span class=\"o\">-</span> <span class=\"n\">gold</span><span class=\"p\">)</span>\n<span class=\"n\">fn</span> <span class=\"o\">=</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">gold</span> <span class=\"o\">-</span> <span class=\"n\">pred</span><span class=\"p\">)</span>\n<span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"n\">tp</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"n\">tp</span> <span class=\"o\">+</span> <span class=\"n\">fp</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">tp</span> <span class=\"o\">+</span> <span class=\"n\">fp</span> <span class=\"k\">else</span> <span class=\"mf\">0.0</span>\n<span class=\"n\">r</span> <span class=\"o\">=</span> <span class=\"n\">tp</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"n\">tp</span> <span class=\"o\">+</span> <span class=\"n\">fn</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">tp</span> <span class=\"o\">+</span> <span class=\"n\">fn</span> <span class=\"k\">else</span> <span class=\"mf\">0.0</span>\n<span class=\"n\">f1</span> <span class=\"o\">=</span> <span class=\"mi\">2</span> <span class=\"o\">*</span> <span class=\"n\">p</span> <span class=\"o\">*</span> <span class=\"n\">r</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"n\">p</span> <span class=\"o\">+</span> <span class=\"n\">r</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">p</span> <span class=\"o\">+</span> <span class=\"n\">r</span> <span class=\"k\">else</span> <span class=\"mf\">0.0</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">tp</span><span class=\"p\">,</span> <span class=\"n\">fp</span><span class=\"p\">,</span> <span class=\"n\">fn</span><span class=\"p\">,</span> <span class=\"n\">p</span><span class=\"p\">,</span> <span class=\"n\">r</span><span class=\"p\">,</span> <span class=\"n\">f1</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Etichete POS și leme cu spaCy",
              "level": "Mediu",
              "description": "Folosește modelul românesc spaCy pentru a afișa textul, POS și lema fiecărui token. Compară cu o etichetare manuală.",
              "hint": "Instalează ro_core_news_sm și folosește token.pos_, token.lemma_.",
              "solutionCode": "import spacy\nnlp = spacy.load(\"ro_core_news_sm\")\ndoc = nlp(\"Elevii citesc și discută manualul.\")\nfor token in doc:\n    print(token.text, token.pos_, token.lemma_)\n",
              "type": "open",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">spacy</span>\n<span class=\"n\">nlp</span> <span class=\"o\">=</span> <span class=\"n\">spacy</span><span class=\"o\">.</span><span class=\"n\">load</span><span class=\"p\">(</span><span class=\"s2\">&quot;ro_core_news_sm&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">doc</span> <span class=\"o\">=</span> <span class=\"n\">nlp</span><span class=\"p\">(</span><span class=\"s2\">&quot;Elevii citesc și discută manualul.&quot;</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">token</span> <span class=\"ow\">in</span> <span class=\"n\">doc</span><span class=\"p\">:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">token</span><span class=\"o\">.</span><span class=\"n\">text</span><span class=\"p\">,</span> <span class=\"n\">token</span><span class=\"o\">.</span><span class=\"n\">pos_</span><span class=\"p\">,</span> <span class=\"n\">token</span><span class=\"o\">.</span><span class=\"n\">lemma_</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "POS la Stanza: comparație",
              "level": "Mediu",
              "description": "Extrage UPOS și XPOS pentru un text românesc folosind Stanza, apoi compară cu spaCy.",
              "hint": "Pipeline Stanza tokenize,pos,lemma; acces prin sentence.words.",
              "solutionCode": "import stanza\nnlp = stanza.Pipeline(\"ro\", processors=\"tokenize,pos,lemma\", use_gpu=False)\ndoc = nlp(\"Elevii citesc manualul.\")\nfor sent in doc.sentences:\n    for word in sent.words:\n        print(word.text, word.upos, word.xpos, word.lemma)\n",
              "type": "open",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">stanza</span>\n<span class=\"n\">nlp</span> <span class=\"o\">=</span> <span class=\"n\">stanza</span><span class=\"o\">.</span><span class=\"n\">Pipeline</span><span class=\"p\">(</span><span class=\"s2\">&quot;ro&quot;</span><span class=\"p\">,</span> <span class=\"n\">processors</span><span class=\"o\">=</span><span class=\"s2\">&quot;tokenize,pos,lemma&quot;</span><span class=\"p\">,</span> <span class=\"n\">use_gpu</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">)</span>\n<span class=\"n\">doc</span> <span class=\"o\">=</span> <span class=\"n\">nlp</span><span class=\"p\">(</span><span class=\"s2\">&quot;Elevii citesc manualul.&quot;</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">sent</span> <span class=\"ow\">in</span> <span class=\"n\">doc</span><span class=\"o\">.</span><span class=\"n\">sentences</span><span class=\"p\">:</span>\n    <span class=\"k\">for</span> <span class=\"n\">word</span> <span class=\"ow\">in</span> <span class=\"n\">sent</span><span class=\"o\">.</span><span class=\"n\">words</span><span class=\"p\">:</span>\n        <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">word</span><span class=\"o\">.</span><span class=\"n\">text</span><span class=\"p\">,</span> <span class=\"n\">word</span><span class=\"o\">.</span><span class=\"n\">upos</span><span class=\"p\">,</span> <span class=\"n\">word</span><span class=\"o\">.</span><span class=\"n\">xpos</span><span class=\"p\">,</span> <span class=\"n\">word</span><span class=\"o\">.</span><span class=\"n\">lemma</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Extinde o listă de entități cu EntityRuler",
              "level": "Mediu",
              "description": "Construiește un detector bazat pe reguli care să identifice expresia „POLITEHNICA București” drept ORG.",
              "hint": "Folosește spacy.blank(\"ro\"), add_pipe(\"entity_ruler\") și add_patterns().",
              "solutionCode": "import spacy\nnlp = spacy.blank(\"ro\")\nruler = nlp.add_pipe(\"entity_ruler\")\nruler.add_patterns([{\"label\": \"ORG\", \"pattern\": \"POLITEHNICA București\"}])\nprint([(e.text, e.label_) for e in nlp(\"Vizităm POLITEHNICA București.\").ents])\n",
              "type": "open",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">spacy</span>\n<span class=\"n\">nlp</span> <span class=\"o\">=</span> <span class=\"n\">spacy</span><span class=\"o\">.</span><span class=\"n\">blank</span><span class=\"p\">(</span><span class=\"s2\">&quot;ro&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">ruler</span> <span class=\"o\">=</span> <span class=\"n\">nlp</span><span class=\"o\">.</span><span class=\"n\">add_pipe</span><span class=\"p\">(</span><span class=\"s2\">&quot;entity_ruler&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">ruler</span><span class=\"o\">.</span><span class=\"n\">add_patterns</span><span class=\"p\">([{</span><span class=\"s2\">&quot;label&quot;</span><span class=\"p\">:</span> <span class=\"s2\">&quot;ORG&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;pattern&quot;</span><span class=\"p\">:</span> <span class=\"s2\">&quot;POLITEHNICA București&quot;</span><span class=\"p\">}])</span>\n<span class=\"nb\">print</span><span class=\"p\">([(</span><span class=\"n\">e</span><span class=\"o\">.</span><span class=\"n\">text</span><span class=\"p\">,</span> <span class=\"n\">e</span><span class=\"o\">.</span><span class=\"n\">label_</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">e</span> <span class=\"ow\">in</span> <span class=\"n\">nlp</span><span class=\"p\">(</span><span class=\"s2\">&quot;Vizităm POLITEHNICA București.&quot;</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">ents</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "Mascare cu offseturi valide",
              "level": "Mediu",
              "description": "Înlocuiește două spanuri cu marcaje de tip [PER] și [ORG]. Explică de ce parcurgi spanurile de la dreapta la stânga.",
              "hint": "Sortează descrescător după început, ca să nu se modifice offseturile spanurilor din stânga.",
              "solutionCode": "text = \"Ana studiază la POLITEHNICA București.\"\nstart_org = text.index(\"POLITEHNICA București\")\nspanuri = [(0, 3, \"PER\"), (start_org, start_org + len(\"POLITEHNICA București\"), \"ORG\")]\nfor a, b, t in sorted(spanuri, reverse=True):\n    text = text[:a] + f\"[{t}]\" + text[b:]\nprint(text)\n",
              "type": "open",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"s2\">&quot;Ana studiază la POLITEHNICA București.&quot;</span>\n<span class=\"n\">start_org</span> <span class=\"o\">=</span> <span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">index</span><span class=\"p\">(</span><span class=\"s2\">&quot;POLITEHNICA București&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">spanuri</span> <span class=\"o\">=</span> <span class=\"p\">[(</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"s2\">&quot;PER&quot;</span><span class=\"p\">),</span> <span class=\"p\">(</span><span class=\"n\">start_org</span><span class=\"p\">,</span> <span class=\"n\">start_org</span> <span class=\"o\">+</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"s2\">&quot;POLITEHNICA București&quot;</span><span class=\"p\">),</span> <span class=\"s2\">&quot;ORG&quot;</span><span class=\"p\">)]</span>\n<span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span><span class=\"p\">,</span> <span class=\"n\">t</span> <span class=\"ow\">in</span> <span class=\"nb\">sorted</span><span class=\"p\">(</span><span class=\"n\">spanuri</span><span class=\"p\">,</span> <span class=\"n\">reverse</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">):</span>\n    <span class=\"n\">text</span> <span class=\"o\">=</span> <span class=\"n\">text</span><span class=\"p\">[:</span><span class=\"n\">a</span><span class=\"p\">]</span> <span class=\"o\">+</span> <span class=\"sa\">f</span><span class=\"s2\">&quot;[</span><span class=\"si\">{</span><span class=\"n\">t</span><span class=\"si\">}</span><span class=\"s2\">]&quot;</span> <span class=\"o\">+</span> <span class=\"n\">text</span><span class=\"p\">[</span><span class=\"n\">b</span><span class=\"p\">:]</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Extragerea caracteristicilor POS",
              "level": "Mediu",
              "description": "Construiește pentru trei documente câte un dicționar cu numărul verbelor, substantivelor și adjectivelor; transformă lista cu DictVectorizer.",
              "hint": "Dacă nu ai un model lingvistic instalat, poți lucra pe categorii POS deja adnotate.",
              "solutionCode": "from sklearn.feature_extraction import DictVectorizer\netichete = [\n    [\"NOUN\", \"VERB\", \"ADJ\"],\n    [\"NOUN\", \"NOUN\", \"VERB\"],\n    [\"ADJ\", \"ADJ\", \"NOUN\"]\n]\ndate = [{\"nr_VERB\": v.count(\"VERB\"), \"nr_NOUN\": v.count(\"NOUN\"),\n         \"nr_ADJ\": v.count(\"ADJ\")} for v in etichete]\nvec = DictVectorizer()\nX = vec.fit_transform(date)\nprint(X.toarray())\n",
              "type": "open",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">DictVectorizer</span>\n<span class=\"n\">etichete</span> <span class=\"o\">=</span> <span class=\"p\">[</span>\n    <span class=\"p\">[</span><span class=\"s2\">&quot;NOUN&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;VERB&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ADJ&quot;</span><span class=\"p\">],</span>\n    <span class=\"p\">[</span><span class=\"s2\">&quot;NOUN&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;NOUN&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;VERB&quot;</span><span class=\"p\">],</span>\n    <span class=\"p\">[</span><span class=\"s2\">&quot;ADJ&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ADJ&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;NOUN&quot;</span><span class=\"p\">]</span>\n<span class=\"p\">]</span>\n<span class=\"n\">date</span> <span class=\"o\">=</span> <span class=\"p\">[{</span><span class=\"s2\">&quot;nr_VERB&quot;</span><span class=\"p\">:</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">count</span><span class=\"p\">(</span><span class=\"s2\">&quot;VERB&quot;</span><span class=\"p\">),</span> <span class=\"s2\">&quot;nr_NOUN&quot;</span><span class=\"p\">:</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">count</span><span class=\"p\">(</span><span class=\"s2\">&quot;NOUN&quot;</span><span class=\"p\">),</span>\n         <span class=\"s2\">&quot;nr_ADJ&quot;</span><span class=\"p\">:</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">count</span><span class=\"p\">(</span><span class=\"s2\">&quot;ADJ&quot;</span><span class=\"p\">)}</span> <span class=\"k\">for</span> <span class=\"n\">v</span> <span class=\"ow\">in</span> <span class=\"n\">etichete</span><span class=\"p\">]</span>\n<span class=\"n\">vec</span> <span class=\"o\">=</span> <span class=\"n\">DictVectorizer</span><span class=\"p\">()</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">vec</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">date</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">toarray</span><span class=\"p\">())</span>\n</pre></div>\n"
            },
            {
              "title": "Compară două moduri de evaluare",
              "level": "Dificil",
              "description": "Construiește un caz în care accuracy pe tokeni este mare, dar F1 pe entități este mic. Explică diferența.",
              "hint": "Folosește multe tokenuri O și o singură entitate de trei tokenuri cu graniță greșită.",
              "solutionText": "De exemplu, 97 de tokenuri O sunt toate corecte, dar o singură entitate de 3 tokenuri este prezisă cu altă limită. Accuracy pe tokeni poate depăși 97%, în timp ce F1 pe entități complete poate fi 0.",
              "type": "open"
            },
            {
              "title": "Granițe suprapuse",
              "level": "Dificil",
              "description": "Proiectează o procedură de verificare care respinge entități suprapuse pentru o schemă NER fără entități imbricate.",
              "hint": "Ordonează după start și verifică dacă end-ul curent depășește startul următorului.",
              "solutionCode": "def fara_suprapuneri(spanuri):\n    spanuri = sorted(spanuri)\n    limita = -1\n    for st, dr, tip in spanuri:\n        if st < limita:\n            return False\n        limita = max(limita, dr)\n    return True\n\nprint(fara_suprapuneri([(0, 2, \"PER\"), (2, 5, \"ORG\")]))\nprint(fara_suprapuneri([(0, 3, \"PER\"), (2, 5, \"ORG\")]))\n",
              "type": "open",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">fara_suprapuneri</span><span class=\"p\">(</span><span class=\"n\">spanuri</span><span class=\"p\">):</span>\n    <span class=\"n\">spanuri</span> <span class=\"o\">=</span> <span class=\"nb\">sorted</span><span class=\"p\">(</span><span class=\"n\">spanuri</span><span class=\"p\">)</span>\n    <span class=\"n\">limita</span> <span class=\"o\">=</span> <span class=\"o\">-</span><span class=\"mi\">1</span>\n    <span class=\"k\">for</span> <span class=\"n\">st</span><span class=\"p\">,</span> <span class=\"n\">dr</span><span class=\"p\">,</span> <span class=\"n\">tip</span> <span class=\"ow\">in</span> <span class=\"n\">spanuri</span><span class=\"p\">:</span>\n        <span class=\"k\">if</span> <span class=\"n\">st</span> <span class=\"o\">&lt;</span> <span class=\"n\">limita</span><span class=\"p\">:</span>\n            <span class=\"k\">return</span> <span class=\"kc\">False</span>\n        <span class=\"n\">limita</span> <span class=\"o\">=</span> <span class=\"nb\">max</span><span class=\"p\">(</span><span class=\"n\">limita</span><span class=\"p\">,</span> <span class=\"n\">dr</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"kc\">True</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">fara_suprapuneri</span><span class=\"p\">([(</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"s2\">&quot;PER&quot;</span><span class=\"p\">),</span> <span class=\"p\">(</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ORG&quot;</span><span class=\"p\">)]))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">fara_suprapuneri</span><span class=\"p\">([(</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"s2\">&quot;PER&quot;</span><span class=\"p\">),</span> <span class=\"p\">(</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ORG&quot;</span><span class=\"p\">)]))</span>\n</pre></div>\n"
            },
            {
              "title": "Mini-proiect: clasificare cu POS + TF-IDF",
              "level": "Dificil",
              "description": "Compară un baseline TF-IDF cu varianta TF-IDF plus numărul de verbe/adjective. Precizează splitul, metricile și o analiză de erori.",
              "hint": "Păstrează același model și foldurile fixe; construiește caracteristicile lingvistice fără etichetele de test.",
              "solutionText": "Raportează macro-F1 și durata preprocesării pentru două configurații, pe aceleași folduri. Dacă POS/NER nu îmbunătățește stabil rezultatul, păstrează baseline-ul simplu.",
              "type": "open"
            },
            {
              "title": "Studiu ONIA: înlocuirea organizațiilor cu un marcaj",
              "level": "Dificil",
              "description": "Într-un corpus de știri, propune un experiment care înlocuiește entitățile ORG cu [ORG] înainte de clasificare. Când poate ajuta și când poate reduce scorul?",
              "hint": "Numele organizației poate fi semnal discriminativ sau poate produce memorare accidentală a sursei.",
              "solutionText": "Ajută când modelul trebuie să generalizeze la organizații nevăzute și numele nu este decisiv. Dăunează când identitatea organizației determină corect categoria. Decizia se justifică prin validare și analiză de erori.",
              "type": "open"
            },
            {
              "title": "Audit critic: NER și protecția datelor",
              "level": "Dificil",
              "description": "Explică de ce mascarea automată cu un model NER nu asigură anonimizarea completă și propune două verificări suplimentare.",
              "hint": "Gândește-te la numere de telefon, adrese e-mail și indicii indirecte.",
              "solutionText": "Verificări posibile: detector regex pentru tipare structurale, verificare umană a eșantioanelor, revizuirea datelor quasi-identificabile și teste de reidentificare potrivite contextului.",
              "type": "open"
            }
          ]
        },
        {
          "id": "nlp-vectorizare",
          "number": "5.7",
          "title": "Bag-of-Words, n-grame, TF-IDF și matrici rare",
          "stage": "general",
          "summary": "Reprezentarea numerică a textului: BoW și n-grame construite manual, TF-IDF dedus matematic, matrici sparse CSR, alegeri explicate prin situații și evaluare corectă în scikit-learn.",
          "objectives": [
            "Să construiești manual vocabularul, BoW și TF-IDF și să le verifici cu scikit-learn.",
            "Să alegi între cuvinte, n-grame și caractere în funcție de sarcină.",
            "Să explici min_df, max_df, sublinear_tf, norm, smooth_idf, max_features și hashing în combinații coerente.",
            "Să folosești matrici sparse și Pipeline fără scurgeri de informație."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Bag-of-Words, n-grame, TF-IDF și matrici rare",
              "src": "content/nlp-vectorizare.html",
              "standalone": "content/nlp-vectorizare-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Bag-of-Words, n-grame, TF-IDF și matrici rare",
              "src": "interactive/nlp-vectorizare.html",
              "height": 720,
              "caption": "Simulator interactiv autonom. Folosește „Deschide separat” pentru experimentare pe întregul ecran."
            },
            {
              "type": "prose",
              "title": "Notebook Jupyter — exemple și experimente",
              "html": "<div class=\"onia-nlp nlp-call\"><h2>Exersează în JupyterLab</h2><p>Notebookul include exemple reproductibile, calcule TF-IDF și teme pentru experimente.</p><a href=\"notebooks/ONIA-NLP-BoW-TFIDF.ipynb\" download>Descarcă notebookul .ipynb</a></div>"
            }
          ],
          "exercises": [
            {
              "title": "BoW – vocabular și matrice",
              "description": "Pentru D1=\"ana ana citește\", D2=\"ana scrie\", construiește manual vocabularul ordonat alfabetic și matricea document–termen.",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "[[2,1,0],[1,0,1]]",
                "[[1,1,0],[1,0,1]]",
                "[[2,0,1],[1,1,0]]",
                "[[1,2,0],[0,1,1]]"
              ],
              "answerIndex": 0,
              "hint": "Ordinea coloanelor este ana, citește, scrie. Numără repetările.",
              "explanation": "D1 are ana de 2 ori, citește o dată, scrie de 0 ori; D2 are ana o dată și scrie o dată."
            },
            {
              "title": "Implementare de la zero: BoW",
              "description": "Scrie funcția matrice_bow(documente) care întoarce vocabularul sortat și matricea de numărări. Încearc-o și pe documente care au cuvinte repetate.",
              "level": "Mediu",
              "type": "open",
              "hint": "Construiește liste de tokeni. Iterează prin vocabular pentru fiecare document.",
              "solutionText": "Folosim un set pentru vocabular, apoi numărăm separat fiecare termen în fiecare document.",
              "solutionCode": "def matrice_bow(documente):\n    tokeni = [text.lower().split() for text in documente]\n    vocabular = sorted({t for doc in tokeni for t in doc})\n    matrice = [[doc.count(t) for t in vocabular] for doc in tokeni]\n    return vocabular, matrice\n\nv, m = matrice_bow([\"ana ana citește\", \"ana scrie\"])\nprint(v)\nfor linie in m:\n    print(linie)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">matrice_bow</span><span class=\"p\">(</span><span class=\"n\">documente</span><span class=\"p\">):</span>\n    <span class=\"n\">tokeni</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">lower</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()</span> <span class=\"k\">for</span> <span class=\"n\">text</span> <span class=\"ow\">in</span> <span class=\"n\">documente</span><span class=\"p\">]</span>\n    <span class=\"n\">vocabular</span> <span class=\"o\">=</span> <span class=\"nb\">sorted</span><span class=\"p\">({</span><span class=\"n\">t</span> <span class=\"k\">for</span> <span class=\"n\">doc</span> <span class=\"ow\">in</span> <span class=\"n\">tokeni</span> <span class=\"k\">for</span> <span class=\"n\">t</span> <span class=\"ow\">in</span> <span class=\"n\">doc</span><span class=\"p\">})</span>\n    <span class=\"n\">matrice</span> <span class=\"o\">=</span> <span class=\"p\">[[</span><span class=\"n\">doc</span><span class=\"o\">.</span><span class=\"n\">count</span><span class=\"p\">(</span><span class=\"n\">t</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">t</span> <span class=\"ow\">in</span> <span class=\"n\">vocabular</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">doc</span> <span class=\"ow\">in</span> <span class=\"n\">tokeni</span><span class=\"p\">]</span>\n    <span class=\"k\">return</span> <span class=\"n\">vocabular</span><span class=\"p\">,</span> <span class=\"n\">matrice</span>\n\n<span class=\"n\">v</span><span class=\"p\">,</span> <span class=\"n\">m</span> <span class=\"o\">=</span> <span class=\"n\">matrice_bow</span><span class=\"p\">([</span><span class=\"s2\">&quot;ana ana citește&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ana scrie&quot;</span><span class=\"p\">])</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">v</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">linie</span> <span class=\"ow\">in</span> <span class=\"n\">m</span><span class=\"p\">:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">linie</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Numărare versus prezență",
              "description": "Un document conține „ofertă ofertă cod”, iar altul „ofertă cod”. Construiește atât reprezentarea cu numărări, cât și varianta binară.",
              "level": "Mediu",
              "type": "open",
              "hint": "Înlocuiește orice valoare pozitivă din matricea CountVectorizer cu 1.",
              "solutionText": "În BoW binar ambele documente pot avea aceeași reprezentare; numărul repetărilor nu mai este disponibil.",
              "solutionCode": "from sklearn.feature_extraction.text import CountVectorizer\ntexte = [\"ofertă ofertă cod\", \"ofertă cod\"]\nfor binary in (False, True):\n    v = CountVectorizer(binary=binary)\n    X = v.fit_transform(texte)\n    print(binary, v.get_feature_names_out().tolist())\n    print(X.toarray())\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">CountVectorizer</span>\n<span class=\"n\">texte</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;ofertă ofertă cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ofertă cod&quot;</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">binary</span> <span class=\"ow\">in</span> <span class=\"p\">(</span><span class=\"kc\">False</span><span class=\"p\">,</span> <span class=\"kc\">True</span><span class=\"p\">):</span>\n    <span class=\"n\">v</span> <span class=\"o\">=</span> <span class=\"n\">CountVectorizer</span><span class=\"p\">(</span><span class=\"n\">binary</span><span class=\"o\">=</span><span class=\"n\">binary</span><span class=\"p\">)</span>\n    <span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">texte</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">binary</span><span class=\"p\">,</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">get_feature_names_out</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">tolist</span><span class=\"p\">())</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">toarray</span><span class=\"p\">())</span>\n</pre></div>\n"
            },
            {
              "title": "Negația și bigramele",
              "description": "Ce n-gramă distinge explicit „nu recomand” de „recomand” când folosim caracteristici de tip word?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Bigrama „nu recomand”",
                "Unigrama „recomand”",
                "Trigrama „nu”",
                "N-grama goală"
              ],
              "answerIndex": 0,
              "hint": "Căutăm o caracteristică ce păstrează vecinătatea cuvintelor.",
              "explanation": "Bigrama păstrează informația locală de ordine."
            },
            {
              "title": "N-grame implementate manual",
              "description": "Pentru [\"nu\", \"este\", \"foarte\", \"bun\"], generează unigramele, bigramele și trigramele.",
              "level": "Mediu",
              "type": "open",
              "hint": "Folosește o fereastră glisantă de lungime n.",
              "solutionCode": "tokens = [\"nu\", \"este\", \"foarte\", \"bun\"]\nfor n in (1, 2, 3):\n    print(n, [\" \".join(tokens[i:i+n]) for i in range(len(tokens)-n+1)])\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">tokens</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;nu&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;este&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;foarte&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;bun&quot;</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">n</span> <span class=\"ow\">in</span> <span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">):</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">n</span><span class=\"p\">,</span> <span class=\"p\">[</span><span class=\"s2\">&quot; &quot;</span><span class=\"o\">.</span><span class=\"n\">join</span><span class=\"p\">(</span><span class=\"n\">tokens</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">:</span><span class=\"n\">i</span><span class=\"o\">+</span><span class=\"n\">n</span><span class=\"p\">])</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">tokens</span><span class=\"p\">)</span><span class=\"o\">-</span><span class=\"n\">n</span><span class=\"o\">+</span><span class=\"mi\">1</span><span class=\"p\">)])</span>\n</pre></div>\n"
            },
            {
              "title": "Comparație word și char_wb",
              "description": "Construiește un experiment care măsoară similaritatea cosinus dintre „programare” și „progrmare” pentru două reprezentări: cuvinte și n-grame de caractere.",
              "level": "Mediu",
              "type": "open",
              "hint": "Folosește TfidfVectorizer și cosine_similarity.",
              "solutionText": "Compară numeric și explică de ce n-gramele de caractere pot păstra asemănarea în prezența unei erori de tastare.",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\ntexte = [\"programare\", \"progrmare\", \"fotbal\"]\nfor analyzer, rng in [(\"word\", (1,1)), (\"char_wb\", (3,5))]:\n    X = TfidfVectorizer(analyzer=analyzer, ngram_range=rng).fit_transform(texte)\n    print(analyzer, round(cosine_similarity(X)[0,1], 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics.pairwise</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">cosine_similarity</span>\n<span class=\"n\">texte</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;programare&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;progrmare&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;fotbal&quot;</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">analyzer</span><span class=\"p\">,</span> <span class=\"n\">rng</span> <span class=\"ow\">in</span> <span class=\"p\">[(</span><span class=\"s2\">&quot;word&quot;</span><span class=\"p\">,</span> <span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">)),</span> <span class=\"p\">(</span><span class=\"s2\">&quot;char_wb&quot;</span><span class=\"p\">,</span> <span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">,</span><span class=\"mi\">5</span><span class=\"p\">))]:</span>\n    <span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">(</span><span class=\"n\">analyzer</span><span class=\"o\">=</span><span class=\"n\">analyzer</span><span class=\"p\">,</span> <span class=\"n\">ngram_range</span><span class=\"o\">=</span><span class=\"n\">rng</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">texte</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">analyzer</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">cosine_similarity</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">)[</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">],</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Calcul TF/DF manual",
              "description": "În documentele [\"python python date\", \"python cod\", \"date cod\"], calculează TF(python,D1), DF(python) și IDF(python) cu smoothing.",
              "level": "Mediu",
              "type": "open",
              "hint": "TF=2, DF=2, N=3. Formula este ln((1+N)/(1+DF))+1.",
              "solutionText": "TF=2, DF=2, IDF=ln(4/3)+1≈1,28768."
            },
            {
              "title": "TF-IDF L2 pas cu pas",
              "description": "Calculează vectorul TF-IDF brut și cel normalizat pentru D1=\"python python date\" în corpusul de 3 documente din exercițiul anterior.",
              "level": "Mediu",
              "type": "open",
              "hint": "După înmulțire obții [2a,a,0] pentru a=ln(4/3)+1. Norma este a·sqrt(5).",
              "solutionText": "În ordinea [python,date,cod]: TF-IDF brut ≈ [2,5754,1,2877,0]; L2 = [2/sqrt(5),1/sqrt(5),0] ≈ [0,8944,0,4472,0]."
            },
            {
              "title": "IDF pentru termen prezent în toate documentele",
              "description": "Cu smooth_idf=True, pentru un termen prezent în toate cele 6 documente, cât este IDF?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "1",
                "0",
                "6",
                "ln(6)"
              ],
              "answerIndex": 0,
              "hint": "Înlocuiește N=6 și DF=6 în formulă.",
              "explanation": "ln(7/7)+1 = 1."
            },
            {
              "title": "Experiment sublinear_tf",
              "description": "Compară 1+ln(tf) cu tf pentru frecvențele [1,2,10,100]. În ce context crezi că este util?",
              "level": "Mediu",
              "type": "open",
              "hint": "Funcția logaritm crește mai lent decât funcția liniară.",
              "solutionCode": "from math import log\nfor tf in [1, 2, 10, 100]:\n    print(tf, round(1+log(tf),3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">math</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">log</span>\n<span class=\"k\">for</span> <span class=\"n\">tf</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">10</span><span class=\"p\">,</span> <span class=\"mi\">100</span><span class=\"p\">]:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">tf</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"o\">+</span><span class=\"n\">log</span><span class=\"p\">(</span><span class=\"n\">tf</span><span class=\"p\">),</span><span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Filtrare cu min_df și max_df",
              "description": "Pe patru documente scurte, compară min_df=1, min_df=2, respectiv max_df=0.75. Scrie termenii eliminați.",
              "level": "Mediu",
              "type": "open",
              "hint": "min_df se referă la câte documente conțin termenul, nu de câte ori apare într-un singur text.",
              "solutionCode": "from sklearn.feature_extraction.text import CountVectorizer\ndocs = [\"model python date\", \"model python cod\", \"model date sport\", \"model date economie\"]\nfor cfg in [dict(min_df=1),dict(min_df=2),dict(max_df=0.75)]:\n    v=CountVectorizer(**cfg)\n    v.fit(docs)\n    print(cfg, v.get_feature_names_out().tolist())\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">CountVectorizer</span>\n<span class=\"n\">docs</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;model python date&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;model python cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;model date sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;model date economie&quot;</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">cfg</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"nb\">dict</span><span class=\"p\">(</span><span class=\"n\">min_df</span><span class=\"o\">=</span><span class=\"mi\">1</span><span class=\"p\">),</span><span class=\"nb\">dict</span><span class=\"p\">(</span><span class=\"n\">min_df</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">),</span><span class=\"nb\">dict</span><span class=\"p\">(</span><span class=\"n\">max_df</span><span class=\"o\">=</span><span class=\"mf\">0.75</span><span class=\"p\">)]:</span>\n    <span class=\"n\">v</span><span class=\"o\">=</span><span class=\"n\">CountVectorizer</span><span class=\"p\">(</span><span class=\"o\">**</span><span class=\"n\">cfg</span><span class=\"p\">)</span>\n    <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">docs</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">cfg</span><span class=\"p\">,</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">get_feature_names_out</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">tolist</span><span class=\"p\">())</span>\n</pre></div>\n"
            },
            {
              "title": "Caz de data leakage",
              "description": "Construiește un exemplu în care vectorizatorul este învățat din train+test și explică de ce este incorect. Rescrie varianta corectă.",
              "level": "Mediu",
              "type": "open",
              "hint": "Pe test se apelează transform, nu fit_transform.",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\ntrain = [\"python date\", \"model python\"]\ntest = [\"robotică python\"]\nv=TfidfVectorizer()\nX_train=v.fit_transform(train)\nX_test=v.transform(test)\nprint(X_train.shape, X_test.shape)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"n\">train</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;python date&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;model python&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">test</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;robotică python&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">v</span><span class=\"o\">=</span><span class=\"n\">TfidfVectorizer</span><span class=\"p\">()</span>\n<span class=\"n\">X_train</span><span class=\"o\">=</span><span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">train</span><span class=\"p\">)</span>\n<span class=\"n\">X_test</span><span class=\"o\">=</span><span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">transform</span><span class=\"p\">(</span><span class=\"n\">test</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">X_train</span><span class=\"o\">.</span><span class=\"n\">shape</span><span class=\"p\">,</span> <span class=\"n\">X_test</span><span class=\"o\">.</span><span class=\"n\">shape</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Structura CSR",
              "description": "Explică semnificația vectorilor data, indices și indptr pentru o matrice sparse construită cu CountVectorizer.",
              "level": "Mediu",
              "type": "open",
              "hint": "indptr are câte o poziție de început pentru fiecare rând, plus o poziție finală.",
              "solutionCode": "from sklearn.feature_extraction.text import CountVectorizer\nX=CountVectorizer().fit_transform([\"python cod\", \"cod sport\"])\nprint(\"data\", X.data)\nprint(\"indices\", X.indices)\nprint(\"indptr\", X.indptr)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">CountVectorizer</span>\n<span class=\"n\">X</span><span class=\"o\">=</span><span class=\"n\">CountVectorizer</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">([</span><span class=\"s2\">&quot;python cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;cod sport&quot;</span><span class=\"p\">])</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;data&quot;</span><span class=\"p\">,</span> <span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">data</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;indices&quot;</span><span class=\"p\">,</span> <span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">indices</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;indptr&quot;</span><span class=\"p\">,</span> <span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">indptr</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Căutare lexicală pe corpus",
              "description": "Construiește o funcție top_k(documente, interogare, k) care întoarce indicii primelor k documente după TF-IDF + cosine similarity.",
              "level": "Mediu",
              "type": "open",
              "hint": "Fă fit pe documente, apoi transform pe interogare. Sortează scorurile descrescător.",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\ndef top_k(documente, interogare, k=2):\n    v=TfidfVectorizer()\n    X=v.fit_transform(documente)\n    q=v.transform([interogare])\n    scoruri=cosine_similarity(q,X).ravel()\n    return scoruri.argsort()[::-1][:k].tolist()\nprint(top_k([\"python cod\", \"sport meci\", \"python date\"],\"python\"))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics.pairwise</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">cosine_similarity</span>\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">top_k</span><span class=\"p\">(</span><span class=\"n\">documente</span><span class=\"p\">,</span> <span class=\"n\">interogare</span><span class=\"p\">,</span> <span class=\"n\">k</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">):</span>\n    <span class=\"n\">v</span><span class=\"o\">=</span><span class=\"n\">TfidfVectorizer</span><span class=\"p\">()</span>\n    <span class=\"n\">X</span><span class=\"o\">=</span><span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">documente</span><span class=\"p\">)</span>\n    <span class=\"n\">q</span><span class=\"o\">=</span><span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">transform</span><span class=\"p\">([</span><span class=\"n\">interogare</span><span class=\"p\">])</span>\n    <span class=\"n\">scoruri</span><span class=\"o\">=</span><span class=\"n\">cosine_similarity</span><span class=\"p\">(</span><span class=\"n\">q</span><span class=\"p\">,</span><span class=\"n\">X</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">ravel</span><span class=\"p\">()</span>\n    <span class=\"k\">return</span> <span class=\"n\">scoruri</span><span class=\"o\">.</span><span class=\"n\">argsort</span><span class=\"p\">()[::</span><span class=\"o\">-</span><span class=\"mi\">1</span><span class=\"p\">][:</span><span class=\"n\">k</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">tolist</span><span class=\"p\">()</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">top_k</span><span class=\"p\">([</span><span class=\"s2\">&quot;python cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport meci&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;python date&quot;</span><span class=\"p\">],</span><span class=\"s2\">&quot;python&quot;</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Selectarea combinației",
              "description": "Pentru (a) știri tematice lungi, (b) recenzii cu „nu recomand”, (c) mesaje cu greșeli, propune câte un vectorizator și justifică alegerile.",
              "level": "Mediu",
              "type": "open",
              "hint": "Distinge caracteristici bazate pe cuvinte, bigrame și n-grame de caractere.",
              "solutionText": "(a) TF-IDF word (1,1) sau (1,2), cu filtrare după corpus; (b) TF-IDF (1,2) cu negațiile păstrate; (c) TF-IDF char_wb (3,5). Compară ipotezele prin validare."
            },
            {
              "title": "Clasificator end-to-end",
              "description": "Scrie un Pipeline cu TfidfVectorizer și LinearSVC; compară două valori pentru ngram_range prin cross-validation, fără a aplica fit pe întregul corpus.",
              "level": "Mediu",
              "type": "open",
              "hint": "Pipeline asigură antrenarea vectorizatorului separat pe fiecare fold.",
              "solutionCode": "from sklearn.pipeline import Pipeline\nfrom sklearn.svm import LinearSVC\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.model_selection import cross_val_score, StratifiedKFold\ntexte=[\"tenis sport\", \"fotbal sport\", \"meci tenis\", \"sport stadion\",\n       \"python cod\", \"date python\", \"algoritmi cod\", \"programare date\"]\net=[\"sport\"]*4+[\"tech\"]*4\nfor rng in [(1,1),(1,2)]:\n    model=Pipeline([(\"tfidf\",TfidfVectorizer(ngram_range=rng)),(\"clf\",LinearSVC())])\n    cv=StratifiedKFold(n_splits=2,shuffle=True,random_state=42)\n    scoruri=cross_val_score(model,texte,et,cv=cv,scoring=\"f1_macro\")\n    print(rng,scoruri.mean().round(3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.svm</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LinearSVC</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">cross_val_score</span><span class=\"p\">,</span> <span class=\"n\">StratifiedKFold</span>\n<span class=\"n\">texte</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"s2\">&quot;tenis sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;fotbal sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;meci tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport stadion&quot;</span><span class=\"p\">,</span>\n       <span class=\"s2\">&quot;python cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;date python&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;algoritmi cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;programare date&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">et</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"s2\">&quot;sport&quot;</span><span class=\"p\">]</span><span class=\"o\">*</span><span class=\"mi\">4</span><span class=\"o\">+</span><span class=\"p\">[</span><span class=\"s2\">&quot;tech&quot;</span><span class=\"p\">]</span><span class=\"o\">*</span><span class=\"mi\">4</span>\n<span class=\"k\">for</span> <span class=\"n\">rng</span> <span class=\"ow\">in</span> <span class=\"p\">[(</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">),(</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">)]:</span>\n    <span class=\"n\">model</span><span class=\"o\">=</span><span class=\"n\">Pipeline</span><span class=\"p\">([(</span><span class=\"s2\">&quot;tfidf&quot;</span><span class=\"p\">,</span><span class=\"n\">TfidfVectorizer</span><span class=\"p\">(</span><span class=\"n\">ngram_range</span><span class=\"o\">=</span><span class=\"n\">rng</span><span class=\"p\">)),(</span><span class=\"s2\">&quot;clf&quot;</span><span class=\"p\">,</span><span class=\"n\">LinearSVC</span><span class=\"p\">())])</span>\n    <span class=\"n\">cv</span><span class=\"o\">=</span><span class=\"n\">StratifiedKFold</span><span class=\"p\">(</span><span class=\"n\">n_splits</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"n\">shuffle</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">,</span><span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">42</span><span class=\"p\">)</span>\n    <span class=\"n\">scoruri</span><span class=\"o\">=</span><span class=\"n\">cross_val_score</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"p\">,</span><span class=\"n\">texte</span><span class=\"p\">,</span><span class=\"n\">et</span><span class=\"p\">,</span><span class=\"n\">cv</span><span class=\"o\">=</span><span class=\"n\">cv</span><span class=\"p\">,</span><span class=\"n\">scoring</span><span class=\"o\">=</span><span class=\"s2\">&quot;f1_macro&quot;</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">rng</span><span class=\"p\">,</span><span class=\"n\">scoruri</span><span class=\"o\">.</span><span class=\"n\">mean</span><span class=\"p\">()</span><span class=\"o\">.</span><span class=\"n\">round</span><span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            }
          ]
        },
        {
          "id": "nlp-similaritate",
          "number": "5.8",
          "title": "Similaritate cosinus și căutarea documentelor",
          "stage": "general",
          "summary": "Geometria vectorilor, TF-IDF, căutarea lexicală top-k, documente similare, aproape-duplicate și evaluarea rezultatelor.",
          "objectives": [
            "Să deduci similaritatea cosinus din produsul scalar și normele vectorilor și să calculezi exemple manual.",
            "Să construiești un index TF-IDF, să transformi interogările noi și să returnezi un clasament top-k.",
            "Să alegi vectorizarea adecvată pentru documente curate, texte scurte, greșeli de tastare și corpusuri mari.",
            "Să implementezi cosinusul și un motor de căutare de la zero, apoi cu scikit-learn.",
            "Să evaluezi rezultatele folosind Precision@k, Recall@k, MRR, AP și nDCG.",
            "Să recunoști limitele căutării lexicale și riscurile de evaluare pe date necontrolate."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Similaritate cosinus și căutare top-k",
              "src": "content/nlp-similaritate.html",
              "standalone": "content/nlp-similaritate-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator — șase experimente de căutare și similaritate",
              "src": "interactive/nlp-similaritate.html",
              "height": 920,
              "caption": "Geometrie, motor TF-IDF, parametri, vecini, deduplicare și evaluare. Explorează calculele și interpretează rezultatele."
            },
            {
              "type": "prose",
              "title": "Notebook Jupyter — de la vectori la motor de căutare",
              "html": "<div class=\"onia-nlp nlp-call\"><h2>Experimente complete în JupyterLab</h2><p>Notebookul are exemple Python independente pentru calcul manual, TF-IDF, top-k, modele de vecini și evaluare, cu explicații și probleme de explorare.</p><a href=\"notebooks/ONIA-NLP-Similaritate-Cosinus-Cautare.ipynb\" download>Descarcă notebookul .ipynb</a></div>"
            }
          ],
          "exercises": [
            {
              "title": "Cosinus pentru vectori perpendiculari",
              "description": "Pentru Q=(1,0) și A=(0,3), care este similaritatea cosinus?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "1",
                "0,5",
                "0",
                "3"
              ],
              "answerIndex": 2,
              "explanation": "Produsul scalar este 0, iar ambii vectori sunt nenuli. Prin urmare cosinusul este 0.",
              "hint": "Aplică definiția scorului și verifică interpretarea rezultatului."
            },
            {
              "title": "Invarianță la scalare pozitivă",
              "description": "Ce se întâmplă cu cosinusul dintre doi vectori nenuli dacă înmulțim unul dintre ei cu 10?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Se înmulțește cu 10",
                "Rămâne neschimbat",
                "Devine zero",
                "Depinde de numărul de termeni"
              ],
              "answerIndex": 1,
              "explanation": "Înmulțirea cu un scalar pozitiv schimbă norma, dar nu direcția vectorului.",
              "hint": "Aplică definiția scorului și verifică interpretarea rezultatului."
            },
            {
              "title": "Ce înseamnă cosinus 0,91?",
              "description": "Un document primește cosinus 0,91 față de interogare. Ce interpretare este corectă?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Are probabilitate 91% să fie corect",
                "Este mai apropiat geometric în reprezentarea folosită",
                "Are 91% dintre cuvinte comune",
                "Este garantat relevant"
              ],
              "answerIndex": 1,
              "explanation": "Cosinusul este un scor geometric, nu o probabilitate și nici procentul termenilor comuni.",
              "hint": "Aplică definiția scorului și verifică interpretarea rezultatului."
            },
            {
              "title": "Vocabularul unei interogări",
              "description": "Cum vectorizăm corect o interogare nouă după ce am construit un index TF-IDF?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "fit_transform pe interogare",
                "fit pe interogare și transform pe corpus",
                "transform cu vectorizer-ul învățat pe corpus",
                "Reconstruim vocabularul după fiecare căutare"
              ],
              "answerIndex": 2,
              "explanation": "Vocabularul și IDF provin din corpus; query-ul folosește transform pentru a păstra coordonatele.",
              "hint": "Aplică definiția scorului și verifică interpretarea rezultatului."
            },
            {
              "title": "Când linear_kernel este cosinus",
              "description": "În ce condiție linear_kernel(q,X) este echivalent cu cosine_similarity(q,X)?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Oricând folosim CountVectorizer",
                "Când rândurile ambelor intrări sunt normalizate L2",
                "Când avem sub 100 de documente",
                "Când folosim min_df=1"
              ],
              "answerIndex": 1,
              "explanation": "Pentru vectori de normă L2 egală cu 1, produsul scalar este cosinusul unghiului.",
              "hint": "Aplică definiția scorului și verifică interpretarea rezultatului."
            },
            {
              "title": "Distanța NearestNeighbors",
              "description": "NearestNeighbors(metric=\"cosine\") întoarce distanța 0,3. Similaritatea corespunzătoare este:",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "0,3",
                "1,3",
                "0,7",
                "−0,3"
              ],
              "answerIndex": 2,
              "explanation": "Distanța cosinus este 1 − similaritatea cosinus; scorul este 0,7.",
              "hint": "Aplică definiția scorului și verifică interpretarea rezultatului."
            },
            {
              "title": "Precision@3",
              "description": "În primele trei rezultate sunt două documente relevante. Care este Precision@3?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "2/3",
                "1/3",
                "2",
                "Depinde de numărul total de documente relevante"
              ],
              "answerIndex": 0,
              "explanation": "Precision@3 = 2 rezultate relevante din 3 afișate = 0,667. Recall depinde de numărul total de relevante.",
              "hint": "Aplică definiția scorului și verifică interpretarea rezultatului."
            },
            {
              "title": "O interogare cu termeni necunoscuți",
              "description": "Ce trebuie să facem când vectorul TF-IDF al interogării este nul?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Împărțim la zero",
                "Afișăm primul document ca fiind sigur relevant",
                "Raportăm absența potrivirilor lexicale și tratăm explicit scorul 0",
                "Aplicăm fit_transform pe interogare"
              ],
              "answerIndex": 2,
              "explanation": "Cosinusul matematic este nedefinit pentru vector nul; un sistem operațional poate folosi scor 0 și un mesaj explicit.",
              "hint": "Aplică definiția scorului și verifică interpretarea rezultatului."
            },
            {
              "title": "Cosinus from scratch",
              "description": "Implementează cosinus(a,b) fără NumPy. Tratează vectorii nuli și dimensiunile diferite, apoi calculează scorul pentru [1,2] și [2,1].",
              "level": "Mediu",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionCode": "import math\n\ndef cosinus(a, b):\n    if len(a) != len(b):\n        raise ValueError(\"Dimensiuni diferite\")\n    p = sum(x*y for x, y in zip(a, b))\n    na = math.sqrt(sum(x*x for x in a))\n    nb = math.sqrt(sum(y*y for y in b))\n    return p/(na*nb) if na and nb else 0.0\n\nprint(round(cosinus([1, 2], [2, 1]), 3))\n",
              "solutionText": "Produsul scalar este 4, normele sunt ambele √5, deci cosinusul este 4/5 = 0,8. Pentru vectori nuli folosim convenția operațională 0.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">math</span>\n\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">cosinus</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span><span class=\"p\">):</span>\n    <span class=\"k\">if</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">)</span> <span class=\"o\">!=</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">b</span><span class=\"p\">):</span>\n        <span class=\"k\">raise</span> <span class=\"ne\">ValueError</span><span class=\"p\">(</span><span class=\"s2\">&quot;Dimensiuni diferite&quot;</span><span class=\"p\">)</span>\n    <span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"o\">*</span><span class=\"n\">y</span> <span class=\"k\">for</span> <span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span><span class=\"p\">))</span>\n    <span class=\"n\">na</span> <span class=\"o\">=</span> <span class=\"n\">math</span><span class=\"o\">.</span><span class=\"n\">sqrt</span><span class=\"p\">(</span><span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"o\">*</span><span class=\"n\">x</span> <span class=\"k\">for</span> <span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">a</span><span class=\"p\">))</span>\n    <span class=\"n\">nb</span> <span class=\"o\">=</span> <span class=\"n\">math</span><span class=\"o\">.</span><span class=\"n\">sqrt</span><span class=\"p\">(</span><span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">y</span><span class=\"o\">*</span><span class=\"n\">y</span> <span class=\"k\">for</span> <span class=\"n\">y</span> <span class=\"ow\">in</span> <span class=\"n\">b</span><span class=\"p\">))</span>\n    <span class=\"k\">return</span> <span class=\"n\">p</span><span class=\"o\">/</span><span class=\"p\">(</span><span class=\"n\">na</span><span class=\"o\">*</span><span class=\"n\">nb</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">na</span> <span class=\"ow\">and</span> <span class=\"n\">nb</span> <span class=\"k\">else</span> <span class=\"mf\">0.0</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">cosinus</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]),</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Motor BoW minimal",
              "description": "Construiește un vocabular comun, vectorizează trei documente și interogarea și compară-le inițial prin produs scalar. Explică de ce scorul poate fi influențat de lungimea documentului.",
              "level": "Mediu",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionCode": "documente = [\"python date\", \"sport tenis\", \"modele python date\"]\ninterogare = \"python date\"\n\nvocab = sorted({t for d in documente for t in d.split()})\n\ndef bow(text):\n    tok = text.split()\n    return [tok.count(w) for w in vocab]\n\nq = bow(interogare)\nfor i, doc in enumerate(documente):\n    d = bow(doc)\n    produs = sum(a*b for a,b in zip(q,d))\n    print(i, doc, produs)\n",
              "solutionText": "Produsul scalar ne-normalizat crește cu numărul aparițiilor; cosinusul corectează dependența de normă.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">documente</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;python date&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;modele python date&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">interogare</span> <span class=\"o\">=</span> <span class=\"s2\">&quot;python date&quot;</span>\n\n<span class=\"n\">vocab</span> <span class=\"o\">=</span> <span class=\"nb\">sorted</span><span class=\"p\">({</span><span class=\"n\">t</span> <span class=\"k\">for</span> <span class=\"n\">d</span> <span class=\"ow\">in</span> <span class=\"n\">documente</span> <span class=\"k\">for</span> <span class=\"n\">t</span> <span class=\"ow\">in</span> <span class=\"n\">d</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()})</span>\n\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">bow</span><span class=\"p\">(</span><span class=\"n\">text</span><span class=\"p\">):</span>\n    <span class=\"n\">tok</span> <span class=\"o\">=</span> <span class=\"n\">text</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">()</span>\n    <span class=\"k\">return</span> <span class=\"p\">[</span><span class=\"n\">tok</span><span class=\"o\">.</span><span class=\"n\">count</span><span class=\"p\">(</span><span class=\"n\">w</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">w</span> <span class=\"ow\">in</span> <span class=\"n\">vocab</span><span class=\"p\">]</span>\n\n<span class=\"n\">q</span> <span class=\"o\">=</span> <span class=\"n\">bow</span><span class=\"p\">(</span><span class=\"n\">interogare</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"n\">doc</span> <span class=\"ow\">in</span> <span class=\"nb\">enumerate</span><span class=\"p\">(</span><span class=\"n\">documente</span><span class=\"p\">):</span>\n    <span class=\"n\">d</span> <span class=\"o\">=</span> <span class=\"n\">bow</span><span class=\"p\">(</span><span class=\"n\">doc</span><span class=\"p\">)</span>\n    <span class=\"n\">produs</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"o\">*</span><span class=\"n\">b</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">q</span><span class=\"p\">,</span><span class=\"n\">d</span><span class=\"p\">))</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"n\">doc</span><span class=\"p\">,</span> <span class=\"n\">produs</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Căutare top-k fără leakage",
              "description": "Realizează un index TF-IDF pentru trei texte, apoi un query nou. Sortează rezultatele descrescător și explică de ce query-ul se transformă cu transform, fără fit.",
              "level": "Mediu",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\n\ncorpus = [\"python date\", \"sport tenis\", \"modele python date\"]\nv = TfidfVectorizer()\nX = v.fit_transform(corpus)\nq = v.transform([\"python date\"])\ns = cosine_similarity(q, X).ravel()\nfor i in sorted(range(len(corpus)), key=lambda i: (-s[i], i)):\n    print(i, round(float(s[i]), 3), corpus[i])\n",
              "solutionText": "fit_transform aparține indexării; transform se aplică fiecărei interogări noi, fără reconstruirea vocabularului.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics.pairwise</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">cosine_similarity</span>\n\n<span class=\"n\">corpus</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;python date&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;modele python date&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">v</span> <span class=\"o\">=</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">()</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">corpus</span><span class=\"p\">)</span>\n<span class=\"n\">q</span> <span class=\"o\">=</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">transform</span><span class=\"p\">([</span><span class=\"s2\">&quot;python date&quot;</span><span class=\"p\">])</span>\n<span class=\"n\">s</span> <span class=\"o\">=</span> <span class=\"n\">cosine_similarity</span><span class=\"p\">(</span><span class=\"n\">q</span><span class=\"p\">,</span> <span class=\"n\">X</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">ravel</span><span class=\"p\">()</span>\n<span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">sorted</span><span class=\"p\">(</span><span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">corpus</span><span class=\"p\">)),</span> <span class=\"n\">key</span><span class=\"o\">=</span><span class=\"k\">lambda</span> <span class=\"n\">i</span><span class=\"p\">:</span> <span class=\"p\">(</span><span class=\"o\">-</span><span class=\"n\">s</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">],</span> <span class=\"n\">i</span><span class=\"p\">)):</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"n\">s</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]),</span> <span class=\"mi\">3</span><span class=\"p\">),</span> <span class=\"n\">corpus</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "Greșeli de tastare și char n-grame",
              "description": "Compară două configurații TF-IDF pentru mesaje cu greșeli ortografice. Explică avantajul și dezavantajul folosirii de n-grame de caractere.",
              "level": "Mediu",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\n\ncorpus = [\"programare python\", \"programrae python\", \"fotbal sport\"]\nfor analyzer, ngram_range in [(\"word\", (1, 2)), (\"char_wb\", (3, 5))]:\n    v = TfidfVectorizer(analyzer=analyzer, ngram_range=ngram_range)\n    X = v.fit_transform(corpus)\n    print(analyzer, cosine_similarity(v.transform([\"programare\"]), X).round(3))\n",
              "solutionText": "N-gramele de caractere pot recupera apropieri lexicale în prezența greșelilor, dar pot aproxima și cuvinte fără legătură semantică.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics.pairwise</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">cosine_similarity</span>\n\n<span class=\"n\">corpus</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;programare python&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;programrae python&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;fotbal sport&quot;</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">analyzer</span><span class=\"p\">,</span> <span class=\"n\">ngram_range</span> <span class=\"ow\">in</span> <span class=\"p\">[(</span><span class=\"s2\">&quot;word&quot;</span><span class=\"p\">,</span> <span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">)),</span> <span class=\"p\">(</span><span class=\"s2\">&quot;char_wb&quot;</span><span class=\"p\">,</span> <span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">))]:</span>\n    <span class=\"n\">v</span> <span class=\"o\">=</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">(</span><span class=\"n\">analyzer</span><span class=\"o\">=</span><span class=\"n\">analyzer</span><span class=\"p\">,</span> <span class=\"n\">ngram_range</span><span class=\"o\">=</span><span class=\"n\">ngram_range</span><span class=\"p\">)</span>\n    <span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">corpus</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">analyzer</span><span class=\"p\">,</span> <span class=\"n\">cosine_similarity</span><span class=\"p\">(</span><span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">transform</span><span class=\"p\">([</span><span class=\"s2\">&quot;programare&quot;</span><span class=\"p\">]),</span> <span class=\"n\">X</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">round</span><span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Identificarea perechilor aproape-duplicate",
              "description": "Compară perechile de texte cu n-grame de caractere și afișează perechile cu cosinus de cel puțin 0,6. Discută dacă toate perechile sunt neapărat duplicate.",
              "level": "Dificil",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\n\ncorpus = [\"python numpy\", \"python numpy tutorial\", \"sport tenis\"]\nv = TfidfVectorizer(analyzer=\"char_wb\", ngram_range=(3, 5))\nX = v.fit_transform(corpus)\nS = cosine_similarity(X)\nfor i in range(len(corpus)):\n    for j in range(i + 1, len(corpus)):\n        if S[i, j] >= 0.6:\n            print(i, j, round(S[i,j], 3))\n",
              "solutionText": "Un prag numeric propune perechi candidate; confirmarea necesită adnotări și analiza manuală a documentelor.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics.pairwise</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">cosine_similarity</span>\n\n<span class=\"n\">corpus</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;python numpy&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;python numpy tutorial&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport tenis&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">v</span> <span class=\"o\">=</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">(</span><span class=\"n\">analyzer</span><span class=\"o\">=</span><span class=\"s2\">&quot;char_wb&quot;</span><span class=\"p\">,</span> <span class=\"n\">ngram_range</span><span class=\"o\">=</span><span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">))</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">corpus</span><span class=\"p\">)</span>\n<span class=\"n\">S</span> <span class=\"o\">=</span> <span class=\"n\">cosine_similarity</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">corpus</span><span class=\"p\">)):</span>\n    <span class=\"k\">for</span> <span class=\"n\">j</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"n\">i</span> <span class=\"o\">+</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">corpus</span><span class=\"p\">)):</span>\n        <span class=\"k\">if</span> <span class=\"n\">S</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"n\">j</span><span class=\"p\">]</span> <span class=\"o\">&gt;=</span> <span class=\"mf\">0.6</span><span class=\"p\">:</span>\n            <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"n\">j</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">S</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">,</span><span class=\"n\">j</span><span class=\"p\">],</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Evaluarea top-k",
              "description": "Construiește funcțiile precision_at_k și recall_at_k. Pentru ranking=[1,2,4,3,0] și relevante={1,3,5}, calculează rezultatele la k=3 și interpretează.",
              "level": "Mediu",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionCode": "def precision_at_k(ranking, relevant, k):\n    return sum(x in relevant for x in ranking[:k]) / k\n\ndef recall_at_k(ranking, relevant, k):\n    return sum(x in relevant for x in ranking[:k]) / len(relevant) if relevant else 0.0\n\nranking = [1, 2, 4, 3, 0]\nrelevant = {1, 3, 5}\nprint(precision_at_k(ranking, relevant, 3))\nprint(recall_at_k(ranking, relevant, 3))\n",
              "solutionText": "În primele trei rezultate, numai 1 este relevant: Precision@3=1/3 și Recall@3=1/3.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">precision_at_k</span><span class=\"p\">(</span><span class=\"n\">ranking</span><span class=\"p\">,</span> <span class=\"n\">relevant</span><span class=\"p\">,</span> <span class=\"n\">k</span><span class=\"p\">):</span>\n    <span class=\"k\">return</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">relevant</span> <span class=\"k\">for</span> <span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">ranking</span><span class=\"p\">[:</span><span class=\"n\">k</span><span class=\"p\">])</span> <span class=\"o\">/</span> <span class=\"n\">k</span>\n\n<span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">recall_at_k</span><span class=\"p\">(</span><span class=\"n\">ranking</span><span class=\"p\">,</span> <span class=\"n\">relevant</span><span class=\"p\">,</span> <span class=\"n\">k</span><span class=\"p\">):</span>\n    <span class=\"k\">return</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">relevant</span> <span class=\"k\">for</span> <span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">ranking</span><span class=\"p\">[:</span><span class=\"n\">k</span><span class=\"p\">])</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">relevant</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">relevant</span> <span class=\"k\">else</span> <span class=\"mf\">0.0</span>\n\n<span class=\"n\">ranking</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]</span>\n<span class=\"n\">relevant</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">}</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">precision_at_k</span><span class=\"p\">(</span><span class=\"n\">ranking</span><span class=\"p\">,</span> <span class=\"n\">relevant</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">recall_at_k</span><span class=\"p\">(</span><span class=\"n\">ranking</span><span class=\"p\">,</span> <span class=\"n\">relevant</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Mean Reciprocal Rank",
              "description": "Implementează MRR pentru mai multe interogări. Verifică și cazul în care niciun document relevant nu este returnat.",
              "level": "Mediu",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionCode": "def reciprocal_rank(ranking, relevant):\n    for pozitie, doc_id in enumerate(ranking, start=1):\n        if doc_id in relevant:\n            return 1.0 / pozitie\n    return 0.0\n\nqueries = [([5, 1, 3], {1, 3}), ([4, 2, 0], {7}), ([2, 1, 0], {2})]\nrr = [reciprocal_rank(r, gold) for r, gold in queries]\nprint(rr)\nprint(\"MRR:\", sum(rr) / len(rr))\n",
              "solutionText": "Reciprocal Rank este 0 dacă nu se găsește niciun document relevant. MRR este media acestor valori pe interogări.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">reciprocal_rank</span><span class=\"p\">(</span><span class=\"n\">ranking</span><span class=\"p\">,</span> <span class=\"n\">relevant</span><span class=\"p\">):</span>\n    <span class=\"k\">for</span> <span class=\"n\">pozitie</span><span class=\"p\">,</span> <span class=\"n\">doc_id</span> <span class=\"ow\">in</span> <span class=\"nb\">enumerate</span><span class=\"p\">(</span><span class=\"n\">ranking</span><span class=\"p\">,</span> <span class=\"n\">start</span><span class=\"o\">=</span><span class=\"mi\">1</span><span class=\"p\">):</span>\n        <span class=\"k\">if</span> <span class=\"n\">doc_id</span> <span class=\"ow\">in</span> <span class=\"n\">relevant</span><span class=\"p\">:</span>\n            <span class=\"k\">return</span> <span class=\"mf\">1.0</span> <span class=\"o\">/</span> <span class=\"n\">pozitie</span>\n    <span class=\"k\">return</span> <span class=\"mf\">0.0</span>\n\n<span class=\"n\">queries</span> <span class=\"o\">=</span> <span class=\"p\">[([</span><span class=\"mi\">5</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">],</span> <span class=\"p\">{</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">}),</span> <span class=\"p\">([</span><span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">{</span><span class=\"mi\">7</span><span class=\"p\">}),</span> <span class=\"p\">([</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">{</span><span class=\"mi\">2</span><span class=\"p\">})]</span>\n<span class=\"n\">rr</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"n\">reciprocal_rank</span><span class=\"p\">(</span><span class=\"n\">r</span><span class=\"p\">,</span> <span class=\"n\">gold</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">r</span><span class=\"p\">,</span> <span class=\"n\">gold</span> <span class=\"ow\">in</span> <span class=\"n\">queries</span><span class=\"p\">]</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">rr</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;MRR:&quot;</span><span class=\"p\">,</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">rr</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">rr</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Recomandări fără self-match",
              "description": "Construiește matricea de similaritate dintre documente și afișează vecinii, excluzând documentul însuși. De ce este important?",
              "level": "Mediu",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import linear_kernel\n\ntexte = [\"regresie logistică\", \"regresie liniară\", \"clustering kmeans\"]\nX = TfidfVectorizer(norm=\"l2\").fit_transform(texte)\nS = linear_kernel(X, X)\nfor i in range(len(texte)):\n    vecini = [j for j in range(len(texte)) if j != i]\n    print(i, sorted(vecini, key=lambda j: -S[i,j]))\n",
              "solutionText": "Diagonală 1 (dacă vectorii sunt nenuli); documentul însuși trebuie exclus pentru a evita recomandări triviale.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics.pairwise</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">linear_kernel</span>\n\n<span class=\"n\">texte</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;regresie logistică&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;regresie liniară&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;clustering kmeans&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">(</span><span class=\"n\">norm</span><span class=\"o\">=</span><span class=\"s2\">&quot;l2&quot;</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">texte</span><span class=\"p\">)</span>\n<span class=\"n\">S</span> <span class=\"o\">=</span> <span class=\"n\">linear_kernel</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">X</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">texte</span><span class=\"p\">)):</span>\n    <span class=\"n\">vecini</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"n\">j</span> <span class=\"k\">for</span> <span class=\"n\">j</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">texte</span><span class=\"p\">))</span> <span class=\"k\">if</span> <span class=\"n\">j</span> <span class=\"o\">!=</span> <span class=\"n\">i</span><span class=\"p\">]</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"nb\">sorted</span><span class=\"p\">(</span><span class=\"n\">vecini</span><span class=\"p\">,</span> <span class=\"n\">key</span><span class=\"o\">=</span><span class=\"k\">lambda</span> <span class=\"n\">j</span><span class=\"p\">:</span> <span class=\"o\">-</span><span class=\"n\">S</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">,</span><span class=\"n\">j</span><span class=\"p\">]))</span>\n</pre></div>\n"
            },
            {
              "title": "NearestNeighbors versus cosine_similarity",
              "description": "Folosește NearestNeighbors(metric=\"cosine\"); convertește distanțele în similitudini și compară cu cosine_similarity.",
              "level": "Dificil",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.neighbors import NearestNeighbors\n\ncorpus = [\"python numpy\", \"sport tenis\", \"date python\"]\nv = TfidfVectorizer()\nX = v.fit_transform(corpus)\nmodel = NearestNeighbors(n_neighbors=2, metric=\"cosine\", algorithm=\"brute\")\nmodel.fit(X)\ndist, ind = model.kneighbors(v.transform([\"python date\"]))\nfor d, i in zip(dist[0], ind[0]):\n    print(i, round(1 - float(d), 3), corpus[i])\n",
              "solutionText": "Distanța cosinus 0,2 corespunde cosinusului 0,8. Pe TF-IDF sparse este potrivit să alegi algorithm=\"brute\".",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.neighbors</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">NearestNeighbors</span>\n\n<span class=\"n\">corpus</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;python numpy&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;date python&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">v</span> <span class=\"o\">=</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">()</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">corpus</span><span class=\"p\">)</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">NearestNeighbors</span><span class=\"p\">(</span><span class=\"n\">n_neighbors</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"n\">metric</span><span class=\"o\">=</span><span class=\"s2\">&quot;cosine&quot;</span><span class=\"p\">,</span> <span class=\"n\">algorithm</span><span class=\"o\">=</span><span class=\"s2\">&quot;brute&quot;</span><span class=\"p\">)</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">)</span>\n<span class=\"n\">dist</span><span class=\"p\">,</span> <span class=\"n\">ind</span> <span class=\"o\">=</span> <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">kneighbors</span><span class=\"p\">(</span><span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">transform</span><span class=\"p\">([</span><span class=\"s2\">&quot;python date&quot;</span><span class=\"p\">]))</span>\n<span class=\"k\">for</span> <span class=\"n\">d</span><span class=\"p\">,</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">dist</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"n\">ind</span><span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">]):</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"mi\">1</span> <span class=\"o\">-</span> <span class=\"nb\">float</span><span class=\"p\">(</span><span class=\"n\">d</span><span class=\"p\">),</span> <span class=\"mi\">3</span><span class=\"p\">),</span> <span class=\"n\">corpus</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "Sublinear TF și termeni repetați",
              "description": "Compară sublinear_tf=False/True pentru un corpus cu frecvențe diferite ale aceluiași termen. Explică ce modifică și când este util.",
              "level": "Mediu",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\n\ncorpus = [\"python date date\", \"python algoritmi\", \"tenis sport\"]\nfor repetitii in (False, True):\n    v = TfidfVectorizer(sublinear_tf=repetitii)\n    X = v.fit_transform(corpus)\n    scoruri = cosine_similarity(v.transform([\"python date\"]), X).ravel()\n    print(repetitii, scoruri.round(3))\n",
              "solutionText": "Transformarea 1+ln(tf) reduce avantajul produs de repetarea excesivă a unui termen.",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics.pairwise</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">cosine_similarity</span>\n\n<span class=\"n\">corpus</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;python date date&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;python algoritmi&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tenis sport&quot;</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">repetitii</span> <span class=\"ow\">in</span> <span class=\"p\">(</span><span class=\"kc\">False</span><span class=\"p\">,</span> <span class=\"kc\">True</span><span class=\"p\">):</span>\n    <span class=\"n\">v</span> <span class=\"o\">=</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">(</span><span class=\"n\">sublinear_tf</span><span class=\"o\">=</span><span class=\"n\">repetitii</span><span class=\"p\">)</span>\n    <span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">corpus</span><span class=\"p\">)</span>\n    <span class=\"n\">scoruri</span> <span class=\"o\">=</span> <span class=\"n\">cosine_similarity</span><span class=\"p\">(</span><span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">transform</span><span class=\"p\">([</span><span class=\"s2\">&quot;python date&quot;</span><span class=\"p\">]),</span> <span class=\"n\">X</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">ravel</span><span class=\"p\">()</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">repetitii</span><span class=\"p\">,</span> <span class=\"n\">scoruri</span><span class=\"o\">.</span><span class=\"n\">round</span><span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Când este potrivit TF-IDF lexical?",
              "description": "Compară două cazuri: (A) căutarea unei funcții Python după numele exact; (B) căutarea după o parafrază semantică fără cuvinte comune. Ce ai alege în fiecare?",
              "level": "Mediu",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionText": "Pentru (A), un sistem lexical este foarte potrivit; pentru (B), căutarea semantică sau o soluție hibridă poate ajuta. Comparația se face cu relevanță adnotată."
            },
            {
              "title": "Prag de deduplicare validat",
              "description": "Descrie un experiment pentru alegerea unui prag de similaritate pentru aproape-duplicatele unor știri. Cum eviți să confunzi aceeași temă cu același document?",
              "level": "Dificil",
              "type": "open",
              "hint": "Identifică datele, calculează reprezentarea și verifică rezultatul pe un exemplu mic.",
              "solutionText": "Construim perechi etichetate duplicat/ne-duplicat, folosim un set de validare pentru prag și verificăm separat perechi cu aceeași temă, dar texte diferite."
            }
          ]
        },
        {
          "id": "nlp-nesupervizat",
          "number": "5.9",
          "title": "Clustering, topic modeling și anomalii în text",
          "stage": "general",
          "summary": "Gruparea textelor fără etichete, descoperirea temelor cu NMF/LDA, anomalii și legături cu problema ONIA #266, prin exemple Python și experimente interactive.",
          "objectives": [
            "Să explici diferențele dintre clustering, topic modeling, detectarea anomaliilor și clasificare.",
            "Să construiești pas cu pas K-Means și să interpretezi documentele din fiecare cluster.",
            "Să utilizezi TF-IDF, TruncatedSVD, NMF, LDA, IsolationForest și LOF în scikit-learn.",
            "Să evaluezi și să interpretezi rezultatele fără să confunzi clusterul cu o etichetă oficială.",
            "Să corelezi metodele nesupervizate cu problema ONIA #266 și cu validarea Macro-F1."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Clustering, topic modeling și anomalii în text",
              "src": "content/nlp-nesupervizat.html",
              "standalone": "content/nlp-nesupervizat-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — K-Means, teme, anomalii și ONIA #266",
              "src": "interactive/nlp-nesupervizat.html",
              "height": 860,
              "caption": "Cinci experimente autonome. Pentru vizualizare completă, folosește Deschide separat."
            },
            {
              "type": "html",
              "title": "Notebook de lucru — Clustering, topic modeling și anomalii",
              "src": "content/nlp-nesupervizat-notebook.html",
              "height": 700,
              "download": "notebooks/ONIA-NLP-Clustering-Topic-Anomalii.ipynb",
              "caption": "Exemple și experimente Python. Notebookul poate fi descărcat și rulat în JupyterLab."
            }
          ],
          "exercises": [
            {
              "title": "Clustering ≠ clasificare",
              "description": "Pe un set de enunțuri Codeforces, K-Means produce clusterele 0, 1, 2. Ce afirmi despre clusterul 1?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Reprezintă întotdeauna graphs",
                "Înseamnă orice clasă cu eticheta 1",
                "Este un identificator arbitrar al grupului de documente",
                "Este documentul cu scor maxim"
              ],
              "answerIndex": 2,
              "explanation": "K-Means nu a văzut etichetele. Clusterul poate avea mai multe clase.",
              "hint": "Analizează dacă algoritmul a primit etichete la antrenare."
            },
            {
              "title": "Atribuirea unui punct la un centroid",
              "description": "Avem P=(2,1), C0=(0,0), C1=(4,2). Unde ajunge P dacă egalitățile se rezolvă în favoarea centrului cu indicele mai mic?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "C0",
                "C1",
                "Niciunul",
                "Ambele simultan"
              ],
              "answerIndex": 0,
              "explanation": "d²(P,C0)=5 și d²(P,C1)=5; regula de egalitate alege C0.",
              "hintCode": "p = [2, 1]\ncentre = [[0, 0], [4, 2]]\nfor c in centre:\n    print(sum((a - b) ** 2 for a, b in zip(p, c)))\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">centre</span> <span class=\"o\">=</span> <span class=\"p\">[[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">]]</span>\n<span class=\"k\">for</span> <span class=\"n\">c</span> <span class=\"ow\">in</span> <span class=\"n\">centre</span><span class=\"p\">:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">a</span> <span class=\"o\">-</span> <span class=\"n\">b</span><span class=\"p\">)</span> <span class=\"o\">**</span> <span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">,</span> <span class=\"n\">c</span><span class=\"p\">)))</span>\n</pre></div>\n"
            },
            {
              "title": "Recacularea centroizilor după o iterație",
              "description": "Punctele (0,0), (0,2) sunt în clusterul 0, iar (4,4), (6,4) în clusterul 1. Calculează noile centre.",
              "level": "Ușor",
              "type": "open",
              "hint": "Centrul este media aritmetică a coordonatelor fiecărui grup.",
              "solutionCode": "centre = [[0, 0], [0, 2]], [[4, 4], [6, 4]]\nfor grup in centre:\n    print([sum(p[d] for p in grup) / len(grup) for d in range(2)])\n",
              "solutionText": "C0=(0,1), C1=(5,4).",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">centre</span> <span class=\"o\">=</span> <span class=\"p\">[[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">]],</span> <span class=\"p\">[[</span><span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">6</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">]]</span>\n<span class=\"k\">for</span> <span class=\"n\">grup</span> <span class=\"ow\">in</span> <span class=\"n\">centre</span><span class=\"p\">:</span>\n    <span class=\"nb\">print</span><span class=\"p\">([</span><span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">[</span><span class=\"n\">d</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">p</span> <span class=\"ow\">in</span> <span class=\"n\">grup</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">grup</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">d</span> <span class=\"ow\">in</span> <span class=\"nb\">range</span><span class=\"p\">(</span><span class=\"mi\">2</span><span class=\"p\">)])</span>\n</pre></div>\n"
            },
            {
              "title": "Scrie distanța euclidiană de la zero",
              "description": "Implementează o funcție care calculează pătratul distanței euclidiene pentru două liste numerice de aceeași lungime.",
              "level": "Ușor",
              "type": "open",
              "hint": "Pentru fiecare poziție i adună (a[i] - b[i])². Nu ai nevoie de sqrt pentru alegerea celui mai apropiat centru.",
              "solutionCode": "def distanta2(a, b):\n    return sum((x - y) ** 2 for x, y in zip(a, b))\n\nprint(distanta2([1, 2, 3], [4, 2, 1]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">distanta2</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span><span class=\"p\">):</span>\n    <span class=\"k\">return</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">x</span> <span class=\"o\">-</span> <span class=\"n\">y</span><span class=\"p\">)</span> <span class=\"o\">**</span> <span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span><span class=\"p\">))</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">distanta2</span><span class=\"p\">([</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]))</span>\n</pre></div>\n"
            },
            {
              "title": "Cu ce parametrizăm numărul de clustere?",
              "description": "Vrei să împarți 800 de recenzii în aproximativ 6 grupe tematice. Ce parametru KMeans controlează direct numărul grupelor?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "n_clusters",
                "n_init",
                "max_iter",
                "random_state"
              ],
              "answerIndex": 0,
              "explanation": "n_clusters stabilește numărul de centroizi; celelalte influențează inițializarea, oprirea și reproducibilitatea.",
              "hint": "Numărul de grupe este notat K."
            },
            {
              "title": "Consecința unui n_init prea mic",
              "description": "Explică de ce un K-Means cu n_init=1 poate produce clustere slabe și cum compari mai multe inițializări.",
              "level": "Mediu",
              "type": "open",
              "hint": "Optimizarea este neconvexă. Comparația trebuie să păstreze aceleași documente și aceeași vectorizare.",
              "solutionText": "Centrele inițiale pot conduce la minime locale diferite. n_init=10 repetă optimizarea și păstrează soluția cu inertia mai mică. Este util să inspectezi și stabilitatea semantică."
            },
            {
              "title": "De ce scade inerția când creștem K?",
              "description": "Explică de ce nu alegem automat valoarea maximă a lui K doar fiindcă produce inertia cea mai mică.",
              "level": "Mediu",
              "type": "open",
              "hint": "Mai multe centre pot potrivi mai bine datele de antrenare, dar grupurile pot deveni triviale.",
              "solutionText": "Inertia nu este o măsură a interpretabilității. Cu suficiente clustere, fiecare document poate avea propriul centru, reducând inertia fără a descoperi teme utile."
            },
            {
              "title": "Calculează Silhouette",
              "description": "Pentru un document avem distanța medie a=0,20 față de propriul grup și b=0,50 față de cel mai apropiat grup alternativ. Determină coeficientul silhouette.",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "0,30",
                "0,60",
                "1,50",
                "−0,60"
              ],
              "answerIndex": 1,
              "explanation": "s=(b−a)/max(a,b)=(0,5−0,2)/0,5=0,6.",
              "hint": "Folosește (b-a)/max(a,b), nu b-a."
            },
            {
              "title": "Interpretează un cluster de probleme",
              "description": "Un grup are termenii dominanți bfs, dfs, vertex, edge, path. Propune o temă probabilă și explică de ce nu poți garanta că toate documentele sunt din acea categorie.",
              "level": "Mediu",
              "type": "open",
              "hint": "O problemă de DP pe graf poate conține același vocabular.",
              "solutionText": "Tema probabilă este graphs, dar clusterul reflectă similaritatea lexicală. Eticheta cerută de ONIA #266 este categoria algoritmică dominantă și necesită validare supervizată."
            },
            {
              "title": "Ce folosim pentru dimensionalitate rară?",
              "description": "Ai 30.000 de caracteristici TF-IDF și vrei să reduci spațiul fără a transforma matricea sparse într-una densă centrată. Cu ce începi?",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "StandardScaler(with_mean=True) + PCA",
                "TruncatedSVD + Normalizer",
                "Eliminarea tuturor substantivelor",
                "Un cluster per termen"
              ],
              "answerIndex": 1,
              "explanation": "TruncatedSVD lucrează fără centrare și este folosit în LSA pe TF-IDF.",
              "hint": "Centrarea matricilor rare poate distruge economia de memorie."
            },
            {
              "title": "NMF ca produs de matrici",
              "description": "Avem 10 documente, 50 de termeni și dorim 4 teme. Care sunt dimensiunile lui W și H din aproximarea X≈WH?",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "W:10×4; H:4×50",
                "W:4×10; H:50×4",
                "W:10×50; H:50×10",
                "W:4×4; H:4×4"
              ],
              "answerIndex": 0,
              "explanation": "W codifică document–temă, H temă–termen.",
              "hint": "Dimensiunile interioare trebuie să coincidă cu numărul de teme."
            },
            {
              "title": "Comparație între NMF și LDA",
              "description": "Precizează o combinație uzuală de vectorizator și model pentru fiecare și o diferență de interpretare a ponderilor.",
              "level": "Mediu",
              "type": "open",
              "hint": "NMF este o factorizare nenegativă; LDA este probabilist.",
              "solutionText": "TF-IDF + NMF și CountVectorizer + LatentDirichletAllocation sunt puncte de plecare. Ponderile W din NMF nu trebuie să însumeze 1; distribuțiile document–temă LDA au sumă 1."
            },
            {
              "title": "Un document care combină două teme",
              "description": "Un enunț cere numărarea drumurilor într-un graf prin DP. Cum poate topic modeling să-l reprezinte altfel decât un clustering cu atribuire unică?",
              "level": "Mediu",
              "type": "open",
              "hint": "Un document poate primi ponderi nenule pentru mai multe teme.",
              "solutionText": "NMF/LDA pot aloca ponderi pentru teme „graphs” și „dp”, în loc să forțeze un singur cluster. Pentru ONIA #266 eticheta finală este tot una singură."
            },
            {
              "title": "IsolationForest: sensul scorului",
              "description": "Ce înseamnă un document cu valoare -score_samples mai mare într-un experiment care afișează scorul astfel?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "E sigur spam",
                "Este relativ mai atipic conform modelului",
                "Face parte din clasa graphs",
                "Este o probabilitate exactă de fraudă"
              ],
              "answerIndex": 1,
              "explanation": "Este o convenție de vizualizare a atipicității, nu o probabilitate de defect.",
              "hint": "Verifică semnul minus introdus în calculul scorului."
            },
            {
              "title": "LOF și n_neighbors",
              "description": "De ce o valoare diferită a lui n_neighbors schimbă ce documente sunt considerate atipice?",
              "level": "Mediu",
              "type": "open",
              "hint": "LOF compară densități în vecinătatea locală, iar scara locală este setată de numărul de vecini.",
              "solutionText": "Cu puțini vecini se observă anomalii foarte locale, cu mai mulți vecini comparația devine mai globală. Verifică stabilitatea și documentele semnalate."
            },
            {
              "title": "Nu șterge automat exemplele rare",
              "description": "Un model semnalează enunțuri în engleză foarte scurte ca anomalii într-un corpus lung. Ce verifici înainte de eliminare?",
              "level": "Mediu",
              "type": "open",
              "hint": "Caută explicații alternative: lungime, limbă, vocabular, formatul importului.",
              "solutionText": "Inspectăm documentele, distribuția lungimilor și caracteristicile, comparăm mai multe reprezentări și verificăm dacă documentele rare sunt totuși valide și utile."
            },
            {
              "title": "ONIA #266 — clasificare sau clustering?",
              "description": "În Legenda lui Algorel trebuie produsă o etichetă dintre dp/geometry/graphs/number theory/strings. Ce evaluăm oficial?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "WCSS",
                "Silhouette",
                "Macro-F1",
                "K-Means inertia"
              ],
              "answerIndex": 2,
              "explanation": "Cerința este clasificare supervizată; clusteringul este cel mult auxiliar.",
              "hint": "Scorul descris în enunț compară clasele prezise cu etichetele stabilite de experți."
            },
            {
              "title": "ONIA #266 — construiește textul de intrare",
              "description": "Combină title, description și statement dintr-un DataFrame într-o coloană text, tratând corect valorile lipsă.",
              "level": "Mediu",
              "type": "open",
              "hint": "Înlocuiește NaN cu șir gol înainte de concatenare.",
              "solutionCode": "import pandas as pd\n\ndf = pd.DataFrame({\"title\": [\"Graph\", None], \"description\": [\"Find path\", \"DP\"], \"statement\": [\"Given nodes\", \"States\"]})\ndf[\"text\"] = (\n    df[\"title\"].fillna(\"\") + \" \" +\n    df[\"description\"].fillna(\"\") + \" \" +\n    df[\"statement\"].fillna(\"\")\n).str.strip()\nprint(df[\"text\"])\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n\n<span class=\"n\">df</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span><span class=\"s2\">&quot;title&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;Graph&quot;</span><span class=\"p\">,</span> <span class=\"kc\">None</span><span class=\"p\">],</span> <span class=\"s2\">&quot;description&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;Find path&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;DP&quot;</span><span class=\"p\">],</span> <span class=\"s2\">&quot;statement&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"s2\">&quot;Given nodes&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;States&quot;</span><span class=\"p\">]})</span>\n<span class=\"n\">df</span><span class=\"p\">[</span><span class=\"s2\">&quot;text&quot;</span><span class=\"p\">]</span> <span class=\"o\">=</span> <span class=\"p\">(</span>\n    <span class=\"n\">df</span><span class=\"p\">[</span><span class=\"s2\">&quot;title&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">fillna</span><span class=\"p\">(</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"o\">+</span> <span class=\"s2\">&quot; &quot;</span> <span class=\"o\">+</span>\n    <span class=\"n\">df</span><span class=\"p\">[</span><span class=\"s2\">&quot;description&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">fillna</span><span class=\"p\">(</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"o\">+</span> <span class=\"s2\">&quot; &quot;</span> <span class=\"o\">+</span>\n    <span class=\"n\">df</span><span class=\"p\">[</span><span class=\"s2\">&quot;statement&quot;</span><span class=\"p\">]</span><span class=\"o\">.</span><span class=\"n\">fillna</span><span class=\"p\">(</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span>\n<span class=\"p\">)</span><span class=\"o\">.</span><span class=\"n\">str</span><span class=\"o\">.</span><span class=\"n\">strip</span><span class=\"p\">()</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">df</span><span class=\"p\">[</span><span class=\"s2\">&quot;text&quot;</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "ONIA #266 — compară baseline cu NMF",
              "description": "Propune un protocol care compară TF-IDF + LinearSVC cu TF-IDF + NMF + LogisticRegression fără leakage între train și validare.",
              "level": "Dificil",
              "type": "open",
              "hint": "Nu folosi transformări fit pe întregul set înainte de împărțire. Compară aceeași metrică, Macro-F1.",
              "solutionText": "Folosim Pipelines independente, antrenate doar pe foldurile train și comparate prin StratifiedKFold folosind scoring=\"f1_macro\". Datele și spliturile rămân identice; rezultatele se compară cu abaterea lor."
            },
            {
              "title": "Implementează calculul WCSS",
              "description": "Scrie o funcție care primește puncte 2D, centroizi și eticheta clusterului fiecărui punct și calculează suma distanțelor pătratice.",
              "level": "Dificil",
              "type": "open",
              "hintCode": "def dist2(a, b):\n    return sum((x - y) ** 2 for x, y in zip(a, b))\n",
              "solutionCode": "def wcss(puncte, centre, etichete):\n    total = 0\n    for punct, j in zip(puncte, etichete):\n        total += sum((x - y) ** 2 for x, y in zip(punct, centre[j]))\n    return total\n\nprint(wcss([[0, 0], [2, 0]], [[1, 0]], [0, 0]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">wcss</span><span class=\"p\">(</span><span class=\"n\">puncte</span><span class=\"p\">,</span> <span class=\"n\">centre</span><span class=\"p\">,</span> <span class=\"n\">etichete</span><span class=\"p\">):</span>\n    <span class=\"n\">total</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n    <span class=\"k\">for</span> <span class=\"n\">punct</span><span class=\"p\">,</span> <span class=\"n\">j</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">puncte</span><span class=\"p\">,</span> <span class=\"n\">etichete</span><span class=\"p\">):</span>\n        <span class=\"n\">total</span> <span class=\"o\">+=</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">x</span> <span class=\"o\">-</span> <span class=\"n\">y</span><span class=\"p\">)</span> <span class=\"o\">**</span> <span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">punct</span><span class=\"p\">,</span> <span class=\"n\">centre</span><span class=\"p\">[</span><span class=\"n\">j</span><span class=\"p\">]))</span>\n    <span class=\"k\">return</span> <span class=\"n\">total</span>\n\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">wcss</span><span class=\"p\">([[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]],</span> <span class=\"p\">[[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]],</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]))</span>\n</pre></div>\n",
              "hintCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">dist2</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span><span class=\"p\">):</span>\n    <span class=\"k\">return</span> <span class=\"nb\">sum</span><span class=\"p\">((</span><span class=\"n\">x</span> <span class=\"o\">-</span> <span class=\"n\">y</span><span class=\"p\">)</span> <span class=\"o\">**</span> <span class=\"mi\">2</span> <span class=\"k\">for</span> <span class=\"n\">x</span><span class=\"p\">,</span> <span class=\"n\">y</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">,</span> <span class=\"n\">b</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Când folosești MiniBatchKMeans",
              "description": "Ai 250.000 de documente. Explică de ce ai încerca MiniBatchKMeans înainte de optimizarea unui KMeans complet și ce compari ca să nu sacrifici calitatea.",
              "level": "Mediu",
              "type": "open",
              "hint": "Mini-loturile fac actualizări aproximative și pot reduce timpul.",
              "solutionText": "Comparam durata, distribuția clusterelor, interpretabilitatea termenilor, stabilitatea la inițializări și metrice pe o submulțime separată, nu doar inertia."
            }
          ]
        },
        {
          "id": "nlp-supervizat",
          "number": "5.10",
          "title": "Clasificare și regresie pe texte",
          "stage": "general",
          "summary": "Clasificare binară/multiclasă/multilabel și regresie din text; Naive Bayes, modele liniare, validare, interpretare și laborator interactiv.",
          "objectives": [
            "Problema: textul este intrarea, dar ce trebuie să prezicem?",
            "Patru variante de probleme pe texte: binar, multiclasă, multilabel, regresie",
            "Flux complet: de la documente la un model evaluabil",
            "Primul baseline: Bag-of-Words sau TF-IDF?",
            "Naive Bayes: cum poate clasifica un text din frecvențe?",
            "Implementare from scratch: învățăm Naive Bayes pas cu pas"
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Clasificare și regresie pe texte",
              "src": "content/nlp-supervizat.html",
              "standalone": "content/nlp-supervizat-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Clasificare și regresie pe texte",
              "src": "interactive/nlp-supervizat.html",
              "height": 820,
              "caption": "Demonstrații didactice ; implementările scikit-learn sunt explicate în exemplele Python."
            },
            {
              "type": "prose",
              "title": "Notebook Jupyter — exemple și exerciții 5.10",
              "html": "<div class=\"onia-nlp nlp-call\"><h2>Experimentează în JupyterLab</h2><p>Notebookul 5.10 are exemple independente, parametri explicați și seturi de date demonstrative.</p><a href=\"notebooks/ONIA-NLP-Clasificare-Regresie-Texte.ipynb\" download>Descarcă notebookul .ipynb</a></div>"
            }
          ],
          "exercises": [
            {
              "title": "Modelarea corectă a sarcinii",
              "description": "Un articol poate avea simultan etichetele „IA” și „educație”. Ce tip de problemă este?",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "Clasificare binară",
                "Clasificare multiclasă cu etichetă unică",
                "Clasificare multilabel",
                "Regresie"
              ],
              "answerIndex": 2,
              "hint": "Mai multe etichete pot fi simultan adevărate.",
              "explanation": "În multilabel, fiecare etichetă are propria variabilă binară."
            },
            {
              "title": "Ce nu este o probabilitate?",
              "description": "Ai folosit LinearSVC.decision_function. Ce reprezintă un scor 2,4?",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "Probabilitate 240%",
                "Distanță în metri",
                "Scor față de frontieră, nu probabilitate calibrată",
                "Frecvență TF-IDF"
              ],
              "answerIndex": 2,
              "hint": "LinearSVC nu furnizează implicit predict_proba.",
              "explanation": "Scorurile au semn și magnitudine, dar nu sunt probabilități."
            },
            {
              "title": "Efectul lui C",
              "description": "Într-un clasificator logistic regularizat, ce înseamnă C mai mic?",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "Regularizare mai puternică",
                "Mai multe clase",
                "Mai puține documente",
                "Fără bias"
              ],
              "answerIndex": 0,
              "hint": "C este invers legat de forța regularizării.",
              "explanation": "C mic penalizează mai puternic coeficienții mari."
            },
            {
              "title": "Smoothing Laplace",
              "description": "Într-o clasă apar 6 tokenuri, vocabularul are 4 termeni, un termen apare de două ori. Calculează P(termen|clasă) pentru alpha=1.",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "3/10",
                "2/6",
                "3/8",
                "1/10"
              ],
              "answerIndex": 0,
              "hint": "Numărătorul este 2+1, numitorul 6+4.",
              "explanation": "P=(2+1)/(6+4)=3/10."
            },
            {
              "title": "Regresie versus clasificare",
              "description": "Prezici dificultatea unui enunț ca număr real. Ce metrică este potrivită?",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "Macro-F1",
                "MAE",
                "Accuracy",
                "Precision"
              ],
              "answerIndex": 1,
              "hint": "Ținta este numerică.",
              "explanation": "MAE exprimă eroarea absolută medie pentru regresie."
            },
            {
              "title": "Data leakage",
              "description": "De ce nu facem fit_transform pe train+validation înainte de cross-validation?",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "Din cauza vitezei",
                "Pentru că vectorizatorul ar vedea informație din validare",
                "Pentru că tf-idf produce valori negative",
                "Pentru că algoritmul nu converge"
              ],
              "answerIndex": 1,
              "hint": "IDF și vocabularul se învață din date.",
              "explanation": "Transformările învățate din validare ar introduce scurgere de informație."
            },
            {
              "title": "Multiclasă și scor public",
              "description": "La un concurs cu cinci categorii și Macro-F1, ce merită verificat?",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "Doar accuracy totală",
                "Numai clasa cea mai frecventă",
                "F1 pentru fiecare clasă și distribuția erorilor",
                "Doar timpul de antrenare"
              ],
              "answerIndex": 2,
              "hint": "Macro-F1 mediază F1 pe clase.",
              "explanation": "Un model bun pe clasa dominantă poate fi slab pe cele rare."
            },
            {
              "title": "Bernoulli vs Multinomial",
              "description": "În ce situație merită testat BernoulliNB?",
              "level": "Mediu",
              "type": "mcq",
              "options": [
                "Când contează prezența/absența cuvântului",
                "Când avem doar caractere numerice negative",
                "Când ținta este un scor real",
                "Când vrem regresie ordinală"
              ],
              "answerIndex": 0,
              "hint": "Modelul folosește caracteristici binare.",
              "explanation": "BernoulliNB modelează ocurența binară, nu frecvența brută."
            },
            {
              "title": "NB de la zero",
              "description": "Implementează P(t|c) cu smoothing α=1 pentru un vocabular dat.",
              "level": "Dificil",
              "type": "open",
              "hint": "Începe de la un set mic pe care îl poți verifica manual.",
              "solutionText": "O implementare corectă este următoarea:",
              "solutionCode": "vocab = [\"sport\", \"cod\", \"tenis\"]\nnumarari = {\"sport\": 2, \"cod\": 0, \"tenis\": 1}\nalpha = 1.0\ntotal = sum(numarari.values())\nfor termen in vocab:\n    probabilitate = (numarari[termen] + alpha) / (total + alpha*len(vocab))\n    print(termen, round(probabilitate, 3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">vocab</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tenis&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">numarari</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"s2\">&quot;sport&quot;</span><span class=\"p\">:</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"s2\">&quot;cod&quot;</span><span class=\"p\">:</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tenis&quot;</span><span class=\"p\">:</span> <span class=\"mi\">1</span><span class=\"p\">}</span>\n<span class=\"n\">alpha</span> <span class=\"o\">=</span> <span class=\"mf\">1.0</span>\n<span class=\"n\">total</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">numarari</span><span class=\"o\">.</span><span class=\"n\">values</span><span class=\"p\">())</span>\n<span class=\"k\">for</span> <span class=\"n\">termen</span> <span class=\"ow\">in</span> <span class=\"n\">vocab</span><span class=\"p\">:</span>\n    <span class=\"n\">probabilitate</span> <span class=\"o\">=</span> <span class=\"p\">(</span><span class=\"n\">numarari</span><span class=\"p\">[</span><span class=\"n\">termen</span><span class=\"p\">]</span> <span class=\"o\">+</span> <span class=\"n\">alpha</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"p\">(</span><span class=\"n\">total</span> <span class=\"o\">+</span> <span class=\"n\">alpha</span><span class=\"o\">*</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">vocab</span><span class=\"p\">))</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">termen</span><span class=\"p\">,</span> <span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">probabilitate</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "F1 din predicții",
              "description": "Calculează precision, recall, F1 pentru o clasă rară.",
              "level": "Dificil",
              "type": "open",
              "hint": "Începe de la un set mic pe care îl poți verifica manual.",
              "solutionText": "O implementare corectă este următoarea:",
              "solutionCode": "real = [1,0,1,0,1,0,1,0]\npred = [1,1,0,0,1,0,0,0]\ntp = sum(a==1 and b==1 for a,b in zip(real,pred))\nfp = sum(a==0 and b==1 for a,b in zip(real,pred))\nfn = sum(a==1 and b==0 for a,b in zip(real,pred))\np = tp/(tp+fp) if tp+fp else 0\nr = tp/(tp+fn) if tp+fn else 0\nf1 = 2*p*r/(p+r) if p+r else 0\nprint(tp,fp,fn,round(f1,3))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"n\">real</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">]</span>\n<span class=\"n\">pred</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">]</span>\n<span class=\"n\">tp</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"o\">==</span><span class=\"mi\">1</span> <span class=\"ow\">and</span> <span class=\"n\">b</span><span class=\"o\">==</span><span class=\"mi\">1</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">pred</span><span class=\"p\">))</span>\n<span class=\"n\">fp</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"o\">==</span><span class=\"mi\">0</span> <span class=\"ow\">and</span> <span class=\"n\">b</span><span class=\"o\">==</span><span class=\"mi\">1</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">pred</span><span class=\"p\">))</span>\n<span class=\"n\">fn</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"o\">==</span><span class=\"mi\">1</span> <span class=\"ow\">and</span> <span class=\"n\">b</span><span class=\"o\">==</span><span class=\"mi\">0</span> <span class=\"k\">for</span> <span class=\"n\">a</span><span class=\"p\">,</span><span class=\"n\">b</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">real</span><span class=\"p\">,</span><span class=\"n\">pred</span><span class=\"p\">))</span>\n<span class=\"n\">p</span> <span class=\"o\">=</span> <span class=\"n\">tp</span><span class=\"o\">/</span><span class=\"p\">(</span><span class=\"n\">tp</span><span class=\"o\">+</span><span class=\"n\">fp</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">tp</span><span class=\"o\">+</span><span class=\"n\">fp</span> <span class=\"k\">else</span> <span class=\"mi\">0</span>\n<span class=\"n\">r</span> <span class=\"o\">=</span> <span class=\"n\">tp</span><span class=\"o\">/</span><span class=\"p\">(</span><span class=\"n\">tp</span><span class=\"o\">+</span><span class=\"n\">fn</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">tp</span><span class=\"o\">+</span><span class=\"n\">fn</span> <span class=\"k\">else</span> <span class=\"mi\">0</span>\n<span class=\"n\">f1</span> <span class=\"o\">=</span> <span class=\"mi\">2</span><span class=\"o\">*</span><span class=\"n\">p</span><span class=\"o\">*</span><span class=\"n\">r</span><span class=\"o\">/</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"o\">+</span><span class=\"n\">r</span><span class=\"p\">)</span> <span class=\"k\">if</span> <span class=\"n\">p</span><span class=\"o\">+</span><span class=\"n\">r</span> <span class=\"k\">else</span> <span class=\"mi\">0</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">tp</span><span class=\"p\">,</span><span class=\"n\">fp</span><span class=\"p\">,</span><span class=\"n\">fn</span><span class=\"p\">,</span><span class=\"nb\">round</span><span class=\"p\">(</span><span class=\"n\">f1</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "Compară modele pe același fold",
              "description": "Compară MultinomialNB și LinearSVC folosind același split train/validation.",
              "level": "Dificil",
              "type": "open",
              "hint": "Începe de la un set mic pe care îl poți verifica manual.",
              "solutionText": "O implementare corectă este următoarea:",
              "solutionCode": "from sklearn.pipeline import make_pipeline\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.naive_bayes import MultinomialNB\nfrom sklearn.svm import LinearSVC\nX = [\"sport meci\", \"fotbal sport\", \"tenis final\", \"python cod\", \"date python\", \"algoritm cod\"]\ny = [0,0,0,1,1,1]\nfor estimator in (MultinomialNB(alpha=1), LinearSVC(C=1)):\n    model = make_pipeline(TfidfVectorizer(), estimator)\n    model.fit(X, y)\n    print(type(estimator).__name__, model.predict([\"tenis meci\", \"cod python\"]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.naive_bayes</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">MultinomialNB</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.svm</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LinearSVC</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;sport meci&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;fotbal sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tenis final&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;python cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;date python&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;algoritm cod&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">estimator</span> <span class=\"ow\">in</span> <span class=\"p\">(</span><span class=\"n\">MultinomialNB</span><span class=\"p\">(</span><span class=\"n\">alpha</span><span class=\"o\">=</span><span class=\"mi\">1</span><span class=\"p\">),</span> <span class=\"n\">LinearSVC</span><span class=\"p\">(</span><span class=\"n\">C</span><span class=\"o\">=</span><span class=\"mi\">1</span><span class=\"p\">)):</span>\n    <span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">TfidfVectorizer</span><span class=\"p\">(),</span> <span class=\"n\">estimator</span><span class=\"p\">)</span>\n    <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">type</span><span class=\"p\">(</span><span class=\"n\">estimator</span><span class=\"p\">)</span><span class=\"o\">.</span><span class=\"vm\">__name__</span><span class=\"p\">,</span> <span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">([</span><span class=\"s2\">&quot;tenis meci&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;cod python&quot;</span><span class=\"p\">]))</span>\n</pre></div>"
            },
            {
              "title": "Regresia unui scor",
              "description": "Folosește Ridge și TfidfVectorizer pentru a prezice un scor numeric pe date demonstrative.",
              "level": "Dificil",
              "type": "open",
              "hint": "Începe de la un set mic pe care îl poți verifica manual.",
              "solutionText": "O implementare corectă este următoarea:",
              "solutionCode": "from sklearn.pipeline import make_pipeline\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import Ridge\nX = [\"text simplu\", \"cuvinte usoare\", \"algoritm complicat\", \"graf dinamic\"]\ny = [1.0, 1.5, 4.0, 4.5]\nm = make_pipeline(TfidfVectorizer(), Ridge(alpha=1.0))\nm.fit(X, y)\nprint(m.predict([\"graf complicat\"]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">make_pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Ridge</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;text simplu&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;cuvinte usoare&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;algoritm complicat&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;graf dinamic&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">1.0</span><span class=\"p\">,</span> <span class=\"mf\">1.5</span><span class=\"p\">,</span> <span class=\"mf\">4.0</span><span class=\"p\">,</span> <span class=\"mf\">4.5</span><span class=\"p\">]</span>\n<span class=\"n\">m</span> <span class=\"o\">=</span> <span class=\"n\">make_pipeline</span><span class=\"p\">(</span><span class=\"n\">TfidfVectorizer</span><span class=\"p\">(),</span> <span class=\"n\">Ridge</span><span class=\"p\">(</span><span class=\"n\">alpha</span><span class=\"o\">=</span><span class=\"mf\">1.0</span><span class=\"p\">))</span>\n<span class=\"n\">m</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">m</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">([</span><span class=\"s2\">&quot;graf complicat&quot;</span><span class=\"p\">]))</span>\n</pre></div>"
            },
            {
              "title": "Clasificare multilabel",
              "description": "Construiește două etichete independente și prezice ambele pentru un text.",
              "level": "Dificil",
              "type": "open",
              "hint": "Începe de la un set mic pe care îl poți verifica manual.",
              "solutionText": "O implementare corectă este următoarea:",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.multiclass import OneVsRestClassifier\nfrom sklearn.linear_model import LogisticRegression\nX = [\"sport tenis\", \"sport fotbal\", \"ai cod\", \"ai școală\", \"educație școală\", \"manual educație\"]\ny = [[1,0],[1,0],[0,0],[0,1],[0,1],[0,1]]\nv = TfidfVectorizer()\nm = OneVsRestClassifier(LogisticRegression(max_iter=1000))\nm.fit(v.fit_transform(X),y)\nprint(m.predict(v.transform([\"școală educație\"])))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.multiclass</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">OneVsRestClassifier</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LogisticRegression</span>\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;sport tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport fotbal&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ai cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;ai școală&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;educație școală&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;manual educație&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">],[</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">],[</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">0</span><span class=\"p\">],[</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">],[</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">],[</span><span class=\"mi\">0</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">]]</span>\n<span class=\"n\">v</span> <span class=\"o\">=</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">()</span>\n<span class=\"n\">m</span> <span class=\"o\">=</span> <span class=\"n\">OneVsRestClassifier</span><span class=\"p\">(</span><span class=\"n\">LogisticRegression</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">1000</span><span class=\"p\">))</span>\n<span class=\"n\">m</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">),</span><span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">m</span><span class=\"o\">.</span><span class=\"n\">predict</span><span class=\"p\">(</span><span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">transform</span><span class=\"p\">([</span><span class=\"s2\">&quot;școală educație&quot;</span><span class=\"p\">])))</span>\n</pre></div>"
            },
            {
              "title": "Validează formatul CSV",
              "description": "Scrie un fișier demonstrativ cu coloanele ID și clasă, păstrând ordinea observațiilor.",
              "level": "Dificil",
              "type": "open",
              "hint": "Începe de la un set mic pe care îl poți verifica manual.",
              "solutionText": "O implementare corectă este următoarea:",
              "solutionCode": "import csv\nids = [101, 103, 102]\npred = [\"graphs\", \"dp\", \"strings\"]\nwith open(\"rezultat_demo.csv\", \"w\", encoding=\"utf-8\", newline=\"\") as f:\n    writer = csv.writer(f)\n    writer.writerow([\"id\", \"label\"])\n    writer.writerows(zip(ids, pred))\nwith open(\"rezultat_demo.csv\", encoding=\"utf-8\", newline=\"\") as f:\n    print(list(csv.DictReader(f)))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">csv</span>\n<span class=\"n\">ids</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">101</span><span class=\"p\">,</span> <span class=\"mi\">103</span><span class=\"p\">,</span> <span class=\"mi\">102</span><span class=\"p\">]</span>\n<span class=\"n\">pred</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;graphs&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;dp&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;strings&quot;</span><span class=\"p\">]</span>\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;rezultat_demo.csv&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;w&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">,</span> <span class=\"n\">newline</span><span class=\"o\">=</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">f</span><span class=\"p\">:</span>\n    <span class=\"n\">writer</span> <span class=\"o\">=</span> <span class=\"n\">csv</span><span class=\"o\">.</span><span class=\"n\">writer</span><span class=\"p\">(</span><span class=\"n\">f</span><span class=\"p\">)</span>\n    <span class=\"n\">writer</span><span class=\"o\">.</span><span class=\"n\">writerow</span><span class=\"p\">([</span><span class=\"s2\">&quot;id&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;label&quot;</span><span class=\"p\">])</span>\n    <span class=\"n\">writer</span><span class=\"o\">.</span><span class=\"n\">writerows</span><span class=\"p\">(</span><span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">ids</span><span class=\"p\">,</span> <span class=\"n\">pred</span><span class=\"p\">))</span>\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;rezultat_demo.csv&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">,</span> <span class=\"n\">newline</span><span class=\"o\">=</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">f</span><span class=\"p\">:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">list</span><span class=\"p\">(</span><span class=\"n\">csv</span><span class=\"o\">.</span><span class=\"n\">DictReader</span><span class=\"p\">(</span><span class=\"n\">f</span><span class=\"p\">)))</span>\n</pre></div>"
            }
          ]
        },
        {
          "id": "nlp-evaluare",
          "number": "5.11",
          "title": "Evaluarea și îmbunătățirea modelelor NLP",
          "stage": "general",
          "summary": "Evaluare profesionistă a modelelor de text: Macro-F1 și alte metrici, cross-validation fără leakage, analiză de erori, tuning, praguri, regresie și submisie ONIA.",
          "objectives": [
            "Să calculezi manual precision, recall, F1 și Macro-F1 și să interpretezi matricea de confuzie multiclasă.",
            "Să alegi corect metricile pentru clasificare binară, multiclasă, multilabel, regresie și căutare.",
            "Să proiectezi o validare stratificată sau pe grupuri, fără scurgeri de informație în TF-IDF.",
            "Să compari modele prin Pipeline și GridSearchCV, analizând atât scorurile, cât și erorile.",
            "Să alegi praguri în mod valid și să verifici formatul submisiilor ONIA."
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Evaluarea și îmbunătățirea modelelor NLP",
              "src": "content/nlp-evaluare.html",
              "standalone": "content/nlp-evaluare-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator 5.11 — Macro-F1, validare și îmbunătățire",
              "src": "interactive/nlp-evaluare.html",
              "height": 900,
              "caption": "Opt experimente pe date demonstrative; antrenarea scikit-learn este prezentată separat în suport și notebook."
            },
            {
              "type": "prose",
              "title": "Experimente Python în JupyterLab",
              "html": "<div class=\"onia-nlp nlp-call\"><h2>Notebookul lecției 5.11</h2><p>20 de exemple Python autonome, într-un notebook cu 41 de celule: metrici, Pipeline, cross-validation, căutarea hiperparametrilor și analiza erorilor.</p><a href=\"notebooks/ONIA-NLP-Evaluare-Imbunatatire.ipynb\" download>Descarcă notebookul Jupyter (.ipynb)</a></div>"
            }
          ],
          "exercises": [
            {
              "title": "F1 din matricea de confuzie",
              "description": "Un filtru spam are TP=6, FP=3, FN=2 și TN=19. Care este F1 al clasei spam?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "0,750",
                "0,667",
                "aproximativ 0,706",
                "0,900"
              ],
              "answerIndex": 2,
              "hint": "Începe de la definiție și calculează pas cu pas.",
              "explanation": "F1 = 2TP/(2TP+FP+FN) = 12/(12+3+2) = 12/17 ≈ 0,706. TN nu apare explicit în formulă.",
              "solutionText": "F1 = 2TP/(2TP+FP+FN) = 12/(12+3+2) = 12/17 ≈ 0,706. TN nu apare explicit în formulă."
            },
            {
              "title": "Macro-F1 pe trei clase",
              "description": "Un clasificator are F1 pe clase: 0,90, 0,60 și 0,30. Care este Macro-F1?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "0,60",
                "0,90",
                "0,45",
                "0,75"
              ],
              "answerIndex": 0,
              "hint": "Începe de la definiție și calculează pas cu pas.",
              "explanation": "Macro-F1 = (0,90+0,60+0,30)/3 = 0,60. Nu este media armonică a celor trei valori.",
              "solutionText": "Macro-F1 = (0,90+0,60+0,30)/3 = 0,60. Nu este media armonică a celor trei valori."
            },
            {
              "title": "Accuracy înșelătoare",
              "description": "Într-un set cu 90 de documente de clasa A și 10 de clasa B, modelul prezice numai A. Ce afirmație este corectă?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Are Macro-F1 = 0,90",
                "Are recall pentru B egal cu 1",
                "Are accuracy 0,90 și F1 pentru B egal cu 0",
                "Are precision pentru B egal cu 0,90"
              ],
              "answerIndex": 2,
              "hint": "Începe de la definiție și calculează pas cu pas.",
              "explanation": "Modelul ghicește cele 90 exemple A, dar niciun B: accuracy 0,90; recall și F1 pentru B sunt 0.",
              "solutionText": "Modelul ghicește cele 90 exemple A, dar niciun B: accuracy 0,90; recall și F1 pentru B sunt 0."
            },
            {
              "title": "Micro-F1 versus accuracy",
              "description": "Într-o clasificare multiclasă cu exact o etichetă per document, toate clasele incluse, micro-F1 este egal cu:",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Macro-F1",
                "Accuracy",
                "Weighted-F1 în orice caz",
                "Recall-ul clasei majoritare"
              ],
              "answerIndex": 1,
              "hint": "Începe de la definiție și calculează pas cu pas.",
              "explanation": "În acest context numărul global de FP coincide cu numărul global de FN și micro-precision = micro-recall = accuracy.",
              "solutionText": "În acest context numărul global de FP coincide cu numărul global de FN și micro-precision = micro-recall = accuracy."
            },
            {
              "title": "Cum corectăm data leakage?",
              "description": "Când trebuie apelat `fit()` pentru TfidfVectorizer într-o validare pe folduri?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "O singură dată pe toate documentele",
                "Pe antrenarea fiecărui fold",
                "Pe toate documentele de validare",
                "Pe testul ascuns"
              ],
              "answerIndex": 1,
              "hint": "Începe de la definiție și calculează pas cu pas.",
              "explanation": "Vocabularul și IDF se învață numai din trainul foldului; `Pipeline` realizează automat această separare.",
              "solutionText": "Vocabularul și IDF se învață numai din trainul foldului; `Pipeline` realizează automat această separare."
            },
            {
              "title": "Folduri și grupuri",
              "description": "Același articol apare în mai multe versiuni aproape identice. Ce metodă reduce riscul trecerii copiilor în train și validation?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "StratifiedKFold fără grupuri",
                "GroupKFold cu ID-ul articolului original",
                "KFold cu orice random_state",
                "TF-IDF pe tot corpusul"
              ],
              "answerIndex": 1,
              "hint": "Începe de la definiție și calculează pas cu pas.",
              "explanation": "GroupKFold păstrează observațiile aceluiași grup într-un singur fold de test. Stratificarea simplă nu face asta.",
              "solutionText": "GroupKFold păstrează observațiile aceluiași grup într-un singur fold de test. Stratificarea simplă nu face asta."
            },
            {
              "title": "Precision și recall manual",
              "description": "Un clasificator de mesaje are TP=8, FP=2, FN=4, TN=36. Calculează precision, recall și F1.",
              "level": "Mediu",
              "type": "open",
              "hint": "Folosește numitorul TP+FP pentru precision și TP+FN pentru recall.",
              "solutionText": "Precision=8/10=0,8; Recall=8/12≈0,667; F1=16/(16+2+4)=16/22≈0,727. TN contribuie la accuracy, nu la F1 al clasei pozitive."
            },
            {
              "title": "Macro vs weighted: calcule reale",
              "description": "Două clase au F1(A)=0,90, F1(B)=0,50. Există 90 exemple A și 10 exemple B. Calculează Macro-F1 și Weighted-F1.",
              "level": "Mediu",
              "type": "open",
              "hint": "Pentru macro folosește ponderi egale; pentru weighted, proporția fiecărei clase în y_true.",
              "solutionText": "Macro-F1=(0,90+0,50)/2=0,70. Weighted-F1=0,90×0,90+0,10×0,50=0,86. Weighted-F1 este dominat de clasa mare."
            },
            {
              "title": "Macro-F1 de la zero",
              "description": "Scrie o funcție `macro_f1(reale, prezise, clase)` fără scikit-learn. Afișează rezultatul pentru trei clase.",
              "level": "Mediu",
              "type": "open",
              "hint": "Calculează TP, FP și FN separat pentru fiecare clasă, apoi fă media F1-urilor.",
              "solutionText": "Fiecare clasă este considerată succesiv pozitivă. Rezultatul este media aritmetică, nu F1 al mediilor.",
              "solutionCode": "def macro_f1(reale, prezise, clase):\n    scoruri = []\n    for c in clase:\n        tp = sum(y == c and p == c for y, p in zip(reale, prezise))\n        fp = sum(y != c and p == c for y, p in zip(reale, prezise))\n        fn = sum(y == c and p != c for y, p in zip(reale, prezise))\n        numitor = 2 * tp + fp + fn\n        scoruri.append(2 * tp / numitor if numitor else 0.0)\n    return sum(scoruri) / len(scoruri)\n\nreale = [0, 1, 2, 0, 1, 2]\nprezise = [0, 1, 1, 0, 2, 2]\nprint(macro_f1(reale, prezise, [0, 1, 2]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">macro_f1</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">,</span> <span class=\"n\">prezise</span><span class=\"p\">,</span> <span class=\"n\">clase</span><span class=\"p\">):</span>\n    <span class=\"n\">scoruri</span> <span class=\"o\">=</span> <span class=\"p\">[]</span>\n    <span class=\"k\">for</span> <span class=\"n\">c</span> <span class=\"ow\">in</span> <span class=\"n\">clase</span><span class=\"p\">:</span>\n        <span class=\"n\">tp</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">y</span> <span class=\"o\">==</span> <span class=\"n\">c</span> <span class=\"ow\">and</span> <span class=\"n\">p</span> <span class=\"o\">==</span> <span class=\"n\">c</span> <span class=\"k\">for</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">p</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">,</span> <span class=\"n\">prezise</span><span class=\"p\">))</span>\n        <span class=\"n\">fp</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">y</span> <span class=\"o\">!=</span> <span class=\"n\">c</span> <span class=\"ow\">and</span> <span class=\"n\">p</span> <span class=\"o\">==</span> <span class=\"n\">c</span> <span class=\"k\">for</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">p</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">,</span> <span class=\"n\">prezise</span><span class=\"p\">))</span>\n        <span class=\"n\">fn</span> <span class=\"o\">=</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">y</span> <span class=\"o\">==</span> <span class=\"n\">c</span> <span class=\"ow\">and</span> <span class=\"n\">p</span> <span class=\"o\">!=</span> <span class=\"n\">c</span> <span class=\"k\">for</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">p</span> <span class=\"ow\">in</span> <span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">,</span> <span class=\"n\">prezise</span><span class=\"p\">))</span>\n        <span class=\"n\">numitor</span> <span class=\"o\">=</span> <span class=\"mi\">2</span> <span class=\"o\">*</span> <span class=\"n\">tp</span> <span class=\"o\">+</span> <span class=\"n\">fp</span> <span class=\"o\">+</span> <span class=\"n\">fn</span>\n        <span class=\"n\">scoruri</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">(</span><span class=\"mi\">2</span> <span class=\"o\">*</span> <span class=\"n\">tp</span> <span class=\"o\">/</span> <span class=\"n\">numitor</span> <span class=\"k\">if</span> <span class=\"n\">numitor</span> <span class=\"k\">else</span> <span class=\"mf\">0.0</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"nb\">sum</span><span class=\"p\">(</span><span class=\"n\">scoruri</span><span class=\"p\">)</span> <span class=\"o\">/</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">scoruri</span><span class=\"p\">)</span>\n\n<span class=\"n\">reale</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">]</span>\n<span class=\"n\">prezise</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">]</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">macro_f1</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">,</span> <span class=\"n\">prezise</span><span class=\"p\">,</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">]))</span>\n</pre></div>"
            },
            {
              "title": "Raport complet scikit-learn",
              "description": "Afișează matricea de confuzie și raportul pe clase pentru `y_true` și `y_pred`.",
              "level": "Mediu",
              "type": "open",
              "hint": "Folosește `labels` pentru a fixa ordinea și `zero_division=0` pentru situațiile fără predicții.",
              "solutionText": "Raportul arată precision/recall/F1/support pe fiecare clasă, plus agregările.",
              "solutionCode": "from sklearn.metrics import classification_report, confusion_matrix\n\nclase = [\"dp\", \"graphs\", \"strings\"]\ny_true = [\"dp\", \"dp\", \"graphs\", \"graphs\", \"strings\", \"strings\"]\ny_pred = [\"dp\", \"graphs\", \"graphs\", \"dp\", \"strings\", \"graphs\"]\nprint(confusion_matrix(y_true, y_pred, labels=clase))\nprint(classification_report(y_true, y_pred, labels=clase,\n                            zero_division=0))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">classification_report</span><span class=\"p\">,</span> <span class=\"n\">confusion_matrix</span>\n\n<span class=\"n\">clase</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;dp&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;graphs&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;strings&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">y_true</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;dp&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;dp&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;graphs&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;graphs&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;strings&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;strings&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">y_pred</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;dp&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;graphs&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;graphs&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;dp&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;strings&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;graphs&quot;</span><span class=\"p\">]</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">confusion_matrix</span><span class=\"p\">(</span><span class=\"n\">y_true</span><span class=\"p\">,</span> <span class=\"n\">y_pred</span><span class=\"p\">,</span> <span class=\"n\">labels</span><span class=\"o\">=</span><span class=\"n\">clase</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">classification_report</span><span class=\"p\">(</span><span class=\"n\">y_true</span><span class=\"p\">,</span> <span class=\"n\">y_pred</span><span class=\"p\">,</span> <span class=\"n\">labels</span><span class=\"o\">=</span><span class=\"n\">clase</span><span class=\"p\">,</span>\n                            <span class=\"n\">zero_division</span><span class=\"o\">=</span><span class=\"mi\">0</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "Corectează validarea greșită",
              "description": "Într-o soluție greșită, `fit_transform()` se aplică pe toate textele înainte de `train_test_split`. Scrie o variantă corectă folosind Pipeline.",
              "level": "Dificil",
              "type": "open",
              "hint": "Împarte documentele înainte, apoi folosește un Pipeline în care vectorizatorul și modelul sunt antrenate doar pe train.",
              "solutionText": "Pipeline aplică `fit` pe train, apoi `transform` pe validation, evitând contaminarea vocabularului.",
              "solutionCode": "from sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\n\nX = [\"tenis sport\", \"fotbal meci\", \"sport stadion\", \"tenis finala\",\n     \"python cod\", \"algoritm date\", \"python analiza\", \"cod functie\"]\ny = [0, 0, 0, 0, 1, 1, 1, 1]\nX_train, X_val, y_train, y_val = train_test_split(\n    X, y, test_size=0.25, stratify=y, random_state=3\n)\nmodel = Pipeline([(\"tfidf\", TfidfVectorizer()),\n                  (\"clf\", LogisticRegression(max_iter=1000))])\nmodel.fit(X_train, y_train)\nprint(model.score(X_val, y_val))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">train_test_split</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LogisticRegression</span>\n\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;tenis sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;fotbal meci&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport stadion&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tenis finala&quot;</span><span class=\"p\">,</span>\n     <span class=\"s2\">&quot;python cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;algoritm date&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;python analiza&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;cod functie&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">X_train</span><span class=\"p\">,</span> <span class=\"n\">X_val</span><span class=\"p\">,</span> <span class=\"n\">y_train</span><span class=\"p\">,</span> <span class=\"n\">y_val</span> <span class=\"o\">=</span> <span class=\"n\">train_test_split</span><span class=\"p\">(</span>\n    <span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">test_size</span><span class=\"o\">=</span><span class=\"mf\">0.25</span><span class=\"p\">,</span> <span class=\"n\">stratify</span><span class=\"o\">=</span><span class=\"n\">y</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">3</span>\n<span class=\"p\">)</span>\n<span class=\"n\">model</span> <span class=\"o\">=</span> <span class=\"n\">Pipeline</span><span class=\"p\">([(</span><span class=\"s2\">&quot;tfidf&quot;</span><span class=\"p\">,</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">()),</span>\n                  <span class=\"p\">(</span><span class=\"s2\">&quot;clf&quot;</span><span class=\"p\">,</span> <span class=\"n\">LogisticRegression</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">1000</span><span class=\"p\">))])</span>\n<span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X_train</span><span class=\"p\">,</span> <span class=\"n\">y_train</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">model</span><span class=\"o\">.</span><span class=\"n\">score</span><span class=\"p\">(</span><span class=\"n\">X_val</span><span class=\"p\">,</span> <span class=\"n\">y_val</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "Cross-validation pe grupuri",
              "description": "Construiește două partiții prin `GroupKFold(n_splits=2)` și verifică faptul că sursele nu se suprapun.",
              "level": "Mediu",
              "type": "open",
              "hint": "Folosește `groups` la `split`, apoi testează intersecția mulțimilor de grupuri.",
              "solutionText": "Același articol și republicarea lui sunt ținute împreună, chiar dacă foldurile nu sunt perfect stratificate.",
              "solutionCode": "from sklearn.model_selection import GroupKFold\n\ntexte = [\"A original\", \"A republicat\", \"B original\", \"B republicat\",\n         \"C original\", \"C republicat\", \"D original\", \"D republicat\"]\ngrupuri = [1, 1, 2, 2, 3, 3, 4, 4]\ncv = GroupKFold(n_splits=2)\nfor train, val in cv.split(texte, groups=grupuri):\n    t = {grupuri[i] for i in train}\n    v = {grupuri[i] for i in val}\n    print(\"Train:\", t, \"Validation:\", v)\n    assert t.isdisjoint(v)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">GroupKFold</span>\n\n<span class=\"n\">texte</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;A original&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;A republicat&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;B original&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;B republicat&quot;</span><span class=\"p\">,</span>\n         <span class=\"s2\">&quot;C original&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;C republicat&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;D original&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;D republicat&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">grupuri</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">]</span>\n<span class=\"n\">cv</span> <span class=\"o\">=</span> <span class=\"n\">GroupKFold</span><span class=\"p\">(</span><span class=\"n\">n_splits</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">train</span><span class=\"p\">,</span> <span class=\"n\">val</span> <span class=\"ow\">in</span> <span class=\"n\">cv</span><span class=\"o\">.</span><span class=\"n\">split</span><span class=\"p\">(</span><span class=\"n\">texte</span><span class=\"p\">,</span> <span class=\"n\">groups</span><span class=\"o\">=</span><span class=\"n\">grupuri</span><span class=\"p\">):</span>\n    <span class=\"n\">t</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"n\">grupuri</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"n\">train</span><span class=\"p\">}</span>\n    <span class=\"n\">v</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"n\">grupuri</span><span class=\"p\">[</span><span class=\"n\">i</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">i</span> <span class=\"ow\">in</span> <span class=\"n\">val</span><span class=\"p\">}</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;Train:&quot;</span><span class=\"p\">,</span> <span class=\"n\">t</span><span class=\"p\">,</span> <span class=\"s2\">&quot;Validation:&quot;</span><span class=\"p\">,</span> <span class=\"n\">v</span><span class=\"p\">)</span>\n    <span class=\"k\">assert</span> <span class=\"n\">t</span><span class=\"o\">.</span><span class=\"n\">isdisjoint</span><span class=\"p\">(</span><span class=\"n\">v</span><span class=\"p\">)</span>\n</pre></div>"
            },
            {
              "title": "Interpretează variația între folduri",
              "description": "Modelul A are scoruri [0,82, 0,79, 0,81], iar modelul B [0,93, 0,68, 0,82]. Care pare mai stabil și de ce?",
              "level": "Mediu",
              "type": "open",
              "hint": "Compară mai întâi mediile, apoi variația. Nu presupune că cea mai mare valoare individuală garantează un model mai bun.",
              "solutionText": "A: media ≈ 0,807, variație mică. B: media ≈ 0,810, dar variație mult mai mare. B are o medie marginal mai mare, însă A este mai stabil pe aceste trei folduri."
            },
            {
              "title": "GridSearchCV pentru F1 macro",
              "description": "Testează două variante `ngram_range` și două valori C pentru un Pipeline TF-IDF + LogisticRegression.",
              "level": "Dificil",
              "type": "open",
              "hint": "Parametrii etapelor se scriu folosind două underscore-uri: `tfidf__...`, `clf__...`.",
              "solutionText": "Sunt patru configurații și două folduri (8 fit-uri în căutare). `best_score_` este media CV, nu scorul pe testul ascuns.",
              "solutionCode": "from sklearn.pipeline import Pipeline\nfrom sklearn.model_selection import GridSearchCV, StratifiedKFold\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\n\nX = [\"sport tenis\", \"sport fotbal\", \"meci finala\", \"tenis meci\",\n     \"python date\", \"cod algoritm\", \"python cod\", \"programare algoritm\"]\ny = [0, 0, 0, 0, 1, 1, 1, 1]\npipe = Pipeline([(\"tfidf\", TfidfVectorizer()),\n                 (\"clf\", LogisticRegression(max_iter=1000))])\nsearch = GridSearchCV(pipe,\n    {\"tfidf__ngram_range\": [(1, 1), (1, 2)], \"clf__C\": [0.1, 1]},\n    scoring=\"f1_macro\", cv=StratifiedKFold(2, shuffle=True, random_state=2))\nsearch.fit(X, y)\nprint(search.best_params_, search.best_score_)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.model_selection</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">GridSearchCV</span><span class=\"p\">,</span> <span class=\"n\">StratifiedKFold</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LogisticRegression</span>\n\n<span class=\"n\">X</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;sport tenis&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport fotbal&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;meci finala&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tenis meci&quot;</span><span class=\"p\">,</span>\n     <span class=\"s2\">&quot;python date&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;cod algoritm&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;python cod&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;programare algoritm&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">y</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n<span class=\"n\">pipe</span> <span class=\"o\">=</span> <span class=\"n\">Pipeline</span><span class=\"p\">([(</span><span class=\"s2\">&quot;tfidf&quot;</span><span class=\"p\">,</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">()),</span>\n                 <span class=\"p\">(</span><span class=\"s2\">&quot;clf&quot;</span><span class=\"p\">,</span> <span class=\"n\">LogisticRegression</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">1000</span><span class=\"p\">))])</span>\n<span class=\"n\">search</span> <span class=\"o\">=</span> <span class=\"n\">GridSearchCV</span><span class=\"p\">(</span><span class=\"n\">pipe</span><span class=\"p\">,</span>\n    <span class=\"p\">{</span><span class=\"s2\">&quot;tfidf__ngram_range&quot;</span><span class=\"p\">:</span> <span class=\"p\">[(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">),</span> <span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">)],</span> <span class=\"s2\">&quot;clf__C&quot;</span><span class=\"p\">:</span> <span class=\"p\">[</span><span class=\"mf\">0.1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]},</span>\n    <span class=\"n\">scoring</span><span class=\"o\">=</span><span class=\"s2\">&quot;f1_macro&quot;</span><span class=\"p\">,</span> <span class=\"n\">cv</span><span class=\"o\">=</span><span class=\"n\">StratifiedKFold</span><span class=\"p\">(</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"n\">shuffle</span><span class=\"o\">=</span><span class=\"kc\">True</span><span class=\"p\">,</span> <span class=\"n\">random_state</span><span class=\"o\">=</span><span class=\"mi\">2</span><span class=\"p\">))</span>\n<span class=\"n\">search</span><span class=\"o\">.</span><span class=\"n\">fit</span><span class=\"p\">(</span><span class=\"n\">X</span><span class=\"p\">,</span> <span class=\"n\">y</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">search</span><span class=\"o\">.</span><span class=\"n\">best_params_</span><span class=\"p\">,</span> <span class=\"n\">search</span><span class=\"o\">.</span><span class=\"n\">best_score_</span><span class=\"p\">)</span>\n</pre></div>"
            },
            {
              "title": "Alegerea pragului",
              "description": "O regresie logistică este deja antrenată și produce probabilități. Ce se întâmplă când cobori pragul de la 0,7 la 0,3?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Se reantrenează coeficienții",
                "Numărul predicțiilor pozitive poate crește",
                "Scorul ROC-AUC se schimbă obligatoriu",
                "Cuvintele din vocabular se schimbă"
              ],
              "answerIndex": 1,
              "hint": "Începe de la definiție și calculează pas cu pas.",
              "explanation": "Pragul transformă scorurile în etichete; nu schimbă modelul sau ordonarea scorurilor. Precision și recall se pot modifica.",
              "solutionText": "Pragul transformă scorurile în etichete; nu schimbă modelul sau ordonarea scorurilor. Precision și recall se pot modifica."
            },
            {
              "title": "Alege pragul pe validare",
              "description": "Pentru scorurile și etichetele de validare de mai jos, alege pragul cu F1 maxim dintre [0,3, 0,5, 0,7].",
              "level": "Mediu",
              "type": "open",
              "hint": "Calculează etichetele prezise prin `int(p >= prag)` și evaluează cu `f1_score`.",
              "solutionText": "Pragul se alege pe validare. Dacă îl optimizezi repetat după testul final, supraînveți procesul de evaluare.",
              "solutionCode": "from sklearn.metrics import f1_score\n\nreale = [1, 0, 1, 0, 1, 0, 1, 0]\nscoruri = [0.92, 0.81, 0.68, 0.60, 0.55, 0.34, 0.28, 0.09]\nrezultate = []\nfor prag in [0.3, 0.5, 0.7]:\n    prezise = [int(x >= prag) for x in scoruri]\n    rezultate.append((f1_score(reale, prezise, zero_division=0), prag))\nprint(max(rezultate))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">f1_score</span>\n\n<span class=\"n\">reale</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">]</span>\n<span class=\"n\">scoruri</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">0.92</span><span class=\"p\">,</span> <span class=\"mf\">0.81</span><span class=\"p\">,</span> <span class=\"mf\">0.68</span><span class=\"p\">,</span> <span class=\"mf\">0.60</span><span class=\"p\">,</span> <span class=\"mf\">0.55</span><span class=\"p\">,</span> <span class=\"mf\">0.34</span><span class=\"p\">,</span> <span class=\"mf\">0.28</span><span class=\"p\">,</span> <span class=\"mf\">0.09</span><span class=\"p\">]</span>\n<span class=\"n\">rezultate</span> <span class=\"o\">=</span> <span class=\"p\">[]</span>\n<span class=\"k\">for</span> <span class=\"n\">prag</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"mf\">0.3</span><span class=\"p\">,</span> <span class=\"mf\">0.5</span><span class=\"p\">,</span> <span class=\"mf\">0.7</span><span class=\"p\">]:</span>\n    <span class=\"n\">prezise</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">x</span> <span class=\"o\">&gt;=</span> <span class=\"n\">prag</span><span class=\"p\">)</span> <span class=\"k\">for</span> <span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">scoruri</span><span class=\"p\">]</span>\n    <span class=\"n\">rezultate</span><span class=\"o\">.</span><span class=\"n\">append</span><span class=\"p\">((</span><span class=\"n\">f1_score</span><span class=\"p\">(</span><span class=\"n\">reale</span><span class=\"p\">,</span> <span class=\"n\">prezise</span><span class=\"p\">,</span> <span class=\"n\">zero_division</span><span class=\"o\">=</span><span class=\"mi\">0</span><span class=\"p\">),</span> <span class=\"n\">prag</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">max</span><span class=\"p\">(</span><span class=\"n\">rezultate</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "Analiza erorilor într-un corpus ONIA",
              "description": "Ai 12 greșeli: 7 sunt `graphs → dp`, 3 `strings → dp`, 2 `geometry → graphs`. Ce investigație practică ar trebui să faci prima?",
              "level": "Mediu",
              "type": "open",
              "hint": "Caută tiparul dominant, citește exemplele reale și formulează o ipoteză despre cauză.",
              "solutionText": "Începe cu perechea `graphs → dp`, citește enunțurile, verifică termeni ambigui și n-gramele, apoi testează modificarea într-o validare independentă. Nu modifica manual predicții doar pentru a corecta exemplele deja văzute."
            },
            {
              "title": "Scoruri SVM și probabilități",
              "description": "Un model `LinearSVC` produce `decision_function=1.3`. Ce interpretare este corectă?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Probabilitate 130%",
                "Probabilitate 13%",
                "Scor de decizie, nu probabilitate calibrată",
                "Eroare RMSE"
              ],
              "answerIndex": 2,
              "hint": "Începe de la definiție și calculează pas cu pas.",
              "explanation": "`decision_function` reprezintă un scor al clasificatorului și nu trebuie interpretat drept probabilitate. Pentru probabilități sunt necesare metode adecvate de calibrare.",
              "solutionText": "`decision_function` reprezintă un scor al clasificatorului și nu trebuie interpretat drept probabilitate. Pentru probabilități sunt necesare metode adecvate de calibrare."
            },
            {
              "title": "Erori într-o regresie din texte",
              "description": "Ținte reale [2,4,6], predicții [3,5,3]. Calculează MAE, MSE și RMSE.",
              "level": "Mediu",
              "type": "open",
              "hint": "Erorile sunt [+1,+1,-3]. Folosește valorile absolute și apoi pătratele.",
              "solutionText": "MAE=(1+1+3)/3=5/3≈1,667; MSE=(1+1+9)/3=11/3≈3,667; RMSE≈1,915."
            },
            {
              "title": "Micro, macro și samples la multilabel",
              "description": "Calculează Micro-F1, Macro-F1, Samples-F1 și subset accuracy pentru două matrici binare de etichete.",
              "level": "Mediu",
              "type": "open",
              "hint": "Când etichetele sunt multilabel, `average=\"samples\"` face media F1 pe documente.",
              "solutionText": "Subset accuracy cere toate etichetele corecte pentru un document; este mai strict decât Micro-F1 și Macro-F1.",
              "solutionCode": "from sklearn.metrics import accuracy_score, f1_score\n\ny_true = [[1, 1, 0], [0, 1, 0], [1, 0, 1]]\ny_pred = [[1, 0, 0], [0, 1, 0], [1, 1, 1]]\nfor avg in (\"micro\", \"macro\", \"samples\"):\n    print(avg, f1_score(y_true, y_pred, average=avg, zero_division=0))\nprint(\"Subset accuracy:\", accuracy_score(y_true, y_pred))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.metrics</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">accuracy_score</span><span class=\"p\">,</span> <span class=\"n\">f1_score</span>\n\n<span class=\"n\">y_true</span> <span class=\"o\">=</span> <span class=\"p\">[[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]]</span>\n<span class=\"n\">y_pred</span> <span class=\"o\">=</span> <span class=\"p\">[[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">0</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">0</span><span class=\"p\">],</span> <span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">1</span><span class=\"p\">]]</span>\n<span class=\"k\">for</span> <span class=\"n\">avg</span> <span class=\"ow\">in</span> <span class=\"p\">(</span><span class=\"s2\">&quot;micro&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;macro&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;samples&quot;</span><span class=\"p\">):</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">avg</span><span class=\"p\">,</span> <span class=\"n\">f1_score</span><span class=\"p\">(</span><span class=\"n\">y_true</span><span class=\"p\">,</span> <span class=\"n\">y_pred</span><span class=\"p\">,</span> <span class=\"n\">average</span><span class=\"o\">=</span><span class=\"n\">avg</span><span class=\"p\">,</span> <span class=\"n\">zero_division</span><span class=\"o\">=</span><span class=\"mi\">0</span><span class=\"p\">))</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"s2\">&quot;Subset accuracy:&quot;</span><span class=\"p\">,</span> <span class=\"n\">accuracy_score</span><span class=\"p\">(</span><span class=\"n\">y_true</span><span class=\"p\">,</span> <span class=\"n\">y_pred</span><span class=\"p\">))</span>\n</pre></div>"
            },
            {
              "title": "Verificarea formatului unei submisii",
              "description": "Generează un fișier CSV cu coloanele `id,label` și verifică unicitatea ID-urilor și clasele permise ale problemei ONIA 266.",
              "level": "Mediu",
              "type": "open",
              "hint": "Scrie cu `csv.writer`, apoi recitește folosind `csv.DictReader` pentru a verifica ordinea.",
              "solutionText": "Un fișier corect are exact câte un rând pentru fiecare ID și etichete din lista permisă. Ordinea ID-urilor originale este păstrată.",
              "solutionCode": "import csv\n\nids = [\"P001\", \"P002\", \"P003\"]\npred = [\"dp\", \"graphs\", \"strings\"]\npermise = {\"dp\", \"geometry\", \"graphs\", \"number theory\", \"strings\"}\nassert len(ids) == len(pred) and len(ids) == len(set(ids))\nassert all(x in permise for x in pred)\nwith open(\"demo_511.csv\", \"w\", encoding=\"utf-8\", newline=\"\") as f:\n    w = csv.writer(f)\n    w.writerow([\"id\", \"label\"])\n    w.writerows(zip(ids, pred))\nwith open(\"demo_511.csv\", encoding=\"utf-8\", newline=\"\") as f:\n    rows = list(csv.DictReader(f))\nassert [r[\"id\"] for r in rows] == ids\nprint(rows)\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">csv</span>\n\n<span class=\"n\">ids</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;P001&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;P002&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;P003&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">pred</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;dp&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;graphs&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;strings&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">permise</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"s2\">&quot;dp&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;geometry&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;graphs&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;number theory&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;strings&quot;</span><span class=\"p\">}</span>\n<span class=\"k\">assert</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">ids</span><span class=\"p\">)</span> <span class=\"o\">==</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">pred</span><span class=\"p\">)</span> <span class=\"ow\">and</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">ids</span><span class=\"p\">)</span> <span class=\"o\">==</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"nb\">set</span><span class=\"p\">(</span><span class=\"n\">ids</span><span class=\"p\">))</span>\n<span class=\"k\">assert</span> <span class=\"nb\">all</span><span class=\"p\">(</span><span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">permise</span> <span class=\"k\">for</span> <span class=\"n\">x</span> <span class=\"ow\">in</span> <span class=\"n\">pred</span><span class=\"p\">)</span>\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;demo_511.csv&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;w&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">,</span> <span class=\"n\">newline</span><span class=\"o\">=</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">f</span><span class=\"p\">:</span>\n    <span class=\"n\">w</span> <span class=\"o\">=</span> <span class=\"n\">csv</span><span class=\"o\">.</span><span class=\"n\">writer</span><span class=\"p\">(</span><span class=\"n\">f</span><span class=\"p\">)</span>\n    <span class=\"n\">w</span><span class=\"o\">.</span><span class=\"n\">writerow</span><span class=\"p\">([</span><span class=\"s2\">&quot;id&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;label&quot;</span><span class=\"p\">])</span>\n    <span class=\"n\">w</span><span class=\"o\">.</span><span class=\"n\">writerows</span><span class=\"p\">(</span><span class=\"nb\">zip</span><span class=\"p\">(</span><span class=\"n\">ids</span><span class=\"p\">,</span> <span class=\"n\">pred</span><span class=\"p\">))</span>\n<span class=\"k\">with</span> <span class=\"nb\">open</span><span class=\"p\">(</span><span class=\"s2\">&quot;demo_511.csv&quot;</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">,</span> <span class=\"n\">newline</span><span class=\"o\">=</span><span class=\"s2\">&quot;&quot;</span><span class=\"p\">)</span> <span class=\"k\">as</span> <span class=\"n\">f</span><span class=\"p\">:</span>\n    <span class=\"n\">rows</span> <span class=\"o\">=</span> <span class=\"nb\">list</span><span class=\"p\">(</span><span class=\"n\">csv</span><span class=\"o\">.</span><span class=\"n\">DictReader</span><span class=\"p\">(</span><span class=\"n\">f</span><span class=\"p\">))</span>\n<span class=\"k\">assert</span> <span class=\"p\">[</span><span class=\"n\">r</span><span class=\"p\">[</span><span class=\"s2\">&quot;id&quot;</span><span class=\"p\">]</span> <span class=\"k\">for</span> <span class=\"n\">r</span> <span class=\"ow\">in</span> <span class=\"n\">rows</span><span class=\"p\">]</span> <span class=\"o\">==</span> <span class=\"n\">ids</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">rows</span><span class=\"p\">)</span>\n</pre></div>"
            },
            {
              "title": "Scor public și scor final",
              "description": "Modelul A are Macro-F1 intern 0,82 și public 0,83; modelul B are intern 0,80 și public 0,86. Ce concluzie este justificată?",
              "level": "Mediu",
              "type": "open",
              "hint": "Separă validarea internă de subsetul public. Ai etichetele subsetului final?",
              "solutionText": "Nu se poate afirma că B va fi superior pe scorul final. Trebuie analizată variația pe folduri, robustețea pe clase și posibila supraoptimizare a feedbackului public."
            }
          ]
        },
        {
          "id": "nlp-hibrid",
          "number": "5.12",
          "title": "Metode hibride și învățare semisupervizată",
          "stage": "general",
          "summary": "Combinarea clusteringului, temelor și pseudoetichetelor cu un clasificator.",
          "objectives": [
            "Clustering ca sursă de caracteristici",
            "Teme latente ca feature-uri",
            "Pseudoetichetare",
            "SelfTrainingClassifier"
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Metode hibride și învățare semisupervizată",
              "src": "content/nlp-hibrid.html",
              "standalone": "content/nlp-hibrid-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Metode hibride și învățare semisupervizată",
              "src": "interactive/nlp-hibrid.html",
              "height": 720,
              "caption": "Simulator interactiv autonom. Folosește „Deschide separat” pentru experimentare pe întregul ecran."
            },
            {
              "type": "prose",
              "title": "Notebook Jupyter — aplicații complete",
              "html": "<div class=\"onia-nlp nlp-call\"><h2>Lucrează în JupyterLab</h2><p>Notebookul conține exemple Python autonome, explicații și exerciții reproductibile.</p><a href=\"notebooks/ONIA-NLP-Metode-Hibride.ipynb\" download>Descarcă notebookul .ipynb</a></div>"
            }
          ],
          "exercises": [
            {
              "title": "Pragul pseudoetichetării",
              "description": "Care risc apare la pseudoetichetarea automată?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Nu există niciun risc",
                "Erorile sigure pot fi propagate",
                "Dispare nevoia validării",
                "Toate exemplele devin etichetate corect"
              ],
              "answerIndex": 1,
              "hint": "Identifică ce informație intră și ce rezultat trebuie obținut.",
              "explanation": "O pseudoetichetă greșită poate amplifica erorile la reantrenare."
            },
            {
              "title": "Explică un concept pe un exemplu",
              "description": "Explică în cuvintele tale diferența dintre „Clustering ca sursă de caracteristici” și „Teme latente ca feature-uri”. Oferă un exemplu pentru un corpus cu cel puțin trei documente.",
              "level": "Mediu",
              "type": "open",
              "hint": "Separă datele inițiale, transformarea aplicată și rezultatul.",
              "solutionText": "Un document poate primi un cluster sau o listă de distanțe până la centre. Aceste valori pot fi adăugate la TF-IDF pentru un clasificator. Însă o etichetă de cluster nu este o categorie semantică verificată și nu trebuie tratată automat ca adevăr."
            },
            {
              "title": "Reproduce și modifică exemplul Python",
              "description": "Rulează exemplul „Pseudoetichetare manuală”. Modifică una dintre valori și explică diferența rezultatului.",
              "level": "Mediu",
              "type": "open",
              "hint": "Pornește de la intrare și urmărește fiecare instrucțiune.",
              "statementCode": "probabilitati = [0.92, 0.57, 0.11, 0.81]\nprag = 0.85\nfor i, p in enumerate(probabilitati):\n    incredere = max(p, 1 - p)\n    if incredere >= prag:\n        print(i, \"pseudoetichetă\", int(p >= 0.5))\n    else:\n        print(i, \"neetichetat\")\n",
              "solutionText": "Rezultatul depinde de datele modificate. Verifică explicit ce linie a schimbat rezultatul și de ce.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"n\">probabilitati</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mf\">0.92</span><span class=\"p\">,</span> <span class=\"mf\">0.57</span><span class=\"p\">,</span> <span class=\"mf\">0.11</span><span class=\"p\">,</span> <span class=\"mf\">0.81</span><span class=\"p\">]</span>\n<span class=\"n\">prag</span> <span class=\"o\">=</span> <span class=\"mf\">0.85</span>\n<span class=\"k\">for</span> <span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"n\">p</span> <span class=\"ow\">in</span> <span class=\"nb\">enumerate</span><span class=\"p\">(</span><span class=\"n\">probabilitati</span><span class=\"p\">):</span>\n    <span class=\"n\">incredere</span> <span class=\"o\">=</span> <span class=\"nb\">max</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">,</span> <span class=\"mi\">1</span> <span class=\"o\">-</span> <span class=\"n\">p</span><span class=\"p\">)</span>\n    <span class=\"k\">if</span> <span class=\"n\">incredere</span> <span class=\"o\">&gt;=</span> <span class=\"n\">prag</span><span class=\"p\">:</span>\n        <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"s2\">&quot;pseudoetichetă&quot;</span><span class=\"p\">,</span> <span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">p</span> <span class=\"o\">&gt;=</span> <span class=\"mf\">0.5</span><span class=\"p\">))</span>\n    <span class=\"k\">else</span><span class=\"p\">:</span>\n        <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">i</span><span class=\"p\">,</span> <span class=\"s2\">&quot;neetichetat&quot;</span><span class=\"p\">)</span>\n</pre></div>\n"
            },
            {
              "title": "Pseudoetichete doar peste prag",
              "description": "Primești P(y=1) pentru documente neetichetate; returnează pseudoeticheta sau None în funcție de încrederea maximă.",
              "level": "Mediu",
              "type": "open",
              "hint": "Construiește mai întâi varianta cu date mici și verifică manual un caz de test.",
              "solutionCode": "def pseudo(p, prag=0.9):\n    if max(p,1-p) < prag:\n        return None\n    return int(p>=0.5)\nfor p in [0.97,0.62,0.11]:\n    print(p,pseudo(p))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">pseudo</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">,</span> <span class=\"n\">prag</span><span class=\"o\">=</span><span class=\"mf\">0.9</span><span class=\"p\">):</span>\n    <span class=\"k\">if</span> <span class=\"nb\">max</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"o\">-</span><span class=\"n\">p</span><span class=\"p\">)</span> <span class=\"o\">&lt;</span> <span class=\"n\">prag</span><span class=\"p\">:</span>\n        <span class=\"k\">return</span> <span class=\"kc\">None</span>\n    <span class=\"k\">return</span> <span class=\"nb\">int</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"o\">&gt;=</span><span class=\"mf\">0.5</span><span class=\"p\">)</span>\n<span class=\"k\">for</span> <span class=\"n\">p</span> <span class=\"ow\">in</span> <span class=\"p\">[</span><span class=\"mf\">0.97</span><span class=\"p\">,</span><span class=\"mf\">0.62</span><span class=\"p\">,</span><span class=\"mf\">0.11</span><span class=\"p\">]:</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">,</span><span class=\"n\">pseudo</span><span class=\"p\">(</span><span class=\"n\">p</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Analiză și alegere experimentală",
              "description": "Proiectează un experiment pentru SelfTrainingClassifier cu doar 10% documente etichetate. Cum alegi pragul și previi propagarea erorilor?",
              "level": "Dificil",
              "type": "open",
              "hint": "Formulează ipoteza, menține aceeași validare și compară o singură schimbare la un moment dat.",
              "solutionText": "Propunerea corectă trebuie să precizeze seturile de date, transformările învățate exclusiv din train, metrica potrivită și modul în care comparația evită data leakage și overfittingul față de scorul public."
            }
          ]
        },
        {
          "id": "nlp-aplicatii",
          "number": "5.13",
          "title": "Aplicații practice și proiecte complete",
          "stage": "general",
          "summary": "De la descrierea sarcinii la livrarea predicțiilor corecte.",
          "objectives": [
            "Spam, intenție și știri",
            "Căutare și aproape duplicate",
            "Clustering și teme",
            "Plan de experiment reproducibil"
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Aplicații practice și proiecte complete",
              "src": "content/nlp-aplicatii.html",
              "standalone": "content/nlp-aplicatii-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Aplicații practice și proiecte complete",
              "src": "interactive/nlp-aplicatii.html",
              "height": 720,
              "caption": "Simulator interactiv autonom. Folosește „Deschide separat” pentru experimentare pe întregul ecran."
            }
          ],
          "exercises": [
            {
              "title": "Scorul public vs final",
              "description": "Care strategie este mai robustă într-un concurs?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Alegi numai după testul public",
                "Păstrezi validare proprie stabilă",
                "Antrenezi direct pe etichetele testului",
                "Modifici manual predicțiile după fiecare încărcare"
              ],
              "answerIndex": 1,
              "hint": "Identifică ce informație intră și ce rezultat trebuie obținut.",
              "explanation": "Validarea internă reduce adaptarea accidentală la subsetul de test public."
            },
            {
              "title": "Explică un concept pe un exemplu",
              "description": "Explică în cuvintele tale diferența dintre „Spam, intenție și știri” și „Căutare și aproape duplicate”. Oferă un exemplu pentru un corpus cu cel puțin trei documente.",
              "level": "Mediu",
              "type": "open",
              "hint": "Separă datele inițiale, transformarea aplicată și rezultatul.",
              "solutionText": "Pentru spam folosește un baseline `TfidfVectorizer(ngram_range=(1,2)) + LogisticRegression(class_weight=\"balanced\")` și verifică precision/recall la clasa spam. Pentru știri multiclasă compară `LinearSVC` cu `MultinomialNB`. Pentru intenții scurte testează și n-grame de caractere."
            },
            {
              "title": "Reproduce și modifică exemplul Python",
              "description": "Rulează exemplul „Schemă de predicție finală”. Modifică una dintre valori și explică diferența rezultatului.",
              "level": "Mediu",
              "type": "open",
              "hint": "Pornește de la intrare și urmărește fiecare instrucțiune.",
              "statementCode": "import pandas as pd\n# Înlocuiește exemplul cu predicțiile modelului antrenat.\nidentificatori = [101, 102, 103]\npredictii = [\"sport\", \"tech\", \"sport\"]\niesire = pd.DataFrame({\"id\": identificatori, \"label\": predictii})\nassert len(iesire) == len(identificatori)\niesire.to_csv(\"predictii.csv\", index=False, encoding=\"utf-8\")\nprint(iesire.head())\n",
              "solutionText": "Rezultatul depinde de datele modificate. Verifică explicit ce linie a schimbat rezultatul și de ce.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">import</span><span class=\"w\"> </span><span class=\"nn\">pandas</span><span class=\"w\"> </span><span class=\"k\">as</span><span class=\"w\"> </span><span class=\"nn\">pd</span>\n<span class=\"c1\"># Înlocuiește exemplul cu predicțiile modelului antrenat.</span>\n<span class=\"n\">identificatori</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"mi\">101</span><span class=\"p\">,</span> <span class=\"mi\">102</span><span class=\"p\">,</span> <span class=\"mi\">103</span><span class=\"p\">]</span>\n<span class=\"n\">predictii</span> <span class=\"o\">=</span> <span class=\"p\">[</span><span class=\"s2\">&quot;sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;tech&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;sport&quot;</span><span class=\"p\">]</span>\n<span class=\"n\">iesire</span> <span class=\"o\">=</span> <span class=\"n\">pd</span><span class=\"o\">.</span><span class=\"n\">DataFrame</span><span class=\"p\">({</span><span class=\"s2\">&quot;id&quot;</span><span class=\"p\">:</span> <span class=\"n\">identificatori</span><span class=\"p\">,</span> <span class=\"s2\">&quot;label&quot;</span><span class=\"p\">:</span> <span class=\"n\">predictii</span><span class=\"p\">})</span>\n<span class=\"k\">assert</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">iesire</span><span class=\"p\">)</span> <span class=\"o\">==</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">identificatori</span><span class=\"p\">)</span>\n<span class=\"n\">iesire</span><span class=\"o\">.</span><span class=\"n\">to_csv</span><span class=\"p\">(</span><span class=\"s2\">&quot;predictii.csv&quot;</span><span class=\"p\">,</span> <span class=\"n\">index</span><span class=\"o\">=</span><span class=\"kc\">False</span><span class=\"p\">,</span> <span class=\"n\">encoding</span><span class=\"o\">=</span><span class=\"s2\">&quot;utf-8&quot;</span><span class=\"p\">)</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">iesire</span><span class=\"o\">.</span><span class=\"n\">head</span><span class=\"p\">())</span>\n</pre></div>\n"
            },
            {
              "title": "Verificarea unui fișier de predicții",
              "description": "Scrie o funcție care verifică dacă lungimea și ordinea identificatorilor coincid cu intrarea așteptată.",
              "level": "Mediu",
              "type": "open",
              "hint": "Construiește mai întâi varianta cu date mici și verifică manual un caz de test.",
              "solutionCode": "def verifica(ids, pred, ids_iesire):\n    return len(ids)==len(pred)==len(ids_iesire) and ids==ids_iesire\n\nids=[11,13,17]\nprint(verifica(ids,[\"sport\",\"tech\",\"sport\"],[11,13,17]))\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span><span class=\"w\"> </span><span class=\"nf\">verifica</span><span class=\"p\">(</span><span class=\"n\">ids</span><span class=\"p\">,</span> <span class=\"n\">pred</span><span class=\"p\">,</span> <span class=\"n\">ids_iesire</span><span class=\"p\">):</span>\n    <span class=\"k\">return</span> <span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">ids</span><span class=\"p\">)</span><span class=\"o\">==</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">pred</span><span class=\"p\">)</span><span class=\"o\">==</span><span class=\"nb\">len</span><span class=\"p\">(</span><span class=\"n\">ids_iesire</span><span class=\"p\">)</span> <span class=\"ow\">and</span> <span class=\"n\">ids</span><span class=\"o\">==</span><span class=\"n\">ids_iesire</span>\n\n<span class=\"n\">ids</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"mi\">11</span><span class=\"p\">,</span><span class=\"mi\">13</span><span class=\"p\">,</span><span class=\"mi\">17</span><span class=\"p\">]</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">verifica</span><span class=\"p\">(</span><span class=\"n\">ids</span><span class=\"p\">,[</span><span class=\"s2\">&quot;sport&quot;</span><span class=\"p\">,</span><span class=\"s2\">&quot;tech&quot;</span><span class=\"p\">,</span><span class=\"s2\">&quot;sport&quot;</span><span class=\"p\">],[</span><span class=\"mi\">11</span><span class=\"p\">,</span><span class=\"mi\">13</span><span class=\"p\">,</span><span class=\"mi\">17</span><span class=\"p\">]))</span>\n</pre></div>\n"
            },
            {
              "title": "Analiză și alegere experimentală",
              "description": "Planifică un sistem de clasificare a mesajelor ONIA: format de intrare, validare, model baseline, metrică, analiză a erorilor și export.",
              "level": "Dificil",
              "type": "open",
              "hint": "Formulează ipoteza, menține aceeași validare și compară o singură schimbare la un moment dat.",
              "solutionText": "Propunerea corectă trebuie să precizeze seturile de date, transformările învățate exclusiv din train, metrica potrivită și modul în care comparația evită data leakage și overfittingul față de scorul public."
            }
          ]
        },
        {
          "id": "nlp-referinta",
          "number": "5.14",
          "title": "Ghid scikit-learn pentru NLP: parametri și combinații",
          "stage": "general",
          "summary": "Referință comparativă pentru alegerea vectorizatorului și a modelului.",
          "objectives": [
            "Cum alegem o configurație de pornire",
            "Interacțiunea dintre parametri",
            "Modelul potrivit pentru dimensiunea datelor",
            "Regula de aur pentru parametri"
          ],
          "blocks": [
            {
              "type": "lesson",
              "title": "Suport complet — Ghid scikit-learn pentru NLP: parametri și combinații",
              "src": "content/nlp-referinta.html",
              "standalone": "content/nlp-referinta-standalone.html"
            },
            {
              "type": "interactive",
              "title": "Laborator interactiv — Ghid scikit-learn pentru NLP: parametri și combinații",
              "src": "interactive/nlp-referinta.html",
              "height": 720,
              "caption": "Simulator interactiv autonom. Folosește „Deschide separat” pentru experimentare pe întregul ecran."
            }
          ],
          "exercises": [
            {
              "title": "Cum creștem regularizarea?",
              "description": "În LogisticRegression, cum obții în mod tipic regularizare mai puternică?",
              "level": "Ușor",
              "type": "mcq",
              "options": [
                "Crești C",
                "Scazi C",
                "Crești max_iter",
                "Setezi random_state"
              ],
              "answerIndex": 1,
              "hint": "Identifică ce informație intră și ce rezultat trebuie obținut.",
              "explanation": "C este inversul intensității regularizării în convenția uzuală."
            },
            {
              "title": "Explică un concept pe un exemplu",
              "description": "Explică în cuvintele tale diferența dintre „Cum alegem o configurație de pornire” și „Interacțiunea dintre parametri”. Oferă un exemplu pentru un corpus cu cel puțin trei documente.",
              "level": "Mediu",
              "type": "open",
              "hint": "Separă datele inițiale, transformarea aplicată și rezultatul.",
              "solutionText": "Pentru clasificare de mesaje scurte: `TfidfVectorizer(ngram_range=(1,2), min_df=1)` plus `LogisticRegression(max_iter=1000)`. Pentru greșeli frecvente de tastare: testează `analyzer=\"char_wb\"`, `ngram_range=(3,5)` cu `LinearSVC`. Pentru frecvențe interpretate de Naive Bayes: `CountVectorizer` plus `MultinomialNB`."
            },
            {
              "title": "Reproduce și modifică exemplul Python",
              "description": "Rulează exemplul „Trei pipeline-uri alternative”. Modifică una dintre valori și explică diferența rezultatului.",
              "level": "Mediu",
              "type": "open",
              "hint": "Pornește de la intrare și urmărește fiecare instrucțiune.",
              "statementCode": "from sklearn.pipeline import Pipeline\nfrom sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer\nfrom sklearn.naive_bayes import MultinomialNB\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.svm import LinearSVC\nmodele = {\n    \"numărări+NB\": Pipeline([(\"vec\", CountVectorizer()), (\"clf\", MultinomialNB(alpha=1.0))]),\n    \"tfidf+LR\": Pipeline([(\"vec\", TfidfVectorizer(ngram_range=(1, 2))), (\"clf\", LogisticRegression(max_iter=1000))]),\n    \"caractere+SVC\": Pipeline([(\"vec\", TfidfVectorizer(analyzer=\"char_wb\", ngram_range=(3, 5))), (\"clf\", LinearSVC(C=1.0))]),\n}\nprint(list(modele))\n",
              "solutionText": "Rezultatul depinde de datele modificate. Verifică explicit ce linie a schimbat rezultatul și de ce.",
              "statementCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.pipeline</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">Pipeline</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">CountVectorizer</span><span class=\"p\">,</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.naive_bayes</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">MultinomialNB</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.linear_model</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LogisticRegression</span>\n<span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.svm</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">LinearSVC</span>\n<span class=\"n\">modele</span> <span class=\"o\">=</span> <span class=\"p\">{</span>\n    <span class=\"s2\">&quot;numărări+NB&quot;</span><span class=\"p\">:</span> <span class=\"n\">Pipeline</span><span class=\"p\">([(</span><span class=\"s2\">&quot;vec&quot;</span><span class=\"p\">,</span> <span class=\"n\">CountVectorizer</span><span class=\"p\">()),</span> <span class=\"p\">(</span><span class=\"s2\">&quot;clf&quot;</span><span class=\"p\">,</span> <span class=\"n\">MultinomialNB</span><span class=\"p\">(</span><span class=\"n\">alpha</span><span class=\"o\">=</span><span class=\"mf\">1.0</span><span class=\"p\">))]),</span>\n    <span class=\"s2\">&quot;tfidf+LR&quot;</span><span class=\"p\">:</span> <span class=\"n\">Pipeline</span><span class=\"p\">([(</span><span class=\"s2\">&quot;vec&quot;</span><span class=\"p\">,</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">(</span><span class=\"n\">ngram_range</span><span class=\"o\">=</span><span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">))),</span> <span class=\"p\">(</span><span class=\"s2\">&quot;clf&quot;</span><span class=\"p\">,</span> <span class=\"n\">LogisticRegression</span><span class=\"p\">(</span><span class=\"n\">max_iter</span><span class=\"o\">=</span><span class=\"mi\">1000</span><span class=\"p\">))]),</span>\n    <span class=\"s2\">&quot;caractere+SVC&quot;</span><span class=\"p\">:</span> <span class=\"n\">Pipeline</span><span class=\"p\">([(</span><span class=\"s2\">&quot;vec&quot;</span><span class=\"p\">,</span> <span class=\"n\">TfidfVectorizer</span><span class=\"p\">(</span><span class=\"n\">analyzer</span><span class=\"o\">=</span><span class=\"s2\">&quot;char_wb&quot;</span><span class=\"p\">,</span> <span class=\"n\">ngram_range</span><span class=\"o\">=</span><span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">))),</span> <span class=\"p\">(</span><span class=\"s2\">&quot;clf&quot;</span><span class=\"p\">,</span> <span class=\"n\">LinearSVC</span><span class=\"p\">(</span><span class=\"n\">C</span><span class=\"o\">=</span><span class=\"mf\">1.0</span><span class=\"p\">))]),</span>\n<span class=\"p\">}</span>\n<span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"nb\">list</span><span class=\"p\">(</span><span class=\"n\">modele</span><span class=\"p\">))</span>\n</pre></div>\n"
            },
            {
              "title": "Compară dimensiunea vectorizărilor",
              "description": "Rulează doi vectorizatori pe același corpus și compară numărul de caracteristici rezultate.",
              "level": "Mediu",
              "type": "open",
              "hint": "Construiește mai întâi varianta cu date mici și verifică manual un caz de test.",
              "solutionCode": "from sklearn.feature_extraction.text import TfidfVectorizer\ndocs=[\"python și date\", \"date în sport\", \"python în sport\"]\nfor ngram in [(1,1),(1,2)]:\n    v=TfidfVectorizer(ngram_range=ngram)\n    X=v.fit_transform(docs)\n    print(ngram,X.shape[1])\n",
              "solutionCodeHtml": "<div class=\"codehilite\"><pre><span></span><span class=\"kn\">from</span><span class=\"w\"> </span><span class=\"nn\">sklearn.feature_extraction.text</span><span class=\"w\"> </span><span class=\"kn\">import</span> <span class=\"n\">TfidfVectorizer</span>\n<span class=\"n\">docs</span><span class=\"o\">=</span><span class=\"p\">[</span><span class=\"s2\">&quot;python și date&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;date în sport&quot;</span><span class=\"p\">,</span> <span class=\"s2\">&quot;python în sport&quot;</span><span class=\"p\">]</span>\n<span class=\"k\">for</span> <span class=\"n\">ngram</span> <span class=\"ow\">in</span> <span class=\"p\">[(</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">1</span><span class=\"p\">),(</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">)]:</span>\n    <span class=\"n\">v</span><span class=\"o\">=</span><span class=\"n\">TfidfVectorizer</span><span class=\"p\">(</span><span class=\"n\">ngram_range</span><span class=\"o\">=</span><span class=\"n\">ngram</span><span class=\"p\">)</span>\n    <span class=\"n\">X</span><span class=\"o\">=</span><span class=\"n\">v</span><span class=\"o\">.</span><span class=\"n\">fit_transform</span><span class=\"p\">(</span><span class=\"n\">docs</span><span class=\"p\">)</span>\n    <span class=\"nb\">print</span><span class=\"p\">(</span><span class=\"n\">ngram</span><span class=\"p\">,</span><span class=\"n\">X</span><span class=\"o\">.</span><span class=\"n\">shape</span><span class=\"p\">[</span><span class=\"mi\">1</span><span class=\"p\">])</span>\n</pre></div>\n"
            },
            {
              "title": "Analiză și alegere experimentală",
              "description": "Un corpus românesc conține 20.000 de mesaje scurte. Alege două perechi vectorizator+model și o grilă mică de hiperparametri; justifică fără a atinge testul final.",
              "level": "Dificil",
              "type": "open",
              "hint": "Formulează ipoteza, menține aceeași validare și compară o singură schimbare la un moment dat.",
              "solutionText": "Propunerea corectă trebuie să precizeze seturile de date, transformările învățate exclusiv din train, metrica potrivită și modul în care comparația evită data leakage și overfittingul față de scorul public."
            }
          ]
        },
        {
          "id": "nlp-pytorch",
          "number": "5.15",
          "title": "NLP neuronal și PyTorch — În lucru",
          "stage": "general",
          "summary": "Reprezentări distribuite, embeddings, attention, Transformers, BERT și fine-tuning. Materialele sunt în lucru și nu sunt publicate încă.",
          "objectives": [
            "Recunoașterea etapelor de construire și antrenare a modelelor neurale NLP (material în pregătire)."
          ],
          "blocks": [
            {
              "type": "prose",
              "title": "În lucru — NLP neuronal cu PyTorch",
              "html": "<div class=\"onia-nlp\"><div class=\"nlp-hero\"><span class=\"eyebrow\">CONȚINUT ÎN LUCRU</span><h2>PyTorch pentru NLP</h2><p>Reprezentările distribuite Word2Vec, FastText și GloVe, embeddingurile contextuale, mecanismul attention, arhitectura Transformer, BERT și fine-tuning vor avea un parcurs separat. Această secțiune nu conține momentan un suport de curs publicat.</p></div></div>"
            }
          ],
          "exercises": []
        }
      ]
    },
    {
      "id": "retele-neurale",
      "number": "06",
      "icon": "brain",
      "color": "orange",
      "title": "Rețele neurale",
      "shortTitle": "Rețele neurale",
      "description": "Fundamentele rețelelor neurale și antrenarea modelelor de deep learning.",
      "label": "Doar etapa națională",
      "sections": [
        {
          "id": "sectiunea-6-1",
          "number": "6.1",
          "title": "Perceptron",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-6-2",
          "number": "6.2",
          "title": "Multi-Layer Perceptrons (MLP)",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-6-3",
          "number": "6.3",
          "title": "Gradient Descent",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-6-4",
          "number": "6.4",
          "title": "Optimizarea",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-6-5",
          "number": "6.5",
          "title": "Funcții de activare",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-6-6",
          "number": "6.6",
          "title": "Funcții de pierdere",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-6-7",
          "number": "6.7",
          "title": "Regularizare",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-6-8",
          "number": "6.8",
          "title": "Finetuning",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        }
      ]
    },
    {
      "id": "computer-vision",
      "number": "07",
      "icon": "network",
      "color": "violet",
      "title": "Computer Vision",
      "shortTitle": "Computer Vision",
      "description": "Fundamente de prelucrare a imaginilor și clasificare vizuală.",
      "label": "Doar etapa națională",
      "sections": [
        {
          "id": "sectiunea-7-1",
          "number": "7.1",
          "title": "Fundamente",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-7-2",
          "number": "7.2",
          "title": "Clasificarea imaginilor",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-7-3",
          "number": "7.3",
          "title": "Preprocesarea imaginilor",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        },
        {
          "id": "sectiunea-7-4",
          "number": "7.4",
          "title": "Augmentarea imaginilor",
          "stage": "national",
          "summary": "",
          "objectives": [],
          "blocks": [],
          "exercises": []
        }
      ]
    }
  ]
};
