const readlineSync = require(`readline-sync`);

let number = readlineSync.question("Enter a  positive number ");

console.log('factorial of' + number)

factorial(number)

function factorial(number) {

    let factorial = 1;

    if(number>1) {
        for (let i = 2; i <= number; i = i+ 1) {
            factorial = factorial * i
            
        }
    }
    return factorial;
}
