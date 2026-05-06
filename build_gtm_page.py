import sys
import re

gtm_path = r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\services\go-to-market-systems.html'

with open(gtm_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract proof section
proof_match = re.search(r'(<!-- SECTION 8: PROOF -->.*?</section>)', content, re.DOTALL)
proof_html = proof_match.group(1) if proof_match else ''

# Extract footer
footer_match = re.search(r'(<!-- FOOTER -->.*)', content, re.DOTALL)
footer_html = footer_match.group(1) if footer_match else ''

# Extract everything before <main>
header_match = re.search(r'(.*?<main id="main" class="main">)', content, re.DOTALL)
header_html = header_match.group(1) if header_match else ''

# The new body HTML
new_main_html = f'''
    <!-- SECTION 1: HERO -->
    <section class="weflair-section" style="padding-top: clamp(6rem, 10vw, 10rem); padding-bottom: clamp(4rem, 8vw, 6rem);">
      <div class="container container--small" style="text-align: center;">
        <div class="eyebrow" style="margin-bottom: 24px; padding: 4px 12px; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 20px; display: inline-block;">
          <span style="color: #22C55E; font-size: 0.85rem; font-weight: 600; letter-spacing: 1px;">GO-TO-MARKET SYSTEMS</span>
        </div>
        <h1 style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 700; color: #F5F5F7; line-height: 1.1; margin-bottom: 24px; letter-spacing: -0.02em;">
          We build <span style="color: #3EFF68;">B2B revenue engines.</span>
        </h1>
        <p style="font-size: clamp(1.1rem, 2vw, 1.25rem); color: rgba(246,243,238,0.7); line-height: 1.5; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto;">
          Leverage AI & intent signals to scale your outbound, build predictable pipeline, and close more deals. Stop guessing. Start scaling.
        </p>
        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
          <a href="#pilot" class="btn" style="background: #3EFF68; color: #0A0A0F; padding: 16px 32px; border-radius: 8px; font-weight: 600; text-decoration: none;">Apply for a Pilot</a>
          <a href="#assessment" class="btn" style="background: rgba(246,243,238,0.05); color: #F5F5F7; border: 1px solid rgba(246,243,238,0.1); padding: 16px 32px; border-radius: 8px; font-weight: 600; text-decoration: none;">Take the Assessment</a>
        </div>
      </div>
    </section>

    <!-- SECTION 2: THE PROBLEM (Why Outbound Breaks) -->
    <section class="weflair-section" style="background: rgba(246,243,238,0.02); padding: clamp(4rem, 8vw, 6rem) 0; border-top: 1px solid rgba(246,243,238,0.05); border-bottom: 1px solid rgba(246,243,238,0.05);">
      <div class="container">
        <div style="text-align: center; margin-bottom: 48px;">
          <h2 style="font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 700; color: #F5F5F7; margin-bottom: 16px;">Why Outbound Breaks</h2>
          <p style="color: rgba(246,243,238,0.6); max-width: 600px; margin: 0 auto; font-size: 1.1rem;">Spray-and-pray is dead. Buying tools without building the underlying architecture is where your pipeline bleeds.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <div style="background: #0A0A0F; border: 1px solid rgba(246,243,238,0.1); padding: 32px; border-radius: 12px;">
            <div style="width: 48px; height: 48px; background: rgba(239,68,68,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: #EF4444;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
            </div>
            <h3 style="color: #F5F5F7; font-size: 1.25rem; font-weight: 600; margin-bottom: 12px;">Bad Data & Static Lists</h3>
            <p style="color: rgba(246,243,238,0.6); line-height: 1.5; font-size: 0.95rem;">Relying on Apollo or ZoomInfo lists without intent enrichment. You are reaching out to people who aren't in-market.</p>
          </div>
          <div style="background: #0A0A0F; border: 1px solid rgba(246,243,238,0.1); padding: 32px; border-radius: 12px;">
            <div style="width: 48px; height: 48px; background: rgba(239,68,68,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: #EF4444;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3 style="color: #F5F5F7; font-size: 1.25rem; font-weight: 600; margin-bottom: 12px;">Disconnected CRM</h3>
            <p style="color: rgba(246,243,238,0.6); line-height: 1.5; font-size: 0.95rem;">Your sales reps spend 40% of their time updating fields. Data silos prevent automation and create extreme friction.</p>
          </div>
          <div style="background: #0A0A0F; border: 1px solid rgba(246,243,238,0.1); padding: 32px; border-radius: 12px;">
            <div style="width: 48px; height: 48px; background: rgba(239,68,68,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: #EF4444;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <h3 style="color: #F5F5F7; font-size: 1.25rem; font-weight: 600; margin-bottom: 12px;">No Feedback Loops</h3>
            <p style="color: rgba(246,243,238,0.6); line-height: 1.5; font-size: 0.95rem;">You send 10,000 emails, get zero replies, and have no idea why. There is no system to test, learn, and iterate.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: TWO PATHS (RevOps vs Outbound) -->
    <section class="weflair-section" style="padding: clamp(4rem, 8vw, 6rem) 0;">
      <div class="container">
        <div style="text-align: center; margin-bottom: 48px;">
          <h2 style="font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 700; color: #F5F5F7; margin-bottom: 16px;">Two Paths to Revenue</h2>
          <p style="color: rgba(246,243,238,0.6); max-width: 600px; margin: 0 auto; font-size: 1.1rem;">We separate the infrastructure from the execution. Build the engine, then pour the fuel.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
          <div style="background: linear-gradient(180deg, rgba(34,197,94,0.05) 0%, rgba(10,10,15,0) 100%); border: 1px solid rgba(34,197,94,0.2); padding: 48px 32px; border-radius: 16px; position: relative; overflow: hidden;">
            <div style="margin-bottom: 24px; display: inline-block; padding: 6px 12px; background: rgba(34,197,94,0.1); color: #3EFF68; border-radius: 6px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px;">PATH 1</div>
            <h3 style="color: #F5F5F7; font-size: 2rem; font-weight: 700; margin-bottom: 16px;">RevOps Infrastructure</h3>
            <p style="color: rgba(246,243,238,0.7); line-height: 1.6; margin-bottom: 32px;">The Engine. We clean your CRM hygiene, establish data routing, and build AI automations that eliminate manual work for your reps.</p>
            <ul style="list-style: none; padding: 0; margin: 0; color: #F5F5F7;">
              <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> HubSpot / Salesforce Architecture
              </li>
              <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Automated Data Routing
              </li>
              <li style="display: flex; align-items: center; gap: 12px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Full-Funnel Attribution
              </li>
            </ul>
          </div>
          <div style="background: linear-gradient(180deg, rgba(59,130,246,0.05) 0%, rgba(10,10,15,0) 100%); border: 1px solid rgba(59,130,246,0.2); padding: 48px 32px; border-radius: 16px; position: relative; overflow: hidden;">
            <div style="margin-bottom: 24px; display: inline-block; padding: 6px 12px; background: rgba(59,130,246,0.1); color: #60A5FA; border-radius: 6px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px;">PATH 2</div>
            <h3 style="color: #F5F5F7; font-size: 2rem; font-weight: 700; margin-bottom: 16px;">Outbound Pilots</h3>
            <p style="color: rgba(246,243,238,0.7); line-height: 1.6; margin-bottom: 32px;">The Fuel. We deploy signal-based outbound using tools like Clay, trigger-based intent, and hyper-personalized messaging at scale.</p>
            <ul style="list-style: none; padding: 0; margin: 0; color: #F5F5F7;">
              <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Signal-Based Targeting (Clay)
              </li>
              <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Multi-channel Infrastructure (Smartlead)
              </li>
              <li style="display: flex; align-items: center; gap: 12px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Intent & Trigger Monitoring
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: THE QUALIFIER (Assessment) -->
    <section id="assessment" class="weflair-section" style="padding: clamp(4rem, 8vw, 6rem) 0; background: #07070A; border-top: 1px solid rgba(246,243,238,0.05); border-bottom: 1px solid rgba(246,243,238,0.05);">
      <div class="container container--small" style="text-align: center;">
        <h2 style="font-size: clamp(2rem, 3.5vw, 2.5rem); font-weight: 700; color: #F5F5F7; margin-bottom: 16px;">Let's map your system.</h2>
        <p style="color: rgba(246,243,238,0.6); margin-bottom: 40px; font-size: 1.1rem;">Answer 5 questions about your B2B engine. We'll tell you exactly where the revenue is leaking.</p>
        
        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 40px; max-width: 600px; margin: 0 auto; text-align: left;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 24px; font-size: 0.85rem; color: #3EFF68; font-weight: 600; letter-spacing: 1px;">
            <span>QUESTION 1 OF 5</span>
            <span>20% COMPLETED</span>
          </div>
          <h3 style="color: #F5F5F7; font-size: 1.5rem; font-weight: 600; margin-bottom: 24px;">Who do you primarily sell to?</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <button style="width: 100%; text-align: left; padding: 16px 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #F5F5F7; font-size: 1rem; cursor: pointer; transition: 0.2s;">Enterprise SaaS / Tech</button>
            <button style="width: 100%; text-align: left; padding: 16px 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #F5F5F7; font-size: 1rem; cursor: pointer; transition: 0.2s;">Mid-Market Services / Agencies</button>
            <button style="width: 100%; text-align: left; padding: 16px 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #F5F5F7; font-size: 1rem; cursor: pointer; transition: 0.2s;">SMB / High-Volume</button>
            <button style="width: 100%; text-align: left; padding: 16px 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #F5F5F7; font-size: 1rem; cursor: pointer; transition: 0.2s;">E-commerce / D2C</button>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: CORE SYSTEM LAYERS -->
    <section class="weflair-section" style="padding: clamp(4rem, 8vw, 6rem) 0;">
      <div class="container">
        <div style="text-align: center; margin-bottom: 64px;">
          <h2 style="font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 700; color: #F5F5F7; margin-bottom: 16px;">The GTM Flywheel Architecture</h2>
          <p style="color: rgba(246,243,238,0.6); max-width: 600px; margin: 0 auto; font-size: 1.1rem;">How we connect the tools. A literal technical visualization of how signals convert into pipeline.</p>
        </div>
        
        <div style="max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px;">
          <!-- Layer 1 -->
          <div style="background: rgba(246,243,238,0.02); border: 1px solid rgba(246,243,238,0.08); border-radius: 12px; padding: 24px 32px; display: flex; align-items: center; gap: 24px;">
            <div style="width: 64px; height: 64px; background: rgba(34,197,94,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span style="color: #3EFF68; font-weight: 700; font-size: 1.5rem;">01</span>
            </div>
            <div>
              <h3 style="color: #F5F5F7; font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">Data & Intent Signals</h3>
              <p style="color: rgba(246,243,238,0.6); margin: 0; line-height: 1.5;">Ingesting job changes, tech stack installs, funding rounds, and web visitors (Clearbit, Apollo, 6sense).</p>
            </div>
          </div>
          <!-- Layer 2 -->
          <div style="background: rgba(246,243,238,0.02); border: 1px solid rgba(246,243,238,0.08); border-radius: 12px; padding: 24px 32px; display: flex; align-items: center; gap: 24px;">
            <div style="width: 64px; height: 64px; background: rgba(34,197,94,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span style="color: #3EFF68; font-weight: 700; font-size: 1.5rem;">02</span>
            </div>
            <div>
              <h3 style="color: #F5F5F7; font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">Enrichment Engine (Clay)</h3>
              <p style="color: rgba(246,243,238,0.6); margin: 0; line-height: 1.5;">Waterfall enrichment across 50+ providers to ensure valid emails and hyper-personalized context variables.</p>
            </div>
          </div>
          <!-- Layer 3 -->
          <div style="background: rgba(246,243,238,0.02); border: 1px solid rgba(246,243,238,0.08); border-radius: 12px; padding: 24px 32px; display: flex; align-items: center; gap: 24px;">
            <div style="width: 64px; height: 64px; background: rgba(34,197,94,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span style="color: #3EFF68; font-weight: 700; font-size: 1.5rem;">03</span>
            </div>
            <div>
              <h3 style="color: #F5F5F7; font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">Execution Workflows</h3>
              <p style="color: rgba(246,243,238,0.6); margin: 0; line-height: 1.5;">Smartlead/Instantly pushes tailored sequences dynamically based on the exact signal triggered.</p>
            </div>
          </div>
          <!-- Layer 4 -->
          <div style="background: rgba(246,243,238,0.02); border: 1px solid rgba(246,243,238,0.08); border-radius: 12px; padding: 24px 32px; display: flex; align-items: center; gap: 24px;">
            <div style="width: 64px; height: 64px; background: rgba(34,197,94,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span style="color: #3EFF68; font-weight: 700; font-size: 1.5rem;">04</span>
            </div>
            <div>
              <h3 style="color: #F5F5F7; font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">CRM & Reporting Loops</h3>
              <p style="color: rgba(246,243,238,0.6); margin: 0; line-height: 1.5;">HubSpot/Salesforce catches positive replies, tracks opportunity value, and feeds data back to optimize the engine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: THE PROCESS (How we deploy) -->
    <section class="weflair-section" style="padding: clamp(4rem, 8vw, 6rem) 0; background: #0A0A0F; border-top: 1px solid rgba(246,243,238,0.05); border-bottom: 1px solid rgba(246,243,238,0.05);">
      <div class="container">
        <div style="text-align: center; margin-bottom: 64px;">
          <h2 style="font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 700; color: #F5F5F7; margin-bottom: 16px;">The 90-Day Roadmap</h2>
          <p style="color: rgba(246,243,238,0.6); max-width: 600px; margin: 0 auto; font-size: 1.1rem;">Speed-to-Market. No waiting 6 weeks. Here is how we build the foundations and scale what works.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
          <div style="padding: 32px; border-left: 2px solid rgba(34,197,94,0.3); background: rgba(246,243,238,0.02);">
            <div style="font-size: 0.8rem; font-weight: 700; color: #3EFF68; letter-spacing: 1px; margin-bottom: 12px;">WEEK 2</div>
            <h3 style="color: #F5F5F7; font-size: 1.2rem; font-weight: 600; margin-bottom: 12px;">Infrastructure Live</h3>
            <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">Secondary domains warmed up, ICP defined, CRM connected, and initial data lists built.</p>
          </div>
          <div style="padding: 32px; border-left: 2px solid rgba(34,197,94,0.3); background: rgba(246,243,238,0.02);">
            <div style="font-size: 0.8rem; font-weight: 700; color: #3EFF68; letter-spacing: 1px; margin-bottom: 12px;">WEEK 4</div>
            <h3 style="color: #F5F5F7; font-size: 1.2rem; font-weight: 600; margin-bottom: 12px;">First Sprints</h3>
            <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">First signal-based sequences launch. We push to warm ICP contacts and gather initial reply data.</p>
          </div>
          <div style="padding: 32px; border-left: 2px solid rgba(34,197,94,0.3); background: rgba(246,243,238,0.02);">
            <div style="font-size: 0.8rem; font-weight: 700; color: #3EFF68; letter-spacing: 1px; margin-bottom: 12px;">MONTH 2</div>
            <h3 style="color: #F5F5F7; font-size: 1.2rem; font-weight: 600; margin-bottom: 12px;">Scale Winners</h3>
            <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">We identify resonating angles, increase sending volume safely, and refine the automation rules.</p>
          </div>
          <div style="padding: 32px; border-left: 2px solid rgba(34,197,94,0.3); background: rgba(246,243,238,0.02);">
            <div style="font-size: 0.8rem; font-weight: 700; color: #3EFF68; letter-spacing: 1px; margin-bottom: 12px;">MONTH 3</div>
            <h3 style="color: #F5F5F7; font-size: 1.2rem; font-weight: 600; margin-bottom: 12px;">Repeatable System</h3>
            <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">Playbook locked in. You now have an asset that consistently turns intent signals into qualified pipeline.</p>
          </div>
        </div>
      </div>
    </section>

{proof_html}

    <!-- SECTION 8: WHO THIS IS FOR -->
    <section class="weflair-section" style="padding: clamp(4rem, 8vw, 6rem) 0; border-top: 1px solid rgba(246,243,238,0.05);">
      <div class="container">
        <div style="text-align: center; margin-bottom: 48px;">
          <h2 style="font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 700; color: #F5F5F7; margin-bottom: 16px;">Who We Partner With</h2>
          <p style="color: rgba(246,243,238,0.6); max-width: 600px; margin: 0 auto; font-size: 1.1rem;">We don't work with everyone. If you want to blast 10,000 generic emails a day, hire someone else.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 900px; margin: 0 auto;">
          <div style="background: rgba(34,197,94,0.03); border: 1px solid rgba(34,197,94,0.2); padding: 40px; border-radius: 12px;">
            <h3 style="color: #F5F5F7; font-size: 1.5rem; font-weight: 600; margin-bottom: 24px; display: flex; align-items: center; gap: 12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> The Right Fit
            </h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: rgba(246,243,238,0.7); display: flex; flex-direction: column; gap: 16px; font-size: 1.05rem;">
              <li>High-ACV B2B SaaS & Tech companies</li>
              <li>Teams ready to invest in technical infrastructure</li>
              <li>Founders looking to augment SDRs with AI</li>
              <li>Organizations with a clear ICP and product-market fit</li>
            </ul>
          </div>
          <div style="background: rgba(239,68,68,0.03); border: 1px solid rgba(239,68,68,0.2); padding: 40px; border-radius: 12px;">
            <h3 style="color: #F5F5F7; font-size: 1.5rem; font-weight: 600; margin-bottom: 24px; display: flex; align-items: center; gap: 12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not a Fit
            </h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: rgba(246,243,238,0.7); display: flex; flex-direction: column; gap: 16px; font-size: 1.05rem;">
              <li>B2C or low-ACV transactional businesses</li>
              <li>"Growth hackers" looking for a quick lead list</li>
              <li>Companies without product-market fit</li>
              <li>Teams unwilling to test new messaging angles</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 9: THE LOCUS CTA -->
    <section id="pilot" class="weflair-section" style="padding: clamp(4rem, 8vw, 6rem) 0;">
      <div class="container container--small" style="text-align: center;">
        <h2 style="font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 700; color: #F5F5F7; margin-bottom: 16px;">Stop guessing. Start building.</h2>
        <p style="color: rgba(246,243,238,0.6); margin-bottom: 40px; font-size: 1.1rem;">Get a custom architectural breakdown of your current revenue engine, and apply for our no-cost pilot campaign.</p>
        <a href="/contact.html" class="btn" style="background: #3EFF68; color: #0A0A0F; padding: 16px 40px; border-radius: 8px; font-size: 1.1rem; font-weight: 700; text-decoration: none; display: inline-block;">Apply for a Pilot</a>
      </div>
    </section>

{footer_html}
'''

content = header_html + new_main_html
with open(gtm_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
