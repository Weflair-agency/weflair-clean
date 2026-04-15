/**
 * Replaces Resources dropdown with ColdIQ-style mega grid,
 * removes Tools nav item, merges everything under Resources.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(filePath, 'utf-8');

// ── 1. Build the new Resources mega dropdown HTML ──────────────────

const chevronSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="nav-bar__link-chevron-svg"><path d="M5 9L12 16L19 9" stroke="currentColor" stroke-miterlimit="10" stroke-width="0.125em"></path></svg>';

// SVG icons (Lucide-style, 20x20)
const icons = {
  gtm: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  aiSales: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  aiMarketing: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
  calculators: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',
  guides: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  playbooks: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>'
};

const items = [
  { icon: icons.gtm,         title: 'Free GTM Tools',     desc: 'Free tools to boost your sales and marketing performance.', href: 'resources/ai-tools.html' },
  { icon: icons.aiSales,     title: 'AI Sales Tools',      desc: 'AI-powered prospecting and pipeline acceleration.', href: 'resources/ai-tools.html#sales' },
  { icon: icons.aiMarketing, title: 'AI Marketing Tools',  desc: 'AI tools that scale campaigns and improve performance.', href: 'resources/ai-tools.html#marketing' },
  { icon: icons.calculators, title: 'Calculators',         desc: 'ROI, CAC and pipeline planning tools.', href: 'resources/calculators.html' },
  { icon: icons.guides,      title: 'Guides',              desc: 'Deep-dive marketing guides and frameworks.', href: 'resources/guides.html' },
  { icon: icons.playbooks,   title: 'Playbooks',           desc: 'Operator-grade playbooks you can run today.', href: 'resources/playbooks.html' }
];

function makeTile(item) {
  return `<a data-hover="" href="${item.href}" class="weflair-mega-tile w-inline-block"><div class="weflair-mega-tile__icon">${item.icon}</div><div class="weflair-mega-tile__text"><h3 class="weflair-mega-tile__h">${item.title}</h3><p class="weflair-mega-tile__p">${item.desc}</p></div></a>`;
}

const newResourcesDropdown =
  `<div data-dropdown-status="not-active" class="nav-bar__link"><div data-dropdown-click="" class="nav-bar__link-inner"><div class="nav-bar__link-bg"></div><div class="nav-bar__link-text"><span class="nav-bar__link-text-span">Resources</span><div class="nav-bar__link-chevron">${chevronSvg}</div></div></div>` +
  `<div class="nav-dropdown nav-dropdown--mega"><div class="nav-dropdown__overflow"><div class="nav-dropdown__overflow-inner"><div class="nav-dropdown__grid"><div class="weflair-mega-grid">` +
  items.map(makeTile).join('') +
  `</div></div></div></div></div></div>`;


// ── 2. Find and replace the old Resources section ──────────────────

// The Resources nav starts with this exact string
const resMarker = '<span class="nav-bar__link-text-span">Resources</span>';
const resMarkerIdx = html.indexOf(resMarker);
if (resMarkerIdx === -1) { console.error('❌ Could not find Resources nav'); process.exit(1); }

// Walk back to find the parent <div data-dropdown-status
const resParentTag = '<div data-dropdown-status="not-active" class="nav-bar__link">';
const resStart = html.lastIndexOf(resParentTag, resMarkerIdx);
if (resStart === -1) { console.error('❌ Could not find Resources parent div'); process.exit(1); }

// Find the Tools nav start (immediately after Resources section ends)
const toolsMarker = '<span class="nav-bar__link-text-span">Tools</span>';
const toolsMarkerIdx = html.indexOf(toolsMarker);
if (toolsMarkerIdx === -1) { console.error('❌ Could not find Tools nav'); process.exit(1); }

const toolsParentStart = html.lastIndexOf(resParentTag, toolsMarkerIdx);
if (toolsParentStart === -1) { console.error('❌ Could not find Tools parent div'); process.exit(1); }

// Find the About nav start (marks the end of Tools section)
const aboutMarker = '<span class="nav-bar__link-text-span">About</span>';
const aboutMarkerIdx = html.indexOf(aboutMarker);
if (aboutMarkerIdx === -1) { console.error('❌ Could not find About nav'); process.exit(1); }

const aboutParentStart = html.lastIndexOf(resParentTag, aboutMarkerIdx);
if (aboutParentStart === -1) { console.error('❌ Could not find About parent div'); process.exit(1); }

// Extract: everything from Resources start to About start = Resources section + Tools section
const oldChunk = html.substring(resStart, aboutParentStart);
console.log(`Old chunk length: ${oldChunk.length}`);
console.log(`Old chunk starts with: ${oldChunk.substring(0, 80)}...`);
console.log(`Old chunk ends with: ...${oldChunk.substring(oldChunk.length - 80)}`);

// Replace old Resources + Tools with new mega Resources
html = html.substring(0, resStart) + newResourcesDropdown + html.substring(aboutParentStart);


// ── 3. Add CSS for the mega dropdown grid ──────────────────────────

const megaCss = `
.nav-dropdown--mega{left:50%;transform:translateX(-50%);width:max-content;min-width:42rem}
.nav-dropdown--mega .nav-dropdown__grid{padding:1.2rem 1.4rem}
.weflair-mega-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.1rem}
.weflair-mega-tile{display:flex;align-items:flex-start;gap:.75rem;padding:.7rem .85rem;border-radius:.55rem;text-decoration:none;color:#f6f3ee;transition:background .18s ease}
.weflair-mega-tile:hover{background:rgba(246,243,238,.06)}
.weflair-mega-tile__icon{flex-shrink:0;display:grid;place-items:center;width:2.1rem;height:2.1rem;border-radius:.5rem;background:rgba(62,255,104,.08);border:1px solid rgba(62,255,104,.14);color:#3eff68}
.weflair-mega-tile__icon svg{width:1.1rem;height:1.1rem}
.weflair-mega-tile__text{min-width:0}
.weflair-mega-tile__h{margin:0;font-size:.82rem;font-weight:600;line-height:1.2;color:#f6f3ee;white-space:nowrap}
.weflair-mega-tile__p{margin:.15rem 0 0;font-size:.72rem;line-height:1.35;color:rgba(246,243,238,.5);max-width:16rem}
@media(max-width:991px){.nav-dropdown--mega{left:0;transform:none;min-width:0;width:100%}.weflair-mega-grid{grid-template-columns:1fr 1fr}}
@media(max-width:479px){.weflair-mega-grid{grid-template-columns:1fr}}
`.replace(/\n/g, '');

// Insert CSS before the closing </style> of runtime CSS
const styleCloseTag = '</style>';
const runtimeStyleIdx = html.indexOf('id="weflair-runtime-css"');
if (runtimeStyleIdx !== -1) {
  const styleEnd = html.indexOf(styleCloseTag, runtimeStyleIdx);
  if (styleEnd !== -1) {
    html = html.substring(0, styleEnd) + megaCss + html.substring(styleEnd);
    console.log('✅ Injected mega dropdown CSS');
  }
}


// ── 4. Write back ──────────────────────────────────────────────────
fs.writeFileSync(filePath, html, 'utf-8');
console.log('✅ index.html updated — Resources mega dropdown live, Tools removed');
