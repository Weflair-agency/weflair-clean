import re

paths = ['expertise/b2b-services.html', 'expertise/b2b-saas.html']
for path in paths:
    print("---", path, "---")
    try:
        with open(path, 'r', encoding='utf-8') as f:
            html = f.read()
        cap_css = re.search(r'\.b2b-capabilities\s*{[^}]*}', html, re.IGNORECASE)
        print("b2b-capabilities css:", cap_css.group(0) if cap_css else "Not found")
        item_css = re.search(r'\.b2b-cap-item\s*{[^}]*}', html, re.IGNORECASE)
        print("b2b-cap-item css:", item_css.group(0) if item_css else "Not found")
        saas_svc = re.search(r'\.saas-services-grid\s*{[^}]*}', html, re.IGNORECASE)
        print("saas-services-grid css:", saas_svc.group(0) if saas_svc else "Not found")
        saas_item = re.search(r'\.saas-service-card\s*{[^}]*}', html, re.IGNORECASE)
        print("saas-service-card css:", saas_item.group(0) if saas_item else "Not found")
    except Exception as e:
        print(e)
