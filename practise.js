let hiDate = new Date();
let bday = hiDate.toLocaleDateString('default', {
  weekday: "long"
});

console.log(bday); // e.g., "Sunday"
