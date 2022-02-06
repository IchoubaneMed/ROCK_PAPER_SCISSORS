const playerSelection = "rock";
const computerSelection = computerPlay();

function computerPlay() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    return rps[Math.floor(Math.random()*rps.length)];
}

console.log(computerSelection);