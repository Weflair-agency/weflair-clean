import re

path = 'src/partials/footer.html'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'<a href="/tools\.html"[^>]*>Automations &amp; Tools<\/a>', '<a href="/resource-pack.html" class="weflair-footer__nav-link">Automation Pack</a>', text)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)
