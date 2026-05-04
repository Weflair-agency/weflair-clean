const fs = require('fs');
const inPath = 'c:/Users/sam/Desktop/vscode-weflair/weflair-clean/services/performance-design-backup.html';
const outPath = 'c:/Users/sam/Desktop/vscode-weflair/weflair-clean/services/performance-design.html';

const html = fs.readFileSync(inPath, 'utf8');

// 1. Separate Header & Footer around `<main>`
const mainMatch = html.match(/(<main[^>]*>)([\s\S]*)(<\/main>)/i);
if (!mainMatch) throw new Error("Could not find <main> tags");

const preMain = html.substring(0, mainMatch.index + mainMatch[1].length);
const postMain = html.substring(mainMatch.index + mainMatch[1].length + mainMatch[2].length);

// 2. Extract Case Studies block
const proofRegex = /<section\s+class="weflair-section weflair-proof weflair-proof--switcher"[\s\S]*?<!-- \/proof switcher -->[\s\S]*?<\/section>/i;
const proofMatch = html.match(proofRegex);
const proofHtml = proofMatch ? proofMatch[0] : '<!-- PROOF NOT FOUND -->';

// 3. Extract FAQ block
const faqBlock = html.substring(html.indexOf('<section class="sv-section" id="faq">'));
const faqEnd = faqBlock.indexOf('<!-- /faq -->');
let faqHtml = '';
if (faqEnd !== -1) {
    faqHtml = faqBlock.substring(0, faqBlock.indexOf('</section>', faqEnd) + 10);
} else {
    const splitSections = faqBlock.split(/<section\s/);
    if(splitSections.length > 2) {
        faqHtml = '<section class="sv-section" id="faq">' + faqBlock.substring(splitSections[0].length, faqBlock.indexOf('<section', 10));
    } else {
        faqHtml = faqBlock;
    }
}
const faqSafeMatch = html.match(/<section\s+class="sv-section"\s+id="faq"[\s\S]*?<!-- \/faq -->[\s\S]*?<\/section>/i) || html.match(/<section\s+class="sv-section"\s+id="faq"[\s\S]*?<\/section>\s*<\/section>/i);
if (faqSafeMatch) faqHtml = faqSafeMatch[0];

const newHero = `
<section class="sv-hero" id="hero" style="padding-top: 10rem; padding-bottom: 5rem; background: linear-gradient(180deg, rgba(8,8,8,1) 0%, rgba(34,197,94,0.05) 100%);">
  <div class="sv-hero__inner" style="max-width: 1000px; margin: 0 auto; text-align: center; padding: 0 1.5rem;">
    <div class="eyebrow" style="justify-content: center; display: flex; align-items: center; gap: 8px; margin-bottom: 2rem;">
      <p class="eyebrow__p" style="margin:0; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; font-size: 0.9rem; color: #22c55e;">Performance Design &amp; CRO for SaaS &amp; Ecommerce</p>
    </div>
    <h1 class="sv-hero__title" style="font-size: clamp(3rem, 6vw, 5.5rem); line-height: 1.05; letter-spacing: -0.02em; font-weight: 700; margin-bottom: 2.5rem;">
      Full Service <span style="background: -webkit-linear-gradient(#4ade80, #22c55e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Design &amp; CRO Agency</span>
    </h1>
    <p style="color: #a0a0a0; font-size: clamp(1.1rem, 2vw, 1.4rem); line-height: 1.6; max-width: 700px; margin: 0 auto 3.5rem;">
      We analyze and optimize your website to convert 2-3x more visitors without spending another dollar on ads. Ensure sustainable, predictable growth with creative precision.
    </p>
    <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap;">
      <a href="../contact.html" class="btn w-inline-block">
        <div class="btn__bg" style="background-color: #22c55e;"></div>
        <div class="btn__text">
          <span class="btn__span" style="color: #ffffff; font-weight: 600;">Get Your CRO Audit</span>
        </div>
      </a>
      <a href="#proof" class="btn w-inline-block" style="background: transparent; border: 1px solid rgba(255,255,255,0.1);">
        <div class="btn__bg" style="background-color: transparent;"></div>
        <div class="btn__text">
          <span class="btn__span" style="color: #ffffff;">See Results</span>
        </div>
      </a>
    </div>
  </div>
</section>
`;

const logosRow = `
<style>
.pill-logo-section {
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: transparent;
}
.pill-logo-title {
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #a0a0a0, #ffffff, #a0a0a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3.5rem;
  opacity: 0.9;
}
.pill-logo-grid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100vw;
  align-items: center;
}
.pill-logo-row {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: nowrap;
}
.pill-logo-row--offset {
  transform: translateX(-40px); /* Stagger effect */
}
.pill-logo-row--offset2 {
  transform: translateX(40px); /* Stagger effect */
}
.pill-logo-pill {
  width: 170px; /* Slightly bigger structure to unify */
  height: 65px; 
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.02) 100%);
  border: 1px solid rgba(34, 197, 94, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}
.pill-logo-pill:hover {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.05) 100%);
  border-color: rgba(34, 197, 94, 0.3);
  transform: translateY(-2px);
}
.pill-logo-pill img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: brightness(2) contrast(1.2); /* Adjust to make them pop clearly against dark */
  opacity: 0.9;
  /* unify the size */
  transform: scale(1.15);
}
@media (max-width: 768px) {
  .pill-logo-pill {
    width: 140px;
    height: 55px;
  }
}
</style>

<section class="pill-logo-section">
  <h3 class="pill-logo-title">Sales and marketing leaders in ambitious companies worldwide trust WeFlair.</h3>
  <div class="pill-logo-grid">
    <!-- Row 1 -->
    <div class="pill-logo-row">
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/santander.png" alt="Santander"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/farnell.png" alt="Farnell"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/cpc.png" alt="CPC"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/conran-shop.png" alt="Conran Shop"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/fragrance-shop.png" alt="The Fragrance Shop"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/royal-mint.png" alt="Royal Mint"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/jacamo.png" alt="Jacamo"></div>
    </div>
    
    <!-- Row 2 Offset -->
    <div class="pill-logo-row pill-logo-row--offset">
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/focus-diy.png" alt="Focus DIY"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/cellpoint-digital.png" alt="CellPoint Digital"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/harrier-white.png" alt="Harrier"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/emax.png" alt="Emax"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/notcutts.svg" alt="Notcutts"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/molahin.png" alt="Molahin"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/rct.png" alt="RCT"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/hq-software.png" alt="HQ Software"></div>
    </div>
    
    <!-- Row 3 Offset -->
    <div class="pill-logo-row pill-logo-row--offset2">
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/pink-boutique.png" alt="Pink Boutique"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/yours.png" alt="Yours"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/travelsphere.svg" alt="Travelsphere"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/mawsim.png" alt="Mawsim"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/jdw.png" alt="JDW"></div>
      <div class="pill-logo-pill"><img src="../brand-assets/client-logos/tofs.png" alt="TOFS"></div>
    </div>
  </div>
</section>
`;

const statsRow = `
<section style="padding: 6rem 1.5rem; max-width: 1200px; margin: 0 auto;">
  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; text-align: center;">
    <div style="padding: 2rem; border-right: 1px solid rgba(255,255,255,0.05);">
        <div style="font-size: 3rem; font-weight: 700; color: #22c55e; margin-bottom: 0.5rem; line-height: 1;">£32M+</div>
        <div style="color: #a0a0a0; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px;">Ad Spend Managed</div>
    </div>
    <div style="padding: 2rem; border-right: 1px solid rgba(255,255,255,0.05);">
        <div style="font-size: 3rem; font-weight: 700; color: #22c55e; margin-bottom: 0.5rem; line-height: 1;">20+</div>
        <div style="color: #a0a0a0; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px;">Years Combined Experience</div>
    </div>
    <div style="padding: 2rem; border-right: 1px solid rgba(255,255,255,0.05);">
        <div style="font-size: 3rem; font-weight: 700; color: #22c55e; margin-bottom: 0.5rem; line-height: 1;">50+</div>
        <div style="color: #a0a0a0; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px;">Brands Scaled</div>
    </div>
    <div style="padding: 2rem;">
        <div style="font-size: 3rem; font-weight: 700; color: #22c55e; margin-bottom: 0.5rem; line-height: 1;">3.2x</div>
        <div style="color: #a0a0a0; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px;">Avg. Pipeline ROAS</div>
    </div>
  </div>
  
  <div style="margin-top: 6rem; padding-top: 6rem; border-top: 1px solid rgba(255,255,255,0.05);">
      <p style="text-align: center; color: #666; text-transform: uppercase; letter-spacing: 2px; font-size: 0.85rem; font-weight: 500; margin-bottom: 3rem;">
        The CRO Stack We Master
      </p>
      <div style="display: flex; justify-content: center; gap: clamp(2rem, 5vw, 4rem); flex-wrap: wrap; opacity: 0.6; align-items: center; font-size: 1.5rem; font-weight: 700; color: #fff;">
          <span>CrazyEgg</span>
          <span style="color: #444;">|</span>
          <span>Clarity</span>
          <span style="color: #444;">|</span>
          <span>Google Analytics</span>
          <span style="color: #444;">|</span>
          <span>Mixpanel</span>
          <span style="color: #444;">|</span>
          <span>HubSpot</span>
      </div>
  </div>
</section>
`;

const painSection = `
<section style="padding: 8rem 1.5rem; background: rgba(255,255,255,0.01); border-top: 1px solid rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.03);">
  <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;">
    <div>
      <div style="color: #ef4444; text-transform: uppercase; letter-spacing: 2px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;">
        <div style="width: 8px; height: 8px; background: #ef4444; border-radius: 50%;"></div>
        The Problem
      </div>
      <h2 style="font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1.1; margin-bottom: 2rem;">Stop pouring traffic into a <span style="color: #ef4444;">leaky bucket.</span></h2>
      <p style="color: #a0a0a0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 1.5rem;">You are spending thousands on Google, Meta, and LinkedIn ads, but your landing page is dropping the ball.</p>
      <ul style="color: #fff; font-size: 1.1rem; line-height: 2; margin-top: 2rem; list-style: none; padding: 0;">
        <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            High bounce rates on expensive clicks
        </li>
        <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            Users abandon cart or drop off mid-form
        </li>
        <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            No clear wireframe strategy
        </li>
        <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            Low trust signals or broken UX
        </li>
      </ul>
    </div>
    <div style="position: relative; border-radius: 24px; overflow: hidden; background: #111; border: 1px solid rgba(255,255,255,0.1); padding: 4rem 3rem;">
        <div style="font-size: 6rem; font-weight: 800; line-height: 1; margin-bottom: 1rem; color: #fff;">97%</div>
        <div style="font-size: 1.5rem; color: #a0a0a0;">Of your paid traffic leaves without converting because your CRO is broken.</div>
        
        <div style="margin-top: 3rem; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.2); padding: 1.5rem; border-radius: 12px; display: flex; align-items: center; gap: 1rem;">
            <div style="background: #22c55e; color: #000; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div>
                <strong style="display: block; font-size: 1.1rem; color: #22c55e; margin-bottom: 4px;">The Fix: Performance Design</strong>
                <span style="color: #ccc; font-size: 0.95rem;">Increase conversions to lower CAC by 40-60%.</span>
            </div>
        </div>
    </div>
  </div>
</section>
`;

const processGrid = `
<section style="padding: 10rem 1.5rem; max-width: 1200px; margin: 0 auto; position: relative;">
  <div style="text-align: center; margin-bottom: 5rem; max-width: 800px; margin: 0 auto 6rem;">
    <div style="color: #22c55e; text-transform: uppercase; letter-spacing: 2px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem;">The Methodology</div>
    <h2 style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 1.5rem; line-height: 1.1;">Launch Your Project in <span style="color: #22c55e;">14 Days</span></h2>
    <p style="color: #a0a0a0; font-size: 1.15rem; line-height: 1.6;">Our robust 6-step framework transforms underperforming pages into high-converting revenue engines. Fast turnaround, zero fluff.</p>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
    <!-- Step 1 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 3.5rem 3rem; border-radius: 20px; transition: transform 0.3s ease; position: relative; overflow: hidden;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
      <div style="position: absolute; top: 0; right: -20px; font-size: 10rem; font-weight: 800; color: rgba(255,255,255,0.03); line-height: 1; pointer-events: none;">01</div>
      <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: #fff; font-weight: 700; display: flex; align-items: center; gap: 1rem;">
        <div style="width: 10px; height: 10px; background: #22c55e; border-radius: 50%;"></div>
        Research
      </h3>
      <ul style="color: #a0a0a0; padding-left: 0; list-style: none; line-height: 1.6; font-size: 1.05rem; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Conduct in-depth research to align with your goals</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Analyze market trends and competitor strategies</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Ensure the landing page resonates with users</li>
      </ul>
    </div>

    <!-- Step 2...6 (retained from main rewrite) -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 3.5rem 3rem; border-radius: 20px; transition: transform 0.3s ease; position: relative; overflow: hidden;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
      <div style="position: absolute; top: 0; right: -20px; font-size: 10rem; font-weight: 800; color: rgba(255,255,255,0.03); line-height: 1; pointer-events: none;">02</div>
      <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: #fff; font-weight: 700; display: flex; align-items: center; gap: 1rem;">
        <div style="width: 10px; height: 10px; background: #22c55e; border-radius: 50%;"></div>
        Design Concept
      </h3>
      <ul style="color: #a0a0a0; padding-left: 0; list-style: none; line-height: 1.6; font-size: 1.05rem; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Translate research insights into a concept</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Align design with brand identity</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Optimize layouts for maximum conversion</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 3.5rem 3rem; border-radius: 20px; transition: transform 0.3s ease; position: relative; overflow: hidden;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
      <div style="position: absolute; top: 0; right: -20px; font-size: 10rem; font-weight: 800; color: rgba(255,255,255,0.03); line-height: 1; pointer-events: none;">03</div>
      <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: #fff; font-weight: 700; display: flex; align-items: center; gap: 1rem;">
        <div style="width: 10px; height: 10px; background: #22c55e; border-radius: 50%;"></div>
        Copywriting
      </h3>
      <ul style="color: #a0a0a0; padding-left: 0; list-style: none; line-height: 1.6; font-size: 1.05rem; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Create catchy content for value prop</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Engage visitors with clear messaging</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Adapt tone to resonate with audience</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 3.5rem 3rem; border-radius: 20px; transition: transform 0.3s ease; position: relative; overflow: hidden;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
      <div style="position: absolute; top: 0; right: -20px; font-size: 10rem; font-weight: 800; color: rgba(255,255,255,0.03); line-height: 1; pointer-events: none;">04</div>
      <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: #fff; font-weight: 700; display: flex; align-items: center; gap: 1rem;">
        <div style="width: 10px; height: 10px; background: #22c55e; border-radius: 50%;"></div>
        Design &amp; Dev
      </h3>
      <ul style="color: #a0a0a0; padding-left: 0; list-style: none; line-height: 1.6; font-size: 1.05rem; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Build custom pages for speed</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Work with Webflow or React ecosystems</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Provide compatibility with your systems</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 3.5rem 3rem; border-radius: 20px; transition: transform 0.3s ease; position: relative; overflow: hidden;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
      <div style="position: absolute; top: 0; right: -20px; font-size: 10rem; font-weight: 800; color: rgba(255,255,255,0.03); line-height: 1; pointer-events: none;">05</div>
      <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: #fff; font-weight: 700; display: flex; align-items: center; gap: 1rem;">
        <div style="width: 10px; height: 10px; background: #22c55e; border-radius: 50%;"></div>
        Testing &amp; Opt
      </h3>
      <ul style="color: #a0a0a0; padding-left: 0; list-style: none; line-height: 1.6; font-size: 1.05rem; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Test across multiple devices natively</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Resolve technical/performance issues</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Apply ongoing optimization strategies</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 3.5rem 3rem; border-radius: 20px; transition: transform 0.3s ease; position: relative; overflow: hidden;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
      <div style="position: absolute; top: 0; right: -20px; font-size: 10rem; font-weight: 800; color: rgba(255,255,255,0.03); line-height: 1; pointer-events: none;">06</div>
      <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: #fff; font-weight: 700; display: flex; align-items: center; gap: 1rem;">
        <div style="width: 10px; height: 10px; background: #22c55e; border-radius: 50%;"></div>
        Launch &amp; Monitor
      </h3>
      <ul style="color: #a0a0a0; padding-left: 0; list-style: none; line-height: 1.6; font-size: 1.05rem; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Launch once testing is 100% complete</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Monitor live performance metrics</li>
        <li style="display: flex; gap: 12px;"><span style="color:#22c55e;">✓</span> Provide regular reports &amp; insights</li>
      </ul>
    </div>
  </div>
</section>
`;

const finalCTA = `
<section style="padding: 8rem 1.5rem; background: linear-gradient(180deg, rgba(8,8,8,1) 0%, rgba(34,197,94,0.08) 100%);">
  <div style="max-width: 800px; margin: 0 auto; text-align: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 5rem 3rem; border-radius: 24px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, transparent, #22c55e, transparent);"></div>
    <h2 style="font-size: clamp(2.2rem, 4vw, 3rem); line-height: 1.2; margin-bottom: 1.5rem;">Ready to stop guessing and start compounding?</h2>
    <p style="color: #a0a0a0; font-size: 1.15rem; line-height: 1.6; margin-bottom: 3rem;">Book a 30-minute strategy call. We'll walk through your current setup, identify the biggest levers, and show you exactly what a WeFlair engagement looks like.</p>
    <a href="../contact.html" class="btn w-inline-block" style="padding: 0.5rem;">
      <div class="btn__bg" style="background-color: #22c55e;"></div>
      <div class="btn__text">
        <span class="btn__span" style="color: #ffffff; font-weight: bold; font-size: 1.1rem;">Book a Strategy Call</span>
      </div>
    </a>
  </div>
</section>
`;

const megaMainContent = newHero + "\n" + logosRow + "\n" + painSection + "\n" + statsRow + "\n" + processGrid + "\n" + proofHtml + "\n" + faqHtml + "\n" + finalCTA;

fs.writeFileSync(outPath, preMain + "\n" + megaMainContent + "\n" + postMain);
console.log('Pill logos injected successfully in Node!');
