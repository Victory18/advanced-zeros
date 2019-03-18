module.exports = function getZerosCount(number, base) {
  var arr = [];
  var el = 0;

  do {
    el = number % base;
    arr.push(el);
    number = Math.floor(number / base)
  } while (number != 0);

  var newNumber = +arr.reverse().join('');
  var factorialArr = [];

  for (var i = 1; i <= newNumber; i++) {
    factorialArr.push(i);
  }

  var count = factorialArr.join('').match(/[05]/g);

return count.length;
}