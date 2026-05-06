import re
html = open('index.html', encoding='utf-8').read()
match = re.search(r'<section.*?id=.proof..*?>.*?</section>', html, re.DOTALL)
if match:
    open('extracted_proof.html', 'w', encoding='utf-8').write(match.group(0))
    print('Saved to extracted_proof.html')
else:
    print('Not found')
