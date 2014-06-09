/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var sumOfMinAndMax = function (arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("The argument should be string");
    }

    if (!arr.every(function (a) {
            return (typeof a === "number");
        })) {
        throw new TypeError("The array elements should be numbers!");
    }

    if (arr.length < 1) {
        throw new TypeError("The array should have at least one element!");
    }
    var sortedArr = arr
        .sort(function (a, b) {
            return (a - b)
                ;
        });
    return (sortedArr[0] + sortedArr[sortedArr.length - 1] );
};

exports.sumOfMinAndMax = sumOfMinAndMax;

