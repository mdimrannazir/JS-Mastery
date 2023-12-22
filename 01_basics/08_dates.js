let myDate = new Date

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(typeof myDate);
 
// Month starts from zero index

let myCreatedDate = new Date(2023, 0, 8)
console.log(myCreatedDate.toDateString());

let myCreatedDateOne = new Date(2023, 0, 8, 5, 3)
console.log(myCreatedDateOne.toLocaleString());

// year-mm-date
let myCreatedDateTwo = new Date("2023-01-16")
console.log(myCreatedDateTwo.toLocaleString());

// mm-dd-year
let myCreatedDateThree = new Date("01-16-2023")
console.log(myCreatedDateThree.toLocaleString());

// ++++++++++++++++++++++++++
// TimeStamp(In mili)

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDateThree.getTime());

// Converting in seconds

console.log(Math.floor(Date.now()/1000));

// 
let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth())

console.log(`Todays date is ${newDate.getDay()} and the month is ${newDate.getMonth()}`);

// Customization of time and date

let x = newDate.toLocaleString('default',{
    weekday: "long"
})

console.log(x);