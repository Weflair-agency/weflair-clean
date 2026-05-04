const fs = require('fs');
const path = require('path');

const headerPath = path.join(__dirname, 'src/partials/header.html');
let html = fs.readFileSync(headerPath, 'utf8');

// Replace Calculators
html = html.replace(
  /<a[^>]*href="\/tools\.html"[^>]*>.*?<h3[^>]*>Calculators<\/h3>.*?<\/a>/s,
  (match) => match.replace('href="/tools.html"', 'href="/resources/calculators.html"')
);

// Replace Checklists
html = html.replace(
  /<a[^>]*href="\/tools\.html"[^>]*>.*?<h3[^>]*>Checklists<\/h3>.*?<\/a>/s,
  (match) => match.replace('href="/tools.html"', 'href="/resources/checklists.html"')
);

fs.writeFileSync(headerPath, html, 'utf8');
console.log('Replaced correctly in header.html');
