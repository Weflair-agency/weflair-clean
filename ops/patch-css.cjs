const fs = require('fs');

let css = `
/* ORG CHART AND AVATAR STYLES */
.weflair-org-chart { display: flex; flex-direction: column; align-items: center; gap: 0; width: 100%; animation: weflairOrgFadeIn 0.6s ease-out forwards; }
@keyframes weflairOrgFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.weflair-org-lead { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; text-align: center; }
.weflair-org-avatar { width: 3.5rem; height: 3.5rem; border-radius: 50%; background-color: rgba(62,255,104,0.15); border: 2px solid rgba(62,255,104,0.4); background-size: cover; background-position: center; box-shadow: 0 4px 12px rgba(62,255,104,0.1); }
.weflair-org-avatar.is-sm { width: 3rem; height: 3rem; border-width: 1px; border-color: rgba(246,243,238,0.2); background-color: rgba(246,243,238,0.05); box-shadow: none; }
.weflair-org-name { font-weight: 700; font-size: 0.95rem; color: #f6f3ee; letter-spacing: -0.01em; }
.weflair-org-label { font-size: 0.72rem; color: rgba(246,243,238,0.6); font-weight: 600; text-align: center; max-width: 6rem; line-height: 1.25; text-transform: uppercase; letter-spacing: 0.04em; }

.weflair-org-connector { width: 1px; height: 1.5rem; background: rgba(246,243,238,0.15); position: relative; }
.weflair-org-connector::after { content: ""; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: clamp(14rem, 100%, 20rem); height: 1px; background: rgba(246,243,238,0.15); }

.weflair-org-child-nodes { display: flex; gap: clamp(0.5rem, 1.5vw, 1.5rem); align-items: flex-start; justify-content: center; position: relative; width: 100%; max-width: 22rem; }
.weflair-org-node { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; position: relative; padding-top: 1rem; flex: 1; }
.weflair-org-node::before { content: ""; position: absolute; top: 0; left: 50%; width: 1px; height: 1rem; background: rgba(246,243,238,0.15); transform: translateX(-50%); }

.weflair-demand-team__avatars { display: flex; align-items: center; margin: 1rem 0 1.5rem; }
.weflair-demand-team__avatar { width: 2.2rem; height: 2.2rem; border-radius: 50%; border: 2px solid #111; background-size: cover; background-position: center; background-color: rgba(246,243,238,0.1); margin-left: -0.65rem; transition: transform 0.2s ease, border-color 0.25s ease; position: relative; cursor: pointer; }
.weflair-demand-team__avatar:first-child { margin-left: 0; }
.weflair-demand-team__avatar:hover { transform: translateY(-3px); z-index: 10; border-color: rgba(62,255,104,0.4); }

.weflair-demand-team__copy-block { max-width: 33rem !important; }
.weflair-demand-team__copy-block h3 { text-wrap: balance; }
`;

let targetFile = 'public/weflair-hero.js';
let content = fs.readFileSync(targetFile, 'utf8');

// Insert it right before the closing backtick of injectRuntimeStyles
content = content.replace(/(}\s*`;\s*})/g, css + '\n$1');

fs.writeFileSync(targetFile, content);
console.log('Patch complete.');
