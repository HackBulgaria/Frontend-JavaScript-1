/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";

var listToNumber = require("./listToNumber").listToNumber;

exports.testListToNumberThrow = function (test) {
    test.throws = function () {
        listToNumber(123);
    };
    test.done();
};

exports.testListToNumberThrow0 = function (test) {
    test.throws = function () {
        listToNumber([]);
    };
    test.done();
};

exports.testListToNumberThrow1 = function (test) {
    test.throws = function () {
        listToNumber("sdgffg");
    };
    test.done();
};

exports.testListToNumberThrow2 = function (test) {
    test.throws = function () {
        listToNumber([2, "sdf", 3, 8]);
    };
    test.done();
};

exports.testListToNumber1 = function (test) {
    test.equal(123, listToNumber([1, 2, 3]));
    test.done();
};


