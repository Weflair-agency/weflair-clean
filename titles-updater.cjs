const fs = require('fs');
const files = [
  'public/weflair-hero.js',
  'services/content-seo.html',
  'services/cro-performance-design.html',
  'services/outbound-gtm.html',
  'services/paid-media-performance.html',
  'services/revops-ai.html',
  'services/strategy-creative.html',
  'index.html'
];

const replacers = [
  { match: "Revenue Operations & Automations", replace: "Revenue Operations & AI Workflows" },
  { match: "Content & SEO", replace: "Content & Creative" },
  { match: "CRO & Performance Design", replace: "Conversion Design & CRO" },

  // Subtitles in weflair-hero.js nav array
  { match: "Routing, dashboards, and workflow design.", replace: "Routing, dashboards, and AI-enabled automation." },
  { match: "Search, proof, and compounding authority.", replace: "Sharper positioning, copy, and visual direction." },
  
  // Subtitles in weflair-hero.js main page cards array
  { match: "Connected CRM, routing, and automation that keep growth moving without manual drag.", replace: "Connected CRM, routing, and AI-enabled automation that keep growth moving without manual drag." },
  { match: "Content and search that make you harder to ignore in your niche.", replace: "Clearer offers, sharper positioning, and creative direction that make you harder to ignore in your niche." },
  
  // Tags in weflair-hero.js
  { match: 'tags: ["SEO", "Positioning", "Case Studies"]', replace: 'tags: ["Positioning", "Copywriting", "Design"]' },
  { match: 'tags: ["HubSpot", "Routing", "Automation"]', replace: 'tags: ["HubSpot", "Routing", "AI Workflows"]' }
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let raw = fs.readFileSync(f, 'utf8');
    if (raw.includes('\u0000')) {
       raw = fs.readFileSync(f, 'utf16le'); // for index.html if it's utf16
    }
    let modified = raw;
    replacers.forEach(r => {
      modified = modified.split(r.match).join(r.replace);
    });
    if (raw !== modified) {
      // Retain original encoding, hopefully utf8 for most
      const enc = raw.includes('\u0000') ? 'utf16le' : 'utf8';
      fs.writeFileSync(f, modified, enc);
      console.log('Updated ' + f);
    }
  }
});
