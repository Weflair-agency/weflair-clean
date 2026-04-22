const fs = require('fs');
const html = fs.readFileSync('services/paid-media-performance.html', 'utf8');

const heroStart = html.indexOf('<main class=\"main pm-page pd-redesign\">');
if (heroStart === -1) {
    const mainStart = html.indexOf('<main');
    console.log('Main starts at', mainStart);
}

const splitIdx = html.indexOf('<section class=\"pm-partners\"');
console.log('Split index for shared sections:', splitIdx);
