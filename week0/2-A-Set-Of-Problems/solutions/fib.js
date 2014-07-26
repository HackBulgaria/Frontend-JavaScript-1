/*
 * Solution by Daniel Taskoff
 * @github: https://github.com/dtaskoff/
 */

"use strict";

var fib = (function () {
    // 1st fibonacci number is 1
    // 2nd fibonacci number is 1, etc...
    var memo = [0, 1, 1];
    return function nth_fib(m) {
        if (memo[m] === undefined) {
            memo[m] = nth_fib(m - 1) + nth_fib(m - 2);
        }
        return memo[m];
    };
} ( )) ;

exports.fib = fib;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var range = function(from, to) {
    return from > to ? [] : [from].concat(range(from + 1, to));
};

var fib = function(n) {
    if(n < 0) {
        throw new RangeError("The number should not be negative.");
    }

    return range(1, n).reduce(function(currentValue) {
        return [currentValue[1], currentValue[0] + currentValue[1]];
    }, [0, 1])[0];
};

exports.fib = fib;

/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var fib = function (n) {
    if(n === 0) {
        return 0;
    }

    var cur = 1,
        next = 1,
        count = 2;
    while (count < n) {
        next = cur + next;
        cur = next - cur;
        count += 1;
    }
    return next;
};

exports.fib = fib;
