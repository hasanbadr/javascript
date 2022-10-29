//laske onko luku positiivene vai negatiivinen
function t1()
{
  var t01 = parseunt(dacument.getElementById('te1').value);
  if(t01 >=0)
  {
    alert("luku on positiivinen")
  }
  else
  {
    alert("luku on negatiivinen")
  }
}
//syötä viikopäivä numerona
function viikko()
{
  var viikko = parseunt(document.getElementById('te2').value);
  switch (viikko)
   {
    case 1:
    alert("maanantai");
      break;
    case 2:
      alert("tiistai");
      break;
    case 3:
      alert("keskiviikko");
      break;
    case 4:
        alert("torstai");
        break;
    case 5:
      alert("perjantai");
      break;
    case 6:
      alert("lauantai");
      break;

    default:
      alert("sunnuntai");
      break;
  }
}
//en teidä mikä tässä mättää, kun näyttää aina että vuosi on karkausvosi
function vuosi()
{
  var vuosi = parseunt(document.getElementById('luku').value);
  if (vuosi%4 == 0 && vuosi&100 !=0)
  {
    document.getElementById('tehtävä3').innerHTML = "vuosi on karkausvuosi"
  }
  else
  {
    document.getElementById('tehtävä3').innerHTML = "vuosi ei ole karkausvosi"
  }
}
function laske()
{
  var l1 = parseunt(document.getElementById('n1').value);
  var l2 = parseunt(document.getElementById('n2').value);
  var l3 = parseunt(document.getElementById('n3').value);
  var l4 = parseunt(document.getElementById('n4').value);
  var l5 = parseunt(document.getElementById('n5').value);
  let summan = l1 + l2 + l3 + l4 + l5;
  let keskiarvon = summan /5;
  document.getElementById('te4').innerHTML = "lukujen summan on " +summan + "ja keskiarrvo on" + keskiarvon;
}
functioon taulukko()
{
  var luvut = ' ';
  var laskut = document.getElementById('numerot').value);
  for (var i = 1; i <= 10; i++)
  {
    luvut+= laskut + ' x ' + i + ' = ' + laskut * i + '<br>';
  }
  document.getElementById('te5').innerHTML = luvut
}
