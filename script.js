function getComputerChoice(){
    let computerChoice = Math.random() * 100
    
    if (computerChoice > 66.67){
        return "Rock";
        
     } else if (computerChoice > 33.33){
        return "Paper";
        }

        else {
         return "Scissors";
        }
    };

    
    console.log(getComputerChoice());