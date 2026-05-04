import re
import os

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Grab everything up to the end of the logos slider
m_header = re.search(r'^(.*?<section id="logos" class="home-results weflair-section">.*?</section>)', text, re.DOTALL | re.IGNORECASE)
part1 = m_header.group(1)

# 2. Grab the footer / bottom CTA
m_footer = re.search(r'(<section class="footer weflair-footer">.*)', text, re.DOTALL | re.IGNORECASE)
part2 = m_footer.group(1)

# 3. Replace the Hero text inside part1
# Eyebrow
part1 = part1.replace('Growth Marketing Agency', 'Success Stories & Architecture')
# Title
part1 = re.sub(
    r'<h2 data-transition-animation="" data-split-words="" class="h1 weflair-headline"[^>]*>.*?</h2>',
    '<h2 data-transition-animation="" data-split-words="" class="h1 weflair-headline" style="opacity: 1; visibility: visible; transform: none;">Inside The Engines <span class="weflair-section-accent weflair-section-accent--solid">We Built.</span></h2>',
    part1, flags=re.DOTALL
)
# Description
part1 = re.sub(
    r'<p data-transition-animation="" data-split-lines="" class="p-l is--strong is--no-events"[^>]*>.*?</p>',
    '<p data-transition-animation="" data-split-lines="" class="p-l is--strong is--no-events" style="opacity: 1; visibility: visible; transform: none;">Exclusive teardowns of how we re-architected digital acquisition models, slashed CAC, and unleashed scale for industry leaders.</p>',
    part1, flags=re.DOTALL
)
# Make the hero shorter maybe? It's fine to leave it as is to keep the container perfect.

# 4. Build the custom Case Study grid HTML
# Using native CSS that I can inject cleanly
custom_css = """
<style>
.wfcs-grid-section {
  padding: 6rem 0;
  position: relative;
  background: var(--section-color);
  color: var(--text-color);
}
.wfcs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}
@media (max-width: 900px) {
  .wfcs-grid { grid-template-columns: 1fr; }
}

.wfcs-card {
  display: flex;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}
.wfcs-card:hover {
  transform: translateY(-8px);
}

.wfcs-graphic-box {
  aspect-ratio: 16/11;
  width: 100%;
  background: #111;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  padding: 2rem;
}
/* Sub-box representing the inner layout */
.wfcs-inner-box {
  position: absolute;
  inset: 2rem;
  border: 1px solid rgba(255,255,255,0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(2px);
}
.wfcs-card:hover .wfcs-graphic-box {
  border-color: rgba(62, 255, 104, 0.4);
}

.wfcs-logo-badge {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  color: #3eff68;
  background: #111;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  z-index: 3;
}

.wfcs-graphic-eyebrow {
  font-family: var(--font-mono, monospace);
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 0.5rem;
  z-index: 2;
}
.wfcs-graphic-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(3rem, 4vw, 4.5rem);
  line-height: 0.9;
  font-weight: 800;
  margin: 0;
  z-index: 2;
  text-transform: uppercase;
}
.wfcs-graphic-subtitle {
  font-family: var(--font-mono, monospace);
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  margin-top: 0.5rem;
  z-index: 2;
}

/* Background Texture for Graphic using grid lines and slight radial */
.wfcs-graphic-box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(62,255,104,0.08), transparent 70%),
              radial-gradient(circle at bottom left, rgba(255,255,255,0.05), transparent 70%);
  z-index: 0;
}
.wfcs-graphic-box::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 1;
}

.wfcs-text-content {
  text-align: center;
  padding: 0 1rem;
}
.wfcs-text-content h3 {
  font-size: 1.5rem;
  line-height: 1.3;
  margin-bottom: 1rem;
}
.wfcs-text-content p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.7);
  margin-bottom: 2rem;
}

.wfcs-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 2.5rem;
  background: #111;
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}
.wfcs-card:hover .wfcs-btn {
  background: rgba(62, 255, 104, 0.05);
  border-color: #3eff68;
  color: #3eff68;
}

/* Base structural fixes to make sure nothing leaks out of dark theme */
.pdx-divider {
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 2rem 0;
}
</style>
"""

case_studies_html = """
<section class="wfcs-grid-section weflair-section">
  <div class="container container--large">
    <div class="pdx-divider"></div>
    <div class="wfcs-grid">
    
      <!-- Card 1: eCommerce -->
      <a href="#" class="wfcs-card">
        <div class="wfcs-graphic-box">
           <div class="wfcs-inner-box">
              <div class="wfcs-logo-badge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="currentColor" style="width:100%;height:100%;"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z"></path></svg>
              </div>
              <div class="wfcs-graphic-eyebrow">ecommerce</div>
              <h2 class="wfcs-graphic-title">TOP 10</h2>
              <div class="wfcs-graphic-subtitle">case studies</div>
           </div>
        </div>
        <div class="wfcs-text-content">
            <h3>Top eCommerce Case Studies</h3>
            <p>eCommerce has changed the way people shop and consume products and services. There's a lot of competition in the space, so it's crucial to have a partner who keeps your business goals top of mind and has the expertise to create a competitive strategy.</p>
            <div class="wfcs-btn">SHOW ME ></div>
        </div>
      </a>

      <!-- Card 2: B2B Tech -->
      <a href="#" class="wfcs-card">
        <div class="wfcs-graphic-box">
           <div class="wfcs-inner-box">
              <div class="wfcs-logo-badge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="currentColor" style="width:100%;height:100%;"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z"></path></svg>
              </div>
              <div class="wfcs-graphic-eyebrow">b2b tech & saas</div>
              <h2 class="wfcs-graphic-title">TOP 10</h2>
              <div class="wfcs-graphic-subtitle">case studies</div>
           </div>
        </div>
        <div class="wfcs-text-content">
            <h3>Top B2B Tech Case Studies</h3>
            <p>Selling complex software requires deep technical funnels and prolonged nurturing. See how we architect full-stack pipeline engines that radically compress sales cycles and drive qualified inbound demos predictably.</p>
            <div class="wfcs-btn">SHOW ME ></div>
        </div>
      </a>

      <!-- Card 3: Lead Gen -->
      <a href="#" class="wfcs-card">
        <div class="wfcs-graphic-box">
           <div class="wfcs-inner-box">
              <div class="wfcs-logo-badge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="currentColor" style="width:100%;height:100%;"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z"></path></svg>
              </div>
              <div class="wfcs-graphic-eyebrow">lead generation</div>
              <h2 class="wfcs-graphic-title">TOP 5</h2>
              <div class="wfcs-graphic-subtitle">case studies</div>
           </div>
        </div>
        <div class="wfcs-text-content">
            <h3>Top Lead Gen Case Studies</h3>
            <p>Lead generation has changed a lot over the years. Getting people interested isn't as simple as it once was. Our experts create cutting-edge acquisition systems producing the cost-effective volume your sales team demands.</p>
            <div class="wfcs-btn">SHOW ME ></div>
        </div>
      </a>
      
    </div>
    <div class="pdx-divider"></div>
  </div>
</section>
"""

# Reconstruct entire perfectly matching page
final_html = part1 + custom_css + case_studies_html + part2

# Overwrite case-studies/index.html safely
with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/case-studies/index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("SUCCESS: REBUILT USING EXACT HOME PAGE FRAMEWORK")
