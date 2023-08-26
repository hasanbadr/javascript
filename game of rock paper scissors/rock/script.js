// Initialize variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const resultMessage_p = document.getElementById("result-message");

// Get computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Convert choice to title case
function toTitleCase(choice) {
  if (choice === "rock") return "Rock";
  if (choice === "paper") return "Paper";
  if (choice === "scissors") return "Scissors";
}

// Win function
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  resultMessage_p.innerHTML = `${toTitleCase(userChoice)} beats ${toTitleCase(computerChoice)}. You win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 500);
}

// Lose function
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  resultMessage_p.innerHTML = `${toTitleCase(computerChoice)} beats ${toTitleCase(userChoice)}. You lose!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 500);
}

// Draw function
function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  resultMessage_p.innerHTML = `It's a draw!`;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"), 500);
}

// Game function
function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

// Restart game
function restartGame() {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  resultMessage_p.innerHTML = "Make your move!";
}

// Event listeners
const choices = document.querySelectorAll(".choice");
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    game(choice.id);
  });
});

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", restartGame);
