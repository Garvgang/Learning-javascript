const coding=["js","ruby","java","python","cpp"]

// foreach is a callback function so it does not need to 
// have a name ,but it can have a name 
// coding.forEach(function greet(val){
//     console.log(val); 
// });
// foreach using arrow funcn
// coding.forEach( (item) => {
//     console.log(item);
// });

// using a function decalred outside
// function printMe(item){
//     console.log(item)
// }
// just pass the funcn refrence/name (i.e printMe) 
// dont't execute it their like printMe()
// coding.forEach(printMe)

// PARAMETERS in the foreach funcn
// their is a format in which we take input in this as item 
// coding.forEach((item,coding,index)=>{
//     console.log(`${item} at  index ${index} in the array :-${coding}`)
// })
// above gives different answers (instead of index it gives whole array and vice-versa)
// correct parameter line up for this is :
// coding.forEach((item,index,coding)=>{
//     console.log(`${item} at  index ${index} in the array :-${coding}`)
// })

const mycoding=[
    {
        languageName:"Javascript",
        languageFileName:'js'
    },
    {
        languageName:"Java",
        languageFileName:'java'
    },
    {
        languageName:"Python",
        languageFileName:'py'
    },
    {
        languageName:"Ruby",
        languageFileName:'rb'
    }
]

mycoding.forEach((element) => {
    console.log(element.languageFileName+" is used for "+element.languageName)
});
