/**
 * rebuild-homepage.cjs
 * Restructures the WeFlair homepage per the new section hierarchy:
 *   Hero → Logos → Services+Questionnaire → Problems → Why Us → 4-tabs →
 *   Proof → Sectors → Engagement Model → Credentials → FLAIR Method →
 *   Resources → FAQ → CTA → Footer
 *
 * - Archives the sticky Why WeFlair section to ops/backups/
 * - Removes sticky CSS/HTML/JS
 * - Replaces the services CTA with a questionnaire hook
 * - Adds new sections: Why Us, Sectors, Engagement Model, Credentials, FAQ
 * - Renames Process → FLAIR Method and relocates it
 */

const fs = require('fs');
const path = require('path');

// ── helpers ──
function findStyleBlock(html, id) {
  const open = `<style id="${id}"`;
  const s = html.indexOf(open);
  if (s === -1) return null;
  const e = html.indexOf('</style>', s);
  if (e === -1) return null;
  return { start: s, end: e + '</style>'.length, content: html.substring(s, e + '</style>'.length) };
}

function removeRange(html, start, end) {
  return html.substring(0, start) + html.substring(end);
}

function removeBlock(html, startMarker, endMarker) {
  const s = html.indexOf(startMarker);
  if (s === -1) { console.warn('WARN: start marker not found:', startMarker.substring(0, 60)); return html; }
  const e = html.indexOf(endMarker, s);
  if (e === -1) { console.warn('WARN: end marker not found:', endMarker.substring(0, 60)); return html; }
  return html.substring(0, s) + html.substring(e + endMarker.length);
}

// ── read source ──
const SRC = path.join(__dirname, 'index.html');
let html = fs.readFileSync(SRC, 'utf8');
console.log('Read index.html:', html.length, 'chars');

// ── backup ──
fs.copyFileSync(SRC, path.join(__dirname, 'index-pre-rebuild.html'));
console.log('Backed up to index-pre-rebuild.html');

// ── archive sticky Why WeFlair to ops/backups ──
const backupDir = path.join(__dirname, 'ops', 'backups');
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

const whyCss1 = findStyleBlock(html, 'weflair-why-scroll-css');
const whyCss2 = findStyleBlock(html, 'weflair-why-rework-css');
const whyCss3 = findStyleBlock(html, 'weflair-why-visual-cleanup');

const whySectionStart = html.indexOf('<section class="weflair-section weflair-why" id="why-weflair"');
const whySectionEnd = html.indexOf('</section>', whySectionStart);
const whyScriptStart = html.indexOf('<script>', whySectionEnd);
const whyScriptEnd = html.indexOf('</script>', whyScriptStart);

let whyArchive = '<!-- Archived sticky Why WeFlair section - ' + new Date().toISOString() + ' -->\n\n';
if (whyCss1) whyArchive += '<!-- CSS 1: weflair-why-scroll-css -->\n' + whyCss1.content + '\n\n';
if (whyCss2) whyArchive += '<!-- CSS 2: weflair-why-rework-css -->\n' + whyCss2.content + '\n\n';
if (whyCss3) whyArchive += '<!-- CSS 3: weflair-why-visual-cleanup -->\n' + whyCss3.content + '\n\n';
if (whySectionStart !== -1 && whySectionEnd !== -1) {
  whyArchive += '<!-- HTML Section -->\n' + html.substring(whySectionStart, whySectionEnd + '</section>'.length) + '\n\n';
}
if (whyScriptStart !== -1 && whyScriptEnd !== -1) {
  whyArchive += '<!-- JS -->\n' + html.substring(whyScriptStart, whyScriptEnd + '</script>'.length) + '\n\n';
}

// Also archive the theme-overrides rules for #why-weflair
const themeWhy = html.match(/html\[data-theme="dark"\] #why-weflair[\s\S]*?(?=\n\s*html\[data-theme="dark"\] #why-weflair .weflair-why-avatar[\s\S]*?\}\n\s*\<\/style\>)/);
const themeOverridesWhyStart = html.indexOf('html[data-theme="dark"] #why-weflair {');
const themeOverridesWhyEnd = html.indexOf('</style>', themeOverridesWhyStart);
if (themeOverridesWhyStart !== -1) {
  const themeWhyContent = html.substring(themeOverridesWhyStart, html.indexOf('\n    </style>', themeOverridesWhyStart));
  whyArchive += '<!-- Theme overrides for #why-weflair -->\n<style>\n' + themeWhyContent + '\n</style>\n';
}

fs.writeFileSync(path.join(backupDir, 'why-weflair-sticky-archive.html'), whyArchive);
console.log('Archived sticky Why WeFlair to ops/backups/why-weflair-sticky-archive.html');

// ═══════════════════════════════════════════════════════════════
// STEP 1: Remove sticky Why WeFlair CSS blocks
// ═══════════════════════════════════════════════════════════════

// Remove weflair-why-scroll-css
if (whyCss1) {
  html = removeRange(html, whyCss1.start, whyCss1.end);
  console.log('Removed <style id="weflair-why-scroll-css">');
}

// Re-find the others after the first removal
let css2 = findStyleBlock(html, 'weflair-why-rework-css');
if (css2) {
  html = removeRange(html, css2.start, css2.end);
  console.log('Removed <style id="weflair-why-rework-css">');
}

let css3 = findStyleBlock(html, 'weflair-why-visual-cleanup');
if (css3) {
  html = removeRange(html, css3.start, css3.end);
  console.log('Removed <style id="weflair-why-visual-cleanup">');
}

// ═══════════════════════════════════════════════════════════════
// STEP 2: Remove sticky Why WeFlair HTML section + its inline JS
// ═══════════════════════════════════════════════════════════════
const SECTION_START = '<section class="weflair-section weflair-why" id="why-weflair"';
const SECTION_SCRIPT_END = '</script>';

const secStart = html.indexOf(SECTION_START);
if (secStart !== -1) {
  const secEnd = html.indexOf('</section>', secStart);
  // The script block immediately follows the section
  const scriptStart = html.indexOf('<script>', secEnd);
  // Make sure this script is the Why WeFlair one (contains initWeFlairWhy)
  const scriptEnd = html.indexOf('</script>', scriptStart);
  const scriptContent = html.substring(scriptStart, scriptEnd);
  if (scriptContent.includes('initWeFlairWhy')) {
    html = html.substring(0, secStart) + html.substring(scriptEnd + '</script>'.length);
    console.log('Removed Why WeFlair section + JS');
  } else {
    // Just remove the section
    html = html.substring(0, secStart) + html.substring(secEnd + '</section>'.length);
    console.log('Removed Why WeFlair section (JS not adjacent)');
  }
}

// ═══════════════════════════════════════════════════════════════
// STEP 3: Remove #why-weflair rules from theme-overrides CSS
// ═══════════════════════════════════════════════════════════════
// These are inside <style id="weflair-theme-overrides"> from
// "html[data-theme="dark"] #why-weflair {" to just before "</style>"
const whyThemeStart = html.indexOf('html[data-theme="dark"] #why-weflair {');
if (whyThemeStart !== -1) {
  // Find the closing of the last rule before </style>
  // The block ends at the line "      background: rgba(255, 255, 255, .08);\n      }\n    </style>"
  // Find the </style> that follows
  const nextStyleClose = html.indexOf('</style>', whyThemeStart);
  // Go backwards to find where the last #why-weflair rule's closing brace is
  // We need to remove from whyThemeStart to just before </style>
  // But wait - the theme overrides block might have content after the why-weflair rules
  // Let me check: the why-weflair rules are the LAST rules in the theme-overrides block
  // So I can remove from whyThemeStart to the position just before the \n    </style>

  // Actually, let's be safer: find the last closing brace before </style>
  const styleCloseTag = html.lastIndexOf('\n    </style>', nextStyleClose);
  if (styleCloseTag !== -1 && styleCloseTag > whyThemeStart) {
    // Remove from whyThemeStart to styleCloseTag (keeping the </style>)
    html = html.substring(0, whyThemeStart) + html.substring(styleCloseTag);
    console.log('Removed #why-weflair rules from theme-overrides');
  }
}

// ═══════════════════════════════════════════════════════════════
// STEP 4: Replace services CTA with questionnaire hook
// ═══════════════════════════════════════════════════════════════
const SVC_CTA_START = '<div class="weflair-services-cta-wrap">';
const SVC_CTA_END = '</section>'; // end of services section

const svcCtaStart = html.indexOf(SVC_CTA_START);
if (svcCtaStart !== -1) {
  const svcSectionEnd = html.indexOf('</section>', svcCtaStart);

  const questionnaireHook = `<div class="weflair-services-cta-wrap">
          <div class="weflair-services-cta weflair-questionnaire-hook">
            <div class="weflair-questionnaire-hook__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div class="weflair-questionnaire-hook__content">
              <h3>Not sure which service you need?</h3>
              <p>Answer 3 quick questions and we&rsquo;ll point you to the right starting point.</p>
            </div>
            <div class="weflair-questionnaire-hook__questions">
              <div class="weflair-questionnaire-hook__q" data-q="1">
                <span class="weflair-questionnaire-hook__q-num">1</span>
                <span class="weflair-questionnaire-hook__q-text">What is your primary growth challenge right now?</span>
              </div>
              <div class="weflair-questionnaire-hook__q" data-q="2">
                <span class="weflair-questionnaire-hook__q-num">2</span>
                <span class="weflair-questionnaire-hook__q-text">Do you have an in-house marketing team?</span>
              </div>
              <div class="weflair-questionnaire-hook__q" data-q="3">
                <span class="weflair-questionnaire-hook__q-num">3</span>
                <span class="weflair-questionnaire-hook__q-text">What is your current monthly marketing budget range?</span>
              </div>
            </div>
            <p class="weflair-questionnaire-hook__note">Coming soon &mdash; full interactive questionnaire</p>
          </div>
        </div>`;

  html = html.substring(0, svcCtaStart) + questionnaireHook + '\n    ' + html.substring(svcSectionEnd);
  console.log('Replaced services CTA with questionnaire hook');
}

// ═══════════════════════════════════════════════════════════════
// STEP 5: Insert Why Us section between Problems and 4-tabs
// ═══════════════════════════════════════════════════════════════
const WHY_US_SECTION = `
    <!-- ═══ WHY WEFLAIR (ICON GRID) ═══ -->
    <section class="weflair-section weflair-why-us" id="why-us">
      <div class="container">
        <div class="weflair-why-us__layout">
          <div class="weflair-section__head">
            <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span><p class="eyebrow__p">Why WeFlair</p></div>
            <h2 class="h3">Built for brands that need more than campaign management.</h2>
          </div>
          <div class="weflair-why-us__grid">
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </span>
              <h3 class="weflair-why-us__title">Full-Funnel Strategy</h3>
              <p class="weflair-why-us__body">We build around the full path from demand to conversion &mdash; paid, outbound, creative, CRO, and operations &mdash; so strategy and execution support the same commercial outcome.</p>
            </div>
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </span>
              <h3 class="weflair-why-us__title">Data-Driven Execution</h3>
              <p class="weflair-why-us__body">We run on data, not guesses. With expert insights and clear analytics, you&rsquo;ll always know what works and what to scale next.</p>
            </div>
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"/><path d="M12 16v6"/><path d="M4.93 4.93l4.24 4.24"/><path d="M14.83 14.83l4.24 4.24"/><path d="M2 12h6"/><path d="M16 12h6"/><path d="M4.93 19.07l4.24-4.24"/><path d="M14.83 9.17l4.24-4.24"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
              <h3 class="weflair-why-us__title">AI-Powered Operations</h3>
              <p class="weflair-why-us__body">AI is integrated into every workflow from week one. Automations, enrichment, and reporting at a speed that manual teams cannot match &mdash; blended with senior operators making every strategic decision.</p>
            </div>
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <h3 class="weflair-why-us__title">Senior Operators Only</h3>
              <p class="weflair-why-us__body">Your account is led by a senior strategist as your dedicated point of contact. No account managers relaying messages. No juniors learning on your budget.</p>
            </div>
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </span>
              <h3 class="weflair-why-us__title">A Partner for the Long Run</h3>
              <p class="weflair-why-us__body">Our clients stay with us for years. Because we act like part of your in-house team, with clear structure and long-term focus.</p>
            </div>
            <div class="weflair-why-us__card">
              <span class="weflair-why-us__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
              <h3 class="weflair-why-us__title">Full Transparency</h3>
              <p class="weflair-why-us__body">Direct Slack access, written recaps after every call, and weekly reporting with full context. You see the work, decisions, and results in real time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
`;

// Insert after </section> of problems, before the handoff comment
const PROBLEMS_END = '</section>\n\n    <!-- ═══ WEFLAIR SYSTEM (TABBED INTERACTIVE SECTION) ═══ -->';
let idx = html.indexOf(PROBLEMS_END);
if (idx === -1) {
  // Try alternate spacing
  const problemsSection = html.indexOf('</section>', html.indexOf('id="problems"'));
  const handoffComment = html.indexOf('<!-- ═══ WEFLAIR SYSTEM', problemsSection);
  if (problemsSection !== -1 && handoffComment !== -1) {
    html = html.substring(0, problemsSection + '</section>'.length) + WHY_US_SECTION + '\n' + html.substring(handoffComment);
    console.log('Inserted #why-us section (alternate spacing)');
  }
} else {
  html = html.substring(0, idx + '</section>'.length) + WHY_US_SECTION + '\n\n    ' + html.substring(idx + '</section>'.length + 1);
  console.log('Inserted #why-us section');
}

// ═══════════════════════════════════════════════════════════════
// STEP 6: Rename #process → #flair-method
// ═══════════════════════════════════════════════════════════════
html = html.replace(
  'class="weflair-section weflair-process" id="process"',
  'class="weflair-section weflair-process" id="flair-method"'
);
html = html.replace(
  '<p class="eyebrow__p">The process</p>',
  '<p class="eyebrow__p">The FLAIR Method</p>'
);
html = html.replace(
  '<h2 class="h3">From first call to pipeline growth in 90 days.</h2>',
  '<h2 class="h3">The FLAIR Method &mdash; from first call to pipeline growth in 90 days.</h2>'
);
// Update theme-overrides CSS selectors
html = html.replace(/html\[data-theme="light"\] #process\b/g, 'html[data-theme="light"] #flair-method');
html = html.replace(/html\[data-theme="dark"\] #process\b/g, 'html[data-theme="dark"] #flair-method');
console.log('Renamed #process → #flair-method');

// ═══════════════════════════════════════════════════════════════
// STEP 7: Extract FLAIR Method section + its script to relocate
// ═══════════════════════════════════════════════════════════════
const flairStart = html.indexOf('<section class="weflair-section weflair-process" id="flair-method"');
if (flairStart !== -1) {
  const flairSectionEnd = html.indexOf('</section>', flairStart);
  // The script immediately follows
  const flairScriptStart = html.indexOf('<script>', flairSectionEnd);
  const flairScriptEnd = html.indexOf('</script>', flairScriptStart);
  const flairScriptContent = html.substring(flairScriptStart, flairScriptEnd + '</script>'.length);

  let flairBlock;
  if (flairScriptContent.includes('weflair-process__step')) {
    flairBlock = html.substring(flairStart, flairScriptEnd + '</script>'.length);
    html = html.substring(0, flairStart) + html.substring(flairScriptEnd + '</script>'.length);
  } else {
    flairBlock = html.substring(flairStart, flairSectionEnd + '</section>'.length);
    html = html.substring(0, flairStart) + html.substring(flairSectionEnd + '</section>'.length);
  }

  // Now we need to insert the FLAIR method block later.
  // We'll insert it after the credentials section (which we'll add after proof).
  // For now, store it and insert after adding the new sections.
  console.log('Extracted FLAIR Method block (' + flairBlock.length + ' chars)');

  // ═══════════════════════════════════════════════════════════════
  // STEP 8: Insert Sectors, Engagement Model, Credentials, FLAIR Method
  //         between #proof and hidden sections (before #testimonials or #resources-teaser)
  // ═══════════════════════════════════════════════════════════════

  // New sections HTML
  const SECTORS_SECTION = `
    <!-- ═══ SECTORS ═══ -->
    <section class="weflair-section weflair-sectors" id="sectors" data-sectors-section>
      <div class="container">
        <div class="weflair-sectors__layout">
          <div class="weflair-section__head">
            <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span><p class="eyebrow__p">Industries</p></div>
            <h2 class="h3">Our Industries of Expertise</h2>
          </div>
          <div class="weflair-sectors__tabs" role="tablist" aria-label="Sector tabs">
            <button type="button" class="weflair-sectors__tab is-active" data-sector-tab="0" aria-selected="true">
              <span class="weflair-sectors__tab-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
              <span>B2B SaaS</span>
            </button>
            <button type="button" class="weflair-sectors__tab" data-sector-tab="1" aria-selected="false">
              <span class="weflair-sectors__tab-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
              <span>B2B Services</span>
            </button>
            <button type="button" class="weflair-sectors__tab" data-sector-tab="2" aria-selected="false">
              <span class="weflair-sectors__tab-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>
              <span>Fintech</span>
            </button>
            <button type="button" class="weflair-sectors__tab" data-sector-tab="3" aria-selected="false">
              <span class="weflair-sectors__tab-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></span>
              <span>E-commerce</span>
            </button>
          </div>
          <div class="weflair-sectors__panels">
            <div class="weflair-sectors__panel is-active" data-sector-panel="0">
              <div class="weflair-sectors__panel-content">
                <h3 class="weflair-sectors__stat">50+ projects in B2B SaaS</h3>
                <p class="weflair-sectors__desc">We help SaaS companies build predictable growth engines &mdash; from demo pipeline to expansion revenue. Paid, outbound, content, and RevOps working as one system.</p>
                <p class="weflair-sectors__desc">As your long-term marketing partner, we ensure your B2B SaaS marketing is efficient, transparent, and tied to pipeline.</p>
                <a href="/expertise/b2b-saas.html" class="weflair-sectors__cta">Learn more</a>
              </div>
              <div class="weflair-sectors__panel-side">
                <div class="weflair-sectors__optimize">
                  <strong>We help you optimize:</strong>
                  <ul>
                    <li>MQL to SQL conversion</li>
                    <li>Customer acquisition cost</li>
                    <li>Pipeline velocity</li>
                    <li>Trial-to-paid conversion</li>
                    <li>Annual contract value</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="weflair-sectors__panel" data-sector-panel="1">
              <div class="weflair-sectors__panel-content">
                <h3 class="weflair-sectors__stat">40+ projects in B2B Services</h3>
                <p class="weflair-sectors__desc">Consulting firms, agencies, and professional services that need qualified meetings, not just traffic. We build lead engines that talk to decision-makers.</p>
                <p class="weflair-sectors__desc">As your long-term partner, we ensure your B2B services marketing is cost-efficient and predictable.</p>
                <a href="/expertise/b2b-services.html" class="weflair-sectors__cta">Learn more</a>
              </div>
              <div class="weflair-sectors__panel-side">
                <div class="weflair-sectors__optimize">
                  <strong>We help you optimize:</strong>
                  <ul>
                    <li>Qualified meeting volume</li>
                    <li>Cost per qualified lead</li>
                    <li>Sales cycle length</li>
                    <li>Proposal-to-close rate</li>
                    <li>Client lifetime value</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="weflair-sectors__panel" data-sector-panel="2">
              <div class="weflair-sectors__panel-content">
                <h3 class="weflair-sectors__stat">30+ projects in Fintech</h3>
                <p class="weflair-sectors__desc">Regulated, complex, and competitive &mdash; fintech growth needs precision. We build compliant acquisition systems that scale trust alongside revenue.</p>
                <p class="weflair-sectors__desc">As your long-term marketing partner, we ensure your fintech marketing is compliant, transparent, and tied to commercial outcomes.</p>
                <a href="/expertise/fintech.html" class="weflair-sectors__cta">Learn more</a>
              </div>
              <div class="weflair-sectors__panel-side">
                <div class="weflair-sectors__optimize">
                  <strong>We help you optimize:</strong>
                  <ul>
                    <li>Customer acquisition cost</li>
                    <li>Application completion rate</li>
                    <li>Compliance-safe ad spend</li>
                    <li>User activation rate</li>
                    <li>Revenue per user</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="weflair-sectors__panel" data-sector-panel="3">
              <div class="weflair-sectors__panel-content">
                <h3 class="weflair-sectors__stat">60+ projects in E-commerce</h3>
                <p class="weflair-sectors__desc">We implement multichannel strategies that directly impact your revenue, scale our involvement up and down to meet seasonal peaks, and cover everything from product visuals&rsquo; SEO and dynamic pricing adjustment to retention and beyond.</p>
                <p class="weflair-sectors__desc">As your long-term marketing partner, we ensure your e-commerce digital marketing is cost-efficient, transparent and predictable.</p>
                <a href="/expertise/ecommerce.html" class="weflair-sectors__cta">Learn more</a>
              </div>
              <div class="weflair-sectors__panel-side">
                <div class="weflair-sectors__optimize">
                  <strong>We help you optimize:</strong>
                  <ul>
                    <li>Average order value</li>
                    <li>Customer lifetime value</li>
                    <li>Product return rates</li>
                    <li>Customer conversion rates</li>
                    <li>Cart abandonment rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script>
    (function(){
      var section=document.querySelector('[data-sectors-section]');
      if(!section)return;
      var tabs=[].slice.call(section.querySelectorAll('[data-sector-tab]'));
      var panels=[].slice.call(section.querySelectorAll('[data-sector-panel]'));
      function activate(i){
        tabs.forEach(function(t,idx){
          t.classList.toggle('is-active',idx===i);
          t.setAttribute('aria-selected',idx===i?'true':'false');
        });
        panels.forEach(function(p,idx){
          p.classList.toggle('is-active',idx===i);
        });
      }
      tabs.forEach(function(t,i){
        t.addEventListener('click',function(){activate(i);});
      });
    })();
    </script>`;

  const ENGAGEMENT_SECTION = `
    <!-- ═══ ENGAGEMENT MODEL ═══ -->
    <section class="weflair-section weflair-engagement" id="engagement-model">
      <div class="container">
        <div class="weflair-engagement__layout">
          <div class="weflair-section__head">
            <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span><p class="eyebrow__p">Engagement models</p></div>
            <h2 class="h3">Flexible Engagement Models</h2>
            <p class="weflair-section__body">As your business grows, we grow with you. We adapt and introduce individual plans to meet your changing business requirements.</p>
          </div>
          <div class="weflair-engagement__grid">
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Monthly Retainer</h3>
              <ul class="weflair-engagement__bullets">
                <li>Ongoing access to diverse expertise</li>
                <li>Flexible service set composition</li>
                <li>Adaptability to changing requirements</li>
                <li>Cost-effective long-term partnership</li>
              </ul>
            </div>
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Hour-based Engagement</h3>
              <ul class="weflair-engagement__bullets">
                <li>Adaptability to changing requirements</li>
                <li>Easy to scale</li>
                <li>Precise financial planning</li>
                <li>No long-term commitment</li>
              </ul>
            </div>
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Project-based Pricing</h3>
              <ul class="weflair-engagement__bullets">
                <li>Transparent project scope and deliverables</li>
                <li>Predictable project budget</li>
                <li>Seamless performance evaluation</li>
                <li>No long-term commitment</li>
              </ul>
            </div>
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Performance-based Pricing</h3>
              <ul class="weflair-engagement__bullets">
                <li>Agency compensation is tied to performance</li>
                <li>Growth-driven cooperation</li>
                <li>Seamless performance evaluation</li>
                <li>Seamless accountability</li>
              </ul>
            </div>
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Percentage or Ad Spent</h3>
              <ul class="weflair-engagement__bullets">
                <li>Growth-oriented pricing structure</li>
                <li>Clear expectations and budgeting</li>
                <li>Seamless ROI measurement</li>
                <li>Easy engagement scalability</li>
              </ul>
            </div>
            <div class="weflair-engagement__card">
              <span class="weflair-engagement__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <h3 class="weflair-engagement__title">Custom Pricing Model</h3>
              <ul class="weflair-engagement__bullets">
                <li>Tailored service sets</li>
                <li>Maximized cost-efficiency</li>
                <li>Smooth engagement scaling up and down</li>
                <li>Seamless integration with your team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  const CREDENTIALS_SECTION = `
    <!-- ═══ CREDENTIALS ═══ -->
    <section class="weflair-section weflair-credentials" id="credentials">
      <div class="container">
        <div class="weflair-credentials__layout">
          <div class="weflair-section__head">
            <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span><p class="eyebrow__p">Credentials</p></div>
            <h2 class="h3">Achieve Your Goals with the Expertise of an Award-Winning SaaS Marketing Partner</h2>
          </div>
          <div class="weflair-credentials__stats">
            <div class="weflair-credentials__stat-card">
              <strong class="weflair-credentials__stat-number">$30M+</strong>
              <span class="weflair-credentials__stat-label">In managed Ad Spend</span>
            </div>
            <div class="weflair-credentials__stat-card">
              <strong class="weflair-credentials__stat-number">10+</strong>
              <span class="weflair-credentials__stat-label">Years of experience</span>
            </div>
            <div class="weflair-credentials__stat-card">
              <strong class="weflair-credentials__stat-number">100+</strong>
              <span class="weflair-credentials__stat-label">Success stories</span>
            </div>
            <div class="weflair-credentials__stat-card">
              <strong class="weflair-credentials__stat-number">4.93/5</strong>
              <span class="weflair-credentials__stat-label">Client satisfaction rate</span>
            </div>
          </div>
          <div class="weflair-credentials__badges">
            <div class="weflair-credentials__badge">
              <span class="weflair-credentials__badge-name">Google Partner</span>
              <span class="weflair-credentials__badge-detail">PREMIER 2026</span>
            </div>
            <div class="weflair-credentials__badge">
              <span class="weflair-credentials__badge-name">Meta</span>
              <span class="weflair-credentials__badge-detail">Business Partners Member</span>
            </div>
            <div class="weflair-credentials__badge">
              <span class="weflair-credentials__badge-name">LinkedIn</span>
              <span class="weflair-credentials__badge-detail">Certified Marketing Insider</span>
            </div>
            <div class="weflair-credentials__badge">
              <span class="weflair-credentials__badge-name">Clutch</span>
              <span class="weflair-credentials__badge-detail">Top PPC Company 2026</span>
            </div>
            <div class="weflair-credentials__badge">
              <span class="weflair-credentials__badge-name">G2</span>
              <span class="weflair-credentials__badge-detail">High Performer Winter 2026</span>
            </div>
            <div class="weflair-credentials__badge">
              <span class="weflair-credentials__badge-name">Microsoft Advertising</span>
              <span class="weflair-credentials__badge-detail">Certified Expert</span>
            </div>
            <div class="weflair-credentials__badge">
              <span class="weflair-credentials__badge-name">HubSpot</span>
              <span class="weflair-credentials__badge-detail">Solutions Partner Provider</span>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  // Insert Sectors, Engagement Model, Credentials, then FLAIR Method
  // Insert point: after the proof section ends, before the hidden testimonials section
  const proofEnd = html.indexOf('</section>', html.indexOf('id="proof"'));
  if (proofEnd !== -1) {
    const insertPoint = proofEnd + '</section>'.length;
    const insertContent = SECTORS_SECTION + '\n' + ENGAGEMENT_SECTION + '\n' + CREDENTIALS_SECTION + '\n    ' + flairBlock + '\n';
    html = html.substring(0, insertPoint) + insertContent + html.substring(insertPoint);
    console.log('Inserted Sectors, Engagement Model, Credentials, and FLAIR Method after #proof');
  }
} else {
  console.error('ERROR: Could not find FLAIR Method section to relocate');
}

// ═══════════════════════════════════════════════════════════════
// STEP 9: Insert FAQ section before Footer
// ═══════════════════════════════════════════════════════════════
const FAQ_SECTION = `
    <!-- ═══ FAQ ═══ -->
    <section class="weflair-section weflair-faq" id="faq">
      <div class="container">
        <div class="weflair-faq__layout">
          <div class="weflair-section__head">
            <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span><p class="eyebrow__p">FAQ</p></div>
            <h2 class="h3">Frequently Asked Questions</h2>
          </div>
          <div class="weflair-faq__list">
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">What kind of companies does WeFlair work with?</summary>
              <div class="weflair-faq__answer"><p>We work with B2B SaaS, B2B services, fintech, and e-commerce companies that are past the early startup stage and ready to build scalable growth systems. Most of our clients have existing revenue and want to turn marketing into a predictable pipeline engine.</p></div>
            </details>
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">How is WeFlair different from a traditional marketing agency?</summary>
              <div class="weflair-faq__answer"><p>Traditional agencies manage channels. We build growth systems. That means strategy, execution, creative, CRO, and operations are unified under one team &mdash; not siloed across departments. Your senior strategist is in your Slack, in your ad accounts, and on your weekly calls.</p></div>
            </details>
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">What does onboarding look like?</summary>
              <div class="weflair-faq__answer"><p>We start with a discovery and audit phase: kickoff call, account access, audit deck. Within the first two weeks you get a full diagnostic and a 30-90 day rollout plan. By week three, campaigns are live and we are optimizing.</p></div>
            </details>
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">Do you require long-term contracts?</summary>
              <div class="weflair-faq__answer"><p>No. We offer multiple engagement models &mdash; monthly retainer, project-based, hourly, and performance-based. Most clients choose a retainer because results compound over time, but there is no mandatory lock-in period.</p></div>
            </details>
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">How do you measure success?</summary>
              <div class="weflair-faq__answer"><p>We measure what moves the business: revenue, CAC, pipeline velocity, conversion rates, and ROAS. Not vanity metrics. Every report ties spend to commercial outcomes so you always know what is working and what we are doing about what is not.</p></div>
            </details>
            <details class="weflair-faq__item">
              <summary class="weflair-faq__question">Can WeFlair work alongside our in-house team?</summary>
              <div class="weflair-faq__answer"><p>Absolutely. Most of our clients have internal marketers. WeFlair plugs in as the growth operations layer &mdash; strategy, paid, outbound, creative, and reporting &mdash; so your team can focus on product marketing, brand, and internal priorities without building the entire engine from scratch.</p></div>
            </details>
          </div>
        </div>
      </div>
    </section>`;

const footerSectionStart = html.indexOf('<section class="footer weflair-footer">');
if (footerSectionStart !== -1) {
  html = html.substring(0, footerSectionStart) + FAQ_SECTION + '\n    ' + html.substring(footerSectionStart);
  console.log('Inserted FAQ section before footer');
}

// ═══════════════════════════════════════════════════════════════
// STEP 10: Update JS - services CTA override → questionnaire hook content
// ═══════════════════════════════════════════════════════════════
const oldJsOverride = `const servicesCta = document.querySelector(".weflair-services-cta");
        if (servicesCta) {
          servicesCta.innerHTML = '<div class="weflair-services-cta-text"><h3 class="h5">Not sure which service you need?</h3><p>Book a call and we&rsquo;ll figure out the best approach.</p></div><div class="weflair-services-cta-actions">' + calButtonHtml("Book a free growth audit", "services-cta") + '<p class="weflair-services-cta-note">Free audit included &bull; No commitment required</p></div>';
        }`;

const newJsOverride = `// Questionnaire hook is now static HTML - no JS override needed`;

if (html.includes(oldJsOverride)) {
  html = html.replace(oldJsOverride, newJsOverride);
  console.log('Updated services CTA JS override');
} else {
  console.warn('WARN: Could not find exact JS override to replace - searching for partial match');
  const partial = 'servicesCta.innerHTML';
  if (html.includes(partial)) {
    // Find the block
    const sIdx = html.indexOf('const servicesCta = document.querySelector(".weflair-services-cta")');
    if (sIdx !== -1) {
      const blockEnd = html.indexOf('}', html.indexOf(';', html.indexOf('innerHTML', sIdx)));
      if (blockEnd !== -1) {
        // Find the full if block end
        const ifEnd = html.indexOf('\n', blockEnd);
        html = html.substring(0, sIdx) + newJsOverride + html.substring(ifEnd);
        console.log('Updated services CTA JS override (partial match)');
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// STEP 11: Add CSS for all new sections
// ═══════════════════════════════════════════════════════════════
const NEW_SECTIONS_CSS = `
    <style id="weflair-new-sections-css">
      /* ── Questionnaire Hook ── */
      .weflair-questionnaire-hook {
        display: grid;
        gap: 1.25rem;
        padding: clamp(1.5rem, 3vw, 2.5rem);
        text-align: left;
      }
      .weflair-questionnaire-hook__icon {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .65rem;
        background: rgba(62, 255, 104, .08);
        border: 1px solid rgba(62, 255, 104, .18);
        color: #3eff68;
      }
      .weflair-questionnaire-hook__icon svg {
        width: 1.25rem;
        height: 1.25rem;
      }
      .weflair-questionnaire-hook__content h3 {
        font-size: clamp(1.15rem, 1.5vw, 1.35rem);
        font-weight: 700;
        margin-bottom: .35rem;
      }
      .weflair-questionnaire-hook__content p {
        font-size: .95rem;
        opacity: .72;
      }
      .weflair-questionnaire-hook__questions {
        display: grid;
        gap: .65rem;
      }
      .weflair-questionnaire-hook__q {
        display: flex;
        align-items: center;
        gap: .85rem;
        padding: .85rem 1rem;
        border-radius: .65rem;
        background: rgba(255, 255, 255, .04);
        border: 1px solid rgba(255, 255, 255, .08);
        cursor: default;
        transition: border-color .2s;
      }
      .weflair-questionnaire-hook__q:hover {
        border-color: rgba(62, 255, 104, .22);
      }
      .weflair-questionnaire-hook__q-num {
        width: 1.6rem;
        height: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(62, 255, 104, .1);
        color: #3eff68;
        font-size: .75rem;
        font-weight: 700;
        flex-shrink: 0;
      }
      .weflair-questionnaire-hook__q-text {
        font-size: .88rem;
        opacity: .82;
      }
      .weflair-questionnaire-hook__note {
        font-size: .78rem;
        opacity: .45;
        text-align: center;
      }

      /* ── Why Us Grid ── */
      .weflair-why-us {
        padding: clamp(5rem, 8vw, 7rem) 0;
      }
      .weflair-why-us__layout {
        display: grid;
        gap: clamp(2rem, 3.5vw, 3rem);
      }
      .weflair-why-us .weflair-section__head {
        text-align: left;
        justify-items: start;
      }
      .weflair-why-us__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: clamp(1rem, 2vw, 1.5rem);
      }
      .weflair-why-us__card {
        padding: clamp(1.5rem, 2.5vw, 2rem);
        border-radius: clamp(.75rem, 1vw, 1rem);
        border: 1px solid rgba(255, 255, 255, .08);
        background: rgba(255, 255, 255, .03);
        display: grid;
        gap: .85rem;
        align-content: start;
        transition: border-color .2s, box-shadow .2s;
      }
      .weflair-why-us__card:hover {
        border-color: rgba(62, 255, 104, .16);
        box-shadow: 0 16px 32px rgba(0, 0, 0, .12);
      }
      .weflair-why-us__icon {
        width: 2.75rem;
        height: 2.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .6rem;
        background: rgba(130, 110, 255, .1);
        color: #9d7dff;
      }
      .weflair-why-us__icon svg {
        width: 1.35rem;
        height: 1.35rem;
      }
      .weflair-why-us__title {
        font-size: clamp(1.05rem, 1.3vw, 1.2rem);
        font-weight: 700;
        line-height: 1.3;
      }
      .weflair-why-us__body {
        font-size: .88rem;
        line-height: 1.6;
        opacity: .68;
      }
      @media (max-width: 768px) {
        .weflair-why-us__grid {
          grid-template-columns: 1fr;
        }
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        .weflair-why-us__grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      /* ── Sectors ── */
      .weflair-sectors {
        padding: clamp(5rem, 8vw, 7rem) 0;
      }
      .weflair-sectors__layout {
        display: grid;
        gap: clamp(2rem, 3.5vw, 3rem);
      }
      .weflair-sectors .weflair-section__head {
        text-align: left;
        justify-items: start;
      }
      .weflair-sectors__tabs {
        display: flex;
        gap: 0;
        border-bottom: 2px solid rgba(255, 255, 255, .06);
        overflow-x: auto;
        scrollbar-width: none;
      }
      .weflair-sectors__tabs::-webkit-scrollbar { display: none; }
      .weflair-sectors__tab {
        display: flex;
        align-items: center;
        gap: .55rem;
        padding: .85rem 1.25rem;
        font-size: .92rem;
        font-weight: 600;
        color: inherit;
        opacity: .55;
        border: none;
        background: none;
        cursor: pointer;
        white-space: nowrap;
        border-bottom: 2px solid transparent;
        margin-bottom: -2px;
        transition: opacity .2s, border-color .2s, color .2s;
        font-family: inherit;
      }
      .weflair-sectors__tab.is-active {
        opacity: 1;
        color: #f29c52;
        border-bottom-color: #f29c52;
      }
      .weflair-sectors__tab:hover { opacity: .85; }
      .weflair-sectors__tab-icon {
        width: 1.35rem;
        height: 1.35rem;
        display: flex;
        align-items: center;
      }
      .weflair-sectors__tab-icon svg {
        width: 100%;
        height: 100%;
      }
      .weflair-sectors__panels {
        min-height: 16rem;
      }
      .weflair-sectors__panel {
        display: none;
        gap: clamp(1.5rem, 3vw, 2.5rem);
        padding-top: clamp(1.5rem, 3vw, 2rem);
      }
      .weflair-sectors__panel.is-active {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
      }
      .weflair-sectors__stat {
        font-size: clamp(1.15rem, 1.5vw, 1.35rem);
        font-weight: 700;
        margin-bottom: .65rem;
      }
      .weflair-sectors__desc {
        font-size: .92rem;
        line-height: 1.65;
        opacity: .72;
        margin-bottom: .75rem;
      }
      .weflair-sectors__cta {
        display: inline-block;
        margin-top: .5rem;
        padding: .65rem 1.5rem;
        border-radius: .5rem;
        background: #f29c52;
        color: #fff;
        font-weight: 600;
        font-size: .88rem;
        text-decoration: none;
        transition: background .2s;
      }
      .weflair-sectors__cta:hover { background: #e08a3e; }
      .weflair-sectors__optimize {
        padding: clamp(1.25rem, 2vw, 1.75rem);
        border-radius: .85rem;
        background: rgba(242, 156, 82, .08);
        border: 1px solid rgba(242, 156, 82, .14);
      }
      .weflair-sectors__optimize strong {
        display: block;
        font-size: .95rem;
        margin-bottom: .85rem;
      }
      .weflair-sectors__optimize ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: .55rem;
      }
      .weflair-sectors__optimize li {
        position: relative;
        padding-left: 1.4rem;
        font-size: .88rem;
        opacity: .82;
      }
      .weflair-sectors__optimize li::before {
        content: '';
        position: absolute;
        left: 0;
        top: .45rem;
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        background: #f29c52;
      }
      @media (max-width: 768px) {
        .weflair-sectors__panel.is-active {
          grid-template-columns: 1fr;
        }
      }

      /* ── Engagement Model ── */
      .weflair-engagement {
        padding: clamp(5rem, 8vw, 7rem) 0;
      }
      .weflair-engagement__layout {
        display: grid;
        gap: clamp(2rem, 3.5vw, 3rem);
      }
      .weflair-engagement .weflair-section__head {
        text-align: left;
        justify-items: start;
      }
      .weflair-engagement__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: clamp(1rem, 1.5vw, 1.25rem);
      }
      .weflair-engagement__card {
        padding: clamp(1.25rem, 2vw, 1.75rem);
        border-radius: clamp(.75rem, 1vw, 1rem);
        border: 1px solid rgba(255, 255, 255, .08);
        background: rgba(255, 255, 255, .03);
        display: grid;
        gap: .85rem;
        align-content: start;
        transition: border-color .2s;
      }
      .weflair-engagement__card:hover {
        border-color: rgba(62, 255, 104, .16);
      }
      .weflair-engagement__icon {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .55rem;
        background: rgba(62, 255, 104, .06);
        border: 1px solid rgba(62, 255, 104, .14);
        color: #3eff68;
      }
      .weflair-engagement__icon svg {
        width: 1.2rem;
        height: 1.2rem;
      }
      .weflair-engagement__title {
        font-size: clamp(1rem, 1.15vw, 1.1rem);
        font-weight: 700;
      }
      .weflair-engagement__bullets {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: .4rem;
      }
      .weflair-engagement__bullets li {
        position: relative;
        padding-left: 1.35rem;
        font-size: .84rem;
        opacity: .7;
        line-height: 1.55;
      }
      .weflair-engagement__bullets li::before {
        content: '\\2713';
        position: absolute;
        left: 0;
        color: #3eff68;
        font-size: .72rem;
        font-weight: 700;
      }
      @media (max-width: 768px) {
        .weflair-engagement__grid {
          grid-template-columns: 1fr;
        }
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        .weflair-engagement__grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      /* ── Credentials ── */
      .weflair-credentials {
        padding: clamp(5rem, 8vw, 7rem) 0;
      }
      .weflair-credentials__layout {
        display: grid;
        gap: clamp(2rem, 3.5vw, 3rem);
      }
      .weflair-credentials .weflair-section__head {
        text-align: center;
        justify-items: center;
      }
      .weflair-credentials .weflair-section__head .h3 {
        max-width: 28ch;
      }
      .weflair-credentials__stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: clamp(.75rem, 1.25vw, 1rem);
      }
      .weflair-credentials__stat-card {
        text-align: center;
        padding: clamp(1.25rem, 2vw, 1.75rem);
        border-radius: clamp(.65rem, 1vw, .85rem);
        border: 1px solid rgba(255, 255, 255, .08);
        background: rgba(255, 255, 255, .03);
      }
      .weflair-credentials__stat-number {
        display: block;
        font-size: clamp(1.75rem, 3vw, 2.5rem);
        font-weight: 800;
        letter-spacing: -.02em;
        line-height: 1.15;
        margin-bottom: .35rem;
      }
      .weflair-credentials__stat-label {
        display: block;
        font-size: .82rem;
        opacity: .55;
      }
      .weflair-credentials__badges {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: clamp(.75rem, 1.25vw, 1rem);
      }
      .weflair-credentials__badge {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .35rem;
        padding: clamp(1rem, 1.5vw, 1.35rem) clamp(1.25rem, 2vw, 1.75rem);
        border-radius: .75rem;
        border: 1px solid rgba(255, 255, 255, .08);
        background: rgba(255, 255, 255, .03);
        text-align: center;
        min-width: 9rem;
        transition: border-color .2s;
      }
      .weflair-credentials__badge:hover {
        border-color: rgba(62, 255, 104, .16);
      }
      .weflair-credentials__badge-name {
        font-size: .88rem;
        font-weight: 700;
      }
      .weflair-credentials__badge-detail {
        font-size: .72rem;
        opacity: .55;
        text-transform: uppercase;
        letter-spacing: .04em;
        font-weight: 600;
      }
      @media (max-width: 768px) {
        .weflair-credentials__stats {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      /* ── FAQ ── */
      .weflair-faq {
        padding: clamp(5rem, 8vw, 7rem) 0;
      }
      .weflair-faq__layout {
        display: grid;
        gap: clamp(2rem, 3.5vw, 3rem);
        max-width: 48rem;
        margin: 0 auto;
      }
      .weflair-faq .weflair-section__head {
        text-align: center;
        justify-items: center;
      }
      .weflair-faq__list {
        display: grid;
        gap: 0;
      }
      .weflair-faq__item {
        border-bottom: 1px solid rgba(255, 255, 255, .08);
      }
      .weflair-faq__item:first-child {
        border-top: 1px solid rgba(255, 255, 255, .08);
      }
      .weflair-faq__question {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1.25rem 0;
        font-size: clamp(.92rem, 1.05vw, 1rem);
        font-weight: 600;
        cursor: pointer;
        list-style: none;
      }
      .weflair-faq__question::-webkit-details-marker { display: none; }
      .weflair-faq__question::after {
        content: '+';
        font-size: 1.25rem;
        font-weight: 300;
        opacity: .45;
        flex-shrink: 0;
        transition: transform .2s;
      }
      .weflair-faq__item[open] .weflair-faq__question::after {
        content: '\\2212';
        transform: rotate(180deg);
      }
      .weflair-faq__answer {
        padding-bottom: 1.25rem;
      }
      .weflair-faq__answer p {
        font-size: .88rem;
        line-height: 1.7;
        opacity: .68;
      }

      /* ── Light theme overrides for new sections ── */
      html[data-theme="light"] #why-us,
      html[data-theme="light"] #sectors,
      html[data-theme="light"] #engagement-model,
      html[data-theme="light"] #credentials,
      html[data-theme="light"] #faq {
        background:
          radial-gradient(circle at 12% 18%, rgba(62, 255, 104, .05), transparent 24%),
          radial-gradient(circle at 88% 14%, rgba(111, 136, 255, .08), transparent 26%),
          linear-gradient(180deg, #f4f1ea 0%, #ece7dd 100%);
        color: var(--wf-theme-text, #171511);
      }
      html[data-theme="light"] .weflair-why-us__card,
      html[data-theme="light"] .weflair-engagement__card,
      html[data-theme="light"] .weflair-credentials__stat-card,
      html[data-theme="light"] .weflair-credentials__badge {
        background: rgba(255, 255, 255, .84);
        border-color: rgba(23, 21, 17, .08);
        box-shadow: 0 8px 24px rgba(88, 72, 50, .06);
        color: var(--wf-theme-text, #171511);
      }
      html[data-theme="light"] .weflair-why-us__card:hover,
      html[data-theme="light"] .weflair-engagement__card:hover,
      html[data-theme="light"] .weflair-credentials__badge:hover {
        border-color: rgba(34, 197, 94, .16);
        box-shadow: 0 16px 32px rgba(88, 72, 50, .12);
      }
      html[data-theme="light"] .weflair-why-us__title,
      html[data-theme="light"] .weflair-engagement__title,
      html[data-theme="light"] .weflair-credentials__stat-number,
      html[data-theme="light"] .weflair-credentials__badge-name,
      html[data-theme="light"] .weflair-sectors__stat,
      html[data-theme="light"] .weflair-faq__question {
        color: var(--wf-theme-text, #171511);
      }
      html[data-theme="light"] .weflair-why-us__body,
      html[data-theme="light"] .weflair-engagement__bullets li,
      html[data-theme="light"] .weflair-sectors__desc,
      html[data-theme="light"] .weflair-faq__answer p {
        color: var(--wf-theme-text-soft, rgba(23, 21, 17, .72));
      }
      html[data-theme="light"] .weflair-why-us__icon {
        background: rgba(130, 110, 255, .08);
        color: #7c5cff;
      }
      html[data-theme="light"] .weflair-questionnaire-hook__q {
        background: rgba(255, 255, 255, .72);
        border-color: rgba(23, 21, 17, .08);
      }
      html[data-theme="light"] .weflair-questionnaire-hook__q:hover {
        border-color: rgba(34, 197, 94, .2);
      }
      html[data-theme="light"] .weflair-questionnaire-hook__icon {
        background: rgba(34, 197, 94, .08);
        border-color: rgba(34, 197, 94, .16);
        color: #167a36;
      }
      html[data-theme="light"] .weflair-questionnaire-hook__q-num {
        background: rgba(34, 197, 94, .08);
        color: #167a36;
      }
      html[data-theme="light"] .weflair-engagement__icon {
        background: rgba(34, 197, 94, .06);
        border-color: rgba(34, 197, 94, .12);
        color: #167a36;
      }
      html[data-theme="light"] .weflair-engagement__bullets li::before {
        color: #167a36;
      }
      html[data-theme="light"] .weflair-sectors__tab.is-active {
        color: #d07830;
        border-bottom-color: #d07830;
      }
      html[data-theme="light"] .weflair-sectors__tabs {
        border-bottom-color: rgba(23, 21, 17, .08);
      }
      html[data-theme="light"] .weflair-sectors__optimize {
        background: rgba(242, 156, 82, .08);
        border-color: rgba(242, 156, 82, .16);
      }
      html[data-theme="light"] .weflair-sectors__optimize li::before {
        background: #d07830;
      }
      html[data-theme="light"] .weflair-faq__item {
        border-color: rgba(23, 21, 17, .08);
      }
      html[data-theme="light"] .weflair-services-cta {
        background: linear-gradient(135deg, rgba(255, 255, 255, .9) 0%, rgba(239, 235, 226, .88) 100%);
        border-color: rgba(34, 197, 94, .16);
        box-shadow: 0 22px 40px rgba(88, 72, 50, .12);
      }
    </style>`;

// Insert the CSS before the closing of the <head> or near the new sections
// Best spot: right before the first new section, or after the weflair-proof-final-pass style
const proofFinalPass = findStyleBlock(html, 'weflair-proof-final-pass');
if (proofFinalPass) {
  html = html.substring(0, proofFinalPass.end) + '\n' + NEW_SECTIONS_CSS + html.substring(proofFinalPass.end);
  console.log('Inserted new sections CSS');
} else {
  // Fallback: insert before the #proof section
  const proofSection = html.indexOf('<section class="weflair-section weflair-proof" id="proof">');
  if (proofSection !== -1) {
    html = html.substring(0, proofSection) + NEW_SECTIONS_CSS + '\n    ' + html.substring(proofSection);
    console.log('Inserted new sections CSS (fallback position)');
  }
}

// ═══════════════════════════════════════════════════════════════
// STEP 12: Write output
// ═══════════════════════════════════════════════════════════════
fs.writeFileSync(SRC, html);
console.log('\nDone! Written', html.length, 'chars to index.html');
console.log('Backup at: index-pre-rebuild.html');
console.log('Archive at: ops/backups/why-weflair-sticky-archive.html');
