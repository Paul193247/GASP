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

// Header background on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
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

document.addEventListener('DOMContentLoaded', function() {
  const timeline = document.getElementById('timeline-horizontal');
  if (!timeline) return;

  let timelineLockActive = false;
  let timelineLockY = 0;

  // Hilfsfunktion: Timeline-Section vertikal mittig im Viewport?
  function isTimelineSectionCentered() {
    const section = timeline.closest('.content-section');
    const rect = section.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    return center > window.innerHeight / 2 - 10 && center < window.innerHeight / 2 + 10;
  }

  // Finde die Y-Position, bei der die Timeline-Section mittig ist
  function getTimelineSectionCenterY() {
    const section = timeline.closest('.content-section');
    const rect = section.getBoundingClientRect();
    const scrollY = window.scrollY;
    const sectionTop = rect.top + scrollY;
    const sectionCenter = sectionTop + rect.height / 2;
    return sectionCenter - window.innerHeight / 2;
  }

  // Lock-Mechanismus: Seite bleibt stehen, Timeline scrollt horizontal
  window.addEventListener('scroll', function() {
    if (!timelineLockActive && isTimelineSectionCentered()) {
      timelineLockActive = true;
      timelineLockY = getTimelineSectionCenterY();
      window.scrollTo({ top: timelineLockY });
    }
    // Wenn Section nicht mehr mittig ist, Lock deaktivieren
    if (timelineLockActive && !isTimelineSectionCentered()) {
      timelineLockActive = false;
    }
  });

  window.addEventListener('wheel', function(e) {
    if (!timelineLockActive) return;

    const maxTimelineScroll = timeline.scrollWidth - timeline.clientWidth;

    // Horizontal scrollen, solange Timeline nicht am Ende ist
    if (
      (e.deltaY > 0 && timeline.scrollLeft < maxTimelineScroll) ||
      (e.deltaY < 0 && timeline.scrollLeft > 0)
    ) {
      e.preventDefault();
      let newScrollLeft = timeline.scrollLeft + e.deltaY;
      newScrollLeft = Math.max(0, Math.min(maxTimelineScroll, newScrollLeft));
      timeline.scrollLeft = newScrollLeft;
      window.scrollTo({ top: timelineLockY });
    }

    // Unlock, wenn Timeline ganz rechts (nach unten) oder ganz links (nach oben) ist
    if (
      (timeline.scrollLeft >= maxTimelineScroll && e.deltaY > 0) ||
      (timeline.scrollLeft <= 0 && e.deltaY < 0)
    ) {
      timelineLockActive = false;
    }
  }, { passive: false });

  // Initialisierung: Lock aktivieren, wenn Section mittig ist
  if (isTimelineSectionCentered()) {
    timelineLockActive = true;
    timelineLockY = getTimelineSectionCenterY();
    window.scrollTo({ top: timelineLockY });
  }
});
