const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const headerMatch = indexHtml.match(/(<header class="header">[\s\S]*?<\/header>)/);
let newHeaderHtml = headerMatch ? headerMatch[1] : '';
newHeaderHtml = newHeaderHtml
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

const footerMatch = indexHtml.match(/(<footer[\s\S]*?<\/footer>)|(<section class="footer weflair-footer">[\s\S]*?<\/section>)/);
let footerHtml = footerMatch ? footerMatch[0] : '';
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
  <title>Content & SEO — WeFlair</title>
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

    /* 2. BLEED CALLOUT */
    .pd-bleed-sec { padding: clamp(4rem, 8vw, 8rem) 2rem; background: #0a0b0a;}
    .weflair-bleed-box { max-width:64rem; margin:0 auto; background:linear-gradient(135deg, rgba(20,24,20,1) 0%, rgba(13,17,13,1) 100%); border:1px solid rgba(255,62,62,0.3); border-radius:1.5rem; padding:4rem; box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(255,62,62,0.05); position:relative; overflow:hidden;}
    .weflair-bleed-box::after { content:""; position:absolute; left:0; top:0; width:50%; height:100%; background:radial-gradient(circle at left, rgba(255,62,62,0.1) 0%, transparent 80%); pointer-events:none;}
    .weflair-bleed-box h2 { font-size:clamp(2rem, 3vw, 2.5rem); color:#f6f3ee; font-family: 'Space Grotesk', sans-serif; margin-bottom:1.5rem;}
    .weflair-bleed-box p { font-size: 1.1rem; line-height:1.6; color: rgba(246,243,238,0.8); margin-bottom: 0;}

    /* 3. TRANSFORMATION SPLIT */
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

  </style>
</head>
<body data-weflair-static="true" data-theme="dark" class="body pm-page" style="padding-top:var(--nav-bar-height,5rem)">
  <div class="noise is--small" style="z-index:9999; pointer-events:none;"></div>
  ${newHeaderHtml}
<main class="main">
  <section class="pd-hero-sec">
    <div class="pd-hero__inner">
      <div class="eyebrow" style="margin-bottom:1.5rem; justify-content:center;">
        <span class="weflair-eyebrow-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg></span>
        <p class="eyebrow__p">AI SEO & Programmatic</p>
      </div>
      <h1 class="pd-hero__title">Dominate AI Overviews & <span style="color:#3eff68">Search Engines.</span></h1>
      <p class="pd-hero__sub">Traditional keyword stuffing is dead. We construct massive programmatic architectures and optimize for the LLM era so that Perplexity, ChatGPT, and Google explicitly recommend you over competitors.</p>
      <div style="margin-top:2rem;">
        <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span">Audit My Technical SEO</span></div>
        </a>
      </div>
    </div>
  </section>

  <section class="pd-bleed-sec">
    <div class="weflair-bleed-box">
      <h2>ChatGPT is stealing your Google Traffic.</h2>
      <p>If your semantic structure and entity modeling isn't built to be processed by LLMs, you are going to disappear in the next 18 months. We engineer complex programmatic hubs ensuring your brand gets mathematically cited every time a buyer asks an AI for a recommendation.</p>
    </div>
  </section>

  <section class="pd-transform-sec">
    <div class="pd-transform-inner">
      <div class="pd-transform-head">
        <h2>The Search Paradigm Shift</h2>
      </div>
      <div class="pd-transform-grid">
        <div class="transform-col transform-col--bad">
          <h3><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Legacy SEO</h3>
          <ul class="transform-list">
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Basic blog posts nobody reads.</li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Spammy backlink buying and link farms.</li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Keyword density optimization alone.</li>
          </ul>
        </div>
        <div class="transform-col transform-col--good">
          <h3><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> WeFlair Semantic Architecture</h3>
          <ul class="transform-list">
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Programmatic SEO for 1000s of scalable pages.</li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Generative Engine Optimization (GEO) specifically for ChatGPT.</li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Deep technical structured data and schema markup.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</main>
${footerHtml}
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'services', 'content-seo.html'), pageHtml);
console.log('Successfully built services/content-seo.html');
