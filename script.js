document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const activeIndicator = document.getElementById("activeIndicator");

  function updateIndicator(link) {
    const linkRect = link.getBoundingClientRect();
    const navRect = link.closest(".navbar").getBoundingClientRect();

    activeIndicator.style.width = `${linkRect.width}px`;
    activeIndicator.style.left = `${linkRect.left - navRect.left}px`;
  }

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      updateIndicator(link);
    });
  });

  // Initialize indicator position
  const activeLink = document.querySelector(".nav-item.active .nav-link");
  if (activeLink) {
    updateIndicator(activeLink);
  }
});
