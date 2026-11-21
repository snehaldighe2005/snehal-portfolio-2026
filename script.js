const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Open and close the mobile menu
menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Set the current year automatically
document.getElementById("year").textContent =
  new Date().getFullYear();