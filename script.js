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

