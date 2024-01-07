// Normal Function

function food(){
    console.log(`DB Connected of Normal Function`);
}
food();

// Immediately Invoked Function Expressions (IIFE)


// Global scope pollution remove(We know, we can use parents functions elements in child function, sometimes it makes the pollution, so we use IIFE)

(function love(){
    console.log(`DB Connected`);
})();

// ()()
// first parenthesis is 'function definition'
// second parenthesis is 'function call'

// Interview: For global scope variables declerations, we face pollutions, to remove that issue we use IIFE. Don't just say: which function immidieately executes

// Same thing
// Note: use semicolon to end the IIFE orelse error show up bcz it doesn't know where to stop the execution

( function test() {
    //This is named IIFE
    console.log(`DB two connected`);
} )();

(() => {
    //This is unnamed IIFE
    console.log(`DB three connected`);
})();

// Let's pass argument and declare parameters. 
// Note:It's the simple thing, what things we can do on funcion, all can be done with this also.

( (name) => {
    //This is unnamed IIFE
    console.log(`${name} is my nickname`)
} )("Imran");

( function myLastName(name) {
    //This is named IIFE
    console.log(`${name} is my last name`)
} )("Nazir");

// Interview: If we need to write multiple IIFE in same page then must write the semicolon the end the execution of any IIFE.

