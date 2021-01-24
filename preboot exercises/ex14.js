const readlineSync = require(`readline-sync`);

let length = parseInt(readlineSync.question("Give me an interger number "));

// Return a random number between 1 and 50
function getNumber() {
  return Math.floor(Math.random() * 49) + 1;
}

var i;
var array = []
for (i = 0; i < length; i++) {
  let number = getNumber()
  array.push(number)
}

console.log("Array: " + array);
console.log("Min is " + Math.min(...array));
console.log("Max is " + Math.max(...array));
