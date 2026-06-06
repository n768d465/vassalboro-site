const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

// Restore saved theme
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-bs-theme", savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  updateIcon(newTheme);
});

function updateIcon(theme) {
  icon.className = theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
}
