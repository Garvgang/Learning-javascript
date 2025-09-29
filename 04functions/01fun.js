// function myname(){
//     console.log('hello world')
// }
// myname()

function add(num1,num2){
    return num1+num2;
}
// console.log(add(3,2))
// console.log(typeof add(3,"2"))
// console.log(add(3,null))

// Important passing multiple arguments as one
// ***Rest operator and Spread Operator***

function calc(...num1){
    return num1
}
// use case of rest 
console.log(calc(200,3000,10,203,032)) //gives an array of these values

// passing objects in a funstion
const obj={
    id:291,
    name:'cereal'
}
function passobj(anyobject){
    console.log(`Id is ${anyobject.id} and name is ${anyobject.name}`);
}
passobj(obj)

// how different declaration is used
console.log(addTwo(23,1));
function addTwo(num1,num2){
    return num1+num2;
}
// we got the answer even before its decalartion
// now see a different one
// if we use ity before decalaration we get an error
// console.log(sum(2,13))
// const sum=function(num1,num2){
//     return num1+num2;
// }
