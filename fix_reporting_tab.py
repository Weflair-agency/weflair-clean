import os
import re

fp = 'weflair-clean/index.html'
with open(fp, 'r', encoding='utf-8') as f:
    html = f.read()

# Fix the reporting tab to remove the left-over frame-label box
html = re.sub(
    r'<div class="weflair-handoff__frame-label">.*?<span>Revenue reporting</span></div>\s*</div>',
    '',
    html,
    flags=re.DOTALL
)

with open(fp, 'w', encoding='utf-8') as f:
    f.write(html)
