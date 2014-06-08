"use strict";

var isDecreasing = require("./isDecreasing").isDecreasing;

exports.testDecreasingSequences = function(test) {
    test.equal(true, isDecreasing([5, 4, 3, 2, 1]));
    test.equal(true, isDecreasing([100, 50, 20]));
    test.done();
};

exports.testNotDecreasingSequences = function(test) {
    test.equal(false, isDecreasing([1, 2, 3]));
    test.equal(false, isDecreasing([1, 1, 1, 1]));
    test.done();
};
