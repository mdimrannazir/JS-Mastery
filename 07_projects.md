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

