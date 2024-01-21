# Projects related to DOM

## project link
[Click here](https://cutt.ly/VwK0q9B4)

# Solution code

## project 1: color changer

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else 'wrong';
  });
});



```

## project 2: BMI Calculator

```javascript
const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  console.log(height);
  console.log(weight);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `give valid height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `give valid weight: ${weight}`;
  } else {
    x = (weight / ((height * height) / 10000)).toFixed(2);
  }

  if (x < 18.6) {
    results.innerHTML = `BMI ${x}: Under Weight`;
  } else if (x > 18.6 && x < 24.9) {
    results.innerHTML = `BMI ${x}: Normal`;
  } else {
    results.innerHTML = `BMI ${x}: Overweight`;
  }
});




```

## project 3: Digital Clock

```javascript
const clock = document.getElementById('clock');

setInterval(() => {
  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);





```

## Project 4: Guess Number Game

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const form = document.querySelector('form');
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');

const startOver = document.querySelector('.resultParas');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = userInput.value;
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Enter a valid number');
  } else if (guess < 1) {
    alert('Enter a number morethan 1');
  } else if (guess > 100) {
    alert('Enter a number less than 100');
  } else {
    prevGuess.push(guess);
    console.log(numGuess);
    if (numGuess === 2) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low');
  } else if (guess > randomNumber) {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    playGame = true;
    startOver.removeChild(p);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault;

  guessSlot.innerHTML = randomNumber;
});





```

## project 5: Automatic Background Color Changer

```javascript
const start = document.getElementById('start');
const stop = document.getElementById('stop');

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;

const startChaningColor = function () {
  document.body.style.backgroundColor = randomColor();
  console.log(randomColor());
};

const stopChaningColor = function () {
  clearInterval(intervalID);
  intervalID = null; //for clean code purpose only
};

start.addEventListener('click', function () {
  if (!intervalID) {
    //for clean code purpose only
    intervalID = setInterval(startChaningColor, 1000);
  }
});

stop.addEventListener('click', stopChaningColor);





```