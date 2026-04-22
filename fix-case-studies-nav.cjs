const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'about.html');
const aboutHtml = fs.readFileSync(aboutPath, 'utf8');

const headerRegex = /<nav class="nav">[\s\S]*?<\/nav>/;
const headerMatch = aboutHtml.match(headerRegex);
let realNav = headerMatch ? headerMatch[0] : '';
if (!realNav) {
  console.error('Could not find nav in about.html');
  process.exit(1);
}

// Add the floating elements wrapper
realNav = `<div class="floating-elements-main"><div class="calc-header-padding-height"></div><div data-navigation-toggle="close" class="nav-fade"></div><header class="header">\n        ${realNav}\n      </header>`;

const footerRegex = /<section class="footer weflair-footer">[\s\S]*?<\/section>/;
const footerMatch = aboutHtml.match(footerRegex);
let realFooter = footerMatch ? footerMatch[0] : '';
if (!realFooter) {
  console.error('Could not find footer in about.html');
  process.exit(1);
}

// Close the wrapper
realFooter = `${realFooter}\n  </div>`;

const dir = path.join(__dirname, 'case-studies');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('floating-elements-main')) {
      // 1. Swap body class
      content = content.replace(/<body class="wfcs-page" data-case-slug="([^"]+)">/, '<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body pm-page" data-case-slug="$1">');
      content = content.replace(/<body class="wfcs-page">/, '<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body pm-page">');

      // 2. Change shell to main
      content = content.replace(/<div class="wfcs-shell">/, '<main class="main">');

      // 3. Replace header
      content = content.replace(/<header class="wfcs-topbar">[\s\S]*?<\/header>/, realNav);

      // 4. Replace footer
      content = content.replace(/<footer class="wfcs-footer">[\s\S]*?<\/footer>/, realFooter);

      // 5. Inject scripts in head
      if (!content.includes('foundation.js')) {
        content = content.replace(/<\/head>/, `  <script src="/foundation.js" defer></script>\n  <script src="/weflair-hero.js" defer></script>\n  <link rel="stylesheet" href="/weflair-global.css" />\n</head>`);
      }

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
  } else {
      console.log(`Skipping ${file}, already updated`);
  }
});
