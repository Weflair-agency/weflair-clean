const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'about.html');
let html = fs.readFileSync(aboutPath, 'utf8');

const newContent = `
  <style>
    .pm-page { background: #151515; color: #f6f3ee; font-family: 'Inter', sans-serif; }
    
    .wa-hero {
      position: relative; padding: clamp(8rem, 14vw, 15rem) 2rem clamp(6rem, 10vw, 8rem);
      text-align: center; overflow: hidden; display: flex; flex-direction: column; align-items: center; border-bottom: 1px solid rgba(246,243,238,0.06);
    }
    .wa-hero::before { content: ""; position: absolute; top: -20%; left: 50%; transform: translateX(-50%); width: 70vw; height: 70vw; background: radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 60%); pointer-events: none; z-index: 0; }
    .wa-hero__inner { position: relative; z-index: 1; max-width: 64rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .wa-hero__title { font-size: clamp(3rem, 5vw, 5.2rem); line-height: 0.95; font-weight: 700; letter-spacing: -0.06em; margin: 0 0 1.8rem; text-wrap: balance; }
    .wa-hero__sub { font-size: clamp(1.1rem, 1.4vw, 1.3rem); line-height: 1.5; color: rgba(246,243,238,0.7); max-width: 48rem; margin: 0 auto 3rem; text-wrap: balance; }
    
    .pm-stats-ribbon { position: relative; z-index: 2; margin-top: -3.5rem; max-width: 64rem; width: 100%; margin-left: auto; margin-right: auto; background: rgba(17,17,17,0.95); border: 1px solid rgba(129,140,248,0.2); border-radius: 1.25rem; padding: 3rem 2rem; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 2rem; box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(129,140,248,0.05); backdrop-filter: blur(12px); }
    .wa-stat { text-align: center; }
    .wa-stat h4 { font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 700; color: #818cf8; margin: 0 0 0.5rem; letter-spacing: -0.04em; }
    .wa-stat p { font-size: 0.95rem; font-weight: 600; color: rgba(246,243,238,0.8); margin: 0; text-transform: uppercase; letter-spacing: 0.05em; }

    .wa-story-section { padding: clamp(6rem, 10vw, 10rem) 2rem; position:relative; overflow:hidden;}
    .wa-story-section::before { content: ""; position: absolute; top: 0%; left: 0%; width: 50vw; height: 50vw; background: radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 60%); pointer-events: none; z-index: 0; }
    .wa-story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem, 6vw, 6rem); max-width: 76rem; margin: 0 auto; align-items: stretch; position:relative; z-index:1;}
    @media(max-width:991px) { .wa-story-grid { grid-template-columns: 1fr; } }
    
    .wa-story-img-wrap { position: relative; border-radius: 1.5rem; overflow: hidden; height: 100%; min-height: 500px; border: 1px solid rgba(246,243,238,0.1); background: #0a0b0a; display: flex; align-items:flex-end; padding:2rem;}
    .wa-story-img-wrap::before { content:""; position: absolute; inset:0; background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8) 100%); z-index:1;}
    .wa-story-img-wrap img { position:absolute; top:0; left:0; width: 100%; height: 100%; object-fit: cover; opacity:0.6; filter: grayscale(100%) contrast(1.2); mix-blend-mode: luminosity;}
    
    .wa-story-badge { position: relative; z-index:2; background: rgba(21,21,21,0.8); backdrop-filter: blur(10px); padding: 1.5rem; border-radius: 1rem; border: 1px solid rgba(246,243,238,0.1); width:100%;}
    .wa-story-badge h4 {margin:0 0 0.25rem; font-size: 1.3rem; font-weight: 700; color:#f6f3ee;}
    .wa-story-badge p {margin:0; font-size: 0.9rem; color:#818cf8; text-transform:uppercase; font-weight:700; letter-spacing:0.05em;}
    
    .wa-story-text { display:flex; flex-direction:column; justify-content:center;}
    .wa-story-text h2 { font-size: clamp(2.2rem, 4vw, 3rem); font-weight: 700; color: #f6f3ee; margin-bottom: 2rem; letter-spacing: -0.04em; line-height: 1.1; }
    .wa-story-text p { font-size: 1.15rem; line-height: 1.6; color: rgba(246,243,238,0.7); margin-bottom: 1.5rem; }
    .wa-story-quote { margin: 2rem 0; padding: 2rem; border-left: 2px solid #818cf8; background: linear-gradient(90deg, rgba(129,140,248,0.05) 0%, transparent 100%); font-size: 1.25rem; line-height: 1.5; font-style: italic; color: #f6f3ee; }

    .wa-target-section { padding: clamp(5rem, 8vw, 8rem) 2rem; background: linear-gradient(180deg, #0e100e 0%, #151515 100%); border-top: 1px solid rgba(246,243,238,0.05); text-align: center; }
    .wa-target-inner { max-width: 64rem; margin: 0 auto; }
    .wa-target-inner h2 { font-size: clamp(2.2rem, 3.5vw, 3rem); font-weight: 700; color: #f6f3ee; letter-spacing: -0.04em; line-height: 1.2; margin-bottom: 1.5rem; text-wrap: balance;}
    .wa-target-inner p { font-size: 1.2rem; line-height: 1.6; color: rgba(246,243,238,0.6); margin: 0 auto; }
    
    .wa-values-section { padding: clamp(6rem, 10vw, 10rem) 2rem; border-top: 1px solid rgba(246,243,238,0.05); position:relative; overflow:hidden;}
    .wa-values-section::before {content:""; position:absolute; top:0; left:50%; transform:translateX(-50%); width:60vw; height:60vw; background: radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 60%); z-index:0; pointer-events:none;}
    .wa-values-head { text-align: center; margin-bottom: 5rem; max-width: 48rem; margin-inline: auto; position:relative; z-index:1;}
    .wa-values-head h2 { font-size: clamp(2.5rem, 4vw, 3.2rem); font-weight: 700; letter-spacing: -0.04em; margin-bottom: 1rem; }
    .wa-values-head p { font-size: 1.15rem; color: rgba(246,243,238,0.6); }
    
    .wa-values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; max-width: 76rem; margin: 0 auto; position:relative; z-index:1;}
    @media(max-width:1100px) { .wa-values-grid { grid-template-columns: repeat(2, 1fr); } }
    @media(max-width:550px) { .wa-values-grid { grid-template-columns: 1fr; } }
    .wa-value-card { background: rgba(20,22,20,0.6); border: 1px solid rgba(246,243,238,0.08); border-radius: 1.25rem; padding: 2.5rem 2rem; text-align: center; transition: all 0.4s ease; position: relative; overflow: hidden; }
    .wa-value-card::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at top, rgba(129,140,248,0.05), transparent 70%); opacity: 0; transition: opacity 0.4s ease; }
    .wa-value-card:hover { border-color: rgba(129,140,248,0.3); transform: translateY(-4px); background: #151515; }
    .wa-value-card:hover::before { opacity: 1; }
    .wa-value-icon { width: 4rem; height: 4rem; border-radius: 1rem; background: rgba(129,140,248,0.08); color: #818cf8; display: grid; place-items: center; margin: 0 auto 1.5rem; position: relative; z-index: 1; border: 1px solid rgba(129,140,248,0.15); }
    .wa-value-card h3 { font-size: 1.3rem; color: #f6f3ee; font-weight: 700; margin-bottom: 0.75rem; position: relative; z-index: 1; letter-spacing:-0.02em;}
    .wa-value-card p { font-size: 0.95rem; color: rgba(246,243,238,0.6); line-height: 1.5; margin: 0; position: relative; z-index: 1; }

    .wa-method-section { padding: clamp(6rem, 10vw, 8rem) 2rem; background: #0a0b0a; border-top: 1px solid rgba(246,243,238,0.06); }
    .wa-method-head { text-align: center; margin-bottom: 5rem; max-width:48rem; margin-inline: auto; }
    .wa-method-head h2 { font-size: clamp(2.5rem, 4vw, 3.2rem); font-weight: 700; letter-spacing: -0.04em; margin-bottom:1rem; }
    .wa-method-head p { font-size: 1.15rem; color: rgba(246,243,238,0.6); }
    .wa-method-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; max-width: 76rem; margin: 0 auto; counter-reset: method-counter; }
    .wa-method-card { padding: 0 1.5rem 1.5rem 2rem; border-left: 1px solid rgba(246,243,238,0.1); position: relative; display: flex; flex-direction: column; }
    .wa-method-card::before { counter-increment: method-counter; content: "0" counter(method-counter); position: absolute; left: -1.2rem; top: 0; background: #0a0b0a; border: 1px solid rgba(246,243,238,0.2); border-radius: 50%; width: 2.4rem; height: 2.4rem; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 700; color: #f6f3ee; transition: all 0.3s ease; }
    .wa-method-card:hover::before { border-color: #818cf8; color: #818cf8; box-shadow: 0 0 15px rgba(129,140,248,0.2); }
    .wa-method-card h3 { font-size: 1.4rem; color: #f6f3ee; font-weight: 700; margin-bottom: 1rem; margin-top: 0.2rem; letter-spacing:-0.02em; }
    .wa-method-card p { font-size: 0.95rem; color: rgba(246,243,238,0.65); line-height: 1.6; }
    @media(max-width:991px){ .wa-method-grid{grid-template-columns:repeat(2,1fr); gap:3rem; padding-left: 1.5rem;} }
    @media(max-width:550px){ .wa-method-grid{grid-template-columns:1fr; gap:3rem; padding-left: 1.5rem;} .wa-method-card{border-left: none; padding: 0 0 0 2rem;} .wa-method-card::before{left: -1.5rem;} }

    .wa-results-section { padding: clamp(5rem, 8vw, 8rem) 2rem; border-top: 1px solid rgba(246,243,238,0.06); display:flex; justify-content:center;}
    .wa-results-box { background: linear-gradient(135deg, rgba(20,22,20,0.8), rgba(11,12,11,0.9)); border: 1px solid rgba(129,140,248,0.15); border-radius: 1.5rem; padding: 4rem 2rem; max-width: 64rem; width:100%; text-align:center;}
    .wa-results-box h2 { font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 700; color: #f6f3ee; margin-bottom: 1.5rem; letter-spacing: -0.04em; }
    .wa-results-box p { font-size: 1.15rem; line-height: 1.6; color: rgba(246,243,238,0.6); max-width: 48rem; margin: 0 auto; }

    .wa-cta-section { padding: clamp(6rem, 10vw, 10rem) 2rem; background: #0a0b0a; border-top: 1px solid rgba(246,243,238,0.06); text-align: center; position:relative; overflow:hidden;}
    .wa-cta-section::before { content: ""; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) translateY(50%); width: 80vw; height: 80vw; background: radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 60%); pointer-events: none; z-index: 0; }
    .wa-cta-inner { max-width: 42rem; margin: 0 auto; position:relative; z-index:1;}
    .wa-cta-inner h2 { font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 700; margin-bottom: 1.5rem; letter-spacing: -0.04em; }
    .wa-cta-inner p { font-size: 1.15rem; color: rgba(246,243,238,0.6); margin-bottom: 2.5rem; line-height: 1.5; }
    .wa-cta-inner .btn { min-width: 16rem; justify-content: center; }
  </style>

  <div class="weflair-about-content">
    <section class="wa-hero">
      <div class="wa-hero__inner">
        <div class="eyebrow" style="margin-bottom:1.5rem; justify-content: center;">
          <span class="weflair-eyebrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path></svg>
          </span>
          <p class="eyebrow__p">The Founders' Growth Partner</p>
        </div>
        <h1 class="wa-hero__title">We are the strategists behind the <span style="color:#818cf8;">fastest-growing</span> brands in B2B.</h1>
        <p class="wa-hero__sub">Since 2021, WeFlair has been the quiet force enabling ambitious B2B founders to scale from early traction to category leadership. We build end-to-end marketing engines that turn raw attention into predictable, scalable pipeline.</p>
      </div>
    </section>

    <div class="pm-stats-ribbon">
      <div class="wa-stat">
        <h4>1,000</h4>
        <p>Leaders Empowered</p>
      </div>
      <div class="wa-stat">
        <h4>$100M+</h4>
        <p>Pipeline Influenced</p>
      </div>
      <div class="wa-stat">
        <h4>90</h4>
        <p>Days to Impact</p>
      </div>
    </div>

    <section class="wa-story-section">
      <div class="wa-story-grid">
        <div class="wa-story-img-wrap">
          <img src="/brand-assets/office.png" alt="WeFlair Growth Operations" />
          <div class="wa-story-badge">
            <h4>Sami Mahdi</h4>
            <p>CEO &amp; Founder</p>
          </div>
        </div>
        <div class="wa-story-text">
          <div class="eyebrow" style="margin-bottom:1.5rem;">
            <p class="eyebrow__p">A True Win-Win-Win Partnership</p>
          </div>
          <h2>The gap between strategy and execution is where growth dies.</h2>
          <p>When I founded WeFlair in 2021, I saw too many brilliant B2B companies missing their growth targets. It wasn't because their product failed or the market wasn't there. It was because their marketing systems were fragmented, disjointed, and lacked accountability.</p>
          <p>Most agencies sell you an expensive strategy deck and then task an entry-level associate to run it. They wait for you to tell them exactly what to execute, acting as incredibly expensive order-takers. That simply doesn't work for modern B2B growth.</p>
          <div class="wa-story-quote">
            "The difference isn't just who does the work. It's the accountability behind it. We tie everything we do to a business outcome, not vanity metrics."
          </div>
          <p>We built WeFlair to be something completely different. We align your vision, strategy, teams, and execution under one cohesive engine. We are your strategists, your operators, and your growth engineers.</p>
        </div>
      </div>
    </section>

    <section class="wa-target-section">
      <div class="wa-target-inner">
        <h2>Our 10-Year Target: Empower 1,000 Marketing Leaders</h2>
        <p>We're on a mission to empower people and ambitious B2B brands to realize and live their potential. By building hyper-relevant marketing engines, we ensure every touchpoint is a chance to earn trust and win the deal.</p>
      </div>
    </section>

    <section class="wa-values-section">
      <div class="wa-values-head">
        <h2>Our Philosophies</h2>
        <p>The operational principles that guide our partnerships and our work.</p>
      </div>
      <div class="wa-values-grid">
        <div class="wa-value-card">
          <div class="wa-value-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </div>
          <h3>Authenticity Wins</h3>
          <p>In a landscape filled with noise, genuine connection cuts through. We build brands and campaigns that speak truth to your ICP, earning trust before asking for the sale.</p>
        </div>
        <div class="wa-value-card">
          <div class="wa-value-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h3>Radical Ownership</h3>
          <p>We measure success in qualified pipeline and closed revenue, not impressions. If it doesn't eventually tie to money, we adapt the strategy. No excuses.</p>
        </div>
        <div class="wa-value-card">
          <div class="wa-value-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
          <h3>Speed to Impact</h3>
          <p>Endless planning cycles kill momentum. We prioritize rapid execution, iterative testing, and getting systems live to gather real market data and optimize fast.</p>
        </div>
        <div class="wa-value-card">
          <div class="wa-value-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          </div>
          <h3>Systems That Scale</h3>
          <p>We don't just run siloed ads; we engineer the tracking, the routing, and the operational infrastructure that makes compounding growth sustainable.</p>
        </div>
      </div>
    </section>

    <section class="wa-method-section">
      <div class="wa-method-head">
        <h2>How We Help You Win</h2>
        <p>The core methodology behind our growth engines.</p>
      </div>
      <div class="wa-method-grid">
        <div class="wa-method-card">
          <h3>Vision</h3>
          <p>We start by understanding where you want to go. We align your business goals with aggressive but achievable marketing targets.</p>
        </div>
        <div class="wa-method-card">
          <h3>Strategy</h3>
          <p>Before spending a dollar, we tear down your current setup and identify exactly where your funnel is leaking and where you're missing growth opportunities.</p>
        </div>
        <div class="wa-method-card">
          <h3>Execution</h3>
          <p>We deploy specialized operators based on your exact needs—scaling Paid Media, standing up Outbound infrastructure, or executing CRO without the bloat.</p>
        </div>
        <div class="wa-method-card">
          <h3>Team Alignment</h3>
          <p>We act as an extension of your company. You get an expert team of strategists and engineers working seamlessly with your brand's voice.</p>
        </div>
      </div>
    </section>
    
    <section class="wa-results-section">
      <div class="wa-results-box">
        <h2>Results-Based Relationships</h2>
        <p>We tie everything we do to a business outcome. Whether we are launching a new channel or rebuilding your revops stack, you get clear reporting, complete transparency, and a team that takes full accountability for the revenue generated.</p>
      </div>
    </section>

    <section class="wa-cta-section">
      <div class="wa-cta-inner">
        <h2>Ready to build a real growth engine?</h2>
        <p>Stop paying for disconnected tactics. Let's build the systems that put pipeline on the board.</p>
        <a data-hover="" data-btn-theme="primary" href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span">Request a Marketing Audit</span></div>
          <div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square"/></svg></div></div>
        </a>
      </div>
    </section>
  </div>
`;

// use a regular expression to match from <style> right after <div style="padding-top:var(--nav-bar-height,5rem)">
// until the closing </div> of weflair-about-content
const regex = /<style>[\s\S]*?<\/div>\s*<\/div>\s*<footer/m;
const replaced = html.replace(regex, newContent + '\n</div>\n<footer');

fs.writeFileSync(aboutPath, replaced, 'utf8');
console.log('Update complete.');
