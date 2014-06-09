/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */
"use strict";

var stringFormat = require("./stringFormat").stringFormat;

exports.testStringFormatThrow = function (test) {
    test.throws = function () {
        stringFormat(5, "sdgfsd");
    };
    test.done();
};

exports.testStringFormatThrow1 = function (test) {
    test.throws = function () {
        stringFormat(5, [1, 2, 3]);
    };
    test.done();
};
var dict = {
    "lang" : "JavaScript",
    "thing": "language"
};

var str = "{lang} is a very weird {thing} and {key not in the dict}!";
exports.testStringFormat = function (test) {
    test.equal("JavaScript is a very weird language and {key not in the dict}!", stringFormat(str, dict));
    test.done();
};