const fs = require("fs");
const path = require("path");
const manifest = require("./site-manifest.cjs");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");

const EXTRA_XML_DIRS = [
  {
    dir: path.join(ROOT, "resources", "guides"),
    include: (absolutePath) => absolutePath.endsWith(".html"),
    priority: "0.7",
  },
  {
    dir: path.join(ROOT, "case-studies"),
    include: (absolutePath) =>
      absolutePath.endsWith(".html") && path.basename(absolutePath).toLowerCase() !== "index.html",
    priority: "0.75",
  },
  {
    dir: path.join(ROOT, "blog"),
    include: (absolutePath) => absolutePath.endsWith(".html"),
    priority: "0.7",
  },
];

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

function buildEntries() {
  const entries = [];
  const seen = new Set();

  for (const route of manifest.routes) {
    if (route.includeInXml === false) {
      continue;
    }

    const sourcePath = path.join(ROOT, route.file);
    if (!fs.existsSync(sourcePath)) {
      continue;
    }

    const priority =
      route.path === "/"
        ? "1.0"
        : route.path === "/resources/" || route.path === "/case-studies/"
          ? "0.9"
          : "0.8";

    entries.push({ path: route.path, priority });
    seen.add(route.path);
  }

  for (const config of EXTRA_XML_DIRS) {
    const files = collectFiles(config.dir, config.include);
    for (const absolutePath of files) {
      const publicPath = publicPathFromFile(path.relative(ROOT, absolutePath));
      if (seen.has(publicPath)) {
        continue;
      }
      entries.push({ path: publicPath, priority: config.priority });
      seen.add(publicPath);
    }
  }

  return entries;
}

function writeXml(entries) {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const entry of entries) {
    lines.push("  <url>");
    lines.push(`    <loc>${manifest.siteUrl}${entry.path}</loc>`);
    lines.push("    <changefreq>weekly</changefreq>");
    lines.push(`    <priority>${entry.priority}</priority>`);
    lines.push("  </url>");
  }

  lines.push("</urlset>");
  fs.mkdirSync(DIST, { recursive: true });
  fs.writeFileSync(path.join(DIST, "sitemap.xml"), `${lines.join("\n")}\n`);
}

function writeRobots() {
  const robots = `User-agent: *\nAllow: /\nDisallow: /handoff-cards/\n\nSitemap: ${manifest.siteUrl}/sitemap.xml\n`;
  fs.writeFileSync(path.join(DIST, "robots.txt"), robots);
}

const entries = buildEntries();
writeXml(entries);
writeRobots();

console.log("SEO artifacts generated -> dist");
