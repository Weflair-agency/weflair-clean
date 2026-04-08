/**
 * v5 — Final correct layout:
 * - Arrows to the RIGHT of funnel, forming a recycle/loop symbol
 * - Funnel stages semi-transparent so arrows show through behind
 * - Growth Loops box far right
 * - Arrows drawn FIRST (behind), funnel on top
 */
const fs = require('fs');
const path = require('path');
const INDEX = path.join(__dirname, 'index.html');
let html = fs.readFileSync(INDEX, 'utf8');

// Find and replace the current right-side wrap
const WRAP = 'weflair-ring-wrap wf-funnel-v4';
const wrapStart = html.indexOf('<div class="' + WRAP + '">');
if (wrapStart === -1) { console.error('Cannot find wrap'); process.exit(1); }

// Walk to find matching close </div>
const afterOpen = html.indexOf('>', wrapStart) + 1;
let depth = 1, pos = afterOpen;
while (depth > 0 && pos < html.length) {
  const o = html.indexOf('<div', pos);
  const c = html.indexOf('</div>', pos);
  if (c === -1) break;
  if (o !== -1 && o < c) { depth++; pos = o + 4; }
  else { depth--; if (depth === 0) { pos = c + 6; break; } pos = c + 6; }
}

console.log(`Replacing chars ${wrapStart} to ${pos}`);

// ── NEW SVG ───────────────────────────────────────────────
// Layout: 1060 wide, 580 tall
// Funnel: left region (x 60–520, narrowing)
// Arrows: right region (centered x≈750, y 60–530) — TWO big arcs = recycle symbol
// Growth Loops: far right x≈940
const NEW_HTML = `<div class="weflair-ring-wrap wf-fv5"><svg class="wf-fv5-svg" viewBox="0 0 1060 580" xmlns="http://www.w3.org/2000/svg" fill="none">
<defs>
<filter id="ag"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1d201d" stop-opacity="0.82"/><stop offset="100%" stop-color="#141614" stop-opacity="0.82"/></linearGradient>
</defs>

<!-- ═══ ARROWS FIRST — drawn behind funnel ═══ -->
<!-- Arrow 1: top arc clockwise, arrowhead pointing DOWN at right -->
<g filter="url(#ag)">
<path d="M 592,292 C 592,108 664,58 752,58 C 840,58 912,108 912,292" stroke="#3eff68" stroke-width="30" stroke-linecap="round"/>
<polygon points="912,292 886,258 938,258" fill="#3eff68"/>
</g>
<!-- Arrow 2: bottom arc clockwise, arrowhead pointing UP at left -->
<g filter="url(#ag)">
<path d="M 912,306 C 912,492 840,534 752,534 C 664,534 592,492 592,306" stroke="#3eff68" stroke-width="30" stroke-linecap="round"/>
<polygon points="592,306 566,340 618,340" fill="#3eff68"/>
</g>

<!-- ═══ FUNNEL — semi-transparent so arrows show through ═══ -->

<!-- Stage 0: Uncover -->
<g class="wf-stage" data-funnel-idx="0">
<path d="M 62,46 L 522,46 L 492,126 L 92,126 Z" fill="url(#fg)" stroke="rgba(246,243,238,0.10)" stroke-width="1"/>
<text x="88" y="73" class="wf-num">01</text>
<text x="290" y="94" text-anchor="middle" class="wf-lbl wf-lbl-active">Uncover</text>
</g>
<!-- metric -->
<g class="wf-m"><text x="290" y="147" text-anchor="middle" class="wf-ml">Impressions</text><rect x="248" y="153" width="84" height="19" rx="9.5" fill="rgba(62,255,104,0.14)" stroke="rgba(62,255,104,0.3)" stroke-width="0.8"/><text x="290" y="167" text-anchor="middle" class="wf-mb">CTR%</text></g>

<!-- Stage 1: Generate -->
<g class="wf-stage" data-funnel-idx="1">
<path d="M 92,180 L 492,180 L 460,260 L 124,260 Z" fill="url(#fg)" stroke="rgba(246,243,238,0.07)" stroke-width="1"/>
<text x="120" y="207" class="wf-num">02</text>
<text x="290" y="228" text-anchor="middle" class="wf-lbl">Generate</text>
</g>
<!-- metric -->
<g class="wf-m"><text x="290" y="281" text-anchor="middle" class="wf-ml">Clicks</text><rect x="236" y="287" width="108" height="19" rx="9.5" fill="rgba(62,255,104,0.14)" stroke="rgba(62,255,104,0.3)" stroke-width="0.8"/><text x="290" y="301" text-anchor="middle" class="wf-mb">Click &gt; Lead%</text></g>

<!-- Stage 2: Capture -->
<g class="wf-stage" data-funnel-idx="2">
<path d="M 128,314 L 456,314 L 422,394 L 162,394 Z" fill="url(#fg)" stroke="rgba(246,243,238,0.07)" stroke-width="1"/>
<text x="156" y="341" class="wf-num">03</text>
<text x="290" y="362" text-anchor="middle" class="wf-lbl">Capture</text>
</g>
<!-- metric -->
<g class="wf-m"><text x="290" y="415" text-anchor="middle" class="wf-ml">Leads</text><rect x="228" y="421" width="124" height="19" rx="9.5" fill="rgba(62,255,104,0.14)" stroke="rgba(62,255,104,0.3)" stroke-width="0.8"/><text x="290" y="435" text-anchor="middle" class="wf-mb">Demo &gt; Opp%</text></g>

<!-- Stage 3: Convert -->
<g class="wf-stage" data-funnel-idx="3">
<path d="M 165,448 L 419,448 L 388,524 L 196,524 Z" fill="url(#fg)" stroke="rgba(246,243,238,0.07)" stroke-width="1"/>
<text x="192" y="473" class="wf-num">04</text>
<text x="290" y="494" text-anchor="middle" class="wf-lbl">Convert</text>
</g>

<!-- Below stage 3 metric + Stage 4 compound -->
<g class="wf-m"><text x="290" y="544" text-anchor="middle" class="wf-ml">Pipeline</text></g>

<!-- Stage 4: Compound — at the very bottom tip -->
<g class="wf-stage" data-funnel-idx="4">
<path d="M 198,556 L 386,556 L 372,590 L 212,590 Z" fill="rgba(25,30,25,0.88)" stroke="rgba(246,243,238,0.12)" stroke-width="1"/>
<text x="222" y="572" class="wf-num">05</text>
<text x="290" y="578" text-anchor="middle" class="wf-lbl" font-size="15">Compound</text>
</g>

<!-- ═══ GROWTH LOOPS box ═══ -->
<rect x="940" y="262" width="108" height="64" rx="8" fill="rgba(14,16,14,0.94)" stroke="rgba(62,255,104,0.32)" stroke-width="1.4"/>
<text x="994" y="283" text-anchor="middle" class="wf-glt">GROWTH</text>
<text x="994" y="300" text-anchor="middle" class="wf-glt">LOOPS</text>
<text x="994" y="316" text-anchor="middle" class="wf-gls">compound effect</text>

</svg></div>`;

html = html.substring(0, wrapStart) + NEW_HTML + html.substring(pos);
console.log('Replaced HTML');

// ── CSS ───────────────────────────────────────────────────
// Remove old funnel CSS blocks
['/* ── Funnel v4 ── */', '/* ── Funnel Image ── */', '/* ── Funnel + Flywheel v2 ── */'].forEach(m => {
  const ci = html.indexOf(m);
  if (ci === -1) return;
  // Remove up to next CSS block or 3000 chars
  let ce = ci;
  const area = html.substring(ci, ci + 3000).split('\n');
  let chars = 0;
  for (const l of area) {
    chars += l.length + 1;
    if (l.includes('wf-') || l.includes('funnel') || l.includes('flywheel') || l.includes('Funnel') || l.trim() === '') ce = ci + chars;
    else break;
  }
  html = html.substring(0, ci) + html.substring(ce);
  console.log('Removed old CSS:', m);
});

const NEW_CSS = `
      /* ── Funnel v5 ── */
      .wf-fv5{position:relative;width:100%;margin:0 auto;display:flex;align-items:center;justify-content:center}
      .wf-fv5-svg{width:100%;height:auto;overflow:visible}
      .wf-stage{cursor:pointer;transition:opacity .25s ease}
      .wf-stage:not(.wf-active){opacity:.42}
      .wf-stage.wf-active{opacity:1}
      .wf-lbl{font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:700;fill:rgba(246,243,238,0.5);pointer-events:none;dominant-baseline:central}
      .wf-lbl-active{fill:rgba(246,243,238,0.9)}
      .wf-stage.wf-active .wf-lbl{fill:rgba(246,243,238,0.92)}
      .wf-num{font-family:'Inter',sans-serif;font-size:10px;font-weight:500;letter-spacing:.06em;fill:rgba(246,243,238,0.22);pointer-events:none}
      .wf-ml{font-family:'Inter',sans-serif;font-size:12.5px;font-weight:500;fill:rgba(246,243,238,0.28);pointer-events:none}
      .wf-mb{font-family:'Inter',sans-serif;font-size:8.5px;font-weight:700;fill:#3eff68;letter-spacing:.02em;pointer-events:none}
      .wf-glt{font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:700;letter-spacing:.08em;fill:#3eff68}
      .wf-gls{font-family:'Inter',sans-serif;font-size:8px;font-weight:400;letter-spacing:.04em;fill:rgba(62,255,104,0.45)}
`;
const sc = html.indexOf('</style>');
html = html.substring(0, sc) + NEW_CSS + html.substring(sc);
console.log('Inserted CSS');

// ── Remove old scripts ─────────────────────────────────────
let sp = 0;
while (true) {
  const si = html.indexOf('<script>(function(){', sp);
  if (si === -1) break;
  const chunk = html.substring(si, si + 200);
  if (chunk.includes('activateFunnel') || chunk.includes('fw2') || chunk.includes('funnelIdx') || chunk.includes('wf-active')) {
    const se = html.indexOf('</script>', si) + 9;
    html = html.substring(0, si) + html.substring(se);
    console.log('Removed old script');
  } else sp = si + 10;
}

// ── New interaction script ─────────────────────────────────
const SCRIPT = `<script>(function(){
var COLORS=['#3eff68','#5eead4','#818cf8','#fbbf24','#f472b6'];
function activate(idx){
document.querySelectorAll('[data-funnel-idx]').forEach(function(g,i){g.classList.toggle('wf-active',i===idx);var l=g.querySelector('.wf-lbl');if(l)l.setAttribute('fill',i===idx?'rgba(246,243,238,0.92)':'rgba(246,243,238,0.5)');});
document.querySelectorAll('[data-step-index]').forEach(function(s,i){s.classList.toggle('is-active',i===idx);var n=s.querySelector('.weflair-step__name');if(n)n.style.color=i===idx?COLORS[i]:'';});
}
function wire(){
var fs=document.querySelectorAll('[data-funnel-idx]');if(!fs.length)return setTimeout(wire,300);
activate(0);
fs.forEach(function(g){g.addEventListener('mouseenter',function(){activate(+g.dataset.funnelIdx);});g.addEventListener('click',function(){activate(+g.dataset.funnelIdx);});});
document.querySelectorAll('[data-step-index]').forEach(function(el){el.addEventListener('mouseenter',function(){activate(+el.dataset.stepIndex);});el.addEventListener('click',function(){activate(+el.dataset.stepIndex);});});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(wire,400);});else setTimeout(wire,400);
})();<\/script>`;

const me = html.indexOf('</section>', html.indexOf('id="method"')) + 10;
html = html.substring(0, me) + SCRIPT + html.substring(me);
console.log('Script inserted');

fs.writeFileSync(INDEX, html, 'utf8');
console.log('DONE — v5 applied');
