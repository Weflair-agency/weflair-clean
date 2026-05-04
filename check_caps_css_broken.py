import re

def check(filepath, name):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    print(f"--- {name} ---")
    card_name = 'b2b-capability-card' if name == 'b2b' else 'saas-capability-card'
    content_name = 'b2b-capability-content' if name == 'b2b' else 'saas-capability-content'

    m = re.search(r'\.' + card_name + r'\s*\{[^}]*\}', html, re.IGNORECASE)
    print("Card CSS:", m.group(0) if m else "No card css")

    m2 = re.search(r'\.' + card_name + r'\s+summary\s*\{[^}]*\}', html, re.IGNORECASE)
    print("Summary CSS:", m2.group(0) if m2 else "No summary css")

    m3 = re.search(r'\.' + content_name + r'\s*\{[^}]*\}', html, re.IGNORECASE)
    print("Content CSS:", m3.group(0) if m3 else "No content css")

check('expertise/b2b-saas.html', 'saas')
check('expertise/b2b-services.html', 'b2b')
