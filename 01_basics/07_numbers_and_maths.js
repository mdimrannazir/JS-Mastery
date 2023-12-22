const score = 400
const balance = new Number(100)

console.log(score);
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);

// Only two value shows after points, ex: 212.32
console.log(balance.toFixed(2));

const otherNumber = 50.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString()); //US standard

console.log(hundreds.toLocaleString('en-IN')); //Indian standard

console.log(hundreds.toLocaleString('bn-BD')); //BD standard

// ++++++++++ Maths ++++++++++++++++++
console.log("----------------");

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(6.75));

console.log(Math.ceil(6.75));

console.log(Math.floor(6.75));

console.log(Math.min(4,3,8,1,9));

console.log(Math.max(4,3,8,1,9));

/*
Random give value from 0 to 1

random()*10) generates a number from 0 - 9. Math. floor(Math. random()*120) generates a number from 0 - 119.
*/

console.log("Random");

console.log(Math.random());

// console.log(Math.random()*10+1);

console.log(Math.floor(Math.random()*10));

// Now I want value between 10 to 20



// const min = 10
// const max = 20

// console.log(Math.floor(Math.random()*(max-min+1))+min)

 
