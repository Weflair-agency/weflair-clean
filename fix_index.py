import os
import re

fp = 'weflair-clean/index.html'
with open(fp, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove the entire <div class="weflair-handoff__frame-bar">...</div> since it contains the dots and the tags
html = re.sub(r'<div class="weflair-handoff__frame-bar">.*?</div>', '', html, flags=re.DOTALL)

# 2. Add the 4th reporting iframe 
# Find the 4th tab's video and replace it with an iframe
html = re.sub(
    r'<div class="weflair-handoff__media">\s*<video src="/handoff-assets/reporting\.webm".*?</video>\s*</div>',
    '<div class="weflair-handoff__media"><iframe src="/handoff-cards/reporting-card.html" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain;"></iframe></div>',
    html,
    flags=re.DOTALL
)

with open(fp, 'w', encoding='utf-8') as f:
    f.write(html)
