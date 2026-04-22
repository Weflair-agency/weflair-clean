import glob
import re

script = """
<style id="iframe-cleanup">
  html, body {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden !important; 
  }
  ::-webkit-scrollbar {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
  }
  * {
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
  }
</style>
<script id="iframe-scaler">
  function scaleToFit() {
    const mainContainer = document.querySelector('.stack, .stage, .card-container, .chart-container, .execution-table, .execution-grid');
    if (!mainContainer) return;
    
    // We force standard dimensions
    let w = 474; 
    let h = 476;
    
    const availableW = window.innerWidth;
    const availableH = window.innerHeight;
    
    // Scale to fit within the viewport (with a tiny 5% margin to prevent edge clipping)
    const scale = Math.min(availableW / w, availableH / h) * 0.95;
    
    mainContainer.style.position = 'absolute';
    mainContainer.style.left = '50%';
    mainContainer.style.top = '50%';
    mainContainer.style.margin = '0';
    mainContainer.style.transformOrigin = 'center center';
    // Shift it back by half its native width/height *before* scale is applied by transform origin
    mainContainer.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }
  
  window.addEventListener('resize', scaleToFit);
  document.addEventListener('DOMContentLoaded', scaleToFit);
  // Run immediately as well
  scaleToFit();
  // Run repeatedly for the first second in case fonts/images load
  setTimeout(scaleToFit, 100);
  setTimeout(scaleToFit, 500);
</script>
"""

cards = glob.glob('weflair-clean/public/handoff-cards/*.html')
for c in cards:
    with open(c, 'r', encoding='utf-8') as f:
        html = f.read()

    # Clean up old blocks
    html = re.sub(r'<style id="iframe-cleanup">.*?</style>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script id="iframe-scaler">.*?</script>', '', html, flags=re.DOTALL)
    
    # Inject new block right before </body>
    html = html.replace('</body>', script + '\n</body>')

    with open(c, 'w', encoding='utf-8') as f:
        f.write(html)
