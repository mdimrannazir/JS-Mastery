const coding = ["js", "ruby", "python"]

// For each doesn't return anything
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item //useless
// } )

// console.log(values); //useless; ans: undefined

// Filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

// Below three does the same thing
// const newNums = myNums.filter( (num) =>  num>4 )
// const newNums = myNums.filter( (num) =>  (num>4) )
// const newNums = myNums.filter( (num) =>  {
//     return num>4
//     //when we use curly braces or scope, then we need to return it. In the top examples we didn't need to return them.
// } )

// console.log(newNums);

// How to do it with foreach instead of 'filter'

// const newNumx = []

// myNums.forEach( (item) => {
//     if(item>4){
//         newNumx.push(item)
//     }
// } )

// console.log(newNumx);

// 

const books = [
    {
        title: 'Book One', 
        genre: 'Fiction', 
        publish: 1981, 
        edition: 2004 
    },
    {
        title: 'Book Two', 
        genre: 'Mystery', 
        publish: 1983, 
        edition: 2006 
    },
    {
        title: 'Book Three', 
        genre: 'Science Fiction', 
        publish: 1985, 
        edition: 2008 
    },
    {
        title: 'Book Four', 
        genre: 'Mystery', 
        publish: 1988, 
        edition: 2010 
    },
];

// books.forEach( (key) => {
//     console.log(key);
// } )

let userBooks = books.filter( (bk) => bk.genre==='Mystery' )
// both below is same,2nd one having a scope
// userBooks = books.filter( (bk) => bk.edition>2005 )
userBooks = books.filter( (bk) => {
    return bk.edition>2005
} )

userBooks = books.filter( (bk) => bk.edition>2005 && bk.genre==='Mystery' )

console.log(userBooks);