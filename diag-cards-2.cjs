const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const matches = html.match(/<a[^>]*>[\s\S]*?(Outbound &amp; GTM Engineering|Paid Media &amp; Performance)[\s\S]*?<\/a>/g);
if (matches) {
    matches.forEach(m => console.log(m.substring(0, 150) + "...\n"));
}
