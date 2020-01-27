// On Startup
let currentResult = ['0'];
let saveNumber = [];

function updateDisplay(value){
    document.getElementById('result').innerHTML = value;
}

window.onload = function(){
    updateDisplay(currentResult.join(''));
};

// Handling of Buttons
document.getElementsByClassName("button").onclick = function(){
    //document.getElementById('7').style.backgroundColor = "Gainsboro";
    updateDisplay(5);
    // If the current displayed value is 0, just set the currentResult to the pressed number
    //if (currentResult[0] == 0) {
    //    currentResult[0] = pressedNumber.innerHTML
    //} else {
    //    currentResult.push(pressedNumber.innerHTML)
    //}
    //document.getElementById('7').style.backgroundColor = "lightgray";
    //updateDisplay(currentResult.join(''))
};

// Handling of "Number-functions"

// Handling of "Uses" and "Equals"