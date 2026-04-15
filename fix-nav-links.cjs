const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') {
        walkDir(dirPath, callback);
      }
    } else if (f.endsWith('.html')) {
      callback(dirPath);
    }
  });
}

const replacements = [
  { match: /href="[^"]*services\/paid-media-performance(?:\.html)?"/g, replace: 'href="/services/paid-media-performance.html"' },
  { match: /href="[^"]*services\/outbound-gtm(?:\.html)?"/g, replace: 'href="/services/outbound-gtm.html"' },
  { match: /href="[^"]*services\/revops-ai(?:\.html)?"/g, replace: 'href="/services/revops-ai.html"' },
  { match: /href="[^"]*services\/content-seo(?:\.html)?"/g, replace: 'href="/services/content-seo.html"' },
  { match: /href="[^"]*services\/cro-performance-design(?:\.html)?"/g, replace: 'href="/services/cro-performance-design.html"' },
  { match: /href="(?:(?:\.\.\/)*)about\.html"/g, replace: 'href="/about.html"' },
  { match: /href="(?:(?:\.\.\/)*)cases\.html"/g, replace: 'href="/cases.html"' },
  { match: /href="(?:(?:\.\.\/)*)careers\.html"/g, replace: 'href="/careers.html"' },
  { match: /href="(?:(?:\.\.\/)*)contact\.html"/g, replace: 'href="/contact.html"' },
  { match: /href="(?:(?:\.\.\/)*)tools\.html"/g, replace: 'href="/tools.html"' },
  { match: /href="(?:(?:\.\.\/)*)sitemap\.html"/g, replace: 'href="/sitemap.html"' },
  { match: /href="(?:(?:\.\.\/)*)index\.html"/g, replace: 'href="/"' }
];

let filesProcessed = 0;
let filesModified = 0;

walkDir('.', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  replacements.forEach(r => {
    content = content.replace(r.match, r.replace);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesModified++;
  }
  filesProcessed++;
});

console.log('Processed ' + filesProcessed + ' files. Modified ' + filesModified + ' files.');
