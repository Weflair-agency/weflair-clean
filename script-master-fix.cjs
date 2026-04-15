const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const dirs = [
  rootDir,
  path.join(rootDir, 'services'),
  path.join(rootDir, 'resources'),
  path.join(rootDir, 'expertise'),
  path.join(rootDir, 'legal'),
  path.join(rootDir, 'blog')
];

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  
  const prefix = dir === rootDir ? '' : '../';
  const toolsHtmlPath = prefix + 'tools.html';
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.html')) continue;
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // --- FIX 1: The old /resources/ai-tools.html links ---
    // In footers and other menus, this goes to 404. We replace it.
    html = html.replace(/href="\/resources\/ai-tools\.html"/g, `href="${toolsHtmlPath}"`);
    html = html.replace(/href="\.\.\/resources\/ai-tools\.html"/g, `href="${toolsHtmlPath}"`);
    
    // --- FIX 2: Change "Tools" to "AI Tools" and add navigation to the top-level button ---
    // Specifically targeting the new Tools menu we injected.
    // The inner div we injected:
    // <div data-dropdown-click="" class="nav-bar__link-inner"><div class="nav-bar__link-bg"></div><div class="nav-bar__link-text"><span class="nav-bar__link-text-span">Tools</span>
    const oldToolsHeaderMatch = /<div data-dropdown-click="" class="nav-bar__link-inner">([\s\S]*?)<span class="nav-bar__link-text-span">Tools<\/span>/g;
    
    html = html.replace(oldToolsHeaderMatch, (match) => {
      // Add onclick so clicking the main dropdown title ALSO navigates
      return `<div data-dropdown-click="" onclick="window.location.href='${toolsHtmlPath}'" style="cursor:pointer;" class="nav-bar__link-inner"><div class="nav-bar__link-bg"></div><div class="nav-bar__link-text"><span class="nav-bar__link-text-span">AI Tools</span>`;
    });

    // Also just in case they click the new "AI Tools" string again on multiple runs:
    html = html.replace(/<span class="nav-bar__link-text-span">Tools<\/span>/g, '<span class="nav-bar__link-text-span">AI Tools</span>');

    // --- FIX 3: Logos in the Dropdown ---
    // The user wanted the dropdown to feel like a "database that has the logos"
    // Let's inject mini logos into our dropdown tiles.
    const salesTileOld = `<h3 class="nav-dropdown-tile__h">Sales Tools</h3>`;
    const salesTileNew = `<div style="display:flex;align-items:center;gap:8px;"><h3 class="nav-dropdown-tile__h" style="margin:0;">Sales Tools</h3><img src="https://logo.clearbit.com/apollo.io" style="width:18px;height:18px;border-radius:4px" onerror="this.style.display='none'"></div>`;
    
    const marketingTileOld = `<h3 class="nav-dropdown-tile__h">AI Marketing Tools</h3>`;
    const marketingTileNew = `<div style="display:flex;align-items:center;gap:8px;"><h3 class="nav-dropdown-tile__h" style="margin:0;">Marketing Tools</h3><img src="https://logo.clearbit.com/canva.com" style="width:18px;height:18px;border-radius:4px" onerror="this.style.display='none'"></div>`;

    const gtmTileOld = `<h3 class="nav-dropdown-tile__h">Free GTM Tools</h3>`;
    const gtmTileNew = `<div style="display:flex;align-items:center;gap:8px;"><h3 class="nav-dropdown-tile__h" style="margin:0;">Free GTM Tools</h3><img src="https://logo.clearbit.com/lavender.ai" style="width:18px;height:18px;border-radius:4px" onerror="this.style.display='none'"></div>`;

    html = html.replace(salesTileOld, salesTileNew);
    html = html.replace(marketingTileOld, marketingTileNew);
    html = html.replace(gtmTileOld, gtmTileNew);

    // Write back
    fs.writeFileSync(filePath, html, 'utf8');
  }
}
console.log('All comprehensive AI Tools fixes applied.');
