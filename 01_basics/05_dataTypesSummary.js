// Primitive data type (Call by value)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.33
// const score = "result"
// JS is dynamic bcz we don't need define their datatypes
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log("Symbol vs Sybol(even they've same value, they are not equal):",id === anotherID);

// *******Non Primitive data type or Reference*********
// Array, Objects, Functions

const heroes = ["apple", "banana", "orange"]

let myObject = {
    name: "Imran",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!")
}

console.log("heroes: ",typeof(heroes))
console.log("myObject: ",typeof(myObject))
console.log("myFunction: ",typeof(myFunction))
// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++

// Stack <Primitive>, Heap <Non-Primitive>

// Stack Example
let myName = "Imran"
let anotherName = myName
anotherName = "Shan"

console.log(myName); 
console.log(anotherName); 

// The value of myName isn't changed because stack keeps copy of variables

// Heap Example
let userOne = {
    email:"abc@gmail.com",
    pass: 123
}

let userTwo = userOne

userTwo.email = "xyz@gmail.com"

console.log(userOne);
console.log(userTwo);

// We see both userOne and userTwo got changed, bcz heap creates reference. So, both changed.
