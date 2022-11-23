//Määritetään muuttujat ja haetaan html-documentista käyttöjän syöttämä luku
var luku1 = document.getElementById('message1');
var luku2 = document.getElementById('message2');
var luku3 = document.getElementById('message3');
var clicks = 0;
var answer = math.floor(math.random()*10)+1;
var nro_of_guesses =  1;
var guessed_nums = [];
var wins = 0;
var loose = 0;
function arvauspeli()
{
  var user_guess = document.getElementById('guess').value;
  if (user_guess >=10) {
    guessed_nums.push(user_guess);
    message2.innerHTML = "nro_of_guesses:" + nro_of_guesses;
    message2.innerHTML = "guessed numbers:" + guessed_nums;
  }
  else
  {
    if (user_guess < 1 || user_guess > 10)
    {
      alert("ole hyvä ja anna numero 1 ja 10 välillä")
    }
    else
    {
      guessed_nums.push(user_guess);
    }
    if (user_guess > answer)
    {
      message1.innerHTML = "is too low";
    }
    else if (user_guess > answer)
    {
      message1.innerHTML = "is too high";
    }
    else if (user_guess > answer)
    {
      message1.innerHTML = "nice! you win!";
      wins++;
      document.getElementById("btn").hidden = true;
     }
     else
     {
      alert("anna numeroina, ei kirjaimina")
     }
  }
}
//Kun painetaan "uusipeli" web-sivustossa, niin sivu tyhjentää käyttäjän laittaman numeron
function uusipeli()
{
  document.getElementById('formi').reset();
}
answer = math.floor(Math.random()*10)+1;
//Annetaan käyttäjälle kolme arvaus kertaa
function onClick()
{
  if (clicks >= 3)
    return;
    clicks += 1;
    document.getElementById('loose').innerHTML = "Looses" + Looses;
    document.getElementById('wins').innerHTML = "wins" + Wins;
    document.getElementById('clicks'),innerHTML = "clicks" + Clicks;
    nor_of_guesses++;
  };
