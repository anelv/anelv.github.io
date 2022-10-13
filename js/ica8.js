var myDiv = document.getElementById("myDiv");
var myP = document.getElementById("myP");
var myDiv2 = document.getElementById("myDiv2");
var myP2 = document.getElementById("myP2");

myDiv.addEventListener('click', changeBackground);

function changeBackground() {
    myDiv.style.background = 'skyblue'
}


myP2.addEventListener('click', changeText);

function changeText() {
    myP2.textContent = 'Just kidding'
}

