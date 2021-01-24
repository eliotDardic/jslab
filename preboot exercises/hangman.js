const readlineSync = require(`readline-sync`);

function getRandomWord() {
  // https://www.kirupa.com/html5/picking_random_item_from_array.htm
  let words = ["modern", "family", "theory", "throne", "apartment", "family"]
  let randomElement = words[Math.floor(Math.random() * words.length)]
  return randomElement
}

let secretWord = getRandomWord()
let wordLength = secretWord.length
var hiddenWord = '*'.repeat(wordLength)

let trials = 10
while (trials > 0 && hiddenWord.includes('*'))
{
  console.log("The word is " + hiddenWord);
  console.log("You have " + trials + " remaining trials")

  // Read a letter and change it to lowercase
  let letter = readlineSync.question("Guess a letter: ").toLowerCase()
  let regex = /^[A-Za-z]+$/
  if (!regex.test(letter)) {
    console.log("Invalid input!")
    continue
  }

  let matching = false
  var i;
  for (i=0; i < wordLength; i++) {
    if (secretWord.charAt(i) == letter) {
      matching = true
      hiddenWord = hiddenWord.substring(0, i) + letter + hiddenWord.substring(i + 1);
    }
  }

  if (matching == false) {
    trials--
  }
}

if (hiddenWord.includes('*')) {
  console.log("Boo you loose! The word was: " + secretWord);
} else {
  console.log("Cheers you found the word!");
}
