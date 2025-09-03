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
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        humanChoice = prompt("Please choose Rock Paper or Scissors");
    }
    let humanChoiceLower = humanChoice.toLowerCase();
    return humanChoiceLower;
    }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if ((humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissors")) {
        humanScore++;
        return "player wins!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));