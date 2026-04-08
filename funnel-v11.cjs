'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
let h = fs.readFileSync(FILE, 'utf8');

// ─── v11: All 7 fixes ───────────────────────────────────────────────────────
// 1. Arrows at 45% opacity (dimmer, recede)
// 2. Funnel fills full circle height (y=46 to y=526)
// 3. ONE plain gray label between stages (Impressions/Clicks/Leads/Pipeline)
// 4. Stage names white, bold, 24px
// 5. Growth Loops box overlaps the right arrow arc
// 6. Subtle connector lines from left edge into each funnel stage
// 7. No pills, no badges — plain text only

const NEW_SVG_INNER = `
<defs>
<linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#191e19"/><stop offset="100%" stop-color="#121612"/></linearGradient>
<linearGradient id="fga" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a221a"/><stop offset="100%" stop-color="#131813"/></linearGradient>
</defs>

<!-- ═══ SUBTLE CONNECTOR LINES — visual bridge from left side ═══ -->
<line x1="-20" y1="84" x2="68" y2="84" stroke="rgba(62,255,104,0.08)" stroke-width="1" stroke-dasharray="4,6" class="wf-connector" data-conn="0"/>
<line x1="-20" y1="185" x2="102" y2="185" stroke="rgba(62,255,104,0.08)" stroke-width="1" stroke-dasharray="4,6" class="wf-connector" data-conn="1"/>
<line x1="-20" y1="286" x2="140" y2="286" stroke="rgba(62,255,104,0.08)" stroke-width="1" stroke-dasharray="4,6" class="wf-connector" data-conn="2"/>
<line x1="-20" y1="387" x2="178" y2="387" stroke="rgba(62,255,104,0.08)" stroke-width="1" stroke-dasharray="4,6" class="wf-connector" data-conn="3"/>
<line x1="-20" y1="488" x2="216" y2="488" stroke="rgba(62,255,104,0.08)" stroke-width="1" stroke-dasharray="4,6" class="wf-connector" data-conn="4"/>

<!-- ═══ RECYCLING ARROWS — behind everything, dimmed 45% ═══ -->
<g transform="translate(480, 286) scale(8) translate(-84.621, -40.031)" opacity="0.45">
  <path d="M 101.476562 50.785156 L 102.59375 56.441406 L 107.347656 54 C 99.851562 64.765625 89.605469 69.117188 75.957031 65.507812 L 75.039062 67.863281 L 70.132812 58.972656 L 79.921875 56.917969 L 78.789062 59.355469 C 87.507812 62.082031 94.5625 59.082031 101.476562 50.785156 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 73.871094 56.886719 L 68.210938 58 L 70.65625 62.757812 C 59.886719 55.261719 55.535156 45.015625 59.144531 31.367188 L 56.792969 30.449219 L 65.679688 25.539062 L 67.734375 35.332031 L 65.300781 34.199219 C 62.570312 42.917969 65.570312 49.972656 73.871094 56.886719 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 67.769531 29.277344 L 66.65625 23.621094 L 61.902344 26.0625 C 69.394531 15.296875 79.640625 10.945312 93.289062 14.554688 L 94.207031 12.203125 L 99.117188 21.089844 L 89.324219 23.144531 L 90.457031 20.710938 C 81.738281 17.980469 74.6875 20.980469 67.769531 29.277344 Z" fill="#3eff68" fill-rule="evenodd"/>
  <path d="M 95.375 23.179688 L 101.03125 22.0625 L 98.589844 17.308594 C 109.359375 24.804688 113.707031 35.046875 110.097656 48.699219 L 112.453125 49.613281 L 103.566406 54.523438 L 101.507812 44.730469 L 103.945312 45.863281 C 106.671875 37.148438 103.671875 30.09375 95.375 23.179688 Z" fill="#3eff68" fill-rule="evenodd"/>
</g>

<!-- ═══ FUNNEL — taller, fills full circle, opaque dark ═══ -->

<g data-funnel-idx="0" class="wf-stage">
  <path d="M 68,46 L 592,46 L 558,122 L 102,122 Z" fill="url(#fg)" fill-opacity="0.96" stroke="rgba(62,255,104,0.14)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="93" font-family="'Space Grotesk',sans-serif" font-size="24" font-weight="700" fill="rgba(246,243,238,0.45)" text-anchor="middle" letter-spacing="0.04em">UNCOVER</text>
</g>

<text x="330" y="137" font-family="Inter,sans-serif" font-size="10" fill="rgba(246,243,238,0.22)" text-anchor="middle">Impressions</text>

<g data-funnel-idx="1" class="wf-stage">
  <path d="M 102,147 L 558,147 L 520,223 L 140,223 Z" fill="url(#fg)" fill-opacity="0.96" stroke="rgba(62,255,104,0.14)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="194" font-family="'Space Grotesk',sans-serif" font-size="24" font-weight="700" fill="rgba(246,243,238,0.45)" text-anchor="middle" letter-spacing="0.04em">GENERATE</text>
</g>

<text x="330" y="238" font-family="Inter,sans-serif" font-size="10" fill="rgba(246,243,238,0.22)" text-anchor="middle">Clicks</text>

<g data-funnel-idx="2" class="wf-stage">
  <path d="M 140,248 L 520,248 L 482,324 L 178,324 Z" fill="url(#fg)" fill-opacity="0.96" stroke="rgba(62,255,104,0.14)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="295" font-family="'Space Grotesk',sans-serif" font-size="24" font-weight="700" fill="rgba(246,243,238,0.45)" text-anchor="middle" letter-spacing="0.04em">CAPTURE</text>
</g>

<text x="330" y="339" font-family="Inter,sans-serif" font-size="10" fill="rgba(246,243,238,0.22)" text-anchor="middle">Leads</text>

<g data-funnel-idx="3" class="wf-stage">
  <path d="M 178,349 L 482,349 L 444,425 L 216,425 Z" fill="url(#fg)" fill-opacity="0.96" stroke="rgba(62,255,104,0.14)" stroke-width="1"/>
  <text class="wf-lbl" x="330" y="396" font-family="'Space Grotesk',sans-serif" font-size="24" font-weight="700" fill="rgba(246,243,238,0.45)" text-anchor="middle" letter-spacing="0.04em">CONVERT</text>
</g>

<text x="330" y="440" font-family="Inter,sans-serif" font-size="10" fill="rgba(246,243,238,0.22)" text-anchor="middle">Pipeline</text>

<g data-funnel-idx="4" class="wf-stage">
  <path d="M 216,450 L 444,450 L 414,526 L 246,526 Z" fill="url(#fga)" fill-opacity="0.96" stroke="rgba(62,255,104,0.20)" stroke-width="1.5"/>
  <text class="wf-lbl" x="330" y="497" font-family="'Space Grotesk',sans-serif" font-size="24" font-weight="700" fill="rgba(246,243,238,0.45)" text-anchor="middle" letter-spacing="0.04em">COMPOUND</text>
</g>

<!-- ═══ GROWTH LOOPS — overlapping the right arrow arc ═══ -->
<rect x="660" y="254" width="130" height="64" rx="10" fill="rgba(14,17,14,0.80)" stroke="rgba(62,255,104,0.20)" stroke-width="1.5"/>
<text x="725" y="282" font-family="'Space Grotesk',sans-serif" font-size="16" font-weight="700" fill="#f6f3ee" fill-opacity="0.80" text-anchor="middle">Growth</text>
<text x="725" y="304" font-family="'Space Grotesk',sans-serif" font-size="16" font-weight="700" fill="#f6f3ee" fill-opacity="0.80" text-anchor="middle">Loops</text>
`;

// ─── Update CSS ──────────────────────────────────────────────────────────────
// Fix active/inactive states + connector line brightening on hover
const OLD_STAGE_INACTIVE = '.wf-stage:not(.wf-active){opacity:.65}';
const NEW_STAGE_INACTIVE = '.wf-stage:not(.wf-active){opacity:.7}';

// The active CSS already has the !important fill rule from v10, update it
const OLD_ACTIVE = '.wf-stage.wf-active{opacity:1} .wf-stage.wf-active .wf-lbl{fill:rgba(246,243,238,0.95)!important}';
const NEW_ACTIVE = '.wf-stage.wf-active{opacity:1} .wf-stage.wf-active .wf-lbl{fill:rgba(246,243,238,0.95)!important} .wf-stage.wf-active path{stroke:rgba(62,255,104,0.30)!important}';

if (h.includes(OLD_STAGE_INACTIVE)) {
  h = h.replace(OLD_STAGE_INACTIVE, NEW_STAGE_INACTIVE);
  console.log('  CSS: updated inactive opacity');
}
if (h.includes(OLD_ACTIVE)) {
  h = h.replace(OLD_ACTIVE, NEW_ACTIVE);
  console.log('  CSS: updated active state (brighter border on active)');
}

// ─── Update the interaction script to also brighten connector lines ──────────
// Find the activate function and enhance it
const OLD_ACTIVATE_LINE = "document.querySelectorAll('[data-funnel-idx]').forEach(function(g,i){g.classList.toggle('wf-active',i===idx);var l=g.querySelector('.wf-lbl');if(l)l.setAttribute('fill',i===idx?'rgba(246,243,238,0.92)':'rgba(246,243,238,0.5)');});";
const NEW_ACTIVATE_LINE = "document.querySelectorAll('[data-funnel-idx]').forEach(function(g,i){g.classList.toggle('wf-active',i===idx);var l=g.querySelector('.wf-lbl');if(l)l.setAttribute('fill',i===idx?'rgba(246,243,238,0.95)':'rgba(246,243,238,0.45)');});document.querySelectorAll('[data-conn]').forEach(function(c){c.setAttribute('stroke',+c.dataset.conn===idx?'rgba(62,255,104,0.25)':'rgba(62,255,104,0.08)');});";

if (h.includes(OLD_ACTIVATE_LINE)) {
  h = h.replace(OLD_ACTIVATE_LINE, NEW_ACTIVATE_LINE);
  console.log('  Script: connector lines now brighten on hover');
}

// ─── Replace SVG inner content ───────────────────────────────────────────────
const svgStart = h.indexOf('<svg class="wf-fv5-svg"');
if (svgStart === -1) { console.error('ERROR: no svg found'); process.exit(1); }
const svgTagEnd = h.indexOf('>', svgStart) + 1;
const svgClose = h.indexOf('</svg>', svgStart);
if (svgTagEnd === 0 || svgClose === -1) { console.error('ERROR: malformed SVG'); process.exit(1); }

console.log('Replacing SVG inner: chars ' + svgTagEnd + ' to ' + svgClose);
h = h.slice(0, svgTagEnd) + NEW_SVG_INNER + h.slice(svgClose);

fs.writeFileSync(FILE, h);
console.log('v11 applied.');
