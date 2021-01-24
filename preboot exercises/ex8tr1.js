function boom() {
    for (let i = 1; i <= 100; i++) {
        i % 7 == 0 ? console.log('Boom') : console.log (i)
    }
}
function separateNumberIntoUnits(boom) {
    if (boom == 0) return [0];
    // n = Math.floor(n); // needed for decimal numbers
    var arr = [];
    var i = 1;
  
    while (boom > 0) {
      arr.unshift((boom % 10) * i);
      n = Math.floor(boom / 10);
      i *= 10
    }
  
    return arr;
  }

boom();

