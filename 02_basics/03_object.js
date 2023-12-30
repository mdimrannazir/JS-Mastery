// Singleton = when make using constructor or sigle instance

// Object.create

// Objects Literal = Multiple instance

const mySym = Symbol("key1") //define symbol to use in the object.

const JsUser = {
    name : "Imran",
    "fullName" : "Imran Nazir",
    [mySym] : "mykey1", //now it will act as symbol, it's actual syntax
    email : "abc@abc.com",
    age : 23,
    isLoggedIn : false,
    lastLoggedIn: ["Monday", "Saturday"]
}

console.log(JsUser)

console.log(JsUser.name)

console.log(JsUser.fullName) //In previous version it shows error but now we can access it with this also

console.log(JsUser["fullName"]) // In previous version, we used this to solve that error

console.log("Can't acces symbol like this: ",JsUser.mySym) 

console.log(JsUser[mySym])

console.log(typeof (JsUser[mySym]));

console.log(JsUser.email)

console.log(JsUser.age)

console.log(JsUser.isLoggedIn) 

console.log(JsUser.lastLoggedIn) 

console.log(typeof JsUser)

JsUser.email = "changed@imran.com"

console.log(JsUser.email)

// Object.freeze(JsUser) //can't change anything now

JsUser.email = "nazir@nazir.com" //not changing bcz of freeze

// Functions in Objects

//Important: In a function if I write return it will stop there. Wont execute next lines

JsUser.greeting = function(username){
    if (!username) {
        console.log("Please give username");
        return
    }
    console.log(`${username} just logged in`);
    
}

console.log(typeof JsUser.greeting);

JsUser.greeting()
JsUser.greeting("Imran")

// We use these to access objects properties

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name} your age is: ${this.age}`);
}

JsUser.greetingTwo()