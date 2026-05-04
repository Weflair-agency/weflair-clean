const fs = require('fs');
const p = 'c:/Users/sam/Desktop/vscode-weflair/weflair-clean/services/performance-design.html';
const html = fs.readFileSync(p, 'utf8');

const proofStart = html.indexOf('<section class="weflair-section weflair-proof weflair-proof--switcher"');
const proofEnd = html.indexOf('</section>', html.indexOf('</section>', proofStart) + 12000) + 10;
const faqStart = html.indexOf('<section class="sv-section" id="faq">');
const faqEnd = html.indexOf('</section>', faqStart) + 10;

const pre = html.substring(0, html.indexOf('<main>') + 6);
const post = html.substring(html.indexOf('</main>'));

const proofHtml = html.substring(proofStart, proofEnd);
const faqHtml = html.substring(faqStart, faqEnd);

const newHero = `<section class="sv-hero" id="hero" style="padding-top: 8rem; padding-bottom: 4rem;">
  <div class="sv-hero__inner">
    <div class="eyebrow" style="justify-content: center; display: flex; align-items: center; gap: 8px; margin-bottom: 2rem;">
      <p class="eyebrow__p" style="margin:0; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; font-size: 0.85rem; color: #a0a0a0;">Performance Design &amp; CRO</p>
    </div>
    <h1 class="sv-hero__title" style="max-width: 20ch; text-align: center; margin: 0 auto 1.5rem; font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1.1;">Full Service <span style="color: #22c55e">Design &amp; CRO Agency</span></h1>
    <p style="text-align: center; color: #a0a0a0; max-width: 600px; margin: 0 auto 3rem; font-size: 1.15rem; line-height: 1.5;">Access our design services to elevate your brand, boost conversions and ensure sustainable, predictable growth with creative precision.</p>
    <div style="display: flex; justify-content: center;">
      <a href="../contact.html" class="btn w-inline-block weflair-btn" style="border: 1px solid rgba(34, 197, 94, 0.4); padding: 5px; box-shadow: 0 0 40px rgba(34, 197, 94, 0.2);">
        <div class="btn__bg" style="background: #22c55e"></div>
        <div class="btn__text">
          <span class="btn__span" style="color: #fff">Get Your Conversion Audit</span>
        </div>
      </a>
    </div>
  </div>
</section>`;

const testam = `<section style="padding: 4rem 1rem; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); text-align: center; background: rgba(0,0,0,0.2);">
  <p style="color: #666; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; margin-bottom: 2rem;">Sales and marketing leaders worldwide trust WeFlair</p>
  <div style="display: flex; justify-content: center; gap: clamp(2rem, 5vw, 4rem); flex-wrap: wrap; max-width: 1000px; margin: 0 auto; align-items: center; opacity: 0.6;">
    <img src="../brand-assets/client-logos/santander.png" alt="Santander" style="height: 35px; width: auto; filter: grayscale(1) brightness(200%);" />
    <img src="../brand-assets/client-logos/cellpoint-digital.png" alt="CellPoint Digital" style="height: 40px; width: auto; filter: grayscale(1) brightness(200%);" />
    <img src="../brand-assets/client-logos/farnell.png" alt="Farnell" style="height: 30px; width: auto; filter: grayscale(1) brightness(200%);" />
    <img src="../brand-assets/client-logos/royal-mint.png" alt="Royal Mint" style="height: 45px; width: auto; filter: grayscale(1) brightness(200%);" />
    <img src="../brand-assets/client-logos/notcutts.png" alt="Notcutts" style="height: 35px; width: auto; filter: grayscale(1) brightness(200%);" />
  </div>
</section>`;

const proc = `<section style="padding: 8rem 1.5rem; max-width: 1200px; margin: 0 auto;">
  <h2 style="text-align: center; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 4rem;">Launch Your Project in 14 Days</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
    <!-- Step 1 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; border-radius: 16px;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 1.5rem;">1</div>
      <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Research</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.95rem; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
        <li>Conduct in-depth research to align with your goals</li>
        <li>Analyze market trends, competitor strategies</li>
        <li>Ensure the landing page resonates with users</li>
      </ul>
    </div>
    <!-- Step 2 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; border-radius: 16px;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 1.5rem;">2</div>
      <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Design Concept</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.95rem; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
        <li>Translate research insights into a concept</li>
        <li>Align design with brand identity</li>
        <li>Optimize layouts for maximum conversion</li>
      </ul>
    </div>
    <!-- Step 3 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; border-radius: 16px;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 1.5rem;">3</div>
      <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Copywriting</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.95rem; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
        <li>Create catchy content for value prop</li>
        <li>Engage visitors with clear messaging</li>
        <li>Adapt tone to resonate with audience</li>
      </ul>
    </div>
    <!-- Step 4 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; border-radius: 16px;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 1.5rem;">4</div>
      <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Design &amp; Dev</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.95rem; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
        <li>Build custom pages for speed</li>
        <li>Work with tools like Webflow or React</li>
        <li>Provide compatibility with systems</li>
      </ul>
    </div>
    <!-- Step 5 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; border-radius: 16px;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 1.5rem;">5</div>
      <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Testing &amp; Optimization</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.95rem; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
        <li>Test across multiple devices</li>
        <li>Resolve performance issues</li>
        <li>Apply ongoing optimization strategies</li>
      </ul>
    </div>
    <!-- Step 6 -->
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; border-radius: 16px;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 1.5rem;">6</div>
      <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Launch &amp; Monitor</h3>
      <ul style="color: #a0a0a0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.95rem; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
        <li>Launch once testing is complete</li>
        <li>Monitor performance metrics</li>
        <li>Provide regular reports</li>
      </ul>
    </div>
  </div>
  <div style="text-align: center; margin-top: 5rem;">
    <a href="../contact.html" class="btn w-inline-block weflair-btn" style="border: 1px solid rgba(34, 197, 94, 0.4); padding: 5px; box-shadow: 0 0 40px rgba(34, 197, 94, 0.2);">
      <div class="btn__bg" style="background: #22c55e"></div>
      <div class="btn__text">
        <span class="btn__span" style="color: #fff">Get Your Conversion Audit</span>
      </div>
    </a>
  </div>
</section>`;

fs.writeFileSync(p, pre + newHero + '\n' + testam + '\n' + proc + '\n' + proofHtml + '\n' + faqHtml + '\n' + post);
console.log('Saved modified html');
