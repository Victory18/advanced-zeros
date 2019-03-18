module.exports = function getZerosCount(number, base) {
  var arr = [];
  var el = 0;

  do {
    el = number % base;
    arr.push(el);
    number = Math.floor(number / base)
  } while (number != 0);

  var newNumber = +arr.reverse().join('');
  var zeros = (newNumber) => {
    var count = 0;
    while (newNumber) {
      newNumber = newNumber / 5 | 0;
      count += newNumber;
    }
    return count;
  }
return zeros;
}