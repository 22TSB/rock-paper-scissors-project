// rock paper scissors game

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
        return 0;
    }
    else if (player === "paper" && computer === "paper") {
        return 0;
    }
    else if (player === "scissors" && computer === "scissors") {
        return 0;
    }
    else if (player === "paper" && computer === "rock") {
        return 1;
    }
    else if (player === "paper" && computer === "scissors") {
        return 2;
    }
    else if (player === "rock" && computer === "scissors") {
        return 1;
    }
    else if (player === "rock" && computer === "paper") {
        return 2;
    }
    else if (player === "scissors" && computer === "paper") {
        return 1;
    }
    else if (player === "scissors" && computer === "rock") {
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
            alert(`You won da round! \n Score: \n You: ${humanScore} \n Computer: ${computerScore}`);
        }
        else if (score === 2) {
            computerScore++;
            alert(`You lost da round! \n Score: \n You: ${humanScore} \n Computer: ${computerScore}`);
        }
        else {
            alert(`It's a tie! \n Score: \n You: ${humanScore} \n Computer: ${computerScore}`);
            i--;
        }
        if (humanScore === 3) {
            break;
        }
        else if (computerScore === 3) {
            break;
        }
    }
    if (humanScore > computerScore) {
        alert("You won da game!");
    }
    else {
        alert("You lost da game!");
    }
}

playGame();