const fs = require('fs');
const h = fs.readFileSync(__dirname + '/../index.html', 'utf8');
const navStart = h.indexOf('<nav class="nav">');
const navEnd = h.indexOf('</nav>', navStart) + 6;
const nav = h.substring(navStart, navEnd);

let depth = 0;
let i = 0;
const events = [];

while (i < nav.length) {
  if (nav.substring(i, i + 5) === '<div ' || nav.substring(i, i + 4) === '<div>') {
    depth++;
    const end = nav.indexOf('>', i);
    const tag = nav.substring(i, end + 1);
    const isKey = tag.includes('nav-bar__links') || tag.includes('nav-bar__btn') ||
      tag.includes('"nav-bar"') ||
      (tag.includes('nav-bar__link') && tag.includes('data-dropdown-status'));
    if (isKey) {
      let name = 'div';
      if (tag.includes('nav-bar__links')) name = 'nav-bar__links';
      else if (tag.includes('"nav-bar"')) name = 'nav-bar';
      else if (tag.includes('nav-bar__btn')) name = 'nav-bar__btn';
      else if (tag.includes('nav-bar__link')) {
        const m = nav.substring(i, i + 500).match(/link-text-span">(.*?)<\/span>/);
        name = 'nav-bar__link(' + (m ? m[1] : '?') + ')';
      }
      events.push({ action: 'OPEN', name, depth, pos: i });
    }
    i = end + 1;
  } else if (nav.substring(i, i + 6) === '</div>') {
    for (const ev of events) {
      if (ev.action === 'OPEN' && ev.depth === depth && !ev.closed) {
        events.push({ action: 'CLOSE', name: ev.name, depth, pos: i });
        ev.closed = true;
        break;
      }
    }
    depth--;
    i += 6;
  } else if (nav.substring(i, i + 5) === '</nav') {
    events.push({ action: 'CLOSE', name: 'nav', depth, pos: i });
    i += 6;
  } else {
    i++;
  }
}

events.forEach(e => console.log(`${e.action.padEnd(6)} depth=${e.depth} pos=${e.pos} ${e.name}`));
