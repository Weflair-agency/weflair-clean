import os
import re

fp = 'weflair-clean/index.html'
with open(fp, 'r', encoding='utf-8') as f:
    html = f.read()

# Fix the broken DOM structure with regex to ignore variable spaces/newlines
html = re.sub(
    r'<div class="weflair-handoff__frame">\s*</div>\s*<div class="weflair-handoff__media"><iframe',
    r'<div class="weflair-handoff__frame">\n                  <div class="weflair-handoff__media"><iframe',
    html
)

with open(fp, 'w', encoding='utf-8') as f:
    f.write(html)
