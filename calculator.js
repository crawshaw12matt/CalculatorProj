// On Startup
let currentResult = [0];
let saveNumber = [0];
let currentOperator = [0];

window.onload = function(){
    updateDisplay(currentResult.join(''));
};

// -------------------- CODING FUNCTIONS ------------------------------
function updateDisplay(value){
    document.getElementById('result').innerHTML = value;
}

function resetValues(){
    currentResult = [0];
    saveNumber = [0];
}

// ---------------------- ALL BUTTONS ----------------------------------
document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('mouseenter', function(){
        item.style.opacity = 0.75;
    })
    item.addEventListener('mouseleave', function(){
        item.style.opacity = 1;
    })
})

// ----------------------- NUMBERS -------------------------------------
//  Number Button Listeners
for (let i = 0; i < 10; i++) {

    const number = document.getElementById(i);

    number.addEventListener('click', function(){
        if (currentResult[0] == 0) {
            currentResult[0] = number.innerHTML;
        } else if (currentResult[0] == '=') {
            resetValues();
            currentResult[0] = number.innerHTML;
        } else {
            currentResult.push(number.innerHTML);
        }
        updateDisplay(currentResult.join(''));
    })
}

// --------------------- SWITCH & DECIMALS -----------------------------
// Switch
const switcher = document.getElementById('switch');

switcher.onclick = function() {
    currentResult.unshift('-');
    updateDisplay(currentResult.join(''));
}

// Decimal
const deci = document.getElementById('decimal');

deci.onclick = function() {
    currentResult.push('.');
    updateDisplay(currentResult.join(''));
}

// --------------------- MATH FUNCTIONS --------------------------------
// All Operators saveNumber Functionality
for (let j = 10; j < 18; j++) {

    if (j !== 16 || j !== 15) {
        const operator = document.getElementById(j);

        operator.addEventListener('click', function(){
            if (currentResult[0] == '=') {
                currentResult.splice(0, 1);
            }
            saveNumber = currentResult;
            currentResult = [0];
            updateDisplay(operator.innerHTML);
        })
    }
}

// Addition
const addButton = document.getElementById('10');

addButton.onclick = function() {
    currentOperator[0] = '+';
}

// Subtraction
const subButton = document.getElementById('11');

subButton.onclick = function() {
    currentOperator[0] = '-';
}

// Multiplication
const multButton = document.getElementById('12');

multButton.onclick = function() {
    currentOperator[0] = '*';
}

// Division
const divButton = document.getElementById('13');

divButton.onclick = function() {
    currentOperator[0] = '/';
}

// Exponent
const expButton = document.getElementById('14');

expButton.onclick = function() {
    currentOperator[0] = '^';
}

// Root
const rootButton = document.getElementById('15');

rootButton.onclick = function() {
    let squared = parseFloat(currentResult.join(''));
    let rooted = Math.sqrt(squared);
    currentResult.splice(0, currentResult.length - 1);
    currentResult[0] = rooted;
    updateDisplay(currentResult.join(''));
}

// Fractionalize
const fractButton = document.getElementById('16');

fractButton.onclick = function() {
    let denominator = parseFloat(currentResult.join(''));
    let fract = 1 / denominator;
    currentResult.splice(0, currentResult.length - 1);
    currentResult[0] = fract;
    updateDisplay(currentResult.join(''));
}

// Modular
const modButton = document.getElementById('17');

modButton.onclick = function() {
    currentOperator[0] = '%';
}

// Equals

const equalsButton = document.getElementById('equal');

equalsButton.onclick = function() {
    let num1 = parseFloat(currentResult.join(''));
    let num2 = parseFloat(saveNumber.join(''));
    let mathSign = currentOperator[0];
    if (num1) {
        if (num2) {
            if (mathSign) {
                resetValues();
                currentResult[0] = '=';
                switch (mathSign) {
                    case '+':
                        let resultOfAdd = num1 + num2;
                        currentResult[1] = resultOfAdd;
                        break;
                    case '-':
                        let resultOfSub = num2 - num1;
                        currentResult[1] = resultOfSub;
                        break;
                    case '*':
                        let resultOfMult = num1 * num2;
                        currentResult[1] = resultOfMult;
                        break;
                    case '/':
                        let resultOfDiv = num2 / num1;
                        currentResult[1] = resultOfDiv;
                        break;
                    case '^':
                        let resultOfExp = Math.pow(num2, num1);
                        currentResult[1] = resultOfExp;
                        break;
                    case '%':
                        let resultOfMod = num2 % num1;
                        currentResult[1] = resultOfMod;
                        break;
                }
                updateDisplay(currentResult[1]);
            } else {
                updateDisplay('Error with operator');
            }
        } else {
            updateDisplay('Error with second number');
        }
    } else {
        updateDisplay('Error with first number');
    }
}



// --------------------- CALC-FUNCTIONS --------------------------------
// Clear Everything Functionality
const CE = document.getElementById("clear-everything");

CE.onclick = function(){
    resetValues();
    currentOperator = [0];
    updateDisplay(currentResult.join(''));
}

// Clear currentResult Functionality
const C = document.getElementById('clear');

C.onclick = function(){
    currentResult = [0];
    updateDisplay(currentResult.join(''));
}

// Backspace Functionality
const backspace = document.getElementById('backspace');

backspace.onclick = function(){
    currentResult.pop();
    if (currentResult[0] == undefined) {
        currentResult[0] = 0;
    }
    updateDisplay(currentResult.join(''));
}