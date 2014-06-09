"use strict";

var sumOfDigits = require("./sumOfDigits").sumOfDigits;

exports.testSumWithSix = function(test) {
    test.equal(6, sumOfDigits(6));
    test.done();
};

exports.testSumWithLongerNumbers = function(test) {
    test.equal(43, sumOfDigits(1325132435356));
    test.equal(6, sumOfDigits(123));
    test.done();
};

exports.testSumWithNegativeNumber = function(test) {
    test.equal(1, sumOfDigits(-10));
    test.done();
};
