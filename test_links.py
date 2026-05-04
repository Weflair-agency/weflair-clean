import re
text = open('src/partials/header.html', encoding='utf-8').read().replace('\n', ' ')
for match in re.finditer(r'href="([^"]+)"[^>]*>.*?<h3[^>]*>([^<]+)</h3>', text):
    print(f'{match.group(2)} -> {match.group(1)}')
