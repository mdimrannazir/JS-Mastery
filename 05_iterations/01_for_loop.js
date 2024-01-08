// For loop

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// Times table

// for (let i = 1; i <=10 ; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 1; j <=10 ; j++) {
//         // console.log(`Inner loop value ${j} and outer loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

// Print array using loop

// let myArray = ["batman", "spider", "flash"]

// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is: ${index}`);
// }

// Continue means, condition skips one time

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is: ${index}`);
}
