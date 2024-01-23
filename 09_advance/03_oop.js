// Object Literal

const user = {
    username: "imran",
    loggInCount: 12,
    isLoggedIn: true,
    getUserDetails: function (){
        console.log("Got user details from database");
        console.log(this.username);
        // console.log(this); //whole object will be printed
    }
}

// console.log(user);
// user.getUserDetails()

// Constructor function: using one object we can create multiple instance

// const promiseOne = new Promise() 
// const date = new Data()

const userDetails = function(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = userDetails("Imran", 12, true)
// const userTwo = userDetails("Shan", 11, false)
// console.log(userOne); //it will show userTwo value instead of userOne, so we will use new keyword

const userOne = new userDetails("Imran", 12, true)
const userTwo = new userDetails("Afsu", 11, false)
console.log(userOne.constructor);
console.log(userTwo);
console.log(userTwo.greeting());