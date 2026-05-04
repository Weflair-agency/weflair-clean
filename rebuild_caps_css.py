import re

def purge_and_rebuild(filepath, block_type):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    css_name = 'b2b-capabilities' if block_type == 'b2b' else 'saas-capabilities'
    card_name = 'b2b-capability-card' if block_type == 'b2b' else 'saas-capability-card'
    content_name = 'b2b-capability-content' if block_type == 'b2b' else 'saas-capability-content'

    # Strip existing capability grid blocks
    html = re.sub(r'\.' + css_name + '\s*\{\s*display:\s*grid;[\s\S]*?\}', '', html, flags=re.IGNORECASE)

    # Strip existing card/summary/content paddings to avoid conflicts
    html = re.sub(r'\.' + card_name + '\s+summary\s*\{[^\}]*\bpadding:\s*[^;\n]*[;\n]', '', html, flags=re.IGNORECASE)
    html = re.sub(r'\.' + content_name + '\s*\{[^\}]*\bpadding:\s*[^;\n]*[;\n]', '', html, flags=re.IGNORECASE)
    html = re.sub(r'\.' + css_name + '\s*\{\s*max-width:[^\}]*\bmargin:\s*0\s+auto;?\s*\}', '', html, flags=re.IGNORECASE)

    # Replace specific bad rules from earlier injections inside media queries completely if they exist
    # This prevents the generic "1fr 1fr" from reappearing
    
    # Check if we already injected our fix
    if "id=\"weflair-capabilities-fix\"" in html:
        html = re.sub(r'<style id="weflair-capabilities-fix">.*?</style>', '', html, flags=re.IGNORECASE | re.DOTALL)

    fix_css = f"""
    <style id="weflair-capabilities-fix">
      /* Capabilities Grid */
      .{css_name} {{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        box-sizing: border-box;
      }}

      /* The Card itself */
      .{card_name} {{
        width: 100%;
        box-sizing: border-box;
        overflow: hidden; /* Prevent horizontal overflow */
        height: auto;
      }}

      /* Summary (Header of the card) */
      .{card_name} summary {{
        padding: clamp(1rem, 3vw, 1.5rem) clamp(1.2rem, 4vw, 2rem) !important;
        font-size: clamp(1.1rem, 2.5vw, 1.3rem) !important;
        box-sizing: border-box;
        width: 100%;
      }}

      /* Content (Open state text) */
      .{content_name} {{
        padding: 0 clamp(1.2rem, 4vw, 2rem) clamp(1.2rem, 4vw, 2rem) !important;
        box-sizing: border-box;
        font-size: clamp(0.95rem, 1.5vw, 1.1rem);
        max-width: 100%;
        word-wrap: break-word;
      }}

      /* The wrapper */
      .expertise-container {{
        width: 100%;
        max-width: 1400px;
        padding: 0 5%;
        margin: 0 auto;
        box-sizing: border-box;
      }}

      /* Process grid fallback spacing */
      .b2b-process-grid {{
        width: 100%;
        max-width: 1200px;
        margin: 3rem auto 0 auto;
        box-sizing: border-box;
      }}

      /* Mobile Responsiveness */
      @media (max-width: 1024px) {{
        .{css_name} {{
          grid-template-columns: 1fr !important;
          max-width: 800px;
          gap: 1.5rem;
        }}
        .b2b-process-grid {{
          grid-template-columns: 1fr !important;
          max-width: 800px;
        }}
      }}

      @media (max-width: 768px) {{
        .{css_name} {{
          gap: 1rem;
        }}
        .expertise-container {{
          padding: 0 1rem; /* tighter on mobile */
        }}
      }}
    </style>
"""
    head_end = html.find('</head>')
    if head_end != -1:
        html = html[:head_end] + fix_css + html[head_end:]
    else:
        # Fallback if no head found
        html = html.replace('<body>', f'<body>\n{fix_css}')

    # Save
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Fixed {filepath}")

# Run function
purge_and_rebuild('expertise/b2b-services.html', 'b2b')
purge_and_rebuild('dist/expertise/b2b-services.html', 'b2b')
purge_and_rebuild('expertise/b2b-saas.html', 'saas')
purge_and_rebuild('dist/expertise/b2b-saas.html', 'saas')
