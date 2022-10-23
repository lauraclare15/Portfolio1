const computerScorePara = document.querySelector('.computerScore');
const playerScorePara = document.querySelector('.playerScore');
const playerChoice = document.querySelector('.playerChoice');
const compChoice = document.querySelector('.compChoice');
const roundWinner = document.querySelector('.roundWinner');
const pchoice = document.querySelector('.bttn1');
const gameWinner = document.querySelector('.gameWinner');
const resetGame1 = document.querySelector('.resetButton');
const endGameBttn = document.querySelector('.openEndGame');
const endGameModal = document.querySelector('.endGameModal');

let playerScore = 0;
let computerScore = 0;

resetGame1.addEventListener('click', resetGame);

function playerChooses(pchoice) {
    
    if (pchoice === 'rock') {
        playerChoice.textContent = 'You have chosen ROCK';
        compChooses();
        runGame();
        updateScore();
        gameOver();

    } else if (pchoice === 'paper') {
        playerChoice.textContent = 'You have chosen PAPER';
        compChooses();
        runGame();
        updateScore();
        gameOver();

    } else if (pchoice === 'scissors') {
        playerChoice.textContent = 'You have chosen SCISSORS';
        compChooses();
        runGame();
        updateScore();
        gameOver();
    }
}

function compChooses() {
   let cchoice = Math.floor(Math.random() * 3); 
    if (cchoice === 0) {
        compChoice.textContent = 'The Computer has chosen ROCK';
    } else if (cchoice === 1) {
        compChoice.textContent = 'The Computer has chosen PAPER';
    } else if (cchoice === 2) {
        compChoice.textContent = 'The Computer has chosen SCISSORS';
    }
};

function runGame() {
    if (
        (compChoice.textContent === 'The Computer has chosen ROCK' && playerChoice.textContent === 'You have chosen ROCK')||  
        (compChoice.textContent === 'The Computer has chosen PAPER' && playerChoice.textContent === 'You have chosen PAPER')||
        (compChoice.textContent === 'The Computer has chosen SCISSORS' && playerChoice.textContent === 'You have chosen SCISSORS')
        ){
        roundWinner.textContent = 'Round Winner: No one, It\'s a Tie'
    } else if (
        (compChoice.textContent === 'The Computer has chosen ROCK' && playerChoice.textContent === 'You have chosen SCISSORS')|| 
        (compChoice.textContent === 'The Computer has chosen PAPER' && playerChoice.textContent === 'You have chosen ROCK')||
        (compChoice.textContent === 'The Computer has chosen SCISSORS' && playerChoice.textContent === 'You have chosen PAPER')
        ){
        roundWinner.textContent = 'Round Winner: Computer';
        computerScore++;
    
    } else if (
        (compChoice.textContent === 'The Computer has chosen ROCK' && playerChoice.textContent === 'You have chosen PAPER')|| 
        (compChoice.textContent === 'The Computer has chosen PAPER' && playerChoice.textContent === 'You have chosen SCISSORS')|| 
        (compChoice.textContent === 'The Computer has chosen SCISSORS' && playerChoice.textContent === 'You have chosen ROCK')
        ){
        roundWinner.textContent = 'Round Winner: Player';
        playerScore++;
     
    }
}

function updateScore() {
    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}


function gameOver() {
    if (playerScore === 5) {
        openEndGameModal();
        gameWinner.textContent = 'You Win!';
    } else if (computerScore === 5) {
        openEndGameModal();
        gameWinner.textContent = 'Computer Wins.';
        
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScorePara.textContent = 'Player: 0';
    computerScorePara.textContent = 'Computer: 0';
    compChoice.textContent = 'The Computer has chosen...';
    playerChoice.textContent = 'You have chosen...';
    roundWinner.textContent = 'Round Winner:';
    closeEndGameModal();
}

function openEndGameModal() {
    endGameModal.style.display = 'block';   
}

function closeEndGameModal() {
    endGameModal.style.display = 'none'; 
}