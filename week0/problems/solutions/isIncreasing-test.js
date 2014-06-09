/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isIncreasing = require('./isIncreasing').isIncreasing;

exports.testIsIncreasing123 = function (test) {
    test.equals(true, isIncreasing([1, 2, 3]));
    test.done();
};

exports.testIsIncreasing1233 = function (test) {
    test.equals(false, isIncreasing([1, 2, 3, 3]));
    test.done();
};

exports.testIsIncreasing02358 = function (test) {
    test.equals(true, isIncreasing([0, 2, 3, 5, 8]));
    test.done();
};
