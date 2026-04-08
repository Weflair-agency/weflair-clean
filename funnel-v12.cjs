'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
let h = fs.readFileSync(FILE, 'utf8');

// ─── v12: bigger funnel + bigger flywheel + centered Growth Loops ────────────
// 1. Funnel shifted right (cx=460) and slightly narrower so arrows wrap around
// 2. Arrow ring scale 9 (was 8), centered at (460,286) — just touches UNCOVER/COMPOUND
// 3. Growth Loops centered ON the right arrow arc at (680,286)
// 4. Between-stage labels at x=460

const NEW_SVG_INNER = `
<defs>
<linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#191e19"/><stop offset="100%" stop-color="#121612"/></linearGradient>
<linearGradient id="fga" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a221a"/><stop offset="100%" stop-color="#131813"/></linearGradient>
</defs>

<!-- ═══ CONNECTOR LINES — visual bridge from left side ═══ -->
<line x1="0" y1="84" x2="220" y2="84" stroke="rgba(62,255,104,0.08)" stroke-width="1" stroke-dasharray="4,6" class="wf-connector" data-conn="0"/>
<line x1="0" y1="185" x2="252" y2="185" stroke="rgba(62,255,104,0.08)" stroke-width="1" stroke-dasharray="4,6" class="wf-connector" data-conn="1"/>
<line x1="0" y1="286" x2="284" y2="286" stroke="rgba(62,255,104,0.08)" stroke-width="1" stroke-dasharray="4,6" class="wf-connector" data-conn="2"/>
<line x1="0" y1="387" x2="316" y2="387" stroke="rgba(62,255,104,0.08)" stroke-width="1" stroke-dasharray="4,6" class="wf-connector" data-conn="3"/>
<line x1="0" y1="488" x2="348" y2="488" stroke="rgba(62,255,104,0.08)" stroke-width="1" stroke-dasharray="4,6" class="wf-connector" data-conn="4"/>

<!-- ═══ RECYCLING ARROWS — scale 9, centered at (460,286), dimmed 45% ═══ -->
<g transform="translate(460, 286) scale(9) translate(-84.621, -40.031)" opacity="0.45">
  <path d="M 101.476562 50.785156 L 102.59375 56.441406 L 107.347656 54 C 99.851562 64.765625 89.605469 69.117188 75.957031 65.507812 L 75.039062 67.863281 L 70.132812 58.972656 L 79.921875 56.917969 L 78.789062 59.355469 C 87.507812 62.082031 94.5625 59.082031 101.476562 50.785156 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 73.871094 56.886719 L 68.210938 58 L 70.65625 62.757812 C 59.886719 55.261719 55.535156 45.015625 59.144531 31.367188 L 56.792969 30.449219 L 65.679688 25.539062 L 67.734375 35.332031 L 65.300781 34.199219 C 62.570312 42.917969 65.570312 49.972656 73.871094 56.886719 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 67.769531 29.277344 L 66.65625 23.621094 L 61.902344 26.0625 C 69.394531 15.296875 79.640625 10.945312 93.289062 14.554688 L 94.207031 12.203125 L 99.117188 21.089844 L 89.324219 23.144531 L 90.457031 20.710938 C 81.738281 17.980469 74.6875 20.980469 67.769531 29.277344 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 95.375 23.179688 L 101.03125 22.0625 L 98.589844 17.308594 C 109.359375 24.804688 113.707031 35.046875 110.097656 48.699219 L 112.453125 49.613281 L 103.566406 54.523438 L 101.507812 44.730469 L 103.945312 45.863281 C 106.671875 37.148438 103.671875 30.09375 95.375 23.179688 Z" fill="#3eff68" fill-rule="evenodd"/>
</g>

<!-- ═══ FUNNEL — center x=460, wraps inside the arrow ring ═══ -->

<g data-funnel-idx="0" class="wf-stage">
  <path d="M 220,46 L 700,46 L 668,122 L 252,122 Z" fill="url(#fg)" fill-opacity="0.96" stroke="rgba(62,255,104,0.14)" stroke-width="1"/>
  <text class="wf-lbl" x="460" y="92" font-family="'Space Grotesk',sans-serif" font-size="24" font-weight="700" fill="rgba(246,243,238,0.45)" text-anchor="middle" letter-spacing="0.04em">UNCOVER</text>
</g>

<text x="460" y="138" font-family="Inter,sans-serif" font-size="10" fill="rgba(246,243,238,0.22)" text-anchor="middle">Impressions</text>

<g data-funnel-idx="1" class="wf-stage">
  <path d="M 252,147 L 668,147 L 636,223 L 284,223 Z" fill="url(#fg)" fill-opacity="0.96" stroke="rgba(62,255,104,0.14)" stroke-width="1"/>
  <text class="wf-lbl" x="460" y="193" font-family="'Space Grotesk',sans-serif" font-size="24" font-weight="700" fill="rgba(246,243,238,0.45)" text-anchor="middle" letter-spacing="0.04em">GENERATE</text>
</g>

<text x="460" y="239" font-family="Inter,sans-serif" font-size="10" fill="rgba(246,243,238,0.22)" text-anchor="middle">Clicks</text>

<g data-funnel-idx="2" class="wf-stage">
  <path d="M 284,248 L 636,248 L 604,324 L 316,324 Z" fill="url(#fg)" fill-opacity="0.96" stroke="rgba(62,255,104,0.14)" stroke-width="1"/>
  <text class="wf-lbl" x="460" y="294" font-family="'Space Grotesk',sans-serif" font-size="24" font-weight="700" fill="rgba(246,243,238,0.45)" text-anchor="middle" letter-spacing="0.04em">CAPTURE</text>
</g>

<text x="460" y="340" font-family="Inter,sans-serif" font-size="10" fill="rgba(246,243,238,0.22)" text-anchor="middle">Leads</text>

<g data-funnel-idx="3" class="wf-stage">
  <path d="M 316,349 L 604,349 L 572,425 L 348,425 Z" fill="url(#fg)" fill-opacity="0.96" stroke="rgba(62,255,104,0.14)" stroke-width="1"/>
  <text class="wf-lbl" x="460" y="395" font-family="'Space Grotesk',sans-serif" font-size="24" font-weight="700" fill="rgba(246,243,238,0.45)" text-anchor="middle" letter-spacing="0.04em">CONVERT</text>
</g>

<text x="460" y="441" font-family="Inter,sans-serif" font-size="10" fill="rgba(246,243,238,0.22)" text-anchor="middle">Pipeline</text>

<g data-funnel-idx="4" class="wf-stage">
  <path d="M 348,450 L 572,450 L 540,526 L 380,526 Z" fill="url(#fga)" fill-opacity="0.96" stroke="rgba(62,255,104,0.20)" stroke-width="1.5"/>
  <text class="wf-lbl" x="460" y="496" font-family="'Space Grotesk',sans-serif" font-size="24" font-weight="700" fill="rgba(246,243,238,0.45)" text-anchor="middle" letter-spacing="0.04em">COMPOUND</text>
</g>

<!-- ═══ GROWTH LOOPS — centered ON the right arrow arc ═══ -->
<rect x="620" y="260" width="120" height="52" rx="10" fill="rgba(14,17,14,0.82)" stroke="rgba(62,255,104,0.18)" stroke-width="1"/>
<text x="680" y="283" font-family="'Space Grotesk',sans-serif" font-size="13" font-weight="700" fill="rgba(246,243,238,0.75)" text-anchor="middle" letter-spacing="0.06em">GROWTH</text>
<text x="680" y="301" font-family="'Space Grotesk',sans-serif" font-size="13" font-weight="700" fill="rgba(246,243,238,0.75)" text-anchor="middle" letter-spacing="0.06em">LOOPS</text>
`;

// ─── Replace SVG inner content ───────────────────────────────────────────────
const svgStart = h.indexOf('<svg class="wf-fv5-svg"');
if (svgStart === -1) { console.error('ERROR: no svg found'); process.exit(1); }
const svgTagEnd = h.indexOf('>', svgStart) + 1;
const svgClose = h.indexOf('</svg>', svgStart);
if (svgTagEnd === 0 || svgClose === -1) { console.error('ERROR: malformed SVG'); process.exit(1); }

console.log('Replacing SVG inner: chars ' + svgTagEnd + ' to ' + svgClose);
h = h.slice(0, svgTagEnd) + NEW_SVG_INNER + h.slice(svgClose);

fs.writeFileSync(FILE, h);
console.log('v12 applied — bigger funnel + bigger flywheel + Growth Loops on arrow arc');
