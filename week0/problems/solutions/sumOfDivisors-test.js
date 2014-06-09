"use strict";

var sumOfDivisors = require("./sumOfDivisors").sumOfDivisors;

exports.testSumForEigth = function(test) {
    test.equal(15, sumOfDivisors(8));
    test.done();
};

exports.testForSeven = function(test) {
    test.equal(8, sumOfDivisors(7));
    test.done();
};

exports.testForOne = function(test) {
    test.equal(1, sumOfDivisors(1));
    test.done();
};

exports.testForHundred = function(test) {
    test.equal(2340, sumOfDivisors(1000));
    test.done();
};
