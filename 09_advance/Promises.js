// const promiseOne=new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls,crptography,network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     },1000)//execute after 1sec
// })
// // Now we have to consume the promise
// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task two");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolve");
// })
// // In below we are passing parameters in the then using resolve 
// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai",email:"chai@example.com"})
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user);
// })
// const promisefour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"chai",password:"123"})
//         }
//         else{
//             reject("ERROR:Something went wrong")
//         }
//     },1000)
// })
// promisefour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>console.log("The promise is either resolved or completed"))

// const promisefive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"Javascript",password:"123"})
//         }
//         else{
//             reject("ERROR :JS WENT WRONG")
//         }
//     },1000);

// })
// // problem of this approach is that it cannot directly resolve this 
// async function consumePromiseFive(){
//     try{
//         const response=await promisefive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=response.json();
//         console.log(data); 
//     } catch (error) {
//         console.log("E: ",error);
//     }   
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))
