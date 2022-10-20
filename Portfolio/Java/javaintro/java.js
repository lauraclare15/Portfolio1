const select = document.querySelector('select');
const para = document.querySelector('p');


select.addEventListener('change', pickMeal);

function pickMeal() {
    const choice = select.value;

    if (choice ==='bcp') {
        para.textContent = 'Blackened Chicken Penne';
        html.style.backgroundColor = bgColor;
        html.style.color = textColor;
    } else if (choice ==='alf') {
        para.textContent = 'Chicken Alfredo';
        html.style.backgroundColor = rgb(100,100,200);
    } else if (choice ==='tacos') {
        para.textContent = 'Tacos';
        html.style.backgroundColor = rgb(200,200,100);
    } else {
        para.textContent = 'Pick Something, I\'m hungry!';
    }
}

const txt1 = document.querySelector('input');
const q1a = document.querySelector(".question1a");

txt1.addEventListener('change', rpsChoose1);

function rpsChoose1() {
    const choice1 = txt1.value;

    if (choice1.toLowerCase() == 'rock') {
        q1a.textContent = 'You have chosen ROCK';
    } else if (choice1.toLowerCase() == 'paper') {
        q1a.textContent = 'You have chosen PAPER'
    } else if (choice1.toLowerCase() == 'scissors') {
        q1a.textContent = 'You have chosen SCISSORS'
    } else {
        q1a.textContent = 'Rock, Paper, or Scissors?'
    }
};


