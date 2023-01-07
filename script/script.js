const calculatorFrame = document.querySelector('.calculatorframe');
const calculatorDisplay = document.querySelector('.display');
const calculatorBody = document.querySelector('.numbersandops');

// add buttons to the calculator - start
function addButtons () {

    for (let i = 0; i < 5; i++) {
        let buttonRow = document.createElement('div');
        buttonRow.classList.add(`row${i}`);
        calculatorBody.appendChild(buttonRow);

        for (let j = 0; j < 4; j++) {
            let buttons = document.createElement('div');
            buttons.classList.add(`button${i}${j}`)
            buttonRow.appendChild(buttons);
        }
    }
}
addButtons();

// get the buttons we added back inside JS
const buttonAC = document.querySelector('.button00');
const buttonDel = document.querySelector('.button01');
const buttonPercent = document.querySelector('.button02');
const buttonDiv = document.querySelector('.button03');
const button7 = document.querySelector('.button10');
const button8 = document.querySelector('.button11');
const button9 = document.querySelector('.button12');
const buttonMulti = document.querySelector('.button13');
const button4 = document.querySelector('.button20');
const button5 = document.querySelector('.button21');
const button6 = document.querySelector('.button22');
const buttonMin = document.querySelector('.button23');
const button1 = document.querySelector('.button30');
const button2 = document.querySelector('.button31');
const button3 = document.querySelector('.button32');
const buttonPlus = document.querySelector('.button33');
const button0 = document.querySelector('.button40');
const buttonDeci = document.querySelector('.button41');
const buttonEqal = document.querySelector('.button42');

function addButtonText () {
    buttonAC.textContent = 'AC';
    buttonDel.textContent = 'Del';
    buttonPercent.textContent = '%';
    buttonDiv.textContent = '/';
    button7.textContent = '7';
    button8.textContent = '8';
    button9.textContent = '9';
    buttonMulti.textContent = '*';
    button4.textContent = '4';
    button5.textContent = '5';
    button6.textContent = '6';
    buttonMin.textContent = '-';
    button1.textContent = '1';
    button2.textContent = '2';
    button3.textContent = '3';
    buttonPlus.textContent = '+';
    button0.textContent = '0';
    buttonDeci.textContent = '.';
    buttonEqal.textContent = '=';
    document.querySelector('.button43').textContent = '';
}

addButtonText();