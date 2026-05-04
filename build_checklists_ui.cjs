const fs = require('fs');
const path = require('path');

const b2bIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="M2 15h10"/><path d="m9 18 3-3-3-3"/></svg>;
const b2cIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;

const data = {
  google: {
    title: "Google Ads Checklist",
    sections: [
      {
        title: "Budget and Bidding",
        items: [
          {
            q: "Conversions are being tracked (Geo/Devices/Age/Gender/Income/Audiences for observation)",
            desc: "If the business has accumulated customer demographic data, we recommend applying this data by decreasing bid adjustments for age and gender of users who do not bring leads/sales. If you use automated bid strategies, but your campaign generates fewer than 5 conversions per day, campaigns may struggle to learn and adapt effectively.",
          },
          {
            q: "You use automated bid strategies (Maximize conversions, Maximize conversion value, Target CPA), AND generate more than 5 conversions/day",
            desc: "Automated bidding strategies rely on sufficient conversion data to optimize bidding decisions effectively. With limited conversion data, campaigns may struggle to learn and adapt. Switch to manual bidding or consolidate campaigns until you get volume.",
          }
        ]
      },
      {
        title: "Ad Copy and Extensions",
        items: [
          {
            q: "All extensions are added to ads",
            desc: "Ad extensions play a crucial role in enhancing ad visibility and providing additional information to potential customers. By including sitelinks, callouts, and structured snippets, you improve the relevance and user experience, ultimately driving higher click-through rates.",
          },
          {
            q: "Using A/B testing of Ad copies",
            desc: "We recommend using a minimum of 2 ad variations for A/B testing to optimize campaign performance. Test headlines, descriptions, and CTA strategies. Use A/B testing tools to identify the most effective ad creatives.",
          },
          {
            q: "Regularly checking ad copies performance",
            desc: "Ad copies typically vary in their performance, which requires close attention. It's important to regularly replace underperforming ad copies with higher-quality ones to improve metrics like CTR and conversion rates.",
          },
          {
            q: "Ad copy meets ad policy requirements",
            desc: "Ensuring that ad copy complies with ad policy requirements is essential to maintain account health and active campaigns. Pay close attention to guidelines regarding restricted content to avoid disapprovals or suspensions.",
          }
        ]
      },
      {
        title: "Landing Pages & Conversion Tracking",
        items: [
          {
            q: "Conversions are divided into macro (primary) and micro (secondary)",
            desc: "Segmenting conversions into macro and micro goals allows you to track various levels of user engagement and conversion actions. Defining primary and secondary conversion actions lets you gain deeper insights without confusing the algorithm.",
          },
          {
            q: "Landing page has a clear submit form",
            desc: "A clear and prominent submit form on the landing page is essential for facilitating user interaction and capturing lead information effectively. A poorly designed form creates friction and drops conversion rates.",
          }
        ]
      },
      {
        title: "Targeting",
        items: [
          {
            q: "The location targets exclude irrelevant areas (for example, the entire USA when local)",
            desc: "We recommend dividing large countries into individual states, cities, or regions. This detail uncovers insights leading to actionable adjustments based on geo-performance.",
          },
          {
            q: "At the campaign level, the location option is set to 'Presence: People in or regularly in your targeted locations'",
            desc: "Using 'Presence or interest' can lead to inefficient targeting and wastage of ad spend globally. Proper geo targeting ensures that ads are displayed to the most relevant audience segments.",
          },
          {
            q: "Negative keywords are added to Search campaigns",
            desc: "Insufficient use of negative keywords leads to irrelevant traffic and wasted budget. Regularly add negative keywords at the campaign or account level to filter out unqualified traffic.",
          },
          {
            q: "Brand, competitor, and generic keywords are grouped separately",
            desc: "We recommend separating search campaigns into Brand, Competitor, and Generic groups. This allows for convenient budget control, bid adjustments, and writing relevant ads for each intent level.",
          },
          {
            q: "Correct grouping of keywords is conducted in the campaign: for each category of keywords separate Ads are used",
            desc: "Improper grouping within campaigns diminishes ad quality and relevance, which lowers CTR and increases costs. Categorize keywords into tightly themed ad groups to improve Quality Score.",
          }
        ]
      },
      {
        title: "Campaign Settings",
        items: [
          {
            q: "Search Partners and Display Network are disabled within Search campaigns",
            desc: "Search Partners often contribute lower quality traffic compared to native search. By default, separate Search from Display strictly to analyze statistics, make adjustments, and control the ad spend accurately.",
          },
          {
            q: "Audience Expansion/Optimized targeting is disabled in Display/Demand Gen/YouTube",
            desc: "In our experience, enabling optimized targeting can lead to an increase in inappropriate budget spending and limit audience control. Disable it in situations where precise retargeting or tight audiences are required.",
          },
          {
            q: "Auto-applied recommendations are disabled",
            desc: "Enabling auto-applied recommendations strips control from your campaign management and frequently misaligns with true campaign objectives. Regularly review recommendations manually instead.",
          }
        ]
      },
      {
        title: "Analytics & Reporting",
        items: [
          {
            q: "Data-driven attribution is selected",
            desc: "Selecting data-driven attribution is crucial for optimizing advertising performance and training algorithms effectively across various touchpoints, leading to more accurate credit assignment.",
          },
          {
            q: "UTM tags are set up and Auto-tagging is set to 'YES'",
            desc: "The absence of UTM tags hinders accurate tracking in GA4 or external CRMs. Auto-tagging ensures Google Ads appends GCLID data for deep evaluation of clicks and conversions.",
          },
          {
            q: "Google Analytics 4 is linked to the account",
            desc: "Failure to link essential tools such as Google Analytics, Google Merchant Center, and Google Search Console limits data insights for accurate campaign optimization.",
          }
        ]
      }
    ]
  },
  linkedin: {
    title: "LinkedIn Ads Checklist",
    sections: [
      {
        title: "Budget and Bidding",
        items: [
          {
            q: "An Automatic Bidding Strategy is NOT chosen (Manual Bidding is used instead)",
            desc: "Opting for an Automatic Bidding Strategy can limit your control over bid amounts and may not optimize budget allocation effectively. Switch to a Manual Bidding Strategy to set bids manually and maximize ROI based on precision data.",
          },
          {
            q: "You constantly monitor and optimize the bids and budget for each campaign",
            desc: "If you're not meeting your campaign objectives, you may need to increase or decrease your bids/budgets to compete more effectively for ad space. Constant testing of bids finds the most effective spot.",
          }
        ]
      },
      {
        title: "Campaign Settings",
        items: [
          {
            q: "'Permanent' option is selected for Locations",
            desc: "If the 'Permanent' option isn't selected, it could lead to inconsistent targeting and unnecessary changes. Ensure 'Permanent' is selected to prevent unintended location drift.",
          },
          {
            q: "The Average Frequency metric is below 5",
            desc: "An Average Frequency above 5 indicates that users are being shown your ads too frequently, which leads to Ad fatigue and decreased engagement. Refresh ad content to maintain interest.",
          },
          {
            q: "Ad rotation is enabled and creatives are grouped evenly",
            desc: "Disabling ad rotation means that the same ad is shown repeatedly. Enabling ad rotation ensures that different ad variations are shown evenly to maintain ad freshness.",
          }
        ]
      },
      {
        title: "Analytics & Reporting",
        items: [
          {
            q: "Insight Tag is placed on the website and works",
            desc: "Having the Insight Tag allows you to track conversions, retarget website visitors, and gather valuable firmographic data. Ensure the Insight Tag is properly installed and firing.",
          },
          {
            q: "The account tracks specific conversions",
            desc: "If your account isn't tracking conversions, you're missing out on valuable effectiveness data. Enable conversion tracking under 'Analyze > Conversion tracking'.",
          }
        ]
      },
      {
        title: "Targeting",
        items: [
          {
            q: "There are NO impressions for job seniorities such as Entry, Training, Unpaid",
            desc: "Job seniorities such as Entry, Training, Unpaid usually don't make decisions regarding the adoption of B2B solutions. It makes little sense to present them with business proposals.",
          },
          {
            q: "There are NO impressions for irrelevant Job Titles",
            desc: "If your ads receive many impressions for irrelevant Job Titles, refine your targeting criteria to exclude irrelevant roles and concentrate on reaching decision-makers.",
          },
          {
            q: "Company employees, competitor employees, and recent purchasers are excluded",
            desc: "If your ads are not excluded from specific audiences like existing employees or competitors, it leads to irrelevant ad impressions and wasted spend.",
          }
        ]
      },
      {
        title: "Audiences",
        items: [
          {
            q: "Remarketing audiences are created and actively used",
            desc: "If you're not using remarketing audiences, you're missing opportunities to re-engage users who showed high intent. Tailor ad messaging specifically to re-engage these segments.",
          },
          {
            q: "Audience Expansion is turned off",
            desc: "Enabling Audience Expansion can result in your ads being shown to audiences beyond your specified targeting criteria, potentially reducing relevance and inflating cost-per-lead.",
          },
          {
            q: "LinkedIn Audience Network is disabled",
            desc: "Enabling the LinkedIn Audience Network means your ads may appear on partner websites outside of LinkedIn, which destroys performance and targeting precision. Focus within LinkedIn's platform.",
          }
        ]
      },
      {
        title: "Creative & Ad Copy",
        items: [
          {
            q: "Each campaign has 4-5 creatives and they rotate",
            desc: "Using multiple ad creatives within each campaign ensures the audience sees fresh and engaging content. Keep at least 4 creatives in rotation.",
          },
          {
            q: "Each creative is tailored strictly to the target audience persona",
            desc: "Personalizing ad creatives based on your target audience's demographics and pain points significantly improves ad relevance. Speak directly to their specific needs.",
          }
        ]
      }
    ]
  },
  meta: {
    title: "Meta (Facebook) Ads Checklist",
    sections: [
      {
        title: "Conversion Tracking",
        items: [
          {
            q: "Conversions are being tracked properly using standard events",
            desc: "Tracking conversions is crucial for measuring the effectiveness of your ads. Without conversion tracking, you won't know which ads are driving actions like purchases, sign-ups, or leads.",
          },
          {
            q: "Pixel is installed and Conversion API (CAPI) is active",
            desc: "The Facebook Pixel tracks visitor actions, but an improperly installed pixel or missing CAPI leads to inaccurate data collection and ineffective ad targeting due to modern browser limitations.",
          },
          {
            q: "Conversions work based on events, not just on page visits",
            desc: "Tracking conversions based on specific events provides a more precise understanding of user actions. Granularity helps optimize ad campaigns for actual user behavior instead of ghost traffic.",
          },
          {
            q: "Custom conversions and custom fields in lead forms are set up",
            desc: "Custom conversions allow you to track and optimize for specific actions that are most relevant to your business goals. Utilizing custom fields in lead forms gathers specific context for qualification.",
          }
        ]
      },
      {
        title: "Account Structure",
        items: [
          {
            q: "All necessary audiences are set up (remarketing, look-alike, ATC, Purchases)",
            desc: "Setting up diverse audiences is crucial for targeting. Remarketing re-engages users, Look-alikes find similar prospects. Missing these limits your scaling strategy.",
          },
          {
            q: "There are no restrictions in the account (Spend limit, Learning limit)",
            desc: "Restrictions like spend limits and learning phase limitations cap how much you can spend or prevent your ads from optimizing fully. Remove unnecessary restrictions.",
          },
          {
            q: "The account is structured according to the funnel model TOFU ? MOFU ? BOFU",
            desc: "Structuring your account according to the funnel model ensures that you target users appropriately based on their stage in the customer journey with different messages and budgets.",
          }
        ]
      },
      {
        title: "Campaign Settings",
        items: [
          {
            q: "Campaign goal or primary conversion selected correctly (Leads/Purchases, not Traffic)",
            desc: "Selecting the correct campaign goal is essential. Choosing a 'Traffic' objective when you want 'Leads' will optimize the algorithm for link clicks without any intent, wasting budget.",
          },
          {
            q: "Advanced targeting (Expansion) is disabled when testing strict audiences",
            desc: "Disabling targeting automation helps you maintain more precise control over your audience selection during pure testing, ensuring ads are forced to the requested strict criteria.",
          },
          {
            q: "Website visitors, form fillers, and current customers are excluded in Acquisition campaigns",
            desc: "Ensure current customers and form fillers are constantly excluded from cold acquisition campaigns to stop wasting impressions on duplicate users.",
          }
        ]
      },
      {
        title: "Ads Settings",
        items: [
          {
            q: "Optimal number of ads in ad groups (3–5 ads per ad group)",
            desc: "Having too many ads in an ad group can dilute your budget and hinder tracking, while too few ads limits your ability to test and optimize. 3-5 ads maintains balance.",
          },
          {
            q: "Creatives are sized dynamically for each placement (1:1, 9:16, 4:5)",
            desc: "Ensuring your creatives are correctly sized for each placement (News Feed, Stories, Right Column) enhances ad visibility. Incorrectly sized ads appear distorted or cropped.",
          },
          {
            q: "UTM tags are actively set up for all links",
            desc: "UTM tags allow you to track the effectiveness of your ads in external analytics tools. Without UTM tags, it's difficult to attribute traffic and conversions to specific ads inside Google Analytics or CRMs.",
          }
        ]
      }
    ]
  },
  outbound: {
    title: "Outbound Readiness (B2B)",
    sections: [
      {
        title: "Infrastructure Setup",
        items: [
          {
            q: "Dedicated sending domains are registered (separate from primary domain)",
            desc: "Always use secondary domains (like getyourdomain.com or tryyourdomain.com) for cold outreach to protect your primary corporate domain from being blacklisted and destroying internal email deliverability.",
          },
          {
            q: "DMARC, DKIM, and SPF records are validated and passing 100%",
            desc: "Missing or misconfigured DNS records guarantee that your emails will go to spam. You must pass DMARC alignment for modern inbox providers (Google/Microsoft) to accept your cold email.",
          },
          {
            q: "Mailboxes have gone through a 14-day automated warmup period",
            desc: "Sending 100 emails on day 1 from a new domain destroys its reputation. Using a warmup pool gradually increases sending volume and replies to build a positive sender reputation.",
          }
        ]
      },
      {
        title: "List & Data Sourcing",
        items: [
          {
            q: "Prospect data is rigorously verified using an email validator (ZeroBounce/Debounce)",
            desc: "Bouncing emails degrade your sender score instantly. Never send an email unless the address is designated as 'Valid' and 'Safe to Send' by a reputable verification tool.",
          },
          {
            q: "Lists are hyper-segmented by buyer persona and industry",
            desc: "Batch-and-blast to a list of 5,000 generic contacts yields zero results. Segment your lists by highly specific attributes (e.g. CMOs of Series B Fintechs) to enable deep personalization.",
          }
        ]
      },
      {
        title: "Messaging & Copy",
        items: [
          {
            q: "Cold emails contain fewer than 75 words",
            desc: "Decision makers skim on mobile. Long essays are immediately deleted. Keep your copy punchy, framework-driven, and focused on their pain point, not your features.",
          },
          {
            q: "Call to Actions (CTAs) are 'Low Friction' (e.g. 'Open to a quick framework?')",
            desc: "Asking for a 30-minute demo on the first touch is high friction. Offer value, ask for interest, or ask a qualitative question to start a conversation rather than proposing a marriage.",
          }
        ]
      }
    ]
  }
};

const compliments = [
  "?? Good job! Keep using this best practice in your campaigns.",
  "? Excellent choice. This directly impacts performance.",
  "? Correct! This is a core pillar of modern optimization.",
  "?? Great! Maintaining tight control here prevents wasted spend.",
  "?? Spot on. This ensures your data remains clean and actionable."
];

function generateHTML() {
  let html = <!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Growth Optimization Checklists - WeFlair</title>
  <meta name="description" content="Interactive performance optimization checklists for Google Ads, LinkedIn Ads, Meta Ads, and Outbound readiness." />
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="../brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="../foundation-styles.css" />
  <link rel="stylesheet" href="../foundation-slater.css" />
  <link rel="stylesheet" href="../weflair-hero.css" />
  <script src="../foundation.js" defer></script>
  <script src="../weflair-hero.js" defer></script>
  
  <style>
    .chk-page { background: #151515; color: #f6f3ee; font-family: 'Inter', sans-serif; }
    
    /* OVERRIDES */
    h1, h2, h3, h4, h5 { font-family: 'Space Grotesk', sans-serif; }
    
    /* HERO */
    .chk-hero { position: relative; padding: clamp(10rem, 15vw, 14rem) 2rem clamp(4rem, 8vw, 6rem); text-align: center; border-bottom: 1px solid rgba(246,243,238,0.06); }
    .chk-hero__inner { max-width: 60rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .chk-badge { display: inline-flex; padding: 0.5rem 1rem; border-radius: 99px; background: rgba(3,218,197, 0.1); border: 1px solid rgba(3,218,197, 0.2); color: #03dac5; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1.5rem; }
    .chk-hero__title { font-size: clamp(3.5rem, 6vw, 5.5rem); line-height: 1; font-weight: 700; letter-spacing: -0.05em; margin: 0 0 1.5rem; text-wrap: balance; }
    .chk-hero__sub { font-size: clamp(1.1rem, 1.5vw, 1.35rem); line-height: 1.6; color: rgba(246,243,238,0.7); max-width: 48rem; margin: 0 auto; text-wrap: balance; }

    /* LAYOUT & SEGMENT TOGGLE */
    .chk-layout { max-width: 64rem; margin: 0 auto; display: flex; flex-direction: column; gap: 3rem; padding: clamp(4rem, 6vw, 6rem) 2rem; align-items: center;}
    
    .chk-segment-toggle { display: flex; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 999px; padding: 0.35rem; width: 100%; max-width: 32rem; margin: 0 auto; position: relative; }
    .chk-segment-btn { flex: 1; padding: 1rem 1.5rem; background: transparent; border: none; border-radius: 999px; color: rgba(255,255,255,0.6); font-size: 1.05rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: inline-flex; justify-content: center; align-items: center; gap: 0.6rem; z-index: 2; font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.01em;}
    .chk-segment-btn:hover { color: #fff; }
    .chk-segment-btn.is-active { color: #111; }
    .chk-segment-bg { position: absolute; top: 0.35rem; bottom: 0.35rem; left: 0.35rem; width: calc(50% - 0.35rem); background: #f6f3ee; border-radius: 999px; transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); z-index: 1; box-shadow: 0 4px 15px rgba(255,255,255,0.1); }
    
    /* PLATFORM TABS */
    .chk-tabs-container { width: 100%; display: flex; flex-direction: column; align-items: center; border-radius: 1.5rem; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.04); padding: 3rem; }
    .chk-tabs { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-bottom: 3rem; }
    .chk-tab-btn { background: rgba(246,243,238,0.03); border: 1px solid rgba(246,243,238,0.1); color: rgba(246,243,238,0.6); padding: 0.85rem 1.5rem; border-radius: 999px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; font-family: inherit;}
    .chk-tab-btn:hover { background: rgba(246,243,238,0.08); color: #f6f3ee; }
    .chk-tab-btn.is-active { background: rgba(3,218,197, 0.1); border: 1px solid rgba(3,218,197, 0.3); color: #03dac5; box-shadow: 0 0 20px rgba(3,218,197, 0.1); }
    .chk-tab-btn[data-platform="outbound"] { transition: opacity 0.3s ease, transform 0.3s ease, width 0.3s ease, padding 0.3s ease; }

    /* CHECKLIST CONTENT */
    .chk-content { display: none; opacity: 0; width: 100%; animation: fadeUp 0.5s ease forwards; }
    .chk-content.is-active { display: block; opacity: 1; }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }

    .chk-section { margin-bottom: 3.5rem; }
    .chk-section__title { font-size: 1.75rem; font-weight: 600; color: #fff; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.1); }

    /* CHECKLIST ITEM */
    .chk-item { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 1rem; padding: 1.75rem; margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 1.5rem; transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease; }
    .chk-item:hover { border-color: rgba(255,255,255,0.15); background: rgba(255,255,255,0.04); }
    
    .chk-item__header { display: flex; justify-content: space-between; gap: 2rem; align-items: flex-start; }
    .chk-item__title { font-size: 1.15rem; font-weight: 500; color: #f6f3ee; margin: 0; line-height: 1.4; text-wrap: balance;}
    
    .chk-options { display: flex; gap: 0.5rem; flex-shrink: 0; }
    .chk-option-btn { font-family: 'Space Grotesk', sans-serif; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 0.6rem 1.25rem; font-size: 0.95rem; font-weight: 600; color: #f6f3ee; cursor: pointer; transition: all 0.2s ease; }
    .chk-option-btn:hover { background: rgba(255,255,255,0.1); }
    
    /* Interactive States */
    .chk-option-btn.state-yes.is-selected { background: #03dac5; color: #111; border-color: #03dac5; }
    .chk-option-btn.state-no.is-selected { background: rgba(255, 62, 104, 0.15); color: #ff3e68; border-color: rgba(255, 62, 104, 0.4); }

    .chk-result { display: none; margin-top: 0.5rem; padding: 1.25rem; border-radius: 0.75rem; font-size: 0.95rem; line-height: 1.6; animation: slideDown 0.4s ease forwards; }
    @keyframes slideDown { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
    
    .chk-result.is-good { background: rgba(3,218,197, 0.08); border-left: 3px solid #03dac5; color: #f6f3ee; }
    .chk-result.is-bad { background: rgba(255, 62, 104, 0.05); border-left: 3px solid #ff3e68; color: rgba(246,243,238,0.85); }
    
    /* CAPTURE FORM */
    .chk-capture { margin-top: 4rem; padding: 4rem 3rem; background: linear-gradient(145deg, rgba(20,20,20,1) 0%, rgba(10,10,10,1) 100%); border: 1px solid rgba(255,255,255,0.08); border-radius: 1.5rem; text-align: center; position: relative; overflow: hidden; }
    .chk-capture::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, #03dac5, transparent); opacity: 0.5; }
    .chk-capture h2 { font-size: 2.5rem; line-height: 1.1; margin-bottom: 1rem; color: #fff; }
    .chk-capture p { font-size: 1.1rem; color: rgba(255,255,255,0.6); max-width: 32rem; margin: 0 auto 2.5rem; }
    
    .chk-form { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; max-width: 36rem; margin: 0 auto; text-align: left; }
    .chk-form-group { display: flex; flex-direction: column; gap: 0.4rem; }
    .chk-form-group.full { grid-column: 1 / -1; }
    .chk-label { font-size: 0.85rem; font-weight: 500; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.05em; }
    .chk-input { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 1rem 1.25rem; font-size: 1rem; color: #fff; font-family: inherit; transition: border-color 0.2s ease, box-shadow 0.2s ease; outline: none;}
    .chk-input:focus { border-color: #03dac5; box-shadow: 0 0 0 2px rgba(3,218,197, 0.2); }
    
    .chk-submit { grid-column: 1 / -1; background: #fff; color: #111; border: none; border-radius: 8px; padding: 1.25rem; font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease; font-family: 'Space Grotesk', sans-serif; display: flex; justify-content: center; align-items: center; gap: 0.5rem; margin-top: 1rem;}
    .chk-submit:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(255,255,255,0.15); }
    
    @media (max-width: 768px) {
      .chk-tabs-container { padding: 1.5rem; border-radius: 1rem; border-left: none; border-right: none;}
      .chk-item__header { flex-direction: column; gap: 1rem; }
      .chk-options { width: 100%; display: grid; grid-template-columns: 1fr 1fr; }
      .chk-option-btn { width: 100%; }
      .chk-form { grid-template-columns: 1fr; }
      .chk-segment-toggle { padding: 0.25rem; }
      .chk-segment-btn { padding: 0.85rem 1rem; font-size: 0.95rem; }
    }
  </style>
</head>
<body class="chk-page">
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <nav class="nav"></nav>
      
      <main class="page-main">
        
        <header class="chk-hero">
          <div class="chk-hero__inner">
            <div class="chk-badge">Interactive Tool</div>
            <h1 class="chk-hero__title">Performance Marketing Checklists.</h1>
            <p class="chk-hero__sub">Stop guessing what is broken in your engine. Run through these technical checklists to find the exact configuration leaks draining your marketing budget.</p>
          </div>
        </header>

        <section class="chk-layout">
          
          <!-- B2B / B2C SEGMENT TOGGLE -->
          <div class="chk-segment-toggle">
            <div class="chk-segment-bg" id="segment-bg"></div>
            <button class="chk-segment-btn is-active" data-segment="b2b">\ B2B SaaS & Services</button>
            <button class="chk-segment-btn" data-segment="b2c">\ B2C E-commerce</button>
          </div>

          <div class="chk-tabs-container">
            
            <!-- PLATFORM TABS -->
            <div class="chk-tabs" id="platform-tabs">
              <button class="chk-tab-btn is-active" data-platform="google">Google Ads</button>
              <button class="chk-tab-btn" data-platform="linkedin">LinkedIn Ads</button>
              <button class="chk-tab-btn" data-platform="meta">Meta Ads</button>
              <button class="chk-tab-btn" data-platform="outbound">Outbound Readiness</button>
            </div>

            <!-- CHECKLISTS -->
            <div id="checklists-wrapper" style="width: 100%;">
;

  // Render Checklists
  Object.keys(data).forEach((key, index) => {
    const pData = data[key];
    const isActive = index === 0 ? 'is-active' : '';
    html += \\n<div class="chk-content \" id="content-\">\;
    
    pData.sections.forEach((sec, sIdx) => {
      html += \<div class="chk-section">
        <h2 class="chk-section__title">\</h2>\;
      
      sec.items.forEach((item, iIdx) => {
        html += \
        <div class="chk-item">
          <div class="chk-item__header">
            <h3 class="chk-item__title">\</h3>
            <div class="chk-options">
              <button class="chk-option-btn state-yes" onclick="answer(this, 'yes', '\-\-\')">Yes</button>
              <button class="chk-option-btn state-no" onclick="answer(this, 'no', '\-\-\')">No</button>
            </div>
          </div>
          <div class="chk-result" id="result-yes-\-\-\">
            <div id="compliment-\-\-\"></div>
          </div>
          <div class="chk-result is-bad" id="result-no-\-\-\">
            <strong>Fix required:</strong> \
          </div>
        </div>\;
      });
      html += \</div>\;
    });
    
    html += \\n</div>\;
  });

  html +=             
            </div>
            
            <!-- CAPTURE FORM -->
            <div class="chk-capture">
              <h2>Find more leaks?</h2>
              <p>Pass your website and info below. Our engineering team will run a free, non-obligatory deep technical audit of your setup.</p>
              
              <form class="chk-form" action="https://formspree.io/f/mqkrbgyp" method="POST">
                <div class="chk-form-group">
                  <label class="chk-label">Full Name</label>
                  <input type="text" class="chk-input" name="name" placeholder="John Doe" required />
                </div>
                <div class="chk-form-group">
                  <label class="chk-label">Work Email</label>
                  <input type="email" class="chk-input" name="email" placeholder="john@company.com" required />
                </div>
                <div class="chk-form-group full">
                  <label class="chk-label">Company Domain</label>
                  <input type="url" class="chk-input" name="domain" placeholder="https://yourcompany.com" required />
                </div>
                <input type="hidden" name="_subject" value="New Audit Request from Checklists">
                <input type="text" name="_gotcha" style="display:none" />
                <button type="submit" class="chk-submit">Request Comprehensive Audit <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button>
              </form>
            </div>

          </div>
        </section>

      </main>
      <section class="footer weflair-footer"></section>
    </div>
  </div>

  <script>
    const compliments = [
      "?? Good job! Keep using this best practice in your campaigns.",
      "? Excellent choice. This directly impacts performance.",
      "? Correct! This is a core pillar of modern optimization.",
      "?? Great! Maintaining tight control here prevents wasted spend.",
      "?? Spot on. This ensures your data remains clean and actionable."
    ];

    function getRandomCompliment() {
      return compliments[Math.floor(Math.random() * compliments.length)];
    }

    function answer(btn, state, idStr) {
      const container = btn.closest('.chk-options');
      const btns = container.querySelectorAll('.chk-option-btn');
      btns.forEach(b => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');

      const yesBox = document.getElementById('result-yes-' + idStr);
      const noBox = document.getElementById('result-no-' + idStr);
      const complimentBox = document.getElementById('compliment-' + idStr);

      if (state === 'yes') {
        noBox.style.display = 'none';
        complimentBox.innerText = getRandomCompliment();
        yesBox.classList.add('is-good');
        yesBox.style.display = 'block';
      } else {
        yesBox.style.display = 'none';
        noBox.style.display = 'block';
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      const segmentBtns = document.querySelectorAll('.chk-segment-btn');
      const segmentBg = document.getElementById('segment-bg');
      const outboundTab = document.querySelector('.chk-tab-btn[data-platform="outbound"]');
      const platformBtns = document.querySelectorAll('.chk-tab-btn');
      const contents = document.querySelectorAll('.chk-content');

      // Segment Toggle Logic
      segmentBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          segmentBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          
          if (index === 0) {
            segmentBg.style.transform = 'translateX(0)';
            outboundTab.style.display = 'inline-block';
            outboundTab.style.opacity = '1';
          } else {
            segmentBg.style.transform = 'translateX(100%)';
            outboundTab.style.display = 'none';
            outboundTab.style.opacity = '0';
            
            // If Outbound was selected, switch back to Google
            if (outboundTab.classList.contains('is-active')) {
              document.querySelector('.chk-tab-btn[data-platform="google"]').click();
            }
          }
        });
      });

      // Platform Tab Logic
      platformBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          platformBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          
          const platform = btn.getAttribute('data-platform');
          contents.forEach(content => {
            content.classList.remove('is-active');
            if (content.id === 'content-' + platform) {
               // tiny delay to allow fade animation to reset
               setTimeout(() => {
                 content.classList.add('is-active');
               }, 10);
            }
          });
        });
      });
    });
  </script>
</body>
</html>;

  fs.writeFileSync(path.join(__dirname, 'resources/checklists.html'), html, 'utf8');
  console.log("Checklists generated!");
}

generateHTML();
