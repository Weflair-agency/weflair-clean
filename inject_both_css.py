import re

css_to_inject = """<style id="weflair-capabilities-fix">
      /* Capabilities Container (B2B and SaaS) */
      .b2b-capabilities,
      .saas-capabilities {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        width: 100%;
        max-width: 1000px; /* Restrict width! */
        margin: 0 auto;
        box-sizing: border-box;
      }

      /* The Card itself */
      .b2b-capability-card,
      .saas-capability-card {
        width: 100%;
        box-sizing: border-box;
        overflow: hidden; /* Prevent horizontal overflow */
        height: auto;
        /* Re-add the basic visual styles since the regex stripped them */
        background: linear-gradient(145deg, rgba(23, 23, 23, 0.4) 0%, rgba(13, 13, 13, 0.6) 100%);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
      }

      /* Summary (Header of the card) */
      .b2b-capability-card summary,
      .saas-capability-card summary {
        padding: clamp(1rem, 3vw, 1.5rem) clamp(1.2rem, 4vw, 2rem) !important;
        font-size: clamp(1.1rem, 2.5vw, 1.3rem) !important;
        box-sizing: border-box;
        width: 100%;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none; /* Remove default triangle */
        outline: none;
        font-weight: 500;
      }

      /* Webkit specific removal of details chevron */
      .b2b-capability-card summary::-webkit-details-marker,
      .saas-capability-card summary::-webkit-details-marker {
        display: none;
      }

      /* Content (Open state text) */
      .b2b-capability-content,
      .saas-capability-content {
        padding: 0 clamp(1.2rem, 4vw, 2rem) clamp(1.2rem, 4vw, 2rem) !important;
        box-sizing: border-box;
        font-size: clamp(0.95rem, 1.5vw, 1.1rem);
        max-width: 100%;
        word-wrap: break-word;
        color: rgba(255,255,255,0.7);
        line-height: 1.6;
      }

      /* The wrapper for spacing */
      .expertise-container {
        width: 100%;
        max-width: 1200px;
        padding: 0 5%;
        margin: 0 auto;
        box-sizing: border-box;
      }

      /* Process grid fallback spacing */
      .b2b-process-grid {
        width: 100%;
        max-width: 1200px;
        margin: 3rem auto 0 auto;
        box-sizing: border-box;
      }

      /* Mobile Responsiveness */
      @media (max-width: 1024px) {
        .b2b-capabilities,
        .saas-capabilities {
          grid-template-columns: 1fr !important;
          max-width: 800px;
          gap: 1.5rem;
        }
        .b2b-process-grid {
          grid-template-columns: 1fr !important;
          max-width: 800px;
        }
      }

      @media (max-width: 768px) {
        .b2b-capabilities,
        .saas-capabilities {
          gap: 1rem;
        }
        .expertise-container {
          padding: 0 1rem; /* tighter on mobile */
        }
      }
    </style>"""

for filepath in ['expertise/b2b-services.html', 'expertise/b2b-saas.html', 'dist/expertise/b2b-services.html', 'dist/expertise/b2b-saas.html']:
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Replace existing #weflair-capabilities-fix block
    html = re.sub(r'<style id="weflair-capabilities-fix">.*?</style>', css_to_inject, html, flags=re.IGNORECASE | re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Updated {filepath}")
