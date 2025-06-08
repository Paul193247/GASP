const map = document.querySelector("svg");
const countries = document.querySelectorAll("path");
const zoomInBtn = document.querySelector(".zoom-in");
const zoomOutBtn = document.querySelector(".zoom-out");
const zoomValue = document.querySelector(".zoom-value");
const countrydata_military = {
  BA: {
    //
    headline: "EUFOR ALTHEA",
    description:
      "Am 2. November 2022 wurde das Mandat für die Operation EUFOR (European Union Force) ALTHEA, auch Operation Althea genannt, von dem Sicherheitsrat der Vereinten Nationen erneuert. Die Aufgabe der Operation ist die Friedenssicherung und Gewährleistung der Stabilität in dem ethnisch und politisch gespaltenen Bosnien und Herzegowina und ist seit dem 12. Juni 2004 aktiv. Seit dem Abschluss des Dayton-Friedensabkommens haben keine Kampfhandlungen mehr stattgefunden, jedoch birgt das Land weiterhin ein Konfliktpotenzial. Die Verhinderung von Gewaltausbrüchen soll durch eine militärische Präsenz gewährleistet werden. Zu Beginn der Mission am 2. Dezember 2004 waren 6.400 Soldaten in Bosnien und Herzegowina stationiert, aufgrund einer verbesserten Sicherheitslage konnte diese im Februar 2007 jedoch auf 2.500 reduziert werden. Der Deutsche Bundestag hat am 23. Juni 2023 für die Fortsetzung der Beteiligung an der Mission gestimmt. Bis längstens zum 30. Juni 2024 können theoretisch bis zu 50 deutsche Soldaten eingesetzt werden.",
  },
  ES: {
    headline: "EUNAVFOR ATALANTA",
    description:
      "Die EUNAVFOR (European Union Naval Force) Operation Atalanta ist eine Mission der EU gegen Piraterie am Horn von Afrika. Die Mission ist die erste Marineoperation der EU und besteht seit 2008. Die Mission sollte konkret humanitäre Hilfslieferungen nach Somalia schützen, sowie die Piraterie an der Küste Somalias bekämpfen und somit den Schutz der Handelsschiffe sicherstellen. Die Mission ist die Nachfolgemission der NATO-Operation Operation Allied Provider. Von 2009 bis Juli 2015 konnten im Rahmen der Operation insgesamt 439 Schiffe mit Hilfsgütern geschützt werden und 155 Piraten konnten an die Strafverfolgung übergeben werden, von denen 128 verurteilt wurden. Die Deutsche Bundeswehr beteiligte sich von 2008 bis 2022 an der Mission.",
  },
  YE: {
    headline: "EUNAVFOR ASPIDES",
    description:
      "Die GASP-Mission EUNAVFOR ASPIDES richtet sich gegen die radikalislamische Huthi-Miliz im Roten Meer, insbesondere in der Meerenge Bab al-Mandab. Die Huthi-Miliz greift internationale Handelsschiffe aus Solidarität mit Palästina an und wird sowohl politisch als auch militärisch vom Iran unterstützt. Die Angriffe der Miliz destabilisieren die internationale Schifffahrt, da 15 % aller maritimen Handelsrouten über diese Meerenge verlaufen, womit sie von enormer Bedeutung für den internationalen Handel ist. Laut dem „Integrated Situational Awareness and Analysis Report“ der EU-Kommission würde dies einen Rückgang des Schiffsverkehrs in dieser Region um 73 % zur Folge haben. Die Ausweichroute führt über das Kap der Guten Hoffnung und ist ca. 14 Tage länger. Am 19. Februar 2024 wurde die GASP-Mission ins Leben gerufen und arbeitet seitdem eng mit der Operation Atalanta zusammen.",
  },
  LY: {
    headline: "EUNAVFOR MED IRINI",
    description:
      "EUNAVFOR MED IRINI, auch Operation Irini ist eine Mission der GASP zur Durchsetzung des Waffenembargos gegen Libyen. Ein Waffenembargo ist ein Verbot des Exports/Imports von Waffen. In diesem Fall wurde von der UN ein Waffenembargos gegenüber Libyen verhängt um zu verhindern, das mehr Waffen an die im Bürgerkrieg verwickelten Konfliktpartein geraten. Die Oparation Irini ist die Nachfolgemission der Operation Sophia und wurde am 31. März 2020 gestartet. Die Kernaufgabe ist das Verhindern von illegalen Waffenlieferungen mithilfe von Luft-, See- und Satellitenüberwachung. Zusätzlich soll die Mission Menschenschmuggel zerschlagen, die libysche Küstenwache ausbilden und illegale Öl Exporte überwachen. Die Mission wird jedoch von Regierung der Nationalen Übereinkunft (GNA), einer Kriegspartei in Libyen, kritisiert, da die Mission Waffenlieferungen über den Seeweg stoppen könne, jedoch könne der Langweg nur von Satelliten oder Radar erfasst werden, was Waffenlieferungen dort zulasse, wovon eine andere Kriegspartei profitieren würde. Deutsche Streitkräfte sind seit dem 7. Mai 2020 beteiligt und bis zum 30. November können bis zu 300 deutsche Soldaten eingesetzt werden.",
  },
  SO: {
    headline: "EUTM Somalia",
    description:
      "Die EUTM (European Union Training Mission) Somalia soll die somalischen Streitkräfte ausbilden, sodass sie selbst für die Stabilisierung sorgen können. Unter anderem aufgrund eines langen Bürgerkrieges in Somalia bedrohen von Somalia ausgehende Piraterie und Terrorismus die nationale Sicherheit. Daher sollen europäische Soldaten die somalischen Streitkräfte ausbilden und als Berater dienen. 2009 wurden somalische Streitkräfte erstmals von Uganda ausgebildet, diese stießen jedoch an ihre Grenzen. Daher stellten sie am 5. Januar 2009 einen Antrag auf Unterstützung durch die EU, welcher am 25. Januar angenommen wurde. Bis Anfang 2018 konnten somit etwa 5.600 Soldaten durch die EUTM Somalia ausgebildet werden. Von März 2010 bis März 2018 beteiligte sich die deutsche Bundeswehr an der Mission mit durchgehend ungefähr zehn Soldaten.",
  },
  CF: {
    headline: "EUTM RCA",
    description:
      "Die EUTM (European Union Training Mission) RCA ist eine Ausbildungsmission der GASP für zentralafrikanische Streitkräfte. Im Rahmen der Mission wurden sechs Bataillone mit insgesamt 3.100 Soldaten ausgebildet. Die Mission startete am 16. Juni 2016 und wird bis heute fortgeführt. Das Mandat dauert noch bis zum 19. September 2025. Die Mission enthält jedoch kein exekutives Mandat, das heißt, sie ist eine reine Ausbildungs- und Beratungsmission.",
  },
  UA: {
    //
    headline: "EUMAM Ukraine",
    description:
      "Die EUMAM (European Union Military Assistance Mission) Ukraine ist eine Militärhilfemission der EU, die nach dem russischen Angriffskrieg ins Leben gerufen wurde. Sie ist seit dem 15. November 2022 aktiv, und ihre Hauptaufgabe ist das Training von ukrainischen Soldaten, sodass diese sich effektiv gegen Russland und andere potenzielle Aggressoren verteidigen können. Bis Mai 2025 konnten im Rahmen der Mission über 75.000 ukrainische Soldaten ausgebildet werden. Die Mission ist offen gegenüber gleichgesinnten Drittstaaten und arbeitet eng mit anderen internationalen Partnern zusammen. Die EUMAM ist außerdem die erste Ausbildungsmission der GASP in Europa. Als Reaktion auf die Mission behauptete die Sprecherin des russischen Außenministeriums, dass die EU sich damit zu einer Konfliktpartei mache.",
  },
  MZ: {
    headline: "EUMAM Mosambik",
    description:
      "Die EUMAM (European Union Military Assistance Mission) Mosambik ist eine Ausbildungsmission der GASP für mosambikanische Soldaten im Kampf gegen die Rebellengruppe al-Shabab (deutsch: die Jugend). Die Rebellengruppe hat seit April 2018 dem Islamischen Staat die Treue geschworen und wurde 2019 von diesem als Mitglied anerkannt. Die Aufgabe der EUMAM Mosambik ist die Ausbildung der mosambikanischen Streitkräfte, die Ausbildung von Spezialeinheiten, das Training in den Bereichen der Menschenrechte, des humanitären Völkerrechts und des Schutzes der Zivilbevölkerung sowie die Unterstützung der UN-Resolution 1325, welche dazu aufruft, die Rechte von Frauen zu schützen. Insgesamt sollen im Rahmen der Mission elf Kompanien ausgebildet werden. Bis zum 1. September 2024 hieß die Mission noch EUTM (European Union Training Mission) Mosambik, da die Mission seitdem jedoch eine militärische Unterstützungsmission ist, wurde sie am 1. September 2024 in EUMAM Mosambik umbenannt. Die Mission ist seit Dezember 2021 aktiv und wurde bis zum 30. Juni 2026 verlängert.",
  },
};

const countrydata_civil = {
  GE: {
    headline: "EUMM Georgia",
    description:
      "Die EUMM (European Union Monitoring Mission) Georgia ist eine unbewaffnete, zivile Beobachtungsmission der GASP in Georgien. Das Ziel der Mission ist die Überwachung, ob in Georgien nach dem Kaukasus-Konflikt wieder Stabilität hergestellt werden kann und ob Menschenrechte und humanitäre Vökerrechte eingehalten werden. Der Kaukasus-Konflikt war ein militärischer Konflikt im Jahr 2008 zwischen Georgien und den international nicht anerkannten Republiken Südossetien und Abchasien, welche von Russland unterstützt wurden. Am 12. August 2008 vermittelte die EU eine Sechs-Punkte-Vereinbarung zwischen Russland und Georgien, die den Konflikt beendete. Eine weitere zentrale Aufgabe der EUMM Georgia ist daher die Überwachung der Einhaltung dieser Vereinbarung.",
  },
  XK: {
    headline: "EULEX Kosovo",
    description:
      "Die EULEX Kosovo (European Union Rule of Law Mission in Kosovo) ist eine Zivile Mission in Kosovo, welche dem Land beim Aufbau von Polizei, Justiz und Verwaltung helfen soll. Die Mission startete im Jahr 2008 nach der Unabhängigkeitserklärung Kosovos und das Mandat läuft noch bis zum 14. Juni 2025. Im Rahmen der Mission wurden zwischenzeitlich bis zu 2.000 Polizisten, Richter, Zollbeamte und Gefängnisaufseher nach Kosovo entsandt. Vom 15. Juni 2018 bis zum 14. Juni 2020 konnten 784 Gerichtsverhandlungen in 214 verschiedenen Verfahren abgehalten werden. Von Anfang der Mission bis zum 14. Juni 2020 konnten gab es außerdem 653 Missionen zum Auffinden vermisster Personen. Die Mission hat vorrangig eine beratende und beobachtende Funktion, hat jedoch auch in Teilen eine exekutive Aufgabe. Die völkerrechtliche Befugnis der Mission ist jedoch nicht vollständig geklärt, daher streiten beispielsweise Russland und Serbien die Legalität der Mission ab. Ein weiterer Kritikpunkt der Mission ist, dass sich die Mission nicht gegen die korrupe Elite vorgeht und versuchen diese nicht anzuklagen, bzw. zu verurteilen.",
  },
  NE: {
    headline: "EUCAP Sahel Niger",
    description:
      "Die EUCAP Sahel Niger (EU Capacity Building Mission in Niger) ist eine GASP Mission in Niger zur Beratung und Ausbildung nigerianischer Polizisten zur effektiven Terrorismusbekämpfung in der Sahel Zone, da diese von enormer Armut und einer niedrigen Entwicklung gekennzeichnet ist. Die Mission starte am 8. August 2012 wurde am 30. September 2024 bendet, da das nigerische Außenministerium die Mission am 4. Dezember 2023 für Beendet erklärte. ",
  },
  SO: {
    headline: "EUCAP Somalia",
    description:
      "Die EUCAP (European Union Capacity Building Mission) Somalia ist eine seit Juli 2012 andauernde Mission am Horn von Afrika in Somalia. Die EUCAP Somalia soll die zivilen maritimen Sicherheitskapazitäten Somalias erhöhen. Das heißt Somalia soll eigenständig in der Lage sein gegen Piraterie vorzugehen. Die Mission arbeitet eng mit der Mission EUTM Somalia und EUNAVFOR ATALANTA zusammen. Bis Dezember 2016 hieß die Mission EUCAP (EU Capacity Building Mission) Nestor und war in den Staaten Somalia, Dschibuti, Kenia, Tansania und den Seychellen tätig. Seit Dezember 2016 wurde der Name jeodch in EUCAP Somalia umbenannt und ist seitdem nur noch für Somalia zuständig. Das Mandat geht noch bis zum 28. Februar 2027, kann jedoch erneuert werden.",
  },
  LY: {
    headline: "EUBAM Libya",
    description:
      "Die EU Integrated Border Assistance Mission in Libya (EUBAM Libya) ist eine zivile GASP Mission zur Sicherung der libyschen Grenzen. Die Mission startete am 22 Mai 2013 und ist immernoch andauernd, das Mandat hält jedoch nur noch bis zum 30 Juni 2025. Im Rahmen der Mission wird die libysche Polizei, Grenzschutzbehörde und Zoll ausgebildet. Der Schwerpunkt hierbei liegt auf Menschenrechten und Gender Mainstreaming. Gender Mainstreaming ist die Gleichstellung von Mann und Frau in der Politik und Gesellschaft. Eine weitere Mission in Libyen ist die Unterstützungsmission der Vereinten Nationen in Libyen (UNSMIL). Beide Missionen haben ihr Haupquatier im Nachbarland Tunesien bis zur Verbesserung der Sicherheitslage in Libyen.",
  },
  ML: {
    headline: "EUCAP Sahel Mali",
    description:
      "Die EUCAP (European Union Capacity Building Mission) Sahel Mali ist eine Mission der GASP um die Sicherheitskräfte Malis dabei zu unterstützen sich gegen Fraktionen des Mali-Konflikts durchzusetzen. Der Mali-Konflikt ist ein seit dem 16. Januar 2012 andauernder Krieg in Mali zwischen der Regierung und mehreren Milizen von denen mehrere von islamischen Spektrum gehören. Daher wurde auf offizieller Einladung der malischen Regierung am 15. Januar 2015 die Mission ins Leben gerufen. Das Mandat hält noch bis ende Januar 2027. Im Rahmen der Mission gab es durchschnittlich 15 Schulungsmaßnahmen pro Monat. Es konnte außerdem bei der Ausarbeitung des Strafgesetzbuches und der Umsetzung nationaler Strategien zur zur Sicherung der Grenzgebiete geholfen werden. ",
  },
  UA: {
    //
    headline: "EUAM Ukraine",
    description:
      "Die EUAM (European Union Advisory Mission for Civilian Security Sector Reform) Ukraine ist eine zivile Mission der GASP, welche der Ukraine in einer beratenden Unterstütung leistet bei der Umsetzung von Reformen im Sicherheitssektor, das heißt bei Reformen von Institutionen wie der Nationalgarde, dem Grenzschutz, der Nationalpolizei, dem Migrationsdienst und weiteren. Die Mission startete am 1. Dezember 2014 auf bitte der ukrainischen Regierung, nachdem die ukrainische Bevölkerung nach der Revolution der Würde misstrauen gegenüber den ukrainischen Behörden empfand. Die Revolution der Würde bezeichnet Massenproteste zwischen Ende November 2013 und Februar 2014 nach der überaschenden Erklärung der ukrainischen Regierung, dass sie das Assoziierungsabkommen mit der Europäischen Union nicht unterzeichnen würde. Im Rahmen der Proteste kam es zu vermehrten gewaltsamer Zusammenstöße zwischen Demonstranten und Polizisten. Daher bat die ukrainische Regierung um eine Reform um das Vertrauen der Bevölkerung wieder herzustellen. Das Mandat der Mission läuft noch bis zum 31. Mai 2027.",
  },
  IQ: {
    headline: "EUAM Iraq",
    description:
      "Die EUAM (European Union Advisory Mission for Civilian Security Sector Reform) Iraq ist eine zivile GASP Mission, welche seit Oktober 2017 andauert und irakische Behörden berät und ihnen bei der Reform des nationalen Sicherheitssektors (SSR) unterstützt. Das Hauptziel des SSR ist, das die Sicherheit der Bürger im Mittelpunkt steht. Ein weiterer Fokus der Mission liegt bei der Unterstützung bei der Bekämpfung von Terrorristen und organisierter Kriminalität.",
  },
  MD: {
    headline: "EUPM Moldova",
    description:
      "Aufgrund von vermehrten Cyberangriffen und gezielter ausländischer Informationsmanipulation in Moldau nach dem russischen Angriffskrieg auf die Ukraine bat die Republik Moldau die EU am 28. Januar 2023 eine zivile GASP Mission nach Moldau zu endsenden. Das Ziel der EUPM (European Union Police Mission) Moldova ist es die Krisenmanagementstrukturen Moldaus und ihre Verteidigung gegenüber hybriden Bedrohungen, wie beispielsweise Cyberangriffe oder ausländischer Informationsmanipulation und -einmischung (FIMI) zu erhöhen. Das Mandat der Mission läuft noch bis zum 31. Mai 2027.",
  },
  AM: {
    headline: "EUM Armenia",
    description:
      "Die GASP Mission EUM (European Union Mission) Armenia baut auf zwei früheren Missionen auf, der EUMCAP (European Union Monitoring Capacity) Armenia und der EUPAT (European Union Planning Assistance Team) Armenia. Ziel der Mission ist es in den Grenzgebieten zwischen Armenien und Aserbaidschan für Stabilität zu sorgen und dort Vertrauen aufzubauen um das Verhältnis zwischen Armenien und Aserbaidschan zu normalisieren. Die Mission startete am 20. Februar 2023 und das Mandat läuft bis zum 19. Februar 2027. Deutschland beteiligt sich an der Mission mit maximal 15 Beamten. ",
  },
  CF: {
    headline: "EUAM RCA",
    description:
      "Die EUAM RCA (European Union Advisory Mission in the Central African Republic) ist eine militärische Beratungsmission in Zentralafrika. Sie startete am 16. März 2015 als Nachfolgemission der EUFOR RCA (European Union Force Central African Republic) und läuft noch bis zum 07. August 2026. Ziel der Mission ist die Reformation der Zentralafrikanischen Streitkräfte. Ein Fokus liegt außerdem auf Geschlechtergleichstellung und Integration der Menschenrechte.",
  },
  GN: {
    headline: "EU SDI GOG",
    description: "",
  },
};

countries.forEach((country) => {
  if (
    Object.keys(countrydata_military).includes(country.id) ||
    Object.keys(countrydata_civil).includes(country.id)
  ) {
    country.classList.add("selectable");
    country.addEventListener("mouseenter", function () {
      this.classList.add("hovered");
    });
    country.addEventListener("mouseout", function () {
      this.classList.remove("hovered");
    });
    country.addEventListener("click", function () {
      const data = countrydata_military[this.id];
      const dataCivil = countrydata_civil[this.id];
      window.parent.postMessage(
        {
          type: "countrySelected",
          headline1: data?.headline,
          description1: data?.description,
          headline2: dataCivil?.headline,
          description2: dataCivil?.description,
        },
        "*"
      );
    });
  }
  country.addEventListener("click", function () {
    console.log(this.id);
  });
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
