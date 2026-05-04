import re
with open('expertise/b2b-saas.html', 'r', encoding='utf-8') as f:
    html = f.read()

m = re.search(r'<div class="saas-capabilities">.*?(?:</section>|</div>)', html, re.DOTALL)
if m:
    print(m.group(0)[:800])
