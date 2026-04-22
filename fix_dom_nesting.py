import os

fp = 'weflair-clean/index.html'
with open(fp, 'r', encoding='utf-8') as f:
    html = f.read()

# Fix the broken DOM structure
html = html.replace(
'''<div class="weflair-handoff__frame">
                    
                    </div>
                  <div class="weflair-handoff__media"><iframe src="/handoff-cards/strategy-card.html"''',
'''<div class="weflair-handoff__frame">
                  <div class="weflair-handoff__media"><iframe src="/handoff-cards/strategy-card.html"'''
)

html = html.replace(
'''<div class="weflair-handoff__frame">
                    
                    </div>
                  <div class="weflair-handoff__media"><iframe src="/handoff-cards/design-card.html"''',
'''<div class="weflair-handoff__frame">
                  <div class="weflair-handoff__media"><iframe src="/handoff-cards/design-card.html"'''
)

html = html.replace(
'''<div class="weflair-handoff__frame">
                    
                    </div>
                  <div class="weflair-handoff__media"><iframe src="/handoff-cards/execution-card.html"''',
'''<div class="weflair-handoff__frame">
                  <div class="weflair-handoff__media"><iframe src="/handoff-cards/execution-card.html"'''
)

html = html.replace(
'''<div class="weflair-handoff__frame">
                    
                    </div>
                  <div class="weflair-handoff__media"><iframe src="/handoff-cards/reporting-card.html"''',
'''<div class="weflair-handoff__frame">
                  <div class="weflair-handoff__media"><iframe src="/handoff-cards/reporting-card.html"'''
)

with open(fp, 'w', encoding='utf-8') as f:
    f.write(html)
