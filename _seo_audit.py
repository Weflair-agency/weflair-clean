"""Full SEO audit of the dist folder — check everything Google cares about."""
import os, re, json

DIST = "dist"

def read(path):
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        return f.read()

pages = []
for dirpath, dirs, files in os.walk(DIST):
    dirs[:] = [d for d in dirs if d not in ("node_modules", "brand-assets", "images")]
    for f in files:
        if f.endswith(".html"):
            pages.append(os.path.relpath(os.path.join(dirpath, f), DIST))

print(f"=== SEO AUDIT: {len(pages)} pages ===\n")

# Track issues
issues = {}
def add_issue(page, issue):
    issues.setdefault(page, []).append(issue)

for p in sorted(pages):
    fp = os.path.join(DIST, p)
    html = read(fp)
    
    # 1. Title tag
    title_match = re.search(r"<title>(.*?)</title>", html, re.I|re.S)
    title = title_match.group(1).strip() if title_match else ""
    if not title:
        add_issue(p, "NO TITLE")
    elif len(title) > 70:
        add_issue(p, f"TITLE TOO LONG ({len(title)} chars): {title[:80]}...")
    elif len(title) < 20:
        add_issue(p, f"TITLE TOO SHORT ({len(title)} chars): {title}")
    
    # 2. Meta description
    desc_match = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=(["\'])(.*?)\1', html, re.I | re.S)
    if not desc_match:
        desc_match = re.search(r'<meta[^>]*content=(["\'])(.*?)\1[^>]*name=["\']description["\']', html, re.I | re.S)
    desc = desc_match.group(2).strip() if desc_match else ""
    if not desc:
        add_issue(p, "NO META DESCRIPTION")
    elif len(desc) > 160:
        add_issue(p, f"DESCRIPTION TOO LONG ({len(desc)} chars)")
    elif len(desc) < 50:
        add_issue(p, f"DESCRIPTION TOO SHORT ({len(desc)} chars)")
    
    # 3. Canonical
    if 'rel="canonical"' not in html and "rel='canonical'" not in html:
        add_issue(p, "NO CANONICAL TAG")
    
    # 4. OG tags
    if 'og:title' not in html:
        add_issue(p, "NO og:title")
    if 'og:description' not in html:
        add_issue(p, "NO og:description")
    if 'og:url' not in html:
        add_issue(p, "NO og:url")
    if 'og:image' not in html:
        add_issue(p, "NO og:image")
    if 'og:type' not in html:
        add_issue(p, "NO og:type")
    
    # 5. Twitter card
    if 'twitter:card' not in html:
        add_issue(p, "NO twitter:card")
    if 'twitter:title' not in html:
        add_issue(p, "NO twitter:title")
    
    # 6. Schema/JSON-LD
    if 'application/ld+json' not in html:
        add_issue(p, "NO SCHEMA MARKUP (JSON-LD)")
    
    # 7. Viewport
    if 'viewport' not in html:
        add_issue(p, "NO VIEWPORT META")
    
    # 8. Lang attribute
    if 'lang="en"' not in html and "lang='en'" not in html:
        add_issue(p, "NO lang='en' ON <html>")
    
    # 9. H1 tag
    h1_matches = re.findall(r"<h1[^>]*>", html, re.I)
    if len(h1_matches) == 0:
        add_issue(p, "NO H1 TAG")
    elif len(h1_matches) > 1:
        add_issue(p, f"MULTIPLE H1 TAGS ({len(h1_matches)})")
    
    # 10. Images without alt
    imgs_no_alt = re.findall(r'<img(?![^>]*alt=)[^>]*>', html, re.I)
    if imgs_no_alt:
        add_issue(p, f"{len(imgs_no_alt)} IMAGES WITHOUT ALT TEXT")
    
    # 11. Favicon
    if 'favicon' not in html and 'icon' not in html.split('</head>')[0] if '</head>' in html else True:
        add_issue(p, "NO FAVICON LINK")
    
    # 12. Charset
    if 'charset' not in html.lower():
        add_issue(p, "NO CHARSET DECLARATION")
    
    # 13. DOCTYPE
    if not html.strip().lower().startswith('<!doctype'):
        add_issue(p, "NO DOCTYPE")
    
    # 14. Performance hints (preconnect, dns-prefetch for Google Fonts etc)
    if 'fonts.googleapis.com' in html and 'preconnect' not in html:
        add_issue(p, "GOOGLE FONTS WITHOUT PRECONNECT")
    
    # 15. Render-blocking CSS/JS
    # Check for CSS in head without media or async
    
# Print results
print("=== PAGES WITH ISSUES ===\n")
clean_count = 0
for p in sorted(pages):
    if p in issues:
        print(f"  !! {p}")
        for i in issues[p]:
            print(f"     - {i}")
        print()
    else:
        clean_count += 1

print(f"\n=== CLEAN PAGES: {clean_count}/{len(pages)} ===")

# Summary by issue type
print("\n=== ISSUE SUMMARY ===")
issue_counts = {}
for p, issue_list in issues.items():
    for i in issue_list:
        key = i.split("(")[0].strip().split(":")[0].strip()
        issue_counts.setdefault(key, 0)
        issue_counts[key] += 1

for issue, count in sorted(issue_counts.items(), key=lambda x: -x[1]):
    print(f"  {count:3d}x  {issue}")
