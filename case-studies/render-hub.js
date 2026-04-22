import {
  CASE_STUDIES,
  COMPANY_SIZE_FILTERS,
  INDUSTRY_FILTERS,
  SERVICE_FILTERS
} from "/case-studies/data.js";

const FEATURED_SLUG = "harrier-performance-rebuild";

const state = {
  industry: "All",
  size: "All",
  service: "All"
};

const featuredRoot = document.querySelector("[data-case-featured]");
const industryRail = document.querySelector("[data-case-industry-buttons]");
const sizeSelect = document.querySelector("[data-case-size-buttons]");
const serviceSelect = document.querySelector("[data-case-service-buttons]");
const resetButton = document.querySelector("[data-case-reset]");
const grid = document.querySelector("[data-case-grid]");
const count = document.querySelector("[data-case-count]");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buttonHtml(value, activeValue, groupName) {
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
}

function optionHtml(value, activeValue) {
  const selected = value === activeValue ? ' selected="selected"' : "";
  return (
    '<option value="' +
    escapeHtml(value) +
    '"' +
    selected +
    ">" +
    escapeHtml(value) +
    "</option>"
  );
}

function logoHtml(item) {
  if (item.logo) {
    return (
      '<img src="' +
      escapeHtml(item.logo) +
      '" alt="' +
      escapeHtml(item.logoAlt || item.name + " logo") +
      '" loading="lazy" decoding="async">'
    );
  }

  return '<span class="wfcs-card__logo-text">' + escapeHtml(item.logoText || item.name) + "</span>";
}

function metricsHtml(metrics, className) {
  return metrics
    .slice(0, 3)
    .map(function (metric) {
      return (
        '<div class="' +
        className +
        '"><strong>' +
        escapeHtml(metric.value) +
        "</strong><span>" +
        escapeHtml(metric.label) +
        "</span></div>"
      );
    })
    .join("");
}

function serviceTagsHtml(services) {
  return services
    .map(function (service) {
      return '<span class="wfcs-tag">' + escapeHtml(service) + "</span>";
    })
    .join("");
}

function featuredHtml(item) {
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
}

function cardHtml(item, index) {
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
}

function matches(item) {
  const industryMatch =
    state.industry === "All" || item.industries.indexOf(state.industry) > -1;
  const sizeMatch = state.size === "All" || item.companySize === state.size;
  const serviceMatch =
    state.service === "All" || item.services.indexOf(state.service) > -1;

  return industryMatch && sizeMatch && serviceMatch;
}

function renderFeatured() {
  if (!featuredRoot) return;

  const featured = CASE_STUDIES.find(function (item) {
    return item.slug === FEATURED_SLUG;
  }) || CASE_STUDIES[0];

  featuredRoot.innerHTML = featuredHtml(featured);
}

function renderFilters() {
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
}

function renderCards() {
  const visible = CASE_STUDIES.filter(matches);

  if (count) {
    count.textContent =
      "Showing " +
      visible.length +
      " of " +
      CASE_STUDIES.length +
      " case stud" +
      (CASE_STUDIES.length === 1 ? "y" : "ies");
  }

  if (!grid) return;

  if (!visible.length) {
    grid.innerHTML =
      '<div class="wfcs-empty"><h3>No case studies match this filter set.</h3><p>Try broadening the company size or service line to surface more results.</p></div>';
    return;
  }

  grid.innerHTML = visible
    .map(function (item, index) {
      return cardHtml(item, index);
    })
    .join("");
}

function renderAll() {
  renderFeatured();
  renderFilters();
  renderCards();
  bindEvents();
}

function setFilter(group, value) {
  state[group] = value;
  renderAll();
}

function resetFilters() {
  state.industry = "All";
  state.size = "All";
  state.service = "All";
  renderAll();
}

function bindEvents() {
  document.querySelectorAll("[data-filter-group]").forEach(function (button) {
    button.onclick = function () {
      setFilter(button.dataset.filterGroup, button.dataset.filterValue);
    };
  });

  if (resetButton) {
    resetButton.onclick = resetFilters;
  }
}

renderAll();
