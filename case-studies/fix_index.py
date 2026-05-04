import re
path = r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\case-studies\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace hero copy
html = re.sub(
    r'<h1 class=\"wfcs-hero-massive__headline\">.*?</h1>\s*<p class=\"wfcs-hero-massive__lede\">.*?</p>',
    r'<h1 class=\"wfcs-hero-massive__headline\">How We Helped Clients<br><span class=\"text-accent\">Turn Their Goals Into Success Stories</span></h1>\n            <p class=\"wfcs-hero-massive__lede\">See the exact systems we used to accelerate growth across B2B SaaS, Fintech, and E-commerce.</p>',
    html, flags=re.DOTALL
)

# Remove featured banner logic in index.html
html = re.sub(r'<!-- New Featured Banner Area -->\s*<section class=\"wfcs-featured-wrapper\" data-case-featured></section>', '', html)

# Replace testimonials section with CTA box
cta_html = '''<section class="wfcs-bottom-cta">
  <div class="wfcs-bottom-cta__inner">
    <h2>Ready to Get Results Like These?</h2>
    <p>We've helped 50+ companies fix their acquisition, retention, and CRM loops.</p>
    <a class="btn weflair-btn weflair-btn--primary" href="/contact.html" style="background: white; color: #ea580c; border-color: white;">
      <div class="btn__bg" style="background-color:#ffffff"></div>
      <div class="btn__text"><span class="btn__span" style="color:#ea580c">Book a Free Strategy Call</span></div>
      <div class="arrow">
                  <div class="arrow__bg"></div>
                  <div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg" style="color: #ea580c"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div>
                  <div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg" style="color: #ea580c"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path></svg></div>
                </div>
    </a>
  </div>
</section>'''

html = re.sub(r'<section class=\"wfcs-testimonials\">.*?</section>', cta_html, html, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(html)
