// for of

// Note: For of doesn't work for objects & For of great for array

// ["", "", ""] //String inside array

// [{}, {}, {}] //Object inside array

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is: ${greet}`);
    
// }

// let's use continue to remove the space

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     if (greet == " ") {
//         console.log("Space detected");
//         continue
//     }
//     console.log(`Each char is: ${greet}`);
    
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// Maps: don't prints duplicates only prints unique value
// It also remembers the order which objects don't do

const map = new Map()

map.set('BD', "Bangladesh")
map.set('IN', "India")
map.set('FR', "France")
map.set('BD', "Bangladesh") //No printed bcz duplicate

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// de-structure

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }


// ++++Object Iterations+++++

const myObj = {
    game1: "NFS",
    game2: "Spiderman"
}

// doesn't work for objects, saying object is not iterrable, we need to use 'for in'
// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
// }
