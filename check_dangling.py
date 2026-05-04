import re

with open('expertise/b2b-saas.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Only check inside <style> tags
styles = re.findall(r'<style[^>]*>(.*?)</style>', html, re.IGNORECASE | re.DOTALL)
for i, s in enumerate(styles):
    stripped = re.sub(r'\{[^}]*\}', '', s)
    if '}' in stripped:
        print(f"Style {i} has dangling brackets:")
        # Look for the piece around the dangling bracket
        # Let's just find the index of the dangling bracket inside the stripped string
        for match in re.finditer(r'\}', stripped):
            idx = match.start()
            context = stripped[max(0, idx-50):min(len(stripped), idx+50)]
            print(f"   context: {context.strip()}")

