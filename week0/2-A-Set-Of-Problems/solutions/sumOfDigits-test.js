/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var sumOfDigits = require('./sumOfDigits').sumOfDigits;

exports.testSumOfDigits123 = function (test) {
    test.equal(6, sumOfDigits(123));
    test.done();
};

exports.testSumOfDigits123Negative = function (test) {
    test.equal(6, sumOfDigits(-123));
    test.done();
};

exports.testSumOfDigits0 = function (test) {
    test.equal(0, sumOfDigits(0));
    test.done();
};
