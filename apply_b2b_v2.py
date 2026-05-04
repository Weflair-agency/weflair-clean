import re

with open('tmp_logos.txt', 'r', encoding='utf-8') as f:
    logos_html = f.read()

with open('tmp_proof.txt', 'r', encoding='utf-8') as f:
    proof_html = f.read()

BTN_TEMPLATE = """
<a data-hover="" data-btn-theme="primary" href="{href}" class="btn w-inline-block weflair-btn weflair-btn--primary">
  <div class="btn__bg"></div>
  <div class="btn__text"><span class="btn__span">{text}</span></div>
  <div class="arrow">
    <div class="arrow__bg"></div>
    <div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg">
        <path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
        <path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
        <path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
      </svg></div>
    <div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg">
        <path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
        <path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
        <path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
      </svg></div>
  </div>
</a>
"""

btn_talk = BTN_TEMPLATE.replace('{href}', '/contact.html').replace('{text}', 'Talk to us')
btn_explore = BTN_TEMPLATE.replace('{href}', '#results').replace('{text}', 'Explore results')

html_content = f'''<main class="main expertise-shell b2b-services-page">
    <style>
      .b2b-services-page {{
        --b2b-brand: rgba(34, 197, 94, 1);
        --b2b-card-bg: rgba(13, 13, 20, 0.4);
        --b2b-border: rgba(255, 255, 255, 0.08);
      }}
      .b2b-hero {{
        padding: 8rem 0 5rem;
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
      }}
      .b2b-eyebrow {{
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
      }}
      .b2b-eyebrow::before {{
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        background: var(--b2b-brand);
        border-radius: 50%;
      }}
      .b2b-hero h1 {{
        font-size: clamp(3rem, 6vw, 4.5rem);
        line-height: 1.05;
        font-weight: 500;
        margin-bottom: 1.5rem;
        letter-spacing: -0.02em;
      }}
      .b2b-hero p {{
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.7);
        max-width: 700px;
        margin: 0 auto 3rem;
        line-height: 1.6;
      }}
      .b2b-hero-actions {{
        display: flex;
        gap: 1.5rem;
        justify-content: center;
      }}

      /* Section settings */
      .b2b-section {{
        padding: 8rem 0;
      }}
      .b2b-section-header {{
        margin-bottom: 4rem;
        max-width: 800px;
      }}
      .b2b-section-header h2 {{
        font-size: clamp(2rem, 4vw, 3rem);
        line-height: 1.1;
        margin-bottom: 1rem;
      }}
      .b2b-section-header p {{
        font-size: 1.15rem;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
      }}
      .b2b-section-header p em {{
        color: rgba(255, 255, 255, 0.9);
        font-style: italic;
      }}
      
      .b2b-problems-grid {{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }}
      .b2b-problem-card {{
        padding: 3rem;
        background: var(--b2b-card-bg);
        border: 1px solid var(--b2b-border);
        border-radius: 1px;
        transition: border-color 0.3s ease;
      }}
      .b2b-problem-card:hover {{
        border-color: rgba(255, 255, 255, 0.2);
      }}
      .b2b-problem-card h3 {{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }}
      .b2b-problem-card h3 svg {{
        width: 24px;
        height: 24px;
        color: var(--b2b-brand);
      }}
      .b2b-problem-card p {{
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
      }}

      /* INTERACTIVE CAPABILITIES CSS (Accodrion Style Details/Summary) */
      .b2b-capabilities {{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }}
      .b2b-capability-card {{
        background: var(--b2b-card-bg);
        border: 1px solid var(--b2b-border);
        border-radius: 8px;
        color: #fff;
        transition: transform 0.3s ease, border-color 0.3s ease;
      }}
      .b2b-capability-card:hover {{
        border-color: var(--b2b-brand);
      }}
      .b2b-capability-card summary {{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 3rem;
        cursor: pointer;
        list-style: none; /* Remove default triangle */
        font-size: 1.25rem;
        font-weight: 500;
        outline: none;
      }}
      .b2b-capability-card summary::-webkit-details-marker {{
        display: none;
      }}
      .b2b-capability-card summary .plus {{
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
        transition: transform 0.3s ease;
      }}
      .b2b-capability-card[open] summary .plus {{
        transform: rotate(45deg); /* Turns plus to cross (x) */
      }}
      .b2b-capability-content {{
        padding: 0 3rem 2rem 3rem;
        color: rgba(255,255,255,0.7);
        line-height: 1.6;
      }}
      .b2b-cap-tags {{
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 1.2rem;
      }}
      .b2b-cap-tag {{
        padding: 0.35rem 0.85rem;
        font-size: 0.85rem;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 999px;
        color: rgba(255,255,255,0.9);
      }}

      /* -------------------------------------- */
      /* NEW SECTION: NINJA PROMO STYLE SLIDER  */
      /* -------------------------------------- */
      .ninja-slider-section {{
        padding: 8rem 0;
        background: #0b0b0e;
        overflow: hidden;
      }}
      .ninja-slider-header {{
        text-align: center;
        max-width: 800px;
        margin: 0 auto 5rem;
      }}
      .ninja-slider-header h2 {{
        font-size: clamp(2rem, 5vw, 3.5rem);
        line-height: 1.1;
      }}
      .ninja-slider-header h2 span {{
        color: rgba(255,255,255,0.5);
      }}
      .ninja-track-wrap {{
        width: 100%;
        overflow-x: auto;
        padding: 0 2rem 4rem 2rem;
        scroll-snap-type: x mandatory;
        scrollbar-width: none; /* Hide scrollbar Firefox */
      }}
      .ninja-track-wrap::-webkit-scrollbar {{
        display: none; /* Hide scrollbar Chrome/Safari */
      }}
      .ninja-track {{
        display: flex;
        gap: 2rem;
        width: fit-content;
        margin: 0 auto;
      }}
      .ninja-card {{
        width: 450px;
        min-width: 450px;
        height: 100%;
        min-height: 480px;
        padding: 3.5rem;
        background: #15151b;
        border-radius: 24px;
        border: 1px solid rgba(255,255,255,0.03);
        scroll-snap-align: center;
        display: flex;
        flex-direction: column;
        transition: transform 0.4s ease, border-color 0.4s ease;
      }}
      .ninja-card:hover {{
        border-color: rgba(255,255,255,0.15);
        transform: translateY(-5px);
      }}
      .ninja-card-icon-area {{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 2rem;
      }}
      .ninja-card h3 {{
        font-size: 2.2rem;
        font-weight: 500;
        margin: 0;
        letter-spacing: -0.01em;
      }}
      .ninja-card-icon {{
        width: 60px;
        height: 60px;
        color: var(--b2b-brand);
      }}
      .ninja-card p {{
        font-size: 1.1rem;
        color: rgba(255,255,255,0.5);
        line-height: 1.6;
        flex-grow: 1;
        margin-bottom: 3rem;
      }}
      .ninja-tags {{
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: auto;
      }}
      .ninja-tag {{
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.05);
        border-radius: 999px;
        color: rgba(255,255,255,0.4);
        transition: color 0.3s, background 0.3s;
      }}
      .ninja-tag:hover {{
        color: #fff;
        background: rgba(255,255,255,0.1);
      }}

      /* Process grid */
      .b2b-process-grid {{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }}
      .b2b-process-step {{
        padding: 2.5rem;
        background: rgba(255, 255, 255, 0.02);
        border-top: 2px solid var(--b2b-border);
      }}
      .b2b-process-step:hover {{
        border-top-color: var(--b2b-brand);
      }}
      .b2b-process-step span {{
        display: block;
        font-size: 0.85rem;
        color: var(--b2b-brand);
        margin-bottom: 1rem;
        font-weight: bold;
      }}
      .b2b-process-step h3 {{
        font-size: 1.25rem;
        margin-bottom: 1rem;
        font-weight: 500;
      }}
      .b2b-process-step p {{
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
        font-size: 0.95rem;
      }}

      /* Desktop adjustments */
      @media (max-width: 768px) {{
        .b2b-problems-grid {{ grid-template-columns: 1fr; }}
        .b2b-process-grid {{ grid-template-columns: 1fr; }}
        .b2b-capabilities {{ grid-template-columns: 1fr; }}
        .b2b-hero-actions {{ flex-direction: column; }}
        .ninja-card {{ width: 85vw; min-width: 85vw; padding: 2rem; }}
      }}
    </style>

    <!-- SECTION 1: HERO -->
    <section class="expertise-container" style="padding-top: 6rem;">
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
          {btn_talk}
          {btn_explore}
        </div>
      </div>
    </section>

    <!-- SECTION 2: LOGOS/TRUST (IMPORTED FROM HOMEPAGE) -->
    {logos_html}

    <!-- SECTION 3: NINJA PROMO STYLE SERVICE SLIDER -->
    <section class="ninja-slider-section">
      <div class="ninja-slider-header">
        <h2>Every marketing service you could wish for <br><span>— to help your B2B firm</span></h2>
      </div>
      <div class="ninja-track-wrap">
        <div class="ninja-track">

          <!-- Card 1 -->
          <div class="ninja-card">
            <div class="ninja-card-icon-area">
              <h3>Strategy & Data</h3>
              <svg class="ninja-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
            </div>
            <p>We turn raw data into transparent performance insights. Complete alignment between business goals, marketing ops, and pipeline coverage.</p>
            <div class="ninja-tags">
              <span class="ninja-tag">Performance Dashboards</span>
              <span class="ninja-tag">Conversion Tracking</span>
              <span class="ninja-tag">ICP Modeling</span>
              <span class="ninja-tag">Revenue Operations</span>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="ninja-card">
            <div class="ninja-card-icon-area">
              <h3>Demand Capture</h3>
              <svg class="ninja-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h4l3 8 5-16 3 8h5"></path></svg>
            </div>
            <p>When buyers are ready to choose a firm, we make sure they find you first. Paid and organic coverage capturing high-intent searches.</p>
            <div class="ninja-tags">
              <span class="ninja-tag">Search Engine Ads</span>
              <span class="ninja-tag">B2B SEO</span>
              <span class="ninja-tag">LLM Optimization</span>
              <span class="ninja-tag">Programmatic</span>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="ninja-card">
            <div class="ninja-card-icon-area">
              <h3>Authority Content</h3>
              <svg class="ninja-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </div>
            <p>High-level, technical content that proves your team's expertise. We translate your offline consulting dominance into your online digital footprint.</p>
            <div class="ninja-tags">
              <span class="ninja-tag">Thought Leadership</span>
              <span class="ninja-tag">Case Studies</span>
              <span class="ninja-tag">Whitepapers</span>
              <span class="ninja-tag">Executive Ghostwriting</span>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="ninja-card">
            <div class="ninja-card-icon-area">
              <h3>Conversion & UX</h3>
              <svg class="ninja-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            </div>
            <p>Traffic alone doesn't close deals. We build high-friction, deeply convincing architectures that move prospects towards contacting your sales reps.</p>
            <div class="ninja-tags">
              <span class="ninja-tag">Landing Pages</span>
              <span class="ninja-tag">CRO</span>
              <span class="ninja-tag">Interactive Demos</span>
              <span class="ninja-tag">Webflow & Framer</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 4: THE PROBLEMS WE SOLVE -->
    <section class="b2b-section expertise-container">
      <div class="b2b-section-header">
        <div class="b2b-eyebrow">The Struggle</div>
        <h2>The Problems We Solve.</h2>
        <p>Referrals plateau, outbound saturates, and the digital playbooks built for product companies don't translate when what you're selling is expertise.</p>
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

    <!-- SECTION 5: CAPABILITIES (INTERACTIVE / ACCORDION) -->
    <section class="b2b-section expertise-container" id="services">
      <div class="b2b-section-header">
        <div class="b2b-eyebrow">Demand Capture</div>
        <h2>We know how to <em>convert</em> in-market buyers</h2>
        <p>B2B buying has changed - buyers now do their own research and reach out when they're ready to buy. We intercept that intent across performance, commerce, and communications.</p>
      </div>
      <div class="b2b-capabilities">
        
        <details class="b2b-capability-card">
          <summary>
            <h3>SEO & Search Engine Advertising (SEA)</h3>
            <div class="plus">+</div>
          </summary>
          <div class="b2b-capability-content">
            <p>Dominate the keywords your buyers use when diagnosing their business problems. We unify paid search and organic search strategies so your firm controls the entire search engine results page, dropping your blended CPA while significantly raising qualified traffic.</p>
            <div class="b2b-cap-tags">
              <span class="b2b-cap-tag">Keyword Research</span>
              <span class="b2b-cap-tag">Google Ads</span>
              <span class="b2b-cap-tag">Technical SEO</span>
            </div>
          </div>
        </details>

        <details class="b2b-capability-card">
          <summary>
            <h3>Conversion Rate Optimization (CRO)</h3>
            <div class="plus">+</div>
          </summary>
          <div class="b2b-capability-content">
            <p>Traffic alone won't book a discovery call. We build high-converting landing pages, optimize contact forms, and streamline user journeys to ensure every single visitor has a clear, frictionless path to booking a consultation with your sales team.</p>
            <div class="b2b-cap-tags">
              <span class="b2b-cap-tag">A/B Testing</span>
              <span class="b2b-cap-tag">Landing Pages</span>
              <span class="b2b-cap-tag">UX Design</span>
            </div>
          </div>
        </details>

        <details class="b2b-capability-card">
          <summary>
            <h3>GTM Engineering & Direct Outreach</h3>
            <div class="plus">+</div>
          </summary>
          <div class="b2b-capability-content">
            <p>We map your entire available total addressable market (TAM) and orchestrate targeted, account-based outreach. By blending intent signals with highly personalized messaging, we put your sales reps directly into the inboxes of key decision-makers right when they're experiencing pain.</p>
            <div class="b2b-cap-tags">
              <span class="b2b-cap-tag">Cold Email Ops</span>
              <span class="b2b-cap-tag">List Building</span>
              <span class="b2b-cap-tag">Account Based Marketing</span>
            </div>
          </div>
        </details>

        <details class="b2b-capability-card">
          <summary>
            <h3>LLM Optimization (GEO/AEO)</h3>
            <div class="plus">+</div>
          </summary>
          <div class="b2b-capability-content">
            <p>The future of B2B research is happening inside AI tools. We engineer your digital presence to ensure your firm is recommended as a preferred solution inside ChatGPT, Perplexity, and Google's AI Overviews when executives ask AI for vendor recommendations.</p>
            <div class="b2b-cap-tags">
              <span class="b2b-cap-tag">AI Search</span>
              <span class="b2b-cap-tag">Perplexity</span>
              <span class="b2b-cap-tag">Digital PR</span>
            </div>
          </div>
        </details>

      </div>
    </section>

    <!-- SECTION 6: PROCESS -->
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

    <!-- SECTION 7: PROOF (CASE STUDIES IMPORTED FROM HOMEPAGE) -->
    {proof_html}

    <!-- SECTION 8: FAQ -->
    <section class="b2b-section expertise-container">
      <div class="b2b-section-header" style="text-align: center; margin: 0 auto 4rem auto;">
        <div class="b2b-eyebrow">FAQ</div>
        <h2>Frequently Asked Questions <br><em>About B2B Professional Services Companies</em></h2>
      </div>
      <div class="weflair-faq__wrapper" style="max-width: 800px; margin: 0 auto;">
        <details class="weflair-faq__item" style="border-bottom: 1px solid var(--b2b-border); padding: 1.5rem 0;">
          <summary style="font-size: 1.25rem; font-weight: 500; cursor: pointer; list-style: none; display: flex; justify-content: space-between; outline:none;">
            What is B2B professional services marketing? <span style="color: var(--b2b-brand)">+</span>
          </summary>
          <div style="padding-top: 1rem; color: rgba(255,255,255,0.7); line-height: 1.6;">
            It focuses on building trust and proving expertise over a long sales cycle. Unlike product marketing, you are selling the invisible—your team's knowledge, process, and past results.
          </div>
        </details>
        <details class="weflair-faq__item" style="border-bottom: 1px solid var(--b2b-border); padding: 1.5rem 0;">
          <summary style="font-size: 1.25rem; font-weight: 500; cursor: pointer; list-style: none; display: flex; justify-content: space-between; outline:none;">
            How do consulting firms get clients through digital marketing? <span style="color: var(--b2b-brand)">+</span>
          </summary>
          <div style="padding-top: 1rem; color: rgba(255,255,255,0.7); line-height: 1.6;">
            By capturing existing demand through SEO/Search Ads and creating new demand through thought leadership, LinkedIn, and robust content systems mapped directly to their ideal buyer's pain points.
          </div>
        </details>
        <details class="weflair-faq__item" style="border-bottom: 1px solid var(--b2b-border); padding: 1.5rem 0;">
          <summary style="font-size: 1.25rem; font-weight: 500; cursor: pointer; list-style: none; display: flex; justify-content: space-between; outline:none;">
            What is the best marketing strategy for a consulting firm? <span style="color: var(--b2b-brand)">+</span>
          </summary>
          <div style="padding-top: 1rem; color: rgba(255,255,255,0.7); line-height: 1.6;">
            A multi-layered approach that includes High-Intent Demand Capture (getting in front of users searching for solutions) and sustained Demand Generation (educating the market before they are ready to buy).
          </div>
        </details>
        <details class="weflair-faq__item" style="padding: 1.5rem 0;">
          <summary style="font-size: 1.25rem; font-weight: 500; cursor: pointer; list-style: none; display: flex; justify-content: space-between; outline:none;">
            Why do professional services firms need SEO? <span style="color: var(--b2b-brand)">+</span>
          </summary>
          <div style="padding-top: 1rem; color: rgba(255,255,255,0.7); line-height: 1.6;">
            Because your buyers are researching their problems natively on Google and AI search engines before they ever reach out to an agency. Being invisible in search guarantees you miss out on high-intent pipeline.
          </div>
        </details>
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
