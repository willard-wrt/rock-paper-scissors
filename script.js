// Generate a random choice for computer opponent
function getComputerChoice() { 
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

// Keep score and report the game result in each round
function playRound(playerSelection, computerSelection) {
  playerSelection = this.dataset.button;
  computerSelection = getComputerChoice()
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
  
  aiImgDisplay(computerSelection);
  console.log(playerSelection);
  console.log('Aichan: ' + computerSelection);
  console.log(result);
  console.log(playerScore);
  console.log(cpuScore);
  
  return result;
  

}

// Change computer's image (aichan)
function aiImgDisplay(cpuSelection) {
  var image = document.getElementById('aichan');
  aichan = cpuSelection;
  if (aichan == "Rock") {
    image.src = "img/ai-rock.png";
  }
  else if (aichan == "Paper") {
    image.src = "img/ai-paper.png";
  }
  else if (aichan == "Scissors") {
    image.src = "img/ai-scissors.png";
  }
}

// Give the end game result  
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

// Validate input by looping prompt box until the input value is matched
/*function verifier() {
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
}
*/

// Declare global variables

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors')
btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);
let round = parseInt(0);
let playerScore = parseInt(0);
let cpuScore = parseInt(0);

function playsnd() {
let audio = document.getElementById("audio");
audio.currentTime = 0;
audio.volume = 0.5;
audio.play();
}
//let cpuSelection = getComputerChoice();


// Display all the infomation and repeat the game for five times
/*function game() {
  for (let i = 0; i < 5; i++){
  round++;
  //verifier();
  let cpuSelection = getComputerChoice();
  let capitalized = playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1).toLowerCase();
  console.log("Round:" + " " + round);
  console.log("You choose:" + " " + capitalized);
  console.log("CPU chooses:" + " " + cpuSelection);
  console.log(playRound(playerSelection, cpuSelection));
  if (round == 5){  
  console.log("--------------------------------")  
  console.log("Your score is:" + " " + playerScore)
  console.log("CPU score is:" + " " + cpuScore)
  console.log(bestOfFive())
  console.log("--------------------------------") 
  }
  }  
}

// Play the game
game()*/