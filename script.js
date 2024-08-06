const getComputerChoice = () => {
    const RPS = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * RPS.length);
    return RPS[randomIndex];
};

const getHumanChoice = () => {
    return prompt("rock paper scissors");
};

const playRound = () => {
    const player = getHumanChoice().toLowerCase();
    const computer = getComputerChoice();
    if (player === "rock" && computer === "rock") {
        console.log("It's a tie!");
    }
    else if (player === "paper" && computer === "paper") {
        console.log("It's a tie!");
    }
    else if (player === "scissors" && computer === "scissors") {
        console.log("It's a tie!");
    }
    else if (player === "paper" && computer === "rock") {
        console.log("You won the round!");
        return 1;
    }
    else if (player === "paper" && computer === "scissors") {
        console.log("You lost the round!");
        return 2;
    }
    else if (player === "rock" && computer === "scissors") {
        console.log("You won the round!");
        return 1;
    }
    else if (player === "rock" && computer === "paper") {
        console.log("You lost the round!");
        return 2;
    }
    else if (player === "scissors" && computer === "paper") {
        console.log("You won the round!");
        return 1;
    }
    else if (player === "scissors" && computer === "rock") {
        console.log("You lost the round!");
        return 2;
    }
};

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    for (i = 0;i < 5;++i) {
        let score = playRound();
        if (score === 1) {
            humanScore++;
        }
        else if (score === 2) {
            computerScore++;
        }
        else {
            i--;
        }
    }
    if (humanScore > computerScore) {
        console.log("You won da game!");
    }
    else {
        console.log("You lost da game!");
    }
}

playGame();