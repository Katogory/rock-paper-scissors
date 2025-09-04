function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100);

    if (computerChoice >= 67) {
        return "rock";

    } else if (computerChoice >= 34) {
        return "paper";
    }

    else {
        return "scissors";
    }
};

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Please choose Rock Paper or Scissors").toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if ((humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissors")) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

function playGame() {
    let roundAmount = parseInt(prompt("Amount of rounds?"), 10);
        
     while (Number.isInteger(roundAmount) === false) {
        roundAmount = parseInt(prompt("Please input the number of rounds!"));
    }

    console.log(Number.isInteger(roundAmount));

    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < roundAmount; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        if (result === "It's a tie!"){
            console.log("Tie round!")
            console.log(`Player ${humanScore} --- Computer ${computerScore}`)
        }else if (result === "Player wins!"){
            humanScore++
            console.log("Human wins the round!")
            console.log(`Player ${humanScore} --- Computer ${computerScore}`)
        }else {
            computerScore++
            console.log("Computer wins the round!")
            console.log(`Player ${humanScore} --- Computer ${computerScore}`)            
        }
    }
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();