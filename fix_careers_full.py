# -*- coding: utf-8 -*-
import re

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/careers.html', 'r', encoding='utf-8') as f:
    html = f.read()

# --- 1. HERO SECTION (Keep existing from earlier but clean up) ---
hero_html = '''<section class="car-hero" style="padding: 8rem 2rem 4rem; text-align: center;">
  <div class="car-hero__inner" style="max-width: 60rem; margin: 0 auto;">
    <div class="car-hero__eyebrow" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; background: rgba(62,255,104,0.1); padding: 0.5rem 1rem; border-radius: 2rem;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 45" fill="none" width="16"><path d="M15.875 2.188c.102 0 .207.187.312.562.051.25.102.469.156.656.781 2.867 2.488 5.531 5.125 8 2.633 2.461 5.492 4.074 8.578 4.844.289.055.438.164.438.328 0 .188-.157.309-.47.36-3.218.7-6.214 2.452-8.984 5.265-2.773 2.812-4.453 5.625-5.047 8.438-.074.258-.18.39-.313.39-.167 0-.26-.148-.28-.437-.274-1.445-.856-2.957-1.75-4.532-.899-1.582-1.965-2.96-3.203-4.14-1.063-1.071-2.508-2.145-4.328-3.22-1.824-1.07-3.246-1.71-4.266-1.921-.293-.082-.438-.203-.438-.36 0-.187.395-.379 1.188-.577.789-.207 1.926-.688 3.406-1.438 1.488-.75 2.89-1.805 4.203-3.172 1.344-1.363 2.516-2.851 3.516-4.468s1.61-2.992 1.828-4.117c.051-.3.16-.453.328-.453Z" fill="#3eff68"/></svg>
      <p style="margin:0; font-size:0.95rem; color:#3eff68; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">WeFlair Careers</p>
    </div>
    <h1 style="font-size:clamp(3rem, 5vw, 4.5rem); margin-bottom: 2rem; color:#f6f3ee; font-weight: 700; letter-spacing: -0.02em; line-height: 1.1;">Build growth engines,<br/>not slide decks.</h1>
    <p class="car-hero__sub" style="font-size:1.25rem; max-width: 48rem; margin: 0 auto; color: rgba(246,243,238,0.6); line-height: 1.6;">We're a specialized strike team building high-performance growth systems for B2B. No meaningless account management. No infinite discovery phases. If you're an elite executor looking to drop the red tape, you belong here.</p>
  </div>
</section>'''

# --- 2. VALUES / BENEFITS SECTION (Grid of 6) ---
values_html = '''<section class="car-values" style="padding: 4rem 2rem;">
  <div style="max-width: 72rem; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 4rem;">
      <h2 style="font-size: 2.5rem; color: #f6f3ee; font-weight: 700; letter-spacing: -0.02em;">Benefits & Culture</h2>
      <p style="color: rgba(246,243,238,0.6); font-size: 1.1rem; max-width: 36rem; margin: 1rem auto 0;">The setup you need to do the best work of your life.</p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
      <!-- Card 1 -->
      <div style="background: #111; padding: 2.5rem; border-radius: 1rem; border: 1px solid rgba(246,243,238,0.05); text-align: left;">
        <div style="width: 48px; height: 48px; background: rgba(62,255,104,0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
          <svg style="color: #3eff68;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <h3 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; color: #f6f3ee;">Elite B2B Projects</h3>
        <p style="margin: 0; color: rgba(246,243,238,0.6); font-size: 1rem; line-height: 1.5;">Build acquisition systems for global tech, SaaS, and high-ticket B2B companies with massive leverage.</p>
      </div>
      <!-- Card 2 -->
      <div style="background: #111; padding: 2.5rem; border-radius: 1rem; border: 1px solid rgba(246,243,238,0.05); text-align: left;">
        <div style="width: 48px; height: 48px; background: rgba(62,255,104,0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
          <svg style="color: #3eff68;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
        </div>
        <h3 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; color: #f6f3ee;">Remote & Async</h3>
        <p style="margin: 0; color: rgba(246,243,238,0.6); font-size: 1rem; line-height: 1.5;">100% remote. Work from anywhere. We care about the output you deliver, not what hours your Slack dot is green.</p>
      </div>
      <!-- Card 3 -->
      <div style="background: #111; padding: 2.5rem; border-radius: 1rem; border: 1px solid rgba(246,243,238,0.05); text-align: left;">
        <div style="width: 48px; height: 48px; background: rgba(62,255,104,0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
          <svg style="color: #3eff68;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <h3 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; color: #f6f3ee;">Outcome-Driven Comp</h3>
        <p style="margin: 0; color: rgba(246,243,238,0.6); font-size: 1rem; line-height: 1.5;">Generous splits, performance rev-shares, and fast adjustments. If you drive massive value, you extract massive value.</p>
      </div>
      <!-- Card 4 -->
      <div style="background: #111; padding: 2.5rem; border-radius: 1rem; border: 1px solid rgba(246,243,238,0.05); text-align: left;">
        <div style="width: 48px; height: 48px; background: rgba(62,255,104,0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
          <svg style="color: #3eff68;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; color: #f6f3ee;">Zero Bureaucracy</h3>
        <p style="margin: 0; color: rgba(246,243,238,0.6); font-size: 1rem; line-height: 1.5;">No mid-level managers holding back your ideas. You get the strategy, the tools, and the mandate to execute independently.</p>
      </div>
      <!-- Card 5 -->
      <div style="background: #111; padding: 2.5rem; border-radius: 1rem; border: 1px solid rgba(246,243,238,0.05); text-align: left;">
        <div style="width: 48px; height: 48px; background: rgba(62,255,104,0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
          <svg style="color: #3eff68;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <h3 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; color: #f6f3ee;">Flexible Hours</h3>
        <p style="margin: 0; color: rgba(246,243,238,0.6); font-size: 1rem; line-height: 1.5;">Start and finish when you choose. Live a balanced life, get deep work done at your own pace without micro-management.</p>
      </div>
      <!-- Card 6 -->
      <div style="background: #111; padding: 2.5rem; border-radius: 1rem; border: 1px solid rgba(246,243,238,0.05); text-align: left;">
        <div style="width: 48px; height: 48px; background: rgba(62,255,104,0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
          <svg style="color: #3eff68;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <h3 style="margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; color: #f6f3ee;">Continuous Upskilling</h3>
        <p style="margin: 0; color: rgba(246,243,238,0.6); font-size: 1rem; line-height: 1.5;">Access to premium courses, internal playbooks, and raw data from millions in ad spend. Grow faster than anywhere else.</p>
      </div>
    </div>
  </div>
</section>'''

# --- 3. PROCESS SECTION (3 Steps) ---
process_html = '''<section class="car-process" style="padding: 6rem 2rem; background: rgba(246,243,238,0.02)">
  <div style="max-width: 64rem; margin: 0 auto;">
    <h2 style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem; color: #f6f3ee; font-weight: 700; letter-spacing: -0.02em;">A Simple Three-Step Application Process</h2>
    <div style="display: grid; grid-template-columns: minmax(0, 1fr); gap: 2.5rem; position: relative;">
      <!-- Vertical line track -->
      <div style="position: absolute; left: 1.5rem; top: 0; bottom: 0; width: 1px; background: rgba(62,255,104,0.2);"></div>
      <!-- Step 1 -->
      <div style="display: flex; gap: 2rem; position: relative;">
        <div style="width: 3rem; height: 3rem; flex-shrink: 0; background: #000; border: 1px solid #3eff68; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; color: #3eff68; position: relative; z-index: 2;">1</div>
        <div style="padding-top: 0.5rem;">
           <h3 style="color:#f6f3ee; font-size: 1.5rem; font-weight: 600; margin:0 0 0.75rem;">Application</h3>
           <p style="color:rgba(246,243,238,0.6); font-size: 1.1rem; line-height: 1.6; margin: 0;">Apply and tell us about your background, the growth engines you've scaled, and past impact. Drop your portfolio/LinkedIn and compensation expectations. No standard cover letters. We respond in 1-2 working days.</p>
        </div>
      </div>
      <!-- Step 2 -->
      <div style="display: flex; gap: 2rem; position: relative;">
        <div style="width: 3rem; height: 3rem; flex-shrink: 0; background: #000; border: 1px solid rgba(246,243,238,0.2); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; color: rgba(246,243,238,0.5); position: relative; z-index: 2;">2</div>
        <div style="padding-top: 0.5rem;">
           <h3 style="color:#f6f3ee; font-size: 1.5rem; font-weight: 600; margin:0 0 0.75rem;">Assessment</h3>
           <p style="color:rgba(246,243,238,0.6); font-size: 1.1rem; line-height: 1.6; margin: 0;">If your profile fits, we'll challenge you with a paid, real-world assessment. This takes 1-3 days to complete. We review output, not rhetoric. We return feedback within 48 hours.</p>
        </div>
      </div>
      <!-- Step 3 -->
      <div style="display: flex; gap: 2rem; position: relative;">
        <div style="width: 3rem; height: 3rem; flex-shrink: 0; background: #000; border: 1px solid rgba(246,243,238,0.2); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; color: rgba(246,243,238,0.5); position: relative; z-index: 2;">3</div>
        <div style="padding-top: 0.5rem;">
           <h3 style="color:#f6f3ee; font-size: 1.5rem; font-weight: 600; margin:0 0 0.75rem;">Strategy Interview</h3>
           <p style="color:rgba(246,243,238,0.6); font-size: 1.1rem; line-height: 1.6; margin: 0;">Join a deep-dive call with the founders. We'll align on growth strategy, discuss onboarding, benefits, culture fit, and finalize the offer terms. Expect this to occur 3 days to 1 week post-assessment.</p>
        </div>
      </div>
    </div>
  </div>
</section>'''

# --- 4. ROLES SECTION ---
roles_html = '''<section class="car-roles" style="padding: 6rem 2rem;">
  <div style="max-width: 64rem; margin: 0 auto;">
    <h2 style="font-size: 2.5rem; text-align: center; margin-bottom: 3rem; color: #f6f3ee; font-weight: 700; letter-spacing: -0.02em;">Open Vacancies</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
      
      <!-- Role 1 -->
      <div style="background: rgba(30,30,30,0.6); border: 1px solid rgba(62,255,104,0.15); border-radius: 0.75rem; padding: 2rem; transition: transform 0.3s, border-color 0.3s; position: relative;" onmouseover="this.style.borderColor='#3eff68'; this.style.transform='translateY(-3px)'" onmouseout="this.style.borderColor='rgba(62,255,104,0.15)'; this.style.transform='none'">
        <h3 style="margin: 0 0 1.5rem; color: #f6f3ee; font-size: 1.35rem; font-weight: 600;">Go-To-Market Engineer</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:#3eff68" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Full-time
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:#3eff68" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Worldwide
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:#3eff68" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Remote
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:#3eff68" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Systems exp
          </div>
        </div>
        <a href="#apply" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #f6f3ee; font-weight: 600; text-decoration: none; font-size: 0.95rem;">Apply Now <span style="color:#3eff68;">&rarr;</span></a>
      </div>

      <!-- Role 2 -->
      <div style="background: rgba(30,30,30,0.6); border: 1px solid rgba(246,243,238,0.1); border-radius: 0.75rem; padding: 2rem; transition: transform 0.3s, border-color 0.3s; position: relative;" onmouseover="this.style.borderColor='#3eff68'; this.style.transform='translateY(-3px)'" onmouseout="this.style.borderColor='rgba(246,243,238,0.1)'; this.style.transform='none'">
        <h3 style="margin: 0 0 1.5rem; color: #f6f3ee; font-size: 1.35rem; font-weight: 600;">Growth Account Manager</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Full-time
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Worldwide
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Remote
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> 2+ years exp
          </div>
        </div>
        <a href="#apply" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #f6f3ee; font-weight: 600; text-decoration: none; font-size: 0.95rem;">Apply Now <span style="color:#3eff68;">&rarr;</span></a>
      </div>

      <!-- Role 3 -->
      <div style="background: rgba(30,30,30,0.6); border: 1px solid rgba(246,243,238,0.1); border-radius: 0.75rem; padding: 2rem; transition: transform 0.3s, border-color 0.3s; position: relative;" onmouseover="this.style.borderColor='#3eff68'; this.style.transform='translateY(-3px)'" onmouseout="this.style.borderColor='rgba(246,243,238,0.1)'; this.style.transform='none'">
        <h3 style="margin: 0 0 1.5rem; color: #f6f3ee; font-size: 1.35rem; font-weight: 600;">Social Media Strategist</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Contract
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Worldwide
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Remote
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> B2B exp
          </div>
        </div>
        <a href="#apply" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #f6f3ee; font-weight: 600; text-decoration: none; font-size: 0.95rem;">Apply Now <span style="color:#3eff68;">&rarr;</span></a>
      </div>

      <!-- Role 4 -->
      <div style="background: rgba(30,30,30,0.6); border: 1px solid rgba(246,243,238,0.1); border-radius: 0.75rem; padding: 2rem; transition: transform 0.3s, border-color 0.3s; position: relative;" onmouseover="this.style.borderColor='#3eff68'; this.style.transform='translateY(-3px)'" onmouseout="this.style.borderColor='rgba(246,243,238,0.1)'; this.style.transform='none'">
        <h3 style="margin: 0 0 1.5rem; color: #f6f3ee; font-size: 1.35rem; font-weight: 600;">Performance Design Expert</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Full/Part-time
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Worldwide
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Remote
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: rgba(246,243,238,0.7); font-size: 0.9rem;">
            <svg style="color:rgba(246,243,238,0.4)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Portfolio req
          </div>
        </div>
        <a href="#apply" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #f6f3ee; font-weight: 600; text-decoration: none; font-size: 0.95rem;">Apply Now <span style="color:#3eff68;">&rarr;</span></a>
      </div>

    </div>
  </div>
</section>'''

# --- 5. FAQ SECTION ---
faq_html = '''<style>
.car-faq-item { border-bottom: 1px solid rgba(246,243,238,0.1); padding: 1.5rem 0; cursor: pointer; display: flex; flex-direction: column; }
.car-faq-q { display: flex; justify-content: space-between; align-items: center; font-size: 1.15rem; font-weight: 600; color: #f6f3ee; }
.car-faq-icon { transition: transform 0.3s ease; color: #3eff68; font-size: 1.5rem; line-height: 1; }
.car-faq-a { max-height: 0; overflow: hidden; transition: max-height 0.3s ease, margin-top 0.3s ease, opacity 0.3s ease; color: rgba(246,243,238,0.6); font-size: 1.05rem; line-height: 1.5; opacity: 0; }
.car-faq-item.active .car-faq-a { max-height: 500px; margin-top: 1rem; opacity: 1; }
.car-faq-item.active .car-faq-icon { transform: rotate(45deg); }
</style>
<section class="car-faq" style="padding: 4rem 2rem 8rem;">
  <div style="max-width: 48rem; margin: 0 auto;">
    <h2 style="font-size: 2.5rem; margin-bottom: 2.5rem; text-align: center; color:#f6f3ee; font-weight: 700; letter-spacing:-0.02em;">Frequently Asked Questions</h2>
    <div>
      <div class="car-faq-item" onclick="this.classList.toggle('active')">
        <div class="car-faq-q">What level of experience do I need? <span class="car-faq-icon">+</span></div>
        <div class="car-faq-a">We hire for proven impact, not years in a seat. If you have 2 years of experience but have driven millions in pipeline or scaled massive systems, we want to talk. We look for elite executors who understand B2B growth and can operate autonomously.</div>
      </div>
      <div class="car-faq-item" onclick="this.classList.toggle('active')">
        <div class="car-faq-q">Will I hear back if my application is not successful? <span class="car-faq-icon">+</span></div>
        <div class="car-faq-a">Because of the high volume of applications, we only guarantee personalized feedback if you make it past the initial screening and into the assessment or interview stage. If we see a potential fit, you will hear from us within 1-2 working days.</div>
      </div>
      <div class="car-faq-item" onclick="this.classList.toggle('active')">
        <div class="car-faq-q">Can I work from different locations? <span class="car-faq-icon">+</span></div>
        <div class="car-faq-a">Yes. We are 100% remote and async-first. Whether you're in London, Dubai, or a beach in Bali, we don't care. As long as you have robust internet, hit your output goals, and have some overlap for crucial client syncs, work from wherever you want.</div>
      </div>
      <div class="car-faq-item" onclick="this.classList.toggle('active')">
        <div class="car-faq-q">Do I get to work with others on the team? <span class="car-faq-icon">+</span></div>
        <div class="car-faq-a">Absolutely. Even though we value autonomy, we operate as a strike team. You'll collaborate deeply with founders, designers, and revops depending on the specific client system being built. We share data, run retros, and upskill together.</div>
      </div>
      <div class="car-faq-item" onclick="this.classList.toggle('active')">
        <div class="car-faq-q">What tools do you use for communication and collaboration? <span class="car-faq-icon">+</span></div>
        <div class="car-faq-a">We run leaner than most. Slack for direct syncs, Notion for documentation and playbooks, and specific platforms (HubSpot, Clay, Smartlead) for execution. We skip the 3-hour internal meetings in exchange for fast, decentralized updates.</div>
      </div>
      <div class="car-faq-item" onclick="this.classList.toggle('active')">
        <div class="car-faq-q">Will there be onboarding at the start of my work? <span class="car-faq-icon">+</span></div>
        <div class="car-faq-a">Yes! We provide immediate access to our internal playbooks, brand framework, and infrastructure. You will be closely guided through your first 2-3 client assignments until you deeply understand the 'WeFlair' standard of operations.</div>
      </div>
    </div>
  </div>
</section>'''

# --- 6. APPLY FORM SECTION ---
apply_html = '''<style>
.apply-hero { padding: 4rem 2rem 8rem; background: #111; border-top: 1px solid rgba(246,243,238,0.05); }
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
    <p style="color: rgba(246,243,238,0.6); max-width: 40rem; margin: 0 auto; font-size: 1.1rem; line-height: 1.6;">No cover letters. No PDF resumes. Send us a quick note with your name, what role you are targeting, and links to systems you've built.</p>
    
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
</section>'''

new_body = hero_html + "\n" + values_html + "\n" + process_html + "\n" + roles_html + "\n" + faq_html + "\n" + apply_html

# Since we don't know the exact current state, replace everything between </nav> (or <main>) and </main> or <section class="footer weflair-footer">
# Let's just find where <section class="car-hero"> starts and where <section class="footer weflair-footer"> starts
start_idx = html.find('<section class="car-hero">')
end_idx = html.find('<section class="footer weflair-footer">')

if start_idx != -1 and end_idx != -1:
    final_html = html[:start_idx] + new_body + "\n" + html[end_idx:]
    with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/careers.html', 'w', encoding='utf-8') as f:
        f.write(final_html)
    print("SUCCESS: REPLACED CAREERS BODY")
else:
    print(f"FAILED TO FIND INDICES. start={start_idx}, end={end_idx}")

