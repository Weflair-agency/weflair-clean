# -*- coding: utf-8 -*-
import re

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/careers.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace Hero
new_hero = '''<section class="car-hero">
  <div class="car-hero__inner" style="max-width: 60rem;">
    <div class="car-hero__eyebrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="currentColor"/></svg>
      <p style="margin:0; font-size:1.1rem; color:#3eff68;">WeFlair Careers</p>
    </div>
    <h1 style="font-size:clamp(3rem, 5vw, 4.5rem); margin-bottom: 2rem;">Build growth engines,<br/>not slide decks.</h1>
    <p class="car-hero__sub" style="font-size:1.3rem; max-width: 45rem;">We're a specialized strike team of operators building high-performance growth systems for B2B. No meaningless account management. No infinite discovery phases. If you're an elite executor looking to drop the red tape, you belong here.</p>
  </div>
</section>'''
text = re.sub(r'<section class=\"car-hero\">.*?</section>', new_hero, text, flags=re.DOTALL)

# Replace Roles
new_roles = '''<style>
.jobs-list { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 3rem; text-align: left; }
.job-item { background: rgba(17,17,17,0.6); border: 1px solid rgba(246,243,238,0.1); border-radius: 1rem; padding: 2rem; display: flex; justify-content: space-between; align-items: center; transition: all 0.25s ease; }
.job-item:hover { border-color: #3eff68; transform: translateY(-3px); }
.job-info h3 { margin: 0 0 0.5rem; color: #f6f3ee; font-size: 1.4rem; font-weight: 700; }
.job-info p { margin: 0; color: rgba(246,243,238,0.6); font-size: 1rem; }
.job-info .meta { margin-top: 0.8rem; display: flex; gap: 1rem; font-size: 0.85rem; color: #3eff68; font-weight: 600; }
.job-item .btn--apply { background: #3eff68; color: #111; padding: 0.8rem 1.6rem; border-radius: 0.5rem; text-decoration: none; font-weight: 700; }
.job-item .btn--apply:hover { opacity: 0.9; }
</style>
<section class="car-roles">
  <div class="car-roles__inner" style="max-width: 58rem;">
    <h2>Open Roles</h2>
    <div class="jobs-list">
      <div class="job-item">
        <div class="job-info">
          <h3>Go-To-Market Engineer / Outbound Lead</h3>
          <p>Build automated, high-volume outbound systems and data engines (Clay, Apollo, Smartlead).</p>
          <div class="meta"><span>Remote</span> | <span>Full-Time</span> | <span>Results/Output Comp</span></div>
        </div>
        <a href="#apply" class="btn--apply">Apply Now</a>
      </div>
      <div class="job-item">
        <div class="job-info">
          <h3>Performance Design Expert</h3>
          <p>Design conversion-focused creative assets, ad variants, and high-converting landing pages.</p>
          <div class="meta"><span>Remote</span> | <span>Full/Part-Time</span> | <span>Results/Output Comp</span></div>
        </div>
        <a href="#apply" class="btn--apply">Apply Now</a>
      </div>
      <div class="job-item">
        <div class="job-info">
          <h3>AI & Automations Engineer</h3>
          <p>Develop programmatic workflows, LLM agents, and scalable scraping infrastructure.</p>
          <div class="meta"><span>Remote</span> | <span>Contract/Project</span> | <span>Results/Output Comp</span></div>
        </div>
        <a href="#apply" class="btn--apply">Apply Now</a>
      </div>
      <div class="job-item">
        <div class="job-info">
          <h3>CRM & RevOps Architect</h3>
          <p>Structure HubSpot tracking, scoring, pipeline routing, and attribution analytics.</p>
          <div class="meta"><span>Remote</span> | <span>Full-Time</span> | <span>Results/Output Comp</span></div>
        </div>
        <a href="#apply" class="btn--apply">Apply Now</a>
      </div>
    </div>
  </div>
</section>

<!-- APPLY FORM SECTION -->
<style>
.apply-hero { padding: 6rem 2rem; background: #111; border-top: 1px solid rgba(246,243,238,0.05); }
.apply-hero__inner { max-width: 48rem; margin: 0 auto; text-align: center; }
.apply-form { margin-top: 3rem; text-align: left; }
.apply-form .form-group { margin-bottom: 1.5rem; }
.apply-form label { display: block; margin-bottom: 0.5rem; color: #f6f3ee; font-weight: 600; font-size: 0.95rem; }
.apply-form input[type="text"], .apply-form input[type="email"], .apply-form input[type="url"], .apply-form textarea { width: 100%; padding: 1rem; border-radius: 0.5rem; background: rgba(0,0,0,0.5); border: 1px solid rgba(246,243,238,0.2); color: #fff; font-family: inherit; font-size: 1rem; }
.apply-form input[type="text"]:focus, .apply-form input[type="email"]:focus, .apply-form input[type="url"]:focus, .apply-form textarea:focus { outline: none; border-color: #3eff68; }
.apply-form button { margin-top: 1rem; width: 100%; padding: 1.2rem; background: rgba(62,255,104,1); border: none; border-radius: 0.5rem; color: #000; font-weight: 700; font-size: 1.1rem; cursor: pointer; transition: 0.2s; }
.apply-form button:hover { background: #fff; }
</style>
<section class="apply-hero" id="apply">
  <div class="apply-hero__inner">
    <h2 style="font-size: 2.8rem; margin: 0 0 1rem; color: #f6f3ee; font-weight: 700; letter-spacing: -0.04em;">Submit your profile.</h2>
    <p style="color: rgba(246,243,238,0.6); max-width: 40rem; margin: 0 auto; font-size: 1.1rem; line-height: 1.6;">No cover letters. No PDF resumes. Send us a quick note with your name, what role you are targeting, and links to shit you've actually built.</p>
    
    <div class="apply-form">
      <form action="mailto:sam@weflair.com" method="POST" enctype="text/plain">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" name="Name" required placeholder="John Doe">
        </div>
        <div class="form-group">
          <label>Role</label>
          <input type="text" name="Role" required placeholder="e.g. Go-To-Market Engineer">
        </div>
        <div class="form-group">
          <label>LinkedIn or Portfolio URL</label>
          <input type="url" name="Link" required placeholder="https://linkedin.com/in/...">
        </div>
        <div class="form-group">
          <label>Why are you elite? (What have you built/scaled?)</label>
          <textarea rows="4" name="Message" required placeholder="Drop some results/impact here..."></textarea>
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  </div>
</section>
'''
text = re.sub(r'<section class=\"car-roles\">.*?</section>', new_roles, text, flags=re.DOTALL)

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/careers.html', 'w', encoding='utf-8') as f:
    f.write(text)
