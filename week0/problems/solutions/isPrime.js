/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isPrime = function (number) {
  var i = 0,
      n = Math.sqrt(number);
  // for is the best in this case
  for (i = 2; i <= n; i += 1) {
      if (Math.floor(number % i) === 0) {
          return false;
      }
  }
  return number >= 2;
};

exports.isPrime = isPrime;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var isPrime = function(n) {
    return n < 2 ? false : findDivisors(n).length === 2;
};

var findDivisors = function(n) {
    return range(1, n).filter(function(number) {
        return n % number === 0;
    });
};

var range = function(from, to) {
    return from > to ? [] : [from].concat(range(from + 1, to));
};

exports.isPrime = isPrime;
