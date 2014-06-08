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
    for (var i = 2; i <= Math.sqrt(number); i += 1) {
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

console.log('the factorization of 99 is ' +
    displayFactorization(primeFactorization(99)));
console.log('the factorization of 12345678 is ' +
    displayFactorization(primeFactorization(12345678)));

exports.primeFactorization = primeFactorization;
