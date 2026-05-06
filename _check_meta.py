import re, os

cases = [
    "case-studies/harrier-performance-rebuild.html",
    "case-studies/molahin-demand-gen.html", 
    "case-studies/notcutts-crm-conversion.html",
    "case-studies/rct-paid-search-efficiency.html"
]
for c in cases:
    with open(c, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()
    m = re.search(r'<meta[^>]*name="description"[^>]*content="([^"]*)"', html, re.I)
    if not m:
        m = re.search(r'<meta[^>]*content="([^"]*)"[^>]*name="description"', html, re.I)
    desc = m.group(1) if m else "NONE"
    t = re.search(r"<title>(.*?)</title>", html, re.I|re.S)
    title = t.group(1).strip() if t else "NONE"
    print(f"{c}")
    print(f"  Title: {title}")
    print(f"  Desc ({len(desc)} chars): {desc}")

# Also check blog descriptions
print("\n=== BLOG DESCRIPTIONS ===")
for f in sorted(os.listdir("blog")):
    if f.endswith(".html"):
        fp = os.path.join("blog", f)
        with open(fp, "r", encoding="utf-8", errors="ignore") as fh:
            html = fh.read()
        m = re.search(r'<meta[^>]*name="description"[^>]*content="([^"]*)"', html, re.I)
        if not m:
            m = re.search(r'<meta[^>]*content="([^"]*)"[^>]*name="description"', html, re.I)
        desc = m.group(1) if m else "NONE"
        t = re.search(r"<title>(.*?)</title>", html, re.I|re.S)
        title = t.group(1).strip() if t else "NONE"
        print(f"\n{fp}")
        print(f"  Title ({len(title)} chars): {title}")
        print(f"  Desc ({len(desc)} chars): {desc}")
