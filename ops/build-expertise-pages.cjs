const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const HEADER = fs.readFileSync(path.join(ROOT, "src", "partials", "header.html"), "utf8").trim();
const FOOTER = fs.readFileSync(path.join(ROOT, "src", "partials", "footer.html"), "utf8").trim();
const OUT_DIR = path.join(ROOT, "expertise");

const pages = [
  {
    file: "b2b-demand-generation.html",
    title: "B2B Demand Generation | WeFlair",
    description: "A launch-ready skeleton for WeFlair's B2B demand generation expertise page.",
    eyebrow: "B2B expertise",
    h1: "B2B Demand Generation",
    summary:
      "A source-ready skeleton for the B2B demand generation page. The structure is in place now so the next pass can focus on positioning, proof, offers, and section-level copy.",
    panelTitle: "Demand system spine",
    panelItems: ["Market narrative", "Paid capture", "Outbound systems", "CRM handoff", "Revenue feedback"],
    sectionTitle: "Built for the next content pass.",
    sectionBody:
      "This page is wired into navigation, footer links, and sitemap output. The placeholders below are intentionally simple so the final content can drop into a stable layout.",
    cards: [
      ["01", "Audience and offer", "Clarify the ICP, pains, triggers, offer promise, and commercial reason to act."],
      ["02", "Channel motion", "Map paid media, outbound, search, landing pages, and nurture into one demand system."],
      ["03", "Measurement", "Tie traffic, conversations, opportunities, and pipeline back to the same revenue model."],
    ],
    bandTitle: "The page can grow without a rebuild.",
    steps: [
      ["Position", "Final headline, ICP definition, and point of view."],
      ["Prove", "Case studies, logos, outcomes, and relevant proof blocks."],
      ["Package", "Demand generation components, timelines, and engagement fit."],
      ["Convert", "CTA, audit path, FAQ, and handoff into contact."],
    ],
  },
  {
    file: "b2b-saas.html",
    title: "B2B SaaS Expertise | WeFlair",
    description: "Growth systems for B2B SaaS teams that need qualified pipeline and cleaner revenue visibility.",
    eyebrow: "Expertise",
    h1: "B2B SaaS",
    summary:
      "Demand capture, activation, outbound, paid media, and revenue operations for software teams that need qualified pipeline instead of vanity lead volume.",
    panelTitle: "SaaS growth levers",
    panelItems: ["Demo volume", "Trial activation", "CAC payback", "Expansion", "Pipeline velocity"],
    sectionTitle: "A skeleton for SaaS-specific depth.",
    sectionBody:
      "The layout is ready for SaaS positioning, proof, funnel diagrams, and conversion copy once the final narrative is decided.",
    cards: [
      ["01", "Pipeline quality", "Focus the motion around accounts that can become real revenue."],
      ["02", "Activation", "Connect acquisition to product behavior, onboarding, and expansion signals."],
      ["03", "Revenue visibility", "Make spend, pipeline, and closed revenue easier to read in one operating view."],
    ],
    bandTitle: "Ready for SaaS proof and offers.",
    steps: [
      ["ICP", "Company size, buyer role, urgency, and category maturity."],
      ["Motion", "PLG, sales-led, hybrid, channel, or enterprise pipeline path."],
      ["System", "Paid capture, outbound, landing pages, nurture, and CRM."],
      ["Scale", "Reporting, optimization rhythm, and expansion loops."],
    ],
  },
  {
    file: "b2b-services.html",
    title: "B2B Services Expertise | WeFlair",
    description: "Demand generation systems for agencies, consultancies, and specialist B2B service teams.",
    eyebrow: "Expertise",
    h1: "B2B Services",
    summary:
      "Structured demand generation for agencies, consultancies, and specialist service teams that need stronger qualification, better sales conversations, and cleaner follow-up.",
    panelTitle: "Service pipeline levers",
    panelItems: ["Lead quality", "Meeting rate", "Proposal velocity", "Win rate", "Pipeline coverage"],
    sectionTitle: "Built around longer sales cycles.",
    sectionBody:
      "This skeleton is prepared for service-specific messaging, proof, sales process content, and qualification logic.",
    cards: [
      ["01", "Sharper qualification", "Turn broad interest into conversations with buyers who match the offer."],
      ["02", "Better handoff", "Connect campaigns, forms, sales calls, and follow-up without losing context."],
      ["03", "Commercial clarity", "Track pipeline value, stage movement, and close quality instead of raw leads."],
    ],
    bandTitle: "Ready for service-market content.",
    steps: [
      ["Define", "Offer, ICP, sales trigger, and decision criteria."],
      ["Capture", "Landing pages, paid demand, search, and conversion paths."],
      ["Create", "Outbound systems and nurture for accounts that need more education."],
      ["Close", "CRM hygiene, handoff, and reporting against pipeline."],
    ],
  },
  {
    file: "b2b-tech.html",
    title: "B2B Tech Expertise | WeFlair",
    description: "Marketing systems for technical B2B categories with complex buyers and longer buying cycles.",
    eyebrow: "Expertise",
    h1: "B2B Tech",
    summary:
      "Marketing systems for technical B2B companies where the product is complex, the buying committee is crowded, and the path from education to pipeline needs to be clearer.",
    panelTitle: "Tech growth levers",
    panelItems: ["Problem education", "Account engagement", "Demo quality", "Sales enablement", "Pipeline velocity"],
    sectionTitle: "Built for technical B2B categories.",
    sectionBody:
      "B2B Tech now owns the fourth expertise slot alongside B2B SaaS, B2B Services, and E-commerce.",
    cards: [
      ["01", "Translate complexity", "Turn technical value into buyer-ready messaging and page structure."],
      ["02", "Educate the market", "Use content, paid capture, and outbound to move buyers from problem to action."],
      ["03", "Support sales", "Give sales teams clearer signals, assets, and follow-up logic."],
    ],
    bandTitle: "Ready for technical proof.",
    steps: [
      ["Segment", "Separate technical users, economic buyers, and internal champions."],
      ["Message", "Clarify the business problem without flattening the technical truth."],
      ["Activate", "Connect paid, outbound, search, and sales enablement."],
      ["Measure", "Track account engagement, opportunity creation, and pipeline velocity."],
    ],
  },
  {
    file: "ecommerce.html",
    title: "E-commerce Expertise | WeFlair",
    description: "Paid, lifecycle, and conversion systems for e-commerce teams that need stronger revenue efficiency.",
    eyebrow: "Expertise",
    h1: "E-commerce",
    summary:
      "Paid acquisition, conversion, retention, and lifecycle systems for commerce teams that need stronger revenue efficiency across the full customer journey.",
    panelTitle: "Commerce growth levers",
    panelItems: ["ROAS", "AOV", "Conversion rate", "Retention", "LTV"],
    sectionTitle: "Ready for commerce content.",
    sectionBody:
      "The page structure is prepared for channel examples, proof, conversion work, retention assets, and offer copy.",
    cards: [
      ["01", "Acquisition quality", "Improve how paid traffic, feeds, creative, and landing pages work together."],
      ["02", "Conversion lift", "Find friction across PDPs, collections, carts, and checkout paths."],
      ["03", "Lifecycle growth", "Strengthen repeat purchase, retention, and customer value after the first order."],
    ],
    bandTitle: "Ready for commerce proof.",
    steps: [
      ["Acquire", "Paid media, feed performance, creative, and audience strategy."],
      ["Convert", "UX, CRO, testing, and page-level performance design."],
      ["Retain", "Email, SMS, lifecycle, loyalty, and repeat purchase."],
      ["Measure", "Margin, contribution, LTV, and channel efficiency."],
    ],
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cardsHtml(cards) {
  return cards
    .map(
      ([num, title, body]) =>
        `<article class="expertise-card"><span>${escapeHtml(num)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`
    )
    .join("\n              ");
}

function stepsHtml(steps) {
  return steps
    .map(
      ([title, body], index) =>
        `<li><span>${String(index + 1).padStart(2, "0")}</span><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></div></li>`
    )
    .join("\n                ");
}

function panelItemsHtml(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n              ");
}

function renderPage(page) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}" />
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="/brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="/foundation-styles.css" />
  <link rel="stylesheet" href="/foundation-slater.css" />
  <link rel="stylesheet" href="/weflair-hero.css" />
  <link rel="stylesheet" href="/expertise/expertise.css" />
  <script src="/foundation.js" defer></script>
  <script src="/weflair-hero.js" defer></script>
</head>
<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body expertise-page">
  <div class="noise is--small" style="z-index:9999; pointer-events:none;"></div>
  <header class="header">${HEADER}</header>
  <main class="main expertise-shell">
    <section class="expertise-hero">
      <div class="expertise-container">
        <nav class="expertise-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/sitemap.html">Expertise</a>
          <span>/</span>
          <span>${escapeHtml(page.h1)}</span>
        </nav>
        <div class="expertise-hero__grid">
          <div class="expertise-hero__copy">
            <div class="expertise-eyebrow">${escapeHtml(page.eyebrow)}</div>
            <h1 class="expertise-title">${escapeHtml(page.h1)}</h1>
            <p class="expertise-summary">${escapeHtml(page.summary)}</p>
            <div class="expertise-actions">
              <a href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Talk to us</span></div></a>
              <a href="/sitemap.html" class="btn w-inline-block weflair-btn weflair-btn--ghost"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">View sitemap</span></div></a>
            </div>
          </div>
          <aside class="expertise-hero__panel" aria-label="${escapeHtml(page.panelTitle)}">
            <p class="expertise-panel__label">Working frame</p>
            <h2 class="expertise-panel__title">${escapeHtml(page.panelTitle)}</h2>
            <ul class="expertise-panel__list">
              ${panelItemsHtml(page.panelItems)}
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <section class="expertise-section">
      <div class="expertise-container">
        <div class="expertise-section__head">
          <h2>${escapeHtml(page.sectionTitle)}</h2>
          <p>${escapeHtml(page.sectionBody)}</p>
        </div>
        <div class="expertise-card-grid">
          ${cardsHtml(page.cards)}
        </div>
      </div>
    </section>

    <section class="expertise-section">
      <div class="expertise-container">
        <div class="expertise-band">
          <div class="expertise-band__grid">
            <h2>${escapeHtml(page.bandTitle)}</h2>
            <ol class="expertise-step-list">
              ${stepsHtml(page.steps)}
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="expertise-section">
      <div class="expertise-container">
        <div class="expertise-related__panel">
          <div>
            <h2>Next content layer.</h2>
            <p>Use this page as the stable shell for proof, section copy, FAQs, and final CTA logic.</p>
          </div>
          <div class="expertise-actions">
            <a href="/services/go-to-market-systems.html" class="btn w-inline-block weflair-btn weflair-btn--ghost"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Outbound systems</span></div></a>
            <a href="/services/paid-media-performance.html" class="btn w-inline-block weflair-btn weflair-btn--ghost"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Paid media</span></div></a>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${FOOTER}
</body>
</html>
`;
}

function renderRedirect(title, target) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="refresh" content="0; url=${target}" />
  <title>${title}</title>
  <link rel="canonical" href="${target}" />
</head>
<body>
  <p><a href="${target}">Continue to B2B Tech</a></p>
</body>
</html>
`;
}

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const page of pages) {
  fs.writeFileSync(path.join(OUT_DIR, page.file), renderPage(page), "utf8");
  console.log(`Wrote expertise/${page.file}`);
}

fs.writeFileSync(
  path.join(OUT_DIR, "b2b-hardware.html"),
  renderRedirect("B2B Tech | WeFlair", "/expertise/b2b-tech.html"),
  "utf8"
);
fs.writeFileSync(
  path.join(OUT_DIR, "fintech.html"),
  renderRedirect("B2B Tech | WeFlair", "/expertise/b2b-tech.html"),
  "utf8"
);
