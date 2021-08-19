let computerResult = null;
let playerResult = null;
let computerScore = 0;
let playerScore = 0;
let num = null;

function computerPlay() {
  const num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  if (num === 1) {
    computerResult = "Rock";
  } else if (num === 2) {
    computerResult = "Paper";
  } else {
    computerResult = "Scissors";
  }
  return computerResult;
}

function playerPlay() {
  playerResult = prompt("Please your selection", "Rock, Paper, Scissors");
}

function playRound() {
  playerPlay();
  computerPlay();
  playerResult = playerResult.toLowerCase();
  computerResult = computerResult.toLowerCase();
  if (computerResult === playerResult) {
    console.log("Its a tie, try again");
  } else if (playerResult === "rock" && computerResult === "paper") {
    computerScore++;
    console.log(`You lose, ${computerResult} beats ${playerResult}`);
  } else if (playerResult === "rock" && computerResult === "scissors") {
    playerScore++;
    console.log(`You win, ${playerResult} beats ${computerResult}`);
  } else if (playerResult === "paper" && computerResult === "scissors") {
    computerScore++;
    console.log(`You lose, ${computerResult} beats ${playerResult}`);
  } else if (playerResult === "paper" && computerResult === "rock") {
    playerScore++;
    console.log(`You win, ${playerResult} beats ${computerResult}`);
  } else if (playerResult === "scissors" && computerResult === "rock") {
    computerScore++;
    console.log(`You lose, ${computerResult} beats ${playerResult}`);
  } else if (playerResult === "scissors" && computerResult === "paper") {
    playerScore++;
    console.log(`You win, ${playerResult} beats ${computerResult}`);
  }
}

function game() {
  computerScore = 0;
  playerScore = 0;
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if (computerScore < playerScore) {
    return `You win by ${playerScore - computerScore}!`;
  } else if (computerScore === playerScore) {
    return `Its a tie - battle again!`;
  } else {
    return `You lose by ${computerScore - playerScore}!`;
  }
}
