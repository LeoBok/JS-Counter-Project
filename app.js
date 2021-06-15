// get 'add-and-subtract' ID div for append the subtractBtn and addBtn 
let operatorsDiv = document.getElementById('add-and-subtract');

// create a subtract button
let subtractBtn = document.createElement('button');
// give it innerText property for display minus symbol
subtractBtn.innerText = '-';
// add the classes of center and subctract in the Css file
subtractBtn.className = 'center subtract';
// finally append subtractBtn to operatorsDiv
operatorsDiv.appendChild(subtractBtn);

// create an sum button
let addBtn = document.createElement('button');
// give it innerText property for display plus symbol
addBtn.innerText = '+';
// add the classes of center and add in the Css file
addBtn.className = 'center add';
// finally append addBtn to operatorsDiv
operatorsDiv.appendChild(addBtn);

let counterNum = document.getElementById("num-showed");
counterNum.innerText = 0;

// let add = document.getElementById("add-btn");
// let subtract = document.getElementById("subtract-btn");
let resetBtn = document.getElementById("reset-btn");
let magicBtn = document.getElementById("magicButton-btn");

let counter = 0;

/*
add.addEventListener("click", function() {
    counter ++;
    counterNum.innerText = counter;
    changeColor();
});
*/
/*
subtract.addEventListener("click", function() {
    counter --;
    counterNum.innerText = counter;
    changeColor();
});
*/
/*
resetBtn.addEventListener("click", function() {
    counter = 0;
    // counterNum.innerText = counter;
    changeColor();
});
*/
/*
function changeColor() {
    if ( counter < 0 ) {
        counterNum.classList.add("negative-number");
    }
    else if ( counter > 0 ) {
        counterNum.classList.add("positive-number");
    }
    else {
        counterNum.classList.remove("positive-number");
        counterNum.classList.remove("negative-number");
    }
}
*/
/*
magicBtn.addEventListener("click", function() {
   let askMessage = parseInt( prompt("Choose a number you want to start count from:") );
   counter = askMessage;
   // counterNum.innerText = counter;
   changeColor();
});
*/
