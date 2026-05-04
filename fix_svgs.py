html = open('index.html', encoding='utf-8').read()
start_idx = html.find('<section class=\"wf-home-why\"')
end_idx = html.find('</section>', start_idx) + 10
if start_idx != -1 and end_idx > 10:
    section = html[start_idx:end_idx]
    
    # Replace blue colors with green
    section = section.replace('#4c5bb0', '#22c55e')
    section = section.replace('#4C5BB1', '#22c55e')
    section = section.replace('#304a79', '#15803d')
    section = section.replace('#304A79', '#15803d')
    section = section.replace('#3c4b78', '#166534')
    section = section.replace('#3C4B78', '#166534')
    
    # Button backgrounds
    section = section.replace('background: #4C5BB1;', 'background: #22c55e;')
    section = section.replace('background: #4c5bb0;', 'background: #22c55e;')
    section = section.replace('background-color: #4C5BB1;', 'background-color: #22c55e;')
    section = section.replace('background: #202c4b;', 'background: rgba(34, 197, 94, 0.1);')
    
    # Play buttons from blue text
    section = section.replace('color: #4c5bb0;', 'color: #22c55e;')
    
    # Fix the actual 'Get the Blueprint' CTA buttons.
    section = section.replace('class=\"wf-home-why-story-cta__btn\" style=\"background: #4C5BB1;\"', 'class=\"wf-home-why-story-cta__btn\" style=\"background: #22c55e;\"')

    html = html[:start_idx] + section + html[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f: f.write(html)
    with open('dist/index.html', 'w', encoding='utf-8') as f: f.write(html)
    print('Updated Why WeFlair SVGs to Green #22C55E')
