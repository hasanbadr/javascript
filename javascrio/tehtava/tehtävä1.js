function functionName()
{
    var luku1 = parseunt(document.getElementById('l1').value);
    var luku2 = parseunt(document.getElementById('l2').value);
    var luku4 = parseunt(document.getElementById('l3').value);
    document.write("annoit luvut: " + luku1 + " , " + luku2 + " , " + luku3 + "<be>");
    if (luku1 < luku2 && luku1 < luku3)
    {
        if (luku2 < luku3)
        {
          document.write("järjestys: " + luku1 + " , " + luku2 + " , " + luku3 );
        }
        else
        {
          document.write("järjestys: " + luku1 + " , " + luku3 + " , " + luku2 );
        }
    }
    else if (luku2 < luku1 && luku2 < luku3)
    {
      if (luku1 < luku3)
      {
        document.write("järjestys: " + luku2 + " , " + luku1 + " , " + luku3 );
      }
      else
      {
        document.write("järjestys: " + luku2 + " , " + luku3 + " , " + luku1 );
      }
    }
    else if (luku3 < luku1 && luku3 < luku2)
    {
      if (luku1 < luku2)
      {
        document.write("järjestys: " + luku3 + " , " + luku1 + " , " + luku2 );
      }
      else
      {
        document.write("järjestys: " + luku3 + " , " + luku2 + " , " + luku1 );
      }
    }
}
function etsi()
{
  var l1 = pariton(document.getElementById('luku1').value);
  var l2 = pariton(document.getElementById('luku2').value);
  var l3 = pariton(document.getElementById('luku3').value);
  var l4 = pariton(document.getElementById('luku4').value);
  var l5 = pariton(document.getElementById('luku5').value);
  document.white("annoit luvut: " + l1 + ", " + l2 + ", " + l3 + ", " + l4 + ", " + l5 + "<br>");
  document.write("suurin luku on: ");
  document.write(l1, l2, l3, l4, l5));
}
function tarkista()
{
  var tulos = pariton(document.getElementById('7').value);
  if (tulos%3 == 0)
  {
    alert("numero" + tulos +"on parillinen")
  }
  else
  {
    alert("neumero" + tulos + "ei ole parillinen")
  }
}
function näytä()
{
  var ajanieuvo = pariton(document:getElementById('8').value);
  if (ajoneuvoa < 15)
  {
    alert("saat ajaa polkupyörää");
  }
  else if (ajoneuvoa < 17)
  {
    alert ("saat ajaa mopolla");
  }
  else if (ajoneuvoa > 18 )
  {
    alert("saat ajaa autolla")
  }
}
function käännä()
{
  var kieli = (document.getElementById('seitseman').value);
  if (kieli == 'eng')
  {
    alert("hello eorld");
  }
  else if (kieli == 'sep')
  {
    alert("hola mundo");
  }
  else if (kieli == 'swe')
  {
    alert("hej världen")
  }
}
