const fs = require('fs');

// Read the clean backup file to base our reconstruction off of
const backupFile = 'c:/Users/sam/Desktop/vscode-weflair/weflair-clean/services/performance-design-backup.html';
const html = fs.readFileSync(backupFile, 'utf8');

// Find where main begins and ends
const mainStart = html.indexOf('<main class="main"');
const mainContentStart = html.indexOf('>', mainStart) + 1;
const mainEnd = html.indexOf('</main>', mainContentStart);

// We want to keep everything before <main> (header, nav)
const pre = html.substring(0, mainContentStart);
// And everything after </main> (footer, scripts)
const post = html.substring(mainEnd);

// Now, extract ONLY the proof section and FAQ section from the backup
const proofStart = html.indexOf('<section class="weflair-section weflair-proof weflair-proof--switcher"');
const proofEnd = html.indexOf('</section>', html.indexOf('</section>', proofStart) + 10) + 10;
const proofHtml = html.substring(proofStart, proofEnd);

const faqStart = html.indexOf('<section class="sv-section" id="faq">');
const faqEnd = html.indexOf('</section>', faqStart) + 10;
const faqHtml = html.substring(faqStart, faqEnd);

// Build exactly the new content the user wants with correct paths AND no CSS filters
const newHero = `
<section class="sv-hero" id="hero" style="padding-top: 10rem; padding-bottom: 5rem;">
  <div class="sv-hero__inner">
    <div class="eyebrow" style="justify-content: center; display: flex; align-items: center; gap: 8px; margin-bottom: 2rem;">
      <p class="eyebrow__p" style="margin:0; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; font-size: 0.85rem; color: #a0a0a0;">Performance Design &amp; CRO</p>
    </div>
    <h1 class="sv-hero__title" style="max-width: 20ch; text-align: center; margin: 0 auto 2rem; font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 1.1;">Full Service <span style="color: #22c55e">Design &amp; CRO Agency</span></h1>
    <p style="text-align: center; color: #a0a0a0; max-width: 600px; margin: 0 auto 4rem; font-size: 1.15rem; line-height: 1.5;">Access our design services to elevate your brand, boost conversions and ensure sustainable, predictable growth with creative precision.</p>
    <div style="display: flex; justify-content: center; margin-top: 1rem;">
      <a href="../contact.html" class="btn w-inline-block">
        <div class="btn__bg" style="background-color: #22c55e;"></div>
        <div class="btn__text">
          <span class="btn__span" style="color: #ffffff;">Get Your Conversion Audit</span>
        </div>
      </a>
    </div>
  </div>
</section>
`;

const logosHtml = `
<section style="padding: 4rem 1rem; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); text-align: center; background: rgba(0,0,0,0.2);">
  <p style="color: #666; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; margin-bottom: 3rem;">Sales and marketing leaders worldwide trust WeFlair</p>
  <div style="display: flex; justify-content: center; gap: clamp(2rem, 6vw, 5rem); flex-wrap: wrap; max-width: 1000px; margin: 0 auto; align-items: center;">
    <img src="../brand-assets/client-logos/santander.png" alt="Santander" style="height: 35px; width: auto; object-fit: contain;" />
    <img src="../brand-assets/client-logos/cellpoint-digital.png" alt="CellPoint Digital" style="height: 40px; width: auto; object-fit: contain;" />
    <img src="../brand-assets/client-logos/farnell.png" alt="Farnell" style="height: 30px; width: auto; object-fit: contain;" />
    <img src="../brand-assets/client-logos/royal-mint.png" alt="Royal Mint" style="height: 45px; width: auto; object-fit: contain;" />
    <img src="../brand-assets/client-logos/notcutts.svg" alt="Notcutts" style="height: 35px; width: auto; object-fit: contain;" />
  </div>
</section>
`;

const processHtml = `
<section style="padding: 8rem 1.5rem; max-width: 1200px; margin: 0 auto;">
  <h2 style="text-align: center; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 5rem;">Launch Your Project in 14 Days</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
    <!-- Step 1 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 3rem; border-radius: 16px;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 2rem; font-size: 1.25rem;">1</div>
      <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem;">Research</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 1rem; margin: 0; display: flex; flex-direction: column; gap: 0.8rem;">
        <li>Conduct in-depth research to align with your goals</li>
        <li>Analyze market trends and competitor strategies</li>
        <li>Ensure the landing page resonates with users</li>
      </ul>
    </div>
    <!-- Step 2 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 3rem; border-radius: 16px;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 2rem; font-size: 1.25rem;">2</div>
      <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem;">Design Concept</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 1rem; margin: 0; display: flex; flex-direction: column; gap: 0.8rem;">
        <li>Translate research insights into a concept</li>
        <li>Align design with brand identity</li>
        <li>Optimize layouts for maximum conversion</li>
      </ul>
    </div>
    <!-- Step 3 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 3rem; border-radius: 16px;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 2rem; font-size: 1.25rem;">3</div>
      <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem;">Copywriting</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 1rem; margin: 0; display: flex; flex-direction: column; gap: 0.8rem;">
        <li>Create catchy content for value prop</li>
        <li>Engage visitors with clear messaging</li>
        <li>Adapt tone to resonate with audience</li>
      </ul>
    </div>
    <!-- Step 4 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 3rem; border-radius: 16px;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 2rem; font-size: 1.25rem;">4</div>
      <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem;">Design &amp; Dev</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 1rem; margin: 0; display: flex; flex-direction: column; gap: 0.8rem;">
        <li>Build custom pages for speed</li>
        <li>Work with tools like Webflow or React</li>
        <li>Provide compatibility with systems</li>
      </ul>
    </div>
    <!-- Step 5 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 3rem; border-radius: 16px;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 2rem; font-size: 1.25rem;">5</div>
      <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem;">Testing &amp; Optimization</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 1rem; margin: 0; display: flex; flex-direction: column; gap: 0.8rem;">
        <li>Test across multiple devices</li>
        <li>Resolve performance issues</li>
        <li>Apply ongoing optimization strategies</li>
      </ul>
    </div>
    <!-- Step 6 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 3rem; border-radius: 16px;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 2rem; font-size: 1.25rem;">6</div>
      <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem;">Launch &amp; Monitor</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 1rem; margin: 0; display: flex; flex-direction: column; gap: 0.8rem;">
        <li>Launch once testing is complete</li>
        <li>Monitor performance metrics</li>
        <li>Provide regular reports</li>
      </ul>
    </div>
  </div>
  <div style="text-align: center; margin-top: 6rem; padding-bottom: 2rem;">
    <a href="../contact.html" class="btn w-inline-block">
      <div class="btn__bg" style="background-color: #22c55e;"></div>
      <div class="btn__text">
        <span class="btn__span" style="color: #ffffff;">Get Your Conversion Audit</span>
      </div>
    </a>
  </div>
</section>
`;

const builtMain = newHero + '\n' + logosHtml + '\n' + processHtml + '\n' + proofHtml + '\n' + faqHtml;

const targetFile = 'c:/Users/sam/Desktop/vscode-weflair/weflair-clean/services/performance-design.html';
fs.writeFileSync(targetFile, pre + builtMain + post);
console.log('Successfully rewrote performance-design.html from backup scratch.');
