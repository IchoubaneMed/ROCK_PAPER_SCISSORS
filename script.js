const rockPlayer = document.getElementById('rock-player');
const paperPlayer = document.getElementById('paper-player');
const scissorsPlayer = document.getElementById('scissors-player');

const rockRobot = document.getElementById('rock-robot');
const paperRobot = document.getElementById('paper-robot');
const scissorsRobot = document.getElementById('scissors-robot');
const robotScore = document.querySelector('.robot-score');
const comment = document.querySelector('.comment');
const playerScore = document.querySelector('.player-score');
const reloadButton = document.querySelector('.reload-btn');

const scoreBoard = {
    player: 0,
    computer : 0
}


function playRound(playerSelection, computerSelection) {
    let playerSelection2 = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
   if (playerSelection2 === 'Rock' && computerSelection === 'Scissors' || 
        playerSelection2 === 'Paper' && computerSelection === 'Rock' || 
        playerSelection2 === 'Scissors' && computerSelection === 'Paper') {
            scoreBoard.player += 1;
            console.log(`You win! ${playerSelection2} beats ${computerSelection}`);
            comment.innerHTML = `<p>You win! ${playerSelection2} beats ${computerSelection}</p>`;
    } else if (playerSelection2 === 'Rock' && computerSelection === 'Rock' || 
                playerSelection2 === 'Paper' && computerSelection === 'Paper' || 
                playerSelection2 === 'Scissors' && computerSelection === 'Scissors') {
                    console.log(`It is a draw, no one win! ${playerSelection2} - ${computerSelection}`);
                    comment.innerHTML = `<p>It is a draw, no one win! ${playerSelection2} - ${computerSelection}</p>`
    } else {
        console.log(`You Lose! ${playerSelection2} can't beat ${computerSelection}`);
        scoreBoard.computer += 1;
        comment.innerHTML = `<p>You Lose! ${playerSelection2} can't beat ${computerSelection}</p>`;
    }
    robotScore.innerHTML = `<h1>Computer : ${scoreBoard.computer}</h1>`;
    playerScore.innerHTML = `<h1>Player : ${scoreBoard.player}</h1>`;
}
function computerPlay() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    const randi = rps[Math.floor(Math.random()*rps.length)];
    if (randi === rps[0]) {
        rockRobot.classList.add('active');
    } else if (randi === rps[1]) {
        paperRobot.classList.add('active');
    } else {
        scissorsRobot.classList.add('active');
    }
    setTimeout(function(){
        rockRobot.classList.remove('active');
        paperRobot.classList.remove('active');
        scissorsRobot.classList.remove('active');
    }, 500);
    return randi
}





function game(playerChoice) {
    reloadButton.style.display = 'inline-block';
    const playerSelection = playerChoice; 
    const computerSelection = computerPlay();
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
}

// Event listeners 

rockPlayer.addEventListener("click", function(){
    game("rock");
}); 

paperPlayer.addEventListener("click", function(){
    game("paper");
}); 

scissorsPlayer.addEventListener("click", function(){
    game("scissors");
}); 

reloadButton.addEventListener("click", function(){
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    robotScore.innerHTML = '<h1>Computer : 0</h1>';
    playerScore.innerHTML = '<h1>Player : 0</h1>';
    comment.innerHTML = '<p>--</p>'
    this.style.display = 'none'
});