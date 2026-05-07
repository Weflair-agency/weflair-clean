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

function outputFileFromPublicPath(publicPath) {
  if (publicPath === "/") {
    return path.join(DIST, "index.html");
  }
  const localPath = publicPath.replace(/^\/+/, "");
  if (publicPath.endsWith("/")) {
    return path.join(DIST, localPath, "index.html");
  }
  return path.join(DIST, localPath);
}

function extractTagContent(html, selector) {
  const match = html.match(selector);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

function extractMetaDescription(html) {
  const direct = html.match(/<meta[^>]*name=["']description["'][^>]*content=(["'])([\s\S]*?)\1[^>]*>/i);
  if (direct) {
    return direct[2].replace(/\s+/g, " ").trim();
  }

  const reversed = html.match(/<meta[^>]*content=(["'])([\s\S]*?)\1[^>]*name=["']description["'][^>]*>/i);
  return reversed ? reversed[2].replace(/\s+/g, " ").trim() : "";
}

function pageSummary(publicPath) {
  const htmlPath = outputFileFromPublicPath(publicPath);
  if (!fs.existsSync(htmlPath)) {
    return {};
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  return {
    title: extractTagContent(html, /<title>([\s\S]*?)<\/title>/i),
    description: extractMetaDescription(html),
  };
}

function writeLlmsTxt(entries) {
  const lines = [
    "# WeFlair",
    "",
    "> WeFlair is a growth marketing agency for paid media, outbound systems, performance design, AI visibility, SEO, and RevOps.",
    "",
    "## Public pages",
  ];

  for (const entry of entries) {
    const summary = pageSummary(entry.path);
    const title = summary.title || manifest.siteName;
    const description = summary.description ? ` - ${summary.description}` : "";
    lines.push(`- [${title}](${manifest.siteUrl}${entry.path})${description}`);
  }

  lines.push("");
  lines.push("## Crawling notes");
  lines.push("- Canonical domain: https://weflair.co");
  lines.push("- Sitemap: https://weflair.co/sitemap.xml");
  lines.push("- Utility handoff card pages are excluded from search indexing in robots.txt.");

  fs.writeFileSync(path.join(DIST, "llms.txt"), `${lines.join("\n")}\n`);
}

const entries = buildEntries();
writeXml(entries);
writeRobots();
writeLlmsTxt(entries);

console.log("SEO artifacts generated -> dist");
