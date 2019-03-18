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
var fact = 1;
var arr =[];
var el = 0;
var count = 0;

for (var i = 1; i <= number; i++) {
  fact = fact * i;
}

while (fact != 0) {
  el = fact % base;
  arr.push(el);
  fact = Math.floor(fact / base);
  } 

var newNumber = arr.reverse().join('');

for (var j = 1; j <= newNumber.length; j++) {
  var zero = newNumber.substr(newNumber.length - j);
  if (zero == 0) count++;
}

return count;

}

