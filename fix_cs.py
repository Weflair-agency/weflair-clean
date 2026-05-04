import os
file1 = 'weflair-clean/case-studies/index.html'

if os.path.exists(file1):
    try:
        with open(file1, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '\\"' in content:
            content = content.replace('\\"', '"')
            with open(file1, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed {file1}")
        else:
            print("No backslashes found in", file1)
            
    except Exception as e:
        print("Failed", e)
