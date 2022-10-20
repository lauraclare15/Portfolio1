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

