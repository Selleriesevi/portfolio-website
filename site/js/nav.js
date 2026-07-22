(function () {
  const toggle = document.querySelector(".nav__toggle");
  const flyout = document.querySelector(".nav__flyout");
  if (!toggle || !flyout) return;

  toggle.addEventListener("click", function () {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    flyout.classList.toggle("is-open", !expanded);
    document.body.style.overflow = !expanded ? "hidden" : "";
  });

  flyout.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.setAttribute("aria-expanded", "false");
      flyout.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });
})();
