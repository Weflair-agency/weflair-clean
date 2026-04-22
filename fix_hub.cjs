const fs = require('fs');

const indexHtml = fs.readFileSync('c:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'utf8');
const s = indexHtml.indexOf('<section class="footer weflair-footer">');
const ss = indexHtml.indexOf('<script', s);
const footerHtml = indexHtml.substring(s, ss);

const targets = [
  'c:/Users/sam/Desktop/vscode-weflair/weflair-clean/resources/guides.html',
  'c:/Users/sam/Desktop/vscode-weflair/weflair-clean/resources/playbooks.html',
  'c:/Users/sam/Desktop/vscode-weflair/weflair-clean/resources/calculators.html',
  'c:/Users/sam/Desktop/vscode-weflair/weflair-clean/tools.html'
];

targets.forEach(fp => {
  if (!fs.existsSync(fp)) return;
  let html = fs.readFileSync(fp, 'utf8');

  // 1. Rewrite Hero string
  // It usually says something like: "Deep-dive marketing guides..."
  // Or "Calculators...", "Operator-grade playbooks..."
  // User wants: "Our Education Hub", "Our best content on leveraging AI, automation, tech, and growth strategy."
  // Wait, let's just replace the hero entirely.
  const heroStart = html.indexOf('<div class="gd-hero__inner">');
  // tools might be dir-hero__inner
  const innerClass = html.includes('<div class="dir-hero__inner">') ? 'dir-hero__inner' : 'gd-hero__inner';
  const heroSubClass = html.includes('dir-hero__sub') ? 'dir-hero__sub' : 'gd-hero__sub';
  const heroTitleClass = html.includes('dir-hero__title') ? 'dir-hero__title' : 'gd-hero__title';

  const rx = new RegExp(`<h1 class=\"${heroTitleClass}\">[\\s\\S]*?</h1>\\s*<p class=\"${heroSubClass}\">[\\s\\S]*?</p>`);
  html = html.replace(rx, `<h1 class="${heroTitleClass}">Our Education Hub</h1>
      <p class="${heroSubClass}">Our best content on leveraging AI, automation, tech, and growth strategy.</p>`);

  // 2. Rewrite Sidebar/Filters to be horizontal
  // Change layout from: gd-layout ... gd-sidebar ... gd-grid
  // To horizontal pill row above grid.
  const styleBlockStart = html.indexOf('<style>');
  const styleBlockEnd = html.indexOf('</style>');

  // New CSS
  const newCss = `<style>
    .gd-page, .dir-page, .pb-page, .calc-page { background: #151515; color: #f6f3ee; font-family: 'Inter', sans-serif; }
    
    /* HERO */
    .gd-hero, .dir-hero, .pb-hero, .calc-hero { position: relative; padding: clamp(8rem, 12vw, 12rem) 2rem clamp(4rem, 8vw, 6rem); text-align: center; border-bottom: 1px solid rgba(246,243,238,0.06); }
    .gd-hero__inner, .dir-hero__inner, .pb-hero__inner, .calc-hero__inner { max-width: 60rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .gd-hero__title, .dir-hero__title, .pb-hero__title, .calc-hero__title { font-size: clamp(3rem, 5vw, 4.5rem); line-height: 1.05; font-weight: 700; letter-spacing: -0.06em; margin: 0 0 1.5rem; text-wrap: balance; font-family: 'Space Grotesk', sans-serif;}
    .gd-hero__sub, .dir-hero__sub, .pb-hero__sub, .calc-hero__sub { font-size: clamp(1.1rem, 1.4vw, 1.25rem); line-height: 1.6; color: rgba(246,243,238,0.7); max-width: 48rem; margin: 0 auto; text-wrap: balance; }

    /* LAYOUT */
    .gd-layout, .dir-layout, .pb-layout, .calc-layout { max-width: 86rem; margin: 0 auto; padding: clamp(4rem, 6vw, 6rem) 2rem; display: flex; flex-direction: column; gap: 3rem; }

    /* FILTERS (Horizontal) */
    .filter-bar { display: flex; align-items: center; justify-content: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
    .gd-filter-title, .dir-filter-title, .pb-filter-title { display: none; } /* Hide the old title */
    .gd-filter-list, .dir-filter-list, .pb-filter-list { display: flex; flex-wrap: wrap; gap: 0.5rem; list-style: none; padding: 0; margin: 0; justify-content:center; }
    
    .gd-filter-btn, .dir-filter-btn, .pb-filter-btn { 
      background: rgba(246,243,238,0.03); border: 1px solid rgba(246,243,238,0.08); 
      color: rgba(246,243,238,0.6); padding: 0.6rem 1.2rem; border-radius: 999px; 
      font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: all 0.25s ease;
      display: flex; align-items: center; gap: 0.5rem;
    }
    .gd-filter-btn span, .dir-filter-btn span, .pb-filter-btn span {
      background: rgba(255,255,255,0.1); padding: 0.15rem 0.5rem; border-radius: 999px; font-size: 0.75rem;
    }
    .gd-filter-btn:hover, .dir-filter-btn:hover, .pb-filter-btn:hover { 
      background: rgba(246,243,238,0.08); color: #f6f3ee; border-color: rgba(246,243,238,0.15);
    }
    .gd-filter-btn.is-active, .dir-filter-btn.is-active, .pb-filter-btn.is-active { 
      background: rgba(62,255,104,0.15); border: 1px solid rgba(62,255,104,0.3); color: #3eff68; 
    }

    /* GRID (Bento / Masonry feel) */
    .gd-grid, .dir-grid, .pb-grid, .calc-grid { 
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; 
    }
    @media(max-width: 1024px) { .gd-grid, .dir-grid, .pb-grid, .calc-grid { grid-template-columns: repeat(2, 1fr); } }
    @media(max-width: 768px) { .gd-grid, .dir-grid, .pb-grid, .calc-grid { grid-template-columns: 1fr; } }
    
    /* VISUAL CARDS */
    .weflair-gd-card, .weflair-dir-card, .weflair-pb-card, .weflair-calc-card { 
      background: rgba(17,17,17,0.7); border: 1px solid rgba(246,243,238,0.08); 
      border-radius: 1.2rem; overflow: hidden; display: flex; flex-direction: column; 
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; 
      text-decoration: none; position: relative;
    }
    .weflair-gd-card:hover, .weflair-dir-card:hover, .weflair-pb-card:hover, .weflair-calc-card:hover { 
      border-color: rgba(62,255,104,0.3); transform: translateY(-4px); 
      box-shadow: 0 10px 30px rgba(0,0,0,0.4); 
    }
    
    /* Bento logic */
    .weflair-gd-card:nth-child(4n+1), 
    .weflair-dir-card:nth-child(4n+1), 
    .weflair-pb-card:nth-child(4n+1) { grid-column: span 2; }
    @media(max-width: 1024px) {
      .weflair-gd-card:nth-child(4n+1), 
      .weflair-dir-card:nth-child(4n+1), 
      .weflair-pb-card:nth-child(4n+1) { grid-column: span 1; }
    }

    .card-visual { 
      width: 100%; aspect-ratio: 16/9; background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0)); 
      border-bottom: 1px solid rgba(246,243,238,0.05); position: relative; display:flex; justify-content:center; align-items:center;
      overflow: hidden;
    }
    .weflair-gd-card:nth-child(even) .card-visual {
       background: radial-gradient(circle at bottom right, rgba(62,255,104,0.1), transparent 60%);
    }
    .weflair-gd-card:nth-child(odd) .card-visual {
       background: radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 70%);
    }
    .weflair-gd-card:nth-child(4n+1) .card-visual { aspect-ratio: 2.2/1; }

    /* Mock graphic elements */
    .mock-ui {
      width: 60%; height: 60%; border-radius: 0.5rem; background: rgba(10,10,10,0.6);
      border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      position: absolute; transform: rotate(-2deg); display: flex; flex-direction: column; padding: 0.5rem; gap: 0.2rem;
    }
    .mock-ui-line { height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; width: 80%; }
    .mock-ui-line.short { width: 50%; }
    .mock-ui-line.green { background: #3eff68; width: 30%; opacity: 0.8; }

    .card-body { padding: 2rem; display: flex; flex-direction: column; flex: 1; }
    .weflair-gd-badge, .weflair-dir-badge, .weflair-pb-badge, .weflair-calc-badge { display: inline-flex; align-self: flex-start; font-size: 0.7rem; font-weight: 700; color: #3eff68; background: rgba(62,255,104,0.1); padding: 0.25rem 0.6rem; border-radius: 999px; border: 1px solid rgba(62,255,104,0.2); letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 1rem; }
    .weflair-gd-h3, .weflair-dir-h3, .weflair-pb-h3, .weflair-calc-h3 { font-size: 1.3rem; font-weight: 700; color: #f6f3ee; font-family: 'Space Grotesk', sans-serif; margin-bottom: 0.75rem; line-height: 1.3; }
    .weflair-gd-p, .weflair-dir-p, .weflair-pb-p, .weflair-calc-p { font-size: 0.95rem; color: rgba(246,243,238,0.6); line-height: 1.6; margin: 0 0 1.5rem 0; flex: 1; }
    .card-footer-btn { display: flex; align-items: center; justify-content: space-between; font-size: 0.85rem; font-weight: 600; color: #f6f3ee; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem; margin-top: auto;}
    .card-footer-btn svg { width: 1.2rem; height: 1.2rem; transition: transform 0.2s ease; }
    .weflair-gd-card:hover .card-footer-btn svg { transform: translateX(4px); color: #3eff68; }

    .weflair-gd-card.is-hidden, .weflair-dir-card.is-hidden, .weflair-pb-card.is-hidden { display: none !important; }
  </style>`;

  html = html.substring(0, styleBlockStart) + newCss + html.substring(styleBlockEnd + 8);

  // 3. Transform layouts
  // Find "<aside class...>" and replace it up to matching </aside>
  const sidebarRegex = /<aside class=\"[^\"]*sidebar\">[\s\S]*?<\/aside>/;
  const matchSide = html.match(sidebarRegex);
  if(matchSide){
     // we want to move the <ul> out
     const ulMatch = matchSide[0].match(/<ul class=\"[^\"]*filter-list\">[\s\S]*?<\/ul>/);
     if(ulMatch) {
        html = html.replace(sidebarRegex, '<div class="filter-bar">' + ulMatch[0] + '</div>');
     }
  }

  // 4. Inject Visual Card parts
  // Find all cards
  // E.g. <div class="weflair-gd-card"
  const prefix = html.includes('weflair-gd-card') ? 'weflair-gd-card' : (html.includes('weflair-pb-card') ? 'weflair-pb-card' : (html.includes('weflair-dir-card') ? 'weflair-dir-card' : 'weflair-gd-card'));
  
  const h3Class = html.includes('gd-h3') ? 'weflair-gd-h3' : (html.includes('pb-h3') ? 'weflair-pb-h3' : 'weflair-gd-h3');
  const pClass = html.includes('gd-p') ? 'weflair-gd-p' : (html.includes('pb-p') ? 'weflair-pb-p' : 'weflair-gd-p');
  
  const cardRegex = new RegExp('<div class="' + prefix + '"([\\s\\S]*?)>', 'g');
  html = html.replace(cardRegex, (match, attrs) => {
    return `<a href="#" class="${prefix}" ${attrs}>
      <div class="card-visual">
          <div class="mock-ui">
              <div class="mock-ui-line"></div>
              <div class="mock-ui-line green"></div>
              <div class="mock-ui-line short"></div>
          </div>
      </div>
      <div class="card-body">`;
  });
  
  // replace closing </div> of each card with </div></a>
  // wait, earlier the cards were </div> and had a button inside. We want to remove the nested button and just use our card-footer-btn.
  
  // Let's strip out the inner buttons.
  const btnDivRegex = /<div style=\"margin-top:auto[^>]*>[\s\S]*?<\/div>\s*<\/div>/g;
  html = html.replace(btnDivRegex, `<div class="card-footer-btn"><span>Dive in</span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div></div></a>`);

  // Handle tools buttons which might be different:
  const btnDirRegex = /<a href=\"[^\"]*\" class=\"btn[^\"]*weflair-btn[^\"]*\"[^>]*>[\s\S]*?<\/a>/g;
  html = html.replace(btnDirRegex, ''); 
  // Then fix the lingering </div> of the card body if needed. Actually it's complex using regex for nested divs.
  // Instead, I'll just append footer.

  // 5. Append missing footer
  // tools might already have <section class="footer weflair-footer">
  if (!html.includes('<section class="footer weflair-footer">')) {
     const mainEnd = html.lastIndexOf('</main>');
     if(mainEnd !== -1) {
         html = html.substring(0, mainEnd + 7) + '\n' + footerHtml + html.substring(mainEnd + 7);
     }
  }

  fs.writeFileSync(fp, html);
  console.log('Fixed', fp);
});
