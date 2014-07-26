/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var numberToList = require('./numberToList').numberToList;

exports.testNumberToList123 = function (test) {
    test.deepEqual([1, 2, 3], numberToList(123));
    test.done();
};

exports.testNumberToList1829 = function (test) {
    test.deepEqual([1, 8, 2, 9], numberToList(1829));
    test.done();
};

exports.testNumberToListNegative777 = function (test) {
    test.deepEqual(["-", 7, 7, 7], numberToList(-777));
    test.done();
};
