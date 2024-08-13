// rock paper scissors game
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computerName = document.querySelector("#computer-choice");
const gameTitle = document.querySelector(".title");
const resetBtn = document.querySelector(".title_btn");
const human_score = document.querySelector("#human_score");
const computer_score = document.querySelector("#computer_score");
const computerLogo = document.querySelector(".box-random-computer");

var DOM_computerChoice = document.createElement("img");
var DOM_RANDOM = document.createElement("img");

DOM_RANDOM.src = "src/questionmark.png";
DOM_RANDOM.setAttribute("class", "random");

var humanScore = 0;
var computerScore = 0;
const btn = document.createElement("button");
btn.textContent = "Reset";
btn.setAttribute("class", "btn");

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
        if (computerChoice === "scissors") {
            DOM_computerChoice.src = `src/${computerChoice}.webp`;
            DOM_computerChoice.setAttribute("class", computerChoice);
        }
        else {
            DOM_computerChoice.src = `src/${computerChoice}.jpg`;
            DOM_computerChoice.setAttribute("class", computerChoice); 
        }
        if (score === 1) {
            humanScore++;
            gameTitle.lastElementChild.textContent = `You won da round!`;
            human_score.textContent = `human: ${humanScore}`;
            computerLogo.firstElementChild.remove();
            computerLogo.append(DOM_computerChoice);
        }
        else if (score === 2) {
            computerScore++;
            gameTitle.lastElementChild.textContent = `You lost da round!`
            computer_score.textContent = `computer: ${computerScore}`;
            computerLogo.firstElementChild.remove();
            computerLogo.append(DOM_computerChoice);
        }
        else {
            gameTitle.lastElementChild.textContent = `It's a tie!`
            computerLogo.firstElementChild.remove();
            computerLogo.append(DOM_computerChoice);
        }
        computerName.textContent = computerChoice;
        if (humanScore === 3) {
            gameTitle.lastElementChild.textContent = "You won the game! :)))";
            resetBtn.appendChild(btn);
        }
        else if (computerScore === 3) {
            gameTitle.lastElementChild.textContent = "You lost the game! :(((";
            resetBtn.appendChild(btn);
        }
    }   
}

const getComputerChoice = () => {
    const RPS = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * RPS.length);
    return RPS[randomIndex];
};

const resetFunction = () => {
    computerScore = 0;
    humanScore = 0;
    resetBtn.removeChild(btn);
    computerLogo.firstElementChild.remove();
    computerLogo.append(DOM_RANDOM);
    gameTitle.lastElementChild.textContent = "click on the item to start";
    human_score.textContent = "human";
    computer_score.textContent = "computer";
}

rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);
btn.addEventListener("click", resetFunction);