import re

with open('weflair-clean/services/go-to-market-systems.html','r',encoding='utf-8') as f:
    h = f.read()

print("CSS Links:")
for l in re.findall(r'<link[^>]+href="([^"]+)"', h):
    if '.css' in l:
        print(l)

print("\nJS Sources:")
for s in re.findall(r'<script[^>]+src="([^"]+)"', h):
    print(s)

