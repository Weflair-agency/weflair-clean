(function () {
  "use strict";

  if (window.top !== window.self) {
    return;
  }

  var PAGE_PATH = window.location.pathname || "/";
  var seen = new Set();
  var scrollMilestones = [25, 50, 75, 90];
  var scrollTicking = false;

  function normalizeText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function slugify(value) {
    return normalizeText(value)
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  function emit(name, details) {
    var payload = Object.assign(
      {
        event_category: "site_engagement",
        page_path: PAGE_PATH,
        page_url: window.location.href,
      },
      details || {}
    );

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, payload));

    try {
      if (window.SortlistRadar && typeof window.SortlistRadar.track === "function") {
        window.SortlistRadar.track(name, payload);
      }
    } catch (_) {}

    try {
      if (window.faitracker && typeof window.faitracker.call === "function") {
        window.faitracker.call("track", name, payload);
      }
    } catch (_) {}
  }

  function emitOnce(key, name, details) {
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    emit(name, details);
  }

  function sectionLabel(section) {
    var heading = section.querySelector("h1, h2, h3");
    return normalizeText(section.getAttribute("aria-label") || (heading && heading.textContent) || section.id || "section");
  }

  function observeSections() {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    if (!sections.length) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
            return;
          }

          var section = entry.target;
          var id = section.id || slugify(sectionLabel(section));
          emitOnce("section:" + id, "weflair_section_viewed", {
            section_id: id,
            section_label: sectionLabel(section),
          });
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -18% 0px",
        threshold: [0.3, 0.5, 0.75],
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function handoffCardDetails(section, tab) {
    var index = tab ? tab.getAttribute("data-handoff-tab") : "0";
    var labelNode = tab && tab.querySelector(".weflair-handoff__tab-label");
    var label = normalizeText(labelNode && labelNode.textContent) || "Strategy";
    var pane = section.querySelector('[data-handoff-pane="' + index + '"]');
    var iframe = pane && pane.querySelector("iframe");

    return {
      section_id: section.id || "where-we-come-in",
      card_index: Number(index),
      card_label: label,
      card_key: slugify(label),
      iframe_src: iframe ? iframe.getAttribute("src") || "" : "",
    };
  }

  function observeHandoff() {
    var section = document.querySelector("[data-handoff-section]");
    if (!section) {
      return;
    }

    var tabs = Array.prototype.slice.call(section.querySelectorAll("[data-handoff-tab]"));
    if (!tabs.length) {
      return;
    }

    function activeTab() {
      return (
        tabs.find(function (tab) {
          return tab.classList.contains("is-active") || tab.getAttribute("aria-selected") === "true";
        }) || tabs[0]
      );
    }

    function emitCardViewed(tab, reason) {
      var details = handoffCardDetails(section, tab);
      emitOnce("handoff-card:" + details.card_key, "weflair_handoff_card_viewed", Object.assign({ view_reason: reason }, details));
    }

    if ("IntersectionObserver" in window) {
      var sectionObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
              return;
            }

            emitOnce("handoff-section", "weflair_handoff_section_viewed", {
              section_id: section.id || "where-we-come-in",
              section_label: sectionLabel(section),
            });
            emitCardViewed(activeTab(), "section_entered");
          });
        },
        { rootMargin: "0px 0px -18% 0px", threshold: [0.3, 0.5] }
      );

      sectionObserver.observe(section);
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        emit("weflair_handoff_card_click", handoffCardDetails(section, tab));
        emitCardViewed(tab, "click");
      });
    });

    if ("MutationObserver" in window) {
      var mutationObserver = new MutationObserver(function () {
        emitCardViewed(activeTab(), "active_state");
      });

      tabs.forEach(function (tab) {
        mutationObserver.observe(tab, {
          attributes: true,
          attributeFilter: ["class", "aria-selected"],
        });
      });
    }

    section.addEventListener("click", function (event) {
      var cta = event.target.closest && event.target.closest(".weflair-handoff__cta");
      if (!cta) {
        return;
      }

      emit(
        "weflair_handoff_cta_click",
        Object.assign(
          {
            cta_text: normalizeText(cta.textContent),
            cta_href: cta.getAttribute("href") || "",
          },
          handoffCardDetails(section, activeTab())
        )
      );
    });
  }

  function observeEmbeddedPreviews() {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    var iframes = Array.prototype.slice.call(document.querySelectorAll('iframe[src^="/handoff-cards/"]'));
    if (!iframes.length) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
            return;
          }

          var iframe = entry.target;
          var src = iframe.getAttribute("src") || "";
          emitOnce("embedded-preview:" + src, "weflair_embedded_preview_viewed", {
            iframe_src: src,
            preview_key: slugify(src.split("/").pop() || "embedded_preview"),
          });
        });
      },
      { threshold: [0.5, 0.75] }
    );

    iframes.forEach(function (iframe) {
      observer.observe(iframe);
    });
  }

  function checkScrollDepth() {
    scrollTicking = false;

    var doc = document.documentElement;
    var body = document.body;
    var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop || 0;
    var scrollHeight = Math.max(body.scrollHeight, doc.scrollHeight, body.offsetHeight, doc.offsetHeight);
    var viewportHeight = window.innerHeight || doc.clientHeight || 0;
    var maxScroll = Math.max(1, scrollHeight - viewportHeight);
    var depth = Math.min(100, Math.round((scrollTop / maxScroll) * 100));

    scrollMilestones.forEach(function (milestone) {
      if (depth >= milestone) {
        emitOnce("scroll-depth:" + milestone, "weflair_scroll_depth", {
          scroll_depth: milestone,
        });
      }
    });
  }

  function onScroll() {
    if (scrollTicking) {
      return;
    }
    scrollTicking = true;
    window.requestAnimationFrame(checkScrollDepth);
  }

  function init() {
    observeSections();
    observeHandoff();
    observeEmbeddedPreviews();
    checkScrollDepth();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
