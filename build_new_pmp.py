import os

base = r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean'

head_nav = open(os.path.join(base, 'tmp-head-nav.txt'), 'r', encoding='utf-8').read()
hero = open(os.path.join(base, 'tmp-hero.txt'), 'r', encoding='utf-8').read()
partners = open(os.path.join(base, 'tmp-partners.txt'), 'r', encoding='utf-8').read()
audit = open(os.path.join(base, 'tmp-audit.txt'), 'r', encoding='utf-8').read()
services = open(os.path.join(base, 'tmp-services.txt'), 'r', encoding='utf-8').read()
proof = open(os.path.join(base, 'tmp-proof.txt'), 'r', encoding='utf-8').read()
footer = open(os.path.join(base, 'tmp-footer.txt'), 'r', encoding='utf-8').read()

html = f'''{head_nav}

<div class="pm-page" data-theme="light">
  <div class="pm-shell">

<!-- HERO -->
{hero}

<!-- PARTNERS LOGOS -->
{partners}

<!-- SERVICES -->
{services}

<!-- AUDIT -->
{audit}

<!-- PROOF / CASE STUDIES -->
{proof}

  </div>
</div>

<!-- FOOTER / CTA -->
{footer}
'''

with open(os.path.join(base, 'services', 'paid-media-performance.html'), 'w', encoding='utf-8') as f:
    f.write(html)
print("done")
