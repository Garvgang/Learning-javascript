// this means jisne ne bhi bulaya hea uske pass jao
function CreateUser(username,score){
    this.username=username;
    this.score=score;
}

CreateUser.prototype.increment=function(){
    this.score++;
    // if we don't wroite this. then it will have no way of knowing which object called it or for which obj to increament 
}
CreateUser.prototype.printme = function(){
    console.log(`score is ${this.score}`)
}
// if yoy don't use new keyword it will give an error : TypeError: Cannot read properties of undefined
const chai=new CreateUser("chai",25);
const tea=new CreateUser("tea",200);
chai.printme();
chai.increment();
chai.printme();
tea.increment();
tea.printme();
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/