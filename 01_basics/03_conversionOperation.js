// Integer or Number Conversion

// let score = 48
// let score = "48" 
let score = "48abc" 
// let score = null 
// let score = undefined 
// let score = true 
// let score = "Imran" 

/*
"48" => 48
"48abc" => NaN
null => 0
undefined => NaN
true => 1 & false =>0
"Imran" =>Nan
*/

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof(valueInNumber))
console.log(valueInNumber) 

let isLoggedIn = 1
// let isLoggedIn = ""
// let isLoggedIn = "Imran"

/*
1 => true; 0 => false
"" => false
"Imran" => true
*/

// Boolean Conversion

console.log("-------")
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof(booleanIsLoggedIn))
console.log(booleanIsLoggedIn) 

// String Conversion

console.log("-------")
let someNumber = 44
let stringNumber = String(someNumber)
console.log(typeof(stringNumber))
console.log(stringNumber)

// ********************* Operations **********************

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "Imran"
let str2 = " Nazir"
str3 = str1 + str2 
console.log(str3)

console.log("1" + 2);      //12
console.log(1 + "2");      //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2");  //32

let gameCounter = 100
gameCounter++ //Postfix operator
// ++gameCounter //Prefix  operator
console.log(gameCounter)

let x = 3;
const y = x++;
// x is 4; y is 3
console.table([x,y])

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
console.table([x2,y2])

// let x = 3;
// const y = ++x;
// // x is 4; y is 4
// console.table([x,y])

// let x2 = 3n;
// const y2 = ++x2;
// // x2 is 4n; y2 is 4n
// console.table([x2,y2])
