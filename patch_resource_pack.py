import re

html_path = 'resource-pack.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Meta tags
html = re.sub(r'<title>Contact Us - WeFlair</title>', '<title>Automation Pack - WeFlair</title>', html)
html = re.sub(r'content="Book a free growth audit with our experts."', 'content="Download our free skills, automations and tools to boost your business performance."', html)
html = re.sub(r'content="Contact — WeFlair"', 'content="Automation Pack — WeFlair"', html)

# Hero section
html = re.sub(r'Book a free discovery call', 'Get the Automation Pack', html)
html = re.sub(r'<h1 class="ct2-hero__h1">Let\'s figure out what\'s holding your growth back.</h1>', '<h1 class="ct2-hero__h1">Automation Pack</h1>', html)
html = re.sub(r'<p class="ct2-hero__sub">A quick, no-pressure intro call to understand your business.*?</p>', '<p class="ct2-hero__sub">Free skills, automations and tools to boost your business performance.</p>', html, flags=re.DOTALL)

# Intro text
html = re.sub(r'<p class="ct2-intro">We\'ll spend 20–30 minutes getting.*?</p>', '<p class="ct2-intro">We will send you our internal resource pack featuring the exact automations, tools, and systems we use to help our clients perform at the highest level. We personally use them every day.</p>', html, flags=re.DOTALL)

# Steps
html = re.sub(r'<li class="ct2-step">.*?<h4 class="ct2-step__h">Discovery Call</h4>.*?</li>', '<li class="ct2-step"><div class="ct2-step__num">1</div><div class="ct2-step__body"><h4 class="ct2-step__h">Request Access</h4><p class="ct2-step__p">Book a slot on the calendar right here.</p></div></li>', html, flags=re.DOTALL)
html = re.sub(r'<li class="ct2-step">.*?<h4 class="ct2-step__h">Growth Audit / Deep Dive</h4>.*?</li>', '<li class="ct2-step"><div class="ct2-step__num">2</div><div class="ct2-step__body"><h4 class="ct2-step__h">Receive the Pack</h4><p class="ct2-step__p">We will send the automation pack directly to you.</p></div></li>', html, flags=re.DOTALL)
html = re.sub(r'<li class="ct2-step">.*?<h4 class="ct2-step__h">The Gameplan</h4>.*?</li>', '<li class="ct2-step"><div class="ct2-step__num">3</div><div class="ct2-step__body"><h4 class="ct2-step__h">Implement &amp; Scale</h4><p class="ct2-step__p">Deploy our internal tools to save time and boost revenue.</p></div></li>', html, flags=re.DOTALL)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
