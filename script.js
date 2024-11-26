// Close the navigation when a menu link is clicked
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav_check").checked = false;
  });
});

// Close the navigation when the close button is clicked
document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("nav_check").checked = false;
});

/*
document.addEventListener("DOMContentLoaded", function () {
  const educationSection = document.querySelector(".education");
  const cards = document.querySelectorAll(".education .card");

  function onScroll() {
    const sectionTop = educationSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight - 100) {
      // Adjust this value to control when the animation triggers
      educationSection.classList.add("visible");
      window.removeEventListener("scroll", onScroll); // Remove event listener once animation is triggered
    }
  }

  window.addEventListener("scroll", onScroll);

  // Smooth scroll
  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust this value to align correctly
        behavior: "smooth",
      });
    });
  });
});
*/
