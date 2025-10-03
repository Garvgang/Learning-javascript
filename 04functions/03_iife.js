// Immediately Invoked function expressions (IIFE)
// in interview do not just se ki jo function immediately execute hojae
// Global scope ke pollution se problem hoti hae kai baar isiliye iska istemaal karte hea 
// Why use IIFE?
// 1.Avoid Global Scope Pollution
// (i)Variables inside IIFE are private (not accessible outside).
// (ii)This prevents name conflicts.
// 2.Run code immediately (one-time setup)
// (i)Useful for connecting to DB, initializing data, etc.
// two ways to write it :-

(function chai(){
    // named IIfe 
    console.log('DB connected')
})(); // put ";" after iife functions as they do not know where to stop ,so to end it we need this ';'

(() =>{ 
    console.log("Hello world");
} )();
// parameterized iife
((name)=>{
    console.log(`My name is ${name}`);
}) ('Garv Gang');
