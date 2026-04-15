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

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  
  const prefix = dir === rootDir ? 'services/' : '../services/';
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.html')) continue;
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // This regex matches ANY anchor tag (even if nested, up to some reasonable limit) 
    // that contains the exact title strings. 
    // It is a greedy approach but since HTML is predictable here we'll use replacing functions per anchor
    
    const anchors = html.match(/<a[^>]*>[\s\S]*?<\/a>/g) || [];
    let fileModified = false;

    anchors.forEach(a => {
        let newA = a;
        if (a.includes("Paid Media &amp; Performance") || a.includes("Paid Media & Performance")) {
             newA = a.replace(/href="[^"]*"/, `href="${prefix}paid-media-performance.html"`);
        } else if (a.includes("Outbound &amp; GTM Engineering") || a.includes("Outbound & GTM Engineering")) {
             newA = a.replace(/href="[^"]*"/, `href="${prefix}outbound-gtm.html"`);
        } else if (a.includes("Revenue Operations") && a.includes("Automations")) {
             newA = a.replace(/href="[^"]*"/, `href="${prefix}revops-ai.html"`);
        } else if (a.includes("Content &amp; AEO") || a.includes("Content & AEO")) {
             newA = a.replace(/href="[^"]*"/, `href="${prefix}content-seo.html"`);
        } else if (a.includes("Performance Design &amp; CRO") || a.includes("Performance Design & CRO")) {
             newA = a.replace(/href="[^"]*"/, `href="${prefix}cro-performance-design.html"`);
        } else if (a.includes("Strategy &amp; Creative") || a.includes("Strategy & Creative")) {
             newA = a.replace(/href="[^"]*"/, `href="${prefix}strategy-creative.html"`);
        }

        if (newA !== a) {
            html = html.split(a).join(newA);
            fileModified = true;
        }
    });

    if (fileModified) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Updated globally in ${file}`);
    }
  }
}
console.log('All links fully updated globally.');
