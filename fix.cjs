const fs = require('fs');

// 1. Read Base Template
const baseHtml = fs.readFileSync('services/paid-media-performance.html', 'utf8');

// 2. Extract Head & Header
const headEnd = baseHtml.indexOf('<main class=\"main pm-page\">');
let topHtml = baseHtml.slice(0, headEnd);

// Replace Title & Meta
topHtml = topHtml.replace(/<title>Paid Media & Performance - WeFlair<\/title>/g, '<title>Performance Design & CRO - WeFlair</title>');
topHtml = topHtml.replace(/<meta name=\"description\" content=\"Data-backed ad campaigns across Google Ads, Meta, and LinkedIn.\" \/>/g, '<meta name=\"description\" content=\"Increase ROI and turn clicks into customers with Performance Creative engineered for impact.\" />');
topHtml = topHtml.replace(/href=\"https:\/\/weflair\.co\/services\/paid-media-performance\.html\"/g, 'href=\"https://weflair.co/services/performance-design.html\"');

// 3. Extract the bottom
const sharedSectionsStart = baseHtml.indexOf('<section class=\"pm-partners\" id=\"partners\">');
const bottomHtml = baseHtml.slice(sharedSectionsStart);

// 4. Inject
const customStyle = 
<style>
/* PD Custom Redesign */
.pd-redesign .pd-cap-row { display: grid; grid-template-columns: 1fr 1.2fr; gap: 6rem; align-items: center; max-width: 1200px; margin: 0 auto; }
.pd-redesign .pd-cap-list { display: flex; flex-direction: column; gap: 1rem; position: relative; z-index: 10;}
.pd-redesign .pd-cap-item { 
    padding: 1.5rem; 
    border: 1px solid rgba(255,255,255,0.08); 
    border-radius: 12px; 
    background: rgba(255,255,255,0.02); 
    cursor: pointer; 
    transition: all 0.3s ease; 
    display: flex; justify-content: space-between; align-items: center;
}
.pd-redesign .pd-cap-item:hover { 
    background: rgba(62,255,104,0.05); 
    border-color: rgba(62,255,104,0.3); 
}
.pd-redesign .pd-cap-item h3 { font-size: 1.25rem; font-weight: 600; margin: 0; color: #f6f3ee; transition: color 0.3s; }
.pd-redesign .pd-cap-item:hover h3 { color: #3eff68; }
.pd-redesign .pd-cap-icon { color: rgba(255,255,255,0.3); transition: color 0.3s, transform 0.3s; }
.pd-redesign .pd-cap-item:hover .pd-cap-icon { color: #3eff68; transform: translateX(5px); }

.pd-redesign .pd-stage { position: relative; width: 100%; max-width: 600px; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; margin: 0 auto; }
.pd-redesign .pd-ghost { position: absolute; inset: 10%; background: #0a0a0a; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; pointer-events: none; transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.4, 1); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.pd-redesign .pd-ghost-1 { transform: rotate(-3.5deg) translate(-10px, 6px) scale(0.96); z-index: 1; opacity: 0.55; }
.pd-redesign .pd-ghost-2 { transform: rotate(2.8deg) translate(12px, 10px) scale(0.97); z-index: 2; opacity: 0.75; }
.pd-redesign .pd-card { position: absolute; inset: 0; background: linear-gradient(145deg, #1f1f1f, #0a0a0a); border: 1px solid rgba(62,255,104,0.2); border-radius: 24px; z-index: 4; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.8); }
.pd-redesign .pd-card-header { padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.2); }
.pd-redesign .pd-card-mac { display: flex; gap: 8px; }
.pd-redesign .pd-card-mac span { width: 12px; height: 12px; border-radius: 50%; background: #444; }
.pd-redesign .pd-card-mac span:nth-child(1) { background: #ff5f56; }
.pd-redesign .pd-card-mac span:nth-child(2) { background: #ffbd2e; }
.pd-redesign .pd-card-mac span:nth-child(3) { background: #27c93f; }
.pd-redesign .pd-card-body { flex: 1; padding: 2rem; display: flex; flex-direction: column; gap: 1rem; }
.pd-redesign .pd-wireframe-block { height: 40px; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.1); }
.pd-redesign .pd-wireframe-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

@keyframes drift1 { 0%, 100% { transform: rotate(-3.5deg) translate(-10px, 6px) scale(0.96); } 50% { transform: rotate(-4.2deg) translate(-14px, 8px) scale(0.955); } }
@keyframes drift2 { 0%, 100% { transform: rotate(2.8deg) translate(12px, 10px) scale(0.97); } 50% { transform: rotate(3.4deg) translate(16px, 12px) scale(0.965); } }
.pd-redesign .pd-ghost-1 { animation: drift1 7s ease-in-out infinite; }
.pd-redesign .pd-ghost-2 { animation: drift2 8s ease-in-out infinite; }

@media screen and (max-width: 900px) { .pd-redesign .pd-cap-row { grid-template-columns: 1fr; gap: 2rem; } .pd-redesign .pd-stage { width: 80%; } }
</style>
</head>
;

topHtml = topHtml.replace('</head>', customStyle);

const injection = 
<main class="main pm-page pd-redesign">

  <!-- 1. HERO -->
  <section class="sv-hero" id="hero">
    <div class="sv-hero__inner">
      <div class="eyebrow"><span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span><p class="eyebrow__p" style="margin:0; padding:0;">Performance Design &amp; CRO</p></div>
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

  <!-- 2. CAPABILITIES -->
  <section class="sv-section" id="capabilities">
    <div class="sv-section__header">
      <h2 class="sv-section__title">Your one-stop-shop for <em style="color:var(--sv-green);">performance design</em></h2>
      <p class="sv-section__sub">Forget piecing together freelancers. Our capabilities are entirely focused on what gets buyers to convert.</p>
    </div>
    
    <div class="pd-cap-row pd-redesign">
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
                <h3>Copywriting &amp; Content</h3>
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
                    <div style="font-size:12px; color:rgba(255,255,255,0.4); font-weight:500; font-family:monospace;">checkout-flow-v4.fig</div>
                </div>
                <div class="pd-card-body">
                    <div class="pd-wireframe-block" style="height: 120px; background: rgba(62,255,104,0.05); border-color: rgba(62,255,104,0.3); display: flex; align-items:center; justify-content:center; color:#3eff68; font-weight:600;">Sales Banner &amp; Messaging</div>
                    <div class="pd-wireframe-grid">
                        <div class="pd-wireframe-block" style="height:80px;"></div>
                        <div class="pd-wireframe-block" style="height:80px;"></div>
                        <div class="pd-wireframe-block" style="height:80px;"></div>
                        <div class="pd-wireframe-block" style="height:80px;"></div>
                    </div>
                    <div class="pd-wireframe-block" style="height: 60px; margin-top: auto; display: flex; align-items:center; justify-content:center; color:white; background:#3eff68; border:none; font-weight:600; color:#0a0a0a;">Primary CTA Button</div>
                </div>
            </div>
        </div>
    </div>
  </section>

  <!-- 3. WHY BRANDS NEED CRO -->
  <section class="sv-section sv-section--alt">
    <div class="sv-section__header">
      <h2 class="sv-section__title">Why great tech brands need a <em style="color:var(--sv-green);">CRO agency</em></h2>
      <p class="sv-section__sub">Stop guessing what your users want. We fix the leaks draining your marketing budget.</p>
    </div>
    
    <div class="sv-card-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
      <div class="sv-card">
        <div class="sv-card__icon"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
        <h3 class="sv-card__title">Sales Stagnation</h3>
        <p class="sv-card__desc">Your traffic is steady, but lead quality and sales volume remain flat. We rebuild flows to qualify better customers faster.</p>
      </div>
      <div class="sv-card">
        <div class="sv-card__icon"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
        <h3 class="sv-card__title">Drop-offs &amp; Abandonment</h3>
        <p class="sv-card__desc">Users exit right at the finish line. We engineer frictionless conversion points to capture intent instantly and maximize returns.</p>
      </div>
      <div class="sv-card">
        <div class="sv-card__icon"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
        <h3 class="sv-card__title">Inability to Scale Ads</h3>
        <p class="sv-card__desc">CPA spikes every time you increase budget. We fortify your destination landing pages so you can scale efficiently without destroying ROAS.</p>
      </div>
    </div>
  </section>

  <!-- 4. METHODOLOGY -->
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

;

const finalHtml = topHtml + injection + bottomHtml;

fs.writeFileSync('services/performance-design.html', finalHtml);
console.log('Saved Performance Design.');
