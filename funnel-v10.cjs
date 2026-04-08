'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
let h = fs.readFileSync(FILE, 'utf8');

const NEW_SVG_INNER = `
<defs>
<linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#191e19"/><stop offset="100%" stop-color="#121612"/></linearGradient>
<linearGradient id="fga" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a221a"/><stop offset="100%" stop-color="#121612"/></linearGradient>
</defs>

<!-- ═══ RECYCLING ARROWS — behind everything, dimmed ═══ -->
<g transform="translate(480, 286) scale(8) translate(-84.621, -40.031)" opacity="0.55">
  <path d="M 101.476562 50.785156 L 102.59375 56.441406 L 107.347656 54 C 99.851562 64.765625 89.605469 69.117188 75.957031 65.507812 L 75.039062 67.863281 L 70.132812 58.972656 L 79.921875 56.917969 L 78.789062 59.355469 C 87.507812 62.082031 94.5625 59.082031 101.476562 50.785156 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 73.871094 56.886719 L 68.210938 58 L 70.65625 62.757812 C 59.886719 55.261719 55.535156 45.015625 59.144531 31.367188 L 56.792969 30.449219 L 65.679688 25.539062 L 67.734375 35.332031 L 65.300781 34.199219 C 62.570312 42.917969 65.570312 49.972656 73.871094 56.886719 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 67.769531 29.277344 L 66.65625 23.621094 L 61.902344 26.0625 C 69.394531 15.296875 79.640625 10.945312 93.289062 14.554688 L 94.207031 12.203125 L 99.117188 21.089844 L 89.324219 23.144531 L 90.457031 20.710938 C 81.738281 17.980469 74.6875 20.980469 67.769531 29.277344 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 95.375 23.179688 L 101.03125 22.0625 L 98.589844 17.308594 C 109.359375 24.804688 113.707031 35.046875 110.097656 48.699219 L 112.453125 49.613281 L 103.566406 54.523438 L 101.507812 44.730469 L 103.945312 45.863281 C 106.671875 37.148438 103.671875 30.09375 95.375 23.179688 Z" fill="#3eff68" fill-rule="evenodd"/>
</g>

<!-- ═══ FUNNEL — on top, near-opaque dark backgrounds ═══ -->
<!-- Each stage: ONLY the bold stage name. Subtitles + metrics between stages. -->

<!-- Stage 0 -->
<g data-funnel-idx="0" class="wf-stage">
  <path d="M 88,26 L 572,26 L 540,98 L 120,98 Z" fill="url(#fg)" fill-opacity="0.94" stroke="rgba(62,255,104,0.18)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="72" font-family="'Space Grotesk',sans-serif" font-size="22" font-weight="700" fill="rgba(246,243,238,0.38)" text-anchor="middle" letter-spacing="0.05em">UNCOVER</text>
</g>
<!-- Between 0-1 -->
<text x="330" y="116" font-family="Inter,sans-serif" font-size="11" fill="rgba(246,243,238,0.25)" text-anchor="middle">Impressions</text>
<rect x="296" y="122" width="68" height="18" rx="9" fill="rgba(62,255,104,0.08)" stroke="rgba(62,255,104,0.25)" stroke-width="0.7"/>
<text x="330" y="134" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="rgba(62,255,104,0.7)" text-anchor="middle">CTR%</text>

<!-- Stage 1 -->
<g data-funnel-idx="1" class="wf-stage">
  <path d="M 120,148 L 540,148 L 506,220 L 154,220 Z" fill="url(#fg)" fill-opacity="0.94" stroke="rgba(62,255,104,0.18)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="194" font-family="'Space Grotesk',sans-serif" font-size="22" font-weight="700" fill="rgba(246,243,238,0.38)" text-anchor="middle" letter-spacing="0.05em">GENERATE</text>
</g>
<!-- Between 1-2 -->
<text x="330" y="238" font-family="Inter,sans-serif" font-size="11" fill="rgba(246,243,238,0.25)" text-anchor="middle">Clicks</text>
<rect x="280" y="244" width="100" height="18" rx="9" fill="rgba(62,255,104,0.08)" stroke="rgba(62,255,104,0.25)" stroke-width="0.7"/>
<text x="330" y="256" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="rgba(62,255,104,0.7)" text-anchor="middle">Click &gt; Lead%</text>

<!-- Stage 2 -->
<g data-funnel-idx="2" class="wf-stage">
  <path d="M 154,268 L 506,268 L 470,340 L 190,340 Z" fill="url(#fg)" fill-opacity="0.94" stroke="rgba(62,255,104,0.18)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="314" font-family="'Space Grotesk',sans-serif" font-size="22" font-weight="700" fill="rgba(246,243,238,0.38)" text-anchor="middle" letter-spacing="0.05em">CAPTURE</text>
</g>
<!-- Between 2-3 -->
<text x="330" y="358" font-family="Inter,sans-serif" font-size="11" fill="rgba(246,243,238,0.25)" text-anchor="middle">Leads</text>
<rect x="284" y="364" width="92" height="18" rx="9" fill="rgba(62,255,104,0.08)" stroke="rgba(62,255,104,0.25)" stroke-width="0.7"/>
<text x="330" y="376" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="rgba(62,255,104,0.7)" text-anchor="middle">Demo &gt; Opp%</text>

<!-- Stage 3 -->
<g data-funnel-idx="3" class="wf-stage">
  <path d="M 190,388 L 470,388 L 434,460 L 226,460 Z" fill="url(#fg)" fill-opacity="0.94" stroke="rgba(62,255,104,0.18)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="434" font-family="'Space Grotesk',sans-serif" font-size="22" font-weight="700" fill="rgba(246,243,238,0.38)" text-anchor="middle" letter-spacing="0.05em">CONVERT</text>
</g>
<!-- Between 3-4 -->
<text x="330" y="478" font-family="Inter,sans-serif" font-size="11" fill="rgba(246,243,238,0.25)" text-anchor="middle">Pipeline</text>
<rect x="284" y="484" width="92" height="18" rx="9" fill="rgba(62,255,104,0.08)" stroke="rgba(62,255,104,0.25)" stroke-width="0.7"/>
<text x="330" y="496" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="rgba(62,255,104,0.7)" text-anchor="middle">Opp &gt; Won%</text>

<!-- Stage 4 -->
<g data-funnel-idx="4" class="wf-stage">
  <path d="M 226,508 L 434,508 L 408,560 L 252,560 Z" fill="url(#fga)" fill-opacity="0.94" stroke="rgba(62,255,104,0.25)" stroke-width="1.5"/>
  <text class="wf-lbl" x="330" y="544" font-family="'Space Grotesk',sans-serif" font-size="22" font-weight="700" fill="rgba(246,243,238,0.38)" text-anchor="middle" letter-spacing="0.05em">COMPOUND</text>
</g>

<!-- ═══ GROWTH LOOPS — inside circle, center-right ═══ -->
<rect x="580" y="254" width="126" height="64" rx="10" fill="rgba(14,17,14,0.75)" stroke="rgba(62,255,104,0.22)" stroke-width="1.5"/>
<text x="643" y="282" font-family="'Space Grotesk',sans-serif" font-size="16" font-weight="700" fill="#f6f3ee" fill-opacity="0.8" text-anchor="middle">Growth</text>
<text x="643" y="304" font-family="'Space Grotesk',sans-serif" font-size="16" font-weight="700" fill="#f6f3ee" fill-opacity="0.8" text-anchor="middle">Loops</text>
`;

// ─── Also update the CSS for active/inactive states ──────────────────────────
// Active: white bold text. Inactive: muted gray.
const OLD_CSS_STAGE = '.wf-stage:not(.wf-active){opacity:.42}';
const NEW_CSS_STAGE = '.wf-stage:not(.wf-active){opacity:.65}';

const OLD_CSS_ACTIVE = '.wf-stage.wf-active{opacity:1}';
const NEW_CSS_ACTIVE = '.wf-stage.wf-active{opacity:1} .wf-stage.wf-active .wf-lbl{fill:rgba(246,243,238,0.95)!important}';

h = h.replace(OLD_CSS_STAGE, NEW_CSS_STAGE);
h = h.replace(OLD_CSS_ACTIVE, NEW_CSS_ACTIVE);

// ─── Replace SVG inner content ───────────────────────────────────────────────
const svgStart = h.indexOf('<svg class="wf-fv5-svg"');
if (svgStart === -1) { console.error('ERROR: no svg found'); process.exit(1); }
const svgTagEnd = h.indexOf('>', svgStart) + 1;
const svgClose = h.indexOf('</svg>', svgStart);
if (svgTagEnd === 0 || svgClose === -1) { console.error('ERROR: malformed SVG'); process.exit(1); }

console.log('Replacing chars ' + svgTagEnd + ' to ' + svgClose);
h = h.slice(0, svgTagEnd) + NEW_SVG_INNER + h.slice(svgClose);

fs.writeFileSync(FILE, h);
console.log('Done — v10 applied');
console.log('  1. Arrows at 55% opacity — visible but not competing');
console.log('  2. Funnel stages 94% opaque dark — text readable');
console.log('  3. Each stage: ONLY bold name. Subtitles+metrics between stages');
console.log('  4. Active state: white bold. Inactive: muted gray');
console.log('  5. Between-stage labels: small muted text + tiny pill');
