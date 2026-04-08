'use strict';
const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');

// Fix gradient fg - make lighter/more visible
h = h.replace(
  '<stop offset="0%" stop-color="#1d221d" stop-opacity="0.82"/><stop offset="100%" stop-color="#141714" stop-opacity="0.82"/>',
  '<stop offset="0%" stop-color="#2e3e2e" stop-opacity="0.96"/><stop offset="100%" stop-color="#1e2e1e" stop-opacity="0.96"/>'
);

// Fix gradient fga (compound stage)
h = h.replace(
  '<stop offset="0%" stop-color="#1a2b1a" stop-opacity="0.90"/><stop offset="100%" stop-color="#111711" stop-opacity="0.90"/>',
  '<stop offset="0%" stop-color="#253625" stop-opacity="1.0"/><stop offset="100%" stop-color="#1b281b" stop-opacity="1.0"/>'
);

// Make funnel stage strokes much more visible
h = h.replaceAll('stroke="rgba(62,255,104,0.16)"', 'stroke="rgba(62,255,104,0.42)"');
h = h.replace('stroke="rgba(62,255,104,0.26)"', 'stroke="rgba(62,255,104,0.60)"');

fs.writeFileSync('index.html', h);
console.log('Done — funnel fills and borders made visible');
