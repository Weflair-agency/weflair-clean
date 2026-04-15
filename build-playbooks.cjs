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

const playbooks = [
  // Outbound
  { cat: "outbound", title: "14-Day Omnichannel SDR Cadence", desc: "Multi-touch blueprint across LinkedIn, Cold Email, and Cold Calling. Built for high-volume outbound." },
  { cat: "outbound", title: "Inbound Lead Velocity Routing", desc: "SLA protocols to ensure demo requests hit an AE's calendar in under 5 minutes without failure." },
  { cat: "outbound", title: "Enterprise Multi-Threading Logic", desc: "How to transition from the internal champion to the Economic Buyer without causing organizational friction." },
  { cat: "outbound", title: "Objection Handling Matrix", desc: "Direct scripts and fallbacks to flip arbitrary 'Send me some info' requests into hard calendar bookings." },
  { cat: "outbound", title: "Closed-Lost Revival Architecture", desc: "A 90-day automated ping sequence to reactivate stalled pipeline after a deal goes dark." },
  
  // RevOps
  { cat: "revops", title: "Apollo-to-HubSpot Sync Logic", desc: "The exact API field mapping and deduplication logic to prevent dirty records and massive data loss." },
  { cat: "revops", title: "Behavioral Lead Scoring Matrix", desc: "Math-based models to assign weighted point values based on high-intent website actions (Pricing vs Blog)." },
  { cat: "revops", title: "Deal Desk Approval Automation", desc: "Slack and CRM-based automation flows for AE discount approvals to accelerate contracting." },
  { cat: "revops", title: "Round-Robin Routing Deduplication", desc: "Building an unbreakable territory and round-robin routing rule system inside Salesforce/HubSpot." },
  { cat: "revops", title: "LTV:CAC Dashboard Architecture", desc: "The strict custom report builds required to measure true marketing ROI against closed-won revenue." },

  // Paid Media
  { cat: "paid", title: "B2B LinkedIn Retargeting Funnel", desc: "A 3-tier sequence: Awareness video to Social Proof carousel to direct product Demo Offer." },
  { cat: "paid", title: "Search Negation Matrix", desc: "Pre-built massive negative keyword lists to prevent wasted Google Ads spend on non-buyer intent." },
  { cat: "paid", title: "Lead Magnet to Demo Acceleration", desc: "The exact 4-email sequence post-download that pushes a passive reader into a sales conversation." },
  { cat: "paid", title: "ABM Content Distribution Protocol", desc: "Targeting specific enterprise IP addresses and job titles with hyper-tailored creative variations." },
  { cat: "paid", title: "Trial Conversion Ad Architecture", desc: "Ad funnels designed explicitly to push Free Trial SaaS users to trigger usage limits and upgrade." },

  // eCommerce
  { cat: "ecom", title: "4-Part Abandoned Cart Recovery", desc: "Timing constraints and psychological triggers for cart abandonment emails to reclaim lost revenue." },
  { cat: "ecom", title: "Post-Purchase Review Generation", desc: "Email timing sequences mapped against delivery dates to extract UGC and 5-star reviews on auto-pilot." },
  { cat: "ecom", title: "VIP Segment Identification (RFM)", desc: "Using Recency, Frequency, and Monetary modeling to build hidden VIP reward programs." },
  { cat: "ecom", title: "90-Day Dormant Win-Back Flow", desc: "Aggressive, escalating discount structures geared precisely toward reactivating churned customers." },
  { cat: "ecom", title: "BFCM Launch Master Checklist", desc: "Server stress logic, warm-up list sends, and SMS drop timings for Black Friday / Cyber Monday." },

  // Support
  { cat: "support", title: "30-Day Product Activation Sequence", desc: "In-app triggers and email cadences to ensure strict software adoption in the first month." },
  { cat: "support", title: "Churn Risk Early Warning System", desc: "Identifying weekly login drops and triggering automated CSM interventions to save accounts." },
  { cat: "support", title: "NPS Detractor Mitigation", desc: "Auto-routing negative product reviews or support surveys to senior engineering/support instantly." },
  { cat: "support", title: "SLA Breach Escalation Protocol", desc: "Automated Jira/Zendesk routing workflows to ensure high-priority enterprise tickets are never dropped." },
  { cat: "support", title: "Automated Trial-to-Paid Nurture", desc: "Triggering usage-based emails before the 14-day trial expires to ensure smooth credit card capture." }
];

let playbooksHtml = '';
playbooks.forEach(pb => {
  let badgeText = '';
  if(pb.cat === 'outbound') badgeText = 'Outbound Sales';
  if(pb.cat === 'revops') badgeText = 'RevOps & CRM';
  if(pb.cat === 'paid') badgeText = 'Paid Media & Demand';
  if(pb.cat === 'ecom') badgeText = 'eCommerce & B2C';
  if(pb.cat === 'support') badgeText = 'Customer Success';

  playbooksHtml += `
    <div class="weflair-pb-card" data-category="${pb.cat}">
      <div class="weflair-pb-badge">${badgeText}</div>
      <h3 class="weflair-pb-h3">${pb.title}</h3>
      <p class="weflair-pb-p">${pb.desc}</p>
      <div style="margin-top:auto; padding-top:1.5rem;">
        <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--ghost" style="width:100%; justify-content:center;">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span" style="font-size:0.85rem;">Download Template</span></div>
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
  <title>Operator Playbooks — WeFlair</title>
  <meta name="description" content="25+ Operator-grade playbooks spanning RevOps, Outbound, Paid Media, and eCommerce." />
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="../brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="../foundation-styles.css" />
  <link rel="stylesheet" href="../foundation-slater.css" />
  <link rel="stylesheet" href="../weflair-hero.css" />
  <script src="../foundation.js" defer></script>
  <script src="../weflair-hero.js" defer></script>
  
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
        <p class="eyebrow__p">The Arsenal</p>
      </div>
      <h1 class="dir-hero__title">Operator-grade playbooks you can run today.</h1>
      <p class="dir-hero__sub">We've ripped the exact operating models out of our agency engagements. Download 25+ step-by-step PDF structures spanning Outbound, RevOps, Paid Media, eCommerce, and Support.</p>
    </div>
  </section>

  <!-- DIRECTORY -->
  <section class="dir-layout">
    <aside class="dir-sidebar">
      <div class="dir-filter-title">Category Filters</div>
      <ul class="dir-filter-list">
        <li><button class="dir-filter-btn is-active" data-filter="all">All Playbooks <span>25</span></button></li>
        <li><button class="dir-filter-btn" data-filter="outbound">Outbound Sales <span>5</span></button></li>
        <li><button class="dir-filter-btn" data-filter="revops">RevOps & CRM <span>5</span></button></li>
        <li><button class="dir-filter-btn" data-filter="paid">Paid Media <span>5</span></button></li>
        <li><button class="dir-filter-btn" data-filter="ecom">eCommerce <span>5</span></button></li>
        <li><button class="dir-filter-btn" data-filter="support">Customer Success <span>5</span></button></li>
      </ul>
    </aside>

    <div class="dir-grid" id="playbooks-grid">
      ${playbooksHtml}
    </div>
  </section>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const filterBtns = document.querySelectorAll('.dir-filter-btn');
      const cards = document.querySelectorAll('.weflair-pb-card');

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

fs.writeFileSync(path.join(__dirname, 'resources', 'playbooks.html'), pageHtml);
console.log('Successfully built resources/playbooks.html with 25 playbooks and filtering.');
