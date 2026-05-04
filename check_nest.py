import re
with open('weflair-clean/services/go-to-market-systems.html', 'r', encoding='utf-8') as f:
    html = f.read()

body_start = html.find('<body')
main_start = html.find('<main')

print("Between BODY and MAIN:")
print(html[body_start:main_start])

print("\nBetween MAIN and first SECTION:")
sec_start = html.find('<section')
print(html[main_start:sec_start])
