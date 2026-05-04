import re

with open('expertise/b2b-services.html', 'r', encoding='utf-8') as f:
    html = f.read()

m = re.search(r'(<div class="b2b-capabilities">.*?</div>)\s*</section>', html, re.IGNORECASE | re.DOTALL)
if m:
    print(m.group(1)[:500])

with open('expertise/b2b-saas.html', 'r', encoding='utf-8') as f:
    html_saas = f.read()

m_saas = re.search(r'(<div class="saas-capabilities">.*?</div>)\s*</section>', html_saas, re.IGNORECASE | re.DOTALL)
if m_saas:
    print(m_saas.group(1)[:500])

