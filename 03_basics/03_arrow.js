const user = {
    username: "imran",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welsome to website`);
        console.log(this);//current context
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//if ran in node environment, it will return empty object
console.log(this); 

//Interview: if ran in browser console, it will return "Window Object"
//console.log(this);//go run in console

//Functions "this" return manything

// function food(){
//     console.log(this);
// }

// food()

// "this" keyword doesn't work in functions

// function foods(){
//     let username = "nazir"
//     console.log(this.username);//undefined:can't use "this" in functions, 'this' works only for objects
// }

// foods()

// Same as previous function, just defined it diffrently

// const foods = function(){
//     let username = "nazir"
//     console.log(this.username);//undefined:can't use "this" in functions, 'this' works only for objects
// }

// foods()

// ++++Arrow Functions+++++++

// const food = () => {
//     let username = "nazir"
//     console.log(this);//return empty string, normal function returned many things
// }

// food()


// const foods = () => {
//     let username = "nazir"
//     console.log(this.username);//undefined:can't use "this" in functions, 'this' works only for objects
// }

// foods()

// Basic Arrow function


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(2, 2));

// Note: when used curly braces in function we need to return. But for others we don't need to return. Example in the implicit section

// ++++Implicit++++ 

const addTwos = (num1, num2) => num1 + num2

console.log(addTwos(3, 4));

// Another way using parenthesis, helpful for object mainly bcz we must use parenthesis for objects, ex given below

const addTwoss = (num1, num2) => (num1 + num2)

console.log(addTwoss(5, 5));

// Object 

const addTwox = (num1, num2) => ({username: "imran"})

console.log(addTwox());

// All syntex are correct

// const myArray = [2,3,4,5,6]

// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())

