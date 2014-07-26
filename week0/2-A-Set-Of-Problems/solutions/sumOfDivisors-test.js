/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var sumOfDivisors = require('./sumOfDivisors').sumOfDivisors;

exports.testSumOfDivisors0 = function (test) {
    test.equals(0, sumOfDivisors(0));
    test.done();
};

exports.testSumOfDivisors3 = function (test) {
    test.equals(4, sumOfDivisors(3));
    test.done();
};

exports.testSumOfDivisors10 = function (test) {
    test.equals(18, sumOfDivisors(10));
    test.done();
};

exports.testSumOfDivisorsNegative = function (test) {
    test.equals(18, sumOfDivisors(-10));
    test.done();
};
