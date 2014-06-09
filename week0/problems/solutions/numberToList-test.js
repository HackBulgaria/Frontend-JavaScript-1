/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";

var numberToList = require("./numberToList").numberToList;

exports.testNumberToListThrow = function (test) {
    test.throws = function () {
        numberToList("sdfs");
    };
    test.done();
};

exports.testNumberToListThrow1 = function (test) {
    test.throws = function () {
        numberToList([2, 5, 6]);
    };
    test.done();
};

exports.testNumberToListThrow2 = function (test) {
    test.throws = function () {
        numberToList(-5);
    };
    test.done();
};

exports.testNumberToListThrow3 = function (test) {
    test.throws = function () {
        numberToList(3.3);
    };
    test.done();
};

exports.testNumberToList1 = function (test) {
    test.deepEqual([1, 2, 3], numberToList(123));
    test.done();
};
