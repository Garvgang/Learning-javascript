
function setUserName(username){
    // complex DB call
    this.username=username;
}
function createUser(username,email,password){
    setUserName.call(this,username);
    this.email=email;
    this.password=password;
}
const chai=new createUser("garv",'chai@garv',124452);
console.log(chai);
// console.log(chai.username);
