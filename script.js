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
  
  if (playerScore == 5 || cpuScore == 5){
  console.log(bestOfFive(playerScore,cpuScore));
  }
 
  updateScore(playerScore,cpuScore)
  aiImgDisplay(computerSelection);
  aiImgResult(playerScore,cpuScore);

  console.log(playerSelection);
  console.log('Aichan: ' + computerSelection);
  console.log(result);
  console.log(playerScore);
  console.log(cpuScore);
  
  return result;

}

function updateScore(playerScore,cpuScore){
  document.querySelector('.pscore').innerHTML = playerScore;
  document.querySelector('.aiscore').innerHTML = cpuScore;
}

// Change AI image for each button click 
function aiImgDisplay(cpuSelection) {
  let image = document.getElementById('aichan');
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

// Change AI image for endings.

function aiImgResult(pScore,cpuScore) {
  winOne = document.getElementById('win-one');
  winTwo = document.getElementById('win-two');
  winThree = document.getElementById('win-three');
  loseOne = document.getElementById('lose-one');
  loseTwo = document.getElementById('lose-two');
  loseThree = document.getElementById('lose-three');
  image = document.getElementById('aichan');
  playerScore = pScore;
  aiScore = cpuScore;
  if (aiScore == 5 && playerScore == 4) {
    image.src = "img/win-three.png";
    winThree.play();
  }
  else if (aiScore == 5 && playerScore == 3) {
    image.src = "img/win-two.png";
    winTwo.play();
  }
  else if (aiScore == 5 && playerScore <= 2) {
    image.src = "img/win-one.png";
    winOne.play();
  }
  else if (aiScore == 4 && playerScore == 5) {
    image.src = "img/lose-three.png";
    loseThree.play();
  }
  else if (aiScore == 3 && playerScore == 5) {
    image.src = "img/lose-two.png"; 
    loseTwo.play();
  }
  else if (aiScore <= 2 && playerScore == 5) {
    image.src = "img/lose-one.png";
    loseOne.play();
  }
}


// Function to start the game
function gameStart() {
  let titleBgm = document.getElementById('title');
  titleBgm.volume = 0.2;
  titleBgm.play();
  buttonContainer = document.querySelector('.button-box');
  buttonContainer.style.display = 'flex';
  startBox = document.querySelector('.start-box');
  startBox.style.display = 'none';
  image = document.getElementById('aichan');
  image.src = "img/ready.png";
}

// Give the end game result  
function bestOfFive(playerScore,cpuScore) {
  playerInfo = document.querySelector('.player-info');
  aiInfo = document.querySelector('.ai-info'); 
  result = document.querySelector('.game-result');
  playerInfo.style.display = 'none';
  aiInfo.style.display ='none';
  result.style.display ='flex';
  restartBox.style.display = 'flex';
  choiceButtons.forEach(btn => btn.disabled = true);

  if (playerScore > cpuScore) {
    decision = "You are the winner!"
  }  
  else if (playerScore < cpuScore) {
    decision = "You lost the game!"
  }
  else if (playerScore == cpuScore) {
    decision = "The game result is a tie!"
  }
  
  document.querySelector('.game-result').innerHTML = decision;
  buttonContainer = document.querySelector('.button-box');
  buttonContainer.style.display = 'none';
  
  return decision;
}


function restartGame(){
  playerInfo = document.querySelector('.player-info');
  aiInfo = document.querySelector('.ai-info'); 
  result = document.querySelector('.game-result');
  // Reset scores
  playerScore = 0;
  cpuScore = 0;
   // Update score displays
  updateScore(playerScore,cpuScore)
  playerInfo.style.display = 'flex';
  aiInfo.style.display ='flex';
  result.style.display ='none';
  // Hide restart button
  restartBox.style.display = 'none';
  // Enable choice buttons again
  choiceButtons.forEach(btn => btn.disabled = false);
  buttonContainer = document.querySelector('.button-box');
  buttonContainer.style.display = 'flex';
};


// Declare global variables

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors')
const btnStart = document.querySelector('#start-btn')
const restartBox= document.querySelector('.restart-box');
const restartBtn= document.querySelector('#restart-btn');
const choiceButtons = document.querySelectorAll('.choice-button');
btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);
btnStart.addEventListener('click', gameStart)
restartBtn.addEventListener("click", restartGame);
let round = parseInt(0);
let playerScore = parseInt(0);
let cpuScore = parseInt(0);

// Button sound effect 
function playsnd() {
let audio = document.getElementById("button-audio");
audio.currentTime = 0;
audio.volume = 0.3;
audio.play();
}

let hello = document.getElementById("hello");
let cheerup = document.getElementById("cheer")
btnStart.addEventListener("mouseenter", function(){hello.play()});
btnStart.addEventListener("click", function(){cheerup.play(); hello.pause()});

// Preload images
function preloadImages() {
    // Array of image paths
    const images = [
        "img/rock.png",
        "img/paper.png",
        "img/scissors.png",
        "img/ai-rock.png",
        "img/ai-paper.png",
        "img/ai-scissors.png",
        "img/ready.png",
        "img/win-one.png",
        "img/win-two.png",
        "img/win-three.png",
        "img/lose-one.png",
        "img/lose-two.png",
        "img/lose-three.png"
    ];

    // Create new Image objects and preload them
    images.forEach(src => {
        let img = new Image();
        img.src = src;
    });
}

// Call the preload function when the page loads
window.onload = function() {
    preloadImages();
};



/* -------for reference only--------

// Validate input by looping prompt box until the input value is matched
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
}
*/

/*function hellosnd() {
let hello = document.getElementById("hello"); 
hello.volume = 0.5;
hello.play();
}*/


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
game()

*/
