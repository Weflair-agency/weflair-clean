import sys
import re

index_path = r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\index.html'
gtm_path = r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\services\go-to-market-systems.html'

def get_lines(filename, start, end):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    return ''.join(lines[start-1:end])

proof_section = get_lines(index_path, 12675, 13018)
footer_section = get_lines(index_path, 14011, 14514)

with open(gtm_path, 'r', encoding='utf-8') as f:
    gtm_content = f.read()

# Replace the eyebrow
eyebrow_pattern = r'<div class="eyebrow" style="margin: 0 auto 24px[^>]+>\s*<!-- Single Icon.*?</div>'
new_eyebrow = '''<div class="eyebrow" style="margin-bottom: 24px; padding: 4px 12px; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 20px; display: inline-block;">
          <span style="color: #22C55E; font-size: 0.85rem; font-weight: 600; letter-spacing: 1px;">GO-TO-MARKET SYSTEMS</span>
        </div>'''
gtm_content = re.sub(eyebrow_pattern, lambda _: new_eyebrow, gtm_content, flags=re.DOTALL)

# Replace the proof section
proof_pattern = r'<!-- SECTION 8: PROOF \(CLONED EXACTLY\) -->.*?</section>'
gtm_content = re.sub(proof_pattern, lambda _: '<!-- SECTION 8: PROOF -->\n    ' + proof_section, gtm_content, flags=re.DOTALL)

# Replace the footer
footer_pattern = r'<!-- FOOTER AND NEW CTA.*'
gtm_content = re.sub(footer_pattern, lambda _: '<!-- FOOTER -->\n' + footer_section, gtm_content, flags=re.DOTALL)

with open(gtm_path, 'w', encoding='utf-8') as f:
    f.write(gtm_content)

print('Done!')
