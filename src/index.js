module.exports = function getZerosCount(number, base) {
  function factorial() {
    var result = 1;
    for (var i = 1; i <= number; i++) {
      result *= i;
    }
  return result.toString(base).toString().length - result.toString(base).toString().split('').reverse().join('').length;
  }
}