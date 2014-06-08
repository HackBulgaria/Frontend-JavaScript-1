"use strict";

var sumOfMinAndMax = require("./sumOfMinAndMax").sumOfMinAndMax;

exports.testWithLongArray = function(test) {
    test.equal(10, sumOfMinAndMax([1, 2, 3, 4, 5, 6, 8, 9]));
    test.done();
};

exports.testWithNegatives = function(test) {
    test.equal(90, sumOfMinAndMax([-10, 5, 10, 100]));
    test.done();
};

exports.testWithOneValue = function(test) {
    test.equal(2, sumOfMinAndMax([1]));
    test.done();
};
