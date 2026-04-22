const fs = require('fs');
const path = require('path');

const ROUTES = [
  { file: 'index.html', title: 'WeFlair - Growth Marketing Agency', desc: 'We build end-to-end marketing engines to drive measurable growth.' },
  { file: 'services/go-to-market-systems.html', title: 'Outbound & GTM Engineering - WeFlair', desc: 'Outbound systems built to create qualified meetings and real sales conversations.' },
  { file: 'services/paid-media-performance.html', title: 'Paid Media & Performance - WeFlair', desc: 'Data-backed ad campaigns across Google Ads, Meta, and LinkedIn.' },
  { file: 'services/performance-design.html', title: 'Performance Design & CRO - WeFlair', desc: 'Landing pages and funnels that convert more traffic.' },
  { file: 'services/ai-visibility-seo.html', title: 'Content & AEO - WeFlair', desc: 'Content systems built for search and AI visibility.' },
  { file: 'resources/playbooks.html', title: 'Growth Playbooks - WeFlair', desc: 'Step-by-step marketing playbooks we use to scale brands.' },
  { file: 'resources/guides.html', title: 'Marketing Guides - WeFlair', desc: 'Practical explainers for the systems behind growth.' },
  { file: 'tools.html', title: 'Automations, Tools & Calculators - WeFlair', desc: 'Free calculators, automations, and tools to boost your marketing.' },
  { file: 'resources/checklists.html', title: 'Growth Optimization Checklists - WeFlair', desc: 'Performance optimization checklists for Google Ads, LinkedIn Ads, Meta Ads, and Outbound readiness.' },
  { file: 'cases.html', title: 'Case Studies - WeFlair', desc: 'Real results from brands that stopped guessing.' },
  { file: 'about.html', title: 'About Us - WeFlair', desc: 'Our remote team of global growth operators.' },
  { file: 'careers.html', title: 'Careers - WeFlair', desc: 'Join WeFlair to build high-performance marketing engines.' },
  { file: 'contact.html', title: 'Contact Us - WeFlair', desc: 'Book a free growth audit with our experts.' },
  { file: 'legal/privacy.html', title: 'Privacy Policy - WeFlair', desc: 'Our privacy policy.' },
  { file: 'legal/terms.html', title: 'Terms & Conditions - WeFlair', desc: 'Terms and conditions for using WeFlair.' }
];

const headerRaw = fs.readFileSync('src/partials/header.html', 'utf8');
const footerRaw = fs.readFileSync('src/partials/footer.html', 'utf8');

function fixRelativePaths(html, depth) {
  if (depth === 0) return html;
  const prefix = '../'.repeat(depth);
  let res = html;
  
  res = res.replace(/href="\//g, 'href="/'); // Absolute links stay absolute (not ideal for raw file opening but Netlify uses them)
  res = res.replace(/src="\//g, 'src="/');
  
  // It looks like previous scripts used ../ to resolve root. Since we're pushing to Netlify, 
  // root-relative absolute paths (like `/brand-assets/...` and `/index.html`) are usually best.
  // The old scripts converted `href="services/"` to `href="../services/"`. Let's just use absolute root paths `/` for global assets.
  res = res.replace(/href="\.\/([^"]*)"/g, `href="${prefix}$1"`);
  
  // A clean approach: assume standard root-relative is okay, but fix any local hardcodings.
  // We'll replace href="services/..." in the header to root relative href="/services/..."
  res = res.replace(/href="services\//g, 'href="/services/');
  res = res.replace(/href="resources\//g, 'href="/resources/');
  res = res.replace(/href="about\.html"/g, 'href="/about.html"');
  res = res.replace(/href="contact\.html"/g, 'href="/contact.html"');
  res = res.replace(/href="careers\.html"/g, 'href="/careers.html"');
  res = res.replace(/href="tools\.html"/g, 'href="/tools.html"');
  res = res.replace(/href="cases\.html"/g, 'href="/cases.html"');
  res = res.replace(/href="index\.html"/g, 'href="/"');
  
  
  res = res.replace(/src="brand-assets\//g, 'src="/brand-assets/');
  res = res.replace(/src="brand\//g, 'src="/brand/');
  res = res.replace(/src="images\//g, 'src="/images/');
  // Replace the .css scripts
  res = res.replace(/href="foundation-styles\.css"/g, 'href="/foundation-styles.css"');
  res = res.replace(/href="foundation-slater\.css"/g, 'href="/foundation-slater.css"');
  res = res.replace(/href="weflair-hero\.css"/g, 'href="/weflair-hero.css"');
  
  return res;
}

ROUTES.forEach(route => {
  const filePath = path.join(__dirname, route.file);
  const depth = (route.file.match(/\//g) || []).length;
  
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${route.file} (does not exist)`);
    return;
  }
  
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Replace existing header
  html = html.replace(/<header class="header.*?<\/header>/s, fixRelativePaths(headerRaw, depth));
  // Replace existing footer
  html = html.replace(/<footer.*?<\/footer>|<section class="footer.*?<\/section>/s, fixRelativePaths(footerRaw, depth));
  
  // Update Title and Meta
  if (html.includes('<title>')) {
     html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  } else {
     html = html.replace(/<head>/, `<head>\n  <title>${route.title}</title>`);
  }
  
  if (html.includes('name="description"')) {
     html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${route.desc}"`);
  } else {
     html = html.replace(/<head>/, `<head>\n  <meta name="description" content="${route.desc}" />`);
  }
  
  // Also we must link the new unified CSS
  if (!html.includes('weflair-global.css')) {
     html = html.replace(/<\/head>/, `  <link rel="stylesheet" href="/weflair-global.css" />\n</head>`);
  }
  
  // Remove the old `<style id="weflair-runtime-css">` if it exists in subpages!
  html = html.replace(/<style id="weflair-runtime-css">[\s\S]*?<\/style>/, '');
  
  fs.writeFileSync(filePath, html);
  console.log(`Compiled ${route.file}`);
});
