const name = "Imran"
const repoCount = 20

// Bad way
console.log(name + repoCount + "Value");

// Good way<StringInterpulation>
console.log(`Hello, my name's: ${name} and git repo count is: ${repoCount}`);

// JS Objects
// const name = new type(arguments);
const gameName = new String('ImranGaming')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); 
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(4)); 
console.log(gameName.indexOf('n')); 

const nameOne = new String('Imran-Nazir')

// Removes spaces before and after
console.log(nameOne.trim());

console.log(nameOne.substring(0,5));

console.log(nameOne.slice(-10,5));

// Split
console.log(nameOne.split('-'));

console.log(`Splitted:  ${nameOne.split('-')}`);

// Replace
console.log(nameOne.replace('-', ' '));

const url = "https://abc.com/imran%20nazir"

console.log(url.replace('%20', '-'));

console.log(url.includes('imran')); //True: Imran is in the url

console.log(url.includes('shan')); //False: shan is not in the url

