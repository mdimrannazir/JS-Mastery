// Array Reduce

const myNumbers = [1,2,3]

const initialvalue = 0
const myTotal = myNumbers.reduce( function (accumulator, currentvalue) {
    console.log(`Accumulator: ${accumulator} and currentval: ${currentvalue}`)
    return accumulator + currentvalue
}, initialvalue )

console.log(myTotal);

// same as previous

const myTotals = myNumbers.reduce( (accu,curr) => accu+curr, 0 )

console.log(myTotals);

// Shopping Cart

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 1000
    },
    {
        itemName: "PY Course",
        price: 1000
    },
    {
        itemName: "Java Course",
        price: 1000
    },
    {
        itemName: "React Course",
        price: 1000
    },
]

//both are same 
// const priceToPay = shoppingCart.reduce( (accu,curr) => (accu+curr.price),0 )
const priceToPay = shoppingCart.reduce( (accu,item) => (accu+item.price),0 )

console.log(priceToPay);