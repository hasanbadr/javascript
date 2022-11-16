function lomake1B() {
  //Haetaan html-documentista käyttäjän syöttämät arvot
  var form = document.getElementById("kyselylomake").value;
  var nimi = document.getElementById("nimisyotto").value;
  var sposti = document.getElementById("emailsyotto").value;
  var ika = document.getElementById("ikasyotto").value;
  var palaute = document.form.palautet.value;

  //Tarkistetaan nimi
  for (var i = 0; i < nimi.length; i++) {
    alert("Et syöttänyt koko nimeä");
    return false;
  }
  //min- ja max-määrite?
  var min = (Math.min(1));
  var max = (Math.max(110));

  //Tarkastetaan ikä
  for (var i = 0; i < ika; i++) {
    alert("Syötä ikäsi");
    return false;
  }
  //Tarkastetaan s-posti
  var tarkistus = /\S+@\S+/;
  if (!tarkistus.test(sposti)) {
  alert("Anna kunnon sähköposti");
  return false;
  }
}
  if (palaute.length < 35) {
    alert("Palautteessa tulee olla vähintään 35-merkkiä!");
  }

 var vastaus = false;
 //Edellistä kohtaa varten tehdään silmukka, joka sitten käy jokaisen painikkeen läpi
  var ruokalaji = ruoka, ruoka, ruoka;
  if (ruokalaji == true) {
  vastaus = true;
  }
