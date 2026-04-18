/**
 * continue-rebuild.cjs
 * Completes the WeFlair homepage rebuild.
 * 
 * State when this runs:
 *   - why-scroll-css, why-visual-cleanup already disabled (media="not all")
 *   - #why-weflair, #process already hidden (display:none!important)
 *   - services CTA partially replaced (questionnaire hook in place, but line 3639 corrupted)
 *   - JS override for services CTA already neutralized
 *
 * This script:
 *   1. Fixes the corrupted questionnaire line (smart-quote artifact)
 *   2. Renames #process eyebrow to "The FLAIR method"
 *   3. Inserts Why Us grid between Problems and Handoff
 *   4. Inserts Sectors, Engagement Model, Credentials after Proof
 *   5. Inserts FAQ before Footer
 *   6. Adds DOM-move script + new-sections CSS
 *   7. Archives the Why WeFlair sticky section to ops/backups
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
let html = fs.readFileSync(FILE, 'utf8');

// ── Step 0: Backup ────────────────────────────────────────────
fs.writeFileSync(FILE + '.pre-continue-backup', html, 'utf8');
console.log('[0] Backup saved');

// ── Step 1: Fix corrupted questionnaire line ──────────────────
// The line has: <p>Answer...business.</p>\u2019<spaces><p>Answer...business.</p>
// We need to collapse it to just the single paragraph
html = html.replace(
  /(<p>Answer three quick questions and we will recommend the right starting point for your business\.<\/p>).+?(<p>Answer three quick questions)/,
  '$1'
);
// Remove the duplicate line that got created
html = html.replace(
  /(<p>Answer three quick questions and we will recommend the right starting point for your business\.<\/p>)\n\s*<p>Answer three quick questions and we will recommend the right starting point for your business\.<\/p>/,
  '$1'
);
console.log('[1] Fixed corrupted questionnaire line');

// ── Step 2: Rename process eyebrow ────────────────────────────
html = html.replace(
  '<p class="eyebrow__p">The process</p>',
  '<p class="eyebrow__p">The FLAIR method</p>'
);
html = html.replace(
  'From first call to pipeline growth in 90 days.',
  'The FLAIR Method: From first call to pipeline growth in 90 days.'
);
console.log('[2] Renamed process -> FLAIR method');

// ── Step 3: Insert Why Us grid ────────────────────────────────
const WHY_US_HTML = `
    <!-- ═══ WHY WEFLAIR GRID ═══ -->
    <section id="why-us" class="weflair-section weflair-why-us">
      <div class="container">
        <div class="weflair-why-us__layout">
          <div class="weflair-section__head">
            <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span><p class="eyebrow__p">Why WeFlair</p></div>
            <h2 class="h3">Built for brands that need more than campaign management.</h2>
          </div>
          <div class="weflair-why-us__grid">
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </span>
              <h3 class="weflair-why-us__title">$30M+ Managed Ad Spend</h3>
              <p class="weflair-why-us__body">Proven execution across 100+ growth campaigns for B2B, SaaS, fintech, and e-commerce brands.</p>
            </div>
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <h3 class="weflair-why-us__title">One Integrated Team</h3>
              <p class="weflair-why-us__body">Strategy, creative, media buying &amp; analytics under one roof. No handoff gaps, no finger-pointing.</p>
            </div>
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </span>
              <h3 class="weflair-why-us__title">Platform Certified</h3>
              <p class="weflair-why-us__body">Google Premier Partner, Meta Business Partner, LinkedIn &amp; HubSpot certified. Institutional-grade execution.</p>
            </div>
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
              </span>
              <h3 class="weflair-why-us__title">Systems, Not Campaigns</h3>
              <p class="weflair-why-us__body">We build repeatable growth engines &mdash; not one-off campaigns that collapse when you stop feeding them.</p>
            </div>
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </span>
              <h3 class="weflair-why-us__title">Transparent Dashboards</h3>
              <p class="weflair-why-us__body">Real-time shared reporting you can actually audit. No black boxes, no vanity metrics.</p>
            </div>
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <h3 class="weflair-why-us__title">Named Senior Strategist</h3>
              <p class="weflair-why-us__body">A dedicated strategist owns your account end-to-end. Not a helpdesk, not a junior rotating seat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
`;

// Insert after Problems section closing, before Handoff comment
const handoffComment = '<!-- ═══ WEFLAIR SYSTEM (TABBED INTERACTIVE SECTION) ═══ -->';
const handoffIdx = html.indexOf(handoffComment);
if (handoffIdx === -1) {
  console.error('[3] ERROR: Could not find handoff comment marker');
} else {
  html = html.slice(0, handoffIdx) + WHY_US_HTML + '\n    ' + html.slice(handoffIdx);
  console.log('[3] Inserted Why Us grid');
}

// ── Step 4: Insert Sectors + Engagement + Credentials after Proof ──
const SECTORS_HTML = `
    <!-- ═══ SECTORS ═══ -->
    <section id="sectors" class="weflair-section weflair-sectors">
      <div class="container">
        <div class="weflair-sectors__layout">
          <div class="weflair-section__head">
            <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span><p class="eyebrow__p">Sectors we serve</p></div>
            <h2 class="h3">Deep expertise in the verticals that matter to you.</h2>
          </div>
          <div class="weflair-sectors__tabs" role="tablist" aria-label="Industry sectors">
            <button type="button" class="weflair-sectors__tab is-active" data-sector-tab="0" aria-selected="true">B2B SaaS</button>
            <button type="button" class="weflair-sectors__tab" data-sector-tab="1" aria-selected="false">B2B Services</button>
            <button type="button" class="weflair-sectors__tab" data-sector-tab="2" aria-selected="false">Fintech</button>
            <button type="button" class="weflair-sectors__tab" data-sector-tab="3" aria-selected="false">E-commerce</button>
          </div>
          <div class="weflair-sectors__panels">
            <div class="weflair-sectors__panel is-active" data-sector-panel="0">
              <div class="weflair-sectors__panel-content">
                <h3 class="weflair-sectors__panel-title">B2B SaaS</h3>
                <p class="weflair-sectors__panel-body">We help SaaS companies build predictable pipeline through paid media, ABM, and full-funnel demand gen &mdash; from first touch to closed-won.</p>
                <ul class="weflair-sectors__bullets">
                  <li>Demand generation &amp; pipeline acceleration</li>
                  <li>Account-based marketing (ABM) programs</li>
                  <li>PLG + paid hybrid acquisition</li>
                  <li>CAC payback optimization</li>
                  <li>Multi-touch attribution &amp; reporting</li>
                </ul>
                <a href="/expertise/b2b-saas.html" class="weflair-sectors__cta">Explore B2B SaaS expertise &rarr;</a>
              </div>
            </div>
            <div class="weflair-sectors__panel" data-sector-panel="1">
              <div class="weflair-sectors__panel-content">
                <h3 class="weflair-sectors__panel-title">B2B Services</h3>
                <p class="weflair-sectors__panel-body">For agencies, consultancies, and service firms that need qualified leads &mdash; not just traffic. We build systems that fill your calendar with the right prospects.</p>
                <ul class="weflair-sectors__bullets">
                  <li>Lead generation &amp; qualification funnels</li>
                  <li>LinkedIn + Google Ads orchestration</li>
                  <li>Thought leadership amplification</li>
                  <li>Content-driven demand capture</li>
                  <li>CRM integration &amp; lead scoring</li>
                </ul>
                <a href="/expertise/b2b-services.html" class="weflair-sectors__cta">Explore B2B Services expertise &rarr;</a>
              </div>
            </div>
            <div class="weflair-sectors__panel" data-sector-panel="2">
              <div class="weflair-sectors__panel-content">
                <h3 class="weflair-sectors__panel-title">Fintech</h3>
                <p class="weflair-sectors__panel-body">Regulated, competitive, high-stakes. We help fintech brands acquire customers efficiently while navigating compliance constraints across channels.</p>
                <ul class="weflair-sectors__bullets">
                  <li>Compliant ad creative &amp; copy</li>
                  <li>Performance media across Google, Meta, LinkedIn</li>
                  <li>Conversion rate optimization</li>
                  <li>GTM launch campaigns</li>
                  <li>Analytics &amp; attribution infrastructure</li>
                </ul>
                <a href="/expertise/fintech.html" class="weflair-sectors__cta">Explore Fintech expertise &rarr;</a>
              </div>
            </div>
            <div class="weflair-sectors__panel" data-sector-panel="3">
              <div class="weflair-sectors__panel-content">
                <h3 class="weflair-sectors__panel-title">E-commerce</h3>
                <p class="weflair-sectors__panel-body">We help e-commerce brands scale profitably by building full-funnel paid media systems that drive revenue &mdash; not just ROAS on a dashboard.</p>
                <ul class="weflair-sectors__bullets">
                  <li>Full-funnel paid media (Meta, Google, TikTok)</li>
                  <li>Creative testing &amp; iteration systems</li>
                  <li>Retention &amp; LTV-focused campaigns</li>
                  <li>Product feed optimization</li>
                  <li>Incrementality measurement</li>
                </ul>
                <a href="/expertise/ecommerce.html" class="weflair-sectors__cta">Explore E-commerce expertise &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
`;

const ENGAGEMENT_HTML = `
    <!-- ═══ ENGAGEMENT MODEL ═══ -->
    <section id="engagement-model" class="weflair-section weflair-engagement">
      <div class="container">
        <div class="weflair-engagement__layout">
          <div class="weflair-section__head">
            <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span><p class="eyebrow__p">Engagement models</p></div>
            <h2 class="h3">Choose how we work together.</h2>
            <p class="weflair-section__body">Six ways to engage &mdash; from a one-time audit to a full embedded team. Pick what fits your stage.</p>
          </div>
          <div class="weflair-engagement__grid">
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Full-Service Retainer</h3>
              <ul class="weflair-engagement__bullets">
                <li>Strategy, execution &amp; reporting in one package</li>
                <li>Dedicated team across all channels</li>
                <li>Monthly sprints with clear KPIs</li>
                <li>Best for: scaling brands ready for full commitment</li>
              </ul>
            </div>
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Channel Specialist</h3>
              <ul class="weflair-engagement__bullets">
                <li>Deep expertise in one platform</li>
                <li>Google, Meta, LinkedIn, or programmatic</li>
                <li>Full ownership of channel performance</li>
                <li>Best for: teams with strategy but need execution depth</li>
              </ul>
            </div>
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Consulting Sprint</h3>
              <ul class="weflair-engagement__bullets">
                <li>90-day strategic advisory engagement</li>
                <li>Hands-on planning, your team executes</li>
                <li>Bi-weekly strategy sessions + async support</li>
                <li>Best for: internal teams that need senior guidance</li>
              </ul>
            </div>
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Project-Based</h3>
              <ul class="weflair-engagement__bullets">
                <li>Scoped deliverable with fixed timeline</li>
                <li>Campaign launches, creative sprints, landing pages</li>
                <li>Clear SOW with defined outcomes</li>
                <li>Best for: specific initiatives with known scope</li>
              </ul>
            </div>
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Audit + Roadmap</h3>
              <ul class="weflair-engagement__bullets">
                <li>One-time deep-dive into your current setup</li>
                <li>Detailed findings report + 90-day action plan</li>
                <li>Covers media, creative, analytics &amp; CRO</li>
                <li>Best for: brands who want clarity before committing</li>
              </ul>
            </div>
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Training &amp; Enablement</h3>
              <ul class="weflair-engagement__bullets">
                <li>Upskill your in-house marketing team</li>
                <li>Platform certifications &amp; best practices</li>
                <li>Custom workshops + documentation</li>
                <li>Best for: teams building internal capability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
`;

const CREDENTIALS_HTML = `
    <!-- ═══ CREDENTIALS ═══ -->
    <section id="credentials" class="weflair-section weflair-credentials">
      <div class="container">
        <div class="weflair-credentials__layout">
          <div class="weflair-section__head">
            <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span><p class="eyebrow__p">Credentials</p></div>
            <h2 class="h3">Numbers and partnerships that speak for themselves.</h2>
          </div>
          <div class="weflair-credentials__stats">
            <div class="weflair-credentials__stat">
              <span class="weflair-credentials__stat-value">$30M+</span>
              <span class="weflair-credentials__stat-label">Ad spend managed</span>
            </div>
            <div class="weflair-credentials__stat">
              <span class="weflair-credentials__stat-value">10+</span>
              <span class="weflair-credentials__stat-label">Years of experience</span>
            </div>
            <div class="weflair-credentials__stat">
              <span class="weflair-credentials__stat-value">100+</span>
              <span class="weflair-credentials__stat-label">Success stories</span>
            </div>
            <div class="weflair-credentials__stat">
              <span class="weflair-credentials__stat-value">4.93/5</span>
              <span class="weflair-credentials__stat-label">Client satisfaction</span>
            </div>
          </div>
          <div class="weflair-credentials__badges">
            <div class="weflair-credentials__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Google Premier Partner</span>
            </div>
            <div class="weflair-credentials__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Meta Business Partner</span>
            </div>
            <div class="weflair-credentials__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>LinkedIn Marketing Partner</span>
            </div>
            <div class="weflair-credentials__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>HubSpot Solutions Partner</span>
            </div>
            <div class="weflair-credentials__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Clutch Top Agency</span>
            </div>
            <div class="weflair-credentials__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Microsoft Advertising</span>
            </div>
            <div class="weflair-credentials__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>G2 High Performer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
`;

// Insert after the Proof section's closing </section>, before Testimonials
const testimonialMarker = '<section id="testimonials"';
const testimonialIdx = html.indexOf(testimonialMarker);
if (testimonialIdx === -1) {
  console.error('[4] ERROR: Could not find testimonials marker');
} else {
  html = html.slice(0, testimonialIdx) + SECTORS_HTML + '\n' + ENGAGEMENT_HTML + '\n' + CREDENTIALS_HTML + '\n    ' + html.slice(testimonialIdx);
  console.log('[4] Inserted Sectors, Engagement, Credentials');
}

// ── Step 5: Insert FAQ before Footer ──────────────────────────
const FAQ_HTML = `
    <!-- ═══ FAQ ═══ -->
    <section id="faq" class="weflair-section weflair-faq">
      <div class="container">
        <div class="weflair-faq__layout">
          <div class="weflair-section__head">
            <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span><p class="eyebrow__p">FAQ</p></div>
            <h2 class="h3">Questions we hear most.</h2>
          </div>
          <div class="weflair-faq__list">
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">What kinds of companies do you work with?</summary>
              <div class="weflair-faq__answer"><p>We work with growth-stage B2B SaaS, fintech, e-commerce, and professional services companies. Our sweet spot is businesses spending $10K+ per month on paid media that want to scale without wasting budget.</p></div>
            </details>
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">How is WeFlair different from a typical agency?</summary>
              <div class="weflair-faq__answer"><p>Most agencies run campaigns. We build growth systems. You get a named senior strategist (not a junior account manager), transparent dashboards you can actually audit, and a team that owns revenue metrics &mdash; not just clicks and impressions.</p></div>
            </details>
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">What does the onboarding process look like?</summary>
              <div class="weflair-faq__answer"><p>We follow our FLAIR method: Discovery &amp; Audit in week one, Strategy &amp; Planning in weeks two to three, Build &amp; Launch in weeks three to four, and ongoing Optimization from month two. Most clients see meaningful traction within 90 days.</p></div>
            </details>
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">Do you require long-term contracts?</summary>
              <div class="weflair-faq__answer"><p>No. We recommend a 90-day initial engagement so we have time to build systems and prove results, but we do not lock you into annual contracts. After the first sprint, engagements continue month-to-month.</p></div>
            </details>
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">Can you work alongside our in-house team?</summary>
              <div class="weflair-faq__answer"><p>Absolutely. Most of our clients have some in-house marketing capability. We plug into your existing team and tools &mdash; Slack, your CRM, your analytics stack &mdash; so there is zero friction. We complement what you have, not replace it.</p></div>
            </details>
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">What is the free growth audit?</summary>
              <div class="weflair-faq__answer"><p>It is a no-commitment deep-dive into your current paid media, analytics, and conversion setup. We identify what is leaking, what needs fixing first, and whether there is a genuine fit. If there is no fit, we will tell you &mdash; no hard sell.</p></div>
            </details>
          </div>
        </div>
      </div>
    </section>
`;

const footerMarker = '<section class="footer weflair-footer">';
const footerIdx = html.indexOf(footerMarker);
if (footerIdx === -1) {
  console.error('[5] ERROR: Could not find footer marker');
} else {
  html = html.slice(0, footerIdx) + FAQ_HTML + '\n    ' + html.slice(footerIdx);
  console.log('[5] Inserted FAQ');
}

// ── Step 6: Add DOM-move script + new CSS ─────────────────────
// Move #process (now FLAIR Method) to just before #resources-teaser
const DOM_MOVE_SCRIPT = `
  <script>
    /* Move FLAIR Method (formerly #process) to correct position */
    (function(){
      var proc = document.getElementById('process');
      var res = document.getElementById('resources-teaser');
      if (proc && res && res.parentNode) {
        /* Also grab the script that follows #process (the IntersectionObserver) */
        var nextScript = proc.nextElementSibling;
        res.parentNode.insertBefore(proc, res);
        if (nextScript && nextScript.tagName === 'SCRIPT') {
          res.parentNode.insertBefore(nextScript, res);
        }
        proc.style.display = '';
        proc.removeAttribute('style');
      }
    })();
  </script>
`;

// Add sectors tab JS
const SECTORS_JS = `
  <script>
    /* Sectors tab switching */
    (function(){
      var tabs = document.querySelectorAll('[data-sector-tab]');
      var panels = document.querySelectorAll('[data-sector-panel]');
      if (!tabs.length || !panels.length) return;
      tabs.forEach(function(tab){
        tab.addEventListener('click', function(){
          var idx = tab.getAttribute('data-sector-tab');
          tabs.forEach(function(t){ t.classList.remove('is-active'); t.setAttribute('aria-selected','false'); });
          panels.forEach(function(p){ p.classList.remove('is-active'); });
          tab.classList.add('is-active');
          tab.setAttribute('aria-selected','true');
          var target = document.querySelector('[data-sector-panel="'+idx+'"]');
          if(target) target.classList.add('is-active');
        });
      });
    })();
  </script>
`;

// Insert before closing </body>
const bodyCloseIdx = html.lastIndexOf('</body>');
if (bodyCloseIdx === -1) {
  console.error('[6] ERROR: Could not find </body>');
} else {
  html = html.slice(0, bodyCloseIdx) + DOM_MOVE_SCRIPT + SECTORS_JS + '\n' + html.slice(bodyCloseIdx);
  console.log('[6] Added DOM-move script + sectors JS');
}

// ── Step 7: Add comprehensive CSS for new sections ────────────
const NEW_CSS = `
    <style id="weflair-new-sections-css">
      /* ── Questionnaire Hook ── */
      .weflair-questionnaire-hook {
        display: grid !important;
        gap: 1.5rem;
      }
      .weflair-questionnaire-hook__questions {
        display: grid;
        gap: .75rem;
      }
      .weflair-questionnaire-hook__q {
        display: flex;
        align-items: center;
        gap: .75rem;
        padding: .85rem 1.1rem;
        border-radius: .85rem;
        background: rgba(62, 255, 104, .04);
        border: 1px solid rgba(62, 255, 104, .12);
        font-size: .92rem;
        color: inherit;
        transition: border-color .2s, background .2s;
      }
      .weflair-questionnaire-hook__q:hover {
        border-color: rgba(62, 255, 104, .28);
        background: rgba(62, 255, 104, .08);
      }
      .weflair-questionnaire-hook__num {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background: rgba(62, 255, 104, .12);
        color: #3eff68;
        font-size: .72rem;
        font-weight: 700;
        flex-shrink: 0;
      }
      .weflair-questionnaire-hook__start {
        display: inline-flex;
        align-items: center;
        gap: .5rem;
        padding: .7rem 1.2rem;
        border-radius: .65rem;
        background: #3eff68;
        color: #0a0a0a;
        font-weight: 600;
        font-size: .88rem;
        text-decoration: none;
        transition: background .2s, transform .15s;
        justify-self: start;
      }
      .weflair-questionnaire-hook__start:hover {
        background: #5aff82;
        transform: translateY(-1px);
      }

      /* ── Why Us Grid ── */
      .weflair-why-us {
        padding: clamp(5rem, 8vw, 7rem) 0;
      }
      .weflair-why-us__layout {
        width: min(100%, 78rem);
        margin: 0 auto;
        display: grid;
        gap: clamp(2.5rem, 4vw, 3.5rem);
      }
      .weflair-why-us__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
      }
      .weflair-why-us__card {
        padding: clamp(1.5rem, 2.5vw, 2rem);
        border-radius: 1rem;
        background: rgba(255,255,255,.03);
        border: 1px solid rgba(255,255,255,.06);
        display: grid;
        gap: .65rem;
        transition: border-color .25s, background .25s;
      }
      .weflair-why-us__card:hover {
        border-color: rgba(62, 255, 104, .18);
        background: rgba(62, 255, 104, .03);
      }
      .weflair-why-us__icon {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .6rem;
        background: rgba(62, 255, 104, .08);
        border: 1px solid rgba(62, 255, 104, .16);
        color: #3eff68;
      }
      .weflair-why-us__icon svg {
        width: 1.25rem;
        height: 1.25rem;
      }
      .weflair-why-us__title {
        font-size: clamp(1rem, 1.4vw, 1.15rem);
        font-weight: 700;
        margin: 0;
        letter-spacing: -.02em;
      }
      .weflair-why-us__body {
        font-size: .88rem;
        line-height: 1.55;
        margin: 0;
        opacity: .72;
      }
      @media (max-width: 900px) {
        .weflair-why-us__grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 560px) {
        .weflair-why-us__grid { grid-template-columns: 1fr; }
      }

      /* ── Sectors ── */
      .weflair-sectors {
        padding: clamp(5rem, 8vw, 7rem) 0;
      }
      .weflair-sectors__layout {
        width: min(100%, 78rem);
        margin: 0 auto;
        display: grid;
        gap: clamp(2rem, 3vw, 2.5rem);
      }
      .weflair-sectors__tabs {
        display: flex;
        gap: .5rem;
        flex-wrap: wrap;
      }
      .weflair-sectors__tab {
        padding: .6rem 1.25rem;
        border-radius: 2rem;
        border: 1px solid rgba(255,255,255,.1);
        background: transparent;
        color: inherit;
        font-size: .88rem;
        font-weight: 600;
        cursor: pointer;
        transition: all .2s;
        opacity: .6;
      }
      .weflair-sectors__tab.is-active {
        background: #3eff68;
        color: #0a0a0a;
        border-color: #3eff68;
        opacity: 1;
      }
      .weflair-sectors__tab:hover:not(.is-active) {
        border-color: rgba(62, 255, 104, .3);
        opacity: .85;
      }
      .weflair-sectors__panels {
        min-height: 12rem;
      }
      .weflair-sectors__panel {
        display: none;
      }
      .weflair-sectors__panel.is-active {
        display: block;
        animation: wf-fade-in .3s ease;
      }
      @keyframes wf-fade-in {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .weflair-sectors__panel-content {
        display: grid;
        gap: 1rem;
        max-width: 44rem;
      }
      .weflair-sectors__panel-title {
        font-size: clamp(1.15rem, 2vw, 1.45rem);
        font-weight: 700;
        margin: 0;
      }
      .weflair-sectors__panel-body {
        font-size: .92rem;
        line-height: 1.6;
        opacity: .76;
        margin: 0;
      }
      .weflair-sectors__bullets {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: .5rem;
      }
      .weflair-sectors__bullets li {
        display: flex;
        align-items: center;
        gap: .6rem;
        font-size: .88rem;
        opacity: .8;
      }
      .weflair-sectors__bullets li::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #3eff68;
        flex-shrink: 0;
      }
      .weflair-sectors__cta {
        display: inline-flex;
        align-items: center;
        gap: .4rem;
        color: #3eff68;
        font-weight: 600;
        font-size: .88rem;
        text-decoration: none;
        transition: opacity .2s;
      }
      .weflair-sectors__cta:hover { opacity: .8; }

      /* ── Engagement Model ── */
      .weflair-engagement {
        padding: clamp(5rem, 8vw, 7rem) 0;
      }
      .weflair-engagement__layout {
        width: min(100%, 78rem);
        margin: 0 auto;
        display: grid;
        gap: clamp(2.5rem, 4vw, 3.5rem);
      }
      .weflair-engagement__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
      }
      .weflair-engagement__card {
        padding: clamp(1.5rem, 2.5vw, 2rem);
        border-radius: 1rem;
        background: rgba(255,255,255,.03);
        border: 1px solid rgba(255,255,255,.06);
        display: grid;
        gap: .75rem;
        transition: border-color .25s;
      }
      .weflair-engagement__card:hover {
        border-color: rgba(62, 255, 104, .18);
      }
      .weflair-engagement__icon {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .6rem;
        background: rgba(62, 255, 104, .08);
        border: 1px solid rgba(62, 255, 104, .16);
        color: #3eff68;
      }
      .weflair-engagement__icon svg {
        width: 1.25rem;
        height: 1.25rem;
      }
      .weflair-engagement__title {
        font-size: clamp(1rem, 1.4vw, 1.15rem);
        font-weight: 700;
        margin: 0;
      }
      .weflair-engagement__bullets {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: .35rem;
      }
      .weflair-engagement__bullets li {
        font-size: .82rem;
        line-height: 1.5;
        opacity: .72;
        padding-left: .85rem;
        position: relative;
      }
      .weflair-engagement__bullets li::before {
        content: "";
        position: absolute;
        left: 0;
        top: .55em;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: rgba(62, 255, 104, .5);
      }
      @media (max-width: 900px) {
        .weflair-engagement__grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 560px) {
        .weflair-engagement__grid { grid-template-columns: 1fr; }
      }

      /* ── Credentials ── */
      .weflair-credentials {
        padding: clamp(5rem, 8vw, 7rem) 0;
      }
      .weflair-credentials__layout {
        width: min(100%, 78rem);
        margin: 0 auto;
        display: grid;
        gap: clamp(2.5rem, 4vw, 3.5rem);
      }
      .weflair-credentials__stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.25rem;
      }
      .weflair-credentials__stat {
        text-align: center;
        padding: clamp(1.5rem, 2vw, 2rem) 1rem;
        border-radius: 1rem;
        background: rgba(255,255,255,.03);
        border: 1px solid rgba(255,255,255,.06);
        display: grid;
        gap: .35rem;
      }
      .weflair-credentials__stat-value {
        font-size: clamp(1.8rem, 3.5vw, 2.8rem);
        font-weight: 800;
        letter-spacing: -.04em;
        color: #3eff68;
        line-height: 1;
      }
      .weflair-credentials__stat-label {
        font-size: .82rem;
        opacity: .6;
        font-weight: 500;
      }
      .weflair-credentials__badges {
        display: flex;
        flex-wrap: wrap;
        gap: .75rem;
        justify-content: center;
      }
      .weflair-credentials__badge {
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: .6rem 1rem;
        border-radius: .75rem;
        background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.08);
        font-size: .78rem;
        font-weight: 600;
        opacity: .75;
        transition: opacity .2s;
      }
      .weflair-credentials__badge:hover { opacity: 1; }
      .weflair-credentials__badge svg {
        width: 1rem;
        height: 1rem;
        color: #3eff68;
        flex-shrink: 0;
      }
      @media (max-width: 700px) {
        .weflair-credentials__stats { grid-template-columns: repeat(2, 1fr); }
      }

      /* ── FAQ ── */
      .weflair-faq {
        padding: clamp(5rem, 8vw, 7rem) 0;
      }
      .weflair-faq__layout {
        width: min(100%, 54rem);
        margin: 0 auto;
        display: grid;
        gap: clamp(2rem, 3vw, 2.5rem);
      }
      .weflair-faq__list {
        display: grid;
        gap: 0;
      }
      .weflair-faq__item {
        border-bottom: 1px solid rgba(255,255,255,.08);
      }
      .weflair-faq__question {
        padding: 1.1rem 0;
        font-size: clamp(.95rem, 1.3vw, 1.08rem);
        font-weight: 600;
        cursor: pointer;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        transition: color .2s;
      }
      .weflair-faq__question::-webkit-details-marker { display: none; }
      .weflair-faq__question::after {
        content: "+";
        font-size: 1.3rem;
        font-weight: 300;
        color: #3eff68;
        flex-shrink: 0;
        transition: transform .25s;
      }
      .weflair-faq__item[open] .weflair-faq__question::after {
        transform: rotate(45deg);
      }
      .weflair-faq__answer {
        padding: 0 0 1.1rem;
      }
      .weflair-faq__answer p {
        margin: 0;
        font-size: .88rem;
        line-height: 1.65;
        opacity: .72;
      }

      /* ── Light Theme Overrides for New Sections ── */
      html[data-theme="light"] .weflair-why-us,
      html[data-theme="light"] .weflair-sectors,
      html[data-theme="light"] .weflair-engagement,
      html[data-theme="light"] .weflair-credentials,
      html[data-theme="light"] .weflair-faq {
        background: var(--wf-theme-bg, #f6f3ee);
        color: var(--wf-theme-text, #171511);
      }
      html[data-theme="light"] .weflair-why-us__card,
      html[data-theme="light"] .weflair-engagement__card,
      html[data-theme="light"] .weflair-credentials__stat {
        background: rgba(0,0,0,.025);
        border-color: rgba(0,0,0,.08);
      }
      html[data-theme="light"] .weflair-why-us__icon,
      html[data-theme="light"] .weflair-engagement__icon {
        background: rgba(62, 255, 104, .06);
        border-color: rgba(62, 255, 104, .14);
      }
      html[data-theme="light"] .weflair-sectors__tab {
        border-color: rgba(0,0,0,.12);
      }
      html[data-theme="light"] .weflair-sectors__tab.is-active {
        background: #3eff68;
        color: #0a0a0a;
        border-color: #3eff68;
      }
      html[data-theme="light"] .weflair-credentials__badge {
        background: rgba(0,0,0,.03);
        border-color: rgba(0,0,0,.08);
      }
      html[data-theme="light"] .weflair-faq__item {
        border-color: rgba(0,0,0,.08);
      }
      html[data-theme="light"] .weflair-questionnaire-hook__q {
        background: rgba(62, 255, 104, .04);
        border-color: rgba(62, 255, 104, .15);
      }
      html[data-theme="light"] .weflair-questionnaire-hook__start {
        background: #3eff68;
        color: #0a0a0a;
      }
    </style>
`;

// Insert the CSS before </head>
const headCloseIdx = html.indexOf('</head>');
if (headCloseIdx !== -1) {
  html = html.slice(0, headCloseIdx) + NEW_CSS + '\n  ' + html.slice(headCloseIdx);
  console.log('[7a] Added new sections CSS in <head>');
} else {
  // Fallback: insert before first <section
  const firstSection = html.indexOf('<section');
  html = html.slice(0, firstSection) + NEW_CSS + '\n' + html.slice(firstSection);
  console.log('[7a] Added new sections CSS (fallback)');
}

// ── Step 8: Archive the Why WeFlair sticky section ────────────
const backupDir = path.join(__dirname, 'ops', 'backups');
fs.mkdirSync(backupDir, { recursive: true });

// Extract the Why WeFlair sticky content for archival
const backup = fs.readFileSync(FILE + '.pre-continue-backup', 'utf8');
const whyStart = backup.indexOf('<style id="weflair-why-scroll-css"');
const whyEnd = backup.indexOf('</script>', backup.indexOf('initWeFlairWhy'));
if (whyStart !== -1 && whyEnd !== -1) {
  const archived = backup.slice(whyStart, whyEnd + '</script>'.length);
  fs.writeFileSync(
    path.join(backupDir, 'why-weflair-sticky-archive.html'),
    '<!-- Archived Why WeFlair sticky section - ' + new Date().toISOString().slice(0,10) + ' -->\n' + archived,
    'utf8'
  );
  console.log('[8] Archived sticky Why WeFlair to ops/backups/');
} else {
  console.log('[8] WARNING: Could not extract sticky section for archive');
}

// ── Write final output ────────────────────────────────────────
fs.writeFileSync(FILE, html, 'utf8');
console.log('\n✅ Homepage rebuild complete!');
console.log('Backup at: index.html.pre-continue-backup');
console.log('Archive at: ops/backups/why-weflair-sticky-archive.html');
console.log('\nSection order:');
console.log('  Hero → Logos → Services+Questionnaire → Problems → Why Us →');
console.log('  How We Work (4 tabs) → Proof → Sectors → Engagement →');
console.log('  Credentials → FLAIR Method → Resources → FAQ → CTA → Footer');
