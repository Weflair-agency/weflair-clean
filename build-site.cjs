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
  {
    dir: path.join(ROOT, "blog"),
    include: (absolutePath) => absolutePath.endsWith(".html"),
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
    `<meta[^>]*${attribute}=["']${escapeRegex(value)}["'][^>]*content=(["'])([\\s\\S]*?)\\1[^>]*>`,
    "i"
  );
  const direct = html.match(pattern);
  if (direct) {
    return direct[2].trim();
  }

  const reversedPattern = new RegExp(
    `<meta[^>]*content=(["'])([\\s\\S]*?)\\1[^>]*${attribute}=["']${escapeRegex(value)}["'][^>]*>`,
    "i"
  );
  const reversed = html.match(reversedPattern);
  return reversed ? reversed[2].trim() : "";
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
  const ogImage = `${manifest.siteUrl}${manifest.defaultOgImage}`;

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

  // og:image + twitter:image
  next = upsertTag(
    next,
    /<meta[^>]*property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${escapeAttr(ogImage)}" />`
  );
  next = upsertTag(
    next,
    /<meta[^>]*name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${escapeAttr(ogImage)}" />`
  );

  // og:type
  next = upsertTag(
    next,
    /<meta[^>]*property=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="website" />`
  );

  // og:site_name
  next = upsertTag(
    next,
    /<meta[^>]*property=["']og:site_name["'][^>]*>/i,
    `<meta property="og:site_name" content="${escapeAttr(manifest.siteName)}" />`
  );

  // twitter:site
  next = upsertTag(
    next,
    /<meta[^>]*name=["']twitter:site["'][^>]*>/i,
    `<meta name="twitter:site" content="@weflair" />`
  );

  return next;
}

function buildSchemaJson(routeMeta, canonicalUrl, title, description) {
  const org = {
    "@type": "Organization",
    name: manifest.siteName,
    url: manifest.siteUrl,
    logo: `${manifest.siteUrl}/brand-assets/office.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: manifest.contactPrimaryEmail,
      contactType: "sales",
    },
    sameAs: manifest.socialLinks.map((l) => l.href),
  };

  const schemas = [];

  const schemaType = routeMeta?.schemaType || "WebPage";
  const pageType = routeMeta?.pageType || "";

  if (pageType === "home") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: manifest.siteName,
      url: manifest.siteUrl,
      description: description || "",
      publisher: org,
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      ...org,
    });
  } else if (schemaType === "Service" || pageType === "service" || pageType === "expertise") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: title || "",
      description: description || "",
      url: canonicalUrl,
      provider: org,
    });
  } else if (schemaType === "AboutPage" || pageType === "about") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: title || "",
      description: description || "",
      url: canonicalUrl,
      mainEntity: org,
    });
  } else if (schemaType === "ContactPage" || pageType === "contact") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: title || "",
      description: description || "",
      url: canonicalUrl,
      mainEntity: {
        "@type": "Organization",
        name: manifest.siteName,
        email: manifest.contactPrimaryEmail,
      },
    });
  } else if (schemaType === "CollectionPage" || pageType === "collection") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title || "",
      description: description || "",
      url: canonicalUrl,
      provider: org,
    });
  } else {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title || "",
      description: description || "",
      url: canonicalUrl,
      publisher: org,
    });
  }

  return schemas;
}

function injectSchema(html, routeMeta, publicPath) {
  // Skip if JSON-LD already exists
  if (html.includes("application/ld+json")) {
    return html;
  }

  const canonicalUrl = `${manifest.siteUrl}${publicPath}`;
  const title = routeMeta?.title || extractTitle(html);
  const description = routeMeta?.description || extractMetaContent(html, "name", "description");
  const schemas = buildSchemaJson(routeMeta, canonicalUrl, title, description);

  if (schemas.length === 0) {
    return html;
  }

  const scriptTags = schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n  ");

  if (/<\/head>/i.test(html)) {
    return html.replace(/<\/head>/i, `  ${scriptTags}\n</head>`);
  }

  return html;
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
  html = injectSchema(html, routeMeta, publicPath);

  // Ensure lang="en" on <html>
  if (/<html(?![^>]*lang=)/i.test(html)) {
    html = html.replace(/<html/i, '<html lang="en"');
  }

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

  // Copy root-level CSS and JS files (e.g. wf-stars.css, services-shared.css)
  for (const entry of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    const name = entry.name.toLowerCase();
    if (name.endsWith(".css") || name.endsWith(".js")) {
      const src = path.join(ROOT, entry.name);
      const dest = path.join(DIST, entry.name);
      fs.copyFileSync(src, dest);
    }
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
