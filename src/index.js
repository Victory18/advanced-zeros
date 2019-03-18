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
  el = fact % base;
  arr.push(el);
  fact = Math.floor(fact / base);
  } while (fact != 0);

var count = + arr.reverse().join('') - (+arr.join(''));

return count;

}

