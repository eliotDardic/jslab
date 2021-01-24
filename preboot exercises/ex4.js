const input = require(`readline-sync`);
let num = parseInt(input.question("how many : "));
let kosher = input.question("should it be kosher? (y/n)");
if (kosher == 'y') {
    let mehadrin = input.question("should it be kashrut lemehadrin?(y/n)");
    if (mehadrin == 'y') {
        let mehadrin = input.keyInSelect(["pizza mehadrin", "hamburger mehadrin", "sushi mehadrin", "vegan mehadrin"]);
        console.log(mehadrin);
    }
    

    else if (mehadrin == 'n') {
        let kosher = input.keyInSelect(["pizza", "hamburger", "sushi", "vegan"]);
        console.log (kosher);
    }
    
}
else {
    let notKosher = input.keyInSelect(["chizeburger", "sushi","pork", "meat&milk"]);
    console.log (notKosher);
}
  
    
   
 
