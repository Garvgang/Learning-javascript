let myDate=new Date();
// Notice the 0 in newDate variable as months start with that 
let newDate=new Date(2023,0,3);
// indian date format
let nmyCreateDate=new Date("01-04-2023");

console.log(myDate.toLocaleString())

console.log(newDate.toLocaleString())
// indian date format
console.log(nmyCreateDate.toLocaleString())
//  Date.now() will give current time in milliseconds
let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(nmyCreateDate.getTime())
console.log(Math.floor(Date.now()/1000))

// now lets talk about one of the mmost imp functions 
let hiDate=new Date()
bday=hiDate.toLocaleDateString('default',{
    weekday:"Long",
})