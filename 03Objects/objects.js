// Singleton
// Object create
// Object literals 
const sym=Symbol("Key1")

// console.log(sym.description) //if you print(sym) -> Symbol(Key1)

const JsUser={
    name:"Garv",
    "Full name":"Garv Gang",
    age:123,
    [sym]:"myKey1",
    email:"garvgang2013@gmail.com",
    isLoggedin:true,
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// // console.log(JsUser."Full name ") this will not work as full name is a string thats why we don't access with . operator 
// console.log(JsUser["Full name"]) 
// // console.log(typeof JsUser["mysmb"])  its giving string what we need is a symbol
// console.log(JsUser[sym])
// console.log(typeof JsUser[sym])

// JsUser.email="garvgang2110@gmail.com"
// Object.freeze(JsUser)

// JsUser.email="garvgang@chatgpt.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello world");
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js user,${this.name}`);
}
// console.log(JsUser.greeting) // -> gives [Function (anonymous)]
console.log(JsUser.greeting()) 
console.log(JsUser.greetingTwo()) 


