const fs = require('fs');

let js = fs.readFileSync('public/weflair-hero.js', 'utf8');

js = js.replace(/The FLAIR Loop(?:™|&trade;|\\u2122)/g, 'The FLAIR Method™');

// Let's also check if there is an <text> replacement we missed
js = js.replace(/THE FLAIR<\/text>\\s*<text[^>]*>LOOP(?:™|&trade;|\\u2122)<\/text>/g, 'THE FLAIR</text><text class="weflair-ring-hub-title" x="${cx}" y="${cy + 9}">METHOD™</text>');

// Also update the index.html just in case there were missed cases
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/The FLAIR Loop(?:™|&trade;|\\u2122)/g, 'The FLAIR Method™');
html = html.replace(/<text class="weflair-ring-hub-title" x="250" y="243">THE FLAIR<\/text><text class="weflair-ring-hub-title" x="250" y="259">LOOP(?:™|&trade;|\\u2122)<\/text>/g, '<text class="weflair-ring-hub-title" x="250" y="243">THE FLAIR</text><text class="weflair-ring-hub-title" x="250" y="259">METHOD™</text>');

fs.writeFileSync('public/weflair-hero.js', js, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');

console.log("Replaced FLAIR Loop with Method completely.");
