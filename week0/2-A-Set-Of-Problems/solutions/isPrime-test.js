/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isPrime = require('./isPrime').isPrime;

exports.testIsPrime2 = function (test) {
    test.equals(true, isPrime(2));
    test.done();
};

exports.testIsPrime4 = function (test) {
    test.equals(false, isPrime(4));
    test.done();
};

exports.testIsPrime1 = function (test) {
    test.equals(false, isPrime(1));
    test.done();
};

exports.testIsPrime101 = function (test) {
    test.equals(true, isPrime(101));
    test.done();
};
