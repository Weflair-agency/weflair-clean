import re

css_to_inject = """<style id="weflair-capabilities-fix">
      /* Capabilities Container (B2B and SaaS) */
      .b2b-capabilities,
      .saas-capabilities {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        width: 100%;
        max-width: 900px; /* Restrict width! */
        margin: 0 auto;
        box-sizing: border-box;
      }

      /* The Card itself */
      .b2b-capability-card,
      .saas-capability-card {
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        height: auto;
        background: linear-gradient(145deg, rgba(23, 23, 23, 0.4) 0%, rgba(13, 13, 13, 0.6) 100%);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        transition: border-color 0.3s ease;
      }
      .b2b-capability-card:hover,
      .saas-capability-card:hover {
        border-color: rgba(255, 255, 255, 0.15);
      }

      /* Summary (Header of the card) */
      .b2b-capability-card summary,
      .saas-capability-card summary {
        padding: 1.2rem 1.5rem !important;
        box-sizing: border-box;
        width: 100%;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none; /* Remove default triangle */
        outline: none;
      }

      /* <h3> inside Summary */
      .b2b-capability-card summary h3,
      .saas-capability-card summary h3 {
        font-size: clamp(1.1rem, 2vw, 1.4rem) !important;
        font-weight: 500 !important;
        margin: 0 !important;
        line-height: 1.2 !important;
        letter-spacing: -0.01em;
      }

      /* The Plus Icon */
      .b2b-capability-card summary .plus,
      .saas-capability-card summary .plus {
        font-size: 1.5rem !important;
        font-weight: 300 !important;
        line-height: 1 !important;
        margin-left: 1rem;
        transition: transform 0.3s ease;
        opacity: 0.6;
      }

      /* When details is open, rotate the plus or style it */
      .b2b-capability-card[open] summary .plus,
      .saas-capability-card[open] summary .plus {
        transform: rotate(45deg);
        opacity: 1;
      }

      /* Webkit specific removal of details chevron */
      .b2b-capability-card summary::-webkit-details-marker,
      .saas-capability-card summary::-webkit-details-marker {
        display: none;
      }

      /* Content (Open state text) */
      .b2b-capability-content,
      .saas-capability-content {
        padding: 0 1.5rem 1.5rem 1.5rem !important;
        box-sizing: border-box;
        font-size: clamp(0.95rem, 1.5vw, 1.05rem) !important;
        max-width: 100%;
        word-wrap: break-word;
        color: rgba(255,255,255,0.7);
        line-height: 1.6;
        margin-top: -0.5rem;
      }

      /* The wrapper for spacing */
      .expertise-container {
        width: 100%;
        max-width: 1200px;
        padding: 0 5%;
        margin: 0 auto;
        box-sizing: border-box;
      }

      /* Mobile Responsiveness */
      @media (max-width: 1024px) {
        .b2b-capabilities,
        .saas-capabilities {
          grid-template-columns: 1fr !important;
          max-width: 800px;
          gap: 1rem;
        }
      }

      @media (max-width: 768px) {
        .b2b-capabilities,
        .saas-capabilities {
          max-width: 100%;
        }
        .expertise-container {
          padding: 0 1rem;
        }
        .b2b-capability-card summary h3,
        .saas-capability-card summary h3 {
          font-size: 1.1rem !important;
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
