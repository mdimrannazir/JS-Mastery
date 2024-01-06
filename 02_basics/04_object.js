// Both ways we can write objects. both are same, but 1st one is singleton. 2nd one is non-singleton

// const tinderUser = new Object() //singleton
const tinderUser = {}

// console.log(tinderUser); //non-singleton

// Another Object

const  ytUser = {}

ytUser.id = "123abc"
ytUser.name = "Sammy"
ytUser.isLoggedIn = false

// console.log(ytUser);

// Nested Object

const regularUser = {
    email : "xyz@xyz.com",
    fullName: {
        userFullName: {
            firstName : "Imran",
            lastName: "Nazir"
        }
    }

}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);

// Objects Combine

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "a", 4: "b"}



// const obj3 = {obj1, obj2}

// const obj3 = {...obj1, ...obj2}

// console.log(obj3);


// When data coming from database(Arry of objects comes)

const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]

// console.log(user[0].id);
// console.log(user[0].email);

// Object keys or values print & note it's data type will be array

// console.log(ytUser);
// console.log(Object.keys(ytUser));
// console.log(Object.values(ytUser));
// console.log(Object.entries(ytUser)); //less used

// To reduce error, we first check if the key is available or not

// console.log(ytUser.hasOwnProperty('isLoggedIn'));
// console.log(ytUser.hasOwnProperty('isLogged'));


// +++++Object de-structure++++++

const course = {
    courseName: "JS Mastery",
    price: "999",
    courseInstructor: "Imran"
}

console.log(course.courseName);

// Other way to print 

const {courseName} = course //now I don't need to write course.courseName, I can only write courseName to print
console.log(courseName);

const {courseName: cName} = course //created alias of courseName to cName, I can only write cName to print
console.log(cName);

// Below code won't work, everytime without writing: props.__,props.__; we write {___} it's destructing used in react.

// const navBar = (props.company) => {

// }

// navBar(company = "imran")

// // Destructering

// const navBar = ({company}) => {

// }

// navBar(company = "imran")


// +++++Basic Json+++++++

// Need to learn api fetch

// This is how json api looks like
// {
//     "name": "Imran",
//     "courseName": "JS Mastery",
//     "price": "free"
// }

// Sometimes api in array format
// [
//     {},
//     {},
//     {}
// ]

// Example

// https://randomuser.me/

// https://jsonformatter.org/

// Beautify in tree format