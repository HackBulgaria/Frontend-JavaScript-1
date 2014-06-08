'use strict';

var sumOfMinAndMax = require('./sumOfMinAndMax').sumOfMinAndMax;

exports.testSumOfMinAndMax123 = function (test) {
    test.equals(4, sumOfMinAndMax([1, 2, 3]));
    test.done();
};

exports.testSumOfMinAndMaxEmpty = function (test) {
    test.equals(0, sumOfMinAndMax([]));
    test.done();
};
