const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const resetButton = document.getElementById('reset-button');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const message = document.getElementById('message');
let clickCounter = document.getElementById('click-counter');

guessButton.addEventListener('click', handleGuess);
resetButton.addEventListener('click', resetGame);

function handleGuess() {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    showMessage('Ingresa un número válido entre 1 y 100', 'red');
    return;
  }

  attempts++;
  clickCounter.textContent = `Número de intentos: ${attempts}`;

  if (guess === secretNumber) {
    showMessage(`¡Felicidades! Adivinaste el número en ${attempts} intentos`, 'green')
    restart();
    guessInput.disabled = true;
    guessButton.disabled = true;
    
  } else if (guess < secretNumber) {
    showMessage('El número secreto es mayor', 'black');
  } else {
    showMessage('El número secreto es menor', 'black');
  }
}

function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

function resetGame() { 
  attempts = 0;
  clickCounter.textContent = "Número de intentos: ";
  guessInput.value = "";
  message.textContent = "";
}




