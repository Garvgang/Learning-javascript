const score=400
console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(balance.toString())

console.log(balance.toString().length)
console.log(balance.toFixed(2))

// question is asked on this is :-
const otherNum=123.5682
console.log(otherNum.toPrecision(1))
console.log(otherNum.toPrecision(2))
console.log(otherNum.toPrecision(3))
// how to make it in Indian currency 
const hundred=1000000
console.log('Rs: '+hundred.toLocaleString('en-IN'))

// random values in a range of numbers 
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)