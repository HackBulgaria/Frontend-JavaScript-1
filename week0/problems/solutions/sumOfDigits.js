/*
 * Solution by Daniel Taskoff
 * @github: https://github.com/dtaskoff/
 */

'use strict';


var sumOfDigits = function (number) {
    var sum = 0;
    // counts only digits before the floating point
    number = Math.floor(Math.abs(number));

    while (number > 0) {
        sum += parseInt(number % 10, 10);
        number = parseInt(number / 10, 10);
    }
    return sum;
};

exports.sumOfDigits = sumOfDigits;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var sumOfDigits = function(n) {
    n = Math.abs(n);

    return n
        .toString()
        .split("")
        .map(function(char) {
            return parseInt(char, 10);
        })
        .reduce(function(a, b) {
            return a + b;
        });

};

exports.sumOfDigits = sumOfDigits;
