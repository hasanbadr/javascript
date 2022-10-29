function jarjjesta()
{
  var luku1 =parseunt(document.getElementById('l1').value);
  var luku2 =parseunt(document.getElementById('l2').value);
  var luku3 =parseunt(document.getElementById('l2').value);
  document.write("annoit luvut: " + luk + " , "+ luku2 + " , "+ luku3 + "<be>");
if (luku1 < luku2 && luku1 < luku3)
{
  if (luku2 < luku3)
  {
    document.write("Järjestys: " + luku1 + " , " + luku2 + " , " + luku3);
  }
  else
  {
    document.write("Järjestys: " + luku1 + " , " + luku3 + " , " + luku2);
  }
}
else if (luku2 < luku1 && luku2 < luku3)
{
  if (luku1 < luku3)
  {
    document.write("Järjestys: " + luku2 + " , " + luku1 + " , " + luku3);
  }
  else
   {
     document.write("Järjestys: " + luku2 + " , " + luku3 + " , " + luku1);
   }
 }
 else if (luku3 < luku1 && luku3 < luku2)
 {
  if (luku1 < luku2)
  {
    document.write("Järjestys: " + luku3 + " , " + luku1 + " , " + luku2);
  }
  else
  {
    document.write("Järjestys: " + luku3 + " , " + luku2 + " , " + luku1);
  }
 }
}
function etsi()
{
var l1  = parseunt(document.getElementById('luku1').value);
var l2  = parseunt(document.getElementById('luku2').value);
var l3  = parseunt(document.getElementById('luku3').value);
var l4  = parseunt(document.getElementById('luku4').value);
var l5  = parseunt(document.getElementById('luku5').value);
document.write ("Annoit luvut: " + l1 + ", " + l2 + ", " + l3 + ", " + l4 + ", " + l5 + "<br>");
document.write("Suurin luku on: ")
document.write(Math.max(l1, l2, l3, l4, l5));
}

function tarkista()
{
  var tulos = parseunt(document.getElementById('8').value);

  if (tulos%2 == 0)
  {
    alert("numero" + tulos + " on parillinen")
  }
  else
  {
    alert("Numero " + tulos + " ei ole parillinen")
  }
}

function näytä()
{
  var ajaoneuvo = parseunt(document.getElementById('9').value);
  if (ajoneuvo < 15)
  {
    alert("Saat ajaa polkupyörällä");
  }
  else if (ajoneuvo < 18)
  {
        alert("Saat ajaa mopolla");
  }
  else if (ajoneuvo < 100)
  {
      alert("saat ajaa autolla")
  }
}

function kaanna()
{
  var kieli = document.getElementById('seitseman').value);
  if (kieli == 'eng')
  {
    alert("Hello world");
  }
  else if (kieli == 'esp')
  {
    alert("Hola mundo");
  }
  else if (kieli == 'swe')
  {
    alert("Hej världen");
  }
}
