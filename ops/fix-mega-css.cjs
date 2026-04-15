/**
 * fix-mega-css.cjs
 * Moves mega dropdown CSS from inline position in weflair-runtime-css
 * to its own dedicated <style> tag to avoid CSS parsing issues.
 */
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf-8');

// 1. Extract the mega CSS from weflair-runtime-css
const megaMarker = '.nav-dropdown--mega{';
const megaStart = html.indexOf(megaMarker);
if (megaStart < 0) {
  console.log('ERROR: mega CSS not found');
  process.exit(1);
}

// Find the </style> that closes weflair-runtime-css
const runtimeStart = html.indexOf('weflair-runtime-css');
const runtimeEnd = html.indexOf('</style>', runtimeStart);

// The mega CSS goes from megaStart to runtimeEnd
const megaCSS = html.substring(megaStart, runtimeEnd);
console.log('Found mega CSS:', megaCSS.length, 'chars');

// 2. Remove mega CSS from runtime style tag
// Also remove the orphan closing } before it (from a media query)
// Find what's right before the mega marker
const beforeMega = html.substring(Math.max(0, megaStart - 5), megaStart);
console.log('Before mega:', JSON.stringify(beforeMega));

// Remove the mega CSS from the runtime block
let cleanedRuntime;
if (beforeMega.endsWith('\n}')) {
  // The } is closing a media query - leave it, just remove the mega CSS
  cleanedRuntime = html.substring(0, megaStart) + '\n    ' + html.substring(runtimeEnd);
} else {
  cleanedRuntime = html.substring(0, megaStart) + '\n    ' + html.substring(runtimeEnd);
}

html = cleanedRuntime;

// 3. Add mega CSS as its own style tag right before </head>
const headEnd = html.indexOf('</head>');
if (headEnd < 0) {
  console.log('ERROR: </head> not found');
  process.exit(1);
}

const megaStyleTag = `<style id="weflair-mega-dropdown-css">
${megaCSS}
</style>
`;

html = html.substring(0, headEnd) + megaStyleTag + html.substring(headEnd);

fs.writeFileSync(htmlPath, html, 'utf-8');
console.log('DONE: Mega CSS moved to its own <style> tag');
