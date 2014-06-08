/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

"use strict";

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
    return from > to ? [] : [from].concat(range(from + 1, to));
};

var isPrime = function(n) {
    return n < 2 ? false : findDivisors(n).length === 2;
};

exports.primeFactorization = primeFactorization;
