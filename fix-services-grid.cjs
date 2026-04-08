'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
let h = fs.readFileSync(FILE, 'utf8');

// ─── Rearrange services grid ────────────────────────────────────────────────
// Current: Row1[Paid|Outbound] Row2[RevOps|Content] Row3[CRO] (centered single)
// Target:  Row1[Paid|Outbound] Row2[RevOps centered] Row3[CRO|Content]
// RevOps becomes the center "heart" piece

// Helper to build a tile
function tile(title, desc) {
  return `<div class="growing-tiles__col"><a data-ease="" data-hover="" data-arrow="diagonal" href="#results" class="growing-tile w-inline-block"><div class="growing-tile__start"><div class="growing-tile__text"><h3 class="h5">${title}</h3></div></div><div class="growing-tile__end"><div class="growing-tile__text"><p class="p-s">${desc}</p></div><div class="growing-tile__arrow"><div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div></div></div></a></div>`;
}

const newGrid = `<div class="growing-tiles">`
  // Row 1: Paid Media | Outbound (same as before)
  + `<div class="growing-tiles__row">`
  + tile('Paid Media &amp; Performance', 'We run data-backed ad campaigns that turn active demand into revenue.')
  + tile('Outbound &amp; GTM Engineering', 'Outbound systems built to create qualified meetings and real sales conversations.')
  + `</div>`
  // Row 2: Revenue Operations — centered, single, hero position
  + `<div class="growing-tiles__row is-single weflair-services-center">`
  + tile('Revenue Operations &amp; Automations', 'Connected CRM, routing, and automation that keep growth moving without manual drag.')
  + `</div>`
  // Row 3: CRO | Content & SEO
  + `<div class="growing-tiles__row">`
  + tile('CRO &amp; Performance Design', 'Landing pages and funnels that convert more of the traffic you already paid for.')
  + tile('Content &amp; SEO', 'Content and search that make you harder to ignore in your niche.')
  + `</div>`
  + `</div>`;

// Find the growing-tiles container inside services-native
const nativeStart = h.indexOf('services-overview__row-tiles weflair-services-native');
if (nativeStart === -1) { console.error('ERROR: services-native not found'); process.exit(1); }

// Find <div class="growing-tiles"> after nativeStart
const gtStart = h.indexOf('<div class="growing-tiles">', nativeStart);
if (gtStart === -1) { console.error('ERROR: growing-tiles not found'); process.exit(1); }

// Find the matching close — count divs
let depth = 0;
let i = gtStart;
let gtEnd = -1;
while (i < h.length) {
  if (h.startsWith('<div', i)) {
    depth++;
    i += 4;
  } else if (h.startsWith('</div>', i)) {
    depth--;
    if (depth === 0) {
      gtEnd = i + 6; // include </div>
      break;
    }
    i += 6;
  } else {
    i++;
  }
}

if (gtEnd === -1) { console.error('ERROR: could not find end of growing-tiles'); process.exit(1); }

console.log('Replacing growing-tiles: chars', gtStart, 'to', gtEnd);
console.log('Old length:', gtEnd - gtStart, 'New length:', newGrid.length);

h = h.slice(0, gtStart) + newGrid + h.slice(gtEnd);

// ─── Add CSS for the center row ──────────────────────────────────────────────
// Make the center tile visually distinct — slightly larger, subtle accent border
const cssAnchor = '.weflair-services-native .growing-tile:hover .arrow__box,.weflair-services-native .growing-tile:focus-visible .arrow__box{color:#1b1b1b}';
const newCSS = cssAnchor + '\n      .weflair-services-center{justify-content:center}.weflair-services-center .growing-tiles__col{flex:0 1 60%;max-width:36rem}.weflair-services-center .growing-tile{border-color:rgba(62,255,104,0.12);background:linear-gradient(180deg,rgba(22,28,22,.98) 0%,rgba(16,20,16,.98) 100%)}.weflair-services-center .growing-tile:hover,.weflair-services-center .growing-tile:focus-visible{border-color:rgba(62,255,104,0.25);background:linear-gradient(180deg,rgba(26,34,26,.98) 0%,rgba(18,24,18,.98) 100%)}';

if (h.includes(cssAnchor)) {
  h = h.replace(cssAnchor, newCSS);
  console.log('CSS: added center row styles');
} else {
  console.log('WARNING: CSS anchor not found, styles not added');
}

fs.writeFileSync(FILE, h);
console.log('Services grid rearranged: RevOps centered as the heart piece');
