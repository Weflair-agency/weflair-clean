import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    text = f.read()

match = re.search(r'<a href="/tools\.html"[^>]*>.*?</a>', text, flags=re.DOTALL)
if match:
    print("Found!")
    with open('tmp.txt', 'w', encoding='utf-8') as f2:
        f2.write(match.group(0))
else:
    print("Not found")

