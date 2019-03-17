module.exports = function getZerosCount(number, base) {
  function factorial() {
    var result = 1;
    for (var i = 1; i <= number; i++) {
      result *= i;
    }

  var withZeros = +result.toString(base);
  var withoutZeros = +withZeros.toString().split('').reverse().join('');
  var zeros = withZeros.toString().length - withoutZeros.toString().length;
  return zeros;
  }
}