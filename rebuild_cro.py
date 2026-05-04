import re

with open("C:/Users/sam/Desktop/vscode-weflair/weflair-clean/services/performance-design.html", "r", encoding="utf-8") as f:
    text = f.read()

new_main = """<main class="pdx-shell">
    <style>
      /* WeFlair custom dark glass logic for the Performance Design CRO page */
      .cro-hero {
        padding: clamp(9rem, 15vw, 13rem) 0 clamp(5rem, 9vw, 8rem);
        position: relative;
        overflow: hidden;
      }
      .cro-hero-glow {
        position:absolute;
        top: -15%;
        right: -10%;
        width: 800px;
        height: 800px;
        background: radial-gradient(circle, rgba(62,255,104,0.08) 0%, transparent 65%);
        pointer-events: none;
        z-index: -1;
      }
      .cro-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 2rem;
        color: var(--pdx-green, #3eff68);
        font-size: 0.85rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        border: 1px solid rgba(62, 255, 104, 0.4);
        padding: 0.6rem 1.2rem;
        border-radius: 2rem;
        background: rgba(62, 255, 104, 0.05);
      }
      .cro-eyebrow img {
        width: 1.2rem;
        height: 1.2rem;
        filter: drop-shadow(0 0 8px rgba(62,255,104,0.8));
      }
      .cro-hero-title {
        font-size: clamp(3.5rem, 8vw, 6.5rem);
        line-height: 1.05;
        letter-spacing: -0.03em;
        margin-bottom: 2.5rem;
        max-width: 16ch;
        background: linear-gradient(180deg, #fff 40%, rgba(255,255,255,0.4) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .cro-hero-p {
        font-size: clamp(1.1rem, 1.5vw, 1.35rem);
        line-height: 1.7;
        color: rgba(245, 242, 236, 0.72);
        max-width: 50ch;
        margin-bottom: 3.5rem;
      }
      
      .cro-section {
        padding: clamp(6rem, 10vw, 10rem) 0;
        position: relative;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
      }
      
      .cro-section__head {
        margin-bottom: 4rem;
      }
      
      .cro-section__head h2 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        line-height: 1.1;
        margin-bottom: 1.5rem;
        max-width: 25ch;
      }
      
      .cro-section__head p {
        font-size: 1.15rem;
        line-height: 1.7;
        color: rgba(245, 242, 236, 0.7);
        max-width: 55ch;
      }

      .cro-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        gap: 2rem;
      }
      
      .cro-card {
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 1rem;
        padding: clamp(2rem, 4vw, 3rem);
        background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 15px 35px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
      }
      
      .cro-card:hover {
        border-color: rgba(62, 255, 104, 0.3);
        background: linear-gradient(180deg, rgba(62, 255, 104, 0.05) 0%, rgba(255,255,255,0.01) 100%);
        transform: translateY(-4px);
      }
      
      .cro-card-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: rgba(62, 255, 104, 0.1);
        color: var(--pdx-green);
        margin-bottom: 2rem;
      }
      
      .cro-card h3 {
        font-size: 1.6rem;
        line-height: 1.3;
        margin-bottom: 1.25rem;
        color: #fff;
      }
      
      .cro-card p {
        line-height: 1.7;
        color: rgba(245, 242, 236, 0.7);
        font-size: 1.1rem;
        margin: 0;
      }

      /* Logos grid specifically adapted for dark theme */
      .cro-logos {
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        align-items: center;
        opacity: 0.6;
        margin-top: 5rem;
      }
      .cro-logos img {
        height: 35px;
        width: auto;
        filter: brightness(0) invert(1);
      }

      .cro-step {
        border-left: 2px solid rgba(62,255,104,0.3); 
        padding-left: 2rem;
        margin-bottom: 3rem;
      }
      
      .cro-step:last-child {
        margin-bottom: 0;
      }
      
      .cro-step-num {
        font-family: 'Space Grotesk', sans-serif; 
        font-size: 1.5rem; 
        color: var(--pdx-green); 
        font-weight: 700; 
        margin-bottom: 1rem; 
        display: block;
      }

    </style>

    <section class="cro-hero">
      <div class="pdx-wrap">
        <div style="max-width: 900px;">
          <div class="cro-eyebrow">
            <img src="/brand-assets/star-glow.svg" alt="Glowing Star">
            Performance Design & CRO
          </div>
          <h1 class="cro-hero-title">Sites built to convert traffic into revenue</h1>
          <p class="cro-hero-p">We engineer landing pages, UX experiences, and conversion systems that pull buyers down the funnel. Stop bleeding acquisition budget on pages that don't perform.</p>
          <div style="margin-top: 0;">
            <a href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
              <div class="btn__bg"></div>
              <div class="btn__text"><span class="btn__span" style="font-size:1.05rem; padding: 0.5rem 1rem;">Audit Your Funnel</span></div>
            </a>
          </div>
        </div>
        
        <div class="cro-logos">
          <!-- Imported logos correctly to display clean and solid -->
          <img src="/brand-assets/client-logos/harrier.png" alt="Harrier Logo" />
          <img src="/brand-assets/client-logos/cellpoint.png" alt="CellPoint Logo" style="height: 28px;" />
          <img src="/brand-assets/client-logos/metaestate.png" alt="Meta Estate Logo" />
        </div>
      </div>
      <div class="cro-hero-glow"></div>
    </section>

    <!-- SECTION: Why Conversion Rate Optimization Matters -->
    <section class="cro-section">
      <div class="pdx-wrap">
        <div class="cro-section__head" style="grid-template-columns: 1fr;">
          <h2>Engineering outcomes instead of impressions.</h2>
          <p>Too much budget gets buried by friction. Poor hierarchy, broken mobile experiences, and confusing layouts actively work against your sales team. We rebuild the path to purchase with behavioral psychology and raw data.</p>
        </div>
        <div class="cro-grid">
          <article class="cro-card">
            <div class="cro-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3>Landing Page Optimization</h3>
            <p>Every ad campaign needs a destination. We design deeply targeted, high-speed landing pages matched strictly to visitor intent, drastically reducing cost-per-acquisition.</p>
          </article>
          <article class="cro-card">
            <div class="cro-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <h3>UX & Friction Audits</h3>
            <p>We analyze user recordings, heatmap data, and drop-off points to locate precisely where your site is bleeding revenue. Then, we script the fixes.</p>
          </article>
          <article class="cro-card">
            <div class="cro-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </div>
            <h3>Split Experimentation</h3>
            <p>We deploy rigorous A/B and multivariate tests on headlines, calls-to-action, imagery, and pricing layouts to mathematically guarantee performance improvements.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION: Our Methodology (No images, straight value) -->
    <section class="cro-section" style="background: rgba(0,0,0,0.3);">
      <div class="pdx-wrap">
        <div style="border: 1px solid rgba(255,255,255,0.08); border-radius: 1.5rem; background: linear-gradient(135deg, rgba(255,255,255,0.03), transparent); padding: clamp(3rem, 6vw, 5rem);">
          <div class="cro-section__head" style="margin-bottom: 4rem;">
            <h2 style="max-width: 15ch;">The Conversion Blueprint</h2>
            <p>We don't guess. We follow a systematic methodology designed to scale conversion volume without demanding additional ad spend.</p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem;">
            <div class="cro-step">
              <span class="cro-step-num">01. Discovery & Data Mining</span>
              <h3 style="font-size: 1.5rem; color: #fff; margin-bottom: 1rem; line-height: 1.3;">Know who buys, and why they leave.</h3>
              <p style="color: rgba(245, 242, 236, 0.7); line-height: 1.7; font-size: 1.1rem; margin: 0;">We deploy quantitative analytics setup (GA4, Mixpanel) combined with qualitative insights (Hotjar, user testing) to baseline your funnel.</p>
            </div>
            <div class="cro-step">
              <span class="cro-step-num">02. Hypothesis Architecture</span>
              <h3 style="font-size: 1.5rem; color: #fff; margin-bottom: 1rem; line-height: 1.3;">Build solutions around real friction.</h3>
              <p style="color: rgba(245, 242, 236, 0.7); line-height: 1.7; font-size: 1.1rem; margin: 0;">We isolate the core issues preventing conversions and design specific, measurable hypotheses to challenge the current control version.</p>
            </div>
            <div class="cro-step">
              <span class="cro-step-num">03. High-Fidelity Execution</span>
              <h3 style="font-size: 1.5rem; color: #fff; margin-bottom: 1rem; line-height: 1.3;">Deploy rapid structural changes.</h3>
              <p style="color: rgba(245, 242, 236, 0.7); line-height: 1.7; font-size: 1.1rem; margin: 0;">Our engineering and design teams rapidly deploy the variations directly to the live environment, establishing completely new user experiences.</p>
            </div>
            <div class="cro-step">
              <span class="cro-step-num">04. Statistical Validation</span>
              <h3 style="font-size: 1.5rem; color: #fff; margin-bottom: 1rem; line-height: 1.3;">Lock in the revenue gains.</h3>
              <p style="color: rgba(245, 242, 236, 0.7); line-height: 1.7; font-size: 1.1rem; margin: 0;">We measure variations until we reach strict statistical significance. Winning variants are permanently rolled out, pushing baseline metrics consistently upward.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: Value Proposition / Dark Mode Cards -->
    <section class="cro-section">
      <div class="pdx-wrap">
        <div class="cro-section__head" style="margin-bottom: 4rem; text-align: center; display: flex; flex-direction: column; align-items: center;">
          <h2 style="max-width: 25ch; text-align: center;">Why partner with WeFlair for CRO?</h2>
        </div>
        
        <div class="cro-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
          <article class="cro-card" style="align-items: center; text-align: center;">
            <h3 style="font-size: 1.3rem;">Speed to Execution</h3>
            <p style="font-size: 1rem;">We don't spend months making slide decks. We find the leaks and patch them within days, accelerating return on investment.</p>
          </article>
          <article class="cro-card" style="align-items: center; text-align: center;">
            <h3 style="font-size: 1.3rem;">Full-Stack Capabilities</h3>
            <p style="font-size: 1rem;">Design, copy, logic, and development are housed under one roof. No outsourcing, no communication friction across teams.</p>
          </article>
          <article class="cro-card" style="align-items: center; text-align: center;">
            <h3 style="font-size: 1.3rem;">Growth-First Mentality</h3>
            <p style="font-size: 1rem;">We don't care if a page "looks pretty" if it doesn't move the revenue needle. Every design decision is backed by a business outcome.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION: Direct FAQ -->
    <section class="cro-section" style="background: rgba(0,0,0,0.15);">
      <div class="pdx-wrap" style="max-width: 800px; margin: 0 auto;">
        <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 5vw, 3.5rem); margin-bottom: 3rem; text-align: center;">Frequently Asked Questions</h2>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <details style="border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); border-radius: 12px; padding: 1.5rem;">
            <summary style="font-size: 1.25rem; font-weight: 600; cursor: pointer; color: #fff; display: flex; justify-content: space-between; align-items: center; list-style: none;">
              How soon can we see results from CRO?
              <span style="color: var(--pdx-green); font-size: 1.5rem;">+</span>
            </summary>
            <div style="padding-top: 1rem; color: rgba(245, 242, 236, 0.7); line-height: 1.7; font-size: 1.05rem; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 1rem;">
              Depending on your traffic volume, we typically implement quick-win fixes within the first two weeks. A/B test variations usually reach statistical significance within 14-30 days to prove uplift.
            </div>
          </details>
          <details style="border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); border-radius: 12px; padding: 1.5rem;">
            <summary style="font-size: 1.25rem; font-weight: 600; cursor: pointer; color: #fff; display: flex; justify-content: space-between; align-items: center; list-style: none;">
              Do you build new pages or just optimize existing ones?
              <span style="color: var(--pdx-green); font-size: 1.5rem;">+</span>
            </summary>
            <div style="padding-top: 1rem; color: rgba(245, 242, 236, 0.7); line-height: 1.7; font-size: 1.05rem; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 1rem;">
              Both. We run deep funnel audits on your current domain infrastructure to patch existing leaks, and we also build entirely new, fast-loading, standalone landing pages specifically tailored for your paid media traffic.
            </div>
          </details>
          <details style="border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); border-radius: 12px; padding: 1.5rem;">
            <summary style="font-size: 1.25rem; font-weight: 600; cursor: pointer; color: #fff; display: flex; justify-content: space-between; align-items: center; list-style: none;">
              What testing tools do you use?
              <span style="color: var(--pdx-green); font-size: 1.5rem;">+</span>
            </summary>
            <div style="padding-top: 1rem; color: rgba(245, 242, 236, 0.7); line-height: 1.7; font-size: 1.05rem; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 1rem;">
              We are tool-agnostic but typically deploy VWO, Optimizely, or Google Optimize equivalents based on your stack. For analytics, we deeply integrate with GA4, Mixpanel, and Hotjar to ensure our numbers are bulletproof.
            </div>
          </details>
        </div>
      </div>
    </section>

  </main>"""

parts = text.split('<main class="pdx-shell">')
if len(parts) >= 2:
    pre = parts[0]
    # The file might have multiple </main>s if nested (rare, but let's be careful). Split on first trailing </main>
    post = parts[1].split('</main>', 1)[1]
    with open("C:/Users/sam/Desktop/vscode-weflair/weflair-clean/services/performance-design.html", "w", encoding="utf-8") as f:
        f.write(pre + new_main + post)
        print("Success")
else:
    print("Could not split by <main class=\"pdx-shell\">")
