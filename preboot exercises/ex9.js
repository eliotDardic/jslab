const readlineSync = require(`readline-sync`);

let number = readlineSync.question("Enter a number ");

console.log ('prime numbers smaller than'+ number)

showPrimes (number )  

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}
