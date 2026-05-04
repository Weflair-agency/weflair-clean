import re

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'r', encoding='utf-8') as f:
    home_text = f.read()

# Try grab the exact logo rail HTML from the homepage
logo_rail_html = ""
# Let's find the div containing class="wf-logo-rail__shell" and grab a few layers up to a logical container
m = re.search(r'(<div[^>]*class="[^"]*wf-logo-rail[^"]*"[^>]*>.*?</section>)', home_text, re.DOTALL)
if m:
    # Just take everything up to the closing section that was found, but strip out the actual </section>
    content = m.group(1)
    idx = content.rfind('</section>')
    logo_rail_html = content[:idx]
else:
    m2 = re.search(r'(<div[^>]*class="[^"]*wf-logo-rail[^"]*"[^>]*>.*?</div>\s*</div>\s*</div>\s*</div>)', home_text, re.DOTALL)
    if m2:
        logo_rail_html = m2.group(1)
    else:
        # Fallback to the known slider structure if regex fails
        logo_rail_html = '<div class="fallback-slider">No slider found from main page</div>'

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
    post_main_split = cs_html.split('</main>', 1)
    if len(post_main_split) > 1:
        post_main = post_main_split[1]
    else:
        post_main = ""
else:
    footer_part = ""
    post_main = ""

new_main = f"""<main{main_attrs}>
  <div class="floating-elements-main">
    <div class="calc-header-padding-height"></div>
    <div data-navigation-toggle="close" class="nav-fade"></div>
    
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
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
      }}
      @media (max-width: 1024px) {{
        .cs-grid {{ grid-template-columns: 1fr; max-width: 600px; }}
      }}
      
      .cs-category-card {{
        display: flex;
        flex-direction: column;
        color: white;
        text-decoration: none;
        transition: transform 0.3s ease;
        position: relative;
      }}
      .cs-category-card:hover {{
        transform: translateY(-8px);
      }}
      
      /* The glowing graphical box */
      .cs-card-graphic {{
        aspect-ratio: 16/11;
        width: 100%;
        background: var(--cs-surface);
        border: 1px solid var(--cs-border);
        border-radius: 0.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        overflow: hidden;
        margin-bottom: 2rem;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      }}
      .cs-category-card:hover .cs-card-graphic {{
        border-color: rgba(62, 255, 104, 0.4);
        box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(62,255,104,0.1);
      }}
      
      /* Glowing inner border box effect */
      .cs-card-inner-box {{
        position: absolute;
        inset: 2.5rem;
        border: 1px solid rgba(255,255,255,0.15);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
        background: rgba(10,10,10,0.4);
        backdrop-filter: blur(4px);
      }}

      /* Background texture representing the "red rock / magma" texture from screenshot but in brand colors */
      .cs-card-graphic::before {{
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top left, rgba(62,255,104,0.1), transparent 60%),
                    radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 60%);
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

      /* Center Logo on the top border of inner box */
      .cs-card-logo {{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 32px;
        height: 32px;
        color: var(--pdx-green);
        background: #111;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        z-index: 3;
      }}
      
      /* Typography inside graphic */
      .cs-card-pretitle {{
        font-family: monospace;
        text-transform: lowercase;
        color: rgba(255,255,255,0.6);
        font-size: 1rem;
        margin-bottom: 0.5rem;
        z-index: 2;
        -webkit-text-stroke: 1px rgba(255,255,255,0.3);
      }}
      .cs-card-title-graphic {{
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(3rem, 5vw, 5.5rem);
        line-height: 0.9;
        color: #fff;
        font-weight: 800;
        text-transform: uppercase;
        margin: 0;
        z-index: 2;
      }}
      .cs-card-subtitle {{
        font-family: monospace;
        text-transform: lowercase;
        color: rgba(255,255,255,0.5);
        font-size: 1rem;
        margin-top: 0.5rem;
        z-index: 2;
        -webkit-text-stroke: 1px rgba(255,255,255,0.3);
      }}

      /* Text details below the graphic */
      .cs-text-content {{
        text-align: center;
      }}
      .cs-text-content h3 {{
        font-size: 1.8rem;
        line-height: 1.2;
        margin-bottom: 1rem;
        color: #fff;
      }}
      .cs-text-content p {{
        font-size: 1.05rem;
        line-height: 1.6;
        color: rgba(245, 242, 236, 0.7);
        margin: 0 auto 2rem;
        max-width: 90%;
      }}
      
      /* New CSS Dark Button */
      .cs-button {{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 2.5rem;
        background: #111;
        border: 1px solid rgba(255,255,255,0.15);
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        margin: 0 auto;
        gap: 0.75rem;
      }}
      .cs-category-card:hover .cs-button {{
        background: rgba(62, 255, 104, 0.1);
        border-color: var(--pdx-green);
        color: var(--pdx-green);
      }}

      /* Embedded Case Studies Layout underneath */
      .cs-featured-studies {{
        padding: 6rem 0;
        border-top: 1px solid rgba(255,255,255,0.05);
        background: linear-gradient(180deg, rgba(0,0,0,0.3), transparent);
      }}
      .cs-featured-grid {{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2.5rem;
        max-width: 1400px;
        margin: 4rem auto 0;
        padding: 0 2rem;
      }}
      .cs-feat-card {{
        background: rgba(255,255,255,0.02);
        border: 1px solid rgba(255,255,255,0.05);
        border-radius: 1rem;
        padding: 2.5rem;
        transition: 0.3s ease;
        text-decoration: none;
        display: flex;
        flex-direction: column;
      }}
      .cs-feat-card:hover {{
        background: rgba(255,255,255,0.04);
        border-color: rgba(255,255,255,0.15);
      }}
      .cs-feat-logo {{
        height: 35px;
        margin-bottom: 2rem;
        filter: brightness(0) invert(1) opacity(0.8);
      }}
      .cs-feat-stat {{
        font-size: 3rem;
        font-weight: 800;
        color: var(--pdx-green);
        line-height: 1;
        margin-bottom: 0.5rem;
      }}
      .cs-feat-stat-label {{
        font-size: 0.9rem;
        text-transform: uppercase;
        color: rgba(255,255,255,0.5);
        letter-spacing: 0.05em;
        margin-bottom: 1.5rem;
      }}
      .cs-feat-title {{
        font-size: 1.3rem;
        color: #fff;
        line-height: 1.4;
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
        <p class="cs-hero-p" style="max-width: 800px;">Exclusive teardowns of how we re-architected digital acquisition models, slashed CAC, and unleashed scale for industry leaders.</p>
        
        <!-- Native Slider wrapper -->
        <div style="margin-top: 2rem; width: 100vw; position: relative; left: calc(-50vw + 50%); overflow: hidden; opacity: 0.6; filter: brightness(0) invert(1);">
            <div style="transform: scale(0.8);">
                {logo_rail_html}
            </div>
        </div>

      </div>
    </section>

    <!-- Cards Section -->
    <section id="grids" class="cs-grid-section">
      <div class="cs-grid">
        
        <!-- Card 1: eCommerce -->
        <a href="#" class="cs-category-card">
          <div class="cs-card-graphic">
             <div class="cs-card-inner-box">
                <div class="cs-card-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="currentColor" style="width:100%;height:100%;"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z"></path></svg>
                </div>
                <div class="cs-card-pretitle">ecommerce</div>
                <h2 class="cs-card-title-graphic">TOP 10</h2>
                <div class="cs-card-subtitle">case studies</div>
             </div>
          </div>
          <div class="cs-text-content">
              <h3>Top eCommerce Case Studies</h3>
              <p>eCommerce has changed the way people shop and consume products and services. There's a lot of competition in the space, so it's crucial to have a partner who keeps your business goals top of mind and has the expertise to create a competitive strategy.</p>
              <div class="cs-button">SHOW ME &gt;</div>
          </div>
        </a>

        <!-- Card 2: B2B Tech -->
        <a href="#" class="cs-category-card">
          <div class="cs-card-graphic">
             <div class="cs-card-inner-box">
                <div class="cs-card-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="currentColor" style="width:100%;height:100%;"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z"></path></svg>
                </div>
                <div class="cs-card-pretitle">b2b tech & saas</div>
                <h2 class="cs-card-title-graphic">TOP 10</h2>
                <div class="cs-card-subtitle">case studies</div>
             </div>
          </div>
          <div class="cs-text-content">
              <h3>Top B2B Tech Case Studies</h3>
              <p>Selling complex software requires deep technical funnels and prolonged nurturing. See how we architect full-stack pipeline engines that radically compress sales cycles and drive qualified inbound demos predictably.</p>
              <div class="cs-button">SHOW ME &gt;</div>
          </div>
        </a>

        <!-- Card 3: Lead Gen (Top 5) -->
        <a href="#" class="cs-category-card">
          <div class="cs-card-graphic">
             <div class="cs-card-inner-box">
                <div class="cs-card-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="currentColor" style="width:100%;height:100%;"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z"></path></svg>
                </div>
                <div class="cs-card-pretitle">lead generation</div>
                <h2 class="cs-card-title-graphic">TOP 5</h2>
                <div class="cs-card-subtitle">case studies</div>
             </div>
          </div>
          <div class="cs-text-content">
              <h3>Top Lead Gen Case Studies</h3>
              <p>Lead generation has changed a lot over the years. Getting people interested isn't as simple as it once was. Our experts create cutting-edge acquisition systems producing the cost-effective volume your sales team demands.</p>
              <div class="cs-button">SHOW ME &gt;</div>
          </div>
        </a>

      </div>
    </section>

    <!-- Embedded Feature Case Studies -->
    <section class="cs-featured-studies">
        <div class="pdx-wrap" style="text-align: center;">
            <h2 style="font-size: clamp(2.2rem, 4vw, 3.5rem); margin-bottom: 1rem;">View Individual Tear-Downs</h2>
            <p style="color: rgba(245,242,236,0.6); max-width: 60ch; margin: 0 auto;">Dive deep into the exact tactical implementations, custom ad funnels, and data science frameworks powering our biggest client wins.</p>
        </div>
        
        <div class="cs-featured-grid">
            <a href="molahin-demand-gen.html" class="cs-feat-card">
                <img src="/brand-assets/client-logos/molahin.png" alt="Molahin Logo" class="cs-feat-logo" style="width: auto;">
                <div class="cs-feat-stat">+128%</div>
                <div class="cs-feat-stat-label">Increase in ROAS ($114K Rev)</div>
                <div class="cs-feat-title">Rebuilding the Paid Social Engine to Accelerate Global Expansion</div>
            </a>
            <a href="harrier-performance-rebuild.html" class="cs-feat-card">
                <img src="/brand-assets/client-logos/harrier.png" alt="Harrier Logo" class="cs-feat-logo" style="width: auto;">
                <div class="cs-feat-stat">2.2x</div>
                <div class="cs-feat-stat-label">Increase in E-commerce Conversion</div>
                <div class="cs-feat-title">Overhauling Shopify Infrastructure & Scaling £2K Daily Meta Spend</div>
            </a>
            <a href="cellpoint-digital-revops.html" class="cs-feat-card">
                <img src="/brand-assets/client-logos/cellpoint.png" alt="CellPoint Digital Logo" class="cs-feat-logo" style="height: 25px; width: auto; margin-bottom: 2rem;">
                <div class="cs-feat-stat">3x</div>
                <div class="cs-feat-stat-label">Increase in Enterprise Demos</div>
                <div class="cs-feat-title">RevOps Restructuring and Full-Funnel ABM Alignment</div>
            </a>
        </div>
    </section>

    {footer_part}
"""

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/case-studies/index.html', 'w', encoding='utf-8') as f:
    f.write(head_part + new_main + post_main)

print("success")
