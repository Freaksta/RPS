let computerResult = null;
let num = null;

function computerPlay() {
  const num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  console.log(num);

  if (num == 1) {
    computerResult = "Rock";
  } else if (num == 2) {
    computerResult = "Paper";
  } else {
    computerResult = "Scissors";
  }
  return computerResult;
}
