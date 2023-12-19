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