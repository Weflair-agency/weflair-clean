import fs

with open("C:/Users/sam/Desktop/vscode-weflair/weflair-clean/services/performance-design.html", "r", encoding="utf-8") as f:
    text = f.read()

# Let's count some elements
print(text.count("<section"))
