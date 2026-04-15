const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const indexHtmlPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const cssMatch = indexHtml.match(/(<style id="weflair-mega-dropdown-css">[\s\S]*?<\/style>)/);
if (!cssMatch) {
  console.log('Error: Could not find weflair-mega-dropdown-css in index.html');
  process.exit(1);
}

const megaCss = cssMatch[1];

const dirs = [
  path.join(rootDir, 'services'),
];

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.html')) continue;

    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    if (!html.includes('id="weflair-mega-dropdown-css"')) {
      html = html.replace('</head>', '\n' + megaCss + '\n</head>');
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`Injected mega-css into ${file}`);
    } else {
      console.log(`${file} already has mega-css`);
    }
  }
}

console.log('Done.');
