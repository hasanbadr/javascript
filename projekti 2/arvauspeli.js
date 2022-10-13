var highLimit = 10;
   var randNum = Math.floor((Math.random() * highLimit) + 1);
   var allowedGuesses = 3;
   var numGuesses = 0;
   function guessingGame() {
       if (numGuesses <= allowedGuesses) {
          do {
               inputNum = document.numForm.number.value;
               inputNum = parseInt(inputNum);
               if (inputNum < randNum && inputNum > 1) {
                   document.numForm.gameResults.value = "Sorry, your guess was too low.";
                   numGuesses++;
               }
               else if (inputNum > randNum && inputNum < highLimit) {
                   document.numForm.gameResults.value = "Sorry, your guess was too high.";
                   numGuesses++;
               }
               else if (inputNum == randNum) {
                   document.numForm.gameResults.value = "Congratulations! You guessed correctly.";
                   numGuesses++;
               }
               else {
                   document.numForm.gameResults.value = "Your guess was out of the desired parameters. Please guess again.";
                   numGuesses--;
               }
           } while(numGuesses < allowedGuesses && inputNum != randNum);
       }
           else {
               document.numForm.gameResults.value = "Sorry, you have reached the allowed number of guesses, which is " + allowedGuesses + "." + " Click 'New Game' to try again.";
           }
       return false;
   }
   numGuesses = 0;
   function newGame() {
           randNum = Math.floor((Math.random() * highLimit) + 1);
           guessingGame();
           return false;
      }
