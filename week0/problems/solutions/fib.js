// solution here
'use strict';

var fib = function (n) {
    // 1st fibonacci number is 0
    // 2nd fibonacci number is 1, etc...
    var memo = [0, 0, 1],
        nth_fib = function (m) {
            if (memo[m] === undefined) {
                memo[m] = nth_fib(m - 1) + nth_fib(m - 2);
            }
            return memo[m];
        };
    return nth_fib(n);
};

console.log('the 10th fibonacci number is: ' + fib(10));
console.log('the 50th fibonacci number is: ' + fib(50));

exports.fib = fib;
