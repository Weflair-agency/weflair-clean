import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

styles = re.findall(r'<style[^>]*>.*?</style>', html, re.IGNORECASE | re.DOTALL)
for i, s in enumerate(styles):
    if 'weflair-resources' in s or 'resources-teaser' in s:
        print(f"Contains resources teaser CSS: {len(s)} chars")
