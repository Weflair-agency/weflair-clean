const fs = require('fs');

const file = 'public/weflair-hero.js';
let src = fs.readFileSync(file, 'utf8');

// Replace renderCompareSection completely
const startStr = 'function renderCompareSection(section) {';
const searchEndStr = '  function processStepIcon';

const startIndex = src.indexOf(startStr);
const endIndex = src.indexOf(searchEndStr);

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find boundaries for renderCompareSection");
  process.exit(1);
}

const pre = src.substring(0, startIndex);
const post = src.substring(endIndex);

const newRenderFn = `function renderCompareSection(section) {
    section.id = "comparison";
    section.className = "compare weflair-section weflair-compare-tablar";
    
    const goodHeader = "WITH WEFLAIR";
    const badHeader = "WITHOUT WEFLAIR";
    
    const rowsHtml = CONTENT.comparison.rows.map(([badText, goodText]) => {
      // Good text (index 1) on left, Bad text (index 0) on right
      return \`<div class="weflair-tabular-row">
        <div class="weflair-tabular-cell is-good">\${goodText}</div>
        <div class="weflair-tabular-cell is-bad">\${badText}</div>
      </div>\`;
    }).join("");

    section.innerHTML = \`<div class="container container--sm">
      <div class="weflair-section__head weflair-compare-head is-centered">
        \${eyebrow(CONTENT.comparison.eyebrow, true)}
        <h2 class="h3 weflair-title-balance" style="margin-top:0.4rem; padding-bottom:0.2rem;">\${CONTENT.comparison.title}</h2>
        <p class="weflair-section__body">\${CONTENT.comparison.body}</p>
      </div>
      <div class="weflair-tabular-grid">
        <div class="weflair-tabular-header">
          <div class="weflair-tabular-head-cell is-good">\${goodHeader}</div>
          <div class="weflair-tabular-head-cell is-bad">\${badHeader}</div>
        </div>
        <div class="weflair-tabular-body">
          \${rowsHtml}
        </div>
      </div>
      <div class="weflair-compare-cta">
        <a href="#results" class="weflair-btn-glowing-glow" \${calTriggerAttributes('data-cal-source="comparison-cta"')}>
          <span class="weflair-btn-glowing__text">CHECK IF WE'RE A FIT</span>
        </a>
      </div>
    </div>\`;
  }

`;

// 2. Add the dynamic CSS injection
const cssInj = `
  // Injected CSS for TABULAR COMPARE OVERHAUL
  const styleComp = document.createElement('style');
  styleComp.textContent = \`
.weflair-compare-tablar { padding-top: clamp(4rem, 8vw, 6rem); padding-bottom: clamp(4rem, 8vw, 6rem); }
.weflair-compare-head { margin-bottom: clamp(3.5rem, 5vw, 4.5rem); }
.weflair-title-balance { text-wrap: balance; max-width: 48rem; margin: 0 auto; line-height: 1.15; }
.weflair-tabular-grid { width: 100%; max-width: 58rem; margin: 0 auto; }
.weflair-tabular-header { display: grid; grid-template-columns: 1fr 1fr; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(246, 243, 238, 0.05); gap: 2rem; }
.weflair-tabular-head-cell { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
.weflair-tabular-head-cell.is-good { color: #3eff68; text-shadow: 0 0 12px rgba(62, 255, 104, 0.4); }
.weflair-tabular-head-cell.is-bad { color: rgba(246, 243, 238, 0.25); text-align: left; }
.weflair-tabular-body { display: flex; flex-direction: column; }
.weflair-tabular-row { display: grid; grid-template-columns: 1fr 1fr; padding: 1.6rem 0; border-bottom: 1px solid rgba(246, 243, 238, 0.06); gap: 2rem; transition: background-color 0.2s ease; }
.weflair-tabular-row:hover { background-color: rgba(246, 243, 238, 0.015); }
.weflair-tabular-cell { font-size: clamp(0.9rem, 1.2vw, 1.05rem); line-height: 1.5; font-weight: 500; }
.weflair-tabular-cell.is-good { color: rgba(246, 243, 238, 0.95); letter-spacing: -0.01em; }
.weflair-tabular-cell.is-bad { color: rgba(246, 243, 238, 0.4); }
.weflair-compare-cta { display: flex; justify-content: center; align-items: center; margin-top: clamp(3rem, 5vw, 4.5rem); }
.weflair-btn-glowing-glow { position: relative; display: inline-flex; align-items: center; justify-content: center; padding: 1.25rem 2.8rem; background: rgba(10, 12, 10, 0.8); border: 1px solid rgba(62, 255, 104, 0.35); border-radius: 5px; color: #f6f3ee; text-decoration: none; font-size: 0.82rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; transition: all 0.3s ease; overflow: hidden; box-shadow: 0 0 20px rgba(62, 255, 104, 0.05), inset 0 0 10px rgba(62, 255, 104, 0.02); cursor: pointer; }
.weflair-btn-glowing-glow::before { content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(62, 255, 104, 0.15) 0%, transparent 60%); opacity: 0; transition: opacity 0.5s ease, transform 0.5s ease; transform: scale(0.8); z-index: 0; }
.weflair-btn-glowing-glow:hover { border-color: rgba(62, 255, 104, 0.7); box-shadow: 0 0 30px rgba(62, 255, 104, 0.25), inset 0 0 15px rgba(62, 255, 104, 0.1); color: #3eff68; }
.weflair-btn-glowing-glow:hover::before { opacity: 1; transform: scale(1); }
.weflair-btn-glowing__text { position: relative; z-index: 1; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
@media screen and (max-width: 767px) {
  .weflair-tabular-grid { padding: 0 1rem; }
  .weflair-tabular-header { display: none; }
  .weflair-tabular-row { grid-template-columns: 1fr; padding: 1.5rem 0; gap: 0.5rem; position: relative; }
  .weflair-tabular-cell.is-good { margin-bottom: 0.25rem; font-weight: 600; color: #3eff68; }
  .weflair-tabular-cell.is-bad { font-size: 0.85rem; color: rgba(246, 243, 238, 0.5); }
  .weflair-tabular-cell.is-good::before { content: "WITH WEFLAIR: "; font-size: 0.7em; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(62, 255, 104, 0.6); margin-right: 0.5rem; }
  .weflair-tabular-cell.is-bad::before { content: "WITHOUT WEFLAIR: "; font-size: 0.7em; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(246, 243, 238, 0.3); margin-right: 0.5rem; }
}
  \`;
  document.head.appendChild(styleComp);
`;

let merged = pre + newRenderFn + post;
merged = merged.replace(/(\n\s*\}\)\(\);\s*$)/, '\n' + cssInj + '$1');

fs.writeFileSync(file, merged);
console.log("Comparison Redesign Patched!");
