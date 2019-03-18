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
 
  for (var i = 5; i < newNumber; i += 5) {
    while (newNumber >= i) {
      count ++;
    }

  }
 
return count;
}