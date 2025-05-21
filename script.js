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
