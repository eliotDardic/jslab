sevenBoom = function(n) {
    return xBoom(n, 7);
  }
   
  xBoom = function(n, boom) {
    return dividedBy(n, boom) || containsDigit(n, boom);
  }
   
  dividedBy = function(n, x) {
    return n % x == 0;
  }
   
  containsDigit = function(n, x) {
    return n.toString().indexOf(x.toString()) >= 0;
  }
  console.log(xBoom(n, 7));