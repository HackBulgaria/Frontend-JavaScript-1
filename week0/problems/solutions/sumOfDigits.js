/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
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

console.log('sum of digits of 1234 is: ' + sumOfDigits(1234));
console.log('sum of digits of -20794 is: ' + sumOfDigits(-20794));
console.log('sum of digits of 42.42 is: ' + sumOfDigits(42.42));

exports.sumOfDigits = sumOfDigits;
