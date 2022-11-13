
//BUTTON 1

function spin1() {
    outputInt1 = randomNumber(100, 999);
    output1.textContent = outputInt1;
}
function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

//BUTTON 2

function spin2() {
    outputInt2 = randomNumber(100, 999);
    output2.textContent = outputInt2;
}
function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

//BUTTON 3

function spin3() {
    outputInt3 = randomNumber(1000, 9999);
    output3.textContent = outputInt3;
}
function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}


//submit number
function submit() {
    alert("Your phone number is " + output1.textContent + output2.textContent + output3.textContent);
}


const output1 = document.querySelector('.output1');
let outputInt1 = parseInt(output1.textContent);
console.log(outputInt1);

const output2 = document.querySelector('.output2');
let outputInt2 = parseInt(output2.textContent);
console.log(outputInt2);

const output3 = document.querySelector('.output3');
let outputInt3 = parseInt(output3.textContent);
console.log(outputInt3);


const spinButton1 = document.querySelector('.spin-butt1').addEventListener('click', spin1);
const spinButton2 = document.querySelector('.spin-butt2').addEventListener('click', spin2);
const spinButton3 = document.querySelector('.spin-butt3').addEventListener('click', spin3);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);