import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    idx_html = f.read()

# Gather all style tags that contain "weflair" because those are the appended ones
styles = re.findall(r'<style[^>]*>.*?</style>', idx_html, re.IGNORECASE | re.DOTALL)
global_styles = []
for s in styles:
    if 'id="weflair-' in s or '.weflair-' in s:
        # Don't grab the body styles if it's just generic, but most of index's inline are custom patches
        # To avoid duplicating massive files, we just grab everything that's an inline style
        global_styles.append(s)

combined_globals = "\n".join(global_styles)
# But wait, index.html might have duplicate or specific styles.
# Let's extract exactly what's needed for the proof switcher and playbooks:
needed_vars = ['.weflair-proof--switcher', '.weflair-proof', '.weflair-playbooks', '#playbooks', 'resources-teaser']
needed_styles = []
for s in styles:
    if any(var in s for var in needed_vars):
        needed_styles.append(s)

# Also extract the JS for the proof switcher
m_script = re.search(r'<script>\s*\(function \(\) \{\s*var root = document\.querySelector\("\[data-proof-switcher\]"\);.*?</script>', idx_html, re.IGNORECASE | re.DOTALL)
switcher_js = m_script.group(0) if m_script else ""

# Extract the CORRECT sections
m_proof = re.search(r'<section[^>]*class="[^"]*weflair-proof--switcher[^"]*"[^>]*>.*?</section>', idx_html, re.IGNORECASE | re.DOTALL)
proof_html = m_proof.group(0) if m_proof else ""

m_playbooks = re.search(r'<section[^>]*class="[^"]*weflair-playbooks[^"]*"[^>]*>.*?</section>', idx_html, re.IGNORECASE | re.DOTALL)
playbooks_html = m_playbooks.group(0) if m_playbooks else ""

m_teaser = re.search(r'<section[^>]*class="[^"]*weflair-resources-teaser[^"]*"[^>]*>.*?</section>', idx_html, re.IGNORECASE | re.DOTALL)
teaser_html = m_teaser.group(0) if m_teaser else ""

assets = {
    'css': "\n".join(needed_styles),
    'js': switcher_js,
    'proof': proof_html,
    'playbooks': playbooks_html,
    'teaser': teaser_html
}

import json
with open('extracted_assets.json', 'w', encoding='utf-8') as f:
    json.dump(assets, f)

print(f"Extracted {len(needed_styles)} style blocks, length {len(assets['css'])}")
print(f"Extracted JS: {len(assets['js'])}")
print(f"Extracted Proof: {len(assets['proof'])}")
print(f"Extracted Playbooks: {len(assets['playbooks'])}")
print(f"Extracted Teaser: {len(assets['teaser'])}")
