"use strict";

var isIncreasing = require("./isIncreasing").isIncreasing;

exports.testIncreasingSequences = function(test) {
    test.equal(true, isIncreasing([1, 2, 3, 4, 5]));
    test.equal(true, isIncreasing([1]));
    test.done();
};

exports.testNotIncreasingSequences = function(test) {
    test.equal(false, isIncreasing([5,6,-10]));
    test.equal(false, isIncreasing([1, 1, 1, 1]));
    test.done();
};
