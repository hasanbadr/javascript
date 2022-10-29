function kolme()
{
  var luku1, luku2, luku3;
  luku1 = document.getElementsBy('l1').value;
  luku2 = document.getElementById('l2').value;
  luku3 = document.getElementById('l3').value;
  /*document.getElementById('t1').innerHtml = luku.sort()*/
  if(luku1 < luku2 && luku1 < luku3)
  {
    if(luku2 < luku3)
    {
      document.getElementById('t1').innerHtml = "luvut järstyksessä: " + luku2 " " + luku1 " " + kuku3 ;
    }
      else {
        document.getElementById('t1').innerHtml = "luvut järstyksessä: " + luku1 " " + luku2 " " + kuku3 ;

      }
    }
    else {
      if (luku1 < luku2)
      {
        document.getElementById('t1').innerHtml = "luvut järstyksessä: " + luku3 " " + luku2 " " + kuku1 ;
      }
      else {
        document.getElementById('t1').innerHtml = "luvut järstyksessä: " + luku2 " " + luku1 " " + kuku3 ;

      }
    }
    else if (luku2 < luku1)
    console.log(luku1, luku2, luku3)
  }
}
function kolme()
{
  var luku1, luku2, luku3, luku4, luku5;
  luku1 = document. getElementById('l1').value;
  luku2 = document. getElementById('l2').value;
  luku3 = document. getElementById('l3').value;
  luku4 = document. getElementById('l4').value;
  luku5 = document. getElementById('l5').value;
  /*document.getElementById('t1').innerHtml = luku.sort()*/
  if (luku1 > luku2 && luku1 > luku3 && luku1 > luku4 && luku1 > luku5)
  {
    if(luku2 > luku3)
    {
      document.getElementById('t2').innerHtml = "luvut järstyksessä: " + luku2 " " + luku1 " " + luku3 + " "  + luku4 " " + luku5 ;
    }
    else {
      document.getElementById('t2').innerHtml = "luvut järstyksessä: " + luku1 " " + luku2 " " + luku3 + " "  + luku4 " " + luku5 ;

    }
  }
  else {
    if (luku1 > luku2 )
    {
      document.getElementById('t2').innerHtml = "luvut järstyksessä: " + luku3 " " + luku2 " " + luku1 + " "  + luku4 " " + luku5 ;
    }
    else {
      document.getElementById('t2').innerHtml = "luvut järstyksessä: " + luku2 " " + luku1 " " + luku3 + " "  + luku4 " " + luku5 ;
    }
  }
  if (luku3 > luku4)
  {
    document.getElementById('t2').innerHtml = "luvut järstyksessä: " + luku4 " " + luku2 " " + luku3 + " "  + luku1 " " + luku5 ;
  }
  else {
    document.getElementById('t2').innerHtml = "luvut järstyksessä: " + luku1 " " + luku2 " " + luku3 + " "  + luku4 " " + luku5 ;
  }
  if (luku4 > luku5)
  {
    document.getElementById('t2').innerHtml = "luvut järstyksessä: " + luku5 " " + luku2 " " + luku3 + " "  + luku4 " " + luku1 ;
  }
  else {
    document.getElementById('t2').innerHtml = "luvut järstyksessä: " + luku1 " " + luku2 " " + luku3 + " "  + luku4 " " + luku5 ;
  }
  else if (luku1 > luku2)
    console.log(luku1, luku2, luku3, luku5);
  }
}
function kolme()
 {
  var luku

}
