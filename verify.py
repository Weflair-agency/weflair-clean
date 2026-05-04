import re

def verify(filepath, block_type):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    
    card_name = 'b2b-capability-card' if block_type == 'b2b' else 'saas-capability-card'
    content_name = 'b2b-capability-content' if block_type == 'b2b' else 'saas-capability-content'

    # Did we leave broken CSS strings like `font-size: 1.25rem; }` floating?
    # Because my script did `html = re.sub(r'\.' + card_name + '\s+summary\s*\{[^\}]*\bpadding:\s*[^;\n]*[;\n]', '', html...`
    # That means `.saas-capability-card summary { padding: 1.5rem 2rem;` gets REPLACED by empty string.
    # Leaving `font-size: ... }` which breaks the CSS block entirely!

    # Let's fix this properly.
    pass

verify('expertise/b2b-saas.html', 'saas')
