function playRound(playerSelection, computerSelection) {
    let playerSelection2 = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
   if (playerSelection2 === 'Rock' && computerSelection === 'Scissors' || 
        playerSelection2 === 'Paper' && computerSelection === 'Rock' || 
        playerSelection2 === 'Scissors' && computerSelection === 'Paper') {
            score += 1;
            console.log(`You win! ${playerSelection2} beats ${computerSelection}`);
    } else if (playerSelection2 === 'Rock' && computerSelection === 'Rock' || 
                playerSelection2 === 'Paper' && computerSelection === 'Paper' || 
                playerSelection2 === 'Scissors' && computerSelection === 'Scissors') {
                    console.log(`It is a tie, no one win! ${playerSelection2} - ${computerSelection}`);
    } else {
        console.log(`You Lose! ${playerSelection2} can't beat ${computerSelection}`);
    }
}
function computerPlay() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    return rps[Math.floor(Math.random()*rps.length)];
}


let score = 0


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("type on of the following words Rock, Paper or Scissors :").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (score > 3) {
        console.log(`You win ! your score : ${score}`);
    } else {
        console.log(`You lose ! your score : ${score}`);
    }
}

game();