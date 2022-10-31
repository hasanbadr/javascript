function tehtava1() //mikähän mahtaa olla pielessä, kun antaa 12 pistettä joka kirjaimelle eikä näytä kirjainta vaan NaN?
{
  var kirjain = parseInt(document.getElementById('t1').value);
  var piste = 0;
  for(var i = 0; i < kirjain.lenght; i++);
{
  switch (kirjain[i])
{
    case 'q':
    case 'Q':
    case 'w':
    case 'W':
    case 'e':
    case 'E':
    case 'r':
    case 'R':
    case 't':
    case 'T':
    case 'y':
    case 'Y':
      piste++;
      break;

    case 'u':
    case 'U':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'p':
    case 'P':
      piste+=2;
      break;

    case 'å':
    case 'Å':
    case 'a':
    case 'A':
    case 's':
    case 'S':
    case 'd':
    case 'D':
      piste+=3;
      break;

    case 'h':
    case 'H':
    case 'j':
    case 'J':
    case 'k':
    case 'K':
    case 'l':
    case 'L':
      piste+=4;
      break;

    case 'ö':
    case 'Ö':
    case 'ä':
    case 'Ä':
      piste+=7
      break;

    case 'z':
    case 'Z':
    case 'x':
    case 'X':
    case 'c':
    case 'C':
    case 'v':
    case 'V':
    case 'b':
    case 'B':
      piste+=8;
      break;

    case 'm':
    case 'M':
      piste+=10;
      break;

    default:
    piste+=12;
  }
document.getElementById('t1').innerHTML = "Kirjaimen " + kirjain  + " piste on " + piste;
}
}
function tehtava2()
{
  var lotto = [];
  while(lotto.length < 7)
  {
  var s = Math. floor(Math. random() * 40) + 1;
  if(lotto.indexOf(s) === -1) lotto.push(s);
}
  document.getElementById('t2').innerHTML = lotto
}
function tehtava3()
{
    var t1 = [];
    t1 = [[4, 8, 7, 1], [4, 29, 54, 65], [64, 32, 98, 95], [45, 51, 78, 94], [37, 2, 58, 8]];
    var tulos = '<table border="5">';
    for(var j = 0; j < t1.length; j++)
    {
      tulos += '<tr>';
      for(var k = 0; k < t1[j].length; k++)
      {
        tulos += '<td>' + t1[j][k] + '</td>';
      }
      tulos += '</tr>';
    }
    tulos += '</table>';
    document.getElementById('t3').innerHTML = tulos;
  }
function tehtava4()
{
  var pakka = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < numerot.length; n++)
    {
      if(m == maat.length-1 && n == numerot.length-1)
      {
        pakka[laskuri] = maat[m] + numerot[n];
      }
      else {
        pakka[laskuri] = maat[m]+numerot[n];
        laskuri++;
      }
    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('t4').innerHTML = kortit;
}
