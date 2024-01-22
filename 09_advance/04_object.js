function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); //function is also a object

// this

function createUser(username, score){
    this.username = username
    this.score = score

}

createUser.prototype.incrementMe = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Score is: ${this.score}`);
}

const imran = new createUser("imran", 25)
const shan = new createUser("shan", 250)

imran.incrementMe()
imran.printMe()