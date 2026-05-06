/**
 * propagate-nav.cjs
 *
 * !!! WARNING TO ALL AI AGENTS !!!
 * DO NOT EVER REVERT THE NAV_GROUPS. IT CONTAINS THE LATEST,
 * VERIFIED MENU STRUCTURE (inc Checklists & Playbooks order).
 * NEVER BRING BACK "FREE GTM TOOLS" or "AI TOOLS".
 *
 * Rebuilds the shared Dapper-style header nav across every HTML page.
 * This avoids copying malformed inline markup between pages and keeps
 * the menu structure consistent on desktop, tablet, and mobile.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="nav-bar__link-chevron-svg"><path d="M5 9L12 16L19 9" stroke="currentColor" stroke-miterlimit="10" stroke-width="0.125em"></path></svg>`;
const ARROW_DOWN = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg>`;
const ARROW_DIAGONAL = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M7 17L17 7" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M9 7H17V15" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg>`;
const FLARE_PATH =
  "M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z";
const ICONS = {
  rocket: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  sparkle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`,
  trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  calculator: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  playbook: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>`,
  checklist: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 18H3"/><path d="m15 18 2 2 4-4"/><path d="M16 12H3"/><path d="M16 6H3"/></svg>`,
};

const NAV_GROUPS = {
  services: [
    {
      title: "Paid Media &amp; Performance",
      href: "services/paid-media-performance.html",
      body: "Data-backed ads that turn demand into pipeline.",
    },
    {
      title: "Outbound Systems",
      href: "services/go-to-market-systems.html",
      body: "Outbound programs built for real sales conversations.",
    },
    {
      title: "Performance Design &amp; CRO",
      href: "services/performance-design.html",
      body: "Creative, pages, and content that convert more traffic.",
    },
    {
      title: "AI Visibility &amp; SEO",
      href: "services/ai-visibility-seo.html",
      body: "Search content built for AI visibility.",
    },
  ],
  expertise: [
    {
      title: "B2B Demand Generation",
      href: "expertise/b2b-demand-generation.html",
      body: "Demand generation built around qualified pipeline.",
    },
    {
      title: "B2B SaaS",
      href: "expertise/b2b-saas.html",
      body: "Software teams under pressure to prove pipeline.",
    },
    {
      title: "B2B Services",
      href: "expertise/b2b-services.html",
      body: "Service offers that need cleaner demand generation.",
    },
    {
      title: "B2B Tech",
      href: "expertise/b2b-tech.html",
      body: "Technical B2B categories with complex buying journeys.",
    },
    {
      title: "E-commerce",
      href: "expertise/ecommerce.html",
      body: "Paid, lifecycle, and storefront performance.",
    },
  ],
  resources: [
    {
      title: "Guides &amp; Playbooks",
      href: "resources/playbooks.html",
      body: "Practical playbooks and deeper growth guides in one place.",
      icon: "playbook",
    },
    {
      title: "AISEO Playbook",
      href: "resources/ai-seo-playbook.html",
      body: "A free AI search visibility playbook built for resource-led lead capture.",
      icon: "sparkle",
    },
    {
      title: "Resource Pack",
      href: "resource-pack.html",
      body: "AI skills, templates, and tools for sales and marketing teams.",
      icon: "rocket",
    },
    {
      title: "Calculators",
      href: "resources/calculators.html",
      body: "ROI, CAC, and pipeline planning tools.",
      icon: "calculator",
    },
    {
      title: "Ads Checklist",
      href: "resources/checklists.html",
      body: "Paid media checklist for tracking, creative, and launch QA.",
      icon: "checklist",
    },
    {
      title: "Case Studies",
      href: "case-studies/",
      body: "Real results from real engagements.",
      icon: "trophy",
    },
  ],
  about: [
    {
      title: "About with Flair",
      href: "about.html",
      body: "The growth agency built for operators.",
    },
    {
      title: "Careers",
      href: "careers.html",
      body: "Join our team of growth specialists.",
    },
  ],
};

function flareSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" class="weflair-flare"><path d="${FLARE_PATH}" fill="currentColor"></path></svg>`;
}

function arrow(direction = "down") {
  // Always use ARROW_DOWN paths; CSS rotate(-135deg) on [data-arrow="diagonal"]
  // turns the down-arrow into a diagonal (↗). Using pre-drawn diagonal SVGs
  // would double-rotate and point left (←).
  const icon = ARROW_DOWN;
  return `<div class="arrow"><div class="arrow__bg"></div><div class="arrow__box is--duplicate">${icon}</div><div class="arrow__box">${icon}</div></div>`;
}

function tile(prefix, item) {
  return `<a data-hover="" data-arrow="diagonal" href="${prefix}${item.href}" class="nav-dropdown-tile w-inline-block"><div class="nav-dropdown-tile__bg"></div><div class="nav-dropdown-tile__text"><h3 class="nav-dropdown-tile__h">${item.title}</h3><p class="nav-dropdown-tile__p">${item.body}</p></div><div class="nav-dropdown-tile__arrow">${arrow()}</div></a>`;
}

function megaTile(prefix, item) {
  return `<a data-hover="" href="${prefix}${item.href}" class="weflair-mega-tile w-inline-block"><div class="weflair-mega-tile__icon">${ICONS[item.icon]}</div><div class="weflair-mega-tile__text"><h3 class="weflair-mega-tile__h">${item.title}</h3><p class="weflair-mega-tile__p">${item.body}</p></div></a>`;
}

function dropdown(prefix, label, items) {
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  const rowsHtml = rows
    .map(
      (row) =>
        `<div class="nav-dropdown__grid-row">${row
          .map((item) => tile(prefix, item))
          .join("")}</div>`
    )
    .join("");

  return `<div data-dropdown-status="not-active" class="nav-bar__link"><div data-dropdown-click="" class="nav-bar__link-inner"><div class="nav-bar__link-bg"></div><div class="nav-bar__link-text"><span class="nav-bar__link-text-span">${label}</span><div class="nav-bar__link-chevron">${CHEVRON}</div></div></div><div class="nav-dropdown"><div class="nav-dropdown__overflow"><div class="nav-dropdown__overflow-inner"><div class="nav-dropdown__grid">${rowsHtml}</div></div></div></div></div>`;
}

function megaDropdown(prefix, label, items) {
  return `<div data-dropdown-status="not-active" class="nav-bar__link"><div data-dropdown-click="" class="nav-bar__link-inner"><div class="nav-bar__link-bg"></div><div class="nav-bar__link-text"><span class="nav-bar__link-text-span">${label}</span><div class="nav-bar__link-chevron">${CHEVRON}</div></div></div><div class="nav-dropdown nav-dropdown--mega"><div class="nav-dropdown__overflow"><div class="nav-dropdown__overflow-inner"><div class="nav-dropdown__grid"><div class="weflair-mega-grid">${items
    .map((item) => megaTile(prefix, item))
    .join("")}</div></div></div></div></div></div>`;
}

function logo(prefix, isHome) {
  const current = isHome ? ` aria-current="page"` : "";
  const currentClass = isHome ? " w--current" : "";
  return `<a data-hover="flower" href="${prefix}index.html"${current} class="nav-bar__logo-a w-inline-block${currentClass}" data-weflair-logo-applied="true"><span class="weflair-logo"><span class="weflair-logo__mark">${flareSvg()}</span><span class="weflair-logo__word">WeFlair</span></span></a>`;
}

function buildHeader(prefix, isHome) {
  return `<header class="header"><nav class="nav"><div class="nav-bar"><div class="nav-bar__bg"></div><div class="nav-bar__logo-and-hamburger">${logo(prefix, isHome)}<div class="nav-bar__hamburger"><div data-navigation-toggle="toggle" class="hamburger"><div class="hamburger__bar is--top"></div><div class="hamburger__bar"></div><div class="hamburger__bar is--bottom"></div></div></div></div><div data-lenis-prevent="" class="nav-bar__links">${dropdown(
    prefix,
    "Services",
    NAV_GROUPS.services
  )}${dropdown(
    prefix,
    "Expertise",
    NAV_GROUPS.expertise
  )}${megaDropdown(prefix, "Resources", NAV_GROUPS.resources)}${dropdown(
    prefix,
    "About",
    NAV_GROUPS.about
  )}</div><div class="nav-bar__btn"><a data-arrow="diagonal" data-hover="" data-btn-theme="default" href="${prefix}contact.html" class="btn w-inline-block"><div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Talk to us</span></div>${arrow(
    "diagonal"
  )}</a></div></div></nav></header>`;
}

function collectHtmlFiles(dir) {
  const files = [];
  const skipDirs = new Set([
    ".git",
    "_archive",
    "_recovery_snapshots",
    "dist",
    "node_modules",
    "ops",
    "public",
    "screenshots",
  ]);

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && skipDirs.has(entry.name)) {
      continue;
    }

    if (entry.isFile() && entry.name.startsWith("recovered-")) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectHtmlFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

function prefixFor(relPath) {
  const depth = relPath.split("/").length - 1;
  return depth > 0 ? "../".repeat(depth) : "";
}

const htmlFiles = collectHtmlFiles(ROOT);
let updated = 0;
let skipped = 0;

const headerPartialPath = path.join(ROOT, "src", "partials", "header.html");
const headerPartial = buildHeader("/", false).replace(/^<header class="header">/, "").replace(/<\/header>$/, "");
fs.writeFileSync(headerPartialPath, headerPartial, "utf8");
console.log("OK src/partials/header.html");
updated += 1;

for (const filePath of htmlFiles) {
  const relPath = path.relative(ROOT, filePath).replace(/\\/g, "/");

  const html = fs.readFileSync(filePath, "utf8");
  const headerRegex = /<header class="header">[\s\S]*?<\/header>/;

  if (!headerRegex.test(html)) {
    console.log(`SKIP ${relPath}: header not found`);
    skipped += 1;
    continue;
  }

  const nextHtml = html.replace(
    headerRegex,
    buildHeader(prefixFor(relPath), relPath === "index.html")
  );

  if (nextHtml === html) {
    console.log(`SKIP ${relPath}: no changes`);
    skipped += 1;
    continue;
  }

  fs.writeFileSync(filePath, nextHtml, "utf8");
  updated += 1;
  console.log(`OK ${relPath}`);
}

const partialHeader = buildHeader("/", false)
  .replace(/^<header class="header">/, "")
  .replace(/<\/header>$/, "");
fs.writeFileSync(path.join(ROOT, "src", "partials", "header.html"), partialHeader, "utf8");

console.log(`Done: ${updated} updated, ${skipped} skipped`);
