var readlineSync = require('readline-sync'),
  answer1 = ['Experimenting, discovering, and learning', 'Helping others', 'Music, movies, games, and making others laugh', 'Taking risks', ],
  index1 = readlineSync.keyInSelect(answer1, 'what makes you most exited?');
//console.log( answer1[index1]);
//console.log(answer1)
console.log(index1);