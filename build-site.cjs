const fs = require("fs");
const path = require("path");
const manifest = require("./site-manifest.cjs");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");
const HEADER = fs.readFileSync(path.join(ROOT, "src", "partials", "header.html"), "utf8").trim();
const FOOTER = fs.readFileSync(path.join(ROOT, "src", "partials", "footer.html"), "utf8").trim();

const EXTRA_HTML_DIRS = [
  {
    dir: path.join(ROOT, "resources", "guides"),
    include: (absolutePath) => absolutePath.endsWith(".html"),
  },
  {
    dir: path.join(ROOT, "case-studies"),
    include: (absolutePath) =>
      absolutePath.endsWith(".html") && path.basename(absolutePath).toLowerCase() !== "index.html",
  },
];

const STATIC_DIRS = ["brand-assets", "images", "resources", "case-studies", "services", "expertise", "legal"];

function cleanDist() {
  fs.mkdirSync(DIST, { recursive: true });
  for (const entry of fs.readdirSync(DIST)) {
    fs.rmSync(path.join(DIST, entry), { recursive: true, force: true });
  }
}

function normalizePath(filePath) {
  return filePath.split(path.sep).join("/");
}

function publicPathFromFile(relativeFile) {
  const normalized = normalizePath(relativeFile);
  if (normalized === "index.html") {
    return "/";
  }
  if (normalized.endsWith("/index.html")) {
    return `/${normalized.slice(0, -"index.html".length)}`;
  }
  return `/${normalized}`;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;");
}

function insertIntoHead(html, tag) {
  if (/<\/head>/i.test(html)) {
    return html.replace(/<\/head>/i, `  ${tag}\n</head>`);
  }
  return html;
}

function upsertTag(html, pattern, tag) {
  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }
  return insertIntoHead(html, tag);
}

function extractTitle(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? match[1].trim() : "";
}

function extractMetaContent(html, attribute, value) {
  const pattern = new RegExp(
    `<meta[^>]*${attribute}=["']${escapeRegex(value)}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    "i"
  );
  const direct = html.match(pattern);
  if (direct) {
    return direct[1].trim();
  }

  const reversedPattern = new RegExp(
    `<meta[^>]*content=["']([^"']*)["'][^>]*${attribute}=["']${escapeRegex(value)}["'][^>]*>`,
    "i"
  );
  const reversed = html.match(reversedPattern);
  return reversed ? reversed[1].trim() : "";
}

function injectSharedChrome(html) {
  let next = html;

  if (next.includes("<!-- WEFLAIR_HEADER -->")) {
    next = next.replace("<!-- WEFLAIR_HEADER -->", HEADER);
  } else if (/<header[^>]*>[\s\S]*?<nav[\s\S]*?<\/nav>\s*<\/header>/i.test(next)) {
    next = next.replace(/<header[^>]*>[\s\S]*?<nav[\s\S]*?<\/nav>\s*<\/header>/i, `<header class="header">${HEADER}</header>`);
  } else if (/<nav[^>]*>[\s\S]*?<\/nav>/i.test(next)) {
    next = next.replace(/<nav[^>]*>[\s\S]*?<\/nav>/i, HEADER);
  } else {
    next = next.replace(/<body([^>]*)>/i, `<body$1>\n<header class="header">${HEADER}</header>`);
  }

  if (next.includes("<!-- WEFLAIR_FOOTER -->")) {
    next = next.replace("<!-- WEFLAIR_FOOTER -->", FOOTER);
  } else if (/<section[^>]*class="[^"]*\bfooter\b[^"]*"[\s\S]*?<\/section>/i.test(next)) {
    next = next.replace(/<section[^>]*class="[^"]*\bfooter\b[^"]*"[\s\S]*?<\/section>/i, FOOTER);
  } else if (/<footer[^>]*>[\s\S]*?<\/footer>/i.test(next)) {
    next = next.replace(/<footer[^>]*>[\s\S]*?<\/footer>/i, FOOTER);
  } else {
    next = next.replace(/<\/body>/i, `${FOOTER}\n</body>`);
  }

  return next;
}

function upsertMetadata(html, publicPath, explicitTitle, explicitDescription) {
  const canonicalUrl = `${manifest.siteUrl}${publicPath}`;
  const title = explicitTitle || extractTitle(html);
  const description = explicitDescription || extractMetaContent(html, "name", "description");

  let next = html;

  if (title) {
    next = upsertTag(next, /<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
    next = upsertTag(
      next,
      /<meta[^>]*property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${escapeAttr(title)}" />`
    );
    next = upsertTag(
      next,
      /<meta[^>]*name=["']twitter:title["'][^>]*>/i,
      `<meta name="twitter:title" content="${escapeAttr(title)}" />`
    );
  }

  if (description) {
    next = upsertTag(
      next,
      /<meta[^>]*name=["']description["'][^>]*>/i,
      `<meta name="description" content="${escapeAttr(description)}" />`
    );
    next = upsertTag(
      next,
      /<meta[^>]*property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${escapeAttr(description)}" />`
    );
    next = upsertTag(
      next,
      /<meta[^>]*name=["']twitter:description["'][^>]*>/i,
      `<meta name="twitter:description" content="${escapeAttr(description)}" />`
    );
  }

  next = upsertTag(
    next,
    /<link[^>]*rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`
  );
  next = upsertTag(
    next,
    /<meta[^>]*property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${escapeAttr(canonicalUrl)}" />`
  );
  next = upsertTag(
    next,
    /<meta[^>]*name=["']twitter:card["'][^>]*>/i,
    `<meta name="twitter:card" content="summary_large_image" />`
  );

  return next;
}

function writeHtml(relativeFile, html) {
  const outPath = path.join(DIST, relativeFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
}

function buildPage(relativeFile, routeMeta) {
  const sourcePath = path.join(ROOT, relativeFile);
  if (!fs.existsSync(sourcePath)) {
    console.log(`Skipping ${relativeFile} (does not exist)`);
    return;
  }

  let html = fs.readFileSync(sourcePath, "utf8");
  const publicPath = routeMeta?.path || publicPathFromFile(relativeFile);
  html = injectSharedChrome(html);
  html = upsertMetadata(html, publicPath, routeMeta?.title, routeMeta?.description);

  if (publicPath !== "/") {
    html = html.replace(/<style id="weflair-runtime-css">[\s\S]*?<\/style>/i, "");
  }

  writeHtml(relativeFile, html);
  console.log(`Compiled ${relativeFile}`);
}

function collectFiles(directory, include, results = []) {
  if (!fs.existsSync(directory)) {
    return results;
  }

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      collectFiles(absolutePath, include, results);
      continue;
    }
    if (include(absolutePath)) {
      results.push(absolutePath);
    }
  }

  return results;
}

function copyDirectory(sourceDir, destDir, includeFile) {
  if (!fs.existsSync(sourceDir)) {
    return;
  }

  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destPath, includeFile);
      continue;
    }

    if (!includeFile || includeFile(sourcePath)) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(sourcePath, destPath);
    }
  }
}

function buildManifestRoutes() {
  for (const route of manifest.routes) {
    buildPage(route.file, route);
  }
}

function buildExtraHtml() {
  const manifestFiles = new Set(manifest.routes.map((route) => normalizePath(route.file)));

  for (const config of EXTRA_HTML_DIRS) {
    const files = collectFiles(config.dir, config.include);
    for (const absolutePath of files) {
      const relativeFile = normalizePath(path.relative(ROOT, absolutePath));
      if (manifestFiles.has(relativeFile)) {
        continue;
      }
      buildPage(relativeFile);
    }
  }
}

function copyStaticAssets() {
  copyDirectory(path.join(ROOT, "public"), DIST);

  for (const directory of STATIC_DIRS) {
    copyDirectory(
      path.join(ROOT, directory),
      path.join(DIST, directory),
      (absolutePath) => !absolutePath.toLowerCase().endsWith(".html")
    );
  }

  const netlifyConfig = path.join(ROOT, "netlify.toml");
  if (fs.existsSync(netlifyConfig)) {
    fs.copyFileSync(netlifyConfig, path.join(DIST, "netlify.toml"));
  }
}

cleanDist();
buildManifestRoutes();
buildExtraHtml();
copyStaticAssets();

console.log("Build complete -> dist");
