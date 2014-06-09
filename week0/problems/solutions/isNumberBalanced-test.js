"use strict";

var isNumberBalanced = require("./isNumberBalanced").isNumberBalanced;

exports.testBalancedNumbersWithOddLength = function(test) {
    test.equal(true, isNumberBalanced(9));
    test.equal(true, isNumberBalanced(121));
    test.equal(true, isNumberBalanced(1238033));
    test.done();
};

exports.testBalancedNumbersWithEvenLength = function(test) {
    test.equal(true, isNumberBalanced(11));
    test.equal(true, isNumberBalanced(4518));
    test.done();
};

exports.testNotBalancedNumbersWithOddLength = function(test) {
    test.equal(false, isNumberBalanced(28471));
    test.done();
};

exports.testNotBalancedNumbersWithEvenLength = function(test) {
    test.equal(false, isNumberBalanced(13));
    test.done();
};
