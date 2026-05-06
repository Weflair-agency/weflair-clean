import sys
import re

index_path = r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\index.html'
pm_path = r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\services\paid-media-performance.html'

def get_lines(filename, start, end):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    return ''.join(lines[start-1:end])

footer_section = get_lines(index_path, 14011, 14514)

with open(pm_path, 'r', encoding='utf-8') as f:
    pm_content = f.read()

# Replace the footer
footer_pattern = r'<section class="footer weflair-footer">.*'
pm_content = re.sub(footer_pattern, lambda _: '<!-- FOOTER -->\n' + footer_section, pm_content, flags=re.DOTALL)

with open(pm_path, 'w', encoding='utf-8') as f:
    f.write(pm_content)

print('Done!')
