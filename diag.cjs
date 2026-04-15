const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'services', 'paid-media-performance.html'), 'utf8');

console.log('Does it have /tools.html#sales ? ', html.includes('/tools.html#sales'));
console.log('Does it have Tools header? ', html.includes('<span class="nav-bar__link-text-span">Tools</span>'));
console.log('What tools.html href does it have?');
const matches = html.match(/href="([^"]*tools\.html[^"]*)"/g);
console.log(matches);
