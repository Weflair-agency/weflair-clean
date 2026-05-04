import re

def fix_broken_css(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Look for broken floating CSS rules that I created.
    # The original rules were:
    # .b2b-capability-card summary {
    #   display: flex;
    #   justify-content: space-between;
    #   align-items: center;
    #   padding: 1.5rem 2rem;
    #   cursor: pointer;
    #   list-style: none; /* Remove default triangle */
    #   font-size: 1.25rem;
    #   font-weight: 500;
    #   outline: none;
    # }
    # So what is left is probably:
    # 1. "cursor: pointer;"
    # 2. "list-style: none;"
    # 3. "font-size: 1.25rem;"
    # 4. "font-weight: 500;"
    # 5. "outline: none;"
    # 
    # For saas-capability-card summary, it was:
    # padding: 1.5rem 2rem;
    # font-size: 1.25rem;
    # font-weight: 500;
    # cursor: pointer;
    # display: flex;
    # justify-content: space-between;
    # align-items: center;
    # list-style: none;
    #
    # Because my regex replaced EVERYTHING from the class name up to the FIRST padding declaration. 
    # Let's just find `cursor: pointer;\s*list-style: none;` floating naked without a block and nuke the surrounding block.
    # Actually, a better approach is to revert the file to before I broke it... but I don't have backups of expertise pages.
    # Wait, `diff.py` or `.bundle` or just `git`?
    # I can just regex match the broken fragments and delete them.
    
    # Broken summary:
    # It might start with something like `        cursor: pointer;\n        list-style: none;` without a selector.
    # Let's search for any occurrence of `cursor: pointer;\n        list-style: none; /* Remove default triangle */\n        font-size: 1.25rem;\n        font-weight: 500;\n        outline: none;\n      \}` where it is NOT preceded by `{` on the lines before.
    
    # Let's just replace the exact broken text fragments with nothing.
    fragment1 = r'\s*cursor:\s*pointer;\s*list-style:\s*none;\s*/\*\s*Remove default triangle\s*\*/\s*font-size:\s*1\.25rem;\s*font-weight:\s*500;\s*outline:\s*none;\s*\}'
    html = re.sub(fragment1, '', html, flags=re.IGNORECASE)

    fragment2 = r'\s*color:\s*rgba\(255,255,255,0\.7\);\s*line-height:\s*1\.6;\s*\}'
    html = re.sub(fragment2, '', html, flags=re.IGNORECASE)

    fragment3 = r'\s*font-size:\s*1\.25rem;\s*font-weight:\s*500;\s*cursor:\s*pointer;\s*display:\s*flex;\s*justify-content:\s*space-between;\s*align-items:\s*center;\s*list-style:\s*none;\s*\}'
    html = re.sub(fragment3, '', html, flags=re.IGNORECASE)

    fragment4 = r'\s*color:\s*rgba\(255,\s*255,\s*255,\s*0\.6\);\s*line-height:\s*1\.6;\s*animation:\s*saasFadeIn\s*0\.3s\s*ease\s*forwards;\s*\}'
    html = re.sub(fragment4, '', html, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Cleaned {filepath}")

for p in ['expertise/b2b-services.html', 'dist/expertise/b2b-services.html', 'expertise/b2b-saas.html', 'dist/expertise/b2b-saas.html']:
    try:
        fix_broken_css(p)
    except:
        pass
