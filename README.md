# WeFlair â€” Growth Marketing Agency

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
â”œâ”€â”€ index.html              # Homepage (fully built)
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ brand-assets/       # Logos, icons, client logos
â”‚   â”‚   â”œâ”€â”€ client-logos/   # Client brand logos (Harrier, RCT, Molahin, etc.)
â”‚   â”‚   â”œâ”€â”€ star-solid.svg  # Favicon
â”‚   â”‚   â”œâ”€â”€ star-glow.svg   # Glow variant
â”‚   â”‚   â””â”€â”€ weflair-wordmark.svg
â”‚   â”œâ”€â”€ foundation-styles.css   # Foundation CSS (design system)
â”‚   â”œâ”€â”€ foundation-slater.css   # Foundation Slater CSS
â”‚   â”œâ”€â”€ weflair-hero.css        # WeFlair custom CSS overrides
â”‚   â”œâ”€â”€ weflair-hero.js         # WeFlair custom JS (interactivity, widgets)
â”‚   â”œâ”€â”€ foundation.js           # Foundation base JS interactions
â”‚   â””â”€â”€ robots.txt
â”œâ”€â”€ services/               # Service sub-pages (placeholder shells)
â”‚   â”œâ”€â”€ paid-media-performance.html
â”‚   â”œâ”€â”€ outbound-gtm.html
â”‚   â”œâ”€â”€ revops-ai.html
â”‚   â”œâ”€â”€ content-seo.html
â”‚   â”œâ”€â”€ performance-design.html
â”‚   â””â”€â”€ strategy-creative.html
â”œâ”€â”€ expertise/              # Expertise sub-pages (placeholder shells)
â”‚   â”œâ”€â”€ b2b-saas.html
â”‚   â”œâ”€â”€ b2b-services.html
â”‚   â”œâ”€â”€ b2b-hardware.html
â”‚   â”œâ”€â”€ ecommerce.html
â”‚   â””â”€â”€ fintech.html
â”œâ”€â”€ resources/              # Resource sub-pages (placeholder shells)
â”‚   â”œâ”€â”€ guides.html
â”‚   â”œâ”€â”€ playbooks.html
â”‚   â”œâ”€â”€ ai-tools.html
â”‚   â””â”€â”€ calculators.html
â”œâ”€â”€ blog.html               # Blog index (placeholder)
â”œâ”€â”€ about.html              # About page (placeholder)
â”œâ”€â”€ contact.html            # Contact page (placeholder)
â”œâ”€â”€ careers.html            # Careers page (placeholder)
â”œâ”€â”€ cases.html              # Case studies page (placeholder)
â”œâ”€â”€ legal/
â”‚   â”œâ”€â”€ privacy.html        # Privacy policy (placeholder)
â”‚   â””â”€â”€ terms.html          # Terms & conditions (placeholder)
â”œâ”€â”€ vite.config.js          # Vite dev server config
â””â”€â”€ package.json
```

## Architecture

- **Pure static HTML/CSS/JS** â€” No React, no framework, no build step needed for content
- **Vite** is used only as a dev server with hot reload
- **Foundation CSS** (`foundation-styles.css` + `foundation-slater.css`) provides the design system â€” all classes, typography, animations, grid, and component styles
- **WeFlair overrides** (`weflair-hero.css` + `weflair-hero.js`) add custom branding, content sections, interactive widgets

## Homepage Sections (Complete)

1. âœ… **Hero** â€” Headline, CTA, audit booking widget
2. âœ… **Logo Marquee** â€” Client logos (CellPoint, Harrier, RCT, Molahin, HQ Software, Mawsim)
3. âœ… **Services** â€” 5 service tiles with hover effects
4. âœ… **Challenges** â€” 6 problem cards with icons
5. âœ… **FLAIR Loopâ„¢** â€” Interactive 5-step methodology ring diagram
6. âœ… **Team Pods** â€” Tab-switching team showcase (4 pods)
7. âœ… **Timeline** â€” 5-step new client timeline
8. âœ… **Case Studies** â€” Filterable cards with pagination
9. âœ… **Testimonials** â€” Scrolling testimonial slider
10. âœ… **Comparison** â€” WeFlair vs fragmented vendor stack
11. âœ… **Footer** â€” Full nav, social links, CTA banner

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

Proprietary â€” WeFlair LLC Â© 2026

