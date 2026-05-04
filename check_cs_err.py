with open('weflair-clean/case-studies/index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()
for i in range(40, 48):
    print(f"{i+1}: {lines[i].strip()}")
