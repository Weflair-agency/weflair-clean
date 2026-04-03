# WeFlair — Growth Marketing Agency

Static website for [WeFlair](https://weflair.com), built on the Dapper Agency template with custom WeFlair branding, content, and interactive components.

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://127.0.0.1:5994/`

## Project Structure

```
weflair-site/
├── index.html              # Homepage (main page — WeFlair customized)
├── public/
│   ├── brand-assets/       # Logos, icons, client logos
│   │   ├── client-logos/   # Client brand logos (Harrier, RCT, Molahin, etc.)
│   │   ├── star-solid.svg  # Favicon
│   │   ├── star-glow.svg   # Glow variant
│   │   └── weflair-wordmark.svg
│   ├── dapper-styles.css   # Dapper foundation CSS (DO NOT EDIT)
│   ├── dapper-slater.css   # Dapper Slater CSS (DO NOT EDIT)
│   ├── weflair-hero.css    # WeFlair custom CSS overrides
│   ├── weflair-hero.js     # WeFlair custom JS (interactivity, widgets, etc.)
│   ├── codex-dapper-foundation.js  # Dapper base JS interactions
│   └── robots.txt
├── services/               # Service pages (Dapper template — needs WeFlair content)
├── expertise/              # Expertise pages (Dapper template — needs WeFlair content)
├── legal/                  # Privacy & Terms pages
├── about.html              # About page (Dapper template)
├── blog.html               # Blog page (Dapper template)
├── cases.html              # Cases page (Dapper template)
├── contact.html            # Contact page (Dapper template)
├── jobs.html               # Jobs page (Dapper template)
├── newsletter.html         # Newsletter page (Dapper template)
├── demand-gen-agency.html  # Demand gen page (Dapper template)
├── vite.config.js          # Vite dev server config
└── package.json
```

## Architecture

- **Pure static HTML/CSS/JS** — No React, no framework, no build step needed for content
- **Vite** is used only as a dev server with hot reload
- **Dapper CSS** (`dapper-styles.css` + `dapper-slater.css`) provides the design system — all classes, typography, animations, grid, and component styles come from there
- **WeFlair overrides** (`weflair-hero.css` + `weflair-hero.js`) add custom branding, content sections, interactive widgets (FLAIR Loop™, audit widget, team tabs, case studies, testimonials)

## What's Done

- ✅ Homepage fully customized with WeFlair content
- ✅ Navigation with dropdowns (Services, Expertise, Resources)
- ✅ Hero section with audit booking widget
- ✅ Services tiles (Paid Media, Outbound, RevOps, Content, CRO)
- ✅ Challenges section
- ✅ FLAIR Loop™ interactive methodology diagram
- ✅ Team pods with tab switching
- ✅ Timeline process section
- ✅ Case studies with filtering
- ✅ Testimonials slider
- ✅ Comparison section (WeFlair vs fragmented vendors)
- ✅ Footer with full navigation

## What Needs Work

- 🔲 Service sub-pages need WeFlair content (currently Dapper template)
- 🔲 Expertise sub-pages need WeFlair content
- 🔲 About, Blog, Cases, Contact pages need customization
- 🔲 Legal pages need review
- 🔲 Image assets (currently using text/placeholder logos)

## Design System

| Token | Value |
|-------|-------|
| **Primary Green** | `#3eff68` |
| **Background** | `#151515` / `#0e100e` |
| **Text Primary** | `#f6f3ee` |
| **Text Muted** | `rgba(246,243,238,.55)` |
| **Border** | `rgba(246,243,238,.08)` |
| **Font** | Helvetica Now Text / system sans-serif |

## License

Proprietary — WeFlair LLC © 2026
