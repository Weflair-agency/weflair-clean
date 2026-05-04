import re
import os

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'r', encoding='utf-8') as f:
    home_text = f.read()

# Extract logo slider from home page
logo_slider_html = ""
logo_match = re.search(r'<div class="home-logos-slider"(.*?)</div>\s*</div>\s*</div>', home_text, re.DOTALL | re.IGNORECASE)
if logo_match:
    logo_slider_html = '<div class="home-logos-slider"' + logo_match.group(1) + '</div></div></div>'
else:
    # Try finding any full section with 'logo' in class from home
    section_match = re.search(r'<section[^>]*class="[^"]*logo[^"]*"[^>]*>.*?</section>', home_text, re.DOTALL | re.IGNORECASE)
    if section_match:
        logo_slider_html = section_match.group(0)
    else:
        # Fallback to specifically extracting just the slider container structure we've seen if direct section mapping fails
        slider_match = re.search(r'<div class="logo-list[^>]*>.*?</section>', home_text, re.DOTALL | re.IGNORECASE)
        if slider_match:
            logo_slider_html = slider_match.group(0)

if not logo_slider_html:
    # Manual fallback for the slider based on known html
    logo_slider_html = """
    <div class="home-logos-slider" style="margin-top: 2rem; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); padding: 3rem 0; overflow: hidden; white-space: nowrap; position: relative;">
        <style>
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-slider-track {
            display: inline-flex;
            align-items: center;
            gap: 4rem;
            animation: slide 30s linear infinite;
          }
          .logo-slider-track img {
            height: 30px;
            width: auto;
            opacity: 0.6;
            filter: brightness(0) invert(1);
          }
        </style>
        <div class="logo-slider-track">
            <img src="/brand-assets/client-logos/harrier.png" alt="Harrier" />
            <img src="/brand-assets/client-logos/cellpoint.png" alt="CellPoint" />
            <img src="/brand-assets/client-logos/metaestate.png" alt="Meta Estate" />
            <img src="/brand-assets/client-logos/merna.png" alt="Merna Logistics" />
            <img src="/brand-assets/client-logos/harrier.png" alt="Harrier" />
            <img src="/brand-assets/client-logos/cellpoint.png" alt="CellPoint" />
            <img src="/brand-assets/client-logos/metaestate.png" alt="Meta Estate" />
            <img src="/brand-assets/client-logos/merna.png" alt="Merna Logistics" />
        </div>
    </div>
    """

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/case-studies/index.html', 'r', encoding='utf-8') as f:
    cs_html = f.read()

head_part = cs_html.split('<main')[0]
main_split = cs_html.split('<main')[1]
main_attrs = main_split.split('>', 1)[0]
inside_main = main_split.split('>', 1)[1]

# Extract the bottom CTA section so we don't lose it
bottom_cta_match = re.search(r'(<section class="wfcs-bottom-cta">.*?</main>)', inside_main, re.DOTALL)
if bottom_cta_match:
    footer_part = bottom_cta_match.group(1)
    # the </main> is attached, let's keep everything after the bottom CTA and </main> as well
    post_main_split = cs_html.split('</main>', 1)
    if len(post_main_split) > 1:
        post_main = post_main_split[1]
    else:
        post_main = ""
else:
    # fallback if can't find wfcs-bottom-cta
    footer_part = ""
    post_main = ""

new_main = f"""<main{main_attrs}>
  <div class="floating-elements-main">
    <div class="calc-header-padding-height"></div>
    <div data-navigation-toggle="close" class="nav-fade"></div>
    <!-- header and nav is already in the split above this <main> -->
    <style>
      /* Dark Theme aesthetics for Case Studies Hub */
      :root {{
        --pdx-green: #3eff68;
        --cs-bg: #050505;
        --cs-surface: rgba(255, 255, 255, 0.03);
        --cs-border: rgba(255, 255, 255, 0.08);
      }}
      .cs-hero {{
        padding: clamp(6rem, 10vw, 10rem) 0 clamp(4rem, 6vw, 6rem);
        position: relative;
        text-align: center;
        overflow: hidden;
      }}
      .cs-hero-glow {{
        position: absolute;
        top: -20%;
        left: 50%;
        transform: translateX(-50%);
        width: 1000px;
        height: 1000px;
        background: radial-gradient(circle, rgba(62,255,104,0.05) 0%, transparent 60%);
        pointer-events: none;
        z-index: -1;
      }}
      .cs-eyebrow {{
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 2rem;
        color: var(--pdx-green);
        font-size: 0.85rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        border: 1px solid rgba(62, 255, 104, 0.4);
        padding: 0.6rem 1.2rem;
        border-radius: 2rem;
        background: rgba(62, 255, 104, 0.05);
      }}
      .cs-eyebrow svg {{
        width: 1.2rem;
        height: 1.2rem;
        filter: drop-shadow(0 0 8px rgba(62,255,104,0.8));
      }}
      .cs-hero-title {{
        font-family: "Space Grotesk", sans-serif;
        font-size: clamp(3.5rem, 8vw, 5.5rem);
        line-height: 1.05;
        letter-spacing: -0.03em;
        margin-bottom: 2rem;
        background: linear-gradient(180deg, #fff 40%, rgba(255,255,255,0.4) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }}
      .cs-hero-p {{
        font-size: clamp(1.1rem, 1.5vw, 1.35rem);
        line-height: 1.6;
        color: rgba(245, 242, 236, 0.7);
        max-width: 60ch;
        margin: 0 auto 3rem;
      }}
      .cs-grid-section {{
        padding: 4rem 0 8rem;
        position: relative;
      }}
      .cs-grid {{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
      }}
      .cs-card {{
        background: var(--cs-surface);
        border: 1px solid var(--cs-border);
        border-radius: 1rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        aspect-ratio: 4/3;
        justify-content: center;
      }}
      .cs-card:hover {{
        border-color: rgba(62, 255, 104, 0.3);
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(62,255,104,0.1);
      }}
      .cs-card::before {{
        content: '';
        position: absolute;
        inset: 0;
        background: url('/brand-assets/noise.png');
        opacity: 0.03;
        mix-blend-mode: overlay;
        pointer-events: none;
      }}
      
      /* Inner Graphic mimicking the Top 10 Design */
      .cs-card-graphic {{
        position: absolute;
        inset: 1rem;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: radial-gradient(circle at center, rgba(30,30,30,0.8), rgba(10,10,10,0.95));
        overflow: hidden;
      }}
      
      /* Background texture representing the "red rock / magma" texture from screenshot but in brand colors */
      .cs-card-graphic::before {{
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top right, rgba(62,255,104,0.15), transparent 50%),
                    radial-gradient(circle at bottom left, rgba(255,255,255,0.05), transparent 50%);
        z-index: 0;
      }}
      
      /* Grid lines inner graphic */
      .cs-card-graphic::after {{
        content: '';
        position: absolute;
        inset: 0;
        background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
        background-size: 20px 20px;
        z-index: 1;
      }}

      .cs-card-graphic > * {{
        position: relative;
        z-index: 2;
      }}

      /* Center Top Logo in Card */
      .cs-card-logo {{
        width: 32px;
        height: 32px;
        color: var(--pdx-green);
        margin-bottom: 2rem;
        background: #000;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
      }}
      
      /* Card Typography imitating the referenced image */
      .cs-card-pretitle {{
        font-family: monospace;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: rgba(255,255,255,0.6);
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
      }}
      .cs-card-title {{
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(3rem, 5vw, 4.5rem);
        line-height: 0.9;
        color: transparent;
        -webkit-text-stroke: 1px rgba(255,255,255,0.9);
        font-weight: 800;
        text-transform: uppercase;
        margin: 0;
      }}
      .cs-card:hover .cs-card-title {{
        color: #fff;
        -webkit-text-stroke: 0;
        text-shadow: 0 0 30px rgba(255,255,255,0.3);
      }}
      .cs-card-subtitle {{
        font-family: monospace;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.5);
        font-size: 0.75rem;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 2rem;
        background: rgba(0,0,0,0.5);
      }}
    </style>

    <section class="cs-hero">
      <div class="cs-hero-glow"></div>
      <div class="pdx-wrap" style="display: flex; flex-direction: column; align-items: center; position: relative; z-index: 2;">
        <div class="cs-eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Success Stories & Architecture
        </div>
        <h1 class="cs-hero-title">Inside The Engines We Built</h1>
        <p class="cs-hero-p">Exclusive teardowns of how we re-architected digital acquisition models, slashed CAC, and unleashed scale for industry leaders.</p>
        
        <a href="#grids" class="btn weflair-btn weflair-btn--primary">
          <div class="btn__bg"></div>
          <div class="btn__text"><span class="btn__span">Explore Results</span></div>
        </a>
      </div>
    </section>

    <!-- Slider inserted here -->
    {logo_slider_html}

    <section id="grids" class="cs-grid-section">
      <div class="cs-grid">
        <!-- Card 1: eCommerce -->
        <a href="#" class="cs-card">
          <div class="cs-card-graphic">
            <div class="cs-card-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="currentColor" style="width:100%;height:100%;"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z"></path></svg>
            </div>
            <div class="cs-card-pretitle">ecommerce</div>
            <h2 class="cs-card-title">TOP 10</h2>
            <div class="cs-card-subtitle">Case Studies</div>
          </div>
        </a>

        <!-- Card 2: B2B Tech & SaaS -->
        <a href="#" class="cs-card">
          <div class="cs-card-graphic">
             <div class="cs-card-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="currentColor" style="width:100%;height:100%;"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z"></path></svg>
            </div>
            <div class="cs-card-pretitle">b2b tech</div>
            <h2 class="cs-card-title">TOP 10</h2>
            <div class="cs-card-subtitle">Case Studies</div>
          </div>
        </a>

        <!-- Card 3: Lead Generation -->
        <a href="#" class="cs-card">
          <div class="cs-card-graphic">
             <div class="cs-card-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="currentColor" style="width:100%;height:100%;"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z"></path></svg>
            </div>
            <div class="cs-card-pretitle">lead generation</div>
            <h2 class="cs-card-title">TOP 10</h2>
            <div class="cs-card-subtitle">Case Studies</div>
          </div>
        </a>

        <!-- Card 4: DTC Beauty & Fashion (Example of 4th) -->
        <a href="#" class="cs-card">
          <div class="cs-card-graphic">
             <div class="cs-card-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="currentColor" style="width:100%;height:100%;"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z"></path></svg>
            </div>
            <div class="cs-card-pretitle">DTC Beauty</div>
            <h2 class="cs-card-title">TOP 10</h2>
            <div class="cs-card-subtitle">Case Studies</div>
          </div>
        </a>
      </div>
    </section>

    {footer_part}
"""

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/case-studies/index.html', 'w', encoding='utf-8') as f:
    f.write(head_part + new_main + post_main)

print("Updated case-studies/index.html")
