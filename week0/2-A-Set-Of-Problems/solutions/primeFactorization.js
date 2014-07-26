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

var getAllPrimeDivisorsOf = function (number) {
  return getAllDivisorsOf(number).filter(isPrime);
};

var powerOf = function(divisor, number) {
  var power = 0;
  while (number % divisor === 0) {
    number /= divisor;
    power += 1;
  }
  return power;
};

var primeFactorization = function (number) {
  return getAllPrimeDivisorsOf(number)
      .map(function (divisor) {
        return [divisor, powerOf(divisor, number)];
      });
};

var displayFactorization = function (factorization) {
  return factorization.map(function (tuple) {
    return tuple.join('^');
  }).join(' * ');
};

exports.primeFactorization = primeFactorization;


/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var primeFactorization = function(n) {
  return findPrimeDivisors(n).map(function(divisor) {
    return findHowManyTimesIsDivisor(divisor, n);
  });
};

var findHowManyTimesIsDivisor = function(divisor, n) {
  var count = 0;

  while (n % divisor === 0) {
    count += 1;
    n = parseInt(n / divisor, 10);
  }

  return [divisor, count];
};

var findPrimeDivisors = function(n) {
  return findDivisors(n).filter(isPrime);
};

var findDivisors = function(n) {
  return range(1, n).filter(function(number) {
      return n % number === 0;
  });
};

var range = function(from, to) {
  var result = [];
  while(from <= to) {
    result.push(from);
    from++;
  }
  return result;
};

var isPrime = function(n) {
  return n < 2 ? false : findDivisors(n).length === 2;
};

exports.primeFactorization = primeFactorization;
