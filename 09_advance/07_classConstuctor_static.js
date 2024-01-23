// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return  `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new user("Imran", "abc@abc.com", "123")
// console.log(userOne);
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());

// Behing the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
    return this
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new User("Nazir", "naz@ir.com", "321")

console.log(userTwo);
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());