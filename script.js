function getComputerChoice(){
  randomNum = Math.floor(Math.random() * 3) + 1;
  let cpuChoice = "";
  if (randomNum == 1) {
    cpuChoice = "Rock"; 
  }
  else if (randomNum == 2) {
    cpuChoice = "Paper"; 
  }
  else if (randomNum == 3) {
    cpuChoice = "Scissors"; 
  }
  return cpuChoice;
}

function playRound(playerSelection, computerSelection) {

  let result = "";
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
    result = "It's a draw!"
  }
  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
    result = "You lost!";
    cpuScore++;
  } 
  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
    result = "You won!";
    playerScore++;
  } 
  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
    result = "You won!";
    playerScore++;
  }
  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
    result = "It's a draw!"
  } 
  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
    result = "You lost!";
    cpuScore++;
  } 
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
    result = "You lost!";
    cpuScore++;
  }
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
    result = "You won!";
    playerScore++;
  } 
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") {
    result = "It's a draw!"
  } 
  return result;
  }

function bestOfFive() {
  let decision = "";  
  if (playerScore > cpuScore) {
    decision = "You are the winner!"
  }  
  else if (playerScore < cpuScore) {
    decision = "You lost the game!"
  }
  else if (playerScore == cpuScore) {
    decision = "The game result is a tie!"
  }
  return decision;
}

function verifier() {
  do {   
  playerSelection = prompt("Please type 'Rock', 'Paper' or 'Scissors' ");  
  if (playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" ||  playerSelection.toLowerCase() == "scissors") {
    checker = true
  }
  else {
    checker = false
  }
  }  
  while (!checker);
    return playerSelection;   

    }

let round = parseInt(0);
let playerScore = parseInt(0);
let cpuScore = parseInt(0);
let playerSelection ="";


function game() {
  for (let i = 0; i < 5; i++){
  round++;
  verifier();
  let computerSelection = getComputerChoice();
  let capitalized = playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1).toLowerCase();
  console.log("Round:" + " " + round);
  console.log("You choose:" + " " + capitalized);
  console.log("CPU chooses:" + " " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  if (round == 5){  
  console.log("--------------------------------")  
  console.log("Your score is:" + " " + playerScore)
  console.log("CPU score is:" + " " + cpuScore)
  console.log(bestOfFive())
  console.log("--------------------------------") 
  }

}  
}
game()