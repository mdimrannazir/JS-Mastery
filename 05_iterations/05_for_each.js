const coding = ["js", "ruby", "python"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //don't call function, just give reference

// const printMee = (anything) => {
//     console.log(anything);
// }

// coding.forEach(printMee)

// What argument has for each

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

// Objects in a array [{}, {}, {}]

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Python",
        languageFileName: "PY"
    },
    {
        languageName: "Java",
        languageFileName: "J"
    }
]

myCoding.forEach( (a) => {
    // console.log(a); //prints full array
    console.log(a.languageFileName);
} )

// myCoding.forEach( function (b) {
//     console.log(b);
// } )

