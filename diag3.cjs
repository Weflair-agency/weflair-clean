const fs = require('fs');
const glob = require('glob');
const path = require('path');

const files = glob.sync('c:/Users/sam/Desktop/vscode-weflair/weflair-clean/**/*.html');
let changed = 0;

files.forEach(file => {
   let content = fs.readFileSync(file, 'utf8');
   const relDepth = path.relative('c:/Users/sam/Desktop/vscode-weflair/weflair-clean', path.dirname(file)).split(path.sep).filter(Boolean).length;
   
   const rootPrefix = relDepth === 0 ? './' : '../'.repeat(relDepth);
   const servicesPrefix = relDepth === 0 ? './services/' : (path.dirname(file).replace(/\\/g, '/').endsWith('/services') ? './' : '../'.repeat(relDepth) + 'services/');
   const resourcesPrefix = relDepth === 0 ? './resources/' : (path.dirname(file).replace(/\\/g, '/').endsWith('/resources') ? './' : '../'.repeat(relDepth) + 'resources/');

   // Fix absolute /services/ links
   content = content.replace(/href=\"\/?(?:\.\.\/)*services\/([^\"]+\.html)\"/g, (match, p1) => {
       return 'href=\"' + servicesPrefix + p1 + '\"';
   });
   
   // Fix /resources/ links
   content = content.replace(/href=\"\/?(?:\.\.\/)*resources\/([^\"]+\.html(#.*)?)\"/g, (match, p1) => {
       return 'href=\"' + resourcesPrefix + p1 + '\"';
   });

   // Fix root links like index.html, about.html, contact.html, etc.
   const rootPages = ['index.html', 'about.html', 'contact.html', 'blog.html', 'careers.html', 'cases.html', 'sitemap.html', 'tools.html'];
   rootPages.forEach(page => {
       const regex = new RegExp('href=\"\\\\/?(?:\\\\.\\\\/)?(?:\\\\.\\\\.\\\\/)*' + page + '(#.*)?\"', 'g');
       content = content.replace(regex, 'href=\"' + rootPrefix + page + '$1\"');
   });

   fs.writeFileSync(file, content);
   changed++;
});
console.log('Processed ' + changed + ' files.');
