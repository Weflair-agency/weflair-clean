import { CASE_STUDIES } from "/case-studies/data.js";

const slug = document.body.dataset.caseSlug;
const item = CASE_STUDIES.find(function (entry) {
  return entry.slug === slug;
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function logoHtml(caseStudy) {
  if (caseStudy.logo) {
    return (
      '<img src="' +
      escapeHtml(caseStudy.logo) +
      '" alt="' +
      escapeHtml(caseStudy.logoAlt || caseStudy.name + " logo") +
      '" loading="lazy" decoding="async">'
    );
  }

  return '<span class="wfcs-detail__logo-text">' + escapeHtml(caseStudy.logoText || caseStudy.name) + "</span>";
}

function metricHtml(metric) {
  return (
    '<div class="wfcs-detail__metric"><strong>' +
    escapeHtml(metric.value) +
    "</strong><span>" +
    escapeHtml(metric.label) +
    "</span></div>"
  );
}

function listHtml(items) {
  return items
    .map(function (entry) {
      return "<li>" + escapeHtml(entry) + "</li>";
    })
    .join("");
}

function briefHtml(caseStudy) {
  const cards = [
    { label: "Industry / market", value: caseStudy.industries.join(" / ") },
    { label: "Company size", value: caseStudy.companySize },
    { label: "Company model", value: caseStudy.companyType },
    { label: "Services delivered", value: caseStudy.services.join(" / ") }
  ];

  return cards
    .map(function (card) {
      return (
        '<div class="wfcs-detail__brief-card"><strong>' +
        escapeHtml(card.value) +
        "</strong><span>" +
        escapeHtml(card.label) +
        "</span></div>"
      );
    })
    .join("");
}

function relatedHtml(caseStudy) {
  const related = CASE_STUDIES.filter(function (entry) {
    if (entry.slug === caseStudy.slug) return false;

    const sharedIndustry = entry.industries.some(function (industry) {
      return caseStudy.industries.indexOf(industry) > -1;
    });
    const sharedService = entry.services.some(function (service) {
      return caseStudy.services.indexOf(service) > -1;
    });

    return sharedIndustry || sharedService;
  }).slice(0, 3);

  return related
    .map(function (entry) {
      return (
        '<article class="wfcs-detail__related-card">' +
          '<p class="wfcs-detail__label">' +
            escapeHtml(entry.industries.join(" / ")) +
          "</p>" +
          '<h3>' + escapeHtml(entry.name) + "</h3>" +
          '<p>' + escapeHtml(entry.headline) + "</p>" +
          '<a class="wfcs-card__link" href="/case-studies/">Open case study &rarr;</a>' +
        "</article>"
      );
    })
    .join("");
}

if (!item) {
  document.querySelector("[data-case-detail-root]").innerHTML =
    '<div class="wfcs-empty"><h1 class="wfcs-card__title">Case study not found.</h1><p>The requested page is not in the new library yet.</p><a class="wfcs-button is-secondary" href="/case-studies/">Back to the case studies hub</a></div>';
} else {
  const title = document.querySelector("title");
  const description = document.querySelector('meta[name="description"]');

  if (title) {
    title.textContent = item.name + " Case Study - WeFlair";
  }

  if (description) {
    description.setAttribute("content", item.summary);
  }

  document.querySelector("[data-case-breadcrumb-current]").textContent = item.name;
  document.querySelector("[data-case-logo]").innerHTML = logoHtml(item);
  document.querySelector("[data-case-tags]").innerHTML =
    '<span class="wfcs-detail__tag">' + escapeHtml(item.companyType) + "</span>" +
    '<span class="wfcs-detail__tag">' + escapeHtml(item.companySize) + "</span>" +
    '<span class="wfcs-detail__tag">' + escapeHtml(item.vertical) + "</span>";
  document.querySelector("[data-case-label]").textContent = item.industries.join(" / ");
  document.querySelector("[data-case-headline]").textContent = item.headline;
  document.querySelector("[data-case-summary]").textContent = item.summary;
  document.querySelector("[data-case-what]").textContent = item.whatWeDid;
  document.querySelector("[data-case-metrics]").innerHTML = item.metrics.map(metricHtml).join("");
  document.querySelector("[data-case-brief]").innerHTML = briefHtml(item);
  document.querySelector("[data-case-challenge]").textContent = item.challenge;
  document.querySelector("[data-case-approach]").innerHTML = listHtml(item.approach);
  document.querySelector("[data-case-results]").innerHTML = listHtml(item.results);
  document.querySelector("[data-case-stack]").innerHTML = listHtml(item.stack);
  document.querySelector("[data-case-related]").innerHTML = relatedHtml(item);
}
