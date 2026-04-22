import os

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update CSS
css_search = '.weflair-faq__list {\n          max-width: 54rem;\n          margin-top: clamp(2.35rem, 3.9vw, 3.2rem)\n        }'
css_replace = '''.weflair-faq__list {
          max-width: 72rem;
          margin-top: clamp(2.35rem, 3.9vw, 3.2rem);
          display: flex;
          gap: 4rem;
          margin-left: auto;
          margin-right: auto;
        }
        .weflair-faq__col {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        @media(max-width: 800px) {
          .weflair-faq__list {
            flex-direction: column;
            gap: 0;
          }
          .weflair-faq__col:nth-child(2) .weflair-faq__item:first-child {
            border-top: none;
          }
        }'''

if css_search in html:
    html = html.replace(css_search, css_replace)
    print("CSS successfully replaced.")
else:
    print("WARNING: Could not find exact CSS block.")


# 2. Update HTML Block
start_tag = '<div class="weflair-faq__list">'
start_idx = html.find(start_tag)

if start_idx != -1:
    end_tag = '</div>\n        </div>\n      </section>'
    end_idx = html.find(end_tag, start_idx)
    
    if end_idx != -1:
        new_block = '''<div class="weflair-faq__list">
          <div class="weflair-faq__col">
            <details class="weflair-faq__item">
              <summary>We need results immediately. How do you deliver?</summary>
              <div class="weflair-faq__answer">During onboarding, we quickly get up to speed on your business and implement strategic quick wins early in the engagement. While short-term growth is a priority, we immediately lay out a roadmap for sustained success in our first few weeks together. If your business is at immediate risk and you are looking for WeFlair as a last-resort crisis mitigation, we likely aren't the right partner. Our model is built on multi-year growth strategies, prioritizing big-picture success over temporary fixes.</div>
            </details>
            <details class="weflair-faq__item">
              <summary>What are WeFlair’s core service specialties?</summary>
              <div class="weflair-faq__answer">WeFlair is a growth agency focused on building and operating elite customer acquisition engines. We operate across four core pillars: <strong>Performance Design &amp; Content</strong>, <strong>Go-To-Market &amp; Outbound Systems</strong>, <strong>AI Visibility &amp; SEO</strong>, and <strong>Paid Media &amp; Performance</strong>. Instead of isolated tactics, we build cohesive, end-to-end growth systems designed specifically for B2B, B2C, eCommerce, SaaS, and tech brands to predictably scale revenue.</div>
            </details>
            <details class="weflair-faq__item">
              <summary>Which team will work on my project?</summary>
              <div class="weflair-faq__answer">Teams usually consist of a dedicated Growth Operator (responsible for technical execution, analytics, and strategy) and an Account Manager (overseeing collaboration on your account). Depending on your scope, we quickly loop in CRO specialists, copywriters, and performance designers. The depth of our in-house capabilities replaces the need to juggle multiple siloed freelancers.</div>
            </details>
            <details class="weflair-faq__item">
              <summary>What advertising budget would you recommend to start with?</summary>
              <div class="weflair-faq__answer">Based on years of cross-channel experience, we've found that an optimal budget must allow for comprehensive testing and rapid optimization. We typically recommend a baseline of \,000–\,000/month per ad platform during the initial validation phase to gather statistical significance, though we scale and manage budgets well into the seven figures once we identify winning systems.</div>
            </details>
            <details class="weflair-faq__item">
              <summary>How do you integrate AI into your design and creative workflow?</summary>
              <div class="weflair-faq__answer">We use AI to enhance our workflows, never to replace the core strategic process. Our teams deploy AI tools across ideation, rapid prototyping, content generation, and performance analysis. Every AI execution at WeFlair is strictly human-guided to guarantee it aligns with your brand identity and performance objectives.</div>
            </details>
          </div>
          <div class="weflair-faq__col">
            <details class="weflair-faq__item">
              <summary>What’s your pricing structure?</summary>
              <div class="weflair-faq__answer">Our pricing model is rooted in transparency, flexibility, and incentive alignment. Our services are modular, meaning they can be engaged incrementally or as a fully integrated system. Clients typically start with one or two core services at the onset of our partnership—often beginning with a deep-dive audit—and expand our scope as we deliver performance and build mutual trust.</div>
            </details>
            <details class="weflair-faq__item">
              <summary>I am a head of growth marketing within my company. Will your team replace my job?</summary>
              <div class="weflair-faq__answer">Absolutely not. We actually prefer collaborating directly with internal marketing leaders to empower them to hit their KPIs and growth goals faster. Our senior growth operators manage the execution, strategies, and agency functions, acting as an elite extension of your in-house capabilities rather than a replacement.</div>
            </details>
            <details class="weflair-faq__item">
              <summary>What ROI can we expect?</summary>
              <div class="weflair-faq__answer">As a performance-driven growth agency, we advocate for a rigorously data-led approach. Once we align on your target ROI, payback periods, and Customer Acquisition Cost limits during our initial dive, we assess the mathematical feasibility and build a customized execution strategy designed precisely to hit or exceed those unit economics.</div>
            </details>
            <details class="weflair-faq__item">
              <summary>Do you have growth marketing experience with businesses in my industry?</summary>
              <div class="weflair-faq__answer">We bring a highly diverse range of experience across both B2B and B2C markets. Our leadership team has a combined 20+ years of experience driving growth for eCommerce, SaaS, and core technology companies. Because we deploy senior-level operators on every account, we understand the nuances of different verticals and exactly how to adapt our growth frameworks to solve your specific industry challenges.</div>
            </details>
            <details class="weflair-faq__item">
              <summary>How can I get started working with WeFlair?</summary>
              <div class="weflair-faq__answer">Getting started is simple. Request an audit or book a call via our site. We'll run a deep-dive into your current metrics, identify where revenue is leaking, and map out a custom growth strategy aligned with your targets. If it's a mutual fit, our onboarding is swift, allowing us to launch your first campaigns within 14 days.</div>
            </details>
          </div>
        </div>
'''
        # Replace the HTML exactly
        html = html[:start_idx] + new_block + html[end_idx:]
        print("HTML block successfully replaced.")
    else:
        print("WARNING: Could not find closing tag for FAQ HTML list.")
else:
    print("WARNING: Could not find opening tag for FAQ HTML list.")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
