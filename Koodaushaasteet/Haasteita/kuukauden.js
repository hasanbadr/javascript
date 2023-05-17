function kuukausi(numero)
 {
// Luodaan taulukko kuukausien nimistä
var kuukaudet = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];
// Palauta kuukauden nimi taulukosta indeksin perusteella

return kuukaudet[numero-1];
}

// Testaa funktiota
console.log(kuukausi(8));  // tulostaa "elokuu"

function kuukausi(numero)
{
  // Luodaan taulukko kuukausien nimistä
  var kuukaudet = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];
  // Tarkista, onko numero sallitulla alueella
  if (numero < 1 || numero > 12) {
    return "Virhe: annettu numero ei ole kelvollinen kuukausiluku.";
  }
// Palauta kuukauden nimi taulukosta indeksin perusteella
  return kuukaudet[numero-1];
}
// Testaa funktiota
console.log(kuukausi(8));  # tulostaa "elokuu"
console.log(kuukausi(13));  # tulostaa "Virhe: annettu numero ei ole kelvollinen kuukausiluku."
Huomioi, että JavaScript-kielessä funktioiden ja muuttujien nimet alkavat pienellä kirjaimella, kun taas luokkien nimet alkavat isolla kirja
Try again
