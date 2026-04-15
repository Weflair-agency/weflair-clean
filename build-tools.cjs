const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const headerMatch = indexHtml.match(/(<header class="header">[\s\S]*?<\/header>)/);
let newHeaderHtml = headerMatch ? headerMatch[1] : '';

const footerMatch = indexHtml.match(/(<footer[\s\S]*?<\/footer>)|(<section class="footer weflair-footer">[\s\S]*?<\/section>)/);
let footerHtml = footerMatch ? footerMatch[0] : '';

const tools = [
  // AI Tools
  { cat: "ai", title: "Apollo Sequence AI", desc: "Automate outbound sequencing with integrated ChatGPT prompts for true 1-to-1 personalization at scale." },
  { cat: "ai", title: "Perplexity AEO Engine", desc: "Test how Perplexity and ChatGPT cite your brand based on specific prompts. A must-have for AI Search Optimization." },
  { cat: "ai", title: "Gong AI Email Writer", desc: "Draft emails directly from the prospect's recent LinkedIn activities and funding rounds pulled seamlessly." },
  { cat: "ai", title: "Lavender Call Analysis", desc: "AI-driven conversational intelligence to score reps on talk-time ratio and objection handling." },
  { cat: "ai", title: "HubSpot ChatSpot", desc: "Conversational CRM assistant to pull pipeline reports and forecast data instantly via prompt." },

  // Lead Gen & Data
  { cat: "data", title: "Clay Data Enrichment", desc: "The ultimate waterfall enrichment platform pulling from 50+ providers to verify waterfalls." },
  { cat: "data", title: "Ocean.io Lookalike", desc: "Contextual lookalike audience builder based on website NLP rather than generic NAICS codes." },
  { cat: "data", title: "BuiltWith Technographics", desc: "Find exactly who installed HubSpot, Salesforce, or your competitor's software in the last 30 days." },
  { cat: "data", title: "Clearbit Reveal", desc: "De-anonymize website traffic to see exactly which companies are viewing your pricing page." },
  { cat: "data", title: "ZoomInfo Intent Data", desc: "Track organizational surging topics to reach out identically when they research your category." },

  // Workflow & Automation
  { cat: "workflow", title: "Make.com RevOps Engine", desc: "Visual automation platform far superior to Zapier for complex CRM and data routing workflows." },
  { cat: "workflow", title: "Chili Piper Routing", desc: "Advanced round-robin routing logic to instantly connect MQLs to AE calendars from the form." },
  { cat: "workflow", title: "UserGems Routing", desc: "Track champion job changes to immediately alert sales when a past buyer joins a new target account." },
  { cat: "workflow", title: "LeanData Workflows", desc: "Unbreakable lead-to-account matching functionality natively inside Salesforce." },
  { cat: "workflow", title: "Traction Complete", desc: "A massive graphical workspace for managing the most complicated territory distribution models." },

  // CRO & Conversion
  { cat: "cro", title: "Mutiny Lead Routing", desc: "Dynamically alter your website copy based on the visitor's firmographic data or IP address." },
  { cat: "cro", title: "Navattic Meeting Booking", desc: "Instantly build interactive product tours that convert anonymous traffic into qualified pipeline." },
  { cat: "cro", title: "Hotjar Heatmaps", desc: "Visualize exactly where enterprise buyers scroll, bounce, and rage-click on your landing pages." },
  { cat: "cro", title: "VWO Behavioral Analytics", desc: "Form analytics to identify which specific input field causes the highest abandonment rate." },
  { cat: "cro", title: "Wynter Interactive Demos", desc: "Host gated product demos with B2B-specific engagement tracking and drop-off analytics." }
];

let toolsHtml = '';
tools.forEach(tool => {
  let badgeText = '';
  if(tool.cat === 'ai') badgeText = 'AI & LLM Tools';
  if(tool.cat === 'data') badgeText = 'Data & Enrichment';
  if(tool.cat === 'workflow') badgeText = 'RevOps & Routing';
  if(tool.cat === 'cro') badgeText = 'CRO & Conversion';

  toolsHtml += `
    <div class="weflair-pb-card" data-category="${tool.cat}">
      <div class="weflair-pb-badge">${badgeText}</div>
      <h3 class="weflair-pb-h3">${tool.title}</h3>
      <p class="weflair-pb-p">${tool.desc}</p>
      <div style="margin-top:auto; padding-top:1.5rem;">
        <a href="contact.html" class="btn w-inline-block weflair-btn weflair-btn--ghost" style="width:100%; justify-content:center;">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span" style="font-size:0.85rem;">View Tool Configuration</span></div>
        </a>
      </div>
    </div>
  `;
});

const pageHtml = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Free GTM & AI Tools — WeFlair</title>
  <meta name="description" content="The ultimate vetted directory of tech-stack tools for Outbound, RevOps, and Performance CRO." />
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="foundation-styles.css" />
  <link rel="stylesheet" href="foundation-slater.css" />
  <link rel="stylesheet" href="weflair-hero.css" />
  <script src="foundation.js" defer></script>
  <script src="weflair-hero.js" defer></script>
  
  <style>
    .pb-page { background: #151515; color: #f6f3ee; font-family: 'Inter', sans-serif; }
    
    /* HERO */
    .dir-hero { position: relative; padding: clamp(8rem, 12vw, 12rem) 2rem clamp(4rem, 8vw, 6rem); text-align: center; border-bottom: 1px solid rgba(246,243,238,0.06); }
    .dir-hero__inner { max-width: 58rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .dir-hero__title { font-size: clamp(3rem, 5vw, 4.5rem); line-height: 1.05; font-weight: 700; letter-spacing: -0.06em; margin: 0 0 1.5rem; text-wrap: balance; font-family: 'Space Grotesk', sans-serif;}
    .dir-hero__sub { font-size: clamp(1.1rem, 1.4vw, 1.25rem); line-height: 1.6; color: rgba(246,243,238,0.7); max-width: 44rem; margin: 0 auto; text-wrap: balance; }

    /* LAYOUT */
    .dir-layout { max-width: 86rem; margin: 0 auto; display: flex; gap: 3rem; padding: clamp(4rem, 6vw, 6rem) 2rem; align-items: flex-start;}
    @media(max-width: 991px) { .dir-layout { flex-direction: column; } }

    /* SIDEBAR */
    .dir-sidebar { flex: 0 0 260px; position: sticky; top: 7rem; }
    @media(max-width: 991px) { .dir-sidebar { flex: none; position: relative; top: 0; width: 100%; margin-bottom:2rem;} }
    .dir-filter-title { font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(246,243,238,0.4); margin-bottom: 1.5rem; }
    .dir-filter-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
    @media(max-width: 991px) { .dir-filter-list { flex-direction: row; flex-wrap: wrap; } }
    .dir-filter-btn { background: transparent; border: 1px solid transparent; color: rgba(246,243,238,0.6); padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; text-align: left; cursor: pointer; transition: all 0.2s ease; width: 100%; display:flex; justify-content:space-between; align-items:center;}
    @media(max-width: 991px) { .dir-filter-btn { width: auto; } }
    .dir-filter-btn:hover { background: rgba(246,243,238,0.03); color: #f6f3ee; }
    .dir-filter-btn.is-active { background: rgba(62,255,104,0.1); border: 1px solid rgba(62,255,104,0.2); color: #3eff68; }

    /* GRID */
    .dir-grid { flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; align-content: flex-start;}
    @media(max-width: 1200px) { .dir-grid { grid-template-columns: repeat(2, 1fr); } }
    @media(max-width: 768px) { .dir-grid { grid-template-columns: 1fr; } }
    
    .weflair-pb-card { background: rgba(17,17,17,0.7); border: 1px solid rgba(246,243,238,0.08); border-radius: 1rem; padding: 2rem; display: flex; flex-direction: column; transition: transform 0.3s ease, border-color 0.3s ease; }
    .weflair-pb-card:hover { border-color: rgba(62,255,104,0.3); transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
    .weflair-pb-badge { display:inline-block; align-self:flex-start; font-size: 0.75rem; font-weight: 700; color: #3eff68; background: rgba(62,255,104,0.1); padding: 0.25rem 0.75rem; border-radius: 999px; border: 1px solid rgba(62,255,104,0.2); margin-bottom: 1.25rem; letter-spacing:0.04em; text-transform:uppercase;}
    .weflair-pb-h3 { font-size: 1.25rem; font-weight: 700; color: #f6f3ee; font-family: 'Space Grotesk', sans-serif; margin-bottom: 0.75rem; line-height: 1.3; }
    .weflair-pb-p { font-size: 0.95rem; color: rgba(246,243,238,0.6); line-height: 1.5; margin: 0; }

    /* Filter Hide */
    .weflair-pb-card.is-hidden { display: none !important; }
  </style>
</head>
<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body pb-page" style="padding-top:var(--nav-bar-height,5rem)">
  <div class="noise is--small" style="z-index:9999; pointer-events:none;"></div>
  <div class="floating-elements-main"><div class="calc-header-padding-height"></div><div data-navigation-toggle="close" class="nav-fade"></div>
  ${newHeaderHtml}
  </div>

<main class="main">
  <!-- HERO -->
  <section class="dir-hero">
    <div class="dir-hero__inner">
      <div class="eyebrow" style="margin-bottom:1.5rem; justify-content:center;">
        <span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span>
        <p class="eyebrow__p">The Tech Stack</p>
      </div>
      <h1 class="dir-hero__title">Free GTM & AI Tools Directory.</h1>
      <p class="dir-hero__sub">A curated, operator-vetted list of the only tools you actually need to build extreme sales velocity without bloating your tech stack budget.</p>
    </div>
  </section>

  <!-- DIRECTORY -->
  <section class="dir-layout">
    <aside class="dir-sidebar">
      <div class="dir-filter-title">Category Filters</div>
      <ul class="dir-filter-list">
        <li><button class="dir-filter-btn is-active" data-filter="all">All Tools <span>20</span></button></li>
        <li><button class="dir-filter-btn" data-filter="ai">AI & LLMs <span>5</span></button></li>
        <li><button class="dir-filter-btn" data-filter="data">Data Enrichment <span>5</span></button></li>
        <li><button class="dir-filter-btn" data-filter="workflow">Routing & RevOps <span>5</span></button></li>
        <li><button class="dir-filter-btn" data-filter="cro">CRO & Conversion <span>5</span></button></li>
      </ul>
    </aside>

    <div class="dir-grid" id="tools-grid">
      ${toolsHtml}
    </div>
  </section>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const filterBtns = document.querySelectorAll('.dir-filter-btn');
      const cards = document.querySelectorAll('.weflair-pb-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const filterValue = btn.getAttribute('data-filter');
          cards.forEach(card => {
            if (filterValue === 'all') {
              card.classList.remove('is-hidden');
            } else {
              if (card.getAttribute('data-category') === filterValue) {
                card.classList.remove('is-hidden');
              } else {
                card.classList.add('is-hidden');
              }
            }
          });
        });
      });
    });
  </script>

</main>

${footerHtml}
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'tools.html'), pageHtml);
console.log('Successfully built tools.html with 20 tools.');
