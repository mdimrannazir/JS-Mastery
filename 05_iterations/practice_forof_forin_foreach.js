// For of
const arr = ["im", "ra", "af"]
for (const item of arr) {
    console.log(item);
}

// For in

objOne = {
    name: "Imran",
    age: 23
}

for (const key in objOne) {
    console.log(key);
    console.log(objOne[key]);
}

// For each
const myObj = [
    {
        name: "Imran",
        age: 23
    },
    {
        name: "Afsana",
        age: 24
    }
]

myObj.forEach( function (value) {
    console.log(value);
})

const arrTwo = ["im", "ra", "af"]

arrTwo.forEach( (item) => {
    console.log(item);
} )
