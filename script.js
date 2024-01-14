let playerScore = 0;
let computerScore = 0;
let roundsToPlay = 5;

let refresh = true
function makeChoice(playerChoice) {
    if(refresh){
        document.getElementById('player-choice').style.visibility = 'visible';
        document.getElementById('computer-choice').style.visibility = 'visible';
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
        document.getElementById('player-choice').src = `assets/${playerChoice}-hand.png`;
        document.getElementById('computer-choice').src = `assets/${computerChoice}-hand.png`;
    
        const result = determineWinner(playerChoice, computerChoice);
        document.getElementById('result-text').innerText = result;
    
        updateScores(result);
        checkEndOfGame();
    }
}


function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return 'You are taking the lead!';
    } else {
        computerScore++;
        return 'Computer is taking the lead!';
    }
}


function updateScores(result) {
    document.getElementById('player-score').innerText = `${playerScore}`;
    document.getElementById('computer-score').innerText = `${computerScore}`;
}


document.getElementById('replay').style.display='none';


function checkEndOfGame() {
    if (playerScore === roundsToPlay || computerScore === roundsToPlay) {
        declareWinner();
        document.getElementById('replay').style.display='block';
        refresh = false
    }
}


function declareWinner() {
    let winnerMessage = '';
    if (playerScore > computerScore) {
        winnerMessage = 'You are the winner!';
    } else if (computerScore > playerScore) {
        winnerMessage = 'Computer is the winner!';
    } else {
        winnerMessage = "It's a tie in the score!";
    }
    document.getElementById('result-text').innerText = '';
    document.getElementById('player-choice').style.visibility = 'hidden';
    document.getElementById('computer-choice').style.visibility = 'hidden';
    alert(winnerMessage);
}


function resetGame() {
    refresh = true
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById('replay').style.display='none'
    document.getElementById('player-choice').src = '';
    document.getElementById('computer-choice').src = '';


}

