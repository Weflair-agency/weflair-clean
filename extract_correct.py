import re
import json

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Correct Proof
proof = ""
proof_match = re.search(r'<section[^>]*class="[^"]*weflair-proof--switcher[^"]*"[^>]*>.*?</section>', html, re.IGNORECASE | re.DOTALL)
if proof_match:
    proof = proof_match.group(0)

# 2. Playbooks (Resources)
playbooks = ""
play_match = re.search(r'<section[^>]*class="[^"]*weflair-playbooks[^"]*"[^>]*>.*?</section>', html, re.IGNORECASE | re.DOTALL)
if play_match:
    playbooks = play_match.group(0)

# 3. Resources teaser
resources_teaser = ""
res_match = re.search(r'<section[^>]*class="[^"]*weflair-resources-teaser[^"]*"[^>]*>.*?</section>', html, re.IGNORECASE | re.DOTALL)
if res_match:
    resources_teaser = res_match.group(0)

out = {
    'proof_switcher': proof,
    'playbooks': playbooks,
    'resources_teaser': resources_teaser
}

with open('extracted_correct_blocks.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, indent=2)

print(f"Proof Switcher len: {len(proof)}")
print(f"Playbooks len: {len(playbooks)}")
print(f"Resources Teaser len: {len(resources_teaser)}")
