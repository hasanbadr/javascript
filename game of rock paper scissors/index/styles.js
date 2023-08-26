function valitse(pelaajanValinta) {
  var vaihtoehdot = ['kivi', 'paperi', 'sakset'];
  var tietokoneenValinta = vaihtoehdot[Math.floor(Math.random() * vaihtoehdot.length)];

  var tuloksetDiv = document.getElementById('tulokset');
  tuloksetDiv.innerHTML = "Pelaaja valitsi: " + pelaajanValinta + "<br>Tietokone valitsi: " + tietokoneenValinta + "<br>";

  if (pelaajanValinta === tietokoneenValinta) {
    tuloksetDiv.innerHTML += "Tasapeli!";
  } else if (
    (pelaajanValinta === "kivi" && tietokoneenValinta === "sakset") ||
    (pelaajanValinta === "paperi" && tietokoneenValinta === "kivi") ||
    (pelaajanValinta === "sakset" && tietokoneenValinta === "paperi")
  ) {
    tuloksetDiv.innerHTML += "Pelaaja voittaa!";
  } else {
    tuloksetDiv.innerHTML += "Tietokone voittaa!";
  }
}
