var readlineSync = require('readline-sync'),
  answer1 = ['Experimenting, discovering, and learning', 'Helping others', 'Music, movies, games, and making others laugh', 'Taking risks', ],
  index = readlineSync.keyInSelect(answer1, 'what makes you most exited?');
console.log( answer1[index]);
//console.log(answer1)
