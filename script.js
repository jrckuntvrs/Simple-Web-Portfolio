document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("nav_check").checked = false;
});

document.querySelectorAll("#menuList li a").forEach((item) => {
  item.addEventListener("click", function () {
    menuList.style.maxHeight = "0px";
  });
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > lastScrollY) {
    // Scrolling down - hide the header
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up - show the header
    header.style.transform = "translateY(0)";
  }

  lastScrollY = window.scrollY;
});

const nav = document.querySelector("nav");
const menuLinks = document.querySelectorAll(".menu-link");
const closeBtn = document.querySelector(".close-btn");
const hamburgerIcon = document.querySelector(".list");
const navCheck = document.getElementById("nav_check");

// Open the navigation when the hamburger icon is clicked
hamburgerIcon.addEventListener("click", () => {
  nav.style.right = "0"; // Slide in the nav
});

// Close the navigation when any link is clicked
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

// Close the navigation when the close button is clicked
closeBtn.addEventListener("click", () => {
  closeNav();
});

// Function to close the navigation
function closeNav() {
  nav.style.right = "-280px"; // Slide out the nav
  navCheck.checked = false; // Uncheck the checkbox to show the hamburger icon again
}

// Close the navigation when the user scrolls
window.addEventListener("scroll", () => {
  if (navCheck.checked) {
    closeNav(); // Call closeNav function if nav is open
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-section");

  function onScroll() {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight - 100) {
      // Adjust this value to control when the animation triggers
      aboutSection.classList.add("visible");
      window.removeEventListener("scroll", onScroll); // Remove event listener once animation is triggered
    }
  }

  window.addEventListener("scroll", onScroll);
});

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

document.addEventListener("scroll", function () {
  var skillsContent = document.querySelector(".skills-content");
  var otherSkills = document.querySelector(".other-skills");
  var skillsContentPosition = skillsContent.getBoundingClientRect().top;
  var otherSkillsPosition = otherSkills.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (skillsContentPosition < windowHeight) {
    skillsContent.classList.add("animated");
  }
  if (otherSkillsPosition < windowHeight) {
    otherSkills.classList.add("animated");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const serviceContent = document.querySelector(".services .service-content");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          serviceContent.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once the element is visible
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  observer.observe(serviceContent);
});

let filterItem = document.querySelector(".item-links");
let filterImages = document.querySelectorAll(".img-link");

window.addEventListener("load", () => {
  filterItem.addEventListener("click", (selectedItem) => {
    if (selectedItem.target.classList.contains("item-link")) {
      document.querySelector(".menu-active").classList.remove("menu-active");
      selectedItem.target.classList.add("menu-active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImages.forEach((image) => {
        let imageFilterName = image.getAttribute("data-name");
        if (imageFilterName === filterName || filterName === "all") {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }
  });
});
