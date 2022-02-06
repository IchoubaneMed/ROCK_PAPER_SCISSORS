const playerSelection = prompt("type on of the following words Rock, Paper or Scissors :");
const computerSelection = computerPlay();

function computerPlay() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    return rps[Math.floor(Math.random()*rps.length)];
}

