class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) //alternative of call and this

        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const teacherOne = new Teacher("Imran", "im@ran.com", "456")
console.log(teacherOne);
const userTwo = new User("Shan")
userTwo.logMe()
// userTwo.addCourse() can't access this

console.log(teacherOne === userTwo);
console.log(teacherOne instanceof User);


