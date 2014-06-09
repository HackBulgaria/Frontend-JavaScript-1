/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var listToNumber = function (digits) {
    if (!Array.isArray(digits)) {
        throw new TypeError("The argument should be array.");
    }

    if (!digits.every(function (a) {
            return (typeof a === "number" && a % 1 === 0)
        })) {
        throw new TypeError("Elements of array should be integers.");
    }
    if (digits.length < 1) {
        throw new TypeError("The array should have at least one element.");
    }
    var result = digits.reduce(function (a, b) {
        return a.toString() + b.toString();
    });

    return parseInt(result);
};

exports.listToNumber = listToNumber;
