const input = require(`readline-sync`);

 let a = parseFloat( input.question("Enter a number: "));

 largerThan10(a);

 function largerThan10(a) {
     if (a  > 10) {
         console.log("thank you");
     } else {
         console.log("please choose a number larger than 10");
     }
 }


