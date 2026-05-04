import re

html_path = 'src/partials/header.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the specific mega tile
old_title = r'<h3 class="weflair-mega-tile__h">Automations &amp; Tools</h3>'
new_title = r'<h3 class="weflair-mega-tile__h">Automation pack</h3>'

old_desc = r'<p class="weflair-mega-tile__p">Free tools and automations to boost performance.</p>'
new_desc = r'<p class="weflair-mega-tile__p">Free skills, automations and tools to boost your business performance. Download here.</p>'

html = re.sub(old_title, new_title, html)
html = re.sub(old_desc, new_desc, html)

# Change href mapping 
html = re.sub(r'href="/resources/calculators\.html"\s+class="weflair-mega-tile w-inline-block">\s*<div\s+class="weflair-mega-tile__icon">.*?<h3\s+class="weflair-mega-tile__h">Automation pack<\/h3>',
    r'href="/resource-pack.html" class="weflair-mega-tile w-inline-block">\n<div class="weflair-mega-tile__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>\n<div class="weflair-mega-tile__text">\n<h3 class="weflair-mega-tile__h">Automation pack</h3>', html, flags=re.DOTALL)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
