function osoiteRekisteri(etunimi, sukunimi, osoite, postinumero, postitoimipaikka, puhelin, email) {
  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.osoite = osoite;


this.postinumero = postinumero;


this.postitoimipaikka = postitoimipaikka;


this.puhelin = puhelin;


this.email = email;
}


}
// Syötä vähintään kolmen henkilön tiedot
var Jyri = new osoiteRekisteri("Jyri", "Lindroos", "Keskikatu 3", "04200", "Kerava", "040 1744562", "jyri.lindroos@keuda.fi");
var Pekka = new osoiteRekisteri("Pekka
