// console.log(Math.PI); //3.1416
// Math.PI = 5
// console.log(Math.PI); //still 3.1415

// const descriptior = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptior); //we can see in the hardcode, writable is false, so can't change it.

const food = {
    name: 'Ice Cream',
    price: 250,
    isAvailable: true,

    orderIce: function(){
        console.log("Ordered ice cream");
    }
}

console.log(Object.getOwnPropertyDescriptor(food, "name")) //we can see our hardcode here, all true

Object.defineProperty(food, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(food, "name")) //now writeable and enumerable false.
// Now we can not change the value of name

for (let [key,value] of Object.entries(food)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`); 
    //name won't be printed bcz we made enumerable flase
    }
}