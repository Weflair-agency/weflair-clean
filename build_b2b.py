import re

html_content = '''<main class="main expertise-shell b2b-services-page">
    <style>
      .b2b-services-page {
        --b2b-brand: rgba(34, 197, 94, 1);
        --b2b-card-bg: rgba(13, 13, 20, 0.4);
        --b2b-border: rgba(255, 255, 255, 0.08);
      }
      .b2b-hero {
        padding: 8rem 0 5rem;
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
      }
      .b2b-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.75rem;
        background: rgba(34, 197, 94, 0.1);
        color: var(--b2b-brand);
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 2rem;
      }
      .b2b-eyebrow::before {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        background: var(--b2b-brand);
        border-radius: 50%;
      }
      .b2b-hero h1 {
        font-size: clamp(3rem, 6vw, 4.5rem);
        line-height: 1.05;
        font-weight: 500;
        margin-bottom: 1.5rem;
        letter-spacing: -0.02em;
      }
      .b2b-hero p {
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.7);
        max-width: 700px;
        margin: 0 auto 3rem;
        line-height: 1.6;
      }
      .b2b-hero-actions {
        display: grid;
        gap: 1rem;
        justify-content: center;
      }
      .b2b-logos {
        padding: 4rem 0;
        border-top: 1px solid var(--b2b-border);
        border-bottom: 1px solid var(--b2b-border);
        text-align: center;
      }
      .b2b-logos p {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 2rem;
        color: rgba(255, 255, 255, 0.9);
      }
      .b2b-logos p em {
        font-style: italic;
        color: rgba(255, 255, 255, 0.5);
      }
      .b2b-logo-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
        opacity: 0.6;
      }
      .b2b-logo-grid img {
        height: 32px;
        filter: grayscale(100%) brightness(200%);
      }
      
      .b2b-section {
        padding: 8rem 0;
      }
      .b2b-section-header {
        margin-bottom: 4rem;
        max-width: 800px;
      }
      .b2b-section-header h2 {
        font-size: clamp(2rem, 4vw, 3rem);
        line-height: 1.1;
        margin-bottom: 1rem;
      }
      .b2b-section-header p {
        font-size: 1.15rem;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
      }
      .b2b-section-header p em {
        color: rgba(255, 255, 255, 0.9);
        font-style: italic;
      }
      
      .b2b-problems-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      .b2b-problem-card {
        padding: 3rem;
        background: var(--b2b-card-bg);
        border: 1px solid var(--b2b-border);
        border-radius: 1px;
        transition: border-color 0.3s ease;
      }
      .b2b-problem-card:hover {
        border-color: rgba(255, 255, 255, 0.2);
      }
      .b2b-problem-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .b2b-problem-card h3 svg {
        width: 24px;
        height: 24px;
        color: var(--b2b-brand);
      }
      .b2b-problem-card p {
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
      }

      .b2b-capabilities {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      .b2b-capability-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 3rem;
        background: var(--b2b-card-bg);
        border: 1px solid var(--b2b-border);
        transition: transform 0.3s ease, border-color 0.3s ease;
        text-decoration: none;
        color: #fff;
      }
      .b2b-capability-card:hover {
        transform: translateX(10px);
        border-color: var(--b2b-brand);
      }
      .b2b-capability-card h3 {
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0;
      }
      .b2b-capability-card .plus {
        width: 28px;
        height: 28px;
        background: var(--b2b-brand);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 1;
      }

      .b2b-process-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
      .b2b-process-step {
        padding: 2.5rem;
        background: rgba(255, 255, 255, 0.02);
        border-top: 2px solid var(--b2b-border);
      }
      .b2b-process-step:hover {
        border-top-color: var(--b2b-brand);
      }
      .b2b-process-step span {
        display: block;
        font-size: 0.85rem;
        color: var(--b2b-brand);
        margin-bottom: 1rem;
        font-weight: bold;
      }
      .b2b-process-step h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        font-weight: 500;
      }
      .b2b-process-step p {
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
        font-size: 0.95rem;
      }

      .b2b-cta-box {
        background: linear-gradient(145deg, rgba(34,197,94,0.1) 0%, rgba(13,13,20,1) 100%);
        border: 1px solid var(--b2b-border);
        padding: 6rem 4rem;
        text-align: center;
        border-radius: 2px;
      }
      .b2b-cta-box h2 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
      }
      .b2b-cta-box p {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.6);
        max-width: 600px;
        margin: 0 auto 3rem;
      }

      /* Desktop adjustments */
      @media (max-width: 768px) {
        .b2b-problems-grid { grid-template-columns: 1fr; }
        .b2b-process-grid { grid-template-columns: 1fr; }
      }
    </style>

    <!-- SECTION 1: HERO -->
    <section class="expertise-container">
      <nav class="expertise-breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/sitemap.html">Expertise</a>
        <span>/</span>
        <span>B2B Services</span>
      </nav>
      <div class="b2b-hero">
        <div class="b2b-eyebrow">B2B Service</div>
        <h1>Hire an agency that knows how to market your service business</h1>
        <p>Built for B2B Companies Whose Expertise Is the Product. We help Professional & IT Service businesses build and scale marketing engines that generate pipeline.</p>
        <div class="b2b-hero-actions">
          <a href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
            <div class="btn__bg"></div>
            <div class="btn__text"><span class="btn__span">Talk to us</span></div>
          </a>
          <a href="#results" class="btn w-inline-block weflair-btn weflair-btn--ghost">
            <div class="btn__bg"></div>
            <div class="btn__text"><span class="btn__span">Explore our results</span></div>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 2: LOGOS/TRUST -->
    <section class="b2b-logos">
      <div class="expertise-container">
        <p>50+ B2B Service Companies Trusted us to improve their <em>Marketing ROI</em></p>
        <div class="b2b-logo-grid">
          <h2>CellPoint Digital</h2>
          <h2>Harrier</h2>
          <h2>Molahin</h2>
          <h2>RCT</h2>
          <h2>Meta Estate Empire</h2>
        </div>
      </div>
    </section>

    <!-- SECTION 3: THE PROBLEMS WE SOLVE -->
    <section class="b2b-section expertise-container">
      <div class="b2b-section-header">
        <div class="b2b-eyebrow">The Struggle</div>
        <h2>The Problems We Solve.</h2>
        <p>Referrals plateau, outbound saturates, and the digital playbooks built for product companies don't translate when what you're selling is expertise. Firms that don't build a scalable digital presence find themselves dependent on networks that don't grow fast enough.</p>
      </div>
      <div class="b2b-problems-grid">
        <div class="b2b-problem-card">
          <h3>Invisible In Search <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></h3>
          <p><strong>Your Firm Doesn't Show Up When High-Intent Buyers Are Looking.</strong><br>If your firm isn't visible across search, AI-generated answers, and industry channels when buyers are evaluating, a competitor earns the consideration. Directive builds SEO, GEO, and content programs that put you in front of buyers from the first search.</p>
        </div>
        <div class="b2b-problem-card">
          <h3>Referral Ceiling <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></h3>
          <p><strong>Relying Solely on Word of Mouth Stalls Growth.</strong><br>Referrals are high-quality but unpredictable. When your growth is limited by who your network knows, scaling becomes impossible. We engineer demand generation systems that create a reliable, measurable pipeline outside of your immediate circle.</p>
        </div>
        <div class="b2b-problem-card">
          <h3>Online Expertise Gap <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></h3>
          <p><strong>Your Offline Authority Doesn't Translate Online.</strong><br>You belong to the top 1% of your field, but your digital footprint tells a different story. We build thought leadership and content infrastructure that proves your authority and turns passive readers into active buyers.</p>
        </div>
        <div class="b2b-problem-card">
          <h3>No Revenue Visibility <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></h3>
          <p><strong>Marketing Metrics Aren't Tied to Closed Deals.</strong><br>You're measuring clicks and impressions while the CFO is asking for pipeline. We connect your marketing campaigns directly to CRM data, ensuring every dollar spent is tracked through to qualified pipeline and closed revenue.</p>
        </div>
      </div>
    </section>

    <!-- SECTION 4: CAPABILITIES -->
    <section class="b2b-section expertise-container">
      <div class="b2b-section-header">
        <div class="b2b-eyebrow">Demand Capture</div>
        <h2>We know how to <em>convert</em> in-market buyers</h2>
        <p>B2B buying has changed - buyers now do their own research and reach out when they're ready to buy. We intercept that intent across performance, commerce, and communications.</p>
      </div>
      <div class="b2b-capabilities">
        <a href="#seo" class="b2b-capability-card">
          <h3>SEO & Search Engine Advertising (SEA)</h3>
          <div class="plus">+</div>
        </a>
        <a href="#cro" class="b2b-capability-card">
          <h3>Conversion Rate Optimization (CRO)</h3>
          <div class="plus">+</div>
        </a>
        <a href="#gtm" class="b2b-capability-card">
          <h3>GTM Engineering & Direct Outreach</h3>
          <div class="plus">+</div>
        </a>
        <a href="#llm" class="b2b-capability-card">
          <h3>LLM Optimization (GEO/AEO)</h3>
          <div class="plus">+</div>
        </a>
      </div>
    </section>

    <!-- SECTION 5: PROCESS -->
    <section class="b2b-section expertise-container">
      <div class="b2b-section-header" style="text-align: center; margin: 0 auto 4rem auto;">
        <div class="b2b-eyebrow">Our Process</div>
        <h2>Our process to improve your pipeline</h2>
      </div>
      <div class="b2b-process-grid">
        <div class="b2b-process-step">
          <span>01 / DATA COLLECTION</span>
          <h3>Build Authority Before the RFP Arrives</h3>
          <p>We gather and analyze data to deeply understand your market and buyers. Establish your company's digital presence and thought leadership in the channels your buyers use to evaluate options, before they are ready to engage.</p>
        </div>
        <div class="b2b-process-step">
          <span>02 / STRATEGY DEFINITION</span>
          <h3>Align Marketing to Business Development</h3>
          <p>We identify your Ideal Customer Profile, messaging strategy, channels, content and more. We integrate your marketing programs with your CRM and sales process from day one. Every qualified contact tracked.</p>
        </div>
        <div class="b2b-process-step">
          <span>03 / DEMAND GEN</span>
          <h3>Report to Revenue, Not Activity</h3>
          <p>We set up content creation systems and build highly targeted campaigns. We make you famous in your niche and build demand. Replace activity reports with CFO-ready dashboards tied directly to pipeline and revenue.</p>
        </div>
      </div>
    </section>

    <!-- SECTION 6: FAQ -->
    <section class="b2b-section expertise-container">
      <div class="b2b-section-header" style="text-align: center; margin: 0 auto 4rem auto;">
        <div class="b2b-eyebrow">FAQ</div>
        <h2>Frequently Asked Questions <br><em>About B2B Professional Services Companies</em></h2>
      </div>
      <div class="weflair-faq__wrapper" style="max-width: 800px; margin: 0 auto;">
        <!-- Question 1 -->
        <details class="weflair-faq__item" style="border-bottom: 1px solid var(--b2b-border); padding: 1.5rem 0;">
          <summary style="font-size: 1.25rem; font-weight: 500; cursor: pointer; list-style: none; display: flex; justify-content: space-between;">
            What is B2B professional services marketing? <span style="color: var(--b2b-brand)">+</span>
          </summary>
          <div style="padding-top: 1rem; color: rgba(255,255,255,0.7); line-height: 1.6;">
            It focuses on building trust and proving expertise over a long sales cycle. Unlike product marketing, you are selling the invisible—your team's knowledge, process, and past results.
          </div>
        </details>
        <!-- Question 2 -->
        <details class="weflair-faq__item" style="border-bottom: 1px solid var(--b2b-border); padding: 1.5rem 0;">
          <summary style="font-size: 1.25rem; font-weight: 500; cursor: pointer; list-style: none; display: flex; justify-content: space-between;">
            How do consulting firms get clients through digital marketing? <span style="color: var(--b2b-brand)">+</span>
          </summary>
          <div style="padding-top: 1rem; color: rgba(255,255,255,0.7); line-height: 1.6;">
            By capturing existing demand through SEO/Search Ads and creating new demand through thought leadership, LinkedIn, and robust content systems mapped directly to their ideal buyer's pain points.
          </div>
        </details>
        <!-- Question 3 -->
        <details class="weflair-faq__item" style="border-bottom: 1px solid var(--b2b-border); padding: 1.5rem 0;">
          <summary style="font-size: 1.25rem; font-weight: 500; cursor: pointer; list-style: none; display: flex; justify-content: space-between;">
            What is the best marketing strategy for a consulting firm? <span style="color: var(--b2b-brand)">+</span>
          </summary>
          <div style="padding-top: 1rem; color: rgba(255,255,255,0.7); line-height: 1.6;">
            A multi-layered approach that includes High-Intent Demand Capture (getting in front of users searching for solutions) and sustained Demand Generation (educating the market before they are ready to buy).
          </div>
        </details>
        <!-- Question 4 -->
        <details class="weflair-faq__item" style="border-bottom: 1px solid var(--b2b-border); padding: 1.5rem 0;">
          <summary style="font-size: 1.25rem; font-weight: 500; cursor: pointer; list-style: none; display: flex; justify-content: space-between;">
            Why do professional services firms need SEO? <span style="color: var(--b2b-brand)">+</span>
          </summary>
          <div style="padding-top: 1rem; color: rgba(255,255,255,0.7); line-height: 1.6;">
            Because your buyers are researching their problems natively on Google and AI search engines before they ever reach out to an agency. Being invisible in search guarantees you miss out on high-intent pipeline.
          </div>
        </details>
      </div>
    </section>

    <!-- SECTION 7: FINAL CTA -->
    <section class="b2b-section expertise-container">
      <div class="b2b-cta-box">
        <h2>Ready to Turn Your Reputation Into Pipeline?</h2>
        <p>Expertise alone doesn't win new business. The companies that grow are the ones buyers find, trust, and shortlist first.</p>
        <a href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span" style="color: #000; font-weight: 600;">Book Intro Call</span></div>
        </a>
      </div>
    </section>

  </main>'''

paths = [
    r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\expertise\b2b-services.html',
    r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\dist\expertise\b2b-services.html'
]

for p in paths:
    with open(p, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # Replace the existing <main ...>...</main> with our new html_content
    new_text = re.sub(r'<main[^>]*>.*?</main>', html_content, text, flags=re.IGNORECASE | re.DOTALL)
    
    if new_text != text:
        with open(p, 'w', encoding='utf-8') as f:
            f.write(new_text)
        print("Updated", p)
    else:
        print("Could not update", p)
