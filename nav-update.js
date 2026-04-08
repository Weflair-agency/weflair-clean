const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove "Results" standalone nav link entirely.
const resultsLinkPattern = /<a[^>]*href="#results"[^>]*class="nav-bar__link[^>]*>.*?<span class="nav-bar__link-text-span">Results<\/span>.*?<\/a>/;
html = html.replace(resultsLinkPattern, '');

// 2. Change "Resources" -> "Guides" to "Case Studies"
// we need to find the <h3 class="nav-dropdown-tile__h">Guides</h3> and change to Case Studies.
const guidesH3 = `<h3 class="nav-dropdown-tile__h">Guides</h3><p class="nav-dropdown-tile__p">Practical explainers for the systems behind growth.</p>`;
const caseStudiesH3 = `<h3 class="nav-dropdown-tile__h">Case Studies</h3><p class="nav-dropdown-tile__p">Proof that the systems work in the real world.</p>`;
html = html.replace(guidesH3, caseStudiesH3);

// Since 'Guides' tile currently links to '#services' (placeholder), let's change that specific one to 'cases.html'
// The structure is <a data-hover="" data-arrow="diagonal" href="#services" class="nav-dropdown-tile w-inline-block"><div class="nav-dropdown-tile__bg"></div><div class="nav-dropdown-tile__text"><h3 class="nav-dropdown-tile__h">Case Studies</h3>
// We can just regex replace the href near Case Studies
html = html.replace(/href="#services"([^>]*><div class="nav-dropdown-tile__bg"><\/div><div class="nav-dropdown-tile__text"><h3 class="nav-dropdown-tile__h">Case Studies)/, 'href="cases.html"$1');

// 3. Replace "Team" standalone link with an "About" Dropdown
const teamLinkPattern = /<a[^>]*href="#team"[^>]*class="nav-bar__link[^>]*>.*?<span class="nav-bar__link-text-span">Team<\/span>.*?<\/a>/;

// Build the About dropdown HTML by copying the structure of the "Expertise" dropdown, but simplifying it to 2 items.
const aboutDropdownHtml = `
<div data-dropdown-status="not-active" class="nav-bar__link"><div data-dropdown-click="" class="nav-bar__link-inner"><div class="nav-bar__link-bg"></div><div class="nav-bar__link-text"><span class="nav-bar__link-text-span">About</span><div class="nav-bar__link-chevron"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="nav-bar__link-chevron-svg"><path d="M5 9L12 16L19 9" stroke="currentColor" stroke-miterlimit="10" stroke-width="0.125em"></path></svg></div></div></div><div class="nav-dropdown"><div class="nav-dropdown__overflow"><div class="nav-dropdown__overflow-inner"><div class="nav-dropdown__grid"><div class="nav-dropdown__grid-row"><a data-hover="" data-arrow="diagonal" href="about.html" class="nav-dropdown-tile w-inline-block"><div class="nav-dropdown-tile__bg"></div><div class="nav-dropdown-tile__text"><h3 class="nav-dropdown-tile__h">About Us</h3><p class="nav-dropdown-tile__p">The growth agency built for operators.</p></div><div class="nav-dropdown-tile__arrow"><div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div></div></a><a data-hover="" data-arrow="diagonal" href="careers.html" class="nav-dropdown-tile w-inline-block"><div class="nav-dropdown-tile__bg"></div><div class="nav-dropdown-tile__text"><h3 class="nav-dropdown-tile__h">Careers</h3><p class="nav-dropdown-tile__p">Join our team of specialists.</p></div><div class="nav-dropdown-tile__arrow"><div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div></div></a></div></div></div></div></div>
`.replaceAll('\n', '').trim();

html = html.replace(teamLinkPattern, aboutDropdownHtml);


fs.writeFileSync('index.html', html, 'utf8');
console.log('Navigation successfully updated!');
