// console.log(this);
// giving output '{}'



// function chai(){
//     console.log(this); //we get many things
//     // this.username="Garv";
//     console.log(this.username);
// }
// chai();

// function chai(){
//     let username='Garv';
//     console.log(this.username);
// }
// chai() //getting undefined

// ARROW FUNCTION 
// const chai= () =>{
//     let username='Garv';
//     console.log(this.username)
// }
// chai()
// difference between arrow and simple function in js is :-
// const obj = {
//   name: "Garv",
//   normal: function () {
//     console.log(this.name); // "Garv" ✅
//   },
//   arrow: () => {
//     console.log(this.name); // undefined ❌ (takes from outer scope, not obj)
//   }
// }
// obj.normal();
// obj.arrow();

// arrow function :Implict return
// const addTwo =(num1,num2) => (num2+num1);
// console.log(addTwo(3,4)) 
// // explicit return
// const adding =(num1) =>{ 
//     return 54+num1;
// }
// console.log(adding(643)) 

// returning object using arrow function
const addTwo= (num1,num2)=> ({username:"Garv Gang"})

console.log(addTwo(34,212))


const myArray=[2,3,4,6,8,9,3,2,4]
myArray.forEach(function(){})
// works same with arrow function
myArray.forEach(() => {})
