import os

fp = 'weflair-clean/public/weflair-global.css'
with open(fp, 'r', encoding='utf-8') as f:
    css = f.read()

# Fix the broken text in the CSS
css = css.replace("â”€", "—")

with open(fp, 'w', encoding='utf-8') as f:
    f.write(css)
