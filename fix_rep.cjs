const fs = require("fs");
let html = fs.readFileSync("public/handoff-cards/reporting-card.html", "utf8");

html = html.replace(/animateNumber\(totalEl,\s*0,\s*1231000,\s*1800,\s*v\s*=>\s*.{1,40}\);/g, "animateNumber(totalEl, 0, 1231000, 1800, v => \"$\" + (v / 1000000).toFixed(2) + \"M\");");

html = html.replace("const TIMING = [5200, 6400, 5400];", "const TIMING = [3800, 4200, 4600];");
html = html.replace("setTimeout(() => typing.classList.add(\"show\"), 300)", "setTimeout(() => typing.classList.add(\"show\"), 150)");
html = html.replace("setTimeout(() => typing.classList.remove(\"show\"), 1100)", "setTimeout(() => typing.classList.remove(\"show\"), 800)");
html = html.replace("1300 + i * 380", "1000 + i * 220");

fs.writeFileSync("public/handoff-cards/reporting-card.html", html, "utf8");
console.log("Fixed report");
