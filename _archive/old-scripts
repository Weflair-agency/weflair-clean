import os
import glob

# Ensure iframes shrink-to-fit nicely and have absolutely no background or scrollbar
inject_css = """
<style id="iframe-cleanup">
  body {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important; /* Block scrolling if it's perfectly centered */
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .stack, .card-container, .chart-container, .execution-table, .execution-grid { /* Add relative scaling if needed */
    max-width: 100% !important;
    max-height: 100% !important;
    transform-origin: center center !important;
  }
  ::-webkit-scrollbar {
      display: none !important;
  }
  * {
      scrollbar-width: none !important;
  }
</style>
"""

cards = glob.glob('weflair-clean/public/handoff-cards/*.html')
for c in cards:
    with open(c, 'r', encoding='utf-8') as f:
        html = f.read()

    if "iframe-cleanup" not in html:
        html = html.replace('</head>', inject_css + '\n</head>')

    with open(c, 'w', encoding='utf-8') as f:
        f.write(html)
