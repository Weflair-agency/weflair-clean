import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Look for any section
matches = re.finditer(r'<section[ \n]+class=\"([^\"]*)\"', html, re.IGNORECASE)
for i, m in enumerate(matches):
    print(f"{i}: {m.group(1)}")
