function pieninSuurin(taulukko)
 {
  // Palauta taulukon ensimmäinen ja viimeinen alkio
  return taulukko[0], taulukko[taulukko.length-1];
}

// Testaa funktiota
console.log(pieninSuurin([8, 4, 9, 6, 2]));  // tulostaa 2 ja 9
function pieninSuurin(taulukko)
{
  // Palauta taulukon pienin ja suurin arvo
  return Math.min(...taulukko), Math.max(...taulukko);
}

// Testaa funktiota
console.log(pieninSuurin([8, 4, 9, 6, 2]));  // tulostaa 2 ja 9
