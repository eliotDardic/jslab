const readlineSync = require(`readline-sync`);

console.log("////////------- WELCOME TO THE WAR --------////////")

// Read user name
let wallet = 50
let name = readlineSync.question("Please enter your name: ");
console.log("Hello " + name + " you currently have " + wallet + " dollars")
console.log()


while (true)
{
  console.log("Place your bet for the next round: 1 to " + wallet);
  let bet = parseInt(readlineSync.question(""));
  // console.log("You bet " + bet)

  if (bet < 0 || bet > wallet) {
    console.log("Invalid answer: " + bet);
    return
  }

  // Game
  function getCard() {
    return Math.floor(Math.random() * 11) + 1;
  }
  let userCard = getCard()
  let computerCard = getCard()
  console.log("Your card is " + userCard + " and my card is " + computerCard)
  let userWon = userCard > computerCard

  if (userWon) {
    wallet = wallet + bet
    console.log("You won, your wallet is " + wallet + " dollars")
  } else {
    wallet = wallet - bet
    if (wallet <= 0) {
      console.log("You broke! Bye Bye")
      return
    }
    console.log("You lose, your wallet is " + wallet + " dollars")
  }

  let anotherRound = readlineSync.question("Another round [y|n]? ");
  if (anotherRound != 'y') {
    console.log("Bye Bye")
    return
  }
}
