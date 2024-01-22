// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve();//it will always execute after async task completes
//         console.log("Async task 1");
       
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise resolved");
// })

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 3');
        resolve({username:'imran', email:'abc@imr.com'});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:'Nazir',email: 'nazir@acb.com'});  
        } else{
            reject('Error, something wrong');
        }
        console.log('Async task 4');
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log('The promise is either resolved or rejected');
})

// Diffrent Syntex async wait: doesn't handle errors, so we use try catch

const promiseFive = new Promise((resolve,reject)=> {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:'JS',password: '123'});  
        } else{
            reject('Error, JS went wrong');
        }
        console.log('Async task 5');
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// fetch with async and await

async function getAlluser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json() //await is important bcz it takes time to convert it into json, without it, it won't work
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}

getAlluser()

// Samething again

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error))

