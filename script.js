// Simple parallax effect
document.addEventListener("scroll", function () {
  const layers = document.querySelectorAll(".parallax-layer");
  const scrollPosition = window.pageYOffset;

  layers.forEach((layer, index) => {
    const speed = 0.1 * (index + 1);
    layer.style.transform = `translateY(${scrollPosition * speed}px)`;
  });

  // Parallax effect for parataxe section
  const parataxeLayers = document.querySelectorAll(".parataxe-layer");
  const parataxeSection = document.querySelector(".parataxe-section");

  if (parataxeSection) {
    const parataxeTop = parataxeSection.getBoundingClientRect().top;
    const parataxeHeight = parataxeSection.offsetHeight;

    if (parataxeTop < window.innerHeight && parataxeTop > -parataxeHeight) {
      const scrollRatio =
        (window.innerHeight - parataxeTop) /
        (window.innerHeight + parataxeHeight);

      parataxeLayers.forEach((layer, index) => {
        const speed = 50 * (index + 1);
        layer.style.transform = `translateY(${scrollRatio * speed}px)`;
      });
    }
  }

  // Scroll animations
  const scrollAnimations = document.querySelectorAll(".scroll-animation");
  scrollAnimations.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight * 0.85) {
      element.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const svg = document.getElementById("map-svg");
  let zoom = 1;
  const minZoom = 1;
  const maxZoom = 3;

  document.getElementById("zoom-in").onclick = function () {
    if (zoom < maxZoom) {
      zoom += 0.2;
      svg.style.transform = `scale(${zoom})`;
    }
  };
  document.getElementById("zoom-out").onclick = function () {
    if (zoom > minZoom) {
      zoom -= 0.2;
      svg.style.transform = `scale(${zoom})`;
    }
  };

  // Highlight-Logik
  const regions = svg.querySelectorAll(".map-region");
  regions.forEach(region => {
    region.addEventListener("click", function () {
      regions.forEach(r => r.classList.remove("highlighted"));
      this.classList.add("highlighted");
      // Optional: Info-Text anpassen
      document.getElementById("region-info").innerHTML = `
        <h3>${this.dataset.region.charAt(0).toUpperCase() + this.dataset.region.slice(1)}</h3>
        <p>[Platzhaltertext] Informationen zu GASP-Aktivitäten in dieser Region.</p>
      `;
    });
  });
});