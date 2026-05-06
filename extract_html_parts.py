import re

with open('services/go-to-market-systems.html', 'r', encoding='utf-8') as f:
    html = f.read()

header = html.split('<main id="main"')[0]
footer_split = html.split('<!-- FOOTER -->')
footer = footer_split[-1] if len(footer_split) > 1 else ''

with open('gtm_header.txt', 'w', encoding='utf-8') as f:
    f.write(header)

with open('gtm_footer.txt', 'w', encoding='utf-8') as f:
    f.write('<!-- FOOTER -->' + footer)

print('extracted')
