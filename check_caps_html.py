import re

for filepath in ['expertise/b2b-services.html', 'expertise/b2b-saas.html']:
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    print(f"--- {filepath} ---")
    caps = re.search(r'<div class="b2b-capabilities">.*?(</section>)', html, re.IGNORECASE | re.DOTALL)
    if caps:
        print("Found b2b-capabilities")
        print(caps.group(0)[:500])

    saas = re.search(r'<div class="saas-capabilities">.*?(</section>)', html, re.IGNORECASE | re.DOTALL)
    if saas:
        print("Found saas-capabilities")
        print(saas.group(0)[:500])
