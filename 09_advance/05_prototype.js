let myName = "Imran     "

console.log(myName.length); //it returns 10 bcz of spaces
console.log(myName.trim().length); //this also works but we want more efficient
// console.log(myName.trueLength());




let myHeroes = ["thor", "hulk"]

let heroPower = {
    thor: 'hammer',
    hulk: 'bodyBuilder',

    getHulkPower: function(){
        console.log(`Hulk power is: ${this.hulk}`);
    }
}

// Object prototype: own prototype

Object.prototype.imran = function () { //object power is accessible to array or functin or string also.
    console.log('Added a own prototype');
}

heroPower.imran()
myHeroes.imran()

// Array prototype: own prototype

Array.prototype.heyHeroes = function(){
    console.log('Array own prototype, hey heroes.');
}

myHeroes.heyHeroes() //myHeroes was an array that's why it worked
// heroPower.heyHeroes() this won't work bcz this is a object, we gave power to array

// Important: String prototype: own prototype for removing space from string

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
}

const anotherName = "Imran     ";

anotherName.trueLength()
"   shan   ".trueLength()

// Inheritance

const User = {
    name: "shan",
    email: "abc@abc.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false 
}

const TASupport = {
    makeAssignment: 'JS',
    fullTime: true,
    __proto__: TeachingSupport    
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


console.log(TASupport.isAvailable);
console.log(TASupport.makeVideo);
console.log(Teacher.name);