const fs = require('fs');
const path = require('path');

const srcFile = 'index.html';
if (!fs.existsSync(srcFile)) {
  console.error("index.html not found!");
  process.exit(1);
}

let html = fs.readFileSync(srcFile, 'utf8');

// 1. Extract CSS
const styleStartStr = '<style id="weflair-runtime-css">';
const styleEndStr = '</style>';
let styleStart = html.indexOf(styleStartStr);
if (styleStart > -1) {
  let styleEnd = html.indexOf(styleEndStr, styleStart);
  if (styleEnd > -1) {
    const cssContent = html.substring(styleStart + styleStartStr.length, styleEnd);
    fs.mkdirSync('public', {recursive: true});
    fs.writeFileSync('public/weflair-global.css', cssContent);
    console.log(`Saved public/weflair-global.css (${cssContent.length} bytes)`);
    
    html = html.substring(0, styleStart) + '<link rel="stylesheet" href="/weflair-global.css" />' + html.substring(styleEnd + styleEndStr.length);
  }
}

// 2. Extract Header
const headerStartStr = '<header class="header';
let headerStart = html.indexOf(headerStartStr);
if (headerStart > -1) {
  let headerEnd = html.indexOf('</header>', headerStart);
  if (headerEnd > -1) {
    const headerHtml = html.substring(headerStart, headerEnd + '</header>'.length);
    fs.mkdirSync('src/partials', {recursive: true});
    fs.writeFileSync('src/partials/header.html', headerHtml);
    console.log(`Saved src/partials/header.html (${headerHtml.length} bytes)`);
  }
}

// 3. Extract Footer
const footerStartStr = '<section class="footer weflair-footer">'; // from previous inspection
const footerEndStr = '</section>';
let footerStart = html.indexOf(footerStartStr);
if (footerStart > -1) {
  let footerEnd = html.indexOf(footerEndStr, footerStart);
  let footerHtml = html.substring(footerStart, footerEnd + footerEndStr.length);
  fs.mkdirSync('src/partials', {recursive: true});
  fs.writeFileSync('src/partials/footer.html', footerHtml);
  console.log(`Saved src/partials/footer.html (${footerHtml.length} bytes)`);
}

fs.writeFileSync(srcFile, html);
console.log("Updated index.html");
