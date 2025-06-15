const button = document.getElementById("download");

button.addEventListener("click", function (e) {
  const link = document.createElement("a");
  link.href = window.location.pathname.replace(".html", ".pdf"); // passe den Pfad an
  link.download = window.location.pathname
    .replace(".html", ".pdf")
    .split("/")[2]; // der gewünschte Dateiname
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
