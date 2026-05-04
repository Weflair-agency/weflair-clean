import re
with open('weflair-clean/services/go-to-market-systems.html', 'r', encoding='utf-8') as f:
    html = f.read()

# classes
clss = set(re.findall(r'class="([^"]+)"', html))
for c in clss:
    if 'fixed' in c or 'h-screen' in c or 'absolute' in c or 'sticky' in c:
        print('Class:', c)

# styles
styles = set(re.findall(r'style="([^"]+)"', html))
for s in styles:
    if 'height' in s or 'overflow' in s or 'fixed' in s or 'absolute' in s:
        print('Style:', s)
