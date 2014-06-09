/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
*/

var sumOfDigits = function (n) {
    if (typeof n !== "number" || n % 1 !== 0) {
        throw new TypeError("The input should be positive integer!");
    }
    return n.toString().split("").map(
        function (a) {
            return parseInt(a);
        }
    ).filter(
        function (a) {
            return !isNaN(a);
        }
    ).reduce(
        function (a, b) {
            return a + b;
        }
    );
};

exports.sumOfDigits = sumOfDigits;