import os

footer_path = r"C:\Users\sam\Desktop\vscode-weflair\weflair-clean\src\partials\footer.html"

with open(footer_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix any stray relative links in footer just in case
content = content.replace('href="index.html"', 'href="/"')

pages = [
    "services/paid-media-performance.html",
    "services/go-to-market-systems.html",
    "services/performance-design.html",
    "services/ai-visibility-seo.html",
    "resources/playbooks.html",
    "resources/guides.html",
    "resources/calculators.html",
    "resources/checklists.html",
    "tools.html",
    "cases.html",
    "about.html",
    "careers.html",
    "contact.html",
    "legal/privacy.html",
    "legal/terms.html"
]

for p in pages:
    content = content.replace('href="' + p + '"', 'href="/' + p + '"')

with open(footer_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Footer links checked and updated.")
