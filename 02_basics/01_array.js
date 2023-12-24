const myArr = [0,1,2,3,4,5]
// const myArr = new Array(0,1,2,3) //same as previous one
const heroes = ["spderman","superman"]

// console.log(myArr[0]);
// console.log(heroes[0]);

// Array Mathods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// console.log(myArr);

// adds at the first

// myArr.unshift(9)
// myArr.unshift(8)
// myArr.shift()

// console.log(myArr);

// More methods

// console.log(myArr.includes(3)) //Returns true of false
// console.log(myArr.lastIndexOf(3)); 
// console.log(myArr); 

// Join coverts array into string

// const newArr = myArr.join()

// console.log(myArr); 
// console.log(newArr)
// console.log(typeof (myArr))
// console.log(typeof (newArr))

// Slice, Splice

console.log("A", myArr);  
const myn1 = myArr.slice(1,3) //slice use krle, last er ta nea hoi na, 3number index show hbe na. Splice last index tao show kore
console.log("B", myn1); 

// Splice

console.log("C", myArr);  
const myn2 = myArr.splice(1,3)
console.log("D", myn2);
console.log("E main array:", myArr);  //main array theke slice r splice er krn e oituk baad hoe gese

