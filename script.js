function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 100);

    if (computerChoice >= 67){
        return "rock";
        
     } else if (computerChoice >= 34){
        return "paper";
        }

        else {
         return "scissors";
        }
    };

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    let humanChoiceLower = humanChoice.toLowerCase();
    return humanChoiceLower;
}