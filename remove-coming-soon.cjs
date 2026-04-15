const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const sitemapPath = path.join(rootDir, 'sitemap.html');

// 1. Clean up sitemap.html
let sitemapHTML = fs.readFileSync(sitemapPath, 'utf-8');
sitemapHTML = sitemapHTML.replace(/ <span style="color:#3eff68;font-size:\.75rem">Coming soon<\/span>/g, '');
sitemapHTML = sitemapHTML.replace(/ <span style="color:#3eff68;font-size:\.75rem">Coming soon<\/span>/g, ''); 
fs.writeFileSync(sitemapPath, sitemapHTML);
console.log('Cleaned sitemap.html');

// 2. We need a basic template for Expertise pages
const expertiseTemplate = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>WeFlair - {{TITLE}} Expertise</title>
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="../brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="../foundation-styles.css" />
  <link rel="stylesheet" href="../foundation-slater.css" />
  <link rel="stylesheet" href="../weflair-hero.css" />
  <script src="../foundation.js" defer></script>
  <style>
    .expertise-hero { padding: 8rem 0 4rem; text-align: center; }
    .expertise-grid { display: grid; gap: 2rem; max-width: 60rem; margin: 0 auto; padding: 2rem; }
    .expertise-card { padding: 2rem; border: 1px solid rgba(62,255,104,0.15); border-radius: 1rem; background: linear-gradient(180deg, rgba(20,22,20,0.65) 0%, rgba(16,18,16,0.82) 100%); }
    .h2 { font-size: 2.5rem; line-height: 1.1; margin-bottom: 1rem; color: #f6f3ee; }
    .p-l { font-size: 1.25rem; color: rgba(246,243,238,0.7); max-width: 40rem; margin: 0 auto; }
  </style>
</head>
<body class="body">
  <main id="main">
    <!-- Navbar placeholder (we will inject the real navbar using JS/build later or just leave it standard for now) -->
    <a href="../index.html" class="btn" style="position:absolute; top:2rem; left:2rem;">Back to Home</a>
    
    <section class="expertise-hero">
      <div class="container">
        <h1 class="h2">Dominating the {{TITLE}} Space.</h1>
        <p class="p-l">{{DESC}} We build high-velocity growth engines specifically designed for {{TITLE}} businesses.</p>
      </div>
    </section>

    <section class="expertise-grid">
      <div class="expertise-card">
        <h3>Custom Workflows</h3>
        <p>Your sales cycle is unique. We map data models and conversion points tailored to the {{TITLE}} buyer journey.</p>
      </div>
      <div class="expertise-card">
        <h3>Proven ROI</h3>
        <p>No vanity metrics. Every outbound and paid media sequence is tracked directly to closed-won revenue.</p>
      </div>
      <div style="text-align:center; padding-top:2rem;">
        <a href="../contact.html" class="btn weflair-btn weflair-btn--primary">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span">Get a Growth Audit</span></div>
        </a>
      </div>
    </section>
  </main>
</body>
</html>`;

const expertisePages = [
  { file: 'b2b-saas.html', title: 'B2B SaaS', desc: 'From PLG to Enterprise Sales-Led.' },
  { file: 'b2b-hardware.html', title: 'B2B Hardware', desc: 'Long sales cycles, physical products.' },
  { file: 'b2b-services.html', title: 'B2B Services', desc: 'Agencies and high-ticket consulting.' },
  { file: 'ecommerce.html', title: 'eCommerce', desc: 'High volume, rigorous LTV/CAC optimization.' },
  { file: 'fintech.html', title: 'FinTech', desc: 'Complex regulatory environments and high trust.' }
];

expertisePages.forEach(page => {
  const content = expertiseTemplate
    .replace(/\{\{TITLE\}\}/g, page.title)
    .replace(/\{\{DESC\}\}/g, page.desc);
  fs.writeFileSync(path.join(rootDir, 'expertise', page.file), content);
  console.log('Generated ' + page.file);
});

// 3. Legal pages
const legalTemplate = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>WeFlair - {{TITLE}}</title>
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="../brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="../foundation-styles.css" />
  <style>
    .legal-content { max-width: 48rem; margin: 6rem auto; padding: 2rem; color: #f6f3ee; font-family: sans-serif; line-height: 1.6; }
    .legal-content h1 { font-size: 2.5rem; margin-bottom: 2rem; border-bottom: 1px solid rgba(246,243,238,0.1); padding-bottom: 1rem; }
    .legal-content h2 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; }
    .legal-content p { color: rgba(246,243,238,0.7); margin-bottom: 1rem; }
  </style>
</head>
<body class="body" style="background-color: #111;">
  <div class="legal-content">
    <a href="../index.html" style="color:#3eff68; text-decoration:none; margin-bottom:2rem; display:inline-block;">&larr; Back to Home</a>
    <h1>{{TITLE}}</h1>
    <p>Last updated: April 10, 2026</p>
    <h2>1. Introduction</h2>
    <p>Welcome to WeFlair. This document outlines our standard {{TITLE}} for engaging with our agency services.</p>
    <h2>2. Interpretation and Definitions</h2>
    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
    <h2>3. Acknowledgment</h2>
    <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and WeFlair. These conditions set out the rights and obligations of all users regarding the use of the Service.</p>
    <h2>4. Contact Us</h2>
    <p>If you have any questions about this {{TITLE}}, You can contact us at hello@weflair.co</p>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(rootDir, 'legal', 'privacy.html'), legalTemplate.replace(/\{\{TITLE\}\}/g, 'Privacy Policy'));
fs.writeFileSync(path.join(rootDir, 'legal', 'terms.html'), legalTemplate.replace(/\{\{TITLE\}\}/g, 'Terms and Conditions'));
console.log('Generated legal pages');
