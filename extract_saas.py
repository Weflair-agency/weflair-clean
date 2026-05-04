import re
import json

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

try:
    with open('extracted_components.json', 'r', encoding='utf-8') as f:
        out = json.load(f)
except Exception:
    out = {}

# Why WeFlair (weflair-why-us)
m_why = re.search(r'<section [^>]*class="[^"]*weflair-why-us[^"]*"[^>]*>.*?</section>', html, re.IGNORECASE | re.DOTALL)
if m_why: out['why_weflair'] = m_why.group(0)

# Resources (weflair-resources-teaser)
m_res = re.search(r'<section [^>]*class="[^"]*weflair-resources-teaser[^"]*"[^>]*>.*?</section>', html, re.IGNORECASE | re.DOTALL)
if m_res: out['resources'] = m_res.group(0)

# Also check for weflair-process if ninja promo needs a process
m_proc = re.search(r'<section [^>]*class="[^"]*weflair-process[^"]*"[^>]*>.*?</section>', html, re.IGNORECASE | re.DOTALL)
if m_proc: out['process'] = m_proc.group(0)

with open('extracted_components.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, indent=2)

print('Extracted:', list(out.keys()))
