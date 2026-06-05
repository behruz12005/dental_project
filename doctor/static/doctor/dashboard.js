(function () {
  const sidebar = document.getElementById("adminSidebar");
  const overlay = document.getElementById("adminSidebarOverlay");
  const menuButton = document.getElementById("adminMenuBtn");
  const collapseButton = document.getElementById("adminSidebarToggle");
  const searchInput = document.getElementById("adminSearchInput");
  const contentArea = document.getElementById("adminContentArea");
  const layout = document.querySelector(".admin-layout");
  const collapseStorageKey = "doctor-sidebar-collapsed";

  function syncButtonStates() {
    if (menuButton && sidebar) {
      menuButton.setAttribute("aria-expanded", sidebar.classList.contains("open") ? "true" : "false");
    }
    if (collapseButton && layout) {
      collapseButton.setAttribute("aria-pressed", layout.classList.contains("sidebar-collapsed") ? "true" : "false");
    }
  }

  function openSidebar() {
    if (!sidebar || !overlay) {
      return;
    }
    sidebar.classList.add("open");
    overlay.classList.add("show");
    syncButtonStates();
  }

  function closeSidebar() {
    if (!sidebar || !overlay) {
      return;
    }
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
    syncButtonStates();
  }

  function toggleSidebar() {
    if (!sidebar || !overlay) {
      return;
    }
    if (sidebar.classList.contains("open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  function setCollapsed(collapsed) {
    if (!layout) {
      return;
    }
    layout.classList.toggle("sidebar-collapsed", collapsed);
    try {
      window.localStorage.setItem(collapseStorageKey, collapsed ? "1" : "0");
    } catch (error) {
      void error;
    }
    syncButtonStates();
  }

  function toggleCollapsed() {
    if (!layout) {
      return;
    }
    setCollapsed(!layout.classList.contains("sidebar-collapsed"));
  }

  function applySearch() {
    if (!searchInput || !contentArea) {
      return;
    }
    const query = searchInput.value.trim().toLowerCase();
    const rows = contentArea.querySelectorAll("tbody tr");
    if (!rows.length) {
      return;
    }
    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      row.style.display = !query || text.includes(query) ? "" : "none";
    });
  }

  if (menuButton) {
    menuButton.addEventListener("click", toggleSidebar);
  }

  if (collapseButton) {
    collapseButton.addEventListener("click", toggleCollapsed);
  }

  if (overlay) {
    overlay.addEventListener("click", closeSidebar);
  }

  if (searchInput) {
    searchInput.addEventListener("input", applySearch);
  }

  if (layout && window.innerWidth > 820) {
    try {
      setCollapsed(window.localStorage.getItem(collapseStorageKey) === "1");
    } catch (error) {
      void error;
    }
  } else {
    syncButtonStates();
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeSidebar();
    }
  });
})();
