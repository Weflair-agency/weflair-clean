import re

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update CSS
text = re.sub(
    r'\.why-data-chart\s*\{\s*position:\s*absolute;\s*left:\s*1\.4rem;\s*bottom:\s*1\.4rem;\s*width:\s*68%;\s*min-height:\s*17\.5rem;\s*padding:\s*1\.3rem\s*1\.2rem\s*1\.1rem;\s*border-radius:\s*1\.2rem;\s*background:\s*rgba\(255,255,255,\.92\);\s*border:\s*1px\s*solid\s*rgba\(44,\s*106,\s*50,\s*\.14\);\s*box-shadow:\s*0\s*22px\s*36px\s*rgba\(88,\s*146,\s*75,\s*\.16\)\s*\}',
    r'''\.why-data-chart {
          position: absolute;
          left: 1.4rem;
          bottom: 1.4rem;
          width: 58%;
          min-height: 17.5rem;
          padding: 1.5rem;
          border-radius: 1.2rem;
          background: #111411;
          border: 1px solid rgba(62, 255, 104, 0.12);
          box-shadow: 0 22px 36px rgba(0, 0, 0, 0.4)
        }''', text
)

text = re.sub(
    r'\.why-data-chart h4,\s*\.why-data-mini h4\s*\{\s*margin:\s*0;\s*font-size:\s*1\.05rem;\s*line-height:\s*1\.15;\s*letter-spacing:\s*-\.03em;\s*color:\s*rgba\(28,\s*42,\s*35,\s*\.84\)\s*\}',
    r'''\.why-data-chart h4,
        \.why-data-mini h4 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -.03em;
          color: #f6f3ee
        }''', text
)

text = re.sub(
    r'\.why-data-chart p,\s*\.why-data-mini p\s*\{\s*margin:\s*\.18rem\s*0\s*0;\s*font-size:\s*\.82rem;\s*line-height:\s*1\.4;\s*color:\s*rgba\(28,\s*42,\s*35,\s*\.52\)\s*\}',
    r'''\.why-data-chart p,
        \.why-data-mini p {
          margin: .25rem 0 0;
          font-size: .85rem;
          line-height: 1.4;
          color: rgba(246, 243, 238, .6)
        }''', text
)

text = re.sub(
    r'\.why-data-mini\s*\{\s*position:\s*absolute;\s*padding:\s*1rem\s*1\.05rem;\s*border-radius:\s*1rem;\s*background:\s*rgba\(255,255,255,\.95\);\s*border:\s*1px\s*solid\s*rgba\(44,106,50,\.12\);\s*box-shadow:\s*0\s*18px\s*28px\s*rgba\(88,146,75,\.16\)\s*\}',
    r'''\.why-data-mini {
          position: absolute;
          padding: 1.25rem;
          border-radius: 1rem;
          background: #181d18;
          border: 1px solid rgba(62, 255, 104, 0.12);
          box-shadow: 0 18px 28px rgba(0, 0, 0, 0.4)
        }''', text
)

text = re.sub(
    r'\.why-data-mini--top\s*\{\s*right:\s*1\.7rem;\s*top:\s*2\.15rem;\s*width:\s*32%\s*\}',
    r'''\.why-data-mini--top {
          right: 1.4rem;
          top: 1.4rem;
          width: 40%
        }''', text
)

text = re.sub(
    r'\.why-data-mini--bottom\s*\{\s*right:\s*1\.7rem;\s*bottom:\s*1\.9rem;\s*width:\s*34%;\s*background:\s*rgba\(50,\s*72,\s*53,\s*\.9\);\s*border-color:\s*rgba\(255,255,255,\.08\);\s*box-shadow:\s*0\s*18px\s*30px\s*rgba\(38,\s*58,\s*40,\s*\.18\)\s*\}',
    r'''\.why-data-mini--bottom {
          right: 1.4rem;
          bottom: 1.4rem;
          width: 38%;
          background: #1b231b;
          border-color: rgba(62, 255, 104, 0.12);
          box-shadow: 0 18px 30px rgba(0, 0, 0, 0.4)
        }''', text
)

text = re.sub(
    r'\.why-data-mini--bottom\s*h4,\s*\.why-data-mini--bottom\s*p\s*\{\s*color:\s*rgba\(247,\s*250,\s*243,\s*\.9\)\s*\}',
    r'''\.why-data-mini--bottom h4,
        \.why-data-mini--bottom p { /* Removed overrides since base is dark now */ }''', text
)
text = re.sub(
    r'\.why-data-mini--bottom\s*p\s*\{\s*color:\s*rgba\(247,250,243,\.52\)\s*\}',
    r''' ''', text
)

text = re.sub(
    r'\.why-data-chip\s*\{\s*position:\s*absolute;\s*right:\s*1\.25rem;\s*top:\s*4\.65rem;\s*display:\s*inline-flex;\s*align-items:\s*center;\s*gap:\s*\.5rem;\s*padding:\s*\.44rem\s*\.72rem;\s*border-radius:\s*\.85rem;\s*background:\s*rgba\(54,\s*92,\s*55,\s*\.9\);\s*color:\s*#eff8e5;\s*font-size:\s*\.8rem;\s*font-weight:\s*700;\s*box-shadow:\s*0\s*10px\s*18px\s*rgba\(52,\s*92,\s*55,\s*\.22\)\s*\}',
    r'''\.why-data-chip {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .35rem .6rem;
          border-radius: .5rem;
          background: rgba(62, 255, 104, 0.12);
          color: #3eff68;
          font-size: .8rem;
          font-weight: 700;
          margin-top: 0.75rem;
        }''', text
)

# 2. Update HTML
# Remove the old chip from outside the mini card
text = text.replace('<span class="why-data-chip">+33% modeled efficiency</span>', '')

# Insert the chip effectively inside the mini card, under the text, before the SVG.
old_mini_top = '''                    <div class="why-data-mini why-data-mini--top">
                      <h4>Q2 revenue targets</h4>
                      <p>Scored up</p>
                      <svg viewBox="0 0 120 58" fill="none" aria-hidden="true">'''

new_mini_top = '''                    <div class="why-data-mini why-data-mini--top">
                      <h4>Q2 revenue targets</h4>
                      <!-- Replaced 'Scored up' text with the efficiency chip directly in the flow -->
                      <span class="why-data-chip">+33% modeled efficiency</span>
                      <svg viewBox="0 0 120 58" fill="none" aria-hidden="true" style="margin-top: 1rem; width: 100%;">'''

text = text.replace(old_mini_top, new_mini_top)

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print('Replaced')
