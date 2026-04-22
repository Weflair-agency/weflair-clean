const fs = require('fs');

let pdHtml = fs.readFileSync('services/performance-design.html', 'utf8');
const pmpHtml = fs.readFileSync('services/paid-media-performance.html', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. HERO FIXES
pdHtml = pdHtml.replace('<span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span>', '');
pdHtml = pdHtml.replace('class="text-glow" ', '');

// 2. SIGNATURE SLOP FIX & EYEBROW
let loopStart = pdHtml.indexOf('<div class="pm-loop">');
if(loopStart !== -1) {
    let sectionEnd = pdHtml.indexOf('</section>', loopStart);
    let topOfSection = pdHtml.slice(0, loopStart);
    // Replace the exact text with regex instead to avoid newline issues
    topOfSection = topOfSection.replace(/<p class="pm-signature__statement">Every pound of ad spend should[\s\S]*?<\/p>/, '');
    let bottomOfSection = pdHtml.slice(sectionEnd + 10);
    
    // Inject clean version
    let cleanSignature = `
    <div class="pm-signature__inner">
      <p style="color:var(--sv-green); text-transform:uppercase; font-size:0.8rem; font-weight:700; letter-spacing:0.05em; margin-bottom:1rem;">Growth Philosophy</p>
      <p class="pm-signature__statement" style="font-size: clamp(2rem, 4vw, 3rem); font-family: var(--sv-font-display); font-weight:700; color:var(--sv-text); max-width:800px; text-wrap:balance; line-height:1.2; margin:0;">Traffic is meaningless if it doesn't convert. Every click should <em style="color:var(--sv-green); font-style:normal;">compound</em> into revenue. We build the architecture that holds your budget accountable.</p>
    </div>
    </section>
    `;
    pdHtml = topOfSection + cleanSignature + bottomOfSection;
}

// 3. CAPABILITIES FIX (Add pm-creative-grid instead of pd-stage)
let creativeGridStart = pmpHtml.indexOf('<div class="pm-creative-grid">');
let creativeGridEndIndex = pmpHtml.indexOf('</section>', creativeGridStart);
let pmpPieces = pmpHtml.split('<div class="pm-creative-grid">');
let pmpPieces2 = pmpPieces[1].split('</section>');
let creativesOnly = '<div class="pm-creative-grid">' + pmpPieces2[0];

let capabilitiesStart = pdHtml.indexOf('<div class="pd-stage">');
if (capabilitiesStart !== -1) {
    let capabilitiesEnd = pdHtml.indexOf('</div>\n    </div>\n  </section>', capabilitiesStart);
    let topC = pdHtml.slice(0, capabilitiesStart);
    let bottomC = pdHtml.slice(capabilitiesEnd + 30); // drop pd-stage and close the row/section properly
    
    // Inject creative component right after the pd-cap-row
    // Wait, the structure was: 
    // <section class="pd-redesign"> <div class="pd-cap-row"> <div class="pd-cap-list">...</div> <div class="pd-stage">...</div> </div> </section>
    
    // Let's rip out pd-stage completely, then close the list, close the row, add creatives, close section.
    // Replace pd-stage entirely instead of splicing manually if it's cleaner:
    pdHtml = pdHtml.replace(/<div class="pd-stage">[\s\S]*?<\/section>/, `
        </div> <!-- end pd-cap-list -->
      </div> <!-- end pd-cap-row -->
      <div style="margin-top:5rem;">
        ${creativesOnly}
      </div>
    </section>
    `);
    
    // Change pd-cap-row CSS dynamically
    pdHtml = pdHtml.replace('.pd-redesign .pd-cap-row { display: grid; grid-template-columns: 1fr 1.2fr; gap: 6rem; align-items: center; max-width: 1200px; margin: 0 auto; }', '.pd-redesign .pd-cap-row { display: flex; flex-direction:column; gap: 2rem; max-width: 1200px; margin: 0 auto; }');
    pdHtml = pdHtml.replace('.pd-redesign .pd-cap-list { display: flex; flex-direction: column; gap: 1rem; position: relative; z-index: 10;}', '.pd-redesign .pd-cap-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; position: relative; z-index: 10;}');
}

// 4. LOGOS
let defaultPlatformLogos = `
  <div class="pm-logos__track">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" loading="lazy" style="height:30px; opacity:0.8; filter:grayscale(1);">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" loading="lazy" style="height:35px; opacity:0.8; filter:grayscale(1);">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" loading="lazy" style="height:35px; opacity:0.8; filter:grayscale(1);">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Shopify_logo_2018.svg" alt="Shopify" loading="lazy" style="height:35px; opacity:0.8; filter:grayscale(1);">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/HubSpot_Logo.svg" alt="HubSpot" loading="lazy" style="height:35px; opacity:0.8; filter:grayscale(1);">
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Klaviyo_logo.svg" alt="Klaviyo" loading="lazy" style="height:35px; opacity:0.8; filter:grayscale(1);">
    <!-- Duplicate for endless scroll effect -->
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" loading="lazy" style="height:30px; opacity:0.8; filter:grayscale(1);">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" loading="lazy" style="height:35px; opacity:0.8; filter:grayscale(1);">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" loading="lazy" style="height:35px; opacity:0.8; filter:grayscale(1);">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Shopify_logo_2018.svg" alt="Shopify" loading="lazy" style="height:35px; opacity:0.8; filter:grayscale(1);">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/HubSpot_Logo.svg" alt="HubSpot" loading="lazy" style="height:35px; opacity:0.8; filter:grayscale(1);">
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Klaviyo_logo.svg" alt="Klaviyo" loading="lazy" style="height:35px; opacity:0.8; filter:grayscale(1);">
  </div>
`;
pdHtml = pdHtml.replace(/<div class="pm-logos__track">[\s\S]*?<\/div>/, defaultPlatformLogos);

// 5. CASE STUDIES FIX (Import from index.html)
let caseIndexStart = indexHtml.indexOf('<section class="weflair-section weflair-proof weflair-proof--switcher" id="proof">');
let testStart = indexHtml.indexOf('<section id="testimonials"', caseIndexStart);
let theMainPageCaseStudiesTab = indexHtml.slice(caseIndexStart, testStart);

let uglyCaseStart = pdHtml.indexOf('<section class="sv-section" id="case-studies">');
if(uglyCaseStart !== -1) {
    let uglyCaseEnd = pdHtml.indexOf('</section>', uglyCaseStart) + 10;
    let upHtml = pdHtml.slice(0, uglyCaseStart);
    let downHtml = pdHtml.slice(uglyCaseEnd);
    pdHtml = upHtml + "\n" + theMainPageCaseStudiesTab + "\n" + downHtml;
}

fs.writeFileSync('services/performance-design.html', pdHtml, 'utf8');
console.log('Regenerated OK');
