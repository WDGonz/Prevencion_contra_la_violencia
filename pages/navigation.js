const navToggle = document.querySelector(".nav-toggle");
const siteMenu = document.querySelector("#navbarSupportedContent");

if (navToggle && siteMenu) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    navToggle.setAttribute("aria-label", isExpanded ? "Abrir menú de navegación" : "Cerrar menú de navegación");
    siteMenu.classList.toggle("is-open", !isExpanded);
  });
}
