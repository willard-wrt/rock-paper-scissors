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
