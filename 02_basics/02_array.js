const marvel_heroes = ["thor","ironman","spiderman"]
 
const dc_heroes = ["superman","flash","batman"]

const bd_heores = ["shaktiman", "aliBaba"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][1]);

// Concat

// let allHeroes = marvel_heroes.concat(dc_heroes)

// console.log(allHeroes)

// +++++++++++++Spread - Best Way++++++++++

// const allNewHeroes = [...marvel_heroes, ...dc_heroes, ...bd_heores]

// console.log(allNewHeroes);

// ++++Solve multiple array using flat++++

// const anotherArray = [1,2,3,[4,5,6],[6,7,[4,5]]]

// console.log(anotherArray);

// const realAnotherArray = anotherArray.flat(Infinity)

// console.log(realAnotherArray);

// Data scraping use case

console.log(Array.isArray("Imran"));

console.log(Array.from("Imran")); //converted in to array

// Interesting
//can not convert so returns empty array. Bcz konta array te convert krbe, key naki value. sheta bujhte pare na
console.log(Array.from({name: "Imran"})); 

// Making array using Array.of

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1))

console.log(Array.of(score1, score2, score3))

/* 
Read more on:
Array.isArray
Array.from
Array.of
*/
