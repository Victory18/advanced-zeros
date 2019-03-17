module.exports = function getZerosCount(number, base) {
  var arr = [];
  for (var i = 1; i <= number; i++) {
    arr.push[i];
  }

   var zeros = arr.join('').match(/[05]/g).length;

   return zeros;
}