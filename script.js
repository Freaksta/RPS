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
  console.log(playerResult);
  console.log(computerResult);
  if (computerResult === playerResult) {
    return "Its a tie, try again";
  } else if (playerResult === "rock" && computerResult === "paper") {
    return `You lose, ${computerResult} beats ${playerResult}`;
  } else if (playerResult === "rock" && computerResult === "scissors") {
    return `You win, ${playerResult} beats ${computerResult}`;
  } else if (playerResult === "paper" && computerResult === "scissors") {
    return `You lose, ${computerResult} beats ${playerResult}`;
  } else if (playerResult === "paper" && computerResult === "rock") {
    return `You win, ${playerResult} beats ${computerResult}`;
  } else if (playerResult === "scissors" && computerResult === "rock") {
    return `You lose, ${computerResult} beats ${playerResult}`;
  } else if (playerResult === "scissors" && computerResult === "paper") {
    return `You win, ${playerResult} beats ${computerResult}`;
  }
}

// Compare the variable again the computerPlay variable
// If player input = Rock and computer = Scissors, player wins
// if player input = computer input tie
// if player input = Scissors and computer = paper, player wins
// if play input = Paper and computer = rock, player wins
