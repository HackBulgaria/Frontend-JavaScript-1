/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

"use strict";

var sumOfDivisors = function(n) {
    return findDivisors(n).reduce(function(a, b) {
        return a + b;
    });
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
