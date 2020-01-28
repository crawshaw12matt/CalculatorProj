// On Startup
let currentResult = [0];
let saveNumber = [0];
let currentOperator = [0];

function updateDisplay(value){
    document.getElementById('result').innerHTML = value;
}

window.onload = function(){
    updateDisplay(currentResult.join(''));
};

// Clear Everything Functionality
const CE = document.getElementById("clear-everything");

CE.addEventListener('mouseenter', function(){
    CE.style.opacity = 0.75;
})

CE.addEventListener('mouseleave', function(){
    CE.style.opacity = 1;
})

CE.onclick = function(){
    currentResult = [0];
    saveNumber = [0];
    currentOperator = [0];
    updateDisplay(currentResult.join(''));
}

// Clear currentResult Functionality
const C = document.getElementById('clear');

C.addEventListener('mouseenter', function(){
    C.style.opacity = 0.75;
})

C.addEventListener('mouseleave', function(){
    C.style.opacity = 1;
})

C.onclick = function(){
    currentResult = [0];
    updateDisplay(currentResult.join(''));
}

// Backspace Functionality
const backspace = document.getElementById('backspace');

backspace.addEventListener('mouseenter', function(){
    backspace.style.opacity = 0.75;
})

backspace.addEventListener('mouseleave', function(){
    backspace.style.opacity = 1;
})

backspace.onclick = function(){
    currentResult.pop();
    if (currentResult[0] == undefined) {
        currentResult[0] = 0;
    }
    updateDisplay(currentResult.join(''));
}

//  Number Button Listeners
for (var i = 0; i < 10; i++) {

    const number = document.getElementById(i);

    number.addEventListener('mouseenter', function(){
        number.style.opacity = 0.75;
    })
    number.addEventListener('mouseleave', function(){
        number.style.opacity = 1;
    })
    number.addEventListener('click', function(){
        if (currentResult[0] == 0) {
            currentResult[0] = number.innerHTML;
        } else {
            currentResult.push(number.innerHTML);
        }
        updateDisplay(currentResult.join(''));
    })
}
