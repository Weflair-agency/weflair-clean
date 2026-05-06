import os, re

def update_file(filepath, replacements):
    if not os.path.exists(filepath): return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in replacements:
        content = content.replace(old, new)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# 1. Fix sitemap.html title in site-manifest.cjs
update_file("site-manifest.cjs", [
    ('title: "Sitemap | WeFlair",', 'title: "Sitemap & HTML Site Structure | WeFlair",')
])

# 2. Fix case-studies short descriptions
case_studies = [
    ("case-studies/harrier-performance-rebuild.html", 'content="B2B Demand Generation Case Study"', 'content="Read our B2B demand generation case study on the Harrier performance rebuild and how we improved their pipeline."'),
    ("case-studies/molahin-demand-gen.html", 'content="B2B Demand Generation Case Study"', 'content="Discover how Molahin scaled their B2B demand generation, lowered CAC, and improved their marketing-to-sales pipeline."'),
    ("case-studies/notcutts-crm-conversion.html", 'content="CRM Conversion Rate Case Study"', 'content="Read our case study on how Notcutts optimized their CRM conversion rate and tightened their post-capture sales process."'),
    ("case-studies/rct-paid-search-efficiency.html", 'content="Paid Search Efficiency Case Study"', 'content="A deep dive into how RCT increased their paid search efficiency, reduced wasted ad spend, and captured high-intent demand."')
]
for fp, old_desc, new_desc in case_studies:
    if os.path.exists(fp):
        update_file(fp, [(old_desc, new_desc)])
    elif os.path.exists("public/" + fp):
        update_file("public/" + fp, [(old_desc, new_desc)])
    elif os.path.exists("src/" + fp):
        update_file("src/" + fp, [(old_desc, new_desc)])

# 3. Fix long descriptions in blog
def replace_regex(filepath, pattern, replacement):
    if not os.path.exists(filepath): return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(pattern, replacement, content, flags=re.I)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# blogs
replace_regex("blog/114k-revenue-engine.html", r'content="([^"]*114k[^"]*)"', 'content="How we built a $114k revenue engine by rethinking demand generation, outbound systems, and paid media for B2B growth."')
replace_regex("blog/cac-is-lying.html", r'content="([^"]*CAC[^"]*)"', 'content="Why blended CAC is lying to you, and how to measure true acquisition costs across B2B paid media and outbound marketing channels."')
replace_regex("blog/death-of-the-funnel.html", r'<title>.*?</title>', '<title>The Death of the Marketing Funnel | WeFlair Blog</title>')
replace_regex("blog/death-of-the-funnel.html", r'content="([^"]*marketing funnel[^"]*)"', 'content="The traditional marketing funnel is dead. Discover what B2B growth teams should build instead to capture demand and revenue."')
replace_regex("blog/outbound-is-not-dead.html", r'content="([^"]*outbound[^"]*)"', 'content="Outbound is not dead. Learn how to rebuild your outbound sales systems with better data, triggers, and timing for B2B growth."')

# guides
replace_regex("resources/guides/ai-search-visibility-guide.html", r'content="([^"]*visibility[^"]*)"', 'content="A complete guide to AI search visibility, entity clarity, and how to optimize your B2B brand for LLMs and generative search engines."')
replace_regex("resources/guides/b2b-demand-generation-strategy-2026.html", r'content="([^"]*demand generation[^"]*)"', 'content="The definitive B2B demand generation strategy for 2026. Learn how to combine paid media, outbound, and CRO for predictable pipeline."')
replace_regex("resources/guides/ecommerce-retention-audit.html", r'content="([^"]*ecommerce[^"]*)"', 'content="How to run an ecommerce retention audit. Discover strategies to reduce churn, increase LTV, and improve lifecycle marketing."')
replace_regex("resources/guides/google-ads-waste-audit.html", r'content="([^"]*Google Ads[^"]*)"', 'content="Stop wasting ad spend. Use our Google Ads waste audit guide to identify inefficient campaigns, fix tracking, and improve your ROAS."')
replace_regex("resources/guides/outbound-data-stack-clay-apollo.html", r'<title>.*?</title>', '<title>Outbound Data Stack: Clay, Apollo, and CRM Signals | WeFlair</title>')

# 4. Fix H1 tags
update_file("case-studies/index.html", [('<h2 class="rp-title">Case Studies</h2>', '<h1 class="rp-title">Case Studies</h1>')])
update_file("index.html", [('<h2 class="weflair-hero__h1">', '<h1 class="weflair-hero__h1">'), ('</h2>\n            <p class="weflair-hero__p">', '</h1>\n            <p class="weflair-hero__p">')])
update_file("resources/guides.html", [('<h2 class="rp-title" id="resource-pack-title">Guides moved.</h2>', '<h1 class="rp-title" id="resource-pack-title">Guides moved.</h1>')])
update_file("resources/playbook.html", [('<h1 id="resource-pack-title">Built for real GTM work.</h1>', '<h2 id="resource-pack-title">Built for real GTM work.</h2>')])

# 5. Fix handoff cards
for file in os.listdir("public/handoff-cards"):
    if file.endswith(".html"):
        fp = os.path.join("public/handoff-cards", file)
        with open(fp, "r", encoding="utf-8") as f:
            html = f.read()
        title = file.replace("-", " ").replace(".html", "").title()
        url = f"https://weflair.com/handoff-cards/{file}"
        desc = f"WeFlair operational handoff card for {title.lower()} processes."
        
        # Inject standard tags
        if "<title>" not in html:
            html = html.replace("<head>", f"<head>\n  <title>{title} | WeFlair Handoff</title>")
        if "name=\"description\"" not in html:
            html = html.replace("<head>", f"<head>\n  <meta name=\"description\" content=\"{desc}\" />")
        if "favicon" not in html and "icon" not in html:
            html = html.replace("<head>", f"<head>\n  <link rel=\"icon\" href=\"/brand-assets/star-solid.svg\" type=\"image/svg+xml\" />")
        if "<h1" not in html:
            html = re.sub(r'<body[^>]*>', f'\\g<0>\n<h1 style="display:none;">{title}</h1>', html, count=1)
            
        # Inject OG and Twitter and Canonical
        tags = f"""
  <link rel="canonical" href="{url}" />
  <meta property="og:title" content="{title} | WeFlair Handoff" />
  <meta property="og:description" content="{desc}" />
  <meta property="og:url" content="{url}" />
  <meta property="og:image" content="https://weflair.com/brand-assets/office.png" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="WeFlair" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{title} | WeFlair Handoff" />
  <meta name="twitter:description" content="{desc}" />
  <meta name="twitter:image" content="https://weflair.com/brand-assets/office.png" />
  <meta name="twitter:site" content="@weflair" />
  <script type="application/ld+json">{{"@context":"https://schema.org","@type":"WebPage","name":"{title} | WeFlair Handoff","description":"{desc}","url":"{url}"}}</script>
        """
        if "og:title" not in html:
            html = html.replace("</head>", tags + "\n</head>")
            
        # Add google fonts preconnect if missing
        if "fonts.googleapis.com" in html and "preconnect" not in html:
            html = html.replace("<head>", "<head>\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>")

        with open(fp, "w", encoding="utf-8") as f:
            f.write(html)

print("Mass SEO fixes applied!")
