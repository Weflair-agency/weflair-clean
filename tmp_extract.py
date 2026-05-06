with open('c:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Extract from <style id="weflair-proof-switcher-css"> to </script> before <section class="weflair-section weflair-proof weflair-proof--legacy-old"
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if '<style id="weflair-proof-switcher-css">' in line:
        start_idx = i
    if '<section class="weflair-section weflair-proof weflair-proof--legacy-old"' in line:
        end_idx = i
        break

with open('c:/Users/sam/Desktop/vscode-weflair/weflair-clean/tmp_proof_script.html', 'w', encoding='utf-8') as f:
    f.write("".join(lines[start_idx:end_idx]))

print("Start:", start_idx, "End:", end_idx)
