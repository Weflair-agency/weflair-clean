import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Change data-theme
text = re.sub(r'<html lang="en" data-theme="light">', r'<html lang="en" data-theme="dark">', text)

# Change theme-color meta
text = re.sub(r'<meta name="theme-color" content="#f4f1ea" />', r'<meta name="theme-color" content="#151515" />', text)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated index.html to default to dark theme")
