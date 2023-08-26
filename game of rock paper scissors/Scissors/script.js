const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");

const options = ["rock", "paper", "scissors"];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        winSound.play();
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        loseSound.play();
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function resetGame() {
    resultDiv.innerText = "";
}

rockButton.addEventListener("click", function() {
    let computerSelection = computerPlay();
    let result = playRound("rock", computerSelection);
    resultDiv.innerText = result;
    resultDiv.classList.add("shake-animation");
    setTimeout(function() {
        resultDiv.classList.remove("shake-animation");
    }, 500);
});

paperButton.addEventListener("click", function() {
    let computerSelection = computerPlay();
    let result = playRound("paper", computerSelection);
    resultDiv.innerText = result;
    resultDiv.classList
    paperButton.addEventListener("click", function() {
        let computerSelection = computerPlay();
        let result = playRound("paper", computerSelection);
        resultDiv.innerText = result;
        resultDiv.classList.add("shake-animation");
        setTimeout(function() {
            resultDiv.classList.remove("shake-animation");
        }, 500);
    });

    scissorsButton.addEventListener("click", function() {
        let computerSelection = computerPlay();
        let result = playRound("scissors", computerSelection);
        resultDiv.innerText = result;
        resultDiv.classList.add("shake-animation");
        setTimeout(function() {
            resultDiv.classList.remove("shake-animation");
        }, 500);
    });
