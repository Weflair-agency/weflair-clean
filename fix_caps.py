import re

def fix(path):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    new_css = """
      .b2b-capabilities {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        max-width: 1000px;
        margin: 0 auto;
      }
"""
    html = re.sub(r'\.b2b-capabilities\s*{[^}]*}', new_css, html, flags=re.IGNORECASE)

    # I'll also add saas max-width just in case it didn't
    new_saas_css = """
      .saas-capabilities {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        max-width: 1000px;
        margin: 0 auto;
      }
"""
    html = re.sub(r'\.saas-capabilities\s*{[^}]*}', new_saas_css, html, flags=re.IGNORECASE)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Fixed {path}")

fix('expertise/b2b-services.html')
fix('dist/expertise/b2b-services.html')
fix('expertise/b2b-saas.html')
fix('dist/expertise/b2b-saas.html')
