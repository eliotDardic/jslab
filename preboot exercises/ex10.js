const input = require(`readline-sync`);
let str = input.question("Enter  a sentence: ");

let s = '';
let len = str.length;
//let copy=str;
for (let i = 0; i < len; i++) {
    if (str.charAt(i) == ' ') {
     
        s += str.substring(0, i) + '*';
       // console.log(s);
        console.log(str);
        str = str.substring(i + 1);
        len = str.length;
        i=0;
    }
}
s += str;
console.log(s);