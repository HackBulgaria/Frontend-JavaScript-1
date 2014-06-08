"use strict";

var numberToList = require("./numberToList").numberToList;

exports.testNumbers = function(test) {
    test.deepEqual([1, 2, 3], numberToList(123));
    test.deepEqual([9, 9, 9, 9, 9], numberToList(99999));
    test.deepEqual([1, 2, 3, 0, 2, 3], numberToList(123023));
    test.done();
};
