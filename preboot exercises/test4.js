const readlineSync = require(`readline-sync`);
const input = require(`readline-sync`);

let quiz = input.keyInYN("do you want to take a quiz?");
if (quiz== false) {
    console.log("bye bye"); return
}    
console.log(`
             #############################
              Hello! Welcome to the quiz
             #############################` )


// Question 1

  answer1 = ['Experimenting, discovering, and learning', 'Helping others', 'Music, movies, games, and making others laugh', 'Taking risks', ],
  index1 = readlineSync.keyInSelect(answer1, 'what makes you most exited?');

// Question 2

  answer2 = ['Inside a high tech lab with lots of fancy equipment', 'Somewhere I feel appreciated for my work', 'Surrounded by cool gadgets and toys','Inside a cozy room or garage at home', ],
  index2 = readlineSync.keyInSelect(answer2, 'What is your ideal work environment?');

// Question 3

  answer3 = ['Experimenting, discovering, and learning', 'Helping others', 'Music, movies, games, and making others laugh', 'Taking risks', ],
  index3 = readlineSync.keyInSelect(answer3, 'what makes you most exited?');

// Question 4

  answer4 = ['Experimenting, discovering, and learning', 'Helping others', 'Music, movies, games, and making others laugh', 'Taking risks', ],
  index4 = readlineSync.keyInSelect(answer4, 'what makes you most exited?');
// Question 5

  answer5 = ['Experimenting, discovering, and learning', 'Helping others', 'Music, movies, games, and making others laugh', 'Taking risks', ],
  index5 = readlineSync.keyInSelect(answer5, 'what makes you most exited?');
// Compute the score for each answer
var c1score = 0;
var c2score = 0;
var c3score = 0;
var c4score = 0;

function addScore(index) {
  if (index == "0") {
    c1score++;
  }
  if (index == "1") {
    c2score++;
  }
  if (index == "2") {
    c3score++;
  }
  if (index == "3") {
    c4score++;
  }  
}

addScore(index1)
addScore(index2)
addScore(index3)
addScore(index4)
addScore(index5)

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
