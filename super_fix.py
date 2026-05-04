import re

with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()

# 1. Grab all inline styles from index.html
all_styles = re.findall(r'<style[^>]*>.*?</style>', idx, re.IGNORECASE | re.DOTALL)
css_bundle = "\n".join(all_styles)

# 2. Grab JS for Proof & Playbooks/Resources
scripts = re.findall(r'<script.*?>.*?</script>', idx, re.IGNORECASE | re.DOTALL)
js_bundle = []
for s in scripts:
    if 'data-proof-switcher' in s:
        js_bundle.append(s)
js_bundle_str = "\n".join(js_bundle)

# 3. Extract the 3 specific sections precisely
m_proof = re.search(r'<section[^>]*class="[^"]*weflair-proof--switcher[^"]*"[^>]*>.*?</section>', idx, re.IGNORECASE | re.DOTALL)
proof_html = m_proof.group(0) if m_proof else ""

m_playbooks = re.search(r'<section[^>]*class="[^"]*weflair-playbooks[^"]*"[^>]*>.*?</section>', idx, re.IGNORECASE | re.DOTALL)
pb_html = m_playbooks.group(0) if m_playbooks else ""

m_res = re.search(r'<section[^>]*class="[^"]*weflair-resources-teaser[^"]*"[^>]*>.*?</section>', idx, re.IGNORECASE | re.DOTALL)
res_html = m_res.group(0) if m_res else ""

resources_combo = pb_html + "\n" + res_html

# Now we apply them to both pages

def process(filepath, is_saas):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # We want to remove all existing proof and resources sections first 
    # to avoid duplicates if replace fails.
    html = re.sub(r'<section[^>]*class="[^"]*weflair-proof[^"]*"[^>]*>.*?</section>', '', html, flags=re.IGNORECASE | re.DOTALL)
    html = re.sub(r'<section[^>]*class="[^"]*weflair-playbooks[^"]*"[^>]*>.*?</section>', '', html, flags=re.IGNORECASE | re.DOTALL)
    html = re.sub(r'<section[^>]*class="[^"]*weflair-resources-teaser[^"]*"[^>]*>.*?</section>', '', html, flags=re.IGNORECASE | re.DOTALL)

    # Where do we insert them? Before the FAQ or Contacts or Footer.
    # B2B Services has `<section class="b2b-faq">` or similar? Let's check SaaS.
    # SAAS has `<!-- SECTION 9: SAAS FAQ -->`.
    # Services has `<!-- SECTION 8: FAQs -->`.
    # Let's insert right before FAQ.
    faq_match = re.search(r'(<!-- SECTION [0-9]+: .*?FAQ.*? -->|<section[^>]*class="[^"]*faq[^"]*")', html, re.IGNORECASE)
    
    if faq_match:
        insertion_idx = faq_match.start()
        html = html[:insertion_idx] + proof_html + "\n" + resources_combo + "\n" + html[insertion_idx:]
    else:
        # Fallback to before footer or end of main
        html = html.replace('</main>', proof_html + "\n" + resources_combo + "\n</main>")

    # Clean up the old extracted_assets if they exist (we don't want duplicates of the 7 styles we injected)
    # The previous injection was just before </body>. We can wipe `<style id="weflair-proof-switcher-css">` out.
    # To be safe, we'll strip out EVERYTHING between `<!-- WEFLAIR GLOBALS INJECT -->` and `<!-- /WEFLAIR GLOBALS INJECT -->`
    # and re-inject.
    html = re.sub(r'<!-- WEFLAIR GLOBALS INJECT -->.*?<!-- /WEFLAIR GLOBALS INJECT -->', '', html, flags=re.IGNORECASE|re.DOTALL)

    # Let's also remove any previous bare `<style id="` or similar that we might have dumped at the end of body.
    html = re.sub(r'<style[^>]*id="weflair-[^>]*>.*?</style>', '', html, flags=re.IGNORECASE|re.DOTALL)
    html = re.sub(r'<script>\s*\(function \(\) \{\s*var root = document\.querySelector\("\[data-proof-switcher\](.*?</script>)', '', html, flags=re.IGNORECASE|re.DOTALL)

    # Now append the COMPLETE css_bundle to `<head>`
    head_end = html.find('</head>')
    if head_end != -1:
        inject_bundle = f"<!-- WEFLAIR GLOBALS INJECT -->\n{css_bundle}\n<!-- /WEFLAIR GLOBALS INJECT -->\n"
        html = html[:head_end] + inject_bundle + html[head_end:]

    # Append JS to `</body>`
    body_end = html.find('</body>')
    if body_end != -1:
        inject_js = f"<!-- WEFLAIR JS INJECT -->\n{js_bundle_str}\n<!-- /WEFLAIR JS INJECT -->\n"
        # First remove old js injects if present
        html = re.sub(r'<!-- WEFLAIR JS INJECT -->.*?<!-- /WEFLAIR JS INJECT -->\n', '', html, flags=re.IGNORECASE|re.DOTALL)
        # Recalculate body_end
        body_end = html.find('</body>')
        html = html[:body_end] + inject_js + html[body_end:]

    # Fix the PADDINGS and WIDTH of b2b-capabilities explicitly
    if not is_saas:
        # Match the b2b-capabilities CSS block exactly
        html = re.sub(r'(\.b2b-capabilities\s*\{\s*display:\s*grid;\s*grid-template-columns:\s*1fr\s+1fr;\s*gap:\s*)[^;\{]+(;[^}]*\})',
                      r'\1 1.5rem\2\n      .b2b-capabilities { max-width: 1000px; margin: 0 auto; }\n', html, flags=re.IGNORECASE)
        # Force padding updates no matter what
        html = html.replace('padding: 2rem 3rem;', 'padding: 1.5rem 2rem;')
        html = html.replace('padding: 2.5rem;', 'padding: 1.5rem 2rem;')
        html = html.replace('padding: 0 3rem 2rem 3rem;', 'padding: 0 2rem 2rem;')
        html = html.replace('padding: 0 2.5rem 2.5rem;', 'padding: 0 2rem 2rem;')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Successfully processed {filepath}")

process('expertise/b2b-services.html', False)
process('dist/expertise/b2b-services.html', False)
process('expertise/b2b-saas.html', True)
process('dist/expertise/b2b-saas.html', True)
