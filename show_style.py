import re

for filepath in ['expertise/b2b-services.html']:
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    match = re.search(r'<style id="weflair-capabilities-fix">.*?</style>', html, re.IGNORECASE | re.DOTALL)
    if match:
        print(match.group(0))
    else:
        print("Style block not found!")
