import glob

script = """
<script id="iframe-scaler">
  function scaleToFit() {
    const mainContainer = document.querySelector('.stack, .stage, .card-container, .chart-container, .execution-table, .execution-grid');
    if (!mainContainer) return;
    
    // Find inner natural dimensions based on class
    let w = 474; 
    let h = 476;
    
    // Actually we can read their explicit set width or default
    const styleWidth = parseInt(getComputedStyle(mainContainer).width);
    const styleHeight = parseInt(getComputedStyle(mainContainer).height);
    w = styleWidth || w;
    h = styleHeight || h;

    const availableW = window.innerWidth;
    const availableH = window.innerHeight;
    
    const scale = Math.min(availableW / w, availableH / h, 1);
    
    mainContainer.style.transformOrigin = 'center center';
    mainContainer.style.transform = `scale(${scale})`;
  }
  
  window.addEventListener('resize', scaleToFit);
  document.addEventListener('DOMContentLoaded', scaleToFit);
  scaleToFit(); // Call directly in case DOM is already loaded
</script>
"""

# Re-inject the iframe styling, but this time LEAVE the background intact.
# Wait, if we keep the "body { background: transparent !important; margin: 0; display:flex ... overflow:hidden }", 
# and `.weflair-handoff__media` keeps it's `#0d1016`, the frame inside will be on `#0d1016`.
# We want body to have #F5F5F7 so the design works, or apply it to `weflair-handoff__media`. 
# Actually, the user says "center the image like it's inside the frame."
# Let's set the body background explicitly to match the iframe style.
inject_css = """
<style id="iframe-cleanup">
  body {
    background: #F5F5F7 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important; 
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  ::-webkit-scrollbar {
      display: none !important;
  }
  * {
      scrollbar-width: none !important;
  }
</style>
"""

import re

cards = glob.glob('weflair-clean/public/handoff-cards/*.html')
for c in cards:
    with open(c, 'r', encoding='utf-8') as f:
        html = f.read()

    # Re-replace any old `<style id="iframe-cleanup">...` block and the script
    html = re.sub(r'<style id="iframe-cleanup">.*?</style>', inject_css, html, flags=re.DOTALL)
    html = re.sub(r'<script id="iframe-scaler">.*?</script>', script, html, flags=re.DOTALL)
    
    # Just in case they weren't added correctly
    if 'id="iframe-cleanup"' not in html:
        html = html.replace('</head>', inject_css + '\n</head>')
    if 'id="iframe-scaler"' not in html:
        html = html.replace('</body>', script + '\n</body>')

    with open(c, 'w', encoding='utf-8') as f:
        f.write(html)
