import re

css_additions = """
/* SIDEBAR LAYOUT */
.chk-layout { 
    max-width: 90rem; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr;
    gap: 3rem; 
    padding: clamp(2rem, 4vw, 4rem) 2rem 6rem; 
    align-items: start; 
    position: relative; 
    z-index: 2; 
}
@media(min-width: 1024px) {
    .chk-layout {
        grid-template-columns: 1fr 340px; /* main content + sidebar */
    }
}

/* SIDEBAR PROGRESS WIDGET */
.chk-sidebar {
    position: sticky;
    top: 6rem;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.chk-progress-wrap { 
    background: rgba(13, 13, 20, 0.6); 
    backdrop-filter: blur(20px); 
    -webkit-backdrop-filter: blur(20px); 
    padding: 2.5rem 2rem; 
    border-radius: 1.5rem; 
    border: 1px solid rgba(255,255,255,0.08); 
    border-bottom: 1px solid rgba(255,255,255,0.03); 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    gap: 1.5rem; 
    box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05); 
    animation: slideUpFade 0.8s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both; 
    width: 100%; 
    transition: transform 0.3s ease, border-color 0.3s ease; 
}
.chk-progress-wrap:hover { border-color: rgba(34,197,94,0.35); transform: translateY(-5px); }
.chk-progress-text { font-size: 1.15rem; font-weight: 500; color: rgba(255,255,255,0.7); font-family: "Space Grotesk", sans-serif; letter-spacing: 0.05em; text-transform: uppercase; }
.chk-progress-bar { width: 100%; height: 12px; background: rgba(0,0,0,0.6); border-radius: 999px; overflow: hidden; position: relative; box-shadow: inset 0 2px 4px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.04); }
.chk-progress-fill { position: absolute; left: 0; top: 0; height: 100%; background: linear-gradient(90deg, #166534, #22C55E, #4ADE80); border-radius: 999px; width: 0%; transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 0 16px rgba(34,197,94,0.7); }
.chk-progress-fill::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent); transform: translateX(-100%); animation: shimmer 2s infinite; }
.chk-progress-score { font-size: 4.5rem; font-weight: 700; color: #4ADE80; font-family: "Space Grotesk", sans-serif; text-shadow: 0 0 30px rgba(34,197,94,0.4); line-height: 1; }

@media(max-width: 1023px) {
    .chk-progress-wrap {
        padding: 1.5rem;
        flex-direction: row;
        justify-content: space-between;
    }
    .chk-progress-score { font-size: 2rem; }
}

/* TABS CENTERING (pulled out) */
.chk-tabs-container {
    max-width: 86rem; margin: 0 auto;
    display: flex; justify-content: center;
    padding: 0 2rem;
    position: relative; z-index: 10;
}

/* FLOATING STARS */
.floating-star {
    position: absolute;
    pointer-events: none;
    z-index: 0;
    opacity: 0.6;
    animation: floatStar 10s ease-in-out infinite alternate;
}
@keyframes floatStar {
    0% { transform: translate(0, 0) rotate(0deg) scale(1); filter: brightness(1); }
    50% { transform: translate(10px, -15px) rotate(5deg) scale(1.1); filter: brightness(1.3); }
    100% { transform: translate(0, 0) rotate(0deg) scale(1); filter: brightness(1); }
}
.star-1 { top: 15%; left: 5%; width: 150px; animation-duration: 12s; animation-delay: 0s; opacity: 0.4; }
.star-2 { top: 40%; right: 4%; width: 200px; animation-duration: 15s; animation-delay: -3s; opacity: 0.5; }
.star-3 { top: 75%; left: 8%; width: 120px; animation-duration: 18s; animation-delay: -7s; opacity: 0.3; }
.star-4 { top: 90%; right: 10%; width: 100px; animation-duration: 14s; animation-delay: -2s; opacity: 0.4; }
"""

html_paths = [
    r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\dist\resources\checklists.html',
    r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\resources\checklists.html'
]

for p in html_paths:
    with open(p, 'r', encoding='utf-8') as f:
        html = f.read()

    if '.chk-sidebar' in html: 
        print('Skipping, already applied to', p)
        continue

    # CSS REPLACEMENTS
    old_layout = re.search(r'/\* LAYOUT \*/.*?/\* TABS - SLEEK FULLY ROUNDED PILLS \*/', html, flags=re.DOTALL)
    if old_layout:
        html = html.replace(old_layout.group(0), '/* TABS - SLEEK FULLY ROUNDED PILLS */')
    
    old_prog = re.search(r'/\* PROGRESS BAR - FLOATING NEON GLOW \*/.*?/\* CHECKLIST CONTAINER & SECTION HEADERS \*/', html, flags=re.DOTALL)
    if old_prog:
        html = html.replace(old_prog.group(0), '/* CHECKLIST CONTAINER & SECTION HEADERS */')

    html = html.replace('</style>', f'\n{css_additions}\n</style>')

    # HTML REPLACEMENTS
    tabs_match = re.search(r'<div class="chk-tabs">.*?</div>', html, flags=re.DOTALL)
    tabs_html = tabs_match.group(0) if tabs_match else ""

    stars_html = f"""
    <!-- FLOATING STARS -->
    <img src="/brand-assets/star-glow.svg" alt="" class="floating-star star-1">
    <img src="/brand-assets/star-glow.svg" alt="" class="floating-star star-2">
    <img src="/brand-assets/star-glow.svg" alt="" class="floating-star star-3">
    <img src="/brand-assets/star-glow.svg" alt="" class="floating-star star-4">
    
    <div class="chk-tabs-container">
        {tabs_html}
    </div>
    <section class="chk-layout">
"""
    # Replace layout block replacing the old tabs too
    layout_and_tabs = re.search(r'<section class=\"chk-layout\">\s*<!-- TABS -->\s*<div class=\"chk-tabs\">.*?</div>', html, flags=re.DOTALL)
    if layout_and_tabs:
        html = html.replace(layout_and_tabs.group(0), stars_html)
    elif '<section class="chk-layout">' in html:
        html = html.replace('<section class="chk-layout">', stars_html)

    # Remove old progress wrap
    old_wrap = re.search(r'<div class="chk-progress-wrap">.*?</div>', html, flags=re.DOTALL)
    if old_wrap:
        html = html.replace(old_wrap.group(0), '')

    sidebar_html = """
      </div>
      <div class="chk-sidebar">
        <div class="chk-progress-wrap">
          <div class="chk-progress-score"><span id="score-text">0</span>%</div>
          <div class="chk-progress-text">Audit Score</div>
          <div class="chk-progress-bar"><div class="chk-progress-fill" id="progress-fill"></div></div>
        </div>
      </div>
"""
    # Find </section> closing tag before CTA
    cta_closing = re.search(r'</section>\s*<!-- LEAD CAPTURE CTA -->', html, flags=re.DOTALL)
    if cta_closing:
        html = html.replace(cta_closing.group(0), sidebar_html + '\n    </section>\n    <!-- LEAD CAPTURE CTA -->')
    else:
        # Just replace the specific occurrence, we injected `</div>` to close `chk-container`
        # Because we need `chk-container` closed before sidebar if we are adding sidebar as sibling.
        pass

    with open(p, 'w', encoding='utf-8') as f:
        f.write(html)
    print('Updated', p)
