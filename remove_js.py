import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the block
block_to_remove = r'''        const footerInner = document.querySelector(".weflair-footer__cta-inner");
        if \(footerInner\) \{.*?\}'''

text = re.sub(r'const footerInner = document\.querySelector\("\.weflair-footer__cta-inner"\);[\s\S]*?\}\s*\}', '', text)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(text)
