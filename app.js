let counterNum = document.getElementById("num-showed");
let add = document.getElementById("add-btn");
let subtract = document.getElementById("subtract-btn");
let resetBtn = document.getElementById("reset-btn");
let magicBtn = document.getElementById("magicButton-btn");

let counter = 0;

add.addEventListener("click", function() {
    counter ++;
    counterNum.innerText = counter;
})

subtract.addEventListener("click", function() {
    counter --;
    counterNum.innerText = counter;
})