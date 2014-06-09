/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var primeNumberOfDivisors =
    require('./primeNumberOfDivisors').primeNumberOfDivisors;

exports.testPrimeNumberOfDivisors10 = function (test) {
    test.equals(false, primeNumberOfDivisors(10));
    test.done();
};

exports.testPrimeNumberOfDivisors25 = function (test) {
    test.equals(true, primeNumberOfDivisors(25));
    test.done();
};
