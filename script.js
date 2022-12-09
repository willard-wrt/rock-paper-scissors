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
    result = "It's a draw"
  }
  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
    result = "You lost!"
  } 
  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
    result = "You won!"
  } 
  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
    result = "You won!"
  }
  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
    result = "It's a draw"
  } 
  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
    result = "You lost!"
  } 
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
    result = "You lost!"
  }
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
    result = "You won!"
  } 
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") {
    result = "It's a draw"
  } 
  return result;
  }


  const computerSelection = getComputerChoice();  
  const playerSelection = prompt("Please type 'Rock', 'Paper' or 'Scissors' ");
  const capitalized = playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1).toLowerCase();
   
  console.log("You choose:" + " " + capitalized);
  console.log("CPU chooses:" + " " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  

