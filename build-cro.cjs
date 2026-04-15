const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const headerMatch = indexHtml.match(/(<header class="header">[\s\S]*?<\/header>)/);
const headerHtml = headerMatch ? headerMatch[1] : '';

let newHeaderHtml = headerHtml
  .replace(/href="\.\/index\.html"/g, 'href="../index.html"')
  .replace(/href="#/g, 'href="../index.html#')
  .replace(/href="services\//g, 'href="../services/')
  .replace(/href="resources\//g, 'href="../resources/')
  .replace(/href="about.html"/g, 'href="../about.html"')
  .replace(/href="cases.html"/g, 'href="../cases.html"')
  .replace(/href="careers.html"/g, 'href="../careers.html"')
  .replace(/href="contact.html"/g, 'href="../contact.html"')
  .replace(/href="tools.html"/g, 'href="../tools.html"')
  .replace(/src="brand-assets\//g, 'src="../brand-assets/');

const footerMatch = indexHtml.match(/(<footer[\s\S]*?<\/footer>)/);
let footerHtml = footerMatch ? footerMatch[1] : '';
footerHtml = footerHtml
  .replace(/href="services\//g, 'href="../services/')
  .replace(/href="resources\//g, 'href="../resources/')
  .replace(/href="about\.html"/g, 'href="../about.html"')
  .replace(/href="cases\.html"/g, 'href="../cases.html"')
  .replace(/href="careers\.html"/g, 'href="../careers.html"')
  .replace(/href="contact\.html"/g, 'href="../contact.html"')
  .replace(/href="tools\.html"/g, 'href="../tools.html"')
  .replace(/src="brand-assets\//g, 'src="../brand-assets/')
  .replace(/src="brand\//g, 'src="../brand/');

const pageHtml = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Performance Design & CRO — WeFlair</title>
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="../brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="../foundation-styles.css" />
  <link rel="stylesheet" href="../foundation-slater.css" />
  <link rel="stylesheet" href="../weflair-hero.css" />
  <script src="../foundation.js" defer></script>
  <script src="../weflair-hero.js" defer></script>
  
  <style>
    .pm-page { background: #151515; color: #f6f3ee; font-family: 'Inter', sans-serif; }
    
    /* 1. HERO */
    .pd-hero-sec { position: relative; padding: clamp(10rem, 16vw, 15rem) 2rem clamp(6rem, 10vw, 8rem); text-align: center; overflow: hidden; display: flex; flex-direction: column; align-items: center; border-bottom: 1px solid rgba(246,243,238,0.06); }
    .pd-hero-sec::before { content: ""; position: absolute; top: -10%; left: 50%; transform: translateX(-50%); width: 70vw; height: 70vw; background: radial-gradient(circle, rgba(62,255,104,0.1) 0%, transparent 60%); pointer-events: none; z-index: 0; }
    .pd-hero__inner { position: relative; z-index: 1; max-width: 68rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .pd-hero-sec .eyebrow { margin-bottom: 1.5rem; justify-content: center; }
    .pd-hero__title { font-size: clamp(3.2rem, 5.5vw, 5rem); line-height: 1.05; font-weight: 700; letter-spacing: -0.06em; margin: 0 0 1.8rem; text-wrap: balance; font-family: 'Space Grotesk', sans-serif;}
    .pd-hero__sub { font-size: clamp(1.15rem, 1.4vw, 1.3rem); line-height: 1.5; color: rgba(246,243,238,0.7); max-width: 48rem; margin: 0 auto 3rem; text-wrap: balance; }
    
    .pd-hero-visual { position:absolute; bottom: -5%; right: -5%; width:500px; height:auto; opacity:0.1; transform:rotate(-15deg); z-index:0; pointer-events:none;}

    /* 2. BLEED CALLOUT */
    .pd-bleed-sec { padding: clamp(4rem, 8vw, 8rem) 2rem; background: #0a0b0a;}
    .weflair-bleed-box { max-width:64rem; margin:0 auto; background:linear-gradient(135deg, rgba(20,24,20,1) 0%, rgba(13,17,13,1) 100%); border:1px solid rgba(255,62,62,0.3); border-radius:1.5rem; padding:4rem; box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(255,62,62,0.05); position:relative; overflow:hidden;}
    .weflair-bleed-box::after { content:""; position:absolute; left:0; top:0; width:50%; height:100%; background:radial-gradient(circle at left, rgba(255,62,62,0.1) 0%, transparent 80%); pointer-events:none;}
    .weflair-bleed-box h2 { font-size:clamp(2rem, 3vw, 2.5rem); color:#f6f3ee; font-family: 'Space Grotesk', sans-serif; margin-bottom:1.5rem;}
    .weflair-bleed-box p { font-size: 1.1rem; line-height:1.6; color: rgba(246,243,238,0.8); margin-bottom: 0;}
    @media(max-width:768px) { .weflair-bleed-box { padding:2rem; } }

    /* 3. ARCHITECTURE BLUEPRINT GRID */
    .pd-blueprint-sec { padding: clamp(6rem, 10vw, 10rem) 2rem; background: #0e100e; border-top: 1px solid rgba(246,243,238,0.06); }
    .pd-blueprint-head { text-align: center; margin-bottom: 4rem; max-width: 48rem; margin-inline: auto; }
    .pd-blueprint-head h2 { font-size: clamp(2.5rem, 4vw, 3.4rem); font-family: 'Space Grotesk', sans-serif; margin-bottom:1.5rem;}
    .pd-blueprint-grid { max-width:76rem; margin:0 auto; display:grid; grid-template-columns:repeat(2, 1fr); gap:1.5rem; }
    @media(max-width:768px) { .pd-blueprint-grid { grid-template-columns:1fr; } }
    .pd-blueprint-card { background:rgba(17,17,17,0.8); border:1px solid rgba(246,243,238,0.08); border-radius:1rem; padding:3rem; transition:all 0.3s ease; display:flex; flex-direction:column; position:relative; overflow:hidden;}
    .pd-blueprint-card::before { content:""; position:absolute; inset:0; background-image: linear-gradient(rgba(62,255,104,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(62,255,104,0.03) 1px, transparent 1px); background-size: 20px 20px; z-index:0;}
    .pd-blueprint-card:hover { border-color:rgba(62,255,104,0.3); transform:translateY(-3px);}
    .pd-blueprint-card svg { width:2.5rem; height:2.5rem; color:#3eff68; margin-bottom:1.5rem; position:relative; z-index:1;}
    .pd-blueprint-card h3 { font-size:1.4rem; font-weight:700; color:#f6f3ee; margin-bottom:1rem; font-family: 'Space Grotesk', sans-serif; position:relative; z-index:1;}
    .pd-blueprint-card p { font-size:1rem; color:rgba(246,243,238,0.6); line-height:1.6; margin:0; position:relative; z-index:1;}

    /* 4. TRANSFORMATION SPLIT */
    .pd-transform-sec { padding: clamp(6rem, 10vw, 10rem) 2rem; border-top: 1px solid rgba(246,243,238,0.06); }
    .pd-transform-inner { max-width: 68rem; margin: 0 auto; }
    .pd-transform-head { text-align:center; margin-bottom: 4rem; }
    .pd-transform-head h2 { font-size: clamp(2.5rem, 4vw, 3.4rem); font-family: 'Space Grotesk', sans-serif; }
    .pd-transform-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    @media(max-width:768px) { .pd-transform-grid { grid-template-columns: 1fr; } }
    .transform-col { border-radius: 1.5rem; padding: 3rem; border: 1px solid; }
    .transform-col--bad { background: rgba(255,62,62,0.02); border-color: rgba(255,62,62,0.1); }
    .transform-col--good { background: rgba(62,255,104,0.02); border-color: rgba(62,255,104,0.2); box-shadow: 0 0 40px rgba(62,255,104,0.03); }
    .transform-col h3 { font-size:1.5rem; font-family: 'Space Grotesk', sans-serif; margin-bottom:2rem; display:flex; align-items:center; gap:0.75rem;}
    .transform-list { list-style:none; padding:0; margin:0; }
    .transform-list li { display:flex; align-items:flex-start; gap:1rem; margin-bottom:1.25rem; font-size:1.05rem; color:rgba(246,243,238,0.7); line-height:1.5;}
    .transform-col--bad .transform-list li svg { color: #ff3e3e; margin-top:0.15rem; flex-shrink:0; width:1.2rem; height:1.2rem;}
    .transform-col--good .transform-list li svg { color: #3eff68; margin-top:0.15rem; flex-shrink:0; width:1.2rem; height:1.2rem;}
    .transform-col--good h3 { color: #3eff68; }
    .transform-col--bad h3 { color: #ff3e3e; }


    /* 5. EXECUTION PIPELINE */
    .pd-pipeline-sec { padding: clamp(6rem, 10vw, 10rem) 2rem; background: #0a0b0a; border-top: 1px solid rgba(246,243,238,0.06); }
    .pd-pipeline-inner { max-width:64rem; margin:0 auto; }
    .pd-pipeline-inner h2 { font-size: clamp(2.5rem, 4vw, 3.4rem); font-family: 'Space Grotesk', sans-serif; margin-bottom:3rem; text-align:center;}
    .wa-steps { display: flex; flex-direction: column; gap: 1rem; }
    .wa-step { background: rgba(25,25,25,0.6); border: 1px solid rgba(246,243,238,0.08); padding: 2rem; border-radius: 1.25rem; display: flex; gap: 1.5rem; align-items:flex-start; transition: all 0.3s ease; position:relative; overflow:hidden;}
    .wa-step::before { content:""; position:absolute; inset:0; background: radial-gradient(circle at left, rgba(62,255,104,0.1), transparent 50%); opacity:0; transition:opacity 0.4s ease;}
    .wa-step:hover { border-color: rgba(62,255,104,0.3); transform:translateX(5px); }
    .wa-step:hover::before { opacity:1; }
    .wa-step__num { color: #3eff68; font-size: 1.5rem; font-weight: 700; font-family: 'Space Grotesk', sans-serif; position:relative; z-index:1; padding-top:0.1rem;}
    .wa-step__content { position:relative; z-index:1; }
    .wa-step__content h3 { font-size: 1.3rem; color: #f6f3ee; font-weight: 700; margin-bottom: 0.5rem; }
    .wa-step__content p { font-size: 1rem; color: rgba(246,243,238,0.6); line-height: 1.5; margin: 0; }

    /* 6. PRICING */
    .pm-pricing { padding: clamp(6rem, 10vw, 10rem) 2rem; border-top: 1px solid rgba(246,243,238,0.06); background:#0e100e;}
    .pm-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 72rem; margin: 0 auto; }
    @media(max-width:991px) { .pm-pricing-grid { grid-template-columns: 1fr; max-width: 32rem; } }
    .pm-tier { background: rgba(17,17,17,0.8); border: 1px solid rgba(246,243,238,0.08); border-radius: 1.5rem; padding: 3rem 2rem; display: flex; flex-direction: column; position: relative; overflow: hidden; }
    .pm-tier.is-popular { background: linear-gradient(180deg, rgba(24,30,24,0.9) 0%, rgba(17,17,17,0.9) 100%); border-color: rgba(62,255,104,0.25); transform: scale(1.02); z-index: 1; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
    .pm-tier.is-popular::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #3eff68; }
    .pm-tier__badge { position: absolute; top: 1.25rem; right: 1.5rem; background: rgba(62,255,104,0.1); color: #3eff68; font-size: 0.75rem; font-weight: 700; padding: 0.3rem 0.75rem; border-radius: 999px; border: 1px solid rgba(62,255,104,0.2); }
    .pm-tier__name { font-size: 1.5rem; font-weight: 700; color: #f6f3ee; margin: 0 0 0.5rem; font-family:'Space Grotesk', sans-serif;}
    .pm-tier__desc { font-size: 0.95rem; color: rgba(246,243,238,0.6); margin: 0 0 2rem; line-height: 1.5; min-height: 2.7rem; }
    .pm-tier__price { font-size: 1.75rem; font-weight: 700; color: #f6f3ee; letter-spacing: -0.04em; margin: 0 0 2rem; display: flex; align-items: baseline; gap: 0.5rem; }
    .pm-tier__features { list-style: none; padding: 0; margin: 0 0 2.5rem; flex-grow: 1; }
    .pm-tier__feature { display: flex; gap: 0.75rem; font-size: 0.95rem; color: rgba(246,243,238,0.8); line-height: 1.4; margin-bottom: 1rem; }
    .pm-tier__feature svg { width: 1.2rem; height: 1.2rem; color: #3eff68; flex: 0 0 auto; margin-top: 0.15rem; }

    /* 7. FAQ */
    .ro-faq-sec { padding: clamp(6rem, 10vw, 10rem) 2rem; max-width:48rem; margin:0 auto; background:#151515;}
    .ro-faq-sec h2 { font-size: clamp(2rem, 4vw, 2.8rem); font-family: 'Space Grotesk', sans-serif; margin-bottom:3rem; text-align:center;}
    .weflair-accordion { border-top:1px solid rgba(246,243,238,0.1); }
    .weflair-accordion-item { border-bottom:1px solid rgba(246,243,238,0.1); padding:1.5rem 0; cursor:pointer;}
    .weflair-accordion-header { display:flex; justify-content:space-between; align-items:center; font-weight:600; font-size:1.1rem; color:#f6f3ee;}
    .weflair-accordion-header svg { width:1.5rem; height:1.5rem; color:rgba(246,243,238,0.5); transition:transform 0.3s ease;}
    .weflair-accordion-item:hover .weflair-accordion-header svg { color:#3eff68; }
    .weflair-accordion-content { font-size:1rem; color:rgba(246,243,238,0.6); line-height:1.6; margin-top:1rem; display:none;}
  </style>
</head>
<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body pm-page" style="padding-top:var(--nav-bar-height,5rem)">
  <div class="noise is--small" style="z-index:9999; pointer-events:none;"></div>
  <div class="floating-elements-main"><div class="calc-header-padding-height"></div><div data-navigation-toggle="close" class="nav-fade"></div>
  ${newHeaderHtml}
  </div>

<main class="main">
  <!-- SECTION 1: Wake Up Call Hero -->
  <section class="pd-hero-sec">
    <svg class="pd-hero-visual" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="0.5" stroke-linecap="round"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"/></svg>
    <div class="pd-hero__inner">
      <div class="eyebrow" style="margin-bottom:1.5rem; justify-content:center;">
        <span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span>
        <p class="eyebrow__p">Performance Design & CRO</p>
      </div>
      <h1 class="pd-hero__title">Do not spend another dollar on ads until your <span style="color:#3eff68">funnel is fixed.</span></h1>
      <p class="pd-hero__sub">Your traffic is expensive. Sending it to a leaky bucket is burning cash. We design operator-grade landing pages and conversion architectures that squeeze maximum pipeline out of the traffic you already have.</p>
      <div style="margin-top:2rem;">
        <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span">Stop The Bleeding</span></div>
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION 2: The Bleed Callout -->
  <section class="pd-bleed-sec">
    <div class="weflair-bleed-box">
      <h2>A 1% lift in conversion rate halves your CAC. Why are you ignoring it?</h2>
      <p>Most founders obsess over getting cheaper clicks on LinkedIn or Google, while completely ignoring that 98% of their traffic leaves their site without converting. If you are paying $20 per click, a bad web design is the most expensive mistake in your entire business. Fixing your landing page architecture is the highest-leverage growth lever you have.</p>
    </div>
  </section>

  <!-- SECTION 3: Blueprint Grid (The Architectural Specs) -->
  <section class="pd-blueprint-sec">
    <div class="pd-blueprint-head">
      <div class="eyebrow" style="margin-bottom:1rem; justify-content:center;">Methodology</div>
      <h2>Conversion Architectures</h2>
      <p style="color:rgba(246,243,238,0.6); font-size:1.1rem; line-height:1.5;">We don't build generic brand brochures. We build mathematical systems designed strictly to extract email addresses and credit cards from anonymous traffic.</p>
    </div>
    <div class="pd-blueprint-grid">
      <div class="pd-blueprint-card">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        <h3>Landing Page Architecture</h3>
        <p>Built for single-intent conversion. We strip away global navigation, remove distractive outbound links, and force the user linearly down a psychological slope until they submit the form.</p>
      </div>
      <div class="pd-blueprint-card">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <h3>Friction Teardowns</h3>
        <p>We analyze heatmaps, scroll depth tracking, and user session recordings to find exactly which field, loading delay, or confusing headline is causing your buyers to abandon the process.</p>
      </div>
      <div class="pd-blueprint-card">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        <h3>Psychological UI/UX</h3>
        <p>We do not guess what looks good. We deploy proven cognitive models—loss aversion cues, social proof proximity, and action-oriented microcopy—directly into the UI flow.</p>
      </div>
      <div class="pd-blueprint-card">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        <h3>Continuous Testing Sprints</h3>
        <p>We launch multivariate tests via VWO or Google Optimize, pitting variations against a control mathematically until we reach absolute statistical significance on the winner.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 4: The Transformation Split -->
  <section class="pd-transform-sec">
    <div class="pd-transform-inner">
      <div class="pd-transform-head">
        <h2>The Paradigm Shift</h2>
      </div>
      <div class="pd-transform-grid">
        <div class="transform-col transform-col--bad">
          <h3><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Traditional Agency Brochure</h3>
          <ul class="transform-list">
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Generic, corporate "about us" copy.</li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> 12-field manual lead generation forms.</li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Sluggish WordPress templates built for looks.</li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Static pages that are never updated post-launch.</li>
          </ul>
        </div>
        <div class="transform-col transform-col--good">
          <h3><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> WeFlair Conversion Engine</h3>
          <ul class="transform-list">
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Ruthless, direct-response operator copywriting.</li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Frictionless, multi-step intent routing flows.</li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Sub-100ms edge network load speeds (Vercel).</li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Mathematical A/B testing continuous improvement.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 5: Execution Pipeline -->
  <section class="pd-pipeline-sec">
    <div class="pd-pipeline-inner">
      <h2>The Execution Pipeline</h2>
      <div class="wa-steps">
        <div class="wa-step">
          <div class="wa-step__num">01</div>
          <div class="wa-step__content">
            <h3>Heuristic Teardown</h3>
            <p>We break down your existing site against 40+ cognitive principles. We find the unclear messaging, the bad layouts, and the hidden technical debt killing conversion.</p>
          </div>
        </div>
        <div class="wa-step">
          <div class="wa-step__num">02</div>
          <div class="wa-step__content">
            <h3>Heatmap & Session Analysis</h3>
            <p>No guessing. We deploy Hotjar or Clarity to watch literal user session recordings to definitively prove where your buyers are abandoning the form.</p>
          </div>
        </div>
        <div class="wa-step">
          <div class="wa-step__num">03</div>
          <div class="wa-step__content">
            <h3>Wireframing & Copy Injection</h3>
            <p>Our operator-copywriters and UX leads construct a wireframe built entirely around a singular, massive value proposition, clustering social proof at the exact right moment.</p>
          </div>
        </div>
        <div class="wa-step">
          <div class="wa-step__num">04</div>
          <div class="wa-step__content">
            <h3>High-Fidelity Build & Split Test</h3>
            <p>We construct the asset using lightning-fast modern frameworks, deploy it against your baseline control, and measure the raw pipeline lift.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 6: Pricing ROI -->
  <section class="pm-pricing">
    <div class="weflair-section__head" style="align-items:center; text-align:center; margin-bottom:4rem;">
      <h2 style="font-size: clamp(2.5rem, 4vw, 3.4rem); font-family: 'Space Grotesk', sans-serif;">An investment that pays for itself.</h2>
      <p style="color:rgba(246,243,238,0.6); font-size:1.1rem; line-height:1.5;">When you double your conversion rate, you halve your CPA. These sprints are designed to generate immediate ROI.</p>
    </div>
    
    <div class="pm-pricing-grid">
      <div class="pm-tier">
        <h3 class="pm-tier__name">Page Sprint</h3>
        <p class="pm-tier__desc">For companies burning ad spend on a single low-converting landing page.</p>
        <div class="pm-tier__price">Custom</div>
        <ul class="pm-tier__features">
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg> 1 Deep-Researched Asset</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg> Copywriting & Wireframing</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg> UI/UX Design</li>
        </ul>
        <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--ghost">
          <div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Stop The Bleeding</span></div>
        </a>
      </div>
      
      <div class="pm-tier is-popular">
        <div class="pm-tier__badge">Fastest ROI</div>
        <h3 class="pm-tier__name">Funnel Optimizer</h3>
        <p class="pm-tier__desc">A complete teardown and rebuild of your primary demo/signup flow.</p>
        <div class="pm-tier__price">Custom</div>
        <ul class="pm-tier__features">
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg> Full Funnel Teardown</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg> Multi-step Form Injection</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg> A/B Testing Matrix Setup</li>
        </ul>
        <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
          <div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Optimize Funnel</span></div>
        </a>
      </div>
      
      <div class="pm-tier">
        <h3 class="pm-tier__name">Platform Overhaul</h3>
        <p class="pm-tier__desc">A full-scale migration and redesign of your entire web property.</p>
        <div class="pm-tier__price">Custom</div>
        <ul class="pm-tier__features">
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg> Site-Wide CRO Mapping</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg> Positioning Overhaul</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg> Sub-100ms Architecture</li>
        </ul>
        <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--ghost">
          <div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Discuss Project</span></div>
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION 7: FAQ -->
  <section class="ro-faq-sec">
    <h2>Aggressive execution. Zero fluff.</h2>
    <div class="weflair-accordion">
      <div class="weflair-accordion-item" onclick="this.querySelector('.weflair-accordion-content').style.display = this.querySelector('.weflair-accordion-content').style.display === 'block' ? 'none' : 'block';">
        <div class="weflair-accordion-header">
          How is this different from hiring a web designer? <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <div class="weflair-accordion-content">
          Web designers make things look pretty. We build mathematical systems designed strictly to extract email addresses and credit cards from visitors. We are growth operators, which means we care about lowering your CAC and driving pipeline, not just winning graphic design awards.
        </div>
      </div>
      <div class="weflair-accordion-item" onclick="this.querySelector('.weflair-accordion-content').style.display = this.querySelector('.weflair-accordion-content').style.display === 'block' ? 'none' : 'block';">
        <div class="weflair-accordion-header">
          We process minimal traffic. Is CRO worth it? <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <div class="weflair-accordion-content">
          If you have low traffic, massive A/B tests won't reach statistical significance fast enough. However, a heuristic teardown and basic UI/UX restructuring is absolutely mandatory before you start paying to push large-scale traffic. A leaky bucket kills scale.
        </div>
      </div>
      <div class="weflair-accordion-item" onclick="this.querySelector('.weflair-accordion-content').style.display = this.querySelector('.weflair-accordion-content').style.display === 'block' ? 'none' : 'block';">
        <div class="weflair-accordion-header">
          Do you handle the copywriting too? <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <div class="weflair-accordion-content">
          Yes. Design without persuasive copy is just a wireframe. We handle the direct-response copywriting, ensuring the narrative aligns perfectly with the psychological triggers in the UI.
        </div>
      </div>
    </div>
  </section>

</main>

${footerHtml}
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'services', 'cro-performance-design.html'), pageHtml);
console.log('Successfully built services/cro-performance-design.html with custom conversion architecture.');
