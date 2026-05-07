/* -- Scroll Reveal for Service Pages -- */
(function () {
  /* Auto-tag sections that should animate */
  var revealSelectors = [
    '.sv-section', '.sv-stats', '.sv-callout', '.sv-cta-band',
    '.sv-split', '.sv-transform', '.sv-why-grid', '.sv-tabs',
    '.sv-modes', '.sv-workflow', '.sv-subnav',
    '.pd-bleed-sec', '.pd-transform-sec'
  ].join(',');
  var staggerSelectors = [
    '.sv-card-grid', '.sv-pain-grid', '.sv-pricing-grid',
    '.sv-steps', '.sv-faq'
  ].join(',');

  document.querySelectorAll(revealSelectors).forEach(function (el) {
    if (!el.hasAttribute('data-sv-reveal')) el.setAttribute('data-sv-reveal', '');
  });
  document.querySelectorAll(staggerSelectors).forEach(function (el) {
    if (!el.hasAttribute('data-sv-stagger')) el.setAttribute('data-sv-stagger', '');
  });

  /* Fallback for no IO */
  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('[data-sv-reveal],[data-sv-stagger]')
      .forEach(function (el) { el.classList.add('sv-revealed'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('sv-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-sv-reveal],[data-sv-stagger]')
    .forEach(function (el) { observer.observe(el); });
})();
