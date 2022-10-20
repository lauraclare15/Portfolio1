const playerChoice = document.querySelector('.playerChoice');
const compChoice = document.querySelector('.compChoice');
const resultIs = document.querySelector('.result');

const pchoice = document.querySelector('.bttn1');


function playerChooses(pchoice) {
    
    if (pchoice === 'rock') {
        playerChoice.textContent = 'You have chosen ROCK';
        compChooses();
        runGame();

    } else if (pchoice === 'paper') {
        playerChoice.textContent = 'You have chosen PAPER';
        compChooses();
        runGame();

    } else if (pchoice === 'scissors') {
        playerChoice.textContent = 'You have chosen SCISSORS';
        compChooses();
        runGame();
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
        resultIs.textContent = 'It\'s a Tie'
    } else if (
        (compChoice.textContent === 'The Computer has chosen ROCK' && playerChoice.textContent === 'You have chosen SCISSORS')|| 
        (compChoice.textContent === 'The Computer has chosen PAPER' && playerChoice.textContent === 'You have chosen ROCK')||
        (compChoice.textContent === 'The Computer has chosen SCISSORS' && playerChoice.textContent === 'You have chosen PAPER')
        ){
        resultIs.textContent = 'Computer Wins'
    } else if (
        (compChoice.textContent === 'The Computer has chosen ROCK' && playerChoice.textContent === 'You have chosen PAPER')|| 
        (compChoice.textContent === 'The Computer has chosen PAPER' && playerChoice.textContent === 'You have chosen SCISSORS')|| 
        (compChoice.textContent === 'The Computer has chosen SCISSORS' && playerChoice.textContent === 'You have chosen ROCK')
        ){
        resultIs.textContent = 'Player Wins'
    }
}