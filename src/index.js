module.exports = function getZerosCount(number, base) {
  var arr = [];
  var el = 0;

  do {
    el = number % base;
    arr.push(el);
    number = Math.floor(number / base)
  } while (number != 0);

  var newNumber = arr.reverse().join('');
  var zeros = newNumber.match(/[05]/g);

  return zeros.length;
}