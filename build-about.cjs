const fs = require('fs');

const htmlContent = `
  <style>
    .pm-page { background: #151515; color: #f6f3ee; font-family: 'Inter', sans-serif; }
    
    .wa-hero {
      position: relative;
      padding: clamp(8rem, 14vw, 15rem) 2rem clamp(4rem, 8vw, 6rem);
      text-align: center;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid rgba(246,243,238,0.06);
    }
    .wa-hero::before {
      content: "";
      position: absolute;
      top: -20%; left: 50%;
      transform: translateX(-50%);
      width: 70vw; height: 70vw;
      background: radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 60%);
      pointer-events: none;
      z-index: 0;
    }
    .wa-hero__inner { position: relative; z-index: 1; max-width: 64rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .wa-hero__title { font-size: clamp(3rem, 5vw, 5.2rem); line-height: 0.95; font-weight: 700; letter-spacing: -0.06em; margin: 0 0 1.8rem; text-wrap: balance; }
    .wa-hero__sub { font-size: clamp(1.1rem, 1.4vw, 1.3rem); line-height: 1.5; color: rgba(246,243,238,0.7); max-width: 48rem; margin: 0 auto 3rem; text-wrap: balance; }
    
    .pm-stats-ribbon {
      position: relative; z-index: 2;
      margin-top: -3rem;
      max-width: 58rem; width: 100%;
      margin-left: auto; margin-right: auto;
      background: rgba(17,17,17,0.95);
      border: 1px solid rgba(62,255,104,0.2);
      border-radius: 1.25rem;
      padding: 3rem 2rem;
      display: flex; justify-content: space-around; flex-wrap: wrap; gap: 2rem;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(62,255,104,0.05);
      backdrop-filter: blur(12px);
    }
    .wa-stat { text-align: center; }
    .wa-stat h4 { font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 700; color: #3eff68; margin: 0 0 0.5rem; letter-spacing: -0.04em; }
    .wa-stat p { font-size: 0.95rem; font-weight: 600; color: rgba(246,243,238,0.8); margin: 0; text-transform: uppercase; letter-spacing: 0.05em; }
    
    .wa-story-section { padding: clamp(5rem, 8vw, 8rem) 2rem; }
    .wa-story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem, 6vw, 6rem); max-width: 72rem; margin: 0 auto; align-items: center; }
    @media(max-width:991px) { .wa-story-grid { grid-template-columns: 1fr; } }
    .wa-story-text h2 { font-size: clamp(2.2rem, 4vw, 3rem); font-weight: 700; color: #f6f3ee; margin-bottom: 1.5rem; letter-spacing: -0.04em; line-height: 1.1; }
    .wa-story-text p { font-size: 1.1rem; line-height: 1.6; color: rgba(246,243,238,0.7); margin-bottom: 1.5rem; }
    .wa-story-image { position: relative; border-radius: 1.5rem; overflow: hidden; border: 1px solid rgba(246,243,238,0.08); aspect-ratio: 4/3; background: #0a0b0a; }
    .wa-story-image::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(246,243,238,0.05), transparent 70%); }
    .wa-story-image .wa-brand-accent { position: absolute; bottom: -20%; right: -20%; width: 60%; height: 60%; background: #818cf8; filter: blur(80px); opacity: 0.3; }
    .wa-story-image-inner { position: absolute; inset: 2rem; border: 1px dashed rgba(246,243,238,0.2); border-radius: 1rem; display: flex; align-items: center; justify-content: center; }
    .wa-story-image-inner svg { width: 4rem; height: 4rem; color: rgba(246,243,238,0.2); }

    .wa-values-section { padding: clamp(6rem, 10vw, 10rem) 2rem; background: linear-gradient(180deg, #0e100e 0%, #151515 100%); border-top: 1px solid rgba(246,243,238,0.05); }
    .wa-values-head { text-align: center; margin-bottom: 4rem; max-width: 48rem; margin-inline: auto; }
    .wa-values-head h2 { font-size: 2.5rem; font-weight: 700; letter-spacing: -0.04em; margin-bottom: 1rem; }
    .wa-values-head p { font-size: 1.05rem; color: rgba(246,243,238,0.6); }
    
    .wa-values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; max-width: 72rem; margin: 0 auto; }
    @media(max-width:991px) { .wa-values-grid { grid-template-columns: repeat(2, 1fr); } }
    @media(max-width:479px) { .wa-values-grid { grid-template-columns: 1fr; } }
    .wa-value-card { background: rgba(20,22,20,0.6); border: 1px solid rgba(246,243,238,0.08); border-radius: 1.25rem; padding: 2.5rem 1.5rem; text-align: center; transition: all 0.4s ease; position: relative; overflow: hidden; }
    .wa-value-card::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at top, rgba(62,255,104,0.05), transparent 70%); opacity: 0; transition: opacity 0.4s ease; }
    .wa-value-card:hover { border-color: rgba(62,255,104,0.3); transform: translateY(-4px); background: #151515; }
    .wa-value-card:hover::before { opacity: 1; }
    .wa-value-icon { width: 3.5rem; height: 3.5rem; border-radius: 0.8rem; background: rgba(62,255,104,0.08); color: #3eff68; display: grid; place-items: center; margin: 0 auto 1.5rem; position: relative; z-index: 1; border: 1px solid rgba(62,255,104,0.15); }
    .wa-value-card h3 { font-size: 1.25rem; color: #f6f3ee; font-weight: 700; margin-bottom: 0.75rem; position: relative; z-index: 1; }
    .wa-value-card p { font-size: 0.9rem; color: rgba(246,243,238,0.6); line-height: 1.5; margin: 0; position: relative; z-index: 1; }
    
    .wa-method-section { padding: clamp(5rem, 8vw, 8rem) 2rem; border-top: 1px solid rgba(246,243,238,0.06); }
    .wa-method-head { text-align: center; margin-bottom: 5rem; }
    .wa-method-head h2 { font-size: 2.5rem; font-weight: 700; letter-spacing: -0.04em; }
    .wa-method-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 72rem; margin: 0 auto; counter-reset: method-counter; }
    .wa-method-card { padding: 0 1.5rem 1.5rem 2rem; border-left: 1px solid rgba(246,243,238,0.1); position: relative; display: flex; flex-direction: column; }
    .wa-method-card::before {
      counter-increment: method-counter;
      content: "0" counter(method-counter);
      position: absolute; left: -1.2rem; top: 0;
      background: #151515; border: 1px solid rgba(246,243,238,0.2);
      border-radius: 50%; width: 2.4rem; height: 2.4rem;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.85rem; font-weight: 700; color: #f6f3ee;
      transition: all 0.3s ease;
    }
    .wa-method-card:hover::before { border-color: #3eff68; color: #3eff68; box-shadow: 0 0 15px rgba(62,255,104,0.2); }
    .wa-method-card h3 { font-size: 1.4rem; color: #f6f3ee; font-weight: 700; margin-bottom: 1rem; margin-top: 0.2rem; }
    .wa-method-card p { font-size: 0.95rem; color: rgba(246,243,238,0.65); line-height: 1.6; }
    @media(max-width:991px){ 
      .wa-method-grid{grid-template-columns:1fr; gap:3rem; padding-left: 1.5rem;} 
      .wa-method-card{border-left: none; padding: 0 0 0 2rem;} 
      .wa-method-card::before{left: -1.5rem;} 
    }

    .wa-cta-section { padding: clamp(6rem, 10vw, 8rem) 2rem; background: #0a0b0a; border-top: 1px solid rgba(246,243,238,0.06); text-align: center; }
    .wa-cta-inner { max-width: 42rem; margin: 0 auto; }
    .wa-cta-inner h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; margin-bottom: 1.5rem; letter-spacing: -0.04em; }
    .wa-cta-inner p { font-size: 1.05rem; color: rgba(246,243,238,0.6); margin-bottom: 2.5rem; line-height: 1.5; }
    .wa-cta-inner .btn { min-width: 16rem; justify-content: center; }
  </style>

  <div class="weflair-about-content">
    <section class="wa-hero">
      <div class="wa-hero__inner">
        <div class="eyebrow" style="margin-bottom:1.5rem; justify-content: center;">
          <span class="weflair-eyebrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg>
          </span>
          <p class="eyebrow__p">The Agency Alternative</p>
        </div>
        <h1 class="wa-hero__title">The gap between strategy and execution is <span style="color:#818cf8;">where growth dies.</span></h1>
        <p class="wa-hero__sub">We exist to close it. WeFlair is a collective of specialized growth operators built for ambitious B2B brands. No juniors learning on your dime. No account managers playing telephone. Just the systems, the tracking, and the execution that actually drive revenue.</p>
        <div class="btn-wrap" style="display:flex; justify-content:center;">
          <a data-btn-theme="primary" href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
            <div class="btn__bg"></div>
            <div class="btn__text"><span class="btn__span">Build your engine</span></div>
            <div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/></svg></div></div>
          </a>
        </div>
      </div>
    </section>

    <div class="pm-stats-ribbon">
      <div class="wa-stat">
        <h4>10+</h4>
        <p>Expert Operators</p>
      </div>
      <div class="wa-stat">
        <h4>$50M+</h4>
        <p>Pipeline Influenced</p>
      </div>
      <div class="wa-stat">
        <h4>0</h4>
        <p>Bloat &amp; Excuses</p>
      </div>
    </div>

    <section class="wa-story-section">
      <div class="wa-story-grid">
        <div class="wa-story-text">
          <div class="eyebrow" style="margin-bottom:1rem;">
            <span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg></span>
            <p class="eyebrow__p">The Paradigm Shift</p>
          </div>
          <h2>We saw a broken agency model, so we built something else.</h2>
          <p>Most agencies sell you an expensive strategy deck and then task an entry-level associate to run it. Or worse—they wait for you to tell them exactly what to execute, acting as incredibly expensive order-takers.</p>
          <p>That simply doesn't work for modern B2B growth. The landscape changes too quickly for static decks, and the tactics are too complex for generalists to manage effectively.</p>
          <p><strong>WeFlair is built differently.</strong> We’re a lean squad of highly specialized contractors and operators. We embed into your workflow, align your sales and marketing, fix the CRM rot, and run campaigns that actually compound over time. We aren't an agency; we're your outsourced growth infrastructure.</p>
        </div>
        <div class="wa-story-image">
          <div class="wa-brand-accent"></div>
          <div class="wa-story-image-inner">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
          </div>
        </div>
      </div>
    </section>

    <section class="wa-values-section">
      <div class="wa-values-head">
        <h2>WeFlair Core Values</h2>
        <p>The operational principles that guide every strategy, sprint, and system we build for our partners.</p>
      </div>
      <div class="wa-values-grid">
        <div class="wa-value-card">
          <div class="wa-value-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <h3>Growth Accountability</h3>
          <p>We measure success in qualified pipeline and closed revenue, not impressions or vanity metrics. If it doesn't eventually tie to money, we don't focus on it.</p>
        </div>
        <div class="wa-value-card">
          <div class="wa-value-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
          </div>
          <h3>Speed to Impact</h3>
          <p>Endless planning cycles kill momentum. We prioritize rapid execution, iterative testing, and getting campaigns live to gather real market data.</p>
        </div>
        <div class="wa-value-card">
          <div class="wa-value-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </div>
          <h3>Radical Honesty</h3>
          <p>If there's no product-market fit, we'll say so. If a channel is dead, we'll cut it. We partner with leaders who value the truth over comfortable charts.</p>
        </div>
        <div class="wa-value-card">
          <div class="wa-value-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
          </div>
          <h3>Systems That Scale</h3>
          <p>We don't just run siloed ads; we build the tracking, the routing, and the operational infrastructure that makes growth sustainable and profitable.</p>
        </div>
      </div>
    </section>

    <section class="wa-method-section">
      <div class="wa-method-head">
        <h2>How We Help You Win</h2>
      </div>
      <div class="wa-method-grid">
        <div class="wa-method-card">
          <h3>Audit &amp; Alignment</h3>
          <p>Before spending a dollar on acquisition, we tear down your current setup. We fix broken tracking, unify your sales and marketing data, and ensure your messaging is actually positioned to convert your target ICP.</p>
        </div>
        <div class="wa-method-card">
          <h3>Execution Pods</h3>
          <p>We deploy specialized operators based on your exact needs—whether that's scaling Paid Media, standing up Outbound infrastructure, or executing technical SEO—all without the bloated overhead of a traditional agency.</p>
        </div>
        <div class="wa-method-card">
          <h3>Compound &amp; Scale</h3>
          <p>Winning once isn't enough. We continuously run conversion rate optimization (CRO), iterative A/B testing on landing pages, and expand into adjacent profitable channels until growth compounds automatically.</p>
        </div>
      </div>
    </section>
    
    <section class="wa-cta-section">
      <div class="wa-cta-inner">
        <h2>Ready to build a real growth engine?</h2>
        <p>Stop paying for strategy decks that sit in Google Drive. Let's build the systems that put pipeline on the board.</p>
        <a data-hover="" data-btn-theme="primary" href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span">Request a Marketing Audit</span></div>
          <div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/></svg></div></div>
        </a>
      </div>
    </section>
  </div>
`;

let targetFile = 'about.html';
let content = fs.readFileSync(targetFile, 'utf8');

// The replacement bounds:
// We want to replace everything inside:
// <div style="padding-top:var(--nav-bar-height,5rem)"> (or padding-top:5rem)
// down to the </footer> tag.
// Actually, looking at the layout, let's just replace the exact block:
// from: <div style="padding-top:5rem">
// to: </div>\n</div>\n<footer

let startMarker = '<div style="padding-top:5rem">';
let endMarker = '</div>\\s*</div>\\s*<footer';

let regex = new RegExp(startMarker + '.*?(?=' + endMarker + ')', 's');

if (regex.test(content)) {
  content = content.replace(regex, htmlContent);
  // Also we want to ensure the body has the pm-page class for styling overrides.
  content = content.replace('<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body">', '<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body pm-page">');
  
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log('Successfully injected premium About page content.');
} else {
  console.error('Could not find the target section to replace in about.html');
}
