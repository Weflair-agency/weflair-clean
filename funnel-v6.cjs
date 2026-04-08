'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
let h = fs.readFileSync(FILE, 'utf8');

// ─── 1. Fix max-width on .wf-fv5 so it fills the column ─────────────────────
h = h.replace(
  '.wf-fv5{position:relative;width:100%;margin:0 auto;display:flex;align-items:center;justify-content:center}',
  '.wf-fv5{position:relative;width:100%;max-width:none!important;margin:0 auto;display:flex;align-items:center;justify-content:center}'
);

// ─── 2. Build the new SVG block ──────────────────────────────────────────────
const NEW_BLOCK = `<div class="weflair-ring-wrap wf-fv5"><svg class="wf-fv5-svg" viewBox="0 0 960 560" xmlns="http://www.w3.org/2000/svg" fill="none">
<defs>
<filter id="ag"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1d221d" stop-opacity="0.82"/><stop offset="100%" stop-color="#141714" stop-opacity="0.82"/></linearGradient>
<linearGradient id="fga" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a2b1a" stop-opacity="0.90"/><stop offset="100%" stop-color="#111711" stop-opacity="0.90"/></linearGradient>
</defs>

<!-- ═══ ARROWS — drawn FIRST so funnel renders on top ═══ -->

<!-- Arrow 1: top semicircle going clockwise (left→top→right), arrowhead at bottom-right -->
<path d="M 552,282 C 552,92 636,40 728,40 C 820,40 904,92 904,282"
  stroke="#3eff68" stroke-width="28" stroke-linecap="round" fill="none" filter="url(#ag)"/>
<!-- Arrowhead pointing DOWN at (904,282) — big fat triangle, 52px wide 38px tall -->
<polygon points="878,252 930,252 904,290" fill="#3eff68" filter="url(#ag)"/>

<!-- Arrow 2: bottom semicircle going clockwise (right→bottom→left), arrowhead at top-left -->
<path d="M 904,296 C 904,484 820,520 728,520 C 636,520 552,484 552,296"
  stroke="#3eff68" stroke-width="28" stroke-linecap="round" fill="none" filter="url(#ag)"/>
<!-- Arrowhead pointing UP at (552,296) — big fat triangle, 52px wide 38px tall -->
<polygon points="526,326 578,326 552,288" fill="#3eff68" filter="url(#ag)"/>

<!-- Growth Loops pill — centered in the oval -->
<rect x="668" y="258" width="120" height="64" rx="10" fill="#0e110e" stroke="#3eff68" stroke-width="1.5" stroke-opacity="0.45"/>
<text x="728" y="283" font-family="'Space Grotesk',sans-serif" font-size="11" font-weight="700" fill="#3eff68" fill-opacity="0.9" text-anchor="middle" letter-spacing="0.08em">GROWTH</text>
<text x="728" y="302" font-family="'Space Grotesk',sans-serif" font-size="11" font-weight="700" fill="#3eff68" fill-opacity="0.9" text-anchor="middle" letter-spacing="0.08em">LOOPS</text>
<text x="728" y="317" font-family="Inter,sans-serif" font-size="9" fill="rgba(246,243,238,0.35)" text-anchor="middle">Retention · Referral</text>

<!-- ═══ FUNNEL STAGES — on top, semi-transparent ═══ -->

<!-- Stage 0: UNCOVER (Awareness) -->
<g data-funnel-idx="0" class="wf-stage">
  <path d="M 28,32 L 512,32 L 476,112 L 64,112 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.16)" stroke-width="1"/>
  <text class="wf-lbl" x="270" y="78" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">UNCOVER</text>
  <text x="270" y="101" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Awareness &amp; Reach</text>
</g>

<!-- Metric badge: CTR -->
<rect x="234" y="122" width="72" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="270" y="136" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">CTR  3–8%</text>

<!-- Stage 1: GENERATE (Traffic) -->
<g data-funnel-idx="1" class="wf-stage">
  <path d="M 64,146 L 476,146 L 438,226 L 102,226 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.16)" stroke-width="1"/>
  <text class="wf-lbl" x="270" y="192" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">GENERATE</text>
  <text x="270" y="215" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Traffic &amp; Prospects</text>
</g>

<!-- Metric badge: Click → Lead -->
<rect x="200" y="236" width="140" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="270" y="250" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">Click → Lead  12–18%</text>

<!-- Stage 2: CAPTURE (Leads) -->
<g data-funnel-idx="2" class="wf-stage">
  <path d="M 102,260 L 438,260 L 400,340 L 140,340 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.16)" stroke-width="1"/>
  <text class="wf-lbl" x="270" y="306" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">CAPTURE</text>
  <text x="270" y="329" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Leads &amp; Contenders</text>
</g>

<!-- Metric badge: Demo → Opp -->
<rect x="202" y="350" width="136" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="270" y="364" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">Demo → Opp  30–40%</text>

<!-- Stage 3: CONVERT (Demos) -->
<g data-funnel-idx="3" class="wf-stage">
  <path d="M 140,374 L 400,374 L 362,454 L 178,454 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.16)" stroke-width="1"/>
  <text class="wf-lbl" x="270" y="420" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">CONVERT</text>
  <text x="270" y="443" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Meetings &amp; Demos</text>
</g>

<!-- Metric badge: Close rate -->
<rect x="216" y="464" width="108" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="270" y="478" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">Close  25–40%</text>

<!-- Stage 4: COMPOUND (Customers) — slightly brighter active indicator -->
<g data-funnel-idx="4" class="wf-stage">
  <path d="M 178,488 L 362,488 L 338,540 L 202,540 Z" fill="url(#fga)" stroke="rgba(62,255,104,0.26)" stroke-width="1.5"/>
  <text class="wf-lbl" x="270" y="522" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">COMPOUND</text>
</g>

</svg></div>`;

// ─── 3. Replace the old SVG div block ────────────────────────────────────────
// Find: <div class="weflair-ring-wrap wf-fv5"> ... </svg></div>
const divPat = /(<div class="weflair-ring-wrap wf-fv[^>]*>)[\s\S]*?<\/svg><\/div>/;
if (!divPat.test(h)) {
  console.error('ERROR: Could not find the wf-fv5 div block to replace!');
  process.exit(1);
}
h = h.replace(divPat, NEW_BLOCK);
console.log('✓ SVG block replaced');

// ─── 4. Write file ────────────────────────────────────────────────────────────
fs.writeFileSync(FILE, h);
console.log('✓ index.html updated');
console.log('Key changes:');
console.log('  • max-width:none!important on .wf-fv5 (was 34rem = 544px)');
console.log('  • ViewBox 0 0 960 560 (wider, better proportions)');
console.log('  • Two large 28px-stroke arrows to RIGHT of funnel (semicircle arcs)');
console.log('  • Big fat arrowheads (52px wide triangles)');
console.log('  • Growth Loops box centered in the arrow oval');
console.log('  • 5 funnel stages with data-funnel-idx for hover sync');
