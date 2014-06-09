/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";

var forEach = require("./forEach").forEach;

var addOne = function (a) {
    return a + 1;
};
var arr = [1, 2, 3];

exports.testForeachThrow = function (test) {
    test.throws = function () {
        forEach(addOne, "asdfsd");
    };
    test.done();
};

exports.testForEach = function (test) {
    var result = [];
    forEach(function (a) {
        result.push(a + 1);
    }, arr);
    test.deepEqual([2, 3, 4], result);
    test.done();
};

