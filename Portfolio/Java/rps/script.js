const playerChoice = document.querySelector('.playerChoice');
const btn1 = document.querySelector('.bttn1');

btn1.addEventListener('click', playerChooses());

function playerChooses(pchoice) {
    
    if (pchoice === 'rock') {
        playerChoice.textContent = 'You have chosen ROCK';
    } else if (pchoice === 'paper') {
        playerChoice.textContent = 'You have chosen PAPER';
    } else if (pchoice === 'scissors') {
        playerChoice.textContent = 'You have chosen SCISSORS';
    }
}

const compChoice = document.querySelector('.compChoice');
const btn2 = document.querySelector('.readybttn');

btn2.addEventListener('click', compChooses());

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