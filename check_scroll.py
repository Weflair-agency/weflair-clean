import re
js1 = open('weflair-clean/public/weflair-hero.js', 'r', encoding='utf-8').read()
js2 = open('weflair-clean/public/foundation.js', 'r', encoding='utf-8').read()
js3 = open('weflair-clean/public/services-reveal.js', 'r', encoding='utf-8').read()

print('hero:', re.findall(r"addEventListener\([\s]*['\"`](?:wheel|scroll|touchmove|DOMMouseScroll)['\"`]", js1))
print('found:', re.findall(r"addEventListener\([\s]*['\"`](?:wheel|scroll|touchmove|DOMMouseScroll)['\"`]", js2))
print('serv:', re.findall(r"addEventListener\([\s]*['\"`](?:wheel|scroll|touchmove|DOMMouseScroll)['\"`]", js3))
