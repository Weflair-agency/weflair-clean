'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
let h = fs.readFileSync(FILE, 'utf8');

// ─── New SVG inner content using Canva recycling arrows ──────────────────────
// The 4 arrow paths are from the Canva SVG, scaled 5.8x and centered at (730, 280)
// Original bounding box center: (84.621, 40.031)
// Transform: translate(730, 280) scale(5.8) translate(-84.621, -40.031)

const NEW_SVG_INNER = `
<defs>
<filter id="ag"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2e3e2e" stop-opacity="0.96"/><stop offset="100%" stop-color="#1e2e1e" stop-opacity="0.96"/></linearGradient>
<linearGradient id="fga" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#253625" stop-opacity="1.0"/><stop offset="100%" stop-color="#1b281b" stop-opacity="1.0"/></linearGradient>
</defs>

<!-- ═══ RECYCLING ARROWS (Canva design, scaled + recolored) ═══ -->
<g transform="translate(730, 280) scale(5.8) translate(-84.621, -40.031)" filter="url(#ag)">

<!-- Arrow 1: right-center → bottom -->
<path d="M 101.476562 50.785156 L 102.59375 56.441406 L 107.347656 54 C 99.851562 64.765625 89.605469 69.117188 75.957031 65.507812 L 75.039062 67.863281 L 70.132812 58.972656 L 79.921875 56.917969 L 78.789062 59.355469 C 87.507812 62.082031 94.5625 59.082031 101.476562 50.785156 Z" fill="#3eff68" fill-opacity="0.92" fill-rule="evenodd"/>

<!-- Arrow 2: bottom → left -->
<path d="M 73.871094 56.886719 L 68.210938 58 L 70.65625 62.757812 C 59.886719 55.261719 55.535156 45.015625 59.144531 31.367188 L 56.792969 30.449219 L 65.679688 25.539062 L 67.734375 35.332031 L 65.300781 34.199219 C 62.570312 42.917969 65.570312 49.972656 73.871094 56.886719 Z" fill="#3eff68" fill-opacity="0.92" fill-rule="evenodd"/>

<!-- Arrow 3: left → top -->
<path d="M 67.769531 29.277344 L 66.65625 23.621094 L 61.902344 26.0625 C 69.394531 15.296875 79.640625 10.945312 93.289062 14.554688 L 94.207031 12.203125 L 99.117188 21.089844 L 89.324219 23.144531 L 90.457031 20.710938 C 81.738281 17.980469 74.6875 20.980469 67.769531 29.277344 Z" fill="#3eff68" fill-opacity="0.92" fill-rule="evenodd"/>

<!-- Arrow 4: top → right-center -->
<path d="M 95.375 23.179688 L 101.03125 22.0625 L 98.589844 17.308594 C 109.359375 24.804688 113.707031 35.046875 110.097656 48.699219 L 112.453125 49.613281 L 103.566406 54.523438 L 101.507812 44.730469 L 103.945312 45.863281 C 106.671875 37.148438 103.671875 30.09375 95.375 23.179688 Z" fill="#3eff68" fill-opacity="0.92" fill-rule="evenodd"/>

</g>

<!-- Growth Loops label — centered in the recycling icon -->
<rect x="670" y="252" width="120" height="56" rx="10" fill="#0e110e" stroke="#3eff68" stroke-width="1.5" stroke-opacity="0.45"/>
<text x="730" y="275" font-family="'Space Grotesk',sans-serif" font-size="12" font-weight="700" fill="#3eff68" fill-opacity="0.9" text-anchor="middle" letter-spacing="0.08em">GROWTH</text>
<text x="730" y="293" font-family="'Space Grotesk',sans-serif" font-size="12" font-weight="700" fill="#3eff68" fill-opacity="0.9" text-anchor="middle" letter-spacing="0.08em">LOOPS</text>

<!-- ═══ FUNNEL STAGES — on top, semi-transparent ═══ -->

<!-- Stage 0: UNCOVER (Awareness) -->
<g data-funnel-idx="0" class="wf-stage">
  <path d="M 28,32 L 512,32 L 476,112 L 64,112 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.42)" stroke-width="1"/>
  <text class="wf-lbl" x="270" y="78" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">UNCOVER</text>
  <text x="270" y="101" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Awareness &amp; Reach</text>
</g>

<!-- Metric badge: CTR -->
<rect x="234" y="122" width="72" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="270" y="136" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">CTR  3\u20138%</text>

<!-- Stage 1: GENERATE (Traffic) -->
<g data-funnel-idx="1" class="wf-stage">
  <path d="M 64,146 L 476,146 L 438,226 L 102,226 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.42)" stroke-width="1"/>
  <text class="wf-lbl" x="270" y="192" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">GENERATE</text>
  <text x="270" y="215" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Traffic &amp; Prospects</text>
</g>

<!-- Metric badge: Click > Lead -->
<rect x="200" y="236" width="140" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="270" y="250" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">Click \u2192 Lead  12\u201318%</text>

<!-- Stage 2: CAPTURE (Leads) -->
<g data-funnel-idx="2" class="wf-stage">
  <path d="M 102,260 L 438,260 L 400,340 L 140,340 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.42)" stroke-width="1"/>
  <text class="wf-lbl" x="270" y="306" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">CAPTURE</text>
  <text x="270" y="329" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Leads &amp; Contenders</text>
</g>

<!-- Metric badge: Demo > Opp -->
<rect x="202" y="350" width="136" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="270" y="364" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">Demo \u2192 Opp  30\u201340%</text>

<!-- Stage 3: CONVERT (Demos) -->
<g data-funnel-idx="3" class="wf-stage">
  <path d="M 140,374 L 400,374 L 362,454 L 178,454 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.42)" stroke-width="1"/>
  <text class="wf-lbl" x="270" y="420" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">CONVERT</text>
  <text x="270" y="443" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Meetings &amp; Demos</text>
</g>

<!-- Metric badge: Close rate -->
<rect x="216" y="464" width="108" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="270" y="478" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">Close  25\u201340%</text>

<!-- Stage 4: COMPOUND (Customers) -->
<g data-funnel-idx="4" class="wf-stage">
  <path d="M 178,488 L 362,488 L 338,540 L 202,540 Z" fill="url(#fga)" stroke="rgba(62,255,104,0.60)" stroke-width="1.5"/>
  <text class="wf-lbl" x="270" y="522" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">COMPOUND</text>
</g>
`;

// ─── Find and replace the SVG inner content ──────────────────────────────────
const svgStart = h.indexOf('<svg class="wf-fv5-svg"');
if (svgStart === -1) {
  console.error('ERROR: Could not find <svg class="wf-fv5-svg"');
  process.exit(1);
}

// Find the end of the opening <svg> tag
const svgTagEnd = h.indexOf('>', svgStart) + 1;
// Find the closing </svg>
const svgClose = h.indexOf('</svg>', svgStart);

if (svgTagEnd === 0 || svgClose === -1) {
  console.error('ERROR: Malformed SVG structure');
  process.exit(1);
}

console.log(`SVG inner content: chars ${svgTagEnd} to ${svgClose}`);
console.log(`Replacing ${svgClose - svgTagEnd} chars of inner SVG`);

// Replace inner content
h = h.slice(0, svgTagEnd) + NEW_SVG_INNER + h.slice(svgClose);

fs.writeFileSync(FILE, h);
console.log('✓ index.html updated with Canva recycling arrows');
console.log('Changes:');
console.log('  • 4-arrow recycling pinwheel from Canva SVG');
console.log('  • Scaled 5.8x, centered at (730, 280)');
console.log('  • Color: #3eff68 brand green with 0.92 opacity');
console.log('  • Glow filter applied');
console.log('  • Growth Loops label centered in recycling icon');
console.log('  • All 5 funnel stages preserved with hover sync');
