(() => {
  const FLARE_PATH =
    "M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z";

  const LOGOS = [
    {
      type: "image",
      label: "CellPoint Digital",
      src: "./brand-assets/client-logos/cellpoint-digital.png",
      size: "xl",
      width: "104%",
      height: "90%",
    },
    {
      type: "image",
      label: "HQ Software",
      src: "./brand-assets/client-logos/hq-software.png",
      size: "xl",
      width: "102%",
      height: "78%",
    },
    {
      type: "image",
      label: "EMAX",
      src: "./brand-assets/client-logos/emax.png",
      size: "xl",
      width: "98%",
      height: "78%",
    },
    {
      type: "image",
      label: "Harrier",
      src: "./brand-assets/client-logos/harrier-white.png",
      size: "xl",
      width: "98%",
      height: "74%",
    },
    {
      type: "image",
      label: "RCT",
      src: "./brand-assets/client-logos/rct.png",
      size: "xl",
      width: "106%",
      height: "78%",
    },
    {
      type: "image",
      label: "Mawsim",
      src: "./brand-assets/client-logos/mawsim.png",
      size: "xl",
      width: "104%",
      height: "84%",
    },
    {
      type: "image",
      label: "Molahin",
      src: "./brand-assets/client-logos/molahin.png",
      size: "xl",
      width: "102%",
      height: "78%",
    },
    {
      type: "image",
      label: "Farnell",
      src: "./brand-assets/client-logos/farnell.png",
      size: "xl",
      width: "160%",
      height: "110%",
    },
    {
      type: "image",
      label: "CPC",
      src: "./brand-assets/client-logos/cpc.png",
      size: "xl",
      width: "152%",
      height: "108%",
    },
    {
      type: "image",
      label: "Santander",
      src: "./brand-assets/client-logos/santander.png",
      size: "xl",
      width: "160%",
      height: "112%",
    },
    {
      type: "image",
      label: "Royal Mint",
      src: "./brand-assets/client-logos/royal-mint.png",
      size: "xl",
      width: "158%",
      height: "114%",
    },
    {
      type: "image",
      label: "Focus DIY",
      src: "./brand-assets/client-logos/focus-diy.png",
      size: "xl",
      width: "152%",
      height: "108%",
    },
    {
      type: "image",
      label: "JDW",
      src: "./brand-assets/client-logos/jdw.png",
      size: "xl",
      width: "158%",
      height: "110%",
    },
    {
      type: "image",
      label: "Jacamo",
      src: "./brand-assets/client-logos/jacamo.png",
      size: "xl",
      width: "158%",
      height: "100%",
    },
    {
      type: "image",
      label: "Pink Boutique",
      src: "./brand-assets/client-logos/pink-boutique.png",
      size: "xl",
      width: "154%",
      height: "110%",
    },
    {
      type: "image",
      label: "The Fragrance Shop",
      src: "./brand-assets/client-logos/fragrance-shop.png",
      size: "xl",
      width: "160%",
      height: "114%",
    },
    {
      type: "image",
      label: "The Conran Shop",
      src: "./brand-assets/client-logos/conran-shop.png",
      size: "xl",
      width: "158%",
      height: "108%",
    },
    {
      type: "image",
      label: "TOFS",
      src: "./brand-assets/client-logos/tofs.png",
      size: "xl",
      width: "150%",
      height: "110%",
    },
    {
      type: "image",
      label: "Yours",
      src: "./brand-assets/client-logos/yours.png",
      size: "xl",
      width: "154%",
      height: "108%",
    },
  ];

  const SITE_ORIGIN = "https://weflair.com";
  const ROUTES = {
    home: "/index.html",
    about: "/about.html",
    careers: "/careers.html",
    contact: "/contact.html",
    blog: "/blog.html",
    results: "/cases.html",
    sitemap: "/sitemap.html",
    servicesPaid: "/services/paid-media-performance.html",
    servicesOutbound: "/services/outbound-gtm.html",
    servicesRevops: "/services/revops-ai.html",
    servicesContent: "/services/content-seo.html",
    servicesCro: "/services/cro-performance-design.html",
    servicesStrategy: "/services/strategy-creative.html",
    expertiseSaas: "/expertise/b2b-saas.html",
    expertiseServices: "/expertise/b2b-services.html",
    expertiseHardware: "/expertise/b2b-hardware.html",
    expertiseFintech: "/expertise/fintech.html",
    expertiseEcommerce: "/expertise/ecommerce.html",
    resourcesGuides: "/resources/guides.html",
    resourcesPlaybooks: "/resources/playbooks.html",
    resourcesAiTools: "/resources/ai-tools.html",
    resourcesCalculators: "/resources/calculators.html",
    legalPrivacy: "/legal/privacy.html",
    legalTerms: "/legal/terms.html",
  };

  const CAL_NAMESPACE = "contact";
  const CAL_ORIGIN = "";
  const CAL_LINK = "";
  const CAL_DIRECT_URL = ROUTES.contact;
  const CAL_CONFIG = '{"layout":"week_view","useSlotsViewOnSmallScreen":"true"}';

  const CONTENT = {
    hero: {
      eyebrow: "Growth Marketing Agency",
      titleHtml:
        'We build <span class="weflair-hero__accent">hyper-relevant</span> marketing engines for <span class="weflair-section-accent weflair-section-accent--solid">today&rsquo;s customers.</span>',
      body:
        "For ambitious companies facing real go-to-market and revenue challenges, we build end-to-end marketing engines to drive measurable growth.",
      primary: "Discover more",
    },
    logos: {
      title: "Sales and marketing leaders in ambitious companies worldwide trust WeFlair.",
    },
    nav: {
      services: [
        ["Paid Media & Performance", "Campaigns tied to qualified revenue."],
        ["Outbound & GTM Engineering", "Signals, sequencing, and GTM logic."],
        ["Revenue Operations & AI Workflows", "Routing, dashboards, and AI-enabled automation."],
        ["Strategy & Creative", "Offers, messaging, and creative direction that sharpen demand."],
        ["Content & SEO", "Content systems and search visibility that compound pipeline."],
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
        ["Case Studies", "Proof that the systems work in the real world."],
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
          title: "Revenue Operations & AI Workflows",
          body: "Connected CRM, routing, and AI-enabled automation that keep growth moving without manual drag.",
          tags: ["HubSpot", "Routing", "AI Workflows"],
        },
        {
          title: "Content & Creative",
          body: "Clearer offers, sharper positioning, and creative direction that make you harder to ignore in your niche.",
          tags: ["Positioning", "Copywriting", "Design"],
        },
        {
          title: "Conversion Design & CRO",
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
          linkHref: ROUTES.servicesPaid,
          lead: { name: "Project Director", img: "https://i.pravatar.cc/150?u=lead1" },
          roles: [
            { label: "Media Buyer", img: "https://i.pravatar.cc/150?u=member1" },
            { label: "Creative", img: "https://i.pravatar.cc/150?u=member2" },
            { label: "Copywriter", img: "https://i.pravatar.cc/150?u=member3" },
            { label: "Analytics", img: "https://i.pravatar.cc/150?u=member4" }
          ],
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
          linkHref: ROUTES.servicesOutbound,
          lead: { name: "Head of Growth", img: "https://i.pravatar.cc/150?u=lead2" },
          roles: [
            { label: "Outbound SDR", img: "https://i.pravatar.cc/150?u=user5" },
            { label: "RevOps Engine", img: "https://i.pravatar.cc/150?u=user6" },
            { label: "AI Developer", img: "https://i.pravatar.cc/150?u=user7" },
            { label: "GTM Engineer", img: "https://i.pravatar.cc/150?u=user8" }
          ],
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
          linkHref: ROUTES.servicesRevops,
          lead: { name: "Head of Operations", img: "https://i.pravatar.cc/150?u=lead3" },
          roles: [
            { label: "CRM Expert", img: "https://i.pravatar.cc/150?u=user9" },
            { label: "Automation", img: "https://i.pravatar.cc/150?u=user10" },
            { label: "AI Engineer", img: "https://i.pravatar.cc/150?u=user11" }
          ],
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
          linkHref: ROUTES.servicesStrategy,
          lead: { name: "Creative Director", img: "https://i.pravatar.cc/150?u=lead4" },
          roles: [
            { label: "UX/UI Expert", img: "https://i.pravatar.cc/150?u=user12" },
            { label: "Graphic Designer", img: "https://i.pravatar.cc/150?u=user13" },
            { label: "Copywriter", img: "https://i.pravatar.cc/150?u=user14" },
            { label: "Project Manager", img: "https://i.pravatar.cc/150?u=user15" }
          ],
        },
      ],
    },
    results: {
      eyebrow: "Recent work",
      titleHtml:
        'Tailored Solutions,<br><span class="weflair-section-accent weflair-section-accent--solid">Tangible Results</span>',
      body:
        "Dive into real-world examples of how we've helped Ambitious brands reach new heights with data-driven strategies and expert execution.",
      moreHref: ROUTES.results,
      filters: [
        "B2B",
        "E-commerce",
        "Real Estate",
        "Logistics",
        "Web3",
        "SaaS",
        "Fintech",
      ],
      moreLabel: "See more success stories",
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
          highlights: [
            "Built signal workflows and lead scoring from scratch.",
            "Connected Apollo, HubSpot, and automation into one motion.",
            "Sharpened demo and executive follow-up infrastructure.",
            "Turned disconnected ops work into a growth foundation.",
          ],
          href: ROUTES.results,
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
          highlights: [
            "Rebuilt paid acquisition across Meta, Google, and Bing.",
            "Fixed tracking gaps with cleaner GA4 and GTM setup.",
            "Connected acquisition to lifecycle capture and follow-up.",
            "Scaled revenue without letting spend drift.",
          ],
          href: ROUTES.results,
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
          highlights: [
            "Refined audience strategy across Google, LinkedIn, and Meta.",
            "Localized messaging to match market intent more closely.",
            "Improved signup efficiency without muddying the offer.",
            "Turned media learning into measurable revenue growth.",
          ],
          href: ROUTES.results,
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
          highlights: [
            "Restructured search around closed-sale keyword patterns.",
            "Used Salesforce deal data to guide budget decisions.",
            "Reduced waste without shrinking commercial intent.",
            "Lifted efficiency while improving total deals.",
          ],
          href: ROUTES.results,
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
          highlights: [
            "Blended LinkedIn ads and outbound into one ABM motion.",
            "Improved targeting with Clay enrichment and segmentation.",
            "Sharpened messaging for higher-quality replies.",
            "Moved outreach from activity to real pipeline.",
          ],
          href: ROUTES.results,
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
          highlights: [
            "Combined investor outreach with Web3 media placements.",
            "Tailored messaging for higher-intent meeting conversion.",
            "Expanded visibility with coordinated crypto PR coverage.",
            "Turned attention into booked conversations.",
          ],
          href: ROUTES.results,
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
          highlights: [
            "Rolled out personalization across a global ecommerce journey.",
            "Improved UX flows for stronger self-serve buying behavior.",
            "Optimized APAC performance without breaking the wider system.",
            "Shifted more revenue through the web channel.",
          ],
          href: ROUTES.results,
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
      left: "What You Experience Now",
      right: "What You Experience With WeFlair",
      rows: [
        [
          "Monthly reports full of impressions and click data you can't action",
          "Quarterly business reviews showing pipeline influenced, CAC, and revenue attributed",
        ],
        [
          "Your account manager changes every 6 months. New person, same onboarding deck.",
          "Your dedicated senior strategist knows your business, your competitors, and your board metrics",
        ],
        [
          "Agency recommends the same playbook they use for every client",
          "Custom strategies built from your actual GSC data, competitor gaps, and market position",
        ],
        [
          "Agency says 'we use AI' but can't explain how",
          "Every WeFlair hire must pass an AI proficiency test - AI isn't hype here, it's a hiring requirement",
        ],
        [
          "Five vendors, five Slack channels, nobody owns the outcome",
          "One team across paid, outbound, RevOps, content, and CRO - with one point of contact",
        ],
        [
          "You ask what's working and get a traffic report",
          "You ask what's working and we show you pipeline sourced, deals influenced, and cost per opportunity",
        ],
        [
          "Scaling means adding headcount to the agency and paying for their ramp",
          "Scaling means deploying automations that multiply output without multiplying cost",
        ],
        [
          "Knowledge disappears when a freelancer or vendor churns",
          "Every workflow, playbook, and automation lives in your systems - you own it all",
        ],
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
        eyebrow: "",
        title: "Let's do this.",
        body: "Let's get in touch to see if we're a good fit to help you reach your business goals.",
        reassurance: "Free first-look audit. Clear next steps. No hard sell.",
        ctaLabel: "Get your free marketing audit",
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
          { label: "Paid Media & Performance", href: ROUTES.servicesPaid },
          { label: "Outbound & GTM", href: ROUTES.servicesOutbound },
          { label: "RevOps & AI", href: ROUTES.servicesRevops },
          { label: "Strategy & Creative", href: ROUTES.servicesStrategy },
          { label: "Content & SEO", href: ROUTES.servicesContent },
          { label: "CRO & Performance Design", href: ROUTES.servicesCro },
        ],
      },
      expertise: {
        heading: "Expertise",
        links: [
          { label: "B2B SaaS", href: ROUTES.expertiseSaas },
          { label: "B2B Services", href: ROUTES.expertiseServices },
          { label: "B2B Hardware", href: ROUTES.expertiseHardware },
          { label: "Fintech", href: ROUTES.expertiseFintech },
          { label: "E-commerce", href: ROUTES.expertiseEcommerce },
        ],
      },
      resources: {
        heading: "Resources",
        links: [
          { label: "Case Studies", href: ROUTES.results },
          { label: "Calculators", href: ROUTES.resourcesCalculators },
          { label: "Guides", href: ROUTES.resourcesGuides },
          { label: "Playbooks", href: ROUTES.resourcesPlaybooks },
          { label: "AI Tools", href: ROUTES.resourcesAiTools },
          { label: "Marketing Blog", href: ROUTES.blog },
        ],
      },
      company: {
        heading: "Company",
        links: [
          { label: "About Us", href: ROUTES.about },
          { label: "Careers", href: ROUTES.careers },
          { label: "Contact", href: ROUTES.contact },
        ],
      },
      legal: {
        copyright: "© 2026 WeFlair",
        links: [
          { label: "Privacy Policy", href: ROUTES.legalPrivacy },
          { label: "Terms and Conditions", href: ROUTES.legalTerms },
          { label: "Sitemap", href: ROUTES.sitemap },
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

  const PATH_ROUTE_MAP = {
    index: ROUTES.home,
    about: ROUTES.about,
    careers: ROUTES.careers,
    contact: ROUTES.contact,
    blog: ROUTES.blog,
    cases: ROUTES.results,
    sitemap: ROUTES.sitemap,
    "services/paid-media-performance": ROUTES.servicesPaid,
    "services/outbound-gtm": ROUTES.servicesOutbound,
    "services/revops-ai": ROUTES.servicesRevops,
    "services/content-seo": ROUTES.servicesContent,
    "services/cro-performance-design": ROUTES.servicesCro,
    "services/strategy-creative": ROUTES.servicesStrategy,
    "expertise/b2b-saas": ROUTES.expertiseSaas,
    "expertise/b2b-services": ROUTES.expertiseServices,
    "expertise/b2b-hardware": ROUTES.expertiseHardware,
    "expertise/fintech": ROUTES.expertiseFintech,
    "expertise/ecommerce": ROUTES.expertiseEcommerce,
    "resources/guides": ROUTES.resourcesGuides,
    "resources/playbooks": ROUTES.resourcesPlaybooks,
    "resources/ai-tools": ROUTES.resourcesAiTools,
    "resources/calculators": ROUTES.resourcesCalculators,
    "legal/privacy": ROUTES.legalPrivacy,
    "legal/terms": ROUTES.legalTerms,
  };

  const LABEL_ROUTE_MAP = {
    "paid media performance": ROUTES.servicesPaid,
    "outbound gtm engineering": ROUTES.servicesOutbound,
    "outbound gtm": ROUTES.servicesOutbound,
    "revenue operations ai workflows": ROUTES.servicesRevops,
    "revenue operations ai": ROUTES.servicesRevops,
    "revenue operations automations": ROUTES.servicesRevops,
    "revops ai": ROUTES.servicesRevops,
    "strategy creative": ROUTES.servicesStrategy,
    "content creative": ROUTES.servicesStrategy,
    "content seo": ROUTES.servicesContent,
    "cro performance design": ROUTES.servicesCro,
    "conversion design cro": ROUTES.servicesCro,
    "conversion design and cro": ROUTES.servicesCro,
    "b2b saas": ROUTES.expertiseSaas,
    "b2b services": ROUTES.expertiseServices,
    "b2b hardware": ROUTES.expertiseHardware,
    fintech: ROUTES.expertiseFintech,
    ecommerce: ROUTES.expertiseEcommerce,
    "e commerce": ROUTES.expertiseEcommerce,
    "case studies": ROUTES.results,
    calculators: ROUTES.resourcesCalculators,
    guides: ROUTES.resourcesGuides,
    playbooks: ROUTES.resourcesPlaybooks,
    "ai tools": ROUTES.resourcesAiTools,
    "marketing blog": ROUTES.blog,
    "about us": ROUTES.about,
    careers: ROUTES.careers,
    contact: ROUTES.contact,
    sitemap: ROUTES.sitemap,
    "privacy policy": ROUTES.legalPrivacy,
    "terms and conditions": ROUTES.legalTerms,
    "discover all our resources": ROUTES.sitemap,
    "discover all resources": ROUTES.sitemap,
    "see more success stories": ROUTES.results,
    "explore all case studies": ROUTES.results,
    "read the full case study": ROUTES.results,
    "read more": ROUTES.results,
    "book intro call": ROUTES.contact,
    "book a free growth audit": ROUTES.contact,
    "book your free strategy call": ROUTES.contact,
    "request a growth audit": ROUTES.contact,
    "get your free marketing audit": ROUTES.contact,
    "talk to us": ROUTES.contact,
  };

  const CONTACT_HASHES = new Set([
    "#audit",
    "#book",
    "#book-starter",
    "#book-growth",
    "#book-enterprise",
    "#contact",
  ]);

  const HOMEPAGE_HASHES = new Set([
    "#hero",
    "#logos",
    "#services",
    "#problems",
    "#method",
    "#team",
    "#process",
    "#results",
    "#testimonials",
    "#comparison",
    "#playbooks",
  ]);

  function normalizeLabel(value = "") {
    return value
      .replace(/&/g, " and ")
      .replace(/[\u2013\u2014]/g, " ")
      .replace(/[^\w\s]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function routeForLabel(label = "") {
    return LABEL_ROUTE_MAP[normalizeLabel(label)] || "";
  }

  function mapKnownPath(rawPath = "") {
    const cleaned = rawPath
      .replace(/^[a-z]+:\/\/[^/]+/i, "")
      .replace(/^\/+/, "")
      .replace(/^(\.\/)+/, "")
      .replace(/^(?:\.\.\/)+/, "")
      .replace(/\.html$/i, "")
      .replace(/\/+$/, "")
      .toLowerCase();
    return PATH_ROUTE_MAP[cleaned] || "";
  }

  function resolveInternalHref(href = "", label = "") {
    const rawHref = href.trim();
    if (!rawHref) return routeForLabel(label) || rawHref;
    if (/^(mailto:|tel:|javascript:|https?:|\/\/)/i.test(rawHref)) return rawHref;
    if (rawHref.startsWith("#")) {
      const hash = rawHref.toLowerCase();
      if (CONTACT_HASHES.has(hash)) return ROUTES.contact;
      if (HOMEPAGE_HASHES.has(hash)) {
        if (q(hash)) return hash;
        return routeForLabel(label) || (hash === "#results" ? ROUTES.results : `${ROUTES.home}${hash}`);
      }
      return routeForLabel(label) || ROUTES.contact;
    }

    const [pathPart, hashPart] = rawHref.split("#");
    const mapped = mapKnownPath(pathPart);
    if (mapped) {
      const hash = hashPart ? `#${hashPart.toLowerCase()}` : "";
      if (hash && mapped === ROUTES.home && HOMEPAGE_HASHES.has(hash)) {
        return `${mapped}${hash}`;
      }
      return mapped;
    }

    return routeForLabel(label) || rawHref;
  }

  function appendSitemapLink(container, className, inlineStyles = null) {
    if (!container || container.querySelector(`a[href="${ROUTES.sitemap}"]`)) return;
    const link = document.createElement("a");
    link.href = ROUTES.sitemap;
    link.textContent = "Sitemap";
    if (className) link.className = className;
    if (inlineStyles) Object.assign(link.style, inlineStyles);
    container.appendChild(link);
  }

  function normalizeSiteLinks(scope = document) {
    qa("a[href]", scope).forEach((link) => {
      const label =
        q(".btn__span", link)?.textContent ||
        link.getAttribute("aria-label") ||
        link.getAttribute("title") ||
        link.textContent ||
        "";
      const currentHref = link.getAttribute("href") || "";
      const nextHref = resolveInternalHref(currentHref, label);
      if (nextHref && nextHref !== currentHref) {
        link.setAttribute("href", nextHref);
      }
      if (nextHref === ROUTES.contact) {
        [
          "data-cal-link",
          "data-cal-namespace",
          "data-cal-config",
          "data-cal-source",
          "aria-haspopup",
        ].forEach((attr) => link.removeAttribute(attr));
      }
    });

    appendSitemapLink(q(".weflair-footer__legal"), "weflair-footer__legal-link");
    const simpleLegal = qa("footer div").find(
      (node) =>
        /privacy policy/i.test(node.textContent || "") &&
        /terms/i.test(node.textContent || "")
    );
    appendSitemapLink(simpleLegal, "", {
      color: "rgba(246,243,238,.36)",
      textDecoration: "none",
      fontSize: ".78rem",
    });
  }

  function renderThemeSwitch() {
    return `<div class="theme-switch"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 64 128" fill="none" class="theme-switch__svg"><path d="M64 8C64 3.58172 60.4183 0 56 0H40C35.5817 0 32 3.58172 32 8V32C32 36.4183 28.4183 40 24 40H8C3.58172 40 0 43.5817 0 48V80C0 84.4183 3.58172 88 8 88H24C28.4183 88 32 91.5817 32 96V120C32 124.418 35.5817 128 40 128H56C60.4183 128 64 124.418 64 120V8Z" fill="currentColor"></path></svg><div class="theme-switch__wrap"><div class="theme-switch__icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="theme-switch__icon-svg"><path d="M9.99967 1.82001C10.0345 1.82 10.069 1.82221 10.1032 1.82655H10.3214C10.6578 1.82655 10.9599 2.03245 11.0829 2.34555C11.2059 2.65864 11.1248 3.01512 10.8783 3.24411C9.96741 4.09055 9.38187 5.22945 9.22353 6.46283C9.06519 7.6962 9.34406 8.94607 10.0117 9.99517C10.6792 11.0443 11.6934 11.8263 12.8777 12.2052C14.062 12.5842 15.3417 12.5361 16.4943 12.0695C16.8001 11.9456 17.1504 12.0176 17.3826 12.2519C17.6148 12.4863 17.6836 12.8372 17.5569 13.1418C16.9885 14.5095 16.0595 15.6973 14.8689 16.5784C13.6784 17.4595 12.271 18.001 10.7969 18.1449C9.32273 18.2889 7.83718 18.03 6.49866 17.3958C5.16014 16.7617 4.01886 15.7761 3.19657 14.5442C2.37427 13.3123 1.90181 11.8803 1.82956 10.4009C1.75732 8.92151 2.08802 7.45028 2.78637 6.14411C3.48472 4.83794 4.52454 3.74585 5.79491 2.98431C7.06527 2.22277 8.51853 1.82036 9.99967 1.82001Z" fill="currentColor"></path></svg></div><div class="theme-switch__icon is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" class="theme-switch__icon-svg"><circle cx="10" cy="10" r="3.2" fill="currentColor"></circle><path d="M10 1.9V3.8M10 16.2V18.1M3.8 10H1.9M18.1 10H16.2M4.1 4.1L5.5 5.5M14.5 14.5L15.9 15.9M15.9 4.1L14.5 5.5M5.5 14.5L4.1 15.9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"></path></svg></div><button data-theme-toggle="" class="theme-switch__button" aria-pressed="false" aria-label="Switch to light theme">Switch Theme</button></div><div class="noise is--small"></div></div>`;
  }

  function syncInjectedThemeButtons(scope = document) {
    const isLight = document.body?.getAttribute("data-theme") === "light";
    qa("[data-theme-toggle]", scope).forEach((button) => {
      button.setAttribute("aria-pressed", String(isLight));
      button.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
      );
    });
  }

  function mountInjectedThemeButtons(scope = document) {
    qa("[data-theme-toggle]", scope).forEach((button) => {
      if (button.dataset.codexThemeMounted === "true") return;
      button.dataset.codexThemeMounted = "true";
      button.addEventListener("click", () => {
        const nextTheme =
          document.body?.getAttribute("data-theme") === "light" ? "dark" : "light";
        document.body?.setAttribute("data-theme", nextTheme);
        document.documentElement?.setAttribute("data-theme", nextTheme);
        try {
          localStorage.setItem("weflair-theme", nextTheme);
        } catch (_error) {
          // Ignore storage failures in static preview mode.
        }
        syncInjectedThemeButtons(document);
      });
    });
    syncInjectedThemeButtons(scope);
  }

  function mountInjectedShellClosers(scope = document) {
    qa('[data-navigation-toggle="close"]', scope).forEach((closer) => {
      if (closer.dataset.codexNavMounted === "true") return;
      closer.dataset.codexNavMounted = "true";
      closer.addEventListener("click", () => {
        document.body?.setAttribute("data-navigation-status", "not-active");
        document.documentElement?.setAttribute("data-navigation-status", "not-active");
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        qa('[data-navigation-toggle="toggle"]').forEach((toggle) => {
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Open navigation menu");
          toggle.setAttribute("role", "button");
          if (!toggle.hasAttribute("tabindex")) toggle.setAttribute("tabindex", "0");
        });
        qa("[data-dropdown-status]").forEach((dropdown) => {
          dropdown.setAttribute("data-dropdown-status", "not-active");
          const trigger = q("[data-dropdown-click]", dropdown);
          if (trigger) trigger.setAttribute("aria-expanded", "false");
        });
      });
    });
  }

  function ensurePageShell() {
    if (!document.body) return;
    if (!document.body.hasAttribute("data-navigation-status")) {
      document.body.setAttribute("data-navigation-status", "not-active");
    }

    const main = q("main.main");
    if (!main) {
      mountInjectedThemeButtons();
      return;
    }

    let shell = q(".floating-elements-main", main);
    if (!shell) {
      const directHeader = Array.from(document.body.children).find((node) =>
        node.matches?.("header.header")
      );
      if (directHeader) {
        shell = document.createElement("div");
        shell.className = "floating-elements-main";
        main.prepend(shell);
        shell.appendChild(directHeader);
      }
    }

    if (!shell) {
      mountInjectedThemeButtons();
      return;
    }

    if (!q(".calc-header-padding-height", shell)) {
      const spacer = document.createElement("div");
      spacer.className = "calc-header-padding-height";
      shell.prepend(spacer);
    }

    if (!q(".nav-fade", shell)) {
      const fade = document.createElement("div");
      fade.className = "nav-fade";
      fade.dataset.navigationToggle = "close";
      const header = q("header.header", shell);
      if (header) {
        header.before(fade);
      } else {
        shell.prepend(fade);
      }
    }

    if (!q(".theme-switch", shell)) {
      shell.insertAdjacentHTML("beforeend", renderThemeSwitch());
    }

    mountInjectedShellClosers(shell);
    mountInjectedThemeButtons(shell);
  }

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

  function diagonalArrowMarkup() {
    return `<div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M7 17L17 7" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M9 7H17V15" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M7 17L17 7" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M9 7H17V15" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div>`;
  }

  function button(label, href, variant = "primary", arrowType = "default") {
    const arrow = arrowType === "diagonal" ? diagonalArrowMarkup() : arrowMarkup();
    return `<a data-hover="" data-btn-theme="${
      variant === "ghost" ? "transparent" : "primary"
    }" href="${href}" class="btn w-inline-block weflair-btn weflair-btn--${variant}"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">${label}</span></div>${arrow}</a>`;
  }

  function calTriggerAttributes(extraAttrs = "") {
    return `href="${CAL_DIRECT_URL}" ${extraAttrs}`.trim();
  }

  function calButton(label, variant = "primary", extraAttrs = "", arrowType = "default") {
    const arrow = arrowType === "diagonal" ? diagonalArrowMarkup() : arrowMarkup();
    return `<a data-hover="" data-btn-theme="${
      variant === "ghost" ? "transparent" : "primary"
    }" ${calTriggerAttributes(
      extraAttrs
    )} class="btn w-inline-block weflair-btn weflair-btn--${variant}"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">${label}</span></div>${arrow}</a>`;
  }

  function ensureCalEmbed() {
    return;
  }

  function renderAuditWidgetMarkup() {
    return `<div class="weflair-audit-widget" id="audit-widget"><button type="button" class="weflair-audit-widget__launcher" data-audit-toggle aria-expanded="false" aria-controls="weflair-audit-panel" aria-label="Open strategy call widget">${diagonalArrowMarkup()}</button><div class="weflair-audit-widget__panel" id="weflair-audit-panel"><div class="weflair-audit-widget__head"><div class="weflair-audit-widget__profile"><div class="weflair-audit-widget__avatar">SM</div><div class="weflair-audit-widget__meta"><span class="weflair-audit-widget__name">Sami Madi</span><span class="weflair-audit-widget__role">Founder, WeFlair</span></div></div><button type="button" class="weflair-audit-widget__close" data-audit-close aria-label="Close strategy call card">&times;</button></div><div class="weflair-audit-widget__eyebrow">Free 30 min strategy call</div><h3 class="weflair-audit-widget__title">See where your growth engine is leaking.</h3><p class="weflair-audit-widget__body">We&rsquo;ll review your funnel, channels, and follow-up, then show you the next 1-3 moves most likely to improve pipeline.</p><div class="weflair-audit-widget__proof"><span class="weflair-audit-widget__proof-pill">30 min</span><span class="weflair-audit-widget__proof-pill">Free</span><span class="weflair-audit-widget__proof-pill">No hard sell</span></div><div class="weflair-audit-widget__slots"><strong>Hands-on intro calls only</strong><span class="weflair-audit-widget__countdown">Limited each week</span></div><ul class="weflair-audit-widget__list"><li>Spot the biggest leak in paid, outbound, or CRM.</li><li>Leave with clear next steps, not a vague pitch.</li><li>Best for teams already investing in growth.</li></ul><div class="weflair-audit-widget__cta">${calButton(
      "Book your free strategy call",
      "primary",
      'data-cal-source="hero-widget"',
      "diagonal"
    )}</div><div class="weflair-audit-widget__foot">Takes you to the contact page so you can request the brief without leaving the site.</div></div></div>`;
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
    return `<div class="weflair-demand-team__showcase is-${pod.tone}">
      <div class="weflair-org-chart">
        <div class="weflair-org-lead">
          <div class="weflair-org-avatar" style="background-image: url('${pod.lead.img}')"></div>
          <span class="weflair-org-name">${pod.lead.name}</span>
        </div>
        <div class="weflair-org-connector"></div>
        <div class="weflair-org-child-nodes">
          ${pod.roles
            .map(
              (role) =>
                `<div class="weflair-org-node">
                  <div class="weflair-org-avatar is-sm" style="background-image: url('${role.img}')"></div>
                  <span class="weflair-org-label">${role.label}</span>
                </div>`
            )
            .join("")}
        </div>
      </div>
    </div>`;
  }

  function teamPanelMarkup(pod) {
    return `<div class="weflair-demand-team__detail-shell"><div class="weflair-demand-team__copy-block"><p class="weflair-demand-team__panel-eyebrow">${pod.eyebrow}</p><h3 class="h4">${pod.title}</h3><p class="weflair-demand-team__panel-body">${pod.body}</p><div class="weflair-demand-team__avatars">${pod.roles
      .map((role) => `<div class="weflair-demand-team__avatar" style="background-image: url('${role.img}')" title="${role.label}"></div>`)
      .join("")}</div>${teamLinkMarkup(
      pod.linkLabel,
      pod.linkHref
    )}</div>${teamPlaceholderMarkup(pod)}</div>`;
  }

    let _activeResultsFilter = "";
  let _activeResultsIndex = 0;
  const CASES_PER_VIEW = 1;

  function getFilteredResults() {
    const cards = CONTENT.results.cards.filter(
      (card) =>
        !_activeResultsFilter || card.industries.includes(_activeResultsFilter)
    );
    if (cards.length) return cards;
    _activeResultsFilter = "";
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
    const metricsMarkup = card.metrics
      .map(
        ([value, label]) =>
          `<div class="weflair-case-card__metric"><strong>${value}</strong><span>${label}</span></div>`
      )
      .join("");
    const highlightsMarkup = (card.highlights || [])
      .slice(0, 4)
      .map((item) => `<li>${item}</li>`)
      .join("");

    return `<article class="weflair-case-card"><div class="weflair-case-card__shell"><div class="weflair-case-card__brand"><div class="weflair-case-card__brand-tags"><span class="weflair-case-card__badge">Case Study</span>${industriesMarkup}</div><div class="weflair-case-card__logo-wrap">${caseStudyLogoMarkup(
      card
    )}</div><p class="weflair-case-card__sector">${card.company} &middot; ${
      card.sector
    }</p><div class="weflair-case-card__metrics">${metricsMarkup}</div></div><div class="weflair-case-card__main"><div class="weflair-case-card__service-row">${servicesMarkup}</div><h3 class="weflair-case-card__headline">${card.headline}</h3><p class="weflair-case-card__body">${card.body}</p><ul class="weflair-case-card__highlights">${highlightsMarkup}</ul><div class="weflair-case-card__actions"><a href="${
      card.href || "cases.html"
    }" class="weflair-case-card__readmore">Read the full case study <span class="weflair-case-card__readmore-arrow">${diagonalArrowMarkup()}</span></a></div></div></div></article>`;
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
        !_activeResultsFilter
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
    let style = q("#weflair-runtime-css");
    if (!style) {
      style = document.createElement("style");
      style.id = "weflair-runtime-css";
      document.head.appendChild(style);
    }
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
      .weflair-framework__head .h3{font-size:clamp(2.2rem,4.4vw,4.5rem)!important;line-height:.95;letter-spacing:-.075em;text-wrap:balance}
      .home-header__row-title .h1{font-size:clamp(2.8rem,6vw,6.5rem)!important;text-wrap:balance}
      .weflair-hero-actions{display:flex;flex-wrap:wrap;gap:.85rem;align-items:center}
      #hero .eyebrow{margin-bottom:1.15rem}
      .weflair-btn--ghost{opacity:.78}
      .weflair-btn--ghost .btn__bg{background:transparent;border:1px solid rgba(246,243,238,.12)}
      .weflair-btn--ghost .btn__text,.weflair-btn--ghost .arrow{color:#f6f3ee}
      .weflair-hero-glow{position:absolute;right:4%;top:16%;width:32rem;height:32rem;border-radius:50%;background:radial-gradient(circle,rgba(62,255,104,.18),rgba(62,255,104,.08) 28%,rgba(62,255,104,0) 68%);filter:blur(18px);pointer-events:none}
      #hero .p-l{max-width:36rem!important;font-size:clamp(1.08rem,1.35vw,1.35rem)!important;line-height:1.36!important}
      #hero .home-header__content{padding-bottom:clamp(3rem,6vw,4.75rem)}
      .weflair-hero-widget-wrap{display:flex;align-items:flex-end;justify-content:flex-end;min-height:1px}
      .weflair-audit-widget{position:fixed;right:clamp(.9rem,2vw,1.4rem);bottom:clamp(.9rem,2vw,1.4rem);z-index:70;width:min(calc(100vw - 1.8rem),22rem);margin-left:0;transition:opacity .24s ease,transform .24s ease,visibility .24s ease}
      .weflair-audit-widget__launcher{display:grid;place-items:center;width:4.25rem;height:4.25rem;margin-left:auto;border:1px solid rgba(246,243,238,.12);border-radius:999px;background:linear-gradient(180deg,rgba(18,19,18,.96) 0%,rgba(12,13,12,.98) 100%);color:#f6f3ee;box-shadow:0 16px 36px rgba(0,0,0,.32);cursor:pointer}
      .weflair-audit-widget__launcher .arrow{width:1.4rem;height:1.4rem}
      .weflair-audit-widget__panel{display:grid;grid-template-columns:minmax(0,1fr);gap:1rem;padding:1.05rem 1.05rem 1.1rem;border:1px solid rgba(246,243,238,.08);border-radius:1.25rem;background:linear-gradient(180deg,rgba(17,17,17,.96) 0%,rgba(11,12,11,.98) 100%);box-shadow:0 22px 48px rgba(0,0,0,.34)}
      .weflair-audit-widget.is-collapsed .weflair-audit-widget__panel{display:none}
      .weflair-audit-widget:not(.is-collapsed) .weflair-audit-widget__launcher{display:none}
      .weflair-audit-widget__head{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:flex-start;column-gap:.8rem;width:100%;min-width:0}
      .weflair-audit-widget__profile{display:flex;align-items:center;gap:.8rem;min-width:0}
      .weflair-audit-widget__avatar{display:grid;place-items:center;width:2.75rem;height:2.75rem;border-radius:999px;background:rgba(62,255,104,.14);border:1px solid rgba(62,255,104,.22);font-size:.92rem;font-weight:700;color:#f6f3ee}
      .weflair-audit-widget__meta{min-width:0}
      .weflair-audit-widget__name{display:block;font-size:1rem;font-weight:700;line-height:1.1}
      .weflair-audit-widget__role{display:block;margin-top:.12rem;color:rgba(246,243,238,.62);font-size:.82rem;line-height:1.2}
      .weflair-audit-widget__close{display:grid;place-items:center;width:2rem;height:2rem;border:none;background:transparent;color:rgba(246,243,238,.72);cursor:pointer;flex:0 0 auto;justify-self:end}
      .weflair-audit-widget__eyebrow{display:inline-flex;align-items:center;gap:.35rem;padding:.34rem .62rem;border:1px solid rgba(62,255,104,.18);border-radius:999px;background:rgba(62,255,104,.08);font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#9dffb6}
      .weflair-audit-widget__title{margin:0;font-size:1.72rem;line-height:.98;letter-spacing:-.05em;text-wrap:balance}
      .weflair-audit-widget__body{margin:0;color:rgba(246,243,238,.82);font-size:.95rem;line-height:1.46}
      .weflair-audit-widget__proof{display:flex;flex-wrap:wrap;gap:.45rem}
      .weflair-audit-widget__proof-pill{display:inline-flex;align-items:center;min-height:1.95rem;padding:.35rem .62rem;border:1px solid rgba(246,243,238,.08);border-radius:999px;background:rgba(23,24,23,.96);font-size:.76rem;font-weight:700;line-height:1;color:rgba(246,243,238,.88)}
      .weflair-audit-widget__slots{display:flex;align-items:center;justify-content:space-between;gap:.8rem;padding:.88rem .95rem;border:1px solid rgba(246,243,238,.08);border-radius:.95rem;background:rgba(23,24,23,.96)}
      .weflair-audit-widget__slots strong{font-size:.98rem;line-height:1.15}
      .weflair-audit-widget__countdown{color:#3eff68;font-weight:700}
      .weflair-audit-widget__list{display:grid;gap:.55rem;margin:0;padding:0;list-style:none}
      .weflair-audit-widget__list li{position:relative;padding-left:1.15rem;color:rgba(246,243,238,.76);font-size:.84rem;line-height:1.45}
      .weflair-audit-widget__list li::before{content:"";position:absolute;left:0;top:.46rem;width:.42rem;height:.42rem;border-radius:999px;background:#3eff68;box-shadow:0 0 0 .18rem rgba(62,255,104,.12)}
      .weflair-audit-widget__cta .btn{width:100%}
      .weflair-audit-widget__foot{font-size:.77rem;line-height:1.3;color:rgba(246,243,238,.48);text-align:center}
      .weflair-logos-shell{width:100%;margin:0;padding:clamp(.75rem,1vw,1rem) 0 0;display:grid;gap:clamp(1rem,1.8vw,1.4rem)}
      .weflair-logos-head{gap:.8rem;text-align:center}
      .weflair-logos-head .h3{max-width:none;margin:0 auto;font-size:.88rem;font-weight:400;line-height:1.4;letter-spacing:.01em;color:rgba(246,243,238,.52)}
      .weflair-logos-head .eyebrow,.weflair-logos-head .eyebrow__p{color:#f6f3ee}
      .weflair-logos-divider{width:100%;height:1px;background:rgba(246,243,238,.11)}
      .weflair-logos-rail{position:relative;width:100%;margin:0;padding:0}
      .weflair-logo-stack{display:grid;gap:1.1rem;width:100%}
      .weflair-logo-marquee{position:relative;width:100%;padding-inline:0;overflow:hidden;mask-image:linear-gradient(90deg,transparent,black 4%,black 96%,transparent)}
      .weflair-logo-marquee:hover .weflair-logo-marquee__track,.weflair-logo-marquee:focus-within .weflair-logo-marquee__track{animation-play-state:paused}
      .weflair-logo-marquee__track{display:flex;align-items:center;gap:0;width:max-content;animation:weflairMarqueeLeft 72s linear infinite;will-change:transform}
      .weflair-logo-marquee.is-reverse .weflair-logo-marquee__track{animation-name:weflairMarqueeRight}
      .weflair-logo-marquee__group{display:flex;align-items:center;flex:0 0 auto;gap:clamp(1rem,1.3vw,1.22rem);padding-inline:clamp(.8rem,1.2vw,1.05rem);white-space:nowrap}
      .weflair-logo-marquee__item{display:flex;align-items:center;flex:0 0 auto}
      .weflair-logo-pill{display:flex;align-items:center;justify-content:center;width:clamp(12.35rem,13.4vw,14.8rem);height:clamp(4.9rem,5.45vw,5.5rem);padding:.6rem 1rem;border:1px solid rgba(246,243,238,.14);border-radius:999px;background:rgba(246,243,238,.04);box-shadow:inset 0 1px 0 rgba(246,243,238,.04);backdrop-filter:blur(8px);transition:transform 180ms ease,border-color 180ms ease,background-color 180ms ease,box-shadow 180ms ease}
      .weflair-logo-mark{display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%;min-height:0;padding:0 .12rem;white-space:nowrap;--logo-width:94%;--logo-height:82%}
      .weflair-logo-mark img{display:block;width:auto;max-width:var(--logo-width);max-height:var(--logo-height);opacity:.94;filter:grayscale(1) brightness(1.72) contrast(1.12);transform:scale(1);transform-origin:center;image-rendering:-webkit-optimize-contrast;transition:opacity 180ms ease,filter 180ms ease,transform 180ms ease}
      .weflair-logo-mark.is-xl{--logo-width:100%;--logo-height:88%}
      .weflair-logo-pill:hover,.weflair-logo-pill:focus-within{transform:translateY(-2px);border-color:rgba(62,255,104,.22);background:rgba(246,243,238,.04);box-shadow:0 14px 28px rgba(0,0,0,.14),inset 0 1px 0 rgba(246,243,238,.04)}
      .weflair-logo-pill:hover img,.weflair-logo-pill:focus-within img{opacity:1;filter:none;transform:scale(1.02)}
      .weflair-logo-mark:focus-visible{outline:none}
      @keyframes weflairMarqueeLeft{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      @keyframes weflairMarqueeRight{from{transform:translateX(-50%)}to{transform:translateX(0)}}
      #services .services-overview__row-text{column-gap:clamp(2.7rem,4vw,3.8rem)}
      #services .services-overview__col-eyebrow{width:clamp(8rem,12vw,10rem)!important;padding-top:0!important}
      #services .services-overview__col-text{max-width:74rem!important;padding-top:clamp(2.8rem,3.2vw,3.3rem)!important}
      #services .services-overview__col-text .h3{max-width:none!important;font-size:clamp(2.2rem,4.4vw,4.5rem)!important;line-height:.95;letter-spacing:-.075em;text-wrap:balance}
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
      .weflair-services-native .growing-tiles__row.weflair-services-center{justify-content:center}
      .weflair-services-native .growing-tiles .growing-tiles__row.weflair-services-center .growing-tiles__col,.weflair-services-native .growing-tiles .growing-tiles__row.weflair-services-center .growing-tiles__col:hover{flex:0 0 calc(50% - .3rem)!important;width:calc(50% - .3rem)!important;max-width:calc(50% - .3rem)!important}
      .weflair-services-center .growing-tile{border-color:rgba(62,255,104,0.12);background:linear-gradient(180deg,rgba(22,28,22,.98) 0%,rgba(16,20,16,.98) 100%)}
      .weflair-services-center .growing-tile:hover,.weflair-services-center .growing-tile:focus-visible{border-color:rgba(62,255,104,0.25);background:linear-gradient(180deg,rgba(26,34,26,.98) 0%,rgba(18,24,18,.98) 100%)}
      .weflair-services-native .growing-tiles__row.is-single{justify-content:center}
      .weflair-services-native .growing-tiles__row.is-single .growing-tiles__col{flex:0 1 calc(50% - .3rem);max-width:calc(50% - .3rem)}
      .weflair-services-cta-wrap{display:flex;justify-content:center;margin-top:2.4rem}
      .weflair-services-cta{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.8rem;width:min(100%,38rem);margin:0 auto;padding:1.4rem 2rem;border:1px solid rgba(62,255,104,.15);border-radius:.65rem;background:rgba(62,255,104,.03);text-align:center}
      .weflair-services-cta-text{display:flex;flex-direction:column;gap:.25rem;align-items:center}
      .weflair-services-cta h3{margin:0;font-size:.88rem;font-weight:500;line-height:1.2;letter-spacing:-.01em;color:rgba(246,243,238,.4)}
      .weflair-services-cta p{margin:0;font-family:"Helvetica Now Text",Arial,sans-serif;font-size:.92rem;font-weight:600;line-height:1.3;color:rgba(246,243,238,.88)}
      .weflair-services-cta-actions{display:flex;flex-direction:column;align-items:center;gap:.6rem;flex-shrink:0}
      .weflair-services-cta .btn{min-width:auto;flex-shrink:0}
      .weflair-services-cta .arrow{transform:rotate(0deg)!important}
      .weflair-services-cta-note{font-size:.74rem!important;line-height:1.2!important;color:rgba(62,255,104,.45)!important;white-space:nowrap;flex-shrink:0}
      .weflair-tag{display:inline-flex;align-items:center;min-height:2rem;padding:.38rem .72rem;border:1px solid rgba(246,243,238,.08);border-radius:999px;background:rgba(28,31,28,.92);font-size:.86rem;font-weight:700;line-height:1;color:rgba(246,243,238,.88)}
      .weflair-challenges .weflair-challenges__row-text{display:flex;column-gap:clamp(3.1rem,4.6vw,4.9rem);align-items:flex-start}
      .weflair-challenges .weflair-challenges__col-eyebrow{width:clamp(8.8rem,12vw,10.8rem);padding-top:.15rem;flex:0 0 auto}
      .weflair-challenges .weflair-challenges__col-eyebrow .eyebrow{margin-bottom:0}
      .weflair-challenges .weflair-challenges__col-text{max-width:76rem;padding-top:clamp(3.25rem,4vw,4.1rem)}
      .weflair-challenges .weflair-challenges__col-text .h3,.weflair-framework-section .weflair-challenges__col-text .h3{max-width:none;margin-bottom:1.8rem;font-size:clamp(2.2rem,4.4vw,4.5rem);line-height:.96;letter-spacing:-.075em;text-wrap:balance}
      .weflair-challenges .weflair-section__body{max-width:50rem;margin:0;color:rgba(246,243,238,.72);font-size:1rem;line-height:1.52}
      .weflair-problems-native{display:flex;justify-content:center;margin-top:clamp(2.35rem,3.9vw,3.2rem)}
      .weflair-problems-native .growing-tiles{width:min(100%,76rem);gap:.65rem;height:auto}
      .weflair-problems-native .growing-tiles__row{display:flex;gap:.65rem}
      .weflair-problems-native .growing-tiles__col{flex:1 1 0;min-width:0}
      .weflair-problems-native .growing-tile{min-height:11rem;padding:1.15rem 1.2rem;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;cursor:default;text-align:left}
      .weflair-problems-native .growing-tile__start{display:flex;flex-direction:column;gap:.9rem;align-items:flex-start;width:100%}
      .weflair-problems-native .growing-tile__end{display:flex;align-items:flex-start;justify-content:flex-start;min-height:auto;padding-top:.95rem;width:100%}
      .weflair-problems-native .growing-tile .h5{margin:0;max-width:none;text-wrap:pretty;font-size:clamp(1.08rem,1.14vw,1.22rem);line-height:1.18;letter-spacing:-.035em}
      .weflair-problems-native .growing-tile .p-s{margin:0;max-width:none;font-size:.88rem;line-height:1.52;color:rgba(246,243,238,.7);text-align:left}
      .weflair-problems-native .growing-tile__text{display:grid;gap:.58rem;justify-items:start;width:100%}
      .weflair-problems-native .growing-tile__end .growing-tile__text{opacity:1!important;transform:none!important}
      .weflair-problem-tile__start-row{display:flex;align-items:center;justify-content:flex-start;gap:.7rem;width:100%}
      .weflair-problem-tile__title{max-width:none;text-align:left}
      .weflair-problem-tile__icon{width:2.2rem;height:2.2rem;border:1px solid rgba(62,255,104,.2);border-radius:.65rem;background:rgba(62,255,104,.07);display:grid;place-items:center;color:#3eff68;flex:0 0 auto;transition:background .22s ease,border-color .22s ease}
      .weflair-problem-tile__icon svg{width:1.05rem;height:1.05rem}
      .weflair-problems-native .growing-tile:hover .weflair-problem-tile__icon{background:rgba(62,255,104,.14);border-color:rgba(62,255,104,.36)}
      .weflair-framework-section .weflair-challenges__row-text{margin-bottom:0;padding-bottom:0}
      .weflair-ring-split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:clamp(2rem,3.5vw,3.5rem);align-items:center;margin-top:clamp(2rem,3vw,2.8rem)}
      .weflair-ring-wrap{position:relative;width:100%;max-width:54rem;margin:0 auto;display:flex;align-items:center;justify-content:center}
      .weflair-ring-wrap .wf-fv5-svg{width:100%;height:auto;overflow:visible}
      .weflair-steps{display:flex;flex-direction:column;gap:0;padding:1.45rem 1.3rem;border:1px solid rgba(246,243,238,.06);border-radius:1.1rem;background:linear-gradient(180deg,rgba(20,22,20,.65) 0%,rgba(16,18,16,.82) 100%);backdrop-filter:blur(8px)}
      .weflair-step{display:grid;grid-template-columns:2.2rem 1fr;gap:.75rem;padding:.72rem .85rem .72rem .62rem;border-radius:.65rem;cursor:pointer;transition:background .25s ease,border-color .25s ease;border:1px solid transparent}
      .weflair-step:hover{background:rgba(246,243,238,.03)}
      .weflair-step.is-active{background:rgba(246,243,238,.04);border-color:rgba(246,243,238,.06)}
      .weflair-step__num{width:2.1rem;height:2.1rem;border-radius:999px;display:grid;place-items:center;font-size:.75rem;font-weight:800;transition:background .25s ease,box-shadow .25s ease,border-color .25s ease,color .25s ease}
      .weflair-step__body{display:grid;gap:.28rem;padding-right:.18rem}
      .weflair-step__name{font-size:1rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(246,243,238,.45);transition:color .25s ease}
      .weflair-step__desc{font-size:.88rem;line-height:1.45;color:rgba(246,243,238,.45);margin:0;transition:color .25s ease;text-wrap:pretty}
      .weflair-step.is-active .weflair-step__desc{color:rgba(246,243,238,.78)}
      .weflair-step__tags{display:flex;flex-wrap:wrap;gap:.32rem;margin-top:.12rem;max-height:0;overflow:hidden;opacity:0;transition:max-height .35s ease,opacity .3s ease,margin .3s ease}
      .weflair-step.is-active .weflair-step__tags{max-height:5rem;opacity:1;margin-top:.35rem}
      .weflair-step__tag{display:inline-flex;align-items:center;padding:.22rem .6rem;border-radius:999px;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;font-weight:600}
      .weflair-step__connector{display:flex;align-items:center;padding:.05rem 0 .05rem .6rem;height:1.1rem}
      .weflair-step__connector svg{height:100%;width:.6rem;color:rgba(246,243,238,.12)}
      .weflair-step__loop{display:flex;align-items:center;gap:.45rem;padding:.3rem 0 0 .6rem}
      .weflair-step__loop svg{width:1rem;height:1rem}
      .weflair-step__loop span{font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:rgba(246,243,238,.28)}
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
      .weflair-footer__cta-banner{position:relative;padding:clamp(4.2rem,7vw,7rem) 0 clamp(3rem,5vw,4.4rem);background:linear-gradient(180deg,rgba(14,16,14,0) 0%,rgba(14,16,14,.4) 28%,rgba(14,16,14,.96) 100%)}
      .weflair-footer__cta-panel{position:relative;overflow:hidden;width:min(100%,58rem);margin:0 auto;padding:clamp(2.7rem,4.6vw,4rem) clamp(1.6rem,3vw,2.8rem);border:1px solid rgba(246,243,238,.08);border-radius:1.55rem;background:linear-gradient(140deg,rgba(34,42,34,.96) 0%,rgba(17,19,17,.98) 46%,rgba(10,11,10,.99) 100%);box-shadow:0 30px 70px rgba(0,0,0,.28)}
      .weflair-footer__cta-panel::before{content:"";position:absolute;inset:auto -8% -18% 32%;height:58%;background:linear-gradient(135deg,rgba(62,255,104,.22) 0%,rgba(62,255,104,.08) 42%,rgba(62,255,104,0) 100%);transform:skewY(-8deg);pointer-events:none}
      .weflair-footer__cta-panel::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 18%,rgba(62,255,104,.16),rgba(62,255,104,0) 34%);pointer-events:none}
      .weflair-footer__cta-inner{position:relative;z-index:1;display:grid;gap:1.2rem;justify-items:center;text-align:center;max-width:42rem;margin:0 auto}
      .weflair-footer__cta-title{margin:0;font-size:clamp(3rem,6vw,5rem);line-height:.92;letter-spacing:-.08em;text-wrap:balance}
      .weflair-footer__cta-copy{max-width:40rem;margin:0;color:#f6f3ee;font-size:clamp(.95rem,1.15vw,1.08rem);font-weight:700;line-height:1.28;letter-spacing:.08em;text-transform:uppercase;text-wrap:balance}
      .weflair-footer__cta-inner .weflair-section__body.is--muted{max-width:30rem;color:rgba(246,243,238,.6);font-size:.86rem;line-height:1.45}
      .weflair-footer__cta-inner .btn{min-width:clamp(18rem,28vw,24rem);justify-self:center}
      .weflair-footer__cta-inner .arrow{transform:rotate(0deg)!important}
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
        .weflair-ring-wrap{max-width:46rem}
        .weflair-services-cta{flex-direction:column;gap:.8rem;padding:.9rem 1.6rem;text-align:center}
        .weflair-services-cta-actions{flex-direction:column;gap:.6rem}
        .weflair-services-cta h3,.weflair-services-cta p{white-space:normal}
        .weflair-services-title-main,.weflair-services-title-sub{white-space:normal!important}
        .weflair-section-accent{white-space:normal!important}
        .weflair-ring-visual{max-width:20rem}
        .weflair-steps{gap:0}
        .weflair-problems-native .growing-tiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;height:auto}
        .weflair-problems-native .growing-tiles__row{display:contents}
        .weflair-problems-native .growing-tiles__col{flex:none;width:auto;height:auto;min-height:0}
        .weflair-problems-native .growing-tile{min-height:0}
        .weflair-audit-widget{width:min(calc(100vw - 1.6rem),20rem)}
        body[data-navigation-status="active"] .weflair-audit-widget{opacity:0;visibility:hidden;pointer-events:none;transform:translateY(.75rem)}
        .weflair-proof-card--feature{grid-row:auto;grid-column:1/-1}
        .weflair-footer__cta-panel{width:min(100%,62rem)}
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
        .weflair-services-cta{flex-direction:column;gap:.6rem;padding:.9rem 1.2rem;text-align:center}
        .weflair-services-cta-actions{flex-direction:column;gap:.5rem}
        .weflair-services-cta h3,.weflair-services-cta p,.weflair-services-cta-note{white-space:normal!important;text-align:center}
        .weflair-section-accent{white-space:normal}
        .weflair-problems-native .growing-tiles{grid-template-columns:1fr;gap:.9rem;height:auto}
        .weflair-problems-native .growing-tiles__col{flex:none;width:auto}
        .weflair-problems-native .growing-tile{padding:1.35rem 1.25rem;min-height:0}
        .weflair-problems-native .growing-tile .h5{font-size:clamp(1.02rem,4.8vw,1.16rem)}
        .weflair-problems-native .growing-tile .p-s{font-size:.9rem}
        .weflair-services-grid .is-span-2{grid-column:auto}
        .weflair-logos-head .h3{max-width:none;font-size:.82rem}
        .weflair-logo-stack{gap:.82rem}
        .weflair-logo-marquee__track{animation-duration:42s}
        .weflair-logo-marquee__group{gap:.72rem;padding-inline:.56rem}
        .weflair-logo-pill{width:10.6rem;height:4.25rem;padding:.46rem .68rem}
        .weflair-logo-mark{--logo-width:96%;--logo-height:78%}
        .weflair-logo-mark.is-xl{--logo-width:100%;--logo-height:86%}
        .weflair-audit-widget{right:.8rem;bottom:.8rem;width:min(calc(100vw - 1.6rem),22rem)}
        .weflair-footer__cta-banner{padding:3.4rem 0 2.7rem}
        .weflair-footer__cta-panel{padding:2.15rem 1.15rem 2rem;border-radius:1.2rem}
        .weflair-footer__cta-title{font-size:clamp(2.4rem,11vw,3.45rem)}
        .weflair-footer__cta-copy{font-size:.88rem;letter-spacing:.055em}
        .weflair-footer__cta-inner .btn{width:100%;min-width:0}
        .weflair-footer__top{grid-template-columns:1fr}
        .weflair-footer__info-row{grid-template-columns:1fr 1fr}
        .weflair-footer__nav-row{grid-template-columns:1fr 1fr}
        .weflair-footer__bottom{flex-direction:column;align-items:flex-start;gap:1rem}
        .weflair-process__step{grid-template-columns:1fr;gap:.3rem .8rem}
        .weflair-process__num{display:none}
        .weflair-process__title::before{content:attr(data-num) '. ';color:rgba(246,243,238,.3);font-weight:600}
        .weflair-process__body{grid-column:1/-1}
      
/* ORG CHART AND AVATAR STYLES */
.weflair-org-chart { display: flex; flex-direction: column; align-items: center; gap: 0; width: 100%; animation: weflairOrgFadeIn 0.6s ease-out forwards; }
@keyframes weflairOrgFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.weflair-org-lead { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; text-align: center; }
.weflair-org-avatar { width: 3.5rem; height: 3.5rem; border-radius: 50%; background-color: rgba(62,255,104,0.15); border: 2px solid rgba(62,255,104,0.4); background-size: cover; background-position: center; box-shadow: 0 4px 12px rgba(62,255,104,0.1); }
.weflair-org-avatar.is-sm { width: 3rem; height: 3rem; border-width: 1px; border-color: rgba(246,243,238,0.2); background-color: rgba(246,243,238,0.05); box-shadow: none; }
.weflair-org-name { font-weight: 700; font-size: 0.95rem; color: #f6f3ee; letter-spacing: -0.01em; }
.weflair-org-label { font-size: 0.72rem; color: rgba(246,243,238,0.6); font-weight: 600; text-align: center; max-width: 6rem; line-height: 1.25; text-transform: uppercase; letter-spacing: 0.04em; }

.weflair-org-connector { width: 1px; height: 1.5rem; background: rgba(246,243,238,0.15); position: relative; }
.weflair-org-connector::after { content: ""; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: clamp(14rem, 100%, 20rem); height: 1px; background: rgba(246,243,238,0.15); }

.weflair-org-child-nodes { display: flex; gap: clamp(0.5rem, 1.5vw, 1.5rem); align-items: flex-start; justify-content: center; position: relative; width: 100%; max-width: 22rem; }
.weflair-org-node { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; position: relative; padding-top: 1rem; flex: 1; }
.weflair-org-node::before { content: ""; position: absolute; top: 0; left: 50%; width: 1px; height: 1rem; background: rgba(246,243,238,0.15); transform: translateX(-50%); }

.weflair-demand-team__avatars { display: flex; align-items: center; margin: 1rem 0 1.5rem; }
.weflair-demand-team__avatar { width: 2.2rem; height: 2.2rem; border-radius: 50%; border: 2px solid #111; background-size: cover; background-position: center; background-color: rgba(246,243,238,0.1); margin-left: -0.65rem; transition: transform 0.2s ease, border-color 0.25s ease; position: relative; cursor: pointer; }
.weflair-demand-team__avatar:first-child { margin-left: 0; }
.weflair-demand-team__avatar:hover { transform: translateY(-3px); z-index: 10; border-color: rgba(62,255,104,0.4); }

.weflair-demand-team__copy-block { max-width: 33rem !important; }
.weflair-demand-team__copy-block h3 { text-wrap: balance; }


.weflair-demand-team__tab-label { white-space: normal !important; text-wrap: balance; overflow-wrap: anywhere; }
.weflair-demand-team__panel-plain { grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr) !important; gap: 2rem !important; }
.weflair-demand-team__copy-block h3.h4 { white-space: normal !important; text-wrap: balance; font-size: clamp(1.8rem, 2vw, 2.2rem) !important; }

}
    `;
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
                  `<a data-hover="" data-arrow="diagonal" href="${routeForLabel(title) || ROUTES.sitemap}" class="nav-dropdown-tile w-inline-block"><div class="nav-dropdown-tile__bg"></div><div class="nav-dropdown-tile__text"><h3 class="nav-dropdown-tile__h">${title}</h3><p class="nav-dropdown-tile__p">${body}</p></div><div class="nav-dropdown-tile__arrow">${arrowMarkup()}</div></a>`
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
      talkButton.setAttribute("href", ROUTES.contact);
      [
        "data-cal-link",
        "data-cal-namespace",
        "data-cal-config",
        "data-cal-source",
        "aria-haspopup",
      ].forEach((attr) => talkButton.removeAttribute(attr));
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
      cardSlot.innerHTML = renderAuditWidgetMarkup();
    }
  }

  function renderLogosSection(section) {
    section.id = "logos";
    section.className = "home-results weflair-section";
    const rotateLogos = (items, offset = 0) => {
      if (!items.length) return items;
      const normalizedOffset = ((offset % items.length) + items.length) % items.length;
      return [...items.slice(normalizedOffset), ...items.slice(0, normalizedOffset)];
    };
    const splitIndex = Math.ceil(LOGOS.length / 2);
    const topRow = LOGOS.slice(0, splitIndex);
    const rawBottomRow = LOGOS.slice(splitIndex);
    const bottomRow = rotateLogos(rawBottomRow.length ? rawBottomRow : topRow, 2);
    const logoMarkup = (items) =>
      items.map((item) =>
        item.type === "image"
          ? `<span class="weflair-logo-marquee__item"><span class="weflair-logo-pill"><span class="weflair-logo-mark${
              item.size ? ` is-${item.size}` : ""
            }" tabindex="0"${
              item.width || item.height
                ? ` style="${item.width ? `--logo-width:${item.width};` : ""}${item.height ? `--logo-height:${item.height};` : ""}"`
                : ""
            }><img src="${item.src}" alt="${item.label}" loading="lazy" decoding="async"></span></span></span>`
          : `<span class="weflair-logo-marquee__item"><span class="weflair-logo-pill"><span class="weflair-logo-mark${
              item.size ? ` is-${item.size}` : ""
            }" tabindex="0">${item.label}</span></span></span>`
      ).join("");
    const topGroup = logoMarkup(topRow);
    const bottomGroup = logoMarkup(bottomRow);
    section.innerHTML = `<div class="container"><div class="weflair-logos-shell"><div class="weflair-section__head weflair-logos-head"><h2 class="h3">${CONTENT.logos.title}</h2></div><div class="weflair-logos-rail"><div class="weflair-logo-stack"><div class="weflair-logo-marquee"><div class="weflair-logo-marquee__track"><div class="weflair-logo-marquee__group">${topGroup}</div><div class="weflair-logo-marquee__group" aria-hidden="true">${topGroup}</div></div></div><div class="weflair-logo-marquee is-reverse"><div class="weflair-logo-marquee__track"><div class="weflair-logo-marquee__group">${bottomGroup}</div><div class="weflair-logo-marquee__group" aria-hidden="true">${bottomGroup}</div></div></div></div></div></div></div>`;
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
    const compactQuery = window.matchMedia("(max-width: 991px)");
    setCollapsed(compactQuery.matches);
    const handleCompactChange = (event) => {
      if (event.matches) setCollapsed(true);
    };
    if (typeof compactQuery.addEventListener === "function") {
      compactQuery.addEventListener("change", handleCompactChange);
    } else if (typeof compactQuery.addListener === "function") {
      compactQuery.addListener(handleCompactChange);
    }
    document.addEventListener("weflair:navigation", (event) => {
      if (event.detail?.active) setCollapsed(true);
    });
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
      .join("")}</div></div></div><div class="weflair-services-cta-wrap"><div class="weflair-services-cta"><div class="weflair-services-cta-text"><h3 class="h5">Not sure which service you need?</h3><p>Book a call and we&rsquo;ll figure out the best approach.</p></div><div class="weflair-services-cta-actions">${calButton(
      "Book a free growth audit",
      "primary",
      'data-cal-source="services-cta"',
      "diagonal"
    )}<p class="weflair-services-cta-note">Free audit included &bull; No commitment required</p></div></div></div></div>`;
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
      .join("")}</div><div class="weflair-case-studies__frame"><div data-case-panel></div><div class="weflair-case-studies__footer"><div class="weflair-case-studies__footer-link">${button(
      CONTENT.results.moreLabel,
      CONTENT.results.moreHref || "cases.html",
      "ghost",
      "diagonal"
    )}</div><div class="weflair-case-studies__nav"><button type="button" class="weflair-case-studies__nav-btn" data-case-nav="prev" aria-label="Previous case study">${resultsNavIcon(
      "prev"
    )}</button><button type="button" class="weflair-case-studies__nav-btn" data-case-nav="next" aria-label="Next case study">${resultsNavIcon(
      "next"
    )}</button></div></div></div></div>`;
    renderActiveCaseStudy();
    return section;
  }

  function renderTestimonialsSection(section) {
    section.id = "testimonials";
    section.className = "quotes-slider weflair-section weflair-results-testimonials";
    section.innerHTML = `<div class="container"><div class="weflair-results-testimonials__rail"><div class="weflair-results-testimonials__head"><div class="weflair-results-testimonials__eyebrow">Client notes</div><div class="weflair-results-testimonials__nav"><button type="button" class="weflair-results-testimonials__nav-btn" data-testimonial-nav="prev" aria-label="Previous testimonial">${resultsNavIcon(
      "prev"
    )}</button><button type="button" class="weflair-results-testimonials__nav-btn" data-testimonial-nav="next" aria-label="Next testimonial">${resultsNavIcon(
      "next"
    )}</button></div></div><div class="weflair-results-testimonials__slider"><div class="weflair-results-testimonials__track" data-testimonial-track>${CONTENT.results.testimonials
      .map((item) => testimonialCardMarkup(item))
      .join("")}</div></div></div></div>`;
    requestAnimationFrame(() => syncTestimonialNav(section));
  }

  function renderCompareSection(section) {
    section.id = "comparison";
    section.className = "compare weflair-section weflair-compare-tablar";
    
    const goodHeader = "WITH WEFLAIR";
    const badHeader = "WITHOUT WEFLAIR";
    
    const rowsHtml = CONTENT.comparison.rows.map(([badText, goodText]) => {
      // Good text (index 1) on left, Bad text (index 0) on right
      return `<div class="weflair-tabular-row">
        <div class="weflair-tabular-cell is-good">${goodText}</div>
        <div class="weflair-tabular-cell is-bad">${badText}</div>
      </div>`;
    }).join("");

    section.innerHTML = `<div class="container container--sm">
      <div class="weflair-section__head weflair-compare-head" style="justify-items: center; text-align: center;">
        ${eyebrow(CONTENT.comparison.eyebrow, true)}
        <h2 class="h3" style="margin-top:0.4rem; margin-bottom:1.5rem; max-width:100%; white-space:nowrap;">${CONTENT.comparison.title}</h2>
        <p class="weflair-section__body" style="margin:0 auto; max-width:48rem;">${CONTENT.comparison.body}</p>
      </div>
      <div class="weflair-tabular-grid">
        <div class="weflair-tabular-header">
          <div class="weflair-tabular-head-cell is-good">${goodHeader}</div>
          <div class="weflair-tabular-head-cell is-bad">${badHeader}</div>
        </div>
        <div class="weflair-tabular-body">
          ${rowsHtml}
        </div>
      </div>
      <div class="weflair-compare-cta">
        <a href="#results" class="weflair-btn-glowing-glow" ${calTriggerAttributes('data-cal-source="comparison-cta"')}>
          <span class="weflair-btn-glowing__text">CHECK IF WE'RE A FIT</span>
        </a>
      </div>
    </div>`;
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

    const eyebrowHtml = d.cta.eyebrow ? eyebrow(d.cta.eyebrow, true) : "";
    const ctaHtml = `<div class="weflair-footer__cta-banner" id="audit"><div class="container"><div class="weflair-footer__cta-panel"><div class="weflair-footer__cta-inner">${eyebrowHtml}<h2 class="h3 weflair-footer__cta-title">${d.cta.title}</h2><p class="weflair-footer__cta-copy">${d.cta.body}</p><p class="weflair-section__body is--muted">${d.cta.reassurance}</p>${calButton(
      d.cta.ctaLabel,
      "primary",
      'data-cal-source="footer-cta"',
      "diagonal"
    )}</div></div></div></div>`;

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
        _activeResultsFilter = node.dataset.caseFilter || "";
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
    ensureCalEmbed();
    injectRuntimeStyles();
    replaceLogo();
    ensurePageShell();
    updateNav();
    normalizeSiteLinks();
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
    normalizeSiteLinks();
    return true;
  }

  function bootStaticHomepage() {
    document.title = "WeFlair - Growth Marketing Agency";
    ensureCalEmbed();
    injectRuntimeStyles();
    replaceLogo();
    ensurePageShell();
    normalizeSiteLinks();
    const logosSection = q("#logos") || q(".home-results");
    if (logosSection) {
      renderLogosSection(logosSection);
    }
    if (q("[data-pod-detail]")) {
      renderPod(0);
    }
    const processSection = q("#process");
    if (processSection) {
      renderResultsSection(processSection);
    } else if (q("#results [data-case-panel]")) {
      renderActiveCaseStudy();
    }
    const testimonialsSection = q(".quotes-slider");
    if (testimonialsSection) {
      renderTestimonialsSection(testimonialsSection);
    }
    const compareSection = q(".compare");
    if (compareSection) {
      renderCompareSection(compareSection);
    }
    if (q("[data-ring-index]")) {
      renderMethod(0);
    }
    wireInteractions();
    wireAuditWidget();
    syncTestimonialNav();
    normalizeSiteLinks();
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
  setTimeout(() => {
    const firstTab = document.querySelector('.weflair-demand-team__tab[data-pod-index="0"]');
    if (firstTab) {
      firstTab.click();
    }
  }, 100);

  // Injected CSS for ORG CHART
  const style = document.createElement('style');
  style.textContent = `
/* ORG CHART AND AVATAR STYLES */
.weflair-org-chart { display: flex; flex-direction: column; align-items: center; gap: 0; width: 100%; animation: weflairOrgFadeIn 0.6s ease-out forwards; }
@keyframes weflairOrgFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.weflair-org-lead { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; text-align: center; }
.weflair-org-avatar { width: 3.5rem; height: 3.5rem; border-radius: 50%; background-color: rgba(62,255,104,0.15); border: 2px solid rgba(62,255,104,0.4); background-size: cover; background-position: center; box-shadow: 0 4px 12px rgba(62,255,104,0.1); }
.weflair-org-avatar.is-sm { width: 3rem; height: 3rem; border-width: 1px; border-color: rgba(246,243,238,0.2); background-color: rgba(246,243,238,0.05); box-shadow: none; }
.weflair-org-name { font-weight: 700; font-size: 0.95rem; color: #f6f3ee; letter-spacing: -0.01em; }
.weflair-org-label { font-size: 0.72rem; color: rgba(246,243,238,0.6); font-weight: 600; text-align: center; max-width: 6rem; line-height: 1.25; text-transform: uppercase; letter-spacing: 0.04em; }

.weflair-org-connector { width: 1px; height: 1.5rem; background: rgba(246,243,238,0.15); position: relative; }
.weflair-org-connector::after { content: ""; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: clamp(14rem, 80%, 20rem); height: 1px; background: rgba(246,243,238,0.15); }

.weflair-org-child-nodes { display: flex; gap: clamp(0.5rem, 1.5vw, 1.5rem); align-items: flex-start; justify-content: center; position: relative; width: 100%; max-width: 22rem; }
.weflair-org-node { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; position: relative; padding-top: 1rem; flex: 1; }
.weflair-org-node::before { content: ""; position: absolute; top: 0; left: 50%; width: 1px; height: 1rem; background: rgba(246,243,238,0.15); transform: translateX(-50%); }

.weflair-demand-team__avatars { display: flex; align-items: center; margin: 1rem 0 1.5rem; }
.weflair-demand-team__avatar { width: 2.2rem; height: 2.2rem; border-radius: 50%; border: 2px solid #111; background-size: cover; background-position: center; background-color: rgba(246,243,238,0.1); margin-left: -0.65rem; transition: transform 0.2s ease, border-color 0.25s ease; position: relative; cursor: pointer; }
.weflair-demand-team__avatar:first-child { margin-left: 0; }
.weflair-demand-team__avatar:hover { transform: translateY(-3px); z-index: 10; border-color: rgba(62,255,104,0.4); }

.weflair-demand-team__copy-block { max-width: 32rem !important; }
.weflair-demand-team__copy-block h3.h4 { text-wrap: balance; white-space: normal !important; font-size: clamp(1.8rem, 2vw, 2.2rem) !important; }
.weflair-demand-team__tab-label { white-space: normal !important; text-wrap: balance; overflow-wrap: anywhere; }
.weflair-demand-team__panel-plain { grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr) !important; gap: 2rem !important; }
  `;
  document.head.appendChild(style);

  // Injected CSS for TABULAR COMPARE OVERHAUL
  const styleComp = document.createElement('style');
  styleComp.textContent = `
.weflair-compare-tablar { padding-top: clamp(4rem, 8vw, 6rem); padding-bottom: clamp(4rem, 8vw, 6rem); }
.weflair-compare-head { margin-bottom: clamp(3.5rem, 5vw, 4.5rem); text-align: center !important; justify-items: center !important; align-items: center !important; }
.weflair-compare-head .h3 { max-width: none !important; text-wrap: wrap !important; margin: 0 auto !important; }
.weflair-compare-head .eyebrow { justify-self: center !important; }
.weflair-compare-head .weflair-section__body { margin: 0 auto !important; text-align: center !important; }
.weflair-tabular-grid { width: 100%; max-width: 58rem; margin: 0 auto; }
.weflair-tabular-header { display: grid; grid-template-columns: 1fr 1fr; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(246, 243, 238, 0.05); gap: 2rem; }
.weflair-tabular-head-cell { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
.weflair-tabular-head-cell.is-good { color: #3eff68; text-shadow: 0 0 12px rgba(62, 255, 104, 0.4); }
.weflair-tabular-head-cell.is-bad { color: rgba(246, 243, 238, 0.25); text-align: left; }
.weflair-tabular-body { display: flex; flex-direction: column; }
.weflair-tabular-row { display: grid; grid-template-columns: 1fr 1fr; padding: 1.6rem 0; border-bottom: 1px solid rgba(246, 243, 238, 0.06); gap: 2rem; transition: background-color 0.2s ease; }
.weflair-tabular-row:hover { background-color: rgba(246, 243, 238, 0.015); }
.weflair-tabular-cell { font-size: clamp(0.9rem, 1.2vw, 1.05rem); line-height: 1.5; font-weight: 500; }
.weflair-tabular-cell.is-good { color: rgba(246, 243, 238, 0.95); letter-spacing: -0.01em; }
.weflair-tabular-cell.is-bad { color: rgba(246, 243, 238, 0.4); }
.weflair-compare-cta { display: flex; justify-content: center; align-items: center; margin-top: clamp(3rem, 5vw, 4.5rem); }
.weflair-btn-glowing-glow { position: relative; display: inline-flex; align-items: center; justify-content: center; padding: 1.25rem 2.8rem; background: rgba(10, 12, 10, 0.8); border: 1px solid rgba(62, 255, 104, 0.35); border-radius: 5px; color: #f6f3ee; text-decoration: none; font-size: 0.82rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; transition: all 0.3s ease; overflow: hidden; box-shadow: 0 0 20px rgba(62, 255, 104, 0.05), inset 0 0 10px rgba(62, 255, 104, 0.02); cursor: pointer; }
.weflair-btn-glowing-glow::before { content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(62, 255, 104, 0.15) 0%, transparent 60%); opacity: 0; transition: opacity 0.5s ease, transform 0.5s ease; transform: scale(0.8); z-index: 0; }
.weflair-btn-glowing-glow:hover { border-color: rgba(62, 255, 104, 0.7); box-shadow: 0 0 30px rgba(62, 255, 104, 0.25), inset 0 0 15px rgba(62, 255, 104, 0.1); color: #3eff68; }
.weflair-btn-glowing-glow:hover::before { opacity: 1; transform: scale(1); }
.weflair-btn-glowing__text { position: relative; z-index: 1; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
@media screen and (max-width: 767px) {
  .weflair-compare-head .h3 { white-space: normal !important; text-wrap: pretty !important; font-size: clamp(2rem, 8vw, 2.7rem) !important; }
  .weflair-tabular-grid { padding: 0 1rem; }
  .weflair-tabular-header { display: none; }
  .weflair-tabular-row { grid-template-columns: 1fr; padding: 1.5rem 0; gap: 0.5rem; position: relative; }
  .weflair-tabular-cell.is-good { margin-bottom: 0.25rem; font-weight: 600; color: #3eff68; }
  .weflair-tabular-cell.is-bad { font-size: 0.85rem; color: rgba(246, 243, 238, 0.5); }
  .weflair-tabular-cell.is-good::before { content: "WITH WEFLAIR: "; font-size: 0.7em; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(62, 255, 104, 0.6); margin-right: 0.5rem; }
  .weflair-tabular-cell.is-bad::before { content: "WITHOUT WEFLAIR: "; font-size: 0.7em; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(246, 243, 238, 0.3); margin-right: 0.5rem; }
}
  `;
  document.head.appendChild(styleComp);



})();
