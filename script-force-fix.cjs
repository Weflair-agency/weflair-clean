const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const dirs = [
  rootDir,
  path.join(rootDir, 'services'),
  path.join(rootDir, 'resources'),
  path.join(rootDir, 'expertise'),
  path.join(rootDir, 'legal')
];

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  
  const prefix = dir === rootDir ? '' : '../';
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    if (!file.endsWith('.html')) continue;
    
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    let modified = false;
    
    // Replace "/tools.html..." specifically
    const repSales = `href="${prefix}tools.html#sales"`;
    const repMarketing = `href="${prefix}tools.html#marketing"`;
    const repGtm = `href="${prefix}tools.html#gtm"`;
    
    // Using Regex to catch any variation
    if (/href="\/tools\.html#sales"/g.test(html)) {
      html = html.replace(/href="\/tools\.html#sales"/g, repSales);
      modified = true;
    }
    if (/href="\/tools\.html#marketing"/g.test(html)) {
      html = html.replace(/href="\/tools\.html#marketing"/g, repMarketing);
      modified = true;
    }
    if (/href="\/tools\.html#gtm"/g.test(html)) {
      html = html.replace(/href="\/tools\.html#gtm"/g, repGtm);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`[FIXED] Updated ${filePath} to use '${prefix}'`);
    } else {
      // Maybe it was already prefixed but wrong? Check if it has the wrong prefix
      // For instance if it's in the root and has `../tools.html`
      if (prefix === '') {
        if (/href="\.\.\/tools\.html#sales"/g.test(html)) {
          html = html.replace(/href="\.\.\/tools\.html/g, 'href="tools.html');
          fs.writeFileSync(filePath, html, 'utf8');
          console.log(`[RE-FIXED] Updated ${filePath} to root`);
        }
      } else {
        if (/href="tools\.html#sales"/g.test(html)) {
          html = html.replace(/href="tools\.html/g, 'href="../tools.html');
          fs.writeFileSync(filePath, html, 'utf8');
          console.log(`[RE-FIXED] Updated ${filePath} to nested`);
        }
      }
    }
  }
}
console.log('Complete.');
