const input = require(`readline-sync`);
let str = input.question("Enter  a sentence: ");

findLongestWord(str);
function findLongestWord(str) {
    var words = str.split(" ")
    var longest = "";
    for (var word of words) {
        if (word.length > longest.length) longest = word;
    }
  console.log (longest);
}