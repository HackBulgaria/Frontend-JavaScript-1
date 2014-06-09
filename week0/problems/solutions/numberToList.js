/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var numberToList = function (n) {
    if (typeof n != "number" || n % 1 !== 0 || n < 0) {
        throw new TypeError("The argument should be positive integer.");
    }

    return n
        .toString()
        .split("")
        .map(function (a) {
            return parseInt(a);
        });

};

exports.numberToList = numberToList;