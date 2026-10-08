// Mobile nav disclosure: toggles the hamburger button and the collapsed nav panel.
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function close() {
    toggle.setAttribute("aria-expanded", "false");
    nav.removeAttribute("data-open");
  }

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    if (open) {
      nav.removeAttribute("data-open");
    } else {
      nav.setAttribute("data-open", "");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  nav.addEventListener("click", (e) => {
    if (e.target instanceof HTMLAnchorElement) close();
  });
})();
