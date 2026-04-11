console.log("hello World");

function getComputerChoice() {

  let Choice = Math.random();

  if (Choice < 1/3) {
    return "Rock";
  }
  else if (Choice < 2/3) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let Choice = prompt("what's your choice\n1 for Rock\n2 for Paper\n3 for Scissors");

  if (Choice == 1) {
    return "Rock";
  }
  else if (Choice == 2) {
    return "Paper";
  }
  else if (Choice == 3) {
    return "Scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Both have the same choice. It's a Draw");
  }

  if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You Win! Paper beats Rock");
    humanScore++;
  }

  if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  }

  if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You Win! Rock beats Scissors");
    humanScore++;
  }

  if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log("You Lose! Rock beats Scissors");
    computerScore++;
  }

  if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log("You Lose! Scissors beats Paper");
    computerScore++;
  }

  if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You Win! Scissors beats Paper");
    humanScore++;
  }
}