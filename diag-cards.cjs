const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// The homepage has service cards. I can find them by looking for "Paid Media &amp; Performance" outside the nav bar maybe?
// Or just let's look for any strings containing "Paid Media"
const matches = html.match(/.{0,50}Paid Media &amp; Performance.{0,80}/g);
console.log(matches);
