/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isPrime = function (number) {
    var i = 0,
        n = Math.sqrt(number);
    // for is the best in this case
    for (i = 2; i <= n; i += 1) {
        if (Math.floor(number % i) === 0) {
            return false;
        }
    }
    return number >= 2;
};

console.log('101 is a prime? ' + isPrime(101));
console.log('1 is a prime? ' + isPrime(1));

exports.isPrime = isPrime;
