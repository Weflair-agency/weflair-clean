const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const FOOTER = fs.readFileSync(path.join(ROOT, "src", "partials", "footer.html"), "utf8").trim();

const SKIP_DIRS = new Set([
  ".git",
  "_archive",
  "_recovery_snapshots",
  "dist",
  "node_modules",
  "ops",
  "public",
  "screenshots",
]);

function collectHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) {
        collectHtmlFiles(path.join(dir, entry.name), files);
      }
      continue;
    }

    if (entry.isFile() && entry.name.startsWith("recovered-")) {
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(path.join(dir, entry.name));
    }
  }

  return files;
}

function replaceFooter(html) {
  if (html.includes("<!-- WEFLAIR_FOOTER -->")) {
    return html.replace("<!-- WEFLAIR_FOOTER -->", FOOTER);
  }

  if (/<section[^>]*class="[^"]*\bfooter\b[^"]*"[\s\S]*?<\/section>/i.test(html)) {
    return html.replace(/<section[^>]*class="[^"]*\bfooter\b[^"]*"[\s\S]*?<\/section>/i, FOOTER);
  }

  if (/<footer[^>]*>[\s\S]*?<\/footer>/i.test(html)) {
    return html.replace(/<footer[^>]*>[\s\S]*?<\/footer>/i, FOOTER);
  }

  return html.replace(/<\/body>/i, `${FOOTER}\n</body>`);
}

let updated = 0;
let skipped = 0;

for (const filePath of collectHtmlFiles(ROOT)) {
  const relPath = path.relative(ROOT, filePath).replace(/\\/g, "/");
  const html = fs.readFileSync(filePath, "utf8");
  const nextHtml = replaceFooter(html);

  if (nextHtml === html) {
    console.log(`SKIP ${relPath}: no changes`);
    skipped += 1;
    continue;
  }

  fs.writeFileSync(filePath, nextHtml, "utf8");
  console.log(`OK ${relPath}`);
  updated += 1;
}

console.log(`Done: ${updated} updated, ${skipped} skipped`);
