import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

links = re.findall(r'<link[^>]*rel="stylesheet"[^>]*>', html, re.IGNORECASE)
for l in links:
    print(l)

# Let's also look for 'resources' in ALL styles just in case it's named slightly differently
styles = re.findall(r'<style[^>]*>.*?</style>', html, re.IGNORECASE | re.DOTALL)
for s in styles:
    if 'resource' in s.lower():
        print(f"Style with 'resource': {s[:100].strip()} ... len {len(s)}")
