const fs = require("fs");
let html = fs.readFileSync("public/handoff-cards/execution-card.html", "utf8");

// Fix TIMING array
html = html.replace("const TIMING = [5200, 5400, 5400];", "const TIMING = [3800, 4400, 4600];");

// Make JS loop delay tighter
html = html.replace("const delay = 800 + i * 420;", "const delay = 600 + i * 250;");
html = html.replace("const delay = 500 + i * 560;", "const delay = 400 + i * 280;");
html = html.replace(/, 2400\)\);/g, ", 1600));");

// Smooth frame transition CSS
html = html.replace(/transition: opacity 0\.5s ease,\s*transform 0\.5s ease;/g, "transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);");
html = html.replace(/transform: translateY\(8px\);/g, "transform: translateY(12px);");

// Reveal delays tighter
html = html.replace("transition-delay: 0.28s;", "transition-delay: 0.15s;");
html = html.replace("transition-delay: 0.41s;", "transition-delay: 0.2s;");
html = html.replace("transition-delay: 0.54s;", "transition-delay: 0.25s;");

fs.writeFileSync("public/handoff-cards/execution-card.html", html, "utf8");
console.log("Fixed exec");
