/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var range = function (from, to) {
  var arr = [];
  while (from <= to) {
      arr.push(from);
      from += 1;
  }
  return arr;
};

var getAllDivisorsOf = function (number) {
  return range(1, number).filter(function (x) {
      return Math.floor(number % x, 10) === 0;
  });
};

var isPrime = function (number) {
  // for is the best in this case
  var i = 0,
      n = Math.sqrt(number);
  for (i = 2; i <= n; i += 1) {
      if (Math.floor(number % i) === 0) {
          return false;
      }
  }
  return number >= 2;
};

var primeNumberOfDivisors = function (number) {
  return isPrime(getAllDivisorsOf(number).length);
};

exports.primeNumberOfDivisors = primeNumberOfDivisors;

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

var primeNumberOfDivisors = function(n) {
    return isPrime(findDivisors(n).length);
};

exports.primeNumberOfDivisors = primeNumberOfDivisors;
