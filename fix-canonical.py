import os

files = [
    r"C:\Users\sam\Desktop\vscode-weflair\weflair-clean\src\partials\header.html",
    r"C:\Users\sam\Desktop\vscode-weflair\weflair-clean\src\partials\footer.html"
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Apply true canonical paths according to the manifest
    remaps = {
        'href="/cases.html"': 'href="/case-studies/"',
        'href="/resources/calculators.html"': 'href="/tools.html"',
        'href="/resources/checklists.html"': 'href="/tools.html"',
        'href="cases.html"': 'href="/case-studies/"',
        'href="resources/calculators.html"': 'href="/tools.html"',
        'href="resources/checklists.html"': 'href="/tools.html"'
    }

    for old, new in remaps.items():
        content = content.replace(old, new)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Canonical links applied to header & footer.")
