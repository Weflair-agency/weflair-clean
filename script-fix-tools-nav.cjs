const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const directoriesToProcess = [
  rootDir,
  path.join(rootDir, 'services'),
  path.join(rootDir, 'resources'),
  path.join(rootDir, 'expertise'),
  path.join(rootDir, 'legal')
];

function fixNavLinks(filePath, relativePrefix) {
  if (!fs.existsSync(filePath)) return;
  
  let html = fs.readFileSync(filePath, 'utf8');

  // We change `/tools.html#sales` to `tools.html#sales` (if root) or `../tools.html#sales` (if nested)
  // We'll just regex replace `/tools.html` with `PREFIXtools.html`
  // But wait, what if we already ran it? Let's just find `href="/tools.html` and replace it.
  
  // Alternatively, just replace any matching of `/tools.html` with `relativePrefix + 'tools.html'`
  // But careful not to double replace.
  html = html.replace(/href="\/tools\.html#sales"/g, `href="${relativePrefix}tools.html#sales"`);
  html = html.replace(/href="\/tools\.html#marketing"/g, `href="${relativePrefix}tools.html#marketing"`);
  html = html.replace(/href="\/tools\.html#gtm"/g, `href="${relativePrefix}tools.html#gtm"`);
  
  // What if it was already relative but wrong? Let's just catch all variations of tools.html
  // Specifically we injected `<a data-hover="" data-arrow="diagonal" href="/tools.html#sales"`
  // Let's also do a hard replace of the injected block to ensure we have the correct prefix.
  const badSales = `href="/tools.html#sales"`;
  const badMarketing = `href="/tools.html#marketing"`;
  const badGtm = `href="/tools.html#gtm"`;
  
  let modified = false;
  
  if (html.includes(badSales)) {
    html = html.split(badSales).join(`href="${relativePrefix}tools.html#sales"`);
    modified = true;
  }
  if (html.includes(badMarketing)) {
    html = html.split(badMarketing).join(`href="${relativePrefix}tools.html#marketing"`);
    modified = true;
  }
  if (html.includes(badGtm)) {
    html = html.split(badGtm).join(`href="${relativePrefix}tools.html#gtm"`);
    modified = true;
  }
  
  // In case the menu was clicked but it was parent Tools, nothing happens. It's a dropdown.
  // We should also ensure the user can actually get to a main Tools index if they want? 
  // Nah, WeFlair top-level menus are unclickable hover-triggers.

  if (modified) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log('Fixed relative paths in ' + filePath);
  } else {
    // If we missed injection in some files somehow, let's inject properly now.
    if (!html.includes('<span class="nav-bar__link-text-span">Tools</span>')) {
      const insertBeforeMarker = '<div data-dropdown-status="not-active" class="nav-bar__link"><div data-dropdown-click="" class="nav-bar__link-inner"><div class="nav-bar__link-bg"></div><div class="nav-bar__link-text"><span class="nav-bar__link-text-span">About</span>';
      
      const toolsNavDropdownRelative = `
<div data-dropdown-status="not-active" class="nav-bar__link">
  <div data-dropdown-click="" class="nav-bar__link-inner">
    <div class="nav-bar__link-bg"></div>
    <div class="nav-bar__link-text">
      <span class="nav-bar__link-text-span">Tools</span>
      <div class="nav-bar__link-chevron">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="nav-bar__link-chevron-svg">
          <path d="M5 9L12 16L19 9" stroke="currentColor" stroke-miterlimit="10" stroke-width="0.125em"></path>
        </svg>
      </div>
    </div>
  </div>
  <div class="nav-dropdown">
    <div class="nav-dropdown__overflow">
      <div class="nav-dropdown__overflow-inner">
        <div class="nav-dropdown__grid">
          <div class="nav-dropdown__grid-row">
            <a data-hover="" data-arrow="diagonal" href="${relativePrefix}tools.html#sales" class="nav-dropdown-tile w-inline-block">
              <div class="nav-dropdown-tile__bg"></div>
              <div class="nav-dropdown-tile__text">
                <h3 class="nav-dropdown-tile__h">Sales Tools</h3>
                <p class="nav-dropdown-tile__p">AI outbound and CRM engines.</p>
              </div>
              <div class="nav-dropdown-tile__arrow"><div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div></div>
            </a>
            <a data-hover="" data-arrow="diagonal" href="${relativePrefix}tools.html#marketing" class="nav-dropdown-tile w-inline-block">
              <div class="nav-dropdown-tile__bg"></div>
              <div class="nav-dropdown-tile__text">
                <h3 class="nav-dropdown-tile__h">AI Marketing Tools</h3>
                <p class="nav-dropdown-tile__p">Content, creative and scaling apps.</p>
              </div>
              <div class="nav-dropdown-tile__arrow"><div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div></div>
            </a>
          </div>
          <div class="nav-dropdown__grid-row">
            <a data-hover="" data-arrow="diagonal" href="${relativePrefix}tools.html#gtm" class="nav-dropdown-tile w-inline-block">
              <div class="nav-dropdown-tile__bg"></div>
              <div class="nav-dropdown-tile__text">
                <h3 class="nav-dropdown-tile__h">Free GTM Tools</h3>
                <p class="nav-dropdown-tile__p">Operator-grade tools, zero cost.</p>
              </div>
              <div class="nav-dropdown-tile__arrow"><div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
      if (html.includes(insertBeforeMarker)) {
        html = html.replace(insertBeforeMarker, toolsNavDropdownRelative + insertBeforeMarker);
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Injected Tools Nav into ' + filePath + ' with prefix ' + relativePrefix);
      }
    }
  }
}

for (const dir of directoriesToProcess) {
  if (fs.existsSync(dir)) {
    const isRoot = dir === rootDir;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.html')) {
        fixNavLinks(path.join(dir, file), isRoot ? '' : '../');
      }
    }
  }
}
console.log('Done fixing relative paths!');
