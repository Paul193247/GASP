// Enhanced parallax effect
document.addEventListener("scroll", function () {
  const layers = document.querySelectorAll(".parallax-layer");
  const scrollPosition = window.pageYOffset;

  layers.forEach((layer, index) => {
    const speed = 0.1 * (index + 1);
    layer.style.transform = `translateY(${scrollPosition * speed}px)`;
  });

  // Scroll animations
  const scrollAnimations = document.querySelectorAll(".scroll-animation");
  scrollAnimations.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight * 0.85) {
      element.classList.add("active");
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Enhanced chart animation
document.addEventListener("DOMContentLoaded", function () {
  const chartBars = document.querySelectorAll(".bar");

  const animateChart = () => {
    chartBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.transform = "scaleY(1)";
        bar.style.transformOrigin = "bottom";
      }, index * 200);
    });
  };

  // Trigger animation when chart comes into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateChart();
        observer.unobserve(entry.target);
      }
    });
  });

  const chartContainer = document.querySelector(".chart-placeholder");
  if (chartContainer) {
    observer.observe(chartContainer);
  }
});

const headline = document.querySelector(".headline1");
const headline2 = document.querySelector(".headline2");
const description = document.querySelector(".description1");
const description2 = document.querySelector(".description2");

window.addEventListener("message", function (event) {
  if (event.data?.type === "countrySelected") {
    headline.textContent = event.data.headline1;
    headline2.textContent = event.data.headline2;
    description.textContent = event.data.description1;
    description2.textContent = event.data.description2;
  }
});
