class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const userOne = new User("Imran")
console.log(userOne);
userOne.logMe()
// console.log(userOne.createId()); cannot access bcz of static

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "i@phone.com")
console.log(iphone);
iphone.logMe()
// console.log(iphone.createId()); cannot access bcz of static