import os

def fix_file(filepath):
    if not os.path.exists(filepath): return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '\\"' in content:
        content = content.replace('\\"', '"')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")

root = 'weflair-clean'
for root_dir, dirs, files in os.walk(root):
    for f in files:
        if f.endswith('.html'):
            fix_file(os.path.join(root_dir, f))
