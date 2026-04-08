const fs = require('fs');

// 1. Fix Tab text wrap in CSS
let cssPatch = `
.weflair-demand-team__tab-label { white-space: nowrap !important; }
.weflair-demand-team__panel-plain { grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr) !important; gap: 2rem !important; }
.weflair-demand-team__copy-block h3.h4 { white-space: nowrap !important; font-size: clamp(1.8rem, 2vw, 2.2rem) !important; }
`;
let jsContent = fs.readFileSync('public/weflair-hero.js', 'utf8');
jsContent = jsContent.replace(/(}\s*`;\s*})/g, cssPatch + '\n$1');

// 2. Add an auto-click to the first tab on load to ensure the JS templates override the hardcoded HTML
const autoClicker = `
  setTimeout(() => {
    const firstTab = document.querySelector('.weflair-demand-team__tab[data-pod-index="0"]');
    if (firstTab) {
      firstTab.click();
    }
  }, 100);
`;
jsContent = jsContent.replace(/\s*\}\)\(\);\s*$/, autoClicker + '\n})();');
fs.writeFileSync('public/weflair-hero.js', jsContent);

console.log("Patched index.html initialization and CSS via JS.");
