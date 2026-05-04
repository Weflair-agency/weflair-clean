(function () {
  const rootSelector = "[data-services-assessment-root], .weflair-services-cta-wrap";
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const routes = {
    demand: "/expertise/b2b-demand-generation.html",
    paid: "/services/paid-media-performance.html",
    outbound: "/services/go-to-market-systems.html",
    cro: "/services/performance-design.html",
    seo: "/services/ai-visibility-seo.html",
    saas: "/expertise/b2b-saas.html",
    services: "/expertise/b2b-services.html",
    tech: "/expertise/b2b-tech.html",
    ecommerce: "/expertise/ecommerce.html",
  };

  const labels = {
    audience: "Who do you sell to?",
    model: "What do you sell?",
    price: "Price point",
    priority: "Main growth constraint",
    email: "Email",
  };

  const questions = {
    audience: {
      kicker: "Question 1 of 4",
      title: "Who do you sell to?",
      body: "This routes the rest of the assessment so we do not ask B2B questions to an e-commerce brand.",
      options: [
        ["b2b", "B2B", "Businesses buy from us: SaaS, services, tech, APIs, platforms, or enterprise offers."],
        ["b2c", "B2C", "Customers buy online: apparel, supplements, beauty, courses, subscriptions, or DTC products."],
        ["b2b2c", "B2B2C", "We sell through businesses, marketplaces, partners, or a mixed B2B and consumer motion."],
      ],
    },
    modelB2B: {
      kicker: "Question 2 of 4",
      title: "What kind of B2B offer is it?",
      body: "This separates SaaS, services, and complex technical sales cycles.",
      options: [
        ["saas", "Software or subscription", "SaaS, product-led, sales-led, platform, or recurring software revenue."],
        ["service", "Expert service", "Agency, consultancy, done-for-you, professional services, or high-trust delivery."],
        ["complex", "Complex technical product", "Fintech, API, infrastructure, hardware, security, data, or long committee sale."],
        ["mixed", "A mix of software and services", "You sell product, implementation, managed service, or custom solutions together."],
      ],
    },
    modelB2C: {
      kicker: "Question 2 of 4",
      title: "What do customers buy?",
      body: "This tells us whether acquisition, conversion, or retention should lead.",
      options: [
        ["physical", "Physical products", "Apparel, beauty, supplements, home, accessories, or other e-commerce products."],
        ["info", "Courses or information", "Online courses, coaching, communities, newsletters, or creator-led offers."],
        ["subscription", "Consumer subscription", "Recurring boxes, memberships, replenishment, app subscriptions, or paid access."],
        ["marketplace", "Marketplace or multi-sided", "You need both supply and demand, or partner/channel acquisition."],
      ],
    },
    priceB2B: {
      kicker: "Question 3 of 4",
      title: "What is the usual deal size?",
      body: "Higher ACV can support outbound, research, ABM, and sales-led demand. Lower ACV usually needs more efficient capture and conversion.",
      options: [
        ["lt1k", "Under $1k", "Mostly self-serve, low-ticket, or fast sales cycle."],
        ["1to3k", "$1k-$3k", "Light sales assist, paid capture, and conversion efficiency matter most."],
        ["3to10k", "$3k-$10k", "Strong fit for demand generation, outbound, and pipeline systems."],
        ["10kplus", "$10k+", "Complex sale, high-intent targeting, account lists, and sales follow-up are critical."],
      ],
    },
    priceB2C: {
      kicker: "Question 3 of 4",
      title: "What is your average order value?",
      body: "AOV changes what acquisition strategy can work profitably.",
      options: [
        ["lt50", "Under $50", "You need tight creative testing, conversion rate, retention, and margin discipline."],
        ["50to100", "$50-$100", "Paid media can work if the funnel and repeat purchase are healthy."],
        ["100to200", "$100-$200", "Strong fit for paid acquisition, CRO, and lifecycle improvements."],
        ["200plus", "$200+", "Higher AOV supports deeper testing, landing pages, and more aggressive acquisition."],
      ],
    },
    priority: {
      kicker: "Question 4 of 4",
      title: "What needs fixing first?",
      body: "Pick the constraint that would create the most revenue if we solved it.",
      options: [
        ["pipeline", "We need more qualified pipeline", "Demand creation, capture, outbound, and sales handoff should work together."],
        ["outbound", "We need outbound or account targeting", "Lists, enrichment, email, LinkedIn, warm signals, and reply handling."],
        ["paid", "Paid media should perform better", "Google, LinkedIn, Meta, retargeting, budget allocation, and creative testing."],
        ["cro", "Traffic is not converting well enough", "Landing pages, UX, message match, offers, testing, and funnel conversion."],
        ["seo", "We need visibility in search and AI", "SEO, AEO, GEO, content systems, and visibility where buyers research."],
      ],
    },
    email: {
      kicker: "Final step",
      title: "Where should we send the recommendation?",
      body: "We will send the starting point, recent studies, and a free audit note. No spam. No newsletter dump. We will do the research before reaching out.",
    },
  };

  const state = {
    step: "audience",
    answers: {},
    email: "",
    submitted: false,
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function currentQuestionKey() {
    if (state.step === "model") return state.answers.audience === "b2c" ? "modelB2C" : "modelB2B";
    if (state.step === "price") return state.answers.audience === "b2c" ? "priceB2C" : "priceB2B";
    return state.step;
  }

  function stepIndex() {
    return ["audience", "model", "price", "priority", "email", "result"].indexOf(state.step);
  }

  function nextStep() {
    const order = ["audience", "model", "price", "priority", "email"];
    const index = order.indexOf(state.step);
    state.step = order[Math.min(order.length - 1, index + 1)] || "email";
  }

  function previousStep() {
    const order = ["audience", "model", "price", "priority", "email"];
    const index = order.indexOf(state.step);
    if (index <= 0) return;
    state.step = order[index - 1];
  }

  function answerLabel(key) {
    const questionKey = key === "model" ? (state.answers.audience === "b2c" ? "modelB2C" : "modelB2B") : key === "price" ? (state.answers.audience === "b2c" ? "priceB2C" : "priceB2B") : key;
    const question = questions[questionKey];
    const selected = question?.options?.find(([value]) => value === state.answers[key]);
    return selected ? selected[1] : "Not answered yet";
  }

  function scoreRecommendation() {
    const scores = {
      demand: 0,
      paid: 0,
      outbound: 0,
      cro: 0,
      seo: 0,
      saas: 0,
      services: 0,
      tech: 0,
      ecommerce: 0,
    };

    const { audience, model, price, priority } = state.answers;

    if (audience === "b2b") scores.demand += 3;
    if (audience === "b2b2c") {
      scores.demand += 2;
      scores.paid += 1;
    }
    if (audience === "b2c") {
      scores.ecommerce += 3;
      scores.paid += 2;
      scores.cro += 1;
    }

    if (model === "saas") {
      scores.saas += 3;
      scores.demand += 2;
    }
    if (model === "service") {
      scores.services += 3;
      scores.outbound += 2;
    }
    if (model === "complex") {
      scores.tech += 3;
      scores.demand += 2;
      scores.outbound += 1;
    }
    if (model === "mixed" || model === "marketplace") {
      scores.demand += 2;
      scores.tech += 1;
    }
    if (model === "physical" || model === "subscription" || model === "info") {
      scores.ecommerce += 2;
      scores.paid += 1;
    }

    if (price === "3to10k" || price === "10kplus") {
      scores.demand += 2;
      scores.outbound += 2;
    }
    if (price === "lt1k" || price === "1to3k") {
      scores.paid += 1;
      scores.cro += 1;
    }
    if (price === "lt50") {
      scores.cro += 2;
      scores.paid += 1;
    }
    if (price === "100to200" || price === "200plus") {
      scores.paid += 2;
      scores.ecommerce += 1;
    }

    if (priority) scores[priority] += 5;

    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const recommendation = {
      demand: ["B2B Demand Generation", "A full-funnel system is the best starting point: demand creation, paid capture, outbound, tracking, and sales handoff.", routes.demand],
      paid: ["Paid Media & Performance", "Your fastest lever is cleaner acquisition: Google, LinkedIn, Meta, retargeting, creative testing, and budget discipline.", routes.paid],
      outbound: ["Outbound Systems", "The best start is account targeting: ICP lists, enrichment, email, LinkedIn, warm signals, deliverability, and reply handling.", routes.outbound],
      cro: ["Performance Design & CRO", "The bottleneck is conversion. Start with landing pages, message match, offer structure, testing, and funnel design.", routes.cro],
      seo: ["AI Visibility & SEO", "The best start is visibility where buyers research: SEO, AI search, content systems, and category authority.", routes.seo],
      saas: ["B2B SaaS Expertise", "Your motion needs SaaS-specific pipeline work: qualified demos, activation, paid capture, outbound, and revenue visibility.", routes.saas],
      services: ["B2B Services Expertise", "You need a service-led demand system: sharper ICP, better qualification, outbound, proof, and sales handoff.", routes.services],
      tech: ["B2B Tech Expertise", "Your category needs technical-buyer education, account engagement, sales enablement, and a clear path to pipeline.", routes.tech],
      ecommerce: ["E-commerce Expertise", "Your best start is commerce growth: paid acquisition, conversion, retention, lifecycle, and stronger unit economics.", routes.ecommerce],
    };

    return recommendation[winner] || recommendation.demand;
  }

  function summaryMarkup() {
    return `<dl>
      <div><dt>${labels.audience}</dt><dd>${escapeHtml(answerLabel("audience"))}</dd></div>
      <div><dt>${labels.model}</dt><dd>${escapeHtml(state.answers.model ? answerLabel("model") : "Next")}</dd></div>
      <div><dt>${labels.price}</dt><dd>${escapeHtml(state.answers.price ? answerLabel("price") : "Next")}</dd></div>
      <div><dt>${labels.priority}</dt><dd>${escapeHtml(state.answers.priority ? answerLabel("priority") : "Next")}</dd></div>
    </dl>`;
  }

  function resultCardMarkup() {
    if (state.step !== "result") {
      return `<h5>What happens next</h5><strong>Recommendation unlocked after email.</strong><p>We use the answers to route you to one clear starting point, then send the audit notes to your inbox.</p>`;
    }
    const [title, body, href] = scoreRecommendation();
    return `<h5>Recommended starting point</h5><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p><div class="wf-assessment__actions"><a class="wf-assessment__btn wf-assessment__btn--primary" href="${escapeHtml(href)}">Open page <span aria-hidden="true">-></span></a><a class="wf-assessment__btn" href="/contact.html">Book audit</a></div>`;
  }

  function optionMarkup(question, answerKey) {
    return `<div class="wf-assessment__options">${question.options
      .map(([value, title, body]) => {
        const selected = state.answers[answerKey] === value;
        return `<button type="button" class="wf-assessment__option${selected ? " is-selected" : ""}" data-assessment-answer="${escapeHtml(value)}">
          <span class="wf-assessment__radio" aria-hidden="true"></span>
          <span><strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span></span>
        </button>`;
      })
      .join("")}</div>`;
  }

  function questionMarkup() {
    if (state.step === "result") {
      const [title, body] = scoreRecommendation();
      return `<h4>${escapeHtml(title)}</h4><p>${escapeHtml(body)}</p><p class="wf-assessment__privacy">Your answers are saved for follow-up context. We will use them to do the research before reaching out.</p><div class="wf-assessment__actions"><button type="button" class="wf-assessment__btn" data-assessment-back>Back</button><button type="button" class="wf-assessment__btn" data-assessment-reset>Start over</button></div>`;
    }

    const questionKey = currentQuestionKey();
    const question = questions[questionKey];
    const answerKey = state.step === "model" ? "model" : state.step === "price" ? "price" : state.step;

    if (state.step === "email") {
      return `<h4>${escapeHtml(question.title)}</h4><p>${escapeHtml(question.body)}</p>
        <div class="wf-assessment__email">
          <label for="wf-assessment-email">Work email</label>
          <input id="wf-assessment-email" type="email" inputmode="email" autocomplete="email" placeholder="you@company.com" value="${escapeHtml(state.email)}" required />
          <p class="wf-assessment__privacy">Free audit included. We will send the recommendation and a short research note. We will never sell or share your email.</p>
        </div>
        <p class="wf-assessment__error" data-assessment-error hidden>Please enter a valid email address.</p>
        <div class="wf-assessment__actions"><button type="button" class="wf-assessment__btn" data-assessment-back>Back</button><button type="button" class="wf-assessment__btn wf-assessment__btn--primary" data-assessment-submit>Get my starting point <span aria-hidden="true">-></span></button></div>`;
    }

    return `<h4>${escapeHtml(question.title)}</h4><p>${escapeHtml(question.body)}</p>${optionMarkup(question, answerKey)}
      <div class="wf-assessment__actions">
        ${state.step !== "audience" ? '<button type="button" class="wf-assessment__btn" data-assessment-back>Back</button>' : ""}
        <button type="button" class="wf-assessment__btn wf-assessment__btn--primary" data-assessment-next ${state.answers[answerKey] ? "" : "disabled"}>${state.step === "audience" ? "Take the assessment" : "Next"} <span aria-hidden="true">-></span></button>
      </div>`;
  }

  function render() {
    root.classList.add("is-assessment-ready");
    root.setAttribute("data-services-assessment-root", "");
    const active = Math.max(0, Math.min(4, stepIndex()));
    root.innerHTML = `<section class="wf-assessment" id="service-assessment" aria-label="Service recommendation assessment">
      <div class="wf-assessment__intro">
        <h3>Not sure which service you need?</h3>
        <p>Answer three quick questions and we will recommend the right starting point for your business.</p>
      </div>
      <div class="wf-assessment__shell">
        <div class="wf-assessment__bar">
          <span class="wf-assessment__step-label">${escapeHtml(state.step === "result" ? "Recommendation ready" : questions[currentQuestionKey()].kicker)}</span>
          <div class="wf-assessment__progress" aria-hidden="true">${[0, 1, 2, 3, 4].map((index) => `<span class="wf-assessment__dot${index <= active ? " is-active" : ""}"></span>`).join("")}</div>
        </div>
        <div class="wf-assessment__body">
          <div class="wf-assessment__question">${questionMarkup()}</div>
          <aside class="wf-assessment__side">
            <div class="wf-assessment__summary"><h5>Your route</h5>${summaryMarkup()}</div>
            <div class="wf-assessment__result-card">${resultCardMarkup()}</div>
          </aside>
        </div>
      </div>
      <form class="wf-assessment__hidden-form" name="service-assessment" data-netlify="true" netlify>
        <input type="hidden" name="form-name" value="service-assessment" />
        <input type="email" name="email" />
        <input type="hidden" name="audience" />
        <input type="hidden" name="model" />
        <input type="hidden" name="price" />
        <input type="hidden" name="priority" />
        <input type="hidden" name="recommendation" />
      </form>
    </section>`;
    wire();
  }

  function selectedAnswerKey() {
    if (state.step === "model") return "model";
    if (state.step === "price") return "price";
    return state.step;
  }

  function submitLead() {
    const [recommendation] = scoreRecommendation();
    const payload = new URLSearchParams();
    payload.set("form-name", "service-assessment");
    payload.set("email", state.email);
    payload.set("audience", answerLabel("audience"));
    payload.set("model", answerLabel("model"));
    payload.set("price", answerLabel("price"));
    payload.set("priority", answerLabel("priority"));
    payload.set("recommendation", recommendation);

    try {
      localStorage.setItem("weflair-service-assessment", JSON.stringify({
        email: state.email,
        answers: state.answers,
        recommendation,
        capturedAt: new Date().toISOString(),
      }));
    } catch (_error) {
      // Ignore storage failures.
    }

    if (/^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname)) {
      return Promise.resolve(null);
    }

    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    }).catch(() => null);
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function wire() {
    root.querySelectorAll("[data-assessment-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        const key = selectedAnswerKey();
        state.answers[key] = button.getAttribute("data-assessment-answer");
        if (key === "audience") {
          delete state.answers.model;
          delete state.answers.price;
          delete state.answers.priority;
        }
        if (key === "model") {
          delete state.answers.price;
          delete state.answers.priority;
        }
        if (key === "price") {
          delete state.answers.priority;
        }
        render();
      });
    });

    root.querySelector("[data-assessment-next]")?.addEventListener("click", () => {
      if (!state.answers[selectedAnswerKey()]) return;
      nextStep();
      render();
    });

    root.querySelector("[data-assessment-back]")?.addEventListener("click", () => {
      previousStep();
      render();
    });

    root.querySelector("[data-assessment-reset]")?.addEventListener("click", () => {
      state.step = "audience";
      state.answers = {};
      state.email = "";
      state.submitted = false;
      render();
    });

    const email = root.querySelector("#wf-assessment-email");
    email?.addEventListener("input", () => {
      state.email = email.value.trim();
      root.querySelector("[data-assessment-error]")?.setAttribute("hidden", "");
    });

    root.querySelector("[data-assessment-submit]")?.addEventListener("click", async () => {
      const input = root.querySelector("#wf-assessment-email");
      state.email = input?.value.trim() || "";
      const error = root.querySelector("[data-assessment-error]");
      if (!isValidEmail(state.email)) {
        error?.removeAttribute("hidden");
        input?.focus();
        return;
      }
      const button = root.querySelector("[data-assessment-submit]");
      if (button) {
        button.setAttribute("disabled", "");
        button.textContent = "Building recommendation...";
      }
      await submitLead();
      state.submitted = true;
      state.step = "result";
      render();
    });
  }

  function boot() {
    const existing = document.querySelector(".weflair-services-cta-wrap");
    if (!existing) return;
    if (existing !== root && !existing.hasAttribute("data-services-assessment-root")) {
      existing.setAttribute("data-services-assessment-root", "");
    }
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
