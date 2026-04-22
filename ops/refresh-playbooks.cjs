const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const playbooksPath = path.join(root, 'resources', 'playbooks.html');
const detailPath = path.join(root, 'resources', 'playbook.html');
const footerPartialPath = path.join(root, 'src', 'partials', 'footer.html');

const original = fs.readFileSync(playbooksPath, 'utf8');
const footerPartial = fs
  .readFileSync(footerPartialPath, 'utf8')
  .replace(/Â©/g, '&copy;')
  .replace(/GTM\\s*&amp;\\s*Outbound Systems/g, 'GTM &amp; Outbound Systems')
  .replace(/href=\"\/resources\/checklists\.html\"/g, 'href=\"/tools.html?topic=checklists\"');

const mainIndex = original.indexOf('<main class="main">');
if (mainIndex === -1) {
  throw new Error('Could not find <main class="main"> in playbooks.html');
}

const prefix = original
  .slice(0, mainIndex)
  .replace(/<style id="playbooks-page-refresh">[\s\S]*?<\/style>/, '')
  .replace('href="/resources/checklists.html"', 'href="/tools.html?topic=checklists"');

const pageCss = `
  <style id="playbooks-page-refresh">
    .plb-shell {
      width: min(100%, 80rem);
      margin: 0 auto;
      padding: 0 2rem 6rem;
    }

    .plb-hero {
      position: relative;
      padding: clamp(3rem, 5vw, 4.5rem) 0 clamp(4rem, 6vw, 5.5rem);
    }

    .plb-hero::before,
    .plb-hero::after {
      content: "";
      position: absolute;
      inset: auto;
      border-radius: 999px;
      filter: blur(80px);
      opacity: 0.18;
      pointer-events: none;
    }

    .plb-hero::before {
      width: 16rem;
      height: 16rem;
      top: 6rem;
      left: -2rem;
      background: #60a5fa;
    }

    .plb-hero::after {
      width: 14rem;
      height: 14rem;
      right: 2rem;
      bottom: 1rem;
      background: #f59e0b;
    }

    .plb-hero__layout {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
      gap: 1.4rem;
      align-items: stretch;
    }

    .plb-hero__copy,
    .plb-preview {
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(246,243,238,0.08);
      border-radius: 1.6rem;
      background: linear-gradient(180deg, rgba(24,24,24,0.96) 0%, rgba(16,16,16,0.92) 100%);
      box-shadow: 0 24px 80px rgba(0,0,0,0.34);
    }

    .plb-hero__copy {
      padding: clamp(2rem, 3vw, 3rem);
    }

    .plb-hero__copy::before,
    .plb-preview::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top left, rgba(96,165,250,0.16), transparent 42%), radial-gradient(circle at bottom right, rgba(62,255,104,0.12), transparent 38%);
      pointer-events: none;
    }

    .plb-hero__eyebrow {
      margin-bottom: 1.2rem;
    }

    .plb-hero__title {
      margin: 0 0 1rem;
      max-width: 11ch;
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(3rem, 6vw, 5.2rem);
      line-height: 0.94;
      letter-spacing: -0.08em;
      text-wrap: balance;
    }

    .plb-hero__sub {
      margin: 0;
      max-width: 39rem;
      font-size: clamp(1rem, 1.35vw, 1.16rem);
      line-height: 1.7;
      color: rgba(246,243,238,0.7);
    }

    .plb-hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.85rem;
      margin-top: 2rem;
    }

    .plb-hero__stats {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.9rem;
      margin-top: 2rem;
    }

    .plb-stat {
      padding: 1rem 1rem 1.05rem;
      border-radius: 1.1rem;
      border: 1px solid rgba(246,243,238,0.08);
      background: rgba(255,255,255,0.025);
      backdrop-filter: blur(12px);
    }

    .plb-stat strong {
      display: block;
      margin-bottom: 0.35rem;
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(1.45rem, 2vw, 1.95rem);
      letter-spacing: -0.05em;
      color: #f6f3ee;
    }

    .plb-stat span {
      display: block;
      font-size: 0.88rem;
      line-height: 1.55;
      color: rgba(246,243,238,0.62);
    }

    .plb-preview {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.7rem;
      min-height: 100%;
    }

    .plb-preview__top {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
      margin-bottom: 2.5rem;
    }

    .plb-preview__label {
      margin: 0;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(246,243,238,0.42);
      font-weight: 700;
    }

    .plb-preview__pill {
      display: inline-flex;
      padding: 0.35rem 0.7rem;
      border-radius: 999px;
      border: 1px solid rgba(62,255,104,0.18);
      background: rgba(62,255,104,0.08);
      color: #3eff68;
      font-size: 0.72rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .plb-preview__title {
      margin: 0 0 1.2rem;
      max-width: 16ch;
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(1.9rem, 3vw, 2.7rem);
      line-height: 0.97;
      letter-spacing: -0.06em;
    }

    .plb-preview__list {
      display: grid;
      gap: 0.85rem;
    }

    .plb-preview__item {
      padding: 1rem 1rem 1.05rem;
      border-radius: 1rem;
      border: 1px solid rgba(246,243,238,0.08);
      background: rgba(255,255,255,0.03);
    }

    .plb-preview__item strong {
      display: block;
      margin-bottom: 0.35rem;
      color: #f6f3ee;
      font-size: 0.95rem;
      letter-spacing: -0.02em;
    }

    .plb-preview__item span {
      display: block;
      color: rgba(246,243,238,0.62);
      font-size: 0.88rem;
      line-height: 1.55;
    }

    .plb-section {
      padding-bottom: clamp(3.8rem, 5vw, 5rem);
    }

    .plb-section__head {
      margin-bottom: 1.75rem;
      max-width: 43rem;
    }

    .plb-featured-grid,
    .plb-library-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }

    .plb-card {
      --plb-accent: #f6f3ee;
      --plb-accent-soft: rgba(246,243,238,0.08);
      display: flex;
      flex-direction: column;
      min-height: 100%;
      border: 1px solid rgba(246,243,238,0.08);
      border-radius: 1.35rem;
      overflow: hidden;
      background: linear-gradient(180deg, rgba(23,23,23,0.92) 0%, rgba(16,16,16,0.96) 100%);
      transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
    }

    .plb-card:hover {
      transform: translateY(-4px);
      border-color: rgba(246,243,238,0.22);
      box-shadow: 0 22px 60px rgba(0,0,0,0.28);
    }

    .plb-card__visual {
      position: relative;
      padding: 1rem;
      min-height: 11rem;
      background: linear-gradient(135deg, var(--plb-accent-soft) 0%, rgba(255,255,255,0.02) 72%);
      border-bottom: 1px solid rgba(246,243,238,0.08);
    }

    .plb-card__visual::before,
    .plb-card__visual::after {
      content: "";
      position: absolute;
      border-radius: 999px;
      pointer-events: none;
    }

    .plb-card__visual::before {
      width: 7.5rem;
      height: 7.5rem;
      right: -1rem;
      top: -2rem;
      background: rgba(255,255,255,0.12);
      filter: blur(18px);
      opacity: 0.55;
    }

    .plb-card__visual::after {
      inset: auto 1rem 1rem auto;
      width: 5rem;
      height: 5rem;
      border: 1px solid rgba(246,243,238,0.14);
      opacity: 0.2;
    }

    .plb-card__visual--small {
      min-height: 8.2rem;
    }

    .plb-card__visual-head {
      display: flex;
      justify-content: space-between;
      gap: 0.8rem;
      align-items: flex-start;
      margin-bottom: 1.25rem;
      position: relative;
      z-index: 1;
    }

    .plb-card__visual-head span {
      display: inline-flex;
      align-items: center;
      min-height: 1.6rem;
      padding: 0.2rem 0.58rem;
      border-radius: 999px;
      border: 1px solid rgba(246,243,238,0.08);
      background: rgba(17,17,17,0.55);
      color: rgba(246,243,238,0.62);
      font-size: 0.68rem;
      line-height: 1.25;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .plb-card__icon {
      position: relative;
      z-index: 1;
      display: grid;
      place-items: center;
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 0.95rem;
      color: var(--plb-accent);
      background: rgba(17,17,17,0.62);
      border: 1px solid rgba(246,243,238,0.08);
    }

    .plb-card__icon svg {
      width: 1.45rem;
      height: 1.45rem;
    }

    .plb-card__icon--small {
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 0.8rem;
    }

    .plb-card__icon--small svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    .plb-card__stack {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-top: 1.4rem;
    }

    .plb-card__stack span,
    .plb-card__chips span {
      display: inline-flex;
      align-items: center;
      min-height: 1.7rem;
      padding: 0.15rem 0.55rem;
      border-radius: 999px;
      border: 1px solid rgba(246,243,238,0.08);
      background: rgba(255,255,255,0.03);
      color: rgba(246,243,238,0.62);
      font-size: 0.72rem;
      line-height: 1.2;
    }

    .plb-card__body {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 0.8rem;
      padding: 1.15rem 1.1rem 1.15rem;
    }

    .plb-card__kicker {
      margin: 0;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(246,243,238,0.62);
      font-weight: 700;
    }

    .plb-card__title {
      margin: 0;
      font-size: 1.2rem;
      line-height: 1.08;
      letter-spacing: -0.04em;
      font-family: 'Space Grotesk', sans-serif;
      color: #f6f3ee;
    }

    .plb-card__title--small {
      font-size: 1.05rem;
    }

    .plb-card__desc {
      margin: 0;
      color: rgba(246,243,238,0.64);
      font-size: 0.95rem;
      line-height: 1.65;
    }

    .plb-card__desc--small {
      font-size: 0.89rem;
      line-height: 1.6;
    }

    .plb-card__chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-top: 0.15rem;
    }

    .plb-card__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.8rem;
      margin-top: auto;
      padding-top: 0.25rem;
    }

    .plb-card__meta {
      color: rgba(246,243,238,0.46);
      font-size: 0.74rem;
      line-height: 1.4;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 700;
    }

    .plb-card__link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.55rem 0.85rem;
      border-radius: 999px;
      border: 1px solid rgba(246,243,238,0.18);
      background: rgba(255,255,255,0.04);
      color: #f6f3ee;
      font-size: 0.72rem;
      line-height: 1.2;
      text-decoration: none;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .plb-filter-panel {
      display: grid;
      grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
      gap: 1.2rem;
      padding: 1.3rem;
      border: 1px solid rgba(246,243,238,0.08);
      border-radius: 1.45rem;
      background: linear-gradient(180deg, rgba(22,22,22,0.9) 0%, rgba(16,16,16,0.94) 100%);
      margin-bottom: 1rem;
    }

    .plb-filter-panel__copy {
      max-width: 26rem;
    }

    .plb-filters {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.7rem;
      align-content: start;
    }

    .plb-filter-chip {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.75rem;
      width: 100%;
      padding: 0.95rem 1rem;
      border-radius: 1rem;
      border: 1px solid rgba(246,243,238,0.08);
      background: rgba(255,255,255,0.02);
      color: #f6f3ee;
      text-align: left;
      cursor: pointer;
      transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
    }

    .plb-filter-chip:hover,
    .plb-filter-chip.is-active {
      border-color: rgba(62,255,104,0.18);
      background: rgba(62,255,104,0.07);
      transform: translateY(-1px);
    }

    .plb-filter-chip__copy {
      display: flex;
      flex-direction: column;
      gap: 0.28rem;
    }

    .plb-filter-chip__copy strong {
      font-size: 0.92rem;
      line-height: 1.3;
      letter-spacing: -0.02em;
    }

    .plb-filter-chip__copy small {
      color: rgba(246,243,238,0.56);
      font-size: 0.76rem;
      line-height: 1.45;
    }

    .plb-filter-chip__count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 1.9rem;
      height: 1.9rem;
      padding: 0 0.35rem;
      border-radius: 999px;
      background: rgba(17,17,17,0.72);
      color: rgba(246,243,238,0.78);
      font-size: 0.8rem;
      line-height: 1;
      font-weight: 700;
      flex-shrink: 0;
    }

    .plb-library-meta {
      margin: 0 0 1rem;
      color: rgba(246,243,238,0.6);
      font-size: 0.92rem;
      line-height: 1.5;
    }

    .plb-library-meta strong {
      color: #f6f3ee;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.2rem;
      letter-spacing: -0.04em;
      margin-right: 0.35rem;
    }

    .plb-builder-cta__panel {
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) auto;
      gap: 1.1rem;
      align-items: center;
      padding: 1.5rem 1.55rem;
      border-radius: 1.45rem;
      border: 1px solid rgba(246,243,238,0.08);
      background: linear-gradient(135deg, rgba(96,165,250,0.12) 0%, rgba(17,17,17,0.92) 42%, rgba(244,114,182,0.12) 100%);
      box-shadow: 0 22px 60px rgba(0,0,0,0.22);
    }

    .plb-builder-cta__copy h2 {
      margin: 0 0 0.55rem;
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2rem, 3vw, 2.8rem);
      line-height: 0.96;
      letter-spacing: -0.06em;
    }

    .plb-builder-cta__copy p {
      margin: 0;
      color: rgba(246,243,238,0.66);
      line-height: 1.65;
      max-width: 34rem;
    }

    .plb-builder-cta__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 0.8rem;
    }

    @media (max-width: 1080px) {
      .plb-hero__layout,
      .plb-filter-panel,
      .plb-builder-cta__panel {
        grid-template-columns: 1fr;
      }

      .plb-preview {
        min-height: unset;
      }
    }

    @media (max-width: 991px) {
      .plb-featured-grid,
      .plb-library-grid,
      .plb-hero__stats,
      .plb-filters {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 767px) {
      .plb-shell {
        padding: 0 1rem 4.5rem;
      }

      .plb-hero__copy,
      .plb-preview,
      .plb-filter-panel,
      .plb-builder-cta__panel {
        padding: 1.25rem;
      }

      .plb-hero__actions,
      .plb-builder-cta__actions {
        flex-direction: column;
      }

      .plb-hero__actions .btn,
      .plb-builder-cta__actions .btn {
        width: 100%;
        justify-content: center;
      }

      .plb-featured-grid,
      .plb-library-grid,
      .plb-hero__stats,
      .plb-filters {
        grid-template-columns: 1fr;
      }

      .plb-card__footer {
        align-items: flex-start;
        flex-direction: column;
      }

      .plb-card__link {
        width: 100%;
        justify-content: center;
      }
    }
  </style>`;

const footerHtml = `\n${footerPartial}\n`;

const playbooksMain = `
<main class="main">
  <div class="plb-shell">
    <section class="plb-hero">
      <div class="plb-hero__layout">
        <div class="plb-hero__copy">
          <div class="eyebrow plb-hero__eyebrow">
            <span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span>
            <p class="eyebrow__p">Playbooks</p>
          </div>
          <h1 class="plb-hero__title">Our best content on AI, automation, GTM tech, and growth strategy.</h1>
          <p class="plb-hero__sub">This is the actual playbook hub now, not a stack of generic boxes. Start with the most requested plays, then filter the deeper library by motion and open a real playbook page for each one.</p>
          <div class="plb-hero__actions">
            <a href="#library" class="btn w-inline-block weflair-btn weflair-btn--primary"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Browse the library</span></div></a>
            <a href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--ghost"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Talk to us</span></div></a>
          </div>
          <div class="plb-hero__stats" aria-label="Playbooks overview">
            <div class="plb-stat"><strong>25</strong><span>Playbooks pulled from live delivery work.</span></div>
            <div class="plb-stat"><strong>6</strong><span>Featured motions teams ask for most.</span></div>
            <div class="plb-stat"><strong>19</strong><span>Additional templates in the working library.</span></div>
          </div>
        </div>
        <aside class="plb-hero__preview" aria-label="Playbook coverage">
          <div class="plb-preview">
            <div class="plb-preview__top">
              <p class="plb-preview__label">Inside the hub</p>
              <span class="plb-preview__pill">Built to run</span>
            </div>
            <h2 class="plb-preview__title">A cleaner resource stack for teams that need execution, not filler.</h2>
            <div class="plb-preview__list">
              <div class="plb-preview__item"><strong>AI and automation</strong><span>Signal capture, enrichment, routing, scoring, and workflow logic.</span></div>
              <div class="plb-preview__item"><strong>GTM tech</strong><span>CRM architecture, dashboarding, paid distribution, and lifecycle triggers.</span></div>
              <div class="plb-preview__item"><strong>Growth strategy</strong><span>Plays built to book pipeline, convert demand, and improve retention.</span></div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="plb-section">
      <div class="weflair-section__head plb-section__head">
        <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span><p class="eyebrow__p">Most popular</p></div>
        <h2 class="h3">The playbooks teams ask us for first.</h2>
        <p class="weflair-section__body">These are the flagship plays. Each one now opens a real detail page, so the click path actually makes sense.</p>
      </div>
      <div class="plb-featured-grid" id="plb-featured-grid"></div>
    </section>

    <section class="plb-section plb-section--library" id="library">
      <div class="plb-filter-panel">
        <div class="plb-filter-panel__copy">
          <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span><p class="eyebrow__p">Library</p></div>
          <h2 class="h3">Browse the deeper playbook library.</h2>
          <p class="weflair-section__body">Filter by motion and open the playbook that matches the build you need. No duplicates, no dead-end cards, no generic filler copy.</p>
        </div>
        <div class="plb-filters" id="plb-filter-list"></div>
      </div>
      <div class="plb-library-meta" id="plb-results-copy"></div>
      <div class="plb-library-grid" id="plb-library-grid"></div>
    </section>

    <section class="plb-builder-cta">
      <div class="plb-builder-cta__panel">
        <div class="plb-builder-cta__copy">
          <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span><p class="eyebrow__p">Need help?</p></div>
          <h2>Need the playbook built, not just read?</h2>
          <p>WeFlair can turn the strategy into a live system across your channels, CRM, reporting, and creative workflow.</p>
        </div>
        <div class="plb-builder-cta__actions">
          <a href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Talk to us</span></div></a>
          <a href="#audit" class="btn w-inline-block weflair-btn weflair-btn--ghost"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Request a growth audit</span></div></a>
        </div>
      </div>
    </section>
  </div>
</main>
${footerHtml}
<script src="/resources/playbooks-data.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const playbooks = Array.isArray(window.WEFLAIR_PLAYBOOKS) ? window.WEFLAIR_PLAYBOOKS : [];
    const featuredGrid = document.getElementById('plb-featured-grid');
    const filterList = document.getElementById('plb-filter-list');
    const libraryGrid = document.getElementById('plb-library-grid');
    const resultsCopy = document.getElementById('plb-results-copy');

    const categoryMeta = {
      all: { label: 'All playbooks', description: 'Everything in the library' },
      outbound: { label: 'Outbound and signal capture', description: 'Prospecting, routing, and signal-driven outreach' },
      revops: { label: 'RevOps and automation', description: 'CRM architecture, reporting, and workflow control' },
      paid: { label: 'Demand gen and paid media', description: 'Distribution, conversion, and campaign systems' },
      ecom: { label: 'eCommerce lifecycle', description: 'Retention, loyalty, and post-purchase growth' },
      lifecycle: { label: 'Retention and customer success', description: 'Activation, risk, and expansion protection' }
    };

    const iconMap = {
      outbound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.6 13.5 6.8 4"></path><path d="m15.4 6.5-6.8 4"></path></svg>',
      revops: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="7" height="7" rx="2"></rect><rect x="14" y="4" width="7" height="7" rx="2"></rect><rect x="14" y="13" width="7" height="7" rx="2"></rect><path d="M10 8h4"></path><path d="M17.5 11v2"></path><path d="M10 17h4"></path></svg>',
      paid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 14.5 7v10L3 12.5v-1Z"></path><path d="M14.5 9.5h2a4.5 4.5 0 0 1 0 9h-2"></path><path d="M7 14.5v4"></path></svg>',
      ecom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h15l-1.4 7.2a2 2 0 0 1-2 1.6H9.3a2 2 0 0 1-2-1.6L5 4H2"></path><circle cx="9" cy="20" r="1.5"></circle><circle cx="18" cy="20" r="1.5"></circle></svg>',
      lifecycle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.9 4 4.4.6-3.2 3.1.8 4.4-3.9-2.1-3.9 2.1.8-4.4L5.7 7.6l4.4-.6L12 3Z"></path><path d="M19 15.5c0 3-2.5 5.5-5.5 5.5S8 18.5 8 15.5"></path></svg>'
    };

    const palette = {
      outbound: { accent: '#3eff68', soft: 'rgba(62,255,104,0.14)' },
      revops: { accent: '#60a5fa', soft: 'rgba(96,165,250,0.16)' },
      paid: { accent: '#f59e0b', soft: 'rgba(245,158,11,0.15)' },
      ecom: { accent: '#f472b6', soft: 'rgba(244,114,182,0.15)' },
      lifecycle: { accent: '#22d3ee', soft: 'rgba(34,211,238,0.15)' }
    };

    const featured = playbooks.filter((playbook) => playbook.featured);
    const library = playbooks.filter((playbook) => !playbook.featured);
    const filterOrder = ['all', 'outbound', 'revops', 'paid', 'ecom', 'lifecycle'];
    const filterCounts = library.reduce((acc, playbook) => {
      acc[playbook.category] = (acc[playbook.category] || 0) + 1;
      return acc;
    }, {});

    let activeFilter = 'all';
    const playbookUrl = (slug) => '/resources/playbook.html?slug=' + slug;

    const renderFeaturedCard = (playbook) => {
      const meta = categoryMeta[playbook.category];
      const colors = palette[playbook.category];
      return '<article class="plb-card plb-card--featured" style="--plb-accent:' + colors.accent + '; --plb-accent-soft:' + colors.soft + ';">' +
        '<div class="plb-card__visual">' +
          '<div class="plb-card__visual-head"><span>' + meta.label + '</span><span>' + playbook.format + '</span></div>' +
          '<div class="plb-card__icon">' + iconMap[playbook.category] + '</div>' +
          '<div class="plb-card__stack">' + playbook.stack.slice(0, 3).map((item) => '<span>' + item + '</span>').join('') + '</div>' +
        '</div>' +
        '<div class="plb-card__body">' +
          '<p class="plb-card__kicker">' + playbook.kicker + '</p>' +
          '<h3 class="plb-card__title">' + playbook.title + '</h3>' +
          '<p class="plb-card__desc">' + playbook.summary + '</p>' +
          '<div class="plb-card__chips">' + playbook.includes.slice(0, 2).map((item) => '<span>' + item + '</span>').join('') + '</div>' +
          '<div class="plb-card__footer"><span class="plb-card__meta">' + playbook.effort + '</span><a href="' + playbookUrl(playbook.slug) + '" class="plb-card__link">Open playbook</a></div>' +
        '</div>' +
      '</article>';
    };

    const renderLibraryCard = (playbook) => {
      const meta = categoryMeta[playbook.category];
      const colors = palette[playbook.category];
      return '<article class="plb-card" style="--plb-accent:' + colors.accent + '; --plb-accent-soft:' + colors.soft + ';">' +
        '<div class="plb-card__visual plb-card__visual--small">' +
          '<div class="plb-card__visual-head"><span>' + meta.label + '</span><span>' + playbook.format + '</span></div>' +
          '<div class="plb-card__icon plb-card__icon--small">' + iconMap[playbook.category] + '</div>' +
        '</div>' +
        '<div class="plb-card__body">' +
          '<p class="plb-card__kicker">' + playbook.kicker + '</p>' +
          '<h3 class="plb-card__title plb-card__title--small">' + playbook.title + '</h3>' +
          '<p class="plb-card__desc plb-card__desc--small">' + playbook.summary + '</p>' +
          '<div class="plb-card__chips">' + playbook.includes.slice(0, 2).map((item) => '<span>' + item + '</span>').join('') + '</div>' +
          '<div class="plb-card__footer"><span class="plb-card__meta">' + playbook.stack.join(' / ') + '</span><a href="' + playbookUrl(playbook.slug) + '" class="plb-card__link">Open playbook</a></div>' +
        '</div>' +
      '</article>';
    };

    const renderFilters = () => {
      filterList.innerHTML = filterOrder.map((key) => {
        const meta = categoryMeta[key];
        const count = key === 'all' ? library.length : (filterCounts[key] || 0);
        const activeClass = key === activeFilter ? 'is-active' : '';
        return '<button class="plb-filter-chip ' + activeClass + '" type="button" data-filter="' + key + '">' +
          '<span class="plb-filter-chip__copy"><strong>' + meta.label + '</strong><small>' + meta.description + '</small></span>' +
          '<span class="plb-filter-chip__count">' + count + '</span>' +
        '</button>';
      }).join('');

      filterList.querySelectorAll('[data-filter]').forEach((button) => {
        button.addEventListener('click', () => {
          activeFilter = button.getAttribute('data-filter');
          renderFilters();
          renderLibrary();
        });
      });
    };

    const renderLibrary = () => {
      const filtered = activeFilter === 'all' ? library : library.filter((playbook) => playbook.category === activeFilter);
      libraryGrid.innerHTML = filtered.map(renderLibraryCard).join('');
      const label = activeFilter === 'all' ? 'additional playbooks shown.' : categoryMeta[activeFilter].label.toLowerCase() + ' shown.';
      resultsCopy.innerHTML = '<strong>' + filtered.length + '</strong> ' + label;
    };

    featuredGrid.innerHTML = featured.map(renderFeaturedCard).join('');
    renderFilters();
    renderLibrary();
  });
</script>
</body>
</html>`;

const detailCss = `
  <style id="playbooks-page-refresh">
    .pd-shell {
      width: min(100%, 78rem);
      margin: 0 auto;
      padding: 0 2rem 6rem;
    }

    .pd-hero,
    .pd-content-grid,
    .pd-cta {
      margin-bottom: 1.25rem;
    }

    .pd-hero {
      display: grid;
      grid-template-columns: minmax(0, 1.08fr) minmax(18rem, 0.92fr);
      gap: 1.1rem;
      padding-top: clamp(3rem, 5vw, 4.5rem);
    }

    .pd-panel {
      position: relative;
      overflow: hidden;
      border-radius: 1.5rem;
      border: 1px solid rgba(246,243,238,0.08);
      background: linear-gradient(180deg, rgba(23,23,23,0.94) 0%, rgba(16,16,16,0.96) 100%);
      box-shadow: 0 24px 80px rgba(0,0,0,0.28);
    }

    .pd-panel::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top left, rgba(96,165,250,0.14), transparent 42%), radial-gradient(circle at bottom right, rgba(62,255,104,0.1), transparent 38%);
      pointer-events: none;
    }

    .pd-hero__copy,
    .pd-hero__aside,
    .pd-section,
    .pd-cta__panel {
      position: relative;
      padding: 1.45rem;
      z-index: 1;
    }

    .pd-breadcrumbs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-bottom: 1rem;
      color: rgba(246,243,238,0.44);
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .pd-breadcrumbs a {
      color: rgba(246,243,238,0.62);
      text-decoration: none;
    }

    .pd-kicker {
      margin: 0 0 0.8rem;
      color: var(--pd-accent, #3eff68);
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .pd-title {
      margin: 0 0 0.85rem;
      max-width: 11ch;
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(3rem, 6vw, 4.9rem);
      line-height: 0.95;
      letter-spacing: -0.08em;
      text-wrap: balance;
    }

    .pd-summary {
      margin: 0;
      max-width: 41rem;
      color: rgba(246,243,238,0.68);
      font-size: clamp(1rem, 1.3vw, 1.12rem);
      line-height: 1.7;
    }

    .pd-hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-top: 1.8rem;
    }

    .pd-meta {
      display: grid;
      gap: 0.8rem;
    }

    .pd-meta__visual {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .pd-meta__visual strong {
      display: block;
      margin-bottom: 0.35rem;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(246,243,238,0.45);
    }

    .pd-meta__visual span {
      display: block;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      letter-spacing: -0.05em;
      color: #f6f3ee;
    }

    .pd-icon {
      width: 3.2rem;
      height: 3.2rem;
      display: grid;
      place-items: center;
      border-radius: 0.95rem;
      color: var(--pd-accent, #3eff68);
      background: rgba(17,17,17,0.6);
      border: 1px solid rgba(246,243,238,0.08);
      flex-shrink: 0;
    }

    .pd-icon svg {
      width: 1.45rem;
      height: 1.45rem;
    }

    .pd-fact-list,
    .pd-chip-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .pd-fact-list li,
    .pd-chip-list li {
      display: inline-flex;
      align-items: center;
      min-height: 1.85rem;
      padding: 0.18rem 0.6rem;
      border-radius: 999px;
      border: 1px solid rgba(246,243,238,0.08);
      background: rgba(255,255,255,0.03);
      color: rgba(246,243,238,0.66);
      font-size: 0.78rem;
      line-height: 1.3;
    }

    .pd-content-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.08fr) minmax(18rem, 0.92fr);
      gap: 1.1rem;
    }

    .pd-section__title {
      margin: 0 0 0.85rem;
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(1.9rem, 3vw, 2.55rem);
      line-height: 0.97;
      letter-spacing: -0.06em;
    }

    .pd-section__body {
      margin: 0;
      color: rgba(246,243,238,0.66);
      line-height: 1.7;
    }

    .pd-include-grid,
    .pd-step-grid {
      display: grid;
      gap: 0.85rem;
      margin-top: 1rem;
    }

    .pd-include-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .pd-step-card,
    .pd-include-card {
      padding: 1rem;
      border-radius: 1rem;
      border: 1px solid rgba(246,243,238,0.08);
      background: rgba(255,255,255,0.025);
    }

    .pd-include-card strong,
    .pd-step-card strong {
      display: block;
      margin-bottom: 0.4rem;
      color: #f6f3ee;
      font-size: 0.96rem;
      letter-spacing: -0.02em;
    }

    .pd-include-card span,
    .pd-step-card span {
      display: block;
      color: rgba(246,243,238,0.62);
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .pd-step-card__index {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.9rem;
      height: 1.9rem;
      margin-bottom: 0.7rem;
      border-radius: 999px;
      border: 1px solid rgba(246,243,238,0.08);
      background: rgba(255,255,255,0.04);
      color: var(--pd-accent, #3eff68);
      font-size: 0.82rem;
      font-weight: 700;
    }

    .pd-sidebar-block + .pd-sidebar-block {
      margin-top: 0.9rem;
    }

    .pd-sidebar-block strong {
      display: block;
      margin-bottom: 0.45rem;
      color: rgba(246,243,238,0.5);
      font-size: 0.76rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .pd-sidebar-block p {
      margin: 0;
      color: rgba(246,243,238,0.68);
      line-height: 1.65;
    }

    .pd-cta__panel {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) auto;
      gap: 1rem;
      align-items: center;
      background: linear-gradient(135deg, rgba(96,165,250,0.12) 0%, rgba(17,17,17,0.92) 45%, rgba(62,255,104,0.12) 100%);
    }

    .pd-cta__panel h2 {
      margin: 0 0 0.6rem;
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2rem, 3vw, 2.7rem);
      line-height: 0.96;
      letter-spacing: -0.06em;
    }

    .pd-cta__panel p {
      margin: 0;
      color: rgba(246,243,238,0.66);
      line-height: 1.65;
      max-width: 36rem;
    }

    .pd-cta__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 0.8rem;
    }

    @media (max-width: 1080px) {
      .pd-hero,
      .pd-content-grid,
      .pd-cta__panel {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 767px) {
      .pd-shell {
        padding: 0 1rem 4.5rem;
      }

      .pd-hero__copy,
      .pd-hero__aside,
      .pd-section,
      .pd-cta__panel {
        padding: 1.2rem;
      }

      .pd-hero__actions,
      .pd-cta__actions {
        flex-direction: column;
      }

      .pd-hero__actions .btn,
      .pd-cta__actions .btn {
        width: 100%;
        justify-content: center;
      }

      .pd-include-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>`;

const detailMain = `
<main class="main">
  <div class="pd-shell" id="pd-shell"></div>
</main>
${footerHtml}
<script src="/resources/playbooks-data.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const playbooks = Array.isArray(window.WEFLAIR_PLAYBOOKS) ? window.WEFLAIR_PLAYBOOKS : [];
    const shell = document.getElementById('pd-shell');
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    const playbook = playbooks.find((item) => item.slug === slug);

    const categoryMeta = {
      outbound: { label: 'Outbound and signal capture', accent: '#3eff68', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.6 13.5 6.8 4"></path><path d="m15.4 6.5-6.8 4"></path></svg>' },
      revops: { label: 'RevOps and automation', accent: '#60a5fa', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="7" height="7" rx="2"></rect><rect x="14" y="4" width="7" height="7" rx="2"></rect><rect x="14" y="13" width="7" height="7" rx="2"></rect><path d="M10 8h4"></path><path d="M17.5 11v2"></path><path d="M10 17h4"></path></svg>' },
      paid: { label: 'Demand gen and paid media', accent: '#f59e0b', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 14.5 7v10L3 12.5v-1Z"></path><path d="M14.5 9.5h2a4.5 4.5 0 0 1 0 9h-2"></path><path d="M7 14.5v4"></path></svg>' },
      ecom: { label: 'eCommerce lifecycle', accent: '#f472b6', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h15l-1.4 7.2a2 2 0 0 1-2 1.6H9.3a2 2 0 0 1-2-1.6L5 4H2"></path><circle cx="9" cy="20" r="1.5"></circle><circle cx="18" cy="20" r="1.5"></circle></svg>' },
      lifecycle: { label: 'Retention and customer success', accent: '#22d3ee', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.9 4 4.4.6-3.2 3.1.8 4.4-3.9-2.1-3.9 2.1.8-4.4L5.7 7.6l4.4-.6L12 3Z"></path><path d="M19 15.5c0 3-2.5 5.5-5.5 5.5S8 18.5 8 15.5"></path></svg>' }
    };

    if (!playbook) {
      document.title = 'Playbook not found - WeFlair';
      shell.innerHTML = '<section class="pd-hero"><div class="pd-panel"><div class="pd-hero__copy"><div class="pd-breadcrumbs"><a href="/resources/playbooks.html">Playbooks</a><span>/</span><span>Not found</span></div><p class="pd-kicker">Playbook not found</p><h1 class="pd-title">This playbook does not exist.</h1><p class="pd-summary">Head back to the library and choose one of the live playbooks.</p><div class="pd-hero__actions"><a href="/resources/playbooks.html" class="btn w-inline-block weflair-btn weflair-btn--primary"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Back to playbooks</span></div></a></div></div></div></section>';
      return;
    }

    const meta = categoryMeta[playbook.category];
    document.title = playbook.title + ' - WeFlair';
    shell.style.setProperty('--pd-accent', meta.accent);

    shell.innerHTML = '<section class="pd-hero">' +
      '<div class="pd-panel"><div class="pd-hero__copy">' +
        '<div class="pd-breadcrumbs"><a href="/resources/playbooks.html">Resources</a><span>/</span><a href="/resources/playbooks.html">Playbooks</a><span>/</span><span>' + playbook.title + '</span></div>' +
        '<p class="pd-kicker">' + playbook.kicker + '</p>' +
        '<h1 class="pd-title">' + playbook.title + '</h1>' +
        '<p class="pd-summary">' + playbook.summary + '</p>' +
        '<div class="pd-hero__actions">' +
          '<a href="/contact.html?resource=playbook&slug=' + playbook.slug + '" class="btn w-inline-block weflair-btn weflair-btn--primary"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Request the template</span></div></a>' +
          '<a href="/resources/playbooks.html" class="btn w-inline-block weflair-btn weflair-btn--ghost"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Back to library</span></div></a>' +
        '</div>' +
      '</div></div>' +
      '<div class="pd-panel"><div class="pd-hero__aside"><div class="pd-meta">' +
        '<div class="pd-meta__visual"><div><strong>Motion</strong><span>' + meta.label + '</span></div><div class="pd-icon">' + meta.icon + '</div></div>' +
        '<ul class="pd-fact-list"><li>' + playbook.format + '</li><li>' + playbook.effort + '</li><li>' + playbook.audience + '</li></ul>' +
        '<div class="pd-sidebar-block"><strong>Recommended stack</strong><ul class="pd-chip-list">' + playbook.stack.map((item) => '<li>' + item + '</li>').join('') + '</ul></div>' +
        '<div class="pd-sidebar-block"><strong>Metrics to watch</strong><ul class="pd-chip-list">' + playbook.metrics.map((item) => '<li>' + item + '</li>').join('') + '</ul></div>' +
      '</div></div></div>' +
    '</section>' +
    '<section class="pd-content-grid">' +
      '<div class="pd-panel"><div class="pd-section">' +
        '<h2 class="pd-section__title">What you get inside</h2>' +
        '<p class="pd-section__body">This playbook is built for teams that need a usable operating structure, not a vague PDF. Use it to clarify the build, align the team, and ship the motion with fewer moving parts.</p>' +
        '<div class="pd-include-grid">' + playbook.includes.map((item) => '<div class="pd-include-card"><strong>' + item + '</strong><span>Included as part of the working structure so the team can launch with less interpretation.</span></div>').join('') + '</div>' +
      '</div></div>' +
      '<div class="pd-panel"><div class="pd-section">' +
        '<h2 class="pd-section__title">Best used when</h2>' +
        '<p class="pd-section__body">' + playbook.audience + '</p>' +
        '<div class="pd-sidebar-block"><strong>What success looks like</strong><p>You should have a clearer operating path, tighter team handoff, and metrics that show whether the motion is really working.</p></div>' +
      '</div></div>' +
    '</section>' +
    '<section class="pd-panel"><div class="pd-section">' +
      '<h2 class="pd-section__title">Execution flow</h2>' +
      '<p class="pd-section__body">The fastest way to make the playbook useful is to treat it like a build sequence. Start with the model, wire the workflow, then measure the motion.</p>' +
      '<div class="pd-step-grid">' + playbook.steps.map((step, index) => '<div class="pd-step-card"><span class="pd-step-card__index">' + (index + 1) + '</span><strong>' + step.title + '</strong><span>' + step.body + '</span></div>').join('') + '</div>' +
    '</div></section>' +
    '<section class="pd-panel pd-cta"><div class="pd-cta__panel">' +
      '<div><h2>Need this playbook turned into a live system?</h2><p>WeFlair can wire the strategy into your CRM, routing, ads, lifecycle flows, reporting, and team operating rhythm.</p></div>' +
      '<div class="pd-cta__actions">' +
        '<a href="/contact.html?resource=playbook&slug=' + playbook.slug + '" class="btn w-inline-block weflair-btn weflair-btn--primary"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Talk to us</span></div></a>' +
        '<a href="#audit" class="btn w-inline-block weflair-btn weflair-btn--ghost"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Request a growth audit</span></div></a>' +
      '</div>' +
    '</div></section>';
  });
</script>
</body>
</html>`;

const titlePattern = new RegExp('<title>[\\\\s\\\\S]*?<\\\\/title>');
const descriptionPattern = new RegExp('<meta name="description" content="[^"]*"\\\\s*\\\\/>');

const playbooksHtml = prefix.replace('</head>', `${pageCss}\n</head>`) + playbooksMain;
fs.writeFileSync(playbooksPath, playbooksHtml, 'utf8');

const detailPrefix = prefix
  .replace('</head>', `${detailCss}\n</head>`)
  .replace(titlePattern, '<title>Playbook - WeFlair</title>')
  .replace(descriptionPattern, '<meta name="description" content="Operator-grade playbook details from WeFlair." />');

fs.writeFileSync(detailPath, detailPrefix + detailMain, 'utf8');
