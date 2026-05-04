for path in ['expertise/b2b-services.html', 'expertise/b2b-saas.html', 'dist/expertise/b2b-services.html', 'dist/expertise/b2b-saas.html']:
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    html = html.replace('gap: 1.5rem;', 'gap: 1.5rem;\n        max-width: 1000px;\n        margin: 0 auto;')
    # Clean up duplicate max-widths if they existed multiple times
    html = html.replace('max-width: 1000px;\n        margin: 0 auto;\n        max-width: 1000px;\n        margin: 0 auto;', 'max-width: 1000px;\n        margin: 0 auto;')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Fixed {path}")
