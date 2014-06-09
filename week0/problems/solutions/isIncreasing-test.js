 /*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */ 
 
"use strict";

var isIncreasing = require("./isIncreasing").isIncreasing;

exports.testIsIncreasingThrow = function(test) {
    test.throws = function() {
        isIncreasing("sdfdgd");
    };
    test.done();
};

exports.testIsIncreasingEmpty = function(test) {
    test.equal(true, isIncreasing([]));
    test.done();
};

exports.testIsIncreasingArray = function(test) {
    test.equal(true, isIncreasing([1,3,5,6]));
    test.done();
};

exports.testIsIncreasingFalse = function(test) {
    test.equal(false, isIncreasing([1,5,6,3]));
    test.done();
};
