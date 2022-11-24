//laske onko luku positiivene vai negatiivinen
function t1()
{
  var t01 = parseInt(dacument.getElementById('te1').value);
  if(t01 >=0)
  {
    document.getElementById('v1').innerHTML = "luku on negatiivinen";
  }
  else
  {
    document.getElementById('v1').innerHTML = "luku on positiivene";
  }
}
//syötä viikopäivä numerona
function viikko()
{
  var viikko = parseInt(document.getElementById('te2').value);
  switch (viikko)
   {
    case 1:
      document.getElementById('v2').innerHTML = "Maanantai";
      break;
    case 2:
      document.getElementById('v2').innerHTML = "Tiistai";
      break;
    case 3:
      document.getElementById('v2').innerHTML = "Keskiviikko";
      break;
    case 4:
      document.getElementById('v2').innerHTML = "Torstai";
        break;
    case 5:
      document.getElementById('v2').innerHTML = "Perjantai";
      break;
    case 6:
      document.getElementById('v2').innerHTML = "Lauantai";
      break;

    case 7:
      document.getElementById('v2').innerHTML = "Sunnuntai";
      break;
    default:
    document.getElementById('v2').innerHTML = "Et antanut lukua välillä 1-7";
  }
}
//en teidä mikä tässä mättää, kun näyttää aina että vuosi on karkausvosi
function vuosi()
{
  var vuosi = parseInt(document.getElementById('vuosi').value);
  if (vuosi % 4 == 0 && vuosi &1 00 != 0)
  {
    document.getElementById('v3').innerHTML = "vuosi on karkausvuosi";
  }
  else if(vousi % 400 == 0)
  {
    document.getElementById('v3').innerHTML = "vuosi ei ole karkausvosi";
  }
  else {
    document.getElementById('v3').innerHTML = "Vuosi ei ole karkausvuosi";
  }
}
function laske()
{
      var luku1, luku2, luku3, luku4, luku5, summa, keskiarvo;
      luku1 = parseInt(document.getElementById('lu1').value);
      luku2 = parseInt(document.getElementById('lu2').value);
      luku3 = parseInt(document.getElementById('lu3').value);
      luku4 = parseInt(document.getElementById('lu4').value);
      luku5 = parseInt(document.getElementById('lu5').value);
      summan = luku1 + luku2 + luku3 + luku4 + luku5;
      keskiarvon = summan / 5;
  document.getElementById('v4').innerHTML = "lukujen " + luku1 + ", " + luku2 + ", " + luku3 + ", " + luku4 + ", " + luku5 + " summa = " + summa + " ja keskiarvo = " + keskiarvo;
}
functioon taulukko()
{
  var kerrottava = parseInt(document.getElementById('luku').value)
  var lause = "";
  for (var i = 1; i <= 10; i++)
  {
    lause += "luku" + kerrottava + " * " + i + " = " + kerrottava*i "<br />";
  }
  document.getElementById('v5').innerHTML = lause;
}
