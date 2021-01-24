sevenBoom = function() {
    return xBoom( 7);
  }
   
  xBoom = function(boom) {
    return dividedBy(boom) || containsDigit(boom);
  }
   
  dividedBy = function(x) {
    return n % x == 0;
  }
   
  containsDigit = function(x) {
    return n.toString().indexOf(x.toString()) >= 0;
  }
  console.log(xBoom( 7));