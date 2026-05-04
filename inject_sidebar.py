import re
paths = [r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\dist\resources\checklists.html', r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\resources\checklists.html']
for p in paths:
    with open(p, 'r', encoding='utf-8') as f:
        h = f.read()
    if 'class="chk-progress-wrap"' not in h:
        sidebar_code = '''
      </div>

      <!-- SIDEBAR -->
      <div class="chk-sidebar">
        <div class="chk-progress-wrap">
          <div class="chk-progress-score"><span id="score-text">0</span>%</div>
          <div class="chk-progress-text">Audit Score</div>
          <div class="chk-progress-bar"><div class="chk-progress-fill" id="progress-fill"></div></div>
        </div>
      </div>

    </section>

  </main>
'''
        # Let's inspect what's really before </main>
        #        <!-- LEAD CAPTURE CTA -->
        #        ...
        #        </div>
        #
        #      </div>
        #    </section>
        #
        #  </main>

        # Replace just the last ending bits
        new_h = re.sub(r'\s*</div>\s*</section>\s*</main>', sidebar_code, h)
        if new_h != h:
            with open(p, 'w', encoding='utf-8') as f:
                f.write(new_h)
            print('Injected in', p)
        else:
            print('Failed to replace in', p)
