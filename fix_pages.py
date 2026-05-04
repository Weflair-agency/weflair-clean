import re
import json

with open('extracted_assets.json', 'r', encoding='utf-8') as f:
    assets = json.load(f)

css = assets['css']
js = assets['js']
proof = assets['proof']
playbooks = assets['playbooks']
teaser = assets['teaser']

# Create a block holding all appended assets
appended_assets = f"{css}\n{proof}\n{playbooks}\n{teaser}\n{js}"

# We don't want to just concat them at the end. We need to REPLACE the old proof and resources sections.
# Let's replace the existing weflair-proof with the NEW proof.
# Then replace existing weflair-resources-teaser with Playbooks AND Teaser.
# Then insert the CSS and JS at the bottom of </body>.

def process_page(filepath, is_saas=False):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Replace proof
    new_proof_html = proof
    html = re.sub(r'<section[^>]*class="[^"]*weflair-proof[^"]*"[^>]*>.*?</section>', new_proof_html, html, flags=re.IGNORECASE|re.DOTALL)

    # 2. Replace resources (old teaser or playbooks)
    res_replacement = f"{playbooks}\n{teaser}"
    if 'weflair-resources-teaser' in html:
        html = re.sub(r'<section[^>]*class="[^"]*weflair-resources-teaser[^"]*"[^>]*>.*?</section>', res_replacement, html, flags=re.IGNORECASE|re.DOTALL)
    elif 'weflair-playbooks' in html:
        html = re.sub(r'<section[^>]*class="[^"]*weflair-playbooks[^"]*"[^>]*>.*?</section>', res_replacement, html, flags=re.IGNORECASE|re.DOTALL)
    else:
        # If neither exists, put it after proof
        pass # Handle manually if needed.

    # 3. Add CSS to head if not present
    if "data-proof-switcher" not in html:
        # We need to inject JS and CSS at end of body
        html = html.replace('</body>', f"{css}\n{js}\n</body>")

    # 4. Fix Capabilities sizing explicitly via CSS replacement
    if not is_saas:
        html = re.sub(r'(\.b2b-capabilities\s*\{\s*display:\s*grid;\s*grid-template-columns:)\s*1fr\s+1fr;(\s*gap:)\s*2rem;(\s*\})',
                      r'\1 1fr 1fr;\2 1.5rem;\3\n      .b2b-capabilities { max-width: 1000px; margin: 0 auto; }\n', html, flags=re.IGNORECASE)
        html = re.sub(r'(\.b2b-capability-card\s+summary\s*\{\s*padding:)\s*2\.5rem;',
                      r'\1 1.5rem 2rem;', html, flags=re.IGNORECASE)
        html = re.sub(r'(\.b2b-capability-content\s*\{\s*padding:)\s*0\s+2\.5rem\s+2\.5rem;',
                      r'\1 0 2rem 2rem;', html, flags=re.IGNORECASE)
    else:
        # For SAAS we replace the cards array with accordion style entirely.
        # But first update the CSS block for saas-services-grid to look like b2b capabilities.
        saas_cap_css = """
      .saas-capabilities {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        max-width: 1000px;
        margin: 0 auto;
      }
      .saas-capability-card {
        background: var(--saas-surface);
        border: 1px solid var(--saas-border);
        border-radius: 4px;
        transition: all 0.3s ease;
      }
      .saas-capability-card summary {
        padding: 1.5rem 2rem;
        font-size: 1.25rem;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
      }
      .saas-capability-card summary::-webkit-details-marker { display: none; }
      .saas-capability-card summary .plus {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--saas-brand);
        transition: transform 0.3s ease;
      }
      .saas-capability-card[open] summary .plus {
        transform: rotate(45deg);
      }
      .saas-capability-content {
        padding: 0 2rem 2rem;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
        animation: saasFadeIn 0.3s ease forwards;
      }
      @keyframes saasFadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (max-width: 768px) {
        .saas-capabilities { grid-template-columns: 1fr; }
      }
"""
        html = re.sub(r'\.saas-services-grid\s*\{[^}]*\}', '', html, flags=re.IGNORECASE)
        html = re.sub(r'\.saas-service-card[^}]*\}', '', html, flags=re.IGNORECASE)
        html = re.sub(r'\.saas-service-link[^}]*\}', saas_cap_css, html, flags=re.IGNORECASE)
        html = html.replace('.saas-service-link', '.deleted ') # Cleanup leftover link CSS rule

        # HTML Replacement
        new_saas_html = """
      <div class="saas-capabilities">
        <details class="saas-capability-card">
          <summary><h3>B2B SEO & Organic Growth</h3><div class="plus">+</div></summary>
          <div class="saas-capability-content"><p>We build organic growth engines. High-intent technical content, programmatic SEO, and authoritative link building to dominate search.</p></div>
        </details>
        <details class="saas-capability-card">
          <summary><h3>Paid Media & PPC</h3><div class="plus">+</div></summary>
          <div class="saas-capability-content"><p>Profitable customer acquisition via Google Ads, LinkedIn, and Meta. We target in-market buyers to drive immediate pipeline impact.</p></div>
        </details>
        <details class="saas-capability-card">
          <summary><h3>Conversion Rate Optimization</h3><div class="plus">+</div></summary>
          <div class="saas-capability-content"><p>Turning traffic into trials. We continuously A/B test your landing pages, pricing grids, and onboarding flows to maximize user activation.</p></div>
        </details>
        <details class="saas-capability-card">
          <summary><h3>Lifecycle & Email Automation</h3><div class="plus">+</div></summary>
          <div class="saas-capability-content"><p>Post-signup workflows. We optimize email cadences to reduce churn, recover lost carts, and convert freemium users to paid tiers.</p></div>
        </details>
        <details class="saas-capability-card">
          <summary><h3>Performance Creative</h3><div class="plus">+</div></summary>
          <div class="saas-capability-content"><p>High-converting static and video assets engineered specifically for B2B SaaS personas. Scroll-stopping creative that educates and sells.</p></div>
        </details>
        <details class="saas-capability-card">
          <summary><h3>RevOps & Analytics</h3><div class="plus">+</div></summary>
          <div class="saas-capability-content"><p>Full-funnel attribution. We align HubSpot, Salesforce, and GA4 so you can trace every closed-won deal back to the exact campaign.</p></div>
        </details>
      </div>
"""
        html = re.sub(r'<div class="saas-services-grid">.*?</div>\s*</section>', new_saas_html + '</section>', html, flags=re.IGNORECASE|re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Updated {filepath}")

process_page('expertise/b2b-services.html')
process_page('dist/expertise/b2b-services.html')
process_page('expertise/b2b-saas.html', is_saas=True)
process_page('dist/expertise/b2b-saas.html', is_saas=True)
