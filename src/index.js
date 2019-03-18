module.exports = function getZerosCount(number, base) {
  var arr = [];
  var el = 0;

  while (number != 0) {
    el = number % base;
    arr.push(el);
    number = Math.floor(number / base);
  } 

  var newNumber = +arr.reverse().join('');
  var count = 0;
 
  for (var i = 5; n / i > 0; i += 5) {
    if (newNumber >= i) count ++;
    else break;
  }
 
return count;
}