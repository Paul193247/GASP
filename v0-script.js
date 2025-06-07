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
      title: "EUFOR ALTHEA",
      content:
        "Am 2. November 2022 wurde das Mandat für die Operation EUFOR (European Union Force) ALTHEA, auch Operation Althea genannt, von dem Sicherheitsrat der Vereinten Nationen erneuert. Die Aufgabe der Operation ist die Friedenssicherung und Gewährleistung der Stabilität in dem ethnisch und politisch gespaltenen Bosnien und Herzegowina und ist seit dem 12. Juni 2004 aktiv. Seit dem Abschluss des Dayton-Friedensabkommens haben keine Kampfhandlungen mehr stattgefunden, jedoch birgt das Land weiterhin ein Konfliktpotenzial. Die Verhinderung von Gewaltausbrüchen soll durch eine militärische Präsenz gewährleistet werden. Zu Beginn der Mission am 2. Dezember 2004 waren 6.400 Soldaten in Bosnien und Herzegowina stationiert, aufgrund einer verbesserten Sicherheitslage konnte diese im Februar 2007 jedoch auf 2.500 reduziert werden. Der Deutsche Bundestag hat am 23. Juni 2023 für die Fortsetzung der Beteiligung an der Mission gestimmt. Bis längstens zum 30. Juni 2024 können theoretisch bis zu 50 deutsche Soldaten eingesetzt werden.",
    },
    nordamerika: {
      title: "EUNAVFOR ATALANTA",
      content:
        "Die EUNAVFOR (European Union Naval Force) Operation Atalanta ist eine Mission der EU gegen Piraterie am Horn von Afrika. Die Mission ist die erste Marineoperation der EU und besteht seit 2008. Die Mission sollte konkret humanitäre Hilfslieferungen nach Somalia schützen, sowie die Piraterie an der Küste Somalias bekämpfen und somit den Schutz der Handelsschiffe sicherstellen. Die Mission ist die Nachfolgemission der NATO-Operation Operation Allied Provider. Von 2009 bis Juli 2015 konnten im Rahmen der Operation insgesamt 439 Schiffe mit Hilfsgütern geschützt werden und 155 Piraten konnten an die Strafverfolgung übergeben werden, von denen 128 verurteilt wurden. </br> Die Deutsche Bundeswehr beteiligte sich von 2008 bis 2022 an der Mission.",
    },
    asien: {
      title: "EUNAVFOR ASPIDES",
      content:
        "Die GASP-Mission EUNAVFOR ASPIDES richtet sich gegen die radikalislamische Huthi-Miliz im Roten Meer, insbesondere in der Meerenge Bab al-Mandab. Die Huthi-Miliz greift internationale Handelsschiffe aus Solidarität mit Palästina an und wird sowohl politisch als auch militärisch vom Iran unterstützt. Die Angriffe der Miliz destabilisieren die internationale Schifffahrt, da 15 % aller maritimen Handelsrouten über diese Meerenge verlaufen, womit sie von enormer Bedeutung für den internationalen Handel ist. Laut dem „Integrated Situational Awareness and Analysis Report“ der EU-Kommission würde dies einen Rückgang des Schiffsverkehrs in dieser Region um 73 % zur Folge haben. Die Ausweichroute führt über das Kap der Guten Hoffnung und ist ca. 14 Tage länger. Am 19. Februar 2024 wurde die GASP-Mission ins Leben gerufen und arbeitet seitdem eng mit der Operation Atalanta zusammen.",
    },
    afrika: {
      title: "EUNAVFOR MED IRINI",
      content:
        "EUNAVFOR MED IRINI, auch Operation Irini ist eine Mission der GASP zur Durchsetzung des Waffenembargos gegen Libyen. Ein Waffenembargo ist ein Verbot des Exports/Imports von Waffen. In diesem Fall wurde von der UN ein Waffenembargos gegenüber Libyen verhängt um zu verhindern, das mehr Waffen an die im Bürgerkrieg verwickelten Konfliktpartein geraten. Die Oparation Irini ist die Nachfolgemission der Operation Sophia und wurde am 31. März 2020 gestartet. Die Kernaufgabe ist das Verhindern von illegalen Waffenlieferungen mithilfe von Luft-, See- und Satellitenüberwachung. Zusätzlich soll die Mission Menschenschmuggel zerschlagen, die libysche Küstenwache ausbilden und illegale Öl Exporte überwachen. Die Mission wird jedoch von Regierung der Nationalen Übereinkunft (GNA), einer Kriegspartei in Libyen, kritisiert, da die Mission Waffenlieferungen über den Seeweg stoppen könne, jedoch könne der Langweg nur von Satelliten oder Radar erfasst werden, was Waffenlieferungen dort zulasse, wovon eine andere Kriegspartei profitieren würde. </br> Deutsche Streitkräfte sind seit dem 7. Mai 2020 beteiligt und bis zum 30. November können bis zu 300 deutsche Soldaten eingesetzt werden.",
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
