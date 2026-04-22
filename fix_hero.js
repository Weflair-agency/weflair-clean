const fs = require('fs');
let html = fs.readFileSync('services/performance-design.html', 'utf8');

const targetStart = html.indexOf('<p class="eyebrow__p">Paid Media &amp; Performance</p>');
const targetEndStr = '</div>\r\n        </div>\r\n      </section>';
let targetEnd = html.indexOf(targetEndStr, targetStart);

if(targetEnd === -1) {
    targetEnd = html.indexOf('</div>\n        </div>\n      </section>', targetStart);
}

if (targetStart !== -1 && targetEnd !== -1) {
  const newHeroPart = \<p class="eyebrow__p">Performance Design &amp; CRO</p>
          </div>
          <h1 class="sv-hero__title" style="max-width: 18ch;">
            Performance Design &amp; CRO for <span style="color:#F97316">SaaS &amp; Ecommerce</span>
          </h1>
          
          <!-- DIAGRAM INJECTED HERE -->
          <div class="cro-diagram">
            <p class="cro-diagram__subtitle">We analyze and optimize your website to convert <strong style="color: #fff;">2-3x more visitors</strong> without spending another dollar on ads.</p>
            <div class="cro-diagram__container">
              <!-- SVG Connecting Lines -->
              <svg class="cro-diagram__lines" viewBox="0 0 600 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 120 50 C 200 50, 250 100, 300 100" fill="none" stroke="#F97316" stroke-width="2" vector-effect="non-scaling-stroke" opacity="0.3"/>
                <path d="M 120 150 C 200 150, 250 100, 300 100" fill="none" stroke="#F97316" stroke-width="2" vector-effect="non-scaling-stroke" opacity="0.3"/>
                <path d="M 480 50 C 400 50, 350 100, 300 100" fill="none" stroke="#F97316" stroke-width="2" vector-effect="non-scaling-stroke" opacity="0.3"/>
                <path d="M 480 150 C 400 150, 350 100, 300 100" fill="none" stroke="#F97316" stroke-width="2" vector-effect="non-scaling-stroke" opacity="0.3"/>
              </svg>

              <!-- Left side icons -->
              <div class="cro-diagram__col cro-diagram__col--left">
                <div class="cro-diagram__icon-box" title="CrazyEgg"><img src="https://cdn.simpleicons.org/crazyegg/0f6226" alt="CrazyEgg" loading="lazy" /></div>
                <div class="cro-diagram__icon-box" title="Microsoft Clarity"><img src="https://cdn.simpleicons.org/v/clarity?color=blue" alt="Clarity" loading="lazy" /></div>
              </div>

              <!-- Center Button -->
              <div class="cro-diagram__col cro-diagram__col--center">
                <a href="#audit" class="cro-diagram__btn btn w-inline-block weflair-btn" style="border: 1px solid rgba(249, 115, 22, 0.4); padding: 5px;box-shadow: 0 0 40px rgba(249, 115, 22, 0.2);">
                  <div class="btn__bg" style="background:#F97316;"></div>
                  <div class="btn__text">
                    <span class="btn__span" style="color:#FFF;">Get Your CRO Audit</span>
                  </div>
                </a>
              </div>

              <!-- Right side icons -->
              <div class="cro-diagram__col cro-diagram__col--right">
                <div class="cro-diagram__icon-box" title="Google Analytics"><img src="https://cdn.simpleicons.org/googleanalytics/E37400" alt="Google Analytics" loading="lazy" /></div>
                <div class="cro-diagram__icon-box" title="Mixpanel"><img src="https://cdn.simpleicons.org/mixpanel/7856FF" alt="Mixpanel" loading="lazy" /></div>
              </div>
            </div>
          </div>
          
          <style>
          .cro-diagram {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
            margin-top: 2rem;
            width: 100%;
          }
          .cro-diagram__subtitle {
            color: var(--sv-text-muted, #a0a0a0);
            font-size: clamp(1rem, 1.5vw, 1.15rem);
            text-align: center;
            max-width: 600px;
            line-height: 1.5;
            text-wrap: balance;
            margin: 0;
          }
          .cro-diagram__container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 800px;
            padding: 1rem 0;
          }
          .cro-diagram__lines {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
          }
          .cro-diagram__col {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }
          .cro-diagram__icon-box {
            width: 72px;
            height: 72px;
            background: #fff;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            transition: transform 0.2s ease, border-color 0.2s ease;
          }
          .cro-diagram__icon-box img {
            width: 40px;
            height: 40px;
            object-fit: contain;
          }
          .cro-diagram__btn {
            border: 1px solid rgba(249, 115, 22, 0.4) !important;
            padding: 0.8rem 2rem !important;
          }
          .cro-diagram__btn .btn__bg {
            background: #F97316 !important;
          }
          .cro-diagram__btn .btn__text {
            color: #fff !important;
          }
          @media (max-width: 600px) {
            .cro-diagram__container {
              flex-direction: column;
              gap: 3rem;
            }
            .cro-diagram__col {
              flex-direction: row;
              gap: 2rem;
            }
            .cro-diagram__lines { display: none; }
          }
          </style>
\;

  const finalHtml = html.slice(0, targetStart) + newHeroPart + html.slice(targetEnd);
  fs.writeFileSync('services/performance-design.html', finalHtml);
  console.log('Hero and diagram replaced.');
} else {
  console.log('Could not find old hero segment.', targetStart, targetEnd);
}
