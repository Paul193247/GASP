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

// Interactive World Map
document.addEventListener("DOMContentLoaded", function () {
  const mapRegions = document.querySelectorAll(".map-region");
  const regionInfo = document.getElementById("region-info");

  const regionData = {
    europa: {
      title: "Europa - Zentrum der GASP",
      content:
        "[Platzhaltertext] Europa bildet das Herzstück der Gemeinsamen Außen- und Sicherheitspolitik. Hier werden die wichtigsten Entscheidungen getroffen und die strategischen Richtungen festgelegt. Die EU-Institutionen arbeiten eng zusammen, um eine kohärente Außenpolitik zu entwickeln.",
    },
    nordamerika: {
      title: "Nordamerika - Transatlantische Partnerschaft",
      content:
        "[Platzhaltertext] Die Beziehungen zu Nordamerika, insbesondere zu den USA und Kanada, sind ein Grundpfeiler der GASP. Die transatlantische Partnerschaft umfasst Sicherheitskooperation, Handel und gemeinsame Werte in der internationalen Politik.",
    },
    asien: {
      title: "Asien - Strategische Partnerschaften",
      content:
        "[Platzhaltertext] Asien gewinnt in der GASP zunehmend an Bedeutung. Die EU entwickelt strategische Partnerschaften mit Ländern wie China, Japan und Indien, um regionale Stabilität und wirtschaftliche Zusammenarbeit zu fördern.",
    },
    afrika: {
      title: "Afrika - Entwicklungspartnerschaft",
      content:
        "[Platzhaltertext] Afrika steht im Fokus der EU-Entwicklungspolitik und Sicherheitskooperation. Die GASP umfasst Friedensmissionen, Entwicklungshilfe und die Förderung demokratischer Strukturen auf dem afrikanischen Kontinent.",
    },
    suedamerika: {
      title: "Südamerika - Regionale Kooperation",
      content:
        "[Platzhaltertext] Die Beziehungen zu Südamerika konzentrieren sich auf Handelsabkommen, Umweltschutz und die Stärkung demokratischer Institutionen. Die EU arbeitet eng mit regionalen Organisationen zusammen.",
    },
    ozeanien: {
      title: "Ozeanien - Pazifische Partnerschaften",
      content:
        "[Platzhaltertext] Die Zusammenarbeit mit Ozeanien umfasst Klimaschutz, maritime Sicherheit und wirtschaftliche Partnerschaften. Besonders Australien und Neuseeland sind wichtige strategische Partner der EU.",
    },
  };

  mapRegions.forEach((region) => {
    region.addEventListener("click", function () {
      const regionKey = this.getAttribute("data-region");
      const data = regionData[regionKey];

      if (data) {
        regionInfo.innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.content}</p>
        `;
      }

      // Visual feedback
      mapRegions.forEach((r) => (r.style.fill = "#666"));
      this.style.fill = "#003399";
    });

    region.addEventListener("mouseenter", function () {
      if (this.style.fill !== "rgb(0, 51, 153)") {
        this.style.fill = "#0066ff";
      }
    });

    region.addEventListener("mouseleave", function () {
      if (this.style.fill !== "rgb(0, 51, 153)") {
        this.style.fill = "#666";
      }
    });
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
