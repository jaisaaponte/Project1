let wins = 0;
let losses = 0;
let ties = 0;

function playGame() {
	let rounds = parseInt(document.getElementById("roundsInput").value);

	for (let i = 0; i < rounds; i++) {
		let userChoice = prompt("Enter r, p, or s:");
		let computerChoice = Math.floor(Math.random() * 3);

		if (userChoice === "r" && computerChoice === 0 ||
			userChoice === "p" && computerChoice === 1 ||
			userChoice === "s" && computerChoice === 2) {
			wins++;
			alert("You won!");
		} else if (userChoice === "r" && computerChoice === 1 ||
				   userChoice === "p" && computerChoice === 2 ||
				   userChoice === "s" && computerChoice === 0) {
			losses++;
			alert("You lost!");
		} else {
			ties++;
			alert("It's a tie!");
		}
	}

	let resultString = "Results: " + wins + " wins, " + ties + " ties, " + losses + " losses.";
	document.getElementById("results").innerHTML = resultString;
}