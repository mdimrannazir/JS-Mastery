const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num+10 )
const newNums = myNumbers.map( (num) => {
    return num+10
} )

console.log(newNums);

// Let's try the same with foreach

const NewNumx = []

myNumbers.forEach( (nums) => {
        NewNumx.push(nums + 10)
} )

console.log(NewNumx);

//Multiple maps & filters

// const newNumbers = myNumbers.map( (num) => num*10 ) //single map, just for understanding
const newNumbers = myNumbers
                    .map( (num) => num*10 )//10,20,30
                    .map( (num) =>  num+2 )//10+2,20+2,30+2
                    .filter( (num) => num>40 )//42,52,62,72

console.log(newNumbers);