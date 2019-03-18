module.exports = function getZerosCount(number, base) {
  //var arr = [];
  //var el = 0;

  //while (number != 0) {
    //el = number % base;
    //arr.push(el);
    //number = Math.floor(number / base);
  //} 

  //var newNumber = +arr.reverse().join('');
 
 
//return Math.floor(newNumber / 5);
var arr =[];
var el = 0;
var count = 0;
var fact = 0;

for (var i = 1; i <= number; i++) {
  fact = fact * i;
}

do {
  el = Math.floor(fact) % base;
  arr.push(el);
  fact = fact / base;
  } while (fact != 0);

var newNumber = arr.reverse().join('');

for (var j = 1; j <= newNumber.length; j++) {
  var zero = newNumber.substr(newNumber.length - j);
  if (zero == 0) count++;
}

return count;

}

