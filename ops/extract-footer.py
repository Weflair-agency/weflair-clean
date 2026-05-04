import re
import os
path = r'C:\Users\sam\Desktop\vscode-weflair\weflair-clean\index.html'
out_header = r'C:\Users\sam\Desktop\vscode-weflair\weflair-clean\src\partials\header.html'
out_footer = r'C:\Users\sam\Desktop\vscode-weflair\weflair-clean\src\partials\footer.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

hdr = re.search(r'(<div[^>]*class="[^"]*navbar_component[^"]*"[^>]*>.*?</div><!--.*?-->)', html, re.DOTALL | re.IGNORECASE)
if not hdr:
    hdr = re.search(r'(<nav[^>]*>.*?</nav>)', html, re.DOTALL | re.IGNORECASE)

ftr = re.search(r'(<footer[^>]*>.*?</footer>)', html, re.DOTALL | re.IGNORECASE)
if not ftr:
    ftr = re.search(r'(<div[^>]*class="[^"]*footer_component[^"]*"[^>]*>.*?</div>)', html, re.DOTALL | re.IGNORECASE)
if not ftr:
    ftr = re.search(r'(<section[^>]*class="[^"]*footer[^"]*"[^>]*>.*?</section>)', html, re.DOTALL | re.IGNORECASE)

if hdr:
    with open(out_header, 'w', encoding='utf-8') as f:
        f.write(hdr.group(1))
    print('Header extracted, length:', len(hdr.group(1)))

if ftr:
    with open(out_footer, 'w', encoding='utf-8') as f:
        f.write(ftr.group(1))
    print('Footer extracted, length:', len(ftr.group(1)))
