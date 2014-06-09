/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var throwPositiveIntegerError = function (n) {
    if (typeof n !== "number" || n % 1 !== 0 || n < 0) {
        throw new TypeError("The input should be positive integer.");
    }
};

var throwIntegerError = function (n) {
    if (typeof n !== "number" || n % 1 !== 0) {
        throw new TypeError("The input should be integer.");
    }
};
/**
 * By given positive integer returns array with numbers from 0 to n
 * @param n
 * @returns {Array|*}
 */
var range = function (n) {
    throwPositiveIntegerError(n);
    return Array
        .apply(null,
        {
            length: (n)
        })
        .map(Number.call, Number);
};

var isPrime = function (n) {
    throwIntegerError(n);
    n = Math.abs(n);
    if (n === 2) {
        return true;
    }
    if (n === 1) {
        return false;
    }
    var arr = range(n + 1);
    arr = arr.slice(2);

    var sumOfDivisors = arr
        .filter(function (a) {
            return (n % a === 0);
        }).
        reduce(function (a, b) {
            return a + b;
        });
    if (sumOfDivisors === n) {
        return true;
    }

    return false;
};

exports.isPrime = isPrime;