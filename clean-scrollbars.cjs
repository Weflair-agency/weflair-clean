const fs = require('fs');
const files = [
  'weflair-clean/public/handoff-cards/strategy-card.html',
  'weflair-clean/public/handoff-cards/design-card.html',
  'weflair-clean/public/handoff-cards/execution-card.html',
  'weflair-clean/index.html'
];
const css = `
<style id="hide-scrollbars">
  /* Hide scrollbars completely globally */
  ::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; background: transparent !important; }
  * { scrollbar-width: none !important; -ms-overflow-style: none !important; }
</style>`;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf-8');
  
  // Clean up any old scrollbar injections
  content = content.replace(/<style[^>]*>[\s\S]*?::-webkit-scrollbar[\s\S]*?<\/style>/gi, '');
  
  // Also clean the ones I appended directly the end of body/html if I did
  content = content.replace(/<\/html>\s*<style[^>]*>[\s\S]*?::-webkit-scrollbar[\s\S]*?<\/style>\s*/gi, '</html>');
  
  // Add exactly once to <head>
  content = content.replace('</head>', css + '\n</head>');
  
  fs.writeFileSync(file, content);
  console.log('Cleaned and injected into ' + file);
}
