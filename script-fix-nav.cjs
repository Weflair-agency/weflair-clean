/**
 * Replaces the nav in every HTML file with the current menu structure:
 *   Services (dropdown) | Resources (dropdown) | Tools (link) | About (dropdown) | CTA
 *
 * Handles root-level and sub-directory pages.
 * Skips sitemap.html, which has a custom lightweight nav.
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

const ARROW_DOWN = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg>`;
const ARROW_DIAG = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M7 17L17 7" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M9 7H17V15" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg>`;
const CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="nav-bar__link-chevron-svg"><path d="M5 9L12 16L19 9" stroke="currentColor" stroke-miterlimit="10" stroke-width="0.125em"></path></svg>`;

function tileArrow() {
  return `<div class="nav-dropdown-tile__arrow"><div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate">${ARROW_DOWN}</div><div class="arrow__box">${ARROW_DOWN}</div></div></div>`;
}

function tile(href, title, desc) {
  return `<a data-hover="" data-arrow="diagonal" href="${href}" class="nav-dropdown-tile w-inline-block"><div class="nav-dropdown-tile__bg"></div><div class="nav-dropdown-tile__text"><h3 class="nav-dropdown-tile__h">${title}</h3><p class="nav-dropdown-tile__p">${desc}</p></div>${tileArrow()}</a>`;
}

function dropdownItem(label, chevron) {
  return `<div data-dropdown-status="not-active" class="nav-bar__link"><div data-dropdown-click="" class="nav-bar__link-inner"><div class="nav-bar__link-bg"></div><div class="nav-bar__link-text"><span class="nav-bar__link-text-span">${label}</span><div class="nav-bar__link-chevron">${chevron ? CHEVRON : ''}</div></div></div>`;
}

function cleanLegacyServiceLinks(html) {
  return html
    .replace(
      /\s*<li><a href="[^"]*strategy-creative\.html"[^>]*>(?:Creative &amp; Production|Strategy &amp; Creative)<\/a><\/li>/g,
      ''
    )
    .replace(/>RevOps &amp; AI Workflows</g, '>Revenue Operations &amp; AI Workflows<')
    .replace(/>Outbound &amp; GTM</g, '>Outbound &amp; GTM Engineering<');
}

function buildNav(prefix) {
  const p = prefix;

  const servicesDropdown = `${dropdownItem('Services', true)}<div class="nav-dropdown"><div class="nav-dropdown__overflow"><div class="nav-dropdown__overflow-inner"><div class="nav-dropdown__grid"><div class="nav-dropdown__grid-row">${tile(`${p}services/paid-media-performance.html`, 'Paid Media &amp; Performance', 'Data-backed ads that turn demand into pipeline.')}${tile(`${p}services/outbound-gtm.html`, 'Outbound &amp; GTM Engineering', 'Outbound systems built for real sales conversations.')}${tile(`${p}services/revops-ai.html`, 'Revenue Operations &amp; AI Workflows', 'Connected CRM, routing, and AI automation.')}</div><div class="nav-dropdown__grid-row">${tile(`${p}services/content-seo.html`, 'Content &amp; AEO', 'Content built for humans, search, and AI engines.')}${tile(`${p}services/cro-performance-design.html`, 'Performance Design &amp; CRO', 'Pages and funnels that convert more traffic.')}</div></div></div></div></div></div>`;

  const resourcesDropdown = `${dropdownItem('Resources', true)}<div class="nav-dropdown"><div class="nav-dropdown__overflow"><div class="nav-dropdown__overflow-inner"><div class="nav-dropdown__grid"><div class="nav-dropdown__grid-row">${tile(`${p}resources/guides.html`, 'Guides', 'Deep-dive marketing guides and frameworks.')}${tile(`${p}resources/playbooks.html`, 'Playbooks', 'Operator-grade playbooks you can run today.')}</div><div class="nav-dropdown__grid-row">${tile(`${p}blog.html`, 'Blog', 'Insights on GTM, growth, and revenue systems.')}${tile(`${p}resources/calculators.html`, 'Calculators', 'ROI, CAC and pipeline planning tools.')}</div></div></div></div></div></div>`;

  const toolsLink = `<div data-dropdown-status="not-active" class="nav-bar__link"><div onclick="window.location.href='${p}tools.html'" style="cursor:pointer" class="nav-bar__link-inner"><div class="nav-bar__link-bg"></div><div class="nav-bar__link-text"><span class="nav-bar__link-text-span">Tools</span></div></div></div>`;

  const aboutDropdown = `${dropdownItem('About', true)}<div class="nav-dropdown"><div class="nav-dropdown__overflow"><div class="nav-dropdown__overflow-inner"><div class="nav-dropdown__grid"><div class="nav-dropdown__grid-row">${tile(`${p}about.html`, 'About Us', 'The growth agency built for operators.')}${tile(`${p}cases.html`, 'Case Studies', 'Real results from real engagements.')}${tile(`${p}careers.html`, 'Careers', 'Join our team of growth specialists.')}</div></div></div></div></div></div>`;

  return `<div data-lenis-prevent="" class="nav-bar__links">${servicesDropdown}${resourcesDropdown}${toolsLink}${aboutDropdown}</div>`;
}

function buildCTA(prefix) {
  const p = prefix;
  return `<div class="nav-bar__btn"><a data-arrow="diagonal" data-hover="" data-btn-theme="default" href="${p}contact.html" class="btn w-inline-block"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Talk to us</span></div><div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate">${ARROW_DIAG}</div><div class="arrow__box">${ARROW_DIAG}</div></div></a></div>`;
}

function collectHTML(dir) {
  let files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (
      entry.isDirectory() &&
      !entry.name.startsWith('.') &&
      entry.name !== 'node_modules' &&
      entry.name !== 'public' &&
      entry.name !== 'dist'
    ) {
      files = files.concat(collectHTML(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(full);
    }
  }

  return files;
}

const allFiles = collectHTML(ROOT);
let updated = 0;
let skipped = 0;

for (const file of allFiles) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');

  if (rel === 'sitemap.html') {
    skipped += 1;
    continue;
  }

  let html = fs.readFileSync(file, 'utf8');
  const depth = rel.split('/').length - 1;
  const prefix = depth > 0 ? '../' : '';

  const navLinksRegex = /<div data-lenis-prevent="" class="nav-bar__links">[\s\S]*?<\/div>\s*<div class="nav-bar__btn">/;

  if (!navLinksRegex.test(html)) {
    console.log(`  SKIP (no nav-bar__links): ${rel}`);
    skipped += 1;
    continue;
  }

  const newNavAndBtn = buildNav(prefix) + buildCTA(prefix);
  const fullNavRegex = /<div data-lenis-prevent="" class="nav-bar__links">[\s\S]*?<\/div><\/div><\/div><\/nav>/;

  if (fullNavRegex.test(html)) {
    html = html.replace(fullNavRegex, newNavAndBtn + '</div></nav>');
    html = cleanLegacyServiceLinks(html);
    fs.writeFileSync(file, html, 'utf8');
    updated += 1;
    console.log(`  OK: ${rel}`);
    continue;
  }

  console.log(`  WARN (pattern mismatch): ${rel} - trying alternate`);

  const startIdx = html.indexOf('<div data-lenis-prevent="" class="nav-bar__links">');
  if (startIdx === -1) {
    skipped += 1;
    continue;
  }

  const btnIdx = html.indexOf('<div class="nav-bar__btn">', startIdx);
  if (btnIdx === -1) {
    console.log('    SKIP (no btn found)');
    skipped += 1;
    continue;
  }

  const navCloseIdx = html.indexOf('</nav>', btnIdx);
  if (navCloseIdx === -1) {
    skipped += 1;
    continue;
  }

  html = html.substring(0, startIdx) + newNavAndBtn + '</div>' + html.substring(navCloseIdx);
  html = cleanLegacyServiceLinks(html);
  fs.writeFileSync(file, html, 'utf8');
  updated += 1;
  console.log(`    OK (alt): ${rel}`);
}

console.log(`\nDone. Updated: ${updated} Skipped: ${skipped}`);
