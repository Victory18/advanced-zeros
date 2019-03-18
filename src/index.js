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
var count = 0;
var fact = 0;

for (var i = 1; i <= number; i++) {
  fact = fact * i;
}

var result = fact.toString(base);

var count = result.length - result.split('').reverse(). join('').length;

return count;

}

