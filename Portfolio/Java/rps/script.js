const txt1 = document.querySelector('input');
const q1a = document.querySelector(".question1a");

txt1.addEventListener('change', rpsChoose1);

function rpsChoose1() {
    const choice1 = txt1.value;

    if (choice1 == 'rock') {
        q1a.textContent = 'You have chosen ROCK';
    } else if (choice1 == 'paper') {
        q1a.textContent = 'You have chosen PAPER'
    } else if (choice1 == 'scissors') {
        q1a.textContent = 'You have chosen SCISSORS'
    } else {
        q1a.textContent = 'Rock, Paper, or Scissors?'
    }
};

const q1b = document.querySelector('.question1b');
const btn2 = document.querySelector("button");

btn2.addEventListener('click', rpsChoose2(choice2));

function rpsChoose2(choice2) {
    q1b.textContent = choice2;
    
    if (choice2 === 'rock') {
        q1b.textContent = 'You have chosen ROCK'
    } else if (choice2 === 'paper') {
        q1b.textContent = 'You have chosen PAPER'
    } else if (choice2 === 'scissors') {
        q1b.textContent = 'You have chosen SCISSORS'}};