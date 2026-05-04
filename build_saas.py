import re
import json

try:
    with open('extracted_components.json', 'r', encoding='utf-8') as f:
        out = json.load(f)
except Exception:
    out = {}

proof = out.get('proof', '')
why = out.get('why_weflair', '')
res = out.get('resources', '')
logos = ""
with open('tmp_logos.txt', 'r', encoding='utf-8') as f:
    logos = f.read()

# Let's read B2B Services so we can reuse some styles and the Process Section
with open('expertise/b2b-services.html', 'r', encoding='utf-8') as f:
    b2b_html = f.read()

m_proc = re.search(r'<!-- SECTION 6: PROCESS -->.*?<section class="b2b-section expertise-container">.*?</section>', b2b_html, re.IGNORECASE | re.DOTALL)
process_html = m_proc.group(0) if m_proc else ''

# Replace titles in process_html
process_html = process_html.replace('b2b-brand', 'saas-brand')
process_html = process_html.replace('Our process to improve your pipeline', 'Our 3-step blueprint for SaaS growth')

# Let's craft the new CSS for B2B SaaS
css_block = """
    <style>
      :root {
        --saas-brand: #22c55e;
        --saas-bg: #000;
        --saas-surface: #0a0a0a;
        --saas-border: rgba(255, 255, 255, 0.1);
      }
      .saas-page {
        font-family: inherit;
        color: #fff;
        background: var(--saas-bg);
      }
      .expertise-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 5%;
      }
      /* Minimal Hero */
      .saas-hero {
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 8rem 0 4rem;
        background: radial-gradient(circle at top right, rgba(34, 197, 94, 0.15) 0%, transparent 60%);
      }
      .saas-hero h1 {
        font-size: clamp(3.5rem, 5vw, 6rem);
        line-height: 1.1;
        letter-spacing: -0.04em;
        margin-bottom: 2rem;
        font-weight: 500;
      }
      .saas-hero p {
        font-size: 1.4rem;
        color: rgba(255, 255, 255, 0.7);
        max-width: 800px;
        margin: 0 auto 3rem;
        line-height: 1.5;
      }
      .saas-hero-actions {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
      }
      .saas-btn {
        display: inline-flex;
        align-items: center;
        padding: 1.2rem 2.5rem;
        font-size: 1.1rem;
        font-weight: 500;
        border-radius: 4px;
        transition: all 0.3s ease;
        text-decoration: none;
        cursor: pointer;
      }
      .saas-btn-primary {
        background: var(--saas-brand);
        color: #000;
      }
      .saas-btn-primary:hover {
        background: #fff;
        color: #000;
      }
      .saas-btn-ghost {
        background: transparent;
        color: #fff;
        border: 1px solid var(--saas-border);
      }
      .saas-btn-ghost:hover {
        border-color: #fff;
      }
      .saas-section {
        padding: 8rem 0;
        border-bottom: 1px solid var(--saas-border);
      }
      .saas-eyebrow {
        color: var(--saas-brand);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        display: block;
      }
      .saas-section-header h2 {
        font-size: 3rem;
        max-width: 800px;
        margin-bottom: 3rem;
        line-height: 1.2;
      }
      .saas-section-header p {
        font-size: 1.2rem;
        color: rgba(255,255,255,0.7);
        max-width: 600px;
      }
      
      
      .b2b-process-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 3rem;
      }
      .b2b-process-step {
        padding: 2.5rem;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--saas-border);
        border-top: 3px solid transparent;
        transition: all 0.3s ease;
      }
      .b2b-process-step:hover {
        border-top-color: var(--saas-brand);
      }
      .b2b-process-step span {
        display: block;
        font-size: 0.85rem;
        color: var(--saas-brand);
        margin-bottom: 2rem;
        letter-spacing: 0.1em;
      }
      .b2b-process-step h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }
      .b2b-process-step p {
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
      }
      @media (max-width: 1024px) {
        .b2b-process-grid { grid-template-columns: 1fr; }
      }
      
      
      /* Process grid (imported from B2B) */
      .b2b-process-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 3rem;
      }
      .b2b-process-step {
        padding: 2.5rem;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--saas-border);
        border-top: 3px solid transparent;
        transition: all 0.3s ease;
      }
      .b2b-process-step:hover {
        border-top-color: var(--saas-brand);
      }
      .b2b-process-step span {
        display: block;
        font-size: 0.85rem;
        color: var(--saas-brand);
        margin-bottom: 2rem;
        letter-spacing: 0.1em;
      }
      .b2b-process-step h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }
      .b2b-process-step p {
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
      }
      @media (max-width: 1024px) {
        .b2b-process-grid { grid-template-columns: 1fr; }
      }

      /* Interactive Services Grid */
      .saas-services-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
      .saas-service-card {
        background: var(--saas-surface);
        border: 1px solid var(--saas-border);
        padding: 3rem 2rem;
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
      }
      .saas-service-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; width: 100%; height: 3px;
        background: var(--saas-brand);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s ease;
      }
      .saas-service-card:hover::before {
        transform: scaleX(1);
      }
      .saas-service-card:hover {
        border-color: rgba(255,255,255,0.3);
        transform: translateY(-5px);
      }
      .saas-service-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      .saas-service-card p {
        color: rgba(255,255,255,0.6);
        line-height: 1.6;
        margin-bottom: 2rem;
      }
      .saas-service-link {
        color: var(--saas-brand);
        text-decoration: none;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
      }

      /* Why Partner (Benefits Grid) */
      .saas-benefits {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem;
        align-items: center;
      }
      .saas-benefit-content h3 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        line-height: 1.2;
      }
      .saas-benefit-content p {
        font-size: 1.1rem;
        color: rgba(255,255,255,0.7);
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }
      .saas-benefit-stats {
        background: var(--saas-surface);
        padding: 3rem;
        border: 1px solid var(--saas-border);
        border-left: 4px solid var(--saas-brand);
      }
      .saas-stat-item {
        margin-bottom: 2rem;
      }
      .saas-stat-item:last-child { margin-bottom: 0; }
      .saas-stat-value {
        font-size: 3rem;
        font-weight: 500;
        color: var(--saas-brand);
        margin-bottom: 0.5rem;
      }
      .saas-stat-label {
        color: rgba(255,255,255,0.8);
      }

      /* Accordion FAQ */
      .saas-faq { max-width: 900px; margin: 0 auto; }
      .saas-faq details {
        border-bottom: 1px solid var(--saas-border);
        padding: 2rem 0;
      }
      .saas-faq summary {
        font-size: 1.5rem;
        font-weight: 500;
        cursor: pointer;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .saas-faq summary::after {
        content: '+';
        font-size: 2rem;
        color: var(--saas-brand);
        transition: transform 0.3s ease;
      }
      .saas-faq details[open] summary::after {
        transform: rotate(45deg);
      }
      .saas-faq-content {
        padding-top: 1.5rem;
        color: rgba(255,255,255,0.6);
        line-height: 1.6;
        font-size: 1.1rem;
      }

      @media (max-width: 1024px) {
        .saas-services-grid { grid-template-columns: repeat(2, 1fr); }
        .saas-benefits { grid-template-columns: 1fr; gap: 2rem; }
      }
      @media (max-width: 768px) {
        .saas-services-grid { grid-template-columns: 1fr; }
        .saas-hero-actions { flex-direction: column; }
        .saas-hero h1 { font-size: 3rem; }
      }
    </style>
"""

hero_html = f"""
    <!-- SECTION 1: HERO -->
    <section class="saas-hero expertise-container">
      <div class="saas-eyebrow">SaaS Marketing Agency</div>
      <h1>Scale your SaaS revenue with precision-led marketing</h1>
      <p>We are a performance-obsessed marketing agency that helps B2B SaaS companies drive qualified demos, lower CAC, and grow Annual Recurring Revenue.</p>
      <div class="saas-hero-actions">
        <a href="../contact.html" class="saas-btn saas-btn-primary">Book a Discovery Call</a>
        <a href="#services" class="saas-btn saas-btn-ghost">Explore Our Services</a>
      </div>
    </section>

    <!-- SECTION 2: LOGOS -->
    <div class="saas-section" style="padding: 4rem 0;">
      {logos}
    </div>
"""

services_html = """
    <!-- SECTION 3: SERVICES -->
    <section id="services" class="saas-section expertise-container">
      <div class="saas-section-header">
        <span class="saas-eyebrow">Our Software Capabilities</span>
        <h2>Full-funnel marketing services for B2B SaaS</h2>
      </div>
      <div class="saas-services-grid">
        <div class="saas-service-card">
          <h3>B2B SEO & Organic Growth</h3>
          <p>We build organic growth engines. High-intent technical content, programmatic SEO, and authoritative link building to dominate search.</p>
          <a href="#" class="saas-service-link">Learn More <span>&rarr;</span></a>
        </div>
        <div class="saas-service-card">
          <h3>Paid Media & PPC</h3>
          <p>Profitable customer acquisition via Google Ads, LinkedIn, and Meta. We target in-market buyers to drive immediate pipeline impact.</p>
          <a href="#" class="saas-service-link">Learn More <span>&rarr;</span></a>
        </div>
        <div class="saas-service-card">
          <h3>Conversion Rate Optimization</h3>
          <p>Turning traffic into trials. We continuously A/B test your landing pages, pricing grids, and onboarding flows to maximize user activation.</p>
          <a href="#" class="saas-service-link">Learn More <span>&rarr;</span></a>
        </div>
        <div class="saas-service-card">
          <h3>Lifecycle & Email Automation</h3>
          <p>Post-signup workflows. We optimize email cadences to reduce churn, recover lost carts, and convert freemium users to paid tiers.</p>
          <a href="#" class="saas-service-link">Learn More <span>&rarr;</span></a>
        </div>
        <div class="saas-service-card">
          <h3>Performance Creative</h3>
          <p>High-converting static and video assets engineered specifically for B2B SaaS personas. Scroll-stopping creative that educates and sells.</p>
          <a href="#" class="saas-service-link">Learn More <span>&rarr;</span></a>
        </div>
        <div class="saas-service-card">
          <h3>RevOps & Analytics</h3>
          <p>Full-funnel attribution. We align HubSpot, Salesforce, and GA4 so you can trace every closed-won deal back to the exact campaign.</p>
          <a href="#" class="saas-service-link">Learn More <span>&rarr;</span></a>
        </div>
      </div>
    </section>
"""

benefits_html = """
    <!-- SECTION 4: WHY SAAS AGENCIES -->
    <section class="saas-section expertise-container">
      <div class="saas-benefits">
        <div class="saas-benefit-content">
          <span class="saas-eyebrow">The Partner You Need</span>
          <h3>Why B2B SaaS demands specialized marketing</h3>
          <p>Selling software isn't like selling shoes. You need an agency that understands <strong>LTV, CAC payback periods, churn curves, and MRR bridging.</strong></p>
          <p>We flair doesn't just run ads. We align horizontally with your product, sales, and customer success teams to unblock bottlenecks across the entire revenue funnel.</p>
          <a href="../contact.html" class="saas-btn saas-btn-ghost" style="margin-top: 1rem;">Work With Us</a>
        </div>
        <div class="saas-benefit-stats">
          <div class="saas-stat-item">
            <div class="saas-stat-value">3x</div>
            <div class="saas-stat-label">Average increase in demo requests for our SaaS clients</div>
          </div>
          <div class="saas-stat-item">
            <div class="saas-stat-value">35%</div>
            <div class="saas-stat-label">Average reduction in Customer Acquisition Cost (CAC)</div>
          </div>
        </div>
      </div>
    </section>
"""

faq_html = """
    <!-- SECTION 9: SAAS FAQ -->
    <section class="saas-section expertise-container">
      <div class="saas-section-header" style="text-align: center; margin: 0 auto 4rem auto; display: flex; flex-direction: column; align-items: center;">
        <span class="saas-eyebrow">FAQ</span>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="saas-faq">
        <details>
          <summary>Do you specialize purely in B2B SaaS?</summary>
          <div class="saas-faq-content">While we work with enterprise and e-commerce clients, we have a dedicated B2B SaaS team that understands MRR growth, lead nurturing, and specialized software sales cycles.</div>
        </details>
        <details>
          <summary>How long until we see an increase in ARR?</summary>
          <div class="saas-faq-content">Most of our SaaS clients see a noticeable lift in top-of-funnel MQLs within the first 60 days via Paid Search optimizations. Organic content and complex RevOps plays typically show ROI at the 4-6 month mark.</div>
        </details>
        <details>
          <summary>Will you write technical content for our blog?</summary>
          <div class="saas-faq-content">Yes. We utilize Subject Matter Expert (SME) interviews to write incredibly in-depth, authoritative, and technically accurate content that outranks competitors and convinces developers or product managers to convert.</div>
        </details>
        <details>
          <summary>How do you measure success?</summary>
          <div class="saas-faq-content">We integrate directly with your CRM. We do not measure success based on traffic or clicks. We measure success based on Sales Qualified Leads (SQLs), Pipeline generated, and ultimately, closed-won ARR.</div>
        </details>
      </div>
    </section>
"""

final_main = f"""
  <main class="saas-page pmp-wrapper">
    {css_block}
    {hero_html}
    {services_html}
    {benefits_html}
    {why}
    {process_html}
    {proof}
    {res}
    {faq_html}
  </main>
"""

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    new_html = re.sub(r'<main[^>]*>.*?</main>', final_main, html, flags=re.IGNORECASE|re.DOTALL)
    if new_html != html:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_html)
        print(f"Updated {filepath}")
    else:
        print(f"Failed to update {filepath}")


update_file('expertise/b2b-saas.html')
update_file('dist/expertise/b2b-saas.html')
