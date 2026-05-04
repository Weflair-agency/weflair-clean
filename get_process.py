import re

with open('expertise/b2b-services.html', 'r', encoding='utf-8') as f:
    html = f.read()

m = re.search(r'<section class="weflair-section pmp-process">.*?</section>', html, re.IGNORECASE | re.DOTALL)
if m:
    with open('tmp_saas_process.txt', 'w', encoding='utf-8') as out:
        out.write(m.group(0))
    print('Found process', len(m.group(0)))
else:
    print('Not found')
