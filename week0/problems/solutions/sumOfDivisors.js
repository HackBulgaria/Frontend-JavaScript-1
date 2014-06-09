/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var range = function (n) {
    if (typeof n !== "number" || n % 1 !== 0 || n < 0) {
        throw new TypeError("The input should be positive integer.");
    }
    return Array
        .apply(null,
        {
            length: (n)
        })
        .map(Number.call, Number);
};

var sumOfDivisors = function (n) {
    if (typeof n !== "number" || n % 1 !== 0) {
        throw new TypeError("The input should be integer!");
    }
    n = Math.abs(n);
    // generate array of numbers from 1 to n
    var arr = range(n + 1);
    arr = arr.slice(1);

    return arr
        .filter(function (a) {
            return (n % a === 0);
        })
        .reduce(function (a, b) {
            return a + b;
        });
};

exports.sumOfDivisors = sumOfDivisors;
