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

var sumOfDivisors = function (number) {
  var plus = function (a, b) {
      return a + b;
  };
  return getAllDivisorsOf(Math.abs(number)).reduce(plus, 0);
};

exports.sumOfDivisors = sumOfDivisors;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var sumOfDivisors = function(n) {
  n = Math.abs(n);

  return findDivisors(n).reduce(function(a, b) {
      return a + b;
  }, 0);
};

var findDivisors = function(n) {
  return range(1, n).filter(function(number) {
      return n % number === 0;
  });
};

var range = function(from, to) {
  return from > to ? [] : [from].concat(range(from + 1, to));
};

exports.sumOfDivisors = sumOfDivisors;
