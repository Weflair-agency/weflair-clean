import os
import glob

files = glob.glob('weflair-clean/**/*.html', recursive=True)
count = 0

for file_path in files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if '\\"' in content:
            new_content = content.replace('\\"', '"')
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed backslashes in {file_path}")
            count += 1
    except Exception as e:
        pass

print(f"Total files fixed: {count}")
