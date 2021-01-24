const readlineSync = require(`readline-sync`);


console.log("Hello! Welcome to the quiz")


// Question 1
console.log()
console.log("1st Question: What gets you the most excited?")
console.log("---------------------------------------------")

console.log("[1] Experimenting, discovering, and learning")
console.log("[2] Helping others")
console.log("[3] Music, movies, games, and making others laugh")
console.log("[4] Taking risks")

let answer1 = readlineSync.question("Enter your choice: ");

// Question 2
console.log()
console.log("2nd Question: What is your ideal work environment?")
console.log("--------------------------------------------------")

console.log("[1] Inside a high tech lab with lots of fancy equipment")
console.log("[2] Somewhere I feel appreciated for my work")
console.log("[3] Surrounded by cool gadgets and toys")
console.log("[4] Inside a cozy room or garage at home")

let answer2 = readlineSync.question("Enter your choice: ");

// Question 3
console.log()
console.log("3rd Question: Who are your role models?")
console.log("--------------------------------------------------")

console.log("[1] People who make great discoveries")
console.log("[2] People who make sacrifices to help others")
console.log("[3] Creative, artistic, and expressive people")
console.log("[4] People who build innovative products")

let answer3 = readlineSync.question("Enter your choice: ");

// Question 4
console.log()
console.log("4th Question: What do you do when you encounter a difficult problem?")
console.log("--------------------------------------------------")

console.log("[1] Try to find the solution yourself (online, in a book, etc.)")
console.log("[2] Ask someone for help")
console.log("[3] Take a break, because it helps you be more creative")
console.log("[4] Jump in and try different solutions until one works")

let answer4 = readlineSync.question("Enter your choice: ");

// Question 5
console.log()
console.log("5th Question: ?")
console.log("--------------------------------------------------")

console.log("[1] ")
console.log("[2] ")
console.log("[3] ")
console.log("[4] ")

let answer5 = readlineSync.question("Enter your choice: ");

// Compute the score for each answer
var c1score = 0;
var c2score = 0;
var c3score = 0;
var c4score = 0;

function addScore(answer) {
  if (answer == "1") {
    c1score++;
  }
  if (answer == "2") {
    c2score++;
  }
  if (answer == "3") {
    c3score++;
  }
  if (answer == "4") {
    c4score++;
  }
  else {
    readlineSync.prompt('incorrect answer please try again');
  }
  readlineSync.prompt();
}

addScore(answer1)
addScore(answer2)
addScore(answer3)
addScore(answer4)
addScore(answer5)

console.log("[DEBUG] score1 = " + c1score)
console.log("[DEBUG] score2 = " + c2score)
console.log("[DEBUG] score3 = " + c3score)
console.log("[DEBUG] score4 = " + c4score)

// Find the dominant type
var maxscore = Math.max(c1score, c2score, c3score, c4score);
console.log("[DEBUG] maxscore = " + maxscore)
if (c1score == maxscore) {
  printResult('1')
}
if (c2score == maxscore) {
  printResult('2')
}
if (c3score == maxscore) {
  printResult('3')
}
if (c4score == maxscore) {
  printResult('4')
}

// Print the result once we know the dominant type
function printResult(type) {
  console.log()
  console.log("Result")
  console.log("-------")
  if (type == '1') {
    console.log("You are a computer researcher!")
  }
  if (type == '2') {
    console.log("You are an altruistic coder!")
  }
  if (type == '3') {
    console.log("You are a developer!")
  }
  if (type == '4') {
    console.log("You are the future CEO of a new startup!")
  }
}
