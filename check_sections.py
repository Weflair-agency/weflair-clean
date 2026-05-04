import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Look for proof section
m_proof = re.search(r'<section[^>]*class=\"[^\"]*weflair-proof(.*?)>.*?</section>', html, re.IGNORECASE | re.DOTALL)
if not m_proof:
    m_proof = re.search(r'<section[^>]*class=\"[^\"]*recent-work(.*?)>.*?</section>', html, re.IGNORECASE | re.DOTALL)

# Look for resources section
m_res = re.search(r'<section[^>]*class=\"[^\"]*weflair-resources(.*?)>.*?</section>', html, re.IGNORECASE | re.DOTALL)

print("Proof found:", bool(m_proof))
if m_proof:
    print("Proof len:", len(m_proof.group(0)))
    
print("Resources found:", bool(m_res))
if m_res:
    print("Resources len:", len(m_res.group(0)))
