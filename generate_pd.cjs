const fs = require('fs');
const html = fs.readFileSync('html_inj.txt', 'utf8');
const pdPath = 'services/performance-design.html';
const raw = fs.readFileSync(pdPath, 'utf8');
const regex = /<main[\s\S]*?<\/main>/g;
const updated = raw.replace(regex, html);
fs.writeFileSync(pdPath, updated);
console.log('pd rebuild done');
