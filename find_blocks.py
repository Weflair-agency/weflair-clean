import re

with open(r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Grab Logo Slider
m_cred = re.search(r'<section [^>]*class="[^"]*weflair-credentials[^"]*"[^>]*>.*?</section>', html, re.IGNORECASE | re.DOTALL)
if m_cred:
    with open('tmp_logos.txt', 'w', encoding='utf-8') as f:
        f.write(m_cred.group(0))
    print("Found credentials (logos)")

# 2. Grab Proof / Case studies
m_proof = re.search(r'<section class="weflair-section weflair-proof weflair-proof--legacy" id="proof-legacy">.*?</section>', html, re.IGNORECASE | re.DOTALL)
if m_proof:
    with open('tmp_proof.txt', 'w', encoding='utf-8') as f:
        f.write(m_proof.group(0))
    print("Found proof")

