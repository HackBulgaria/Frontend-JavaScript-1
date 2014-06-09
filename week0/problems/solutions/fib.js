/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

"use strict";

var fib = function(n) {
    if(n < 0) {
        throw new RangeError("The number should not be negative.");
    }

    return range(1, n).reduce(function(currentValue) {
        return [currentValue[1], currentValue[0] + currentValue[1]];
    }, [0, 1])[0];
};

var range = function(from, to) {
    return from > to ? [] : [from].concat(range(from + 1, to));
};

exports.fib = fib;
