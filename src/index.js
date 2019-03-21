module.exports = function getZerosCount(number, base) {

  function callPrime(a, b) {
    var result = 0;
    while (a > 0) {
      a = Math.floor(a / b);
      result += a;
    }
  return result;
  }

  var primeNumbers =[];
  var p = 0;

  for (var i = 2; i <= Math.sqrt(base); i++) {
    if (base % i != 0) continue;
    while (base % i == 0) {
      p++;
      base = base / i;
    }

    var current = Math.floor(callPrime(number, i) / p);
    primeNumbers.push(current);
  }
  
  if (base > 1) primeNumbers.push(callPrime(number, base));

  return Math.min( ...primeNumbers);

}


