(function () {
  const visualMap = [
    {
      match: ["aiseo playbook", "ai-seo-playbook"],
      key: "answer-map",
      label: "Answer map",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><rect class="wfr-resource-visual__plate" x="12" y="12" width="136" height="66" rx="10"/><path class="wfr-resource-visual__line--thin" d="M38 33h42M38 45h68M38 57h34"/><circle class="wfr-resource-visual__soft" cx="119" cy="42" r="14"/><path class="wfr-resource-visual__line" d="M119 30v24M107 42h24"/><circle class="wfr-resource-visual__fill" cx="33" cy="33" r="3"/><circle class="wfr-resource-visual__fill" cx="33" cy="45" r="3"/><circle class="wfr-resource-visual__fill" cx="33" cy="57" r="3"/></svg>'
    },
    {
      match: ["lookalike outbound engine"],
      key: "lookalike",
      label: "Account clone",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><circle class="wfr-resource-visual__soft" cx="80" cy="45" r="18"/><circle class="wfr-resource-visual__line" cx="80" cy="45" r="8"/><path class="wfr-resource-visual__line--thin" d="M54 26 68 36M106 26 92 36M54 64 68 54M106 64 92 54"/><rect class="wfr-resource-visual__plate" x="28" y="14" width="29" height="22" rx="6"/><rect class="wfr-resource-visual__plate" x="103" y="14" width="29" height="22" rx="6"/><rect class="wfr-resource-visual__plate" x="28" y="55" width="29" height="22" rx="6"/><rect class="wfr-resource-visual__plate" x="103" y="55" width="29" height="22" rx="6"/></svg>'
    },
    {
      match: ["visitor deanonymization"],
      key: "visitor",
      label: "Intent reveal",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><rect class="wfr-resource-visual__plate" x="18" y="15" width="124" height="62" rx="9"/><path class="wfr-resource-visual__line--thin" d="M18 31h124"/><circle class="wfr-resource-visual__muted" cx="30" cy="24" r="3"/><circle class="wfr-resource-visual__muted" cx="41" cy="24" r="3"/><path class="wfr-resource-visual__line" d="M61 55c8-14 30-14 38 0"/><circle class="wfr-resource-visual__soft" cx="80" cy="55" r="16"/><circle class="wfr-resource-visual__fill" cx="80" cy="55" r="4"/><path class="wfr-resource-visual__line--thin" d="M103 47h21M103 58h14"/></svg>'
    },
    {
      match: ["direct outreach campaign"],
      key: "outreach",
      label: "Reply path",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><rect class="wfr-resource-visual__plate" x="20" y="23" width="44" height="30" rx="7"/><path class="wfr-resource-visual__line--thin" d="m24 29 18 14 18-14"/><path class="wfr-resource-visual__line" d="M68 38h26M86 30l8 8-8 8"/><rect class="wfr-resource-visual__soft" x="96" y="18" width="42" height="42" rx="21"/><path class="wfr-resource-visual__line" d="M111 33c5 0 10 5 10 10M105 28c11 0 21 9 21 21"/></svg>'
    },
    {
      match: ["social signals trigger"],
      key: "social",
      label: "Trigger graph",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><path class="wfr-resource-visual__line--thin" d="M47 31 80 48 116 26M80 48l33 26M80 48 43 68"/><circle class="wfr-resource-visual__soft" cx="47" cy="31" r="13"/><circle class="wfr-resource-visual__soft" cx="80" cy="48" r="15"/><circle class="wfr-resource-visual__soft" cx="116" cy="26" r="12"/><circle class="wfr-resource-visual__soft" cx="113" cy="74" r="12"/><circle class="wfr-resource-visual__soft" cx="43" cy="68" r="12"/></svg>'
    },
    {
      match: ["lead magnet acceleration"],
      key: "magnet",
      label: "Offer flow",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><path class="wfr-resource-visual__line" d="M44 29v17c0 12 10 22 22 22s22-10 22-22V29H73v17c0 4-3 7-7 7s-7-3-7-7V29H44Z"/><path class="wfr-resource-visual__line--thin" d="M95 39h29M95 51h20M95 63h35"/><circle class="wfr-resource-visual__fill" cx="129" cy="39" r="3"/><circle class="wfr-resource-visual__fill" cx="121" cy="51" r="3"/><circle class="wfr-resource-visual__fill" cx="136" cy="63" r="3"/></svg>'
    },
    {
      match: ["case study pipeline"],
      key: "proof",
      label: "Proof loop",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><rect class="wfr-resource-visual__plate" x="25" y="18" width="42" height="50" rx="8"/><rect class="wfr-resource-visual__plate" x="59" y="27" width="42" height="50" rx="8"/><rect class="wfr-resource-visual__plate" x="93" y="18" width="42" height="50" rx="8"/><path class="wfr-resource-visual__line" d="M36 54h19M70 63h19M104 54h19"/><path class="wfr-resource-visual__line--thin" d="M36 34h12M70 43h12M104 34h12"/></svg>'
    },
    {
      match: ["b2b demand generation"],
      key: "demand",
      label: "Demand loop",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><path class="wfr-resource-visual__line" d="M48 54c-7-16 5-32 24-36 16-3 33 5 39 19"/><path class="wfr-resource-visual__line" d="M107 24l5 14-15 3"/><path class="wfr-resource-visual__line" d="M112 43c8 16-4 33-23 37-16 3-34-5-40-20"/><path class="wfr-resource-visual__line" d="m53 73-5-14 15-3"/><circle class="wfr-resource-visual__soft" cx="80" cy="49" r="12"/></svg>'
    },
    {
      match: ["google ads waste"],
      key: "search-waste",
      label: "Waste audit",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><circle class="wfr-resource-visual__soft" cx="62" cy="40" r="20"/><path class="wfr-resource-visual__line" d="m76 55 20 20"/><path class="wfr-resource-visual__line--thin" d="M101 28h30M101 42h18M101 56h24"/><path class="wfr-resource-visual__line" d="m48 40 9 9 18-21"/></svg>'
    },
    {
      match: ["linkedin ads benchmarks"],
      key: "linkedin",
      label: "Ad benchmark",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><rect class="wfr-resource-visual__plate" x="25" y="18" width="110" height="58" rx="9"/><rect class="wfr-resource-visual__soft" x="38" y="31" width="21" height="31" rx="5"/><rect class="wfr-resource-visual__soft" x="68" y="42" width="21" height="20" rx="5"/><rect class="wfr-resource-visual__soft" x="98" y="27" width="21" height="35" rx="5"/><path class="wfr-resource-visual__line--thin" d="M38 68h82"/></svg>'
    },
    {
      match: ["ai search visibility"],
      key: "ai-search",
      label: "Citation path",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><rect class="wfr-resource-visual__plate" x="25" y="20" width="72" height="44" rx="9"/><path class="wfr-resource-visual__line--thin" d="M38 34h38M38 46h28"/><path class="wfr-resource-visual__line" d="M98 42h21"/><circle class="wfr-resource-visual__soft" cx="124" cy="42" r="10"/><circle class="wfr-resource-visual__soft" cx="119" cy="67" r="8"/><circle class="wfr-resource-visual__soft" cx="139" cy="63" r="8"/><path class="wfr-resource-visual__line--thin" d="M124 52l-5 8M129 51l7 7"/></svg>'
    },
    {
      match: ["outbound data stack"],
      key: "data-stack",
      label: "Data stack",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><ellipse class="wfr-resource-visual__soft" cx="48" cy="28" rx="23" ry="9"/><path class="wfr-resource-visual__line--thin" d="M25 28v26c0 5 10 9 23 9s23-4 23-9V28"/><path class="wfr-resource-visual__line" d="M75 46h28M95 38l8 8-8 8"/><rect class="wfr-resource-visual__plate" x="106" y="25" width="34" height="42" rx="8"/><path class="wfr-resource-visual__line--thin" d="M116 39h14M116 51h10"/></svg>'
    },
    {
      match: ["real-time lead routing"],
      key: "routing",
      label: "Route signal",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><circle class="wfr-resource-visual__soft" cx="45" cy="48" r="14"/><path class="wfr-resource-visual__line" d="M60 48h24M84 48l20-20M84 48l20 20"/><rect class="wfr-resource-visual__plate" x="106" y="16" width="33" height="24" rx="7"/><rect class="wfr-resource-visual__plate" x="106" y="56" width="33" height="24" rx="7"/><path class="wfr-resource-visual__line--thin" d="M115 28h14M115 68h14"/></svg>'
    },
    {
      match: ["cro operator"],
      key: "cro",
      label: "A/B lift",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><rect class="wfr-resource-visual__plate" x="24" y="19" width="50" height="54" rx="8"/><rect class="wfr-resource-visual__plate" x="86" y="19" width="50" height="54" rx="8"/><path class="wfr-resource-visual__line--thin" d="M38 35h22M38 47h15M100 35h22M100 47h15"/><path class="wfr-resource-visual__line" d="M101 61h20M111 51v20"/></svg>'
    },
    {
      match: ["ecommerce retention"],
      key: "retention",
      label: "Repeat loop",
      svg: '<svg viewBox="0 0 160 96" aria-hidden="true"><path class="wfr-resource-visual__line" d="M42 31h74l-8 32H52L45 20H32"/><circle class="wfr-resource-visual__soft" cx="61" cy="72" r="7"/><circle class="wfr-resource-visual__soft" cx="102" cy="72" r="7"/><path class="wfr-resource-visual__line--thin" d="M124 30c10 10 10 26 0 36"/><path class="wfr-resource-visual__line--thin" d="m120 34 5-5 5 5M130 62l-6 5-5-5"/></svg>'
    }
  ];

  function resolveVisual(card) {
    const text = `${card.getAttribute("href") || ""} ${card.querySelector("h3")?.textContent || ""}`.toLowerCase();
    return visualMap.find((item) => item.match.some((needle) => text.includes(needle))) || visualMap[0];
  }

  function renderVisuals() {
    document.querySelectorAll(".wfr-card__visual").forEach((visual) => {
      const card = visual.closest(".wfr-card");
      if (!card) return;
      const item = resolveVisual(card);
      visual.innerHTML = `<div class="wfr-resource-visual wfr-resource-visual--${item.key}" aria-hidden="true">${item.svg}<span class="wfr-resource-visual__label">${item.label}</span></div>`;
    });
  }

  renderVisuals();

  const buttons = Array.from(document.querySelectorAll("[data-wfr-filter]"));
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.getAttribute("data-wfr-group");
      const value = button.getAttribute("data-wfr-filter");
      const cards = Array.from(document.querySelectorAll(`[data-wfr-card][data-wfr-group="${group}"]`));

      buttons
        .filter((item) => item.getAttribute("data-wfr-group") === group)
        .forEach((item) => {
          item.classList.toggle("is-active", item === button);
          item.setAttribute("aria-pressed", item === button ? "true" : "false");
        });

      cards.forEach((card) => {
        const tags = (card.getAttribute("data-wfr-tags") || "").split(" ");
        const visible = value === "all" || tags.includes(value);
        card.classList.toggle("is-hidden", !visible);
      });
    });
  });
})();
