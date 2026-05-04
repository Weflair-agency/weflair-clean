
const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");
const start = html.indexOf("<section class=\"wf-home-why\"");
const end = html.indexOf("</section>", start) + 10;
if (start !== -1) {
    let section = html.substring(start, end);
    section = section.replace(/#4c5bb0/gi, "#22c55e");
    section = section.replace(/#4C5BB1/gi, "#22c55e");
    section = section.replace(/#304a79/gi, "#15803d");
    section = section.replace(/#3c4b78/gi, "#166534");
    section = section.replace(/background:\s*#4C5BB1/gi, "background: #22c55e");
    section = section.replace(/background-color:\s*#4C5BB1/gi, "background-color: #22c55e");
    section = section.replace(/background:\s*#202c4b/gi, "background: rgba(34, 197, 94, 0.1)");
    html = html.substring(0, start) + section + html.substring(end);
    fs.writeFileSync("index.html", html);
    fs.writeFileSync("dist/index.html", html);
    console.log("Fixed SVG colors in index.html to green");
}

