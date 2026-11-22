const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector("#results");

const playerScore = document.querySelector("#player");
const compScore = document.querySelector("#comp");

rock.addEventListener("click", () => {
  playRound("rock");
});
paper.addEventListener("click", () => {
  playRound("paper");
});
scissors.addEventListener("click", () => {
  playRound("scissors");
});

function getComputerChoice() {
  let Choice = Math.random();

  if (Choice < 1 / 3) {
    return "rock";
  } else if (Choice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

let gameOver = false;

function playRound(humanChoice) {
  if (gameOver == true) {
    humanScore = 0;
    computerScore = 0;
    playerScore.textContent = `Player Score: ${humanScore}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
    gameOver = false;
  }

  let computerChoice = getComputerChoice();

  if (humanChoice == computerChoice) {
    results.textContent = "Both have the same choice. It's a Draw";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    results.textContent =
      "You Won! You chose Paper and The Computer chose Rock";
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    results.textContent =
      "You lost! You chose Rock and The Computer chose Paper";
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    results.textContent =
      "You Won! You chose Rock and The Computer chose Scissors";
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    results.textContent =
      "You Lost! You chose Scissors and The Computer chose Rock";
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    results.textContent =
      "You Lost! You chose Paper and The Computer chose Scissors";
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    results.textContent =
      "You Won! You chose Scissors and The Computer chose Paper";
    humanScore++;
  }
  playerScore.textContent = `Player Score: ${humanScore}`;
  compScore.textContent = `Computer Score: ${computerScore}`;

  if (humanScore == 5) {
    results.textContent = "You Won :)";
    gameOver = true;
  }
  if (computerScore == 5) {
    results.textContent = "You Lost :/ ";
    gameOver = true;
  }
}
