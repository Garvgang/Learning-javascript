let myName="User    ";
let myChannel="Goimg!    ";
// console.log(myName.trueLength);
// So the challenge is we want to make an method 
let myheros = ["Thor","Spiderman"];
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.garv=function(){
    console.log(`Garv is prsent in all objects`);
    // Added to everyone
}
Array.prototype.heygarv=function(){
    console.log(`Garv is Saying hiii!!`);
    // Added to everyone
}
// if method is made for object as we know in js eveything can be wrapped around objects so everyone can use it 
// heroPower.garv();
// myheros.garv();
// heroPower.heygarv(); //This gives error because when method heygarv was made it was for Arrays only not for any other type(like object)
// console.log(typeof heroPower);

// Inheritance
const Teacher={
    makeVideo:true
} 
const TeachingSupprt={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupprt
}
// Teacher.__proto__=User
// Mordern Syntax
Object.setPrototypeOf(TeachingSupprt,Teacher);

let anotherUser="Chai Aur Code    ";

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`); 
    console.log(`True length is : ${this.trim().length}`);    
}
anotherUser.trueLength();