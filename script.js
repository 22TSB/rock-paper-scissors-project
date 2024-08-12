// rock paper scissors game
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computerName = document.querySelector("#computer-choice");
const gameTitle = document.querySelector(".title");
const human_score = document.querySelector("#human_score");
const computer_score = document.querySelector("#computer_score");
var humanScore = 0;
var computerScore = 0;

const playRound = (player, computer) => {
    if (player === "paper" && computer === "rock") {
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

const playGame = (e) => {
    if (humanScore < 3 && computerScore < 3) {
        const humanChoice = e.target.getAttribute("class");
        const computerChoice = getComputerChoice();
        const score = playRound(humanChoice, computerChoice);
        if (score === 1) {
            humanScore++;
            gameTitle.textContent = `You won da round!`;
            human_score.textContent = `human: ${humanScore}`;
        }
        else if (score === 2) {
            computerScore++;
            gameTitle.textContent = `You lost da round!`
            computer_score.textContent = `computer: ${computerScore}`;
        }
        else {
            gameTitle.textContent = `It's a tie!`
        }
        computerName.textContent = computerChoice;
        if (humanScore === 3) {
            gameTitle.textContent = "You won the game! :)))";
        }
        else if (computerScore === 3) {
            gameTitle.textContent = "You lost the game! :(((";
        }
    }
}

const getComputerChoice = () => {
    const RPS = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * RPS.length);
    return RPS[randomIndex];
};

rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);