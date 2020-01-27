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

//  Number Button Listeners
for (var i = 0; i < 10; i++) {

    const button = document.getElementById(i);

    button.addEventListener('mouseenter', function(){
        button.style.opacity = 0.75;
    })
    button.addEventListener('mouseleave', function(){
        button.style.opacity = 1;
    })
    button.addEventListener('click', function(){
        if (currentResult[0] == 0) {
            currentResult[0] = button.innerHTML;
        } else {
            currentResult.push(button.innerHTML);
        }
        updateDisplay(currentResult.join(''));
    })
}
