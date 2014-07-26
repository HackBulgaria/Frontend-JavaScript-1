/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var listToNumber = require('./listToNumber').listToNumber;

exports.testListToNumber1984 = function (test) {
    test.equals(1984, listToNumber([1, 9, 8, 4]));
    test.done();
};

exports.testListToNumber023 = function (test) {
    test.equals(23, listToNumber([0, 2, 3]));
    test.done();
};

exports.testListToNumberNegative777 = function (test) {
    test.equals(-777, listToNumber(['-', 7, 7, 7]));
    test.done();
};
