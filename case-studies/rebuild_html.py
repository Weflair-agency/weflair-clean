import re
import os

with open("c:/Users/sam/Desktop/vscode-weflair/weflair-clean/case-studies/index.html", "r", encoding="utf-8") as f:
    html = f.read()

start_marker = r'<section class="wfcs-hero">'
end_marker = r'<section class="wfcs-testimonials">'

pattern = re.compile(start_marker + r'.*?' + end_marker, re.DOTALL)

new_html = r"""<section class="wfcs-hero-massive">
          <div class="wfcs-hero-massive__bg-glow"></div>
          <div class="wfcs-hero-massive__content">
            <div class="wfcs-overline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none">
                <path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"></path>
              </svg>
              Case Studies
            </div>
            <h1 class="wfcs-hero-massive__headline">Proven Impact.<br><span class="text-accent">Zero Fluff.</span></h1>
            <p class="wfcs-hero-massive__lede">
              We design, build, and operate commercial acquisition systems. Explore our specific results across B2B SaaS, E-commerce, and Fintech.  
            </p>
            <div class="wfcs-hero-massive__actions">
              <a data-hover="" data-btn-theme="primary" href="/contact.html" class="btn w-inline-block weflair-btn weflair-btn--primary">
                <div class="btn__bg"></div>
                <div class="btn__text"><span class="btn__span">Talk to us</span></div>
                <div class="arrow">
                  <div class="arrow__bg"></div>
                  <div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div>
                  <div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div>
                </div>
              </a>
              <a class="wfcs-anchor-link" href="#library">Browse Library &darr;</a>
            </div>
          </div>
        </section>

        <!-- New Featured Banner Area -->
        <section class="wfcs-featured-wrapper" data-case-featured></section>

        <section class="wfcs-library-hub" id="library">
          <div class="wfcs-filter-dashboard">
            <div class="wfcs-filter-dashboard__head">
              <h2>Filter Library</h2>
              <div class="wfcs-filter-dashboard__meta">
                <span class="wfcs-results-meta" data-case-count></span>
                <button type="button" class="wfcs-reset-button" data-case-reset>Clear Filters</button>
              </div>
            </div>
            
            <div class="wfcs-filter-groups">
              <div class="wfcs-filter-stack">
                <span class="wfcs-filter-stack__label">Industry</span>
                <div class="wfcs-chip-row" data-case-industry-buttons></div>
              </div>
              <div class="wfcs-filter-stack">
                <span class="wfcs-filter-stack__label">Company Size</span>
                <div class="wfcs-chip-row" data-case-size-buttons></div>
              </div>
              <div class="wfcs-filter-stack">
                <span class="wfcs-filter-stack__label">Service Line</span>
                <div class="wfcs-chip-row" data-case-service-buttons></div>
              </div>
            </div>
          </div>

          <div class="wfcs-dynamic-grid" data-case-grid></div>
        </section>

        """ + end_marker

replaced = pattern.sub(new_html, html)

with open("c:/Users/sam/Desktop/vscode-weflair/weflair-clean/case-studies/index.html", "w", encoding="utf-8") as f:
    f.write(replaced)

print("Replaced successfully!")
