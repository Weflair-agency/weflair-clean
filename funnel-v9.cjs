'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
let h = fs.readFileSync(FILE, 'utf8');

// ─── Complete rebuild: clean, professional, matching reference exactly ────────
// • Funnel shifted +60px right (center at x=330)
// • Recycling arrows scaled 8x, centered at (480, 286) — spans full funnel height
// • NO glow filter, NO blur, NO radiating effects
// • Growth Loops box INSIDE the circle (center-right area)
// • Solid clean #3eff68 arrows, no opacity games

const NEW_SVG_INNER = `
<defs>
<linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2e3e2e" stop-opacity="0.96"/><stop offset="100%" stop-color="#1e2e1e" stop-opacity="0.96"/></linearGradient>
<linearGradient id="fga" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#253625" stop-opacity="1.0"/><stop offset="100%" stop-color="#1b281b" stop-opacity="1.0"/></linearGradient>
</defs>

<!-- ═══ RECYCLING ARROWS — FIRST layer (behind funnel) ═══ -->
<!-- Canva 4-arrow pinwheel, scale 8x, center at (480, 286) -->
<!-- NO filter, NO glow — clean solid arrows -->
<g transform="translate(480, 286) scale(8) translate(-84.621, -40.031)">
  <path d="M 101.476562 50.785156 L 102.59375 56.441406 L 107.347656 54 C 99.851562 64.765625 89.605469 69.117188 75.957031 65.507812 L 75.039062 67.863281 L 70.132812 58.972656 L 79.921875 56.917969 L 78.789062 59.355469 C 87.507812 62.082031 94.5625 59.082031 101.476562 50.785156 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 73.871094 56.886719 L 68.210938 58 L 70.65625 62.757812 C 59.886719 55.261719 55.535156 45.015625 59.144531 31.367188 L 56.792969 30.449219 L 65.679688 25.539062 L 67.734375 35.332031 L 65.300781 34.199219 C 62.570312 42.917969 65.570312 49.972656 73.871094 56.886719 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 67.769531 29.277344 L 66.65625 23.621094 L 61.902344 26.0625 C 69.394531 15.296875 79.640625 10.945312 93.289062 14.554688 L 94.207031 12.203125 L 99.117188 21.089844 L 89.324219 23.144531 L 90.457031 20.710938 C 81.738281 17.980469 74.6875 20.980469 67.769531 29.277344 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 95.375 23.179688 L 101.03125 22.0625 L 98.589844 17.308594 C 109.359375 24.804688 113.707031 35.046875 110.097656 48.699219 L 112.453125 49.613281 L 103.566406 54.523438 L 101.507812 44.730469 L 103.945312 45.863281 C 106.671875 37.148438 103.671875 30.09375 95.375 23.179688 Z" fill="#3eff68" fill-rule="evenodd"/>
</g>

<!-- ═══ FUNNEL STAGES — SECOND layer (on top of arrows) ═══ -->
<!-- All shifted +60px right, center now at x=330 -->

<g data-funnel-idx="0" class="wf-stage">
  <path d="M 88,32 L 572,32 L 536,112 L 124,112 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.35)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="78" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">UNCOVER</text>
  <text x="330" y="101" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Awareness &amp; Reach</text>
</g>

<rect x="294" y="122" width="72" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="330" y="136" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">CTR  3\u20138%</text>

<g data-funnel-idx="1" class="wf-stage">
  <path d="M 124,146 L 536,146 L 498,226 L 162,226 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.35)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="192" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">GENERATE</text>
  <text x="330" y="215" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Traffic &amp; Prospects</text>
</g>

<rect x="260" y="236" width="140" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="330" y="250" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">Click \u2192 Lead  12\u201318%</text>

<g data-funnel-idx="2" class="wf-stage">
  <path d="M 162,260 L 498,260 L 460,340 L 200,340 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.35)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="306" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">CAPTURE</text>
  <text x="330" y="329" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Leads &amp; Contenders</text>
</g>

<rect x="262" y="350" width="136" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="330" y="364" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">Demo \u2192 Opp  30\u201340%</text>

<g data-funnel-idx="3" class="wf-stage">
  <path d="M 200,374 L 460,374 L 422,454 L 238,454 Z" fill="url(#fg)" stroke="rgba(62,255,104,0.35)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="420" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">CONVERT</text>
  <text x="330" y="443" font-family="Inter,sans-serif" font-size="12" fill="rgba(246,243,238,0.3)" text-anchor="middle">Meetings &amp; Demos</text>
</g>

<rect x="276" y="464" width="108" height="20" rx="10" fill="#3eff68" fill-opacity="0.10" stroke="#3eff68" stroke-width="0.8" stroke-opacity="0.35"/>
<text x="330" y="478" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#3eff68" fill-opacity="0.85" text-anchor="middle">Close  25\u201340%</text>

<g data-funnel-idx="4" class="wf-stage">
  <path d="M 238,488 L 422,488 L 398,540 L 262,540 Z" fill="url(#fga)" stroke="rgba(62,255,104,0.50)" stroke-width="1.5"/>
  <text class="wf-lbl" x="330" y="522" font-family="'Space Grotesk',sans-serif" font-size="19" font-weight="700" fill="rgba(246,243,238,0.5)" text-anchor="middle" letter-spacing="0.06em">COMPOUND</text>
</g>

<!-- ═══ GROWTH LOOPS — INSIDE the circle, center-right ═══ -->
<rect x="580" y="254" width="126" height="64" rx="10" fill="rgba(14,17,14,0.70)" stroke="rgba(62,255,104,0.30)" stroke-width="1.5"/>
<text x="643" y="282" font-family="'Space Grotesk',sans-serif" font-size="16" font-weight="700" fill="#f6f3ee" fill-opacity="0.85" text-anchor="middle">Growth</text>
<text x="643" y="304" font-family="'Space Grotesk',sans-serif" font-size="16" font-weight="700" fill="#f6f3ee" fill-opacity="0.85" text-anchor="middle">Loops</text>
`;

// ─── Replace SVG inner content ───────────────────────────────────────────────
const svgStart = h.indexOf('<svg class="wf-fv5-svg"');
if (svgStart === -1) {
  console.error('ERROR: Could not find <svg class="wf-fv5-svg"');
  process.exit(1);
}
const svgTagEnd = h.indexOf('>', svgStart) + 1;
const svgClose = h.indexOf('</svg>', svgStart);
if (svgTagEnd === 0 || svgClose === -1) {
  console.error('ERROR: Malformed SVG structure');
  process.exit(1);
}

console.log('Replacing SVG inner content: chars ' + svgTagEnd + ' to ' + svgClose);
h = h.slice(0, svgTagEnd) + NEW_SVG_INNER + h.slice(svgClose);

fs.writeFileSync(FILE, h);
console.log('Done. Changes:');
console.log('  - NO glow, NO blur, NO filter — clean solid arrows');
console.log('  - Arrows scaled 8x, center at (480,286) — spans full funnel height');
console.log('  - Funnel shifted +60px right (center at 330)');
console.log('  - Growth Loops INSIDE the circle (center-right at x=643)');
console.log('  - Professional clean design');
