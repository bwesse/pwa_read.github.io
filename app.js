// Simple view switching
const viewRoot = document.getElementById("viewRoot");
const sideMenu = document.getElementById("sideMenu");
const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");

function showView(name) {
  const views = viewRoot.querySelectorAll(".view");
  views.forEach((v) => {
    if (v.dataset.view === name) {
      v.classList.add("active");
    } else {
      v.classList.remove("active");
    }
  });
}

// Open / close menu
menuButton.addEventListener("click", () => {
  sideMenu.classList.add("open");
  sideMenu.setAttribute("aria-hidden", "false");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  sideMenu.setAttribute("aria-hidden", "true");
});

// Menu links
sideMenu.addEventListener("click", (event) => {
  if (event.target.matches("button[data-view]")) {
    const view = event.target.getAttribute("data-view");
    showView(view);
    sideMenu.classList.remove("open");
    sideMenu.setAttribute("aria-hidden", "true");
  }
});

// Default view
showView("read");

// Register service worker for PWA offline support
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((err) => {
      console.warn("Service worker registration failed:", err);
    });
  });
}
