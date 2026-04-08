const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const newCss = \`.weflair-problems-native{display:flex;justify-content:center;margin-top:clamp(2.35rem,3.9vw,3.2rem)}
      .weflair-problems-native .growing-tiles{width:min(100%,76rem);gap:1rem}
      .weflair-problems-native .growing-tiles__row{display:flex;gap:1.5rem}
      .weflair-problems-native .growing-tiles__col{flex:1 1 0;min-width:0}
      .weflair-problems-native .growing-tile{min-height:min-content;padding:2rem 1.75rem;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;cursor:default;text-align:left;height:100%}
      .weflair-problems-native .growing-tile__start{display:flex;flex-direction:column;gap:1rem;align-items:flex-start;width:100%}
      .weflair-problems-native .growing-tile__end{display:flex;align-items:flex-start;justify-content:flex-start;min-height:auto;padding-top:0.75rem;width:100%}
      .weflair-problems-native .growing-tile .h5{margin:0;max-width:none;text-wrap:pretty;font-size:clamp(1.15rem,1.25vw,1.35rem);line-height:1.2;letter-spacing:-.03em}
      .weflair-problems-native .growing-tile .p-s{margin:0;max-width:none;font-size:1rem;line-height:1.55;color:rgba(246,243,238,.75);text-align:left;opacity:1!important;visibility:visible!important;transform:none!important}
      .weflair-problems-native .growing-tile__text{display:flex;flex-direction:column;gap:.5rem;justify-content:flex-start;align-items:flex-start;width:100%}
      .weflair-problems-native .growing-tile__end .growing-tile__text{opacity:1!important;transform:none!important;visibility:visible!important;height:auto!important;min-height:min-content!important}
      .weflair-problem-tile__start-row{display:flex;align-items:center;justify-content:flex-start;gap:.7rem;width:100%}
      .weflair-problem-tile__title{max-width:none;text-align:left}
      .weflair-problem-tile__icon{width:2.5rem;height:2.5rem;border:1px solid rgba(62,255,104,.2);border-radius:.65rem;background:rgba(62,255,104,.07);display:grid;place-items:center;color:#3eff68;flex:0 0 auto;transition:background .22s ease,border-color .22s ease}
      .weflair-problem-tile__icon svg{width:1.25rem;height:1.25rem}
      .weflair-problems-native .growing-tile:hover .weflair-problem-tile__icon{background:rgba(62,255,104,.14);border-color:rgba(62,255,104,.36)}\`;

const matchStyle = html.match(/<style id="weflair-runtime-css">([\\s\\S]*?)<\\/style>/);
if (matchStyle) {
  let styleContent = matchStyle[1] + "\\n" + newCss;
  html = html.replace(matchStyle[0], '<style id="weflair-runtime-css">' + styleContent + '</style>');
  fs.writeFileSync('index.html', html, 'utf8');
}

let js = fs.readFileSync('public/weflair-hero.js', 'utf8');
const matchJsStyle = js.match(/<style id="weflair-runtime-css">([\\s\\S]*?)<\\/style>/);
if (matchJsStyle) {
  let styleContent = matchJsStyle[1] + "\\n" + newCss;
  js = js.replace(matchJsStyle[0], '<style id="weflair-runtime-css">' + styleContent + '</style>');
  fs.writeFileSync('public/weflair-hero.js', js, 'utf8');
}
