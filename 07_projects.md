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

## project 5: Keyboard Key Press Check

```javascript
window.addEventListener('keydown', function (e) {
  document.getElementById('insert').innerHTML = `
  <div class='color'>
    <table>
      <tr>
        <td>Key</td>
        <td>KeyCode</td>
        <td>Code</td>
      </tr>
      <tr>
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `;
});



```



## project 6: Automatic Background Color Changer

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

```



## project 7: 

```javascript


```


## project 8: Automatic text change

```javascript
const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

let j = 0;

function type() {
  if (j == words.length) {
    erase();
  }
  typedTextSpan.innerHTML = words[j];
  console.log(words[j]);
  j++;
  setTimeout(type, 1000);
}

function erase() {
  typedTextSpan.innerHTML = '';
  j = 0;
}

type();




```

## project 9: Follow cursor and change color

```javascript
const cursor = document.querySelector('.cursor');
// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array

document.addEventListener('mousemove', function (e) {
  var y = e.clientX;
  var x = e.clientY;
  console.log(x);
  console.log(y);
  cursor.style.top = x;
  cursor.style.left = y;
  cursor.style.backgroundColor = changeColor();
});

// let currentColorIndex = 0;
let i = 0;

const changeColor = function () {
  // const color = colors[currentColorIndex];
  // currentColorIndex = (currentColorIndex + 1) % colors.length;
  // return color;

  if (i === colors.length - 1) {
    i = 0;
  } else {
    i++;
  }
  return colors[i];
};





```

## project 10: Emoji change on mouse hover

```javascript

const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '😃',
  '😁',
  '😬',
];

let i = 0;
btn.addEventListener('mouseover', function (e) {
  if (i < 33) {
    btn.innerHTML = emojis[i];
    i++;
    console.log(i);
  } else {
    i = 0;
  }
});





```

## project 11: Typer library

```javascript
const inputField = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');
const buttons = document.querySelectorAll('.btn');

// ++++++ For Repetative approach++++++++
// const Uppercase = document.querySelector('.uppercase');
// const Lowercase = document.querySelector('.lowercase');
// const Capitalize = document.querySelector('.capitalize');
// const Bold = document.querySelector('.bold');
// const Italic = document.querySelector('.italic');
// const Underline = document.querySelector('.underline');

buttons.forEach(function (myBtn) {
  myBtn.addEventListener('click', function (e) {
    let value = inputField.value;
    if (e.target.className == 'btn uppercase') {
      let x = value.toUpperCase();
      outputField.innerHTML = x;
    } else if (e.target.className == 'btn lowercase') {
      let x = value.toLowerCase();
      outputField.innerHTML = x;
    } else if (e.target.className == 'btn capitalize') {
      let totalValue = inputField.value;
      let firstValue = inputField.value[0];
      let lower = totalValue.toLowerCase();
      lower = lower.slice(1);
      let upper = firstValue.toUpperCase();
      outputField.innerHTML = upper + lower;
    } else if (e.target.className == 'btn bold') {
      let x = value;
      outputField.innerHTML = `<b>${x}</b>`;
    } else if (e.target.className == 'btn bold') {
      let x = value;
      outputField.innerHTML = `<b>${x}</b>`;
    } else if (e.target.className == 'btn italic') {
      let x = value;
      outputField.innerHTML = `<i>${x}</idsf>`;
    } else if (e.target.className == 'btn underline') {
      let x = value;
      outputField.innerHTML = `<u>${x}</u>`;
    }
  });
});

// buttons.addEventListener('click', function (e) {
//   let value = inputField.value;
//   let x = value.toUpperCase();
//   outputField.innerHTML = x;
// });

// ++++++Repetative approach++++++++

// Uppercase.addEventListener('click', function (e) {
//   let value = inputField.value;
//   let x = value.toUpperCase();
//   outputField.innerHTML = x;
// });

// Lowercase.addEventListener('click', function (e) {
//   let value = inputField.value;
//   let x = value.toLowerCase();
//   outputField.innerHTML = x;
// });

// Capitalize.addEventListener('click', function (e) {
//   let totalValue = inputField.value;
//   let firstValue = inputField.value[0];
//   let lower = totalValue.toLowerCase();
//   lower = lower.slice(1);
//   let upper = firstValue.toUpperCase();
//   outputField.innerHTML = upper + lower;
// });

// Bold.addEventListener('click', function (e) {
//   let value = inputField.value;
//   let x = value;
//   outputField.innerHTML = `<b>${x}</b>`;
// });

// Italic.addEventListener('click', function (e) {
//   let value = inputField.value;
//   let x = value;
//   outputField.innerHTML = `<i>${x}</i>`;
// });

// Underline.addEventListener('click', function (e) {
//   let value = inputField.value;
//   let x = value;
//   outputField.innerHTML = `<u>${x}</u>`;
// });






```


## project 12: Random Image

```javascript
const baseURL = 'https://source.unsplash.com/all/300x300/';

// this url gives an image. Use this and NO API calls

const imgField = document.querySelector('.content');

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  // imgField.innerHTML = `<img src="${baseURL}">`;
  if (imgField.firstChild) {
    imgField.removeChild(imgField.firstChild);
  }
  let imgElemnent = document.createElement('img');
  // https://source.unsplash.com/all/300x300/?random=&2
  let randomBaseURL = baseURL + `?random=&${Math.random()}`;
  imgElemnent.setAttribute('src', randomBaseURL);
  imgField.appendChild(imgElemnent);
});






```


## project 13: Jokes from API Request

```javascript
const url = 'https://api.chucknorris.io/jokes/random';

const jokeText = document.querySelector('#display-joke');
const getJokeBtn = document.querySelector('.btn');

getJokeBtn.addEventListener('click', function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      console.log(data);
      console.log(typeof data);
      console.log(data.value);

      jokeText.innerHTML = data.value;
    }
  };
  xhr.send();
});






```


## project 14: random cats using api

```javascript
const url = 'https://api.thecatapi.com/v1/images/search';

const button = document.querySelector('.btn');
const container = document.querySelector('.container');

function getCat() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const url = data[0].url;
      console.log(url);
      container.className = 'cats';
      const imgElement = document.createElement('img');
      imgElement.src = url;
      imgElement.style.padding = '10px';
      imgElement.style.height = '500px';
      container.appendChild(imgElement);
    });
}

button.addEventListener('click', function () {
  getCat();
});






```


## project 15: Simple Book List App CRUD Operation

```javascript
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');
const btnUpdate = document.querySelector('.btnUpdate');

let parentSection;

btn.addEventListener('click', function (e) {
  //work on CRUD operation of DOM
  e.preventDefault();
  console.log(title.value);
  const section = document.createElement('section');
  section.setAttribute('class', 'table-section');
  const titleDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const yearDiv = document.createElement('div');
  const actionDiv = document.createElement('div');

  titleDiv.textContent = title.value;
  authorDiv.textContent = author.value;
  yearDiv.textContent = year.value;
  actionDiv.innerHTML = `
  <button class="editBtn">✏️</button> <button class="dltBtn">❌</button>
  `;
  // section.innerHTML = `
  // <div>${title.value}</div>
  // <div>${author.value}</div>
  // <div>${year.value}</div>
  // <div></div>
  // `;
  section.appendChild(titleDiv);
  section.appendChild(authorDiv);
  section.appendChild(yearDiv);
  section.appendChild(actionDiv);

  bookList.appendChild(section);

  // Making input fields empty after the book is added
  title.value = '';
  author.value = '';
  year.value = '';

  // Delete & Edit

  section.addEventListener('click', function (e) {
    console.log(e.target.className);
    if (e.target.className == 'dltBtn') {
      section.remove();
    } else if (e.target.className == 'editBtn') {
      parentSection = e.target.parentElement.parentElement;

      btnUpdate.style.display = 'block';
      btnUpdate.style.float = 'right';

      console.log(parentSection);

      const parentSectionTitle = parentSection.querySelector('div:first-child');
      const parentSectionAuthor =
        parentSection.querySelector('div:nth-child(2)');
      const parentSectionYear = parentSection.querySelector('div:nth-child(3)');

      console.log(parentSectionTitle.textContent);
      console.log(parentSectionAuthor.textContent);
      console.log(parentSectionYear.textContent);

      title.value = parentSectionTitle.textContent;
      author.value = parentSectionAuthor.textContent;
      year.value = parentSectionYear.textContent;
    }
  });
});

btnUpdate.addEventListener('click', function (e) {
  e.preventDefault();
  const parentSectionTitle = parentSection.querySelector('div:first-child');
  const parentSectionAuthor = parentSection.querySelector('div:nth-child(2)');
  const parentSectionYear = parentSection.querySelector('div:nth-child(3)');

  console.log('update btn clicked');
  parentSectionTitle.textContent = title.value;
  parentSectionAuthor.textContent = author.value;
  parentSectionYear.textContent = year.value;

  btnUpdate.style.display = 'none';
});







```



## project 16: 

```javascript






```
