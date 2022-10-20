const txt1 = document.querySelector('input');
const para = document.querySelector('p');
const bttn = document.querySelector();

txt1.addEventListener('change', rpsChoose);

function rpsChoose() {
    const choice = txt1.value;

    if (choice == 'rock') {
        para.textContent = 'Rock';
    } else if (choice == 'paper') {
        para.textContent = 'Paper'
    } else if (choice == 'scissors') {
        para.textContent = 'Scissors'
    } else {
        para.textContent = 'Rock, Paper, or Scissors?'
    }
}
function rpsChoose1() {
    const choice1 = bttn.value;

    if (choice1 == 'rock') {
        para.textContent = 'Rock';
    } else if (choice1 == 'paper') {
        para.textContent = 'Paper'
    } else if (choice1 == 'scissors') {
        para.textContent = 'Scissors'
    }
}