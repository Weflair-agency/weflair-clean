const fs = require('fs');
const path = require('path');
const html1 = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const html2 = fs.readFileSync(path.join(__dirname, 'services', 'paid-media-performance.html'), 'utf8');

const matches1 = html1.match(/ai-tools\.html/g);
const matches2 = html2.match(/ai-tools\.html/g);

console.log('index.html ai-tools matches:', matches1 ? matches1.length : 0);
console.log('paid-media ai-tools matches:', matches2 ? matches2.length : 0);

// Let's print exactly how they look in index
const fullMatches1 = html1.match(/href="([^"]*ai-tools\.html[^"]*)"/g);
console.log('index.html links:', fullMatches1);

const fullMatches2 = html2.match(/href="([^"]*ai-tools\.html[^"]*)"/g);
console.log('paid-media links:', fullMatches2);
