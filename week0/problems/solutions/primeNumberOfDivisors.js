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

console.log('10 has prime number of divisors? ' + primeNumberOfDivisors(10));
console.log('101 has prime number of divisors? ' + primeNumberOfDivisors(101));

exports.primeNumberOfDivisors = primeNumberOfDivisors;
