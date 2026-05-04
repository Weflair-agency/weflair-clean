import os

path = 'weflair-clean/services/go-to-market-systems.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Close unclosed section if it exists
if html.count('<section') > html.count('</section>'):
    if '      </div>\n    <!-- SECTION 11: FINAL CTA -->' in html:
        html = html.replace('      </div>\n    <!-- SECTION 11: FINAL CTA -->', '      </div>\n    </section>\n    <!-- SECTION 11: FINAL CTA -->')

# 2. Add an un-blockable scroll override
if 'force-scroll-override' not in html:
    force_css = """
    <!-- FORCE SCROLL FIX -->
    <style id="force-scroll-override">
        html, body {
            overflow-y: auto !important;
            height: auto !important;
            min-height: 100vh !important;
            position: relative !important;
        }
        #main, .pdx-shell, .main {
            overflow-y: visible !important;
            height: auto !important;
            position: relative !important;
        }
        /* Defeat any rogue overlay */
        .nav-fade[data-navigation-toggle="close"] {
            pointer-events: none !important;
        }
    </style>
    </head>
"""
    html = html.replace('</head>', force_css)

with open(path, 'w', encoding='utf-8') as f:
    f.write(html)
print("Applied force scroll fix and closed sections successfully.")
