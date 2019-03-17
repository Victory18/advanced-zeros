module.exports = function getZerosCount(number, base) {
    var result = 1;
    for (var i = 1; i <= number; i++) {
      result *= i;
    }
    return result.toString(base).length - result.toString(base).split('').reverse().join('').length;

}