import re

path = r'c:\Users\sam\Desktop\vscode-weflair\weflair-clean\case-studies\render-hub.js'
with open(path, 'r', encoding='utf-8') as f:
    js = f.read()

# Update the cardHtml function
new_cardHtml = '''function cardHtml(item, index) {
  // Use a rotating theme class to match the requested colorful vibe
  const themes = ['wfcs-theme-orange', 'wfcs-theme-pink', 'wfcs-theme-purple', 'wfcs-theme-green', 'wfcs-theme-yellow', 'wfcs-theme-blue'];
  const themeClass = themes[index % themes.length];
  
  // Collect all relevant tags
  let allTags = item.industries.concat(item.services);
  
  return (
    '<article class="wfcs-card wfcs-card--standard ' + themeClass + '">' +
      '<div class="wfcs-card__header">' +
        '<div class="wfcs-card__logo-box">' + logoHtml(item) + "</div>" +
        '<div class="wfcs-card__tags">' +
          allTags.slice(0,4).map(function(tag) { return '<span class="wfcs-card__tag">' + escapeHtml(tag) + '</span>'; }).join('') +
        "</div>" +
      "</div>" +
      '<div class="wfcs-card__body">' +
        '<h3 class="wfcs-card__headline">' + escapeHtml(item.headline) + "</h3>" +
      "</div>" +
      '<div class="wfcs-metric-row">' + metricsHtml(item.metrics, "wfcs-metric") + "</div>" +
      '<div class="wfcs-card__footer">' +
        '<a class="wfcs-card__link" href="/case-studies/' + escapeHtml(item.slug) + '.html">Read Case Study &rarr;</a>' +
      "</div>" +
    "</article>"
  );
}'''
js = re.sub(r'function cardHtml\(item,\s*index\)\s*\{.*?\n\}', new_cardHtml, js, flags=re.DOTALL)

# Empty renderFeatured logic so it does nothing (since we removed the div anyway, it's safe)
js = re.sub(r'function renderFeatured\(\)\s*\{.*?\}', 'function renderFeatured() { return; }', js, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(js)
