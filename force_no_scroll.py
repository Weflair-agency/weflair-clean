import os

fp = 'weflair-clean/index.html'
with open(fp, 'r', encoding='utf-8') as f:
    html = f.read()

# Add scrolling="no" and overflow="hidden" to all iframes
html = html.replace(
    '<iframe src="/handoff-cards/strategy-card.html" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain;"></iframe>',
    '<iframe src="/handoff-cards/strategy-card.html" scrolling="no" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain; overflow: hidden;"></iframe>'
)
html = html.replace(
    '<iframe src="/handoff-cards/design-card.html" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain;"></iframe>',
    '<iframe src="/handoff-cards/design-card.html" scrolling="no" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain; overflow: hidden;"></iframe>'
)
html = html.replace(
    '<iframe src="/handoff-cards/execution-card.html" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain;"></iframe>',
    '<iframe src="/handoff-cards/execution-card.html" scrolling="no" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain; overflow: hidden;"></iframe>'
)
html = html.replace(
    '<iframe src="/handoff-cards/reporting-card.html" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain;"></iframe>',
    '<iframe src="/handoff-cards/reporting-card.html" scrolling="no" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain; overflow: hidden;"></iframe>'
)

with open(fp, 'w', encoding='utf-8') as f:
    f.write(html)
