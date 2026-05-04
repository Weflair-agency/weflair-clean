import os
import re

header_path = r"C:\Users\sam\Desktop\vscode-weflair\weflair-clean\src\partials\header.html"

with open(header_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix index.html to /
content = content.replace('href="index.html"', 'href="/"')

# Regex to find href="..." that don't start with /, #, http, mailto
# and specifically target known internal paths
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
    "contact.html"
]

for p in pages:
    content = content.replace('href="' + p + '"', 'href="/' + p + '"')

with open(header_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Header links updated.")

