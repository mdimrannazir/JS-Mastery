function sayMyName(){
    console.log("i");
    console.log("m");
    console.log("r");
    console.log("a");
    console.log("n");
}

// sayMyName()

// we give parameters in Function Defination: num1,num2 are parameters 
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

// We give argument when funcion calling: 5,2 are arguments
// addTwoNumbers(5,2)
// addTwoNumbers(5,"2")
// addTwoNumbers(5,"a")
// addTwoNumbers(5,"a")

// Another important thing, must return if we want to store something in a variable

// function addTwoNum(n1,n2){
//     console.log(n1 + n2);
// }

// const result = addTwoNum(2,2)

// console.log("Result: ", result);

function addTwoNum(n1,n2){
    // let res = n1 + n2
    // return res
    return n1 + n2
    console.log("imran"); //never excute anything after return
}

// const result = addTwoNum(2,2)

// console.log("Result: ", result);

// More ways to define parameters

function loginUserMessage(username = "sam"){
    if (username === undefined) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("panda"));
console.log(loginUserMessage()); //undefined when passed empty, next I set default sam, so when empty returns sam