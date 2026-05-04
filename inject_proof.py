import re

html = open(r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\services\paid-media-performance.html', 'r', encoding='utf-8').read()
backup = open(r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\services\performance-design-backup.html', 'r', encoding='utf-8').read()

# extract style
style_mo = re.search(r'<style id="weflair-proof-switcher-css">(.*?)</style>', backup, re.DOTALL)
if style_mo:
    style_block = f'<style id="weflair-proof-switcher-css">{style_mo.group(1)}</style>'
    # inject just before </head>
    if '<style id="weflair-proof-switcher-css">' not in html:
        html = html.replace('</head>', style_block + '\n</head>')

# extract proof html properly with matching section tag counting
mo = re.search(r'<section[^>]*id="proof"[^>]*>', backup, re.DOTALL)
start_idx = mo.start()

i = start_idx
count = 0
end_section_idx = -1

while i < len(backup):
    if backup.startswith('<section', i):
        count += 1
    elif backup.startswith('</section>', i):
        count -= 1
        if count == 0:
            end_section_idx = i + len('</section>')
            break
    i += 1

script_idx = backup.find('<script>', end_section_idx)
script_end = backup.find('</script>', script_idx) + len('</script>')
if script_idx < end_section_idx + 100:
    end_idx = script_end
else:
    end_idx = end_section_idx

proof_chunk = backup[start_idx:end_idx]

# replace target html
mo_target = re.search(r'<section[^>]*id="proof"[^>]*>.*?</script>', html, re.DOTALL)
if mo_target:
    html = html[:mo_target.start()] + proof_chunk + html[mo_target.end():]
else:
    # maybe script wasn't correctly matched ?
    mo2 = re.search(r'<section[^>]*id="proof"[^>]*>', html, re.DOTALL)
    if mo2:
        itarget = mo2.start()
        # Find closing in HTML similarly
        count = 0
        end_target_section = -1
        j = itarget
        while j < len(html):
            if html.startswith('<section', j):
                count += 1
            elif html.startswith('</section>', j):
                count -= 1
                if count == 0:
                    end_target_section = j + len('</section>')
                    break
            j += 1
        # also match potential trailing script
        t_script_idx = html.find('<script>', end_target_section)
        if t_script_idx < end_target_section + 100 and t_script_idx != -1:
            t_script_end = html.find('</script>', t_script_idx) + len('</script>')
            html = html[:itarget] + proof_chunk + html[t_script_end:]
        else:
            html = html[:itarget] + proof_chunk + html[end_target_section:]

with open(r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\services\paid-media-performance.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("INJECTED SUCCESSFULLY")

