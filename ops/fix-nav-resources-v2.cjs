/**
 * Fix #2: Patch the mega dropdown CSS and add nav-dropdown__grid wrapper.
 * Run from weflair-clean/ops/
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(filePath, 'utf-8');

// ── 1. Fix HTML: wrap weflair-mega-grid inside nav-dropdown__grid ──
const oldWrap = '<div class="nav-dropdown__overflow-inner"><div class="weflair-mega-grid">';
const newWrap = '<div class="nav-dropdown__overflow-inner"><div class="nav-dropdown__grid"><div class="weflair-mega-grid">';
html = html.replace(oldWrap, newWrap);

// Close the extra div (before the overflow-inner close)
const oldClose = '</div></div></div></div></div>';
// Find only the one in the mega section
const megaIdx = html.indexOf('nav-dropdown--mega');
const closeIdx = html.indexOf('</a></div></div></div></div></div>', megaIdx);
if (closeIdx !== -1) {
  // The tiles end with </a>, then we need: </div>(mega-grid) </div>(grid) </div>(overflow-inner) </div>(overflow) </div>(nav-dropdown) </div>(nav-bar__link)
  html = html.substring(0, closeIdx) + '</a></div></div></div></div></div></div>' + html.substring(closeIdx + '</a></div></div></div></div></div>'.length);
}

// ── 2. Fix CSS: replace old mega CSS with proper version ──
const oldCss = '.nav-dropdown--mega .nav-dropdown__overflow-inner{padding:1.5rem 1.8rem}.weflair-mega-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.15rem}.weflair-mega-tile{display:flex;align-items:flex-start;gap:.85rem;padding:.85rem 1rem;border-radius:.65rem;text-decoration:none;color:#f6f3ee;transition:background .18s ease}.weflair-mega-tile:hover{background:rgba(246,243,238,.06)}.weflair-mega-tile__icon{flex-shrink:0;display:grid;place-items:center;width:2.25rem;height:2.25rem;border-radius:.55rem;background:rgba(62,255,104,.08);border:1px solid rgba(62,255,104,.14);color:#3eff68}.weflair-mega-tile__text{min-width:0}.weflair-mega-tile__h{margin:0;font-size:.88rem;font-weight:600;line-height:1.2;color:#f6f3ee}.weflair-mega-tile__p{margin:.2rem 0 0;font-size:.76rem;line-height:1.35;color:rgba(246,243,238,.52)}@media(max-width:767px){.weflair-mega-grid{grid-template-columns:1fr 1fr}.nav-dropdown--mega .nav-dropdown__overflow-inner{padding:1rem}}@media(max-width:479px){.weflair-mega-grid{grid-template-columns:1fr}}';

const newCss = '.nav-dropdown--mega{left:50%;transform:translateX(-50%);width:max-content;min-width:42rem}.nav-dropdown--mega .nav-dropdown__grid{padding:1.2rem 1.4rem}.weflair-mega-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.1rem}.weflair-mega-tile{display:flex;align-items:flex-start;gap:.75rem;padding:.7rem .85rem;border-radius:.55rem;text-decoration:none;color:var(--color-dark);transition:background .18s ease}.weflair-mega-tile:hover{background:rgba(0,0,0,.06)}.weflair-mega-tile__icon{flex-shrink:0;display:grid;place-items:center;width:2.1rem;height:2.1rem;border-radius:.5rem;background:rgba(62,255,104,.1);border:1px solid rgba(62,255,104,.18);color:#22c55e}.weflair-mega-tile__icon svg{width:1.1rem;height:1.1rem}.weflair-mega-tile__text{min-width:0}.weflair-mega-tile__h{margin:0;font-size:.82rem;font-weight:600;line-height:1.2;color:var(--color-dark);white-space:nowrap}.weflair-mega-tile__p{margin:.15rem 0 0;font-size:.72rem;line-height:1.35;color:rgba(0,0,0,.5);max-width:16rem}@media(max-width:991px){.nav-dropdown--mega{left:0;transform:none;min-width:0;width:100%}.weflair-mega-grid{grid-template-columns:1fr 1fr}}@media(max-width:479px){.weflair-mega-grid{grid-template-columns:1fr}}';

if (html.includes(oldCss)) {
  html = html.replace(oldCss, newCss);
  console.log('✅ CSS replaced');
} else {
  console.error('❌ Could not find old CSS to replace');
  // Try to find partial match
  const partial = '.nav-dropdown--mega';
  const pIdx = html.indexOf(partial);
  console.log(`  Partial match at offset: ${pIdx}`);
  if (pIdx > 0) {
    console.log(`  Context: ${html.substring(pIdx, pIdx + 100)}`);
  }
}

// ── 3. Write ──
fs.writeFileSync(filePath, html, 'utf-8');
console.log('✅ index.html patched');
