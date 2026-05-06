import re

with open('c:/Users/sam/Desktop/vscode-weflair/weflair-clean/services/go-to-market-systems.html', 'r', encoding='utf-8') as f:
    content = f.read()

with open('c:/Users/sam/Desktop/vscode-weflair/weflair-clean/tmp_proof_script.html', 'r', encoding='utf-8') as f:
    proof_content = f.read()

# Replace Proof Section
# Find <section class="weflair-section weflair-proof weflair-proof--legacy" id="proof-legacy"> ... </section>
proof_pattern = re.compile(r'<section class="weflair-section weflair-proof weflair-proof--legacy" id="proof-legacy">.*?</section>', re.DOTALL)
content = proof_pattern.sub(proof_content.replace('\\', '\\\\'), content, count=1)

# Append buttons to GTM pillars
# We'll just replace the specific end tags for each card.

button_html = '''
              <div style="margin-top: 2.5rem;">
                <a data-hover="" data-btn-theme="primary" href="#audit" class="btn w-inline-block weflair-btn weflair-btn--primary">
                  <div class="btn__bg"></div>
                  <div class="btn__text"><span class="btn__span" style="color:#0A0A0F; font-weight:700;">Apply for a Pilot</span></div>
                  <div class="arrow">
                    <div class="arrow__bg"></div>
                    <div class="arrow__box is--duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg">
                        <path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
                        <path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
                        <path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
                      </svg></div>
                    <div class="arrow__box"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="arrow__svg">
                        <path d="M11.999 18.334L11.999 5.00071" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
                        <path d="M5.99902 13.0007L11.999 19.0007" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
                        <path d="M17.9995 13L11.9995 19" stroke="currentColor" stroke-width="0.125em" stroke-linecap="square" stroke-linejoin="round"></path>
                      </svg></div>
                  </div>
                </a>
              </div>
'''

target_1 = r'''                <li style="display: flex; align-items: flex-start; gap: 12px; color: rgba(246,243,238,0.8);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="2" style="margin-top:2px"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Data Hygiene:</strong> Enrichment waterfalls via Apollo, Clay, and Clearbit to guarantee data integrity.</span>
                </li>
              </ul>
            </div>
          </div>'''

replacement_1 = target_1.replace('</ul>\n            </div>\n          </div>', '</ul>' + button_html + '            </div>\n          </div>')

target_2 = r'''                <li style="display: flex; align-items: flex-start; gap: 12px; color: rgba(246,243,238,0.8);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EFF68" stroke-width="2" style="margin-top:2px"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Multi-Channel:</strong> Coordinated sequences across email, LinkedIn, and cold calling.</span>
                </li>
              </ul>
            </div>
          </div>'''

replacement_2 = target_2.replace('</ul>\n            </div>\n          </div>', '</ul>' + button_html + '            </div>\n          </div>')

content = content.replace(target_1, replacement_1)
content = content.replace(target_2, replacement_2)

with open('c:/Users/sam/Desktop/vscode-weflair/weflair-clean/services/go-to-market-systems.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
