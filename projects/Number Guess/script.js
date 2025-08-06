const submitBtn = document.querySelector('#button');
const guessNum = document.querySelector('#userInput');
const guessDisplay = document.querySelector('.userGuesses');
const remainingDisplay = document.querySelector('.userRemainGuesses');
const resultContainer = document.querySelector('.results');
const messageDisplay = document.querySelector('.low_high_hints');

// Game State Variables
const Max_Guesses = 10;
let randomNumber = getRandomNumber();
let guesses = [];
let attemptsLeft = Max_Guesses;
let isGameActive = true;

// Generate random number between 1 and 100
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
function handleGuess(e) {
  e.preventDefault();
  if (!isGameActive) return;
  const guess = parseInt(guessNum.value.trim());
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Enter a number between 1 and 100');
    return;
  }
  guesses.push(guess);
  attemptsLeft--;
  updateDisplay();

  if (guess === randomNumber) {
    showMessage(' Correct! You guessed it!');
    endGame();
  } else if (attemptsLeft === 0) {
    showMessage(` Game Over! The number was ${randomNumber}`);
    endGame();
  } else {
    showMessage(guess < randomNumber ? ' Too Low' : ' Too High');
  }

  guessNum.value = '';
}

// Display guesses and remaining attempts
function updateDisplay() {
  guessDisplay.textContent = `Guesses: ${guesses.join(', ')}`;
  remainingDisplay.textContent = `Attempts Left: ${attemptsLeft}`;
}
// Show feedback message
function showMessage(msg) {
  messageDisplay.innerHTML = `<p>${msg}</p>`;
}
// End the game
function endGame() {
  isGameActive = false;
  guessNum.disabled = true;
  submitBtn.disabled = true;

  const newGameBtn = document.createElement('button');
  newGameBtn.textContent = 'Start New Game';
  newGameBtn.classList.add('new-game-btn');
  resultContainer.appendChild(newGameBtn);
  newGameBtn.addEventListener('click', resetGame);
}
// Reset game to play again
function resetGame() {
  randomNumber = getRandomNumber();
  guesses = [];
  attemptsLeft = Max_Guesses;
  isGameActive = true;

  guessNum.disabled = false;
  submitBtn.disabled = false;
  guessNum.value = '';
  guessNum.focus();

  guessDisplay.textContent = '';
  remainingDisplay.textContent = '';
  messageDisplay.innerHTML = '';

  const newGameBtn = document.querySelector('.new-game-btn');
  if (newGameBtn) resultContainer.removeChild(newGameBtn);
}

submitBtn.addEventListener('click', handleGuess);
