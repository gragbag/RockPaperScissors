
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
	const input = prompt("0: Rock, 1: Paper, 2: Scissors");

	if (input === 0) {
		return "rock";
	} else if (input === 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

console.log(getComputerChoice());
console.log(getHumanChoice());