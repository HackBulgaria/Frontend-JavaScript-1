/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isDecreasing = require('./isDecreasing').isDecreasing;

exports.testIsDecreasing123 = function (test) {
    test.equals(false, isDecreasing([1, 2, 3]));
    test.done();
};

exports.testIsDecreasing321 = function (test) {
    test.equals(true, isDecreasing([3, 2, 1]));
    test.done();
};

exports.testIsDecreasing02358 = function (test) {
    test.equals(false, isDecreasing([0, 2, 3, 5, 8]));
    test.done();
};
