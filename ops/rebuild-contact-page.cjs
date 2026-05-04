const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const header = fs.readFileSync(path.join(ROOT, "src", "partials", "header.html"), "utf8").trim();
const footer = fs.readFileSync(path.join(ROOT, "src", "partials", "footer.html"), "utf8").trim();

const checkIcon = `
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;

const arrowIcon = `
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"></path>
  <path d="m13 6 6 6-6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;

const bullets = [
  "A detailed audit of your channels, tracking, funnel, and growth infrastructure.",
  "A marketing plan designed to achieve your goals.",
  "A quick walkthrough of how WeFlair operates and how our weekly sprints work.",
  "Audit recommendations and a first-step plan based on your goals.",
  "A personalized PPC, SEO, or GTM audit can be prepared upon request.",
];

const problemOptions = [
  ["lead-generation", "Lead generation"],
  ["seo-ai-visibility", "SEO / AI visibility"],
  ["paid-media", "Paid media"],
  ["creative-landing-pages", "Creative / landing pages"],
  ["outbound-systems", "Outbound systems"],
  ["crm-automation", "CRM / automation"],
  ["combination", "Combination of all"],
  ["not-sure", "Not sure yet"],
];

const badges = [
  ["/images.png", "Shopify Partner badge", "wf-contact-badge--wide"],
  ["/images (1).png", "Klaviyo Partner badge", "wf-contact-badge--wide"],
  ["/660ea0489aeb028f51938bfb_certificate-google-marketing-platform.avif", "Google Marketing Platform certification badge", "wf-contact-badge--wide"],
  ["/660ea324950fc02759a448b8_certificate-bing-ads.avif", "Microsoft Advertising certification badge", "wf-contact-badge--wide"],
  ["/semrush-agency-partner-badge.png", "Semrush Agency Partner badge", "wf-contact-badge--wide"],
  ["/Screenshot 2026-04-20 151006.png", "GoodFirms rating badge", "wf-contact-badge--wide"],
];

const dates = [
  ["mon-may-4", "Mon", "4", "May"],
  ["tue-may-5", "Tue", "5", "May"],
  ["wed-may-6", "Wed", "6", "May"],
  ["thu-may-7", "Thu", "7", "May"],
];

const times = ["09:30", "11:00", "13:30", "15:00"];

const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Contact | WeFlair</title>
  <meta name="description" content="Start with a 15 min call to see if WeFlair can help. If there is a fit, we build your 90-day growth roadmap." />
  <meta property="og:title" content="Contact | WeFlair" />
  <meta property="og:description" content="Start with a 15 min call to see if WeFlair can help. If there is a fit, we build your 90-day growth roadmap." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact | WeFlair" />
  <meta name="twitter:description" content="Start with a 15 min call to see if WeFlair can help. If there is a fit, we build your 90-day growth roadmap." />
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="/brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="/foundation-styles.css" />
  <link rel="stylesheet" href="/foundation-slater.css" />
  <link rel="stylesheet" href="/weflair-hero.css" />
  <link rel="stylesheet" href="/weflair-contact.css" />
  <script src="/foundation.js" defer></script>
  <script src="/weflair-hero.js" defer></script>
</head>
<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body wf-contact-page">
  <div data-navigation-toggle="close" class="nav-fade"></div>
  <header class="header">${header}</header>

  <main class="main wf-contact-main">
    <div class="noise is--small" aria-hidden="true"></div>

    <section class="wf-contact-hero" aria-labelledby="contact-title">
      <div class="wf-contact-wrap">
        <div class="wf-contact-panel">
          <div class="wf-contact-copy">
            <p class="wf-contact-eyebrow">Strategy call</p>
            <h1 class="wf-contact-title" id="contact-title">Ready to build your business goals?</h1>
            <p class="wf-contact-lede">Start with a 15 min call to see if we can help. If we're a match, we book a Strategy Session and build your 90-day roadmap.</p>
            <ul class="wf-contact-next">
              ${bullets.map((item) => `<li><span class="wf-contact-check">${checkIcon}</span><span>${item}</span></li>`).join("\n              ")}
            </ul>
            <div class="wf-contact-badges" aria-label="WeFlair partner badges and certifications">
              ${badges.map(([src, alt, modifier]) => `<figure class="wf-contact-badge ${modifier}"><img src="${src}" alt="${alt}" loading="lazy" decoding="async" /></figure>`).join("\n              ")}
            </div>
          </div>

          <aside class="wf-contact-card" id="contact-form" aria-label="Contact form">
            <div class="wf-contact-card__head">
              <p class="wf-contact-card__kicker">Tell us enough to come prepared</p>
              <h2 class="wf-contact-card__title">What are you trying to solve?</h2>
            </div>
            <form class="wf-contact-form" name="contact-strategy-call" method="POST" action="/contact.html#contact-form" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
              <input type="hidden" name="form-name" value="contact-strategy-call" />
              <p class="wf-contact-hidden">
                <label>Do not fill this out: <input name="bot-field" /></label>
              </p>

              <div class="wf-contact-form__grid">
                <label class="wf-contact-field" for="contact-name">
                  <span class="wf-contact-label">Name *</span>
                  <input id="contact-name" type="text" name="name" autocomplete="name" placeholder="First name + last name" required />
                </label>
                <label class="wf-contact-field" for="contact-email">
                  <span class="wf-contact-label">Business email *</span>
                  <input id="contact-email" type="email" name="email" autocomplete="email" placeholder="you@company.com" required />
                </label>
                <label class="wf-contact-field wf-contact-field--full" for="contact-company">
                  <span class="wf-contact-label">Company / website</span>
                  <input id="contact-company" type="text" name="company" autocomplete="organization" placeholder="Company name or website" />
                </label>
              </div>

              <fieldset class="wf-contact-problem">
                <legend class="wf-contact-problem__label">What are you trying to solve?</legend>
                <div class="wf-contact-chips">
                  ${problemOptions.map(([value, label]) => `<label class="wf-contact-chip"><input type="checkbox" name="challenge[]" value="${value}" /><span>${label}</span></label>`).join("\n                  ")}
                </div>
              </fieldset>

              <label class="wf-contact-field" for="contact-message">
                <span class="wf-contact-label">Ask us a question / tell us about your project *</span>
                <textarea id="contact-message" name="message" placeholder="Tell us what is happening now, what you want to fix, and what success should look like." required></textarea>
              </label>

              <div class="wf-contact-captcha" aria-label="reCAPTCHA verification">
                <div data-netlify-recaptcha="true"></div>
              </div>

              <button class="wf-contact-submit" type="submit">
                <span>Send</span>
                ${arrowIcon}
              </button>

              <p class="wf-contact-legal">By submitting this form, you agree to our <a href="/legal/privacy.html">Privacy Policy</a> and authorize WeFlair to store and process your data to provide the requested content or service.</p>
            </form>
          </aside>
        </div>
      </div>
    </section>

    <section class="wf-contact-calendar" aria-labelledby="calendar-title">
      <div class="wf-contact-wrap wf-contact-calendar__grid">
        <div class="wf-contact-note">
          <p class="wf-contact-note__eyebrow">Prefer booking directly?</p>
          <h2 id="calendar-title">Pick a 15 min slot.</h2>
          <p>The first call is only to understand the goal, the current bottleneck, and whether we can help. If the fit is clear, the Strategy Session is where the full 90-day roadmap gets built.</p>
          <div class="wf-contact-note__meta">
            <span>15 min intro call</span>
            <span>No pitch deck</span>
            <span>Strategy Session next</span>
          </div>
        </div>
        <div class="wf-contact-cal">
          <form class="wf-contact-slot-form" name="contact-slot-request" method="POST" action="/contact.html#calendar-title" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact-slot-request" />
            <p class="wf-contact-hidden">
              <label>Do not fill this out: <input name="bot-field" /></label>
            </p>
            <div class="wf-contact-slot-head">
              <h3>Request a slot</h3>
              <span>Europe/London</span>
            </div>
            <div class="wf-contact-date-grid" aria-label="Preferred date">
              ${dates.map(([value, day, date, month], index) => `<label class="wf-contact-date"><input type="radio" name="preferred_date" value="${value}"${index === 0 ? " checked" : ""} /><span><small>${day}</small><strong>${date}</strong><small>${month}</small></span></label>`).join("\n              ")}
            </div>
            <div class="wf-contact-time-grid" aria-label="Preferred time">
              ${times.map((time, index) => `<label class="wf-contact-time"><input type="radio" name="preferred_time" value="${time}"${index === 1 ? " checked" : ""} /><span>${time}</span></label>`).join("\n              ")}
            </div>
            <input class="wf-contact-slot-email" type="email" name="email" autocomplete="email" placeholder="Business email" required />
            <button class="wf-contact-slot-submit" type="submit"><span>Request this slot</span>${arrowIcon}</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  ${footer}
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, "contact.html"), html);
console.log("Rebuilt contact.html");
