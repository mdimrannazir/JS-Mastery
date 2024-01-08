const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// Why important: sometimes the values can come from api or any other function which we don't know, we expect a value, we don't want null or undefined.

let num1

num1 = 20 ?? 10
num1 = null ?? 10 
num1 = undefined ?? 30
num1 = null ?? 40 ??50

console.log(num1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

const userLoggedIn = 100
userLoggedIn < 150 ? console.log("Less than 150 people online") : console.log("morethan 150 online")
