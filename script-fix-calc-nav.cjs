/**
 * Fix calculators.html nav by copying the nav from the already-updated index.html
 * and adjusting relative paths for the resources/ subdirectory.
 */
const fs = require('fs');

let calc = fs.readFileSync('resources/calculators.html', 'utf8');
let idx = fs.readFileSync('index.html', 'utf8');

// Extract nav section from index.html (already updated)
const idxNavStart = idx.indexOf('<div data-lenis-prevent');
const idxNavEnd = idx.indexOf('</nav>', idxNavStart);
let navChunk = idx.substring(idxNavStart, idxNavEnd);

// Adjust all root-relative paths to ../
navChunk = navChunk.replace(/href="services\//g, 'href="../services/');
navChunk = navChunk.replace(/href="resources\//g, 'href="../resources/');
navChunk = navChunk.replace(/href="blog\.html/g, 'href="../blog.html');
navChunk = navChunk.replace(/href="about\.html/g, 'href="../about.html');
navChunk = navChunk.replace(/href="cases\.html/g, 'href="../cases.html');
navChunk = navChunk.replace(/href="careers\.html/g, 'href="../careers.html');
navChunk = navChunk.replace(/href="tools\.html/g, 'href="../tools.html');
navChunk = navChunk.replace(/href="contact\.html/g, 'href="../contact.html');
navChunk = navChunk.replace("window.location.href='tools.html'", "window.location.href='../tools.html'");

// Replace in calculators.html
const calcNavStart = calc.indexOf('<div data-lenis-prevent');
const calcNavEnd = calc.indexOf('</nav>', calcNavStart);
calc = calc.substring(0, calcNavStart) + navChunk + calc.substring(calcNavEnd);

fs.writeFileSync('resources/calculators.html', calc, 'utf8');
console.log('Fixed calculators.html nav');
