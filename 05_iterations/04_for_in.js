// Forof doesn't work for objects
// Note: 'For in' used for objects & 'For of' great for array
// For in

const myObj ={
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObj) {
    console.log(key);
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

// Lets use 'for in' for array

const programming = ["js", "c++", "rb", "swift"]

for (const key in programming) {
    console.log(key);
}

for (const key in programming) {
    console.log(`${key} index is ${programming[key]}`);
}

// Lets use 'for in' for map

const map = new Map()

map.set('BD', "Bangladesh")
map.set('IN', "India")
map.set('FR', "France")
map.set('BD', "Bangladesh") //No printed bcz duplicate

// For in
// doesn't work bcz it's not iterable,prints nothing
for (const key in map) {
    console.log(key);
}