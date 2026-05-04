import re

def show(path, name):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    print(f"--- {name} ---")
    if 'b2b-services' in path:
        m = re.search(r'<section [^>]*>\s*.*?class="[^"]*b2b-capabilities[^"]*".*?</section>', html, re.IGNORECASE | re.DOTALL)
        if m:
            print("HTML wrapper snippet:\n", m.group(0)[:400])
        
        # Check all media queries for b2b-capabilities
        css_blocks = re.findall(r'@media[^{]*\{[^}]+(?:\{[^}]*\}[^}]+)*\}', html, re.IGNORECASE)
        for b in css_blocks:
            if 'b2b-capabilities' in b:
                print("\nMedia query containing b2b-capabilities:\n", b)
    else:
        m = re.search(r'<section [^>]*>\s*.*?class="[^"]*saas-capabilities[^"]*".*?</section>', html, re.IGNORECASE | re.DOTALL)
        if m:
            print("HTML wrapper snippet:\n", m.group(0)[:400])

        css_blocks = re.findall(r'@media[^{]*\{[^}]+(?:\{[^}]*\}[^}]+)*\}', html, re.IGNORECASE)
        for b in css_blocks:
            if 'saas-capabilities' in b:
                print("\nMedia query containing saas-capabilities:\n", b)

show('expertise/b2b-services.html', 'B2B SERVICES')
show('expertise/b2b-saas.html', 'SAAS')
