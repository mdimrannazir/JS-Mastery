class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password}abc` //we encrypted the password here by adding extra string
    }

    set password(value){
        this._password = value
    }

    get email(){
        return `Email showing as: ${this._email.toUpperCase()}`;
    }
    

    set email(value){
        this._email = value
    }

}

const userOne = new User("imr@an.com", "123")
console.log(userOne);
console.log(userOne.email);
console.log(userOne.password);


// Old method: Properteies getter setter

function myUser(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}




const mySelf = new myUser("abc@xyz.com", "jkl")
console.log(mySelf);
console.log(mySelf.email);
console.log(mySelf.password);

const yourSelf = new myUser("imran@xyz.com", "xyz")
console.log(yourSelf.email);


// Same thing using object

const userObj = {
    _email: 'naz@ir.com',
    _password: "mno",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        return this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        return this._password = value
    }
}

const coffee = Object.create(userObj)
console.log(coffee.email);
console.log(coffee.password);


