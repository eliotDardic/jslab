
const input = require(`readline-sync`);

let number = parseFloat(input.question("Enter  number: "));

console.log (factorial(number));

factorial(number);

function factorial(number) {

    let factorial = 1;

    if (number > 1) {
        for (let i = 2; i <= number; i = i + 1) {
            factorial = factorial * i

        }
    }
    return factorial;
}

