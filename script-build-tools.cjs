const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const servicesDir = path.join(rootDir, 'services');

const indexHtmlPath = path.join(rootDir, 'index.html');
const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Extract the header and footer envelopes
const headerSplitStr = '<div data-scroll-container="" class="main-wrap">';
const footerSplitStr = '<section class="footer weflair-footer">';

const headerPart = indexHtmlContent.split(headerSplitStr)[0] + headerSplitStr;
const footerPart = footerSplitStr + indexHtmlContent.split(footerSplitStr)[1];

// 2. Generate the tools.html content
const toolsContent = `
<section class="weflair-section home-header" id="hero" style="padding-top: 8rem; padding-bottom: 4rem;">
  <div class="container">
    <div class="weflair-section__head" style="margin-bottom: 2rem;">
      <div class="eyebrow" style="background: rgba(62,255,104,.08); border: 1px solid rgba(62,255,104,.15); border-radius: 100px; padding: .6rem 1.2rem; width: fit-content; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
        <span class="weflair-eyebrow-icon" style="color: #3eff68; width: .9rem; height: .9rem; margin-right: .5rem;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg>
        </span>
        <p class="eyebrow__p" style="color: #f6f3ee; font-weight: 500; font-size: .85rem; letter-spacing: .02em; margin: 0; text-transform: uppercase;">The Stack</p>
      </div>
      <h1 class="h2" style="text-align:center;">The AI &amp; GTM tools<br><span class="weflair-section-accent weflair-section-accent--solid">we run.</span></h1>
      <p class="weflair-section__body" style="text-align:center; max-width: 600px; margin: 0 auto; color: rgba(246, 243, 238, 0.65);">Operator-grade software for scaling outbound, crushing performance, and building compound revenue engines.</p>
    </div>
  </div>
</section>

<!-- SECTION 1: AI SALES TOOLS -->
<section class="weflair-section" id="sales" style="padding-top: 2rem;">
  <div class="container">
    <div class="weflair-section__head" style="margin-bottom: 2rem; border-bottom: 1px solid rgba(246, 243, 238, 0.1); padding-bottom: 1.5rem;">
      <h2 class="h4" style="color: #f6f3ee; font-weight: 600;">AI Sales Tools</h2>
    </div>
    <div class="growing-tiles">
      <div class="growing-tiles__row weflair-services-center">
        <!-- Clay -->
        <a data-ease="" data-hover="" data-arrow="diagonal" href="https://clay.com" target="_blank" class="growing-tile w-inline-block" style="flex:0 0 calc(33.333% - .4rem);width:calc(33.333% - .4rem);max-width:calc(33.333% - .4rem)">
          <div class="growing-tile__start" style="display:flex; flex-direction:row; align-items:center; gap:16px;">
            <img src="https://logo.clearbit.com/clay.com" style="width:48px; border-radius:8px; background:#fff;" onerror="this.style.display='none'">
            <div class="growing-tile__text"><h3 class="h5">Clay</h3></div>
          </div>
          <div class="growing-tile__end">
            <div class="growing-tile__text"><p class="p-s">AI-powered data enrichment and automated outbound sequencing for highly personalized outreach.</p></div>
          </div>
        </a>
        <!-- FullEnrich -->
        <a data-ease="" data-hover="" data-arrow="diagonal" href="https://fullenrich.com" target="_blank" class="growing-tile w-inline-block" style="flex:0 0 calc(33.333% - .4rem);width:calc(33.333% - .4rem);max-width:calc(33.333% - .4rem)">
          <div class="growing-tile__start" style="display:flex; flex-direction:row; align-items:center; gap:16px;">
            <img src="https://logo.clearbit.com/fullenrich.com" style="width:48px; border-radius:8px; background:#fff;" onerror="this.style.display='none'">
            <div class="growing-tile__text"><h3 class="h5">FullEnrich</h3></div>
          </div>
          <div class="growing-tile__end">
            <div class="growing-tile__text"><p class="p-s">A waterfall enrichment provider maximizing valid B2B contact data coverages and direct dial accurate mobile numbers.</p></div>
          </div>
        </a>
        <!-- Apollo -->
        <a data-ease="" data-hover="" data-arrow="diagonal" href="https://apollo.io" target="_blank" class="growing-tile w-inline-block" style="flex:0 0 calc(33.333% - .4rem);width:calc(33.333% - .4rem);max-width:calc(33.333% - .4rem)">
          <div class="growing-tile__start" style="display:flex; flex-direction:row; align-items:center; gap:16px;">
            <img src="https://logo.clearbit.com/apollo.io" style="width:48px; border-radius:8px; background:#fff;" onerror="this.style.display='none'">
            <div class="growing-tile__text"><h3 class="h5">Apollo.io</h3></div>
          </div>
          <div class="growing-tile__end">
            <div class="growing-tile__text"><p class="p-s">The definitive platform for B2B intelligence, dialing, sequencing, and AI-assisted email writing.</p></div>
          </div>
        </a>
      </div>
      <!-- Additional Row -->
      <div class="growing-tiles__row weflair-services-center">
        <!-- Instantly -->
        <a data-ease="" data-hover="" data-arrow="diagonal" href="https://instantly.ai" target="_blank" class="growing-tile w-inline-block" style="flex:0 0 calc(33.333% - .4rem);width:calc(33.333% - .4rem);max-width:calc(33.333% - .4rem)">
          <div class="growing-tile__start" style="display:flex; flex-direction:row; align-items:center; gap:16px;">
            <img src="https://logo.clearbit.com/instantly.ai" style="width:48px; border-radius:8px; background:#fff;" onerror="this.style.display='none'">
            <div class="growing-tile__text"><h3 class="h5">Instantly</h3></div>
          </div>
          <div class="growing-tile__end">
            <div class="growing-tile__text"><p class="p-s">Scale cold email campaigns infinitely with unlimited sending accounts and AI warmups.</p></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 2: AI MARKETING TOOLS -->
<section class="weflair-section" id="marketing" style="padding-top: 2rem;">
  <div class="container">
    <div class="weflair-section__head" style="margin-bottom: 2rem; border-bottom: 1px solid rgba(246, 243, 238, 0.1); padding-bottom: 1.5rem;">
      <h2 class="h4" style="color: #f6f3ee; font-weight: 600;">AI Marketing Tools</h2>
    </div>
    <div class="growing-tiles">
      <div class="growing-tiles__row weflair-services-center">
        <!-- Canva -->
        <a data-ease="" data-hover="" data-arrow="diagonal" href="https://canva.com" target="_blank" class="growing-tile w-inline-block" style="flex:0 0 calc(33.333% - .4rem);width:calc(33.333% - .4rem);max-width:calc(33.333% - .4rem)">
          <div class="growing-tile__start" style="display:flex; flex-direction:row; align-items:center; gap:16px;">
            <img src="https://logo.clearbit.com/canva.com" style="width:48px; border-radius:8px; background:#fff;" onerror="this.style.display='none'">
            <div class="growing-tile__text"><h3 class="h5">Canva Magic Studio</h3></div>
          </div>
          <div class="growing-tile__end">
            <div class="growing-tile__text"><p class="p-s">AI-driven creative engine. Instantly resize assets, write copy, and create dynamic performance marketing visuals.</p></div>
          </div>
        </a>
        <!-- Jasper -->
        <a data-ease="" data-hover="" data-arrow="diagonal" href="https://jasper.ai" target="_blank" class="growing-tile w-inline-block" style="flex:0 0 calc(33.333% - .4rem);width:calc(33.333% - .4rem);max-width:calc(33.333% - .4rem)">
          <div class="growing-tile__start" style="display:flex; flex-direction:row; align-items:center; gap:16px;">
            <img src="https://logo.clearbit.com/jasper.ai" style="width:48px; border-radius:8px; background:#fff;" onerror="this.style.display='none'">
            <div class="growing-tile__text"><h3 class="h5">Jasper</h3></div>
          </div>
          <div class="growing-tile__end">
            <div class="growing-tile__text"><p class="p-s">An enterprise AI copilot that learns your brand voice to craft high-converting ad copy and blog content.</p></div>
          </div>
        </a>
        <!-- Mutiny -->
        <a data-ease="" data-hover="" data-arrow="diagonal" href="https://mutinyhq.com" target="_blank" class="growing-tile w-inline-block" style="flex:0 0 calc(33.333% - .4rem);width:calc(33.333% - .4rem);max-width:calc(33.333% - .4rem)">
          <div class="growing-tile__start" style="display:flex; flex-direction:row; align-items:center; gap:16px;">
            <img src="https://logo.clearbit.com/mutinyhq.com" style="width:48px; border-radius:8px; background:#fff;" onerror="this.style.display='none'">
            <div class="growing-tile__text"><h3 class="h5">Mutiny</h3></div>
          </div>
          <div class="growing-tile__end">
            <div class="growing-tile__text"><p class="p-s">No-code AI personalization platform that dynamically changes B2B site messaging for different ICP sectors.</p></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 3: FREE GTM TOOLS -->
<section class="weflair-section" id="gtm" style="padding-top: 2rem; padding-bottom: 6rem;">
  <div class="container">
    <div class="weflair-section__head" style="margin-bottom: 2rem; border-bottom: 1px solid rgba(246, 243, 238, 0.1); padding-bottom: 1.5rem;">
      <h2 class="h4" style="color: #f6f3ee; font-weight: 600;">Free GTM Tools</h2>
    </div>
    <div class="growing-tiles">
      <div class="growing-tiles__row weflair-services-center">
        <!-- Clearbit -->
        <a data-ease="" data-hover="" data-arrow="diagonal" href="https://clearbit.com" target="_blank" class="growing-tile w-inline-block" style="flex:0 0 calc(33.333% - .4rem);width:calc(33.333% - .4rem);max-width:calc(33.333% - .4rem)">
          <div class="growing-tile__start" style="display:flex; flex-direction:row; align-items:center; gap:16px;">
            <img src="https://logo.clearbit.com/clearbit.com" style="width:48px; border-radius:8px; background:#fff;" onerror="this.style.display='none'">
            <div class="growing-tile__text"><h3 class="h5">Clearbit Connect</h3></div>
          </div>
          <div class="growing-tile__end">
            <div class="growing-tile__text"><p class="p-s">Find any corporate email instantly with this free chrome extension for zero-budget outbound scaling.</p></div>
          </div>
        </a>
        <!-- Lavender -->
        <a data-ease="" data-hover="" data-arrow="diagonal" href="https://lavender.ai" target="_blank" class="growing-tile w-inline-block" style="flex:0 0 calc(33.333% - .4rem);width:calc(33.333% - .4rem);max-width:calc(33.333% - .4rem)">
          <div class="growing-tile__start" style="display:flex; flex-direction:row; align-items:center; gap:16px;">
            <img src="https://logo.clearbit.com/lavender.ai" style="width:48px; border-radius:8px; background:#fff;" onerror="this.style.display='none'">
            <div class="growing-tile__text"><h3 class="h5">Lavender (Free)</h3></div>
          </div>
          <div class="growing-tile__end">
            <div class="growing-tile__text"><p class="p-s">AI email coach suite that grades your cold outreach so you score more positive replies.</p></div>
          </div>
        </a>
        <!-- Koala -->
        <a data-ease="" data-hover="" data-arrow="diagonal" href="https://getkoala.com" target="_blank" class="growing-tile w-inline-block" style="flex:0 0 calc(33.333% - .4rem);width:calc(33.333% - .4rem);max-width:calc(33.333% - .4rem)">
          <div class="growing-tile__start" style="display:flex; flex-direction:row; align-items:center; gap:16px;">
            <img src="https://logo.clearbit.com/getkoala.com" style="width:48px; border-radius:8px; background:#fff;" onerror="this.style.display='none'">
            <div class="growing-tile__text"><h3 class="h5">Koala</h3></div>
          </div>
          <div class="growing-tile__end">
            <div class="growing-tile__text"><p class="p-s">Best free intent and visitor deanonymization tool. See exactly which companies are lurking on your site.</p></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
`;

// Write tools.html
const fullToolsHtml = headerPart + toolsContent + footerPart;
fs.writeFileSync(path.join(rootDir, 'tools.html'), fullToolsHtml, 'utf8');
console.log('Successfully generated tools.html!');


// 3. Navigation Injection Logic
const toolsNavDropdown = `
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
            <a data-hover="" data-arrow="diagonal" href="/tools.html#sales" class="nav-dropdown-tile w-inline-block">
              <div class="nav-dropdown-tile__bg"></div>
              <div class="nav-dropdown-tile__text">
                <h3 class="nav-dropdown-tile__h">Sales Tools</h3>
                <p class="nav-dropdown-tile__p">AI outbound and CRM engines.</p>
              </div>
              <div class="nav-dropdown-tile__arrow"><div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div></div>
            </a>
            <a data-hover="" data-arrow="diagonal" href="/tools.html#marketing" class="nav-dropdown-tile w-inline-block">
              <div class="nav-dropdown-tile__bg"></div>
              <div class="nav-dropdown-tile__text">
                <h3 class="nav-dropdown-tile__h">AI Marketing Tools</h3>
                <p class="nav-dropdown-tile__p">Content, creative and scaling apps.</p>
              </div>
              <div class="nav-dropdown-tile__arrow"><div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div></div>
            </a>
          </div>
          <div class="nav-dropdown__grid-row">
            <a data-hover="" data-arrow="diagonal" href="/tools.html#gtm" class="nav-dropdown-tile w-inline-block">
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

function processHtmlFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Check if Tools is already injected to avoid duplicates
  if (html.includes('<span class="nav-bar__link-text-span">Tools</span>')) {
    console.log('Skipping ' + filePath + ' (already has Tools tab)');
    return;
  }

  // Find exact string for "About" dropdown insertion point
  const insertBeforeMarker = '<div data-dropdown-status="not-active" class="nav-bar__link"><div data-dropdown-click="" class="nav-bar__link-inner"><div class="nav-bar__link-bg"></div><div class="nav-bar__link-text"><span class="nav-bar__link-text-span">About</span>';

  if (html.includes(insertBeforeMarker)) {
    html = html.replace(insertBeforeMarker, toolsNavDropdown + insertBeforeMarker);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log('Injected Tools Nav into ' + filePath);
  } else {
    console.warn('Could not find About insertion point in ' + filePath);
  }
}

// Map through root HTML files
const files = fs.readdirSync(rootDir);
for (const file of files) {
  if (file.endsWith('.html')) {
    processHtmlFile(path.join(rootDir, file));
  }
}

// Map through services HTML files
const svcFiles = fs.readdirSync(servicesDir);
for (const file of svcFiles) {
  if (file.endsWith('.html')) {
    processHtmlFile(path.join(servicesDir, file));
  }
}

// Map through resources HTML files if they exist
const resDir = path.join(rootDir, 'resources');
if (fs.existsSync(resDir)) {
  const resFiles = fs.readdirSync(resDir);
  for (const file of resFiles) {
    if (file.endsWith('.html')) {
      processHtmlFile(path.join(resDir, file));
    }
  }
}

console.log('Done.');
