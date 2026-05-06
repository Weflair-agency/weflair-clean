import os

with open('gtm_header.txt', 'r', encoding='utf-8') as f:
    header = f.read()

with open('extracted_proof.html', 'r', encoding='utf-8') as f:
    proof_html = f.read()

with open('gtm_footer.txt', 'r', encoding='utf-8') as f:
    footer = f.read()

main_content = """
<main id="main" data-ease-bg="" class="main">
  <div class="floating-elements-main">
    <div class="calc-header-padding-height"></div>
  </div>
  <div data-scroll-container="" class="main-wrap">

    <!-- 1. HERO SECTION -->
    <section class="weflair-section" id="hero" style="padding-top: clamp(6rem, 10vw, 10rem); padding-bottom: clamp(4rem, 8vw, 6rem);">
      <div class="container container--small" style="text-align: center;">
        <div class="eyebrow-wrap is--above-h1" style="display:flex; justify-content:center; margin-bottom: 2rem;">
          <div class="eyebrow" style="background: rgba(62, 255, 104, 0.1); border: 1px solid rgba(62, 255, 104, 0.2);">
            <span class="weflair-eyebrow-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="2"><path d="M12 2L2 22h20L12 2z"></path></svg>
            </span>
            <p class="eyebrow__p" style="color: #3EFF68; font-weight: 600;">GO-TO-MARKET SYSTEMS</p>
          </div>
        </div>
        <h1 class="h1" style="margin-bottom: 1.5rem;">
          We build <span style="color: #3EFF68;">B2B revenue engines.</span>
        </h1>
        <p class="weflair-section__body" style="margin-left: auto; margin-right: auto; max-width: 650px; font-size: 1.2rem; margin-bottom: 2.5rem;">
          Leverage AI & intent signals to scale your outbound, build predictable pipeline, and close more deals. We separate infrastructure from execution so you can scale without breaking.
        </p>
        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
          <a data-arrow="diagonal" data-hover="" href="#pilot" class="btn w-inline-block">
            <div class="btn__bg" style="background:#3EFF68"></div>
            <div class="btn__text"><span class="btn__span" style="color:#0A0A0F; font-weight:700;">Apply for a Pilot</span></div>
            <div class="arrow"><div class="arrow__bg"></div>
              <div class="arrow__box is--duplicate"><svg viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="#0A0A0F" stroke-width="0.125em"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="#0A0A0F" stroke-width="0.125em"></path><path d="M17.9995 13L11.9995 19" stroke="#0A0A0F" stroke-width="0.125em"></path></svg></div>
              <div class="arrow__box"><svg viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="#0A0A0F" stroke-width="0.125em"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="#0A0A0F" stroke-width="0.125em"></path><path d="M17.9995 13L11.9995 19" stroke="#0A0A0F" stroke-width="0.125em"></path></svg></div>
            </div>
          </a>
          <a data-arrow="diagonal" data-hover="" href="#assessment" class="btn w-inline-block" style="border: 1px solid rgba(246,243,238,0.2);">
            <div class="btn__bg" style="background:transparent"></div>
            <div class="btn__text"><span class="btn__span">Take the Assessment</span></div>
            <div class="arrow"><div class="arrow__bg"></div>
              <div class="arrow__box is--duplicate"><svg viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em"></path></svg></div>
              <div class="arrow__box"><svg viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em"></path><path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em"></path></svg></div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 2. PROBLEM IDENTIFICATION -->
    <section class="weflair-section weflair-playbooks" style="background: rgba(246,243,238,0.02); padding: clamp(4rem, 8vw, 6rem) 0; border-top: 1px solid rgba(246,243,238,0.05); border-bottom: 1px solid rgba(246,243,238,0.05);">
      <div class="container">
        <div class="weflair-section__head" style="margin-bottom: 3rem;">
          <h2 class="h2">Why Outbound Breaks</h2>
          <p class="weflair-section__body" style="max-width: 600px;">Spray-and-pray is dead. Buying tools without building the underlying architecture is where your pipeline bleeds.</p>
        </div>
        <div class="weflair-playbooks-grid">
          <div class="weflair-playbook-card">
            <div class="weflair-playbook-card__icon" style="background: rgba(239,68,68,0.1); color: #EF4444;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </div>
            <h3 class="h5" style="color: #F5F5F7;">Bad Data & Static Lists</h3>
            <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">Relying on legacy lists without intent enrichment. You are reaching out to people who aren't in-market.</p>
          </div>
          <div class="weflair-playbook-card">
            <div class="weflair-playbook-card__icon" style="background: rgba(239,68,68,0.1); color: #EF4444;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3 class="h5" style="color: #F5F5F7;">Disconnected CRM</h3>
            <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">Your sales reps spend 40% of their time updating fields. Data silos prevent automation and create friction.</p>
          </div>
          <div class="weflair-playbook-card">
            <div class="weflair-playbook-card__icon" style="background: rgba(239,68,68,0.1); color: #EF4444;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <h3 class="h5" style="color: #F5F5F7;">No Feedback Loops</h3>
            <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">You send 10,000 emails, get zero replies, and have no idea why. There is no system to test, learn, and iterate.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 & 4. THE TWO PILLARS: REVOPS & OUTBOUND -->
    <section class="weflair-section" style="padding: clamp(4rem, 8vw, 6rem) 0;">
      <div class="container">
        <div class="weflair-section__head" style="margin-bottom: 4rem; text-align: center; justify-items: center;">
          <h2 class="h2">The Anatomy of a Modern Revenue Engine</h2>
          <p class="weflair-section__body" style="max-width: 600px;">A truly integrated GTM system relies on two inseparable pillars: solid technical infrastructure, and highly-targeted, signal-based execution.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
          
          <!-- RevOps Card -->
          <div style="background: #111; border: 1px solid rgba(246,243,238,0.1); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column;">
            <div style="padding: 2rem; background: rgba(34,197,94,0.05); border-bottom: 1px solid rgba(246,243,238,0.05);">
              <h3 class="h4" style="color: #F5F5F7; margin-bottom: 0.5rem;">1. Revenue Operations (Infrastructure)</h3>
              <p style="color: #3EFF68; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">The Plumbing</p>
            </div>
            <div style="padding: 2rem; flex: 1;">
              <p style="color: rgba(246,243,238,0.7); margin-bottom: 1.5rem; line-height: 1.6;">
                We build the technical foundation in HubSpot or Salesforce to ensure every piece of data is captured, routed, and actionable. No more manual data entry.
              </p>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
                <li style="display: flex; align-items: flex-start; gap: 12px; color: rgba(246,243,238,0.8);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="2" style="margin-top:2px"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>CRM Architecture:</strong> Custom objects, properties, and perfectly mapped data models.</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 12px; color: rgba(246,243,238,0.8);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="2" style="margin-top:2px"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Lead Routing:</strong> Automated territory assignment and SLA enforcement for rapid follow-up.</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 12px; color: rgba(246,243,238,0.8);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="2" style="margin-top:2px"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Data Hygiene:</strong> Enrichment waterfalls via Apollo, Clay, and Clearbit to guarantee data integrity.</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Outbound Card -->
          <div style="background: #111; border: 1px solid rgba(246,243,238,0.1); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column;">
            <div style="padding: 2rem; background: rgba(34,197,94,0.05); border-bottom: 1px solid rgba(246,243,238,0.05);">
              <h3 class="h4" style="color: #F5F5F7; margin-bottom: 0.5rem;">2. Signal-Based Outbound (Execution)</h3>
              <p style="color: #3EFF68; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">The Engine</p>
            </div>
            <div style="padding: 2rem; flex: 1;">
              <p style="color: rgba(246,243,238,0.7); margin-bottom: 1.5rem; line-height: 1.6;">
                We deploy intelligent outbound campaigns that trigger only when an account shows high-intent buying signals, ensuring hyper-relevance.
              </p>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
                <li style="display: flex; align-items: flex-start; gap: 12px; color: rgba(246,243,238,0.8);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="2" style="margin-top:2px"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Signal Scraping:</strong> Job postings, funding rounds, and intent data (6sense/Bombora) triggers.</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 12px; color: rgba(246,243,238,0.8);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="2" style="margin-top:2px"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>AI Personalization:</strong> Dynamic email generation that speaks directly to the prospect's pain point.</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 12px; color: rgba(246,243,238,0.8);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="2" style="margin-top:2px"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Deliverability:</strong> Secondary domain infrastructure and inbox warmup to guarantee 99% placement.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 5. INTERACTIVE QUALIFICATION WIDGET -->
    <section id="assessment" class="weflair-section" style="background: #050508; padding: clamp(4rem, 8vw, 6rem) 0; border-top: 1px solid rgba(62,255,104,0.1); border-bottom: 1px solid rgba(62,255,104,0.1);">
      <div class="container container--small">
        <div class="weflair-section__head" style="margin-bottom: 3rem; text-align: center; justify-items: center;">
          <h2 class="h3">Diagnose Your Revenue Engine</h2>
          <p class="weflair-section__body">Identify where your pipeline is leaking and get a custom architectural recommendation.</p>
        </div>
        <div id="weflair-assessment-root">
          <!-- The assessment.js script will mount the interactive widget here -->
          <div style="padding: 40px; text-align: center; color: rgba(246,243,238,0.5); border: 1px dashed rgba(246,243,238,0.1); border-radius: 12px;">
             Loading assessment engine...
          </div>
        </div>
      </div>
    </section>

    <!-- 6. GTM FLYWHEEL ARCHITECTURE -->
    <section class="weflair-section" style="padding: clamp(4rem, 8vw, 6rem) 0;">
      <div class="container">
        <div class="weflair-section__head" style="margin-bottom: 4rem; text-align: center; justify-items: center;">
          <h2 class="h2">The GTM Flywheel Architecture</h2>
          <p class="weflair-section__body" style="max-width: 600px;">How data transforms into predictable, repeatable pipeline.</p>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 800px; margin: 0 auto; position: relative;">
          <!-- Vertical Line -->
          <div style="position: absolute; left: 24px; top: 40px; bottom: 40px; width: 2px; background: rgba(62,255,104,0.2); z-index: 0;"></div>
          
          <!-- Step 1 -->
          <div style="display: flex; gap: 2rem; position: relative; z-index: 1;">
            <div style="width: 50px; height: 50px; background: #0A0A0F; border: 2px solid #3EFF68; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #3EFF68; flex-shrink: 0;">01</div>
            <div style="background: #111; border: 1px solid rgba(246,243,238,0.1); padding: 2rem; border-radius: 12px; flex: 1;">
              <h4 class="h5" style="margin-bottom: 0.5rem;">Identity Resolution & Intent</h4>
              <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">We monitor your TAM for buying signals—job changes, tech installs, website visits—and map them to the exact decision-makers using contact enrichment.</p>
            </div>
          </div>
          <!-- Step 2 -->
          <div style="display: flex; gap: 2rem; position: relative; z-index: 1;">
            <div style="width: 50px; height: 50px; background: #0A0A0F; border: 2px solid #3EFF68; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #3EFF68; flex-shrink: 0;">02</div>
            <div style="background: #111; border: 1px solid rgba(246,243,238,0.1); padding: 2rem; border-radius: 12px; flex: 1;">
              <h4 class="h5" style="margin-bottom: 0.5rem;">Dynamic Personalization</h4>
              <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">Clay workflows cross-reference prospect data with your unique value props to generate hyper-relevant, 1:1 email copy that doesn't look like AI.</p>
            </div>
          </div>
          <!-- Step 3 -->
          <div style="display: flex; gap: 2rem; position: relative; z-index: 1;">
            <div style="width: 50px; height: 50px; background: #0A0A0F; border: 2px solid #3EFF68; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #3EFF68; flex-shrink: 0;">03</div>
            <div style="background: #111; border: 1px solid rgba(246,243,238,0.1); padding: 2rem; border-radius: 12px; flex: 1;">
              <h4 class="h5" style="margin-bottom: 0.5rem;">Omnichannel Sequencing</h4>
              <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">Campaigns execute across email and LinkedIn via Smartlead/Instantly, with load-balanced domains ensuring absolute deliverability.</p>
            </div>
          </div>
          <!-- Step 4 -->
          <div style="display: flex; gap: 2rem; position: relative; z-index: 1;">
            <div style="width: 50px; height: 50px; background: #0A0A0F; border: 2px solid #3EFF68; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #3EFF68; flex-shrink: 0;">04</div>
            <div style="background: #111; border: 1px solid rgba(246,243,238,0.1); padding: 2rem; border-radius: 12px; flex: 1;">
              <h4 class="h5" style="margin-bottom: 0.5rem;">CRM Sync & Pipeline</h4>
              <p style="color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5;">Replies are automatically triaged. Positive responses create deals in HubSpot and alert sales reps via Slack, completing the loop.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 7. DEPLOYMENT ROADMAP -->
    <section class="weflair-section" style="background: rgba(246,243,238,0.02); padding: clamp(4rem, 8vw, 6rem) 0; border-top: 1px solid rgba(246,243,238,0.05); border-bottom: 1px solid rgba(246,243,238,0.05);">
      <div class="container">
        <div class="weflair-section__head" style="margin-bottom: 3rem; text-align: center; justify-items: center;">
          <h2 class="h2">The 90-Day Deployment</h2>
          <p class="weflair-section__body" style="max-width: 600px;">We move fast, but we build to last. Here is exactly how we stand up your engine.</p>
        </div>
        
        <div class="weflair-playbooks-grid">
          <div class="weflair-playbook-card" style="border-color: rgba(62,255,104,0.3);">
            <div style="color: #3EFF68; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.5rem;">DAYS 1-30</div>
            <h3 class="h5" style="color: #F5F5F7;">Infrastructure Setup</h3>
            <ul style="list-style: disc; padding-left: 20px; color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5; margin: 0;">
              <li>CRM Audit & Object Mapping</li>
              <li>Purchase & Warmup 30+ Domains</li>
              <li>Configure DMARC, SPF, DKIM</li>
              <li>Define ICP & Anti-personas</li>
            </ul>
          </div>
          <div class="weflair-playbook-card">
            <div style="color: #3EFF68; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.5rem;">DAYS 31-60</div>
            <h3 class="h5" style="color: #F5F5F7;">Signal Engineering</h3>
            <ul style="list-style: disc; padding-left: 20px; color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5; margin: 0;">
              <li>Build Clay enrichment waterfalls</li>
              <li>Set up intent tracking triggers</li>
              <li>Draft primary offer angles & messaging</li>
              <li>Launch initial validation campaigns</li>
            </ul>
          </div>
          <div class="weflair-playbook-card">
            <div style="color: #3EFF68; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.5rem;">DAYS 61-90+</div>
            <h3 class="h5" style="color: #F5F5F7;">Scale & Optimize</h3>
            <ul style="list-style: disc; padding-left: 20px; color: rgba(246,243,238,0.6); font-size: 0.95rem; line-height: 1.5; margin: 0;">
              <li>A/B test subject lines & angles</li>
              <li>Increase sending volume safely</li>
              <li>Refine lead routing automation</li>
              <li>Shift focus to closing enablement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. FIT VS NOT A FIT -->
    <section class="weflair-section" style="padding: clamp(4rem, 8vw, 6rem) 0;">
      <div class="container">
        <div class="weflair-section__head" style="margin-bottom: 3rem; text-align: center; justify-items: center;">
          <h2 class="h2">Who We Partner With</h2>
          <p class="weflair-section__body" style="max-width: 600px;">We don't work with everyone. If you want to blast 10,000 generic emails a day without strategy, hire someone else.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px; max-width: 900px; margin: 0 auto;">
          <div style="background: rgba(34,197,94,0.03); border: 1px solid rgba(34,197,94,0.2); padding: 40px; border-radius: 12px;">
            <h3 style="color: #F5F5F7; font-size: 1.5rem; font-weight: 600; margin-bottom: 24px; display: flex; align-items: center; gap: 12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> The Right Fit
            </h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: rgba(246,243,238,0.8); display: flex; flex-direction: column; gap: 16px; font-size: 1.05rem;">
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
            <ul style="list-style: none; padding: 0; margin: 0; color: rgba(246,243,238,0.8); display: flex; flex-direction: column; gap: 16px; font-size: 1.05rem;">
              <li>B2C or low-ACV transactional businesses</li>
              <li>"Growth hackers" looking for a quick lead list</li>
              <li>Companies without product-market fit</li>
              <li>Teams unwilling to test new messaging angles</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. PROOF / CASE STUDIES -->
    """ + proof_html + """

    <!-- 10. PILOT CTA -->
    <section id="pilot" class="weflair-section" style="padding: clamp(4rem, 8vw, 6rem) 0; border-top: 1px solid rgba(246,243,238,0.05);">
      <div class="container container--small" style="text-align: center;">
        <h2 class="h2" style="margin-bottom: 16px;">Stop guessing. Start building.</h2>
        <p class="weflair-section__body" style="margin-bottom: 40px; margin-left: auto; margin-right: auto; max-width: 600px;">Get a custom architectural breakdown of your current revenue engine, and apply for our no-cost pilot campaign.</p>
        <a data-arrow="diagonal" data-hover="" href="/contact.html" class="btn w-inline-block">
          <div class="btn__bg" style="background:#3EFF68"></div>
          <div class="btn__text"><span class="btn__span" style="color:#0A0A0F; font-weight:700;">Apply for a Pilot</span></div>
          <div class="arrow"><div class="arrow__bg"></div>
            <div class="arrow__box is--duplicate"><svg viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="#0A0A0F" stroke-width="0.125em"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="#0A0A0F" stroke-width="0.125em"></path><path d="M17.9995 13L11.9995 19" stroke="#0A0A0F" stroke-width="0.125em"></path></svg></div>
            <div class="arrow__box"><svg viewBox="0 0 24 24" fill="none" class="arrow__svg"><path d="M11.999 18.334L11.999 5.00071" stroke="#0A0A0F" stroke-width="0.125em"></path><path d="M5.99902 13.0007L11.999 19.0007" stroke="#0A0A0F" stroke-width="0.125em"></path><path d="M17.9995 13L11.9995 19" stroke="#0A0A0F" stroke-width="0.125em"></path></svg></div>
          </div>
        </a>
      </div>
    </section>

  </div> <!-- end .main-wrap -->
</main>
"""

final_html = header + main_content + footer

# We also need to make sure the assessment.js script is included just before the closing body tag, if it's not already in the footer.
# Checking if assessment.js is in the footer
if 'assessment.js' not in footer:
    final_html = final_html.replace('</body>', '  <script src="/assessment.js"></script>\n</body>')

with open('services/go-to-market-systems.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("GTM page successfully rebuilt.")
