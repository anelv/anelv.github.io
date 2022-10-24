
//generate a random number between 1 - 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

//create some constants
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

/*youtuber added const
const MINNUMBER = 1;
const MAXNUMBER = 100;
*/

//create variable for number of guesses 
let guessCount = 1;

//create variable for reset button
let resetButton;

function checkGuess() {

const userGuess = Number(guessField.value);
if (guessCount === 1) {
  guesses.textContent = 'Previous guesses: ';
}
guesses.textContent += `${userGuess} `;

/*youtuber added command to prevent out of range and non-numbers
if (isNaN(userGuess)) {
    alert ("Non-Numeric Guess Attempted! Invalid. Try Again.");
    return;
}
if ((userGuess < MINNUMBER) || (userGuess > MAXNUMBER)) {
    alert("Out-of-Range Guess Attempted! Invalid. Try Again.")
    return;
}
*/

//correct number has been guessed
if (userGuess === randomNumber) {
  lastResult.textContent = 'Congratulations! You got it right!';
  lastResult.style.backgroundColor = 'green';
  lowOrHi.textContent = '';
  setGameOver();
}

//maximum guess amount reached
else if (guessCount === 10) {
  lastResult.textContent = '!!!GAME OVER!!!';
  lowOrHi.textContent = '';
  setGameOver();
} 

//wring guess. maximum guess amount not reached yet
//check to see if guess was too low or too high
else {
  lastResult.textContent = 'Wrong!';
  lastResult.style.backgroundColor = 'red';
  
  if (userGuess < randomNumber) {
    lowOrHi.textContent = 'Last guess was too low!';
  } 
  else if (userGuess > randomNumber) {
    lowOrHi.textContent = 'Last guess was too high!';
  }
}

guessCount++;
guessField.value = '';
guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }