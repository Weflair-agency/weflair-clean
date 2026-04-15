const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const headerMatch = indexHtml.match(/(<header class="header">[\s\S]*?<\/header>)/);
let newHeaderHtml = headerMatch ? headerMatch[1] : '';
newHeaderHtml = newHeaderHtml
  .replace(/href="\.\/index\.html"/g, 'href="../index.html"')
  .replace(/href="#/g, 'href="../index.html#')
  .replace(/href="services\//g, 'href="../services/')
  .replace(/href="resources\//g, 'href="../resources/')
  .replace(/href="about.html"/g, 'href="../about.html"')
  .replace(/href="cases.html"/g, 'href="../cases.html"')
  .replace(/href="careers.html"/g, 'href="../careers.html"')
  .replace(/href="contact.html"/g, 'href="../contact.html"')
  .replace(/href="tools.html"/g, 'href="../tools.html"')
  .replace(/src="brand-assets\//g, 'src="../brand-assets/');

const footerMatch = indexHtml.match(/(<footer[\s\S]*?<\/footer>)|(<section class="footer weflair-footer">[\s\S]*?<\/section>)/);
let footerHtml = footerMatch ? footerMatch[0] : '';
footerHtml = footerHtml
  .replace(/href="services\//g, 'href="../services/')
  .replace(/href="resources\//g, 'href="../resources/')
  .replace(/href="about\.html"/g, 'href="../about.html"')
  .replace(/href="cases\.html"/g, 'href="../cases.html"')
  .replace(/href="careers\.html"/g, 'href="../careers.html"')
  .replace(/href="contact\.html"/g, 'href="../contact.html"')
  .replace(/href="tools\.html"/g, 'href="../tools.html"')
  .replace(/src="brand-assets\//g, 'src="../brand-assets/')
  .replace(/src="brand\//g, 'src="../brand/');

const calculators = [
  { cat: "roi", title: "Outbound SDR Pipeline ROI", desc: "Calculate true ROI of your SDR team based on meeting hold rates, SQL conversion, and AE close ratios." },
  { cat: "roi", title: "Paid Media LTV/CAC Modeler", desc: "Input blended blended CAC, lead volume, and avg retention to calculate when a cohort breaks even." },
  { cat: "budget", title: "Reverse Pipeline Goal Calculator", desc: "Input your $2M ARR target to calculate the exact traffic, MQL, and SQL quotas needed to hit it." },
  { cat: "budget", title: "ABM Tier 1 Budget Allocator", desc: "Distribute your marketing budget effectively across intent data, direct mail, and 1-to-1 paid social." },
  { cat: "metrics", title: "True Win-Rate Analyzer", desc: "Most CRMs calculate win-rate wrong. This models cohort-based closed-won against total created pipeline in timeframe." },
  { cat: "metrics", title: "SaaS Rule of 40 Grader", desc: "Compare your growth rate and profit margin against top quartile enterprise software metrics." },
  { cat: "cro", title: "A/B Testing Significance Engine", desc: "Bayesian probability calculator to determine exact traffic thresholds needed to call a definitive winner." },
  { cat: "cro", title: "Funnel Drop-off Diagnostic", desc: "Input your 4-step pipeline metrics to instantly locate the severest friction point costing you revenue." }
];

let calculatorsHtml = '';
calculators.forEach(calc => {
  let badgeText = '';
  if(calc.cat === 'roi') badgeText = 'ROI Modeling';
  if(calc.cat === 'budget') badgeText = 'Pipeline Planning';
  if(calc.cat === 'metrics') badgeText = 'SaaS Metrics';
  if(calc.cat === 'cro') badgeText = 'A/B Testing & CRO';

  calculatorsHtml += `
    <div class="weflair-pb-card" data-category="${calc.cat}">
      <div class="weflair-pb-badge">${badgeText}</div>
      <h3 class="weflair-pb-h3">${calc.title}</h3>
      <p class="weflair-pb-p">${calc.desc}</p>
      <div style="margin-top:auto; padding-top:1.5rem;">
        <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--ghost" style="width:100%; justify-content:center;">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span" style="font-size:0.85rem;">Open Calculator</span></div>
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
  <title>Growth Calculators — WeFlair</title>
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="../brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="../foundation-styles.css" />
  <link rel="stylesheet" href="../foundation-slater.css" />
  <link rel="stylesheet" href="../weflair-hero.css" />
  <script src="../foundation.js" defer></script>
  <script src="../weflair-hero.js" defer></script>
  <style>
    .pb-page { background: #151515; color: #f6f3ee; font-family: 'Inter', sans-serif; }
    .dir-hero { position: relative; padding: clamp(8rem, 12vw, 12rem) 2rem clamp(4rem, 8vw, 6rem); text-align: center; border-bottom: 1px solid rgba(246,243,238,0.06); }
    .dir-hero__inner { max-width: 58rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .dir-hero__title { font-size: clamp(3rem, 5vw, 4.5rem); line-height: 1.05; font-weight: 700; letter-spacing: -0.06em; margin: 0 0 1.5rem; text-wrap: balance; font-family: 'Space Grotesk', sans-serif;}
    .dir-hero__sub { font-size: clamp(1.1rem, 1.4vw, 1.25rem); line-height: 1.6; color: rgba(246,243,238,0.7); max-width: 44rem; margin: 0 auto; text-wrap: balance; }
    .dir-layout { max-width: 86rem; margin: 0 auto; display: flex; gap: 3rem; padding: clamp(4rem, 6vw, 6rem) 2rem; align-items: flex-start;}
    .dir-sidebar { flex: 0 0 260px; position: sticky; top: 7rem; }
    .dir-filter-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
    .dir-filter-btn { background: transparent; border: 1px solid transparent; color: rgba(246,243,238,0.6); padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; text-align: left; cursor: pointer; transition: all 0.2s ease; width: 100%; display:flex; justify-content:space-between; align-items:center;}
    .dir-filter-btn:hover { background: rgba(246,243,238,0.03); color: #f6f3ee; }
    .dir-filter-btn.is-active { background: rgba(62,255,104,0.1); border: 1px solid rgba(62,255,104,0.2); color: #3eff68; }
    .dir-grid { flex: 1; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; align-content: flex-start;}
    @media(max-width: 991px) { .dir-layout { flex-direction: column; } .dir-sidebar { width: 100%; position: relative; top: 0; margin-bottom:2rem; } .dir-filter-list { flex-direction: row; flex-wrap: wrap; } .dir-filter-btn { width: auto; } }
    @media(max-width: 768px) { .dir-grid { grid-template-columns: 1fr; } }
    .weflair-pb-card { background: rgba(17,17,17,0.7); border: 1px solid rgba(246,243,238,0.08); border-radius: 1rem; padding: 2rem; display: flex; flex-direction: column; transition: transform 0.3s ease, border-color 0.3s ease; }
    .weflair-pb-card:hover { border-color: rgba(62,255,104,0.3); transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
    .weflair-pb-badge { display:inline-block; align-self:flex-start; font-size: 0.75rem; font-weight: 700; color: #3eff68; background: rgba(62,255,104,0.1); padding: 0.25rem 0.75rem; border-radius: 999px; border: 1px solid rgba(62,255,104,0.2); margin-bottom: 1.25rem; letter-spacing:0.04em; text-transform:uppercase;}
    .weflair-pb-h3 { font-size: 1.25rem; font-weight: 700; color: #f6f3ee; font-family: 'Space Grotesk', sans-serif; margin-bottom: 0.75rem; line-height: 1.3; }
    .weflair-pb-p { font-size: 0.95rem; color: rgba(246,243,238,0.6); line-height: 1.5; margin: 0; }
    .weflair-pb-card.is-hidden { display: none !important; }
  </style>
</head>
<body data-weflair-static="true" data-theme="dark" class="body pb-page">
  <div class="noise is--small" style="z-index:9999; pointer-events:none;"></div>
  ${newHeaderHtml}
<main class="main" style="padding-top:4rem;">
  <section class="dir-hero">
    <div class="dir-hero__inner">
      <div class="eyebrow" style="margin-bottom:1.5rem; justify-content:center;">
        <span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span>
        <p class="eyebrow__p">The Math</p>
      </div>
      <h1 class="dir-hero__title">Pipeline \& Revenue Calculators.</h1>
      <p class="dir-hero__sub">Stop guessing your LTV to CAC. We built interactive spreadsheets and calculators to prove marketing ROI with mathematical certainty.</p>
    </div>
  </section>
  <section class="dir-layout">
    <aside class="dir-sidebar">
      <div class="dir-filter-title">Filter Calculators</div>
      <ul class="dir-filter-list">
        <li><button class="dir-filter-btn is-active" data-filter="all">All Calculators <span>8</span></button></li>
        <li><button class="dir-filter-btn" data-filter="roi">ROI Modeling <span>2</span></button></li>
        <li><button class="dir-filter-btn" data-filter="budget">Pipeline Planning <span>2</span></button></li>
        <li><button class="dir-filter-btn" data-filter="metrics">SaaS Metrics <span>2</span></button></li>
        <li><button class="dir-filter-btn" data-filter="cro">A/B Testing <span>2</span></button></li>
      </ul>
    </aside>
    <div class="dir-grid" id="tools-grid">
      ${calculatorsHtml}
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

fs.writeFileSync(path.join(__dirname, 'resources', 'calculators.html'), pageHtml);
console.log('Successfully built resources/calculators.html');
