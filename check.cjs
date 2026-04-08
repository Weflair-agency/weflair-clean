const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const i = h.indexOf('wf-funnel-v4">');
console.log('HTML div at:', i);
if (i > 0) {
  console.log('Context:', h.substring(i - 50, i + 150));
}
// Also find where ring-split ends
const ringSplit = h.indexOf('weflair-ring-split');
console.log('\nring-split at:', ringSplit);
const wrapStart = h.indexOf('weflair-ring-wrap wf-funnel-v4');
console.log('wrap start at:', wrapStart);
if (wrapStart > 0) console.log(h.substring(wrapStart - 10, wrapStart + 120));
