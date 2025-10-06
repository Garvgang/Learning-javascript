// 👉 The reduce() method reduces an array to a single value
//  (like sum, average, product, or even an object)
// It runs a function on each element of the array and keeps a running result called the accumulator.
const myNums=[1,2,3,4,5]

// const myTotal=myNums.reduce(function (acc,curval) {
//     return acc+curval
// },0)
const myTotal=myNums.reduce((acc,curval)=>(acc+curval),0)

console.log(myTotal)

const ShoppingCart=[
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:'python course',
        price:999
    },
    {
        itemName:'Mobile dev course',
        price:12999
    },
    {
        itemName:'Data science course',
        price:5999
    },
]
const PriceToPay=ShoppingCart.reduce((acc,item)=>(acc+item.price),0)

console.log(PriceToPay);
