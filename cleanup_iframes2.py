import glob

script = """
<script id="iframe-scaler">
  function scaleToFit() {
    const mainContainer = document.querySelector('.stack, .card-container, .chart-container, .execution-table, .execution-grid');
    if (!mainContainer) return;
    
    // Find inner natural dimensions based on class
    let w = 474; 
    let h = 476;
    // Overrides if needed for other files
    if (mainContainer.classList.contains("metric-card")) {
        w = 345; h = 400; // Guessing dimensions, let's use client offset size if > 0
    }
    
    // Actually we can read their explicit set width or default
    const styleWidth = parseInt(getComputedStyle(mainContainer).width);
    const styleHeight = parseInt(getComputedStyle(mainContainer).height);
    w = styleWidth || w;
    h = styleHeight || h;

    const availableW = window.innerWidth;
    const availableH = window.innerHeight;
    
    const scale = Math.min(availableW / w, availableH / h, 1); // no more than 1x scale, avoid blowups
    
    mainContainer.style.transformOrigin = 'center center';
    mainContainer.style.transform = `scale(${scale})`;
  }
  
  window.addEventListener('resize', scaleToFit);
  document.addEventListener('DOMContentLoaded', scaleToFit);
  scaleToFit(); // Call directly in case DOM is already loaded
</script>
"""

cards = glob.glob('weflair-clean/public/handoff-cards/*.html')
for c in cards:
    with open(c, 'r', encoding='utf-8') as f:
        html = f.read()

    # Remove any old scaler we may have injected in early tests, just safely re-inject
    if "iframe-scaler" not in html:
        html = html.replace('</body>', script + '\n</body>')

    with open(c, 'w', encoding='utf-8') as f:
        f.write(html)
