(function () {
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
