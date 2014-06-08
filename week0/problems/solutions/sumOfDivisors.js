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

console.log('sum of divisors of 10 is: ' + sumOfDivisors(10));

exports.sumOfDivisors = sumOfDivisors;
