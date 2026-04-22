window.WEFLAIR_PLAYBOOKS = [
  {
    slug: "lookalike-outbound-engine",
    title: "Lookalike Outbound Engine",
    category: "outbound",
    featured: true,
    kicker: "Signals + prospecting",
    summary: "Clone your best-fit customer profile, enrich it with live buying signals, and build a cleaner outbound engine without guessing who to target next.",
    audience: "B2B teams with a handful of strong customers and no repeatable way to find more like them.",
    format: "Playbook + list build worksheet",
    effort: "2 to 3 week build",
    stack: ["Clay", "Apollo", "HubSpot"],
    includes: [
      "Best-fit account cloning framework",
      "Signal layer checklist",
      "List QA scorecard",
      "First-touch sequence skeleton"
    ],
    steps: [
      {
        title: "Model the right account",
        body: "Turn your best customers into a practical account model using revenue, team shape, tech stack, and buying behavior."
      },
      {
        title: "Layer in real intent",
        body: "Prioritize accounts with hiring, funding, expansion, content, and website signals so reps work active demand instead of cold lists."
      },
      {
        title: "Launch outreach with control",
        body: "Push clean records into your CRM, assign ownership, and ship a tested first-touch sequence tied to the account model."
      }
    ],
    metrics: ["Match quality", "Reply rate", "Meeting rate"]
  },
  {
    slug: "visitor-deanonymization-sprint",
    title: "Visitor Deanonymization Sprint",
    category: "outbound",
    featured: true,
    kicker: "Website intent capture",
    summary: "Turn anonymous website traffic into named accounts, route hot visits fast, and trigger outreach before the buying window cools off.",
    audience: "Demand teams generating traffic but losing the companies that browse and bounce.",
    format: "Playbook + routing blueprint",
    effort: "1 to 2 week build",
    stack: ["RB2B", "Clearbit", "HubSpot"],
    includes: [
      "High-intent page map",
      "Company reveal rules",
      "Sales alert workflow",
      "Follow-up timing guide"
    ],
    steps: [
      {
        title: "Define what counts as intent",
        body: "Separate low-value browsing from serious buyer behavior by mapping pricing, solution, comparison, and case-study page activity."
      },
      {
        title: "Reveal and enrich accounts",
        body: "Capture visiting companies, append owner-ready context, and remove junk traffic before it pollutes the pipeline."
      },
      {
        title: "Trigger fast outreach",
        body: "Send account-level alerts with the right page context so the first follow-up feels relevant instead of random."
      }
    ],
    metrics: ["Identified accounts", "Speed to follow-up", "Meetings from traffic"]
  },
  {
    slug: "direct-outreach-campaign",
    title: "Direct Outreach Campaign",
    category: "outbound",
    featured: true,
    kicker: "Personal channels",
    summary: "Use low-competition direct outreach across email, voice, and founder-level touches to earn replies without sounding automated.",
    audience: "Founder-led and sales-led teams that need more conversations from a tight target account list.",
    format: "Playbook + sequence pack",
    effort: "2 week launch",
    stack: ["Smartlead", "LinkedIn", "HubSpot"],
    includes: [
      "Touch-pattern template",
      "Reply handling matrix",
      "Founder note examples",
      "Follow-up escalation logic"
    ],
    steps: [
      {
        title: "Pick the right lane",
        body: "Match channel, sender, and message weight to the account type so you are not using the same outreach motion for every lead."
      },
      {
        title: "Write for response",
        body: "Build short, context-heavy touches that open loops and make it easy for prospects to answer, forward, or redirect."
      },
      {
        title: "Escalate without spamming",
        body: "Change angle, sender, and channel as the sequence progresses so follow-ups feel intentional rather than repetitive."
      }
    ],
    metrics: ["Positive reply rate", "Meetings booked", "Channel efficiency"]
  },
  {
    slug: "social-signals-trigger-play",
    title: "Social Signals Trigger Play",
    category: "paid",
    featured: true,
    kicker: "Social intent detection",
    summary: "Capture buying signals from LinkedIn activity, content engagement, and role changes, then route them into relevant sales and nurture motions.",
    audience: "B2B teams selling into defined ICPs where social engagement is an early buying clue.",
    format: "Playbook + monitoring logic",
    effort: "1 week setup",
    stack: ["LinkedIn", "Clay", "Slack"],
    includes: [
      "Signal taxonomy",
      "Monitoring workflow",
      "Rep handoff rules",
      "Message angle prompts"
    ],
    steps: [
      {
        title: "Track the right social events",
        body: "Focus on behavior that signals movement, such as role changes, problem-aware posts, competitor engagement, and buying committee interaction."
      },
      {
        title: "Score and route each trigger",
        body: "Sort signals by urgency so reps can jump on time-sensitive activity while marketing handles softer engagement."
      },
      {
        title: "Respond with context",
        body: "Use the signal itself to shape the outreach so the message feels timely and specific, not scraped and generic."
      }
    ],
    metrics: ["Triggered opportunities", "Rep response time", "Signal-to-meeting rate"]
  },
  {
    slug: "lead-magnet-acceleration-system",
    title: "Lead Magnet Acceleration System",
    category: "paid",
    featured: true,
    kicker: "Offer to pipeline",
    summary: "Package a useful resource, route demand into the CRM correctly, and use a short conversion sequence to push readers into real sales conversations.",
    audience: "Teams getting downloads but not enough qualified follow-through after the form fill.",
    format: "Playbook + nurture sequence",
    effort: "2 week build",
    stack: ["HubSpot", "GA4", "Meta Ads"],
    includes: [
      "Offer positioning guide",
      "Form friction rules",
      "Post-download email flow",
      "Sales-ready handoff criteria"
    ],
    steps: [
      {
        title: "Position the resource properly",
        body: "Frame the magnet around a painful job to be done so the asset attracts buyers, not just curiosity clicks."
      },
      {
        title: "Capture and classify the lead",
        body: "Keep the form lean, route the submission correctly, and assign lead state based on offer type and account quality."
      },
      {
        title: "Accelerate to conversation",
        body: "Use a short follow-up sequence with one next step per message so the lead moves toward a real decision point."
      }
    ],
    metrics: ["Download-to-MQL", "Follow-up engagement", "Demo conversion"]
  },
  {
    slug: "case-study-pipeline-loop",
    title: "Case Study Pipeline Loop",
    category: "revops",
    featured: true,
    kicker: "Proof to demand",
    summary: "Turn wins, before-and-after stories, and client outcomes into reusable pipeline assets that support outbound, paid, and sales follow-up.",
    audience: "Teams with good results trapped in decks, docs, and Slack threads that never make it into the funnel.",
    format: "Playbook + proof distribution map",
    effort: "2 week sprint",
    stack: ["Notion", "HubSpot", "LinkedIn"],
    includes: [
      "Case study capture template",
      "Proof distribution matrix",
      "Sales follow-up snippets",
      "Retargeting asset guide"
    ],
    steps: [
      {
        title: "Capture the win properly",
        body: "Pull out the market context, operating constraint, intervention, and measurable outcome so the proof is usable across channels."
      },
      {
        title: "Repackage by funnel stage",
        body: "Break one story into short proof assets for ads, outbound follow-up, sales collateral, and landing-page support."
      },
      {
        title: "Loop proof back into pipeline",
        body: "Trigger the right proof asset when a buyer stalls, objects, or asks for validation so your team is not rebuilding materials every time."
      }
    ],
    metrics: ["Proof-assisted meetings", "Stage progression", "Sales cycle reduction"]
  },
  {
    slug: "omnichannel-sdr-cadence",
    title: "Omnichannel SDR Cadence",
    category: "outbound",
    featured: false,
    kicker: "Outbound and signal capture",
    summary: "A 14-day cadence that blends email, LinkedIn, and call touches without burning the lead or the domain.",
    audience: "SDR teams running medium- to high-volume prospecting into known target accounts.",
    format: "Sequence template",
    effort: "5 day rollout",
    stack: ["Smartlead", "LinkedIn", "Aircall"],
    includes: [
      "Day-by-day cadence map",
      "Channel weighting rules",
      "Call opener prompts",
      "Domain safety checklist"
    ],
    steps: [
      {
        title: "Set the touch plan",
        body: "Define how many touches each persona should receive and which channels carry the highest intent for that segment."
      },
      {
        title: "Write message variations",
        body: "Prepare short variants so the sequence changes angle instead of repeating the same ask over and over."
      },
      {
        title: "Measure by stage",
        body: "Track opens, positive replies, conversations, and booked meetings so the cadence can be tuned without guesswork."
      }
    ],
    metrics: ["Conversation rate", "Meetings booked", "Domain health"]
  },
  {
    slug: "inbound-speed-to-lead-router",
    title: "Inbound Speed-to-Lead Router",
    category: "outbound",
    featured: false,
    kicker: "Outbound and signal capture",
    summary: "Route inbound demo requests and hand-raisers to the right owner in minutes, not hours, with fail-safe alerts and backup paths.",
    audience: "Sales teams losing warm demand because the handoff from form fill to calendar booking is messy.",
    format: "Routing blueprint",
    effort: "1 week build",
    stack: ["HubSpot", "Slack", "Calendly"],
    includes: [
      "Routing decision tree",
      "Fallback ownership rules",
      "Alert escalation logic",
      "SLA dashboard prompts"
    ],
    steps: [
      {
        title: "Map the intake paths",
        body: "Identify every route into the funnel, from demo forms to hand-raise CTAs and high-intent chatbot events."
      },
      {
        title: "Assign owners cleanly",
        body: "Set territory, segment, and exception rules so the system does not create duplicate ownership or orphan leads."
      },
      {
        title: "Escalate missed follow-up",
        body: "Trigger manager alerts and backup routing when the SLA is breached so warm demand never goes cold quietly."
      }
    ],
    metrics: ["Time to first touch", "SLA hit rate", "Inbound meeting rate"]
  },
  {
    slug: "enterprise-multi-threading-plan",
    title: "Enterprise Multi-Threading Plan",
    category: "outbound",
    featured: false,
    kicker: "Outbound and signal capture",
    summary: "Expand from one champion to the wider buying committee without losing the thread or creating internal conflict.",
    audience: "AE and SDR teams working larger deals where single-threaded relationships stall late in the cycle.",
    format: "Account engagement plan",
    effort: "2 week rollout",
    stack: ["Sales Navigator", "HubSpot", "Notion"],
    includes: [
      "Committee map worksheet",
      "Role-based messaging prompts",
      "Champion protection rules",
      "Escalation timing guide"
    ],
    steps: [
      {
        title: "Map the committee",
        body: "List economic, technical, and operational stakeholders so the deal does not rely on one overworked internal advocate."
      },
      {
        title: "Sequence the threads",
        body: "Introduce new contacts in the right order with messages tied to their function, risk, and motivation."
      },
      {
        title: "Keep the champion aligned",
        body: "Use transparent language and value framing so the champion feels supported rather than bypassed."
      }
    ],
    metrics: ["Contacts per opportunity", "Stage progression", "Win rate"]
  },
  {
    slug: "closed-lost-revival-loop",
    title: "Closed-Lost Revival Loop",
    category: "outbound",
    featured: false,
    kicker: "Outbound and signal capture",
    summary: "Re-open old pipeline with timed triggers, fresh proof, and new buying events instead of recycling the same dead follow-up.",
    audience: "Revenue teams sitting on closed-lost opportunities that still fit the market but went cold.",
    format: "Revival playbook",
    effort: "3 day setup",
    stack: ["HubSpot", "Clay", "Slack"],
    includes: [
      "Loss-reason segments",
      "Revival timing triggers",
      "Proof asset matrix",
      "Owner reminder workflow"
    ],
    steps: [
      {
        title: "Segment the losses",
        body: "Separate no-budget deals from no-priority deals so the revival logic matches the real reason the opportunity died."
      },
      {
        title: "Watch for re-entry signals",
        body: "Use funding, hiring, product launch, and role-change events to decide when to restart the conversation."
      },
      {
        title: "Re-open with a new angle",
        body: "Lead with new context, new proof, or a new operational path so the outreach feels current instead of stale."
      }
    ],
    metrics: ["Re-opened opportunities", "Revived pipeline value", "Meetings from closed-lost"]
  },
  {
    slug: "apollo-hubspot-sync-map",
    title: "Apollo to HubSpot Sync Map",
    category: "revops",
    featured: false,
    kicker: "RevOps and automation",
    summary: "Connect enrichment, outreach, and CRM records without flooding the database with duplicates and partial accounts.",
    audience: "Ops teams integrating outbound tools into HubSpot and tired of cleaning bad sync behavior.",
    format: "Ops blueprint",
    effort: "1 week build",
    stack: ["Apollo", "HubSpot", "Make"],
    includes: [
      "Field mapping sheet",
      "Deduplication rules",
      "Lifecycle-state logic",
      "Sync QA checklist"
    ],
    steps: [
      {
        title: "Map the source of truth",
        body: "Decide where ownership, enrichment, lifecycle state, and sequence status should live before data starts moving."
      },
      {
        title: "Protect record quality",
        body: "Set matching and overwrite rules so new data improves the CRM instead of breaking trusted fields."
      },
      {
        title: "Test before scale",
        body: "Run sync QA with small batches and edge-case records before you let the integration touch the full database."
      }
    ],
    metrics: ["Duplicate rate", "Sync error rate", "Trusted record coverage"]
  },
  {
    slug: "weighted-lead-scoring-model",
    title: "Weighted Lead Scoring Model",
    category: "revops",
    featured: false,
    kicker: "RevOps and automation",
    summary: "Build a lead scoring model that blends fit, behavior, and recency instead of rewarding every random click.",
    audience: "Ops and marketing teams that need a cleaner definition of sales-ready demand.",
    format: "Scoring model",
    effort: "1 to 2 week build",
    stack: ["HubSpot", "GA4", "Looker Studio"],
    includes: [
      "Fit score worksheet",
      "Behavior weighting table",
      "Decay logic example",
      "MQL threshold guide"
    ],
    steps: [
      {
        title: "Separate fit from activity",
        body: "Score account quality and engagement independently so a weak-fit lead cannot fake readiness with shallow browsing."
      },
      {
        title: "Weight high-intent behavior",
        body: "Give real value to pricing visits, demo requests, comparison-page sessions, and repeat return behavior."
      },
      {
        title: "Apply decay and validation",
        body: "Reduce stale scores over time and compare the model against real pipeline outcomes before handing it to sales."
      }
    ],
    metrics: ["MQL to SQL", "Sales acceptance rate", "Pipeline from scored leads"]
  },
  {
    slug: "deal-desk-approval-automation",
    title: "Deal Desk Approval Automation",
    category: "revops",
    featured: false,
    kicker: "RevOps and automation",
    summary: "Move pricing, discount, and legal approvals faster without losing visibility over who approved what and why.",
    audience: "Revenue teams watching enterprise deals slow down around pricing exceptions and internal approvals.",
    format: "Workflow playbook",
    effort: "1 week build",
    stack: ["HubSpot", "Slack", "DocuSign"],
    includes: [
      "Approval path matrix",
      "Discount guardrails",
      "Slack approval flow",
      "Audit trail checklist"
    ],
    steps: [
      {
        title: "Define the approval lanes",
        body: "Map which discounts, terms, and exceptions require manager, finance, or legal review."
      },
      {
        title: "Automate the requests",
        body: "Push approvals into the right Slack or CRM workflow with the context approvers need to say yes or no fast."
      },
      {
        title: "Track the bottlenecks",
        body: "Measure which stage or approver creates the most delay so the process can improve over time."
      }
    ],
    metrics: ["Approval cycle time", "Deals delayed", "Exception volume"]
  },
  {
    slug: "ltv-cac-command-center",
    title: "LTV to CAC Command Center",
    category: "revops",
    featured: false,
    kicker: "RevOps and automation",
    summary: "Build an operating dashboard that shows whether growth is efficient, durable, and worth scaling.",
    audience: "Founders and revenue leaders that need one view of acquisition cost, payback, and retained value.",
    format: "Dashboard architecture",
    effort: "2 week build",
    stack: ["HubSpot", "Looker Studio", "Sheets"],
    includes: [
      "Metric definitions",
      "Source-join rules",
      "Executive dashboard layout",
      "Channel drilldown views"
    ],
    steps: [
      {
        title: "Lock the definitions",
        body: "Align on how CAC, payback, pipeline, revenue, and retained value are calculated so every report matches."
      },
      {
        title: "Join the source systems",
        body: "Connect CRM, spend, and revenue data in a way that survives channel expansion and team growth."
      },
      {
        title: "Build for decisions",
        body: "Structure the dashboard so leaders can spot efficiency leaks, not just admire a wall of charts."
      }
    ],
    metrics: ["CAC payback", "LTV to CAC", "Pipeline efficiency"]
  },
  {
    slug: "linkedin-retargeting-ladder",
    title: "LinkedIn Retargeting Ladder",
    category: "paid",
    featured: false,
    kicker: "Demand gen and paid media",
    summary: "Use a simple progression of awareness, proof, and direct-response ads to convert known visitors into meetings.",
    audience: "B2B marketers running LinkedIn traffic that needs a better post-click conversion path.",
    format: "Ad funnel blueprint",
    effort: "1 week launch",
    stack: ["LinkedIn Ads", "GA4", "HubSpot"],
    includes: [
      "Audience ladder",
      "Creative progression guide",
      "Frequency guardrails",
      "Follow-up CTA map"
    ],
    steps: [
      {
        title: "Build audience stages",
        body: "Group visitors and engaged leads by level of familiarity so each audience sees the right level of ask."
      },
      {
        title: "Change the creative by stage",
        body: "Move from education to proof to action so retargeting feels progressive instead of repetitive."
      },
      {
        title: "Connect the follow-up",
        body: "Pair the ad journey with the right landing-page promise and CRM action so performance is measurable."
      }
    ],
    metrics: ["Retargeting CTR", "Lead quality", "Meeting conversion"]
  },
  {
    slug: "search-negation-matrix",
    title: "Search Negation Matrix",
    category: "paid",
    featured: false,
    kicker: "Demand gen and paid media",
    summary: "Block non-buyer intent fast with a negative keyword system that keeps Google Ads budget focused on commercial search demand.",
    audience: "Paid media teams fighting wasted spend from bad search terms and loose match behavior.",
    format: "Search ops template",
    effort: "3 day cleanup",
    stack: ["Google Ads", "Sheets", "Looker Studio"],
    includes: [
      "Negative keyword framework",
      "Intent bucket model",
      "Weekly review checklist",
      "Waste-spend tracking sheet"
    ],
    steps: [
      {
        title: "Sort search intent properly",
        body: "Separate learning, low-fit, competitor, and buyer terms so you know what to exclude and what to keep."
      },
      {
        title: "Apply shared exclusions",
        body: "Create reusable negative sets at account and campaign level so the cleanup holds as spend scales."
      },
      {
        title: "Review search terms weekly",
        body: "Use an operating cadence that catches waste early before broad match and automation drift too far."
      }
    ],
    metrics: ["Waste spend", "Qualified CTR", "Cost per qualified lead"]
  },
  {
    slug: "abm-creative-distribution-protocol",
    title: "ABM Creative Distribution Protocol",
    category: "paid",
    featured: false,
    kicker: "Demand gen and paid media",
    summary: "Distribute tailored ABM creative by account tier, funnel stage, and persona so the message changes with the motion.",
    audience: "B2B paid and ABM teams trying to make account-based campaigns feel specific instead of generic.",
    format: "Creative system",
    effort: "2 week rollout",
    stack: ["LinkedIn Ads", "Mutiny", "HubSpot"],
    includes: [
      "Tiering logic",
      "Persona messaging board",
      "Creative reuse map",
      "Stage-based CTA matrix"
    ],
    steps: [
      {
        title: "Tier the accounts",
        body: "Match creative effort to account value so your best targets get true personalization and not just token swaps."
      },
      {
        title: "Build persona variants",
        body: "Translate one offer into role-specific value angles that still point toward the same commercial goal."
      },
      {
        title: "Distribute by stage",
        body: "Align the asset mix with awareness, evaluation, and conversion so the campaign does not flatten into one message."
      }
    ],
    metrics: ["Account engagement", "Pipeline from target accounts", "Creative reuse efficiency"]
  },
  {
    slug: "trial-conversion-ad-system",
    title: "Trial Conversion Ad System",
    category: "paid",
    featured: false,
    kicker: "Demand gen and paid media",
    summary: "Use ads and lifecycle triggers to move free-trial users toward activation milestones and paid conversion faster.",
    audience: "PLG and hybrid-sales teams that have trial volume but weak activation and upgrade rates.",
    format: "PLG conversion playbook",
    effort: "1 to 2 week setup",
    stack: ["Meta Ads", "HubSpot", "Product analytics"],
    includes: [
      "Activation milestone map",
      "Audience sync rules",
      "Creative angle prompts",
      "Upgrade CTA sequence"
    ],
    steps: [
      {
        title: "Define the activation moments",
        body: "Identify the product actions that predict conversion so ads reinforce behavior that matters."
      },
      {
        title: "Sync trial cohorts into ads",
        body: "Create audiences based on product usage stage so campaigns match what each user still needs to do."
      },
      {
        title: "Push toward upgrade intent",
        body: "Use proof, urgency, and milestone framing to turn passive trial users into paying accounts."
      }
    ],
    metrics: ["Activation rate", "Trial-to-paid", "Cost per paying user"]
  },
  {
    slug: "abandoned-cart-recovery-flow",
    title: "Abandoned Cart Recovery Flow",
    category: "ecom",
    featured: false,
    kicker: "eCommerce lifecycle",
    summary: "Recover more abandoned carts with a timed sequence that blends product context, urgency, and offer control.",
    audience: "eCommerce teams that have traffic and cart volume but too much revenue leaking before checkout.",
    format: "Retention playbook",
    effort: "3 day setup",
    stack: ["Klaviyo", "Shopify", "Recharge"],
    includes: [
      "Email and SMS timing map",
      "Offer ladder",
      "Cart-value split rules",
      "Creative prompt examples"
    ],
    steps: [
      {
        title: "Set the message ladder",
        body: "Lead with reminder and reassurance first, then use urgency or offer pressure only when it helps."
      },
      {
        title: "Split by cart value",
        body: "Treat low-value and high-value carts differently so incentives are not wasted on orders that would convert anyway."
      },
      {
        title: "Tune by product and margin",
        body: "Adjust the flow for product type, margin, and replenishment window so recovery supports real profitability."
      }
    ],
    metrics: ["Recovered revenue", "Cart recovery rate", "Discount leakage"]
  },
  {
    slug: "post-purchase-review-engine",
    title: "Post-Purchase Review Engine",
    category: "ecom",
    featured: false,
    kicker: "eCommerce lifecycle",
    summary: "Request reviews at the right time, route happy buyers into UGC asks, and protect the brand from badly timed review prompts.",
    audience: "Brands that want more review volume without annoying customers or asking too early.",
    format: "Retention playbook",
    effort: "4 day setup",
    stack: ["Klaviyo", "Yotpo", "Shopify"],
    includes: [
      "Delivery-to-review timing",
      "UGC escalation flow",
      "Product-specific ask prompts",
      "Issue suppression rules"
    ],
    steps: [
      {
        title: "Time the ask to usage",
        body: "Trigger review requests based on when the customer can actually judge the product, not just when it ships."
      },
      {
        title: "Escalate happy buyers",
        body: "Move promoters into photo, video, or referral asks so positive sentiment becomes more useful marketing material."
      },
      {
        title: "Protect the unhappy path",
        body: "Suppress or reroute customers with delivery or support issues so the review request does not backfire."
      }
    ],
    metrics: ["Review rate", "UGC volume", "Post-purchase satisfaction"]
  },
  {
    slug: "vip-segment-architecture",
    title: "VIP Segment Architecture",
    category: "ecom",
    featured: false,
    kicker: "eCommerce lifecycle",
    summary: "Identify high-value buyers, reward them without margin damage, and build a loyalty structure that actually changes behavior.",
    audience: "Retail and DTC brands that know they have valuable buyers but no clean VIP operating model.",
    format: "Segmentation playbook",
    effort: "1 week build",
    stack: ["Shopify", "Klaviyo", "LoyaltyLion"],
    includes: [
      "RFM segmentation sheet",
      "VIP qualification rules",
      "Reward mix framework",
      "Lifecycle message prompts"
    ],
    steps: [
      {
        title: "Define what VIP means",
        body: "Use recency, frequency, and monetary value to build a segment that reflects profitability and retention potential."
      },
      {
        title: "Design the reward mix",
        body: "Balance exclusivity, access, service, and incentive so the program feels valuable without training buyers to wait for discounts."
      },
      {
        title: "Activate the segment",
        body: "Build campaign and retention flows that make VIP buyers feel recognized throughout the purchase cycle."
      }
    ],
    metrics: ["Repeat purchase rate", "VIP revenue share", "Average order value"]
  },
  {
    slug: "ninety-day-winback-sequence",
    title: "90-Day Win-Back Sequence",
    category: "ecom",
    featured: false,
    kicker: "eCommerce lifecycle",
    summary: "Re-engage dormant customers with a reactivation sequence built around purchase window, margin, and brand voice.",
    audience: "Brands with a clear repeat purchase cycle and too many customers quietly aging out of the file.",
    format: "Retention sequence",
    effort: "4 day setup",
    stack: ["Klaviyo", "Shopify", "Meta Ads"],
    includes: [
      "Dormancy window logic",
      "Offer pressure ladder",
      "Suppression rules",
      "Retargeting audience sync"
    ],
    steps: [
      {
        title: "Set the dormancy threshold",
        body: "Base the trigger on real reorder behavior so the win-back starts when the customer is slipping, not when they are gone for good."
      },
      {
        title: "Escalate intelligently",
        body: "Increase urgency and incentive gradually so margin is only used when the softer reactivation messages fail."
      },
      {
        title: "Close the loop across channels",
        body: "Sync the segment into paid and onsite experiences so the brand follows through beyond email alone."
      }
    ],
    metrics: ["Reactivated customers", "Recovered revenue", "Offer efficiency"]
  },
  {
    slug: "product-activation-sequence",
    title: "30-Day Product Activation Sequence",
    category: "lifecycle",
    featured: false,
    kicker: "Retention and customer success",
    summary: "Guide new users from signup to first value with timed nudges, milestone prompts, and handoff triggers for human support.",
    audience: "SaaS teams with healthy signup volume but weak early activation and adoption.",
    format: "Lifecycle playbook",
    effort: "1 week rollout",
    stack: ["HubSpot", "Intercom", "Product analytics"],
    includes: [
      "Day 0 to 30 touch plan",
      "Milestone prompt library",
      "CS handoff rules",
      "Activation dashboard prompts"
    ],
    steps: [
      {
        title: "Define the activation path",
        body: "Pick the product actions that prove a user is moving toward value and tie every onboarding touch back to those actions."
      },
      {
        title: "Trigger nudges by behavior",
        body: "Send contextual prompts based on what the user has or has not done so onboarding feels responsive, not generic."
      },
      {
        title: "Escalate human support when needed",
        body: "Move stalled users into assisted onboarding before they disappear and before the team loses visibility."
      }
    ],
    metrics: ["Activation rate", "Time to value", "30-day retention"]
  },
  {
    slug: "churn-risk-early-warning-system",
    title: "Churn Risk Early Warning System",
    category: "lifecycle",
    featured: false,
    kicker: "Retention and customer success",
    summary: "Catch account risk early with product, support, and engagement signals that trigger the right save motion before renewal.",
    audience: "Customer success teams that react to churn too late because risk only shows up when the renewal is already in trouble.",
    format: "Risk monitoring playbook",
    effort: "2 week build",
    stack: ["HubSpot", "Gainsight", "Product analytics"],
    includes: [
      "Risk score framework",
      "Signal severity tiers",
      "Save-motion map",
      "Renewal escalation rules"
    ],
    steps: [
      {
        title: "Define the risk signals",
        body: "Blend usage decline, support pain, stakeholder silence, and commercial timing into one readable risk model."
      },
      {
        title: "Map the save motions",
        body: "Match the response to the risk type so low adoption, product frustration, and commercial drift are not treated the same way."
      },
      {
        title: "Run the review cadence",
        body: "Review flagged accounts weekly so teams can intervene with enough time to change the outcome."
      }
    ],
    metrics: ["Flagged accounts saved", "Renewal rate", "Expansion preservation"]
  },
  {
    slug: "nps-detractor-rescue-route",
    title: "NPS Detractor Rescue Route",
    category: "lifecycle",
    featured: false,
    kicker: "Retention and customer success",
    summary: "Route detractors fast, assign ownership clearly, and close the loop before a low score turns into churn or public damage.",
    audience: "CS and support teams collecting NPS but not acting on the signal with enough speed or structure.",
    format: "CX response playbook",
    effort: "3 day setup",
    stack: ["Delighted", "HubSpot", "Slack"],
    includes: [
      "Detractor routing tree",
      "Owner assignment rules",
      "Follow-up message prompts",
      "Resolution reporting view"
    ],
    steps: [
      {
        title: "Classify the issue behind the score",
        body: "Separate service, product, implementation, and expectation gaps so the rescue owner is obvious."
      },
      {
        title: "Route and respond quickly",
        body: "Notify the right team with enough context to start the fix immediately and avoid making the customer retell the story."
      },
      {
        title: "Close the feedback loop",
        body: "Track whether the issue was resolved and whether the account recovered so NPS becomes operationally useful."
      }
    ],
    metrics: ["Time to response", "Resolved detractors", "Retention after detractor event"]
  }
];
