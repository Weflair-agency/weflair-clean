import re

css = r"""
:root {
  --wfcs-max: 1240px;
  --wfcs-bg-base: #080908;
  --wfcs-bg-soft: #0e100e;
  --wfcs-bg-strong: #141714;
  --wfcs-border: rgba(62, 255, 104, 0.1);
  --wfcs-border-strong: rgba(62, 255, 104, 0.25);
  --wfcs-text: #ffffff;
  --wfcs-muted: rgba(255, 255, 255, 0.65);
  --wfcs-accent: #3eff68;
  --wfcs-accent-soft: rgba(62, 255, 104, 0.1);
  --wfcs-accent-glow: rgba(62, 255, 104, 0.25);
  --wfcs-logo-surface: #ffffff;
  --wfcs-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.8);
  --wfcs-radius-lg: 2rem;
  --wfcs-radius-md: 1.25rem;
  --wfcs-radius-sm: 0.85rem;
}

.wfcs-page {
  color-scheme: dark;
  background-color: var(--wfcs-bg-base);
}

.wfcs-page-shell,
.wfcs-detail,
.wfcs-featured-wrapper {
  width: min(var(--wfcs-max), calc(100% - 2.5rem));
  margin: 0 auto;
}

.wfcs-overline {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: var(--wfcs-accent-soft);
  border: 1px solid var(--wfcs-border-strong);
  color: var(--wfcs-accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.wfcs-overline svg {
  width: 1rem;
  height: auto;
}

/* HERO MASSIVE */
.wfcs-hero-massive {
  position: relative;
  padding: clamp(8rem, 15vw, 12rem) 0 clamp(4rem, 10vw, 6rem);
  text-align: center;
  overflow: hidden;
}

.wfcs-hero-massive__bg-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 60vh;
  background: radial-gradient(circle at top, var(--wfcs-accent-soft) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
  filter: blur(40px);
}

.wfcs-hero-massive__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.wfcs-hero-massive__headline {
  margin: 0;
  color: var(--wfcs-text);
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
  font-weight: 500;
}

.wfcs-hero-massive__accent {
  color: var(--wfcs-accent);
  font-style: italic;
  font-family: serif;
}

.wfcs-hero-massive__lede {
  color: var(--wfcs-muted);
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.6;
  max-width: 600px;
}

.wfcs-hero-massive__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.wfcs-anchor-link {
  color: var(--wfcs-text);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 1rem;
}

.wfcs-anchor-link:hover {
  color: var(--wfcs-accent);
}

/* FEATURED BANNER */
.wfcs-featured-wrapper {
  margin-bottom: clamp(4rem, 8vw, 6rem);
}

.wfcs-featured-banner {
  background: var(--wfcs-bg-soft);
  border: 1px solid var(--wfcs-border-strong);
  border-radius: var(--wfcs-radius-lg);
  padding: clamp(2rem, 5vw, 4rem);
  box-shadow: 0 0 40px rgba(62, 255, 104, 0.05);
  position: relative;
  overflow: hidden;
}

.wfcs-featured-banner::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(62,255,104,0.05) 0%, transparent 50%);
  pointer-events: none;
}

.wfcs-featured-banner__badge {
  color: var(--wfcs-accent);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 2rem;
  display: inline-block;
  border: 1px solid var(--wfcs-accent);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

.wfcs-featured-banner__content {
  position: relative;
  z-index: 1;
}

.wfcs-featured-banner__metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
  border-top: 1px solid var(--wfcs-border);
  border-bottom: 1px solid var(--wfcs-border);
  padding: 2rem 0;
}

.wfcs-featured-banner__metric {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.wfcs-featured-banner__metric strong {
  color: var(--wfcs-accent);
  font-size: 2rem;
  line-height: 1;
  letter-spacing: -0.05em;
}

.wfcs-featured-banner__metric span {
  color: var(--wfcs-muted);
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}

/* FILTERS */
.wfcs-library-hub {
  padding-bottom: clamp(5rem, 10vw, 8rem);
}

.wfcs-filter-dashboard {
  background: var(--wfcs-bg-soft);
  border: 1px solid var(--wfcs-border);
  border-radius: var(--wfcs-radius-lg);
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: var(--wfcs-shadow);
}

.wfcs-filter-dashboard__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--wfcs-border);
  padding-bottom: 1.5rem;
}

.wfcs-filter-dashboard__head h2 {
  margin: 0;
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.wfcs-filter-groups {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.wfcs-filter-stack__label {
  display: block;
  color: var(--wfcs-muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  margin-bottom: 1rem;
}

.wfcs-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.wfcs-chip {
  background: var(--wfcs-bg-strong);
  border: 1px solid var(--wfcs-border);
  color: var(--wfcs-muted);
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.wfcs-chip:hover {
  border-color: var(--wfcs-border-strong);
  color: var(--wfcs-text);
}

.wfcs-chip.is-active {
  background: var(--wfcs-accent);
  color: #000;
  border-color: var(--wfcs-accent);
}

.wfcs-reset-button {
  background: transparent;
  border: 1px solid var(--wfcs-border);
  color: var(--wfcs-muted);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.wfcs-reset-button:hover {
  background: var(--wfcs-bg-strong);
  color: var(--wfcs-text);
}

/* CARDS */
.wfcs-dynamic-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.wfcs-card {
  background: var(--wfcs-bg-soft);
  border: 1px solid var(--wfcs-border);
  border-radius: var(--wfcs-radius-lg);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all 0.3s ease;
}

.wfcs-card:hover {
  border-color: var(--wfcs-border-strong);
  transform: translateY(-5px);
  box-shadow: var(--wfcs-shadow);
}

.wfcs-card--huge {
  grid-column: 1 / -1;
  flex-direction: row;
  align-items: center;
}

.wfcs-card--huge .wfcs-card__body,
.wfcs-card--huge .wfcs-card__footer {
  flex: 1;
}

.wfcs-card__logo-box {
  background: var(--wfcs-logo-surface);
  border-radius: var(--wfcs-radius-sm);
  padding: 1rem 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 4rem; /* fixed height for consistent white box */
  margin-bottom: 1.5rem;
}

.wfcs-card__logo-box img {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.wfcs-card__meta-pill {
  border: 1px solid var(--wfcs-border);
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--wfcs-muted);
  display: inline-block;
  margin-right: 0.5rem;
}

.wfcs-tag {
  background: var(--wfcs-bg-strong);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  color: var(--wfcs-accent);
}

.wfcs-card__services {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.wfcs-metric-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: var(--wfcs-bg-strong);
  padding: 1.5rem;
  border-radius: var(--wfcs-radius-md);
  margin-top: auto;
}

.wfcs-metric strong {
  display: block;
  color: var(--wfcs-accent);
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.wfcs-metric span {
  color: var(--wfcs-muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.wfcs-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--wfcs-border);
}

.wfcs-card__link {
  color: var(--wfcs-accent);
  text-decoration: none;
  font-weight: 600;
}

@media(max-width: 1024px) {
  .wfcs-dynamic-grid { grid-template-columns: 1fr; }
  .wfcs-card--huge { flex-direction: column; align-items: stretch; grid-column: auto; }
}

@media(max-width: 768px) {
  .wfcs-metric-row { grid-template-columns: 1fr; }
  .wfcs-featured-banner__metrics { flex-direction: column; gap: 1rem; }
}
"""

with open("c:/Users/sam/Desktop/vscode-weflair/weflair-clean/case-studies/case-studies.css", "w", encoding="utf-8") as f:
    f.write(css)

print("CSS Replaced.")
