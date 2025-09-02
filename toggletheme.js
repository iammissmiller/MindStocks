// Apply theme on load
function applyThemeFromStorage() {
  const isDark = localStorage.getItem("darkMode") === "enabled";
  document.body.classList.toggle("dark-mode", isDark);

  // sync with simulator
  localStorage.setItem("sim_theme", isDark ? "dark" : "light");
}

// Run when page loads
document.addEventListener("DOMContentLoaded", applyThemeFromStorage);

// Toggle theme manually
function toggleNightMode() {
  const isDark = !document.body.classList.contains("dark-mode");

  document.body.classList.toggle("dark-mode", isDark);
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  localStorage.setItem("sim_theme", isDark ? "dark" : "light");
}

// Sync across tabs/pages
window.addEventListener("storage", (e) => {
  if (e.key === "darkMode" || e.key === "sim_theme") applyThemeFromStorage();
});

// Expose toggle for onclick
window.toggleNightMode = toggleNightMode;
