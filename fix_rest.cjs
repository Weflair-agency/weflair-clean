const fs = require("fs");
function fixFile(file, replacer) {
  try {
    let content = fs.readFileSync(file, "utf8");
    let initialCount = content.length;
    content = replacer(content);
    if (content.length !== initialCount) {
        fs.writeFileSync(file, content, "utf8");
        console.log("Fixed " + file);
    }
  } catch(e) {}
}

fixFile("public/handoff-cards/strategy-card.html", html => {
  html = html.replace("const TIMING = [4400, 4600, 4600, 5000];", "const TIMING = [3400, 3600, 3600, 4000];");
  html = html.replace(/transition: opacity 0\.5s ease,\s*transform 0\.5s ease;/g, "transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);");
  return html;
});

fixFile("public/handoff-cards/design-card.html", html => {
  html = html.replace(/duration: 4800/g, "duration: 3800");
  html = html.replace(/duration: 5800/g, "duration: 4200");
  html = html.replace(/duration: 4200/g, "duration: 3600");
  html = html.replace(/transition: opacity 0\.5s ease,\s*transform 0\.5s ease;/g, "transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);");
  return html;
});

fixFile("public/handoff-cards/reporting-card.html", html => {
  html = html.replace(/transition: opacity 0\.5s ease,\s*transform 0\.5s ease;/g, "transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);");
  return html;
});
