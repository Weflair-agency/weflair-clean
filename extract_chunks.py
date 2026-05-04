import re
import json

with open(r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

out = {}

# Logo Module
m = re.search(r'<section class="logo-module weflair-section">.*?</section>', html, re.IGNORECASE | re.DOTALL)
if m: out['logo'] = m.group(0)

m = re.search(r'<section class="weflair-section weflair-proof weflair-proof--legacy".*?</section>', html, re.IGNORECASE | re.DOTALL)
if m: out['proof'] = m.group(0)

m = re.search(r'<section id="testimonials" class="quotes-slider weflair-section weflair-results-testimonials">.*?</section>', html, re.IGNORECASE | re.DOTALL)
if m: out['quotes'] = m.group(0)

with open(r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\extracted_components.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, indent=2)

print('Extracted keys:', list(out.keys()))
