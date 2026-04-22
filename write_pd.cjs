const fs = require('fs');

const bgHtml = fs.readFileSync('services/paid-media-performance.html', 'utf8');
const headerContent = bgHtml.match(/<header class="header">[\s\S]*?<\/header>/)[0];
const footerContent = bgHtml.match(/<section class="footer weflair-footer">[\s\S]*?<\/section>/)[0];
const endHtml = bgHtml.match(/<\/main>[\s\S]*?<\/html>/)[0];

const newHtml = \<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Performance Design & CRO - WeFlair</title>
  <meta name="description" content="Increase ROI and turn clicks into customers with Performance Creative engineered for impact." />
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="../brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="canonical" href="https://weflair.co/services/performance-design.html" />
  <link rel="stylesheet" href="../foundation-styles.css" />
  <link rel="stylesheet" href="../foundation-slater.css" />
  <link rel="stylesheet" href="../weflair-hero.css" />
  <script src="../foundation.js" defer></script>
  <script src="../weflair-hero.js" defer></script>
  <style>
    .pd-cap-row { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; max-width: 1200px; margin: 0 auto; }
    .pd-cap-list { display: flex; flex-direction: column; gap: 1rem; }
    .pd-cap-item { 
      padding: 1.5rem; 
      border: 1px solid rgba(255,255,255,0.08); 
      border-radius: 12px; 
      background: rgba(255,255,255,0.02); 
      cursor: pointer; 
      transition: all 0.3s ease; 
      display: flex; justify-content: space-between; align-items: center;
    }
    .pd-cap-item:hover { 
      background: rgba(62,255,104,0.05); 
      border-color: rgba(62,255,104,0.3); 
    }
    .pd-cap-item h3 { font-size: 1.25rem; font-weight: 600; margin: 0; color: #f6f3ee; transition: color 0.3s; }
    .pd-cap-item:hover h3 { color: #3eff68; }
    .pd-cap-icon { color: rgba(255,255,255,0.3); transition: color 0.3s, transform 0.3s; }
    .pd-cap-item:hover .pd-cap-icon { color: #3eff68; transform: translateX(5px); }

    .pd-cap-visual { position: relative; width: 100%; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; }
    
    .pd-stage { position: relative; width: 100%; max-width: 474px; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; margin: 0 auto; }
    .pd-ghost { position: absolute; inset: 10%; background: #222; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; pointer-events: none; transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.4, 1); }
    .pd-ghost-1 { transform: rotate(-3.5deg) translate(-10px, 6px) scale(0.96); z-index: 1; opacity: 0.55; }
    .pd-ghost-2 { transform: rotate(2.8deg) translate(12px, 10px) scale(0.97); z-index: 2; opacity: 0.75; }
    .pd-card { position: absolute; inset: 5%; background: linear-gradient(145deg, #1f1f1f, #111); border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; z-index: 4; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
    .pd-card-header { padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .pd-card-mac { display: flex; gap: 6px; }
    .pd-card-mac span { width: 10px; height: 10px; border-radius: 50%; background: #444; }
    .pd-card-mac span:nth-child(1) { background: #ff5f56; }
    .pd-card-mac span:nth-child(2) { background: #ffbd2e; }
    .pd-card-mac span:nth-child(3) { background: #27c93f; }
    .pd-card-body { flex: 1; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
    .pd-wireframe-block { height: 40px; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.1); }
    .pd-wireframe-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    
    @keyframes drift1 { 0%, 100% { transform: rotate(-3.5deg) translate(-10px, 6px) scale(0.96); } 50% { transform: rotate(-4.2deg) translate(-14px, 8px) scale(0.955); } }
    @keyframes drift2 { 0%, 100% { transform: rotate(2.8deg) translate(12px, 10px) scale(0.97); } 50% { transform: rotate(3.4deg) translate(16px, 12px) scale(0.965); } }
    .pd-ghost-1 { animation: drift1 7s ease-in-out infinite; }
    .pd-ghost-2 { animation: drift2 8s ease-in-out infinite; }

    @media screen and (max-width: 900px) { .pd-cap-row { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
\

<main class="main pm-page pd-redesign">

  <section class="sv-hero" id="hero">
    <div class="sv-hero__inner">
      <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span><p class="eyebrow__p">Performance Design &amp; CRO</p></div>
      <h1 class="sv-hero__title">Stop wasting clicks. Start <em class="text-glow" style="color:var(--sv-green);">scaling revenue.</em></h1>
      <p class="sv-hero__sub">Improve every campaign with Performance Creative rooted in creative testing roadmaps and performance-led design. We build experiences that remove friction and drive measurable outcomes.</p>
      <div class="sv-hero__actions">
        <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span">Book a Strategy Call</span></div>
          <div class="arrow">
             <div class="arrow__bg"></div>
             <div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M7 17L17 7" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M9 7H17V15" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div>
             <div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M7 17L17 7" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M9 7H17V15" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <section class="sv-section" id="capabilities">
    <div class="sv-section__header">
      <h2 class="sv-section__title">Your one-stop-shop for <em style="color:var(--sv-green);">Performance Design</em></h2>
      <p class="sv-section__sub">Forget piecing together freelancers. Our capabilities are entirely focused on what gets buyers to convert.</p>
    </div>
    
    <div class="pd-cap-row">
        <div class="pd-cap-list">
            <div class="pd-cap-item">
                <h3>Landing Page Design</h3>
                <svg class="pd-cap-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
            <div class="pd-cap-item">
                <h3>Conversion Rate Optimization (CRO)</h3>
                <svg class="pd-cap-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
            <div class="pd-cap-item">
                <h3>Ad Creatives &amp; Motion</h3>
                <svg class="pd-cap-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
            <div class="pd-cap-item">
                <h3>Email &amp; Newsletters</h3>
                <svg class="pd-cap-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
            <div class="pd-cap-item">
                <h3>Copywriting</h3>
                <svg class="pd-cap-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
            <div class="pd-cap-item">
                <h3>Creative Testing Roadmaps</h3>
                <svg class="pd-cap-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
        </div>
        
        <div class="pd-stage">
            <div class="pd-ghost pd-ghost-1"></div>
            <div class="pd-ghost pd-ghost-2"></div>
            <div class="pd-card">
                <div class="pd-card-header">
                    <div class="pd-card-mac"><span></span><span></span><span></span></div>
                    <div style="font-size:12px; color:rgba(255,255,255,0.4); font-weight:500;">landing-page-v4.fig</div>
                </div>
                <div class="pd-card-body">
                    <div class="pd-wireframe-block" style="height: 100px; background: rgba(62,255,104,0.05); border-color: rgba(62,255,104,0.3); display: flex; align-items:center; justify-content:center; color:#3eff68; font-weight:600;">Hero Banner</div>
                    <div class="pd-wireframe-grid">
                        <div class="pd-wireframe-block"></div>
                        <div class="pd-wireframe-block"></div>
                        <div class="pd-wireframe-block"></div>
                        <div class="pd-wireframe-block"></div>
                    </div>
                    <div class="pd-wireframe-block" style="height: 60px; margin-top: auto; display: flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.5); font-size: 0.8rem;">Footer Action</div>
                </div>
            </div>
        </div>
    </div>
  </section>

  <section class="sv-section sv-section--alt">
    <div class="sv-section__header">
      <h2 class="sv-section__title">Why great brands need a <em style="color:var(--sv-green);">CRO Agency</em></h2>
      <p class="sv-section__sub">Stop guessing what your users want. We fix the leaks draining your marketing budget.</p>
    </div>
    
    <div class="sv-card-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
      <div class="sv-card">
        <div class="sv-card__icon"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
        <h3 class="sv-card__title">Sales Stagnation</h3>
        <p class="sv-card__desc">Your traffic is steady, but lead quality and sales volume remain flat. We rebuild flows to qualify better customers.</p>
      </div>
      <div class="sv-card">
        <div class="sv-card__icon"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
        <h3 class="sv-card__title">Drop-offs &amp; Abandonment</h3>
        <p class="sv-card__desc">Users exit right at the finish line. We engineer frictionless conversion points to capture intent instantly.</p>
      </div>
      <div class="sv-card">
        <div class="sv-card__icon"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
        <h3 class="sv-card__title">Inability to Scale Ads</h3>
        <p class="sv-card__desc">CPA spikes every time you increase budget. We fortify your destination landing pages so you can scale efficiently.</p>
      </div>
    </div>
  </section>

  <section class="sv-section" id="method">
    <div class="sv-section__header">
      <h2 class="sv-section__title">The Performance Creative <em style="color:var(--sv-green);">Engine.</em></h2>
      <p class="sv-section__sub">We build creative intentionally designed to drive measurable business outcomes, not just look good.</p>
    </div>
    
    <div class="pm-diff-grid">
      <div class="pm-diff-card">
        <p class="pm-diff-card__tag">Strategy First</p>
        <h3 class="pm-diff-card__title">Proactive testing roadmaps</h3>
        <p class="pm-diff-card__desc">Instead of treating landing pages and ad creatives as separate workstreams, we deploy them together via clear hypotheses and real performance data.</p>
      </div>
      <div class="pm-diff-card">
        <p class="pm-diff-card__tag">Shared Ownership</p>
        <h3 class="pm-diff-card__title">Strategists &amp; designers aligned</h3>
        <p class="pm-diff-card__desc">Our approach bridges the gap. We focus on understanding what is preventing conversion, and designing the experience that eliminates that exact friction.</p>
      </div>
      <div class="pm-diff-card">
        <p class="pm-diff-card__tag">Rapid Iteration</p>
        <h3 class="pm-diff-card__title">Fast, metric-driven feedback</h3>
        <p class="pm-diff-card__desc">We operate on rapid loops tied directly to your pipeline and ROAS. Every asset has a clear job, and gets measured against strict revenue thresholds.</p>
      </div>
    </div>
  </section>

  <section class="sv-section sv-section--alt">
    <div class="sv-section__header">
      <h2 class="sv-section__title">Our Step-By-Step Design <em style="color:var(--sv-green);">Process.</em></h2>
      <p class="sv-section__sub">How we turn qualitative insights into high-converting ecosystems.</p>
    </div>
    
    <div class="sv-steps">
      <div class="sv-step"><div class="sv-step__num">1</div><div class="sv-step__body"><h3>Research &amp; Audit</h3><p>We analyze your market, competitors, and consumer drop-off points to align our design concept with your ultimate business objectives.</p></div></div>
      <div class="sv-step"><div class="sv-step__num">2</div><div class="sv-step__body"><h3>Design Architecture</h3><p>We wireframe layouts prioritizing clarity, message hierarchy, and user intent before applying high-fidelity brand stylings.</p></div></div>
      <div class="sv-step"><div class="sv-step__num">3</div><div class="sv-step__body"><h3>Conversion Copywriting</h3><p>We craft bold, engaging copy that speaks directly to your ideal customer profile, replacing fluff with action-oriented value propositions.</p></div></div>
      <div class="sv-step"><div class="sv-step__num">4</div><div class="sv-step__body"><h3>Engineering &amp; QA</h3><p>Flawless implementation across breakpoints and browsers. We hunt for bugs so your customers never experience friction.</p></div></div>
      <div class="sv-step"><div class="sv-step__num">5</div><div class="sv-step__body"><h3>Launch &amp; Optimize</h3><p>We push your pages live, plug in tracking, and immediately begin monitoring performance data to inform our next A/B tests.</p></div></div>
    </div>
  </section>

  <section class="sv-section" id="faq">
    <div class="sv-section__header">
      <h2 class="sv-section__title">Frequently asked <em>questions.</em></h2>
    </div>
    <div class="pm-faq-list">
      <details class="pm-faq-item">
        <summary>Why are CRO services important for my company?</summary>
        <div class="pm-faq-item__body">Because driving traffic without optimizing your conversion rate is throwing money away. CRO ensures that every dollar spent on ads or SEO works harder by turning more of those existing visitors into qualified pipeline and revenue.</div>
      </details>
      <details class="pm-faq-item">
        <summary>How long does it take to see results?</summary>
        <div class="pm-faq-item__body">We launch initial improvements within 14-21 days of an engagement. From there, you will begin seeing quantifiable uplift in conversion metrics as our testing loops gather statistical significance.</div>
      </details>
      <details class="pm-faq-item">
        <summary>Do you provide A/B testing after launch?</summary>
        <div class="pm-faq-item__body">Yes. We never "set it and forget it." Our team continuously manages multivariate and A/B split testing to find compounding wins and push your baseline conversion rates higher every month.</div>
      </details>
      <details class="pm-faq-item">
        <summary>What makes your design different from typical agencies?</summary>
        <div class="pm-faq-item__body">We are a performance-first agency. We don't design just to make things look pretty; we design to overcome specific buyer objections and generate revenue. Our creative iterations are rooted purely in quantitative funnel data.</div>
      </details>
    </div>
  </section>

</main>
\
\\;

fs.writeFileSync('services/performance-design.html', newHtml);
