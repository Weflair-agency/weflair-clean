# WeFlair — Growth Marketing Agency

Static website for [WeFlair](https://weflair.com). Built on a custom foundation CSS system with WeFlair branding, content, and interactive components.

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://127.0.0.1:5994/`

## Project Structure

```
weflair-site/
├── index.html              # Homepage (fully built)
├── public/
│   ├── brand-assets/       # Logos, icons, client logos
│   │   ├── client-logos/   # Client brand logos (Harrier, RCT, Molahin, etc.)
│   │   ├── star-solid.svg  # Favicon
│   │   ├── star-glow.svg   # Glow variant
│   │   └── weflair-wordmark.svg
│   ├── foundation-styles.css   # Foundation CSS (design system)
│   ├── foundation-slater.css   # Foundation Slater CSS
│   ├── weflair-hero.css        # WeFlair custom CSS overrides
│   ├── weflair-hero.js         # WeFlair custom JS (interactivity, widgets)
│   ├── foundation.js           # Foundation base JS interactions
│   └── robots.txt
├── services/               # Service sub-pages (placeholder shells)
│   ├── paid-media-performance.html
│   ├── outbound-gtm.html
│   ├── revops-ai.html
│   ├── content-seo.html
│   ├── cro-performance-design.html
│   └── strategy-creative.html
├── expertise/              # Expertise sub-pages (placeholder shells)
│   ├── b2b-saas.html
│   ├── b2b-services.html
│   ├── b2b-hardware.html
│   ├── ecommerce.html
│   └── fintech.html
├── resources/              # Resource sub-pages (placeholder shells)
│   ├── guides.html
│   ├── playbooks.html
│   ├── ai-tools.html
│   └── calculators.html
├── blog.html               # Blog index (placeholder)
├── about.html              # About page (placeholder)
├── contact.html            # Contact page (placeholder)
├── careers.html            # Careers page (placeholder)
├── cases.html              # Case studies page (placeholder)
├── legal/
│   ├── privacy.html        # Privacy policy (placeholder)
│   └── terms.html          # Terms & conditions (placeholder)
├── vite.config.js          # Vite dev server config
└── package.json
```

## Architecture

- **Pure static HTML/CSS/JS** — No React, no framework, no build step needed for content
- **Vite** is used only as a dev server with hot reload
- **Foundation CSS** (`foundation-styles.css` + `foundation-slater.css`) provides the design system — all classes, typography, animations, grid, and component styles
- **WeFlair overrides** (`weflair-hero.css` + `weflair-hero.js`) add custom branding, content sections, interactive widgets

## Homepage Sections (Complete)

1. ✅ **Hero** — Headline, CTA, audit booking widget
2. ✅ **Logo Marquee** — Client logos (CellPoint, Harrier, RCT, Molahin, HQ Software, Mawsim)
3. ✅ **Services** — 5 service tiles with hover effects
4. ✅ **Challenges** — 6 problem cards with icons
5. ✅ **FLAIR Loop™** — Interactive 5-step methodology ring diagram
6. ✅ **Team Pods** — Tab-switching team showcase (4 pods)
7. ✅ **Timeline** — 5-step new client timeline
8. ✅ **Case Studies** — Filterable cards with pagination
9. ✅ **Testimonials** — Scrolling testimonial slider
10. ✅ **Comparison** — WeFlair vs fragmented vendor stack
11. ✅ **Footer** — Full nav, social links, CTA banner

## Sub-Pages (Placeholder Shells)

All sub-pages use the WeFlair foundation CSS and have proper `<title>`, `<meta>`, and navigation. They show a "Coming soon" notice and link back to the homepage. Ready to be built out.

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
