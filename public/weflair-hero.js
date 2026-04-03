(() => {
  const FLARE_PATH =
    "M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z";

  const LOGOS = [
    { type: "text", label: "CellPoint Digital" },
    { type: "image", label: "Harrier", src: "./brand-assets/client-logos/harrier-white.png" },
    { type: "image", label: "RCT", src: "./brand-assets/client-logos/rct.png" },
    { type: "image", label: "Molahin", src: "./brand-assets/client-logos/molahin.png" },
    { type: "image", label: "HQ Software", src: "./brand-assets/client-logos/hq-software.png" },
    { type: "image", label: "Mawsim", src: "./brand-assets/client-logos/mawsim.png" },
  ];

  const CONTENT = {
    hero: {
      eyebrow: "Growth Marketing Agency",
      titleHtml:
        'We build <span class="weflair-hero__accent">hyper-relevant</span> marketing engines for <span class="weflair-section-accent weflair-section-accent--solid">today&rsquo;s customers.</span>',
      body:
        "For ambitious companies facing real go-to-market and revenue challenges, we build end-to-end marketing engines to drive measurable growth.",
      primary: "Discover more",
    },
    nav: {
      services: [
        ["Paid Media & Performance", "Campaigns tied to qualified revenue."],
        ["Outbound & GTM Engineering", "Signals, sequencing, and GTM logic."],
        ["Revenue Operations & Automations", "Routing, dashboards, and workflow design."],
        ["Content & SEO", "Search, proof, and compounding authority."],
        ["CRO & Performance Design", "Pages and funnels that convert harder."],
      ],
      expertise: [
        ["B2B SaaS", "Software teams under pressure to prove pipeline."],
        ["B2B Services", "Service offers that need cleaner demand generation."],
        ["B2B Hardware", "Longer sales cycles with more buying friction."],
        ["E-commerce", "Paid, lifecycle, and storefront performance."],
        ["FinTech", "Trust-heavy categories where precision matters."],
      ],
      resources: [
        ["Guides", "Practical explainers for the systems behind growth."],
        ["Playbooks", "How WeFlair runs paid, outbound, CRM, and conversion together."],
        ["AI Tools", "Operator-grade tools and workflows."],
        ["Calculators", "Simple planning tools for growth decisions."],
        ["Marketing Blog", "Perspective on modern growth work."],
      ],
    },
    services: {
      eyebrow: "What we do",
      titleHtml:
        '<span class="weflair-services-title-main">All the services you&rsquo;d expect,</span><br><span class="weflair-services-title-sub">executed <span class="weflair-section-accent weflair-section-accent--solid">beyond expectations.</span></span>',
      body:
        "From strategy to execution, we help ambitious brands strengthen the work that drives growth, performance, and revenue.",
      cards: [
        {
          title: "Paid Media & Performance",
          body: "We run data-backed ad campaigns that turn active demand into revenue.",
          tags: ["Google Ads", "Meta", "LinkedIn"],
        },
        {
          title: "Outbound & GTM Engineering",
          body: "Outbound systems built to create qualified meetings and real sales conversations.",
          tags: ["Prospecting", "Enrichment", "Sequences"],
        },
        {
          title: "Revenue Operations & Automations",
          body: "Connected CRM, routing, and automation that keep growth moving without manual drag.",
          tags: ["HubSpot", "Routing", "Automation"],
        },
        {
          title: "Content & SEO",
          body: "Content and search that make you harder to ignore in your niche.",
          tags: ["SEO", "Positioning", "Case Studies"],
        },
        {
          title: "CRO & Performance Design",
          body: "Landing pages and funnels that convert more of the traffic you already paid for.",
          tags: ["Landing Pages", "Offers", "Testing"],
        },
      ],
    },
    problems: {
      eyebrow: "Where teams get stuck",
      titleHtml:
        'If you&rsquo;re facing any of these challenges<br><span class="weflair-section-accent weflair-section-accent--solid">we can help.</span>',
      body:
        "When several of these show up at once, the problem usually is not one channel. It is wasted spend, messy CRM, weak follow-up, broken handoffs, and too much manual work dragging the whole system down.",
      cards: [
        {
          title: "Spend goes up. Pipeline does not.",
          body:
            "Budget keeps moving, but targeting, tracking, and conversion paths still leave too much waste in the system.",
        },
        {
          title: "Sales and marketing are out of sync",
          body:
            "Leads get handed over late, context gets lost, and nobody is working from the same definition of what good looks like.",
        },
        {
          title: "Manual work is slowing everything down",
          body:
            "Routing, reporting, enrichment, follow-up, and admin are still eating hours that should be going into execution.",
        },
        {
          title: "The stack exists, but nothing talks",
          body:
            "You bought the tools, but the workflows, events, ownership, and next steps never got stitched into one system.",
        },
        {
          title: "Messy CRM. Missed follow-up.",
          body:
            "Records are patchy, fields are unreliable, and bad data keeps reporting, automation, and lead follow-up from working cleanly.",
        },
        {
          title: "Channels run, but they never compound",
          body:
            "Paid, outbound, CRM, content, and lifecycle all run in isolation, so wins in one place do not strengthen the rest of the engine.",
        },
      ],
    },
    method: {
      eyebrow: "The FLAIR Loop\u2122",
      title: "We build your growth engine. Then we run it with you.",
      body: "Most agencies hand you a strategy deck and disappear. We embed with your team, build the systems that actually produce pipeline, and run them until they compound. Here\u2019s what that looks like.",
      stages: [
        { name: "Find the lever", color: "#3eff68", sentence: "We figure out where the biggest growth opportunity is \u2014 what\u2019s already working, what\u2019s leaking, and what you haven\u2019t tried yet.", tags: ["Pipeline gaps", "Channel opportunities", "Quick wins", "Growth model"], callout: "Find the real opportunity, not just the problem." },
        { name: "Set the plan", color: "#5eead4", sentence: "We build a ranked plan around what will move revenue fastest \u2014 not a 90-slide deck, a clear list of what to do first and why.", tags: ["90-day roadmap", "Channel priorities", "Budget allocation", "Success metrics"], callout: "Ranked by revenue impact. Zero guesswork." },
        { name: "Build the engine", color: "#818cf8", sentence: "We set up the infrastructure so campaigns actually compound instead of dying after launch \u2014 CRM, tracking, automation, creative systems.", tags: ["CRM + tracking", "Automation flows", "Creative systems", "Attribution"], callout: "Built once. Compounds every cycle." },
        { name: "Launch & optimize", color: "#fbbf24", sentence: "We run the channels \u2014 paid, outbound, content, lifecycle \u2014 and optimize weekly based on real data, not gut feeling.", tags: ["Paid acquisition", "Outbound", "Content + SEO", "Lifecycle email"], callout: "Live campaigns. Weekly optimization. Real data." },
        { name: "Scale what works", color: "#f472b6", sentence: "We take what\u2019s working and push it further \u2014 new segments, new channels, lower CAC, higher LTV. Winners get compounded.", tags: ["New segments", "Channel expansion", "CAC reduction", "Playbooks"], callout: "Double down on winners. Cut the rest." },
      ],
    },
    team: {
      eyebrow: "Your Personalized Team",
      titleHtml:
        'A custom team built around your <span class="weflair-section-accent weflair-section-accent--solid">goals.</span>',
      body:
        "When you work with WeFlair, we build the right team around your business and plug it into the work that matters most.",
      support:
        "The structure flexes with the brief, but the principle stays the same: clearer ownership, tighter execution, and fewer gaps between strategy and delivery.",
      pods: [
        {
          name: "Paid Media & Performance",
          icon: "performance",
          tone: "performance",
          eyebrow: "Performance team",
          title: "Paid Media & Performance",
          body:
            "Sharper targeting, stronger creative, cleaner structure, and tighter optimization — built to turn active demand into pipeline and revenue, not just clicks, spend, and reports.",
          linkLabel: "Discover details",
          linkHref: "#services",
          roles: ["Targeting", "Creative", "Optimization"],
        },
        {
          name: "Outbound & GTM",
          icon: "outbound",
          tone: "outbound",
          eyebrow: "GTM team",
          title: "Outbound & GTM",
          body:
            "Better targeting, sequencing, messaging, and follow-up — built to create qualified conversations, keep outreach focused, and move the right accounts into pipeline.",
          linkLabel: "Discover details",
          linkHref: "#services",
          roles: ["Targeting", "Sequencing", "Follow-up"],
        },
        {
          name: "RevOps & AI",
          icon: "revops",
          tone: "revops",
          eyebrow: "Operations team",
          title: "RevOps & AI",
          body:
            "CRM, routing, workflows, reporting, and AI-enabled automation — built to cut manual work, clean up execution, and keep leads, data, and follow-up moving properly.",
          linkLabel: "Discover details",
          linkHref: "#services",
          roles: ["CRM", "Automation", "Reporting"],
        },
        {
          name: "Strategy & Creative",
          icon: "content",
          tone: "content",
          eyebrow: "Creative team",
          title: "Strategy & Creative",
          body:
            "Clearer offers, sharper positioning, stronger messaging, and creative direction — built to make campaigns, pages, and outreach feel specific, coherent, and harder to ignore.",
          linkLabel: "Discover details",
          linkHref: "#method",
          roles: ["Offers", "Positioning", "Messaging"],
        },
      ],
    },
    results: {
      eyebrow: "Recent work",
      titleHtml:
        'Tailored Solutions,<br><span class="weflair-section-accent weflair-section-accent--solid">Tangible Results</span>',
      body:
        "Dive into real-world examples of how we've helped Ambitious brands reach new heights with data-driven strategies and expert execution.",
      moreHref: "cases.html",
      filters: [
        "All Cases",
        "B2B",
        "E-commerce",
        "Real Estate",
        "Logistics",
        "Web3",
        "SaaS",
        "Fintech",
      ],
      moreLabel: "Explore all case studies",
      cards: [
        {
          company: "CellPoint Digital",
          logo: {
            type: "text",
            label: "CellPoint Digital",
          },
          sector: "Fintech / Payments",
          headline: "Zero-to-one GTM infrastructure for a payments brand scaling beyond vendor support.",
          body:
            "Signal workflows, lead scoring, Apollo enrichment, HubSpot RevOps, and executive demo infrastructure were built from scratch and turned the relationship into a strategic anchor partnership.",
          metrics: [
            ["Zero-to-one", "GTM infra"],
            ["C-suite", "platform demo"],
          ],
          services: ["Apollo Enrichment", "HubSpot RevOps", "n8n Workflows"],
          industries: ["B2B", "Fintech"],
          href: "cases.html",
        },
        {
          company: "Harrier Trail Running",
          logo: {
            type: "image",
            src: "/brand-assets/client-logos/harrier-white.png",
            alt: "Harrier logo",
          },
          sector: "DTC Ecommerce / Trail Running",
          headline: "Performance rebuild that turned broken acquisition into scaled growth.",
          body:
            "From GBP 6,199 in spend to GBP 34,293 in revenue in 55 days, plus 7,724 new email subscribers and 336 paying customers converted after rebuilding PPC infrastructure, tracking, and lifecycle flows.",
          metrics: [
            ["5.53X", "ROAS"],
            ["7,724", "new subscribers"],
          ],
          services: ["Meta Ads", "Google/Bing PPC", "GA4 + GTM"],
          industries: ["E-commerce"],
          href: "cases.html",
        },
        {
          company: "Molahin",
          logo: {
            type: "image",
            src: "/brand-assets/client-logos/molahin.png",
            alt: "Molahin logo",
          },
          sector: "SaaS / Music Platform",
          headline: "Audience intelligence and localized messaging translated into measurable growth.",
          body:
            "Multi-channel ad strategy across Google, LinkedIn, and Facebook improved efficiency, drove 2,612+ platform signups, and unlocked $114K in new revenue.",
          metrics: [
            ["+128%", "ROAS"],
            ["2,612+", "platform signups"],
          ],
          services: ["Google + LinkedIn", "Retargeting", "Localized Messaging"],
          industries: ["SaaS"],
          href: "cases.html",
        },
        {
          company: "RCT",
          logo: {
            type: "image",
            src: "/brand-assets/client-logos/rct.png",
            alt: "RCT logo",
          },
          sector: "Real Estate",
          headline: "Search restructure that increased ROAS while cutting wasted spend.",
          body:
            "A Google Ads restructure around closed-sale keywords, backed by Salesforce data analysis and budget reallocation, lifted ROAS 36%, reduced spend 17%, and increased total deals 15%.",
          metrics: [
            ["+36%", "ROAS"],
            ["-17%", "ad spend"],
          ],
          services: ["Google Ads", "Salesforce Analysis", "Keyword Reallocation"],
          industries: ["B2B", "Real Estate"],
          href: "cases.html",
        },
        {
          company: "Merna for Shipping",
          logo: {
            type: "text",
            label: "Merna",
          },
          sector: "Logistics / Shipping",
          headline: "ABM and outbound that turned targeting refinement into pipeline.",
          body:
            "Paid ads, LinkedIn campaigns, personalized cold email, and Clay enrichment produced 36 positive replies and moved 4 deals into pipeline.",
          metrics: [
            ["36", "positive replies"],
            ["4", "deals in pipeline"],
          ],
          services: ["LinkedIn Campaigns", "Cold Email", "Clay Enrichment"],
          industries: ["B2B", "Logistics"],
          href: "cases.html",
        },
        {
          company: "Meta Estate Empire",
          logo: {
            type: "text",
            label: "Meta Estate",
          },
          sector: "Web3 / Real Estate",
          headline: "Investor outreach and PR placement that generated attention and meetings.",
          body:
            "Omni-channel outreach, crypto investor targeting, and PR placements across top Web3 publications generated 44 booked meetings and 3.8M+ impressions.",
          metrics: [
            ["44", "booked meetings"],
            ["3.8M+", "impressions"],
          ],
          services: ["Investor Outreach", "Crypto PR", "Tailored Messaging"],
          industries: ["Web3", "Real Estate"],
          href: "cases.html",
        },
        {
          company: "Premier Farnell / Avnet",
          logo: {
            type: "text",
            label: "Premier Farnell",
          },
          sector: "B2B Electronics",
          headline: "Enterprise personalization and ecommerce optimization at global scale.",
          body:
            "Personalization, UX journeys, Bloomreach rollout, and APAC optimization contributed GBP 4.3M from personalization and pushed 70%+ of orders through web.",
          metrics: [
            ["GBP 4.3M", "personalization"],
            ["70%+", "orders via web"],
          ],
          services: ["Personalization", "UX Journeys", "APAC Optimization"],
          industries: ["B2B"],
          href: "cases.html",
        },
      ],
      testimonials: [
        {
          mode: "quote",
          quote: "WeFlair is not our vendor. They are our marketing team.",
          author: "Steven Osei",
          role: "CMO, CellPoint Digital",
          initials: "SO",
          company: "CellPoint Digital",
          label: "Fintech / GTM",
          logo: {
            type: "text",
            label: "CellPoint Digital",
          },
        },
        {
          mode: "quote",
          quote:
            "The account finally reflected what was happening in the business, not just what was happening in Google Ads.",
          author: "Hisham Alqaisi",
          role: "CMO, RCT",
          initials: "HA",
          company: "RCT",
          label: "Paid Search / Real Estate",
          logo: {
            type: "image",
            src: "/brand-assets/client-logos/rct.png",
            alt: "RCT logo",
          },
        },
        {
          mode: "quote",
          quote:
            "The difference was not just better ads. It was a much sharper system behind the campaigns.",
          author: "John Abbadi",
          role: "Founder, Molahin",
          initials: "JA",
          company: "Molahin",
          label: "SaaS / Performance",
          logo: {
            type: "image",
            src: "/brand-assets/client-logos/molahin.png",
            alt: "Molahin logo",
          },
        },
        {
          mode: "proof",
          quote: "36 positive replies and 4 deals moved into pipeline from a tighter outbound motion.",
          author: "Merna for Shipping",
          role: "Outbound & GTM",
          initials: "MF",
          company: "Merna",
          label: "Logistics",
          logo: {
            type: "text",
            label: "Merna",
          },
        },
        {
          mode: "proof",
          quote: "5.53X ROAS in 55 days, plus 7,724 new subscribers after rebuilding performance and tracking.",
          author: "Harrier Trail Running",
          role: "Paid Media & Performance",
          initials: "HT",
          company: "Harrier",
          label: "E-commerce",
          logo: {
            type: "image",
            src: "/brand-assets/client-logos/harrier-white.png",
            alt: "Harrier logo",
          },
        },
        {
          mode: "proof",
          quote: "44 booked meetings and 3.8M+ impressions from investor outreach and Web3 PR.",
          author: "Meta Estate Empire",
          role: "PR + Outbound",
          initials: "ME",
          company: "Meta Estate",
          label: "Web3 / Real Estate",
          logo: {
            type: "text",
            label: "Meta Estate",
          },
        },
      ],
    },
    comparison: {
      eyebrow: "Comparison",
      title:
        'The <span class="weflair-section-accent">fragmented vendor stack</span> vs <span class="weflair-section-accent weflair-section-accent--solid">WeFlair</span>',
      body:
        "The difference is not just who does the work. It is who keeps the work moving.",
      left: "Fragmented vendor stack",
      right: "WeFlair",
      rows: [
        ["Different vendors own different pieces.", "One team owns the moving parts together."],
        ["Nobody owns the full commercial outcome.", "One team stays accountable for what happens after the click."],
        ["Requests sit in different queues.", "Changes move in days, not weeks."],
        ["Insights are trapped in disconnected tools.", "One operating view across spend, pipeline, and revenue."],
        ["Multiple retainers plus hidden coordination cost.", "Starts at EUR 4K for a focused capability."],
        ["Knowledge leaves when a freelancer or vendor disappears.", "The system stays inside your stack."],
      ],
    },
    process: {
      eyebrow: "How we work",
      title: 'New Client Timeline to <span class="weflair-section-accent weflair-section-accent--solid">Success</span>',
      body: "We don't just manage tasks — we run your entire growth engine. Strategy, execution, and analytics under one system. Here's how the first 90 days look.",
      steps: [
        {
          num: "01",
          title: "Discovery & Scoping",
          time: "Pre-engagement",
          body: "A single point of contact — fully aligned with your business. We identify your needs, audit what's leaking, and scope the engagement so the team is built around impact from day one. No templated pitches. Just a clear read on what's broken and what's worth fixing first.",
        },
        {
          num: "02",
          title: "Align & Agree",
          time: "Day 1",
          body: "We align on expectations around the SOW, deliverables, billing, and everything needed to build a successful partnership. No surprises — just clear terms, a shared definition of success, and a mutual understanding of what the first 30 days will look like.",
        },
        {
          num: "03",
          title: "Access & Onboard",
          time: "Week 1",
          body: "You grant secure access to your channels, tech stack, and data. We introduce your dedicated team, run the initial audit across funnel, creative, and performance, and set expectations for the first 30 days. By end of week one, everyone knows who owns what.",
        },
        {
          num: "04",
          title: "Execute & Optimize",
          time: "Weeks 2–8",
          body: "Your specialists execute across every channel that matters — campaigns, content, creative, landing pages, and analytics. Need to shift focus to a different channel? We adapt instantly. Every campaign adjustment is tracked, explained, and optimized in real time.",
        },
        {
          num: "05",
          title: "Review & Compound",
          time: "Near Day 45 · 90-day cycle",
          body: "We show exactly what's working — and why. Every 30 days, we review progress tied to your business goals, not vanity metrics. Every 90 days, we run a full strategic review, realign the roadmap, and compound what's already winning. The cycle repeats.",
        },
      ],
    },
    footer: {
      cta: {
        eyebrow: "Next step",
        title: "Request a growth audit.",
        body: "We will show you what is leaking, what needs fixing first, and whether there is a real fit.",
        reassurance: "If there is no fit, we will say so.",
        ctaLabel: "Request a growth audit",
      },
      columns: [
        {
          heading: "Global remote",
          lines: ["Growth operators sitting all over the world", "HQ: Distributed"],
        },
        {
          heading: "WeFlair HQ",
          lines: ["WeFlair LLC", "New York, United States"],
        },
        {
          heading: "Talk to an expert",
          links: [
            { label: "sam@weflair.com", href: "mailto:sam@weflair.com" },
            { label: "hello@weflair.co", href: "mailto:hello@weflair.co" },
          ],
        },
      ],
      services: {
        heading: "Services",
        links: [
          { label: "Paid Media & Performance", href: "/services/paid-media-performance" },
          { label: "Outbound & GTM", href: "/services/outbound-gtm" },
          { label: "RevOps & AI", href: "/services/revops-ai" },
          { label: "Strategy & Creative", href: "/services/strategy-creative" },
        ],
      },
      expertise: {
        heading: "Expertise",
        links: [
          { label: "B2B SaaS", href: "/expertise/b2b-saas" },
          { label: "B2B Services", href: "/expertise/b2b-services" },
          { label: "B2B Hardware", href: "/expertise/b2b-hardware" },
          { label: "Fintech", href: "/expertise/fintech" },
          { label: "E-commerce", href: "/expertise/ecommerce" },
        ],
      },
      resources: {
        heading: "Resources",
        links: [
          { label: "Calculators", href: "/resources/calculators" },
          { label: "Guides", href: "/resources/guides" },
          { label: "Playbooks", href: "/resources/playbooks" },
          { label: "AI Tools", href: "/resources/ai-tools" },
          { label: "Marketing Blog", href: "/blog" },
        ],
      },
      company: {
        heading: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
      legal: {
        copyright: "© 2026 WeFlair",
        links: [
          { label: "Privacy Policy", href: "/legal/privacy" },
          { label: "Terms and Conditions", href: "/legal/terms" },
        ],
      },
      social: [
        { icon: "instagram", href: "https://instagram.com/weflair", label: "Instagram" },
        { icon: "linkedin", href: "https://linkedin.com/company/weflair", label: "LinkedIn" },
        { icon: "x", href: "https://x.com/weflair", label: "X" },
      ],
    },
  };

  const q = (selector, scope = document) => scope.querySelector(selector);
  const qa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function flareSvg(extraClass = "") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="${extraClass}"><path d="${FLARE_PATH}" fill="currentColor"></path></svg>`;
  }

  function eyebrow(text, centered = false) {
    return `<div class="eyebrow${centered ? " is-centered" : ""}"><span class="weflair-eyebrow-icon">${flareSvg(
      "weflair-flare"
    )}</span><p class="eyebrow__p">${text}</p></div>`;
  }

  function arrowMarkup() {
    return `<div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div>`;
  }

  function button(label, href, variant = "primary") {
    return `<a data-hover="" data-btn-theme="${
      variant === "ghost" ? "transparent" : "primary"
    }" href="${href}" class="btn w-inline-block weflair-btn weflair-btn--${variant}"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">${label}</span></div>${arrowMarkup()}</a>`;
  }

  function tags(items, className = "weflair-tag") {
    return `<div class="weflair-tags">${items
      .map((item) => `<span class="${className}">${item}</span>`)
      .join("")}</div>`;
  }

  function teamTabIcon(type) {
    const icons = {
      strategy:
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12C3 16.9706 7.02943 21 12 21Z" stroke="currentColor" stroke-width="1.5"/><path d="M12 8V12L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      performance:
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M5 18H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7.5 15L10.5 11.5L13 13.5L17 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 8H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M17 8V10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
      outbound:
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M4 12L20 4L15 20L11 13L4 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M11 13L20 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
      revops:
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M7 7H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 17H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 7V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M17 7V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>`,
      content:
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M8 7.5H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 11.5H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 15.5H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M6.5 4.5H17.5C18.0523 4.5 18.5 4.94772 18.5 5.5V18.5L15.5 16.5H6.5C5.94772 16.5 5.5 16.0523 5.5 15.5V5.5C5.5 4.94772 5.94772 4.5 6.5 4.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    };
    return icons[type] || icons.strategy;
  }

  function teamLinkMarkup(label, href) {
    return `<a href="${href}" class="weflair-demand-team__link"><span class="weflair-demand-team__link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M7 12H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M12 7L17 12L12 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="weflair-demand-team__link-label">${label}</span></a>`;
  }

  function teamPlaceholderMarkup(pod) {
    return `<div class="weflair-demand-team__showcase is-${pod.tone}"><span class="weflair-demand-team__showcase-label">Diagram placeholder</span><div class="weflair-demand-team__placeholder"><div class="weflair-demand-team__placeholder-core"><span class="weflair-demand-team__placeholder-core-icon">${teamTabIcon(
      pod.icon
    )}</span><span class="weflair-demand-team__placeholder-core-label">${pod.name}</span></div><div class="weflair-demand-team__placeholder-rail" aria-hidden="true"></div><div class="weflair-demand-team__placeholder-roles">${pod.roles
      .map(
        (role) =>
          `<div class="weflair-demand-team__placeholder-role"><span class="weflair-demand-team__placeholder-role-dot" aria-hidden="true"></span><span>${role}</span></div>`
      )
      .join("")}</div><p class="weflair-demand-team__placeholder-note">Custom operating diagram coming here.</p></div></div>`;
  }

  function teamPanelMarkup(pod) {
    return `<div class="weflair-demand-team__detail-shell"><div class="weflair-demand-team__copy-block"><p class="weflair-demand-team__panel-eyebrow">${pod.eyebrow}</p><h3 class="h4">${pod.title}</h3><p class="weflair-demand-team__panel-body">${pod.body}</p><div class="weflair-demand-team__role-list">${pod.roles
      .map((role) => `<span class="weflair-demand-team__role-chip">${role}</span>`)
      .join("")}</div>${teamLinkMarkup(
      pod.linkLabel,
      pod.linkHref
    )}</div>${teamPlaceholderMarkup(pod)}</div>`;
  }

  let _activeResultsFilter = "All Cases";
  let _activeResultsIndex = 0;
  const CASES_PER_VIEW = 2;

  function getFilteredResults() {
    const cards = CONTENT.results.cards.filter(
      (card) =>
        _activeResultsFilter === "All Cases" || card.industries.includes(_activeResultsFilter)
    );
    if (cards.length) return cards;
    _activeResultsFilter = "All Cases";
    return CONTENT.results.cards;
  }

  function resultsNavIcon(direction = "next") {
    if (direction === "prev") {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }

  function brandMarkMarkup(
    logo,
    fallback,
    imageClass = "weflair-brand-mark__image",
    wordmarkClass = "weflair-brand-mark__wordmark"
  ) {
    if (logo?.type === "image") {
      return `<img class="${imageClass}" src="${logo.src}" alt="${
        logo.alt || fallback
      }" loading="lazy" decoding="async">`;
    }
    return `<span class="${wordmarkClass}">${logo?.label || fallback}</span>`;
  }

  function caseStudyLogoMarkup(card) {
    return brandMarkMarkup(
      card.logo,
      card.company,
      "weflair-case-card__logo-image",
      "weflair-case-card__logo-wordmark"
    );
  }

  function testimonialLogoMarkup(item) {
    return brandMarkMarkup(
      item.logo,
      item.company,
      "weflair-results-testimonials__logo-image",
      "weflair-results-testimonials__logo-wordmark"
    );
  }

  function getResultsPageCount(cards) {
    return Math.max(1, Math.ceil(cards.length / CASES_PER_VIEW));
  }

  function getVisibleResults(cards) {
    const totalPages = getResultsPageCount(cards);
    if (_activeResultsIndex >= totalPages) {
      _activeResultsIndex = 0;
    }
    const start = _activeResultsIndex * CASES_PER_VIEW;
    return cards.slice(start, start + CASES_PER_VIEW);
  }

  function caseStudyCardMarkup(card) {
    const servicesMarkup = card.services
      .map((service) => `<span class="weflair-case-card__tag">${service}</span>`)
      .join("");
    const industriesMarkup = card.industries
      .map(
        (industry) =>
          `<span class="weflair-case-card__tag is-muted">${industry}</span>`
      )
      .join("");

    return `<article class="weflair-case-card"><div class="weflair-case-card__top"><span class="weflair-case-card__badge">Case Study</span><div class="weflair-case-card__logo-wrap">${caseStudyLogoMarkup(
      card
    )}</div></div><div class="weflair-case-card__metrics">${card.metrics
      .map(
        ([value, label]) =>
          `<div class="weflair-case-card__metric"><strong>${value}</strong><span>${label}</span></div>`
      )
      .join("")}</div><div class="weflair-case-card__content"><p class="weflair-case-card__sector">${card.company} &middot; ${
      card.sector
    }</p><h3 class="h4">${card.headline}</h3><p class="weflair-case-card__body">${card.body}</p></div><div class="weflair-case-card__taxonomy"><div class="weflair-case-card__tag-row">${servicesMarkup}</div><div class="weflair-case-card__tag-row is-secondary">${industriesMarkup}</div></div><div class="weflair-case-card__actions"><a href="${
      card.href || "cases.html"
    }" class="weflair-case-card__readmore">Read more</a></div></article>`;
  }

  function testimonialCardMarkup(item) {
    const statementTag = item.mode === "quote" ? "blockquote" : "p";
    const statementClass = `weflair-results-testimonials__statement${
      item.mode === "quote" ? " is-quote" : ""
    }`;
    return `<article class="weflair-results-testimonials__card is-${item.mode || "quote"}"><div class="weflair-results-testimonials__card-top"><span class="weflair-results-testimonials__label">${
      item.label || item.company
    }</span><div class="weflair-results-testimonials__logo">${testimonialLogoMarkup(
      item
    )}</div></div><${statementTag} class="${statementClass}">${item.quote}</${statementTag}><div class="weflair-results-testimonials__bottom"><div class="weflair-results-testimonials__person"><div class="weflair-results-testimonials__avatar">${item.initials}</div><div class="weflair-results-testimonials__person-meta"><p class="weflair-results-testimonials__author">${item.author}</p><p class="weflair-results-testimonials__role">${item.role}</p></div></div></div></article>`;
  }

  function syncTestimonialNav(section = q("#testimonials")) {
    if (!section) return;
    const track = q("[data-testimonial-track]", section);
    if (!track) return;

    const prevButton = q('[data-testimonial-nav="prev"]', section);
    const nextButton = q('[data-testimonial-nav="next"]', section);
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth - 4);

    if (prevButton) prevButton.disabled = track.scrollLeft <= 4;
    if (nextButton) nextButton.disabled = track.scrollLeft >= maxScroll;
  }

  function renderActiveCaseStudy() {
    const section = q("#results");
    if (!section) return;

    const filteredCards = getFilteredResults();
    const totalPages = getResultsPageCount(filteredCards);
    if (_activeResultsIndex >= totalPages) {
      _activeResultsIndex = 0;
    }

    const visibleCards = getVisibleResults(filteredCards);
    const panel = q("[data-case-panel]", section);
    if (panel && visibleCards.length) {
      panel.innerHTML = `<div class="weflair-case-studies__grid">${visibleCards
        .map((card) => caseStudyCardMarkup(card))
        .join("")}</div>`;
    }

    qa("[data-case-filter]", section).forEach((buttonNode) => {
      const isActive = buttonNode.dataset.caseFilter === _activeResultsFilter;
      buttonNode.classList.toggle("is-active", isActive);
      buttonNode.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    const progress = q("[data-case-progress]", section);
    if (progress) {
      progress.textContent = `${String(_activeResultsIndex + 1).padStart(2, "0")} / ${String(
        totalPages
      ).padStart(2, "0")}`;
    }

    const status = q("[data-case-filter-status]", section);
    if (status) {
      status.textContent =
        _activeResultsFilter === "All Cases"
          ? `${filteredCards.length} case studies`
          : `${_activeResultsFilter} · ${filteredCards.length} case studies`;
    }

    qa("[data-case-nav]", section).forEach((buttonNode) => {
      buttonNode.disabled = totalPages <= 1;
    });
  }

  function sectionHead(section, centered = false) {
    return `<div class="weflair-section__head${centered ? " is-centered" : ""}">${eyebrow(
      section.eyebrow,
      centered
    )}<h2 class="h3">${section.title || section.titleHtml}</h2>${
      section.body ? `<p class="weflair-section__body">${section.body}</p>` : ""
    }</div>`;
  }

  function injectRuntimeStyles() {
    if (q("#weflair-runtime-css")) return;
    const style = document.createElement("style");
    style.id = "weflair-runtime-css";
    style.textContent = `
      .weflair-logo{display:inline-flex;align-items:center;gap:.58rem;color:#f6f3ee}
      .eyebrow{display:inline-flex;align-items:center;justify-self:start;gap:.45rem;font-size:.78rem;line-height:1.14;font-weight:700;letter-spacing:.025em;color:rgba(246,243,238,.9)}
      .eyebrow.is-centered{justify-self:start}
      .weflair-logo__mark,.weflair-eyebrow-icon,.weflair-method__icon{width:.85rem;height:.85rem;display:inline-flex;color:#3eff68;filter:drop-shadow(0 0 12px rgba(62,255,104,.18))}
      .weflair-logo__word{font-size:clamp(1.95rem,1.65vw,2.35rem);line-height:.95;font-weight:700;letter-spacing:-.05em}
      .weflair-section__head{display:grid;justify-items:start;gap:1.85rem}
      .weflair-section__head.is-centered{text-align:left;justify-items:start}
      .weflair-section__head .h3{margin:0;max-width:14ch;font-size:clamp(2.7rem,4.7vw,4.6rem);line-height:.95;letter-spacing:-.075em;text-wrap:balance}
      .weflair-section__body{max-width:44rem;margin:0;color:rgba(246,243,238,.78);font-size:1rem;line-height:1.55}
      .weflair-headline .weflair-hero__accent,.weflair-section-accent{font-style:italic}
      .weflair-headline .weflair-hero__accent{font-weight:400;letter-spacing:-.045em}
      .weflair-section-accent{white-space:nowrap}
      .weflair-hero-actions{display:flex;flex-wrap:wrap;gap:.85rem;align-items:center}
      #hero .eyebrow{margin-bottom:1.15rem}
      .weflair-btn--ghost{opacity:.78}
      .weflair-btn--ghost .btn__bg{background:transparent;border:1px solid rgba(246,243,238,.12)}
      .weflair-btn--ghost .btn__text,.weflair-btn--ghost .arrow{color:#f6f3ee}
      .weflair-hero-glow{position:absolute;right:4%;top:16%;width:32rem;height:32rem;border-radius:50%;background:radial-gradient(circle,rgba(62,255,104,.18),rgba(62,255,104,.08) 28%,rgba(62,255,104,0) 68%);filter:blur(18px);pointer-events:none}
      #hero .p-l{max-width:36rem!important;font-size:clamp(1.08rem,1.35vw,1.35rem)!important;line-height:1.36!important}
      #hero .home-header__content{padding-bottom:clamp(3rem,6vw,4.75rem)}
      .weflair-hero-widget-wrap{display:flex;align-items:flex-end;justify-content:flex-end}
      .weflair-audit-widget{position:relative;width:min(100%,21.25rem);margin-left:auto}
      .weflair-audit-widget__launcher{display:grid;place-items:center;width:4rem;height:4rem;margin-left:auto;border:none;border-radius:1.1rem;background:rgba(17,17,17,.88);color:#f6f3ee;box-shadow:0 12px 30px rgba(0,0,0,.24);cursor:pointer}
      .weflair-audit-widget__launcher .arrow{width:1.4rem;height:1.4rem}
      .weflair-audit-widget__panel{display:grid;gap:1rem;padding:1rem 1rem 1.05rem;border:1px solid rgba(246,243,238,.08);border-radius:1.2rem;background:rgba(17,17,17,.94);box-shadow:0 18px 42px rgba(0,0,0,.28)}
      .weflair-audit-widget.is-collapsed .weflair-audit-widget__panel{display:none}
      .weflair-audit-widget:not(.is-collapsed) .weflair-audit-widget__launcher{display:none}
      .weflair-audit-widget__head{display:flex;align-items:flex-start;justify-content:space-between;gap:.8rem}
      .weflair-audit-widget__profile{display:flex;align-items:center;gap:.8rem;min-width:0}
      .weflair-audit-widget__avatar{display:grid;place-items:center;width:2.75rem;height:2.75rem;border-radius:999px;background:rgba(62,255,104,.14);border:1px solid rgba(62,255,104,.22);font-size:.92rem;font-weight:700;color:#f6f3ee}
      .weflair-audit-widget__meta{min-width:0}
      .weflair-audit-widget__name{display:block;font-size:1rem;font-weight:700;line-height:1.1}
      .weflair-audit-widget__role{display:block;margin-top:.12rem;color:rgba(246,243,238,.62);font-size:.82rem;line-height:1.2}
      .weflair-audit-widget__close{display:grid;place-items:center;width:2rem;height:2rem;border:none;background:transparent;color:rgba(246,243,238,.72);cursor:pointer}
      .weflair-audit-widget__title{margin:0;font-size:1.7rem;line-height:.98;letter-spacing:-.045em}
      .weflair-audit-widget__body{margin:0;color:rgba(246,243,238,.82);font-size:.95rem;line-height:1.42}
      .weflair-audit-widget__slots{display:flex;align-items:center;justify-content:space-between;gap:.8rem;padding:.88rem .95rem;border:1px solid rgba(246,243,238,.08);border-radius:.95rem;background:rgba(23,24,23,.96)}
      .weflair-audit-widget__slots strong{font-size:.98rem;line-height:1.15}
      .weflair-audit-widget__countdown{color:#3eff68;font-weight:700}
      .weflair-audit-widget__dates{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.55rem}
      .weflair-audit-widget__date{display:grid;place-items:center;min-height:3.9rem;padding:.35rem;border:1px solid rgba(246,243,238,.1);border-radius:.85rem;background:transparent}
      .weflair-audit-widget__date span{display:block;font-size:.8rem;color:rgba(246,243,238,.72)}
      .weflair-audit-widget__date strong{display:block;margin-top:.08rem;font-size:1.32rem;line-height:1;color:#f6f3ee}
      .weflair-audit-widget__date.is-active{border-color:rgba(62,255,104,.28);background:rgba(62,255,104,.08)}
      .weflair-audit-widget__cta .btn{width:100%}
      .weflair-audit-widget__foot{font-size:.77rem;line-height:1.2;color:rgba(246,243,238,.48);text-align:center}
      .weflair-logos-rail{position:relative;margin-top:1.1rem;padding-top:1.55rem}
      .weflair-logos-rail::before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:rgba(246,243,238,.12)}
      .weflair-logos-label{position:absolute;top:0;left:50%;transform:translate(-50%,-50%);padding:0 .9rem;background:transparent;color:rgba(246,243,238,.86);font-size:1rem;font-weight:700;text-align:center;white-space:nowrap}
      .weflair-logo-marquee{overflow:hidden;mask-image:linear-gradient(90deg,transparent,black 8%,black 92%,transparent)}
      .weflair-logo-marquee__track{display:flex;align-items:center;gap:2.8rem;width:max-content;animation:weflairMarquee 24s linear infinite}
      .weflair-logo-mark{display:inline-flex;align-items:center;justify-content:center;min-height:2.25rem;color:rgba(246,243,238,.58);font-size:1.02rem;font-weight:700;letter-spacing:-.03em;white-space:nowrap}
      .weflair-logo-mark img{display:block;max-width:8rem;max-height:1.45rem;opacity:.72;filter:grayscale(1) brightness(1.1)}
      @keyframes weflairMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      #services .services-overview__row-text{column-gap:clamp(2.7rem,4vw,3.8rem)}
      #services .services-overview__col-eyebrow{width:clamp(8rem,12vw,10rem)!important;padding-top:0!important}
      #services .services-overview__col-text{max-width:74rem!important;padding-top:clamp(2.8rem,3.2vw,3.3rem)!important}
      #services .services-overview__col-text .h3{max-width:none!important}
      #services .services-overview__row-text{align-items:flex-start!important}
      #services .services-overview__col-eyebrow .eyebrow{margin-bottom:0}
      .weflair-section-accent--solid{color:#3eff68;font-style:normal!important;font-weight:700}
      .weflair-services-native{display:flex;justify-content:center;margin-top:clamp(2rem,4vw,3rem)}
      .weflair-services-native .services-overview__col-tiles{width:min(100%,57rem)}
      .weflair-services-native .growing-tiles{height:auto;gap:.6rem}
      .weflair-services-native .growing-tiles__row,.weflair-services-native .growing-tiles .growing-tiles__row,.weflair-services-native .growing-tiles .growing-tiles__row:hover{height:auto;transition:none}
      .weflair-services-native .growing-tiles__row{display:flex;gap:.6rem}
      .weflair-services-native .growing-tiles__col,.weflair-services-native .growing-tiles .growing-tiles__col,.weflair-services-native .growing-tiles .growing-tiles__col:hover{flex:1 1 0;min-width:0;width:auto;transition:none}
      .weflair-services-native .growing-tile{min-height:12.6rem;overflow:hidden;transform:translateY(0) scale(1);transition:transform .22s ease,background-color .22s ease,border-color .22s ease,box-shadow .22s ease;border-color:rgba(246,243,238,.08);background:linear-gradient(180deg,rgba(25,25,25,.98) 0%,rgba(18,18,18,.98) 100%);box-shadow:none}
      .weflair-services-native .growing-tile:hover,.weflair-services-native .growing-tile:focus-visible{transform:translateY(-4px) scale(1.012);border-color:rgba(246,243,238,.16);background:linear-gradient(180deg,rgba(31,31,31,.98) 0%,rgba(20,20,20,.98) 100%);box-shadow:0 18px 42px rgba(0,0,0,.22)}
      .weflair-services-native .growing-tile .h5{margin:0;max-width:none;text-wrap:pretty}
      .weflair-services-native .growing-tile .p-s{max-width:28ch}
      .weflair-services-native .growing-tile .growing-tile__end .growing-tile__text{transition:opacity .22s ease,transform .22s ease,color .22s ease}
      .weflair-services-native .growing-tile:hover .growing-tile__end .growing-tile__text,.weflair-services-native .growing-tile:focus-visible .growing-tile__end .growing-tile__text{opacity:1;visibility:visible;transform:translateY(0)}
      .weflair-services-native .growing-tile:hover .arrow,.weflair-services-native .growing-tile:focus-visible .arrow{background-color:#f3f3f3}
      .weflair-services-native .growing-tile:hover .arrow__box,.weflair-services-native .growing-tile:focus-visible .arrow__box{color:#1b1b1b}
      .weflair-services-native .growing-tiles__row.is-single{justify-content:center}
      .weflair-services-native .growing-tiles__row.is-single .growing-tiles__col{flex:0 1 calc(50% - .3rem);max-width:calc(50% - .3rem)}
      .weflair-services-cta-wrap{display:flex;justify-content:center;margin-top:3.2rem}
      .weflair-services-cta{display:grid;justify-items:center;gap:.8rem;width:min(100%,34rem);margin:0 auto;padding:1.3rem 1.35rem 1.15rem;border:1px solid rgba(246,243,238,.08);border-radius:1.2rem;background:linear-gradient(180deg,rgba(26,26,26,.9) 0%,rgba(19,19,19,.94) 100%);backdrop-filter:blur(10px);box-shadow:0 18px 40px rgba(0,0,0,.2),inset 0 1px 0 rgba(246,243,238,.03);text-align:center}
      .weflair-services-cta h3{margin:0;font-size:clamp(1rem,1.1vw,1.14rem);line-height:1.08;letter-spacing:-.03em}
      .weflair-services-cta p{margin:0;max-width:26rem;font-family:"Helvetica Now Text",Arial,sans-serif;font-size:clamp(.98rem,1.04vw,1.08rem);line-height:1.45;color:rgba(246,243,238,.74)}
      .weflair-services-cta .btn{min-width:min(100%,16rem)}
      .weflair-services-cta-note{font-size:.76rem!important;line-height:1.3!important;color:rgba(246,243,238,.5)!important}
      .weflair-tag{display:inline-flex;align-items:center;min-height:2rem;padding:.38rem .72rem;border:1px solid rgba(246,243,238,.08);border-radius:999px;background:rgba(28,31,28,.92);font-size:.86rem;font-weight:700;line-height:1;color:rgba(246,243,238,.88)}
      .weflair-challenges .weflair-challenges__row-text{display:flex;column-gap:clamp(3.1rem,4.6vw,4.9rem);align-items:flex-start}
      .weflair-challenges .weflair-challenges__col-eyebrow{width:clamp(8.8rem,12vw,10.8rem);padding-top:.15rem;flex:0 0 auto}
      .weflair-challenges .weflair-challenges__col-eyebrow .eyebrow{margin-bottom:0}
      .weflair-challenges .weflair-challenges__col-text{max-width:76rem;padding-top:clamp(3.25rem,4vw,4.1rem)}
      .weflair-challenges .weflair-challenges__col-text .h3{max-width:none;margin-bottom:1.15rem;line-height:.96;letter-spacing:-.075em}
      .weflair-challenges .weflair-section__body{max-width:50rem;margin:0;color:rgba(246,243,238,.72);font-size:1rem;line-height:1.52}
      .weflair-problems-native{display:flex;justify-content:center;margin-top:clamp(2.35rem,3.9vw,3.2rem)}
      .weflair-problems-native .growing-tiles{width:min(100%,76rem);gap:.65rem}
      .weflair-problems-native .growing-tiles__row{display:flex;gap:.65rem}
      .weflair-problems-native .growing-tiles__col{flex:1 1 0;min-width:0}
      .weflair-problems-native .growing-tile{min-height:10.6rem;padding:1rem 1.06rem;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:default;text-align:center}
      .weflair-problems-native .growing-tile__start{display:flex;flex-direction:column;gap:.78rem;align-items:center;width:100%}
      .weflair-problems-native .growing-tile__end{display:grid;align-content:center;justify-items:center;min-height:auto;padding-top:.7rem;width:100%}
      .weflair-problems-native .growing-tile .h5{margin:0;max-width:16ch;text-wrap:pretty;font-size:clamp(1.06rem,1.12vw,1.18rem);line-height:1.16;letter-spacing:-.035em}
      .weflair-problems-native .growing-tile .p-s{max-width:16.25rem;font-size:.86rem;line-height:1.5;color:rgba(246,243,238,.7);text-align:center}
      .weflair-problems-native .growing-tile__text{display:grid;gap:.56rem;justify-items:center}
      .weflair-problems-native .growing-tile__end .growing-tile__text{opacity:1!important;transform:none!important}
      .weflair-problem-tile__start-row{display:flex;align-items:center;justify-content:center;gap:.7rem;width:100%}
      .weflair-problem-tile__title{max-width:none}
      .weflair-problem-tile__icon{width:2.2rem;height:2.2rem;border:1px solid rgba(62,255,104,.2);border-radius:.65rem;background:rgba(62,255,104,.07);display:grid;place-items:center;color:#3eff68;flex:0 0 auto;transition:background .22s ease,border-color .22s ease}
      .weflair-problem-tile__icon svg{width:1.05rem;height:1.05rem}
      .weflair-problems-native .growing-tile:hover .weflair-problem-tile__icon{background:rgba(62,255,104,.14);border-color:rgba(62,255,104,.36)}
      .weflair-framework-section .weflair-challenges__row-text{margin-bottom:0;padding-bottom:0}
      .weflair-ring-split{display:grid;grid-template-columns:1fr 1.15fr;gap:clamp(2rem,3.5vw,3.5rem);align-items:center;margin-top:clamp(2rem,3vw,2.8rem)}
      .weflair-steps{display:flex;flex-direction:column;gap:0;padding:1.4rem 1.2rem;border:1px solid rgba(246,243,238,.06);border-radius:1.1rem;background:linear-gradient(180deg,rgba(20,22,20,.65) 0%,rgba(16,18,16,.82) 100%);backdrop-filter:blur(8px)}
      .weflair-step{display:grid;grid-template-columns:2.2rem 1fr;gap:.75rem;padding:.65rem .55rem;border-radius:.65rem;cursor:pointer;transition:background .25s ease,border-color .25s ease;border:1px solid transparent}
      .weflair-step:hover{background:rgba(246,243,238,.03)}
      .weflair-step.is-active{background:rgba(246,243,238,.04);border-color:rgba(246,243,238,.06)}
      .weflair-step__num{width:2.1rem;height:2.1rem;border-radius:999px;display:grid;place-items:center;font-size:.75rem;font-weight:800;transition:background .25s ease,box-shadow .25s ease,border-color .25s ease,color .25s ease}
      .weflair-step__body{display:grid;gap:.25rem}
      .weflair-step__name{font-size:1rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(246,243,238,.45);transition:color .25s ease}
      .weflair-step__desc{font-size:.88rem;line-height:1.45;color:rgba(246,243,238,.45);margin:0;transition:color .25s ease}
      .weflair-step.is-active .weflair-step__desc{color:rgba(246,243,238,.78)}
      .weflair-step__tags{display:flex;flex-wrap:wrap;gap:.32rem;margin-top:.12rem;max-height:0;overflow:hidden;opacity:0;transition:max-height .35s ease,opacity .3s ease,margin .3s ease}
      .weflair-step.is-active .weflair-step__tags{max-height:5rem;opacity:1;margin-top:.35rem}
      .weflair-step__tag{display:inline-flex;align-items:center;padding:.22rem .6rem;border-radius:999px;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;font-weight:600}
      .weflair-step__connector{display:flex;align-items:center;padding:.05rem 0 .05rem .6rem;height:1.1rem}
      .weflair-step__connector svg{height:100%;width:.6rem;color:rgba(246,243,238,.12)}
      .weflair-step__loop{display:flex;align-items:center;gap:.45rem;padding:.3rem 0 0 .6rem}
      .weflair-step__loop svg{width:1rem;height:1rem}
      .weflair-step__loop span{font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:rgba(246,243,238,.28)}
      .weflair-ring-wrap{position:relative;width:100%;max-width:34rem;margin:0 auto}
      .weflair-ring-visual{width:100%;aspect-ratio:1/1}
      .weflair-ring-visual svg{width:100%;height:100%;overflow:visible}
      .weflair-ring-segment{cursor:pointer;transition:opacity .3s ease,filter .3s ease}
      .weflair-ring-segment:not(.is-active){opacity:.30}
      .weflair-ring-segment.is-active{opacity:1}
      .weflair-ring-segment path{transition:fill .3s ease,stroke .3s ease}
      .weflair-ring-label{font-weight:800;letter-spacing:.06em;text-transform:uppercase;fill:rgba(246,243,238,.92);pointer-events:none;text-anchor:middle;dominant-baseline:central}
      .weflair-ring-hub-title{font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;fill:rgba(246,243,238,.88);text-anchor:middle}
      .weflair-ring-hub-sub{font-size:9.5px;font-weight:500;letter-spacing:.04em;fill:rgba(246,243,238,.45);text-anchor:middle}
      .weflair-ring-orbit{fill:none;stroke:rgba(246,243,238,.06);stroke-width:1;stroke-dasharray:5 7;stroke-linecap:round}
      .weflair-ring-connector{fill:none;stroke-width:1.2;stroke-dasharray:4 5;stroke-linecap:round;opacity:.5}
      .weflair-callout{position:absolute;width:12rem;padding:.55rem .75rem;border:1px solid rgba(246,243,238,.07);border-radius:.6rem;background:rgba(14,16,14,.88);backdrop-filter:blur(6px);font-size:.82rem;line-height:1.4;color:rgba(246,243,238,.45);transition:opacity .3s ease,border-color .3s ease,color .3s ease;transform:translate(-50%,-50%)}
      .weflair-callout.is-active{opacity:1;color:rgba(246,243,238,.85);border-color:rgba(246,243,238,.14)}
      .weflair-callout:not(.is-active){opacity:.25}
      .weflair-callout__dot{display:inline-block;width:.5rem;height:.5rem;border-radius:50%;margin-right:.4rem;vertical-align:middle}
      .weflair-method-detail h3,.weflair-proof-card h3,.weflair-testimonial-card h3{margin:0}
      .weflair-demand-team__panel-plain{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:1.4rem;padding:1.35rem;border:1px solid rgba(246,243,238,.08);border-radius:1.35rem;background:rgba(17,17,17,.84)}
      .weflair-results-grid{display:grid;grid-template-columns:1.15fr 1fr 1fr;gap:.7rem}
      .weflair-proof-card{min-height:17rem;padding:1.25rem;border:1px solid rgba(246,243,238,.08);border-radius:1.2rem;background:rgba(17,17,17,.86);display:grid;align-content:start;gap:.9rem}
      .weflair-proof-card--feature{grid-row:span 2}
      .weflair-proof-card__meta{display:flex;align-items:center;justify-content:space-between;gap:.8rem}
      .weflair-proof-card__label{font-size:.82rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#3eff68}
      .weflair-proof-card__company{font-weight:700;color:rgba(246,243,238,.88)}
      .weflair-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.6rem}
      .weflair-stat{padding:.8rem .85rem;border:1px solid rgba(246,243,238,.08);border-radius:.95rem;background:rgba(23,24,23,.96)}
      .weflair-stat strong{display:block;font-size:1.28rem;line-height:1;color:#f6f3ee}
      .weflair-stat span{display:block;margin-top:.2rem;color:rgba(246,243,238,.68);font-size:.86rem}
      .weflair-testimonials-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.7rem}
      .weflair-testimonial-card{min-height:15rem;padding:1.2rem;border:1px solid rgba(246,243,238,.08);border-radius:1.2rem;background:rgba(17,17,17,.86);display:grid;align-content:start;gap:1rem}
      .weflair-avatar{width:2.9rem;height:2.9rem;border-radius:999px;background:rgba(62,255,104,.16);display:grid;place-items:center;font-weight:700;color:#f6f3ee}
      .weflair-compare-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}
      .weflair-compare-col{display:grid;gap:.7rem}
      .weflair-compare-item{display:flex;gap:.75rem;padding:1rem;border:1px solid rgba(246,243,238,.08);border-radius:1rem;background:rgba(17,17,17,.84)}
      .weflair-compare-col h3{margin:0 0 .25rem}
      .weflair-compare-mark{width:1.1rem;height:1.1rem;border-radius:999px;flex:0 0 auto;margin-top:.2rem}
      .weflair-compare-mark.is-bad{background:rgba(246,243,238,.16)}
      .weflair-compare-mark.is-good{background:#3eff68}
      .weflair-footer-cta{display:grid;gap:1rem;justify-items:center;text-align:center;padding:4.5rem 0}

      /* ─── FOOTER ─── */
      .weflair-footer{background:#0e100e}
      .weflair-footer__cta-banner{position:relative;padding:clamp(4rem,7vw,6.5rem) 0;background:linear-gradient(180deg,rgba(14,16,14,0) 0%,rgba(14,16,14,.96) 100%)}
      .weflair-footer__cta-inner{display:grid;gap:1.1rem;justify-items:center;text-align:center;max-width:42rem;margin:0 auto}
      .weflair-footer__cta-inner .weflair-section__body.is--muted{color:rgba(246,243,238,.48);font-size:.95rem}
      .weflair-footer__main{padding:clamp(3rem,5vw,4.5rem) 0 clamp(1.8rem,3vw,2.4rem);border-top:1px solid rgba(246,243,238,.06)}
      .weflair-footer__top{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:clamp(2rem,4vw,4rem)}
      .weflair-footer__info-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(1rem,2.5vw,2.2rem)}
      .weflair-footer__nav-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(1rem,2.5vw,2.2rem)}
      .weflair-footer__col-heading{font-size:.88rem;font-weight:700;letter-spacing:-.01em;color:#f6f3ee;margin:0 0 .9rem}
      .weflair-footer__info-line{margin:0 0 .15rem;font-size:.82rem;line-height:1.5;color:rgba(246,243,238,.55)}
      .weflair-footer__contact-link{display:block;font-size:.82rem;line-height:1.5;color:rgba(246,243,238,.55);text-decoration:none;transition:color .2s ease}
      .weflair-footer__contact-link:hover{color:#3eff68}
      .weflair-footer__nav-list{list-style:none;margin:0;padding:0;display:grid;gap:.3rem}
      .weflair-footer__nav-link{font-size:.82rem;line-height:1.5;color:rgba(246,243,238,.55);text-decoration:none;transition:color .2s ease}
      .weflair-footer__nav-link:hover{color:#f6f3ee}
      .weflair-footer__divider{height:1px;background:rgba(246,243,238,.06);margin:clamp(2rem,3.5vw,3rem) 0 clamp(1.2rem,2vw,1.6rem)}
      .weflair-footer__bottom{display:flex;align-items:center;justify-content:space-between;gap:1.5rem}
      .weflair-footer__legal{display:flex;align-items:center;gap:1.6rem;flex-wrap:wrap}
      .weflair-footer__copyright{font-size:.78rem;color:rgba(246,243,238,.4)}
      .weflair-footer__legal-link{font-size:.78rem;color:rgba(246,243,238,.4);text-decoration:none;transition:color .2s ease}
      .weflair-footer__legal-link:hover{color:rgba(246,243,238,.7)}
      .weflair-footer__social{display:flex;align-items:center;gap:.6rem}
      .weflair-footer__social-link{display:grid;place-items:center;width:2.2rem;height:2.2rem;border-radius:.55rem;border:1px solid rgba(246,243,238,.08);background:transparent;color:rgba(246,243,238,.5);transition:color .2s ease,border-color .2s ease,background .2s ease;text-decoration:none}
      .weflair-footer__social-link:hover{color:#f6f3ee;border-color:rgba(246,243,238,.2);background:rgba(246,243,238,.04)}

      /* ─── PROCESS ─── */
      .weflair-process{padding:clamp(5rem,8vw,7.5rem) 0}
      .weflair-process__layout{display:flex;flex-direction:column;gap:clamp(3rem,4.5vw,4rem)}
      .weflair-process__head{text-align:left}
      .weflair-process__head .weflair-section__head{justify-items:start}
      .weflair-process__head .h3{max-width:13ch;font-size:clamp(2.7rem,4.3vw,4.15rem);line-height:.95;letter-spacing:-.07em;text-transform:none}
      .weflair-process__head .weflair-section__body{max-width:44rem}
      .weflair-process__steps{display:flex;flex-direction:column}
      .weflair-process__step{display:grid;grid-template-columns:3.5rem 2.5rem 1fr 1.35fr;gap:0 clamp(.8rem,1.5vw,1.5rem);align-items:start;padding:clamp(1.4rem,2vw,1.8rem) 0;border-top:1px solid rgba(246,243,238,.08)}
      .weflair-process__step:last-child{border-bottom:1px solid rgba(246,243,238,.08)}
      .weflair-process__num{font-size:.88rem;font-weight:600;color:rgba(246,243,238,.3);padding-top:.15rem}
      .weflair-process__icon{width:2rem;height:2rem;display:grid;place-items:center;border:1px solid rgba(246,243,238,.08);border-radius:.5rem;color:rgba(246,243,238,.4);margin-top:.05rem}
      .weflair-process__icon svg{width:1rem;height:1rem}
      .weflair-process__title{display:block;font-size:clamp(1.15rem,1.4vw,1.35rem);font-weight:700;letter-spacing:-.03em;color:#f6f3ee;line-height:1.15}
      .weflair-process__body{font-size:.88rem;line-height:1.55;color:rgba(246,243,238,.5);max-width:38rem}
      .weflair-process__time{display:block;margin-top:.45rem;font-size:.72rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(62,255,104,.6)}
      .weflair-process__step:hover .weflair-process__icon{border-color:rgba(62,255,104,.22);color:#3eff68;background:rgba(62,255,104,.06)}
      .weflair-process__step:hover .weflair-process__body{color:rgba(246,243,238,.72)}

      @media (max-width: 991px){
        .weflair-services-grid,.weflair-results-grid,.weflair-testimonials-grid,.weflair-compare-grid,.weflair-demand-team__panel-plain{grid-template-columns:1fr 1fr}
        .weflair-challenges .weflair-challenges__row-text{flex-direction:column;row-gap:1.35rem}
        .weflair-challenges .weflair-challenges__col-eyebrow{width:auto;padding-top:0}
        .weflair-challenges .weflair-challenges__col-eyebrow .eyebrow{margin-bottom:.25rem}
        .weflair-challenges .weflair-challenges__col-text{padding-top:0}
        .weflair-ring-split{grid-template-columns:1fr;gap:2rem}
        .weflair-ring-visual{max-width:20rem}
        .weflair-steps{gap:0}
        .weflair-problems-native .growing-tiles__row{flex-wrap:wrap}
        .weflair-problems-native .growing-tiles__col{flex:1 1 calc(50% - .325rem)}
        .weflair-audit-widget{width:min(100%,19rem)}
        .weflair-proof-card--feature{grid-row:auto;grid-column:1/-1}
        .weflair-footer__top{grid-template-columns:1fr}
        .weflair-footer__info-row{grid-template-columns:repeat(3,1fr)}
        .weflair-footer__nav-row{grid-template-columns:repeat(4,1fr)}
        .weflair-process__step{grid-template-columns:3rem 1fr}
        .weflair-process__icon{display:none}
        .weflair-process__body{grid-column:2/-1;margin-top:.4rem}
      }
      @media (max-width: 767px){
        .weflair-hero-actions,.weflair-logos-strip{justify-content:flex-start}
        .weflair-services-grid,.weflair-results-grid,.weflair-testimonials-grid,.weflair-compare-grid,.weflair-demand-team__panel-plain{grid-template-columns:1fr}
        .weflair-challenges .weflair-challenges__col-text .h3{max-width:none}
        .weflair-challenges .weflair-section__body{font-size:.96rem}
        .weflair-ring-visual{max-width:18rem}
        .weflair-problems-native .growing-tiles__col{flex-basis:100%}
        .weflair-services-grid .is-span-2{grid-column:auto}
        .weflair-logo-marquee__track{gap:1.8rem;animation-duration:20s}
        .weflair-logos-label{font-size:.92rem}
        .weflair-audit-widget{width:100%}
        .weflair-audit-widget__dates{grid-template-columns:repeat(5,minmax(0,1fr))}
        .weflair-footer__top{grid-template-columns:1fr}
        .weflair-footer__info-row{grid-template-columns:1fr 1fr}
        .weflair-footer__nav-row{grid-template-columns:1fr 1fr}
        .weflair-footer__bottom{flex-direction:column;align-items:flex-start;gap:1rem}
        .weflair-process__step{grid-template-columns:1fr;gap:.3rem .8rem}
        .weflair-process__num{display:none}
        .weflair-process__title::before{content:attr(data-num) '. ';color:rgba(246,243,238,.3);font-weight:600}
        .weflair-process__body{grid-column:1/-1}
      }
    `;
    document.head.appendChild(style);
  }

  function replaceLogo() {
    const logoAnchor = q(".nav-bar__logo-a") || q('a[href="./index.html"]');
    if (!logoAnchor || logoAnchor.dataset.weflairLogoApplied) return;
    logoAnchor.dataset.weflairLogoApplied = "true";
    logoAnchor.innerHTML = `<span class="weflair-logo"><span class="weflair-logo__mark">${flareSvg(
      "weflair-flare"
    )}</span><span class="weflair-logo__word">WeFlair</span></span>`;
  }

  function updateNav() {
    const topLabels = {
      Services: "Services",
      Expertise: "Expertise",
      Cases: "Results",
      Resources: "Resources",
      About: "Team",
      Careers: "FAQ",
      "Talk to us": "Talk to us",
    };

    qa(".nav-bar__link-text-span").forEach((node) => {
      const text = node.textContent.trim();
      if (topLabels[text]) node.textContent = topLabels[text];
    });

    const dropdownMap = {
      Services: CONTENT.nav.services,
      Expertise: CONTENT.nav.expertise,
      Resources: CONTENT.nav.resources,
    };

    qa(".nav-bar__link").forEach((link) => {
      const label = q(".nav-bar__link-text-span", link)?.textContent?.trim();
      const grid = q(".nav-dropdown__grid", link);
      if (!label || !grid || !dropdownMap[label]) return;
      const items = dropdownMap[label];
      const rows = [items.slice(0, 3), items.slice(3)];
      grid.innerHTML = rows
        .filter((row) => row.length)
        .map(
          (row) =>
            `<div class="nav-dropdown__grid-row">${row
              .map(
                ([title, body]) =>
                  `<a data-hover="" data-arrow="diagonal" href="#services" class="nav-dropdown-tile w-inline-block"><div class="nav-dropdown-tile__bg"></div><div class="nav-dropdown-tile__text"><h3 class="nav-dropdown-tile__h">${title}</h3><p class="nav-dropdown-tile__p">${body}</p></div><div class="nav-dropdown-tile__arrow">${arrowMarkup()}</div></a>`
              )
              .join("")}</div>`
        )
        .join("");
    });

    qa(".nav-bar__link[href]").forEach((link) => {
      const text = link.textContent.trim();
      if (text === "Results") link.setAttribute("href", "#results");
      if (text === "Team") link.setAttribute("href", "#team");
      if (text === "FAQ") link.remove();
    });

    const talkButton = q(".nav-bar__btn a");
    if (talkButton) {
      talkButton.setAttribute("href", "#audit");
      const span = q(".btn__span", talkButton);
      if (span) span.textContent = "Talk to us";
    }
  }

  function transformHero() {
    const hero = q(".home-header");
    if (!hero) return;
    hero.id = "hero";
    const eyebrowNode = q(".eyebrow", hero);
    if (eyebrowNode) eyebrowNode.outerHTML = eyebrow(CONTENT.hero.eyebrow);
    const titleNode = q("h1, .h1", hero);
    if (titleNode) {
      titleNode.classList.add("weflair-headline");
      titleNode.innerHTML = CONTENT.hero.titleHtml;
    }
    const bodyNode = qa("p", hero).find((node) => !node.closest(".btn") && !node.closest(".eyebrow"));
    if (bodyNode) bodyNode.textContent = CONTENT.hero.body;
    const buttonWrap = q(".btn-wrap__inner", hero) || q(".btn-wrap", hero);
    if (buttonWrap) {
      buttonWrap.innerHTML = `<div class="weflair-hero-actions">${button(
        CONTENT.hero.primary,
        "#services",
        "primary"
      )}</div>`;
    }
    qa(".weflair-header-flare, .weflair-hero-art, .header-3d")
      .forEach((node) => node.remove());
    if (!q(".weflair-hero-glow", hero)) {
      hero.insertAdjacentHTML("beforeend", `<div class="weflair-hero-glow"></div>`);
    }
    let cardSlot = q(".weflair-hero-widget-wrap", hero);
    if (!cardSlot) {
      const nativeCard = q(".corner-card, .home-header__col-card", hero);
      if (nativeCard) {
        nativeCard.classList.add("weflair-hero-widget-wrap");
        nativeCard.innerHTML = "";
        cardSlot = nativeCard;
      }
    }
    if (cardSlot && !q(".weflair-audit-widget", cardSlot)) {
      cardSlot.innerHTML = `<div class="weflair-audit-widget" id="audit-widget"><button type="button" class="weflair-audit-widget__launcher" data-audit-toggle aria-expanded="false" aria-controls="weflair-audit-panel">${arrowMarkup()}</button><div class="weflair-audit-widget__panel" id="weflair-audit-panel"><div class="weflair-audit-widget__head"><div class="weflair-audit-widget__profile"><div class="weflair-audit-widget__avatar">SM</div><div class="weflair-audit-widget__meta"><span class="weflair-audit-widget__name">Sami Madi</span><span class="weflair-audit-widget__role">Growth audit, 30 min</span></div></div><button type="button" class="weflair-audit-widget__close" data-audit-close aria-label="Close growth audit card">×</button></div><h3 class="weflair-audit-widget__title">Request a growth audit</h3><p class="weflair-audit-widget__body">Book a 30 min session to see how we would engineer a stronger growth system around your goals, channels, and workflow.</p><div class="weflair-audit-widget__slots"><strong>Only a few spots are open.</strong><span class="weflair-audit-widget__countdown">This week</span></div><div class="weflair-audit-widget__dates"><div class="weflair-audit-widget__date is-active"><span>Tue</span><strong>08</strong></div><div class="weflair-audit-widget__date"><span>Wed</span><strong>09</strong></div><div class="weflair-audit-widget__date"><span>Thu</span><strong>10</strong></div><div class="weflair-audit-widget__date"><span>Fri</span><strong>11</strong></div><div class="weflair-audit-widget__date"><span>Mon</span><strong>14</strong></div></div><div class="weflair-audit-widget__cta">${button(
        "Request a growth audit",
        "#audit",
        "primary"
      )}</div><div class="weflair-audit-widget__foot">One point of view. Clear next steps. No hard sell.</div></div></div>`;
    }
  }

  function renderLogosSection(section) {
    section.id = "logos";
    section.className = "home-results weflair-section";
    const items = [...LOGOS, ...LOGOS]
      .map((item) =>
        item.type === "image"
          ? `<span class="weflair-logo-mark"><img src="${item.src}" alt="${item.label}"></span>`
          : `<span class="weflair-logo-mark">${item.label}</span>`
      )
      .join("");
    section.innerHTML = `<div class="container"><div class="weflair-logos-rail"><p class="weflair-logos-label">Trusted by sales and marketing leaders</p><div class="weflair-logo-marquee"><div class="weflair-logo-marquee__track">${items}</div></div></div></div>`;
  }

  function wireAuditWidget() {
    const widget = q(".weflair-audit-widget");
    if (!widget || widget.dataset.wireReady) return;
    widget.dataset.wireReady = "true";
    const launcher = q("[data-audit-toggle]", widget);
    const closer = q("[data-audit-close]", widget);
    const setCollapsed = (collapsed) => {
      widget.classList.toggle("is-collapsed", collapsed);
      if (launcher) launcher.setAttribute("aria-expanded", String(!collapsed));
    };
    launcher?.addEventListener("click", () => setCollapsed(false));
    closer?.addEventListener("click", () => setCollapsed(true));
  }

  function renderServicesSection(section) {
    section.id = "services";
    section.className = "services-overview weflair-section";
    const cards = CONTENT.services.cards;
    const rows = [cards.slice(0, 2), cards.slice(2, 4), cards.slice(4)];
    section.innerHTML = `<div class="container"><div class="services-overview__row-text"><div class="services-overview__col-eyebrow">${eyebrow(
      CONTENT.services.eyebrow
    )}</div><div class="services-overview__col-text"><h2 class="h3">${CONTENT.services.titleHtml}</h2><div class="services-overview__col-text-p"><p>${CONTENT.services.body}</p></div></div></div><div class="services-overview__row-tiles weflair-services-native"><div class="services-overview__col-tiles"><div class="growing-tiles">${rows
      .map(
        (row, rowIndex) =>
          `<div class="growing-tiles__row${
            row.length === 1 ? " is-single" : ""
          }">${row
            .map(
              (card) =>
                `<div class="growing-tiles__col"><a data-ease="" data-hover="" data-arrow="diagonal" href="#results" class="growing-tile w-inline-block"><div class="growing-tile__start"><div class="growing-tile__text"><h3 class="h5">${card.title}</h3></div></div><div class="growing-tile__end"><div class="growing-tile__text"><p class="p-s">${card.body}</p></div><div class="growing-tile__arrow">${arrowMarkup()}</div></div></a></div>`
            )
            .join("")}</div>`
      )
      .join("")}</div></div></div><div class="weflair-services-cta-wrap"><div class="weflair-services-cta"><h3 class="h5">Not sure which service you need?</h3><p>Book a call and we&rsquo;ll help you figure out the best approach for your specific situation.</p>${button(
      "Book a free strategy call",
      "#audit",
      "primary"
    )}<p class="weflair-services-cta-note">Free audit included • No commitment required</p></div></div></div>`;
  }

  function challengeIcon(index) {
    const icons = [
      // Wasted ad spend – dollar with arrow down
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M9 6c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3H9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      // Disconnected sales & marketing – broken link
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M9 17H7A5 5 0 017 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h2a5 5 0 010 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 3"/></svg>',
      // Manual work everywhere – hand with gears
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      // Tools bought, never connected – puzzle piece
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M4 7h3a2 2 0 002-2 2 2 0 014 0 2 2 0 002 2h3v3a2 2 0 01-2 2 2 2 0 000 4 2 2 0 012 2v3H4v-3a2 2 0 002-2 2 2 0 00-2-2 2 2 0 01-2-2V7h2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      // Dirty data, weak decisions – database with warning
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.6"/><path d="M4 5v6c0 1.657 3.582 3 8 3s8-1.343 8-3V5" stroke="currentColor" stroke-width="1.6"/><path d="M4 11v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" stroke="currentColor" stroke-width="1.6"/><path d="M12 14v2M12 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
      // Channels that never compound – bars without uptrend
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M3 21h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="5" y="13" width="3" height="8" rx=".5" stroke="currentColor" stroke-width="1.6"/><rect x="10.5" y="9" width="3" height="12" rx=".5" stroke="currentColor" stroke-width="1.6"/><rect x="16" y="5" width="3" height="16" rx=".5" stroke="currentColor" stroke-width="1.6"/><path d="M5 8l6-4 4 2 5-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 3"/></svg>',
    ];
    return icons[index] || icons[0];
  }

  function renderProblemsSection(section) {
    if (section.dataset.rendered) return;
    section.dataset.rendered = "true";
    const rows = [CONTENT.problems.cards.slice(0, 3), CONTENT.problems.cards.slice(3, 6)];
    section.innerHTML = `<div class="container"><div class="weflair-challenges__row-text"><div class="weflair-challenges__col-eyebrow">${eyebrow(
      CONTENT.problems.eyebrow
    )}</div><div class="weflair-challenges__col-text"><h2 class="h3">${CONTENT.problems.titleHtml}</h2><p class="weflair-section__body">${CONTENT.problems.body}</p></div></div><div class="weflair-problems-native"><div class="growing-tiles">${rows
      .map(
        (row) =>
          `<div class="growing-tiles__row">${row
            .map(
              (card) =>
                `<div class="growing-tiles__col"><div data-ease="" data-hover="" class="growing-tile w-inline-block weflair-challenge-card"><div class="growing-tile__start"><div class="weflair-problem-tile__start-row"><span class="weflair-problem-tile__icon">${challengeIcon(
                  CONTENT.problems.cards.indexOf(card)
                )}</span></div><div class="growing-tile__text"><h3 class="h5 weflair-problem-tile__title">${card.title}</h3></div></div><div class="growing-tile__end"><div class="growing-tile__text"><p class="p-s">${card.body}</p></div></div></div></div>`
            )
            .join("")}</div>`
      )
      .join("")}</div></div></div>`;
  }

  function renderMethodSection(section) {
    if (section.dataset.ringRendered) return;
    section.dataset.ringRendered = "true";
    const s = CONTENT.method.stages;
    const n = s.length;
    section.className = "home-expertise weflair-section weflair-framework-section";
    section.id = "method";

    /* --- flywheel geometry --- */
    const cx = 250, cy = 250, outerR = 148, innerR = 88;
    const midR = (outerR + innerR) / 2;
    const segDeg = 360 / n;
    const gap = 4;
    const tipInset = 20; /* more pronounced arrow tips */
    const cos = Math.cos, sin = Math.sin;
    const startOffset = -90 - segDeg / 2; /* center 'Find the lever' at 12 o'clock */

    function arrowPath(startDeg, endDeg) {
      const g = gap / 2;
      const sRad = (startDeg + g) * Math.PI / 180;
      const eBodyRad = (endDeg - tipInset) * Math.PI / 180;
      const eTipRad = (endDeg - g) * Math.PI / 180;
      const ox1 = cx + outerR * cos(sRad), oy1 = cy + outerR * sin(sRad);
      const ox2 = cx + outerR * cos(eBodyRad), oy2 = cy + outerR * sin(eBodyRad);
      const tx = cx + midR * cos(eTipRad), ty = cy + midR * sin(eTipRad);
      const ix1 = cx + innerR * cos(eBodyRad), iy1 = cy + innerR * sin(eBodyRad);
      const ix2 = cx + innerR * cos(sRad), iy2 = cy + innerR * sin(sRad);
      return `M${ox1},${oy1} A${outerR},${outerR} 0 0 1 ${ox2},${oy2} L${tx},${ty} L${ix1},${iy1} A${innerR},${innerR} 0 0 0 ${ix2},${iy2} Z`;
    }

    const segData = s.map((stage, i) => ({
      start: startOffset + i * segDeg,
      end: startOffset + (i + 1) * segDeg,
      midAngle: startOffset + i * segDeg + segDeg / 2,
      bodyMid: startOffset + i * segDeg + (segDeg - tipInset) / 2,
    }));

    const segFills = s.map(st => {
      const c = st.color;
      return { fill: c + '22', stroke: c + '55', activeFill: c + '44', activeStroke: c };
    });

    const segmentsSvg = segData.map((sd, i) => {
      const f = segFills[i];
      const isFirst = i === 0;
      return `<g class="weflair-ring-segment${isFirst ? ' is-active' : ''}" data-ring-index="${i}"><path d="${arrowPath(sd.start, sd.end)}" fill="${isFirst ? f.activeFill : f.fill}" stroke="${isFirst ? f.activeStroke : f.stroke}" stroke-width="1.5"/></g>`;
    }).join('');

    /* labels ON the arrows */
    const labelR2 = (outerR + innerR) / 2;
    const labelsSvg = segData.map((sd, i) => {
      const a = sd.bodyMid * Math.PI / 180;
      const lx = cx + labelR2 * cos(a);
      const ly = cy + labelR2 * sin(a);
      let rot = sd.bodyMid + 90;
      if (sd.bodyMid > 0 && sd.bodyMid < 180) rot += 180;
      return `<text class="weflair-ring-label" data-ring-label="${i}" x="${lx}" y="${ly}" font-size="11" transform="rotate(${rot},${lx},${ly})">${s[i].name}</text>`;
    }).join('');

    /* center hub — smaller text */
    const hubSvg = `<circle cx="${cx}" cy="${cy}" r="${innerR - 4}" fill="rgba(14,16,14,.95)" stroke="rgba(246,243,238,.06)" stroke-width=".8"/>
      <text class="weflair-ring-hub-title" x="${cx}" y="${cy - 7}">THE FLAIR</text>
      <text class="weflair-ring-hub-title" x="${cx}" y="${cy + 9}">LOOP™</text>
      <text class="weflair-ring-hub-sub" x="${cx}" y="${cy + 23}">Every output feeds the next</text>`;

    /* outer dashed orbit with arrowhead markers showing clockwise flow */
    const orbitR = outerR + 22;
    const orbitArrows = segData.map((sd) => {
      const a = sd.midAngle * Math.PI / 180;
      const ax = cx + orbitR * cos(a), ay = cy + orbitR * sin(a);
      const tangent = sd.midAngle + 90; /* clockwise tangent */
      const sz = 5;
      const tRad = tangent * Math.PI / 180;
      const tipX = ax + sz * cos(tRad), tipY = ay + sz * sin(tRad);
      const perpRad = (tangent + 90) * Math.PI / 180;
      const b1x = ax - sz * .6 * cos(tRad) + sz * .45 * cos(perpRad);
      const b1y = ay - sz * .6 * sin(tRad) + sz * .45 * sin(perpRad);
      const b2x = ax - sz * .6 * cos(tRad) - sz * .45 * cos(perpRad);
      const b2y = ay - sz * .6 * sin(tRad) - sz * .45 * sin(perpRad);
      return `<polygon points="${tipX},${tipY} ${b1x},${b1y} ${b2x},${b2y}" fill="rgba(246,243,238,.18)"/>`;
    }).join('');
    const orbitSvg = `<circle class="weflair-ring-orbit" cx="${cx}" cy="${cy}" r="${orbitR}"/>${orbitArrows}`;

    const ringSvg = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      ${orbitSvg}
      ${hubSvg}
      ${segmentsSvg}
      ${labelsSvg}
    </svg>`;

    /* callout boxes — distinct copy from left panel, positioned evenly */
    const calloutPositions = [
      { left: '50%', top: '-3%' },    /* Find the lever — dead center top */
      { left: '100%', top: '20%' },   /* Set the plan — upper right */
      { left: '95%', top: '85%' },    /* Build the engine — lower right */
      { left: '5%', top: '85%' },     /* Launch & optimize — lower left */
      { left: '0%', top: '20%' },     /* Scale what works — upper left */
    ];
    const calloutsHtml = s.map((stage, i) => {
      const pos = calloutPositions[i];
      return `<div class="weflair-callout${i === 0 ? ' is-active' : ''}" data-callout-index="${i}" style="left:${pos.left};top:${pos.top}"><span class="weflair-callout__dot" style="background:${stage.color}"></span>${stage.callout}</div>`;
    }).join('');

    /* left step list */
    const connector = `<div class="weflair-step__connector"><svg viewBox="0 0 10 14" fill="none"><path d="M5 0v10M2.5 8l2.5 3 2.5-3" stroke="currentColor" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
    const loopBack = `<div class="weflair-step__loop"><svg viewBox="0 0 16 16" fill="none"><path d="M13 8A5 5 0 1 1 8 3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M10 1l-2 2 2 2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Repeat</span></div>`;

    const stepsHtml = s.map((stage, i) => {
      const step = `<div class="weflair-step${i === 0 ? ' is-active' : ''}" data-step-index="${i}"><div class="weflair-step__num" style="background:${stage.color}20;border:1px solid ${stage.color}40;color:${stage.color}">${i + 1}</div><div class="weflair-step__body"><p class="weflair-step__name" style="--step-color:${stage.color}">${stage.name}</p><p class="weflair-step__desc">${stage.sentence}</p><div class="weflair-step__tags">${stage.tags.map(t => `<span class="weflair-step__tag" style="color:${stage.color}AA;border:1px solid ${stage.color}1A;background:${stage.color}08">${t}</span>`).join('')}</div></div></div>`;
      if (i < n - 1) return step + connector;
      return step + loopBack;
    }).join('');

    section.innerHTML = `<div class="container"><div class="weflair-challenges__row-text"><div class="weflair-challenges__col-eyebrow">${eyebrow(
      CONTENT.method.eyebrow
    )}</div><div class="weflair-challenges__col-text"><h2 class="h3">${CONTENT.method.title}</h2><p class="weflair-section__body">${CONTENT.method.body}</p></div></div><div class="weflair-ring-split"><div class="weflair-steps">${stepsHtml}</div><div class="weflair-ring-wrap"><div class="weflair-ring-visual">${ringSvg}</div>${calloutsHtml}</div></div></div>`;
  }

  function renderTeamSection(section) {
    const firstPod = CONTENT.team.pods[0];
    section.id = "team";
    section.className = "demand-team weflair-section";
    section.innerHTML = `<div class="container"><div class="weflair-section__head">${eyebrow(
      CONTENT.team.eyebrow
    )}<h2 class="h3">${CONTENT.team.titleHtml}</h2><p class="weflair-section__body">${CONTENT.team.body}</p><p class="weflair-demand-team__support">${CONTENT.team.support}</p></div><div class="weflair-demand-team__tabs">${CONTENT.team.pods
      .map(
        (pod, index) =>
          `<button type="button" class="weflair-demand-team__tab${
            index === 0 ? " is-active" : ""
          }" data-pod-index="${index}" aria-pressed="${
            index === 0 ? "true" : "false"
          }" aria-controls="team-pod-detail"><span class="weflair-demand-team__tab-icon">${teamTabIcon(
            pod.icon
          )}</span><span class="weflair-demand-team__tab-label">${pod.name}</span></button>`
      )
      .join("")}</div><div id="team-pod-detail" data-pod-detail>${teamPanelMarkup(
      firstPod
    )}</div></div>`;
  }

  function renderResultsSection(anchor) {
    let section = q("#results");
    if (!section) {
      section = document.createElement("section");
      anchor.insertAdjacentElement("afterend", section);
    }
    section.id = "results";
    section.className = "weflair-section weflair-case-studies-section";
    section.innerHTML = `<div class="container"><div class="weflair-section__head">${eyebrow(
      CONTENT.results.eyebrow
    )}<h2 class="h3">${CONTENT.results.titleHtml || CONTENT.results.title}</h2><p class="weflair-section__body">${CONTENT.results.body}</p></div><div class="weflair-case-studies__filters" role="toolbar" aria-label="Case study filters">${CONTENT.results.filters
      .map(
        (filter) =>
          `<button type="button" class="weflair-case-studies__filter${
            filter === _activeResultsFilter ? " is-active" : ""
          }" data-case-filter="${filter}" aria-pressed="${
            filter === _activeResultsFilter ? "true" : "false"
          }">${filter}</button>`
      )
      .join("")}</div><div class="weflair-case-studies__frame"><div data-case-panel></div><div class="weflair-case-studies__footer"><div class="weflair-case-studies__footer-meta"><span class="weflair-case-studies__progress" data-case-progress></span><span class="weflair-case-studies__status" data-case-filter-status></span></div><div class="weflair-case-studies__footer-actions">${button(
      CONTENT.results.moreLabel,
      CONTENT.results.moreHref || "cases.html",
      "ghost"
    )}<div class="weflair-case-studies__nav"><button type="button" class="weflair-case-studies__nav-btn" data-case-nav="prev" aria-label="Previous case study">${resultsNavIcon(
      "prev"
    )}</button><button type="button" class="weflair-case-studies__nav-btn" data-case-nav="next" aria-label="Next case study">${resultsNavIcon(
      "next"
    )}</button></div></div></div></div></div>`;
    renderActiveCaseStudy();
    return section;
  }

  function renderTestimonialsSection(section) {
    section.id = "testimonials";
    section.className = "quotes-slider weflair-section weflair-results-testimonials";
    const loopedTestimonials = [...CONTENT.results.testimonials, ...CONTENT.results.testimonials];
    section.innerHTML = `<div class="container"><div class="weflair-results-testimonials__rail"><div class="weflair-results-testimonials__slider"><div class="weflair-results-testimonials__track" data-testimonial-track>${loopedTestimonials
      .map((item) => testimonialCardMarkup(item))
      .join("")}</div></div></div></div>`;
    requestAnimationFrame(() => syncTestimonialNav(section));
  }

  function renderCompareSection(section) {
    section.id = "comparison";
    section.className = "compare weflair-section";
    section.innerHTML = `<div class="container"><div class="weflair-section__head">${eyebrow(
      CONTENT.comparison.eyebrow
    )}<h2 class="h3">${CONTENT.comparison.title}</h2><p class="weflair-section__body">${CONTENT.comparison.body}</p></div><div class="weflair-compare-grid"><div class="weflair-compare-col"><h3 class="h5 is--center">${CONTENT.comparison.left}</h3>${CONTENT.comparison.rows
      .map(
        ([left]) =>
          `<div class="weflair-compare-item"><span class="weflair-compare-mark is-bad"></span><p class="compare__p">${left}</p></div>`
      )
      .join("")}</div><div class="weflair-compare-col"><h3 class="h5 is--center">${CONTENT.comparison.right}</h3>${CONTENT.comparison.rows
      .map(
        ([, right]) =>
          `<div class="weflair-compare-item"><span class="weflair-compare-mark is-good"></span><p class="compare__p">${right}</p></div>`
      )
      .join("")}</div></div></div>`;
  }

  function processStepIcon(num) {
    const icons = {
      '01': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
      '02': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
      '03': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
      '04': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      '05': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    };
    return icons[num] || '';
  }

  function renderProcessSection(section) {
    section.id = "process";
    section.className = "weflair-section weflair-process";
    const d = CONTENT.process;

    const stepsHtml = d.steps.map(step => `<div class="weflair-process__step"><span class="weflair-process__num">${step.num}</span><span class="weflair-process__icon">${processStepIcon(step.num)}</span><div><span class="weflair-process__title" data-num="${step.num}">${step.title}</span><span class="weflair-process__time">${step.time}</span></div><p class="weflair-process__body">${step.body}</p></div>`).join('');

    section.innerHTML = `<div class="container"><div class="weflair-process__layout"><div class="weflair-process__head"><div class="weflair-section__head">${eyebrow(d.eyebrow)}<h2 class="h3">${d.title}</h2><p class="weflair-section__body">${d.body}</p></div></div><div class="weflair-process__steps">${stepsHtml}</div></div></div>`;
  }

  function footerSocialIcon(type) {
    const icons = {
      instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
      linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
      x: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    };
    return icons[type] || '';
  }

  function renderFooter(section) {
    const d = CONTENT.footer;
    section.className = "footer weflair-footer";

    const ctaHtml = `<div class="weflair-footer__cta-banner" id="audit"><div class="container"><div class="weflair-footer__cta-inner">${eyebrow(
      d.cta.eyebrow, true
    )}<h2 class="h3">${d.cta.title}</h2><p class="weflair-section__body">${d.cta.body}</p><p class="weflair-section__body is--muted">${d.cta.reassurance}</p>${button(
      d.cta.ctaLabel, "#audit", "primary"
    )}</div></div></div>`;

    const infoColsHtml = d.columns.map(col => {
      const body = col.links
        ? col.links.map(l => `<a href="${l.href}" class="weflair-footer__contact-link">${l.label}</a>`).join('')
        : col.lines.map(l => `<p class="weflair-footer__info-line">${l}</p>`).join('');
      return `<div class="weflair-footer__info-col"><h4 class="weflair-footer__col-heading">${col.heading}</h4>${body}</div>`;
    }).join('');

    const navCol = (data) => {
      const links = data.links.map(l => `<li><a href="${l.href}" class="weflair-footer__nav-link">${l.label}</a></li>`).join('');
      return `<div class="weflair-footer__nav-col"><h4 class="weflair-footer__col-heading">${data.heading}</h4><ul class="weflair-footer__nav-list">${links}</ul></div>`;
    };

    const navColsHtml = [d.services, d.expertise, d.resources, d.company].map(navCol).join('');

    const socialHtml = d.social.map(s =>
      `<a href="${s.href}" class="weflair-footer__social-link" aria-label="${s.label}" target="_blank" rel="noopener noreferrer">${footerSocialIcon(s.icon)}</a>`
    ).join('');

    const legalLinksHtml = d.legal.links.map(l =>
      `<a href="${l.href}" class="weflair-footer__legal-link">${l.label}</a>`
    ).join('');

    section.innerHTML = `${ctaHtml}<div class="weflair-footer__main"><div class="container"><div class="weflair-footer__top"><div class="weflair-footer__info-row">${infoColsHtml}</div><div class="weflair-footer__nav-row">${navColsHtml}</div></div><div class="weflair-footer__divider"></div><div class="weflair-footer__bottom"><div class="weflair-footer__legal"><span class="weflair-footer__copyright">${d.legal.copyright}</span>${legalLinksHtml}</div><div class="weflair-footer__social">${socialHtml}</div></div></div></div>`;
  }

  function renderPod(index) {
    const detail = q("[data-pod-detail]");
    const pod = CONTENT.team.pods[index];
    if (!detail || !pod) return;
    qa("[data-pod-index]").forEach((buttonNode, buttonIndex) => {
      const isActive = buttonIndex === index;
      buttonNode.classList.toggle("is-active", isActive);
      buttonNode.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    detail.innerHTML = teamPanelMarkup(pod);
  }

  let _activeRing = 0;

  function renderMethod(index) {
    if (index === _activeRing) return;
    _activeRing = index;
    const stages = CONTENT.method.stages;
    const stage = stages[index];
    if (!stage) return;

    qa('[data-step-index]').forEach((el, i) => {
      el.classList.toggle('is-active', i === index);
      el.querySelector('.weflair-step__name').style.color = i === index ? stages[i].color : '';
    });

    qa('[data-ring-index]').forEach((seg, i) => {
      const c = stages[i].color;
      const path = seg.querySelector('path');
      seg.classList.toggle('is-active', i === index);
      if (path) {
        path.setAttribute('fill', i === index ? c + '44' : c + '22');
        path.setAttribute('stroke', i === index ? c : c + '55');
      }
    });

    qa('[data-callout-index]').forEach((el, i) => el.classList.toggle('is-active', i === index));
  }

  function wireInteractions() {
    qa("[data-pod-index]").forEach((node) => {
      if (node.dataset.wireReady) return;
      node.dataset.wireReady = "true";
      node.addEventListener("click", () => renderPod(Number(node.dataset.podIndex)));
    });
    /* --- ring segments --- */
    qa('[data-ring-index]').forEach((node) => {
      if (node.dataset.wireReady) return;
      node.dataset.wireReady = 'true';
      node.addEventListener('mouseenter', () => renderMethod(Number(node.dataset.ringIndex)));
      node.addEventListener('click', () => renderMethod(Number(node.dataset.ringIndex)));
    });
    /* --- left-side steps --- */
    qa('[data-step-index]').forEach((node) => {
      if (node.dataset.wireReady) return;
      node.dataset.wireReady = 'true';
      node.addEventListener('mouseenter', () => renderMethod(Number(node.dataset.stepIndex)));
      node.addEventListener('click', () => renderMethod(Number(node.dataset.stepIndex)));
    });
    qa("[data-case-filter]").forEach((node) => {
      if (node.dataset.wireReady) return;
      node.dataset.wireReady = "true";
      node.addEventListener("click", () => {
        _activeResultsFilter = node.dataset.caseFilter || "All Cases";
        _activeResultsIndex = 0;
        renderActiveCaseStudy();
      });
    });
    qa("[data-case-nav]").forEach((node) => {
      if (node.dataset.wireReady) return;
      node.dataset.wireReady = "true";
      node.addEventListener("click", () => {
        const filteredCards = getFilteredResults();
        const totalPages = getResultsPageCount(filteredCards);
        if (totalPages <= 1) return;
        const direction = node.dataset.caseNav === "prev" ? -1 : 1;
        _activeResultsIndex =
          (_activeResultsIndex + direction + totalPages) % totalPages;
        renderActiveCaseStudy();
      });
    });
    qa("[data-testimonial-track]").forEach((node) => {
      if (node.dataset.wireReady) return;
      node.dataset.wireReady = "true";
      node.addEventListener("scroll", () => {
        syncTestimonialNav(node.closest("#testimonials"));
      });
    });
    qa("[data-testimonial-nav]").forEach((node) => {
      if (node.dataset.wireReady) return;
      node.dataset.wireReady = "true";
      node.addEventListener("click", () => {
        const section = q("#testimonials");
        const track = q("[data-testimonial-track]", section);
        if (!track) return;
        const direction = node.dataset.testimonialNav === "prev" ? -1 : 1;
        const step = Math.max(320, Math.round(track.clientWidth * 0.72));
        const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
        const nextLeft = Math.max(
          0,
          Math.min(maxScroll, track.scrollLeft + step * direction)
        );
        track.scrollLeft = nextLeft;
        syncTestimonialNav(section);
        setTimeout(() => syncTestimonialNav(section), 120);
      });
    });
    if (!document.documentElement.dataset.testimonialResizeReady) {
      document.documentElement.dataset.testimonialResizeReady = "true";
      window.addEventListener("resize", () => syncTestimonialNav());
    }
    syncTestimonialNav();
  }

  function applyTransforms() {
    document.title = "WeFlair - Growth Marketing Agency";
    injectRuntimeStyles();
    replaceLogo();
    updateNav();
    transformHero();

    const logosSection = q(".home-results");
    const servicesSection = q(".services-overview");
    const expertiseSection = q(".home-expertise");
    const teamSection = q(".demand-team");
    const testimonialsSection = q(".quotes-slider");
    const compareSection = q(".compare");
    const footerSection = q(".footer");

    if (!logosSection || !servicesSection || !expertiseSection || !teamSection || !testimonialsSection || !compareSection || !footerSection) {
      return false;
    }

    renderLogosSection(logosSection);
    renderServicesSection(servicesSection);

    let problemsSection = q("#problems");
    if (!problemsSection) {
      problemsSection = document.createElement("section");
      servicesSection.insertAdjacentElement("afterend", problemsSection);
    }
    problemsSection.id = "problems";
    problemsSection.className = "weflair-section weflair-challenges";
    renderProblemsSection(problemsSection);

    renderMethodSection(expertiseSection);
    renderTeamSection(teamSection);

    let processSection = q("#process");
    if (!processSection) {
      processSection = document.createElement("section");
      teamSection.insertAdjacentElement("afterend", processSection);
    }
    renderProcessSection(processSection);

    renderResultsSection(processSection);
    renderTestimonialsSection(testimonialsSection);
    renderCompareSection(compareSection);
    renderFooter(footerSection);
    renderPod(0);
    wireInteractions();
    wireAuditWidget();
    return true;
  }

  function bootStaticHomepage() {
    document.title = "WeFlair - Growth Marketing Agency";
    if (q("[data-pod-detail]")) {
      renderPod(0);
    }
    if (q("#results [data-case-panel]")) {
      renderActiveCaseStudy();
    }
    if (q("[data-ring-index]")) {
      renderMethod(0);
    }
    wireInteractions();
    wireAuditWidget();
    syncTestimonialNav();
    return true;
  }

  function schedule() {
    if (document.body?.dataset.weflairStatic === "true") {
      const init = () => {
        bootStaticHomepage();
      };
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
      } else {
        init();
      }
      return;
    }
    let attempts = 0;
    const tick = () => {
      attempts += 1;
      applyTransforms();
      if (attempts < 40) {
        window.setTimeout(tick, 400);
      }
    };
    tick();
    window.addEventListener("load", applyTransforms);
    document.addEventListener("readystatechange", applyTransforms);
  }

  window.__weflairDapper = { applyTransforms };
  schedule();
})();
