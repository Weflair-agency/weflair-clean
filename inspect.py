import re

with open(r'weflair-clean/public/handoff-cards/design-card.html', 'r', encoding='utf-8') as f:
    html = f.read()

frames = re.findall(r'<div class="frame.*?">(.*?)</div>\s*</div>\s*</div>\s*(?:<!--|\n|<script|</div>)', html, re.DOTALL)
print(f"Found {len(frames)} frames in regex")

for i, f in enumerate(frames):
    print(f"--- Frame {i} ---")
    if 'carousel-track' in f:
        print("Type: Carousel Track")
    elif 'id="img-lp' in f:
        print("Type: Landing Page Image")
    elif 'id="img-em' in f:
        print("Type: Email Image")
    elif '<div class="banner-grid">' in f:
        print("Type: Promo Banners")
    else:
        print(f"Type: Unknown... Snipset: {f[:100].strip()}")
