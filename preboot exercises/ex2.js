
const input = require(`readline-sync`);

 let a = parseFloat( input.question("Enter first number: "));
 let b = parseFloat( input.question("Enter second number: "));
 makes10(a, b);

 function makes10(a, b) {
     if (a + b == 10) {
         console.log("makes 10");
     } else {
         console.log("nope");
     }
 }


