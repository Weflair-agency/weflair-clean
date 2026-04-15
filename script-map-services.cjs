const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const dirs = [
  rootDir,
  path.join(rootDir, 'services'),
  path.join(rootDir, 'resources'),
  path.join(rootDir, 'expertise'),
  path.join(rootDir, 'legal'),
  path.join(rootDir, 'blog')
];

const mapping = {
  "Paid Media &amp; Performance": "paid-media-performance.html",
  "Outbound &amp; GTM Engineering": "outbound-gtm.html",
  "Revenue Operations &amp; Automations": "revops-ai.html",
  "Content &amp; AEO": "content-seo.html",
  "Performance Design &amp; CRO": "cro-performance-design.html",
  "Strategy &amp; Creative": "strategy-creative.html" // Wait, checking exact name of the 6th tile
};

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  
  const prefix = dir === rootDir ? 'services/' : '../services/';
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.html')) continue;
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // We need to look for `<h3 class="nav-dropdown-tile__h">Title</h3>` inside `<a ...>`
    // The easiest way is parsing the anchor blocks
    const anchorRegex = /<a[^>]*class="nav-dropdown-tile[^>]*>[\s\S]*?<h3 class="nav-dropdown-tile__h">([^<]+)<\/h3>[\s\S]*?<\/a>/g;
    
    html = html.replace(anchorRegex, (match, titleText) => {
        // titleText matches like "Paid Media &amp; Performance" or "Outbound &amp; GTM Engineering"
        const cleanTitle = titleText.replace(/&amp;/g, '&'); // if we want to match cleaner
        let newHref = null;

        if (cleanTitle.includes("Paid Media")) newHref = prefix + "paid-media-performance.html";
        else if (cleanTitle.includes("Outbound")) newHref = prefix + "outbound-gtm.html";
        else if (cleanTitle.includes("Revenue")) newHref = prefix + "revops-ai.html";
        else if (cleanTitle.includes("Content")) newHref = prefix + "content-seo.html";
        else if (cleanTitle.includes("Performance Design")) newHref = prefix + "cro-performance-design.html";
        else if (cleanTitle.includes("Strategy")) newHref = prefix + "strategy-creative.html";

        if (newHref) {
            // replace href="..." inside this anchor match
            return match.replace(/href="[^"]*"/, `href="${newHref}"`);
        }
        return match;
    });

    // Also look for the "Service Cards" on index.html
    if (file === 'index.html' && dir === rootDir) {
        // Find cards with `<h3 class="heading-style-h3">Title</h3>` maybe?
        // Let's rely on standard anchor replacement just in case they are also matching
    }

    fs.writeFileSync(filePath, html, 'utf8');
  }
}
console.log('Navigation mapped globally.');
