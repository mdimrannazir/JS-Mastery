// Block scope stays insde: {}
// Global scope stays outside: {}
//Interview: Node scope & Browser scope is different

let a = 20

if (true) {
// Can't able to access from block scope
    let a = 10  
    const b = 20
    // var c = 30 //can access this, it's a problem of var
    console.log("Inner Block a: ", a);
}

console.log("Global a: ",a);
// console.log(b);
// console.log(c);

// ++++Nested Scope+++++

function one(){
    const username = "imran"
    
    function two(){
        const website = "youtube"
        console.log(username);//child function can access parent function
    }

    // console.log(website); //parent function can not access child function

    two()
}

// one()


if (true) {
    const username = "imran"
    if (username === "imran") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);// can't access block scope from global scope

// +++++Interesting+++++++++
console.log("-----------");

console.log(addOne(5));
function addOne(num){
    return num + 1
}

//if we call like this it will give error, but addOne function worked bcz that's a normal function
console.log(addTwo(5)); //Hositing Concept
//Expression Function when define function like this
addTwo = function(num){
    return num + 2
}
