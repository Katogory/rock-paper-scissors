function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 100);

    if (computerChoice >= 67){
        return "Rock";
        
     } else if (computerChoice >= 34){
        return "Paper";
        }

        else {
         return "Scissors";
        }
    };

console.log(getComputerChoice());