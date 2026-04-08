const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove all 'data-wire-ready="true"'
html = html.replace(/data-wire-ready="true"/g, '');

// 2. Remove 'data-rendered="true"' from problem section
html = html.replace(/data-rendered="true"/g, '');

// 3. Remove 'data-ring-rendered="true"' from the ring section
html = html.replace(/data-ring-rendered="true"/g, '');

// 4. Change "The FLAIR Loop&trade;" / "The FLAIR Loop™" to "The FLAIR Method™"
// In eyebrow
html = html.replace(/<p class="eyebrow__p">The FLAIR Loop™<\/p>/g, '<p class="eyebrow__p">The FLAIR Method™</p>');
html = html.replace(/<p class="eyebrow__p">The FLAIR Loop<\/p>/g, '<p class="eyebrow__p">The FLAIR Method™</p>');

// In SVG center text (2 lines currently: THE FLAIR / LOOP™)
html = html.replace(/<text class="weflair-ring-hub-title" x="250" y="243">THE FLAIR<\/text>\s*<text class="weflair-ring-hub-title" x="250" y="259">LOOP™<\/text>/g, '<text class="weflair-ring-hub-title" x="250" y="243">THE FLAIR</text><text class="weflair-ring-hub-title" x="250" y="259">METHOD™</text>');

// Same thing in weflair-hero.js? Let's check public/weflair-hero.js!
let js = fs.readFileSync('public/weflair-hero.js', 'utf8');

// 5. Clean JS file as well to render Method properly.
js = js.replace(/<p class="eyebrow__p">The FLAIR Loop&trade;<\/p>/g, '<p class="eyebrow__p">The FLAIR Method™</p>');
js = js.replace(/<p class="eyebrow__p">The FLAIR Loop™<\/p>/g, '<p class="eyebrow__p">The FLAIR Method™</p>');

js = js.replace(/<text class="weflair-ring-hub-title" x="\$\{cx\}" y="\$\{cy - 7\}">THE FLAIR<\/text>\s*<text class="weflair-ring-hub-title" x="\$\{cx\}" y="\$\{cy \+ 9\}">LOOP™<\/text>/g, '<text class="weflair-ring-hub-title" x="${cx}" y="${cy - 7}">THE FLAIR</text><text class="weflair-ring-hub-title" x="${cx}" y="${cy + 9}">METHOD™</text>');

fs.writeFileSync('index.html', html, 'utf8');
fs.writeFileSync('public/weflair-hero.js', js, 'utf8');

console.log("Cleaned up states and updated text to The FLAIR Method");
