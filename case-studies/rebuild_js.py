import re

with open("c:/Users/sam/Desktop/vscode-weflair/weflair-clean/case-studies/render-hub.js", "r", encoding="utf-8") as f:
    js = f.read()

# Update the selectors
js = js.replace('const sizeSelect = document.querySelector("[data-case-size-select]");', 'const sizeSelect = document.querySelector("[data-case-size-buttons]");')
js = js.replace('const serviceSelect = document.querySelector("[data-case-service-select]");', 'const serviceSelect = document.querySelector("[data-case-service-buttons]");')

# Update buttonHtml to take group parameter so we can reuse for sizes/services
button_html_new = r"""function buttonHtml(value, activeValue, groupName) {
  const activeClass = value === activeValue ? " is-active" : "";

  return (
    '<button type="button" class="wfcs-chip' +
    activeClass +
    '" data-filter-group="' + escapeHtml(groupName) + '" data-filter-value="' +
    escapeHtml(value) +
    '">' +
    escapeHtml(value) +
    "</button>"
  );
}"""

js = re.sub(r'function buttonHtml\(value, activeValue\) \{.*?\n\}', button_html_new, js, flags=re.DOTALL)

# Update renderFilters to use buttonHtml
render_filters_new = r"""function renderFilters() {
  if (industryRail) {
    industryRail.innerHTML = INDUSTRY_FILTERS.map(function (value) {
      return buttonHtml(value, state.industry, 'industry');
    }).join("");
  }

  if (sizeSelect) {
    sizeSelect.innerHTML = COMPANY_SIZE_FILTERS.map(function (value) {
      return buttonHtml(value, state.size, 'size');
    }).join("");
  }

  if (serviceSelect) {
    serviceSelect.innerHTML = SERVICE_FILTERS.map(function (value) {
      return buttonHtml(value, state.service, 'service');
    }).join("");
  }
}"""
js = re.sub(r'function renderFilters\(\) \{.*?\n\}', render_filters_new, js, flags=re.DOTALL)

# Remove the old sizeSelect/serviceSelect input handling in bindEvents
bind_events_new = r"""function bindEvents() {
  document.querySelectorAll("[data-filter-group]").forEach(function (button) {
    button.onclick = function () {
      setFilter(button.dataset.filterGroup, button.dataset.filterValue);
    };
  });

  if (resetButton) {
    resetButton.onclick = resetFilters;
  }
}"""
js = re.sub(r'function bindEvents\(\) \{.*?\n\}', bind_events_new, js, flags=re.DOTALL)


# Update featuredHtml
featured_html_new = r"""function featuredHtml(item) {
  return (
    '<div class="wfcs-featured-banner">' +
      '<div class="wfcs-featured-banner__content">' +
        '<div class="wfcs-featured-banner__badge">Featured Case Study</div>' +
        '<div class="wfcs-card__logo-box wfcs-featured-banner__logo">' + logoHtml(item) + '</div>' +
        '<div class="wfcs-card__meta">' +
          '<span class="wfcs-card__meta-pill">' + escapeHtml(item.industries.join(" / ")) + '</span>' +
        '</div>' +
        '<h2 class="wfcs-featured-banner__title">' + escapeHtml(item.name) + '</h2>' +
        '<p class="wfcs-featured-banner__headline">' + escapeHtml(item.headline) + '</p>' +
        '<p class="wfcs-featured-banner__summary">' + escapeHtml(item.summary) + '</p>' +
        '<div class="wfcs-featured-banner__metrics">' +
          metricsHtml(item.metrics, "wfcs-featured-banner__metric") +
        '</div>' +
        '<div class="wfcs-featured-banner__footer">' +
          '<span class="wfcs-card__vertical">' + escapeHtml(item.vertical) + '</span>' +
          '<a class="btn weflair-btn weflair-btn--primary" href="/case-studies/' + escapeHtml(item.slug) + '.html">' +
            '<div class="btn__bg"></div><div class="btn__text"><span class="btn__span">Read Full Case Study</span></div>' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}"""

js = re.sub(r'function featuredHtml\(item\) \{.*?\n\}', featured_html_new, js, flags=re.DOTALL)


# Update cardHtml for layout variation
card_html_new = r"""function cardHtml(item, index) {
  // Make every 3rd card span full width for dynamic masonry aesthetic
  const isLarge = index % 3 === 2; 
  const layoutClass = isLarge ? " wfcs-card--huge" : " wfcs-card--standard";

  return (
    '<article class="wfcs-card' +
      layoutClass +
      '">' +
      '<div class="wfcs-card__header">' +
        '<div class="wfcs-card__logo-box">' + logoHtml(item) + "</div>" +
        '<div class="wfcs-card__meta">' +
          '<span class="wfcs-card__meta-pill">' + escapeHtml(item.companySize) + "</span>" +
          '<span class="wfcs-card__meta-pill">' + escapeHtml(item.companyType) + "</span>" +
        "</div>" +
      "</div>" +
      '<div class="wfcs-card__body">' +
        '<p class="wfcs-card__eyebrow">' + escapeHtml(item.industries.join(" / ")) + "</p>" +
        '<h3 class="wfcs-card__company">' + escapeHtml(item.name) + "</h3>" +
        '<p class="wfcs-card__headline">' + escapeHtml(item.headline) + "</p>" +
        '<p class="wfcs-card__summary">' + escapeHtml(item.summary) + "</p>" +
        '<div class="wfcs-card__services">' + serviceTagsHtml(item.services) + "</div>" +
      "</div>" +
      '<div class="wfcs-metric-row">' + metricsHtml(item.metrics, "wfcs-metric") + "</div>" +
      '<div class="wfcs-card__footer">' +
        '<span class="wfcs-card__vertical">' + escapeHtml(item.vertical) + "</span>" +
        '<a class="wfcs-card__link" href="/case-studies/' + escapeHtml(item.slug) + '.html">Read case study</a>' +
      "</div>" +
    "</article>"
  );
}"""
js = re.sub(r'function cardHtml\(item, index\) \{.*?\n\}', card_html_new, js, flags=re.DOTALL)


with open("c:/Users/sam/Desktop/vscode-weflair/weflair-clean/case-studies/render-hub.js", "w", encoding="utf-8") as f:
    f.write(js)

print("JS replaced successfully!")
