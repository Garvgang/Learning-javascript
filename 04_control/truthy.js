const usermail='garvgang@ai';

if(usermail){
    console.log('got an email');
}
else{
    console.log("Don't have an email");
}
// falsy values
// false,0,-0,"",Bigint mein ek value hoti hea =>0n,null,undefined,NaN
// Truthy values
// "0",'false',[],{},function(){}
let userarr=[];
if(userarr.length==0){
    console.log("Array is empty");
}

const emptyobj={};
// Object.keys(emptyobj) => this gives the array 
if(Object.keys(emptyobj).length===0){
    console.log("Object is empty");
}

// Nullish coalescing Operator (??):Null undefined
let val1;
val1=5??10;
val1=null??10;
val1=undefined??19;

console.log(val1);

