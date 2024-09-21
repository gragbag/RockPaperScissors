
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
	let input = prompt("0: Rock, 1: Paper, 2: Scissors");

	while (isNaN(input) || input < 0 || input > 2) {
		input = prompt("Enter Valid Number: 0: Rock, 1: Paper, 2: Scissors");
	}

	if (input === 0) {
		return "rock";
	} else if (input === 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
		console.log("Tie!");
	} else if (humanChoice === "rock") {
		if (computerChoice === "scissors") {
			console.log("You win! Rock beats Scissors");
			humanScore++;
		} else {
			console.log("You lose! Paper beats Rock");
			computerScore++;
		}
	} else if (humanChoice === "paper") {
		if (computerChoice === "rock") {
			console.log("You win! Paper beats Rock");
			humanScore++;
		} else {
			console.log("You lose! Scissors beats Paper");
			computerScore++;
		}
	} else {
		if (computerChoice === "paper") {
			console.log("You win! Scissors beats Paper");
			humanScore++;
		} else {
			console.log("You lose! Rock beats Scissors");
			computerScore++;
		}
	}
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();

		playRound(humanChoice, computerChoice);
		console.log("Score:\nHuman: " + humanScore + "  Computer: " + computerScore);
	}
}

playGame();


