const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const HEADER = fs.readFileSync(path.join(ROOT, "src", "partials", "header.html"), "utf8").trim();
const FOOTER = fs.readFileSync(path.join(ROOT, "src", "partials", "footer.html"), "utf8").trim();

const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>B2B Demand Generation Agency | WeFlair</title>
  <meta name="description" content="Full-funnel B2B demand generation built around paid media, content, signal-based outbound, and pipeline conversion." />
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="/brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="/foundation-styles.css" />
  <link rel="stylesheet" href="/foundation-slater.css" />
  <link rel="stylesheet" href="/weflair-hero.css" />
  <link rel="stylesheet" href="/expertise/expertise.css" />
  <script src="/foundation.js" defer></script>
  <script src="/weflair-hero.js" defer></script>
</head>
<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body expertise-page demand-page">
  <div class="noise is--small" style="z-index:9999; pointer-events:none;"></div>
  <header class="header">${HEADER}</header>
  <main class="main demand-shell">
    <section class="demand-hero" id="top">
      <div class="demand-container demand-hero__grid">
        <div class="demand-hero__copy">
          <p class="demand-kicker">B2B Demand Generation Agency</p>
          <h1>Full-funnel demand gen that drives pipeline, not just leads.</h1>
          <p>We set up and run a system most teams cannot, weaving paid media, content, and signal-based outbound into a revenue engine that produces real results.</p>
          <div class="demand-actions">
            <a href="/contact.html" class="demand-btn demand-btn--primary">Book a call</a>
            <a href="/case-studies/" class="demand-btn demand-btn--outline">Explore results</a>
          </div>
        </div>
        <div class="demand-hero__visual" aria-label="Demand capture strategy dashboard">
          <div class="mock-grid"></div>
          <article class="mock-card mock-card--strategy">
            <div class="mock-card__top"><span class="mock-icon">in</span><strong>Demand Capture Strategy</strong></div>
            <div class="mock-card__body">
              <span>Retargeting campaign</span>
              <h3>Website Visitors</h3>
              <div class="mock-cols">
                <p><b>Objective</b> Conversions</p>
                <p><b>Budget</b> $80/day</p>
                <p><b>Segment</b> No location segmentation</p>
                <p><b>Targeting</b> Website Visitors - 30 Days</p>
              </div>
            </div>
          </article>
          <div class="mock-stack">
            <span class="mock-source">rd</span>
            <span class="mock-source">G</span>
            <span class="mock-source">M</span>
            <span class="mock-source">in</span>
          </div>
          <article class="mock-ad">
            <span class="mock-ad__brand">Vita mojo</span>
            <div class="mock-ad__screen"></div>
            <strong>Multiple sites. One system.</strong>
          </article>
          <article class="mock-stat mock-stat--one"><span>New subscriptions</span><strong>32</strong><small>+22.56%</small></article>
          <article class="mock-stat mock-stat--two"><span>Subscription CPA</span><strong>$142.85</strong></article>
        </div>
      </div>
    </section>

    <section class="demand-logo-strip" aria-label="Managed spend and client logos">
      <div class="demand-container demand-logo-strip__inner">
        <p>Managing $2.3M+ in monthly ad spend for B2B SaaS companies.</p>
        <div class="demand-logo-row">
          <span>Hotjar</span>
          <span>Toggl</span>
          <span>AppLovin</span>
          <span>Todoist</span>
          <span>Writesonic</span>
          <span>UserTesting</span>
          <span>Adjust</span>
        </div>
      </div>
    </section>

    <section class="demand-framework" id="framework">
      <div class="demand-container">
        <p class="demand-kicker">The framework</p>
        <h2>Create, capture, convert.</h2>
        <p class="demand-lede">Most demand generation agencies focus on one layer. We build and run all three as one connected system, so pipeline compounds instead of leaking between stages.</p>
      </div>
    </section>

    <section class="demand-split demand-split--create">
      <div class="demand-container demand-split__grid">
        <div class="demand-visual-board">
          <article class="creative-card creative-card--one">
            <span>Prospecting</span>
            <strong>Angle: Challenge</strong>
            <div class="creative-frame creative-frame--dark">
              <p>If this is how your hiring looks, it is time to upgrade.</p>
            </div>
          </article>
          <article class="creative-card creative-card--two">
            <span>Prospecting</span>
            <strong>Angle: Failed solutions</strong>
            <div class="creative-frame creative-frame--light">
              <p>Spending hours chasing specs and images for each SKU?</p>
            </div>
          </article>
        </div>
        <div class="demand-copy-panel">
          <h2>Making the 95% who are not searching aware that a problem exists and that a solution is available.</h2>
          <p>We get your product in front of the right companies before they start looking, so when the need appears, you come to mind. This is not about chasing leads. It is about using paid social and content to create the brand recognition that pays off when it is time to buy.</p>
          <ul class="demand-checks">
            <li>ICP mapping and ABM list creation</li>
            <li>LinkedIn employee organic content</li>
            <li>LinkedIn thought leader ads</li>
            <li>LinkedIn, Meta, and other social prospecting</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="demand-split demand-split--capture">
      <div class="demand-container demand-split__grid demand-split__grid--reverse">
        <div class="demand-copy-panel">
          <h2>Reaching and converting the 5% who are already looking.</h2>
          <p>We intercept high-intent buyers through search, comparison content, and retargeting. What matters is what happens next: instead of letting prospects vanish into a form, our experts route those signals into automated warm outbound sequences and retargeting campaigns that nurture them through late-stage pipeline and closed won.</p>
          <ul class="demand-checks">
            <li>High-intent paid search ads</li>
            <li>Competitor and comparison paid search ads</li>
            <li>LinkedIn, Meta, and other retargeting</li>
            <li>Signal-based and warm outbound campaigns</li>
          </ul>
        </div>
        <div class="demand-visual-board">
          <article class="creative-card creative-card--one">
            <span>Retargeting</span>
            <strong>Angle: Testimonial</strong>
            <div class="creative-frame creative-frame--blue">
              <p>Really powerful tool. Keeps getting better.</p>
            </div>
          </article>
          <article class="creative-card creative-card--two">
            <span>Retargeting</span>
            <strong>Angle: Core value prop</strong>
            <div class="creative-frame creative-frame--aqua">
              <p>Your complete email marketing setup.</p>
            </div>
          </article>
          <div class="mini-status">Retargeting <b>Live</b></div>
        </div>
      </div>
      <div class="demand-center-action">
        <a href="/contact.html" class="demand-btn demand-btn--primary">Book a call</a>
      </div>
    </section>

    <section class="demand-method" id="method">
      <div class="demand-container">
        <p class="demand-kicker">Our approach</p>
        <h2>The WeFlair Method: how we build demand generation systems for B2B SaaS.</h2>
        <p class="demand-lede">Most agencies run campaigns. We build the infrastructure that makes them scale, unifying GTM engineering, paid media, and signal-based outbound into a high-performance system that compounds with every lead.</p>
        <div class="method-grid">
          <div class="method-phases" role="tablist" aria-label="Demand generation phases">
            <button class="method-phase is-active" type="button" data-method-tab="audit"><span>Phase 1</span>Audit & Foundation</button>
            <button class="method-phase" type="button" data-method-tab="architecture"><span>Phase 2</span>GTM Architecture & Strategy</button>
            <button class="method-phase" type="button" data-method-tab="creative"><span>Phase 3</span>Creative & Messaging</button>
            <button class="method-phase" type="button" data-method-tab="testing"><span>Phase 4</span>Launch & Structured Testing</button>
            <button class="method-phase" type="button" data-method-tab="reporting"><span>Phase 5</span>Optimization & Revenue Reporting</button>
          </div>
          <div class="method-visual" aria-hidden="true">
            <article><strong>Findings</strong><p>41.2% of ad spend goes into broad campaigns such as eBook and product-tour lead magnets.</p></article>
            <div class="mini-table"><span></span><span></span><span></span><span></span><span></span><span></span></div>
            <article><strong>Actions</strong><p>Increase investment in demand generation and demand capture campaigns.</p></article>
          </div>
          <div class="method-content">
            <div class="method-panel is-active" data-method-panel="audit">
              <h3>We audit your entire demand generation stack, from ad accounts and content performance to CRM pipeline data and sales handoffs, making sure your tools, attribution, and teams are perfectly aligned.</h3>
              <p>The output is a clear map of where demand leaks, where pipeline actually originates, and which channels produce pipeline versus noise.</p>
              <strong>Includes:</strong>
              <ul class="demand-checks">
                <li>Full paid media audit across Google, LinkedIn, Meta, and active platforms</li>
                <li>Content and organic performance review</li>
                <li>Outbound infrastructure assessment covering tools, sequences, and deliverability</li>
                <li>CRM pipeline analysis and attribution gap identification</li>
                <li>ICP and TAM validation against closed-won data</li>
                <li>Competitive demand generation landscape review</li>
              </ul>
              <div class="method-proof"><strong>52%</strong><p>of Toggl spend drove clicks, not pipeline. Our audit showed this could be cut without losing deal volume.</p></div>
            </div>
            <div class="method-panel" data-method-panel="architecture">
              <h3>We turn the audit into GTM architecture: audience segments, offers, channel priorities, conversion paths, and sales follow-up rules.</h3>
              <p>The goal is to make each tactic part of one operating system instead of another disconnected campaign.</p>
              <strong>Includes:</strong>
              <ul class="demand-checks">
                <li>ICP, TAM, and account-list validation</li>
                <li>Channel mix and budget planning</li>
                <li>Campaign architecture and routing logic</li>
                <li>Sales handoff and CRM lifecycle design</li>
              </ul>
            </div>
            <div class="method-panel" data-method-panel="creative">
              <h3>We build messaging and creative around the actual pains, buying triggers, objections, and comparison moments inside the market.</h3>
              <p>This gives paid, content, and outbound one shared story instead of separate messages fighting each other.</p>
              <strong>Includes:</strong>
              <ul class="demand-checks">
                <li>Problem-angle development</li>
                <li>Ad concepts and landing-page messaging</li>
                <li>Outbound email and LinkedIn copy systems</li>
                <li>Retargeting and proof-led creative</li>
              </ul>
            </div>
            <div class="method-panel" data-method-panel="testing">
              <h3>We launch structured tests across paid capture, paid creation, retargeting, and signal-based outbound.</h3>
              <p>Tests are planned around pipeline learning, not vanity engagement.</p>
              <strong>Includes:</strong>
              <ul class="demand-checks">
                <li>Campaign launch QA</li>
                <li>Audience and angle testing</li>
                <li>Warm outbound sequences</li>
                <li>Retargeting paths and conversion follow-up</li>
              </ul>
            </div>
            <div class="method-panel" data-method-panel="reporting">
              <h3>We optimize from signal to revenue, connecting campaign data to CRM movement, sales feedback, and pipeline quality.</h3>
              <p>That rhythm keeps spend moving toward the channels and messages that create qualified opportunities.</p>
              <strong>Includes:</strong>
              <ul class="demand-checks">
                <li>Weekly performance review</li>
                <li>Pipeline and attribution reporting</li>
                <li>Audience, budget, and offer optimization</li>
                <li>Sales feedback loops and next-test planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="demand-channels" id="channels">
      <div class="demand-container">
        <h2>Every demand generation channel, connected.</h2>
        <p class="demand-lede">We manage the precise channel mix for your ICP and growth stage, eliminating scattered spend by turning disconnected tactics into a single, high-performing system.</p>
        <div class="channel-toggle" aria-label="Channel mode">
          <span>Paid Media</span>
          <button type="button" aria-pressed="false" data-channel-mode><span></span></button>
          <span>GTM Engineering & Outbound</span>
        </div>
        <div class="channel-tabs" role="tablist" aria-label="Paid media channels">
          <button class="is-active" type="button" data-channel-tab="google">Google</button>
          <button type="button" data-channel-tab="linkedin">LinkedIn</button>
          <button type="button" data-channel-tab="meta">Meta</button>
          <button type="button" data-channel-tab="emerging">YouTube, Reddit & Emerging Channels</button>
        </div>
        <div class="channel-card">
          <div class="channel-copy">
            <span class="channel-icon">G</span>
            <h3 data-channel-title>Google Ads</h3>
            <p data-channel-body>Our team captures high-intent search traffic on product and category terms, using campaign architecture, negative keyword strategies, and bid management specifically built for B2B buying cycles.</p>
          </div>
          <div class="channel-preview" aria-hidden="true">
            <div class="search-window">
              <span></span><span></span><span></span>
              <article>What sets your platform apart?</article>
            </div>
            <div class="calendar-window">
              <strong>Pabau</strong>
              <span>Rebook</span>
              <span>Cancel</span>
            </div>
            <div class="ad-strip"><span></span><p></p><i></i></div>
          </div>
        </div>
      </div>
    </section>

    <section class="demand-solutions" id="solutions">
      <div class="demand-container demand-solutions__panel">
        <h2>Expert solutions to achieve your business goals</h2>
        <p>Here is how the right demand generation company can solve your challenges.</p>
        <div class="solution-grid">
          <div class="solution-tabs" role="tablist" aria-label="Demand generation challenges">
            <button class="is-active" type="button" data-solution-tab="customers">Difficulty identifying ideal customers <span>-></span></button>
            <button type="button" data-solution-tab="outreach">Limited outreach expertise <span>-></span></button>
            <button type="button" data-solution-tab="resources">Insufficient resources to generate demand for your new offer <span>-></span></button>
            <button type="button" data-solution-tab="shift">Business instability due to market shift <span>-></span></button>
          </div>
          <article class="solution-card">
            <span class="solution-card__dot"></span>
            <h3 data-solution-title>Refine your ideal customer profile for precise targeting and predictable lead flow</h3>
            <p data-solution-body>We help you tailor your ideal customer profile to target ready-to-buy prospects. This keeps your team working from a stable, manageable flow of pipeline opportunities.</p>
            <a href="/contact.html" class="demand-btn demand-btn--primary">Book a call</a>
          </article>
        </div>
      </div>
    </section>

    <section class="demand-steps" id="steps">
      <div class="demand-container steps-grid">
        <article class="step-copy">
          <h2>Audience definition</h2>
          <h3>Shaping your TAM, ICP, and value prop</h3>
          <ul class="arrow-list">
            <li>First, we study your market, service or product, and distinctive features, as well as the core pain points you address.</li>
            <li>After that, we either draft and approve your ICP if you do not have one or propose adjustments to the existing one for precise targeting.</li>
            <li>We create several unique value propositions for the chosen client profiles. This helps us analyze the potential demand inside your niche.</li>
          </ul>
          <a href="/contact.html" class="circle-link"><span>-></span> Book a call</a>
        </article>
        <div class="people-visual" aria-hidden="true">
          <div class="person-row"><span></span><i></i><b></b></div>
          <div class="person-row"><span></span><i></i><b></b><em></em></div>
          <div class="person-row"><span></span><i></i><b></b></div>
        </div>
        <div class="email-visual" aria-hidden="true">
          <article><strong>Subject: Moving forward</strong><p>To: 245 recipients</p><span>Contact first name</span><span>Company name</span></article>
          <div class="email-metrics"><b>Opened 64%</b><b>Replied 12.78%</b></div>
        </div>
        <article class="step-copy">
          <h2>Pilot campaigns launch</h2>
          <h3>Creating and testing tailored outreach campaigns</h3>
          <ul class="arrow-list">
            <li>Experienced writers craft several sequences of emails and LinkedIn messages for each ICP group to address their pain points.</li>
            <li>Our tech specialists take care of domain and mailbox configuration to prevent possible spam issues.</li>
            <li>We launch multichannel cadences and monitor performance to understand which templates create the highest demand for your offering.</li>
          </ul>
          <a href="/contact.html" class="circle-link"><span>-></span> Book a call</a>
        </article>
      </div>
    </section>

    <section class="demand-fit" id="fit">
      <div class="demand-container fit-grid">
        <div class="fit-visual" aria-hidden="true">
          <div class="fit-board">
            <span></span><span></span><span></span>
            <p>ICP workshop</p>
          </div>
        </div>
        <div class="fit-copy">
          <h2>Find out if we make a perfect match</h2>
          <p>Are we the ideal demand generation company for you? Check whether these are your basic challenges right now:</p>
          <ul class="fit-list">
            <li>You developed a new product and want to launch pilot campaigns with minimal risk.</li>
            <li>You are not sure how to best improve your value proposition.</li>
            <li>You would like to test new hypotheses and business ideas quickly.</li>
            <li>You need to build a promo strategy but lack proper experience.</li>
            <li>You want to pinpoint what your target market is.</li>
            <li>You do not have the time or resources to build a new sales team.</li>
            <li>You have never used email or LinkedIn for outreach.</li>
          </ul>
          <a href="/contact.html" class="demand-btn demand-btn--primary">Get a quote</a>
        </div>
      </div>
    </section>

    <section class="demand-faq" id="faq">
      <div class="demand-container">
        <h2>FAQ</h2>
        <div class="faq-list">
          <button type="button">What does an effective demand generation strategy look like?<span>v</span></button>
          <button type="button">How many ICPs or VPs can you test at the same time?<span>v</span></button>
          <button type="button">What outbound demand generation KPIs do you track?<span>v</span></button>
          <button type="button">How long do you need to run demand generation campaigns to see real results?<span>v</span></button>
        </div>
      </div>
    </section>

    <section class="demand-final-cta">
      <div class="demand-container">
        <h2>Ready to start building pipeline?</h2>
        <p>Set up a brief meeting with one of the WeFlair experts to map your next stage of business growth.</p>
        <a href="/contact.html" class="demand-btn demand-btn--primary">Schedule 30-min call</a>
      </div>
    </section>
  </main>
  ${FOOTER}
  <script>
    (() => {
      const methodTabs = document.querySelectorAll("[data-method-tab]");
      const methodPanels = document.querySelectorAll("[data-method-panel]");
      methodTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          methodTabs.forEach((item) => item.classList.remove("is-active"));
          methodPanels.forEach((item) => item.classList.remove("is-active"));
          tab.classList.add("is-active");
          document.querySelector('[data-method-panel="' + tab.dataset.methodTab + '"]')?.classList.add("is-active");
        });
      });

      const channelCopy = {
        google: ["Google Ads", "Our team captures high-intent search traffic on product and category terms, using campaign architecture, negative keyword strategies, and bid management specifically built for B2B buying cycles."],
        linkedin: ["LinkedIn", "We reach buying committees with employee content, thought-leader ads, account lists, retargeting, and prospecting campaigns shaped around ICP pain points."],
        meta: ["Meta", "We use Meta to create demand before buyers are searching, testing problem-aware creative, retargeting warm visitors, and lifting brand recognition inside the market."],
        emerging: ["YouTube, Reddit & Emerging Channels", "We add emerging channels when the market has the signal for it, connecting awareness, proof, and retargeting into the wider demand system."]
      };
      const channelTabs = document.querySelectorAll("[data-channel-tab]");
      const channelTitle = document.querySelector("[data-channel-title]");
      const channelBody = document.querySelector("[data-channel-body]");
      channelTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          channelTabs.forEach((item) => item.classList.remove("is-active"));
          tab.classList.add("is-active");
          const copy = channelCopy[tab.dataset.channelTab];
          channelTitle.textContent = copy[0];
          channelBody.textContent = copy[1];
        });
      });

      const mode = document.querySelector("[data-channel-mode]");
      mode?.addEventListener("click", () => {
        const pressed = mode.getAttribute("aria-pressed") === "true";
        mode.setAttribute("aria-pressed", String(!pressed));
      });

      const solutionCopy = {
        customers: ["Refine your ideal customer profile for precise targeting and predictable lead flow", "We help you tailor your ideal customer profile to target ready-to-buy prospects. This keeps your team working from a stable, manageable flow of pipeline opportunities."],
        outreach: ["Build outreach expertise without adding another internal team", "We write, configure, launch, and monitor email and LinkedIn campaigns so your team can test demand without building a new outbound department from scratch."],
        resources: ["Launch demand for a new offer with the right operating system", "We shape the ICP, value proposition, campaign sequence, and feedback loop so a new offer can reach the market with less waste and clearer learning."],
        shift: ["Stabilize pipeline when the market changes", "We help you adjust targeting, messaging, channel mix, and reporting so demand generation keeps moving when buyer behavior shifts."]
      };
      const solutionTabs = document.querySelectorAll("[data-solution-tab]");
      const solutionTitle = document.querySelector("[data-solution-title]");
      const solutionBody = document.querySelector("[data-solution-body]");
      solutionTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          solutionTabs.forEach((item) => item.classList.remove("is-active"));
          tab.classList.add("is-active");
          const copy = solutionCopy[tab.dataset.solutionTab];
          solutionTitle.textContent = copy[0];
          solutionBody.textContent = copy[1];
        });
      });
    })();
  </script>
</body>
</html>
`;

const outPath = path.join(ROOT, "expertise", "b2b-demand-generation.html");
fs.writeFileSync(outPath, html);
console.log(`Wrote ${path.relative(ROOT, outPath)}`);
