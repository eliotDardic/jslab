const input = require(`readline-sync`);
let num = parseInt(input.question("how many : "));
let kosher = input.question("should it be kosher? ");
if (kosher == 'y') {
    let mehadrin = input.question("should it be kashrut lemehadrin?");
    if (mehadrin == 'y') {
        let mehadrin = input.keyInSelect(["pizza mehadrin", "hamburger mehadrin", "sushi mehadrin", "vegan mehadrin"]);
    }
    else if (mehadrin == 'n') {
        let kosher = input.keyInSelect(["pizza", "hamburger", "sushi", "vegan"]);
    }
}
else {
    let notKosher = input.keyInSelect(["chizeburger", "sushi","pork", "meat&milk"]);
}
   
    
   
 
