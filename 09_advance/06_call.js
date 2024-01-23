function setUserName(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    setUserName.call(this, username) //adding 'call' and 'this', both is important to for the context. Careful I don't write 'this dot username'. "this" current execution unit pass to the other function
    
    this.email = email
    this.password = password
}

const userOne = new createUser("Imran", "abcaATabc.com", 123)
console.log(userOne);