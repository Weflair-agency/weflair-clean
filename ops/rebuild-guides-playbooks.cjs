const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const GUIDES_DIR = path.join(ROOT, "resources", "guides");
const ARCHIVE_DIR = path.join(ROOT, "_archive", "resources-guides-before-20260430");
const HEADER = fs.readFileSync(path.join(ROOT, "src", "partials", "header.html"), "utf8").trim();
const FOOTER = fs.readFileSync(path.join(ROOT, "src", "partials", "footer.html"), "utf8").trim();

const updated = "April 30, 2026";

const playbooks = [
  {
    title: "Lookalike Outbound Engine",
    category: "Outbound",
    tags: ["outbound", "demand-gen"],
    kicker: "Signals + prospecting",
    summary:
      "Clone your best-fit customer profile, enrich it with live buying signals, and build a cleaner outbound engine without guessing who to target next.",
    href: "/resources/playbooks.html#playbooks",
    accentRgb: "62, 255, 104",
    format: "Playbook + worksheet",
  },
  {
    title: "Visitor Deanonymization Sprint",
    category: "Outbound",
    tags: ["outbound", "revops"],
    kicker: "Website intent capture",
    summary:
      "Turn anonymous website traffic into named accounts, route hot visits fast, and trigger outreach before the buying window cools off.",
    href: "/resources/playbooks.html#playbooks",
    accentRgb: "142, 163, 255",
    format: "Routing blueprint",
  },
  {
    title: "Direct Outreach Campaign",
    category: "Outbound",
    tags: ["outbound", "demand-gen"],
    kicker: "Personal channels",
    summary:
      "Use low-competition direct outreach across email, LinkedIn, and founder-level touches to earn replies without sounding automated.",
    href: "/resources/playbooks.html#playbooks",
    accentRgb: "255, 184, 77",
    format: "Sequence pack",
  },
  {
    title: "Social Signals Trigger Play",
    category: "Paid Media",
    tags: ["paid-media", "demand-gen"],
    kicker: "Social intent detection",
    summary:
      "Capture buying signals from LinkedIn activity, content engagement, and role changes, then route them into sales and nurture motions.",
    href: "/resources/playbooks.html#playbooks",
    accentRgb: "255, 122, 102",
    format: "Monitoring logic",
  },
  {
    title: "Lead Magnet Acceleration System",
    category: "Paid Media",
    tags: ["paid-media", "revops"],
    kicker: "Offer to pipeline",
    summary:
      "Package a useful resource, route demand into the CRM correctly, and use a short conversion sequence to push readers into real sales conversations.",
    href: "/resources/playbooks.html#playbooks",
    accentRgb: "50, 205, 190",
    format: "Nurture sequence",
  },
  {
    title: "Case Study Pipeline Loop",
    category: "RevOps",
    tags: ["revops", "demand-gen"],
    kicker: "Proof to demand",
    summary:
      "Turn client wins, before-and-after stories, and outcomes into reusable assets that support outbound, paid, and sales follow-up.",
    href: "/resources/playbooks.html#playbooks",
    accentRgb: "188, 142, 255",
    format: "Proof map",
  },
];

const guides = [
  {
    slug: "b2b-demand-generation-strategy-2026",
    title: "B2B Demand Generation Strategy for 2026",
    category: "Demand Gen",
    tags: ["demand-gen", "outbound", "revops"],
    readTime: "12 min read",
    accentRgb: "62, 255, 104",
    visualLabel: "Pipeline model",
    description:
      "A practical guide to building a B2B demand generation system around buying signals, paid media, outbound, content, and CRM handoff instead of isolated lead capture.",
    sections: [
      {
        id: "why-it-breaks",
        title: "Why old demand generation breaks",
        paragraphs: [
          "Most B2B demand generation pages still describe a linear funnel: create awareness, capture leads, nurture, hand to sales. The problem is that buyers do not move in a line anymore. They research anonymously, compare vendors in private channels, ask AI tools for shortlists, revisit proof pages, and only then surface when the risk feels lower.",
          "That means a modern B2B demand generation strategy cannot be built around one channel. It needs a connected operating system: paid media to create and capture demand, outbound to act on signals, content to answer evaluation questions, and RevOps to make sure every qualified signal reaches sales with context.",
        ],
        checklist: [
          "Map demand by account stage, not just lifecycle stage.",
          "Separate brand awareness, active intent, and sales readiness in reporting.",
          "Build channel plans around the buying committee, not a single lead.",
        ],
      },
      {
        id: "operating-model",
        title: "The operating model",
        paragraphs: [
          "The strongest demand programs treat every channel as a signal source. A LinkedIn engagement, pricing page visit, comparison search, demo form, webinar attendance, and return visit all mean different things. The job is to classify those signals, decide which ones deserve immediate sales action, and use the rest to improve targeting and content.",
          "Start with an account map. Define the verticals, company sizes, buying triggers, and disqualifiers that make a company worth pursuing. Then build paid and outbound motions that reinforce each other. Paid media warms the market and collects behavioral data. Outbound acts on the strongest signals with specific context. Content supports both by answering the questions that block conversion.",
        ],
        checklist: [
          "Create one ICP table that paid, outbound, content, and sales all use.",
          "Score signals by urgency: research, active evaluation, hand raise, and sales-ready.",
          "Attach page, ad, and message context to CRM records before sales follow-up.",
        ],
      },
      {
        id: "execution",
        title: "How to build it in the first 30 days",
        paragraphs: [
          "Do not start by launching more campaigns. Start by fixing the decision layer. Which accounts are worth attention? Which behaviors should trigger action? Which pages prove commercial intent? Which fields must be present before a lead reaches sales?",
          "Once those rules are clear, build a simple demand loop: publish one useful point-of-view asset, turn it into paid creative, retarget engaged accounts, deanonymize high-intent website visitors where possible, and trigger outbound when the account shows real movement. The point is not volume. The point is cleaner timing and better relevance.",
        ],
        checklist: [
          "Week 1: ICP, signal map, CRM fields, and landing-page audit.",
          "Week 2: paid creative, proof assets, retargeting audiences, and UTM rules.",
          "Week 3: outbound sequence, routing workflow, and sales alert templates.",
          "Week 4: first optimization pass by account quality, not cheap leads.",
        ],
      },
      {
        id: "metrics",
        title: "Metrics that prove it is working",
        paragraphs: [
          "Lead volume is a weak primary metric because it rewards the easiest action, not the best buyer. Track the path from account engagement to sales conversation to pipeline. If the system is working, you should see faster follow-up, more relevant sales conversations, higher sales acceptance, and a clearer link between spend and pipeline.",
        ],
        checklist: [
          "Qualified account engagement.",
          "High-intent visitor identification.",
          "Signal-to-meeting conversion.",
          "MQL to SQL acceptance.",
          "Pipeline created by source and by account tier.",
        ],
      },
    ],
  },
  {
    slug: "google-ads-waste-audit",
    title: "Google Ads Waste Audit: Where Budget Leaks Hide",
    category: "Paid Media",
    tags: ["paid-media", "demand-gen"],
    readTime: "10 min read",
    accentRgb: "142, 163, 255",
    visualLabel: "Search waste map",
    description:
      "A Google Ads waste audit framework for finding low-quality search terms, weak conversion tracking, bad landing pages, and campaign structure problems before spend scales.",
    sections: [
      {
        id: "why-it-breaks",
        title: "Why Google Ads waste hides in plain sight",
        paragraphs: [
          "Google Ads can look healthy while wasting serious budget. CTR can rise, conversions can increase, and cost per lead can fall while the account sends weak-fit leads into the CRM. The issue is not always the bidding strategy. It is usually the combination of loose intent, poor conversion definitions, weak negatives, and landing pages that accept everyone.",
          "A useful Google Ads waste audit starts by separating platform performance from business performance. The ad account tells you what users clicked. The CRM tells you whether those clicks became pipeline. You need both views before making scaling decisions.",
        ],
        checklist: [
          "Audit search terms by buyer intent, not just cost.",
          "Separate demo, contact, download, and soft conversion actions.",
          "Compare campaign leads against CRM acceptance and closed-won data.",
        ],
      },
      {
        id: "operating-model",
        title: "The four waste buckets",
        paragraphs: [
          "Most waste falls into four buckets: bad intent, bad routing, bad pages, and bad measurement. Bad intent means the account is paying for education or job-seeker searches. Bad routing means good demand reaches the wrong owner or waits too long. Bad pages mean users arrive with intent but leave because the offer is unclear. Bad measurement means the algorithm learns from the wrong conversion event.",
          "The goal is not to make the account smaller. The goal is to make the learning signal cleaner. When the ad platform optimizes toward qualified pipeline instead of any form submission, budget moves toward terms and audiences that matter.",
        ],
        checklist: [
          "Create negative keyword lists for jobs, free, definition, template, and support intent.",
          "Use offline conversion imports or CRM-stage feedback where possible.",
          "Send high-intent search traffic to pages that match the exact search problem.",
        ],
      },
      {
        id: "execution",
        title: "The audit sequence",
        paragraphs: [
          "Start with conversion tracking. If the account is optimizing toward weak actions, every other fix is less useful. Then review search terms, match types, location settings, audiences, landing pages, and CRM outcomes. Keep a simple waste log that includes the source of waste, estimated monthly spend, root cause, and fix owner.",
          "The highest-leverage fixes are usually boring: conversion cleanup, tighter negatives, better landing-page relevance, and campaign naming that lets humans understand what is happening. These are the things that make later automation safer.",
        ],
        checklist: [
          "Day 1: tracking and conversion action audit.",
          "Day 2: search terms, negatives, match types, and query intent.",
          "Day 3: landing-page offer match and lead quality review.",
          "Day 4: CRM outcome analysis and budget reallocation plan.",
        ],
      },
      {
        id: "metrics",
        title: "Metrics to watch after the cleanup",
        paragraphs: [
          "Do not expect every surface metric to improve immediately. Tighter intent can reduce lead volume while improving sales acceptance. Judge the cleanup by qualified cost per opportunity, sales acceptance rate, and waste spend removed.",
        ],
        checklist: [
          "Waste spend removed.",
          "Cost per qualified lead.",
          "Sales acceptance by campaign.",
          "Opportunity rate by search theme.",
          "Landing-page conversion by commercial intent.",
        ],
      },
    ],
  },
  {
    slug: "linkedin-ads-benchmarks",
    title: "LinkedIn Ads Benchmarks for B2B SaaS",
    category: "Paid Media",
    tags: ["paid-media", "demand-gen"],
    readTime: "11 min read",
    accentRgb: "50, 205, 190",
    visualLabel: "B2B SaaS paid social",
    description:
      "A practical LinkedIn Ads benchmark guide for B2B SaaS teams covering CTR, CPC, CPL, lead quality, retargeting, creative, and pipeline expectations.",
    sections: [
      {
        id: "why-it-breaks",
        title: "Why LinkedIn Ads benchmarks get misused",
        paragraphs: [
          "LinkedIn Ads benchmarks are useful only when they are tied to campaign intent. A cold awareness campaign, competitor comparison campaign, gated report, retargeting campaign, and demo campaign should not be judged by the same CTR or CPL. Cheap leads can be bad, and expensive clicks can be profitable when they come from the right accounts.",
          "For B2B SaaS, the real benchmark is not whether the CPC feels high. It is whether the campaign is reaching the buying committee, creating useful engagement, and helping sales open qualified conversations.",
        ],
        checklist: [
          "Compare campaigns by objective and audience temperature.",
          "Separate lead gen forms from landing-page conversions.",
          "Measure account quality before judging CPL.",
        ],
      },
      {
        id: "operating-model",
        title: "A better benchmark model",
        paragraphs: [
          "Break LinkedIn campaigns into four layers: market education, proof, offer, and retargeting. Market education earns attention from the right audience. Proof reduces perceived risk. Offer campaigns convert active demand. Retargeting moves known visitors through the next step.",
          "Each layer has its own performance range. Education should be judged by engagement quality and account fit. Proof should be judged by repeat engagement and page depth. Offer campaigns should be judged by qualified conversion rate. Retargeting should be judged by assisted pipeline and meeting conversion.",
        ],
        checklist: [
          "Track engagement by account tier.",
          "Use proof ads before direct demo asks for cold audiences.",
          "Exclude customers, job seekers, and low-fit segments from paid audiences.",
        ],
      },
      {
        id: "execution",
        title: "What to fix first",
        paragraphs: [
          "If performance is weak, do not immediately blame the platform. Look at audience size, persona specificity, creative angle, landing-page offer, and handoff quality. Many LinkedIn campaigns fail because the ad asks for a meeting before the audience understands the problem or trusts the brand.",
          "A simple testing plan is enough: test one ICP, two pain angles, two proof angles, and one direct offer. Keep the landing page aligned with the ad promise and track every conversion through CRM outcome.",
        ],
        checklist: [
          "Build audiences by job function, seniority, company size, and exclusions.",
          "Use short creative that names the problem clearly.",
          "Retarget visitors with proof before asking for the call.",
          "Review pipeline quality every week, not just platform leads.",
        ],
      },
      {
        id: "metrics",
        title: "Useful LinkedIn Ads metrics",
        paragraphs: [
          "The account needs platform metrics, but the board needs commercial metrics. Keep both. Platform metrics help you debug creative and audience fit. Commercial metrics tell you whether the channel deserves budget.",
        ],
        checklist: [
          "CTR by audience and creative angle.",
          "Cost per engaged account.",
          "Landing-page conversion rate.",
          "Lead to sales accepted lead.",
          "Pipeline influenced by retargeting.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-visibility-guide",
    title: "AI Search Visibility Guide for B2B Brands",
    category: "AI Search",
    tags: ["ai-search", "demand-gen"],
    readTime: "9 min read",
    accentRgb: "188, 142, 255",
    visualLabel: "AI search surface",
    description:
      "A guide to earning visibility in AI search and answer engines by making your positioning, proof, comparisons, and topic authority easier for LLMs to understand and cite.",
    sections: [
      {
        id: "why-it-breaks",
        title: "Why AI search changes the content job",
        paragraphs: [
          "AI search compresses the discovery journey. Instead of opening ten tabs, buyers ask tools for shortlists, tradeoffs, definitions, and recommendations. If your site does not clearly explain what you do, who you serve, what proof you have, and how you compare, you make it harder for AI systems and human buyers to understand you.",
          "This does not mean traditional SEO is dead. It means the content standard is higher. Pages need to be clear, structured, entity-rich, and useful enough to answer the exact questions buyers ask during evaluation.",
        ],
        checklist: [
          "Make the business category and ICP explicit on key pages.",
          "Create comparison, alternative, use-case, and proof content.",
          "Use consistent naming across site titles, headings, schema, and internal links.",
        ],
      },
      {
        id: "operating-model",
        title: "The AI visibility operating model",
        paragraphs: [
          "Think in clusters. One service page cannot carry the whole topic. You need a hub that explains the category, supporting guides that answer specific questions, case studies that prove outcomes, and resource pages that show operational depth.",
          "Structure matters. Clear headings, short definitions, FAQs, internal links, and schema help machines parse the content. But the page still has to be useful for humans. Do not write for bots. Write for a skeptical buyer who wants clear thinking and proof.",
        ],
        checklist: [
          "Build topic hubs around core services and expertise pages.",
          "Add FAQs that answer real buying questions.",
          "Use descriptive internal links between service pages, guides, and case studies.",
        ],
      },
      {
        id: "execution",
        title: "What to publish first",
        paragraphs: [
          "Start with the pages that clarify commercial intent: service pages, expertise pages, comparison content, and practical guides. Then build supporting resources that answer implementation questions. This mix helps search engines, AI tools, and buyers connect your expertise to real problems.",
          "A good first sprint includes one category guide, three tactical guides, one comparison page, and one case study refresh. Every page should link back to the relevant service page and forward to the next logical action.",
        ],
        checklist: [
          "Update page titles and meta descriptions around buyer language.",
          "Add article schema to guide pages and organization schema to core pages.",
          "Create a related resources block on every guide.",
          "Refresh old thin pages or remove them from indexable paths.",
        ],
      },
      {
        id: "metrics",
        title: "How to measure AI search progress",
        paragraphs: [
          "AI search visibility is still difficult to measure perfectly, so track leading indicators: impressions on long-tail questions, branded search growth, referral traffic from AI surfaces where available, citations in answer engines, and assisted conversions from content paths.",
        ],
        checklist: [
          "Queries where your brand appears with service terms.",
          "Traffic to comparison and definition pages.",
          "Assistant referral traffic.",
          "Content-assisted pipeline.",
          "Internal-link depth from guides to contact pages.",
        ],
      },
    ],
  },
  {
    slug: "outbound-data-stack-clay-apollo",
    title: "Outbound Data Stack with Clay, Apollo, and CRM Signals",
    category: "Outbound",
    tags: ["outbound", "revops"],
    readTime: "13 min read",
    accentRgb: "255, 184, 77",
    visualLabel: "Outbound data stack",
    description:
      "A practical outbound data stack guide covering account sourcing, enrichment, intent signals, list QA, CRM sync, and sequence readiness for B2B sales teams.",
    sections: [
      {
        id: "why-it-breaks",
        title: "Why outbound stacks create bad pipeline",
        paragraphs: [
          "Outbound fails when the list is treated as a commodity. If the data is stale, the account fit is vague, and the message has no trigger, the sequence has to work too hard. Better copy will not save a bad list.",
          "The modern outbound stack should not just find emails. It should identify the right accounts, enrich them with useful context, detect buying signals, and push clean records into the CRM with ownership and source data intact.",
        ],
        checklist: [
          "Define account fit before selecting data tools.",
          "Use enrichment to add context, not just email addresses.",
          "Block records that fail list QA before they reach sequences.",
        ],
      },
      {
        id: "operating-model",
        title: "Stack architecture",
        paragraphs: [
          "Use Apollo or a similar database for initial sourcing, Clay for enrichment and logic, a verification layer for deliverability, and the CRM as the source of truth for ownership and lifecycle state. The exact tools can change. The operating model should not.",
          "Every record should answer four questions: why this company, why this contact, why now, and what should the rep say first. If the record cannot answer those questions, it is not ready for outbound.",
        ],
        checklist: [
          "Account source and ICP match.",
          "Contact role and seniority validation.",
          "Trigger or relevance field.",
          "Email verification and suppression checks.",
          "CRM owner and lifecycle-state sync.",
        ],
      },
      {
        id: "execution",
        title: "The build sequence",
        paragraphs: [
          "Start with a small test segment. Build 200 to 500 records, enrich them, score them, and review them manually before scaling. This is where you catch bad assumptions about titles, segments, triggers, and exclusions.",
          "After the test segment performs, turn the workflow into a repeatable pipeline. Keep the logic visible so sales and marketing can understand why accounts are entering the system.",
        ],
        checklist: [
          "Build a test list from one ICP and one trigger.",
          "Add enrichment fields that change the message angle.",
          "Score records and suppress low-confidence data.",
          "Sync only approved records into CRM and sequencing tools.",
        ],
      },
      {
        id: "metrics",
        title: "Outbound data metrics",
        paragraphs: [
          "Do not only track replies. Track data quality before the sequence starts. A better list should show higher valid email rate, better account match, cleaner routing, stronger positive reply rate, and fewer irrelevant objections.",
        ],
        checklist: [
          "Valid email rate.",
          "ICP match rate.",
          "Suppression hit rate.",
          "Positive reply rate.",
          "Meetings by trigger source.",
        ],
      },
    ],
  },
  {
    slug: "real-time-lead-routing-intent",
    title: "Real-Time Lead Routing and Intent Signals",
    category: "RevOps",
    tags: ["revops", "demand-gen", "outbound"],
    readTime: "10 min read",
    accentRgb: "255, 122, 102",
    visualLabel: "Routing system",
    description:
      "A guide to routing high-intent leads and accounts faster by using form data, website behavior, account fit, owner rules, and sales alerts.",
    sections: [
      {
        id: "why-it-breaks",
        title: "Why speed to lead still matters",
        paragraphs: [
          "A buyer who asks for a demo, returns to pricing, or visits a comparison page is creating a timing advantage. Many teams lose that advantage because routing rules are unclear, CRM ownership is messy, or alerts arrive without useful context.",
          "Real-time lead routing is not just about moving fast. It is about moving the right signal to the right person with the right context so the follow-up feels informed.",
        ],
        checklist: [
          "Identify the forms, pages, and events that indicate active buying intent.",
          "Clean owner assignment rules before adding automation.",
          "Send sales context, not just a notification.",
        ],
      },
      {
        id: "operating-model",
        title: "The routing model",
        paragraphs: [
          "Every routed lead should pass through three decisions: fit, urgency, and ownership. Fit tells you whether the account is worth sales time. Urgency tells you how quickly the team should respond. Ownership tells you who acts first.",
          "High-fit and high-urgency leads should trigger direct alerts, calendar links, and backup routing if the owner does not act. Lower urgency signals can move into nurture, retargeting, or account monitoring.",
        ],
        checklist: [
          "Fit score based on company size, category, geography, and disqualifiers.",
          "Urgency score based on form type and page behavior.",
          "Owner rule based on territory, segment, named account, or round robin.",
        ],
      },
      {
        id: "execution",
        title: "Implementation path",
        paragraphs: [
          "Start by documenting every intake path. Demo forms, contact forms, webinar registrations, calculator submissions, high-intent page visits, chat requests, and manual imports all need clear routing behavior.",
          "Then build a simple SLA system. The first owner gets the alert. If they do not act, a backup path triggers. If the lead is enterprise or named account, sales leadership can be notified. This prevents warm demand from disappearing quietly.",
        ],
        checklist: [
          "Create one routing table for all forms and intent events.",
          "Add required CRM fields before the handoff.",
          "Send alerts with company, page, source, message, and next action.",
          "Track SLA misses and reassign when necessary.",
        ],
      },
      {
        id: "metrics",
        title: "Metrics that matter",
        paragraphs: [
          "The best routing system should improve time to first touch, sales acceptance, meeting conversion, and pipeline created from high-intent signals. If it only creates more alerts, it is not finished.",
        ],
        checklist: [
          "Median time to first touch.",
          "SLA hit rate.",
          "High-intent meeting conversion.",
          "Pipeline from routed signals.",
          "Owner reassignment rate.",
        ],
      },
    ],
  },
  {
    slug: "cro-operators-handbook",
    title: "CRO Operator's Handbook for Growth Teams",
    category: "CRO",
    tags: ["cro", "paid-media", "demand-gen"],
    readTime: "12 min read",
    accentRgb: "255, 138, 210",
    visualLabel: "Conversion system",
    description:
      "A CRO operator guide for improving landing pages, forms, offer clarity, experiment design, and conversion quality across paid and organic growth channels.",
    sections: [
      {
        id: "why-it-breaks",
        title: "Why CRO becomes random",
        paragraphs: [
          "Most CRO programs turn into random page edits because the team skips diagnosis. They change button colors, shorten forms, rewrite headlines, and celebrate tiny lift without understanding whether the change improved lead quality.",
          "Real CRO starts with the buying problem. What does the visitor need to believe before taking action? What risk are they trying to reduce? What information is missing? What proof would make the next step feel safer?",
        ],
        checklist: [
          "Audit visitor intent by source and landing page.",
          "Identify the promise made before the click.",
          "Check whether the page answers objections before the CTA.",
        ],
      },
      {
        id: "operating-model",
        title: "The CRO operating model",
        paragraphs: [
          "Use a simple diagnostic model: clarity, relevance, friction, proof, and measurement. Clarity asks whether the page makes the offer obvious. Relevance checks whether the page matches the traffic source. Friction looks at the effort required. Proof reduces perceived risk. Measurement confirms that the conversion is commercially useful.",
          "This model works across SaaS, services, ecommerce, and lead generation because it forces the team to fix the buyer's path instead of chasing surface-level design opinions.",
        ],
        checklist: [
          "Clarity: can a visitor explain the offer in five seconds?",
          "Relevance: does the page match the ad or search intent?",
          "Friction: are you asking for more effort than the offer deserves?",
          "Proof: is the claim supported before the CTA?",
          "Measurement: do form fills become qualified pipeline or revenue?",
        ],
      },
      {
        id: "execution",
        title: "Experiment design",
        paragraphs: [
          "Good experiments isolate one meaningful hypothesis. Instead of testing a random new page, define the belief you are trying to change. For example: visitors do not understand the commercial outcome, the proof is too weak, the CTA is too large a commitment, or the form asks for unnecessary information.",
          "Pair quantitative data with qualitative review. Analytics shows where people drop. Session review and sales feedback explain why. Then ship tests that address the real bottleneck.",
        ],
        checklist: [
          "Write the hypothesis before changing the page.",
          "Define the primary and secondary metrics.",
          "Segment results by source and device.",
          "Review lead quality after the test, not just conversion rate.",
        ],
      },
      {
        id: "metrics",
        title: "CRO metrics to track",
        paragraphs: [
          "Conversion rate matters, but it is not enough. The goal is more qualified action and better revenue efficiency. Track conversion quality, sales acceptance, cost per qualified lead, and downstream opportunity rate.",
        ],
        checklist: [
          "Visitor to qualified conversion.",
          "Form completion by field.",
          "Lead to sales accepted lead.",
          "Opportunity rate by landing page.",
          "Cost per qualified conversion.",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-retention-audit",
    title: "Ecommerce Retention Audit for Paid Growth Brands",
    category: "Ecommerce",
    tags: ["ecommerce", "paid-media"],
    readTime: "10 min read",
    accentRgb: "116, 245, 161",
    visualLabel: "Retention map",
    description:
      "An ecommerce retention audit framework for improving repeat purchase, email and SMS lifecycle flows, VIP segmentation, win-back, reviews, and paid media efficiency.",
    sections: [
      {
        id: "why-it-breaks",
        title: "Why acquisition hides retention problems",
        paragraphs: [
          "Ecommerce brands can grow revenue while weakening the business. If new customer acquisition gets more expensive and repeat purchase stays flat, every paid media win becomes harder to sustain. Retention is not a nice-to-have. It is what makes paid growth affordable.",
          "The audit starts by asking how much revenue comes from existing customers, how quickly buyers reorder, and which lifecycle moments are missing. Many brands have flows, but the flows are generic, badly timed, or disconnected from product margin.",
        ],
        checklist: [
          "Separate first purchase revenue from returning customer revenue.",
          "Map reorder windows by product category.",
          "Audit email, SMS, paid retargeting, and onsite offers together.",
        ],
      },
      {
        id: "operating-model",
        title: "The retention system",
        paragraphs: [
          "A retention system has five layers: post-purchase education, review generation, replenishment or cross-sell, VIP segmentation, and win-back. Each layer should be based on buyer behavior, not a fixed calendar copied from another brand.",
          "The strongest brands use segmentation to protect margin. High-value customers receive access, recognition, and relevant offers. Discount-sensitive customers receive controlled incentives. New buyers receive reassurance and education before the next ask.",
        ],
        checklist: [
          "Post-purchase flow matched to product usage.",
          "Review and UGC requests timed after delivery and usage.",
          "Cross-sell logic based on first product purchased.",
          "VIP segment based on recency, frequency, and monetary value.",
        ],
      },
      {
        id: "execution",
        title: "Retention audit sequence",
        paragraphs: [
          "Start with the customer file. Segment by first purchase date, last purchase date, order count, AOV, product category, and margin. Then review each lifecycle flow against those segments.",
          "Next, connect retention to paid media. Existing buyers should not always see the same acquisition ads as cold prospects. Use paid channels to support replenishment, win-back, and VIP launches when the economics make sense.",
        ],
        checklist: [
          "Build RFM segments.",
          "Audit post-purchase, replenishment, win-back, and VIP flows.",
          "Sync high-value segments into paid platforms where useful.",
          "Measure retained revenue by flow and segment.",
        ],
      },
      {
        id: "metrics",
        title: "Retention metrics",
        paragraphs: [
          "Retention work should show up in repeat purchase rate, revenue from existing customers, AOV, margin, and paid media efficiency. If repeat buyers become more valuable, the brand can afford stronger acquisition.",
        ],
        checklist: [
          "Repeat purchase rate.",
          "Time to second purchase.",
          "Revenue from existing customers.",
          "Win-back conversion.",
          "LTV to CAC by cohort.",
        ],
      },
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

function bodyShell(title, description, bodyClass, mainHtml, extraHead = "") {
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="/brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="/foundation-styles.css" />
  <link rel="stylesheet" href="/foundation-slater.css" />
  <link rel="stylesheet" href="/weflair-hero.css" />
  <link rel="stylesheet" href="/weflair-resources-library.css" />
  <script src="/foundation.js" defer></script>
  <script src="/weflair-hero.js" defer></script>
  <script src="/weflair-resources-library.js" defer></script>
${extraHead}</head>
<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body wfr-page ${bodyClass}" style="padding-top:var(--nav-bar-height,5rem)">
  <div class="noise is--small" style="z-index:9999; pointer-events:none;"></div>
  <header class="header">${HEADER}</header>
${mainHtml}
  ${FOOTER}
</body>
</html>
`;
}

function arrowSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/><path d="M8 7h9v9" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/></svg>`;
}

function miniVisual() {
  return `<div class="wfr-visual-window" aria-hidden="true">
    <div class="wfr-visual-window__row"><span class="wfr-visual-dot"></span><span class="wfr-visual-line"></span><span class="wfr-visual-pill"></span></div>
    <div class="wfr-visual-window__row"><span class="wfr-visual-dot"></span><span class="wfr-visual-line"></span><span class="wfr-visual-pill"></span></div>
    <div class="wfr-visual-window__row"><span class="wfr-visual-dot"></span><span class="wfr-visual-line"></span><span class="wfr-visual-pill"></span></div>
  </div>`;
}

function card(item, type) {
  const href = type === "guide" ? `/resources/guides/${item.slug}.html` : item.href;
  const tags = item.tags.join(" ");
  return `<a class="wfr-card" href="${href}" data-wfr-card data-wfr-group="${type}" data-wfr-tags="${tags}" style="--accent-rgb:${item.accentRgb}">
    <div class="wfr-card__visual">${miniVisual()}</div>
    <div class="wfr-card__body">
      <div class="wfr-card__meta">
        <span class="wfr-chip">${escapeHtml(item.category)}</span>
        <span class="wfr-chip">${escapeHtml(type === "guide" ? item.readTime : item.format)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary || item.description)}</p>
      <div class="wfr-card__footer">
        <span>${escapeHtml(type === "guide" ? updated : item.kicker)}</span>
        <span class="wfr-card__arrow">${arrowSvg()}</span>
      </div>
    </div>
  </a>`;
}

function filterBar(group, filters) {
  return `<div class="wfr-filterbar" aria-label="${group} filters">
    ${filters
      .map(
        (filter, index) =>
          `<button class="wfr-filter${index === 0 ? " is-active" : ""}" type="button" data-wfr-group="${group}" data-wfr-filter="${filter.value}" aria-pressed="${index === 0 ? "true" : "false"}">${escapeHtml(filter.label)}</button>`
      )
      .join("\n    ")}
  </div>`;
}

function buildHub() {
  const playbookFilters = [
    { label: "All", value: "all" },
    { label: "Outbound", value: "outbound" },
    { label: "Paid Media", value: "paid-media" },
    { label: "RevOps", value: "revops" },
    { label: "Demand Gen", value: "demand-gen" },
  ];
  const guideFilters = [
    { label: "All", value: "all" },
    { label: "Demand Gen", value: "demand-gen" },
    { label: "Paid Media", value: "paid-media" },
    { label: "Outbound", value: "outbound" },
    { label: "RevOps", value: "revops" },
    { label: "CRO", value: "cro" },
    { label: "Ecommerce", value: "ecommerce" },
    { label: "AI Search", value: "ai-search" },
  ];

  const main = `<main class="main">
  <section class="wfr-hero">
    <div class="wfr-shell wfr-hero__grid">
      <div>
        <div class="wfr-eyebrow">Guides and playbooks</div>
        <h1 class="wfr-hero__title">Guides &amp; playbooks for growth operators.</h1>
        <p class="wfr-hero__copy">A clean library of execution playbooks and deep guides for B2B demand generation, paid media, outbound, RevOps, CRO, ecommerce, and AI search visibility. Built to be useful before a sales call, not gated behind one.</p>
        <div class="wfr-hero__actions">
          <a data-hover="" data-btn-theme="primary" href="#guides" class="btn w-inline-block weflair-btn weflair-btn--primary"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Browse guides</span></div></a>
          <a data-hover="" data-btn-theme="transparent" href="/resource-pack.html" class="btn w-inline-block weflair-btn weflair-btn--ghost"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Get the resource pack</span></div></a>
        </div>
      </div>
      <aside class="wfr-hero-card" aria-label="Resource library preview">
        <div class="wfr-hero-card__inner">
          <div class="wfr-stack-card"><span>Playbook</span><strong>Signal-based outbound</strong><p>Find accounts, enrich context, route signals, launch sequences.</p></div>
          <div class="wfr-stack-card"><span>Guide</span><strong>Paid media waste audit</strong><p>Find hidden spend leaks before campaigns scale.</p></div>
          <div class="wfr-stack-card"><span>Guide</span><strong>AI search visibility</strong><p>Build pages that humans and answer engines can understand.</p></div>
        </div>
      </aside>
    </div>
  </section>

  <section class="wfr-stats">
    <div class="wfr-shell wfr-stats__grid">
      <article class="wfr-stat"><strong>6</strong><span>featured playbooks for repeatable execution across outbound, paid, and RevOps.</span></article>
      <article class="wfr-stat"><strong>8</strong><span>operator-grade guides with real topics, proper pages, and internal links.</span></article>
      <article class="wfr-stat"><strong>2026</strong><span>updated for the current buying journey, AI search, signal-based GTM, and rising CAC.</span></article>
    </div>
  </section>

  <section class="wfr-section wfr-section--tight" id="playbooks">
    <div class="wfr-shell">
      <div class="wfr-section__head">
        <div>
          <div class="wfr-eyebrow">Featured plays</div>
          <h2 class="wfr-section__title">Run the system.</h2>
        </div>
        <p class="wfr-section__copy">These are execution-first resources: specific workflows, stacks, routing logic, sequences, and QA steps that a growth team can actually run.</p>
      </div>
      ${filterBar("playbook", playbookFilters)}
      <div class="wfr-card-grid">${playbooks.map((item) => card(item, "playbook")).join("\n")}</div>
    </div>
  </section>

  <section class="wfr-section" id="guides">
    <div class="wfr-shell">
      <div class="wfr-section__head">
        <div>
          <div class="wfr-eyebrow">Deep guides</div>
          <h2 class="wfr-section__title">Learn the model.</h2>
        </div>
        <p class="wfr-section__copy">The guides go deeper on strategy, diagnosis, channel economics, and operating systems. They are built around topics a serious growth buyer would search and evaluate.</p>
      </div>
      ${filterBar("guide", guideFilters)}
      <div class="wfr-card-grid">${guides.map((item) => card(item, "guide")).join("\n")}</div>
    </div>
  </section>

  <section class="wfr-section">
    <div class="wfr-shell">
      <div class="wfr-cta-panel">
        <div>
          <h2>Need the answer for your own system?</h2>
          <p>Use the guides if you want to learn the model. Book a growth audit if you want the leaks, priorities, and next actions mapped against your accounts.</p>
        </div>
        <a data-hover="" data-btn-theme="primary" href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Request a growth audit</span></div></a>
      </div>
    </div>
  </section>
</main>`;

  return bodyShell(
    "Guides & Playbooks | WeFlair",
    "Practical growth playbooks and deep-dive guides for B2B demand generation, paid media, outbound, RevOps, CRO, ecommerce, and AI search.",
    "wfr-library-page",
    main
  );
}

function guideVisual(guide) {
  return `<aside class="wfr-guide-visual" style="--accent-rgb:${guide.accentRgb}" aria-label="${escapeHtml(guide.visualLabel)}">
    <div class="wfr-guide-visual__screen">
      <div class="wfr-guide-visual__top">
        <span class="wfr-guide-visual__label">${escapeHtml(guide.visualLabel)}</span>
        <span class="wfr-guide-visual__badge">Updated ${updated}</span>
      </div>
      <div class="wfr-guide-visual__grid">
        <div class="wfr-guide-visual__panel"><strong>Signal</strong><div class="wfr-guide-visual__bar"></div><div class="wfr-guide-visual__bar"></div><div class="wfr-guide-visual__bar"></div></div>
        <div class="wfr-guide-visual__panel"><strong>Pipeline impact</strong><div class="wfr-guide-visual__bar"></div><div class="wfr-guide-visual__bar"></div><div class="wfr-guide-visual__bar"></div></div>
      </div>
      <div class="wfr-guide-visual__panel"><strong>Operator checklist</strong><div class="wfr-guide-visual__bar"></div><div class="wfr-guide-visual__bar"></div><div class="wfr-guide-visual__bar"></div></div>
    </div>
  </aside>`;
}

function articleSchema(guide) {
  return `<script type="application/ld+json">
${JSON.stringify(
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: "2026-04-30T09:00:00Z",
    dateModified: "2026-04-30T09:00:00Z",
    author: {
      "@type": "Person",
      name: "Sami Madi",
      worksFor: {
        "@type": "Organization",
        name: "WeFlair",
        url: "https://weflair.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "WeFlair",
      url: "https://weflair.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://weflair.com/resources/guides/${guide.slug}.html`,
    },
    articleSection: guide.category,
  },
  null,
  2
)}
  </script>
`;
}

function relatedLinks(currentGuide) {
  return guides
    .filter((guide) => guide.slug !== currentGuide.slug)
    .slice(0, 2)
    .map(
      (guide) =>
        `<a href="/resources/guides/${guide.slug}.html"><span>${escapeHtml(guide.category)}</span><strong>${escapeHtml(guide.title)}</strong></a>`
    )
    .join("\n");
}

function buildGuide(guide) {
  const toc = guide.sections
    .map((section) => `<a href="#${section.id}">${escapeHtml(section.title)}</a>`)
    .join("\n");
  const sections = guide.sections
    .map(
      (section) => `<section id="${section.id}">
        <h2>${escapeHtml(section.title)}</h2>
        ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n")}
        <ul class="wfr-checklist">
          ${section.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n")}
        </ul>
      </section>`
    )
    .join("\n");

  const main = `<main class="main">
  <section class="wfr-article-hero">
    <div class="wfr-shell">
      <nav class="wfr-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/resources/playbooks.html">Guides &amp; Playbooks</a><span>/</span><span>${escapeHtml(guide.category)}</span></nav>
      <div class="wfr-article-hero__grid">
        <div>
          <div class="wfr-eyebrow">${escapeHtml(guide.category)} guide</div>
          <h1>${escapeHtml(guide.title)}</h1>
          <p class="wfr-article-hero__lead">${escapeHtml(guide.description)}</p>
          <div class="wfr-article-meta">
            <span>${escapeHtml(guide.readTime)}</span>
            <span>Updated ${updated}</span>
            <span>WeFlair growth library</span>
          </div>
        </div>
        ${guideVisual(guide)}
      </div>
    </div>
  </section>
  <section class="wfr-shell wfr-article-layout" style="--accent-rgb:${guide.accentRgb}">
    <aside class="wfr-toc" aria-label="Guide sections">
      <strong>In this guide</strong>
      ${toc}
    </aside>
    <article class="wfr-article">
      <div class="wfr-callout"><strong>Operator note</strong><p>This guide is written for teams that need pipeline, revenue clarity, and cleaner execution. Use it as a diagnostic before you add another campaign, channel, or tool.</p></div>
      ${sections}
      <section id="next-step">
        <h2>Next step</h2>
        <p>If this guide maps to a problem you are seeing in your own account, the fastest next move is a focused growth audit. We will identify the leak, show the operating fix, and tell you whether WeFlair is the right team to execute it.</p>
        <div class="wfr-related">${relatedLinks(guide)}</div>
      </section>
    </article>
  </section>
</main>`;

  return bodyShell(`${guide.title} | WeFlair Guides`, guide.description, "wfr-guide-page", main, articleSchema(guide));
}

function archiveExistingGuides() {
  fs.mkdirSync(GUIDES_DIR, { recursive: true });
  const files = fs.readdirSync(GUIDES_DIR).filter((file) => file.endsWith(".html"));
  if (!files.length) return;

  fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
  for (const file of files) {
    const source = path.join(GUIDES_DIR, file);
    let target = path.join(ARCHIVE_DIR, file);
    if (fs.existsSync(target)) {
      const parsed = path.parse(file);
      target = path.join(ARCHIVE_DIR, `${parsed.name}-${Date.now()}${parsed.ext}`);
    }
    fs.renameSync(source, target);
  }
}

function writeFile(relativePath, content) {
  const target = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content, "utf8");
}

archiveExistingGuides();
writeFile("resources/playbooks.html", buildHub());
for (const guide of guides) {
  writeFile(`resources/guides/${guide.slug}.html`, buildGuide(guide));
}

console.log(`Rebuilt Guides & Playbooks hub and ${guides.length} guide pages.`);
