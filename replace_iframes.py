import os

fp = 'weflair-clean/index.html'
with open(fp, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Strategy
html = html.replace(
    '<div class="weflair-handoff__dots"><span></span><span></span><span></span></div>\n                    <div class="weflair-handoff__frame-label"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M12 4v16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path></svg><span>Channel selection</span></div>',
    '<div class="weflair-handoff__frame-label"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M12 4v16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path></svg><span>Channel selection</span></div>'
)
html = html.replace(
    '<div class="weflair-handoff__media"><video src="/handoff-assets/strategy.webm" autoplay muted loop playsinline preload="auto"></video></div>',
    '<div class="weflair-handoff__media"><iframe src="/handoff-cards/strategy-card.html" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain;"></iframe></div>'
)

# Replace Design
html = html.replace(
    '<div class="weflair-handoff__dots"><span></span><span></span><span></span></div>\n                    <div class="weflair-handoff__frame-label"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M4 19l5.5-5.5L13 17l7-7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 10h5v5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Design system</span></div>',
    '<div class="weflair-handoff__frame-label"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M4 19l5.5-5.5L13 17l7-7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 10h5v5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Design system</span></div>'
)
html = html.replace(
    '<div class="weflair-handoff__media"><video src="/handoff-assets/creative.webm" autoplay muted loop playsinline preload="auto"></video></div>',
    '<div class="weflair-handoff__media"><iframe src="/handoff-cards/design-card.html" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain;"></iframe></div>'
)

# Replace Execution
html = html.replace(
    '<div class="weflair-handoff__dots"><span></span><span></span><span></span></div>\n                    <div class="weflair-handoff__frame-label"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M4 8h16M4 12h16M4 16h10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path></svg><span>Execution layer</span></div>',
    '<div class="weflair-handoff__frame-label"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M4 8h16M4 12h16M4 16h10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path></svg><span>Execution layer</span></div>'
)
html = html.replace(
    '<div class="weflair-handoff__media"><video src="/handoff-assets/execution.webm" autoplay muted loop playsinline preload="auto"></video></div>',
    '<div class="weflair-handoff__media"><iframe src="/handoff-cards/execution-card.html" style="width: 100%; height: 100%; border: none; background: transparent; object-fit: contain;"></iframe></div>'
)

with open(fp, 'w', encoding='utf-8') as f:
    f.write(html)
