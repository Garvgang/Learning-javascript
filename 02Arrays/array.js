const marvel_heroes=['Ironman',"Wanda","Doctor Strange"]
const dc_heores=["Superman",'Justice league',"wonder woman "]
// we don't use the below method as we have a better one
// const all_heores=marvel_heroes.concat(dc_heores)
// console.log(all_heores)

const all_heores=[...dc_heores,...marvel_heroes]
console.log(all_heores)

const multi_array=[1,2,[2,3,4],5,3,[5,5,[6,7,8]],0]
// next method will unwrap the array 
// const new_array=multi_array.flat(Infinity) can unwrapp all the brackets 
const new_array=multi_array.flat(1)
console.log(new_array)

// canvert a string into a array
console.log(Array.from("Garv"))
// will give me a boolean value
console.log(Array.isArray("Garv"))

console.log(Array.from({name:"Garv"})) //Interesting


