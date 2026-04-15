const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const headerMatch = indexHtml.match(/(<header class="header">[\s\S]*?<\/header>)/);
const headerHtml = headerMatch ? headerMatch[1] : '';

let newHeaderHtml = headerHtml
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

const footerMatch = indexHtml.match(/(<footer[\s\S]*?<\/footer>)/);
let footerHtml = footerMatch ? footerMatch[1] : '';
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

const guides = [
  { cat: "marketing", title: "The B2B Outbound Bible", words: "15,000+ Words", desc: "A massive, end-to-end masterclass on building an outbound engine that actually books enterprise meetings." },
  { cat: "revops", title: "The HubSpot Architect's Guide", words: "11,200 Words", desc: "How to strip down a messy CRM and rebuild it with unbreakable routing, scoring, and deal desk logic." },
  { cat: "cro", title: "SaaS Landing Page Teardowns", words: "50+ Examples", desc: "We visually tear down 50 live B2B landing pages, pointing out friction, cognitive load, and copy failures." },
  { cat: "marketing", title: "Scaling Paid Media to $1M/mo", words: "9,500 Words", desc: "The exact account structures, audience logic, and creative fatigue mitigations required for massive budgets." },
  { cat: "ecommerce", title: "The eCommerce Retention Engine", words: "8,400 Words", desc: "Stop buying new customers. How to build VIP tiers, win-back flows, and review generation loops." },
  { cat: "revops", title: "Ultimate Guide to Multi-touch Attribution", words: "10,000 Words", desc: "Breaking down first-touch, W-shaped, and custom modeling. Know exactly which ad drove the closed-won deal." },
  { cat: "seo", title: "Engineering Content for AI Search (AEO)", words: "7,800 Words", desc: "Traditional SEO is dying. How to format your content so ChatGPT and Perplexity cite you as the source." },
  { cat: "revops", title: "High-Ticket B2B Lead Scoring", words: "6,500 Words", desc: "Mathematical matrices to grade leads based on implicit behavioral signals and explicit firmographics." },
  { cat: "marketing", title: "Building a Sales Velocity Engine", words: "5,000 Words", desc: "Metrics that matter: How to increase win rates, increase deal sizes, and decrease the sales cycle length." },
  { cat: "tech", title: "The Cold Email Technical Setup", words: "3,200 Words", desc: "DMARC, DKIM, SPF, and domain warm-ups. How to stay out of the spam filter in 2026." },
  { cat: "ecommerce", title: "B2C VIP & Loyalty Architectures", words: "5,500 Words", desc: "Gamifying the purchase cycle to dramatically increase average customer lifetime value." },
  { cat: "revops", title: "Revenue Operations: The First 100 Days", words: "12,000 Words", desc: "You just got hired as Head of RevOps. Here is your step-by-step 100-day execution roadmap." },
];

let guidesHtml = '';
guides.forEach(g => {
  let catText = '';
  if(g.cat === 'marketing') catText = 'Growth Marketing';
  if(g.cat === 'revops') catText = 'RevOps & CRM';
  if(g.cat === 'cro') catText = 'Performance Design';
  if(g.cat === 'ecommerce') catText = 'eCommerce';
  if(g.cat === 'seo') catText = 'Content & SEO';
  if(g.cat === 'tech') catText = 'Technical Operations';

  guidesHtml += `
    <div class="weflair-gd-card" data-category="${g.cat}">
      <div class="weflair-gd-head">
        <div class="weflair-gd-badge">${catText}</div>
        <div class="weflair-gd-words"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> ${g.words}</div>
      </div>
      <h3 class="weflair-gd-h3">${g.title}</h3>
      <p class="weflair-gd-p">${g.desc}</p>
      <div style="margin-top:auto; padding-top:1.5rem;">
        <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--ghost" style="width:100%; justify-content:center;">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span" style="font-size:0.85rem;">Read Guide</span></div>
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
  <title>Deep-Dive Guides — WeFlair</title>
  <meta name="description" content="Massive, multi-thousand word deep-dives into RevOps, Growth, and Outbound architectures." />
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="../brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="../foundation-styles.css" />
  <link rel="stylesheet" href="../foundation-slater.css" />
  <link rel="stylesheet" href="../weflair-hero.css" />
  <script src="../foundation.js" defer></script>
  <script src="../weflair-hero.js" defer></script>
  
  <style>
    .gd-page { background: #151515; color: #f6f3ee; font-family: 'Inter', sans-serif; }
    
    /* HERO */
    .gd-hero { position: relative; padding: clamp(8rem, 12vw, 12rem) 2rem clamp(4rem, 8vw, 6rem); text-align: center; border-bottom: 1px solid rgba(246,243,238,0.06); }
    .gd-hero__inner { max-width: 60rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .gd-hero__title { font-size: clamp(3rem, 5vw, 4.5rem); line-height: 1.05; font-weight: 700; letter-spacing: -0.06em; margin: 0 0 1.5rem; text-wrap: balance; font-family: 'Space Grotesk', sans-serif;}
    .gd-hero__sub { font-size: clamp(1.1rem, 1.4vw, 1.25rem); line-height: 1.6; color: rgba(246,243,238,0.7); max-width: 48rem; margin: 0 auto; text-wrap: balance; }

    /* LAYOUT */
    .gd-layout { max-width: 86rem; margin: 0 auto; display: flex; gap: 3rem; padding: clamp(4rem, 6vw, 6rem) 2rem; align-items: flex-start;}
    @media(max-width: 991px) { .gd-layout { flex-direction: column; } }

    /* SIDEBAR */
    .gd-sidebar { flex: 0 0 260px; position: sticky; top: 7rem; }
    @media(max-width: 991px) { .gd-sidebar { flex: none; position: relative; top: 0; width: 100%; margin-bottom:2rem;} }
    .gd-filter-title { font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(246,243,238,0.4); margin-bottom: 1.5rem; }
    .gd-filter-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
    @media(max-width: 991px) { .gd-filter-list { flex-direction: row; flex-wrap: wrap; } }
    .gd-filter-btn { background: transparent; border: 1px solid transparent; color: rgba(246,243,238,0.6); padding: 0.75rem 1rem; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; text-align: left; cursor: pointer; transition: all 0.2s ease; width: 100%; display:flex; justify-content:space-between; align-items:center;}
    @media(max-width: 991px) { .gd-filter-btn { width: auto; } }
    .gd-filter-btn:hover { background: rgba(246,243,238,0.03); color: #f6f3ee; }
    .gd-filter-btn.is-active { background: rgba(62,255,104,0.1); border: 1px solid rgba(62,255,104,0.2); color: #3eff68; }

    /* GRID */
    .gd-grid { flex: 1; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; align-content: flex-start;}
    @media(max-width: 768px) { .gd-grid { grid-template-columns: 1fr; } }
    
    .weflair-gd-card { background: rgba(17,17,17,0.7); border: 1px solid rgba(246,243,238,0.08); border-radius: 1rem; padding: 2.5rem; display: flex; flex-direction: column; transition: transform 0.3s ease, border-color 0.3s ease; position:relative; overflow:hidden;}
    .weflair-gd-card::before { content:""; position:absolute; top:0; right:0; width:150px; height:150px; background:radial-gradient(circle at top right, rgba(62,255,104,0.1), transparent 70%); pointer-events:none;}
    .weflair-gd-card:hover { border-color: rgba(62,255,104,0.3); transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
    .weflair-gd-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; }
    .weflair-gd-badge { font-size: 0.75rem; font-weight: 700; color: #3eff68; background: rgba(62,255,104,0.1); padding: 0.25rem 0.75rem; border-radius: 999px; border: 1px solid rgba(62,255,104,0.2); letter-spacing:0.04em; text-transform:uppercase;}
    .weflair-gd-words { font-size: 0.8rem; font-weight: 600; color: rgba(246,243,238,0.5); display:flex; align-items:center; gap:0.35rem;}
    .weflair-gd-words svg { width:1rem; height:1rem; color:rgba(246,243,238,0.4);}
    .weflair-gd-h3 { font-size: 1.4rem; font-weight: 700; color: #f6f3ee; font-family: 'Space Grotesk', sans-serif; margin-bottom: 1rem; line-height: 1.3; }
    .weflair-gd-p { font-size: 1rem; color: rgba(246,243,238,0.6); line-height: 1.6; margin: 0; }

    /* Filter Hide */
    .weflair-gd-card.is-hidden { display: none !important; }
  </style>
</head>
<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body gd-page" style="padding-top:var(--nav-bar-height,5rem)">
  <div class="noise is--small" style="z-index:9999; pointer-events:none;"></div>
  <div class="floating-elements-main"><div class="calc-header-padding-height"></div><div data-navigation-toggle="close" class="nav-fade"></div>
  ${newHeaderHtml}
  </div>

<main class="main">
  <!-- HERO -->
  <section class="gd-hero">
    <div class="gd-hero__inner">
      <div class="eyebrow" style="margin-bottom:1.5rem; justify-content:center;">
        <span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span>
        <p class="eyebrow__p">The Library</p>
      </div>
      <h1 class="gd-hero__title">Deep-dive frameworks for revenue teams.</h1>
      <p class="gd-hero__sub">No marketing generic fluff. These are 10,000+ word technical manifestos directly from our internal standard operating procedures.</p>
    </div>
  </section>

  <!-- DIRECTORY -->
  <section class="gd-layout">
    <aside class="gd-sidebar">
      <div class="gd-filter-title">Topic Filters</div>
      <ul class="gd-filter-list">
        <li><button class="gd-filter-btn is-active" data-filter="all">All Guides <span>12</span></button></li>
        <li><button class="gd-filter-btn" data-filter="marketing">Growth & Paid <span>3</span></button></li>
        <li><button class="gd-filter-btn" data-filter="revops">RevOps & CRM <span>4</span></button></li>
        <li><button class="gd-filter-btn" data-filter="ecommerce">eCommerce <span>2</span></button></li>
        <li><button class="gd-filter-btn" data-filter="cro">CRO & Design <span>1</span></button></li>
        <li><button class="gd-filter-btn" data-filter="seo">SEO & Content <span>1</span></button></li>
        <li><button class="gd-filter-btn" data-filter="tech">Tech Ops <span>1</span></button></li>
      </ul>
    </aside>

    <div class="gd-grid" id="guides-grid">
      ${guidesHtml}
    </div>
  </section>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const filterBtns = document.querySelectorAll('.gd-filter-btn');
      const cards = document.querySelectorAll('.weflair-gd-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // Update active state
          filterBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');

          const filterValue = btn.getAttribute('data-filter');

          // Filter cards
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

fs.writeFileSync(path.join(__dirname, 'resources', 'guides.html'), pageHtml);
console.log('Successfully built resources/guides.html with 12 deep-dive guides and filtering.');
