# WeFlair Security Best Practices Report

Date: 2026-05-09

## Executive Summary

The site is a static Netlify deployment, so the main security risks are exposed build artifacts, weak response headers, stale frontend tooling, third-party scripts, and public iframe source files. I found no committed private keys, HubSpot private token, Netlify token, GitHub token, or public `.env` exposure in the deployed site checks performed during this audit.

Fixes applied in this pass:

- Added enforced Netlify security headers, including CSP, same-origin framing, nosniff, referrer policy, and permissions policy.
- Added `X-Robots-Tag` and `no-store` headers for `/handoff-cards/*`.
- Stopped root debug/build helper JavaScript files from being copied into `dist`.
- Stopped Python rebuild/fix scripts from being copied into `dist/case-studies`.
- Updated vulnerable dev dependencies and confirmed `npm audit` returns zero vulnerabilities.

Important residual risk: `/handoff-cards/*.html` are still public because the homepage renders them as same-origin iframes. The new headers reduce indexing and framing abuse, but they do not make public iframe HTML private. A determined scraper can still request files needed by a public webpage.

## High Severity

### S-001: Build Published Root Debug And Helper JavaScript

- Severity: High
- Location: `build-site.cjs:515`
- Evidence: The build previously copied root-level JavaScript into `dist`; live checks showed files such as `/debug_playwright.js`, `/debug_scroll_node.js`, `/fix_b2b.js`, `/vite.config.js`, and `/assessment.js` returning HTTP 200.
- Impact: These files are static downloads on Netlify, not server-executed code, but they expose internal development scripts and implementation details. This increases the surface for recon and accidental leakage.
- Fix: Changed the root copy rule to publish only root CSS files. See `build-site.cjs:515` and `build-site.cjs:520`.
- Verification: After `npm run build`, these files are absent from `dist`.

### S-002: Build Published Python Rebuild/Fix Scripts From Static Folders

- Severity: High
- Location: `build-site.cjs:48`, `build-site.cjs:511`; source artifacts in `case-studies/fix_css2.py:1`, `case-studies/rebuild_js.py:1`
- Evidence: `dist/case-studies/fix_css2.py`, `dist/case-studies/fix_index.py`, `dist/case-studies/fix_js.py`, `dist/case-studies/rebuild_css.py`, `dist/case-studies/rebuild_css_final.py`, `dist/case-studies/rebuild_html.py`, and `dist/case-studies/rebuild_js.py` were present after build.
- Impact: These files are also static downloads, not executable on Netlify, but publishing internal rebuild scripts exposes project internals and increases avoidable recon surface.
- Fix: Added a static asset extension allowlist and changed static directory copying to use it. See `build-site.cjs:27`, `build-site.cjs:48`, and `build-site.cjs:511`.
- Verification: After rebuild, no `.py`, `.cjs`, `.mjs`, `.ts`, `.tsx`, `.jsx`, `.map`, `.log`, `.ps1`, `.bat`, or `.sh` files are present in `dist`.

### S-003: Missing Enforced Browser Security Headers On Live Netlify Site

- Severity: High
- Location: `netlify.toml:7`, `netlify.toml:13`
- Evidence: Live header checks showed only a report-only CSP and HSTS. There was no enforced CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, or `Permissions-Policy`.
- Impact: Without enforced headers, XSS, clickjacking, MIME sniffing, and over-broad browser feature exposure have less browser-side defense-in-depth.
- Fix: Added enforced headers in `netlify.toml`, including `Content-Security-Policy`, `X-Frame-Options = "SAMEORIGIN"`, `X-Content-Type-Options = "nosniff"`, `Referrer-Policy`, and `Permissions-Policy`.
- Mitigation note: The current CSP still allows `'unsafe-inline'` because the site contains significant inline scripts/styles. Removing inline code would allow a stricter CSP later.

## Medium Severity

### S-004: Public Handoff Card HTML Is Scrapeable By Design

- Severity: Medium
- Location: `index.html:4508`, `index.html:4527`, `index.html:4546`, `index.html:4567`, `index.html:12913`; headers in `netlify.toml:16`
- Evidence: The homepage embeds `/handoff-cards/strategy-card.html`, `/handoff-cards/design-card.html`, `/handoff-cards/execution-card.html`, `/handoff-cards/reporting-card.html`, and `/handoff-cards/proof-design-loop.html` as public iframes.
- Impact: Anyone who can load the public homepage can discover and request these iframe URLs. Headers can reduce indexing and embedding elsewhere, but cannot stop a determined scraper from downloading public page assets.
- Fix: Added `X-Robots-Tag = "noindex, nofollow, noarchive, nosnippet"` and `Cache-Control = "no-store"` for `/handoff-cards/*` in `netlify.toml:16`.
- Residual risk: True protection requires changing the implementation: replace iframe HTML with images/video/canvas assets, inline/bundle only what must be public, or gate the pages behind authentication and stop using them on the public homepage.

### S-005: Vulnerable Dev Tooling Dependencies

- Severity: Medium
- Location: `package.json:14`, `package.json:15`; `package-lock.json:1673`, `package-lock.json:1883`
- Evidence: Initial `npm audit` found a high Vite dev-server advisory and a moderate PostCSS advisory.
- Impact: These are development/build-time dependencies, not production runtime dependencies, but stale dev tooling can expose local dev environments or CI build surfaces.
- Fix: Updated `vite` to `6.4.2`, `jsdom` to `29.1.1`, and PostCSS to `8.5.14` through `npm audit fix`.
- Verification: `npm audit --json` and `npm audit --omit=dev --json` both report zero vulnerabilities.

## Low Severity

### S-006: Source Tree Contains Many Scratch Scripts And Temporary Files

- Severity: Low
- Location: root files such as `debug_playwright.js:1`, `debug_scroll_node.js:1`, `fix_b2b.js:1`, `test.txt:1`, and `tmp_proof_script.html:1`
- Evidence: The repo root contains many temporary scripts, extracted snippets, screenshots, and one-off patch files.
- Impact: The hardened build no longer publishes the risky script types, but repo clutter makes future accidental publishing more likely and makes audits harder.
- Fix: Build output is now restricted. Recommended follow-up is to move scratch files into an ignored `ops/scratch/` or delete anything no longer needed.

## Checks Performed

- Live public file checks for `.env`, `package.json`, `netlify.toml`, and helper/debug files.
- Local secret pattern scan for common private key/token patterns, excluding `node_modules`, `dist`, archives, and recovery snapshots.
- Static scan for dangerous frontend sinks and navigation patterns.
- `npm audit --json`.
- `npm audit --omit=dev --json`.
- `npm run build`.
- `dist` artifact scan for non-web/script artifacts.

## Deployment Note

The hardening commit was pushed to the GitHub repository connected to Netlify and Netlify created deploy `69fe66ed05ca3d0008f34461` for commit `3560c014aa7ad7c16443ad2ee282d8f8a77204ce`, but Netlify skipped it with: `Skipped due to account credit usage exceeded`.

Production is therefore still serving the previous deploy until the Netlify account credit/billing issue is resolved and the deploy is retried.
