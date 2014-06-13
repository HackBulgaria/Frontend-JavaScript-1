/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';

var sumOfMinAndMax = require('./sumOfMinAndMax').sumOfMinAndMax;

exports.testSumOfMinAndMax123 = function (test) {
    test.equals(4, sumOfMinAndMax([1, 2, 3]));
    test.done();
};

exports.testSumOfMinAndMaxEmpty = function (test) {
    test.throws(function() {
      sumOfMinAndMax([])
    });
    test.done();
};
