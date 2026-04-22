const fs = require('fs');
let html = fs.readFileSync('services/performance-design.html', 'utf8');
let newHero = fs.readFileSync('_hero_new.txt', 'utf8');

const targetStartStr = '<p class="eyebrow__p">Paid Media &amp; Performance</p>';
const targetEndStr = '<div class="sv-stats">';

const targetStart = html.indexOf(targetStartStr);
const targetEnd = html.indexOf(targetEndStr, targetStart);

if (targetStart !== -1 && targetEnd !== -1) {
  // back up slightly to remove the closing tags of the old hero actions
  const endSlice = html.indexOf('</section>', targetStart);
  if (endSlice !== -1) {
    const finalHtml = html.slice(0, targetStart) + newHero + '\n' + html.slice(endSlice);
    fs.writeFileSync('services/performance-design.html', finalHtml);
    console.log('Hero and diagram replaced successfully.');
  } else {
    console.log('Found start but not </section>');
  }
} else {
  console.log('Could not find old hero strings.', targetStart, targetEnd);
}
