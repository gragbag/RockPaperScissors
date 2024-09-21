
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const sicssors = document.querySelector("#scissors");

const humanSelection = document.querySelector("#human-choice")
const computerSelection = document.querySelector("#computer-choice")
const roundResult = document.querySelector("#round-result")

const human = document.querySelector("#human");
const computer = document.querySelector("#computer");
const winner = document.querySelector("#winner");
const buttons = document.querySelectorAll("button");

let gameOver = false;



function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	if (choice === 0) {
		return "rock";
	} else if (choice === 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

const alertGameOver = () => {
	alert("GAME OVER: REFRESH TO PLAY AGAIN");
}

const playRound = (humanChoice, computerChoice) => {
	let result;
	if (humanChoice == computerChoice) {
		result = "Tie!";
	} else if (humanChoice === "rock") {
		if (computerChoice === "scissors") {
			result = "You win! Rock beats Scissors";
			humanScore++;
		} else {
			result = "You lose! Paper beats Rock";
			computerScore++;
		}
	} else if (humanChoice === "paper") {
		if (computerChoice === "rock") {
			result = "You win! Paper beats Rock";
			humanScore++;
		} else {
			result = "You lose! Scissors beats Paper";
			computerScore++;
		}
	} else {
		if (computerChoice === "paper") {
			result = "You win! Scissors beats Paper";
			humanScore++;
		} else {
			result = "You lose! Rock beats Scissors";
			computerScore++;
		}
	}

	humanSelection.textContent = "You Chose: " + humanChoice;
	computerSelection.textContent = "Computer Chose: " + computerChoice;
	roundResult.textContent = result;

	human.textContent = "Human Score: " + humanScore;
	computer.textContent = "Computer Score: " + computerScore;

	if (humanScore === 5) {
		winner.textContent = "WINNER: HUMAN"
		gameOver = true;
	} else if (computerScore === 5) {
		winner.textContent = "WINNER: COMPUTER"
		gameOver = true;
	}
}

rock.addEventListener("click", () => {
	if (gameOver)
		alertGameOver();
	else
		playRound("rock", getComputerChoice())
});

paper.addEventListener("click", () => {
	if (gameOver)
		alertGameOver()
	else
		playRound("paper", getComputerChoice())
});

sicssors.addEventListener("click", () => {
	if (gameOver)
		alertGameOver();
	else
		playRound("scissors", getComputerChoice())
});






