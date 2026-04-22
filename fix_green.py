import re
with open('index.html', 'r', encoding='utf-8') as f: html = f.read()
# Revert 'Drive Ambitious Growth.' back to green
html = html.replace('Your Allbound Marketing Partner to Drive Ambitious Growth.', 'Your Allbound Marketing Partner to <span class="weflair-section-accent weflair-section-accent--solid">Drive Ambitious Growth.</span>')
with open('index.html', 'w', encoding='utf-8') as f: f.write(html)
print('Green text restored.')
