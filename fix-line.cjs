const fs = require('fs');
const f = 'index.html';
let html = fs.readFileSync(f, 'utf8');

// Fix the corrupted line - the smart quote from original we'll got stuck
html = html.replace(
  /Answer three quick questions and we will recommend the right starting point for your business\.<\/p>.\s*<p>Answer three quick questions and we will recommend the right starting point for your business\.<\/p>/,
  'Answer three quick questions and we will recommend the right starting point for your business.</p>'
);

fs.writeFileSync(f, html, 'utf8');
console.log('Fixed corrupted line');
