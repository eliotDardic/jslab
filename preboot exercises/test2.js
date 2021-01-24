const readlineSync = require(`readline-sync`);
const input = require(`readline-sync`);



// Question 1
console.log()
console.log("1st Question: What gets you the most excited?")
console.log("---------------------------------------------")

console.log("[1] Experimenting, discovering, and learning")
console.log("[2] Helping others")
console.log("[3] Music, movies, games, and making others laugh")
console.log("[4] Taking risks")

let answer1 = readlineSync.question("Enter your choice: ");

console.log(answer1)