// const coding=["js","ruby","java","python","cpp"]
// foreach loop does not return any value
// const values=coding.forEach((item)=>{
//     return item
// })
// console.log(values)

// That why filter funcn cones in 
// const mynums=[11,2,3,4,74,43,32,97,353]

// const even_num=mynums.filter((item)=>{
//     return item%2===0
// })
// const odd_num=mynums.filter((item)=>(item%2===1))

// console.log(odd_num)
// console.log(even_num)

const newNumers=[1,2,3,4,5,6,7,8,9,10]
// function chaining 
const newNums=newNumers
                .map((num)=>num*10) //num=10,20,30 ...
                .map((num)=>num+1) //num=11,21,31,41 ...
                .filter((num)=> num>50)

console.log(newNums)