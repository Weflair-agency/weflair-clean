import re

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix literal backslashes
text = text.replace(r'\.why-data-chart', '.why-data-chart')
text = text.replace(r'\.why-data-mini', '.why-data-mini')

# Replace the HTML exactly
html_match = re.search(r'(<div class="why-data-mini why-data-mini--top">.*?<p>Scored up</p>.*?)<svg viewBox="0 0 120 58"', text, re.DOTALL)
if html_match:
    old_html = html_match.group(1)
    new_html = '<div class="why-data-mini why-data-mini--top">\n                      <h4>Q2 revenue targets</h4>\n                      <span class="why-data-chip">+33% modeled efficiency</span>\n                      '
    text = text.replace(old_html, new_html)

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print('Fixed backslashes and HTML')
