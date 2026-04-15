const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Find the Services dropdown block
const servicesTitleMatch = /<span class="nav-bar__link-text-span">Services<\/span>([\s\S]*?)<div data-dropdown-status="not-active" class="nav-bar__link">/g;
const match = servicesTitleMatch.exec(html);

if (match) {
  const block = match[1];
  // extract h3 titles and raw hrefs
  const regex = /<a[^>]*href="([^"]*)"[^>]*>[\s\S]*?<h3[^>]*>([^<]*)<\/h3>/g;
  let m;
  while ((m = regex.exec(block)) !== null) {
      console.log(`HREF: ${m[1]} -> TITLE: ${m[2]}`);
  }
} else {
  console.log("Could not extract services dropdown block");
}
