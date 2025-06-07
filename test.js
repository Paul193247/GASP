const map = document.querySelector("svg");
const countries = document.querySelectorAll("path");
const sidePanel = document.querySelector(".side-panel");
const container = document.querySelector(".side-panel .container");
const closeBtn = document.querySelector(".close-button");
const zoomInBtn = document.querySelector(".zoom-in");
const zoomOutBtn = document.querySelector(".zoom-out");
const zoomValue = document.querySelector(".zoom-value");

const headline = document.querySelector(".headline");
const description = document.querySelector(".text");

const countrydata = {
  BA: {
    headline: "EUFOR ALTHEA",
    description:
      "Am 2. November 2022 wurde das Mandat für die Operation EUFOR (European Union Force) ALTHEA, auch Operation Althea genannt, von dem Sicherheitsrat der Vereinten Nationen erneuert. Die Aufgabe der Operation ist die Friedenssicherung und Gewährleistung der Stabilität in dem ethnisch und politisch gespaltenen Bosnien und Herzegowina und ist seit dem 12. Juni 2004 aktiv. Seit dem Abschluss des Dayton-Friedensabkommens haben keine Kampfhandlungen mehr stattgefunden, jedoch birgt das Land weiterhin ein Konfliktpotenzial. Die Verhinderung von Gewaltausbrüchen soll durch eine militärische Präsenz gewährleistet werden. Zu Beginn der Mission am 2. Dezember 2004 waren 6.400 Soldaten in Bosnien und Herzegowina stationiert, aufgrund einer verbesserten Sicherheitslage konnte diese im Februar 2007 jedoch auf 2.500 reduziert werden. Der Deutsche Bundestag hat am 23. Juni 2023 für die Fortsetzung der Beteiligung an der Mission gestimmt. Bis längstens zum 30. Juni 2024 können theoretisch bis zu 50 deutsche Soldaten eingesetzt werden.",
  },
  SO: {
    headline: "EUNAVFOR ATALANTA",
    description:
      "Die EUNAVFOR (European Union Naval Force) Operation Atalanta ist eine Mission der EU gegen Piraterie am Horn von Afrika. Die Mission ist die erste Marineoperation der EU und besteht seit 2008. Die Mission sollte konkret humanitäre Hilfslieferungen nach Somalia schützen, sowie die Piraterie an der Küste Somalias bekämpfen und somit den Schutz der Handelsschiffe sicherstellen. Die Mission ist die Nachfolgemission der NATO-Operation Operation Allied Provider. Von 2009 bis Juli 2015 konnten im Rahmen der Operation insgesamt 439 Schiffe mit Hilfsgütern geschützt werden und 155 Piraten konnten an die Strafverfolgung übergeben werden, von denen 128 verurteilt wurden. Die Deutsche Bundeswehr beteiligte sich von 2008 bis 2022 an der Mission.",
  },
  YE: {
    headline: "EUNAVFOR ASPIDES",
    description:
      "Die GASP-Mission EUNAVFOR ASPIDES richtet sich gegen die radikalislamische Huthi-Miliz im Roten Meer, insbesondere in der Meerenge Bab al-Mandab. Die Huthi-Miliz greift internationale Handelsschiffe aus Solidarität mit Palästina an und wird sowohl politisch als auch militärisch vom Iran unterstützt. Die Angriffe der Miliz destabilisieren die internationale Schifffahrt, da 15 % aller maritimen Handelsrouten über diese Meerenge verlaufen, womit sie von enormer Bedeutung für den internationalen Handel ist. Laut dem „Integrated Situational Awareness and Analysis Report“ der EU-Kommission würde dies einen Rückgang des Schiffsverkehrs in dieser Region um 73 % zur Folge haben. Die Ausweichroute führt über das Kap der Guten Hoffnung und ist ca. 14 Tage länger. Am 19. Februar 2024 wurde die GASP-Mission ins Leben gerufen und arbeitet seitdem eng mit der Operation Atalanta zusammen.",
  },
  // Add more countries as needed
};

countries.forEach((country) => {
  if (Object.keys(countrydata).includes(country.id)) {
    country.style.fill = "#000";
    country.addEventListener("mouseenter", function () {
      const classList = [...this.classList].join(".");
      if (classList.length > 0) {
        const selector = "." + classList;
        const matchingElements = document.querySelectorAll(selector);
        matchingElements.forEach((element) => {
          element.style.fill = "#c99aff";
        });
      }
      this.style.fill = "#c99aff";
    });
    country.addEventListener("mouseout", function () {
      const classList = [...this.classList].join(".");
      if (classList.length > 0) {
        const selector = "." + classList;
        const matchingElements = document.querySelectorAll(selector);
        matchingElements.forEach((element) => {
          element.style.fill = "#443d4b";
        });
      }
      this.style.fill = "#000";
    });
    country.addEventListener("click", function () {
      const data = countrydata[this.id];
      if (data) {
        headline.textContent = data.headline;
        description.textContent = data.description;
      }
      sidePanel.classList.add("side-panel-open");
    });
  }
  country.addEventListener("click", function () {
    console.log(this.id);
  });
});

closeBtn.addEventListener("click", function () {
  sidePanel.classList.remove("side-panel-open");
  headline.textContent = "";
  description.textContent = "";
});

let zoomLevel = 100;

zoomOutBtn.disabled = true;

zoomInBtn.addEventListener("click", function () {
  zoomLevel += 50;
  zoomValue.textContent = `${zoomLevel}%`;
  zoomOutBtn.disabled = false;

  if (zoomLevel >= 400) {
    zoomInBtn.disabled = true;
  }
  map.style.width = `${zoomLevel}vw`;
  map.style.height = `${zoomLevel}vh`;
});

zoomOutBtn.addEventListener("click", function () {
  zoomLevel -= 50;
  zoomValue.textContent = `${zoomLevel}%`;
  zoomOutBtn.disabled = false;

  if (zoomLevel <= 100) {
    zoomOutBtn.disabled = true;
  }
  map.style.width = `${zoomLevel}vw`;
  map.style.height = `${zoomLevel}vh`;
});
