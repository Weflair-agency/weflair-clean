const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

// Extract header
const headerMatch = indexHtml.match(/(<header class="header">[\s\S]*?<\/header>)/);
const headerHtml = headerMatch ? headerMatch[1] : '';

// Replace header links
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

// Extract footer
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

// Define boilerplate
const pageHtml = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Paid Media & Performance — WeFlair</title>
  <meta name="description" content="Eliminate wasted ad spend with high-performing paid media." />
  <meta property="og:title" content="Paid Media & Performance — WeFlair" />
  <meta property="og:description" content="Eliminate wasted ad spend with high-performing paid media." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Paid Media & Performance — WeFlair" />
  <meta name="theme-color" content="#151515" />
  <link rel="icon" href="../brand-assets/star-solid.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="../foundation-styles.css" />
  <link rel="stylesheet" href="../foundation-slater.css" />
  <link rel="stylesheet" href="../weflair-hero.css" />
  <script src="../foundation.js" defer></script>
  <script src="../weflair-hero.js" defer></script>
  
  <style>
    .pm-page { background: #151515; color: #f6f3ee; font-family: 'Inter', sans-serif; }
    
    .wa-page-hero {
      position: relative; padding: clamp(10rem, 16vw, 15rem) 2rem clamp(6rem, 10vw, 8rem);
      text-align: center; overflow: hidden; display: flex; flex-direction: column; align-items: center; border-bottom: 1px solid rgba(246,243,238,0.06);
    }
    .wa-page-hero::before { content: ""; position: absolute; top: -10%; left: 50%; transform: translateX(-50%); width: 70vw; height: 70vw; background: radial-gradient(circle, rgba(62,255,104,0.15) 0%, transparent 60%); pointer-events: none; z-index: 0; }
    .wa-page-hero__inner { position: relative; z-index: 1; max-width: 68rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .wa-page-hero .eyebrow { margin-bottom: 1.5rem; justify-content: center; }
    .wa-page-hero__title { font-size: clamp(3.5rem, 6vw, 5.2rem); line-height: 0.95; font-weight: 700; letter-spacing: -0.06em; margin: 0 0 1.8rem; text-wrap: balance; font-family: 'Space Grotesk', sans-serif;}
    .wa-page-hero__sub { font-size: clamp(1.1rem, 1.4vw, 1.3rem); line-height: 1.5; color: rgba(246,243,238,0.7); max-width: 48rem; margin: 0 auto 3rem; text-wrap: balance; }
    .wa-page-hero__actions { display: flex; gap: 1rem; justify-content: center; }
    
    .wa-stat-ribbon { position: relative; z-index: 2; margin-top: -3.5rem; max-width: 64rem; width: 100%; margin-left: auto; margin-right: auto; background: rgba(17,17,17,0.95); border: 1px solid rgba(62,255,104,0.2); border-radius: 1.25rem; padding: 3rem 2rem; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 2rem; box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(62,255,104,0.05); backdrop-filter: blur(12px); }
    .wa-stat { text-align: center; display: flex; flex-direction:column; align-items:center; justify-content:center;}
    .wa-stat h4 { font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 700; color: #3eff68; margin: 0 0 0.5rem; letter-spacing: -0.04em; display:flex; align-items: flex-start; line-height:1;}
    .wa-stat h4 span { font-size: 2rem; margin-top: 0.4rem; }
    .wa-stat p { font-size: 0.95rem; font-weight: 600; color: rgba(246,243,238,0.8); margin: 0; text-transform: uppercase; letter-spacing: 0.05em; max-width: 16rem; line-height: 1.4;}

    .wa-grid-section { padding: clamp(6rem, 10vw, 10rem) 2rem; border-bottom: 1px solid rgba(246,243,238,0.06); background:#0e100e;}
    .wa-section-head { text-align: center; margin-bottom: 5rem; max-width: 48rem; margin-inline: auto; }
    .wa-section-head h2 { font-size: clamp(2.5rem, 4vw, 3.2rem); font-weight: 700; letter-spacing: -0.04em; margin-bottom: 1rem; font-family: 'Space Grotesk', sans-serif;}
    .wa-section-head p { font-size: 1.15rem; color: rgba(246,243,238,0.6); }

    /* wa-steps replaced */
    .wa-feature-split { padding: clamp(6rem, 10vw, 10rem) 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem, 6vw, 6rem); max-width: 76rem; margin: 0 auto; align-items: center;}
    @media(max-width:991px) { .wa-feature-split { grid-template-columns: 1fr; } }
    .wa-feature-split__text { max-width: 32rem; }
    .wa-feature-split__text h2 { font-size: clamp(2.5rem, 4vw, 3.4rem); font-weight: 700; color: #f6f3ee; letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 1.5rem; font-family: 'Space Grotesk', sans-serif;}
    
    .wa-steps { display: flex; flex-direction: column; gap: 1rem; }
    .wa-step { background: rgba(25,25,25,0.6); border: 1px solid rgba(246,243,238,0.08); padding: 2rem; border-radius: 1.25rem; display: flex; gap: 1.5rem; align-items:flex-start; transition: all 0.3s ease; position:relative; overflow:hidden;}
    .wa-step::before { content:""; position:absolute; inset:0; background: radial-gradient(circle at left, rgba(62,255,104,0.1), transparent 50%); opacity:0; transition:opacity 0.4s ease;}
    .wa-step:hover { border-color: rgba(62,255,104,0.3); transform:translateX(5px); }
    .wa-step:hover::before { opacity:1; }
    .wa-step__num { color: #3eff68; font-size: 1.5rem; font-weight: 700; font-family: 'Space Grotesk', sans-serif; position:relative; z-index:1; padding-top:0.1rem;}
    .wa-step__content { position:relative; z-index:1; }
    .wa-step__content h3 { font-size: 1.2rem; color: #f6f3ee; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
    .wa-step__content p { font-size: 0.95rem; color: rgba(246,243,238,0.6); line-height: 1.5; margin: 0; }

    .weflair-crosslink-panel { margin: 4rem auto; max-width: 76rem; background: linear-gradient(90deg, rgba(20,24,20,1) 0%, rgba(13,17,13,1) 100%); border: 1px solid rgba(62,255,104,0.15); border-radius: 1.5rem; padding: 4rem 3rem; display: flex; justify-content: space-between; align-items: center; gap: 3rem; position:relative; overflow:hidden;}
    .weflair-crosslink-panel::after { content:""; position:absolute; right:0; top:0; bottom:0; width:40%; background: radial-gradient(circle at right, rgba(62,255,104,0.1) 0%, transparent 70%); pointer-events:none;}
    .weflair-crosslink-text { position:relative; z-index:1; max-width: 38rem;}
    .weflair-crosslink-text h3 { font-size: 2.2rem; color: #f6f3ee; font-weight: 700; margin-bottom: 1rem; letter-spacing: -0.03em; font-family: 'Space Grotesk', sans-serif;}
    .weflair-crosslink-text p { font-size: 1.1rem; color: rgba(246,243,238,0.7); line-height: 1.5; margin: 0; }
    .weflair-crosslink-btn { position:relative; z-index:1; flex-shrink:0;}
    @media(max-width:991px) { .weflair-crosslink-panel { flex-direction: column; text-align: center; padding: 3rem 2rem; } }

    .wa-pricing-section { padding: clamp(6rem, 10vw, 10rem) 2rem; background: #0a0b0a; border-top: 1px solid rgba(246,243,238,0.06);}
  </style>
</head>
<body data-weflair-static="true" data-navigation-status="not-active" data-theme="dark" class="body pm-page" style="padding-top:var(--nav-bar-height,5rem)">
  <div class="noise is--small" style="z-index:9999; pointer-events:none;"></div>
  <div class="floating-elements-main"><div class="calc-header-padding-height"></div><div data-navigation-toggle="close" class="nav-fade"></div>
  ${newHeaderHtml}
  </div>

<main class="main">
  <!-- SECTION 1: wa-page-hero -->
  <section class="wa-page-hero">
    <div class="wa-page-hero__inner">
      <div class="eyebrow" style="margin-bottom:1.5rem; justify-content:center;">
        <span class="weflair-eyebrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg>
        </span>
        <p class="eyebrow__p">Paid Media & Performance</p>
      </div>
      <h1 class="wa-page-hero__title">Eliminate wasted ad spend with <span style="color:#3eff68">high-performing</span> paid media.</h1>
      <p class="wa-page-hero__sub">Run paid media campaigns that drive pipeline – not just clicks. We turn active demand into qualified revenue through a system that outperforms traditional agencies.</p>
      <div class="wa-page-hero__actions">
        <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span">Book Intro Call</span></div>
          <div class="arrow">
            <div class="arrow__bg"></div>
            <div class="arrow__box is--duplicate">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"/><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"/><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"/></svg>
            </div>
            <div class="arrow__box">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"/><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"/><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"/></svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION 2: wa-stat-ribbon -->
  <div class="wa-stat-ribbon">
    <div class="wa-stat">
      <h4>175<span>%</span></h4>
      <p>Increase in Closed/Won Deals</p>
    </div>
    <div class="wa-stat" style="max-width:24rem; text-align:left;">
      <p style="text-transform:none; letter-spacing:0; font-size:1.1rem; line-height:1.5; color:rgba(246,243,238,0.7); font-weight:400;">We build attribution models that track performance straight through to revenue.</p>
    </div>
  </div>

  <!-- SECTION 3: Capabilities Grid (The Boxes) -->
  <section class="wa-grid-section">
    <div class="wa-section-head">
      <h2>Strategic paid advertising services tailored to your end goals.</h2>
      <p>Our team handles all aspects of ad creation, targeting, bidding, and continuous optimization.</p>
    </div>
    <div class="growing-tiles">
      <div class="growing-tiles__row">
        <!-- Card 1 -->
        <div class="growing-tiles__col">
          <a data-ease data-hover data-arrow="diagonal" href="../contact.html" class="growing-tile w-inline-block">
            <div class="growing-tile__start">
              <div class="growing-tile__text">
                <h3 class="h5">Paid Search</h3>
              </div>
            </div>
            <div class="growing-tile__end">
              <div class="growing-tile__text">
                <p class="p-s">Capture bottom-of-funnel intent with heavily optimized SEM architecture and negative keyword defense.</p>
              </div>
              <div class="growing-tile__arrow">
                <div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div>
              </div>
            </div>
          </a>
        </div>
        <!-- Card 2 -->
        <div class="growing-tiles__col">
          <a data-ease data-hover data-arrow="diagonal" href="../contact.html" class="growing-tile w-inline-block">
            <div class="growing-tile__start">
              <div class="growing-tile__text">
                <h3 class="h5">Paid Social</h3>
              </div>
            </div>
            <div class="growing-tile__end">
              <div class="growing-tile__text">
                <p class="p-s">Generate net-new demand through creative testing and nuanced audience segmentation on LinkedIn and Meta.</p>
              </div>
              <div class="growing-tile__arrow">
                <div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="growing-tiles__row weflair-services-center">
        <!-- Card 3 -->
        <div class="growing-tiles__col" style="flex:0 0 calc(50% - .3rem)!important;width:calc(50% - .3rem)!important;max-width:calc(50% - .3rem)!important">
          <a data-ease data-hover data-arrow="diagonal" href="../contact.html" class="growing-tile w-inline-block">
            <div class="growing-tile__start">
              <div class="growing-tile__text">
                <h3 class="h5">Account Based Marketing</h3>
              </div>
            </div>
            <div class="growing-tile__end">
              <div class="growing-tile__text">
                <p class="p-s">Capitalize on the valuable. Deeply targeted ABM campaigns meant to switch apathy to action in high-value accounts.</p>
              </div>
              <div class="growing-tile__arrow">
                <div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div>
              </div>
            </div>
          </a>
        </div>
        <!-- Card 4 -->
        <div class="growing-tiles__col">
          <a data-ease data-hover data-arrow="diagonal" href="../contact.html" class="growing-tile w-inline-block">
            <div class="growing-tile__start">
              <div class="growing-tile__text">
                <h3 class="h5">Programmatic</h3>
              </div>
            </div>
            <div class="growing-tile__end">
              <div class="growing-tile__text">
                <p class="p-s">Scale your reach beyond standard networks with data-driven placements targeting your exact ICP across the web.</p>
              </div>
              <div class="growing-tile__arrow">
                <div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="growing-tiles__row">
        <!-- Card 5 -->
        <div class="growing-tiles__col">
          <a data-ease data-hover data-arrow="diagonal" href="../contact.html" class="growing-tile w-inline-block">
            <div class="growing-tile__start">
              <div class="growing-tile__text">
                <h3 class="h5">Retargeting</h3>
              </div>
            </div>
            <div class="growing-tile__end">
              <div class="growing-tile__text">
                <p class="p-s">Leakproof your funnel. We build sequential retargeting flows that handle objections block by block until they convert.</p>
              </div>
              <div class="growing-tile__arrow">
                <div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div>
              </div>
            </div>
          </a>
        </div>
        <!-- Card 6 -->
        <div class="growing-tiles__col">
          <a data-ease data-hover data-arrow="diagonal" href="../contact.html" class="growing-tile w-inline-block">
            <div class="growing-tile__start">
              <div class="growing-tile__text">
                <h3 class="h5">Performance Reporting</h3>
              </div>
            </div>
            <div class="growing-tile__end">
              <div class="growing-tile__text">
                <p class="p-s">LTV:CAC modeling and tracking so you know exactly which ads are generating revenue and which are burning cash.</p>
              </div>
              <div class="growing-tile__arrow">
                <div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 4: The Methodology Split -->
  <section class="wa-feature-split">
    <div class="wa-feature-split__text">
      <div class="eyebrow" style="margin-bottom:1.5rem;">
        <span class="weflair-eyebrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg>
        </span>
        <p class="eyebrow__p">Our Methodology</p>
      </div>
      <h2>This is how Customer Generation changes the game.</h2>
      <p style="font-size:1.15rem; color:rgba(246,243,238,0.7); line-height:1.5;">We focus on revenue impact, shifting the goalposts from impressions to generated dollars through advanced targeting.</p>
    </div>
    
    <div class="wa-steps">
      <div class="wa-step">
        <div class="wa-step__num">01</div>
        <div class="wa-step__content">
          <h3>No more useless MQLs</h3>
          <p>Buyer intent and firmographic targeting on every paid media channel means just direct, qualified pipeline instead of lead inflation.</p>
        </div>
      </div>
      <div class="wa-step">
        <div class="wa-step__num">02</div>
        <div class="wa-step__content">
          <h3>Revenue-oriented tracking</h3>
          <p>LTV:CAC modeling keeps us focused towards revenue impact, shifting the goalposts from impressions to generated dollars.</p>
        </div>
      </div>
      <div class="wa-step">
        <div class="wa-step__num">03</div>
        <div class="wa-step__content">
          <h3>Adapting to the algorithm</h3>
          <p>As advertising technology advances, we evolve with it, continuously pioneering new tactics in high velocity ad creative and scaling.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 5: The Funnel Cross-Link -->
  <div class="weflair-crosslink-panel">
    <div class="weflair-crosslink-text">
      <h3>Great ads die on bad landing pages.</h3>
      <p>You can't buy your way out of a broken funnel. Your paid media engine's success relies entirely on conversion architecture and performance design.</p>
    </div>
    <div class="weflair-crosslink-btn">
      <a href="cro-performance-design.html" class="btn w-inline-block weflair-btn weflair-btn--ghost">
        <div class="btn__bg"></div>
        <div class="btn__text"><span class="btn__span" style="color:#f6f3ee;">See Performance Design & CRO</span></div>
        <div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
      </a>
    </div>
  </div>

  <!-- SECTION 6: Pricing -->
  <section class="wa-pricing-section">
    <div class="wa-section-head">
      <h2>Straightforward execution plans</h2>
      <p>Deploy an entire growth team for less than one mid-level hire.</p>
    </div>
    <!-- We embed the exact pricing grid layout you had -->
    <style>
      .pm-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 72rem; margin: 0 auto; }
      @media(max-width:991px) { .pm-pricing-grid { grid-template-columns: 1fr; max-width: 32rem; } }
      .pm-tier {
        background: rgba(17,17,17,0.8); border: 1px solid rgba(246,243,238,0.08); border-radius: 1.5rem; padding: 3rem 2rem; display: flex; flex-direction: column; position: relative; overflow: hidden;
      }
      .pm-tier.is-popular {
        background: linear-gradient(180deg, rgba(24,30,24,0.9) 0%, rgba(17,17,17,0.9) 100%); border-color: rgba(62,255,104,0.25); transform: scale(1.02); z-index: 1; box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      }
      .pm-tier.is-popular::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #3eff68; }
      .pm-tier__badge { position: absolute; top: 1.25rem; right: 1.5rem; background: rgba(62,255,104,0.1); color: #3eff68; font-size: 0.75rem; font-weight: 700; padding: 0.3rem 0.75rem; border-radius: 999px; border: 1px solid rgba(62,255,104,0.2); }
      .pm-tier__name { font-size: 1.5rem; font-weight: 700; color: #f6f3ee; margin: 0 0 0.5rem; }
      .pm-tier__desc { font-size: 0.9rem; color: rgba(246,243,238,0.6); margin: 0 0 2rem; line-height: 1.5; min-height: 2.7rem; }
      .pm-tier__price { font-size: 1.75rem; font-weight: 700; color: #f6f3ee; letter-spacing: -0.04em; margin: 0 0 2rem; display: flex; align-items: baseline; gap: 0.5rem; }
      .pm-tier__features { list-style: none; padding: 0; margin: 0 0 2.5rem; flex-grow: 1; }
      .pm-tier__feature { display: flex; gap: 0.75rem; font-size: 0.9rem; color: rgba(246,243,238,0.8); line-height: 1.4; margin-bottom: 1rem; }
      .pm-tier__feature svg { width: 1.1rem; height: 1.1rem; color: #3eff68; flex: 0 0 auto; margin-top: 0.15rem; }
      .pm-tier .btn { width: 100%; justify-content: center; }
    </style>
    <div class="pm-pricing-grid">
      <div class="pm-tier">
        <h3 class="pm-tier__name">Starter</h3>
        <p class="pm-tier__desc">For companies ready to test validated paid acquisition channels.</p>
        <div class="pm-tier__price">Custom / Book a Call</div>
        <ul class="pm-tier__features">
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> 2 Channels Managed</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Basic Ad Creative</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> CRM Event Tracking</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Monthly Strategy Call</li>
        </ul>
        <div style="margin-top:auto">
          <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--ghost" style="border-color:rgba(62,255,104,0.4)">
            <div class="btn__bg"></div>
            <div class="btn__text" style="color:#3eff68"><span class="btn__span">Book a Call</span></div>
          </a>
        </div>
      </div>
      
      <div class="pm-tier is-popular">
        <span class="pm-tier__badge">Most Popular</span>
        <h3 class="pm-tier__name">Growth</h3>
        <p class="pm-tier__desc">For teams aggressively scaling pipeline and testing new messaging.</p>
        <div class="pm-tier__price">Custom / Book a Call</div>
        <ul class="pm-tier__features">
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> 4 Channels Managed</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Continuous Creative Testing</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Full-Funnel Attribution</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> CRM + Marketing Automation</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Bi-weekly Strategy Sync</li>
        </ul>
        <div style="margin-top:auto">
          <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
            <div class="btn__bg"></div>
            <div class="btn__text"><span class="btn__span">Book a Call</span></div>
          </a>
        </div>
      </div>
      
      <div class="pm-tier">
        <h3 class="pm-tier__name">Enterprise</h3>
        <p class="pm-tier__desc">For complex GTM motions requiring heavy ABM and custom ops.</p>
        <div class="pm-tier__price">Custom / Book a Call</div>
        <ul class="pm-tier__features">
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Unlimited Channels</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Target Account Scaling</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> LTV:CAC BI Modeling</li>
          <li class="pm-tier__feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Dedicated Operator Pod</li>
        </ul>
        <div style="margin-top:auto">
          <a href="../contact.html" class="btn w-inline-block weflair-btn weflair-btn--ghost" style="border-color:rgba(246,243,238,0.2)">
            <div class="btn__bg"></div>
            <div class="btn__text" style="color:#f6f3ee"><span class="btn__span">Book a Call</span></div>
          </a>
        </div>
      </div>
    </div>
  </section>

</main>

${footerHtml}
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'services', 'paid-media-performance.html'), pageHtml);
console.log('Successfully built services/paid-media-performance.html with pure Dapper structure.');
