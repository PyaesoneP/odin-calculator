const calculatorFrame = document.querySelector('.calculatorframe');
const calculatorDisplay = document.querySelector('.display');
const calculatorBody = document.querySelector('.numbersandops');

// add buttons to the calculator
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

// to set initial values
let num1 = 0;
let num2 = 0;
let operator = '';
let answer;
calculatorDisplay.textContent = '';

// to get the num value
let num = '';
button0.addEventListener('click', () => {
    num += button0.textContent;
    // to display on calculator etc.
    calculatorDisplay.textContent += button0.textContent;
})
button1.addEventListener('click', () => {
    num += button1.textContent;
    calculatorDisplay.textContent += button1.textContent;
})
button2.addEventListener('click', () => {
    num += button2.textContent;
    calculatorDisplay.textContent += button2.textContent;
})
button3.addEventListener('click', () => {
    num += button3.textContent;
    calculatorDisplay.textContent += button3.textContent;
})
button4.addEventListener('click', () => {
    num += button4.textContent;
    calculatorDisplay.textContent += button4.textContent;
})
button5.addEventListener('click', () => {
    num += button5.textContent;
    calculatorDisplay.textContent += button5.textContent;
})
button6.addEventListener('click', () => {
    num += button6.textContent;
    calculatorDisplay.textContent += button6.textContent;
})
button7.addEventListener('click', () => {
    num += button7.textContent;
    calculatorDisplay.textContent += button7.textContent;
})
button8.addEventListener('click', () => {
    num += button8.textContent;
    calculatorDisplay.textContent += button8.textContent;
})
button9.addEventListener('click', () => {
    num += button9.textContent;
    calculatorDisplay.textContent += button9.textContent;
})
buttonDeci.addEventListener('click', () => {
    num += buttonDeci.textContent;
    calculatorDisplay.textContent += buttonDeci.textContent;
})

// to reset everything 
buttonAC.addEventListener('click', () => {
num1 = 0;
num2 = 0;
operator = '';
answer;
calculatorDisplay.textContent = '';
})

// to delete characters
buttonDel.addEventListener('click', () => {
    // to turn the string to an array so we can take the last ones out
    let numAndOpsArr = calculatorDisplay.textContent.split('');
    let lastValue = numAndOpsArr[numAndOpsArr.length - 1];
    let secondLastValue = numAndOpsArr[numAndOpsArr.length - 2];
    if (secondLastValue === '+' || secondLastValue === '-' || secondLastValue === '*' || secondLastValue === '/') {
        // to take the last three indices because we used ' + '. there are two spaces around the operator
        numAndOpsArr.pop();
        numAndOpsArr.pop();
        numAndOpsArr.pop();
        // to delete the operator and num2
        num2 = 0;
        operator = '';
        // to rejoin the array elements into the string
        calculatorDisplay.textContent = numAndOpsArr.join('');
        num = calculatorDisplay.textContent;
    } else {
        numAndOpsArr.pop();
        calculatorDisplay.textContent = numAndOpsArr.join('');
        num = calculatorDisplay.textContent;
    }
})

// to get the operator
buttonPlus.addEventListener('click', () => {
    calculatorDisplay.textContent += ' + ';
    // to covert the num string to num1 and num2
    if (!num1) {
        num1 = Number(num);
        num = '';
    } else {
        num2 = Number(num);
        num = '';
    }
    operate();
    operator = '+';
})
buttonMin.addEventListener('click', () => {
    calculatorDisplay.textContent += ' - ';
    if (!num1) {
        num1 = Number(num);
        num = '';
    } else {
        num2 = Number(num);
        num = '';
    }
    operate();
    operator = '-';
})
buttonMulti.addEventListener('click', () => {
    calculatorDisplay.textContent += ' * ';
    if (!num1) {
        num1 = Number(num);
        num = '';
    } else {
        num2 = Number(num);
        num = '';
    }
    operate();
    operator = '*';
})
buttonDiv.addEventListener('click', () => {
    calculatorDisplay.textContent += ' / ';
    if (!num1) {
        num1 = Number(num);
        num = '';
    } else {
        num2 = Number(num);
        num = '';
    }
    operate();
    operator = '/';
})
buttonEqal.addEventListener('click', () => {
    if (!num1) {
        num1 = Number(num);
        num = '';
    } else {
        num2 = Number(num);
        num = '';
    }
    operate();
    calculatorDisplay.textContent = num1;
})
buttonPercent.addEventListener('click', () => {
    calculatorDisplay.textContent += '%';
    if (!num1) {
        num1 = Number(num);
        num = '';
    } else {
        num2 = Number(num);
        num = '';
    }
    num1 /= 100;
    operate();
})

// to operate
function operate () {
    if (num1 && num2 && operator) {
        if (operator === '+') {
            answer = num1 + num2;
            num1 = answer;
        }
        if (operator === '-') {
            answer = num1 - num2;
            num1 = answer;
        }
        if (operator === '*') {
            answer = num1 * num2;
            num1 = answer;
        }
        if (operator === '/') {
            answer = num1 / num2;
            num1 = answer;
        }
    }
}