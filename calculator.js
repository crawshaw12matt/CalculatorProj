// On Startup
let currentResult = ['0'];
let saveNumber = [];

function updateDisplay(value){
    document.getElementById('result').innerHTML = value;
}

document.onload = function(){
    updateDisplay(currentResult.join(''));
};

// Handling of "Numbers"
let pressedNumber = document.getElementsByClassName('number');

pressedNumber.onclick = function() {
    pressedNumber.style.backgroundColor = "Gainsboro";

    // If the current displayed value is 0, just set the currentResult to the pressed number
    if (currentResult[0] == 0) {
        currentResult[0] = pressedNumber.innerHTML
    } else {
        currentResult.push(pressedNumber.innerHTML)
    }
    pressedNumber.style.backgroundColor = "GhostWhite";
    updateDisplay(currentResult.join(''))
};

// Handling of "Number-functions"
let pressedFunction = document.getElementsByClassName('function');

pressedFunction.onclick = function(){
    pressedFunction.style.backgroundColor = "Gainsboro";
    saveNumber = currentResult;
    currentResult
    updateDisplay(currentResult.join(''));
    pressedFunction.style.backgroundColor = "GhostWhite";
}

// Handling of "Uses" and "Equals"