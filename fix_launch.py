# -*- coding: utf-8 -*-
import re

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Replace active ads numbers
text = text.replace('8 active ads', '12 active ads')
text = text.replace('4 active ads', '6 active ads')

# 2. Adjust CSS
# .process-launch__card width
text = re.sub(
    r'\.process-launch__card\s*\{\s*width:\s*min\(calc\(100% - 7\.35rem\),\s*8\.85rem\);\s*padding:\s*\.8rem\s*\.82rem;\s*\}',
    r'.process-launch__card {\n        width: min(calc(100% - 5.5rem), 10.5rem);\n        padding: .8rem .6rem;\n      }',
    text
)

# .process-launch__metric width and padding
text = re.sub(
    r'\.process-launch__metric\s*\{\s*width:\s*4rem;\s*padding:\s*\.82rem\s*\.42rem;\s*text-align:\s*center;\s*\}',
    r'.process-launch__metric {\n        width: 3.6rem;\n        padding: .82rem .3rem;\n        text-align: center;\n      }',
    text
)

# metrics right position - .process-launch__metric--one
text = re.sub(
    r'\.process-launch__metric--one\s*\{\s*right:\s*1rem;\s*top:\s*2\.55rem;\s*\}',
    r'.process-launch__metric--one {\n        right: .7rem;\n        top: 2.55rem;\n      }',
    text
)

# metrics right position - .process-launch__metric--two
text = re.sub(
    r'\.process-launch__metric--two\s*\{\s*right:\s*1rem;\s*top:\s*6\.85rem;\s*\}',
    r'.process-launch__metric--two {\n        right: .7rem;\n        top: 6.85rem;\n      }',
    text
)

with open('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print('Done')
