/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";

var vowelsInAString = require("./vowelsInAString").vowelsInAString;

exports.testVowelsInAStringThrow = function (test) {
    test.throws = function () {
        vowelsInAString([2, 23, 8]);
    };
    test.done();
};

exports.testVowelsInAString = function (test) {
    test.equal(0, vowelsInAString("mhlk"));
    test.done();
};

exports.testVowelsInAString1 = function (test) {
    test.equal(3, vowelsInAString("Javascript"));
    test.done();
};