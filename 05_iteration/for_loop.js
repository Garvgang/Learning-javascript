// // printing tables
// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(i+"*"+j+"="+i*j);
//     }
// }

// Maps
const map=new Map();
// Unique values and order is when inserted
map.set('IN','India');
map.set('USA','America');
map.set('Fr','France');

console.log(map);
for(const [key,value] of map){
    console.log(key+'-'+value)
}
// When does the same thing with object it does not work
// const myObj={
//     'num1':'garvb',
//     'num2':'gang'
// }
// for(const [key,value] of myObj){
//     console.log(key+'-'+value)
// }
