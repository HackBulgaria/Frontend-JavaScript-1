/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var fib = function (n) {
    if (typeof n !== "number" || n % 1 !== 0 || n < 1) {
        throw new TypeError("The input should be positive integer.")
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